import { toString } from '../to-string/to-string';

/**
 * Returns the name of the type of the provided value.
 * @param {*} v - The value whose type name is to be determined.
 * @returns {string} The name of the type.
 */
export function getTypeName(v: unknown): string {
  if (v === null) {
    return 'null';
  }

  const type = toString(v).slice(8, -1).toLowerCase();
  return typeof v === 'object' || typeof v === 'function' ? type : typeof v;
}
