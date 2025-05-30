/**
 * Splits an array into chunks of a specified size.
 * @param {Array} array - The array to be split.
 * @param {number} size - The size of each chunk.
 * @returns {Array<Array<T>>} An array of chunks.
 */

export const chunk = <T>(array: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(array.length / size) }, (v, iterator) =>
    array.slice(iterator * size, iterator * size + size)
  );
