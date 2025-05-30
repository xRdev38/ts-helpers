import { delay } from './delay';

describe('@delay Decorator', () => {
  it('should delay the execution of the method', async () => {
    jest.useFakeTimers();

    class MyClass {
      @delay(100)
      myMethod() {
        return 'delayed';
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
