import { toKebabCase } from '../to-kebab-case/to-kebab-case';

/**
 * Converts a string to a SEO-friendly slug.
 *
 * @param {string} string_ - The string to be converted.
 * @returns {string} The SEO-friendly slug.
 */
export const convertToSeoSlug = (string_: string): string =>
  `/${toKebabCase(string_)}`;
