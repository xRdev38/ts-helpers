import { wrap } from './wrap';

describe('wrap function', () => {
  it('should wrap the string with prefix and suffix', () => {
    expect(wrap('Hello, World!', '***', '***')).toBe('***Hello, World!***');
  });

  it('should handle empty prefix and suffix', () => {
    expect(wrap('Hello, World!')).toBe('Hello, World!');
  });

  it('should handle empty string', () => {
    expect(wrap('', '***', '***')).toBe('******');
  });
});
