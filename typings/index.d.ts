import { Message } from './core/core';
import * as util from './utils/util';
import './styles/index.scss';
import { ewMessageOption } from './const/options';
import { ewMessageEnumType } from './const/enum';
type ewMessageFunction = {
    (options: ewMessageOption | string): Message;
    util: typeof util;
} & {
    [key in ewMessageEnumType]: (option: ewMessageOption | string) => Message;
};
declare const _default: ewMessageFunction;
export default _default;
