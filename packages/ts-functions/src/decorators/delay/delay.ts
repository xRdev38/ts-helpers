/**
 * Decorator for delaying the execution of a method.
 * @param milliseconds - The delay time in milliseconds.
 * @returns A decorator function.
 */
/* typescript-eslint-disable no-implicit-any */
export const delay = (milliseconds: number = 0): any => {
  /**
   * Decorator function that delays the execution of the target method.
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
    const originalMethod = descriptor.value;

    descriptor.value = function (...arguments_: any) {
      setTimeout(() => {
        originalMethod.apply(this, arguments_);
      }, milliseconds);
    };

    return descriptor;
  };
};
