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

export const defaultMessageOption: Readonly<ewMessageOption> = Object.freeze({
  content: '',
  center: false,
  type: 'info',
  duration: 2000,
  showClose: true,
  showTypeIcon: true,
  container: document.body,
  removeClassName: [],
  startClassName: []
});

export const utilAnimationRemoveClassNames = Object.freeze(['fadeOut', 'scaleUp']);
export const utilAnimationAddClassNames = Object.freeze(['fadeIn', 'scaleDown']);

export const baseTopUnit = 25;
