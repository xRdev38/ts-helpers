import { isString } from '../../../guards';

/**
 * Converts a text string to camelCase format.
 *
 * @param text - The input text to be converted.
 * @param chars - A string containing characters to be treated as separators.
 *                Defaults to whitespace characters ('\\s').
 * @returns The camelCase formatted string.
 */
export const camelize = (text: any, chars: string = '\\s'): string => {
  if (!isString(text)) {
    return text;
  }

  return text
    .toLowerCase()
    .split(/[\s_-]/g)
    .filter((v: string) => !!v)
    .map((word: string, key: any) => {
      return key ? word.slice(0, 1).toUpperCase() + word.slice(1) : word;
    })
    .join('');
};
