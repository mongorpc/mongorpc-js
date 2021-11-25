/**
 * @fileoverview gRPC-Web generated client stub for mongorpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {};
grpc.web = require("grpc-web");

var mongorpc_value_pb = require("../mongorpc/value_pb.js");
const proto = {};
proto.mongorpc = require("./mongorpc_pb.js");

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mongorpc.MongoRPCClient = function (hostname, credentials, options) {
  if (!options) options = {};
  options.format = "text";

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;
};

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mongorpc.MongoRPCPromiseClient = function (
  hostname,
  credentials,
  options
) {
  if (!options) options = {};
  options.format = "text";

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.GetDocumentRequest,
 *   !proto.mongorpc.Value>}
 */
const methodDescriptor_MongoRPC_GetDocument = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/GetDocument",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.GetDocumentRequest,
  mongorpc_value_pb.Value,
  /**
   * @param {!proto.mongorpc.GetDocumentRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  mongorpc_value_pb.Value.deserializeBinary
);

/**
 * @param {!proto.mongorpc.GetDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.Value)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.Value>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.getDocument = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/GetDocument",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_GetDocument,
    callback
  );
};

/**
 * @param {!proto.mongorpc.GetDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.Value>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.getDocument = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/GetDocument",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_GetDocument
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.InsertDocumentRequest,
 *   !proto.mongorpc.ObjectId>}
 */
const methodDescriptor_MongoRPC_InsertDocument = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/InsertDocument",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.InsertDocumentRequest,
  mongorpc_value_pb.ObjectId,
  /**
   * @param {!proto.mongorpc.InsertDocumentRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  mongorpc_value_pb.ObjectId.deserializeBinary
);

/**
 * @param {!proto.mongorpc.InsertDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.ObjectId)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.ObjectId>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.insertDocument = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/InsertDocument",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_InsertDocument,
    callback
  );
};

/**
 * @param {!proto.mongorpc.InsertDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.ObjectId>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.insertDocument = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/InsertDocument",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_InsertDocument
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.UpdateDocumentRequest,
 *   !proto.mongorpc.Value>}
 */
const methodDescriptor_MongoRPC_UpdateDocument = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/UpdateDocument",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.UpdateDocumentRequest,
  mongorpc_value_pb.Value,
  /**
   * @param {!proto.mongorpc.UpdateDocumentRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  mongorpc_value_pb.Value.deserializeBinary
);

/**
 * @param {!proto.mongorpc.UpdateDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.Value)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.Value>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.updateDocument = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/UpdateDocument",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_UpdateDocument,
    callback
  );
};

/**
 * @param {!proto.mongorpc.UpdateDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.Value>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.updateDocument = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/UpdateDocument",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_UpdateDocument
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.DeleteDocumentRequest,
 *   !proto.mongorpc.Value>}
 */
const methodDescriptor_MongoRPC_DeleteDocument = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/DeleteDocument",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.DeleteDocumentRequest,
  mongorpc_value_pb.Value,
  /**
   * @param {!proto.mongorpc.DeleteDocumentRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  mongorpc_value_pb.Value.deserializeBinary
);

/**
 * @param {!proto.mongorpc.DeleteDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.Value)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.Value>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.deleteDocument = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/DeleteDocument",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_DeleteDocument,
    callback
  );
};

/**
 * @param {!proto.mongorpc.DeleteDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.Value>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.deleteDocument = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/DeleteDocument",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_DeleteDocument
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.BulkInsertDocumentsRequest,
 *   !proto.mongorpc.Value>}
 */
const methodDescriptor_MongoRPC_BulkInsertDocuments =
  new grpc.web.MethodDescriptor(
    "/mongorpc.MongoRPC/BulkInsertDocuments",
    grpc.web.MethodType.UNARY,
    proto.mongorpc.BulkInsertDocumentsRequest,
    mongorpc_value_pb.Value,
    /**
     * @param {!proto.mongorpc.BulkInsertDocumentsRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    mongorpc_value_pb.Value.deserializeBinary
  );

/**
 * @param {!proto.mongorpc.BulkInsertDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.Value)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.Value>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.bulkInsertDocuments = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/BulkInsertDocuments",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_BulkInsertDocuments,
    callback
  );
};

/**
 * @param {!proto.mongorpc.BulkInsertDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.Value>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.bulkInsertDocuments = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/BulkInsertDocuments",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_BulkInsertDocuments
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.QueryDocumentsRequest,
 *   !proto.mongorpc.Value>}
 */
const methodDescriptor_MongoRPC_QueryDocuments = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/QueryDocuments",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.QueryDocumentsRequest,
  mongorpc_value_pb.Value,
  /**
   * @param {!proto.mongorpc.QueryDocumentsRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  mongorpc_value_pb.Value.deserializeBinary
);

/**
 * @param {!proto.mongorpc.QueryDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.Value)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.Value>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.queryDocuments = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/QueryDocuments",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_QueryDocuments,
    callback
  );
};

/**
 * @param {!proto.mongorpc.QueryDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.Value>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.queryDocuments = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/QueryDocuments",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_QueryDocuments
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.ListenRequest,
 *   !proto.mongorpc.ListenResponse>}
 */
const methodDescriptor_MongoRPC_Listen = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/Listen",
  grpc.web.MethodType.SERVER_STREAMING,
  proto.mongorpc.ListenRequest,
  proto.mongorpc.ListenResponse,
  /**
   * @param {!proto.mongorpc.ListenRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.mongorpc.ListenResponse.deserializeBinary
);

/**
 * @param {!proto.mongorpc.ListenRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.ListenResponse>}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.listen = function (request, metadata) {
  return this.client_.serverStreaming(
    this.hostname_ + "/mongorpc.MongoRPC/Listen",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_Listen
  );
};

/**
 * @param {!proto.mongorpc.ListenRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.ListenResponse>}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.listen = function (
  request,
  metadata
) {
  return this.client_.serverStreaming(
    this.hostname_ + "/mongorpc.MongoRPC/Listen",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_Listen
  );
};

module.exports = proto.mongorpc;
