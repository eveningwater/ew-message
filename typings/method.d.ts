import type { ewMessageOption } from '../typings/ewMessage';
export declare const normalizeOptions: (option: string | ewMessageOption) => ewMessageOption;
export declare const addMessageStyle: (prefix_class?: string, style?: string) => Promise<unknown>;
export declare const validateHasStyle: () => boolean;
export declare const validateAutoHasStyle: (stylePrefix?: string) => boolean;
