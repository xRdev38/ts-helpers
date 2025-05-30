import { lerp } from '../lerp/lerp';

/**
 * Remaps a value from one range to another.
 * @param {number} n - The value to be remapped.
 * @param {number} inMin - The minimum value of the input range.
 * @param {number} inMax - The maximum value of the input range.
 * @param {number} outMin - The minimum value of the output range.
 * @param {number} outMax - The maximum value of the output range.
 * @returns {number} The remapped value.
 */
export function remap(
  n: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  const interpolation = (n - inMin) / (inMax - inMin);
  return lerp(outMin, outMax, interpolation);
}
