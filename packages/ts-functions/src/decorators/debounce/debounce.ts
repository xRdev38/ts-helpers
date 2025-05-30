import { debounce as debounceFunction } from 'lodash';

/**
 * Decorator for debouncing a method.
 * @param milliseconds - The debounce time in milliseconds.
 * @param options - Options for lodash.debounce.
 * @returns A decorator function.
 */
/* typescript-eslint-disable no-implicit-any */
export const debounce = (
  milliseconds: number = 0,
  options: object = {}
): any => {
  /**
   * Decorator function that debounces the target method.
   * @param target - The target object.
   * @param propertyKey - The name of the method.
   * @param descriptor - The method descriptor.
   * @returns The updated method descriptor.
   */
  /* typescript-eslint-disable no-implicit-any */
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const map = new WeakMap();
    const originalMethod = descriptor.value;

    /* typescript-eslint-disable no-implicit-any */
    descriptor.value = function (...parameters: any) {
      let debounced = map.get(this);

      if (!debounced) {
        debounced = debounceFunction(
          originalMethod,
          milliseconds,
          options
        ).bind(this);
        map.set(this, debounced);
      }

      debounced(...parameters);
    };

    return descriptor;
  };
};
