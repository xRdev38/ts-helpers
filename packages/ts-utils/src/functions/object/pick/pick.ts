import { isObject } from '../../../guards/structural';

/**
 * Creates an object composed of the picked key-value pairs from the input object.
 *
 * @param object - The input object to pick key-value pairs from.
 * @param arguments_ - The keys to pick from the object.
 * @returns An object with selected key-value pairs from the input object.
 */
export const pick = (object: any, ...arguments_: Array<string>): Object => {
  if (Array.isArray(object) || !isObject(object)) {
    return object;
  }

  return arguments_.reduce((o, k) => {
    return Object.assign(o, { [k]: object[k] });
  }, {});
};
