const path = require('path')

const myPromise = Promise.resolve()

function doSomethingElse(): void {
  myPromise.then(console.log)
}

doSomethingElse()
console.log(path)