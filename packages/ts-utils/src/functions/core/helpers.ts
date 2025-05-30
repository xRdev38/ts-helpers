/**
 * Gets unique keys from two objects, combining keys from both objects without duplicates.
 *
 * @param object - The first object.
 * @param other - The second object.
 * @returns An array of unique keys from both objects.
 */
export function getKeysTwoObjects(object: any, other: any): any {
  return [...Object.keys(object), ...Object.keys(other)].filter(
    (key: string, iterator: number, array: string[]): boolean =>
      array.indexOf(key) === iterator
  );
}
