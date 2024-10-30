import { addMessageStyle } from '../method'

import { isUndef } from '../../utils/util';

jest.mock('../../const/config.ts', () => ({
    getMessageStyle: jest.fn(() => '.ew-message { color: red; }')
}));

jest.mock('../../utils/util.ts');

describe('addMessageStyle', () => {

    beforeEach(() => {
        document.head.innerHTML = '';
    });

    test('should inject CSS from style parameter', async () => {
        await addMessageStyle("ew-", ".test { color: blue; }");

        const styleTags = document.head.getElementsByTagName('style');
        expect(styleTags.length).toBe(1);
        expect(styleTags[0].innerHTML).toBe('.test { color: blue; }');
    });

    test('should inject CSS from getMessageStyle', async () => {
        await addMessageStyle("ew-");

        const styleTags = document.head.getElementsByTagName('style');
        expect(styleTags.length).toBe(1);
        expect(styleTags[0].innerHTML).toBe('.ew-message { color: red; }');
    });

    test('should not inject CSS if document is undefined', async () => {
        const originalDocument = global.document;

        // @ts-ignore
        global.document = undefined;

        // @ts-ignore
        isUndef.mockImplementation(() => true);

        await addMessageStyle("ew-", ".test { color: blue; }");

        global.document = originalDocument;

        const styleTags = document.head.getElementsByTagName('style');
        expect(styleTags.length).toBe(0);
    });

    test('should handle insertAt option', async () => {
        // @ts-ignore
        isUndef.mockImplementation(() => false);
        await addMessageStyle("ew-", ".first { color: green; }", { insertAt: "top" });

        const styleTags = document.head.getElementsByTagName('style');
        expect(styleTags.length).toBe(1);
        expect(styleTags[0].innerHTML).toBe('.first { color: green; }');
        expect(styleTags[0].nextSibling).toBe(null);
    });
});