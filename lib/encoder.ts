import {
  ArrayValue,
  MapValue,
  NullValue,
  Timestamp,
  Value,
  ObjectId as ObjectIdValue,
} from "./mongorpc/value_pb";

export class ObjectID {
  public id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export function EncodeValue(value: any): Value {
  let result: Value = new Value();

  if (value === null) {
    result.setNullValue(NullValue.NULL_VALUE);
    return result;
  }

  if (typeof value === "number") {
    if (Number.isInteger(value)) {
      result.setInteger64Value(value);
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
    result.setBooleanValue(value);
    return result;
  }

  if (value instanceof ObjectID) {
    let id = new ObjectIdValue();
    id.setId(value.id);
    result.setObjectIdValue(id);
    return result;
  }

  if (value instanceof Date) {
    let date = new Timestamp();
    date.setSeconds(value.getTime() / 1000);
    date.setNanos(0);
    result.setTimestampValue(date);
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

  console.log(`Unsupported type: ${value}`);

  return result;
}
