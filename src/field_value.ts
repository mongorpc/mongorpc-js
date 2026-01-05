/**
 * FieldValue sentinels for special write operations
 * Following Firebase pattern: increment(), arrayUnion(), serverTimestamp()
 */

/** Field value sentinel types */
export type FieldValueType =
    | 'increment'
    | 'arrayUnion'
    | 'arrayRemove'
    | 'serverTimestamp'
    | 'delete';

/** Base field value */
export abstract class FieldValue {
    abstract readonly _type: FieldValueType;

    /** @internal */
    abstract _toMongo(): unknown;

    /**
     * Increment a numeric field.
     * @example
     * update({ views: FieldValue.increment(1) })
     */
    static increment(n: number): IncrementValue {
        return new IncrementValue(n);
    }

    /**
     * Add elements to an array (no duplicates).
     * @example
     * update({ tags: FieldValue.arrayUnion('new-tag') })
     */
    static arrayUnion<T>(...elements: T[]): ArrayUnionValue<T> {
        return new ArrayUnionValue(elements);
    }

    /**
     * Remove elements from an array.
     * @example
     * update({ tags: FieldValue.arrayRemove('old-tag') })
     */
    static arrayRemove<T>(...elements: T[]): ArrayRemoveValue<T> {
        return new ArrayRemoveValue(elements);
    }

    /**
     * Set field to server timestamp.
     * @example
     * update({ updatedAt: FieldValue.serverTimestamp() })
     */
    static serverTimestamp(): ServerTimestampValue {
        return new ServerTimestampValue();
    }

    /**
     * Delete a field.
     * @example
     * update({ obsoleteField: FieldValue.delete() })
     */
    static delete(): DeleteValue {
        return new DeleteValue();
    }
}

/** Increment field value */
export class IncrementValue extends FieldValue {
    readonly _type = 'increment' as const;
    constructor(readonly value: number) {
        super();
    }
    _toMongo() {
        return { $inc: this.value };
    }
}

/** Array union field value */
export class ArrayUnionValue<T> extends FieldValue {
    readonly _type = 'arrayUnion' as const;
    constructor(readonly elements: T[]) {
        super();
    }
    _toMongo() {
        return { $addToSet: { $each: this.elements } };
    }
}

/** Array remove field value */
export class ArrayRemoveValue<T> extends FieldValue {
    readonly _type = 'arrayRemove' as const;
    constructor(readonly elements: T[]) {
        super();
    }
    _toMongo() {
        return { $pullAll: this.elements };
    }
}

/** Server timestamp field value */
export class ServerTimestampValue extends FieldValue {
    readonly _type = 'serverTimestamp' as const;
    _toMongo() {
        return { $currentDate: true };
    }
}

/** Delete field value */
export class DeleteValue extends FieldValue {
    readonly _type = 'delete' as const;
    _toMongo() {
        return { $unset: '' };
    }
}
