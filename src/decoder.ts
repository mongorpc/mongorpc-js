import { Value } from "./proto";

export function DecodeValue(value: Value): any {
  switch (value.getTypeCase()) {
    case Value.TypeCase.STRING_VALUE:
      return value.getStringValue();

    case Value.TypeCase.INTEGER_VALUE:
      return value.getIntegerValue();

    case Value.TypeCase.DOUBLE_VALUE:
      return value.getDoubleValue();

    case Value.TypeCase.BOOL_VALUE:
      return value.getBoolValue();

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

    case Value.TypeCase.DATE_VALUE:
     let date = value.getDateValue();
     if (date) {
       return new Date(date.getSeconds() * 1000);
     }

    case Value.TypeCase.OBJECT_ID_VALUE:
      let id = value.getObjectIdValue();
      if (id) {
        return id.getId();
      }

    default:
      console.error("Unsupported type", TypeToString(value.getTypeCase()));
  }
}

export function TypeToString(type: Value.TypeCase) {
  switch (type) {
    case Value.TypeCase.TYPE_NOT_SET:
      return "TYPE_NOT_SET";
    case Value.TypeCase.DOUBLE_VALUE:
      return "DOUBLE_VALUE";
    case Value.TypeCase.STRING_VALUE:
      return "STRING_VALUE";
    case Value.TypeCase.MAP_VALUE:
      return "MAP_VALUE";
    case Value.TypeCase.ARRAY_VALUE:
      return "ARRAY_VALUE";
    case Value.TypeCase.BYTES_VALUE:
      return "BYTES_VALUE";
    case Value.TypeCase.BOOL_VALUE:
      return "BOOL_VALUE";
    case Value.TypeCase.DATE_VALUE:
      return "DATE_VALUE";
    case Value.TypeCase.NULL_VALUE:
      return "NULL_VALUE";
    case Value.TypeCase.INTEGER_VALUE:
      return "INTEGER_VALUE";
    case Value.TypeCase.OBJECT_ID_VALUE:
      return "OBJECT_ID_VALUE";
    default:
      return "unknown";
  }
}
