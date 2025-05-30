/**
 * Clamps a number within a specified range.
 * @param {number} n - The number to be clamped.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} The clamped number.
 */
export function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}
