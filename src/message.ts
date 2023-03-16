import { defaultMessageOption, typeMap } from './config';
import './index.scss';
import {
  addMessageStyle,
  normalizeOptions,
  validateAutoHasStyle,
  validateHasStyle
} from './method';
import util from './util';
import {
  MESSAGE_CLOSE_PARAM_WARNING,
  MESSAGE_CONTENT_PARAM_WARNING
} from './warn';
export class Message {
  options: ewMessageOption;
  el: HTMLElement | null;
  closeBtnEl: HTMLElement | null;
  constructor(options: ewMessageOption | string) {
    this.options = this.normalizeOptions(options);
    this.el = null;
    this.closeBtnEl = null;
    let isHasStyle = this.validateHasStyle();
    if (isHasStyle) {
      this.options.stylePrefix = 'ew-';
    }
    if (!isHasStyle && !validateAutoHasStyle(this.options.stylePrefix)) {
      this.addMessageStyle(this.options.stylePrefix);
    }
    this.render(this.options);
  }
  validateHasStyle() {
    return validateHasStyle();
  }
  normalizeOptions(options: ewMessageOption | string) {
    return normalizeOptions(options);
  }
  getMessageType() {
    return typeMap;
  }
  getDefaultOption() {
    return defaultMessageOption;
  }
  addMessageStyle(prefix_class?: string, style?: string) {
    return addMessageStyle(prefix_class, style);
  }
  render(options: ewMessageOption) {
    if ((!options.duration || options.duration <= 0) && !options.showClose) {
      if (__DEV__) {
        util.warn(MESSAGE_CLOSE_PARAM_WARNING);
      }
      options.showClose = true;
    }
    if (!options.content && __DEV__) {
      util.warn(MESSAGE_CONTENT_PARAM_WARNING);
    }
    document.body.appendChild(this.create(options));
    this.setTop(
      document.querySelectorAll('.' + this.options.stylePrefix + 'message')
    );
    if (
      options.duration &&
      options.duration > 0 &&
      this.el instanceof HTMLElement
    ) {
      this.close(this.el, options.duration);
    }
    if (this.closeBtnEl) {
      this.closeBtnEl.onclick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target && target.parentElement instanceof HTMLElement) {
          this.close(target.parentElement, 0);
        }
      };
    }
  }
  create(options: ewMessageOption) {
    let element = document.createElement('div');
    element.className = `${this.options.stylePrefix}message ${this.options.stylePrefix}message-${options.type}`;
    if (options.center) {
      element.classList.add(this.options.stylePrefix + 'message-center');
    }
    const p = document.createElement('p');
    p.innerHTML = options.content;
    element.appendChild(p);
    if (options.showClose) {
      this.closeBtnEl = document.createElement('i');
      this.closeBtnEl.classList.add(this.options.stylePrefix + 'message-close');
      this.closeBtnEl.innerHTML = '&times;';
      element.appendChild(this.closeBtnEl);
    }
    this.el = element;
    return element;
  }
  setTop(element: NodeList | HTMLCollection) {
    if (!element || !element.length) return;
    const height = (element[0] as HTMLElement).offsetHeight;
    for (let i = 0, len = element.length; i < len; i++) {
      const item = element[i] as HTMLElement;
      item.setAttribute('style', 'top:' + (25 * (i + 1) + height * i) + 'px;');
    }
  }
  close(element: HTMLElement | NodeList | HTMLCollection, time: number) {
    const normalizeTime = time || 100;
    setTimeout(
      () => {
        if (element instanceof NodeList || element instanceof HTMLCollection) {
          util.toArray(element).forEach(item => {
            if (
              util.isDom(item) &&
              util.isDom(item.parentElement) &&
              util.isFunction(item.parentElement?.removeChild)
            ) {
              item.parentElement?.removeChild(item);
            }
          });
        } else {
          if (
            util.isDom(element) &&
            util.isDom(element.parentElement) &&
            util.isFunction(element.parentElement?.removeChild)
          ) {
            element.parentElement?.removeChild(element);
          }
        }
        this.setTop(
          document.querySelectorAll('.' + this.options.stylePrefix + 'message')
        );
      },
      normalizeTime < 1000 ? normalizeTime * 10 : normalizeTime
    );
  }
}
