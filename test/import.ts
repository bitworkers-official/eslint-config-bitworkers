export async function kk(): Promise<void> {}
function k(): void {}

;(async () => {
  kk()
  try {
    await kk()
  } catch (error) {
    // noop
  }
  await k()
})()
// let a = []

// const a = [1, 2, 3].map(() => 22)

/**
 * An object that is cool
 */
// const object = {
//   add() {
//     return 22
//   },
// }

/**
 * Blob.
 *
 * @param a - A.
 * @param b - B.
 * @returns Result.
 */
function add(a: number, b: number): number {
  return a + b
}

/**
 * Foo this is nice.
 *
 * @returns A number.
 */
function quux(): number {
  return 2
}

console.log(add(1, 2), quux())
