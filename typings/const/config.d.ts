import { ewMessageEnumType } from "./enum";
import { ewMessageOption } from "./options";
export type ewMessageType = {
    [prop in ewMessageEnumType]: string;
};
export declare const typeMap: ewMessageType;
export declare const defaultMessageOption: ewMessageOption;
export declare const utilAnimationRemoveClassNames: string[];
export declare const utilAnimationAddClassNames: string[];
export declare const baseTopUnit = 25;
