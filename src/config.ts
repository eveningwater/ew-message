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
  duration: 600,
  showClose: true,
  isStyle: false,
  stylePrefix: 'ew-'
};
export const getMessageStyle = (prefix_class: string) => `
.${prefix_class}message{min-width:300px;border:1px solid #ebeef5;position:fixed;left:50%;background-color:#edf2fc;transform:translateX(-50%);display:flex;align-items:center;padding:10px 15px;overflow:hidden;transition:transform 0.4s;border-radius:4px;top:25px;z-index:10001;box-sizing:border-box;margin:0}.${prefix_class}message *{box-sizing:border-box;margin:0;padding:0}.${prefix_class}message p{padding-right:15px;line-height:1;font-size:14px;color:#909399}.${prefix_class}message-close{position:absolute;top:50%;right:15px;transform:translateY(-50%);cursor:pointer;color:#909399;font-size:16px;font-style:normal}.${prefix_class}message-close:hover,.${prefix_class}message-close:active{color:#909399}.${prefix_class}message-center{justify-content:center}.${prefix_class}message-success{background-color:#e1f3d8;border-color:#e1f3d8}.${prefix_class}message-success p,.${prefix_class}message-success .${prefix_class}message-close{color:#67c23a}.${prefix_class}message-success .${prefix_class}message-close:hover,.${prefix_class}message-success .${prefix_class}message-close:active{color:#67c23a}.${prefix_class}message-warning{background-color:#faecd8;border-color:#fdfce6}.${prefix_class}message-warning p,.${prefix_class}message-warning .${prefix_class}message-close{color:#e6a23c}.${prefix_class}message-warning .${prefix_class}message-close:hover,.${prefix_class}message-warning .${prefix_class}message-close:active{color:#e6a23c}.${prefix_class}message-error{background-color:#fef0f0;border-color:#fde2e2}.${prefix_class}message-error p,.${prefix_class}message-error .${prefix_class}message-close{color:#f56c6c}.${prefix_class}message-error .${prefix_class}message-close:hover,.${prefix_class}message-error .${prefix_class}message-close:active{color:#f56c6c}
`;
