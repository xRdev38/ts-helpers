/**
 * Retrieves a random sample of elements from an array.
 * @param {Array<T>} array - The array.
 * @param {number} quantity - The number of elements to retrieve.
 * @returns {Array<T>} The random sample.
 * @template T
 */
export function sample<T>(array: T[], quantity: number): T[] {
  return Array.from(
    { length: quantity },
    () => array[Math.round(Math.random() * (array.length - 1))]
  );
}
