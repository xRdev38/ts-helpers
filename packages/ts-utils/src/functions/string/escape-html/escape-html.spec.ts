import { escapeHTML } from './escape-html';

describe('escapeHTML', () => {
  it('should escape unsafe characters in HTML', () => {
    expect(escapeHTML('<p>"Hello"</p>')).toBe(
      '&lt;p&gt;&quot;Hello&quot;&lt;/p&gt;'
    );
  });
});
