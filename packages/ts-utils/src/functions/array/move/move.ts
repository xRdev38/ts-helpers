/**
 * Moves an element within an array from one iterator to another.
 * @param {Array<T>} array - The array.
 * @param {number} from - The current iterator of the element.
 * @param {number} to - The target iterator for the element.
 * @returns {Array<T>} The modified array.
 * @template T
 */
export function move<T>(array: T[], from: number, to: number): T[] {
  array.splice(to, 0, array.splice(from, 1)[0]);
  return array;
}
