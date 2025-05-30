import { clamp } from './clamp';

describe('clamp', () => {
  it('should clamp a number within a range', () => {
    const result = clamp(5, 1, 10);
    expect(result).toEqual(5);
  });
});
