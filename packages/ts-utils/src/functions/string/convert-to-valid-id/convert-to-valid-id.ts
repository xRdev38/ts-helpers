import { stripHTMLTags } from '../strip-html-tags/strip-html-tags';
import { toKebabCase } from '../to-kebab-case/to-kebab-case';

/**
 * Converts a piece of HTML text to a valid id name.
 *
 * @param {string} string_ - The string to be converted.
 * @returns {string} The valid id name.
 */
export const convertToValidId = (string_: string): string =>
  toKebabCase(stripHTMLTags(string_));
