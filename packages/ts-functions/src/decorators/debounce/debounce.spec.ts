import { debounce } from './debounce';

describe('@debounce Decorator', () => {
  it('should debounce the method', async () => {
    jest.useFakeTimers();

    class MyClass {
      @debounce(100)
      myMethod() {
        return 'debounced';
      }
    }

    const instance = new MyClass();
    const spy = jest.spyOn(instance, 'myMethod');

    instance.myMethod();
    // expect(spy).not.toHaveBeenCalled();

    // Fast-forward time
    jest.advanceTimersByTime(200);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
  });
});
