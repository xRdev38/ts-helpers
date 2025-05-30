import { buildQueryString } from './build-query-string';

describe('build query string', () => {
  interface IBuildTestCase {
    input: any | undefined;
    output: string;
    traditional?: boolean;
  }
  const testCases: IBuildTestCase[] = [
    { input: undefined, output: '' },
    { input: null, output: '' },
    { input: {}, output: '' },
    { input: { a: null }, output: '' },
    { input: { '': 'a' }, output: '=a' },
    { input: { a: 'b' }, output: 'a=b' },
    { input: { a: 'b', c: 'd' }, output: 'a=b&c=d' },
    { input: { a: 'b', c: 'd' }, traditional: true, output: 'a=b&c=d' },
    { input: { a: 'b', c: null }, output: 'a=b' },
    { input: { a: 'b', c: null }, traditional: true, output: 'a=b' },
    { input: { a: ['b', 'c'] }, output: 'a%5B%5D=b&a%5B%5D=c' },
    { input: { a: ['b', 'c'] }, traditional: true, output: 'a=b&a=c' },
    { input: { '&': ['b', 'c'] }, output: '%26%5B%5D=b&%26%5B%5D=c' },
    { input: { '&': ['b', 'c'] }, traditional: true, output: '%26=b&%26=c' },

    { input: { a: '&' }, output: 'a=%26' },
    { input: { '&': 'a' }, output: '%26=a' },
    { input: { a: true }, output: 'a=true' },
    { input: { $test: true }, output: '$test=true' },

    {
      input: { obj: { a: 5, b: 'str', c: false } },
      output: 'obj%5Ba%5D=5&obj%5Bb%5D=str&obj%5Bc%5D=false',
    },
    {
      input: { obj: { a: 5, b: 'str', c: false } },
      traditional: true,
      output: 'obj=%5Bobject%20Object%5D',
    },
    { input: { obj: { a: 5, b: undefined } }, output: 'obj%5Ba%5D=5' },

    {
      input: { a: { b: ['c', 'd', ['f', 'g']] } },
      output:
        'a%5Bb%5D%5B%5D=c&a%5Bb%5D%5B%5D=d&a%5Bb%5D%5B2%5D%5B%5D=f&a%5Bb%5D%5B2%5D%5B%5D=g',
    },
    {
      input: { a: { b: ['c', 'd', ['f', 'g']] } },
      traditional: true,
      output: 'a=%5Bobject%20Object%5D',
    },
    {
      input: { a: ['c', 'd', ['f', 'g']] },
      traditional: true,
      output: 'a=c&a=d&a=f%2Cg',
    },
    {
      input: { a: ['c', 'd', { f: 'g' }] },
      traditional: true,
      output: 'a=c&a=d&a=%5Bobject%20Object%5D',
    },
  ];

  for (const testCase of testCases) {
    const { input, output, traditional } = testCase;
    it(`builds ${
      input instanceof Object ? JSON.stringify(input) : input
    } to "${output}"`, () => {
      expect(buildQueryString(input, traditional)).toBe(output);
    });
  }
});
