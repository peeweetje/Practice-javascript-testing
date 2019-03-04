const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

let result = sum(3, 7);
let expected = 10;
// throws error if result is not what we expect
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(7, 3);
expected = 4;
// throws error if result is not what we expect
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

// these are not required , but it's just to simulate an async function
const sumAsync = (...args) => Promise.resolve(sum(...args));
const subtractAsync = (...args) => Promise.resolve(subtract(...args));

module.exports = { sum, subtract, sumAsync, subtractAsync };
