import type { TableWidth, Layer } from './types';
import { getRegionSize } from './region';
import { verifyLayerAndThrow } from './verify';

/**
 * @param {number} n - the table width
 * @param {number} l - the current layer
 * @returns {number} the width of the current layer
 */
export const getLayerWidth = (n: TableWidth, l: Layer): number => {
  const regionSize = getRegionSize(n, l);

  if (regionSize === 1) {
    if (n % 2 === 1) {
      return 1;
    }
  }

  return regionSize + 1;
};

/**
 * @param {number} n - the table width
 * @param {number} l - the current layer
 * @returns {number} the number of elements in the current layer
 */
export const getLayerSize = (n: TableWidth, l: Layer): number => {
  verifyLayerAndThrow(n, l);

  const layerWidth = getLayerWidth(n, l);

  if (layerWidth === 1) {
    return 1;
  } else if (layerWidth === 2) {
    return 4;
  } else if (layerWidth === 3) {
    return 8;
  }

  return layerWidth * layerWidth - (layerWidth - 2) * (layerWidth - 2);
};

/**
 * @param {number} n - the table width
 * @param {number} l - the current layer
 * @returns {number} The first index in the table belonging to the current layer
 */
export const getStart = (n: TableWidth, l: Layer): number => {
  verifyLayerAndThrow(n, l);

  return l * (n + 1);
};

/**
 * @param {number} n - the table width
 * @param {number} l - the current layer
 * @returns {number} The last index in the table belonging to the current layer
 */
export const getEnd = (n: TableWidth, l: Layer): number => {
  verifyLayerAndThrow(n, l);

  return n * n - 1 - (n + 1) * l;
};
