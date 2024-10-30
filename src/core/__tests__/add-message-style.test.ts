import { addMessageStyle } from '../method'

import { isUndef } from '../../utils/util';

jest.mock('../../utils/util.ts');

describe('addMessageStyle', () => {

    beforeEach(() => {
        document.head.innerHTML = '';
    });

    test('should inject CSS from style parameter', async () => {
        await addMessageStyle(".test { color: blue; }");

        const styleTags = document.head.getElementsByTagName('style');
        expect(styleTags.length).toBe(1);
        expect(styleTags[0].innerHTML).toBe('.test { color: blue; }');
    });

    test('should not inject CSS if document is undefined', async () => {
        const originalDocument = global.document;

        // @ts-ignore
        global.document = undefined;

        // @ts-ignore
        isUndef.mockImplementation(() => true);

        await addMessageStyle(".test { color: blue; }");

        global.document = originalDocument;

        const styleTags = document.head.getElementsByTagName('style');
        expect(styleTags.length).toBe(0);
    });

    test('should handle insertAt option', async () => {
        // @ts-ignore
        isUndef.mockImplementation(() => false);
        await addMessageStyle(".first { color: green; }", { insertAt: "top" });

        const styleTags = document.head.getElementsByTagName('style');
        expect(styleTags.length).toBe(1);
        expect(styleTags[0].innerHTML).toBe('.first { color: green; }');
        expect(styleTags[0].nextSibling).toBe(null);
    });
});