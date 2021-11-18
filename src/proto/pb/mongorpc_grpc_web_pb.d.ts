import * as grpcWeb from 'grpc-web';

import * as mongorpc_pb from './mongorpc_pb';


export class MongoRPCClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listCollections(
    request: mongorpc_pb.ListCollectionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.ListCollectionsResponse) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.ListCollectionsResponse>;

  getDocument(
    request: mongorpc_pb.GetDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.GetDocumentResponse) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.GetDocumentResponse>;

  listDocuments(
    request: mongorpc_pb.ListDocumentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.ListDocumentsResponse) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.ListDocumentsResponse>;

  createDocument(
    request: mongorpc_pb.CreateDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.CreateDocumentResponse) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.CreateDocumentResponse>;

  updateDocument(
    request: mongorpc_pb.UpdateDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.UpdateDocumentResponse) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.UpdateDocumentResponse>;

  deleteDocument(
    request: mongorpc_pb.DeleteDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.DeleteDocumentResponse) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.DeleteDocumentResponse>;

  countDocuments(
    request: mongorpc_pb.CountDocumentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.CountDocumentsResponse) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.CountDocumentsResponse>;

  listen(
    request: mongorpc_pb.ListenRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<mongorpc_pb.ListenResponse>;

  createIndex(
    request: mongorpc_pb.CreateIndexRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.CreateIndexResponse) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.CreateIndexResponse>;

  listIndexes(
    request: mongorpc_pb.ListIndexesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.ListIndexesResponse) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.ListIndexesResponse>;

  deleteIndex(
    request: mongorpc_pb.DeleteIndexRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.DeleteIndexResponse) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.DeleteIndexResponse>;

  reindex(
    request: mongorpc_pb.ReindexRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.ReindexResponse) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.ReindexResponse>;

  ping(
    request: mongorpc_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.Empty>;

  collectionStats(
    request: mongorpc_pb.CollectionStatsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.CollectionStatsResponse) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.CollectionStatsResponse>;

  createCollection(
    request: mongorpc_pb.CreateCollectionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.CreateCollectionResponse) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.CreateCollectionResponse>;

  renameCollection(
    request: mongorpc_pb.RenameCollectionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.RenameCollectionResponse) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.RenameCollectionResponse>;

  deleteCollection(
    request: mongorpc_pb.DeleteCollectionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.DeleteCollectionResponse) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.DeleteCollectionResponse>;

  healthCheck(
    request: mongorpc_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_pb.HealthCheckResponse) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.HealthCheckResponse>;

}

export class MongoRPCPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listCollections(
    request: mongorpc_pb.ListCollectionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.ListCollectionsResponse>;

  getDocument(
    request: mongorpc_pb.GetDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.GetDocumentResponse>;

  listDocuments(
    request: mongorpc_pb.ListDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.ListDocumentsResponse>;

  createDocument(
    request: mongorpc_pb.CreateDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.CreateDocumentResponse>;

  updateDocument(
    request: mongorpc_pb.UpdateDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.UpdateDocumentResponse>;

  deleteDocument(
    request: mongorpc_pb.DeleteDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.DeleteDocumentResponse>;

  countDocuments(
    request: mongorpc_pb.CountDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.CountDocumentsResponse>;

  listen(
    request: mongorpc_pb.ListenRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<mongorpc_pb.ListenResponse>;

  createIndex(
    request: mongorpc_pb.CreateIndexRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.CreateIndexResponse>;

  listIndexes(
    request: mongorpc_pb.ListIndexesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.ListIndexesResponse>;

  deleteIndex(
    request: mongorpc_pb.DeleteIndexRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.DeleteIndexResponse>;

  reindex(
    request: mongorpc_pb.ReindexRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.ReindexResponse>;

  ping(
    request: mongorpc_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.Empty>;

  collectionStats(
    request: mongorpc_pb.CollectionStatsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.CollectionStatsResponse>;

  createCollection(
    request: mongorpc_pb.CreateCollectionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.CreateCollectionResponse>;

  renameCollection(
    request: mongorpc_pb.RenameCollectionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.RenameCollectionResponse>;

  deleteCollection(
    request: mongorpc_pb.DeleteCollectionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.DeleteCollectionResponse>;

  healthCheck(
    request: mongorpc_pb.HealthCheckRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_pb.HealthCheckResponse>;

}

