const capitalize = require('./capitalize');

test('capitalizes the string "hello"', () => {
  expect(capitalize("hello")).toBe("Hello");
});

test('capitalizes the string "gOOdByE"', () => {
  expect(capitalize("gOOdByE")).toBe("Goodbye");
});

test('does not return the string "HELLO" when given the string "hello"', () => {
  expect(capitalize("hello")).not.toBe("HELLO");
});