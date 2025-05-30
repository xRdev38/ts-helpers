import { DeepMerge } from './types';

describe('DeepMerge', () => {
  it('should merge two types deeply', () => {
    type TypeA = { a: number; b: { c: string }; d: boolean };
    type TypeB = { b: { d: boolean }; e: string };

    type MergedType = DeepMerge<TypeA, TypeB>;

    const mergedInstance: MergedType = {
      a: 42,
      b: { c: 'Hello', d: true },
      d: false,
      e: 'World',
    };

    expect(mergedInstance).toBeDefined();
    expect(mergedInstance.a).toBe(42);
    expect(mergedInstance.b.c).toBe('Hello');
    expect(mergedInstance.b.d).toBe(true);
    expect(mergedInstance.d).toBe(false);
    expect(mergedInstance.e).toBe('World');
  });
});
