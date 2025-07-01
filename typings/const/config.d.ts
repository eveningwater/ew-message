import { ewMessageEnumType } from "./enum";
import { ewMessageOption } from "./options";
export type ewMessageType = {
    [prop in ewMessageEnumType]: string;
};
export declare const typeMap: ewMessageType;
export declare const defaultMessageOption: Readonly<ewMessageOption>;
export declare const utilAnimationRemoveClassNames: readonly string[];
export declare const utilAnimationAddClassNames: readonly string[];
export declare const baseTopUnit = 25;
