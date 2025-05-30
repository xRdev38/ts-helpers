/**
 * Removes an element from an array.
 * @param {Array<T>} array - The array.
 * @param {T} value - The value to be removed.
 * @returns {boolean} True if the value was removed; otherwise, false.
 * @template T
 */

export function remove<T>(array: T[], value: T): boolean {
  if (!array) return false;
  const iterator = array.indexOf(value);
  if (iterator >= 0) {
    array.splice(iterator, 1);
    return true;
  }
  return false;
}
