import { Position, ewMessageEnumType } from "./enum";
import { ewMessageOption } from "./options";

export type ewMessageType = {
  [prop in ewMessageEnumType]: string;
};

export const typeMap: ewMessageType = {
  success: ewMessageEnumType.success,
  info: ewMessageEnumType.info,
  warning: ewMessageEnumType.warning,
  error: ewMessageEnumType.error
};
export const defaultMessageOption: ewMessageOption = {
  content: '',
  center: false,
  type: 'info',
  duration: 100,
  showClose: true,
  maxDuration: 10000,
  showTypeIcon: true,
  immediate: true,
  container: document.body,
  removeClassName: '',
  removeClassNameSymbol: ' ',
  startClassName: '',
  startClassNameSymbol: ' ',
  position: Position.FIXED
};

export const utilAnimationRemoveClassNames = ['fadeOut', 'scaleUp'];
export const utilAnimationAddClassNames = ['fadeIn', 'scaleDown'];

export const baseTopUnit = 25;

export const positionList = Object.keys(Position).reduce<string []>((res, key) => {
  res.push(Position[key]);
  return res;
}, []);