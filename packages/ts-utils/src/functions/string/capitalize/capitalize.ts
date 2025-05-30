/**
 * Capitalizes the first letter of a string.
 *
 * @param {string[]} strArray - An array of string characters.
 * @param {boolean} lowerRest - Should the rest of the characters be lowercased? Default is false.
 * @returns {string} The capitalized string.
 */
export const capitalize = (
  [first, ...rest]: string[],
  lowerRest: boolean = false
): string =>
  first.toUpperCase() +
  (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
