import { hasOwn, isObject } from "../util";

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
});    