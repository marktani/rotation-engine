import { getHighestLayer } from '../table';

describe('table', () => {
  describe('getThickness', () => {
    const fixtures: [number, number][] = [
      [4, 2],
      [5, 3],
      [10, 5],
    ];

    test.each(fixtures)('returns the thickness of a table with width %j', (n, thickness) => {
      expect(getHighestLayer(n)).toBe(thickness);
    });
  });
});
