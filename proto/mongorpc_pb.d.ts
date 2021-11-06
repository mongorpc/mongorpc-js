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

export class Sort extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  getAscending(): boolean;
  setAscending(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sort.AsObject;
  static toObject(includeInstance: boolean, msg: Sort): Sort.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sort, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sort;
  static deserializeBinaryFromReader(message: Sort, reader: jspb.BinaryReader): Sort;
}

export namespace Sort {
  export type AsObject = {
    field: string,
    ascending: boolean,
  }
}

export class Equal extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Value | undefined;
  setValue(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Equal.AsObject;
  static toObject(includeInstance: boolean, msg: Equal): Equal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Equal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Equal;
  static deserializeBinaryFromReader(message: Equal, reader: jspb.BinaryReader): Equal;
}

export namespace Equal {
  export type AsObject = {
    field: string,
    value?: Value.AsObject,
  }
}

export class NotEqual extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Value | undefined;
  setValue(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotEqual.AsObject;
  static toObject(includeInstance: boolean, msg: NotEqual): NotEqual.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotEqual, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotEqual;
  static deserializeBinaryFromReader(message: NotEqual, reader: jspb.BinaryReader): NotEqual;
}

export namespace NotEqual {
  export type AsObject = {
    field: string,
    value?: Value.AsObject,
  }
}

export class Less extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Value | undefined;
  setValue(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Less.AsObject;
  static toObject(includeInstance: boolean, msg: Less): Less.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Less, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Less;
  static deserializeBinaryFromReader(message: Less, reader: jspb.BinaryReader): Less;
}

export namespace Less {
  export type AsObject = {
    field: string,
    value?: Value.AsObject,
  }
}

export class LessEqual extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Value | undefined;
  setValue(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LessEqual.AsObject;
  static toObject(includeInstance: boolean, msg: LessEqual): LessEqual.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LessEqual, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LessEqual;
  static deserializeBinaryFromReader(message: LessEqual, reader: jspb.BinaryReader): LessEqual;
}

export namespace LessEqual {
  export type AsObject = {
    field: string,
    value?: Value.AsObject,
  }
}

export class Greater extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Value | undefined;
  setValue(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Greater.AsObject;
  static toObject(includeInstance: boolean, msg: Greater): Greater.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Greater, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Greater;
  static deserializeBinaryFromReader(message: Greater, reader: jspb.BinaryReader): Greater;
}

export namespace Greater {
  export type AsObject = {
    field: string,
    value?: Value.AsObject,
  }
}

export class GreaterEqual extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Value | undefined;
  setValue(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreaterEqual.AsObject;
  static toObject(includeInstance: boolean, msg: GreaterEqual): GreaterEqual.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GreaterEqual, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreaterEqual;
  static deserializeBinaryFromReader(message: GreaterEqual, reader: jspb.BinaryReader): GreaterEqual;
}

export namespace GreaterEqual {
  export type AsObject = {
    field: string,
    value?: Value.AsObject,
  }
}

export class In extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  clearValuesList(): void;
  getValuesList(): Array<Value>;
  setValuesList(value: Array<Value>): void;
  addValues(value?: Value, index?: number): Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): In.AsObject;
  static toObject(includeInstance: boolean, msg: In): In.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: In, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): In;
  static deserializeBinaryFromReader(message: In, reader: jspb.BinaryReader): In;
}

export namespace In {
  export type AsObject = {
    field: string,
    valuesList: Array<Value.AsObject>,
  }
}

export class NotIn extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  clearValuesList(): void;
  getValuesList(): Array<Value>;
  setValuesList(value: Array<Value>): void;
  addValues(value?: Value, index?: number): Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotIn.AsObject;
  static toObject(includeInstance: boolean, msg: NotIn): NotIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotIn;
  static deserializeBinaryFromReader(message: NotIn, reader: jspb.BinaryReader): NotIn;
}

export namespace NotIn {
  export type AsObject = {
    field: string,
    valuesList: Array<Value.AsObject>,
  }
}

export class Exists extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Exists.AsObject;
  static toObject(includeInstance: boolean, msg: Exists): Exists.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Exists, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Exists;
  static deserializeBinaryFromReader(message: Exists, reader: jspb.BinaryReader): Exists;
}

export namespace Exists {
  export type AsObject = {
    field: string,
  }
}

export class NotExists extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotExists.AsObject;
  static toObject(includeInstance: boolean, msg: NotExists): NotExists.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotExists, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotExists;
  static deserializeBinaryFromReader(message: NotExists, reader: jspb.BinaryReader): NotExists;
}

export namespace NotExists {
  export type AsObject = {
    field: string,
  }
}

export class Filter extends jspb.Message {
  hasEqual(): boolean;
  clearEqual(): void;
  getEqual(): Equal | undefined;
  setEqual(value?: Equal): void;

  hasNotEqual(): boolean;
  clearNotEqual(): void;
  getNotEqual(): NotEqual | undefined;
  setNotEqual(value?: NotEqual): void;

  hasLess(): boolean;
  clearLess(): void;
  getLess(): Less | undefined;
  setLess(value?: Less): void;

  hasLessEqual(): boolean;
  clearLessEqual(): void;
  getLessEqual(): LessEqual | undefined;
  setLessEqual(value?: LessEqual): void;

  hasGreater(): boolean;
  clearGreater(): void;
  getGreater(): Greater | undefined;
  setGreater(value?: Greater): void;

  hasGreaterEqual(): boolean;
  clearGreaterEqual(): void;
  getGreaterEqual(): GreaterEqual | undefined;
  setGreaterEqual(value?: GreaterEqual): void;

  hasIn(): boolean;
  clearIn(): void;
  getIn(): In | undefined;
  setIn(value?: In): void;

  hasNotIn(): boolean;
  clearNotIn(): void;
  getNotIn(): NotIn | undefined;
  setNotIn(value?: NotIn): void;

  hasExists(): boolean;
  clearExists(): void;
  getExists(): Exists | undefined;
  setExists(value?: Exists): void;

  hasNotExists(): boolean;
  clearNotExists(): void;
  getNotExists(): NotExists | undefined;
  setNotExists(value?: NotExists): void;

  getOperatorCase(): Filter.OperatorCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    equal?: Equal.AsObject,
    notEqual?: NotEqual.AsObject,
    less?: Less.AsObject,
    lessEqual?: LessEqual.AsObject,
    greater?: Greater.AsObject,
    greaterEqual?: GreaterEqual.AsObject,
    pb_in?: In.AsObject,
    notIn?: NotIn.AsObject,
    exists?: Exists.AsObject,
    notExists?: NotExists.AsObject,
  }

  export enum OperatorCase {
    OPERATOR_NOT_SET = 0,
    EQUAL = 1,
    NOT_EQUAL = 2,
    LESS = 3,
    LESS_EQUAL = 4,
    GREATER = 5,
    GREATER_EQUAL = 6,
    IN = 7,
    NOT_IN = 8,
    EXISTS = 9,
    NOT_EXISTS = 10,
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

  clearFilterList(): void;
  getFilterList(): Array<Filter>;
  setFilterList(value: Array<Filter>): void;
  addFilter(value?: Filter, index?: number): Filter;

  clearSortList(): void;
  getSortList(): Array<Sort>;
  setSortList(value: Array<Sort>): void;
  addSort(value?: Sort, index?: number): Sort;

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
    filterList: Array<Filter.AsObject>,
    sortList: Array<Sort.AsObject>,
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
  getDeletedCount(): number;
  setDeletedCount(value: number): void;

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
    deletedCount: number,
  }
}

export class ListenRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  getCollection(): string;
  setCollection(value: string): void;

  getOperation(): string;
  setOperation(value: string): void;

  clearFilterList(): void;
  getFilterList(): Array<Filter>;
  setFilterList(value: Array<Filter>): void;
  addFilter(value?: Filter, index?: number): Filter;

  clearSortList(): void;
  getSortList(): Array<Sort>;
  setSortList(value: Array<Sort>): void;
  addSort(value?: Sort, index?: number): Sort;

  getLimit(): number;
  setLimit(value: number): void;

  getSkip(): number;
  setSkip(value: number): void;

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
    operation: string,
    filterList: Array<Filter.AsObject>,
    sortList: Array<Sort.AsObject>,
    limit: number,
    skip: number,
  }
}

export class ListenResponse extends jspb.Message {
  getOperation(): string;
  setOperation(value: string): void;

  hasDocument(): boolean;
  clearDocument(): void;
  getDocument(): Value | undefined;
  setDocument(value?: Value): void;

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
    operation: string,
    document?: Value.AsObject,
  }
}

export class Index extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearKeysList(): void;
  getKeysList(): Array<IndexKey>;
  setKeysList(value: Array<IndexKey>): void;
  addKeys(value?: IndexKey, index?: number): IndexKey;

  getUnique(): boolean;
  setUnique(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Index.AsObject;
  static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Index, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Index;
  static deserializeBinaryFromReader(message: Index, reader: jspb.BinaryReader): Index;
}

export namespace Index {
  export type AsObject = {
    name: string,
    keysList: Array<IndexKey.AsObject>,
    unique: boolean,
  }
}

export class IndexKey extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  getDirection(): IndexDirectionMap[keyof IndexDirectionMap];
  setDirection(value: IndexDirectionMap[keyof IndexDirectionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexKey.AsObject;
  static toObject(includeInstance: boolean, msg: IndexKey): IndexKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexKey;
  static deserializeBinaryFromReader(message: IndexKey, reader: jspb.BinaryReader): IndexKey;
}

export namespace IndexKey {
  export type AsObject = {
    field: string,
    direction: IndexDirectionMap[keyof IndexDirectionMap],
  }
}

export class CreateIndexRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  getCollection(): string;
  setCollection(value: string): void;

  hasIndex(): boolean;
  clearIndex(): void;
  getIndex(): Index | undefined;
  setIndex(value?: Index): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIndexRequest): CreateIndexRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIndexRequest;
  static deserializeBinaryFromReader(message: CreateIndexRequest, reader: jspb.BinaryReader): CreateIndexRequest;
}

export namespace CreateIndexRequest {
  export type AsObject = {
    database: string,
    collection: string,
    index?: Index.AsObject,
  }
}

export class CreateIndexResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIndexResponse): CreateIndexResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIndexResponse;
  static deserializeBinaryFromReader(message: CreateIndexResponse, reader: jspb.BinaryReader): CreateIndexResponse;
}

export namespace CreateIndexResponse {
  export type AsObject = {
    name: string,
  }
}

export class ListIndexesRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  getCollection(): string;
  setCollection(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIndexesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIndexesRequest): ListIndexesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIndexesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIndexesRequest;
  static deserializeBinaryFromReader(message: ListIndexesRequest, reader: jspb.BinaryReader): ListIndexesRequest;
}

export namespace ListIndexesRequest {
  export type AsObject = {
    database: string,
    collection: string,
  }
}

export class ListIndexesResponse extends jspb.Message {
  clearIndexesList(): void;
  getIndexesList(): Array<Index>;
  setIndexesList(value: Array<Index>): void;
  addIndexes(value?: Index, index?: number): Index;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIndexesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListIndexesResponse): ListIndexesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIndexesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIndexesResponse;
  static deserializeBinaryFromReader(message: ListIndexesResponse, reader: jspb.BinaryReader): ListIndexesResponse;
}

export namespace ListIndexesResponse {
  export type AsObject = {
    indexesList: Array<Index.AsObject>,
  }
}

export class DeleteIndexRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  getCollection(): string;
  setCollection(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIndexRequest): DeleteIndexRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIndexRequest;
  static deserializeBinaryFromReader(message: DeleteIndexRequest, reader: jspb.BinaryReader): DeleteIndexRequest;
}

export namespace DeleteIndexRequest {
  export type AsObject = {
    database: string,
    collection: string,
    name: string,
  }
}

export class DeleteIndexResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIndexResponse): DeleteIndexResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIndexResponse;
  static deserializeBinaryFromReader(message: DeleteIndexResponse, reader: jspb.BinaryReader): DeleteIndexResponse;
}

export namespace DeleteIndexResponse {
  export type AsObject = {
    name: string,
  }
}

export class ReindexRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  getCollection(): string;
  setCollection(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReindexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReindexRequest): ReindexRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReindexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReindexRequest;
  static deserializeBinaryFromReader(message: ReindexRequest, reader: jspb.BinaryReader): ReindexRequest;
}

export namespace ReindexRequest {
  export type AsObject = {
    database: string,
    collection: string,
    name: string,
  }
}

export class ReindexResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReindexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReindexResponse): ReindexResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReindexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReindexResponse;
  static deserializeBinaryFromReader(message: ReindexResponse, reader: jspb.BinaryReader): ReindexResponse;
}

export namespace ReindexResponse {
  export type AsObject = {
    name: string,
  }
}

export class CountDocumentsRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  getCollection(): string;
  setCollection(value: string): void;

  getOperation(): string;
  setOperation(value: string): void;

  clearFilterList(): void;
  getFilterList(): Array<Filter>;
  setFilterList(value: Array<Filter>): void;
  addFilter(value?: Filter, index?: number): Filter;

  clearSortList(): void;
  getSortList(): Array<Sort>;
  setSortList(value: Array<Sort>): void;
  addSort(value?: Sort, index?: number): Sort;

  getLimit(): number;
  setLimit(value: number): void;

  getSkip(): number;
  setSkip(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountDocumentsRequest): CountDocumentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CountDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountDocumentsRequest;
  static deserializeBinaryFromReader(message: CountDocumentsRequest, reader: jspb.BinaryReader): CountDocumentsRequest;
}

export namespace CountDocumentsRequest {
  export type AsObject = {
    database: string,
    collection: string,
    operation: string,
    filterList: Array<Filter.AsObject>,
    sortList: Array<Sort.AsObject>,
    limit: number,
    skip: number,
  }
}

export class CountDocumentsResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountDocumentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountDocumentsResponse): CountDocumentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CountDocumentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountDocumentsResponse;
  static deserializeBinaryFromReader(message: CountDocumentsResponse, reader: jspb.BinaryReader): CountDocumentsResponse;
}

export namespace CountDocumentsResponse {
  export type AsObject = {
    count: number,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class CollectionStatsRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  getCollection(): string;
  setCollection(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionStatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionStatsRequest): CollectionStatsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionStatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionStatsRequest;
  static deserializeBinaryFromReader(message: CollectionStatsRequest, reader: jspb.BinaryReader): CollectionStatsRequest;
}

export namespace CollectionStatsRequest {
  export type AsObject = {
    database: string,
    collection: string,
  }
}

export class CollectionStatsResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getAvgObjSize(): number;
  setAvgObjSize(value: number): void;

  getStorageSize(): number;
  setStorageSize(value: number): void;

  getTotalIndexSize(): number;
  setTotalIndexSize(value: number): void;

  getIndexSize(): number;
  setIndexSize(value: number): void;

  getNumIndexes(): number;
  setNumIndexes(value: number): void;

  getNindexes(): number;
  setNindexes(value: number): void;

  getFreeStorageSize(): number;
  setFreeStorageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionStatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionStatsResponse): CollectionStatsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionStatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionStatsResponse;
  static deserializeBinaryFromReader(message: CollectionStatsResponse, reader: jspb.BinaryReader): CollectionStatsResponse;
}

export namespace CollectionStatsResponse {
  export type AsObject = {
    count: number,
    size: number,
    avgObjSize: number,
    storageSize: number,
    totalIndexSize: number,
    indexSize: number,
    numIndexes: number,
    nindexes: number,
    freeStorageSize: number,
  }
}

export class CreateCollectionRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  getCollection(): string;
  setCollection(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCollectionRequest): CreateCollectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCollectionRequest;
  static deserializeBinaryFromReader(message: CreateCollectionRequest, reader: jspb.BinaryReader): CreateCollectionRequest;
}

export namespace CreateCollectionRequest {
  export type AsObject = {
    database: string,
    collection: string,
    name: string,
  }
}

export class CreateCollectionResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCollectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCollectionResponse): CreateCollectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCollectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCollectionResponse;
  static deserializeBinaryFromReader(message: CreateCollectionResponse, reader: jspb.BinaryReader): CreateCollectionResponse;
}

export namespace CreateCollectionResponse {
  export type AsObject = {
    name: string,
  }
}

export class RenameCollectionRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  getCollection(): string;
  setCollection(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenameCollectionRequest): RenameCollectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameCollectionRequest;
  static deserializeBinaryFromReader(message: RenameCollectionRequest, reader: jspb.BinaryReader): RenameCollectionRequest;
}

export namespace RenameCollectionRequest {
  export type AsObject = {
    database: string,
    collection: string,
    name: string,
  }
}

export class RenameCollectionResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameCollectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RenameCollectionResponse): RenameCollectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameCollectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameCollectionResponse;
  static deserializeBinaryFromReader(message: RenameCollectionResponse, reader: jspb.BinaryReader): RenameCollectionResponse;
}

export namespace RenameCollectionResponse {
  export type AsObject = {
    name: string,
  }
}

export class DeleteCollectionRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): void;

  getCollection(): string;
  setCollection(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCollectionRequest): DeleteCollectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCollectionRequest;
  static deserializeBinaryFromReader(message: DeleteCollectionRequest, reader: jspb.BinaryReader): DeleteCollectionRequest;
}

export namespace DeleteCollectionRequest {
  export type AsObject = {
    database: string,
    collection: string,
  }
}

export class DeleteCollectionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCollectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCollectionResponse): DeleteCollectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCollectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCollectionResponse;
  static deserializeBinaryFromReader(message: DeleteCollectionResponse, reader: jspb.BinaryReader): DeleteCollectionResponse;
}

export namespace DeleteCollectionResponse {
  export type AsObject = {
  }
}

export class HealthCheckRequest extends jspb.Message {
  getService(): string;
  setService(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckRequest): HealthCheckRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HealthCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckRequest;
  static deserializeBinaryFromReader(message: HealthCheckRequest, reader: jspb.BinaryReader): HealthCheckRequest;
}

export namespace HealthCheckRequest {
  export type AsObject = {
    service: string,
  }
}

export class HealthCheckResponse extends jspb.Message {
  getStatus(): HealthCheckResponse.ServingStatusMap[keyof HealthCheckResponse.ServingStatusMap];
  setStatus(value: HealthCheckResponse.ServingStatusMap[keyof HealthCheckResponse.ServingStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckResponse): HealthCheckResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HealthCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckResponse;
  static deserializeBinaryFromReader(message: HealthCheckResponse, reader: jspb.BinaryReader): HealthCheckResponse;
}

export namespace HealthCheckResponse {
  export type AsObject = {
    status: HealthCheckResponse.ServingStatusMap[keyof HealthCheckResponse.ServingStatusMap],
  }

  export interface ServingStatusMap {
    UNKNOWN: 0;
    SERVING: 1;
    NOT_SERVING: 2;
    SERVICE_UNKNOWN: 3;
  }

  export const ServingStatus: ServingStatusMap;
}

export interface NullValueMap {
  NULL_VALUE: 0;
}

export const NullValue: NullValueMap;

export interface IndexDirectionMap {
  ASCENDING: 0;
  DESCENDING: 1;
}

export const IndexDirection: IndexDirectionMap;

