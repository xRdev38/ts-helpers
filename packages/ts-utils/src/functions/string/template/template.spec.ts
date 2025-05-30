import { template } from './template';

describe('template', () => {
  it('should replace placeholders with values', () => {
    const templateString = 'Hello, {name}! My age is {age}.';
    const variables = { name: 'John', age: 25 };
    expect(template(templateString, variables)).toBe(
      'Hello, John! My age is 25.'
    );
  });
});
