import { stripHTMLTags } from './strip-html-tags';

describe('stripHTMLTags', () => {
  test('should remove HTML tags', () => {
    const htmlString = '<p>This is <b>bold</b> text.</p>';
    expect(stripHTMLTags(htmlString)).toBe('This is bold text.');
  });
});
