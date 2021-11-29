// package: mongorpc
// file: mongorpc/admin.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as mongorpc_admin_pb from "../mongorpc/admin_pb";
import * as mongorpc_value_pb from "../mongorpc/value_pb";

interface IMongoRPCAdminService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listDatabases: IMongoRPCAdminService_IListDatabases;
  dropDatabase: IMongoRPCAdminService_IDropDatabase;
  createCollection: IMongoRPCAdminService_ICreateCollection;
  dropCollection: IMongoRPCAdminService_IDropCollection;
  listCollections: IMongoRPCAdminService_IListCollections;
  listIndexes: IMongoRPCAdminService_IListIndexes;
  createIndex: IMongoRPCAdminService_ICreateIndex;
  dropIndex: IMongoRPCAdminService_IDropIndex;
}

interface IMongoRPCAdminService_IListDatabases
  extends grpc.MethodDefinition<
    mongorpc_value_pb.Empty,
    mongorpc_value_pb.Value
  > {
  path: "/mongorpc.MongoRPCAdmin/ListDatabases";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<mongorpc_value_pb.Empty>;
  requestDeserialize: grpc.deserialize<mongorpc_value_pb.Empty>;
  responseSerialize: grpc.serialize<mongorpc_value_pb.Value>;
  responseDeserialize: grpc.deserialize<mongorpc_value_pb.Value>;
}
interface IMongoRPCAdminService_IDropDatabase
  extends grpc.MethodDefinition<
    mongorpc_admin_pb.DropDatabaseRequest,
    mongorpc_value_pb.Empty
  > {
  path: "/mongorpc.MongoRPCAdmin/DropDatabase";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<mongorpc_admin_pb.DropDatabaseRequest>;
  requestDeserialize: grpc.deserialize<mongorpc_admin_pb.DropDatabaseRequest>;
  responseSerialize: grpc.serialize<mongorpc_value_pb.Empty>;
  responseDeserialize: grpc.deserialize<mongorpc_value_pb.Empty>;
}
interface IMongoRPCAdminService_ICreateCollection
  extends grpc.MethodDefinition<
    mongorpc_admin_pb.CreateCollectionRequest,
    mongorpc_value_pb.Empty
  > {
  path: "/mongorpc.MongoRPCAdmin/CreateCollection";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<mongorpc_admin_pb.CreateCollectionRequest>;
  requestDeserialize: grpc.deserialize<mongorpc_admin_pb.CreateCollectionRequest>;
  responseSerialize: grpc.serialize<mongorpc_value_pb.Empty>;
  responseDeserialize: grpc.deserialize<mongorpc_value_pb.Empty>;
}
interface IMongoRPCAdminService_IDropCollection
  extends grpc.MethodDefinition<
    mongorpc_admin_pb.DropCollectionRequest,
    mongorpc_value_pb.Empty
  > {
  path: "/mongorpc.MongoRPCAdmin/DropCollection";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<mongorpc_admin_pb.DropCollectionRequest>;
  requestDeserialize: grpc.deserialize<mongorpc_admin_pb.DropCollectionRequest>;
  responseSerialize: grpc.serialize<mongorpc_value_pb.Empty>;
  responseDeserialize: grpc.deserialize<mongorpc_value_pb.Empty>;
}
interface IMongoRPCAdminService_IListCollections
  extends grpc.MethodDefinition<
    mongorpc_admin_pb.ListCollectionsRequest,
    mongorpc_value_pb.Value
  > {
  path: "/mongorpc.MongoRPCAdmin/ListCollections";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<mongorpc_admin_pb.ListCollectionsRequest>;
  requestDeserialize: grpc.deserialize<mongorpc_admin_pb.ListCollectionsRequest>;
  responseSerialize: grpc.serialize<mongorpc_value_pb.Value>;
  responseDeserialize: grpc.deserialize<mongorpc_value_pb.Value>;
}
interface IMongoRPCAdminService_IListIndexes
  extends grpc.MethodDefinition<
    mongorpc_admin_pb.ListIndexesRequest,
    mongorpc_value_pb.Value
  > {
  path: "/mongorpc.MongoRPCAdmin/ListIndexes";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<mongorpc_admin_pb.ListIndexesRequest>;
  requestDeserialize: grpc.deserialize<mongorpc_admin_pb.ListIndexesRequest>;
  responseSerialize: grpc.serialize<mongorpc_value_pb.Value>;
  responseDeserialize: grpc.deserialize<mongorpc_value_pb.Value>;
}
interface IMongoRPCAdminService_ICreateIndex
  extends grpc.MethodDefinition<
    mongorpc_admin_pb.CreateIndexRequest,
    mongorpc_value_pb.Value
  > {
  path: "/mongorpc.MongoRPCAdmin/CreateIndex";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<mongorpc_admin_pb.CreateIndexRequest>;
  requestDeserialize: grpc.deserialize<mongorpc_admin_pb.CreateIndexRequest>;
  responseSerialize: grpc.serialize<mongorpc_value_pb.Value>;
  responseDeserialize: grpc.deserialize<mongorpc_value_pb.Value>;
}
interface IMongoRPCAdminService_IDropIndex
  extends grpc.MethodDefinition<
    mongorpc_admin_pb.DropIndexRequest,
    mongorpc_value_pb.Empty
  > {
  path: "/mongorpc.MongoRPCAdmin/DropIndex";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<mongorpc_admin_pb.DropIndexRequest>;
  requestDeserialize: grpc.deserialize<mongorpc_admin_pb.DropIndexRequest>;
  responseSerialize: grpc.serialize<mongorpc_value_pb.Empty>;
  responseDeserialize: grpc.deserialize<mongorpc_value_pb.Empty>;
}

export const MongoRPCAdminService: IMongoRPCAdminService;

export interface IMongoRPCAdminServer {
  listDatabases: grpc.handleUnaryCall<
    mongorpc_value_pb.Empty,
    mongorpc_value_pb.Value
  >;
  dropDatabase: grpc.handleUnaryCall<
    mongorpc_admin_pb.DropDatabaseRequest,
    mongorpc_value_pb.Empty
  >;
  createCollection: grpc.handleUnaryCall<
    mongorpc_admin_pb.CreateCollectionRequest,
    mongorpc_value_pb.Empty
  >;
  dropCollection: grpc.handleUnaryCall<
    mongorpc_admin_pb.DropCollectionRequest,
    mongorpc_value_pb.Empty
  >;
  listCollections: grpc.handleUnaryCall<
    mongorpc_admin_pb.ListCollectionsRequest,
    mongorpc_value_pb.Value
  >;
  listIndexes: grpc.handleUnaryCall<
    mongorpc_admin_pb.ListIndexesRequest,
    mongorpc_value_pb.Value
  >;
  createIndex: grpc.handleUnaryCall<
    mongorpc_admin_pb.CreateIndexRequest,
    mongorpc_value_pb.Value
  >;
  dropIndex: grpc.handleUnaryCall<
    mongorpc_admin_pb.DropIndexRequest,
    mongorpc_value_pb.Empty
  >;
}

export interface IMongoRPCAdminClient {
  listDatabases(
    request: mongorpc_value_pb.Empty,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  listDatabases(
    request: mongorpc_value_pb.Empty,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  listDatabases(
    request: mongorpc_value_pb.Empty,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  dropDatabase(
    request: mongorpc_admin_pb.DropDatabaseRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  dropDatabase(
    request: mongorpc_admin_pb.DropDatabaseRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  dropDatabase(
    request: mongorpc_admin_pb.DropDatabaseRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  createCollection(
    request: mongorpc_admin_pb.CreateCollectionRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  createCollection(
    request: mongorpc_admin_pb.CreateCollectionRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  createCollection(
    request: mongorpc_admin_pb.CreateCollectionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  dropCollection(
    request: mongorpc_admin_pb.DropCollectionRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  dropCollection(
    request: mongorpc_admin_pb.DropCollectionRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  dropCollection(
    request: mongorpc_admin_pb.DropCollectionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  listCollections(
    request: mongorpc_admin_pb.ListCollectionsRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  listCollections(
    request: mongorpc_admin_pb.ListCollectionsRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  listCollections(
    request: mongorpc_admin_pb.ListCollectionsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  listIndexes(
    request: mongorpc_admin_pb.ListIndexesRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  listIndexes(
    request: mongorpc_admin_pb.ListIndexesRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  listIndexes(
    request: mongorpc_admin_pb.ListIndexesRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  createIndex(
    request: mongorpc_admin_pb.CreateIndexRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  createIndex(
    request: mongorpc_admin_pb.CreateIndexRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  createIndex(
    request: mongorpc_admin_pb.CreateIndexRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  dropIndex(
    request: mongorpc_admin_pb.DropIndexRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  dropIndex(
    request: mongorpc_admin_pb.DropIndexRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  dropIndex(
    request: mongorpc_admin_pb.DropIndexRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
}

export class MongoRPCAdminClient
  extends grpc.Client
  implements IMongoRPCAdminClient
{
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  );
  public listDatabases(
    request: mongorpc_value_pb.Empty,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public listDatabases(
    request: mongorpc_value_pb.Empty,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public listDatabases(
    request: mongorpc_value_pb.Empty,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public dropDatabase(
    request: mongorpc_admin_pb.DropDatabaseRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  public dropDatabase(
    request: mongorpc_admin_pb.DropDatabaseRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  public dropDatabase(
    request: mongorpc_admin_pb.DropDatabaseRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  public createCollection(
    request: mongorpc_admin_pb.CreateCollectionRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  public createCollection(
    request: mongorpc_admin_pb.CreateCollectionRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  public createCollection(
    request: mongorpc_admin_pb.CreateCollectionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  public dropCollection(
    request: mongorpc_admin_pb.DropCollectionRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  public dropCollection(
    request: mongorpc_admin_pb.DropCollectionRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  public dropCollection(
    request: mongorpc_admin_pb.DropCollectionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  public listCollections(
    request: mongorpc_admin_pb.ListCollectionsRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public listCollections(
    request: mongorpc_admin_pb.ListCollectionsRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public listCollections(
    request: mongorpc_admin_pb.ListCollectionsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public listIndexes(
    request: mongorpc_admin_pb.ListIndexesRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public listIndexes(
    request: mongorpc_admin_pb.ListIndexesRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public listIndexes(
    request: mongorpc_admin_pb.ListIndexesRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public createIndex(
    request: mongorpc_admin_pb.CreateIndexRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public createIndex(
    request: mongorpc_admin_pb.CreateIndexRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public createIndex(
    request: mongorpc_admin_pb.CreateIndexRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Value
    ) => void
  ): grpc.ClientUnaryCall;
  public dropIndex(
    request: mongorpc_admin_pb.DropIndexRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  public dropIndex(
    request: mongorpc_admin_pb.DropIndexRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
  public dropIndex(
    request: mongorpc_admin_pb.DropIndexRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: mongorpc_value_pb.Empty
    ) => void
  ): grpc.ClientUnaryCall;
}
