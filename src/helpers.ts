/**
 * Functional helpers following Firebase SDK patterns
 * Provides collection(), doc(), query() functions
 */

import type { MongoRPCClient, Database } from './client';
import { Collection } from './collection';
import type { Document } from './types';
import type { QueryConstraint } from './constraints';
import { constraintsToFilter } from './constraints';

/**
 * Gets a collection reference.
 * @example
 * const users = collection(db, 'users');
 * const posts = collection(users, 'posts'); // subcollection
 */
export function collection<T extends Record<string, unknown> = Document>(
    parent: Database | Collection,
    path: string
): Collection<T> {
    if (parent instanceof Collection) {
        // Subcollection - not yet implemented
        throw new Error('Subcollections not yet supported');
    }
    return parent.collection<T>(path);
}

/**
 * Gets a document by ID.
 * @example
 * const user = await getDoc(collection(db, 'users'), 'user-id');
 */
export async function getDoc<T extends Record<string, unknown> = Document>(
    collectionRef: Collection<T>,
    id: string
): Promise<T | null> {
    return collectionRef.findById(id);
}

/**
 * Gets multiple documents.
 * @example
 * const users = await getDocs(query(collection(db, 'users'), where('active', '==', true)));
 */
export async function getDocs<T extends Record<string, unknown> = Document>(
    collectionRef: Collection<T>
): Promise<T[]> {
    return collectionRef.find();
}

/**
 * Adds a document with auto-generated ID.
 * @example
 * const ref = await addDoc(collection(db, 'users'), { name: 'Alice' });
 */
export async function addDoc<T extends Record<string, unknown> = Document>(
    collectionRef: Collection<T>,
    data: Omit<T, '_id'>
): Promise<{ id: string }> {
    const result = await collectionRef.insertOne(data);
    return { id: result.insertedId };
}

/**
 * Sets a document (create or overwrite).
 * @example
 * await setDoc(collection(db, 'users'), 'user-id', { name: 'Alice' });
 */
export async function setDoc<T extends Record<string, unknown> = Document>(
    collectionRef: Collection<T>,
    id: string,
    data: Omit<T, '_id'>,
    options?: { merge?: boolean }
): Promise<void> {
    if (options?.merge) {
        await collectionRef.updateById(id, { $set: data } as any);
    } else {
        // Full replace - not yet implemented
        await collectionRef.updateById(id, { $set: data } as any);
    }
}

/**
 * Updates a document.
 * @example
 * await updateDoc(collection(db, 'users'), 'user-id', { name: 'Bob' });
 */
export async function updateDoc<T extends Record<string, unknown> = Document>(
    collectionRef: Collection<T>,
    id: string,
    data: Partial<T>
): Promise<void> {
    await collectionRef.updateById(id, { $set: data } as any);
}

/**
 * Deletes a document.
 * @example
 * await deleteDoc(collection(db, 'users'), 'user-id');
 */
export async function deleteDoc<T extends Record<string, unknown> = Document>(
    collectionRef: Collection<T>,
    id: string
): Promise<void> {
    await collectionRef.deleteById(id);
}

/**
 * Creates a query with constraints.
 * @example
 * const q = query(collection(db, 'users'), where('age', '>=', 21), orderBy('name'));
 * const users = await getDocs(q);
 */
export function query<T extends Record<string, unknown> = Document>(
    collectionRef: Collection<T>,
    ...constraints: QueryConstraint[]
): QueryRef<T> {
    return new QueryRef(collectionRef, constraints);
}

/**
 * A query reference with constraints applied.
 */
export class QueryRef<T extends Record<string, unknown> = Document> {
    constructor(
        readonly collection: Collection<T>,
        readonly constraints: QueryConstraint[]
    ) { }

    /**
     * Execute the query.
     */
    async get(): Promise<T[]> {
        const { filter, sort, limit } = constraintsToFilter(this.constraints);
        return this.collection.find({
            filter: filter as any,
            sort: sort as any,
            limit,
        });
    }
}

// Make QueryRef compatible with getDocs
export async function getDocsFromQuery<T extends Record<string, unknown>>(
    queryRef: QueryRef<T>
): Promise<T[]> {
    return queryRef.get();
}
