const encode = encodeURIComponent;
const encodeKey: (k: string) => string = k => encode(k).replace('%24', '$');

/**
 * Recursively builds part of query string for parameter.
 *
 * @param key Parameter name for query string.
 * @param value Parameter value to deserialize.
 * @param traditional Boolean Use the old URI template standard (RFC6570)
 * @returns Array with serialized parameter(s)
 */
function buildParameter(
  key: string,
  value: any,
  traditional?: boolean
): string[] {
  if (value === null || value === undefined) {
    return [];
  }

  if (Array.isArray(value)) {
    if (traditional) {
      return value.map(v => `${encodeKey(key)}=${encode(v)}`);
    }

    return value
      .map((v, index) => {
        const propertyKey =
          typeof v === 'object' && v !== null ? `${index}` : '';
        const arrayKey = `${key}[${propertyKey}]`;
        return buildParameter(arrayKey, v);
      })
      .reduce((array, r) => [...array, ...r], []);
  }

  if (typeof value === 'object' && !traditional) {
    return Object.keys(value)
      .map(propertyName =>
        buildParameter(`${key}[${propertyName}]`, value[`${propertyName}`])
      )
      .reduce((array, r) => [...array, ...r], []);
  }

  return [`${encodeKey(key)}=${encode(value)}`];
}

/**
 * Generate a query string from an object.
 *
 * @param parameters Object containing the keys and values to be used.
 * @param traditional Boolean Use the old URI template standard (RFC6570)
 * @returns The generated query string, excluding leading '?'.
 */
export function buildQueryString(
  parameters: object & { [key: string]: any },
  traditional?: boolean
): string {
  if (!parameters) {
    return '';
  }

  const pairs = Object.keys(parameters)
    .sort()
    .map(key => buildParameter(key, parameters[`${key}`], traditional))
    .reduce((array, r) => [...array, ...r], []);

  return pairs.join('&');
}
