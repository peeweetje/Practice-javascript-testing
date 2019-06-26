const testpromises = require('../testpromises')

// Promises that are rejected can be tested using .catch()
test(`testpromises 'rejected' to equal 'REJECTED'`, () => {
  return testpromises('').catch(e => {
    expect(e).toMatch('Empty string')
  })
})