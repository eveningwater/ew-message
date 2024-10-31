import { baseTopUnit, defaultMessageOption } from '../../const/config';
import { hasClass } from '../../utils/util';
import { checkContainer, getOffsetTop, handleAnimationNode, normalizeOptions } from '../method';

describe('normalizeOptions', () => {
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

describe('getOffsetTop', () => {
    it('should return the correct value for a number input', () => {
        const top = 10;
        const result = getOffsetTop(top);
        expect(result).toEqual('10px');
    });

    it('should return the correct value for a valid string input with a unit', () => {
        const top = '20px';
        const result = getOffsetTop(top);
        expect(result).toEqual('20px');
    });

    it('should return the correct value for a valid string input without a unit', () => {
        const top = '30';
        const result = getOffsetTop(top);
        expect(result).toEqual('30px');
    });

    it('should return the baseTopUnit for an invalid string input', () => {
        const top = 'invalidTop';
        const result = getOffsetTop(top);
        expect(result).toEqual(baseTopUnit);
    });
});

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
        // @ts-ignore
        global.__DEV__ = true;
        const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => { });
        const result = checkContainer(el);
        expect(result).toEqual(document.body);
        expect(warnSpy).toHaveBeenCalledTimes(1);
        warnSpy.mockRestore();
        // @ts-ignore
        global.__DEV__ = undefined;
    });
});

describe('handleAnimationNode', () => {
    let mockElement: HTMLElement;
    let callback: (v: string[]) => void;

    beforeEach(() => {
        mockElement = document.createElement('div');
        callback = jest.fn();
        document.body.appendChild(mockElement);
    });

    afterEach(() => {
        document.body.removeChild(mockElement);
        jest.clearAllMocks();
    });

    test('adds classes based on classNameList and existClassNames', () => {
        const classNameList = ['fade', 'slide'];
        const stylePrefix = 'custom-';
        const existClassNames = ['fade', 'other'];

        handleAnimationNode(mockElement, classNameList, stylePrefix, existClassNames, callback);

        expect(hasClass('custom-message-fade', mockElement)).toBe(true);
        expect(hasClass('custom-message-slide', mockElement)).toBe(false);
    });

    test('calls callback on animationend', () => {
        const classNameList = ['fade'];
        const stylePrefix = 'custom-';
        const existClassNames = ['fade'];

        handleAnimationNode(mockElement, classNameList, stylePrefix, existClassNames, callback);

        const event = new Event('animationend');
        mockElement.dispatchEvent(event);

        expect(callback).toHaveBeenCalledWith(['custom-message-fade']);
    });

});