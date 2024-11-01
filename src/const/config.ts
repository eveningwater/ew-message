import { ewMessageEnumType } from "./enum";
import { ewMessageOption } from "./options";

export type ewMessageType = {
  [prop in ewMessageEnumType]: string;
};

export const typeMap: ewMessageType = {
  success: ewMessageEnumType.success,
  info: ewMessageEnumType.info,
  warning: ewMessageEnumType.warning,
  error: ewMessageEnumType.error,
  loading: ewMessageEnumType.loading
};
export const defaultMessageOption: ewMessageOption = {
  content: '',
  center: false,
  type: 'info',
  duration: 2000,
  showClose: true,
  showTypeIcon: true,
  container: document.body,
  removeClassName: [],
  startClassName: []
};

export const utilAnimationRemoveClassNames = ['fadeOut', 'scaleUp'];
export const utilAnimationAddClassNames = ['fadeIn', 'scaleDown'];

export const baseTopUnit = 25;
