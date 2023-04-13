import type { TableContent, TableWidth } from './types';
import { getBottomRegion, getLeftRegion, getRightRegion, getTopRegion } from './region';
import { getHighestLayer } from './table';
import { verifyTableContentAndThrow } from './verify';

/**
 * This file defines an operation to rotate a `table` to the left.
 *
 * The algorithm here processes the table in layers.
 * Each layer is divided into four `regions`; top, left, bottom, and right.
 *
 * This approach uses the fact that to rotate a table to the left, there are four possible index-shifts we need. Let `t` be a `table` of width `n`.
 * Then, for a left rotation:
 *   - elements in a `top` region move one element "to the left",
 *   - elements in a `left` region move one element "to the bottom",
 *   - elements in a `bottom` region move one element "to the right",
 *   - elements in a `right` region move one element "to the top".
 *
 * For example, the table
 *
 * 0 1 2
 * 3 4 5
 * 6 7 9
 *
 * has two layers; the outer `layer 0`, {{0, 1}, {3, 6}, {7, 9}, {2, 5}}; and the inner `layer 1`, {5}. When rotated to the left, it becomes
 *
 * 1 2 5
 * 0 4 9
 * 3 6 7
 *
 * The outer layer changed to {{1, 2}, {0, 3}, {6, 7}, {5, 9}} and the inner layer didn't change.
 
 * Here we also see that the innermost layer is a special-case: for even width tables it consists of a single 2x2 region, while for odd-width tables it consists of a single 1x1 region.
 *
 * Here are some terminology definitions used in this file.
 *
 * A `layer` of a `table` is the set of elements that have the same concentric distance to the edge.
 * This distance denotes the layer; for example, a table of width 5 has three layers, {0, 1, 2}.
 * The outermost layer is layer 0, and the innermost layer is layer 2.
 *
 *
 */

/**
 * Rotates a given table to the left.
 *
 * @param data the content of a square table
 * @returns the content for a new table with the elements from `data` rotated to the left
 */
export const rotateTableLeft = (data: TableContent): TableContent => {
  verifyTableContentAndThrow(data);

  const n: TableWidth = Math.sqrt(data.length);
  // prettier-ignore
  // manual rotation for small tables
  if (n == 3) {
    return [
      data[1], data[2], data[5],
      data[0], data[4], data[8],
      data[3], data[6], data[7]
    ];
  } else if (n == 2) {
    return [
      data[1], data[3],
      data[0], data[2]
    ];
  } else if (n == 1) {
    return [...data];
  }

  const rotatedTableContent: number[] = [];

  // we start in the outer layer and work inwards
  for (let layer = 0; layer < getHighestLayer(n); layer++) {
    const topRegion = getTopRegion(n, layer);
    const leftRegion = getLeftRegion(n, layer);
    const bottomRegion = getBottomRegion(n, layer);
    const rightRegion = getRightRegion(n, layer);

    // top elements move left
    for (const element of Array.from(topRegion.values())) {
      rotatedTableContent[element] = data[element + 1];
    }

    // left elements move down
    for (const element of Array.from(leftRegion.values())) {
      rotatedTableContent[element] = data[element - n];
    }

    // bottom elements move right
    for (const element of Array.from(bottomRegion.values())) {
      rotatedTableContent[element] = data[element - 1];
    }

    // right elements move up
    for (const element of Array.from(rightRegion.values())) {
      rotatedTableContent[element] = data[element + n];
    }
  }

  return rotatedTableContent;
};
