import { ewMessageOption } from "../const/options";
export declare class Message {
    options: ewMessageOption;
    el: HTMLElement | null;
    closeBtnEl: HTMLElement | null;
    constructor(options: ewMessageOption | string);
    addPosition(): void;
    addZIndex(): void;
    destroy(): void;
    validateHasStyle(): boolean;
    normalizeOptions(options: ewMessageOption | string): ewMessageOption;
    getMessageType(): import("../const/config").ewMessageType;
    getDefaultOption(): ewMessageOption;
    addMessageStyle(prefix_class?: string, style?: string): Promise<boolean>;
    render(opt?: ewMessageOption): void;
    create(options: ewMessageOption): HTMLElement;
    setTop(element: NodeList | HTMLCollection): void;
    animationAddNode(el: HTMLElement, container: HTMLElement): void;
    animationRemoveNode(el: HTMLElement, isDestroy?: boolean): void;
    close(element: HTMLElement | NodeList | HTMLCollection, time: number, isDestroy?: boolean): void;
}
