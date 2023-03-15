import { defaultMessageOption } from './config';
export const normalizeOptions = (option: string | Option): Option => {
  let messageOption: Option = defaultMessageOption;
  if (typeof option === 'string') {
    messageOption.content = option;
  } else if (typeof option === 'object' && !!option) {
    messageOption = { ...messageOption, ...option };
  }
  return messageOption;
};
export const addMessageStyle = (prefix_class = 'ew-') => {
  const cssText = `
      .${prefix_class}message {
          min-width: 300px;
          border: 1px solid #ebeef5;
          position: fixed;
          left: 50%;
          background-color: #edf2fc;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          padding: 10px 15px;
          overflow: hidden;
          transition: transform .4s;
          border-radius: 4px;
          top: 25px;
          z-index: 10001;
          box-sizing: border-box;
          margin: 0;
      }
      .${prefix_class}message * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
      }
      .${prefix_class}message p {
          padding-right:15px;
          line-height: 1;
          font-size: 14px;
      }
      .${prefix_class}message .${prefix_class}message-close {
          position: absolute;
          top: 50%;
          right: 15px;
          transform: translateY(-50%);
          cursor: pointer;
          color: #C0C4CC;
          font-size: 16px;
          font-style: normal;
      }
      .${prefix_class}message>.${prefix_class}message-close:hover,
      .${prefix_class}message>.${prefix_class}message-close:active {
          color: #909399;
      }
      .${prefix_class}message-info p {
          color: #909399;
      }
      .${prefix_class}message-center {
          justify-content: center;
      }
      .${prefix_class}message-success {
          background-color: #e1f3d8;
          border-color: #e1f3d8;
      }
      .${prefix_class}message-success p {
          color: #67c23a;
      }
      .${prefix_class}message-warning {
          background-color: #fdfce6;
          border-color: #faecd8;
      }
      .${prefix_class}message-warning p {
          color: #e6a23c;
      }
      .${prefix_class}message-error {
          background-color: #fef0f0;
          border-color: #fde2e2;
      }
      .${prefix_class}message-error p {
          color: #f56c6c;
      }`;
  const styleInject = (css: string, ref?: StyleRefType): void => {
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
