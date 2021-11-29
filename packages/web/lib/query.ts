import { ClientReadableStream } from "grpc-web";
import { Database } from "./database";
import { DecodeValue } from "./decoder";
import { EncodeValue } from "./encoder";
import { MongoRPCPromiseClient } from "./mongorpc/mongorpc_grpc_web_pb";
import {
  ListenRequest,
  ListenResponse,
  QueryDocumentsRequest,
} from "./mongorpc/mongorpc_pb";

export interface CancellationToken {
  cancel(): void;
}

export type ListenRequestCallback = (result: any | Error) => void;
export type OperationType = "insert" | "update" | "delete";

export enum SortOrder {
  ASCENDING = 1,
  DESCENDING = -1,
}

export class QueryBuilder {
  private client: MongoRPCPromiseClient;
  name: string;
  parent: Database;

  private _limit?: number;
  private _skip?: number;
  private _sort?: any;
  private _filter?: any;

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
      this._sort = {};
    }
    this._sort[by.field] = by.order;
    return this;
  }

  public search(text: string): QueryBuilder {
    if (!this._filter) {
      this._filter = {};
    }
    this._filter["$text"] = { $search: text };
    return this;
  }

  public where(query: {
    field: string;
    equalTo: any;
    greaterThan: any;
    greaterThanOrEqualTo: any;
    lessThan: any;
    lessThanOrEqualTo: any;
    notEqualTo: any;
    in: any[];
    notIn: any[];
    exists: boolean;
    notExists: boolean;
  }): QueryBuilder {
    if (!this._filter) {
      this._filter = {};
    }
    if (query.field) {
      if (query.equalTo) {
        this._filter[query.field] = {
          $eq: query.equalTo,
        };
      }
      if (query.greaterThan) {
        this._filter[query.field] = {
          $gt: query.greaterThan,
        };
      }
      if (query.greaterThanOrEqualTo) {
        this._filter[query.field] = {
          $gte: query.greaterThanOrEqualTo,
        };
      }
      if (query.lessThan) {
        this._filter[query.field] = {
          $lt: query.lessThan,
        };
      }
      if (query.lessThanOrEqualTo) {
        this._filter[query.field] = {
          $lte: query.lessThanOrEqualTo,
        };
      }
      if (query.notEqualTo) {
        this._filter[query.field] = {
          $ne: query.notEqualTo,
        };
      }
      if (query.in) {
        this._filter[query.field] = {
          $in: query.in,
        };
      }
      if (query.notIn) {
        this._filter[query.field] = {
          $nin: query.notIn,
        };
      }
      if (query.exists) {
        this._filter[query.field] = {
          $exists: query.exists,
        };
      }
      if (query.notExists) {
        this._filter[query.field] = {
          $exists: query.notExists,
        };
      }
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

  public listen(
    callback: ListenRequestCallback,
    options?: {
      operation: OperationType;
    }
  ): CancellationToken {
    const request = new ListenRequest();
    request.setDatabase(this.parent.name);
    request.setCollection(this.name);

    let filter: any = {};
    if (options && options.operation) {
      filter["operationType"] = options.operation.valueOf();
    }

    if (this._filter) {
      this._filter.forEach((value: any, key: string) => {
        filter["fullDocument." + key] = value;
      });
    }

    const match = {
      $match: filter,
    };

    request.setPipelineList([EncodeValue(match)]);

    const listner: ClientReadableStream<ListenResponse> =
      this.client.listen(request);

    listner.on("data", (data) => {
      let res = data.getChanges();
      if (res) {
        callback(DecodeValue(res));
      } else {
        callback(null);
      }
    });

    listner.on("error", (error) => {
      callback(error);
    });

    return {
      cancel: () => {
        listner.cancel();
      },
    };
  }
}
