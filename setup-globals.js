//  A function takes an actual value and
// return an object that has functions
// for different assertions that we can make
// on that actual value
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  };
}

async function test(title, callback) {
  try {
    await callback();
    console.log(`v ${title}`);
  } catch (error) {
    console.error(`x ${title}`);
    console.error(error);
  }
}
global.test = test;
global.expect = expect;
