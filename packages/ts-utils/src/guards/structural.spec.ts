import {
  isArray,
  isDate,
  isFunction,
  isMap,
  isNull,
  isObject,
  isSet,
  isWeakMap,
  isWeakSet,
} from './structural';

describe('Type Check Functions Structural', () => {
  it('should correctly identify null', () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);
    expect(isNull('null')).toBe(false);
  });

  it('should correctly identify functions', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction('function')).toBe(false);
    expect(isFunction(null)).toBe(false);
  });

  it('should correctly identify objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject(null)).toBe(false);
  });

  it('should correctly identify arrays', () => {
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray('array')).toBe(false);
    expect(isArray(null)).toBe(false);
  });

  it('should correctly identify Maps', () => {
    expect(isMap(new Map())).toBe(true);
    expect(isMap({})).toBe(false);
    expect(isMap(null)).toBe(false);
  });

  it('should correctly identify Sets', () => {
    expect(isSet(new Set())).toBe(true);
    expect(isSet([])).toBe(false);
    expect(isSet(null)).toBe(false);
  });

  it('should correctly identify WeakMaps', () => {
    expect(isWeakMap(new WeakMap())).toBe(true);
    expect(isWeakMap({})).toBe(false);
    expect(isWeakMap(null)).toBe(false);
  });

  it('should correctly identify WeakSets', () => {
    expect(isWeakSet(new WeakSet())).toBe(true);
    expect(isWeakSet([])).toBe(false);
    expect(isWeakSet(null)).toBe(false);
  });

  it('should correctly identify Date objects', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate('2023-12-01')).toBe(false);
    expect(isDate(null)).toBe(false);
  });
});
