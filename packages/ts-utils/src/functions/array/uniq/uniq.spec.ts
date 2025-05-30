import { uniq } from './uniq';

describe('uniq', () => {
  it('should remove duplicate elements from an array', () => {
    const result = uniq([1, 2, 2, 3, 4, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
