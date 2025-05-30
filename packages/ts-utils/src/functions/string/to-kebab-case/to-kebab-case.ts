/**
 * Converts a given string to kebab-case.
 *
 * @param {string} string_ - The string to be converted.
 * @returns {string} The string in kebab-case format.
 */
export const toKebabCase = (string_: string): string =>
  string_
    ?.match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g)
    ?.map(x => x.toLowerCase())
    ?.join('-') ?? string_;
