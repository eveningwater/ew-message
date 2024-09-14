import type { ewMessageOption, ewMessageType } from "../../typings/ewMessage";

export const typeMap: ewMessageType = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};
export const defaultMessageOption: ewMessageOption = {
  content: '',
  center: false,
  type: 'info',
  duration: 100,
  showClose: true,
  stylePrefix: 'ew-',
  maxDuration: 10000,
  showTypeIcon: true,
  immediate: true,
  container: document.body,
  removeClassName: '',
  removeClassNameSymbol: ' ',
  startClassName: '',
  startClassNameSymbol: ' '
};

export const getMessageStyle = (prefix_class: string = 'ew-') => `
.${prefix_class}message-fadeOut{animation:fadeOut 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)}@keyframes fadeOut{0%{opacity:1}25%{opacity:0.8}50%{opacity:0.6}75%{opacity:0.4}100%{opacity:0}}.${prefix_class}message-scaleDown{animation:scaleDown 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)}@keyframes scaleDown{0%{transform:scale(1)}25%{transform:scale(0.8)}50%{transform:scale(0.6)}75%{transform:scale(0.4)}100%{transform:scale(0)}}.${prefix_class}message-fadeIn{animation:fadeIn 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)}@keyframes fadeIn{0%{opacity:1}25%{opacity:0.8}50%{opacity:0.6}75%{opacity:0.4}100%{opacity:0}}.${prefix_class}message-scaleUp{animation:scaleUp 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)}@keyframes scaleUp{0%{transform:scale(1)}25%{transform:scale(0.8)}50%{transform:scale(0.6)}75%{transform:scale(0.4)}100%{transform:scale(0)}}.${prefix_class}message{min-width:300px;border:1px solid #ebeef5;position:fixed;left:50%;background-color:#edf2fc;transform:translateX(-50%);display:flex;align-items:center;padding:10px 15px;overflow:hidden;transition:transform 0.4s;border-radius:4px;top:25px;box-sizing:border-box;margin:0;z-index:1000}.${prefix_class}message-icon{width:1em;height:1em;margin-right:5px}.${prefix_class}message p{padding:0;padding-right:15px;line-height:1;font-size:14px;color:#909399;margin:0}.${prefix_class}message-close{position:absolute;top:50%;right:5px;transform:translateY(-50%);cursor:pointer;color:#909399;font-size:20px;font-style:normal}.${prefix_class}message-close:hover,.${prefix_class}message-close:active{color:#909399}.${prefix_class}message-close-icon{width:1em;height:1em}.${prefix_class}message-center{justify-content:center}.${prefix_class}message-success{background-color:#e1f3d8;border-color:#e1f3d8}.${prefix_class}message-success p,.${prefix_class}message-success .${prefix_class}message-close{color:#67c23a}.${prefix_class}message-success .${prefix_class}message-close:hover,.${prefix_class}message-success .${prefix_class}message-close:active{color:#67c23a}.${prefix_class}message-warning{background-color:#faecd8;border-color:#fdfce6}.${prefix_class}message-warning p,.${prefix_class}message-warning .${prefix_class}message-close{color:#e6a23c}.${prefix_class}message-warning .${prefix_class}message-close:hover,.${prefix_class}message-warning .${prefix_class}message-close:active{color:#e6a23c}.${prefix_class}message-error{background-color:#fef0f0;border-color:#fde2e2}.${prefix_class}message-error p,.${prefix_class}message-error .${prefix_class}message-close{color:#f56c6c}.${prefix_class}message-error .${prefix_class}message-close:hover,.${prefix_class}message-error .${prefix_class}message-close:active{color:#f56c6c};
`;

export const utilAnimationRemoveClassNames = ['fadeOut', 'scaleUp'];
export const utilAnimationAddClassNames = ['fadeIn', 'scaleDown'];

export const baseTopUnit = 25;