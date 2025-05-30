import { reverse } from './reverse';

describe('reverse function', () => {
  it('should reverse a string', () => {
    expect(reverse('hello')).toBe('olleh');
  });

  it('should reverse an array', () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });

  it('should return input for non-string and non-array types', () => {
    expect(reverse(123)).toBe(123);
    expect(reverse({ key: 'value' })).toEqual({ key: 'value' });
  });
});
