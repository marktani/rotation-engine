import { getLayerWidth, getLayerSize, getStart, getEnd } from '../layer';

describe('layer', () => {
  describe('getLayerWidth', () => {
    const fixtures: [number, number, number][] = [
      [4, 0, 4],
      [4, 1, 2],
      [5, 0, 5],
      [5, 1, 3],
      [5, 2, 1],
      [10, 0, 10],
      [10, 1, 8],
      [10, 2, 6],
      [10, 3, 4],
      [10, 4, 2],
    ];

    test.each(fixtures)('returns the layer width in a table with width %j for current layer %j', (n, l, layerWidth) => {
      expect(getLayerWidth(n, l)).toBe(layerWidth);
    });
  });

  describe('getLayerSize', () => {
    const fixtures: [number, number, number][] = [
      [4, 0, 12],
      [4, 1, 4],
      [5, 0, 16],
      [5, 1, 8],
      [5, 2, 1],
      [10, 0, 36],
      [10, 1, 28],
      [10, 2, 20],
      [10, 3, 12],
      [10, 4, 4],
    ];

    test.each(fixtures)('returns the layer size in a table with width %j for current layer %j', (n, l, layerSize) => {
      expect(getLayerSize(n, l)).toBe(layerSize);
    });
  });

  describe('getStart', () => {
    const fixtures: [number, number, number][] = [
      [4, 0, 0],
      [4, 1, 5],
      [5, 0, 0],
      [5, 1, 6],
      [5, 2, 12],
      [10, 0, 0],
      [10, 1, 11],
      [10, 2, 22],
      [10, 3, 33],
      [10, 4, 44],
    ];

    test.each(fixtures)('returns the first index in a table with width %j for current layer %j', (n, l, index) =>
      expect(getStart(n, l)).toBe(index),
    );
  });

  describe('getEnd', () => {
    const fixtures: [number, number, number][] = [
      [4, 0, 15],
      [4, 1, 10],
      [5, 0, 24],
      [5, 1, 18],
      [5, 2, 12],
      [10, 0, 99],
      [10, 1, 88],
      [10, 2, 77],
      [10, 3, 66],
      [10, 4, 55],
    ];

    test.each(fixtures)('returns the last index in a table with width %j for current layer %j', (n, l, index) =>
      expect(getEnd(n, l)).toBe(index),
    );
  });
});
