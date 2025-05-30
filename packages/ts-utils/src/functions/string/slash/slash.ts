/**
 * Replaces backslashes with slashes in a string.
 *
 * @param {string} string_ - The string to be processed.
 * @returns {string} The string with backslashes replaced by slashes.
 */
export function slash(string_: string): string {
  return string_.replace(/\\/g, '/');
}
