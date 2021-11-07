// package: mongorpc
// file: mongorpc.proto

import * as mongorpc_pb from "./mongorpc_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MongoRPCListCollections = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.ListCollectionsRequest;
  readonly responseType: typeof mongorpc_pb.ListCollectionsResponse;
};

type MongoRPCGetDocument = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.GetDocumentRequest;
  readonly responseType: typeof mongorpc_pb.GetDocumentResponse;
};

type MongoRPCListDocuments = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.ListDocumentsRequest;
  readonly responseType: typeof mongorpc_pb.ListDocumentsResponse;
};

type MongoRPCCreateDocument = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.CreateDocumentRequest;
  readonly responseType: typeof mongorpc_pb.CreateDocumentResponse;
};

type MongoRPCUpdateDocument = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.UpdateDocumentRequest;
  readonly responseType: typeof mongorpc_pb.UpdateDocumentResponse;
};

type MongoRPCDeleteDocument = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.DeleteDocumentRequest;
  readonly responseType: typeof mongorpc_pb.DeleteDocumentResponse;
};

type MongoRPCCountDocuments = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.CountDocumentsRequest;
  readonly responseType: typeof mongorpc_pb.CountDocumentsResponse;
};

type MongoRPCListen = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof mongorpc_pb.ListenRequest;
  readonly responseType: typeof mongorpc_pb.ListenResponse;
};

type MongoRPCCreateIndex = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.CreateIndexRequest;
  readonly responseType: typeof mongorpc_pb.CreateIndexResponse;
};

type MongoRPCListIndexes = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.ListIndexesRequest;
  readonly responseType: typeof mongorpc_pb.ListIndexesResponse;
};

type MongoRPCDeleteIndex = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.DeleteIndexRequest;
  readonly responseType: typeof mongorpc_pb.DeleteIndexResponse;
};

type MongoRPCReindex = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.ReindexRequest;
  readonly responseType: typeof mongorpc_pb.ReindexResponse;
};

type MongoRPCPing = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.Empty;
  readonly responseType: typeof mongorpc_pb.Empty;
};

type MongoRPCCollectionStats = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.CollectionStatsRequest;
  readonly responseType: typeof mongorpc_pb.CollectionStatsResponse;
};

type MongoRPCCreateCollection = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.CreateCollectionRequest;
  readonly responseType: typeof mongorpc_pb.CreateCollectionResponse;
};

type MongoRPCRenameCollection = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.RenameCollectionRequest;
  readonly responseType: typeof mongorpc_pb.RenameCollectionResponse;
};

type MongoRPCDeleteCollection = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.DeleteCollectionRequest;
  readonly responseType: typeof mongorpc_pb.DeleteCollectionResponse;
};

type MongoRPCHealthCheck = {
  readonly methodName: string;
  readonly service: typeof MongoRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mongorpc_pb.HealthCheckRequest;
  readonly responseType: typeof mongorpc_pb.HealthCheckResponse;
};

export class MongoRPC {
  static readonly serviceName: string;
  static readonly ListCollections: MongoRPCListCollections;
  static readonly GetDocument: MongoRPCGetDocument;
  static readonly ListDocuments: MongoRPCListDocuments;
  static readonly CreateDocument: MongoRPCCreateDocument;
  static readonly UpdateDocument: MongoRPCUpdateDocument;
  static readonly DeleteDocument: MongoRPCDeleteDocument;
  static readonly CountDocuments: MongoRPCCountDocuments;
  static readonly Listen: MongoRPCListen;
  static readonly CreateIndex: MongoRPCCreateIndex;
  static readonly ListIndexes: MongoRPCListIndexes;
  static readonly DeleteIndex: MongoRPCDeleteIndex;
  static readonly Reindex: MongoRPCReindex;
  static readonly Ping: MongoRPCPing;
  static readonly CollectionStats: MongoRPCCollectionStats;
  static readonly CreateCollection: MongoRPCCreateCollection;
  static readonly RenameCollection: MongoRPCRenameCollection;
  static readonly DeleteCollection: MongoRPCDeleteCollection;
  static readonly HealthCheck: MongoRPCHealthCheck;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class MongoRPCClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listCollections(
    requestMessage: mongorpc_pb.ListCollectionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.ListCollectionsResponse|null) => void
  ): UnaryResponse;
  listCollections(
    requestMessage: mongorpc_pb.ListCollectionsRequest,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.ListCollectionsResponse|null) => void
  ): UnaryResponse;
  getDocument(
    requestMessage: mongorpc_pb.GetDocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.GetDocumentResponse|null) => void
  ): UnaryResponse;
  getDocument(
    requestMessage: mongorpc_pb.GetDocumentRequest,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.GetDocumentResponse|null) => void
  ): UnaryResponse;
  listDocuments(
    requestMessage: mongorpc_pb.ListDocumentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.ListDocumentsResponse|null) => void
  ): UnaryResponse;
  listDocuments(
    requestMessage: mongorpc_pb.ListDocumentsRequest,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.ListDocumentsResponse|null) => void
  ): UnaryResponse;
  createDocument(
    requestMessage: mongorpc_pb.CreateDocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.CreateDocumentResponse|null) => void
  ): UnaryResponse;
  createDocument(
    requestMessage: mongorpc_pb.CreateDocumentRequest,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.CreateDocumentResponse|null) => void
  ): UnaryResponse;
  updateDocument(
    requestMessage: mongorpc_pb.UpdateDocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.UpdateDocumentResponse|null) => void
  ): UnaryResponse;
  updateDocument(
    requestMessage: mongorpc_pb.UpdateDocumentRequest,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.UpdateDocumentResponse|null) => void
  ): UnaryResponse;
  deleteDocument(
    requestMessage: mongorpc_pb.DeleteDocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.DeleteDocumentResponse|null) => void
  ): UnaryResponse;
  deleteDocument(
    requestMessage: mongorpc_pb.DeleteDocumentRequest,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.DeleteDocumentResponse|null) => void
  ): UnaryResponse;
  countDocuments(
    requestMessage: mongorpc_pb.CountDocumentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.CountDocumentsResponse|null) => void
  ): UnaryResponse;
  countDocuments(
    requestMessage: mongorpc_pb.CountDocumentsRequest,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.CountDocumentsResponse|null) => void
  ): UnaryResponse;
  listen(requestMessage: mongorpc_pb.ListenRequest, metadata?: grpc.Metadata): ResponseStream<mongorpc_pb.ListenResponse>;
  createIndex(
    requestMessage: mongorpc_pb.CreateIndexRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.CreateIndexResponse|null) => void
  ): UnaryResponse;
  createIndex(
    requestMessage: mongorpc_pb.CreateIndexRequest,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.CreateIndexResponse|null) => void
  ): UnaryResponse;
  listIndexes(
    requestMessage: mongorpc_pb.ListIndexesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.ListIndexesResponse|null) => void
  ): UnaryResponse;
  listIndexes(
    requestMessage: mongorpc_pb.ListIndexesRequest,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.ListIndexesResponse|null) => void
  ): UnaryResponse;
  deleteIndex(
    requestMessage: mongorpc_pb.DeleteIndexRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.DeleteIndexResponse|null) => void
  ): UnaryResponse;
  deleteIndex(
    requestMessage: mongorpc_pb.DeleteIndexRequest,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.DeleteIndexResponse|null) => void
  ): UnaryResponse;
  reindex(
    requestMessage: mongorpc_pb.ReindexRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.ReindexResponse|null) => void
  ): UnaryResponse;
  reindex(
    requestMessage: mongorpc_pb.ReindexRequest,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.ReindexResponse|null) => void
  ): UnaryResponse;
  ping(
    requestMessage: mongorpc_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.Empty|null) => void
  ): UnaryResponse;
  ping(
    requestMessage: mongorpc_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.Empty|null) => void
  ): UnaryResponse;
  collectionStats(
    requestMessage: mongorpc_pb.CollectionStatsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.CollectionStatsResponse|null) => void
  ): UnaryResponse;
  collectionStats(
    requestMessage: mongorpc_pb.CollectionStatsRequest,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.CollectionStatsResponse|null) => void
  ): UnaryResponse;
  createCollection(
    requestMessage: mongorpc_pb.CreateCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.CreateCollectionResponse|null) => void
  ): UnaryResponse;
  createCollection(
    requestMessage: mongorpc_pb.CreateCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.CreateCollectionResponse|null) => void
  ): UnaryResponse;
  renameCollection(
    requestMessage: mongorpc_pb.RenameCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.RenameCollectionResponse|null) => void
  ): UnaryResponse;
  renameCollection(
    requestMessage: mongorpc_pb.RenameCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.RenameCollectionResponse|null) => void
  ): UnaryResponse;
  deleteCollection(
    requestMessage: mongorpc_pb.DeleteCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.DeleteCollectionResponse|null) => void
  ): UnaryResponse;
  deleteCollection(
    requestMessage: mongorpc_pb.DeleteCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.DeleteCollectionResponse|null) => void
  ): UnaryResponse;
  healthCheck(
    requestMessage: mongorpc_pb.HealthCheckRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.HealthCheckResponse|null) => void
  ): UnaryResponse;
  healthCheck(
    requestMessage: mongorpc_pb.HealthCheckRequest,
    callback: (error: ServiceError|null, responseMessage: mongorpc_pb.HealthCheckResponse|null) => void
  ): UnaryResponse;
}

