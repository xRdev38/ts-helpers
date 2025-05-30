/**
 * Ensures a suffix in a string.
 *
 * @param {string} suffix - The suffix to ensure.
 * @param {string} string_ - The string to check and modify.
 * @returns {string} The string with the specified suffix.
 */
export function ensureSuffix(suffix: string, string_: string): string {
  if (!string_.endsWith(suffix)) return string_ + suffix;
  return string_;
}
