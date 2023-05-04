import type { ewMessageOption } from '../typings/ewMessage';
export declare class Message {
    options: ewMessageOption;
    el: HTMLElement | null;
    closeBtnEl: HTMLElement | null;
    constructor(options: ewMessageOption | string);
    validateHasStyle(): boolean;
    normalizeOptions(options: ewMessageOption | string): ewMessageOption;
    getMessageType(): import("../typings/ewMessage").ewMessageType;
    getDefaultOption(): ewMessageOption;
    addMessageStyle(prefix_class?: string, style?: string): Promise<unknown>;
    render(options: ewMessageOption): void;
    create(options: ewMessageOption): HTMLDivElement;
    setTop(element: NodeList | HTMLCollection): void;
    close(element: HTMLElement | NodeList | HTMLCollection, time: number): void;
}
