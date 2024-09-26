import { ewMessageEnumType } from "./enum";
import { ewMessageOption } from "./options";
type ewMessageType = {
    [prop in ewMessageEnumType]: string;
};
export declare const typeMap: ewMessageType;
export declare const defaultMessageOption: ewMessageOption;
export declare const getMessageStyle: (prefix_class?: string) => string;
export declare const utilAnimationRemoveClassNames: string[];
export declare const utilAnimationAddClassNames: string[];
export declare const baseTopUnit = 25;
export declare const positionList: string[];
export {};
