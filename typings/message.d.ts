import type { ewMessageOption } from '../typings/ewMessage';
import './index.scss';
export declare class Message {
    options: ewMessageOption;
    el: HTMLElement | null;
    closeBtnEl: HTMLElement | null;
    constructor(options: ewMessageOption | string);
    destroy(): void;
    validateHasStyle(): boolean;
    normalizeOptions(options: ewMessageOption | string): ewMessageOption;
    getMessageType(): import("../typings/ewMessage").ewMessageType;
    getDefaultOption(): ewMessageOption;
    addMessageStyle(prefix_class?: string, style?: string): Promise<unknown>;
    checkContainer(el?: string | HTMLElement): HTMLElement;
    render(options: ewMessageOption): void;
    create(options: ewMessageOption): HTMLDivElement;
    setTop(element: NodeList | HTMLCollection): void;
    close(element: HTMLElement | NodeList | HTMLCollection, time: number): void;
}
