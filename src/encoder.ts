import { TypeToString } from "./decoder";
import { Value } from "./proto";
import {
  ArrayValue,
  MapValue,
  NullValue,
  ObjectID as ProtoObjectID,
  Timestamp,
  OperationType
} from "./proto/pb/mongorpc_pb";

// mapValue?: MapValue.AsObject;
// arrayValue?: ArrayValue.AsObject;
// bytesValue: Uint8Array | string;
// dateValue?: Timestamp.AsObject;

export class ObjectID {
  public id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export type EncoderValueTypes =
  | null
  | number
  | string
  | boolean
  | ObjectID
  | Date
  | Array<any>
  | object;

export function EncodeValue(value: any): Value {
  let result: Value = new Value();

  if (value === null) {
    result.setNullValue(NullValue.NULL_VALUE);
    return result;
  }

  if (typeof value === "number") {
    if (Number.isInteger(value)) {
      result.setIntegerValue(value);
    } else {
      result.setDoubleValue(value);
    }
    return result;
  }

  if (typeof value === "string") {
    result.setStringValue(value);
    return result;
  }

  if (typeof value === "boolean") {
    result.setBoolValue(value);
    return result;
  }

  if (value instanceof ObjectID) {
    let id = new ProtoObjectID();
    id.setId(value.id);
    result.setObjectIdValue(id);
    return result;
  }

  if (value instanceof Date) {
    let date = new Timestamp();
    date.setSeconds(value.getTime() / 1000);
    date.setNanos(0);
    result.setDateValue(date);
    return result;
  }

  if (Array.isArray(value)) {
    let array = new ArrayValue();
    value.forEach((v) => {
      array.addValues(EncodeValue(v));
    });
    result.setArrayValue(array);
    return result;
  }

  if (typeof value === "object" || value instanceof Object) {
    let map = new MapValue();
    Object.keys(value).forEach((k) => {
      map.getFieldsMap().set(k, EncodeValue(value[k]));
    });
    result.setMapValue(map);
    return result;
  }

  console.log(`Unsupported type: ${TypeToString(value)}`);

  return result;
}

export function EncodeOperationType(type: string): OperationType {
  type = type.toUpperCase();
  switch (type) {
    case "INSERT":
      return OperationType.INSERT;
    case "UPDATE":
      return OperationType.UPDATE;
    case "DELETE":
      return OperationType.DELETE;
    case "REPLACE":
      return OperationType.REPLACE;
    default:
      throw new Error(`Unsupported operation type: ${type}`);
  }
}