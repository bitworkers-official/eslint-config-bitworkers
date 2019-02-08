const myPromise = Promise.resolve()

function doSomethingElse() {
  myPromise.then(console.log).catch(() => {})
}

doSomethingElse()
