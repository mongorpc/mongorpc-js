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
      var arr = value.getArrayValue();
      if (arr) {
        var array = arr.getValuesList().map((value) => {
          return DecodeValue(value);
        });
        return array;
      }
      return [];

    case Value.TypeCase.MAP_VALUE:
      var obj = value.getMapValue()?.getFieldsMap();
      if (obj) {
        return obj;
      }
      return {};
    default:
      throw new Error("Unsupported value type");
  }
}
