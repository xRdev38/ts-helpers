import { getTypeName } from './get-type-name';

describe('getTypeName', () => {
  it('should return the correct type name for different values', () => {
    expect(getTypeName(null)).toBe('null');
    expect(getTypeName(undefined)).toBe('undefined');
    expect(getTypeName(42)).toBe('number');
    expect(getTypeName('Hello')).toBe('string');
    expect(getTypeName(true)).toBe('boolean');
    expect(getTypeName({ key: 'value' })).toBe('object');
    expect(getTypeName([1, 2, 3])).toBe('array');
    expect(getTypeName(() => {})).toBe('function');
  });
});
