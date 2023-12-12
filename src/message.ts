import type { ewMessageOption } from '../typings/ewMessage';
import { baseTopUnit, defaultMessageOption, typeMap, utilAnimationClassNames } from './config';
import { closeIcon, typeIconMap } from './icon';
import {
  addMessageStyle,
  getOffsetTop,
  normalizeOptions,
  validateAutoHasStyle,
  validateHasStyle
} from './method';
import util from './util';
import {
  MESSAGE_CLOSE_DURATION_WARNING,
  MESSAGE_CLOSE_MAX_DURATION_WARNING,
  MESSAGE_CLOSE_PARAM_WARNING,
  MESSAGE_CONTAINER_WARNING,
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
    this.addZIndex();
    this.options.immediate && this.render(this.options);
  }
  addZIndex() {
    const { messageZIndex, stylePrefix } = this.options;
    if (util.isNumber(messageZIndex) && (messageZIndex as number) > 0) {
      this.addMessageStyle(stylePrefix, `.${stylePrefix}message{z-index:${messageZIndex}}`);
    }
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
  checkContainer(el?: string | HTMLElement) {
    if (util.isDom(el)) {
      return el as HTMLElement;
    } else if (util.isString(el)) {
      const container = util.$(el as string) as HTMLElement;
      if (!container) {
        if (__DEV__) {
          util.warn(MESSAGE_CONTAINER_WARNING);
        }
        return document.body;
      }
      return container;
    }
    return document.body;
  }
  render(opt?: ewMessageOption) {
    const options = opt || this.options;
    if ((!util.isNumber(options.duration) || (options.duration as number) <= 0) && !options.showClose) {
      if (__DEV__) {
        util.warn(MESSAGE_CLOSE_PARAM_WARNING);
      }
      options.showClose = true;
    }
    if (!options.content && __DEV__) {
      util.warn(MESSAGE_CONTENT_PARAM_WARNING);
    }
    const container = this.checkContainer(options.container);
    container.appendChild(this.create(options));
    this.setTop(util.$$('.' + this.options.stylePrefix + 'message', container));
    if (
      util.isNumber(options.duration) &&
      (options.duration as number) > 0 &&
      this.el instanceof HTMLElement
    ) {
      this.close(this.el, options.duration as number);
    }
    if (this.closeBtnEl) {
      this.closeBtnEl.onclick = () => {
        this.close(<HTMLElement>this.closeBtnEl?.parentElement, 0);
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
      const icon = options.typeIcon ? options.typeIcon : typeIconMap[options.type || 'info'](this.options.stylePrefix);
      element.appendChild(util.createElement(icon));
    }
    element.appendChild(p);
    if (options.showClose) {
      this.closeBtnEl = document.createElement('i');
      this.closeBtnEl.classList.add(this.options.stylePrefix + 'message-close');
      this.closeBtnEl.innerHTML = this.options.closeIcon ? this.options.closeIcon : closeIcon(this.options.stylePrefix!);
      element.appendChild(this.closeBtnEl);
    }
    this.el = element;
    return element;
  }
  setTop(element: NodeList | HTMLCollection) {
    if (!element || !element.length) return;
    const { top } = this.options;
    const height = (element[0] as HTMLElement).offsetHeight;


    for (let i = 0, len = element.length; i < len; i++) {
      const item = element[i] as HTMLElement;
      item.setAttribute('style', `top:${getOffsetTop(top) !== baseTopUnit ? top : `${(baseTopUnit * (i + 1) + height * i)}px`};`);
    }
  }
  animationRemoveNode(el: HTMLElement) {
    const { removeClassName, stylePrefix, removeClassNameSymbol } = this.options;
    if (removeClassName) {
      const classNameList = removeClassName?.split(removeClassNameSymbol as string);
      if (classNameList.length > 1) {
        const filterRemoveClassNameList: string[] = []
        utilAnimationClassNames.forEach(item => {
          classNameList.forEach(className => {
            if (item.includes(className)) {
              filterRemoveClassNameList.push(stylePrefix + 'message-' + className)
            } else {
              filterRemoveClassNameList.push(className);
            }
          })
        })
        filterRemoveClassNameList.forEach(className => util.addClass(className, el))
      } else {
        let filterRemoveClassName = removeClassName;
        if (utilAnimationClassNames.some(item => item.includes(removeClassName))) {
          filterRemoveClassName = stylePrefix + 'message-' + removeClassName;
        }
        util.addClass(filterRemoveClassName, el);
      }

      util.on(el, 'animationend', () => {
        el.parentElement?.removeChild(el);
      })
    } else {
      el.parentElement?.removeChild(el);
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
    const container = this.checkContainer(this.options.container);
    setTimeout(
      () => {
        if (element instanceof NodeList || element instanceof HTMLCollection) {
          util.toArray(element).forEach(item => {
            if (
              util.isDom(item) &&
              util.isDom(item.parentElement) &&
              util.isFunction(item.parentElement?.removeChild)
            ) {
              this.animationRemoveNode(item as HTMLElement);
            }
          });
        } else {
          if (
            util.isDom(element) &&
            util.isDom(element.parentElement) &&
            util.isFunction(element.parentElement?.removeChild)
          ) {
            this.animationRemoveNode(element);
          }
        }
        this.setTop(util.$$('.' + this.options.stylePrefix + 'message', container));
      },
      Math.min(normalizeTime < 1000 ? normalizeTime * 10 : normalizeTime, normalizeMaxDuration)
    );
  }
}
