import type { ewMessageUtils } from "../typings/ewMessage";

const util: ewMessageUtils = Object.create(null);
util.isFunction = <T>(value: T) => typeof value === 'function';
util.isDom = <T>(el: T): boolean =>
  typeof HTMLElement === 'object'
    ? el instanceof HTMLElement
    : (el &&
        typeof el === 'object' &&
        el instanceof Node &&
        el.nodeType === 1 &&
        typeof el.nodeName === 'string') ||
      el instanceof HTMLCollection ||
      el instanceof NodeList;
util.warn = (v: string) => console.warn(v);
util.toArray = <T>(v: ArrayLike<T>): Array<T> => [].slice.call(v);
util.isObject = <T>(v: T) => typeof v === 'object' && !!v;
util.isString = <T>(v: T) => typeof v === 'string';
util.isNumber = <T>(v: T) => typeof v === 'number' && !Number.isNaN(v);
util.hasOwn = <T extends object>(v: T, prop: string) => v.hasOwnProperty(prop);
util.$$ = (v: string,el:Element | Document = document) => el.querySelectorAll(v);
util.$ = (v: string,el:Element | Document = document) => el.querySelector(v);
export default util;
