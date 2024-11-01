import { addClass, createElement, hasOwn, isDom, isNumber, isObject, isString, on, $ } from "../util";

describe('utils', () => {
  test('hasOwn', () => {
    expect(hasOwn({ a: 1 }, 'a')).toBe(true);
    expect(hasOwn({ a: 1 }, 'b')).toBe(false);
  });
  test('isObject', () => {
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject(null)).toBe(false);
  });

  test('isString', () => {
    expect(isString('')).toEqual(true);
    expect(isString(1)).toEqual(false);
  })

  test('isNumber', () => {
    expect(isNumber(1)).toEqual(true);
    expect(isNumber(1e2)).toEqual(true);
    expect(isNumber(NaN)).toEqual(false);
    expect(isNumber('123')).toEqual(false);
  })


  describe('isDom', () => {
    jest.mock('../util.ts', {
      // @ts-ignore
      isObject: jest.fn((v) => isObject(v))
    });
    test('should return true for HTMLElement', () => {
      const element = document.createElement('div');
      expect(isDom(element)).toBe(true);
    });

    test('should return true for HTMLCollection', () => {
      const collection = document.getElementsByTagName('div');
      expect(isDom(collection)).toBe(true);
    });

    test('should return true for NodeList', () => {
      const list = document.querySelectorAll('div');
      expect(isDom(list)).toBe(true);
    });

    test('should return false for non-HTML element', () => {
      const nonElement = {};
      expect(isDom(nonElement)).toBe(false);
    });
  });

  describe('addClass', () => {
    let element: HTMLElement;

    beforeEach(() => {
      element = document.createElement('div');
    });

    test('should add a class to the element', () => {
      addClass('test-class', element);
      expect(element.classList.contains('test-class')).toBe(true);
    });

    test('should add multiple classes', () => {
      addClass('class-one', element);
      addClass('class-two', element);
      expect(element.classList.contains('class-one')).toBe(true);
      expect(element.classList.contains('class-two')).toBe(true);
    });

    test('should not add the same class twice', () => {
      addClass('duplicate-class', element);
      addClass('duplicate-class', element);
      expect(element.classList.length).toBe(1);
    });
  });

  describe('on', () => {
    let element: HTMLElement;
    let mockHandler: jest.Mock;

    beforeEach(() => {
      element = document.createElement('div');
      mockHandler = jest.fn();
    });

    test('should add an event listener to the element', () => {
      on(element, 'click', mockHandler);
      element.dispatchEvent(new Event('click'));
      expect(mockHandler).toHaveBeenCalled();
    });

    test('should not add an event listener if no element is provided', () => {
      // @ts-ignore
      on(null, 'click', mockHandler);
      expect(mockHandler).not.toHaveBeenCalled();
    });

    test('should not add an event listener if no type is provided', () => {
      on(element, '', mockHandler);
      expect(mockHandler).not.toHaveBeenCalled();
    });

    test('should not add an event listener if no handler is provided', () => {
      // @ts-ignore
      on(element, 'click', null);
      expect(mockHandler).not.toHaveBeenCalled();
    });

    test('should support useCapture parameter', () => {
      const addEventListenerSpy = jest.spyOn(element, 'addEventListener');
      on(element, 'click', mockHandler, true);
      expect(addEventListenerSpy).toHaveBeenCalledWith('click', mockHandler, true);
      addEventListenerSpy.mockRestore();
    });
  });

  describe('createElement', () => {
    test('should create a DocumentFragment from a valid HTML string', () => {
      const fragment = createElement('<div><span>Hello</span></div>');
      expect(fragment).toBeInstanceOf(DocumentFragment);
      expect(fragment.childNodes.length).toBe(1);
      expect(fragment.firstChild).toBeInstanceOf(HTMLElement);
      expect((fragment.firstChild as HTMLElement).tagName).toBe('DIV');
    });

    test('should handle empty string input', () => {
      const fragment = createElement('');
      expect(fragment).toBeInstanceOf(DocumentFragment);
      expect(fragment.childNodes.length).toBe(0);
    });

    test('should create multiple elements from a valid HTML string', () => {
      const fragment = createElement('<div></div><p></p>');
      expect(fragment.childNodes.length).toBe(2);
    });

    test('auto format an invalid HTML string', () => {
      const fragment = createElement('<div><span></div>');
      expect(fragment.firstChild).toBeInstanceOf(HTMLDivElement);
      expect(fragment.firstChild?.firstChild).toBeInstanceOf(HTMLSpanElement);
      expect(fragment.childNodes.length).toBe(1);
    });
  });

  describe('$', () => {
    let container: HTMLElement;

    beforeEach(() => {
      container = document.createElement('div');
      container.innerHTML = `
            <div class="test-class" id="test-id">Test Element</div>
            <span class="test-class">Test Span</span>
        `;
      document.body.appendChild(container);
    });

    afterEach(() => {
      document.body.removeChild(container);
    });

    test('should select an element by class name', () => {
      const result = $('.test-class');
      expect(result).toBeInstanceOf(HTMLElement);
      expect(result?.className).toBe('test-class');
    });

    test('should select an element by ID', () => {
      const result = $('#test-id');
      expect(result).toBeInstanceOf(HTMLElement);
      expect(result?.id).toBe('test-id');
    });

    test('should return null for non-existent selector', () => {
      const result = $('.non-existent-class');
      expect(result).toBeNull();
    });

    test('should select an element within a specific container', () => {
      const result = $('.test-class', container);
      expect(result).toBeInstanceOf(HTMLElement);
      expect(result?.parentElement).toBe(container);
    });
  });
});    