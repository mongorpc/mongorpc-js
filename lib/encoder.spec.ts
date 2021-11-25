import { Value } from "./mongorpc/value_pb";
import { EncodeValue, ObjectID } from "./encoder";

describe("mongorpc value EncodeValuer", () => {
  it("null", async () => {
    let result = EncodeValue(null);
    expect(result.getTypeCase()).toBe(Value.TypeCase.NULL_VALUE);
  });

  it("integer", async () => {
    let result = EncodeValue(1);
    expect(result.getTypeCase()).toBe(Value.TypeCase.INTEGER64_VALUE);
  });

  it("double", async () => {
    let result = EncodeValue(1.1);
    expect(result.getTypeCase()).toBe(Value.TypeCase.DOUBLE_VALUE);
  });

  it("string", async () => {
    let result = EncodeValue("Hello World!");
    expect(result.getTypeCase()).toBe(Value.TypeCase.STRING_VALUE);
  });

  it("bool", async () => {
    let result = EncodeValue(false);
    expect(result.getTypeCase()).toBe(Value.TypeCase.BOOLEAN_VALUE);
  });

  it("objectID", async () => {
    let result = EncodeValue(new ObjectID("5b8f8f8f8f8f8f8f8f8f8f"));
    expect(result.getTypeCase()).toBe(Value.TypeCase.OBJECT_ID_VALUE);
  });

  it("date", async () => {
    let result = EncodeValue(new Date());
    expect(result.getTypeCase()).toBe(Value.TypeCase.TIMESTAMP_VALUE);
  });

  it("array", async () => {
    let result = EncodeValue(["satish", "nisha"]);
    expect(result.getTypeCase()).toBe(Value.TypeCase.ARRAY_VALUE);

    result
      .getArrayValue()
      ?.getValuesList()
      .forEach((value) => {
        expect(value.getTypeCase()).toBe(Value.TypeCase.STRING_VALUE);
      });

    let intArray = EncodeValue([1, 2, 3]);
    expect(intArray.getTypeCase()).toBe(Value.TypeCase.ARRAY_VALUE);

    intArray
      .getArrayValue()
      ?.getValuesList()
      .forEach((value) => {
        expect(value.getTypeCase()).toBe(Value.TypeCase.INTEGER64_VALUE);
      });
  });

  it("object", async () => {
    let result = EncodeValue({
      name: "satish",
      age: 27,
      address: {
        city: "bangalore",
        state: "karnataka",
      },
    });
    expect(result.getTypeCase()).toBe(Value.TypeCase.MAP_VALUE);

    result
      .getMapValue()
      ?.getFieldsMap()
      .forEach((value, key) => {
        if (key === "name") {
          expect(value.getTypeCase()).toBe(Value.TypeCase.STRING_VALUE);
        } else if (key === "age") {
          expect(value.getTypeCase()).toBe(Value.TypeCase.INTEGER64_VALUE);
        } else if (key === "address") {
          expect(value.getTypeCase()).toBe(Value.TypeCase.MAP_VALUE);

          value
            .getMapValue()
            ?.getFieldsMap()
            .forEach((value, key) => {
              if (key === "city") {
                expect(value.getTypeCase()).toBe(Value.TypeCase.STRING_VALUE);
              } else if (key === "state") {
                expect(value.getTypeCase()).toBe(Value.TypeCase.STRING_VALUE);
              }
            });
        }
      });
  });
});
