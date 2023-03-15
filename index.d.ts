export interface MessageUtils {
  isFunction: <T>(v: T) => boolean;
  isDom: <T>(v: T) => boolean;
  isObject: <T>(v: T) => boolean;
  isString: <T>(v: T) => boolean;
  warn: (v: string) => void;
  hasOwn: <T extends object>(v: T, p: string) => boolean;
  toArray: <T>(v: ArrayLike<T>) => Array<T>;
}
export enum MessageEnumType {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error'
}
export interface MessageType {
  [prop in MessageEnumType]: string;
}
export interface Option {
  content: string;
  center?: boolean;
  type?: string;
  duration?: number;
  showClose?: boolean;
  log?: boolean;
  isStyle?: boolean;
  stylePrefix?: string;
}
export type AnyObj = Record<string, any>;
export interface StyleRefType extends AnyObj {
  insertAt?: string;
}
export interface MessageInstance extends AnyObj {
  el: HTMLElement;
  closeBtnEl: HTMLElement;
  options: Option;
  render: (v: Option) => void;
  setTop: (v: NodeList | HTMLCollection) => void;
  create: (v: Option) => HTMLElement;
  close: (v: NodeList | HTMLCollection | HTMLElement, t: number) => void;
}
export type Constructor<T> = new (...args: any[]) => T;
