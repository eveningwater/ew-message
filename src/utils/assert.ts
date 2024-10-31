type ConsoleKey = keyof Pick<Console, 'warn' | 'error' | 'log'>;
const assertLists: ConsoleKey[] = ['warn', 'error', 'log'];
type AssertRes = {
    [k in ConsoleKey]: <T>(...v: T[]) => void;
};
const noop = () => { };
const assert: AssertRes = {
    log: noop,
    warn: noop,
    error: noop
};
assertLists.forEach(key => assert[key] = <T>(...v: T[]) => console[key](...v))
export const warn = assert.warn;
export const error = assert.error;
export const log = assert.log;