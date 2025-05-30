/**
 * Returns the string representation of the type of the provided value.
 * @param {*} v - The value whose type is to be determined.
 * @returns {string} The string representation of the type.
 */
export const toString = (v: unknown): string =>
  Object.prototype.toString.call(v);
