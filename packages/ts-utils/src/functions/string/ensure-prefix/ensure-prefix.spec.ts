import { ensurePrefix } from './ensure-prefix';

describe('ensurePrefix', () => {
  it('should ensure a prefix in a string', () => {
    expect(ensurePrefix('prefix-', 'string')).toBe('prefix-string');
  });
});
