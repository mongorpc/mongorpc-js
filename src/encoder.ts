import { Value } from "./proto";
import {
  ArrayValue,
  MapValue,
  NullValue,
  ObjectID as ProtoObjectID,
  Timestamp,
} from "./proto/pb/mongorpc_pb";

// mapValue?: MapValue.AsObject;
// arrayValue?: ArrayValue.AsObject;
// bytesValue: Uint8Array | string;
// dateValue?: Timestamp.AsObject;

export interface ObjectID {
  id: string;
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

export function EncodeValue(value: EncoderValueTypes): Value {
  let result: Value = new Value();

  switch (typeof value) {
    case "string":
      result.setStringValue(value);
      break;
    case "number":
      Number.isInteger(value)
        ? result.setIntegerValue(value)
        : result.setDoubleValue(value);
      break;
    case "boolean":
      result.setBoolValue(value);
      break;
    case "object":
      let map = new Map(Object.entries(value as object));
      let mapValue = new MapValue();

      // TODO: Support nested objects / check does this even work???
      map.forEach((value, key) => {
        let v = EncodeValue(value);
        mapValue.getFieldsMap().set(key, v);
      });

      result.setMapValue(mapValue);

    default:
      if (value === null) {
        result.setNullValue(NullValue.NULL_VALUE);
      } else if (value as ObjectID) {
        let id = new ProtoObjectID();
        id.setId((value as ObjectID).id);
        result.setObjectIdValue(id);
      } else if (value instanceof Date) {
        let date = new Timestamp();
        date.setSeconds((value as Date).getTime() / 1000);
      } else if (Array.isArray(value)) {
        let array = new ArrayValue();
        for (let item of value) {
          array.addValues(EncodeValue(item));
        }
        result.setArrayValue(array);
      } else {
        console.error("Unsupported value type", typeof value);
      }
  }

  return result;
}
