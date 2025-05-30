/**
 * Autobinds the method to the instance, ensuring it has access to the correct 'this' context.
 * @param target - The target object.
 * @param key - The name of the method.
 * @param descriptor - The method descriptor.
 * @throws {Error} Throws an error if applied to a non-function property.
 * @returns The updated method descriptor.
 */
/* typescript-eslint-disable no-implicit-any */
export const bind = (
  target: any,
  key: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor => {
  let function_ = descriptor.value;

  if (typeof function_ !== 'function') {
    throw new TypeError(
      `@bind decorator can only be applied to methods, not: ${typeof function_}`
    );
  }

  let definingProperty = false;

  return {
    configurable: true,
    get() {
      if (
        definingProperty ||
        this === target.prototype ||
        Object.prototype.hasOwnProperty.call(this, key) ||
        typeof function_ !== 'function'
      ) {
        return function_;
      }

      const boundFunction = function_.bind(this);
      definingProperty = true;

      Object.defineProperty(this, key, {
        configurable: true,
        get() {
          return boundFunction;
        },
        set(value) {
          function_ = value;
          delete this[key];
        },
      });

      definingProperty = false;
      return boundFunction;
    },
    set(value) {
      function_ = value;
    },
  };
};
