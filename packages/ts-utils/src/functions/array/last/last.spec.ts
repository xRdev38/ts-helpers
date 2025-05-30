import { last } from './last';

describe('last', () => {
  it('should retrieve the last element from a readonly array', () => {
    const result1 = last([1, 2, 3, 4]);
    const result2 = last([]);
    expect(result1).toEqual(4);
    expect(result2).toEqual(undefined);
  });
});
