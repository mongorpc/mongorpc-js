import { ChannelCredentials, ClientReadableStream } from "@grpc/grpc-js";
import { MongoRPCClient } from "./mongorpc/mongorpc_grpc_pb";
import { MongoRPCAdminClient } from "./mongorpc/admin_grpc_pb";
import {
  BulkInsertDocumentsRequest,
  DeleteDocumentRequest,
  GetDocumentRequest,
  InsertDocumentRequest,
  ListenRequest,
  ListenResponse,
  QueryDocumentsRequest,
  UpdateDocumentRequest,
} from "./mongorpc/mongorpc_pb";
import { ObjectId, Value } from "./mongorpc/value_pb";

export class MongoRPCPromiseClient {
  client: MongoRPCClient;
  admin: MongoRPCAdminClient;

  constructor(
    address: string,
    credentials: ChannelCredentials,
    options?: null | { [index: string]: any }
  ) {
    this.client = new MongoRPCClient(address, credentials, {
      ...options,
    });
    this.admin = new MongoRPCAdminClient(address, credentials, {
      ...options,
    });
  }

  getDocument(request: GetDocumentRequest): Promise<Value> {
    return new Promise((resolve, reject) => {
      this.client.getDocument(request, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }
  insertDocument(request: InsertDocumentRequest): Promise<ObjectId> {
    return new Promise((resolve, reject) => {
      this.client.insertDocument(request, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }
  updateDocument(request: UpdateDocumentRequest): Promise<Value> {
    return new Promise((resolve, reject) => {
      this.client.updateDocument(request, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }
  deleteDocument(request: DeleteDocumentRequest): Promise<Value> {
    return new Promise((resolve, reject) => {
      this.client.deleteDocument(request, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }
  bulkInsertDocuments(request: BulkInsertDocumentsRequest): Promise<Value> {
    return new Promise((resolve, reject) => {
      this.client.bulkInsertDocuments(request, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }
  queryDocuments(request: QueryDocumentsRequest): Promise<Value> {
    return new Promise((resolve, reject) => {
      this.client.queryDocuments(request, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }
  listen(request: ListenRequest): ClientReadableStream<ListenResponse> {
    return this.client.listen(request);
  }
}
