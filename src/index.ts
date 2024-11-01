import { typeMap } from './const/config';
import { Message } from './core/core';
import { normalizeOptions } from './core/method';
import * as util from './utils/util';
import { MESSAGE_TYPE_WARNING } from './const/warn';
import './styles/index.scss';
import { ewMessageOption } from './const/options';
import { ewMessageEnumType } from './const/enum';

type ewMessageFunction = {
  (options: ewMessageOption | string): Message;
  util: typeof util;
} & {
  [key in ewMessageEnumType]: (option: ewMessageOption | string) => Message
};

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

// 需要显示声明ewMessage的类型，因为ts无法推断循环类型
export default ewMessage as ewMessageFunction;
