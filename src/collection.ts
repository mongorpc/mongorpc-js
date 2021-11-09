import { MongoRPCClient } from "./proto";
import { Database } from "./database";
import { Document } from "./document";
import {
  ListDocumentsRequest,
  Sort as ProtoSort,
  Filter as ProtoFilter,
  Equal,
  Greater,
  Less,
  GreaterEqual,
  LessEqual,
  NotEqual,
  Exists,
  NotExists,
  In,
  NotIn,
} from "./proto/pb/mongorpc_pb";
import { DecodeValue } from "./decoder";
import { EncodeValue } from "./encoder";

class Collection {
  private client: MongoRPCClient;
  name: string;
  parent: Database;

  public constructor(name: string, parent: Database, client: MongoRPCClient) {
    this.name = name;
    this.parent = parent;
    this.client = client;
  }

  public document(id: string): Document {
    return new Document(id, this, this.client);
  }

  public documents(): ListDocumentsRequestBuilder {
    return new ListDocumentsRequestBuilder(this.client, this.parent, this.name);
  }
}

type QueryEqualTo = { field: string; equalTo: any };
type QueryNotEqualTo = { field: string; notEqualTo: any };
type QueryGreaterThan = { field: string; greaterThan: any };
type QueryGreaterThanOrEqualTo = { field: string; greaterThanOrEqualTo: any };
type QueryLessThan = { field: string; lessThan: any };
type QueryLessThanOrEqualTo = { field: string; lessThanOrEqualTo: any };

type QueryIn = { field: string; in: any[] };
type QueryNotIn = { field: string; notIn: any[] };
type QueryExists = { field: string; exists: boolean };
type QueryNotExists = { field: string; notExists: boolean };

type QueryType =
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

class ListDocumentsRequestBuilder {
  _limit?: number;
  _skip?: number;
  _sort?: ProtoSort[];
  _filter?: ProtoFilter[];

  private client: MongoRPCClient;
  private parent: Database;
  private name: string;

  constructor(client: MongoRPCClient, parent: Database, name: string) {
    this.client = client;
    this.parent = parent;
    this.name = name;
  }

  public limit(limit: number): ListDocumentsRequestBuilder {
    this._limit = limit;
    return this;
  }

  public skip(skip: number): ListDocumentsRequestBuilder {
    this._skip = skip;
    return this;
  }

  public sort(by: {
    field: string;
    asending: boolean;
  }): ListDocumentsRequestBuilder {
    const sort: ProtoSort = new ProtoSort();
    sort.setField(by.field);
    sort.setAscending(by.asending);
    if (!this._sort) {
      this._sort = [];
    }
    this._sort.push(sort);
    return this;
  }

  public where(query: QueryType): ListDocumentsRequestBuilder {
    const filter: ProtoFilter = new ProtoFilter();

    if (query as QueryEqualTo) {
      const equalTo = query as QueryEqualTo;
      const value = new Equal();
      value.setField(equalTo.field);
      value.setValue(EncodeValue(equalTo.equalTo));
      filter.setEqual(value);
    } else if (query as QueryGreaterThan) {
      const greaterThan = query as QueryGreaterThan;
      const value = new Greater();
      value.setField(greaterThan.field);
      value.setValue(EncodeValue(greaterThan.greaterThan));
      filter.setGreater(value);
    } else if (query as QueryLessThan) {
      const lessThan = query as QueryLessThan;
      const value = new Less();
      value.setField(lessThan.field);
      value.setValue(EncodeValue(lessThan.lessThan));
      filter.setLess(value);
    } else if (query as QueryGreaterThanOrEqualTo) {
      const greaterThanOrEqualTo = query as QueryGreaterThanOrEqualTo;
      const value = new GreaterEqual();
      value.setField(greaterThanOrEqualTo.field);
      value.setValue(EncodeValue(greaterThanOrEqualTo.greaterThanOrEqualTo));
      filter.setGreaterEqual(value);
    } else if (query as QueryLessThanOrEqualTo) {
      const lessThanOrEqualTo = query as QueryLessThanOrEqualTo;
      const value = new LessEqual();
      value.setField(lessThanOrEqualTo.field);
      value.setValue(EncodeValue(lessThanOrEqualTo.lessThanOrEqualTo));
      filter.setLessEqual(value);
    } else if (query as QueryNotEqualTo) {
      const equalTo = query as QueryNotEqualTo;
      const value = new NotEqual();
      value.setField(equalTo.field);
      value.setValue(EncodeValue(equalTo.notEqualTo));
      filter.setNotEqual(value);
    } else if (query as QueryIn) {
      const inQuery = query as QueryIn;
      const value = new In();
      value.setField(inQuery.field);
      value.setValuesList(inQuery.in.map((v) => EncodeValue(v)));
      filter.setIn(value);
    } else if (query as QueryNotIn) {
      const notInQuery = query as QueryNotIn;
      const value = new NotIn();
      value.setField(notInQuery.field);
      value.setValuesList(notInQuery.notIn.map((v) => EncodeValue(v)));
      filter.setNotIn(value);
    } else if (query as QueryExists) {
      const existsQuery = query as QueryExists;
      const value = new Exists();
      value.setField(existsQuery.field);
      filter.setExists(value);
    } else if (query as QueryNotExists) {
      const notExistsQuery = query as QueryNotExists;
      const value = new NotExists();
      value.setField(notExistsQuery.field);
      filter.setNotExists(value);
    }

    if (!this._filter) {
      this._filter = [];
    }
    this._filter.push(filter);

    return this;
  }

  public async get(): Promise<any[]> {
    const request = new ListDocumentsRequest();
    request.setDatabase(this.parent.name);
    request.setCollection(this.name);
    if (this._limit) {
      request.setLimit(this._limit);
    }
    if (this._skip) {
      request.setSkip(this._skip);
    }
    if (this._sort) {
      request.setSortList(this._sort);
    }
    if (this._filter) {
      request.setFilterList(this._filter);
    }
    try {
      const response = await this.client.listDocuments(request);
      const documents = response.getDocuments();
      if (documents) {
        let result = documents.getValuesList().map((doc) => {
          return DecodeValue(doc);
        });
        return result;
      }

      return [];
    } catch (error) {
      throw error;
    }
  }
}

export {
  Collection,
  ListDocumentsRequestBuilder,
  QueryType,
  QueryEqualTo,
  QueryGreaterThan,
  QueryLessThan,
  QueryGreaterThanOrEqualTo,
  QueryLessThanOrEqualTo,
  QueryNotEqualTo,
  QueryIn,
  QueryNotIn,
  QueryExists,
  QueryNotExists,
};
