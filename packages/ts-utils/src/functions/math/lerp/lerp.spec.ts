import { lerp } from './lerp';

describe('lerp', () => {
  it('should linearly interpolate between two values', () => {
    const result = lerp(0, 10, 0.5);
    expect(result).toEqual(5);
  });
});
