/**
 * MongoRPC TypeScript Client
 * A type-safe client for interacting with MongoRPC servers.
 * 
 * Supports both class-based and functional (Firebase-like) APIs.
 * 
 * @example Class-based API
 * ```ts
 * const client = new MongoRPCClient({ address: 'localhost:50051' });
 * const users = client.db('mydb').collection<User>('users');
 * await users.insertOne({ name: 'Alice' });
 * ```
 * 
 * @example Functional API (Firebase-like)
 * ```ts
 * const db = client.db('mydb');
 * const users = collection<User>(db, 'users');
 * await addDoc(users, { name: 'Alice' });
 * const results = await getDocs(query(users, where('age', '>=', 21)));
 * ```
 */

// Core client
export { MongoRPCClient, Database } from './client';
export { Collection } from './collection';

// Types
export * from './types';

// Query builder (class-based)
export { QueryBuilder } from './query';

// Document helpers
export {
    objectId,
    isObjectId,
    toJSON,
    fromJSON,
    cloneDocument,
    mergeDocuments
} from './document';

// Query constraints (Firebase-like)
export {
    where,
    orderBy,
    limit,
    type QueryConstraint,
    type WhereConstraint,
    type OrderByConstraint,
    type LimitConstraint,
    type WhereFilterOp,
} from './constraints';

// Functional helpers (Firebase-like)
export {
    collection,
    getDoc,
    getDocs,
    addDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    query,
    QueryRef,
} from './helpers';

export {
    FieldValue,
    IncrementValue,
    ArrayUnionValue,
    ArrayRemoveValue,
    ServerTimestampValue,
    DeleteValue,
} from './field_value';

// Admin SDK
export {
    MongoRPCAdminClient,
    AdminDatabase,
    AdminCollection,
    type AdminClientConfig,
    type IndexInfo,
    type IndexOptions,
    type CollectionInfo,
    type CollectionOptions,
} from './admin';
