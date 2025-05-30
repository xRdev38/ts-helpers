import { slash } from './slash';

describe('slash', () => {
  it('should replace backslashes with slashes', () => {
    expect(slash('path\\to\\file')).toBe('path/to/file');
    // Add more test cases
  });
});
