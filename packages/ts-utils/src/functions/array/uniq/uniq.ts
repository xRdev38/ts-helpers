/**
 * Removes duplicate elements from an array.
 * @param {Array} array - The array to be deduplicated.
 * @returns {Array} The array with unique elements.
 */
export function uniq<T>(array: T[]): T[] {
  return [...new Set(array)];
}
