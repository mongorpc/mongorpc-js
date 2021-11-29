import { Value } from "./mongorpc/value_pb";

export function DecodeValue(value: Value): any {
  switch (value.getTypeCase()) {
    case Value.TypeCase.STRING_VALUE:
      return value.getStringValue();

    case Value.TypeCase.INTEGER32_VALUE:
      return value.getInteger32Value();

    case Value.TypeCase.INTEGER64_VALUE:
      return value.getInteger64Value();

    case Value.TypeCase.DOUBLE_VALUE:
      return value.getDoubleValue();

    case Value.TypeCase.BOOLEAN_VALUE:
      return value.getBooleanValue();

    case Value.TypeCase.NULL_VALUE:
      return null;

    case Value.TypeCase.ARRAY_VALUE:
      let arr = value.getArrayValue();
      if (arr) {
        let array = arr.getValuesList().map((value) => {
          return DecodeValue(value);
        });
        return array;
      }
      return [];

    case Value.TypeCase.MAP_VALUE:
      let obj = value.getMapValue()?.getFieldsMap();
      if (obj) {
        let object: any = {};
        obj.forEach((value, key) => {
          object[key] = DecodeValue(value);
        });
        return object;
      }
      return {};

    case Value.TypeCase.TIMESTAMP_VALUE:
      let date = value.getTimestampValue();
      if (date) {
        return new Date(date.getSeconds() * 1000);
      }

    case Value.TypeCase.OBJECT_ID_VALUE:
      let id = value.getObjectIdValue();
      if (id) {
        return id.getId();
      }

    default:
      console.error("Unsupported type", value);
  }
}
