// package: mongorpc
// file: mongorpc/mongorpc.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as mongorpc_mongorpc_pb from "../mongorpc/mongorpc_pb";
import * as mongorpc_value_pb from "../mongorpc/value_pb";

interface IMongoRPCService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getDocument: IMongoRPCService_IGetDocument;
  insertDocument: IMongoRPCService_IInsertDocument;
  updateDocument: IMongoRPCService_IUpdateDocument;
  deleteDocument: IMongoRPCService_IDeleteDocument;
  bulkInsertDocuments: IMongoRPCService_IBulkInsertDocuments;
  queryDocuments: IMongoRPCService_IQueryDocuments;
  listen: IMongoRPCService_IListen;
}

interface IMongoRPCService_IGetDocument
  extends grpc.MethodDefinition<
    mongorpc_mongorpc_pb.GetDocumentRequest,
    mongorpc_value_pb.Value
  > {
  path: "/mongorpc.MongoRPC/GetDocument";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<mongorpc_mongorpc_pb.GetDocumentRequest>;
  requestDeserialize: grpc.deserialize<mongorpc_mongorpc_pb.GetDocumentRequest>;
  responseSerialize: grpc.serialize<mongorpc_value_pb.Value>;
  responseDeserialize: grpc.deserialize<mongorpc_value_pb.Value>;
}
interface IMongoRPCService_IInsertDocument
  extends grpc.MethodDefinition<
    mongorpc_mongorpc_pb.InsertDocumentRequest,
    mongorpc_value_pb.ObjectId
  > {
  path: "/mongorpc.MongoRPC/InsertDocument";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<mongorpc_mongorpc_pb.InsertDocumentRequest>;
  requestDeserialize: grpc.deserialize<mongorpc_mongorpc_pb.InsertDocumentRequest>;
  responseSerialize: grpc.serialize<mongorpc_value_pb.ObjectId>;
  responseDeserialize: grpc.deserialize<mongorpc_value_pb.ObjectId>;
}
interface IMongoRPCService_IUpdateDocument
  extends grpc.MethodDefinition<
    mongorpc_mongorpc_pb.UpdateDocumentRequest,
    mongorpc_value_pb.Value
  > {
  path: "/mongorpc.MongoRPC/UpdateDocument";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<mongorpc_mongorpc_pb.UpdateDocumentRequest>;
  requestDeserialize: grpc.deserialize<mongorpc_mongorpc_pb.UpdateDocumentRequest>;
  responseSerialize: grpc.serialize<mongorpc_value_pb.Value>;
  responseDeserialize: grpc.deserialize<mongorpc_value_pb.Value>;
}
interface IMongoRPCService_IDeleteDocument
  extends grpc.MethodDefinition<
    mongorpc_mongorpc_pb.DeleteDocumentRequest,
    mongorpc_value_pb.Value
  > {
  path: "/mongorpc.MongoRPC/DeleteDocument";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<mongorpc_mongorpc_pb.DeleteDocumentRequest>;
  requestDeserialize: grpc.deserialize<mongorpc_mongorpc_pb.DeleteDocumentRequest>;
  responseSerialize: grpc.serialize<mongorpc_value_pb.Value>;
  responseDeserialize: grpc.deserialize<mongorpc_value_pb.Value>;
}
interface IMongoRPCService_IBulkInsertDocuments
  extends grpc.MethodDefinition<
    mongorpc_mongorpc_pb.BulkInsertDocumentsRequest,
    mongorpc_value_pb.Value
  > {
  path: "/mongorpc.MongoRPC/BulkInsertDocuments";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<mongorpc_mongorpc_pb.BulkInsertDocumentsRequest>;
  requestDeserialize: grpc.deserialize<mongorpc_mongorpc_pb.BulkInsertDocumentsRequest>;
  responseSerialize: grpc.serialize<mongorpc_value_pb.Value>;
  responseDeserialize: grpc.deserialize<mongorpc_value_pb.Value>;
}
interface IMongoRPCService_IQueryDocuments
  extends grpc.MethodDefinition<
    mongorpc_mongorpc_pb.QueryDocumentsRequest,
    mongorpc_value_pb.Value
  > {
  path: "/mongorpc.MongoRPC/QueryDocuments";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<mongorpc_mongorpc_pb.QueryDocumentsRequest>;
  requestDeserialize: grpc.deserialize<mongorpc_mongorpc_pb.QueryDocumentsRequest>;
  responseSerialize: grpc.serialize<mongorpc_value_pb.Value>;
  responseDeserialize: grpc.deserialize<mongorpc_value_pb.Value>;
}
interface IMongoRPCService_IListen
  extends grpc.MethodDefinition<
    mongorpc_mongorpc_pb.ListenRequest,
    mongorpc_mongorpc_pb.ListenResponse
  > {
  path: "/mongorpc.MongoRPC/Listen";
  requestStream: false;
  responseStream: true;
  requestSerialize: grpc.serialize<mongorpc_mongorpc_pb.ListenRequest>;
  requestDeserialize: grpc.deserialize<mongorpc_mongorpc_pb.ListenRequest>;
  responseSerialize: grpc.serialize<mongorpc_mongorpc_pb.ListenResponse>;
  responseDeserialize: grpc.deserialize<mongorpc_mongorpc_pb.ListenResponse>;
}

export const MongoRPCService: IMongoRPCService;

export interface IMongoRPCServer {
  getDocument: grpc.handleUnaryCall<
    mongorpc_mongorpc_pb.GetDocumentRequest,
    mongorpc_value_pb.Value
  >;
  insertDocument: grpc.handleUnaryCall<
    mongorpc_mongorpc_pb.InsertDocumentRequest,
    mongorpc_value_pb.ObjectId
  >;
  updateDocument: grpc.handleUnaryCall<
    mongorpc_mongorpc_pb.UpdateDocumentRequest,
    mongorpc_value_pb.Value
  >;
  deleteDocument: grpc.handleUnaryCall<
    mongorpc_mongorpc_pb.DeleteDocumentRequest,
    mongorpc_value_pb.Value
  >;
  bulkInsertDocuments: grpc.handleUnaryCall<
    mongorpc_mongorpc_pb.BulkInsertDocumentsRequest,
    mongorpc_value_pb.Value
  >;
  queryDocuments: grpc.handleUnaryCall<
    mongorpc_mongorpc_pb.QueryDocumentsRequest,
    mongorpc_value_pb.Value
  >;
  listen: grpc.handleServerStreamingCall<
    mongorpc_mongorpc_pb.ListenRequest,
    mongorpc_mongorpc_pb.ListenResponse
  >;
}

export interface IMongoRPCClient {
  getDocument(
    request: mongorpc_mongorpc_pb.GetDocumentRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  getDocument(
    request: mongorpc_mongorpc_pb.GetDocumentRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  getDocument(
    request: mongorpc_mongorpc_pb.GetDocumentRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  insertDocument(
    request: mongorpc_mongorpc_pb.InsertDocumentRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.ObjectId
    ) => void
  ): grpc.ClientUnaryCall;
  insertDocument(
    request: mongorpc_mongorpc_pb.InsertDocumentRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.ObjectId
    ) => void
  ): grpc.ClientUnaryCall;
  insertDocument(
    request: mongorpc_mongorpc_pb.InsertDocumentRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.ObjectId
    ) => void
  ): grpc.ClientUnaryCall;
  updateDocument(
    request: mongorpc_mongorpc_pb.UpdateDocumentRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  updateDocument(
    request: mongorpc_mongorpc_pb.UpdateDocumentRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  updateDocument(
    request: mongorpc_mongorpc_pb.UpdateDocumentRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  deleteDocument(
    request: mongorpc_mongorpc_pb.DeleteDocumentRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  deleteDocument(
    request: mongorpc_mongorpc_pb.DeleteDocumentRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  deleteDocument(
    request: mongorpc_mongorpc_pb.DeleteDocumentRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  bulkInsertDocuments(
    request: mongorpc_mongorpc_pb.BulkInsertDocumentsRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  bulkInsertDocuments(
    request: mongorpc_mongorpc_pb.BulkInsertDocumentsRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  bulkInsertDocuments(
    request: mongorpc_mongorpc_pb.BulkInsertDocumentsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  queryDocuments(
    request: mongorpc_mongorpc_pb.QueryDocumentsRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  queryDocuments(
    request: mongorpc_mongorpc_pb.QueryDocumentsRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  queryDocuments(
    request: mongorpc_mongorpc_pb.QueryDocumentsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  listen(
    request: mongorpc_mongorpc_pb.ListenRequest,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<mongorpc_mongorpc_pb.ListenResponse>;
  listen(
    request: mongorpc_mongorpc_pb.ListenRequest,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<mongorpc_mongorpc_pb.ListenResponse>;
}

export class MongoRPCClient extends grpc.Client implements IMongoRPCClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  );
  public getDocument(
    request: mongorpc_mongorpc_pb.GetDocumentRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public getDocument(
    request: mongorpc_mongorpc_pb.GetDocumentRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public getDocument(
    request: mongorpc_mongorpc_pb.GetDocumentRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public insertDocument(
    request: mongorpc_mongorpc_pb.InsertDocumentRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.ObjectId
    ) => void
  ): grpc.ClientUnaryCall;
  public insertDocument(
    request: mongorpc_mongorpc_pb.InsertDocumentRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.ObjectId
    ) => void
  ): grpc.ClientUnaryCall;
  public insertDocument(
    request: mongorpc_mongorpc_pb.InsertDocumentRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.ObjectId
    ) => void
  ): grpc.ClientUnaryCall;
  public updateDocument(
    request: mongorpc_mongorpc_pb.UpdateDocumentRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public updateDocument(
    request: mongorpc_mongorpc_pb.UpdateDocumentRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public updateDocument(
    request: mongorpc_mongorpc_pb.UpdateDocumentRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public deleteDocument(
    request: mongorpc_mongorpc_pb.DeleteDocumentRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public deleteDocument(
    request: mongorpc_mongorpc_pb.DeleteDocumentRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public deleteDocument(
    request: mongorpc_mongorpc_pb.DeleteDocumentRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public bulkInsertDocuments(
    request: mongorpc_mongorpc_pb.BulkInsertDocumentsRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public bulkInsertDocuments(
    request: mongorpc_mongorpc_pb.BulkInsertDocumentsRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public bulkInsertDocuments(
    request: mongorpc_mongorpc_pb.BulkInsertDocumentsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public queryDocuments(
    request: mongorpc_mongorpc_pb.QueryDocumentsRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public queryDocuments(
    request: mongorpc_mongorpc_pb.QueryDocumentsRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public queryDocuments(
    request: mongorpc_mongorpc_pb.QueryDocumentsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public listen(
    request: mongorpc_mongorpc_pb.ListenRequest,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<mongorpc_mongorpc_pb.ListenResponse>;
  public listen(
    request: mongorpc_mongorpc_pb.ListenRequest,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<mongorpc_mongorpc_pb.ListenResponse>;
}
