import { Test } from './test'
import { H } from './bot'

console.log(H)
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

// eslint-disable-next-line guard-for-in
for (const k in o) {
  console.log(k)
}
