/* typescript-eslint-disable no-implicit-any */
const sortFunction = (a: any, b: any) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

/**
 * A decorator for sorting an array property of a class.
 * @param sortByProperty - The property to sort the array by.
 * @param options - Sorting options.
 * @param options.isDescending - Whether to sort in descending order.
 * @param options.type - The data type of the property for sorting (e.g., 'string', 'date').
 * @returns A decorator function.
 */
export function SortBy<T>(
  sortByProperty: string | symbol | number,
  /* eslint-disable unicorn/no-object-as-default-parameter */
  options: {
    isDescending: boolean;
    type: string;
  } = {
    isDescending: true,
    type: 'string',
  }
) {
  /* eslint-disable symbol-description */
  const cachedValueKey = Symbol();
  // TODO: Refactor this part of the decorator function
  /* eslint-disable sonarjs/cognitive-complexity */
  return function (
    target: any,
    propertyKey: string,
    descriptor?: PropertyDescriptor
  ) {
    Object.defineProperty(target, propertyKey, {
      set(array: Array<T>) {
        if (!array || !Array.isArray(array)) {
          throw new TypeError(
            `Value of property ${propertyKey} is not a valid array!`
          );
        }

        const isDateType = options.type === 'date';
        this[cachedValueKey] = sortByProperty
          ? array.sort(function (a: any, b: any) {
              const aValue = isDateType
                ? new Date(a[sortByProperty])
                : a[sortByProperty];
              const bValue = isDateType
                ? new Date(b[sortByProperty])
                : b[sortByProperty];
              const sortResult = sortFunction(aValue, bValue);
              return options.isDescending ? sortResult * -1 : sortResult;
            })
          : array.sort(function (a: any, b: any) {
              const aValue = isDateType ? new Date(a) : a;
              const bValue = isDateType ? new Date(b) : b;
              const sortResult = sortFunction(aValue, bValue);
              return options.isDescending ? sortResult * -1 : sortResult;
            });
      },
      get() {
        return this[cachedValueKey];
      },
    });
  };
}
