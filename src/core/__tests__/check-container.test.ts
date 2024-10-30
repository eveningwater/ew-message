import { checkContainer } from "../method";

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