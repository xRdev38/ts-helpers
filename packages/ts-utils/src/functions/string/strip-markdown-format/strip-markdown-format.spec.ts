import { stripMarkdownFormat } from './strip-markdown-format';

describe('stripMarkdownFormat', () => {
  it('should remove markdown formatting', () => {
    const markdownString = '**Bold** _Italic_ [Link](https://example.com)';
    expect(stripMarkdownFormat(markdownString)).toBe('Bold Italic Link');
  });
});
