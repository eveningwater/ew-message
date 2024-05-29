import type {
  ewMessageOption,
  ewMessageStyleRefType,
} from "../typings/ewMessage";
import { baseTopUnit, defaultMessageOption, getMessageStyle } from "./config";
import util from "./util";
export const normalizeOptions = (
  option: string | ewMessageOption
): ewMessageOption => {
  let messageOption: ewMessageOption = defaultMessageOption;
  if (typeof option === "string") {
    messageOption.content = option;
  } else if (typeof option === "object" && !!option) {
    messageOption = { ...messageOption, ...option };
  }
  return messageOption;
};
export const addMessageStyle = (prefix_class = "ew-", style?: string) =>
  new Promise((resolve) => {
    const cssText = style || getMessageStyle(prefix_class);
    const styleInject = (css: string, ref?: ewMessageStyleRefType) => {
      if (ref === void 0) ref = {};
      const insertAt = ref.insertAt;
      if (!css || typeof document === "undefined") return;
      const head = document.head || util.$("head");
      const style = document.createElement("style");
      style.type = "text/css";
      if (insertAt === "top") {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }
      style.appendChild(document.createTextNode(css));
      resolve(true);
    };
    styleInject(cssText);
  });
export const validateHasStyle = () => {
  let isHasStyle = false;
  const allLinks = util.$$("link");
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
  const allStyles = util.$$("style");
  allStyles.forEach((style) => {
    const text = style.textContent;
    if (text === getMessageStyle(stylePrefix)) {
      isHasStyle = true;
    }
  });
  return isHasStyle;
};
export const getOffsetTop = (top?: string | number) => {
  if (util.isNumber(top)) {
    return `${top}px`;
  }
  if (util.isString(top)) {
    const regExp = /[px|%|rem|em|vh|vw|ex|rem|ch|vmin|vmax]/g;
    if (
      util.isNumber(Number((top as string).replace(regExp, ""))) &&
      (top as string)
    ) {
      return top;
    }
  }
  return baseTopUnit;
};

export const handleAnimationNode = (
  el: HTMLElement,
  options: ewMessageOption,
  container?: HTMLElement
) => {};
