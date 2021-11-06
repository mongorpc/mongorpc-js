/**
 * @fileoverview gRPC-Web generated client stub for mongorpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

import * as grpcWeb from "grpc-web";

import * as mongorpc_pb from "./mongorpc_pb";

export class MongoRPCClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string };
  options_: null | { [index: string]: any };

  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any }
  ) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options["format"] = "text";

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListCollections = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/ListCollections",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.ListCollectionsRequest,
    mongorpc_pb.ListCollectionsResponse,
    (request: mongorpc_pb.ListCollectionsRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.ListCollectionsResponse.deserializeBinary
  );

  listCollections(
    request: mongorpc_pb.ListCollectionsRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.ListCollectionsResponse>;

  listCollections(
    request: mongorpc_pb.ListCollectionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.ListCollectionsResponse
    ) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.ListCollectionsResponse>;

  listCollections(
    request: mongorpc_pb.ListCollectionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.ListCollectionsResponse
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/ListCollections",
        request,
        metadata || {},
        this.methodInfoListCollections,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/ListCollections",
      request,
      metadata || {},
      this.methodInfoListCollections
    );
  }

  methodInfoGetDocument = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/GetDocument",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.GetDocumentRequest,
    mongorpc_pb.GetDocumentResponse,
    (request: mongorpc_pb.GetDocumentRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.GetDocumentResponse.deserializeBinary
  );

  getDocument(
    request: mongorpc_pb.GetDocumentRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.GetDocumentResponse>;

  getDocument(
    request: mongorpc_pb.GetDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.GetDocumentResponse
    ) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.GetDocumentResponse>;

  getDocument(
    request: mongorpc_pb.GetDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.GetDocumentResponse
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/GetDocument",
        request,
        metadata || {},
        this.methodInfoGetDocument,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/GetDocument",
      request,
      metadata || {},
      this.methodInfoGetDocument
    );
  }

  methodInfoListDocuments = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/ListDocuments",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.ListDocumentsRequest,
    mongorpc_pb.ListDocumentsResponse,
    (request: mongorpc_pb.ListDocumentsRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.ListDocumentsResponse.deserializeBinary
  );

  listDocuments(
    request: mongorpc_pb.ListDocumentsRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.ListDocumentsResponse>;

  listDocuments(
    request: mongorpc_pb.ListDocumentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.ListDocumentsResponse
    ) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.ListDocumentsResponse>;

  listDocuments(
    request: mongorpc_pb.ListDocumentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.ListDocumentsResponse
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/ListDocuments",
        request,
        metadata || {},
        this.methodInfoListDocuments,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/ListDocuments",
      request,
      metadata || {},
      this.methodInfoListDocuments
    );
  }

  methodInfoCreateDocument = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/CreateDocument",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.CreateDocumentRequest,
    mongorpc_pb.CreateDocumentResponse,
    (request: mongorpc_pb.CreateDocumentRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.CreateDocumentResponse.deserializeBinary
  );

  createDocument(
    request: mongorpc_pb.CreateDocumentRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.CreateDocumentResponse>;

  createDocument(
    request: mongorpc_pb.CreateDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.CreateDocumentResponse
    ) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.CreateDocumentResponse>;

  createDocument(
    request: mongorpc_pb.CreateDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.CreateDocumentResponse
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/CreateDocument",
        request,
        metadata || {},
        this.methodInfoCreateDocument,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/CreateDocument",
      request,
      metadata || {},
      this.methodInfoCreateDocument
    );
  }

  methodInfoUpdateDocument = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/UpdateDocument",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.UpdateDocumentRequest,
    mongorpc_pb.UpdateDocumentResponse,
    (request: mongorpc_pb.UpdateDocumentRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.UpdateDocumentResponse.deserializeBinary
  );

  updateDocument(
    request: mongorpc_pb.UpdateDocumentRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.UpdateDocumentResponse>;

  updateDocument(
    request: mongorpc_pb.UpdateDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.UpdateDocumentResponse
    ) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.UpdateDocumentResponse>;

  updateDocument(
    request: mongorpc_pb.UpdateDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.UpdateDocumentResponse
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/UpdateDocument",
        request,
        metadata || {},
        this.methodInfoUpdateDocument,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/UpdateDocument",
      request,
      metadata || {},
      this.methodInfoUpdateDocument
    );
  }

  methodInfoDeleteDocument = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/DeleteDocument",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.DeleteDocumentRequest,
    mongorpc_pb.DeleteDocumentResponse,
    (request: mongorpc_pb.DeleteDocumentRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.DeleteDocumentResponse.deserializeBinary
  );

  deleteDocument(
    request: mongorpc_pb.DeleteDocumentRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.DeleteDocumentResponse>;

  deleteDocument(
    request: mongorpc_pb.DeleteDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.DeleteDocumentResponse
    ) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.DeleteDocumentResponse>;

  deleteDocument(
    request: mongorpc_pb.DeleteDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.DeleteDocumentResponse
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/DeleteDocument",
        request,
        metadata || {},
        this.methodInfoDeleteDocument,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/DeleteDocument",
      request,
      metadata || {},
      this.methodInfoDeleteDocument
    );
  }

  methodInfoCountDocuments = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/CountDocuments",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.CountDocumentsRequest,
    mongorpc_pb.CountDocumentsResponse,
    (request: mongorpc_pb.CountDocumentsRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.CountDocumentsResponse.deserializeBinary
  );

  countDocuments(
    request: mongorpc_pb.CountDocumentsRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.CountDocumentsResponse>;

  countDocuments(
    request: mongorpc_pb.CountDocumentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.CountDocumentsResponse
    ) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.CountDocumentsResponse>;

  countDocuments(
    request: mongorpc_pb.CountDocumentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.CountDocumentsResponse
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/CountDocuments",
        request,
        metadata || {},
        this.methodInfoCountDocuments,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/CountDocuments",
      request,
      metadata || {},
      this.methodInfoCountDocuments
    );
  }

  methodInfoListen = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/Listen",
    grpcWeb.MethodType.SERVER_STREAMING,
    mongorpc_pb.ListenRequest,
    mongorpc_pb.ListenResponse,
    (request: mongorpc_pb.ListenRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.ListenResponse.deserializeBinary
  );

  listen(request: mongorpc_pb.ListenRequest, metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ + "/mongorpc.MongoRPC/Listen",
      request,
      metadata || {},
      this.methodInfoListen
    );
  }

  methodInfoCreateIndex = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/CreateIndex",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.CreateIndexRequest,
    mongorpc_pb.CreateIndexResponse,
    (request: mongorpc_pb.CreateIndexRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.CreateIndexResponse.deserializeBinary
  );

  createIndex(
    request: mongorpc_pb.CreateIndexRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.CreateIndexResponse>;

  createIndex(
    request: mongorpc_pb.CreateIndexRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.CreateIndexResponse
    ) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.CreateIndexResponse>;

  createIndex(
    request: mongorpc_pb.CreateIndexRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.CreateIndexResponse
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/CreateIndex",
        request,
        metadata || {},
        this.methodInfoCreateIndex,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/CreateIndex",
      request,
      metadata || {},
      this.methodInfoCreateIndex
    );
  }

  methodInfoListIndexes = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/ListIndexes",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.ListIndexesRequest,
    mongorpc_pb.ListIndexesResponse,
    (request: mongorpc_pb.ListIndexesRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.ListIndexesResponse.deserializeBinary
  );

  listIndexes(
    request: mongorpc_pb.ListIndexesRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.ListIndexesResponse>;

  listIndexes(
    request: mongorpc_pb.ListIndexesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.ListIndexesResponse
    ) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.ListIndexesResponse>;

  listIndexes(
    request: mongorpc_pb.ListIndexesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.ListIndexesResponse
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/ListIndexes",
        request,
        metadata || {},
        this.methodInfoListIndexes,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/ListIndexes",
      request,
      metadata || {},
      this.methodInfoListIndexes
    );
  }

  methodInfoDeleteIndex = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/DeleteIndex",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.DeleteIndexRequest,
    mongorpc_pb.DeleteIndexResponse,
    (request: mongorpc_pb.DeleteIndexRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.DeleteIndexResponse.deserializeBinary
  );

  deleteIndex(
    request: mongorpc_pb.DeleteIndexRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.DeleteIndexResponse>;

  deleteIndex(
    request: mongorpc_pb.DeleteIndexRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.DeleteIndexResponse
    ) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.DeleteIndexResponse>;

  deleteIndex(
    request: mongorpc_pb.DeleteIndexRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.DeleteIndexResponse
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/DeleteIndex",
        request,
        metadata || {},
        this.methodInfoDeleteIndex,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/DeleteIndex",
      request,
      metadata || {},
      this.methodInfoDeleteIndex
    );
  }

  methodInfoReindex = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/Reindex",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.ReindexRequest,
    mongorpc_pb.ReindexResponse,
    (request: mongorpc_pb.ReindexRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.ReindexResponse.deserializeBinary
  );

  reindex(
    request: mongorpc_pb.ReindexRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.ReindexResponse>;

  reindex(
    request: mongorpc_pb.ReindexRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.ReindexResponse
    ) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.ReindexResponse>;

  reindex(
    request: mongorpc_pb.ReindexRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.ReindexResponse
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/Reindex",
        request,
        metadata || {},
        this.methodInfoReindex,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/Reindex",
      request,
      metadata || {},
      this.methodInfoReindex
    );
  }

  methodInfoPing = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/Ping",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.Empty,
    mongorpc_pb.Empty,
    (request: mongorpc_pb.Empty) => {
      return request.serializeBinary();
    },
    mongorpc_pb.Empty.deserializeBinary
  );

  ping(
    request: mongorpc_pb.Empty,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.Empty>;

  ping(
    request: mongorpc_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError, response: mongorpc_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.Empty>;

  ping(
    request: mongorpc_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError, response: mongorpc_pb.Empty) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/Ping",
        request,
        metadata || {},
        this.methodInfoPing,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/Ping",
      request,
      metadata || {},
      this.methodInfoPing
    );
  }

  methodInfoCollectionStats = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/CollectionStats",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.CollectionStatsRequest,
    mongorpc_pb.CollectionStatsResponse,
    (request: mongorpc_pb.CollectionStatsRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.CollectionStatsResponse.deserializeBinary
  );

  collectionStats(
    request: mongorpc_pb.CollectionStatsRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.CollectionStatsResponse>;

  collectionStats(
    request: mongorpc_pb.CollectionStatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.CollectionStatsResponse
    ) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.CollectionStatsResponse>;

  collectionStats(
    request: mongorpc_pb.CollectionStatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.CollectionStatsResponse
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/CollectionStats",
        request,
        metadata || {},
        this.methodInfoCollectionStats,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/CollectionStats",
      request,
      metadata || {},
      this.methodInfoCollectionStats
    );
  }

  methodInfoCreateCollection = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/CreateCollection",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.CreateCollectionRequest,
    mongorpc_pb.CreateCollectionResponse,
    (request: mongorpc_pb.CreateCollectionRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.CreateCollectionResponse.deserializeBinary
  );

  createCollection(
    request: mongorpc_pb.CreateCollectionRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.CreateCollectionResponse>;

  createCollection(
    request: mongorpc_pb.CreateCollectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.CreateCollectionResponse
    ) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.CreateCollectionResponse>;

  createCollection(
    request: mongorpc_pb.CreateCollectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.CreateCollectionResponse
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/CreateCollection",
        request,
        metadata || {},
        this.methodInfoCreateCollection,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/CreateCollection",
      request,
      metadata || {},
      this.methodInfoCreateCollection
    );
  }

  methodInfoRenameCollection = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/RenameCollection",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.RenameCollectionRequest,
    mongorpc_pb.RenameCollectionResponse,
    (request: mongorpc_pb.RenameCollectionRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.RenameCollectionResponse.deserializeBinary
  );

  renameCollection(
    request: mongorpc_pb.RenameCollectionRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.RenameCollectionResponse>;

  renameCollection(
    request: mongorpc_pb.RenameCollectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.RenameCollectionResponse
    ) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.RenameCollectionResponse>;

  renameCollection(
    request: mongorpc_pb.RenameCollectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.RenameCollectionResponse
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/RenameCollection",
        request,
        metadata || {},
        this.methodInfoRenameCollection,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/RenameCollection",
      request,
      metadata || {},
      this.methodInfoRenameCollection
    );
  }

  methodInfoDeleteCollection = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/DeleteCollection",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.DeleteCollectionRequest,
    mongorpc_pb.DeleteCollectionResponse,
    (request: mongorpc_pb.DeleteCollectionRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.DeleteCollectionResponse.deserializeBinary
  );

  deleteCollection(
    request: mongorpc_pb.DeleteCollectionRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.DeleteCollectionResponse>;

  deleteCollection(
    request: mongorpc_pb.DeleteCollectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.DeleteCollectionResponse
    ) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.DeleteCollectionResponse>;

  deleteCollection(
    request: mongorpc_pb.DeleteCollectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.DeleteCollectionResponse
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/DeleteCollection",
        request,
        metadata || {},
        this.methodInfoDeleteCollection,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/DeleteCollection",
      request,
      metadata || {},
      this.methodInfoDeleteCollection
    );
  }

  methodInfoHealthCheck = new grpcWeb.MethodDescriptor(
    "/mongorpc.MongoRPC/HealthCheck",
    grpcWeb.MethodType.UNARY,
    mongorpc_pb.HealthCheckRequest,
    mongorpc_pb.HealthCheckResponse,
    (request: mongorpc_pb.HealthCheckRequest) => {
      return request.serializeBinary();
    },
    mongorpc_pb.HealthCheckResponse.deserializeBinary
  );

  healthCheck(
    request: mongorpc_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | null
  ): Promise<mongorpc_pb.HealthCheckResponse>;

  healthCheck(
    request: mongorpc_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.HealthCheckResponse
    ) => void
  ): grpcWeb.ClientReadableStream<mongorpc_pb.HealthCheckResponse>;

  healthCheck(
    request: mongorpc_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: mongorpc_pb.HealthCheckResponse
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/mongorpc.MongoRPC/HealthCheck",
        request,
        metadata || {},
        this.methodInfoHealthCheck,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/mongorpc.MongoRPC/HealthCheck",
      request,
      metadata || {},
      this.methodInfoHealthCheck
    );
  }
}
