/**
 * Retrieves an element from an array at a specified iterator.
 * @param {ReadonlyArray<T> | Array<T>} array - The array.
 * @param {number} iterator - The iterator of the element to retrieve.
 * @returns {T | undefined} The element at the specified iterator.
 * @template T
 */

export function at<T>(
  array: ReadonlyArray<T> | Array<T>,
  iterator: number
): T | undefined {
  let index = iterator;
  const { length } = array;
  if (!length) return undefined;

  if (index < 0) index += length;

  return array[index];
}
