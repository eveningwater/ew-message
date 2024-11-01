import ewMessage from '../index';
import { Message } from '../core/core';
import { normalizeOptions } from '../core/method';
import { MESSAGE_TYPE_WARNING } from '../const/warn';
import { typeMap } from '../const/config';
import * as util from '../utils/util';

jest.mock('../core/core');
jest.mock('../core/method');
jest.mock('../utils/util');

describe('ewMessage', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create a Message instance with options', () => {
        const options = { content: 'Hello' };
        ewMessage(options);
        expect(Message).toHaveBeenCalledWith(options);
    });

    it('should create a Message instance with a string', () => {
        const message = 'Hello, World!';
        ewMessage(message);
        expect(Message).toHaveBeenCalledWith(message);
    });

    it('should handle type methods correctly', () => {
        const type = Object.keys(typeMap)[0];
        const options = { content: 'Test message', type };

        ewMessage[type](options);

        expect(normalizeOptions).toHaveBeenCalledWith(options);
        expect(Message).toHaveBeenCalledWith({ type });
    });

    it('should warn if options contain type in dev mode', () => {
        const options = { content: 'warning!', type: 'info' };
        // @ts-ignore
        global.__DEV__ = true;
        // @ts-ignore 内部不需要调用，直接模拟返回值为true即可,下方同理
        util.isObject.mockReturnValue(true);
        // @ts-ignore
        util.hasOwn.mockReturnValue(true);
        // @ts-ignore
        const warnSpy = jest.spyOn(util, 'warn');
        ewMessage.info(options);
        expect(warnSpy).toHaveBeenCalledWith(MESSAGE_TYPE_WARNING);
        // @ts-ignore
        global.__DEV__ = false;
        warnSpy.mockRestore();
    });

});
