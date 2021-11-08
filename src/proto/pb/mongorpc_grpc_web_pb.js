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
 *   !proto.mongorpc.ListCollectionsRequest,
 *   !proto.mongorpc.ListCollectionsResponse>}
 */
const methodDescriptor_MongoRPC_ListCollections = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/ListCollections",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.ListCollectionsRequest,
  proto.mongorpc.ListCollectionsResponse,
  /**
   * @param {!proto.mongorpc.ListCollectionsRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.mongorpc.ListCollectionsResponse.deserializeBinary
);

/**
 * @param {!proto.mongorpc.ListCollectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.ListCollectionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.ListCollectionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.listCollections = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/ListCollections",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_ListCollections,
    callback
  );
};

/**
 * @param {!proto.mongorpc.ListCollectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.ListCollectionsResponse>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.listCollections = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/ListCollections",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_ListCollections
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.GetDocumentRequest,
 *   !proto.mongorpc.GetDocumentResponse>}
 */
const methodDescriptor_MongoRPC_GetDocument = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/GetDocument",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.GetDocumentRequest,
  proto.mongorpc.GetDocumentResponse,
  /**
   * @param {!proto.mongorpc.GetDocumentRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.mongorpc.GetDocumentResponse.deserializeBinary
);

/**
 * @param {!proto.mongorpc.GetDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.GetDocumentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.GetDocumentResponse>|undefined}
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
 * @return {!Promise<!proto.mongorpc.GetDocumentResponse>}
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
 *   !proto.mongorpc.ListDocumentsRequest,
 *   !proto.mongorpc.ListDocumentsResponse>}
 */
const methodDescriptor_MongoRPC_ListDocuments = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/ListDocuments",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.ListDocumentsRequest,
  proto.mongorpc.ListDocumentsResponse,
  /**
   * @param {!proto.mongorpc.ListDocumentsRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.mongorpc.ListDocumentsResponse.deserializeBinary
);

/**
 * @param {!proto.mongorpc.ListDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.ListDocumentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.ListDocumentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.listDocuments = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/ListDocuments",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_ListDocuments,
    callback
  );
};

/**
 * @param {!proto.mongorpc.ListDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.ListDocumentsResponse>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.listDocuments = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/ListDocuments",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_ListDocuments
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.CreateDocumentRequest,
 *   !proto.mongorpc.CreateDocumentResponse>}
 */
const methodDescriptor_MongoRPC_CreateDocument = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/CreateDocument",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.CreateDocumentRequest,
  proto.mongorpc.CreateDocumentResponse,
  /**
   * @param {!proto.mongorpc.CreateDocumentRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.mongorpc.CreateDocumentResponse.deserializeBinary
);

/**
 * @param {!proto.mongorpc.CreateDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.CreateDocumentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.CreateDocumentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.createDocument = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/CreateDocument",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_CreateDocument,
    callback
  );
};

/**
 * @param {!proto.mongorpc.CreateDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.CreateDocumentResponse>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.createDocument = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/CreateDocument",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_CreateDocument
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.UpdateDocumentRequest,
 *   !proto.mongorpc.UpdateDocumentResponse>}
 */
const methodDescriptor_MongoRPC_UpdateDocument = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/UpdateDocument",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.UpdateDocumentRequest,
  proto.mongorpc.UpdateDocumentResponse,
  /**
   * @param {!proto.mongorpc.UpdateDocumentRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.mongorpc.UpdateDocumentResponse.deserializeBinary
);

/**
 * @param {!proto.mongorpc.UpdateDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.UpdateDocumentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.UpdateDocumentResponse>|undefined}
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
 * @return {!Promise<!proto.mongorpc.UpdateDocumentResponse>}
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
 *   !proto.mongorpc.DeleteDocumentResponse>}
 */
const methodDescriptor_MongoRPC_DeleteDocument = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/DeleteDocument",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.DeleteDocumentRequest,
  proto.mongorpc.DeleteDocumentResponse,
  /**
   * @param {!proto.mongorpc.DeleteDocumentRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.mongorpc.DeleteDocumentResponse.deserializeBinary
);

/**
 * @param {!proto.mongorpc.DeleteDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.DeleteDocumentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.DeleteDocumentResponse>|undefined}
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
 * @return {!Promise<!proto.mongorpc.DeleteDocumentResponse>}
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
 *   !proto.mongorpc.CountDocumentsRequest,
 *   !proto.mongorpc.CountDocumentsResponse>}
 */
const methodDescriptor_MongoRPC_CountDocuments = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/CountDocuments",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.CountDocumentsRequest,
  proto.mongorpc.CountDocumentsResponse,
  /**
   * @param {!proto.mongorpc.CountDocumentsRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.mongorpc.CountDocumentsResponse.deserializeBinary
);

/**
 * @param {!proto.mongorpc.CountDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.CountDocumentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.CountDocumentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.countDocuments = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/CountDocuments",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_CountDocuments,
    callback
  );
};

/**
 * @param {!proto.mongorpc.CountDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.CountDocumentsResponse>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.countDocuments = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/CountDocuments",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_CountDocuments
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

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.CreateIndexRequest,
 *   !proto.mongorpc.CreateIndexResponse>}
 */
const methodDescriptor_MongoRPC_CreateIndex = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/CreateIndex",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.CreateIndexRequest,
  proto.mongorpc.CreateIndexResponse,
  /**
   * @param {!proto.mongorpc.CreateIndexRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.mongorpc.CreateIndexResponse.deserializeBinary
);

/**
 * @param {!proto.mongorpc.CreateIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.CreateIndexResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.CreateIndexResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.createIndex = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/CreateIndex",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_CreateIndex,
    callback
  );
};

/**
 * @param {!proto.mongorpc.CreateIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.CreateIndexResponse>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.createIndex = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/CreateIndex",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_CreateIndex
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.ListIndexesRequest,
 *   !proto.mongorpc.ListIndexesResponse>}
 */
const methodDescriptor_MongoRPC_ListIndexes = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/ListIndexes",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.ListIndexesRequest,
  proto.mongorpc.ListIndexesResponse,
  /**
   * @param {!proto.mongorpc.ListIndexesRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.mongorpc.ListIndexesResponse.deserializeBinary
);

/**
 * @param {!proto.mongorpc.ListIndexesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.ListIndexesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.ListIndexesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.listIndexes = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/ListIndexes",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_ListIndexes,
    callback
  );
};

/**
 * @param {!proto.mongorpc.ListIndexesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.ListIndexesResponse>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.listIndexes = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/ListIndexes",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_ListIndexes
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.DeleteIndexRequest,
 *   !proto.mongorpc.DeleteIndexResponse>}
 */
const methodDescriptor_MongoRPC_DeleteIndex = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/DeleteIndex",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.DeleteIndexRequest,
  proto.mongorpc.DeleteIndexResponse,
  /**
   * @param {!proto.mongorpc.DeleteIndexRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.mongorpc.DeleteIndexResponse.deserializeBinary
);

/**
 * @param {!proto.mongorpc.DeleteIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.DeleteIndexResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.DeleteIndexResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.deleteIndex = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/DeleteIndex",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_DeleteIndex,
    callback
  );
};

/**
 * @param {!proto.mongorpc.DeleteIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.DeleteIndexResponse>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.deleteIndex = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/DeleteIndex",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_DeleteIndex
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.ReindexRequest,
 *   !proto.mongorpc.ReindexResponse>}
 */
const methodDescriptor_MongoRPC_Reindex = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/Reindex",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.ReindexRequest,
  proto.mongorpc.ReindexResponse,
  /**
   * @param {!proto.mongorpc.ReindexRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.mongorpc.ReindexResponse.deserializeBinary
);

/**
 * @param {!proto.mongorpc.ReindexRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.ReindexResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.ReindexResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.reindex = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/Reindex",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_Reindex,
    callback
  );
};

/**
 * @param {!proto.mongorpc.ReindexRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.ReindexResponse>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.reindex = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/Reindex",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_Reindex
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.Empty,
 *   !proto.mongorpc.Empty>}
 */
const methodDescriptor_MongoRPC_Ping = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/Ping",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.Empty,
  proto.mongorpc.Empty,
  /**
   * @param {!proto.mongorpc.Empty} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.mongorpc.Empty.deserializeBinary
);

/**
 * @param {!proto.mongorpc.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.ping = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/Ping",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_Ping,
    callback
  );
};

/**
 * @param {!proto.mongorpc.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.Empty>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.ping = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/Ping",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_Ping
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.CollectionStatsRequest,
 *   !proto.mongorpc.CollectionStatsResponse>}
 */
const methodDescriptor_MongoRPC_CollectionStats = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/CollectionStats",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.CollectionStatsRequest,
  proto.mongorpc.CollectionStatsResponse,
  /**
   * @param {!proto.mongorpc.CollectionStatsRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.mongorpc.CollectionStatsResponse.deserializeBinary
);

/**
 * @param {!proto.mongorpc.CollectionStatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.CollectionStatsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.CollectionStatsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.collectionStats = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/CollectionStats",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_CollectionStats,
    callback
  );
};

/**
 * @param {!proto.mongorpc.CollectionStatsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.CollectionStatsResponse>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.collectionStats = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/CollectionStats",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_CollectionStats
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.CreateCollectionRequest,
 *   !proto.mongorpc.CreateCollectionResponse>}
 */
const methodDescriptor_MongoRPC_CreateCollection =
  new grpc.web.MethodDescriptor(
    "/mongorpc.MongoRPC/CreateCollection",
    grpc.web.MethodType.UNARY,
    proto.mongorpc.CreateCollectionRequest,
    proto.mongorpc.CreateCollectionResponse,
    /**
     * @param {!proto.mongorpc.CreateCollectionRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.mongorpc.CreateCollectionResponse.deserializeBinary
  );

/**
 * @param {!proto.mongorpc.CreateCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.CreateCollectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.CreateCollectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.createCollection = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/CreateCollection",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_CreateCollection,
    callback
  );
};

/**
 * @param {!proto.mongorpc.CreateCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.CreateCollectionResponse>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.createCollection = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/CreateCollection",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_CreateCollection
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.RenameCollectionRequest,
 *   !proto.mongorpc.RenameCollectionResponse>}
 */
const methodDescriptor_MongoRPC_RenameCollection =
  new grpc.web.MethodDescriptor(
    "/mongorpc.MongoRPC/RenameCollection",
    grpc.web.MethodType.UNARY,
    proto.mongorpc.RenameCollectionRequest,
    proto.mongorpc.RenameCollectionResponse,
    /**
     * @param {!proto.mongorpc.RenameCollectionRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.mongorpc.RenameCollectionResponse.deserializeBinary
  );

/**
 * @param {!proto.mongorpc.RenameCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.RenameCollectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.RenameCollectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.renameCollection = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/RenameCollection",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_RenameCollection,
    callback
  );
};

/**
 * @param {!proto.mongorpc.RenameCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.RenameCollectionResponse>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.renameCollection = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/RenameCollection",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_RenameCollection
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.DeleteCollectionRequest,
 *   !proto.mongorpc.DeleteCollectionResponse>}
 */
const methodDescriptor_MongoRPC_DeleteCollection =
  new grpc.web.MethodDescriptor(
    "/mongorpc.MongoRPC/DeleteCollection",
    grpc.web.MethodType.UNARY,
    proto.mongorpc.DeleteCollectionRequest,
    proto.mongorpc.DeleteCollectionResponse,
    /**
     * @param {!proto.mongorpc.DeleteCollectionRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.mongorpc.DeleteCollectionResponse.deserializeBinary
  );

/**
 * @param {!proto.mongorpc.DeleteCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.DeleteCollectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.DeleteCollectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.deleteCollection = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/DeleteCollection",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_DeleteCollection,
    callback
  );
};

/**
 * @param {!proto.mongorpc.DeleteCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.DeleteCollectionResponse>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.deleteCollection = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/DeleteCollection",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_DeleteCollection
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.HealthCheckRequest,
 *   !proto.mongorpc.HealthCheckResponse>}
 */
const methodDescriptor_MongoRPC_HealthCheck = new grpc.web.MethodDescriptor(
  "/mongorpc.MongoRPC/HealthCheck",
  grpc.web.MethodType.UNARY,
  proto.mongorpc.HealthCheckRequest,
  proto.mongorpc.HealthCheckResponse,
  /**
   * @param {!proto.mongorpc.HealthCheckRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.mongorpc.HealthCheckResponse.deserializeBinary
);

/**
 * @param {!proto.mongorpc.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.HealthCheckResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.HealthCheckResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCClient.prototype.healthCheck = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/mongorpc.MongoRPC/HealthCheck",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_HealthCheck,
    callback
  );
};

/**
 * @param {!proto.mongorpc.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.HealthCheckResponse>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCPromiseClient.prototype.healthCheck = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/mongorpc.MongoRPC/HealthCheck",
    request,
    metadata || {},
    methodDescriptor_MongoRPC_HealthCheck
  );
};

module.exports = proto.mongorpc;
