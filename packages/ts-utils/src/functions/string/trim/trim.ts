import { isString } from '../../../guards';

/**
 * Removes leading and trailing characters specified in chars from the input text.
 *
 * @param text - The input text to be trimmed.
 * @param chars - A string containing characters to be treated as trimmable.
 *                Defaults to whitespace characters ('\\s').
 * @returns The text with leading and trailing characters removed.
 */
export const trim = (text: string, chars: string = '\\s'): string => {
  return isString(text)
    ? text.replace(new RegExp(`^[${chars}]+|[${chars}]+$`, 'g'), '')
    : text;
};
