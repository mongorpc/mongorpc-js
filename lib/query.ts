import { Database } from "./database";
import { DecodeValue } from "./decoder";
import { EncodeValue } from "./encoder";
import { MongoRPCPromiseClient } from "./mongorpc/mongorpc_grpc_web_pb";
import { QueryDocumentsRequest } from "./mongorpc/mongorpc_pb";

export enum SortOrder {
  ASCENDING = 1,
  DESCENDING = -1,
}

interface Dictionary<T> {
  [Key: string]: T;
}

export type QueryEqualTo = { field: string; equalTo: any };
export type QueryNotEqualTo = { field: string; notEqualTo: any };
export type QueryGreaterThan = { field: string; greaterThan: any };
export type QueryGreaterThanOrEqualTo = {
  field: string;
  greaterThanOrEqualTo: any;
};
export type QueryLessThan = { field: string; lessThan: any };
export type QueryLessThanOrEqualTo = { field: string; lessThanOrEqualTo: any };

export type QueryIn = { field: string; in: any[] };
export type QueryNotIn = { field: string; notIn: any[] };
export type QueryExists = { field: string; exists: boolean };
export type QueryNotExists = { field: string; notExists: boolean };

export type QueryType =
  | QueryEqualTo
  | QueryNotEqualTo
  | QueryGreaterThan
  | QueryGreaterThanOrEqualTo
  | QueryLessThan
  | QueryLessThanOrEqualTo
  | QueryIn
  | QueryNotIn
  | QueryExists
  | QueryNotExists;

export class QueryBuilder {
  private client: MongoRPCPromiseClient;
  name: string;
  parent: Database;

  private _limit?: number;
  private _skip?: number;
  private _sort?: Dictionary<number>[];
  private _filter?: Dictionary<any>[];

  public constructor(
    name: string,
    parent: Database,
    client: MongoRPCPromiseClient
  ) {
    this.name = name;
    this.parent = parent;
    this.client = client;
  }

  public limit(limit: number): QueryBuilder {
    this._limit = limit;
    return this;
  }

  public skip(skip: number): QueryBuilder {
    this._skip = skip;
    return this;
  }

  public sort(by: { field: string; order: SortOrder }): QueryBuilder {
    if (!this._sort) {
      this._sort = [];
    }
    const sort: Dictionary<number> = {};
    sort[by.field] = by.order.valueOf();
    this._sort.push(sort);
    return this;
  }

  public search(text: string): QueryBuilder {
    if (!this._filter) {
      this._filter = [];
    }
    this._filter.push({
      $text: {
        $search: text,
      },
    });

    return this;
  }

  public where(query: QueryType): QueryBuilder {
    if (!this._filter) {
      this._filter = [];
    }

    if (query as QueryEqualTo) {
      let equalTo = query as QueryEqualTo;
      let filter: Dictionary<any> = {};
      filter[equalTo.field] = {
        $eq: equalTo.equalTo,
      };
      this._filter.push(filter);
    } else if (query as QueryGreaterThan) {
      let greaterThan = query as QueryGreaterThan;
      let filter: Dictionary<any> = {};
      filter[greaterThan.field] = {
        $gt: greaterThan.greaterThan,
      };
      this._filter.push(filter);
    } else if (query as QueryLessThan) {
      let lessThan = query as QueryLessThan;
      let filter: Dictionary<any> = {};
      filter[lessThan.field] = {
        $lt: lessThan.lessThan,
      };
      this._filter.push(filter);
    } else if (query as QueryGreaterThanOrEqualTo) {
      let greaterThanOrEqualTo = query as QueryGreaterThanOrEqualTo;
      let filter: Dictionary<any> = {};
      filter[greaterThanOrEqualTo.field] = {
        $gte: greaterThanOrEqualTo.greaterThanOrEqualTo,
      };
      this._filter.push(filter);
    } else if (query as QueryLessThanOrEqualTo) {
      let lessThanOrEqualTo = query as QueryLessThanOrEqualTo;
      let filter: Dictionary<any> = {};
      filter[lessThanOrEqualTo.field] = {
        $lte: lessThanOrEqualTo.lessThanOrEqualTo,
      };
      this._filter.push(filter);
    } else if (query as QueryNotEqualTo) {
      let equalTo = query as QueryNotEqualTo;
      let filter: Dictionary<any> = {};
      filter[equalTo.field] = {
        $ne: equalTo.notEqualTo,
      };
      this._filter.push(filter);
    } else if (query as QueryIn) {
      let inQuery = query as QueryIn;
      let filter: Dictionary<any> = {};
      filter[inQuery.field] = {
        $in: inQuery.in,
      };
      this._filter.push(filter);
    } else if (query as QueryNotIn) {
      let notInQuery = query as QueryNotIn;
      let filter: Dictionary<any> = {};
      filter[notInQuery.field] = {
        $nin: notInQuery.notIn,
      };
      this._filter.push(filter);
    } else if (query as QueryExists) {
      let existsQuery = query as QueryExists;
      let filter: Dictionary<any> = {};
      filter[existsQuery.field] = {
        $exists: existsQuery.exists,
      };
      this._filter.push(filter);
    } else if (query as QueryNotExists) {
      let notExistsQuery = query as QueryNotExists;
      let filter: Dictionary<any> = {};
      filter[notExistsQuery.field] = {
        $exists: notExistsQuery.notExists,
      };
      this._filter.push(filter);
    }
    return this;
  }

  public async get(): Promise<any> {
    const request = new QueryDocumentsRequest();
    request.setDatabase(this.parent.name);
    request.setCollection(this.name);
    if (this._limit) {
      request.setLimit(this._limit);
    }
    if (this._skip) {
      request.setSkip(this._skip);
    }
    if (this._sort) {
      request.setSort(EncodeValue(this._sort));
    }
    if (this._filter) {
      request.setQuery(EncodeValue(this._filter));
    }
    try {
      const response = await this.client.queryDocuments(request);
      return DecodeValue(response);
    } catch (error) {
      throw error;
    }
  }
}
