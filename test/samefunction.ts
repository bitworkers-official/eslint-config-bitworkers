export function add1(a: number, b: number): number {
  return a + b
}

export function add2(a: number, b: number): number {
  return a + b
}
function doSomething() {}

try {
  doSomething()
} catch (error) {
  // Noncompliant
  throw error
}

function foo() {
  console.log('Hello, World!')
}

// a = foo()

const c = 'hello'
const d = 'hello'

console.log(c, d)
