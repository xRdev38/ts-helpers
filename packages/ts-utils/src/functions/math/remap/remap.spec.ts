import { remap } from './remap';

describe('remap', () => {
  it('should remap a value from one range to another', () => {
    const result = remap(5, 0, 10, 0, 100);
    expect(result).toEqual(50);
  });
});
