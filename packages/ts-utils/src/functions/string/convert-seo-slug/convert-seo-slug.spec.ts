import { convertToSeoSlug } from './convert-seo-slug';

describe('convertToSeoSlug', () => {
  it('should convert a string to a SEO-friendly slug', () => {
    expect(convertToSeoSlug('Hello World')).toBe('/hello-world');
  });
});
