import { MongoRPCClient } from "./proto";
import { Database } from "./database";
import { Document } from "./document";
import { ListDocumentsRequestBuilder } from "./query";
import {
  CreateDocumentRequest,
  ListCollectionsRequest,
  ListenRequest,
  ListenResponse,
} from "./proto/pb/mongorpc_pb";
import { EncodeOperationType, EncodeValue, ObjectID } from "./encoder";
import { DecodeValue } from "./decoder";
import { ClientReadableStream } from "grpc-web";

export interface CancelToken {
  cancel(): void;
}

export type ListenRequestCallback = (result: any | Error) => void;
export type OperationType = "INSERT" | "UPDATE" | "DELETE" | "REPLACE";

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

  public async insert(document: any): Promise<ObjectID> {
    const request = new CreateDocumentRequest();
    request.setDatabase(this.parent.name);
    request.setCollection(this.name);
    request.setDocument(EncodeValue(document));

    try {
      const response = await this.client.createDocument(request);
      const id = response.getDocumentId();
      return { id };
    } catch (error) {
      throw error;
    }
  }

  public listen(callback: ListenRequestCallback, options: {
    operation: OperationType;
  }): CancelToken {
    const request = new ListenRequest();
    request.setDatabase(this.parent.name);
    request.setCollection(this.name);
    request.setOperationType(EncodeOperationType(options.operation));

    const listner: ClientReadableStream<ListenResponse> =
      this.client.listen(request);

    listner.on("data", (data) => {
      let res = data.getDocument();
      if (res) {
        callback({
          data: DecodeValue(res),
          operation: data.getOperation(),
        });
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

export { Collection };
