import { baseTopUnit, defaultMessageOption, getMessageStyle } from "../const/config";
import { ewMessageOption } from "../const/options";
import { MESSAGE_CONTAINER_WARNING } from "../const/warn";
import { $, addClass, $$, isNumber, isString, isUndef, on, isArray, hasClass, isDom, warn, isObject } from '../utils/util';
export const normalizeOptions = (
  option: string | ewMessageOption
): ewMessageOption => {
  let messageOption = defaultMessageOption;
  if (isString(option)) {
    messageOption.content = option;
  } else if (isObject(option)) {
    messageOption = { ...messageOption, ...option };
  }
  return messageOption;
};
export const addMessageStyle = (prefix_class = "ew-", style?: string,ref?: ewMessageStyleRefType) =>
  new Promise<boolean>((resolve) => {
    const cssText = style || getMessageStyle(prefix_class);
    const styleInject = (css: string, ref?: ewMessageStyleRefType) => {
      if (ref === void 0){
        ref = {};
      }
      const insertAt = ref.insertAt;
      if (!css || isUndef(document)){
        resolve(false);
        return;
      }
      const head = document.head || $("head");
      const style = document.createElement("style");
      style.type = "text/css";
      style.appendChild(document.createTextNode(css));
      if (insertAt === "top") {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }
      resolve(true);
    };
    styleInject(cssText,ref);
  });
export const validateHasStyle = () => {
  let isHasStyle = false;
  const allLinks = $$("link");
  allLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href?.includes("ew-message")) {
      isHasStyle = true;
    }
  });
  return isHasStyle;
};
export const validateAutoHasStyle = (stylePrefix?: string) => {
  let isHasStyle = false;
  const allStyles = $$("style");
  allStyles.forEach((style) => {
    const text = style.textContent;
    if (text === getMessageStyle(stylePrefix)) {
      isHasStyle = true;
    }
  });
  return isHasStyle;
};
export const getOffsetTop = (top?: string | number) => {
  if (isNumber(top)) {
    return `${top}px`;
  }
  if (isString(top)) {
    const regExp = /[px|%|rem|em|vh|vw|ex|rem|ch|vmin|vmax]/g;
    if (
      isNumber(Number(top.replace(regExp, ""))) &&
      top
    ) {
      return top;
    }
  }
  return baseTopUnit;
};

export const handleAnimationNode = (
  el: HTMLElement,
  className: string,
  classNameSymbol: string,
  stylePrefix: string,
  existClassNames: string[],
  callback: (v: string | string[]) => void
) => {
  const classNameList = className?.split(classNameSymbol);
  let res: string | string[] = className;
  if (classNameList.length > 1) {
    const filterClassNameList: string[] = [];
    existClassNames.forEach((item) => {
      classNameList.forEach((className) => {
        const pushClassName = item.includes(className)
          ? `${stylePrefix}message-${className}`
          : className;
        filterClassNameList.push(pushClassName);
      });
    });
    filterClassNameList.forEach((className) => addClass(className, el));
    res = filterClassNameList;
  } else {
    let filterClassName = className;
    if (existClassNames.some((item) => item.includes(className))) {
      filterClassName = `${stylePrefix}message-${className}`;
    }
    addClass(filterClassName, el);
    res = filterClassName;
  }

  on(el, "animationend", () => callback?.(res));
  // 如果未触发animationend事件，则在1.2s后强行触发回调
  setTimeout(() => {
    if (isArray(res)) {
      if (res.some(item => hasClass(item, el))) {
        callback?.(res);
      }
    } else {
      if (hasClass(res, el)) {
        callback?.(res);
      }
    }
  }, 1200);
};

export const checkContainer = (el?: string | HTMLElement) => {
  if (isDom(el)) {
    return el;
  } else if (isString(el)) {
    const container = $(el);
    if (!container) {
      if (__DEV__) {
        warn(MESSAGE_CONTAINER_WARNING);
      }
      return document.body;
    }
    return container as HTMLElement;
  }
  return document.body;
}