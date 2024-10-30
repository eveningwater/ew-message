import { ewMessageOption } from "../const/options";
export declare class Message {
    options: ewMessageOption;
    el: HTMLElement | null;
    closeBtnEl: HTMLElement | null;
    stylePrefix: string;
    constructor(options: ewMessageOption | string);
    addPosition(): void;
    addZIndex(): void;
    destroy(): void;
    normalizeOptions(options: ewMessageOption | string): ewMessageOption;
    getMessageType(): import("../const/config").ewMessageType;
    getDefaultOption(): ewMessageOption;
    render(opt?: ewMessageOption): void;
    create(options: ewMessageOption): HTMLElement;
    setTop(element: NodeList | HTMLCollection): void;
    animationAddNode(el: HTMLElement, container: HTMLElement): void;
    animationRemoveNode(el: HTMLElement, isDestroy?: boolean): void;
    close(element: HTMLElement | NodeList | HTMLCollection, time: number, isDestroy?: boolean): void;
}
