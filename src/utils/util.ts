

export const isString = (v: unknown): v is string => typeof v === "string";
export const isNumber = (v: unknown): v is number => typeof v === "number" && !Number.isNaN(v);
export const isObject = <T extends object>(v: unknown): v is T => typeof v === "object" && !!v;
export const isArray = <T>(v: unknown): v is Array<T> => Array.isArray(v);
export const isFunction = (value: unknown): value is Function => typeof value === "function";
export const isDom = (el: unknown): el is HTMLElement | HTMLCollection | NodeList => {
  if (isObject<HTMLElement>(HTMLElement)) {
    return el instanceof HTMLElement;
  } else {
    const isHTMLElement = isObject<HTMLElement>(el) && el.nodeType === 1 && isString(el.nodeName);
    return isHTMLElement || el instanceof HTMLCollection || el instanceof NodeList;
  }
}
export const toArray = <T extends unknown>(v: ArrayLike<T>): Array<T> => [].slice.call(v);
export const hasOwn = <T extends object>(v: T, prop: string) => v.hasOwnProperty(prop);
export const $$ = (v: string, el: Element | Document = document) =>
  el.querySelectorAll(v);
export const $ = (v: string, el: Element | Document = document) => el.querySelector(v);
export const create = (v: string) => document.createElement(v);
export const createElement = (temp: string) => document
  .createRange()
  .createContextualFragment(
    temp
  );

export const addClass = (v: string, el: HTMLElement) => el.classList.add(v);
export const hasClass = (v: string, el: HTMLElement) => el.classList.contains(v);
export const removeClass = (v: string, el: HTMLElement) => el.classList.remove(v);
export const on = (
  element: HTMLElement | Document | Element | Window,
  type: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
) => {
  if (element && type && handler) {
    element.addEventListener(type, handler, useCapture);
  }
};
export const off = (
  element: HTMLElement | Document | Element | Window,
  type: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
) => {
  if (element && type && handler) {
    element.removeEventListener(type, handler, useCapture);
  }
};
export const isRemoveNode = (item: HTMLElement) =>
  isDom(item) &&
  isDom(item.parentElement) &&
  isFunction(item.parentElement.removeChild);
export const removeNode = (item: HTMLElement) => {
  if (!item) {
    return;
  }
  if (isRemoveNode(item)) {
    item.parentElement?.removeChild(item);
  } else {
    item.remove();
  }
};

export * from './assert';