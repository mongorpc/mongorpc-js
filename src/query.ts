/**
 * Fluent Query Builder
 */

import type { Filter, Sort, Document } from './types';
import type { Collection } from './collection';

/**
 * QueryBuilder provides a fluent interface for building queries.
 */
export class QueryBuilder<T extends Record<string, unknown> = Document> {
    private _filter: Filter<T> = {};
    private _projection: Partial<Record<keyof T, 0 | 1>> = {};
    private _sort: Sort<T> = {};
    private _limit?: number;
    private _skip?: number;

    constructor(private readonly collection: Collection<T>) { }

    /**
     * Add equality filter.
     */
    where<K extends keyof T>(field: K, value: T[K]): this {
        (this._filter as any)[field] = value;
        return this;
    }

    /**
     * Add filter with operator.
     */
    filter(filter: Filter<T>): this {
        this._filter = { ...this._filter, ...filter };
        return this;
    }

    /**
     * Equal to.
     */
    eq<K extends keyof T>(field: K, value: T[K]): this {
        (this._filter as any)[field] = { $eq: value };
        return this;
    }

    /**
     * Not equal to.
     */
    ne<K extends keyof T>(field: K, value: T[K]): this {
        (this._filter as any)[field] = { $ne: value };
        return this;
    }

    /**
     * Greater than.
     */
    gt<K extends keyof T>(field: K, value: T[K]): this {
        (this._filter as any)[field] = { $gt: value };
        return this;
    }

    /**
     * Greater than or equal.
     */
    gte<K extends keyof T>(field: K, value: T[K]): this {
        (this._filter as any)[field] = { $gte: value };
        return this;
    }

    /**
     * Less than.
     */
    lt<K extends keyof T>(field: K, value: T[K]): this {
        (this._filter as any)[field] = { $lt: value };
        return this;
    }

    /**
     * Less than or equal.
     */
    lte<K extends keyof T>(field: K, value: T[K]): this {
        (this._filter as any)[field] = { $lte: value };
        return this;
    }

    /**
     * In array.
     */
    in<K extends keyof T>(field: K, values: T[K][]): this {
        (this._filter as any)[field] = { $in: values };
        return this;
    }

    /**
     * Not in array.
     */
    nin<K extends keyof T>(field: K, values: T[K][]): this {
        (this._filter as any)[field] = { $nin: values };
        return this;
    }

    /**
     * Regex match.
     */
    regex<K extends keyof T>(field: K, pattern: string, options?: string): this {
        (this._filter as any)[field] = { $regex: pattern, $options: options };
        return this;
    }

    /**
     * Field exists.
     */
    exists<K extends keyof T>(field: K, exists = true): this {
        (this._filter as any)[field] = { $exists: exists };
        return this;
    }

    /**
     * Select fields to include.
     */
    select(...fields: (keyof T)[]): this {
        for (const f of fields) {
            this._projection[f] = 1;
        }
        return this;
    }

    /**
     * Exclude fields.
     */
    exclude(...fields: (keyof T)[]): this {
        for (const f of fields) {
            this._projection[f] = 0;
        }
        return this;
    }

    /**
     * Sort ascending.
     */
    sortAsc<K extends keyof T>(field: K): this {
        (this._sort as any)[field] = 1;
        return this;
    }

    /**
     * Sort descending.
     */
    sortDesc<K extends keyof T>(field: K): this {
        (this._sort as any)[field] = -1;
        return this;
    }

    /**
     * Limit results.
     */
    limit(n: number): this {
        this._limit = n;
        return this;
    }

    /**
     * Skip results.
     */
    skip(n: number): this {
        this._skip = n;
        return this;
    }

    /**
     * Execute and return all documents.
     */
    async toArray(): Promise<T[]> {
        return this.collection.find({
            filter: this._filter,
            projection: this._projection,
            sort: this._sort,
            limit: this._limit,
            skip: this._skip,
        });
    }

    /**
     * Execute and return first document.
     */
    async first(): Promise<T | null> {
        const results = await this.limit(1).toArray();
        return results[0] ?? null;
    }

    /**
     * Execute and return count.
     */
    async count(): Promise<number> {
        return this.collection.countDocuments(this._filter);
    }
}
