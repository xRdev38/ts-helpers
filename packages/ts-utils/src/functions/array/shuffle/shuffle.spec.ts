import { shuffle } from './shuffle';

describe('shuffle', () => {
  it('should shuffle the elements of a mutable array randomly', () => {
    const array = [1, 2, 3, 4, 5];
    const originalOrder = [...array];
    const result = shuffle(array);
    expect(result).not.toEqual(originalOrder);
  });
});
