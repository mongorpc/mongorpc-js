// package: mongorpc
// file: mongorpc/mongorpc.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as mongorpc_value_pb from "../mongorpc/value_pb";

export class GetDocumentRequest extends jspb.Message { 
    getDatabase(): string;
    setDatabase(value: string): GetDocumentRequest;
    getCollection(): string;
    setCollection(value: string): GetDocumentRequest;

    hasDocumentId(): boolean;
    clearDocumentId(): void;
    getDocumentId(): mongorpc_value_pb.ObjectId | undefined;
    setDocumentId(value?: mongorpc_value_pb.ObjectId): GetDocumentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDocumentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDocumentRequest): GetDocumentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDocumentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDocumentRequest;
    static deserializeBinaryFromReader(message: GetDocumentRequest, reader: jspb.BinaryReader): GetDocumentRequest;
}

export namespace GetDocumentRequest {
    export type AsObject = {
        database: string,
        collection: string,
        documentId?: mongorpc_value_pb.ObjectId.AsObject,
    }
}

export class InsertDocumentRequest extends jspb.Message { 
    getDatabase(): string;
    setDatabase(value: string): InsertDocumentRequest;
    getCollection(): string;
    setCollection(value: string): InsertDocumentRequest;

    hasDocument(): boolean;
    clearDocument(): void;
    getDocument(): mongorpc_value_pb.Value | undefined;
    setDocument(value?: mongorpc_value_pb.Value): InsertDocumentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InsertDocumentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InsertDocumentRequest): InsertDocumentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InsertDocumentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InsertDocumentRequest;
    static deserializeBinaryFromReader(message: InsertDocumentRequest, reader: jspb.BinaryReader): InsertDocumentRequest;
}

export namespace InsertDocumentRequest {
    export type AsObject = {
        database: string,
        collection: string,
        document?: mongorpc_value_pb.Value.AsObject,
    }
}

export class DeleteDocumentRequest extends jspb.Message { 
    getDatabase(): string;
    setDatabase(value: string): DeleteDocumentRequest;
    getCollection(): string;
    setCollection(value: string): DeleteDocumentRequest;

    hasDocumentId(): boolean;
    clearDocumentId(): void;
    getDocumentId(): mongorpc_value_pb.ObjectId | undefined;
    setDocumentId(value?: mongorpc_value_pb.ObjectId): DeleteDocumentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDocumentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDocumentRequest): DeleteDocumentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDocumentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDocumentRequest;
    static deserializeBinaryFromReader(message: DeleteDocumentRequest, reader: jspb.BinaryReader): DeleteDocumentRequest;
}

export namespace DeleteDocumentRequest {
    export type AsObject = {
        database: string,
        collection: string,
        documentId?: mongorpc_value_pb.ObjectId.AsObject,
    }
}

export class UpdateDocumentRequest extends jspb.Message { 
    getDatabase(): string;
    setDatabase(value: string): UpdateDocumentRequest;
    getCollection(): string;
    setCollection(value: string): UpdateDocumentRequest;

    hasDocumentId(): boolean;
    clearDocumentId(): void;
    getDocumentId(): mongorpc_value_pb.ObjectId | undefined;
    setDocumentId(value?: mongorpc_value_pb.ObjectId): UpdateDocumentRequest;

    hasDocument(): boolean;
    clearDocument(): void;
    getDocument(): mongorpc_value_pb.Value | undefined;
    setDocument(value?: mongorpc_value_pb.Value): UpdateDocumentRequest;
    getReplace(): boolean;
    setReplace(value: boolean): UpdateDocumentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDocumentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDocumentRequest): UpdateDocumentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDocumentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDocumentRequest;
    static deserializeBinaryFromReader(message: UpdateDocumentRequest, reader: jspb.BinaryReader): UpdateDocumentRequest;
}

export namespace UpdateDocumentRequest {
    export type AsObject = {
        database: string,
        collection: string,
        documentId?: mongorpc_value_pb.ObjectId.AsObject,
        document?: mongorpc_value_pb.Value.AsObject,
        replace: boolean,
    }
}

export class BulkInsertDocumentsRequest extends jspb.Message { 
    getDatabase(): string;
    setDatabase(value: string): BulkInsertDocumentsRequest;
    getCollection(): string;
    setCollection(value: string): BulkInsertDocumentsRequest;
    clearDocumentsList(): void;
    getDocumentsList(): Array<mongorpc_value_pb.Value>;
    setDocumentsList(value: Array<mongorpc_value_pb.Value>): BulkInsertDocumentsRequest;
    addDocuments(value?: mongorpc_value_pb.Value, index?: number): mongorpc_value_pb.Value;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BulkInsertDocumentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BulkInsertDocumentsRequest): BulkInsertDocumentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BulkInsertDocumentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BulkInsertDocumentsRequest;
    static deserializeBinaryFromReader(message: BulkInsertDocumentsRequest, reader: jspb.BinaryReader): BulkInsertDocumentsRequest;
}

export namespace BulkInsertDocumentsRequest {
    export type AsObject = {
        database: string,
        collection: string,
        documentsList: Array<mongorpc_value_pb.Value.AsObject>,
    }
}

export class QueryDocumentsRequest extends jspb.Message { 
    getDatabase(): string;
    setDatabase(value: string): QueryDocumentsRequest;
    getCollection(): string;
    setCollection(value: string): QueryDocumentsRequest;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): mongorpc_value_pb.Value | undefined;
    setQuery(value?: mongorpc_value_pb.Value): QueryDocumentsRequest;

    hasSort(): boolean;
    clearSort(): void;
    getSort(): mongorpc_value_pb.Value | undefined;
    setSort(value?: mongorpc_value_pb.Value): QueryDocumentsRequest;

    hasProjection(): boolean;
    clearProjection(): void;
    getProjection(): mongorpc_value_pb.Value | undefined;
    setProjection(value?: mongorpc_value_pb.Value): QueryDocumentsRequest;
    getSkip(): number;
    setSkip(value: number): QueryDocumentsRequest;
    getLimit(): number;
    setLimit(value: number): QueryDocumentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDocumentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDocumentsRequest): QueryDocumentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryDocumentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDocumentsRequest;
    static deserializeBinaryFromReader(message: QueryDocumentsRequest, reader: jspb.BinaryReader): QueryDocumentsRequest;
}

export namespace QueryDocumentsRequest {
    export type AsObject = {
        database: string,
        collection: string,
        query?: mongorpc_value_pb.Value.AsObject,
        sort?: mongorpc_value_pb.Value.AsObject,
        projection?: mongorpc_value_pb.Value.AsObject,
        skip: number,
        limit: number,
    }
}

export class ListenRequest extends jspb.Message { 
    getDatabase(): string;
    setDatabase(value: string): ListenRequest;
    getCollection(): string;
    setCollection(value: string): ListenRequest;
    clearPipelineList(): void;
    getPipelineList(): Array<mongorpc_value_pb.Value>;
    setPipelineList(value: Array<mongorpc_value_pb.Value>): ListenRequest;
    addPipeline(value?: mongorpc_value_pb.Value, index?: number): mongorpc_value_pb.Value;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): mongorpc_value_pb.ChangeStreamOptions | undefined;
    setOptions(value?: mongorpc_value_pb.ChangeStreamOptions): ListenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListenRequest): ListenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListenRequest;
    static deserializeBinaryFromReader(message: ListenRequest, reader: jspb.BinaryReader): ListenRequest;
}

export namespace ListenRequest {
    export type AsObject = {
        database: string,
        collection: string,
        pipelineList: Array<mongorpc_value_pb.Value.AsObject>,
        options?: mongorpc_value_pb.ChangeStreamOptions.AsObject,
    }
}

export class ListenResponse extends jspb.Message { 

    hasChanges(): boolean;
    clearChanges(): void;
    getChanges(): mongorpc_value_pb.Value | undefined;
    setChanges(value?: mongorpc_value_pb.Value): ListenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListenResponse): ListenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListenResponse;
    static deserializeBinaryFromReader(message: ListenResponse, reader: jspb.BinaryReader): ListenResponse;
}

export namespace ListenResponse {
    export type AsObject = {
        changes?: mongorpc_value_pb.Value.AsObject,
    }
}
