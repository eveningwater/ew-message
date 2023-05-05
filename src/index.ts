import type {  ewMessageOption } from '../typings/ewMessage';
import { typeMap } from './config';
import { Message } from './message';
import { normalizeOptions } from './method';
import util from './util';
import { MESSAGE_TYPE_WARNING } from './warn';
const ewMessage = (options: ewMessageOption | string) => new Message(options);
ewMessage.util = util;
for (let key in typeMap) {
  ewMessage[key] = (option: ewMessageOption | string) => {
    const messageOption = normalizeOptions(option);
    if (
      util.isObject(option) &&
      util.hasOwn(option as object, 'type') &&
      __DEV__
    ) {
      util.warn(MESSAGE_TYPE_WARNING);
    }
    return new Message({ ...messageOption, type: key });
  };
}
export default ewMessage;
