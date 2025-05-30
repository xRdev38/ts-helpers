import { Arrayable, Nullable } from '../../utils/types';
import { toArray } from '../to-array/to-array';

/**
 * Converts a nullable or arrayable value to a flat array.
 * @param {Nullable<Arrayable<T | Array<T>>>} array - The arrayable or nullable array.
 * @returns {Array<T>} The flattened array.
 * @template T
 */
export function flattenArrayable<T>(
  array?: Nullable<Arrayable<T | Array<T>>>
): Array<T> {
  return toArray(array).flat(1) as Array<T>;
}
