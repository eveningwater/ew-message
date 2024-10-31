import { hasOwn, isDom, isNumber, isObject, isString } from "../util";



describe('utils', () => {
  test('hasOwn', () => {
    expect(hasOwn({ a: 1 }, 'a')).toBe(true);
    expect(hasOwn({ a: 1 }, 'b')).toBe(false);
  });
  test('isObject', () => {
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject(null)).toBe(false);
  });

  test('isString', () => {
    expect(isString('')).toEqual(true);
    expect(isString(1)).toEqual(false);
  })

  test('isNumber', () => {
    expect(isNumber(1)).toEqual(true);
    expect(isNumber(1e2)).toEqual(true);
    expect(isNumber(NaN)).toEqual(false);
    expect(isNumber('123')).toEqual(false);
  })


  describe('isDom', () => {
    jest.mock('../util.ts', {
      // @ts-ignore
      isObject: jest.fn((v) => isObject(v))
    });
    test('should return true for HTMLElement', () => {
      const element = document.createElement('div');
      expect(isDom(element)).toBe(true);
    });

    test('should return true for HTMLCollection', () => {
      const collection = document.getElementsByTagName('div');
      expect(isDom(collection)).toBe(true);
    });

    test('should return true for NodeList', () => {
      const list = document.querySelectorAll('div');
      expect(isDom(list)).toBe(true);
    });

    test('should return false for non-HTML element', () => {
      const nonElement = {};
      expect(isDom(nonElement)).toBe(false);
    });
  });
});    