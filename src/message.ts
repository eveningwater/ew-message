import type { ewMessageOption } from '../typings/ewMessage';
import { defaultMessageOption, typeMap } from './config';
import { typeIconMap } from './icon';
import './index.scss';
import {
  addMessageStyle,
  normalizeOptions,
  validateAutoHasStyle,
  validateHasStyle
} from './method';
import util from './util';
import {
  MESSAGE_CLOSE_DURATION_WARNING,
  MESSAGE_CLOSE_MAX_DURATION_WARNING,
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
  destroy() {
    if (this.el) {
      this.close(this.el, 0);
    }
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
    if ((!util.isNumber(options.duration) || (options.duration as number) <= 0) && !options.showClose) {
      if (__DEV__) {
        util.warn(MESSAGE_CLOSE_PARAM_WARNING);
      }
      options.showClose = true;
    }
    if (!options.content && __DEV__) {
      util.warn(MESSAGE_CONTENT_PARAM_WARNING);
    }
    document.body.appendChild(this.create(options));
    this.setTop(util.$$('.' + this.options.stylePrefix + 'message'));
    if (
      util.isNumber(options.duration) &&
      (options.duration as number) > 0 &&
      this.el instanceof HTMLElement
    ) {
      this.close(this.el, options.duration as number);
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
    if (options.showTypeIcon) {
      const icon = options.typeIcon ? options.typeIcon : typeIconMap[options.type || 'info'];
      element.appendChild(icon);
    }
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
    if (__DEV__ && !util.isNumber(time)) {
      util.warn(MESSAGE_CLOSE_DURATION_WARNING);
    }
    if (__DEV__ && !util.isNumber(this.options.maxDuration)) {
      util.warn(MESSAGE_CLOSE_MAX_DURATION_WARNING);
    }
    const normalizeTime = !util.isNumber(time) || time <= 0 ? 100 : time;
    const maxDuration = this.options.maxDuration || 10000;
    const normalizeMaxDuration = !util.isNumber(maxDuration) || maxDuration <= normalizeTime ? normalizeTime : maxDuration;
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
        this.setTop(util.$$('.' + this.options.stylePrefix + 'message'));
      },
      Math.min(normalizeTime < 1000 ? normalizeTime * 10 : normalizeTime, normalizeMaxDuration)
    );
  }
}
