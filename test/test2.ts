const myPromise = Promise.resolve()

function doSomethingElse(): void {
  myPromise.then(console.log)
}

doSomethingElse()
