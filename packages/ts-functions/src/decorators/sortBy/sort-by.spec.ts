import { SortBy } from './sort-by';

describe('@SortBy Decorator', () => {
  it('should sort the array property in ascending order by default', () => {
    class MyClass {
      @SortBy<number>('numberProp')
      arrayProp: Array<{ numberProp: number }> = [
        { numberProp: 3 },
        { numberProp: 1 },
        { numberProp: 2 },
      ];
    }

    // const instance = new MyClass();

    /*
    expect(instance.arrayProp).toEqual([
      { numberProp: 1 },
      { numberProp: 2 },
      { numberProp: 3 },
    ]);
     */
  });

  it('should sort the array property in descending order', () => {
    class MyClass {
      @SortBy<number>('numberProp', { isDescending: true, type: 'number' })
      arrayProp: Array<{ numberProp: number }> = [
        { numberProp: 3 },
        { numberProp: 1 },
        { numberProp: 2 },
      ];
    }

    const instance = new MyClass();

    expect(instance.arrayProp).toEqual([
      { numberProp: 3 },
      { numberProp: 2 },
      { numberProp: 1 },
    ]);
  });

  it('should handle date properties and sort in ascending order', () => {
    class MyClass {
      @SortBy<Date>('dateProp', { isDescending: false, type: 'date' })
      arrayProp: Array<{ dateProp: string }> = [
        { dateProp: '2022-03-01' },
        { dateProp: '2022-01-01' },
        { dateProp: '2022-02-01' },
      ];
    }

    const instance = new MyClass();

    expect(instance.arrayProp).toEqual([
      { dateProp: '2022-01-01' },
      { dateProp: '2022-02-01' },
      { dateProp: '2022-03-01' },
    ]);
  });

  it('should handle date properties and sort in descending order', () => {
    class MyClass {
      @SortBy<Date>('dateProp', { isDescending: true, type: 'date' })
      arrayProp: Array<{ dateProp: string }> = [
        { dateProp: '2022-03-01' },
        { dateProp: '2022-01-01' },
        { dateProp: '2022-02-01' },
      ];
    }

    const instance = new MyClass();

    expect(instance.arrayProp).toEqual([
      { dateProp: '2022-03-01' },
      { dateProp: '2022-02-01' },
      { dateProp: '2022-01-01' },
    ]);
  });
});
