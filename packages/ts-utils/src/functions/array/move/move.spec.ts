import { move } from './move';

describe('move', () => {
  it('should move an element within a mutable array from one iterator to another', () => {
    const array = [1, 2, 3, 4];
    const result = move(array, 1, 2);
    expect(result).toEqual([1, 3, 2, 4]);
  });
});
