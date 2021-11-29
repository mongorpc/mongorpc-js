// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2021 MongoRPC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var mongorpc_admin_pb = require('../mongorpc/admin_pb.js');
var mongorpc_value_pb = require('../mongorpc/value_pb.js');

function serialize_mongorpc_CreateCollectionRequest(arg) {
  if (!(arg instanceof mongorpc_admin_pb.CreateCollectionRequest)) {
    throw new Error('Expected argument of type mongorpc.CreateCollectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_CreateCollectionRequest(buffer_arg) {
  return mongorpc_admin_pb.CreateCollectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mongorpc_CreateIndexRequest(arg) {
  if (!(arg instanceof mongorpc_admin_pb.CreateIndexRequest)) {
    throw new Error('Expected argument of type mongorpc.CreateIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_CreateIndexRequest(buffer_arg) {
  return mongorpc_admin_pb.CreateIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mongorpc_DropCollectionRequest(arg) {
  if (!(arg instanceof mongorpc_admin_pb.DropCollectionRequest)) {
    throw new Error('Expected argument of type mongorpc.DropCollectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_DropCollectionRequest(buffer_arg) {
  return mongorpc_admin_pb.DropCollectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mongorpc_DropDatabaseRequest(arg) {
  if (!(arg instanceof mongorpc_admin_pb.DropDatabaseRequest)) {
    throw new Error('Expected argument of type mongorpc.DropDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_DropDatabaseRequest(buffer_arg) {
  return mongorpc_admin_pb.DropDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mongorpc_DropIndexRequest(arg) {
  if (!(arg instanceof mongorpc_admin_pb.DropIndexRequest)) {
    throw new Error('Expected argument of type mongorpc.DropIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_DropIndexRequest(buffer_arg) {
  return mongorpc_admin_pb.DropIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mongorpc_Empty(arg) {
  if (!(arg instanceof mongorpc_value_pb.Empty)) {
    throw new Error('Expected argument of type mongorpc.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_Empty(buffer_arg) {
  return mongorpc_value_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mongorpc_ListCollectionsRequest(arg) {
  if (!(arg instanceof mongorpc_admin_pb.ListCollectionsRequest)) {
    throw new Error('Expected argument of type mongorpc.ListCollectionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_ListCollectionsRequest(buffer_arg) {
  return mongorpc_admin_pb.ListCollectionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mongorpc_ListIndexesRequest(arg) {
  if (!(arg instanceof mongorpc_admin_pb.ListIndexesRequest)) {
    throw new Error('Expected argument of type mongorpc.ListIndexesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_ListIndexesRequest(buffer_arg) {
  return mongorpc_admin_pb.ListIndexesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mongorpc_Value(arg) {
  if (!(arg instanceof mongorpc_value_pb.Value)) {
    throw new Error('Expected argument of type mongorpc.Value');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_Value(buffer_arg) {
  return mongorpc_value_pb.Value.deserializeBinary(new Uint8Array(buffer_arg));
}


// MongoRPC Admin Service
var MongoRPCAdminService = exports.MongoRPCAdminService = {
  listDatabases: {
    path: '/mongorpc.MongoRPCAdmin/ListDatabases',
    requestStream: false,
    responseStream: false,
    requestType: mongorpc_value_pb.Empty,
    responseType: mongorpc_value_pb.Value,
    requestSerialize: serialize_mongorpc_Empty,
    requestDeserialize: deserialize_mongorpc_Empty,
    responseSerialize: serialize_mongorpc_Value,
    responseDeserialize: deserialize_mongorpc_Value,
  },
  dropDatabase: {
    path: '/mongorpc.MongoRPCAdmin/DropDatabase',
    requestStream: false,
    responseStream: false,
    requestType: mongorpc_admin_pb.DropDatabaseRequest,
    responseType: mongorpc_value_pb.Empty,
    requestSerialize: serialize_mongorpc_DropDatabaseRequest,
    requestDeserialize: deserialize_mongorpc_DropDatabaseRequest,
    responseSerialize: serialize_mongorpc_Empty,
    responseDeserialize: deserialize_mongorpc_Empty,
  },
  createCollection: {
    path: '/mongorpc.MongoRPCAdmin/CreateCollection',
    requestStream: false,
    responseStream: false,
    requestType: mongorpc_admin_pb.CreateCollectionRequest,
    responseType: mongorpc_value_pb.Empty,
    requestSerialize: serialize_mongorpc_CreateCollectionRequest,
    requestDeserialize: deserialize_mongorpc_CreateCollectionRequest,
    responseSerialize: serialize_mongorpc_Empty,
    responseDeserialize: deserialize_mongorpc_Empty,
  },
  dropCollection: {
    path: '/mongorpc.MongoRPCAdmin/DropCollection',
    requestStream: false,
    responseStream: false,
    requestType: mongorpc_admin_pb.DropCollectionRequest,
    responseType: mongorpc_value_pb.Empty,
    requestSerialize: serialize_mongorpc_DropCollectionRequest,
    requestDeserialize: deserialize_mongorpc_DropCollectionRequest,
    responseSerialize: serialize_mongorpc_Empty,
    responseDeserialize: deserialize_mongorpc_Empty,
  },
  listCollections: {
    path: '/mongorpc.MongoRPCAdmin/ListCollections',
    requestStream: false,
    responseStream: false,
    requestType: mongorpc_admin_pb.ListCollectionsRequest,
    responseType: mongorpc_value_pb.Value,
    requestSerialize: serialize_mongorpc_ListCollectionsRequest,
    requestDeserialize: deserialize_mongorpc_ListCollectionsRequest,
    responseSerialize: serialize_mongorpc_Value,
    responseDeserialize: deserialize_mongorpc_Value,
  },
  listIndexes: {
    path: '/mongorpc.MongoRPCAdmin/ListIndexes',
    requestStream: false,
    responseStream: false,
    requestType: mongorpc_admin_pb.ListIndexesRequest,
    responseType: mongorpc_value_pb.Value,
    requestSerialize: serialize_mongorpc_ListIndexesRequest,
    requestDeserialize: deserialize_mongorpc_ListIndexesRequest,
    responseSerialize: serialize_mongorpc_Value,
    responseDeserialize: deserialize_mongorpc_Value,
  },
  createIndex: {
    path: '/mongorpc.MongoRPCAdmin/CreateIndex',
    requestStream: false,
    responseStream: false,
    requestType: mongorpc_admin_pb.CreateIndexRequest,
    responseType: mongorpc_value_pb.Value,
    requestSerialize: serialize_mongorpc_CreateIndexRequest,
    requestDeserialize: deserialize_mongorpc_CreateIndexRequest,
    responseSerialize: serialize_mongorpc_Value,
    responseDeserialize: deserialize_mongorpc_Value,
  },
  dropIndex: {
    path: '/mongorpc.MongoRPCAdmin/DropIndex',
    requestStream: false,
    responseStream: false,
    requestType: mongorpc_admin_pb.DropIndexRequest,
    responseType: mongorpc_value_pb.Empty,
    requestSerialize: serialize_mongorpc_DropIndexRequest,
    requestDeserialize: deserialize_mongorpc_DropIndexRequest,
    responseSerialize: serialize_mongorpc_Empty,
    responseDeserialize: deserialize_mongorpc_Empty,
  },
  // TODO: Add more admin methods here
// rpc CreateUser(mongorpc.Value) returns (mongorpc.Value);
// rpc DropUser(mongorpc.Value) returns (mongorpc.Value);
// rpc ListUsers(mongorpc.Value) returns (mongorpc.Value);
// rpc CreateRole(mongorpc.Value) returns (mongorpc.Value);
// rpc DropRole(mongorpc.Value) returns (mongorpc.Value);
// rpc ListRoles(mongorpc.Value) returns (mongorpc.Value);
};

exports.MongoRPCAdminClient = grpc.makeGenericClientConstructor(MongoRPCAdminService);
