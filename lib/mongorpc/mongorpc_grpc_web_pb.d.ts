import * as grpcWeb from 'grpc-web';

import * as mongorpc_mongorpc_pb from '../mongorpc/mongorpc_pb';
import * as mongorpc_value_pb from '../mongorpc/value_pb';


export class MongoRPCClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getDocument(
    request: mongorpc_mongorpc_pb.GetDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_value_pb.Value) => void
  ): grpcWeb.ClientReadableStream<mongorpc_value_pb.Value>;

  insertDocument(
    request: mongorpc_mongorpc_pb.InsertDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_value_pb.ObjectId) => void
  ): grpcWeb.ClientReadableStream<mongorpc_value_pb.ObjectId>;

  updateDocument(
    request: mongorpc_mongorpc_pb.UpdateDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_value_pb.Value) => void
  ): grpcWeb.ClientReadableStream<mongorpc_value_pb.Value>;

  deleteDocument(
    request: mongorpc_mongorpc_pb.DeleteDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_value_pb.Value) => void
  ): grpcWeb.ClientReadableStream<mongorpc_value_pb.Value>;

  bulkInsertDocuments(
    request: mongorpc_mongorpc_pb.BulkInsertDocumentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_value_pb.Value) => void
  ): grpcWeb.ClientReadableStream<mongorpc_value_pb.Value>;

  queryDocuments(
    request: mongorpc_mongorpc_pb.QueryDocumentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_value_pb.Value) => void
  ): grpcWeb.ClientReadableStream<mongorpc_value_pb.Value>;

  listen(
    request: mongorpc_mongorpc_pb.ListenRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<mongorpc_mongorpc_pb.ListenResponse>;

}

export class MongoRPCPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getDocument(
    request: mongorpc_mongorpc_pb.GetDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_value_pb.Value>;

  insertDocument(
    request: mongorpc_mongorpc_pb.InsertDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_value_pb.ObjectId>;

  updateDocument(
    request: mongorpc_mongorpc_pb.UpdateDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_value_pb.Value>;

  deleteDocument(
    request: mongorpc_mongorpc_pb.DeleteDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_value_pb.Value>;

  bulkInsertDocuments(
    request: mongorpc_mongorpc_pb.BulkInsertDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_value_pb.Value>;

  queryDocuments(
    request: mongorpc_mongorpc_pb.QueryDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_value_pb.Value>;

  listen(
    request: mongorpc_mongorpc_pb.ListenRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<mongorpc_mongorpc_pb.ListenResponse>;

}

