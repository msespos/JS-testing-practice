const caesarCipher = require('./caesarCipher')

test('shifts "abcde" by 1 correctly', () => {
  expect(caesarCipher("abcde", 1)).toBe("bcdef");
});

test('shifts "hello" by 5 correctly', () => {
  expect(caesarCipher("hello", 5)).toBe("mjqqt");
});

test('wraps from z to a', () => {
  expect(caesarCipher("exactly", 10)).toBe("ohkmdvi");
});

test('shifts upper and lower case characters', () => {
  expect(caesarCipher("HeLlO", 5)).toBe("MjQqT");
});

test('wraps from z to a with uppercase characters', () => {
  expect(caesarCipher("EXACTLY", 10)).toBe("OHKMDVI");
});

test('wraps the whole alphabet in upper and lower case characters', () => {
  expect(caesarCipher("aBcDeFgHiJkLmNoPqRsTuVwXyZ", 23)).toBe("xYzAbCdEfGhIjKlMnOpQrStUvW");
});

test('works with negative numbers', () => {
  expect(caesarCipher("aBcDeFgHiJkLmNoPqRsTuVwXyZ", -3)).toBe("xYzAbCdEfGhIjKlMnOpQrStUvW");
});

test('works with negative numbers', () => {
  expect(caesarCipher("aBcDeFgHiJkLmNoPqRsTuVwXyZ", -20)).toBe("gHiJkLmNoPqRsTuVwXyZaBcDeF");
});

test('works with large numbers', () => {
  expect(caesarCipher("aBcDeFgHiJkLmNoPqRsTuVwXyZ", 400)).toBe("kLmNoPqRsTuVwXyZaBcDeFgHiJ");
});

test('works with large negative numbers', () => {
  expect(caesarCipher("aBcDeFgHiJkLmNoPqRsTuVwXyZ", -400)).toBe("qRsTuVwXyZaBcDeFgHiJkLmNoP");
});

test('works with punctuation', () => {
  expect(caesarCipher("Hello!??!?#$%xYz", 5)).toBe("Mjqqt!??!?#$%cDe");
});
