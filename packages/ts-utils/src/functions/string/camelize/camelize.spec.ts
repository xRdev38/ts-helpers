import { camelize } from './camelize';

describe('camelize function', () => {
  it('should convert a hyphenated string to camelCase', () => {
    expect(camelize('hello-world')).toBe('helloWorld');
  });

  it('should convert an underscore-separated string to camelCase', () => {
    expect(camelize('hello_world')).toBe('helloWorld');
  });

  it('should convert a space-separated string to camelCase', () => {
    expect(camelize('hello world')).toBe('helloWorld');
  });

  it('should handle mixed separators and extra spaces', () => {
    expect(camelize('  hello-world  _ example text  ')).toBe(
      'helloWorldExampleText'
    );
  });

  it('should handle non-string input', () => {
    expect(camelize(123)).toBe(123);
  });
});
