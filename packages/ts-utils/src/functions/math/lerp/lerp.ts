import { clamp } from '../clamp/clamp';

/**
 * Linearly interpolates between two values.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @param {number} t - The interpolation factor.
 * @returns {number} The interpolated value.
 */
export function lerp(min: number, max: number, t: number): number {
  const interpolation = clamp(t, 0, 1);
  return min + (max - min) * interpolation;
}
