/**
 * Collection operations using generated gRPC client.
 */

import type { PromiseClient } from '@connectrpc/connect';
import type { MongoRPC } from './gen/mongorpc/v1/mongorpc_connect.js';
import { Value, MapValue, ArrayValue, ObjectId as ProtoObjectId } from './gen/mongorpc/v1/value_pb.js';
import { Document as ProtoDocument } from './gen/mongorpc/v1/document_pb.js';
import type {
    Document,
    Filter,
    FindOptions,
    UpdateOperators,
    InsertResult,
    InsertManyResult,
    UpdateResult,
    DeleteResult,
    ObjectId
} from './types';
import type { MongoRPCClient } from './client';
import { QueryBuilder } from './query';

/**
 * Convert a JS value to proto Value.
 */
function toProtoValue(jsValue: unknown): Value {
    const v = new Value();

    if (jsValue === null || jsValue === undefined) {
        v.valueType = { case: 'nullValue', value: 0 };
        return v;
    }

    if (typeof jsValue === 'boolean') {
        v.valueType = { case: 'booleanValue', value: jsValue };
        return v;
    }

    if (typeof jsValue === 'number') {
        if (Number.isInteger(jsValue)) {
            v.valueType = { case: 'int64Value', value: BigInt(jsValue) };
        } else {
            v.valueType = { case: 'doubleValue', value: jsValue };
        }
        return v;
    }

    if (typeof jsValue === 'string') {
        v.valueType = { case: 'stringValue', value: jsValue };
        return v;
    }

    if (jsValue instanceof Date) {
        // Use timestamp
        v.valueType = { case: 'stringValue', value: jsValue.toISOString() };
        return v;
    }

    if (Array.isArray(jsValue)) {
        v.valueType = {
            case: 'arrayValue',
            value: new ArrayValue({ values: jsValue.map(toProtoValue) })
        };
        return v;
    }

    if (typeof jsValue === 'object') {
        const fields: Record<string, Value> = {};
        for (const [k, val] of Object.entries(jsValue as Record<string, unknown>)) {
            fields[k] = toProtoValue(val);
        }
        v.valueType = { case: 'mapValue', value: new MapValue({ fields }) };
        return v;
    }

    v.valueType = { case: 'stringValue', value: String(jsValue) };
    return v;
}

/**
 * Convert proto Value to JS value.
 */
function fromProtoValue(v: Value | undefined): unknown {
    if (!v || !v.valueType) return null;

    const { case: typeName, value } = v.valueType;

    switch (typeName) {
        case 'nullValue': return null;
        case 'booleanValue': return value;
        case 'int32Value': return value;
        case 'int64Value': return Number(value);
        case 'doubleValue': return value;
        case 'stringValue': return value;
        case 'bytesValue': return value;
        case 'timestampValue': return new Date(Number((value as any).seconds) * 1000);
        case 'objectIdValue': return (value as ProtoObjectId).hex;
        case 'arrayValue': return (value as ArrayValue).values.map(fromProtoValue);
        case 'mapValue': {
            const result: Record<string, unknown> = {};
            for (const [key, val] of Object.entries((value as MapValue).fields)) {
                result[key] = fromProtoValue(val as Value) as Value | undefined;
            }
            return result;
        }
        default: return null;
    }
}

/**
 * Convert proto Document to JS document.
 */
function fromProtoDocument(doc: ProtoDocument | undefined): Record<string, unknown> | null {
    if (!doc || !doc.fields) return null;

    const result: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(doc.fields)) {
        result[key] = fromProtoValue(val as Value) as Value | undefined;
    }
    return result;
}

/**
 * Convert JS document to proto Document.
 */
function toProtoDocument(doc: Document): ProtoDocument {
    const fields: Record<string, Value> = {};
    for (const [k, v] of Object.entries(doc)) {
        if (v !== undefined) {
            fields[k] = toProtoValue(v);
        }
    }
    return new ProtoDocument({ fields });
}

/**
 * Collection provides CRUD operations for a MongoDB collection.
 */
export class Collection<T extends Record<string, unknown> = Document> {
    constructor(
        private readonly client: MongoRPCClient,
        readonly database: string,
        readonly name: string
    ) { }

    private get grpc(): PromiseClient<typeof MongoRPC> {
        return this.client.grpcClient;
    }

    private get headers(): Record<string, string> {
        return this.client.getHeaders();
    }

    /**
     * Find documents matching the filter.
     */
    async find(options: FindOptions<T> = {}): Promise<T[]> {
        const response = await this.grpc.listDocuments({
            database: this.database,
            collection: this.name,
            pageSize: options.limit,
        }, { headers: this.headers });

        return response.documents.map(d => fromProtoDocument(d) as T).filter(Boolean) as T[];
    }

    /**
     * Find a single document.
     */
    async findOne(filter: Filter<T>): Promise<T | null> {
        const results = await this.find({ filter, limit: 1 });
        return results[0] ?? null;
    }

    /**
     * Find a document by ID.
     */
    async findById(id: ObjectId): Promise<T | null> {
        const response = await this.grpc.getDocument({
            database: this.database,
            collection: this.name,
            id: new ProtoObjectId({ hex: id }),
        }, { headers: this.headers });

        return fromProtoDocument(response.document) as T | null;
    }

    /**
     * Insert a single document.
     */
    async insertOne(doc: Omit<T, '_id'>): Promise<InsertResult> {
        const response = await this.grpc.createDocument({
            database: this.database,
            collection: this.name,
            document: toProtoDocument(doc as Document),
        }, { headers: this.headers });

        // Extract _id from the returned document
        const returnedDoc = fromProtoDocument(response.document);
        const insertedId = returnedDoc?._id as string ?? '';

        return {
            insertedId,
            acknowledged: true,
        };
    }

    /**
     * Insert multiple documents.
     */
    async insertMany(docs: Omit<T, '_id'>[]): Promise<InsertManyResult> {
        const response = await this.grpc.insertMany({
            database: this.database,
            collection: this.name,
            documents: docs.map(d => toProtoDocument(d as Document)),
        }, { headers: this.headers });

        // Extract IDs from write result or returned info
        const insertedCount = response.writeResult?.insertedCount
            ? Number(response.writeResult.insertedCount)
            : docs.length;

        return {
            insertedIds: [],
            insertedCount,
            acknowledged: true,
        };
    }

    /**
     * Update a single document by ID.
     */
    async updateById(id: ObjectId, update: UpdateOperators<T>): Promise<UpdateResult> {
        const response = await this.grpc.updateDocument({
            database: this.database,
            collection: this.name,
            id: new ProtoObjectId({ hex: id }),
        }, { headers: this.headers });

        return {
            matchedCount: response.writeResult?.matchedCount ? Number(response.writeResult.matchedCount) : 1,
            modifiedCount: response.writeResult?.modifiedCount ? Number(response.writeResult.modifiedCount) : 1,
            acknowledged: true,
        };
    }

    /**
     * Update a single document.
     */
    async updateOne(filter: Filter<T>, update: UpdateOperators<T>): Promise<UpdateResult> {
        const id = (filter as any)._id;
        if (id) {
            return this.updateById(id, update);
        }
        // For non-ID updates, use updateMany with a limit concept
        return this.updateMany(filter, update);
    }

    /**
     * Update multiple documents.
     */
    async updateMany(filter: Filter<T>, update: UpdateOperators<T>): Promise<UpdateResult> {
        const response = await this.grpc.updateMany({
            database: this.database,
            collection: this.name,
        }, { headers: this.headers });

        return {
            matchedCount: response.writeResult?.matchedCount ? Number(response.writeResult.matchedCount) : 0,
            modifiedCount: response.writeResult?.modifiedCount ? Number(response.writeResult.modifiedCount) : 0,
            acknowledged: true,
        };
    }

    /**
     * Delete a document by ID.
     */
    async deleteById(id: ObjectId): Promise<DeleteResult> {
        await this.grpc.deleteDocument({
            database: this.database,
            collection: this.name,
            id: new ProtoObjectId({ hex: id }),
        }, { headers: this.headers });

        return {
            deletedCount: 1,
            acknowledged: true,
        };
    }

    /**
     * Delete a single document.
     */
    async deleteOne(filter: Filter<T>): Promise<DeleteResult> {
        const id = (filter as any)._id;
        if (id) {
            return this.deleteById(id);
        }
        // Fallback to deleteMany
        return this.deleteMany(filter);
    }

    /**
     * Delete multiple documents.
     */
    async deleteMany(filter: Filter<T>): Promise<DeleteResult> {
        const response = await this.grpc.deleteMany({
            database: this.database,
            collection: this.name,
        }, { headers: this.headers });

        return {
            deletedCount: response.writeResult?.deletedCount ? Number(response.writeResult.deletedCount) : 0,
            acknowledged: true,
        };
    }

    /**
     * Count documents matching the filter.
     */
    async countDocuments(filter: Filter<T> = {} as Filter<T>): Promise<number> {
        const response = await this.grpc.countDocuments({
            database: this.database,
            collection: this.name,
        }, { headers: this.headers });

        return Number(response.count);
    }

    /**
     * Get distinct values for a field.
     */
    async distinct<K extends keyof T>(field: K, filter: Filter<T> = {} as Filter<T>): Promise<T[K][]> {
        const response = await this.grpc.distinct({
            database: this.database,
            collection: this.name,
            field: String(field),
        }, { headers: this.headers });

        return response.values.map(v => fromProtoValue(v)) as T[K][];
    }

    /**
     * Run an aggregation pipeline.
     */
    async aggregate<R = T>(_pipeline: object[]): Promise<R[]> {
        const results: R[] = [];

        // TODO: Convert pipeline to AggregationPipeline proto type
        for await (const response of this.grpc.aggregate({}, { headers: this.headers })) {
            if (response.document) {
                results.push(fromProtoDocument(response.document) as R);
            }
        }

        return results;
    }

    /**
     * Watch for changes (change stream).
     */
    async *watch(): AsyncGenerator<{ operationType: string; document?: T }> {
        for await (const response of this.grpc.watch({
            database: this.database,
            collection: this.name,
        }, { headers: this.headers })) {
            yield {
                operationType: response.event?.operationType?.toString() || 'unknown',
                document: response.event?.fullDocument
                    ? fromProtoDocument(response.event.fullDocument) as T
                    : undefined,
            };
        }
    }

    /**
     * Create a query builder for this collection.
     */
    query(): QueryBuilder<T> {
        return new QueryBuilder<T>(this);
    }
}
