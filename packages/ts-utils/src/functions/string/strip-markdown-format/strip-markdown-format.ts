/**
 * Strips Markdown format from a string.
 *
 * @param {string} string_ - The markdown string to be stripped.
 * @returns {string} The string with Markdown format stripped.
 */
export const stripMarkdownFormat = (string_: string): string =>
  string_
    .replace(/[*`]/g, '')
    .replace(/\n/g, '')
    .replace(/\[(.*)]\(.*\)/g, '$1')
    .replace(/_(.*?)_/g, '$1');
