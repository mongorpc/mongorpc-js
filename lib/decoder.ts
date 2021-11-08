import { Value } from "../proto";
import "../proto/pb/mongorpc_pb";
import "../proto/pb/mongorpc_grpc_web_pb";

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
      var array = arr.getValuesList().map((value) => {
        return DecodeValue(value);
      });
      return array;

    case Value.TypeCase.MAP_VALUE:
      var obj = value.getMapValue().toObject();
      var map: Map<string, any> = new Map();
      for (var key in obj) {
        var value: Value = obj[key];
        map[key] = DecodeValue(value);
      }
      return map;

    default:
      throw new Error("Unsupported value type");
  }
}
