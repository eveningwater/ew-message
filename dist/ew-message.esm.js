/*!
 * ewMeassage.js v0.0.7
 * (c) 2023-2023 eveningwater 
 * Released under the MIT License.
 */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
};
var defaultMessageOption = {
    content: '',
    center: false,
    type: 'info',
    duration: 100,
    showClose: true,
    stylePrefix: 'ew-',
    maxDuration: 10000
};
var getMessageStyle = function (prefix_class) {
    if (prefix_class === void 0) { prefix_class = 'ew-'; }
    return "\n.".concat(prefix_class, "message{min-width:300px;border:1px solid #ebeef5;position:fixed;left:50%;background-color:#edf2fc;transform:translateX(-50%);display:flex;align-items:center;padding:10px 15px;overflow:hidden;transition:transform 0.4s;border-radius:4px;top:25px;z-index:10001;box-sizing:border-box;margin:0}.").concat(prefix_class, "message *{box-sizing:border-box;margin:0;padding:0}.").concat(prefix_class, "message p{padding-right:15px;line-height:1;font-size:14px;color:#909399}.").concat(prefix_class, "message-close{position:absolute;top:50%;right:15px;transform:translateY(-50%);cursor:pointer;color:#909399;font-size:16px;font-style:normal}.").concat(prefix_class, "message-close:hover,.").concat(prefix_class, "message-close:active{color:#909399}.").concat(prefix_class, "message-center{justify-content:center}.").concat(prefix_class, "message-success{background-color:#e1f3d8;border-color:#e1f3d8}.").concat(prefix_class, "message-success p,.").concat(prefix_class, "message-success .").concat(prefix_class, "message-close{color:#67c23a}.").concat(prefix_class, "message-success .").concat(prefix_class, "message-close:hover,.").concat(prefix_class, "message-success .").concat(prefix_class, "message-close:active{color:#67c23a}.").concat(prefix_class, "message-warning{background-color:#faecd8;border-color:#fdfce6}.").concat(prefix_class, "message-warning p,.").concat(prefix_class, "message-warning .").concat(prefix_class, "message-close{color:#e6a23c}.").concat(prefix_class, "message-warning .").concat(prefix_class, "message-close:hover,.").concat(prefix_class, "message-warning .").concat(prefix_class, "message-close:active{color:#e6a23c}.").concat(prefix_class, "message-error{background-color:#fef0f0;border-color:#fde2e2}.").concat(prefix_class, "message-error p,.").concat(prefix_class, "message-error .").concat(prefix_class, "message-close{color:#f56c6c}.").concat(prefix_class, "message-error .").concat(prefix_class, "message-close:hover,.").concat(prefix_class, "message-error .").concat(prefix_class, "message-close:active{color:#f56c6c}\n");
};

var util = Object.create(null);
util.isFunction = function (value) { return typeof value === 'function'; };
util.isDom = function (el) {
    return typeof HTMLElement === 'object'
        ? el instanceof HTMLElement
        : (el &&
            typeof el === 'object' &&
            el instanceof Node &&
            el.nodeType === 1 &&
            typeof el.nodeName === 'string') ||
            el instanceof HTMLCollection ||
            el instanceof NodeList;
};
util.warn = function (v) { return console.warn(v); };
util.toArray = function (v) { return [].slice.call(v); };
util.isObject = function (v) { return typeof v === 'object' && !!v; };
util.isString = function (v) { return typeof v === 'string'; };
util.isNumber = function (v) { return typeof v === 'number' && !Number.isNaN(v); };
util.hasOwn = function (v, prop) { return v.hasOwnProperty(prop); };
util.$$ = function (v, el) {
    if (el === void 0) { el = document; }
    return el.querySelectorAll(v);
};
util.$ = function (v, el) {
    if (el === void 0) { el = document; }
    return el.querySelector(v);
};

var normalizeOptions = function (option) {
    var messageOption = defaultMessageOption;
    if (typeof option === 'string') {
        messageOption.content = option;
    }
    else if (typeof option === 'object' && !!option) {
        messageOption = __assign(__assign({}, messageOption), option);
    }
    return messageOption;
};
var addMessageStyle = function (prefix_class, style) {
    if (prefix_class === void 0) { prefix_class = 'ew-'; }
    return new Promise(function (resolve) {
        var cssText = style || getMessageStyle(prefix_class);
        var styleInject = function (css, ref) {
            if (ref === void 0)
                ref = {};
            var insertAt = ref.insertAt;
            if (!css || typeof document === 'undefined')
                return;
            var head = document.head || util.$('head');
            var style = document.createElement('style');
            style.type = 'text/css';
            if (insertAt === 'top') {
                if (head.firstChild) {
                    head.insertBefore(style, head.firstChild);
                }
                else {
                    head.appendChild(style);
                }
            }
            else {
                head.appendChild(style);
            }
            style.appendChild(document.createTextNode(css));
            resolve(true);
        };
        styleInject(cssText);
    });
};
var validateHasStyle = function () {
    var isHasStyle = false;
    var allLinks = util.$$('link');
    allLinks.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === null || href === void 0 ? void 0 : href.includes('ew-message')) {
            isHasStyle = true;
        }
    });
    return isHasStyle;
};
var validateAutoHasStyle = function (stylePrefix) {
    var isHasStyle = false;
    var allStyles = util.$$('style');
    allStyles.forEach(function (style) {
        var text = style.textContent;
        if (text === getMessageStyle(stylePrefix)) {
            isHasStyle = true;
        }
    });
    return isHasStyle;
};

var MESSAGE_WARNING_PREFIX = '[Message Warning]: ';
var MESSAGE_TYPE_WARNING = MESSAGE_WARNING_PREFIX + 'Message type need not to pass!';
var MESSAGE_CLOSE_PARAM_WARNING = MESSAGE_WARNING_PREFIX +
    'Message need a close time to auto close or a close button to close by yourself!';
var MESSAGE_CONTENT_PARAM_WARNING = MESSAGE_WARNING_PREFIX +
    'Message need a value as content ,that is "content" property,otherwise Message will use the default content,that is empty string!';
var MESSAGE_CLOSE_DURATION_WARNING = MESSAGE_WARNING_PREFIX +
    '"Duration" property value is not a number,make sure to use a number';
var MESSAGE_CLOSE_MAX_DURATION_WARNING = MESSAGE_WARNING_PREFIX +
    '"maxDuration" property value is not a number,make sure to use a number';

var Message = /** @class */ (function () {
    function Message(options) {
        this.options = this.normalizeOptions(options);
        this.el = null;
        this.closeBtnEl = null;
        var isHasStyle = this.validateHasStyle();
        if (isHasStyle) {
            this.options.stylePrefix = 'ew-';
        }
        if (!isHasStyle && !validateAutoHasStyle(this.options.stylePrefix)) {
            this.addMessageStyle(this.options.stylePrefix);
        }
        this.options.immediate && this.render(this.options);
    }
    Message.prototype.success = function (options) {
        this.renderTypedMessage(__assign(__assign({}, options), { type: typeMap.success }));
    };
    Message.prototype.warning = function (options) {
        this.renderTypedMessage(__assign(__assign({}, options), { type: typeMap.warning }));
    };
    Message.prototype.error = function (options) {
        this.renderTypedMessage(__assign(__assign({}, options), { type: typeMap.error }));
    };
    Message.prototype.info = function (options) {
        this.renderTypedMessage(__assign(__assign({}, options), { type: typeMap.info }));
    };
    Message.prototype.renderTypedMessage = function (options) {
        var mergedOptions = __assign(__assign({}, this.options), options);
        this.render(mergedOptions);
    };
    Message.prototype.destroy = function () {
        if (this.el) {
            this.close(this.el, 0);
        }
    };
    Message.prototype.validateHasStyle = function () {
        return validateHasStyle();
    };
    Message.prototype.normalizeOptions = function (options) {
        return normalizeOptions(options);
    };
    Message.prototype.getMessageType = function () {
        return typeMap;
    };
    Message.prototype.getDefaultOption = function () {
        return defaultMessageOption;
    };
    Message.prototype.addMessageStyle = function (prefix_class, style) {
        return addMessageStyle(prefix_class, style);
    };
    Message.prototype.render = function (options) {
        var _this = this;
        if ((!util.isNumber(options.duration) || options.duration <= 0) && !options.showClose) {
            {
                util.warn(MESSAGE_CLOSE_PARAM_WARNING);
            }
            options.showClose = true;
        }
        if (!options.content && true) {
            util.warn(MESSAGE_CONTENT_PARAM_WARNING);
        }
        document.body.appendChild(this.create(options));
        this.setTop(util.$$('.' + this.options.stylePrefix + 'message'));
        if (util.isNumber(options.duration) &&
            options.duration > 0 &&
            this.el instanceof HTMLElement) {
            this.close(this.el, options.duration);
        }
        if (this.closeBtnEl) {
            this.closeBtnEl.onclick = function (e) {
                var target = e.target;
                if (target && target.parentElement instanceof HTMLElement) {
                    _this.close(target.parentElement, 0);
                }
            };
        }
    };
    Message.prototype.create = function (options) {
        var element = document.createElement('div');
        element.className = "".concat(this.options.stylePrefix, "message ").concat(this.options.stylePrefix, "message-").concat(options.type);
        if (options.center) {
            element.classList.add(this.options.stylePrefix + 'message-center');
        }
        var p = document.createElement('p');
        p.innerHTML = options.content;
        element.appendChild(p);
        if (options.showClose) {
            this.closeBtnEl = document.createElement('i');
            this.closeBtnEl.classList.add(this.options.stylePrefix + 'message-close');
            this.closeBtnEl.innerHTML = '&times;';
            element.appendChild(this.closeBtnEl);
        }
        this.el = element;
        return element;
    };
    Message.prototype.setTop = function (element) {
        if (!element || !element.length)
            return;
        var height = element[0].offsetHeight;
        for (var i = 0, len = element.length; i < len; i++) {
            var item = element[i];
            item.setAttribute('style', 'top:' + (25 * (i + 1) + height * i) + 'px;');
        }
    };
    Message.prototype.close = function (element, time) {
        var _this = this;
        if (!util.isNumber(time)) {
            util.warn(MESSAGE_CLOSE_DURATION_WARNING);
        }
        if (!util.isNumber(this.options.maxDuration)) {
            util.warn(MESSAGE_CLOSE_MAX_DURATION_WARNING);
        }
        var normalizeTime = !util.isNumber(time) || time <= 0 ? 100 : time;
        var maxDuration = this.options.maxDuration || 10000;
        var normalizeMaxDuration = !util.isNumber(maxDuration) || maxDuration <= normalizeTime ? normalizeTime : maxDuration;
        setTimeout(function () {
            var _a, _b;
            if (element instanceof NodeList || element instanceof HTMLCollection) {
                util.toArray(element).forEach(function (item) {
                    var _a, _b;
                    if (util.isDom(item) &&
                        util.isDom(item.parentElement) &&
                        util.isFunction((_a = item.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild)) {
                        (_b = item.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(item);
                    }
                });
            }
            else {
                if (util.isDom(element) &&
                    util.isDom(element.parentElement) &&
                    util.isFunction((_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild)) {
                    (_b = element.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(element);
                }
            }
            _this.setTop(util.$$('.' + _this.options.stylePrefix + 'message'));
        }, Math.min(normalizeTime < 1000 ? normalizeTime * 10 : normalizeTime, normalizeMaxDuration));
    };
    return Message;
}());

var ewMessage = function (options) { return new Message(options); };
ewMessage.util = util;
var _loop_1 = function (key) {
    ewMessage[key] = function (option) {
        var messageOption = normalizeOptions(option);
        if (util.isObject(option) &&
            util.hasOwn(option, 'type') &&
            true) {
            util.warn(MESSAGE_TYPE_WARNING);
        }
        return new Message(__assign(__assign({}, messageOption), { type: key }));
    };
};
for (var key in typeMap) {
    _loop_1(key);
}

export { ewMessage as default };
