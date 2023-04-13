import type { TableContent } from '../../types/core/rotate';
import { verifyLayer, verifyTableContent } from '../verify';

describe('verify', () => {
  describe('verifyLayer', () => {
    const tooGreatFixtures: number[][] = [
      [4, 5],
      [4, 4],
      [4, 3],
      [4, 2],
      [5, 6],
      [5, 5],
      [5, 4],
      [5, 3],
      [10, 11],
      [10, 10],
      [10, 9],
      [10, 8],
      [10, 7],
      [10, 6],
      [10, 5],
    ];
    test.each(tooGreatFixtures)(
      'returns false for a table with width %j if the current layer %j is too great',
      (n, l) => {
        expect(verifyLayer(n, l)).toBe(false);
      },
    );

    const tooSmallFixtures: number[][] = [
      [4, -1],
      [5, -2],
      [10, -3],
    ];
    test.each(tooSmallFixtures)(
      'returns false for a table with width %j if the current layer %j is too small',
      (n, l) => {
        expect(verifyLayer(n, l)).toBe(false);
      },
    );

    const validFixtures: number[][] = [
      [4, 1],
      [4, 0],
      [5, 2],
      [5, 1],
      [5, 0],
      [10, 4],
      [10, 3],
      [10, 2],
      [10, 1],
      [10, 0],
    ];
    test.each(validFixtures)('returns true for a table with width %j and a valid current layer %j', (n, l) => {
      expect(verifyLayer(n, l)).toBe(true);
    });
  });

  describe('verifyTableContent', () => {
    const nonSquareFixtures: TableContent[] = [[1, 2]];
    test.each(nonSquareFixtures)('returns false for a nonsquare table %j', (...content) => {
      expect(verifyTableContent(content)).toBe(false);
    });

    const validFixture: TableContent[] = [[-2], [0, 1, 2, 3], [1, 2, 3, 4, 5, 6, 7, 8, 9]];

    test.each(validFixture)('returns true for a valid table %j', (...content) => {
      expect(verifyTableContent(content)).toBe(true);
    });
  });
});
