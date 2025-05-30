import { sample } from './sample';

describe('sample', () => {
  it('should retrieve a random sample of elements from a mutable array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sample(array, 3);
    expect(result.length).toBe(3);
    expect(array).toContain(result[0]);
    expect(array).toContain(result[1]);
    expect(array).toContain(result[2]);
  });
});
