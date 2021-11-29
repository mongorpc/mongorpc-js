// package: mongorpc
// file: mongorpc/value.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

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

export class ArrayValue extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<Value>;
    setValuesList(value: Array<Value>): ArrayValue;
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
    setSeconds(value: number): Timestamp;
    getNanos(): number;
    setNanos(value: number): Timestamp;

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

export class ObjectId extends jspb.Message { 
    getId(): string;
    setId(value: string): ObjectId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObjectId.AsObject;
    static toObject(includeInstance: boolean, msg: ObjectId): ObjectId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObjectId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObjectId;
    static deserializeBinaryFromReader(message: ObjectId, reader: jspb.BinaryReader): ObjectId;
}

export namespace ObjectId {
    export type AsObject = {
        id: string,
    }
}

export class Value extends jspb.Message { 

    hasInteger32Value(): boolean;
    clearInteger32Value(): void;
    getInteger32Value(): number;
    setInteger32Value(value: number): Value;

    hasInteger64Value(): boolean;
    clearInteger64Value(): void;
    getInteger64Value(): number;
    setInteger64Value(value: number): Value;

    hasBooleanValue(): boolean;
    clearBooleanValue(): void;
    getBooleanValue(): boolean;
    setBooleanValue(value: boolean): Value;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): string;
    setStringValue(value: string): Value;

    hasDoubleValue(): boolean;
    clearDoubleValue(): void;
    getDoubleValue(): number;
    setDoubleValue(value: number): Value;

    hasNullValue(): boolean;
    clearNullValue(): void;
    getNullValue(): NullValue;
    setNullValue(value: NullValue): Value;

    hasArrayValue(): boolean;
    clearArrayValue(): void;
    getArrayValue(): ArrayValue | undefined;
    setArrayValue(value?: ArrayValue): Value;

    hasMapValue(): boolean;
    clearMapValue(): void;
    getMapValue(): MapValue | undefined;
    setMapValue(value?: MapValue): Value;

    hasObjectIdValue(): boolean;
    clearObjectIdValue(): void;
    getObjectIdValue(): ObjectId | undefined;
    setObjectIdValue(value?: ObjectId): Value;

    hasTimestampValue(): boolean;
    clearTimestampValue(): void;
    getTimestampValue(): Timestamp | undefined;
    setTimestampValue(value?: Timestamp): Value;

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
        integer32Value: number,
        integer64Value: number,
        booleanValue: boolean,
        stringValue: string,
        doubleValue: number,
        nullValue: NullValue,
        arrayValue?: ArrayValue.AsObject,
        mapValue?: MapValue.AsObject,
        objectIdValue?: ObjectId.AsObject,
        timestampValue?: Timestamp.AsObject,
    }

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

    hasStartAtOperationTime(): boolean;
    clearStartAtOperationTime(): void;
    getStartAtOperationTime(): Timestamp | undefined;
    setStartAtOperationTime(value?: Timestamp): ChangeStreamOptions;

    hasMaxAwaitTimeMs(): boolean;
    clearMaxAwaitTimeMs(): void;
    getMaxAwaitTimeMs(): Timestamp | undefined;
    setMaxAwaitTimeMs(value?: Timestamp): ChangeStreamOptions;

    hasResumeAfter(): boolean;
    clearResumeAfter(): void;
    getResumeAfter(): Value | undefined;
    setResumeAfter(value?: Value): ChangeStreamOptions;

    hasCollation(): boolean;
    clearCollation(): void;
    getCollation(): Value | undefined;
    setCollation(value?: Value): ChangeStreamOptions;

    hasStartAfter(): boolean;
    clearStartAfter(): void;
    getStartAfter(): Value | undefined;
    setStartAfter(value?: Value): ChangeStreamOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeStreamOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeStreamOptions): ChangeStreamOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeStreamOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeStreamOptions;
    static deserializeBinaryFromReader(message: ChangeStreamOptions, reader: jspb.BinaryReader): ChangeStreamOptions;
}

export namespace ChangeStreamOptions {
    export type AsObject = {
        batchSize: number,
        fullDocument: boolean,
        startAtOperationTime?: Timestamp.AsObject,
        maxAwaitTimeMs?: Timestamp.AsObject,
        resumeAfter?: Value.AsObject,
        collation?: Value.AsObject,
        startAfter?: Value.AsObject,
    }
}

export enum NullValue {
    NULL_VALUE = 0,
}
