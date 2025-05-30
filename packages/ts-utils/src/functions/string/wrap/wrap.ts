import { isString } from '../../../guards';

/**
 * Wraps the input string with the specified prefix and suffix.
 *
 * @param string_ - The input string to be wrapped.
 * @param prefix - The string to be added as a prefix. Defaults to an empty string.
 * @param suffix - The string to be added as a suffix. Defaults to an empty string.
 * @returns The input string wrapped with the specified prefix and suffix.
 */
export const wrap = (
  string_: string,
  prefix: string = '',
  suffix: string = ''
): string => {
  if (!isString(string_)) {
    return string_;
  }

  return (
    (!!prefix && isString(prefix) ? prefix : '') +
    string_ +
    (!!suffix && isString(suffix) ? suffix : '')
  );
};
