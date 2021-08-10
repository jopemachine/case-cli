const caseConvert = require("../caseConvert");

test("snake case", () => {
  expect(caseConvert("snake", ["hello,", "world!"])).toBe("hello_world");
});

test("pascal case", () => {
  expect(caseConvert("pascal", ["hello,", "world!"])).toBe("HelloWorld");
});

test("constant case", () => {
  expect(caseConvert("constant", ["hello,", "world!"])).toBe("HELLO_WORLD");
});

test("kebab case", () => {
  expect(caseConvert("kebab", ["hello,", "world!"])).toBe("hello-world");
});

test("upper case", () => {
  expect(caseConvert("upper", ["hello,", "world!"])).toBe("HELLO, WORLD!");
});

test("lower case", () => {
  expect(caseConvert("lower", ["hello,", "world!"])).toBe("hello, world!");
});