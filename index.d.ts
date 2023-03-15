interface MessageUtils {
  isFunction: <T>(v: T) => boolean;
  isDom: (v: Element) => boolean;
  warn: (v: string) => void;
  toArray: <T>(v: ArrayLike<T>) => Array<T>;
}
interface Option {
  content: string;
  center?: boolean;
  type?: 'info' | 'success' | 'error' | 'warning';
  closeTime?: number;
  showClose?: boolean;
  log?: boolean;
  isStyle?: boolean;
}
type AnyObj = Record<string, any>;
interface StyleRefType extends AnyObj {
  insertAt?: string;
}
interface MessageInstance extends AnyObj {
  el: HTMLElement;
  closeBtnEl: HTMLElement;
  render: (v: Option) => void;
  setTop: (v: NodeList | HTMLCollection) => void;
  create: (v: Option) => HTMLElement;
  close: (v: NodeList | HTMLCollection | HTMLElement, t: number) => void;
}
