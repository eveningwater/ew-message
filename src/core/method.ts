import { baseTopUnit, defaultMessageOption } from "../const/config";
import { ewMessageOption } from "../const/options";
import { MESSAGE_CLOSE_PARAM_WARNING, MESSAGE_CONTAINER_WARNING, MESSAGE_CONTENT_PARAM_WARNING, MESSAGE_REMOVE_CLASSNAME_WARNING, MESSAGE_STAERT_CLASSNAME_WARNING, MESSAGE_TYPE_WARNING } from "../const/warn";
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
  const { duration, showClose, content, removeClassName, startClassName } = messageOption;
  if ((!isNumber(duration) || duration <= 0) && !showClose) {
    if (__DEV__) {
      warn(MESSAGE_CLOSE_PARAM_WARNING);
    }
    messageOption.showClose = true;
  }
  if (!isString(content) && __DEV__) {
    warn(MESSAGE_CONTENT_PARAM_WARNING);
  }
  if(!isArray(removeClassName)){
     if(__DEV__){
        warn(MESSAGE_REMOVE_CLASSNAME_WARNING);
     }
     messageOption.removeClassName = [];
  }
  if(!isArray(startClassName)){
    if(__DEV__){
      warn(MESSAGE_STAERT_CLASSNAME_WARNING);
    }
    messageOption.startClassName = [];
  }
  messageOption.removeClassName = messageOption.removeClassName!.filter((className) => isString(className));
  messageOption.startClassName = messageOption.startClassName!.filter((className) => isString(className));
  return messageOption as Required<ewMessageOption>;
};
export const getOffsetTop = (top?: string | number) => {
  if (isNumber(Number(top))) {
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
  classNameList: string [],
  stylePrefix: string,
  existClassNames: string[],
  callback: (v: string[]) => void
) => {
  let res = classNameList;
  if (classNameList.length > 0) {
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
  }

  on(el, "animationend", () => callback?.(res));
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
    return container;
  }
  return document.body;
}