import { mergeArrayable } from './merge-arrayable';

describe('mergeArrayable', () => {
  it('should merge arrayable values into a single array', () => {
    const result1 = mergeArrayable([1, 2], 3, [4], [5]);
    const result2 = mergeArrayable('a', ['b', 'c'], null, undefined, ['d']);
    const result3 = mergeArrayable();

    expect(result1).toEqual([1, 2, 3, 4, 5]);
    expect(result2).toEqual(['a', 'b', 'c', 'd']);
    expect(result3).toEqual([]);
  });
});
