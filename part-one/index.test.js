const { one, two, three, four, cities } = require("./");

describe("one", () => {
  test("short str", () => {
    expect(one("str")).toEqual("short");
    expect(one("")).toEqual("short");
  });

  test("medium str", () => {
    expect(one("mid!")).toEqual("medium");
  });

  test("long str", () => {
    expect(one("longstr!")).toEqual("long");
  });

  test("invalid input", () => {
    expect(one(undefined)).toEqual("unknown");
    expect(one(false)).toEqual("unknown");
    expect(one(1)).toEqual("unknown");
    expect(one([])).toEqual("unknown");
    expect(one({})).toEqual("unknown");
  });
});

describe("two", () => {
  test("happy path", () => {
    expect(two([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10]);
  });

  test("invalid input", () => {
    expect(two([1, null, [], {}, false])).toEqual([2, 0, 0, 0, 0]);
  });
});

describe("three", () => {
  test("happy path", () => {
    const input = {
      id: "chris",
      first_name: "Chris",
      last_name: "Bell",
      age: 35,
    };

    expect(three(input)).toEqual({
      id: "chris",
      name: "Chris Bell",
      age: 35,
    });
  });

  test("invalid input", () => {
    expect(three([])).toEqual([]);
    expect(three(null)).toEqual(null);
  });
});

describe("four", () => {
  test("when the input is < 2 chars should return no results", () => {
    expect(four("V")).toEqual([]);
  });

  test("will return matching city names", () => {
    expect(four("Va")).toEqual(["Valencia", "Vancouver"]);
  });

  test("will return matching city names (case insensitive)", () => {
    expect(four("va")).toEqual(["Valencia", "Vancouver"]);
  });

  test("* will return all cities", () => {
    expect(four("*")).toEqual(cities);
  });

  test("can fuzzy match", () => {
    expect(four("ape")).toEqual(["Budapest"]);
  });
});
