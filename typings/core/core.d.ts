import { ewMessageOption } from "../const/options";
export declare class Message {
    options: Required<ewMessageOption>;
    el: HTMLElement | null;
    closeBtnEl: HTMLElement | null;
    container: HTMLElement;
    instances: NodeListOf<HTMLElement> | null;
    constructor(options: ewMessageOption | string);
    destroy(): void;
    render(opt?: ewMessageOption): void;
    createMessage(): {
        element: HTMLElement;
        closeBtnEl: HTMLElement | null;
    };
    setTop(nodeList: NodeListOf<HTMLElement>): void;
    animationAddNode(el: HTMLElement, container: HTMLElement): void;
    animationRemoveNode(el: HTMLElement, isDestroy?: boolean): void;
    close(nodes: HTMLElement[] | undefined, time: number, isDestroy?: boolean): void;
}
