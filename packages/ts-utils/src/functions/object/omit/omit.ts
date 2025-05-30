import { isObject } from '../../../guards/structural';

/**
 * Creates an object composed of the key-value pairs from the input object,
 * excluding the specified keys.
 *
 * @param object - The input object to omit key-value pairs from.
 * @param arguments_ - The keys to omit from the object.
 * @returns An object with key-value pairs excluding the specified keys.
 */
export const omit = (object: any, ...arguments_: Array<string>): Object => {
  if (Array.isArray(object) || !isObject(object)) {
    return object;
  }

  return (
    Object.keys(object)
      /* eslint-disable no-bitwise */
      .filter(k => !~arguments_.indexOf(k))
      .reduce((o, k) => {
        return Object.assign(o, { [k]: object[k] });
      }, {})
  );
};
