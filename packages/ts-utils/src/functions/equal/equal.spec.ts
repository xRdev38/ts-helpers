import { isDeepEqual } from './equal';

describe('isDeepEqual', () => {
  it('should compare values deeply', () => {
    const obj1 = { key: 'value', nested: { a: 1, b: [2, 3] } };
    const obj2 = { key: 'value', nested: { a: 1, b: [2, 3] } };
    const obj3 = { key: 'value', nested: { a: 1, b: [2, 3, 4] } };

    expect(isDeepEqual(42, 42)).toBe(true);
    expect(isDeepEqual('Hello', 'Hello')).toBe(true);
    expect(isDeepEqual(obj1, obj2)).toBe(true);
    expect(isDeepEqual(obj1, obj3)).toBe(false);
  });
});
