import { rotateTableLeft } from '../rotate';
import type { TableContent } from '../types';

describe('rotateLeft', () => {
  describe('base cases', () => {
    // prettier-ignore
    const fixtures: [number[], number[]][] = [
      [[0], [0]],
      [[0, 1, 2, 3], [1, 3, 0, 2]],
      [
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 5, 0, 4, 8, 3, 6, 7],
      ],
      [
        [1, 2, 5, 0, 4, 8, 3, 6, 7],
        [2, 5, 8, 1, 4, 7, 0, 3, 6],
      ],
      [
        [10, 20, 50, 12, 40, 80, 30, 60, 70],
        [20, 50, 80, 10, 40, 70, 12, 30, 60],
      ],
    ];

    test.each(fixtures)('rotates table %j correctly to the left', (input, output) => {
      expect(rotateTableLeft(input)).toEqual(output);
    });
  });

  describe('larger cases', () => {
    const fixtures: [number[], number[]][] = [
      [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        [1, 2, 3, 7, 0, 6, 10, 11, 4, 5, 9, 15, 8, 12, 13, 14],
      ],
      [
        [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
          30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
          57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
          84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
        ],
        [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 0, 12, 13, 14, 15, 16, 17, 18, 28, 29, 10, 11, 23, 24, 25, 26, 27, 37, 38, 39,
          20, 21, 22, 34, 35, 36, 46, 47, 48, 49, 30, 31, 32, 33, 45, 55, 56, 57, 58, 59, 40, 41, 42, 43, 44, 54, 66,
          67, 68, 69, 50, 51, 52, 53, 63, 64, 65, 77, 78, 79, 60, 61, 62, 72, 73, 74, 75, 76, 88, 89, 70, 71, 81, 82,
          83, 84, 85, 86, 87, 99, 80, 90, 91, 92, 93, 94, 95, 96, 97, 98,
        ],
      ],
    ];

    test.each(fixtures)('rotates table %j correctly to the left', (input, output) => {
      expect(rotateTableLeft(input)).toEqual(output);
    });
  });

  describe('invalid table', () => {
    test('returns null for invalid table %j', () => {
      expect(rotateTableLeft([1, 2])).toEqual(null);
    });
  });
});
