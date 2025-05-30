import { invertBy } from './invert-by';

describe('invertBy function', () => {
  it('should invert keys based on values', () => {
    const obj = { a: 1, b: 2, c: 1 };
    const result = invertBy(obj);

    expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] });
  });

  it('should invert keys based on transformed values using a callback', () => {
    const obj = { a: 1, b: 2, c: 1 };
    const result = invertBy(obj, (value: number) => value * 10);

    expect(result).toEqual({ '10': ['a', 'c'], '20': ['b'] });
  });

  it('should handle empty object', () => {
    const obj = {};
    const result = invertBy(obj);

    expect(result).toEqual({});
  });

  it('should handle non-object input', () => {
    const result = invertBy(123);

    expect(result).toEqual(123);
  });
});
