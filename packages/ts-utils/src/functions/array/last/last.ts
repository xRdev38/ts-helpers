import { at } from '../at/at';

/**
 * Retrieves the last element from an array.
 * @param {ReadonlyArray<T>} array - The array.
 * @returns {T | undefined} The last element in the array.
 * @template T
 */

export function last<T>(array: ReadonlyArray<T>): T | undefined {
  return at(array, -1);
}
