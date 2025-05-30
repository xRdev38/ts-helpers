import { Mixin } from './mixin';

describe('@Mixin Decorator', () => {
  it('should apply mixins to the class', () => {
    class Mixin1 {
      method1() {
        return 'Mixin1';
      }
    }

    class Mixin2 {
      method2() {
        return 'Mixin2';
      }
    }

    @Mixin([Mixin1, Mixin2])
    class MyClass {}

    /* eslint-disable */
    const instance = new MyClass() as any;

    expect(instance.method1()).toBe('Mixin1');
    expect(instance.method2()).toBe('Mixin2');
  });
});
