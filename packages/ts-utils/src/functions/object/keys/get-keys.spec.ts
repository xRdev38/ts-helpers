import { getKeys } from './get-keys';

describe('keys function', () => {
  it('should return an array of keys for an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = getKeys(obj);

    expect(result).toEqual(['a', 'b', 'c']);
  });

  it('should handle an empty object', () => {
    const obj = {};
    const result = getKeys(obj);

    expect(result).toEqual([]);
  });

  it('should handle non-object input', () => {
    const result = getKeys(123);

    expect(result).toEqual(123);
  });

  it('should handle an array input', () => {
    const arr = [1, 2, 3];
    const result = getKeys(arr);

    expect(result).toEqual(arr);
  });
});
