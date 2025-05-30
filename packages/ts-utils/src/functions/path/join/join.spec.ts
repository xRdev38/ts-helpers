import { join } from './join';

describe('path join function', () => {
  it('can combine two simple paths', () => {
    const path1 = 'one';
    const path2 = 'two';

    expect(join(path1, path2)).toBe('one/two');
  });

  it('can combine an absolute path and a simple path', () => {
    const path1 = '/one';
    const path2 = 'two';

    expect(join(path1, path2)).toBe('/one/two');
  });

  it('can combine an absolute path and a simple path with slash', () => {
    const path1 = '/one';
    const path2 = '/two';

    expect(join(path1, path2)).toBe('/one/two');
  });

  it('can combine a single slash and a simple path', () => {
    const path1 = '/';
    const path2 = 'two';

    expect(join(path1, path2)).toBe('/two');
  });

  it('can combine a single slash and a simple path with slash', () => {
    const path1 = '/';
    const path2 = '/two';

    expect(join(path1, path2)).toBe('/two');
  });

  it('can combine an absolute path with protocol and a simple path', () => {
    const path1 = 'http://durandal.io';
    const path2 = 'two';

    expect(join(path1, path2)).toBe('http://durandal.io/two');
  });

  it('can combine an absolute path with protocol and a simple path with slash', () => {
    const path1 = 'http://durandal.io';
    const path2 = '/two';

    expect(join(path1, path2)).toBe('http://durandal.io/two');
  });

  it('can combine an absolute path and a simple path with a dot', () => {
    const path1 = 'http://durandal.io';
    const path2 = './two';

    expect(join(path1, path2)).toBe('http://durandal.io/two');
  });

  it('can combine a simple path and a relative path', () => {
    const path1 = 'one';
    const path2 = '../two';

    expect(join(path1, path2)).toBe('two');
  });

  it('can combine an absolute path and a relative path', () => {
    const path1 = 'http://durandal.io/somewhere';
    const path2 = '../two';

    expect(join(path1, path2)).toBe('http://durandal.io/two');
  });

  it('can combine a protocol independent path and a simple path', () => {
    const path1 = '//durandal.io';
    const path2 = 'two';

    expect(join(path1, path2)).toBe('//durandal.io/two');
  });

  it('can combine a protocol independent path and a simple path with slash', () => {
    const path1 = '//durandal.io';
    const path2 = '/two';

    expect(join(path1, path2)).toBe('//durandal.io/two');
  });

  it('can combine a protocol independent path and a simple path with a dot', () => {
    const path1 = '//durandal.io';
    const path2 = './two';

    expect(join(path1, path2)).toBe('//durandal.io/two');
  });

  it('can combine a protocol independent path and a relative path', () => {
    const path1 = '//durandal.io/somewhere';
    const path2 = '../two';

    expect(join(path1, path2)).toBe('//durandal.io/two');
  });

  it('can combine a complex path and a relative path', () => {
    const path1 = 'one/three';
    const path2 = '../two';

    expect(join(path1, path2)).toBe('one/two');
  });

  it('returns path2 if path1 null', () => {
    const path1 = null;
    const path2 = 'two';

    expect(join(path1, path2)).toBe('two');
  });

  it('returns path2 if path1 empty', () => {
    const path1 = '';
    const path2 = 'two';

    expect(join(path1, path2)).toBe('two');
  });

  it('returns path1 if path2 null', () => {
    const path1 = 'one';
    const path2 = null;

    expect(join(path1, path2)).toBe('one');
  });

  it('returns path1 if path2 empty', () => {
    const path1 = 'one';
    const path2 = '';

    expect(join(path1, path2)).toBe('one');
  });

  it('should retain leading .. in path1', () => {
    const path1 = '../one';
    const path2 = './two';

    expect(join(path1, path2)).toBe('../one/two');
  });

  it('should retain consecutive leading .. in path1', () => {
    const path1 = '../../one';
    const path2 = './two';

    expect(join(path1, path2)).toBe('../../one/two');
  });

  it('should handle .. in path1 and path2', () => {
    const path1 = '../../one';
    const path2 = '../two';

    expect(join(path1, path2)).toBe('../../two');
  });

  it('should merge .. in path1 and path2', () => {
    const path1 = '../../one';
    const path2 = '../../two';

    expect(join(path1, path2)).toBe('../../../two');
  });

  it('should retain consecutive leading .. but not other .. in path1', () => {
    const path1 = '../../one/../three';
    const path2 = './two';

    expect(join(path1, path2)).toBe('../../three/two');
  });

  it('should respect a trailing slash', () => {
    const path1 = 'one/';
    const path2 = 'two/';

    expect(join(path1, path2)).toBe('one/two/');
  });

  it('should respect file:/// protocol with three slashes (empty host)', () => {
    const path1 = 'file:///one';
    const path2 = '/two';

    expect(join(path1, path2)).toBe('file:///one/two');
  });

  it('should respect file:// protocol with two slashes (host given)', () => {
    const path1 = 'file://localhost:8080';
    const path2 = '/two';

    expect(join(path1, path2)).toBe('file://localhost:8080/two');
  });

  it('should allow scheme-relative URL that uses colons in the path', () => {
    const path1 = '//localhost/one:/';
    const path2 = '/two';

    expect(join(path1, path2)).toBe('//localhost/one:/two');
  });

  it('should not add more than two leading slashes to http:// protocol', () => {
    const path1 = 'http:///';
    const path2 = '/two';

    expect(join(path1, path2)).toBe('http://two');
  });
});
