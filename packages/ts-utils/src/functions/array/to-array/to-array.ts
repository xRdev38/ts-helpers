import { Arrayable, Nullable } from '../../utils/types';

/**
 * Converts a nullable or arrayable value to an array.
 * @param {Nullable<Arrayable<T>>} array - The arrayable or nullable array.
 * @returns {Array<T>} The converted array.
 * @template T
 */
export function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T> {
  const arrayInstance = array ?? [];
  return Array.isArray(arrayInstance) ? arrayInstance : [arrayInstance];
}
