/**
 * Query constraints for composable queries
 * Following Firebase SDK pattern: query(collection, where('age', '>', 21), orderBy('name'))
 */

import type { Filter, SortDirection, Document } from './types';

/** Query constraint types */
export type QueryConstraintType = 'where' | 'orderBy' | 'limit' | 'startAt' | 'endAt';

/** Base query constraint */
export interface QueryConstraint {
    readonly type: QueryConstraintType;
}

/** Where filter constraint */
export interface WhereConstraint extends QueryConstraint {
    readonly type: 'where';
    readonly field: string;
    readonly op: WhereFilterOp;
    readonly value: unknown;
}

/** Order by constraint */
export interface OrderByConstraint extends QueryConstraint {
    readonly type: 'orderBy';
    readonly field: string;
    readonly direction: 'asc' | 'desc';
}

/** Limit constraint */
export interface LimitConstraint extends QueryConstraint {
    readonly type: 'limit';
    readonly count: number;
}

/** Where filter operators */
export type WhereFilterOp =
    | '==' | '!='
    | '<' | '<=' | '>' | '>='
    | 'in' | 'not-in'
    | 'array-contains' | 'array-contains-any';

/**
 * Creates a filter constraint.
 * @example
 * where('age', '>=', 21)
 * where('status', 'in', ['active', 'pending'])
 */
export function where<T = unknown>(
    field: string,
    op: WhereFilterOp,
    value: T
): WhereConstraint {
    return { type: 'where', field, op, value };
}

/**
 * Creates an ascending order constraint.
 * @example
 * orderBy('createdAt')
 */
export function orderBy(field: string, direction: 'asc' | 'desc' = 'asc'): OrderByConstraint {
    return { type: 'orderBy', field, direction };
}

/**
 * Creates a limit constraint.
 * @example
 * limit(10)
 */
export function limit(count: number): LimitConstraint {
    return { type: 'limit', count };
}

/**
 * Converts constraints to a filter object.
 */
export function constraintsToFilter(constraints: QueryConstraint[]): {
    filter: Record<string, unknown>;
    sort: Record<string, SortDirection>;
    limit?: number;
} {
    const filter: Record<string, unknown> = {};
    const sort: Record<string, SortDirection> = {};
    let limitValue: number | undefined;

    for (const c of constraints) {
        switch (c.type) {
            case 'where': {
                const w = c as WhereConstraint;
                const mongoOp = whereOpToMongo(w.op);
                if (mongoOp === '$eq') {
                    filter[w.field] = w.value;
                } else {
                    filter[w.field] = { [mongoOp]: w.value };
                }
                break;
            }
            case 'orderBy': {
                const o = c as OrderByConstraint;
                sort[o.field] = o.direction === 'asc' ? 1 : -1;
                break;
            }
            case 'limit': {
                limitValue = (c as LimitConstraint).count;
                break;
            }
        }
    }

    return { filter, sort, limit: limitValue };
}

function whereOpToMongo(op: WhereFilterOp): string {
    const map: Record<WhereFilterOp, string> = {
        '==': '$eq',
        '!=': '$ne',
        '<': '$lt',
        '<=': '$lte',
        '>': '$gt',
        '>=': '$gte',
        'in': '$in',
        'not-in': '$nin',
        'array-contains': '$elemMatch',
        'array-contains-any': '$in',
    };
    return map[op] || '$eq';
}
