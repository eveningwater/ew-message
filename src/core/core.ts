import type { ewMessageOption } from "../../typings/ewMessage";
import {
  baseTopUnit,
  defaultMessageOption,
  typeMap,
  utilAnimationAddClassNames,
  utilAnimationRemoveClassNames,
} from "../const/config";
import { closeIcon, typeIconMap } from "../const/icon";
import {
  addMessageStyle,
  checkContainer,
  getOffsetTop,
  handleAnimationNode,
  normalizeOptions,
  validateAutoHasStyle,
  validateHasStyle,
} from "./method";
import { isNumber, isString, warn, $$, on, addClass, createElement, isRemoveNode, create, isArray, removeClass, removeNode, toArray } from "../utils/util";
import {
  MESSAGE_CLOSE_DURATION_WARNING,
  MESSAGE_CLOSE_MAX_DURATION_WARNING,
  MESSAGE_CLOSE_PARAM_WARNING,
  MESSAGE_CONTENT_PARAM_WARNING,
} from "../const/warn";

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
    const { stylePrefix,immediate } = this.options;
    if (!isHasStyle && !validateAutoHasStyle(stylePrefix)) {
      this.addMessageStyle(stylePrefix);
    }
    this.addZIndex();
    immediate && this.render(this.options);
  }
  addZIndex() {
    const { messageZIndex, stylePrefix } = this.options;
    if (isNumber(messageZIndex) && messageZIndex! > 0) {
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
  render(opt?: ewMessageOption) {
    const options = opt || this.options;
    const {
      duration,
      showClose,
      content,
      container: optionContainer,
      stylePrefix,
    } = options;
    if ((!isNumber(duration) || duration! <= 0) && !showClose) {
      if (__DEV__) {
        warn(MESSAGE_CLOSE_PARAM_WARNING);
      }
      options.showClose = true;
    }
    if (!isString(content) && __DEV__) {
      warn(MESSAGE_CONTENT_PARAM_WARNING);
    }
    const container = checkContainer(optionContainer);
    const el = this.create(options);
    this.animationAddNode(el, container);
    this.setTop($$("." + stylePrefix + "message", container));
    if (
      isNumber(duration) &&
      duration! > 0 &&
      this.el instanceof HTMLElement
    ) {
      this.close(this.el, duration!);
    }
    if (this.closeBtnEl) {
      on(this.closeBtnEl, "click", () => {
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
    let element = create("div");
    element.className = `${stylePrefix}message ${stylePrefix}message-${type}`;
    if (center) {
      addClass(stylePrefix + "message-center", element);
    }
    const p = create("p");
    p.insertAdjacentHTML("afterbegin", content);
    if (showTypeIcon) {
      const icon = typeIcon
        ? typeIcon
        : typeIconMap[type || "info"](stylePrefix);
      element.appendChild(createElement(icon));
    }
    element.appendChild(p);
    if (showClose) {
      this.closeBtnEl = create("i");
      addClass(`${stylePrefix}message-close`, this.closeBtnEl);
      this.closeBtnEl?.appendChild(
        createElement(
          optionCloseIcon ? optionCloseIcon : closeIcon(stylePrefix!)
        )
      );
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
          if (isArray(res)) {
            res.forEach((className) =>
              removeClass(className, el)
            );
          } else {
            removeClass(res, el);
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
        () => removeNode(el)
      );
    } else {
      removeNode(el);
    }
  }
  close(
    element: HTMLElement | NodeList | HTMLCollection,
    time: number,
    isDestroy = false
  ) {
    const { maxDuration, container } = this.options;
    if (__DEV__ && !isNumber(time)) {
      warn(MESSAGE_CLOSE_DURATION_WARNING);
    }
    if (__DEV__ && !isNumber(maxDuration)) {
      warn(MESSAGE_CLOSE_MAX_DURATION_WARNING);
    }
    const normalizeTime = !isNumber(time) || time <= 0 ? 100 : time;
    const maxDurationValue = maxDuration || 10000;
    const normalizeMaxDuration =
      !isNumber(maxDurationValue) || maxDurationValue <= normalizeTime
        ? normalizeTime
        : maxDurationValue;
    const mountedContainer = checkContainer(container);
    const delay = Math.min(
      normalizeTime < 1000 ? normalizeTime * 10 : normalizeTime,
      normalizeMaxDuration
    );
    const closeHandler = () => {
      if (element instanceof NodeList || element instanceof HTMLCollection) {
        toArray(element).forEach((item) => {
          if (isRemoveNode(item as HTMLElement)) {
            this.animationRemoveNode(item as HTMLElement, isDestroy);
          }
        });
      } else {
        if (isRemoveNode(element)) {
          this.animationRemoveNode(element, isDestroy);
        }
      }
      this.setTop(
        $$("." + this.options.stylePrefix + "message", mountedContainer)
      );
    };
    if (isDestroy) {
      closeHandler();
    } else {
      setTimeout(closeHandler, delay);
    }
  }
}
