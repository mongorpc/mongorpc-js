// package: mongorpc
// file: mongorpc.proto

import * as jspb from "google-protobuf";

export class ArrayValue extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<Value>;
  setValuesList(value: Array<Value>): void;
  addValues(value?: Value, index?: number): Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrayValue.AsObject;
  static toObject(includeInstance: boolean, msg: ArrayValue): ArrayValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArrayValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrayValue;
  static deserializeBinaryFromReader(message: ArrayValue, reader: jspb.BinaryReader): ArrayValue;
}

export namespace ArrayValue {
  export type AsObject = {
    valuesList: Array<Value.AsObject>,
  }
}

export class MapValue extends jspb.Message {
  getFieldsMap(): jspb.Map<string, Value>;
  clearFieldsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapValue.AsObject;
  static toObject(includeInstance: boolean, msg: MapValue): MapValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapValue;
  static deserializeBinaryFromReader(message: MapValue, reader: jspb.BinaryReader): MapValue;
}

export namespace MapValue {
  export type AsObject = {
    fieldsMap: Array<[string, Value.AsObject]>,
  }
}

export class Timestamp extends jspb.Message {
  getSeconds(): number;
  setSeconds(value: number): void;

  getNanos(): number;
  setNanos(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timestamp.AsObject;
  static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timestamp;
  static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    seconds: number,
    nanos: number,
  }
}

export class ObjectID extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectID.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectID): ObjectID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectID;
  static deserializeBinaryFromReader(message: ObjectID, reader: jspb.BinaryReader): ObjectID;
}

export namespace ObjectID {
  export type AsObject = {
    id: string,
  }
}

export class Value extends jspb.Message {
  hasDoubleValue(): boolean;
  clearDoubleValue(): void;
  getDoubleValue(): number;
  setDoubleValue(value: number): void;

  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): string;
  setStringValue(value: string): void;

  hasMapValue(): boolean;
  clearMapValue(): void;
  getMapValue(): MapValue | undefined;
  setMapValue(value?: MapValue): void;

  hasArrayValue(): boolean;
  clearArrayValue(): void;
  getArrayValue(): ArrayValue | undefined;
  setArrayValue(value?: ArrayValue): void;

  hasBytesValue(): boolean;
  clearBytesValue(): void;
  getBytesValue(): Uint8Array | string;
  getBytesValue_asU8(): Uint8Array;
  getBytesValue_asB64(): string;
  setBytesValue(value: Uint8Array | string): void;

  hasBoolValue(): boolean;
  clearBoolValue(): void;
  getBoolValue(): boolean;
  setBoolValue(value: boolean): void;

  hasDateValue(): boolean;
  clearDateValue(): void;
  getDateValue(): Timestamp | undefined;
  setDateValue(value?: Timestamp): void;

  hasNullValue(): boolean;
  clearNullValue(): void;
  getNullValue(): NullValueMap[keyof NullValueMap];
  setNullValue(value: NullValueMap[keyof NullValueMap]): void;

  hasIntegerValue(): boolean;
  clearIntegerValue(): void;
  getIntegerValue(): number;
  setIntegerValue(value: number): void;

  hasObjectIdValue(): boolean;
  clearObjectIdValue(): void;
  getObjectIdValue(): ObjectID | undefined;
  setObjectIdValue(value?: ObjectID): void;

  getTypeCase(): Value.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    doubleValue: number,
    stringValue: string,
    mapValue?: MapValue.AsObject,
    arrayValue?: ArrayValue.AsObject,
    bytesValue: Uint8Array | string,
    boolValue: boolean,
    dateValue?: Timestamp.AsObject,
    nullValue: NullValueMap[keyof NullValueMap],
    integerValue: number,
    objectIdValue?: ObjectID.AsObject,
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    DOUBLE_VALUE = 1,
    STRING_VALUE = 2,
    MAP_VALUE = 3,
    ARRAY_VALUE = 4,
    BYTES_VALUE = 5,
    BOOL_VALUE = 8,
    DATE_VALUE = 9,
    NULL_VALUE = 10,
    INTEGER_VALUE = 23,
    OBJECT_ID_VALUE = 7,
  }
}

export class ListCollectionsRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCollectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCollectionsRequest): ListCollectionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCollectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCollectionsRequest;
  static deserializeBinaryFromReader(message: ListCollectionsRequest, reader: jspb.BinaryReader): ListCollectionsRequest;
}

export namespace ListCollectionsRequest {
  export type AsObject = {
    database: string,
  }
}

export class ListCollectionsResponse extends jspb.Message {
  hasCollections(): boolean;
  clearCollections(): void;
  getCollections(): ArrayValue | undefined;
  setCollections(value?: ArrayValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCollectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCollectionsResponse): ListCollectionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCollectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCollectionsResponse;
  static deserializeBinaryFromReader(message: ListCollectionsResponse, reader: jspb.BinaryReader): ListCollectionsResponse;
}

export namespace ListCollectionsResponse {
  export type AsObject = {
    collections?: ArrayValue.AsObject,
  }
}

export class GetDocumentRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  getCollection(): string;
  setCollection(value: string): void;

  getDocumentId(): string;
  setDocumentId(value: string): void;

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
    documentId: string,
  }
}

export class GetDocumentResponse extends jspb.Message {
  hasDocument(): boolean;
  clearDocument(): void;
  getDocument(): Value | undefined;
  setDocument(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDocumentResponse): GetDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDocumentResponse;
  static deserializeBinaryFromReader(message: GetDocumentResponse, reader: jspb.BinaryReader): GetDocumentResponse;
}

export namespace GetDocumentResponse {
  export type AsObject = {
    document?: Value.AsObject,
  }
}

export class ListDocumentsRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  getCollection(): string;
  setCollection(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getSkip(): number;
  setSkip(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDocumentsRequest): ListDocumentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDocumentsRequest;
  static deserializeBinaryFromReader(message: ListDocumentsRequest, reader: jspb.BinaryReader): ListDocumentsRequest;
}

export namespace ListDocumentsRequest {
  export type AsObject = {
    database: string,
    collection: string,
    limit: number,
    skip: number,
  }
}

export class ListDocumentsResponse extends jspb.Message {
  hasDocuments(): boolean;
  clearDocuments(): void;
  getDocuments(): ArrayValue | undefined;
  setDocuments(value?: ArrayValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDocumentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDocumentsResponse): ListDocumentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDocumentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDocumentsResponse;
  static deserializeBinaryFromReader(message: ListDocumentsResponse, reader: jspb.BinaryReader): ListDocumentsResponse;
}

export namespace ListDocumentsResponse {
  export type AsObject = {
    documents?: ArrayValue.AsObject,
  }
}

export class CreateDocumentRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  getCollection(): string;
  setCollection(value: string): void;

  hasDocument(): boolean;
  clearDocument(): void;
  getDocument(): Value | undefined;
  setDocument(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDocumentRequest): CreateDocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDocumentRequest;
  static deserializeBinaryFromReader(message: CreateDocumentRequest, reader: jspb.BinaryReader): CreateDocumentRequest;
}

export namespace CreateDocumentRequest {
  export type AsObject = {
    database: string,
    collection: string,
    document?: Value.AsObject,
  }
}

export class CreateDocumentResponse extends jspb.Message {
  getDocumentId(): string;
  setDocumentId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDocumentResponse): CreateDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDocumentResponse;
  static deserializeBinaryFromReader(message: CreateDocumentResponse, reader: jspb.BinaryReader): CreateDocumentResponse;
}

export namespace CreateDocumentResponse {
  export type AsObject = {
    documentId: string,
  }
}

export class UpdateDocumentRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  getCollection(): string;
  setCollection(value: string): void;

  getDocumentId(): string;
  setDocumentId(value: string): void;

  hasDocument(): boolean;
  clearDocument(): void;
  getDocument(): Value | undefined;
  setDocument(value?: Value): void;

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
    documentId: string,
    document?: Value.AsObject,
  }
}

export class UpdateDocumentResponse extends jspb.Message {
  getMatchedCount(): number;
  setMatchedCount(value: number): void;

  getModifiedCount(): number;
  setModifiedCount(value: number): void;

  getUpsertedCount(): number;
  setUpsertedCount(value: number): void;

  hasUpsertedId(): boolean;
  clearUpsertedId(): void;
  getUpsertedId(): Value | undefined;
  setUpsertedId(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDocumentResponse): UpdateDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDocumentResponse;
  static deserializeBinaryFromReader(message: UpdateDocumentResponse, reader: jspb.BinaryReader): UpdateDocumentResponse;
}

export namespace UpdateDocumentResponse {
  export type AsObject = {
    matchedCount: number,
    modifiedCount: number,
    upsertedCount: number,
    upsertedId?: Value.AsObject,
  }
}

export class DeleteDocumentRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  getCollection(): string;
  setCollection(value: string): void;

  getDocumentId(): string;
  setDocumentId(value: string): void;

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
    documentId: string,
  }
}

export class DeleteDocumentResponse extends jspb.Message {
  getDeletedcount(): number;
  setDeletedcount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDocumentResponse): DeleteDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDocumentResponse;
  static deserializeBinaryFromReader(message: DeleteDocumentResponse, reader: jspb.BinaryReader): DeleteDocumentResponse;
}

export namespace DeleteDocumentResponse {
  export type AsObject = {
    deletedcount: number,
  }
}

export interface NullValueMap {
  NULL_VALUE: 0;
}

export const NullValue: NullValueMap;

