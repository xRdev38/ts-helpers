import { trim } from './trim';

describe('trim function', () => {
  it('should remove leading and trailing whitespace', () => {
    expect(trim('   Hello, World!   ')).toBe('Hello, World!');
  });

  it('should remove leading and trailing specified characters', () => {
    expect(trim('***Hello, World!***', '*')).toBe('Hello, World!');
  });

  it('should handle empty string', () => {
    expect(trim('')).toBe('');
  });

  it('should handle no trimmable characters', () => {
    expect(trim('Hello, World!')).toBe('Hello, World!');
  });
});
