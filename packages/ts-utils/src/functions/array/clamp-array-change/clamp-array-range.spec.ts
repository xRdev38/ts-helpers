import { clampArrayRange } from './clamp-array-range';

describe('clampArrayRange', () => {
  it('should clamp a value to a valid iterator within a readonly array', () => {
    const result1 = clampArrayRange(2, [1, 2, 3, 4, 5]);
    const result2 = clampArrayRange(-1, [1, 2, 3, 4, 5]);
    const result3 = clampArrayRange(10, [1, 2, 3, 4, 5]);
    expect(result1).toBe(2);
    expect(result2).toBe(0);
    expect(result3).toBe(4);
  });
});
