/**
 * Core types for MongoRPC client
 */

/** ObjectId represents a MongoDB ObjectId */
export type ObjectId = string;

/** Value represents any MongoDB value */
export type Value =
    | null
    | boolean
    | number
    | string
    | ObjectId
    | Date
    | Buffer
    | Value[]
    | { [key: string]: Value };

/** Document represents a MongoDB document */
export interface Document {
    _id?: ObjectId;
    [key: string]: Value | undefined;
}

/** Filter for querying documents */
export type Filter<T = Document> = {
    [K in keyof T]?: T[K] | FilterOperators<T[K]>;
} & RootFilterOperators<T>;

/** Filter operators */
export interface FilterOperators<T> {
    $eq?: T;
    $ne?: T;
    $gt?: T;
    $gte?: T;
    $lt?: T;
    $lte?: T;
    $in?: T[];
    $nin?: T[];
    $exists?: boolean;
    $regex?: string;
    $options?: string;
}

/** Root filter operators */
export interface RootFilterOperators<T> {
    $and?: Filter<T>[];
    $or?: Filter<T>[];
    $nor?: Filter<T>[];
    $not?: Filter<T>;
}

/** Update operators */
export interface UpdateOperators<T = Document> {
    $set?: Partial<T>;
    $unset?: { [K in keyof T]?: '' };
    $inc?: { [K in keyof T]?: number };
    $min?: Partial<T>;
    $max?: Partial<T>;
    $mul?: { [K in keyof T]?: number };
    $rename?: { [K in keyof T]?: string };
    $push?: { [K in keyof T]?: T[K] extends Array<infer U> ? U | { $each: U[] } : never };
    $pull?: { [K in keyof T]?: T[K] extends Array<infer U> ? U | Filter<U> : never };
    $addToSet?: { [K in keyof T]?: T[K] extends Array<infer U> ? U | { $each: U[] } : never };
}

/** Sort direction */
export type SortDirection = 1 | -1 | 'asc' | 'desc' | 'ascending' | 'descending';

/** Sort specification */
export type Sort<T = Document> = {
    [K in keyof T]?: SortDirection;
} | [keyof T, SortDirection][];

/** Find options */
export interface FindOptions<T = Document> {
    filter?: Filter<T>;
    projection?: { [K in keyof T]?: 0 | 1 };
    sort?: Sort<T>;
    limit?: number;
    skip?: number;
}

/** Insert result */
export interface InsertResult {
    insertedId: ObjectId;
    acknowledged: boolean;
}

/** Insert many result */
export interface InsertManyResult {
    insertedIds: ObjectId[];
    insertedCount: number;
    acknowledged: boolean;
}

/** Update result */
export interface UpdateResult {
    matchedCount: number;
    modifiedCount: number;
    upsertedId?: ObjectId;
    acknowledged: boolean;
}

/** Delete result */
export interface DeleteResult {
    deletedCount: number;
    acknowledged: boolean;
}

/** Change event */
export interface ChangeEvent<T = Document> {
    operationType: 'insert' | 'update' | 'replace' | 'delete' | 'invalidate' | 'drop';
    fullDocument?: T;
    documentKey?: { _id: ObjectId };
    updateDescription?: {
        updatedFields: Partial<T>;
        removedFields: (keyof T)[];
    };
}

/** Client options */
export interface MongoRPCClientOptions {
    /** Server address (host:port) */
    address: string;
    /** Use TLS */
    secure?: boolean;
    /** API key for authentication */
    apiKey?: string;
    /** JWT token for authentication */
    token?: string;
    /** Request timeout in milliseconds */
    timeout?: number;
    /** Retry configuration */
    retry?: {
        maxRetries?: number;
        backoffMs?: number;
    };
}
