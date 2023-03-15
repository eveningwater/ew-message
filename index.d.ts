declare const __DEV__: boolean;
interface ewMessageUtils {
  isFunction: <T>(v: T) => boolean;
  isDom: <T>(v: T) => boolean;
  isObject: <T>(v: T) => boolean;
  isString: <T>(v: T) => boolean;
  warn: (v: string) => void;
  hasOwn: <T extends object>(v: T, p: string) => boolean;
  toArray: <T>(v: ArrayLike<T>) => Array<T>;
}
enum ewMessageEnumType {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error'
}
interface ewMessageType {
  [prop in ewMessageEnumType]: string;
}
interface ewMessageOption {
  content: string;
  center?: boolean;
  type?: string;
  duration?: number;
  showClose?: boolean;
  isStyle?: boolean;
  stylePrefix?: string;
}
type AnyObj = Record<string, any>;
interface ewMessageStyleRefType extends AnyObj {
  insertAt?: string;
}
interface ewMessageInstance extends AnyObj {
  el: HTMLElement;
  closeBtnEl: HTMLElement;
  options: ewMessageOption;
  render: (v: ewMessageOption) => void;
  setTop: (v: NodeList | HTMLCollection) => void;
  create: (v: ewMessageOption) => HTMLElement;
  close: (v: NodeList | HTMLCollection | HTMLElement, t: number) => void;
}
type Constructor<T> = new (...args: any[]) => T;
