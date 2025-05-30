import { isObject } from '../../../guards/structural';

/**
 * Creates an object composed of keys generated from the results of running
 * each element of the input object through a callback function.
 *
 * @param object - The input object to invert.
 * @param callback - The callback function to transform values. Defaults to the identity function.
 * @returns An object with inverted keys based on the results of the callback function.
 */
export const invertBy = (object: any, callback?: Function): Object => {
  if (Array.isArray(object) || !isObject(object)) {
    return object;
  }

  return Object.keys(object).reduce((o: any, k: string) => {
    const key = callback ? callback(object[k]) : object[k];

    return Array.isArray(o[key])
      ? (o[key].push(k), o)
      : Object.assign(o, { [key]: [k] });
  }, {});
};
