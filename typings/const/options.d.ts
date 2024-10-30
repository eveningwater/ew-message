import { Position } from "./enum";
export interface ewMessageOption {
    content: string;
    center?: boolean;
    type?: string;
    duration?: number;
    showClose?: boolean;
    maxDuration?: number;
    showTypeIcon?: boolean;
    typeIcon?: string;
    closeIcon?: string;
    container?: string | HTMLElement;
    immediate?: boolean;
    removeClassName?: string;
    startClassName?: string;
    startClassNameSymbol?: string;
    removeClassNameSymbol?: string;
    messageZIndex?: number;
    top?: number | string;
    position?: Position;
}
