import { memoize as memoizeFunction } from 'lodash';

/**
 * Decorator for memoizing the result of a method.
 * @param resolver - Custom resolver function for memoization.
 * @returns A decorator function.
 */
/* typescript-eslint-disable no-implicit-any */
export function memo(resolver?: (...arguments_: any[]) => any): any {
  /**
   * Decorator function that memoizes the result of the target method.
   * @param target - The target object.
   * @param propertyKey - The name of the method.
   * @param descriptor - The method descriptor.
   * @returns The updated method descriptor.
   */
  return function (
    /* typescript-eslint-disable no-implicit-any */
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    descriptor.value = memoizeFunction(descriptor.value, resolver);
    return descriptor;
  };
}
