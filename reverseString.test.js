const reverseString = require('./reverseString');

test('reverses the string "hello"', () => {
  expect(reverseString("hello")).toBe("olleh");
});

test('reverses the string "hellolleh"', () => {
  expect(reverseString("hellolleh")).toBe("hellolleh");
});

test('reverses the string "12345678"', () => {
  expect(reverseString("12345678")).toBe("87654321");
});

test('reverses the string "hellolleh"', () => {
  expect(reverseString("asdf!@#$")).toBe("$#@!fdsa");
});

