import { pick } from './pick';

describe('pick function', () => {
  it('should pick key-value pairs from an object', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const result = pick(obj, 'a', 'c', 'd');

    expect(result).toEqual({ a: 1, c: 3, d: 4 });
  });

  it('should handle an empty object', () => {
    const obj = {};
    const result = pick(obj, 'a', 'b', 'c');

    expect(result).toEqual({});
  });

  it('should handle non-object input', () => {
    const result = pick(123, 'a', 'b', 'c');

    expect(result).toEqual(123);
  });

  it('should handle non-existent keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = pick(obj, 'a', 'd', 'e');

    expect(result).toEqual({ a: 1 });
  });
});
