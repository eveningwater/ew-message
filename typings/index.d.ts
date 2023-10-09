import type { ewMessageOption, ewMessageType } from '../typings/ewMessage';
import { Message } from './message';
export type ewMessageStaticProps = {
    [prop in keyof ewMessageType]: (options: ewMessageOption | string) => Message;
};
export interface ewGlobalMessage extends ewMessageStaticProps {
    (options: ewMessageOption | string): Message;
    util: import("./ewMessage").ewMessageUtils;
}
declare const ewMessage: ewGlobalMessage;
export default ewMessage;
