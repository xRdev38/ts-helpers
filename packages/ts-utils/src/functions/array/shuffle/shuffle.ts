/**
 * Shuffles the elements of an array randomly.
 * @param {Array<T>} array - The array to be shuffled.
 * @returns {Array<T>} The shuffled array.
 * @template T
 */

export function shuffle<T>(array: T[]): T[] {
  const arrayCp = [...array];
  for (let iterator = array.length - 1; iterator > 0; iterator -= 1) {
    const random = Math.floor(Math.random() * (iterator + 1));
    [arrayCp[iterator], arrayCp[random]] = [arrayCp[random], arrayCp[iterator]];
  }
  return arrayCp;
}
