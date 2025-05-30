import {
  isObjectOrNull,
  isNonEmptyArray,
  isNonEmptyString,
  isNumberOrNaN,
  isInteger,
  isPositiveInteger,
  isNonNegativeInteger,
  isNegativeInteger,
} from './convenience';

describe('Type Check Functions Convenience', () => {
  it('should correctly identify objects or null', () => {
    expect(isObjectOrNull({})).toBe(true);
    expect(isObjectOrNull(null)).toBe(true);
    expect(isObjectOrNull(undefined)).toBe(false);
  });

  it('should correctly identify non-empty arrays', () => {
    expect(isNonEmptyArray([1, 2, 3])).toBe(true);
    expect(isNonEmptyArray([])).toBe(false);
    expect(isNonEmptyArray(null)).toBe(false);
  });

  it('should correctly identify non-empty strings', () => {
    expect(isNonEmptyString('hello')).toBe(true);
    expect(isNonEmptyString('')).toBe(false);
    expect(isNonEmptyString(null)).toBe(false);
  });

  it('should correctly identify numbers or NaN', () => {
    expect(isNumberOrNaN(42)).toBe(true);
    expect(isNumberOrNaN(NaN)).toBe(true);
    expect(isNumberOrNaN('42')).toBe(false);
  });

  it('should correctly identify integers', () => {
    expect(isInteger(42)).toBe(true);
    expect(isInteger(42.5)).toBe(false);
    expect(isInteger('42')).toBe(false);
  });

  it('should correctly identify positive integers', () => {
    expect(isPositiveInteger(42)).toBe(true);
    expect(isPositiveInteger(-42)).toBe(false);
    expect(isPositiveInteger('42')).toBe(false);
  });

  it('should correctly identify non-negative integers', () => {
    expect(isNonNegativeInteger(42)).toBe(true);
    expect(isNonNegativeInteger(-42)).toBe(false);
    expect(isNonNegativeInteger('42')).toBe(false);
  });

  it('should correctly identify negative integers', () => {
    expect(isNegativeInteger(-42)).toBe(true);
    expect(isNegativeInteger(42)).toBe(false);
    expect(isNegativeInteger('42')).toBe(false);
  });
});
