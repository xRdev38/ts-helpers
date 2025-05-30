import { capitalize } from './capitalize';

describe('capitalize', () => {
  it('should capitalize the first letter', () => {
    expect(capitalize(['hello'])).toBe('HELLO');
    expect(capitalize(['world'], true)).toBe('WORLD');
    expect(capitalize([''])).toBe('');
  });
});
