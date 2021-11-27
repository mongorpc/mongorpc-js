import * as grpcWeb from 'grpc-web';

import * as mongorpc_admin_pb from '../mongorpc/admin_pb';
import * as mongorpc_value_pb from '../mongorpc/value_pb';


export class MongoRPCAdminClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listDatabases(
    request: mongorpc_value_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_value_pb.Value) => void
  ): grpcWeb.ClientReadableStream<mongorpc_value_pb.Value>;

  dropDatabase(
    request: mongorpc_admin_pb.DropDatabaseRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_value_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<mongorpc_value_pb.Empty>;

  createCollection(
    request: mongorpc_admin_pb.CreateCollectionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_value_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<mongorpc_value_pb.Empty>;

  dropCollection(
    request: mongorpc_admin_pb.DropCollectionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_value_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<mongorpc_value_pb.Empty>;

  listCollections(
    request: mongorpc_admin_pb.ListCollectionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_value_pb.Value) => void
  ): grpcWeb.ClientReadableStream<mongorpc_value_pb.Value>;

  listIndexes(
    request: mongorpc_admin_pb.ListIndexesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_value_pb.Value) => void
  ): grpcWeb.ClientReadableStream<mongorpc_value_pb.Value>;

  createIndex(
    request: mongorpc_admin_pb.CreateIndexRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_value_pb.Value) => void
  ): grpcWeb.ClientReadableStream<mongorpc_value_pb.Value>;

  dropIndex(
    request: mongorpc_admin_pb.DropIndexRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: mongorpc_value_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<mongorpc_value_pb.Empty>;

}

export class MongoRPCAdminPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listDatabases(
    request: mongorpc_value_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_value_pb.Value>;

  dropDatabase(
    request: mongorpc_admin_pb.DropDatabaseRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_value_pb.Empty>;

  createCollection(
    request: mongorpc_admin_pb.CreateCollectionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_value_pb.Empty>;

  dropCollection(
    request: mongorpc_admin_pb.DropCollectionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_value_pb.Empty>;

  listCollections(
    request: mongorpc_admin_pb.ListCollectionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_value_pb.Value>;

  listIndexes(
    request: mongorpc_admin_pb.ListIndexesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_value_pb.Value>;

  createIndex(
    request: mongorpc_admin_pb.CreateIndexRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_value_pb.Value>;

  dropIndex(
    request: mongorpc_admin_pb.DropIndexRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<mongorpc_value_pb.Empty>;

}

