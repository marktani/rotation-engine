import type { TableWidth } from './types';

/**
 * @param {number} n - the table width
 * @returns {number} the highest layer of the table
 */
export const getHighestLayer = (n: TableWidth): number => {
  return Math.ceil(n / 2);
};
