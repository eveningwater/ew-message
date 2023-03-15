import { defaultMessageOption, getMessageStyle } from './config';
export const normalizeOptions = (
  option: string | ewMessageOption
): ewMessageOption => {
  let messageOption: ewMessageOption = defaultMessageOption;
  if (typeof option === 'string') {
    messageOption.content = option;
  } else if (typeof option === 'object' && !!option) {
    messageOption = { ...messageOption, ...option };
  }
  return messageOption;
};
export const addMessageStyle = (prefix_class = 'ew-', style?: string) => {
  const cssText = style || getMessageStyle(prefix_class);
  const styleInject = (css: string, ref?: ewMessageStyleRefType): void => {
    if (ref === void 0) ref = {};
    const insertAt = ref.insertAt;
    if (!css || typeof document === 'undefined') return;
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.type = 'text/css';
    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }
    style.appendChild(document.createTextNode(css));
  };
  styleInject(cssText);
};
