export declare const __DEV__: boolean;
export interface ewMessageInstance extends AnyObj {
  el: HTMLElement;
  closeBtnEl: HTMLElement;
  options: ewMessageOption;
  render: (v: ewMessageOption) => void;
  setTop: (v: NodeList | HTMLCollection) => void;
  create: (v: ewMessageOption) => HTMLElement;
  close: (v: NodeList | HTMLCollection | HTMLElement, t: number) => void;
}
export interface ewMessageUtils {
  isFunction: <T>(v: T) => boolean;
  isDom: <T>(v: T) => boolean;
  isObject: <T>(v: T) => boolean;
  isString: <T>(v: T) => boolean;
  warn: (v: string) => void;
  hasOwn: <T extends object>(v: T, p: string) => boolean;
  toArray: <T>(v: ArrayLike<T>) => Array<T>;
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
export declare function ewMessageFunction(
  v: ewMessageOption
): ewMessageInstance;
export declare type ewMessageFunctionValue = typeof ewMessageFunction;
export declare type ewMessageStaticMethods = {
  [prop in ewMessageEnumType]: ewMessageFunctionValue;
};
export declare interface ewMessageStaticProps extends ewMessageStaticMethods {
  util: ewMessageUtils;
}
export declare interface ewMessage
  extends ewMessageStaticProps,
    ewMessageFunctionValue {}
