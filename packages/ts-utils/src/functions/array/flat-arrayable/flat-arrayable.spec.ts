import { flattenArrayable } from './flat-arrayable';

describe('flattenArrayable', () => {
  it('should flatten an arrayable value to a single-level array', () => {
    const result1 = flattenArrayable([1, [2, 3], [4, [5]]]);
    const result2 = flattenArrayable(undefined);
    expect(result1).toEqual([1, 2, 3, 4, [5]]);
    expect(result2).toEqual([]);
  });
});
