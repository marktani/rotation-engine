/*
 * For the following functions, `n` denotes the table width (= the total amount of layers)
 * and `l` denotes the current layer.
 */

import type { TableWidth, Layer, Region } from '../types/core/rotate';
import { getEnd, getStart } from './layer';
import { verifyLayerAndThrow } from './verify';

export const getRegionSize = (n: TableWidth, l: Layer): number => {
  verifyLayerAndThrow(n, l);

  return Math.max(1, n - 1 - 2 * l);
};

/**
 * @param {number} n - the table width
 * @param {number} l - the current layer
 * @returns {number} The top region of the current layer
 */
export const getTopRegion = (n: TableWidth, l: Layer): Region => {
  verifyLayerAndThrow(n, l);

  const offset = getStart(n, l);

  if (getRegionSize(n, l) === 1) {
    return new Set<number>([offset]);
  }

  return new Set<number>(Array.from(Array(getRegionSize(n, l)).keys()).map((x) => offset + x));
};

/**
 * @param {number} n - the table width
 * @param {number} l - the current layer
 * @returns {number} The left region of the current layer
 */
export const getLeftRegion = (n: TableWidth, l: Layer): Region => {
  verifyLayerAndThrow(n, l);

  const offset = getStart(n, l);

  if (getRegionSize(n, l) === 1 && n % 2 == 1) {
    return new Set<number>([offset]);
  }

  return new Set<number>(Array.from(Array(getRegionSize(n, l)).keys()).map((x) => offset + (x + 1) * n));
};

/**
 * @param {number} n - the table width
 * @param {number} l - the current layer
 * @returns {number} The bottom region of the current layer
 */
export const getBottomRegion = (n: TableWidth, l: Layer): Region => {
  verifyLayerAndThrow(n, l);

  const offset = getEnd(n, l);

  if (getRegionSize(n, l) === 1) {
    return new Set<number>([offset]);
  }

  return new Set<number>(Array.from(Array(getRegionSize(n, l)).keys()).map((x) => offset - x));
};

/**
 * @param {number} n - the table width
 * @param {number} l - the current layer
 * @returns {number} The right region of the current layer
 */
export const getRightRegion = (n: TableWidth, l: Layer): Region => {
  verifyLayerAndThrow(n, l);

  const offset = getEnd(n, l);

  if (getRegionSize(n, l) === 1 && n % 2 == 1) {
    return new Set<number>([offset]);
  }

  return new Set<number>(Array.from(Array(getRegionSize(n, l)).keys()).map((x) => offset - (x + 1) * n));
};
