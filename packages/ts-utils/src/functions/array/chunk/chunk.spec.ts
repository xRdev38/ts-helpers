import { chunk } from './chunk';

describe('chunk', () => {
  it('should split an array into chunks of a specified size', () => {
    const result = chunk([1, 2, 3, 4, 5, 6, 7], 3);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });
});
