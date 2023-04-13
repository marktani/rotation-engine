import type { Layer, TableContent, TableWidth } from '../types/core/rotate';
import { getHighestLayer } from './table';
import { isSquare } from './utils';

/**
 * @param {number} n - the table width
 * @param {number} l - the current layer
 * @returns {boolean} `true` iff the values are valid. otherwise, an error is thrown.
 */
export const verifyLayerAndThrow = (n: TableWidth, l: Layer): boolean => {
  if (l < 0) {
    throw Error('current layer cannot be negative');
  } else if (l > getHighestLayer(n) - 1) {
    throw Error('current layer is too great');
  }

  return true;
};

export const verifyTableContentAndThrow = (data: TableContent): boolean => {
  if (!isSquare(data.length)) {
    throw new Error('input data needs to be a non-empty square table');
  }

  return true;
};
