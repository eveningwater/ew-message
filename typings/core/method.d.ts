import { ewMessageOption } from "../const/options";
export declare const normalizeOptions: (option: string | ewMessageOption) => Required<ewMessageOption>;
export declare const getOffsetTop: (top?: string | number) => string | 25;
export declare const handleAnimationNode: (el: HTMLElement, classNameList: string[], stylePrefix: string, existClassNames: string[], callback: (v: string[]) => void) => void;
export declare const checkContainer: (el?: string | HTMLElement) => HTMLElement;
