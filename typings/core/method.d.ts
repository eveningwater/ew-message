import { ewMessageOption } from "../const/options";
export declare const normalizeOptions: (option: string | ewMessageOption) => ewMessageOption;
export declare const addMessageStyle: (prefix_class?: string, style?: string) => Promise<boolean>;
export declare const validateHasStyle: () => boolean;
export declare const validateAutoHasStyle: (stylePrefix?: string) => boolean;
export declare const getOffsetTop: (top?: string | number) => string | 25;
export declare const handleAnimationNode: (el: HTMLElement, className: string, classNameSymbol: string, stylePrefix: string, existClassNames: string[], callback: (v: string | string[]) => void) => void;
export declare const checkContainer: (el?: string | HTMLElement) => HTMLElement;
