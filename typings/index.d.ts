import type { ewMessageOption } from './ewMessage';
import { Message } from './message';
declare const ewMessage: {
    (options: ewMessageOption | string): Message;
    util: import("./ewMessage").ewMessageUtils;
};
export default ewMessage;
