import type { ewMessageOption } from '../typings/ewMessage';
import { Message } from './message';
declare const ewMessage: {
    (options: ewMessageOption): Message;
    util: import("../typings/ewMessage").ewMessageUtils;
};
export default ewMessage;
