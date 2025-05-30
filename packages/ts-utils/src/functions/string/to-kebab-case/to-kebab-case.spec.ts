import { toKebabCase } from './to-kebab-case';

describe('toKebabCase', () => {
  it('should convert a string to kebab-case', () => {
    expect(toKebabCase('camelCaseString')).toBe('camel-case-string');
    expect(toKebabCase('snake_case_string')).toBe('snake-case-string');
    expect(toKebabCase('PascalCaseString')).toBe('pascal-case-string');
  });
});
