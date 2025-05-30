import { clamp } from '../../math';

/**
 * Clamps a value to a valid iterator within an array.
 * @param {number} n - The value to be clamped.
 * @param {Array} array - The array.
 * @returns {number} The clamped iterator.
 */
export function clampArrayRange(n: number, array: unknown[]): number {
  return clamp(n, 0, array.length - 1);
}
