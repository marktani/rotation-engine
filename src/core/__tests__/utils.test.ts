import { isSquare } from '../utils';

describe('utils', () => {
  describe('isSquare', () => {
    const squares: number[] = [1, 4, 9, 16, 25, 10000];

    test.each(squares)('returns true for square number %j', (square) => expect(isSquare(square)).toBe(true));

    const nonSquares: number[] = [2, 3, 5, 8, 15, 24, 27, 9999];
    test.each(nonSquares)('returns false for non square number %j', (nonSquare) =>
      expect(isSquare(nonSquare)).toBe(false),
    );
  });
});
