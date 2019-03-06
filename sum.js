const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

test("sum adds number", () => {
  const result = sum(3, 7);
  const expected = 10;
  // throws error if result is not what we expect
  expect(result).toBe(expected);
});

test("subtract numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;
  // throws error if result is not what we expect
  expect(result).toBe(expected);
});

// these are not required , but it's just to simulate an async function
const sumAsync = (...args) => Promise.resolve(sum(...args));
const subtractAsync = (...args) => Promise.resolve(subtract(...args));

module.exports = { sum, subtract, sumAsync, subtractAsync };
