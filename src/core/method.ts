import { baseTopUnit, defaultMessageOption } from "../const/config";
import { ewMessageOption } from "../const/options";
import { MESSAGE_CLOSE_PARAM_WARNING, MESSAGE_CONTAINER_WARNING, MESSAGE_CONTENT_PARAM_WARNING, MESSAGE_TYPE_WARNING } from "../const/warn";
import { $, addClass, isNumber, isString, on, isArray, hasClass, isDom, warn, isObject, hasOwn } from '../utils/util';
export const normalizeOptions = (
  option: string | ewMessageOption
) => {
  let messageOption = defaultMessageOption;
  if (isString(option)) {
    messageOption.content = option;
  } else if (isObject(option)) {
    messageOption = { ...messageOption, ...option };
  }
  const { duration, showClose, content } = messageOption;
  if ((!isNumber(duration) || duration! <= 0) && !showClose) {
    if (__DEV__) {
      warn(MESSAGE_CLOSE_PARAM_WARNING);
    }
    messageOption.showClose = true;
  }
  if (!isString(content) && __DEV__) {
    warn(MESSAGE_CONTENT_PARAM_WARNING);
  }
  return messageOption as Required<ewMessageOption>;
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