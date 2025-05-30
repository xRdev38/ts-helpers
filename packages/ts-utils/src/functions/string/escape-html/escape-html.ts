/**
 * Replaces unsafe characters with HTML-safe ones.
 *
 * @param {string} string_ - The string to be escaped.
 * @returns {string} The HTML-escaped string.
 */
export const escapeHTML = (string_: string): string =>
  string_
    .replace(/&/g, '&amp;')
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
