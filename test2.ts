import { Test } from './test'

const b: Test = {
  x: 1,
}

console.log(b)

let y = 2
y++

const x = 2

const o = {
  a: 1,
  b: 2,
}

const p = { l: 1, ...o }

const { a } = o

console.log(a)
