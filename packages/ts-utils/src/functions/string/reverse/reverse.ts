import { isString } from '../../../guards';

/**
 * Reverses the input string or array.
 *
 * @param input - The input string or array to be reversed.
 * @returns The reversed string or array.
 */
export const reverse = (input: unknown): unknown => {
  if (isString(input)) {
    return [...input].reverse().join('');
  }

  return Array.isArray(input) ? [...input].reverse() : input;
};
