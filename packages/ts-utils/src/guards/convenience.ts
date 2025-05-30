import { isNumber, isString } from './primitives';
import { isArray } from './structural';

/**
 * Checks if the provided term is an object or null.
 * @param term - The value to check.
 * @returns True if the term is an object or null, otherwise false.
 */
export const isObjectOrNull = <T extends object, U>(term: T | U): term is T => {
  return typeof term === 'object';
};

/**
 * Checks if the provided term is a non-empty array.
 * @param term - The value to check.
 * @returns True if the term is a non-empty array, otherwise false.
 */
export const isNonEmptyArray = <T, U>(term: Array<T> | U): term is Array<T> => {
  return isArray(term) && term.length > 0;
};

/**
 * Checks if the provided term is a non-empty string.
 * @param term - The value to check.
 * @returns True if the term is a non-empty string, otherwise false.
 */
export const isNonEmptyString = <U>(term: string | U): term is string => {
  return isString(term) && term.length > 0;
};

/**
 * Checks if the provided term is a number or NaN.
 * @param term - The value to check.
 * @returns True if the term is a number, otherwise false.
 */
export const isNumberOrNaN = <U>(term: number | U): term is number => {
  return typeof term === 'number';
};

/**
 * Checks if the provided term is an integer.
 * @param term - The value to check.
 * @returns True if the term is an integer, otherwise false.
 */
export const isInteger = <U>(term: number | U): term is number => {
  return isNumber(term) && Number.isInteger(term);
};

/**
 * Checks if the provided term is a positive integer.
 * @param term - The value to check.
 * @returns True if the term is a positive integer, otherwise false.
 */
export const isPositiveInteger = <U>(term: number | U): term is number => {
  return isInteger(term) && term > 0;
};

/**
 * Checks if the provided term is a non-negative integer.
 * @param term - The value to check.
 * @returns True if the term is a non-negative integer, otherwise false.
 */
export const isNonNegativeInteger = <U>(term: number | U): term is number => {
  return isInteger(term) && term >= 0;
};

/**
 * Checks if the provided term is a negative integer.
 * @param term - The value to check.
 * @returns True if the term is a negative integer, otherwise false.
 */
export const isNegativeInteger = <U>(term: number | U): term is number => {
  return isInteger(term) && term < 0;
};
