const { sumAsync, subtractAsync, sum, subtract } = require("../sum");

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

test("sumAsync adds numbers asynchronously", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtractAsync subtracts numbers asynchronously", async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
