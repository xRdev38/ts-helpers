import { getTypeName } from '../core';

/**
 * Checks if two values are deeply equal.
 * @param {*} value1 - The first value to compare.
 * @param {*} value2 - The second value to compare.
 * @returns {boolean} Returns true if the values are deeply equal, false otherwise.
 */

/* typescript-eslint-disable no-implicit-any */
export const isDeepEqual = (value1: any, value2: any): boolean => {
  const type1 = getTypeName(value1);
  const type2 = getTypeName(value2);

  if (type1 !== type2) {
    return false;
  }

  if (type1 === 'array') {
    if (value1.length !== value2.length) {
      return false;
    }

    return value1.every((item: unknown, iterator: number) =>
      isDeepEqual(item, value2[iterator])
    );
  }

  if (type1 === 'object') {
    const keyArray = Object.keys(value1);
    if (keyArray.length !== Object.keys(value2).length) {
      return false;
    }

    return keyArray.every((key: string) =>
      isDeepEqual(value1[key], value2[key])
    );
  }

  return Object.is(value1, value2);
};
