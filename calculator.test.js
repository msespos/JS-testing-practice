const calculator = require('./calculator');

test('adds 1 + 1 correctly', () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test('adds 1 + (-1) correctly', () => {
  expect(calculator.add(1, -1)).toBe(0);
});

test('subtracts 1 - 1 correctly', () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});

test('subtracts 1 - (-1) correctly', () => {
  expect(calculator.subtract(1, -1)).toBe(2);
});

test('multiplies 1 * 1 correctly', () => {
  expect(calculator.multiply(1, 1)).toBe(1);
});

test('multiplies 1 * (-1) correctly', () => {
  expect(calculator.multiply(1, -1)).toBe(-1);
});

test('divides 1 / 1 correctly', () => {
  expect(calculator.divide(1, 1)).toBe(1);
});

test('divides 1 / (-1) correctly', () => {
  expect(calculator.divide(1, -1)).toBe(-1);
});

