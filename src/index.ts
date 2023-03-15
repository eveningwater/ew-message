import { typeMap } from './config';
import { Message } from './message';
import { normalizeOptions } from './method';
import util from './util';
import { MESSAGE_TYPE_WARNING } from './warn';
const ewMessage = (options: Option) => new Message(options);
for (let key in typeMap) {
  ewMessage[key] = (option: Option | string) => {
    const messageOption = normalizeOptions(option);
    if (
      util.isObject(option) &&
      util.hasOwn(option as object, 'type') &&
      util.hasOwn(option as object, 'log')
    ) {
      util.warn(MESSAGE_TYPE_WARNING);
    }
    return new Message({ ...messageOption, type: key });
  };
}
export default ewMessage;
