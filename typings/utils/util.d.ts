export declare const isUndef: (v: unknown) => v is undefined;
export declare const isString: (v: unknown) => v is string;
export declare const isNumber: (v: unknown) => v is number;
export declare const isObject: <T extends object>(v: unknown) => v is T;
export declare const isArray: <T>(v: unknown) => v is T[];
export declare const isFunction: (value: unknown) => value is Function;
export declare const isDom: (el: unknown) => el is HTMLElement | HTMLCollection | NodeList;
export declare const toArray: <T extends unknown>(v: ArrayLike<T>) => T[];
export declare const hasOwn: <T extends object>(v: T, prop: string) => boolean;
export declare const $$: (v: string, el?: Element | Document) => NodeListOf<Element>;
export declare const $: (v: string, el?: Element | Document) => Element | null;
export declare const create: (v: string) => HTMLElement;
export declare const createElement: (temp: string) => DocumentFragment;
export declare const addClass: (v: string, el: HTMLElement) => void;
export declare const hasClass: (v: string, el: HTMLElement) => boolean;
export declare const removeClass: (v: string, el: HTMLElement) => void;
export declare const on: (element: HTMLElement | Document | Element | Window, type: string, handler: EventListenerOrEventListenerObject, useCapture?: boolean) => void;
export declare const off: (element: HTMLElement | Document | Element | Window, type: string, handler: EventListenerOrEventListenerObject, useCapture?: boolean) => void;
export declare const warn: (v: string) => void;
export declare const isRemoveNode: (item: HTMLElement) => boolean;
export declare const removeNode: (item: HTMLElement) => void;
