/**
 * Checks whether a number is the square of an integer.
 * @param n a number
 * @returns `true` iff `n` is the square of an integer, `false` otherwise.
 */
export const isSquare = (n: number) => {
  return n > 0 && Math.sqrt(n) % 1 === 0;
};
