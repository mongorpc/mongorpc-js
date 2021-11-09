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

//     EQUAL = 1,
//     NOT_EQUAL = 2,
//     LESS = 3,
//     LESS_EQUAL = 4,
//     GREATER = 5,
//     GREATER_EQUAL = 6,
//     IN = 7,
//     NOT_IN = 8,
//     EXISTS = 9,
//     NOT_EXISTS = 10,

type QueryEqualTo = { field: string; equalTo: any };
type QueryGreaterThan = { field: string; greaterThan: string };
type QueryLessThan = { field: string; lessThan: string };

type QueryType = QueryEqualTo | QueryGreaterThan | QueryLessThan;

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
    }

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
};
