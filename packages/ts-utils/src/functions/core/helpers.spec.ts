import { getKeysTwoObjects } from './helpers';

describe('getKeysTwoObjects function', () => {
  it('should get unique keys from two objects', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { c: 30, d: 40, e: 50 };
    const result = getKeysTwoObjects(obj1, obj2);

    expect(result).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  it('should handle empty objects', () => {
    const obj1 = {};
    const obj2 = {};
    const result = getKeysTwoObjects(obj1, obj2);

    expect(result).toEqual([]);
  });

  it('should handle objects with common keys', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { c: 30, d: 40, e: 50 };
    const result = getKeysTwoObjects(obj1, obj2);

    expect(result).toEqual(['a', 'b', 'c', 'd', 'e']);
  });
});
