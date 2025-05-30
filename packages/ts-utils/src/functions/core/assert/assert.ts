/**
 * Asserts a condition and throws an error with the provided message if the condition is false.
 * @param {boolean} condition - The condition to assert.
 * @param {string} message - The error message to throw if the condition is false.
 * @throws {Error} Throws an error with the provided message if the condition is false.
 */
export function assert(condition: boolean, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}
