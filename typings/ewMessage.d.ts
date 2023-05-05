export interface ewMessageUtils {
  isFunction: <T>(v: T) => boolean;
  isDom: <T>(v: T) => boolean;
  isObject: <T>(v: T) => boolean;
  isString: <T>(v: T) => boolean;
  warn: (v: string) => void;
  hasOwn: <T extends object>(v: T, p: string) => boolean;
  toArray: <T>(v: ArrayLike<T>) => Array<T>;
  $$: (v: string, el?: Element | Document) => NodeListOf<Element>;
  $: (v: string, el?: Element | Document) => Element | null;
}
export enum ewMessageEnumType {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error'
}
export type ewMessageType = {
  [prop in ewMessageEnumType]: string;
};
export interface ewMessageOption {
  content: string;
  center?: boolean;
  type?: string;
  duration?: number;
  showClose?: boolean;
  stylePrefix?: string;
}
export type AnyObj = Record<string, any>;
export interface ewMessageStyleRefType extends AnyObj {
  insertAt?: string;
}
