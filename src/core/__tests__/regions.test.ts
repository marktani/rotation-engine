import { getBottomRegion, getLeftRegion, getRegionSize, getRightRegion, getTopRegion } from '../region';

describe('regions', () => {
  describe('getRegionSize', () => {
    const fixtures: [number, number, number][] = [
      [4, 0, 3],
      [4, 1, 1],
      [5, 0, 4],
      [5, 1, 2],
      [5, 2, 1],
      [10, 0, 9],
      [10, 1, 7],
      [10, 2, 5],
      [10, 3, 3],
      [10, 4, 1],
    ];

    test.each(fixtures)('returns the region size in a table with width %j for current layer %j', (n, l, size) =>
      expect(getRegionSize(n, l)).toBe(size),
    );
  });

  describe('getTopRegion', () => {
    const fixtures: [number, number, Region][] = [
      [4, 0, new Set<number>([0, 1, 2])],
      [4, 1, new Set<number>([5])],
      [5, 0, new Set<number>([0, 1, 2, 3])],
      [5, 1, new Set<number>([6, 7])],
      [5, 2, new Set<number>([12])],
      [10, 0, new Set<number>([0, 1, 2, 3, 4, 5, 6, 7, 8])],
      [10, 1, new Set<number>([11, 12, 13, 14, 15, 16, 17])],
      [10, 2, new Set<number>([22, 23, 24, 25, 26])],
      [10, 3, new Set<number>([33, 34, 35])],
      [10, 4, new Set<number>([44])],
    ];

    test.each(fixtures)('returns the top region in a table with width %j for current layer %j', (n, l, region) => {
      expect(getTopRegion(n, l)).toEqual(region);
    });
  });

  describe('getBottomRegion', () => {
    const fixtures: [number, number, Region][] = [
      [4, 0, new Set<number>([13, 14, 15])],
      [4, 1, new Set<number>([10])],
      [5, 0, new Set<number>([21, 22, 23, 24])],
      [5, 1, new Set<number>([17, 18])],
      [5, 2, new Set<number>([12])],
      [10, 0, new Set<number>([91, 92, 93, 94, 95, 96, 97, 98, 99])],
      [10, 1, new Set<number>([82, 83, 84, 85, 86, 87, 88])],
      [10, 2, new Set<number>([73, 74, 75, 76, 77])],
      [10, 3, new Set<number>([64, 65, 66])],
      [10, 4, new Set<number>([55])],
    ];

    test.each(fixtures)('returns the bottom region in a table with width %j for current layer %j', (n, l, region) => {
      expect(getBottomRegion(n, l)).toEqual(region);
    });
  });

  describe('getLeftRegion', () => {
    const fixtures: [number, number, Region][] = [
      [4, 0, new Set<number>([4, 8, 12])],
      [4, 1, new Set<number>([9])],
      [5, 0, new Set<number>([5, 10, 15, 20])],
      [5, 1, new Set<number>([11, 16])],
      [5, 2, new Set<number>([12])],
      [10, 0, new Set<number>([10, 20, 30, 40, 50, 60, 70, 80, 90])],
      [10, 1, new Set<number>([21, 31, 41, 51, 61, 71, 81])],
      [10, 2, new Set<number>([32, 42, 52, 62, 72])],
      [10, 3, new Set<number>([43, 53, 63])],
      [10, 4, new Set<number>([54])],
    ];

    test.each(fixtures)('returns the left region in a table with width %j for current layer %j', (n, l, region) => {
      expect(getLeftRegion(n, l)).toEqual(region);
    });
  });

  describe('getRightRegion', () => {
    const fixtures: [number, number, Region][] = [
      [4, 0, new Set<number>([3, 7, 11])],
      [4, 1, new Set<number>([6])],
      [5, 0, new Set<number>([4, 9, 14, 19])],
      [5, 1, new Set<number>([8, 13])],
      [5, 2, new Set<number>([12])],
      [10, 0, new Set<number>([9, 19, 29, 39, 49, 59, 69, 79, 89])],
      [10, 1, new Set<number>([18, 28, 38, 48, 58, 68, 78])],
      [10, 2, new Set<number>([27, 37, 47, 57, 67])],
      [10, 3, new Set<number>([36, 46, 56])],
      [10, 4, new Set<number>([45])],
    ];

    test.each(fixtures)('returns the right region in a table with width %j for current layer %j', (n, l, region) => {
      expect(getRightRegion(n, l)).toEqual(region);
    });
  });
});
