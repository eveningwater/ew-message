import { MESSAGE_CONTAINER_WARNING } from "../../const/warn";
import { isDom, isString, $, warn } from "../../utils/util";
import { defaultMessageOption } from '../../const/config';
import { normalizeOptions } from '../method'

describe('Normalize the options', () => {
    it('should handle string option', () => {
        const option = 'test message';
        const result = normalizeOptions(option);
        expect(result.content).toEqual(option);
    });

    it('should handle object option', () => {
        const option = { content: 'test message' };
        const result = normalizeOptions(option);
        expect(result).toEqual({ ...defaultMessageOption, ...option });
    });

    it('should handle invalid option', () => {
        const option = 123;
        // @ts-ignore 此处为验证传入的参数类型，所以需要忽略类型检查
        const result = normalizeOptions(option);
        expect(result).toEqual(defaultMessageOption);
    });
});

/**
 * 重写的checkContainer方法,__DEV__为全局设置变量，在这里默认是true,会打印警告信息
 * @param el 
 * @returns 
 */
const checkContainer = (el?: string | HTMLElement) => {
    if (isDom(el)) {
        return el;
    } else if (isString(el)) {
        const container = $(el);
        if (!container) {
            // 默认当前是开发环境
            if (true) {
                warn(MESSAGE_CONTAINER_WARNING);
            }
            return document.body;
        }
        return container as HTMLElement;
    }
    return document.body;
}

describe('checkContainer', () => {
    let el: string | HTMLElement | undefined;

    beforeEach(() => {
        el = undefined;
    });

    test('When el is undefined, should return document.body', () => {
        const result = checkContainer(el);
        expect(result).toEqual(document.body);
    });

    test('When el is a valid DOM element, should return the element', () => {
        el = document.createElement('div');
        const result = checkContainer(el);
        expect(result).toEqual(el);
    });

    test('When el is a string and container is found, should return the container', () => {
        el = '#container';
        const container = document.createElement('div');
        container.id = 'container';
        document.body.appendChild(container);
        const result = checkContainer(el);
        expect(result).toEqual(container);
    });

    test('When el is a string and container is not found, should return document.body and log warning in dev mode', () => {
        el = '#nonExistingContainer';
        const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => { });
        const result = checkContainer(el);
        expect(result).toEqual(document.body);
        expect(warnSpy).toHaveBeenCalledTimes(1);
        warnSpy.mockRestore();
    });
});