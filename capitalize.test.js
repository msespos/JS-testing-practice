const capitalize = require('./capitalize');

test('capitalizes the string "hello"', () => {
  expect(capitalize("hello")).toBe("Hello");
});