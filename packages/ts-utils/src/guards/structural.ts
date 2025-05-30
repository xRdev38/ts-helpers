/**
 * Checks if the provided value is null.
 * @param term - The value to check.
 * @returns True if the value is null, false otherwise.
 */
export const isNull = <T>(term: T | null): term is null => {
  return term === null;
};

/**
 * Checks if the provided value is a function.
 * @param term - The value to check.
 * @returns True if the value is a function, false otherwise.
 */
/* typescript-eslint-disable no-implicit-any */
export const isFunction = <T extends Function, U>(term: T | U): term is T => {
  return typeof term === 'function';
};

/**
 * Checks if the provided value is an object.
 * @param term - The value to check.
 * @returns True if the value is an object (excluding null), false otherwise.
 */
export const isObject = <T extends object, U>(
  term: T | U
): term is NonNullable<T> => {
  return !isNull(term) && typeof term === 'object';
};

/**
 * Checks if the provided value is an array.
 * @param term - The value to check.
 * @returns True if the value is an array, false otherwise.
 */
export const isArray = <T, U>(term: Array<T> | U): term is Array<T> => {
  return Array.isArray(term);
};

/**
 * Checks if the provided value is a Map.
 * @param term - The value to check.
 * @returns True if the value is a Map, false otherwise.
 */
export const isMap = <K, V, U>(term: Map<K, V> | U): term is Map<K, V> => {
  return term instanceof Map;
};

/**
 * Checks if the provided value is a Set.
 * @param term - The value to check.
 * @returns True if the value is a Set, false otherwise.
 */
export const isSet = <T, U>(term: Set<T> | U): term is Set<T> => {
  return term instanceof Set;
};

/**
 * Checks if the provided value is a WeakMap.
 * @param term - The value to check.
 * @returns True if the value is a WeakMap, false otherwise.
 */
export const isWeakMap = <K extends object, V, U>(
  term: WeakMap<K, V> | U
): term is WeakMap<K, V> => {
  return term instanceof WeakMap;
};

/**
 * Checks if the provided value is a WeakSet.
 * @param term - The value to check.
 * @returns True if the value is a WeakSet, false otherwise.
 */
export const isWeakSet = <T extends object, U>(
  term: WeakSet<T> | U
): term is WeakSet<T> => {
  return term instanceof WeakSet;
};

/**
 * Checks if the provided value is a Date object.
 * @param term - The value to check.
 * @returns True if the value is a Date object, false otherwise.
 */
export const isDate = <U>(term: Date | U): term is Date => {
  return term instanceof Date;
};
