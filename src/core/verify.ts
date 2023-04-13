import type { Layer, TableContent, TableWidth } from './types';
import { getHighestLayer } from './table';
import { isSquare } from './utils';

/**
 * @param {number} n - the table width
 * @param {number} l - the layer
 * @returns {boolean} `true` iff the values are valid, otherwise, an error is thrown.
 */
export const verifyLayer = (n: TableWidth, l: Layer): boolean => {
  if (l < 0) {
    return false;
  } else if (l > getHighestLayer(n) - 1) {
    return false;
  }

  return true;
};

export const verifyTableContent = (data: TableContent): boolean => {
  if (!isSquare(data.length)) {
    return false;
  }

  return true;
};
