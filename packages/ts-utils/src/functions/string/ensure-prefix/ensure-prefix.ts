/**
 * Ensures a prefix in a string.
 *
 * @param {string} prefix - The prefix to ensure.
 * @param {string} string_ - The string to check and modify.
 * @returns {string} The string with the specified prefix.
 */
export function ensurePrefix(prefix: string, string_: string): string {
  if (!string_.startsWith(prefix)) return prefix + string_;
  return string_;
}
