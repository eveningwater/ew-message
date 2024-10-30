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