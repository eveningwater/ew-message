import { Message } from './core/core';
import * as util from './utils/util';
import { ewMessageOption } from './const/options';
import { ewMessageType } from './const/config';
export type ewMessageStaticProps = {
    [prop in keyof ewMessageType]: (options: ewMessageOption | string) => Message;
  };
declare const ewMessage: {
    (options: ewMessageOption | string): Message;
    util: typeof util;
} & ewMessageStaticProps;
export default ewMessage;
