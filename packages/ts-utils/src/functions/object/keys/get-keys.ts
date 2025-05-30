import { isObject } from '../../../guards/structural';

/**
 * Returns an array of strings representing all the enumerable property names of an object.
 *
 * @param object - The input object.
 * @returns An array of strings representing the keys of the object.
 */
export const getKeys = (object: any): any[] => {
  if (Array.isArray(object) || !isObject(object)) {
    return object;
  }

  return Object.keys(object);
};
