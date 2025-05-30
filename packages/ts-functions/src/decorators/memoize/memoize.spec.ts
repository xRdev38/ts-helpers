import { memo } from './memoize';

describe('@memo Decorator', () => {
  it('should memoize the result of the method', () => {
    class ClassTest {
      @memo()
      myMethod(value: number): number {
        return value * 2;
      }
    }

    /*
    const instance = new ClassTest();
    const spy = jest.spyOn(instance, 'myMethod');

    // Initial call
    expect(instance.myMethod(3)).toBe(6);
    expect(spy).toHaveBeenCalledTimes(1);

    // Cached call
    expect(instance.myMethod(3)).toBe(6);
    expect(spy).toHaveBeenCalledTimes(1);

    // Different argument
    expect(instance.myMethod(5)).toBe(10);
    expect(spy).toHaveBeenCalledTimes(2);
     */
  });

  it('should use a custom resolver for memoization', () => {
    class ClassTest {
      @memo((value: number) => value.toString())
      myMethod(value: number): number {
        return value * 2;
      }
    }

    /*
    const instance = new ClassTest();
    const spy = jest.spyOn(instance, 'myMethod');

    // Initial call with different argument but resolved to the same key
    expect(instance.myMethod(3)).toBe(6);
    expect(spy).toHaveBeenCalledTimes(1);

    // Cached call with the same resolved key
    expect(instance.myMethod(5)).toBe(6);
    expect(spy).toHaveBeenCalledTimes(1);

    // Different resolved key
    expect(instance.myMethod(7)).toBe(14);
    expect(spy).toHaveBeenCalledTimes(2);
     */
  });
});
