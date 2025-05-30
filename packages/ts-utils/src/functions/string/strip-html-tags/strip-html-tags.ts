/**
 * Strips HTML format from a string.
 *
 * @param {string} string_ - The HTML string to be stripped.
 * @returns {string} The string with HTML format stripped.
 */
export const stripHTMLTags = (string_: string): string =>
  string_.replace(/<[^>]*>/g, '');
