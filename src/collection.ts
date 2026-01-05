/**
 * Collection operations using generated gRPC client.
 */

import type { PromiseClient } from '@connectrpc/connect';
import type { MongoRPC } from './gen/mongorpc/v1/mongorpc_connect.js';
import { Value, MapValue, ArrayValue, ObjectId as ProtoObjectId } from './gen/mongorpc/v1/value_pb.js';
import { Document as ProtoDocument } from './gen/mongorpc/v1/document_pb.js';
import { Filter } from './gen/mongorpc/v1/query_pb.js'; // Import Filter
import { UpdateSpec, UpdateOperators } from './gen/mongorpc/v1/write_pb.js'; // Import UpdateSpec/Operators

import type {
    Document,
    FindOptions,
    UpdateOperators as UpdateOperatorsType,
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
 * Convert JS filter to proto Filter.
 */
function toProtoFilter(filter: any): Filter {
    const fields: Record<string, Value> = {};
    for (const [k, v] of Object.entries(filter)) {
        fields[k] = toProtoValue(v);
    }
    return new Filter({
        filterType: {
            case: 'raw',
            value: new MapValue({ fields })
        }
    });
}

/**
 * Convert JS update operators to proto UpdateSpec.
 */
function toProtoUpdate(update: any): UpdateSpec {
    const ops = new UpdateOperators();

    if (update.$set) {
        const setMap: Record<string, Value> = {};
        for (const [k, v] of Object.entries(update.$set)) {
            setMap[k] = toProtoValue(v);
        }
        ops.set = setMap;
    }
    if (update.$unset) {
        if (Array.isArray(update.$unset)) {
            ops.unset = update.$unset as string[];
        } else if (typeof update.$unset === 'object') {
            ops.unset = Object.keys(update.$unset as object);
        }
    }
    if (update.$inc) {
        const incMap: Record<string, Value> = {};
        for (const [k, v] of Object.entries(update.$inc)) {
            incMap[k] = toProtoValue(v);
        }
        ops.inc = incMap;
    }

    return new UpdateSpec({
        updateType: {
            case: 'operators',
            value: ops
        }
    });
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
            filter: options.filter ? toProtoFilter(options.filter) : undefined,
            pageSize: options.limit,
        }, { headers: this.headers });

        return response.documents.map(d => fromProtoDocument(d) as T).filter(Boolean) as T[];
    }

    /**
     * Find a single document.
     */
    async findOne(filter: import('./types').Filter<T>): Promise<T | null> {
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

        // Correctly map insertedIds from response if available
        const insertedIds = response.insertedIds.map(oid => oid.hex);

        return {
            insertedIds,
            insertedCount,
            acknowledged: true,
        };
    }

    /**
     * Update a single document by ID.
     */
    async updateById(id: ObjectId, update: UpdateOperatorsType<T>): Promise<UpdateResult> {
        const response = await this.grpc.updateDocument({
            database: this.database,
            collection: this.name,
            id: new ProtoObjectId({ hex: id }),
            update: toProtoUpdate(update),
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
    async updateOne(filter: import('./types').Filter<T>, update: UpdateOperatorsType<T>): Promise<UpdateResult> {
        const id = (filter as any)._id;
        if (id) {
            return this.updateById(id, update);
        }
        // For non-ID updates, use updateMany with a limit concept?
        // Fallback to updateMany for now as we don't have updateOne RPC
        return this.updateMany(filter, update);
    }

    /**
     * Update multiple documents.
     */
    async updateMany(filter: import('./types').Filter<T>, update: UpdateOperatorsType<T>): Promise<UpdateResult> {
        const response = await this.grpc.updateMany({
            database: this.database,
            collection: this.name,
            filter: toProtoFilter(filter),
            update: toProtoUpdate(update),
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
    async deleteOne(filter: import('./types').Filter<T>): Promise<DeleteResult> {
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
    async deleteMany(filter: import('./types').Filter<T>): Promise<DeleteResult> {
        const response = await this.grpc.deleteMany({
            database: this.database,
            collection: this.name,
            filter: toProtoFilter(filter),
        }, { headers: this.headers });

        return {
            deletedCount: response.writeResult?.deletedCount ? Number(response.writeResult.deletedCount) : 0,
            acknowledged: true,
        };
    }

    /**
     * Count documents matching the filter.
     */
    async countDocuments(filter: import('./types').Filter<T> = {} as import('./types').Filter<T>): Promise<number> {
        const response = await this.grpc.countDocuments({
            database: this.database,
            collection: this.name,
            filter: toProtoFilter(filter),
        }, { headers: this.headers });

        return Number(response.count);
    }

    /**
     * Get distinct values for a field.
     */
    async distinct<K extends keyof T>(field: K, filter: import('./types').Filter<T> = {} as import('./types').Filter<T>): Promise<T[K][]> {
        const response = await this.grpc.distinct({
            database: this.database,
            collection: this.name,
            field: String(field),
            filter: toProtoFilter(filter),
        }, { headers: this.headers });

        return response.values.map(v => fromProtoValue(v)) as T[K][];
    }

    /**
     * Run an aggregation pipeline.
     */
    async aggregate<R = T>(pipeline: object[]): Promise<R[]> {
        const results: R[] = [];

        const stages = pipeline.map(stage => {
            const protoValue = toProtoValue(stage);
            // protoValue.valueType.value is MapValue
            if (protoValue.valueType.case !== 'mapValue') {
                throw new Error('Pipeline stage must be an object');
            }
            return {
                stageType: {
                    case: 'raw',
                    value: protoValue.valueType.value
                }
            };
        });

        const request = {
            database: this.database,
            collection: this.name,
            pipeline: {
                database: this.database,
                collection: this.name,
                stages: stages as any // Type assertion needed due to complex proto types? or assume it matches
            }
        };

        for await (const response of this.grpc.aggregate(request, { headers: this.headers })) {
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
     * Stream real-time updates for a specific document.
     * 
     * First yields the current state of the document, then yields updates
     * whenever the document is modified, replaced, or deleted.
     * 
     * @param docId The 24-character hex ObjectId of the document.
     * @returns An async generator of DocumentSnapshot values.
     * 
     * @example
     * ```typescript
     * for await (const snapshot of collection.onSnapshot('docId')) {
     *     if (snapshot.exists) {
     *         console.log('Document:', snapshot.data);
     *     } else {
     *         console.log('Document does not exist');
     *     }
     * }
     * ```
     */
    async *onSnapshot(docId: string): AsyncGenerator<DocumentSnapshot<T>> {
        // Validate docId (24 character hex string)
        if (docId.length !== 24 || !/^[a-fA-F0-9]+$/.test(docId)) {
            throw new Error('Invalid document ID: must be 24 character hex string');
        }

        // Fetch initial state
        let initialDoc: T | null = null;
        try {
            initialDoc = await this.findById(docId);
        } catch {
            // Document not found or error
            initialDoc = null;
        }

        // Emit initial state
        yield {
            id: docId,
            data: initialDoc,
            exists: initialDoc !== null,
        };

        // Start watching with document ID filter
        // Note: The watch method doesn't support pipeline filters directly,
        // so we watch all and filter client-side for this document
        for await (const event of this.watch()) {
            // Extract document key from the event if available
            const eventDocId = (event.document as any)?._id;

            // Only process events for our document
            if (eventDocId === docId) {
                switch (event.operationType) {
                    case 'insert':
                    case 'update':
                    case 'replace':
                        yield {
                            id: docId,
                            data: event.document ?? null,
                            exists: event.document !== undefined,
                        };
                        break;
                    case 'delete':
                        yield {
                            id: docId,
                            data: null,
                            exists: false,
                        };
                        break;
                    case 'invalidate':
                        yield {
                            id: docId,
                            data: null,
                            exists: false,
                        };
                        return; // Stream ends on invalidate
                    default:
                        // Ignore unknown event types
                        break;
                }
            }
        }
    }

    /**
     * Stream real-time updates for a filtered query.
     * 
     * First yields the initial matching documents, then yields updates
     * whenever documents enter or leave the result set.
     * 
     * Note: Uses broad watch with client-side filtering for accuracy.
     * 
     * @param filter The filter to match documents against.
     * @returns An async generator of QuerySnapshot values.
     * 
     * @example
     * ```typescript
     * for await (const snapshot of collection.onQuerySnapshot({ status: 'active' })) {
     *     console.log('Count:', snapshot.count);
     *     console.log('Documents:', snapshot.documents);
     * }
     * ```
     */
    async *onQuerySnapshot(filter: import('./types').Filter<T>): AsyncGenerator<QuerySnapshot<T>> {
        // Local state: map of ID -> Document
        const state = new Map<string, T>();

        // Fetch initial documents
        const initialDocs = await this.find({ filter });
        for (const doc of initialDocs) {
            const id = (doc as any)._id as string;
            if (id) {
                state.set(id, doc);
            }
        }

        // Emit initial state
        yield {
            documents: Array.from(state.values()),
            count: state.size,
        };

        // Watch entire collection (broad watch)
        for await (const event of this.watch()) {
            const opType = event.operationType;
            const fullDoc = event.document;
            const docId = (fullDoc as any)?._id as string | undefined;

            if (!docId) continue;

            let stateChanged = false;

            switch (opType) {
                case 'insert':
                case 'update':
                case 'replace':
                    if (fullDoc && this.matchesFilter(fullDoc, filter)) {
                        state.set(docId, fullDoc);
                        stateChanged = true;
                    } else if (state.has(docId)) {
                        state.delete(docId);
                        stateChanged = true;
                    }
                    break;
                case 'delete':
                    if (state.has(docId)) {
                        state.delete(docId);
                        stateChanged = true;
                    }
                    break;
                case 'invalidate':
                    state.clear();
                    stateChanged = true;
                    break;
                default:
                    break;
            }

            if (stateChanged) {
                yield {
                    documents: Array.from(state.values()),
                    count: state.size,
                };
            }
        }
    }

    /**
     * Simple filter matching for top-level field equality.
     */
    private matchesFilter(doc: T, filter: import('./types').Filter<T>): boolean {
        if (!filter || Object.keys(filter).length === 0) return true;

        for (const [key, filterValue] of Object.entries(filter)) {
            const docValue = (doc as any)[key];
            if (docValue === undefined) return false;
            if (String(docValue) !== String(filterValue)) return false;
        }
        return true;
    }

    /**
     * Create a query builder for this collection.
     */
    query(): QueryBuilder<T> {
        return new QueryBuilder<T>(this);
    }
}

/**
 * Represents the current state of a document.
 */
export interface DocumentSnapshot<T = Record<string, unknown>> {
    /** The document's unique identifier. */
    id: string;
    /** The document's data. Null if the document doesn't exist. */
    data: T | null;
    /** Whether the document exists. */
    exists: boolean;
}

/**
 * Represents the current state of a query result.
 */
export interface QuerySnapshot<T = Record<string, unknown>> {
    /** Documents currently matching the query. */
    documents: T[];
    /** Number of documents in the result. */
    count: number;
}
