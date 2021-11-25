import * as jspb from "google-protobuf";

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(
    message: Empty,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(
    message: Empty,
    reader: jspb.BinaryReader
  ): Empty;
}

export namespace Empty {
  export type AsObject = {};
}

export class ArrayValue extends jspb.Message {
  getValuesList(): Array<Value>;
  setValuesList(value: Array<Value>): ArrayValue;
  clearValuesList(): ArrayValue;
  addValues(value?: Value, index?: number): Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrayValue.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ArrayValue
  ): ArrayValue.AsObject;
  static serializeBinaryToWriter(
    message: ArrayValue,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ArrayValue;
  static deserializeBinaryFromReader(
    message: ArrayValue,
    reader: jspb.BinaryReader
  ): ArrayValue;
}

export namespace ArrayValue {
  export type AsObject = {
    valuesList: Array<Value.AsObject>;
  };
}

export class MapValue extends jspb.Message {
  getFieldsMap(): jspb.Map<string, Value>;
  clearFieldsMap(): MapValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapValue.AsObject;
  static toObject(includeInstance: boolean, msg: MapValue): MapValue.AsObject;
  static serializeBinaryToWriter(
    message: MapValue,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): MapValue;
  static deserializeBinaryFromReader(
    message: MapValue,
    reader: jspb.BinaryReader
  ): MapValue;
}

export namespace MapValue {
  export type AsObject = {
    fieldsMap: Array<[string, Value.AsObject]>;
  };
}

export class Timestamp extends jspb.Message {
  getSeconds(): number;
  setSeconds(value: number): Timestamp;

  getNanos(): number;
  setNanos(value: number): Timestamp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timestamp.AsObject;
  static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
  static serializeBinaryToWriter(
    message: Timestamp,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Timestamp;
  static deserializeBinaryFromReader(
    message: Timestamp,
    reader: jspb.BinaryReader
  ): Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    seconds: number;
    nanos: number;
  };
}

export class ObjectId extends jspb.Message {
  getId(): string;
  setId(value: string): ObjectId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectId.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectId): ObjectId.AsObject;
  static serializeBinaryToWriter(
    message: ObjectId,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ObjectId;
  static deserializeBinaryFromReader(
    message: ObjectId,
    reader: jspb.BinaryReader
  ): ObjectId;
}

export namespace ObjectId {
  export type AsObject = {
    id: string;
  };
}

export class Value extends jspb.Message {
  getInteger32Value(): number;
  setInteger32Value(value: number): Value;

  getInteger64Value(): number;
  setInteger64Value(value: number): Value;

  getBooleanValue(): boolean;
  setBooleanValue(value: boolean): Value;

  getStringValue(): string;
  setStringValue(value: string): Value;

  getDoubleValue(): number;
  setDoubleValue(value: number): Value;

  getNullValue(): NullValue;
  setNullValue(value: NullValue): Value;

  getArrayValue(): ArrayValue | undefined;
  setArrayValue(value?: ArrayValue): Value;
  hasArrayValue(): boolean;
  clearArrayValue(): Value;

  getMapValue(): MapValue | undefined;
  setMapValue(value?: MapValue): Value;
  hasMapValue(): boolean;
  clearMapValue(): Value;

  getObjectIdValue(): ObjectId | undefined;
  setObjectIdValue(value?: ObjectId): Value;
  hasObjectIdValue(): boolean;
  clearObjectIdValue(): Value;

  getTimestampValue(): Timestamp | undefined;
  setTimestampValue(value?: Timestamp): Value;
  hasTimestampValue(): boolean;
  clearTimestampValue(): Value;

  getTypeCase(): Value.TypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static serializeBinaryToWriter(
    message: Value,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(
    message: Value,
    reader: jspb.BinaryReader
  ): Value;
}

export namespace Value {
  export type AsObject = {
    integer32Value: number;
    integer64Value: number;
    booleanValue: boolean;
    stringValue: string;
    doubleValue: number;
    nullValue: NullValue;
    arrayValue?: ArrayValue.AsObject;
    mapValue?: MapValue.AsObject;
    objectIdValue?: ObjectId.AsObject;
    timestampValue?: Timestamp.AsObject;
  };

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    INTEGER32_VALUE = 1,
    INTEGER64_VALUE = 2,
    BOOLEAN_VALUE = 3,
    STRING_VALUE = 4,
    DOUBLE_VALUE = 5,
    NULL_VALUE = 6,
    ARRAY_VALUE = 7,
    MAP_VALUE = 8,
    OBJECT_ID_VALUE = 9,
    TIMESTAMP_VALUE = 10,
  }
}

export class ChangeStreamOptions extends jspb.Message {
  getBatchSize(): number;
  setBatchSize(value: number): ChangeStreamOptions;

  getFullDocument(): boolean;
  setFullDocument(value: boolean): ChangeStreamOptions;

  getStartAtOperationTime(): Timestamp | undefined;
  setStartAtOperationTime(value?: Timestamp): ChangeStreamOptions;
  hasStartAtOperationTime(): boolean;
  clearStartAtOperationTime(): ChangeStreamOptions;

  getMaxAwaitTimeMs(): Timestamp | undefined;
  setMaxAwaitTimeMs(value?: Timestamp): ChangeStreamOptions;
  hasMaxAwaitTimeMs(): boolean;
  clearMaxAwaitTimeMs(): ChangeStreamOptions;

  getResumeAfter(): Value | undefined;
  setResumeAfter(value?: Value): ChangeStreamOptions;
  hasResumeAfter(): boolean;
  clearResumeAfter(): ChangeStreamOptions;

  getCollation(): Value | undefined;
  setCollation(value?: Value): ChangeStreamOptions;
  hasCollation(): boolean;
  clearCollation(): ChangeStreamOptions;

  getStartAfter(): Value | undefined;
  setStartAfter(value?: Value): ChangeStreamOptions;
  hasStartAfter(): boolean;
  clearStartAfter(): ChangeStreamOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeStreamOptions.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ChangeStreamOptions
  ): ChangeStreamOptions.AsObject;
  static serializeBinaryToWriter(
    message: ChangeStreamOptions,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ChangeStreamOptions;
  static deserializeBinaryFromReader(
    message: ChangeStreamOptions,
    reader: jspb.BinaryReader
  ): ChangeStreamOptions;
}

export namespace ChangeStreamOptions {
  export type AsObject = {
    batchSize: number;
    fullDocument: boolean;
    startAtOperationTime?: Timestamp.AsObject;
    maxAwaitTimeMs?: Timestamp.AsObject;
    resumeAfter?: Value.AsObject;
    collation?: Value.AsObject;
    startAfter?: Value.AsObject;
  };
}

export enum NullValue {
  NULL_VALUE = 0,
}
