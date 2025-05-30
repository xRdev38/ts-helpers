import { toArray } from './to-array';

describe('toArray', () => {
  it('should convert a nullable or array able value to an array', () => {
    const result1 = toArray([1, 2, 3]);
    const result2 = toArray(42);
    const result3 = toArray(undefined);
    expect(result1).toEqual([1, 2, 3]);
    expect(result2).toEqual([42]);
    expect(result3).toEqual([]);
  });
});
