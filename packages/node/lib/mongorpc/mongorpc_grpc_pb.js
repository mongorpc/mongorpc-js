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
var mongorpc_mongorpc_pb = require('../mongorpc/mongorpc_pb.js');
var mongorpc_value_pb = require('../mongorpc/value_pb.js');

function serialize_mongorpc_BulkInsertDocumentsRequest(arg) {
  if (!(arg instanceof mongorpc_mongorpc_pb.BulkInsertDocumentsRequest)) {
    throw new Error('Expected argument of type mongorpc.BulkInsertDocumentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_BulkInsertDocumentsRequest(buffer_arg) {
  return mongorpc_mongorpc_pb.BulkInsertDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mongorpc_DeleteDocumentRequest(arg) {
  if (!(arg instanceof mongorpc_mongorpc_pb.DeleteDocumentRequest)) {
    throw new Error('Expected argument of type mongorpc.DeleteDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_DeleteDocumentRequest(buffer_arg) {
  return mongorpc_mongorpc_pb.DeleteDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mongorpc_GetDocumentRequest(arg) {
  if (!(arg instanceof mongorpc_mongorpc_pb.GetDocumentRequest)) {
    throw new Error('Expected argument of type mongorpc.GetDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_GetDocumentRequest(buffer_arg) {
  return mongorpc_mongorpc_pb.GetDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mongorpc_InsertDocumentRequest(arg) {
  if (!(arg instanceof mongorpc_mongorpc_pb.InsertDocumentRequest)) {
    throw new Error('Expected argument of type mongorpc.InsertDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_InsertDocumentRequest(buffer_arg) {
  return mongorpc_mongorpc_pb.InsertDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mongorpc_ListenRequest(arg) {
  if (!(arg instanceof mongorpc_mongorpc_pb.ListenRequest)) {
    throw new Error('Expected argument of type mongorpc.ListenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_ListenRequest(buffer_arg) {
  return mongorpc_mongorpc_pb.ListenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mongorpc_ListenResponse(arg) {
  if (!(arg instanceof mongorpc_mongorpc_pb.ListenResponse)) {
    throw new Error('Expected argument of type mongorpc.ListenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_ListenResponse(buffer_arg) {
  return mongorpc_mongorpc_pb.ListenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mongorpc_ObjectId(arg) {
  if (!(arg instanceof mongorpc_value_pb.ObjectId)) {
    throw new Error('Expected argument of type mongorpc.ObjectId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_ObjectId(buffer_arg) {
  return mongorpc_value_pb.ObjectId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mongorpc_QueryDocumentsRequest(arg) {
  if (!(arg instanceof mongorpc_mongorpc_pb.QueryDocumentsRequest)) {
    throw new Error('Expected argument of type mongorpc.QueryDocumentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_QueryDocumentsRequest(buffer_arg) {
  return mongorpc_mongorpc_pb.QueryDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mongorpc_UpdateDocumentRequest(arg) {
  if (!(arg instanceof mongorpc_mongorpc_pb.UpdateDocumentRequest)) {
    throw new Error('Expected argument of type mongorpc.UpdateDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mongorpc_UpdateDocumentRequest(buffer_arg) {
  return mongorpc_mongorpc_pb.UpdateDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// MongoRPC
var MongoRPCService = exports.MongoRPCService = {
  getDocument: {
    path: '/mongorpc.MongoRPC/GetDocument',
    requestStream: false,
    responseStream: false,
    requestType: mongorpc_mongorpc_pb.GetDocumentRequest,
    responseType: mongorpc_value_pb.Value,
    requestSerialize: serialize_mongorpc_GetDocumentRequest,
    requestDeserialize: deserialize_mongorpc_GetDocumentRequest,
    responseSerialize: serialize_mongorpc_Value,
    responseDeserialize: deserialize_mongorpc_Value,
  },
  insertDocument: {
    path: '/mongorpc.MongoRPC/InsertDocument',
    requestStream: false,
    responseStream: false,
    requestType: mongorpc_mongorpc_pb.InsertDocumentRequest,
    responseType: mongorpc_value_pb.ObjectId,
    requestSerialize: serialize_mongorpc_InsertDocumentRequest,
    requestDeserialize: deserialize_mongorpc_InsertDocumentRequest,
    responseSerialize: serialize_mongorpc_ObjectId,
    responseDeserialize: deserialize_mongorpc_ObjectId,
  },
  updateDocument: {
    path: '/mongorpc.MongoRPC/UpdateDocument',
    requestStream: false,
    responseStream: false,
    requestType: mongorpc_mongorpc_pb.UpdateDocumentRequest,
    responseType: mongorpc_value_pb.Value,
    requestSerialize: serialize_mongorpc_UpdateDocumentRequest,
    requestDeserialize: deserialize_mongorpc_UpdateDocumentRequest,
    responseSerialize: serialize_mongorpc_Value,
    responseDeserialize: deserialize_mongorpc_Value,
  },
  deleteDocument: {
    path: '/mongorpc.MongoRPC/DeleteDocument',
    requestStream: false,
    responseStream: false,
    requestType: mongorpc_mongorpc_pb.DeleteDocumentRequest,
    responseType: mongorpc_value_pb.Value,
    requestSerialize: serialize_mongorpc_DeleteDocumentRequest,
    requestDeserialize: deserialize_mongorpc_DeleteDocumentRequest,
    responseSerialize: serialize_mongorpc_Value,
    responseDeserialize: deserialize_mongorpc_Value,
  },
  bulkInsertDocuments: {
    path: '/mongorpc.MongoRPC/BulkInsertDocuments',
    requestStream: false,
    responseStream: false,
    requestType: mongorpc_mongorpc_pb.BulkInsertDocumentsRequest,
    responseType: mongorpc_value_pb.Value,
    requestSerialize: serialize_mongorpc_BulkInsertDocumentsRequest,
    requestDeserialize: deserialize_mongorpc_BulkInsertDocumentsRequest,
    responseSerialize: serialize_mongorpc_Value,
    responseDeserialize: deserialize_mongorpc_Value,
  },
  queryDocuments: {
    path: '/mongorpc.MongoRPC/QueryDocuments',
    requestStream: false,
    responseStream: false,
    requestType: mongorpc_mongorpc_pb.QueryDocumentsRequest,
    responseType: mongorpc_value_pb.Value,
    requestSerialize: serialize_mongorpc_QueryDocumentsRequest,
    requestDeserialize: deserialize_mongorpc_QueryDocumentsRequest,
    responseSerialize: serialize_mongorpc_Value,
    responseDeserialize: deserialize_mongorpc_Value,
  },
  listen: {
    path: '/mongorpc.MongoRPC/Listen',
    requestStream: false,
    responseStream: true,
    requestType: mongorpc_mongorpc_pb.ListenRequest,
    responseType: mongorpc_mongorpc_pb.ListenResponse,
    requestSerialize: serialize_mongorpc_ListenRequest,
    requestDeserialize: deserialize_mongorpc_ListenRequest,
    responseSerialize: serialize_mongorpc_ListenResponse,
    responseDeserialize: deserialize_mongorpc_ListenResponse,
  },
};

exports.MongoRPCClient = grpc.makeGenericClientConstructor(MongoRPCService);
