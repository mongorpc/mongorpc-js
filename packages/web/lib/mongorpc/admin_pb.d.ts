import * as jspb from 'google-protobuf'

import * as mongorpc_value_pb from '../mongorpc/value_pb';


export class DropDatabaseRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): DropDatabaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropDatabaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropDatabaseRequest): DropDatabaseRequest.AsObject;
  static serializeBinaryToWriter(message: DropDatabaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropDatabaseRequest;
  static deserializeBinaryFromReader(message: DropDatabaseRequest, reader: jspb.BinaryReader): DropDatabaseRequest;
}

export namespace DropDatabaseRequest {
  export type AsObject = {
    database: string,
  }
}

export class CreateCollectionRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): CreateCollectionRequest;

  getCollection(): string;
  setCollection(value: string): CreateCollectionRequest;

  getOptions(): CreateCollectionOptions | undefined;
  setOptions(value?: CreateCollectionOptions): CreateCollectionRequest;
  hasOptions(): boolean;
  clearOptions(): CreateCollectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCollectionRequest): CreateCollectionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCollectionRequest;
  static deserializeBinaryFromReader(message: CreateCollectionRequest, reader: jspb.BinaryReader): CreateCollectionRequest;
}

export namespace CreateCollectionRequest {
  export type AsObject = {
    database: string,
    collection: string,
    options?: CreateCollectionOptions.AsObject,
  }
}

export class CreateCollectionOptions extends jspb.Message {
  getSize(): number;
  setSize(value: number): CreateCollectionOptions;

  getMax(): number;
  setMax(value: number): CreateCollectionOptions;

  getValidator(): mongorpc_value_pb.Value | undefined;
  setValidator(value?: mongorpc_value_pb.Value): CreateCollectionOptions;
  hasValidator(): boolean;
  clearValidator(): CreateCollectionOptions;

  getValidationlevel(): string;
  setValidationlevel(value: string): CreateCollectionOptions;

  getValidationaction(): string;
  setValidationaction(value: string): CreateCollectionOptions;

  getStorageengine(): mongorpc_value_pb.Value | undefined;
  setStorageengine(value?: mongorpc_value_pb.Value): CreateCollectionOptions;
  hasStorageengine(): boolean;
  clearStorageengine(): CreateCollectionOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCollectionOptions.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCollectionOptions): CreateCollectionOptions.AsObject;
  static serializeBinaryToWriter(message: CreateCollectionOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCollectionOptions;
  static deserializeBinaryFromReader(message: CreateCollectionOptions, reader: jspb.BinaryReader): CreateCollectionOptions;
}

export namespace CreateCollectionOptions {
  export type AsObject = {
    size: number,
    max: number,
    validator?: mongorpc_value_pb.Value.AsObject,
    validationlevel: string,
    validationaction: string,
    storageengine?: mongorpc_value_pb.Value.AsObject,
  }
}

export class DropCollectionRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): DropCollectionRequest;

  getCollection(): string;
  setCollection(value: string): DropCollectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropCollectionRequest): DropCollectionRequest.AsObject;
  static serializeBinaryToWriter(message: DropCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropCollectionRequest;
  static deserializeBinaryFromReader(message: DropCollectionRequest, reader: jspb.BinaryReader): DropCollectionRequest;
}

export namespace DropCollectionRequest {
  export type AsObject = {
    database: string,
    collection: string,
  }
}

export class ListCollectionsRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): ListCollectionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCollectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCollectionsRequest): ListCollectionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCollectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCollectionsRequest;
  static deserializeBinaryFromReader(message: ListCollectionsRequest, reader: jspb.BinaryReader): ListCollectionsRequest;
}

export namespace ListCollectionsRequest {
  export type AsObject = {
    database: string,
  }
}

export class ListIndexesRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): ListIndexesRequest;

  getCollection(): string;
  setCollection(value: string): ListIndexesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIndexesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIndexesRequest): ListIndexesRequest.AsObject;
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

export class CreateIndexRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): CreateIndexRequest;

  getCollection(): string;
  setCollection(value: string): CreateIndexRequest;

  getIndex(): Index | undefined;
  setIndex(value?: Index): CreateIndexRequest;
  hasIndex(): boolean;
  clearIndex(): CreateIndexRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIndexRequest): CreateIndexRequest.AsObject;
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

export class Index extends jspb.Message {
  getName(): string;
  setName(value: string): Index;

  getKeysList(): Array<IndexKey>;
  setKeysList(value: Array<IndexKey>): Index;
  clearKeysList(): Index;
  addKeys(value?: IndexKey, index?: number): IndexKey;

  getUnique(): boolean;
  setUnique(value: boolean): Index;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Index.AsObject;
  static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
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
  setField(value: string): IndexKey;

  getDirection(): IndexDirection;
  setDirection(value: IndexDirection): IndexKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexKey.AsObject;
  static toObject(includeInstance: boolean, msg: IndexKey): IndexKey.AsObject;
  static serializeBinaryToWriter(message: IndexKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexKey;
  static deserializeBinaryFromReader(message: IndexKey, reader: jspb.BinaryReader): IndexKey;
}

export namespace IndexKey {
  export type AsObject = {
    field: string,
    direction: IndexDirection,
  }
}

export class DropIndexRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): DropIndexRequest;

  getCollection(): string;
  setCollection(value: string): DropIndexRequest;

  getIndex(): string;
  setIndex(value: string): DropIndexRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropIndexRequest): DropIndexRequest.AsObject;
  static serializeBinaryToWriter(message: DropIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropIndexRequest;
  static deserializeBinaryFromReader(message: DropIndexRequest, reader: jspb.BinaryReader): DropIndexRequest;
}

export namespace DropIndexRequest {
  export type AsObject = {
    database: string,
    collection: string,
    index: string,
  }
}

export enum IndexDirection { 
  ASCENDING = 0,
  DESCENDING = 1,
}
