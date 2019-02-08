function m(a: number[]) {
  return Promise.resolve()
    .then(() => a)
    .then(b => b.map(x => x + 1))
}
