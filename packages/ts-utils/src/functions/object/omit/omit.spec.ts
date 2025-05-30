import { omit } from './omit';

describe('omit function', () => {
  it('should omit specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const result = omit(obj, 'a', 'c', 'd');

    expect(result).toEqual({ b: 2 });
  });

  it('should handle an empty object', () => {
    const obj = {};
    const result = omit(obj, 'a', 'b', 'c');

    expect(result).toEqual({});
  });

  it('should handle non-object input', () => {
    const result = omit(123, 'a', 'b', 'c');

    expect(result).toEqual(123);
  });

  it('should handle non-existent keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = omit(obj, 'd', 'e');

    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });
});
