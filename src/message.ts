import type { ewMessageOption } from "../typings/ewMessage";
import {
  baseTopUnit,
  defaultMessageOption,
  typeMap,
  utilAnimationAddClassNames,
  utilAnimationRemoveClassNames,
} from "./config";
import { closeIcon, typeIconMap } from "./icon";
import {
  addMessageStyle,
  getOffsetTop,
  handleAnimationNode,
  normalizeOptions,
  validateAutoHasStyle,
  validateHasStyle,
} from "./method";
import util from "./util";
import {
  MESSAGE_CLOSE_DURATION_WARNING,
  MESSAGE_CLOSE_MAX_DURATION_WARNING,
  MESSAGE_CLOSE_PARAM_WARNING,
  MESSAGE_CONTAINER_WARNING,
  MESSAGE_CONTENT_PARAM_WARNING,
} from "./warn";

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
      this.options.stylePrefix = "ew-";
    }
    if (!isHasStyle && !validateAutoHasStyle(this.options.stylePrefix)) {
      this.addMessageStyle(this.options.stylePrefix);
    }
    this.addZIndex();
    this.options.immediate && this.render(this.options);
  }
  addZIndex() {
    const { messageZIndex, stylePrefix } = this.options;
    if (util.isNumber(messageZIndex) && messageZIndex! > 0) {
      this.addMessageStyle(
        stylePrefix,
        `.${stylePrefix}message{z-index:${messageZIndex}}`
      );
    }
  }
  destroy() {
    if (this.el) {
      this.close(this.el, 0, true);
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
    const {
      duration,
      showClose,
      content,
      container: optionContainer,
      stylePrefix,
    } = options;
    if ((!util.isNumber(duration) || duration! <= 0) && !showClose) {
      if (__DEV__) {
        util.warn(MESSAGE_CLOSE_PARAM_WARNING);
      }
      options.showClose = true;
    }
    if (!util.isString(content) && __DEV__) {
      util.warn(MESSAGE_CONTENT_PARAM_WARNING);
    }
    const container = this.checkContainer(optionContainer);
    const el = this.create(options);
    this.animationAddNode(el, container);
    this.setTop(util.$$("." + stylePrefix + "message", container));
    if (
      util.isNumber(duration) &&
      duration! > 0 &&
      this.el instanceof HTMLElement
    ) {
      this.close(this.el, duration!);
    }
    if (this.closeBtnEl) {
      util.on(this.closeBtnEl, "click", () => {
        this.close(<HTMLElement>this.closeBtnEl!.parentElement, 0);
      });
    }
  }
  create(options: ewMessageOption) {
    const {
      stylePrefix,
      type,
      center,
      content,
      showTypeIcon,
      typeIcon,
      showClose,
      closeIcon: optionCloseIcon,
    } = options || this.options;
    let element = util.create("div");
    element.className = `${stylePrefix}message ${stylePrefix}message-${type}`;
    if (center) {
      util.addClass(stylePrefix + "message-center", element);
    }
    const p = util.create("p");
    p.insertAdjacentHTML('afterbegin', content);
    if (showTypeIcon) {
      const icon = typeIcon
        ? typeIcon
        : typeIconMap[type || "info"](stylePrefix);
      element.appendChild(util.createElement(icon));
    }
    element.appendChild(p);
    if (showClose) {
      this.closeBtnEl = util.create("i");
      util.addClass(`${stylePrefix}message-close`, this.closeBtnEl);
      this.closeBtnEl?.appendChild(util.createElement(optionCloseIcon
        ? optionCloseIcon
        : closeIcon(stylePrefix!)));
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
      item.setAttribute(
        "style",
        `top:${getOffsetTop(top) !== baseTopUnit
          ? top
          : `${baseTopUnit * (i + 1) + height * i}px`
        };`
      );
    }
  }
  animationAddNode(el: HTMLElement, container: HTMLElement) {
    const { startClassName, stylePrefix, startClassNameSymbol } = this.options;
    if (startClassName) {
      handleAnimationNode(
        el,
        startClassName,
        startClassNameSymbol!,
        stylePrefix!,
        utilAnimationAddClassNames,
        (res) => {
          if (util.isArray(res)) {
            (res as string[]).forEach((className) =>
              util.removeClass(className, el)
            );
          } else {
            util.removeClass(res as string, el);
          }
        }
      );
    }
    container.appendChild(el);
  }
  animationRemoveNode(el: HTMLElement, isDestroy = false) {
    const { removeClassName, stylePrefix, removeClassNameSymbol } =
      this.options;
    if (removeClassName && !isDestroy) {
      handleAnimationNode(
        el,
        removeClassName,
        removeClassNameSymbol!,
        stylePrefix!,
        utilAnimationRemoveClassNames,
        () => el.parentElement?.removeChild(el)
      );
    } else {
      el.parentElement?.removeChild(el);
    }
  }
  close(
    element: HTMLElement | NodeList | HTMLCollection,
    time: number,
    isDestroy = false
  ) {
    if (__DEV__ && !util.isNumber(time)) {
      util.warn(MESSAGE_CLOSE_DURATION_WARNING);
    }
    if (__DEV__ && !util.isNumber(this.options.maxDuration)) {
      util.warn(MESSAGE_CLOSE_MAX_DURATION_WARNING);
    }
    const normalizeTime = !util.isNumber(time) || time <= 0 ? 100 : time;
    const maxDuration = this.options.maxDuration || 10000;
    const normalizeMaxDuration =
      !util.isNumber(maxDuration) || maxDuration <= normalizeTime
        ? normalizeTime
        : maxDuration;
    const container = this.checkContainer(this.options.container);
    const delay = Math.min(
      normalizeTime < 1000 ? normalizeTime * 10 : normalizeTime,
      normalizeMaxDuration
    );
    const closeHandler = () => {
      if (element instanceof NodeList || element instanceof HTMLCollection) {
        util.toArray(element).forEach((item) => {
          if (util.isRemoveNode(item as HTMLElement)) {
            this.animationRemoveNode(item as HTMLElement, isDestroy);
          }
        });
      } else {
        if (util.isRemoveNode(element)) {
          this.animationRemoveNode(element, isDestroy);
        }
      }
      this.setTop(
        util.$$("." + this.options.stylePrefix + "message", container)
      );
    };
    if (isDestroy) {
      closeHandler();
    } else {
      setTimeout(closeHandler, delay);
    }
  }
}
