import { at } from './at';

describe('at', () => {
  it('should retrieve an element from an array at a specified iterator', () => {
    const result1 = at([1, 2, 3, 4], 2);
    const result2 = at([], 0);
    expect(result1).toEqual(3);
    expect(result2).toEqual(undefined);
  });
});
