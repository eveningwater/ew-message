export const MESSAGE_WARNING_PREFIX = '[Message Warning]: ';
export const MESSAGE_TYPE_WARNING =
  MESSAGE_WARNING_PREFIX + 'Message type need not to pass!';
export const MESSAGE_CLOSE_PARAM_WARNING =
  MESSAGE_WARNING_PREFIX +
  'Message need a close time to auto close or a close button to close by yourself!';
export const MESSAGE_CONTENT_PARAM_WARNING =
  MESSAGE_WARNING_PREFIX +
  'Message need a value as content ,that is "content" property,otherwise Message will use the default content,that is empty string!';
export const MESSAGE_CLOSE_DURATION_WARNING =
  MESSAGE_WARNING_PREFIX +
  '"Duration" property value is not a number,make sure to use a number';
export const MESSAGE_CLOSE_MAX_DURATION_WARNING =
  MESSAGE_WARNING_PREFIX +
  '"maxDuration" property value is not a number,make sure to use a number';
export const MESSAGE_CONTAINER_WARNING =
  MESSAGE_WARNING_PREFIX +
  'Can not find the dom element,make sure to pass a correct dom element';
