import { Arrayable, Nullable } from '../../utils/types';
import { toArray } from '../to-array/to-array';

/**
 * Merges multiple arrayable values into a single array.
 * @param {...Nullable<Arrayable<T>>} arguments_ - The arrayable values to be merged.
 * @returns {Array<T>} The merged array.
 * @template T
 */

export function mergeArrayable<T>(
  ...arguments_: Nullable<Arrayable<T>>[]
): Array<T> {
  return arguments_.flatMap(iterator => toArray(iterator));
}
