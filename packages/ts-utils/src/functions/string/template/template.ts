import { isObject } from '../../../guards/structural';

/**
 * Simple template engine similar to Python's `.format()`.
 *
 * @param {string} string_ - The template string.
 * @param {...unknown[]} arguments_ - Values to replace placeholders in the template.
 * @returns {string} The formatted string.
 */
export function template(string_: string, ...arguments_: unknown[]): string {
  const [firstArgument, fallback] = arguments_;

  if (isObject(firstArgument)) {
    const variables = firstArgument as Record<string, unknown>;
    return string_.replace(
      /{(\w+)}/g,
      (_, key) =>
        variables[key] ||
        ((typeof fallback === 'function' ? fallback(key) : fallback) ?? key)
    );
  }
  return string_.replace(/{(\d+)}/g, (_, key) => {
    const iterator = Number(key);
    if (Number.isNaN(iterator)) return key;
    return arguments_[iterator];
  });
}
