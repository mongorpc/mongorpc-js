/**
 * Document helper functions
 */

import type { ObjectId, Document, Value } from './types';

/**
 * Generate a new ObjectId-like string.
 */
export function objectId(): ObjectId {
    const timestamp = Math.floor(Date.now() / 1000).toString(16).padStart(8, '0');
    const random = Array.from({ length: 16 }, () =>
        Math.floor(Math.random() * 16).toString(16)
    ).join('');
    return timestamp + random;
}

/**
 * Check if a value is a valid ObjectId format.
 */
export function isObjectId(value: unknown): value is ObjectId {
    if (typeof value !== 'string') return false;
    return /^[0-9a-fA-F]{24}$/.test(value);
}

/**
 * Convert a document to JSON-safe format.
 */
export function toJSON<T extends Document>(doc: T): Record<string, unknown> {
    const result: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(doc)) {
        result[key] = valueToJSON(value);
    }

    return result;
}

/**
 * Convert a value to JSON-safe format.
 */
function valueToJSON(value: Value | undefined): unknown {
    if (value === null || value === undefined) {
        return null;
    }

    if (value instanceof Date) {
        return { $date: value.toISOString() };
    }

    if (value instanceof Buffer) {
        return { $binary: value.toString('base64') };
    }

    if (Array.isArray(value)) {
        return value.map(valueToJSON);
    }

    if (typeof value === 'object') {
        const result: Record<string, unknown> = {};
        for (const [k, v] of Object.entries(value)) {
            result[k] = valueToJSON(v as Value);
        }
        return result;
    }

    return value;
}

/**
 * Parse JSON to document format.
 */
export function fromJSON<T extends Document>(json: Record<string, unknown>): T {
    const result: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(json)) {
        result[key] = valueFromJSON(value);
    }

    return result as T;
}

/**
 * Parse JSON value to document value.
 */
function valueFromJSON(value: unknown): Value {
    if (value === null || value === undefined) {
        return null;
    }

    if (Array.isArray(value)) {
        return value.map(valueFromJSON);
    }

    if (typeof value === 'object' && value !== null) {
        const obj = value as Record<string, unknown>;

        // Check for special types
        if ('$date' in obj && typeof obj.$date === 'string') {
            return new Date(obj.$date);
        }

        if ('$binary' in obj && typeof obj.$binary === 'string') {
            return Buffer.from(obj.$binary, 'base64');
        }

        // Regular object
        const result: Record<string, Value> = {};
        for (const [k, v] of Object.entries(obj)) {
            result[k] = valueFromJSON(v);
        }
        return result;
    }

    return value as Value;
}

/**
 * Deep clone a document.
 */
export function cloneDocument<T extends Document>(doc: T): T {
    return fromJSON<T>(toJSON(doc));
}

/**
 * Merge documents (shallow).
 */
export function mergeDocuments<T extends Document>(...docs: Partial<T>[]): T {
    return Object.assign({}, ...docs) as T;
}
