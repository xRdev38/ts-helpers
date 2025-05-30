import {
  isBigInt,
  isBoolean,
  isNull,
  isNumber,
  isString,
  isSymbol,
  isUndefined,
} from './primitives';

describe('Type Check Functions Primitive', () => {
  it('should correctly identify undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(42)).toBe(false);
  });

  it('should correctly identify booleans', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean('true')).toBe(false);
  });

  it('should correctly identify numbers', () => {
    expect(isNumber(42)).toBe(true);
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber('42')).toBe(false);
  });

  it('should correctly identify strings', () => {
    expect(isString('hello')).toBe(true);
    expect(isString(42)).toBe(false);
    expect(isString(true)).toBe(false);
  });

  it('should correctly identify bigints', () => {
    expect(isBigInt(BigInt(42))).toBe(true);
    expect(isBigInt(42)).toBe(false);
    expect(isBigInt('42')).toBe(false);
  });

  it('should correctly identify symbols', () => {
    expect(isSymbol(Symbol('foo'))).toBe(true);
    expect(isSymbol('foo')).toBe(false);
    expect(isSymbol(42)).toBe(false);
  });

  it('should correctly identify null', () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(42)).toBe(false);
  });
});
