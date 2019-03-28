export class H {}

const x = 2
if (x !== 2) {
  console.log(true)
}

export type A = string

export function e() {}

function o() {
  return 2
}

interface d {
  a: number
}
const a = { a: 2 } as d

/* eslint prefer-arrow-callback: "error" */
window.addEventListener('click', () => {
  return 23
})

const a = function(): void {
  24
}
