import { MongoRPCClient } from "./proto";
import { Database } from "./database";
import { Document } from "./document";
import {
  ListDocumentsRequest,
  Sort as ProtoSort,
} from "./proto/pb/mongorpc_pb";
import { DecodeValue } from "./decoder";

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

interface Sort {
  field: string;
  asending: boolean;
}

class ListDocumentsRequestBuilder {
  _limit?: number;
  _skip?: number;
  _sort?: Sort[];

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
    const sort: Sort = {
      field: by.field,
      asending: by.asending,
    };
    if (!this._sort) {
      this._sort = [];
    }
    this._sort.push(sort);
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
      for (const sort of this._sort) {
        const sortField = new ProtoSort();
        sortField.setField(sort.field);
        sortField.setAscending(sort.asending);
        request.addSort(sortField);
      }
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

export { Collection, ListDocumentsRequestBuilder, Sort };
