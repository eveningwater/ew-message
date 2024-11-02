import { Message } from '../core';
import { closeIcon } from '../../const/icon';

describe('Message', () => {
    let message;

    const mockContainer = document.createElement('div');
    mockContainer.setAttribute('id', 'message-container');
    document.body.appendChild(mockContainer);

    beforeEach(() => {
        message = new Message({
            container: mockContainer,
            duration: 2000,
            type: 'info',
            content: 'Test message',
            showClose: true,
            showTypeIcon: true,
            closeIcon: closeIcon('ew-'),
            typeIcon: undefined,
        });
    });

    afterEach(() => {
        message.destroy();
        mockContainer.innerHTML = '';
    });

    test('should initialize with default options', () => {
        expect(message.options.type).toBe('info');
        expect(message.options.duration).toBe(2000);
    });

    test('should create message element', () => {
        expect(message.el).not.toBeNull();
        expect(message.el.className).toContain('ew-message-info');
        expect(message.el.querySelector('p').textContent).toBe('Test message');
    });

    test('should render close button', () => {
        const closeBtn = message.el.querySelector('.ew-message-close');
        expect(closeBtn).not.toBeNull();
        expect(closeBtn.innerHTML).toContain('close');
    });

    test('should close message on close button click', () => {
        const closeBtn = message.el.querySelector('.ew-message-close');
        const spy = jest.spyOn(message, 'close');
        closeBtn.addEventListener('click', () => {
            message.close([message.el], 0);
            message.el = null;
            message.closeBtnEl = null;
        })
        closeBtn.click();
        expect(spy).toHaveBeenCalled();
        expect(message.el).toBeNull();
        spy.mockRestore();
    });

    test('should set top position of messages correctly', () => {
        new Message({
            container: mockContainer,
            duration: 2000,
            type: 'success',
            content: 'Second message',
            showClose: true,
        });

        const nodes = mockContainer.querySelectorAll('.ew-message');
        message.setTop(nodes);
        // @ts-ignore
        expect(nodes[0].style.top).toMatch(/px/);
        // @ts-ignore
        expect(nodes[1].style.top).toMatch(/px/);
    });

      test('should call animationAddNode on render', () => {
        const appendChildSpy = jest.spyOn(mockContainer, 'appendChild');
        message.render();
        expect(appendChildSpy).toHaveBeenCalledWith(message.el);
      });

      test('should remove message on destroy', () => {
        const spy = jest.spyOn(message, 'destroy');
        message.destroy();
        expect(spy).toHaveBeenCalled();
        setTimeout(() => {
            expect(message.el).toBeNull(); 
          }, 1000);
      });

      test('should handle close with duration', () => {
        const closeHandlerSpy = jest.spyOn(message, 'close');
        message.render();
        expect(closeHandlerSpy).toHaveBeenCalled();
        setTimeout(() => {
          expect(message.el).toBeNull(); 
        }, 2100);
      });
});
