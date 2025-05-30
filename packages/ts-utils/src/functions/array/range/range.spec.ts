import { range } from './range';

describe('range', () => {
  it('should generate an array of numbers within a specified range', () => {
    const result1 = range(5);
    const result2 = range(2, 5);
    const result3 = range(1, 10, 2);
    expect(result1).toEqual([0, 1, 2, 3, 4]);
    expect(result2).toEqual([2, 3, 4]);
    expect(result3).toEqual([1, 3, 5, 7, 9]);
  });
});
