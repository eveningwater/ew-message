const util: MessageUtils = Object.create(null);
util.isFunction = <T>(value: T) => typeof value === 'function';
util.isDom = (el: Element): boolean =>
  typeof HTMLElement === 'object'
    ? el instanceof HTMLElement
    : (el &&
        typeof el === 'object' &&
        el.nodeType === 1 &&
        typeof el.nodeName === 'string') ||
      el instanceof HTMLCollection ||
      el instanceof NodeList;
util.warn = (v: string) => console.warn(v);
util.toArray = <T>(v: ArrayLike<T>): Array<T> => [].slice.call(v);
export default util;
