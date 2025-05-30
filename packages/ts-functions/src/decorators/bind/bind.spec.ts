import { bind } from './bind';

describe('@bind Decorator', () => {
  it('should bind the method to the instance', () => {
    class MyClass {
      @bind
      myMethod() {
        return this;
      }
    }

    const instance = new MyClass();
    const boundMethod = instance.myMethod;

    expect(boundMethod()).toBe(instance);
  });
});
