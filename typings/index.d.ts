import { Message } from './core/core';
import * as util from './utils/util';
import './styles/index.scss';
import { ewMessageOption } from './const/options';
declare const ewMessage: {
    (options: ewMessageOption | string): Message;
    util: typeof util;
};
export default ewMessage;
