import { diffObject } from './diff-object';

describe('diffObj function', () => {
  it('should find differences between two objects', () => {
    const original = { a: 1, b: 2, c: 3 };
    const modified = { b: 20, c: 30, d: 40 };
    const result = diffObject(modified, original);

    expect(result).toEqual({ b: 20, c: 30, d: 40 });
  });

  it('should handle empty original object', () => {
    const modified = { a: 1, b: 2, c: 3 };
    const result = diffObject(modified);

    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('should handle objects with common keys', () => {
    const original = { a: 1, b: 2, c: 3 };
    const modified = { c: 30, d: 40, e: 50 };
    const result = diffObject(modified, original);

    expect(result).toEqual({ c: 30, d: 40, e: 50 });
  });

  it('should handle non-object input', () => {
    const result = diffObject(123, 'test');

    expect(result).toEqual({});
  });
});
