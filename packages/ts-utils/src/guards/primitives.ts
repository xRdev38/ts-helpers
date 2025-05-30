/**
 * Checks if the provided value is undefined.
 * @param term - The value to check.
 * @returns True if the value is undefined, false otherwise.
 */
export const isUndefined = <T>(term: T | undefined): term is undefined => {
  return term === undefined;
};

/**
 * Checks if the provided value is a boolean.
 * @param term - The value to check.
 * @returns True if the value is a boolean, false otherwise.
 */
export const isBoolean = <U>(term: boolean | U): term is boolean => {
  return typeof term === 'boolean';
};

/**
 * Checks if the provided value is a number and not NaN.
 * @param term - The value to check.
 * @returns True if the value is a number and not NaN, false otherwise.
 */
export const isNumber = <U>(term: number | U): term is number => {
  return typeof term === 'number' && !Number.isNaN(term);
};

/**
 * Checks if the provided value is a string.
 * @param term - The value to check.
 * @returns True if the value is a string, false otherwise.
 */
export const isString = <U>(term: string | U): term is string => {
  return typeof term === 'string';
};

/**
 * Checks if the provided value is a bigint.
 * @param term - The value to check.
 * @returns True if the value is a bigint, false otherwise.
 */
export const isBigInt = <U>(term: bigint | U): term is bigint => {
  return typeof term === 'bigint';
};

/**
 * Checks if the provided value is a symbol.
 * @param term - The value to check.
 * @returns True if the value is a symbol, false otherwise.
 */
export const isSymbol = <U>(term: symbol | U): term is symbol => {
  return typeof term === 'symbol';
};

/**
 * Checks if the provided value is null.
 * @param term - The value to check.
 * @returns True if the value is null, false otherwise.
 */
export const isNull = <U>(term: null | U): term is null => {
  return term === null;
};
