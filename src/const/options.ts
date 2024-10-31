export interface ewMessageOption {
    content: string;
    center?: boolean;
    type?: string;
    duration?: number;
    showClose?: boolean;
    showTypeIcon?: boolean;
    typeIcon?: string;
    closeIcon?: string;
    container?: string | HTMLElement;
    removeClassName?: string;
    startClassName?: string;
    startClassNameSymbol?: string;
    removeClassNameSymbol?: string;
    top?: number | string;
}