import { typeMap } from './const/config';
import { Message } from './core/core';
import { normalizeOptions } from './core/method';
import * as util from './utils/util';
import { MESSAGE_TYPE_WARNING } from './const/warn';
import './styles/index.scss';
import { ewMessageOption } from './const/options';

const { hasOwn, isObject, warn } = util;
const ewMessage = (options: ewMessageOption | string) => new Message(options);
ewMessage.util = util;
for (let key in typeMap) {
  ewMessage[key] = (option: ewMessageOption | string) => {
    const messageOption = normalizeOptions(option);
    if (
      isObject(option) &&
      hasOwn(option, 'type') &&
      __DEV__
    ) {
      warn(MESSAGE_TYPE_WARNING);
    }
    return new Message({ ...messageOption, type: key });
  };
}

export default ewMessage;
