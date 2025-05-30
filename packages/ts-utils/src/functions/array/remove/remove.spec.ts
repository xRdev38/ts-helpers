import { remove } from './remove';

describe('remove', () => {
  it('should remove an element from a mutable array', () => {
    const array = [1, 2, 3, 4];
    const result1 = remove(array, 3);
    const result2 = remove(array, 5);
    expect(result1).toEqual(true);
    expect(result2).toEqual(false);
    expect(array).toEqual([1, 2, 4]);
  });
});
