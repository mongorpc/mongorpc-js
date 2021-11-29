/**
 * @fileoverview gRPC-Web generated client stub for mongorpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var mongorpc_value_pb = require('../mongorpc/value_pb.js')
const proto = {};
proto.mongorpc = require('./admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mongorpc.MongoRPCAdminClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
proto.mongorpc.MongoRPCAdminPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 *   !proto.mongorpc.Empty,
 *   !proto.mongorpc.Value>}
 */
const methodDescriptor_MongoRPCAdmin_ListDatabases = new grpc.web.MethodDescriptor(
  '/mongorpc.MongoRPCAdmin/ListDatabases',
  grpc.web.MethodType.UNARY,
  mongorpc_value_pb.Empty,
  mongorpc_value_pb.Value,
  /**
   * @param {!proto.mongorpc.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mongorpc_value_pb.Value.deserializeBinary
);


/**
 * @param {!proto.mongorpc.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.Value)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.Value>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCAdminClient.prototype.listDatabases =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mongorpc.MongoRPCAdmin/ListDatabases',
      request,
      metadata || {},
      methodDescriptor_MongoRPCAdmin_ListDatabases,
      callback);
};


/**
 * @param {!proto.mongorpc.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.Value>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCAdminPromiseClient.prototype.listDatabases =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mongorpc.MongoRPCAdmin/ListDatabases',
      request,
      metadata || {},
      methodDescriptor_MongoRPCAdmin_ListDatabases);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.DropDatabaseRequest,
 *   !proto.mongorpc.Empty>}
 */
const methodDescriptor_MongoRPCAdmin_DropDatabase = new grpc.web.MethodDescriptor(
  '/mongorpc.MongoRPCAdmin/DropDatabase',
  grpc.web.MethodType.UNARY,
  proto.mongorpc.DropDatabaseRequest,
  mongorpc_value_pb.Empty,
  /**
   * @param {!proto.mongorpc.DropDatabaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mongorpc_value_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.mongorpc.DropDatabaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCAdminClient.prototype.dropDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mongorpc.MongoRPCAdmin/DropDatabase',
      request,
      metadata || {},
      methodDescriptor_MongoRPCAdmin_DropDatabase,
      callback);
};


/**
 * @param {!proto.mongorpc.DropDatabaseRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.Empty>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCAdminPromiseClient.prototype.dropDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mongorpc.MongoRPCAdmin/DropDatabase',
      request,
      metadata || {},
      methodDescriptor_MongoRPCAdmin_DropDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.CreateCollectionRequest,
 *   !proto.mongorpc.Empty>}
 */
const methodDescriptor_MongoRPCAdmin_CreateCollection = new grpc.web.MethodDescriptor(
  '/mongorpc.MongoRPCAdmin/CreateCollection',
  grpc.web.MethodType.UNARY,
  proto.mongorpc.CreateCollectionRequest,
  mongorpc_value_pb.Empty,
  /**
   * @param {!proto.mongorpc.CreateCollectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mongorpc_value_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.mongorpc.CreateCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCAdminClient.prototype.createCollection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mongorpc.MongoRPCAdmin/CreateCollection',
      request,
      metadata || {},
      methodDescriptor_MongoRPCAdmin_CreateCollection,
      callback);
};


/**
 * @param {!proto.mongorpc.CreateCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.Empty>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCAdminPromiseClient.prototype.createCollection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mongorpc.MongoRPCAdmin/CreateCollection',
      request,
      metadata || {},
      methodDescriptor_MongoRPCAdmin_CreateCollection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.DropCollectionRequest,
 *   !proto.mongorpc.Empty>}
 */
const methodDescriptor_MongoRPCAdmin_DropCollection = new grpc.web.MethodDescriptor(
  '/mongorpc.MongoRPCAdmin/DropCollection',
  grpc.web.MethodType.UNARY,
  proto.mongorpc.DropCollectionRequest,
  mongorpc_value_pb.Empty,
  /**
   * @param {!proto.mongorpc.DropCollectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mongorpc_value_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.mongorpc.DropCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCAdminClient.prototype.dropCollection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mongorpc.MongoRPCAdmin/DropCollection',
      request,
      metadata || {},
      methodDescriptor_MongoRPCAdmin_DropCollection,
      callback);
};


/**
 * @param {!proto.mongorpc.DropCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.Empty>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCAdminPromiseClient.prototype.dropCollection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mongorpc.MongoRPCAdmin/DropCollection',
      request,
      metadata || {},
      methodDescriptor_MongoRPCAdmin_DropCollection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.ListCollectionsRequest,
 *   !proto.mongorpc.Value>}
 */
const methodDescriptor_MongoRPCAdmin_ListCollections = new grpc.web.MethodDescriptor(
  '/mongorpc.MongoRPCAdmin/ListCollections',
  grpc.web.MethodType.UNARY,
  proto.mongorpc.ListCollectionsRequest,
  mongorpc_value_pb.Value,
  /**
   * @param {!proto.mongorpc.ListCollectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mongorpc_value_pb.Value.deserializeBinary
);


/**
 * @param {!proto.mongorpc.ListCollectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.Value)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.Value>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCAdminClient.prototype.listCollections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mongorpc.MongoRPCAdmin/ListCollections',
      request,
      metadata || {},
      methodDescriptor_MongoRPCAdmin_ListCollections,
      callback);
};


/**
 * @param {!proto.mongorpc.ListCollectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.Value>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCAdminPromiseClient.prototype.listCollections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mongorpc.MongoRPCAdmin/ListCollections',
      request,
      metadata || {},
      methodDescriptor_MongoRPCAdmin_ListCollections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.ListIndexesRequest,
 *   !proto.mongorpc.Value>}
 */
const methodDescriptor_MongoRPCAdmin_ListIndexes = new grpc.web.MethodDescriptor(
  '/mongorpc.MongoRPCAdmin/ListIndexes',
  grpc.web.MethodType.UNARY,
  proto.mongorpc.ListIndexesRequest,
  mongorpc_value_pb.Value,
  /**
   * @param {!proto.mongorpc.ListIndexesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mongorpc_value_pb.Value.deserializeBinary
);


/**
 * @param {!proto.mongorpc.ListIndexesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.Value)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.Value>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCAdminClient.prototype.listIndexes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mongorpc.MongoRPCAdmin/ListIndexes',
      request,
      metadata || {},
      methodDescriptor_MongoRPCAdmin_ListIndexes,
      callback);
};


/**
 * @param {!proto.mongorpc.ListIndexesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.Value>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCAdminPromiseClient.prototype.listIndexes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mongorpc.MongoRPCAdmin/ListIndexes',
      request,
      metadata || {},
      methodDescriptor_MongoRPCAdmin_ListIndexes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.CreateIndexRequest,
 *   !proto.mongorpc.Value>}
 */
const methodDescriptor_MongoRPCAdmin_CreateIndex = new grpc.web.MethodDescriptor(
  '/mongorpc.MongoRPCAdmin/CreateIndex',
  grpc.web.MethodType.UNARY,
  proto.mongorpc.CreateIndexRequest,
  mongorpc_value_pb.Value,
  /**
   * @param {!proto.mongorpc.CreateIndexRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mongorpc_value_pb.Value.deserializeBinary
);


/**
 * @param {!proto.mongorpc.CreateIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.Value)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.Value>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCAdminClient.prototype.createIndex =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mongorpc.MongoRPCAdmin/CreateIndex',
      request,
      metadata || {},
      methodDescriptor_MongoRPCAdmin_CreateIndex,
      callback);
};


/**
 * @param {!proto.mongorpc.CreateIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.Value>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCAdminPromiseClient.prototype.createIndex =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mongorpc.MongoRPCAdmin/CreateIndex',
      request,
      metadata || {},
      methodDescriptor_MongoRPCAdmin_CreateIndex);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mongorpc.DropIndexRequest,
 *   !proto.mongorpc.Empty>}
 */
const methodDescriptor_MongoRPCAdmin_DropIndex = new grpc.web.MethodDescriptor(
  '/mongorpc.MongoRPCAdmin/DropIndex',
  grpc.web.MethodType.UNARY,
  proto.mongorpc.DropIndexRequest,
  mongorpc_value_pb.Empty,
  /**
   * @param {!proto.mongorpc.DropIndexRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mongorpc_value_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.mongorpc.DropIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mongorpc.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mongorpc.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mongorpc.MongoRPCAdminClient.prototype.dropIndex =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mongorpc.MongoRPCAdmin/DropIndex',
      request,
      metadata || {},
      methodDescriptor_MongoRPCAdmin_DropIndex,
      callback);
};


/**
 * @param {!proto.mongorpc.DropIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mongorpc.Empty>}
 *     Promise that resolves to the response
 */
proto.mongorpc.MongoRPCAdminPromiseClient.prototype.dropIndex =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mongorpc.MongoRPCAdmin/DropIndex',
      request,
      metadata || {},
      methodDescriptor_MongoRPCAdmin_DropIndex);
};


module.exports = proto.mongorpc;

