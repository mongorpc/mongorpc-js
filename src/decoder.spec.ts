import { DecodeValue } from "./decoder";
import { EncodeValue, ObjectID } from "./encoder";
import { Value } from "./proto";

describe("mongorpc value EncodeValuer", () => {
  let values = [
    null,
    1,
    1.1,
    "Hello World!",
    true,
    false,
    new Date(),
    [1, 2, 3],
    { a: 1, b: 2 },
    // new ObjectID("5b8f8f8f8f8f8f8f8f8f8f"),
    {
      name: "satish",
      age: 27,
      address: {
        city: "bangalore",
        state: "karnataka",
      },
    },
  ];

  values.forEach((value) => {
    it(`should encode ${value}`, () => {
      let encoded = EncodeValue(value);
      expect(DecodeValue(encoded)).toStrictEqual(value);
    });
  });
});
