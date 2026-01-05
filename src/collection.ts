/**
 * Collection operations
 */

import type {
    Document,
    Filter,
    FindOptions,
    UpdateOperators,
    InsertResult,
    InsertManyResult,
    UpdateResult,
    DeleteResult,
    ChangeEvent,
    ObjectId
} from './types';
import type { MongoRPCClient } from './client';
import { QueryBuilder } from './query';

/**
 * Collection provides CRUD operations for a MongoDB collection.
 */
export class Collection<T extends Record<string, unknown> = Document> {
    constructor(
        private readonly client: MongoRPCClient,
        readonly database: string,
        readonly name: string
    ) { }

    /**
     * Find documents matching the filter.
     */
    async find(options: FindOptions<T> = {}): Promise<T[]> {
        // TODO: Implement via gRPC ListDocuments
        console.log(`find: ${this.database}.${this.name}`, options);
        return [];
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
        // TODO: Implement via gRPC GetDocument
        console.log(`findById: ${this.database}.${this.name}`, id);
        return null;
    }

    /**
     * Insert a single document.
     */
    async insertOne(doc: Omit<T, '_id'>): Promise<InsertResult> {
        // TODO: Implement via gRPC CreateDocument
        console.log(`insertOne: ${this.database}.${this.name}`, doc);
        return {
            insertedId: '',
            acknowledged: true
        };
    }

    /**
     * Insert multiple documents.
     */
    async insertMany(docs: Omit<T, '_id'>[]): Promise<InsertManyResult> {
        // TODO: Implement via gRPC InsertMany
        console.log(`insertMany: ${this.database}.${this.name}`, docs.length);
        return {
            insertedIds: [],
            insertedCount: docs.length,
            acknowledged: true
        };
    }

    /**
     * Update a single document.
     */
    async updateOne(filter: Filter<T>, update: UpdateOperators<T>): Promise<UpdateResult> {
        // TODO: Implement via gRPC UpdateDocument
        console.log(`updateOne: ${this.database}.${this.name}`, filter, update);
        return {
            matchedCount: 0,
            modifiedCount: 0,
            acknowledged: true
        };
    }

    /**
     * Update a document by ID.
     */
    async updateById(id: ObjectId, update: UpdateOperators<T>): Promise<UpdateResult> {
        return this.updateOne({ _id: id } as Filter<T>, update);
    }

    /**
     * Update multiple documents.
     */
    async updateMany(filter: Filter<T>, update: UpdateOperators<T>): Promise<UpdateResult> {
        // TODO: Implement via gRPC UpdateMany
        console.log(`updateMany: ${this.database}.${this.name}`, filter, update);
        return {
            matchedCount: 0,
            modifiedCount: 0,
            acknowledged: true
        };
    }

    /**
     * Delete a single document.
     */
    async deleteOne(filter: Filter<T>): Promise<DeleteResult> {
        // TODO: Implement via gRPC DeleteDocument
        console.log(`deleteOne: ${this.database}.${this.name}`, filter);
        return {
            deletedCount: 0,
            acknowledged: true
        };
    }

    /**
     * Delete a document by ID.
     */
    async deleteById(id: ObjectId): Promise<DeleteResult> {
        return this.deleteOne({ _id: id } as Filter<T>);
    }

    /**
     * Delete multiple documents.
     */
    async deleteMany(filter: Filter<T>): Promise<DeleteResult> {
        // TODO: Implement via gRPC DeleteMany
        console.log(`deleteMany: ${this.database}.${this.name}`, filter);
        return {
            deletedCount: 0,
            acknowledged: true
        };
    }

    /**
     * Count documents matching the filter.
     */
    async countDocuments(filter: Filter<T> = {}): Promise<number> {
        // TODO: Implement via gRPC CountDocuments
        console.log(`countDocuments: ${this.database}.${this.name}`, filter);
        return 0;
    }

    /**
     * Get distinct values for a field.
     */
    async distinct<K extends keyof T>(field: K, filter: Filter<T> = {}): Promise<T[K][]> {
        // TODO: Implement via gRPC Distinct
        console.log(`distinct: ${this.database}.${this.name}`, field, filter);
        return [];
    }

    /**
     * Run an aggregation pipeline.
     */
    async aggregate<R = T>(pipeline: object[]): Promise<R[]> {
        // TODO: Implement via gRPC Aggregate
        console.log(`aggregate: ${this.database}.${this.name}`, pipeline);
        return [];
    }

    /**
     * Watch for changes (change stream).
     */
    watch(options: { fullDocument?: 'default' | 'updateLookup' } = {}): AsyncIterable<ChangeEvent<T>> {
        const self = this;
        return {
            async *[Symbol.asyncIterator]() {
                // TODO: Implement via gRPC Watch stream
                console.log(`watch: ${self.database}.${self.name}`, options);
            }
        };
    }

    /**
     * Create a query builder for this collection.
     */
    query(): QueryBuilder<T> {
        return new QueryBuilder<T>(this);
    }
}
