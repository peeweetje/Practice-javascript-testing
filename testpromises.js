const testPromises = str => {
    return new Promise((resolve, reject) => {
      if (!str) {
        reject('Empty string')
        return
      }
      resolve(str.totestPromises())
    })
  }
  
  module.exports = testPromises