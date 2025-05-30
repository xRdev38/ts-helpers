/**
 * A decorator that applies a mixin to a class.
 * @param baseCtors - The array of mixin classes.
 * @returns A decorator function.
 */
/* typescript-eslint-disable no-implicit-any */
export const Mixin = (baseCtors: Function[]): any => {
  /**
   * Decorator function that applies mixins to the target class.
   * @param derivedCtor - The target class.
   */
  return function (derivedCtor: Function): void {
    baseCtors.map(baseCtor => {
      return Object.getOwnPropertyNames(baseCtor.prototype).map(name => {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
        return derivedCtor;
      });
    });
  };
};
