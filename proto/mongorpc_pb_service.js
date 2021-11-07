// package: mongorpc
// file: mongorpc.proto

var mongorpc_pb = require("./mongorpc_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MongoRPC = (function () {
  function MongoRPC() {}
  MongoRPC.serviceName = "mongorpc.MongoRPC";
  return MongoRPC;
}());

MongoRPC.ListCollections = {
  methodName: "ListCollections",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.ListCollectionsRequest,
  responseType: mongorpc_pb.ListCollectionsResponse
};

MongoRPC.GetDocument = {
  methodName: "GetDocument",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.GetDocumentRequest,
  responseType: mongorpc_pb.GetDocumentResponse
};

MongoRPC.ListDocuments = {
  methodName: "ListDocuments",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.ListDocumentsRequest,
  responseType: mongorpc_pb.ListDocumentsResponse
};

MongoRPC.CreateDocument = {
  methodName: "CreateDocument",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.CreateDocumentRequest,
  responseType: mongorpc_pb.CreateDocumentResponse
};

MongoRPC.UpdateDocument = {
  methodName: "UpdateDocument",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.UpdateDocumentRequest,
  responseType: mongorpc_pb.UpdateDocumentResponse
};

MongoRPC.DeleteDocument = {
  methodName: "DeleteDocument",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.DeleteDocumentRequest,
  responseType: mongorpc_pb.DeleteDocumentResponse
};

MongoRPC.CountDocuments = {
  methodName: "CountDocuments",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.CountDocumentsRequest,
  responseType: mongorpc_pb.CountDocumentsResponse
};

MongoRPC.Listen = {
  methodName: "Listen",
  service: MongoRPC,
  requestStream: false,
  responseStream: true,
  requestType: mongorpc_pb.ListenRequest,
  responseType: mongorpc_pb.ListenResponse
};

MongoRPC.CreateIndex = {
  methodName: "CreateIndex",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.CreateIndexRequest,
  responseType: mongorpc_pb.CreateIndexResponse
};

MongoRPC.ListIndexes = {
  methodName: "ListIndexes",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.ListIndexesRequest,
  responseType: mongorpc_pb.ListIndexesResponse
};

MongoRPC.DeleteIndex = {
  methodName: "DeleteIndex",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.DeleteIndexRequest,
  responseType: mongorpc_pb.DeleteIndexResponse
};

MongoRPC.Reindex = {
  methodName: "Reindex",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.ReindexRequest,
  responseType: mongorpc_pb.ReindexResponse
};

MongoRPC.Ping = {
  methodName: "Ping",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.Empty,
  responseType: mongorpc_pb.Empty
};

MongoRPC.CollectionStats = {
  methodName: "CollectionStats",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.CollectionStatsRequest,
  responseType: mongorpc_pb.CollectionStatsResponse
};

MongoRPC.CreateCollection = {
  methodName: "CreateCollection",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.CreateCollectionRequest,
  responseType: mongorpc_pb.CreateCollectionResponse
};

MongoRPC.RenameCollection = {
  methodName: "RenameCollection",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.RenameCollectionRequest,
  responseType: mongorpc_pb.RenameCollectionResponse
};

MongoRPC.DeleteCollection = {
  methodName: "DeleteCollection",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.DeleteCollectionRequest,
  responseType: mongorpc_pb.DeleteCollectionResponse
};

MongoRPC.HealthCheck = {
  methodName: "HealthCheck",
  service: MongoRPC,
  requestStream: false,
  responseStream: false,
  requestType: mongorpc_pb.HealthCheckRequest,
  responseType: mongorpc_pb.HealthCheckResponse
};

exports.MongoRPC = MongoRPC;

function MongoRPCClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MongoRPCClient.prototype.listCollections = function listCollections(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.ListCollections, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.getDocument = function getDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.GetDocument, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.listDocuments = function listDocuments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.ListDocuments, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.createDocument = function createDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.CreateDocument, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.updateDocument = function updateDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.UpdateDocument, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.deleteDocument = function deleteDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.DeleteDocument, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.countDocuments = function countDocuments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.CountDocuments, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.listen = function listen(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MongoRPC.Listen, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.createIndex = function createIndex(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.CreateIndex, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.listIndexes = function listIndexes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.ListIndexes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.deleteIndex = function deleteIndex(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.DeleteIndex, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.reindex = function reindex(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.Reindex, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.ping = function ping(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.Ping, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.collectionStats = function collectionStats(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.CollectionStats, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.createCollection = function createCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.CreateCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.renameCollection = function renameCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.RenameCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.deleteCollection = function deleteCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.DeleteCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MongoRPCClient.prototype.healthCheck = function healthCheck(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MongoRPC.HealthCheck, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.MongoRPCClient = MongoRPCClient;

