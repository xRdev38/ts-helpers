import { convertToValidId } from './convert-to-valid-id';

describe('convertToValidId', () => {
  it('should convert HTML text to a valid ID name', () => {
    expect(convertToValidId('<p>Hello</p>')).toBe('hello');
  });
});
