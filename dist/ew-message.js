/*!
 * ewMeassage.js v0.1.8-beta.0
 * (c) 2023-2025 eveningwater 
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ewMessage = factory());
})(this, (function () { 'use strict';

    var ewMessageEnumType;
    (function (ewMessageEnumType) {
        ewMessageEnumType["success"] = "success";
        ewMessageEnumType["info"] = "info";
        ewMessageEnumType["warning"] = "warning";
        ewMessageEnumType["error"] = "error";
        ewMessageEnumType["loading"] = "loading";
    })(ewMessageEnumType || (ewMessageEnumType = {}));

    const typeMap = {
        success: ewMessageEnumType.success,
        info: ewMessageEnumType.info,
        warning: ewMessageEnumType.warning,
        error: ewMessageEnumType.error,
        loading: ewMessageEnumType.loading
    };
    const defaultMessageOption = {
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
    const utilAnimationRemoveClassNames = ['fadeOut', 'scaleUp'];
    const utilAnimationAddClassNames = ['fadeIn', 'scaleDown'];
    const baseTopUnit = 25;

    const successIcon = (prefix) => `<svg t="1695191725930" class="${prefix}message-icon ${prefix}message-success-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4394"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m193.194667 218.331428L447.21981 581.315048l-103.936-107.812572-52.662858 50.761143 156.379429 162.230857 310.662095-319.683047-52.467809-50.956191z" p-id="4395" fill="#1afa29"></path></svg>`;
    const warningIcon = (prefix) => `<svg t="1695191794405" class="${prefix}message-icon ${prefix}message-warning-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5405"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296z m32 440c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" p-id="5406" fill="#faad14"></path></svg>`;
    const errorIcon = (prefix) => `<svg t="1695191861829" class="${prefix}message-icon ${prefix}message-error-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6407"><path d="M512 64.303538c-247.25636 0-447.696462 200.440102-447.696462 447.696462 0 247.254314 200.440102 447.696462 447.696462 447.696462s447.696462-200.440102 447.696462-447.696462S759.25636 64.303538 512 64.303538zM710.491727 665.266709c12.491499 12.491499 12.489452 32.729425-0.002047 45.220924-6.246261 6.246261-14.429641 9.370415-22.611997 9.370415s-16.363689-3.121084-22.60995-9.366322L512 557.222971 358.730221 710.491727c-6.246261 6.246261-14.429641 9.366322-22.611997 9.366322s-16.365736-3.125177-22.611997-9.370415c-12.491499-12.491499-12.491499-32.729425 0-45.220924l153.268756-153.266709L313.50725 358.730221c-12.491499-12.491499-12.489452-32.729425 0.002047-45.220924s32.729425-12.495592 45.220924-0.004093l153.268756 153.268756 153.268756-153.268756c12.491499-12.491499 32.729425-12.487406 45.220924 0.004093s12.493545 32.729425 0.002047 45.220924L557.225017 512 710.491727 665.266709z" fill="#ff4d4f" p-id="6408"></path></svg>`;
    const infoIcon = (prefix) => `<svg t="1695191942528" class="${prefix}message-icon ${prefix}message-info-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7731" id="mx_n_1695191942529"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 448v384h128V448H448z m0-256v128h128V192H448z" fill="#1677ff" p-id="7732"></path></svg>`;
    const loadingIcon = (prefix) => `<svg viewBox="0 0 1024 1024" class="${prefix}message-icon ${prefix}message-loading-icon" focusable="false" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg>`;
    const closeIcon = (prefix) => `<svg t="1690189203554" class="${prefix}message-close-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2272" fill="currentColor"><path d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" p-id="2273"></path></svg>`;
    const typeIconMap = {
        success: successIcon,
        warning: warningIcon,
        info: infoIcon,
        error: errorIcon,
        loading: loadingIcon
    };

    const MESSAGE_WARNING_PREFIX = '[Message Warning]: ';
    const MESSAGE_TYPE_WARNING = `${MESSAGE_WARNING_PREFIX}Message type need not to pass!`;
    const MESSAGE_CLOSE_PARAM_WARNING = `${MESSAGE_WARNING_PREFIX}Message need a close time to auto close or a close button to close by yourself!`;
    const MESSAGE_CONTENT_PARAM_WARNING = `${MESSAGE_WARNING_PREFIX}Message need a value as content ,that is "content" property,otherwise Message will use the default content,that is empty string!`;
    const MESSAGE_CONTAINER_WARNING = `${MESSAGE_WARNING_PREFIX}Can not find the dom element,make sure to pass a correct dom element`;
    const MESSAGE_REMOVE_CLASSNAME_WARNING = `${MESSAGE_WARNING_PREFIX}RemoveClassName needs to be a string array`;
    const MESSAGE_STAERT_CLASSNAME_WARNING = `${MESSAGE_WARNING_PREFIX}startClassName needs to be a string array`;

    const warn$1 = (...v) => console.warn(...v);

    const isString = (v) => typeof v === "string";
    const isNumber = (v) => typeof v === "number" && !Number.isNaN(v);
    const isObject$1 = (v) => typeof v === "object" && !!v;
    const isArray = (v) => Array.isArray(v);
    const isFunction = (value) => typeof value === "function";
    const isDom = (el) => {
        if (isObject$1(HTMLElement)) {
            return el instanceof HTMLElement;
        }
        else {
            const isHTMLElement = isObject$1(el) && el.nodeType === 1 && isString(el.nodeName);
            return isHTMLElement || el instanceof HTMLCollection || el instanceof NodeList;
        }
    };
    const toArray = (v) => [].slice.call(v);
    const hasOwn$1 = (v, prop) => v.hasOwnProperty(prop);
    const $$ = (v, el = document) => el.querySelectorAll(v);
    const $ = (v, el = document) => el.querySelector(v);
    const create = (v) => document.createElement(v);
    const createElement = (temp) => document
        .createRange()
        .createContextualFragment(temp);
    const wrapperArrayValue = (v) => (Array.isArray(v) ? v : [v]);
    const addClass = (v, el) => el.classList.add(...wrapperArrayValue(v));
    const hasClass = (v, el) => el.classList.contains(v);
    const removeClass = (v, el) => el.classList.remove(...wrapperArrayValue(v));
    const on = (element, type, handler, useCapture = false) => {
        if (element && type && handler) {
            element.addEventListener(type, handler, useCapture);
        }
    };
    const off = (element, type, handler, useCapture = false) => {
        if (element && type && handler) {
            element.removeEventListener(type, handler, useCapture);
        }
    };
    const isRemoveNode = (item) => isDom(item) &&
        isDom(item.parentElement) &&
        isFunction(item.parentElement.removeChild);
    const removeNode = (item) => {
        if (!item) {
            return;
        }
        if (isRemoveNode(item)) {
            item.parentElement?.removeChild(item);
        }
        else {
            item.remove();
        }
    };

    var util = /*#__PURE__*/Object.freeze({
        __proto__: null,
        isString: isString,
        isNumber: isNumber,
        isObject: isObject$1,
        isArray: isArray,
        isFunction: isFunction,
        isDom: isDom,
        toArray: toArray,
        hasOwn: hasOwn$1,
        $$: $$,
        $: $,
        create: create,
        createElement: createElement,
        wrapperArrayValue: wrapperArrayValue,
        addClass: addClass,
        hasClass: hasClass,
        removeClass: removeClass,
        on: on,
        off: off,
        isRemoveNode: isRemoveNode,
        removeNode: removeNode,
        warn: warn$1
    });

    const normalizeOptions = (option) => {
        let messageOption = defaultMessageOption;
        if (isString(option)) {
            messageOption.content = option;
        }
        else if (isObject$1(option)) {
            messageOption = { ...messageOption, ...option };
        }
        const { duration, showClose, content, removeClassName, startClassName } = messageOption;
        if ((!isNumber(duration) || duration <= 0) && !showClose) {
            {
                warn$1(MESSAGE_CLOSE_PARAM_WARNING);
            }
            messageOption.showClose = true;
        }
        if (!isString(content) && true) {
            warn$1(MESSAGE_CONTENT_PARAM_WARNING);
        }
        if (!isArray(removeClassName)) {
            {
                warn$1(MESSAGE_REMOVE_CLASSNAME_WARNING);
            }
            messageOption.removeClassName = [];
        }
        if (!isArray(startClassName)) {
            {
                warn$1(MESSAGE_STAERT_CLASSNAME_WARNING);
            }
            messageOption.startClassName = [];
        }
        messageOption.removeClassName = messageOption.removeClassName.filter((className) => isString(className));
        messageOption.startClassName = messageOption.startClassName.filter((className) => isString(className));
        return messageOption;
    };
    const getOffsetTop = (top) => {
        if (isNumber(Number(top))) {
            return `${top}px`;
        }
        if (isString(top)) {
            const regExp = /[px|%|rem|em|vh|vw|ex|rem|ch|vmin|vmax]/g;
            if (isNumber(Number(top.replace(regExp, ""))) &&
                top) {
                return top;
            }
        }
        return baseTopUnit;
    };
    const handleAnimationNode = (el, classNameList, stylePrefix, existClassNames, callback) => {
        let res = classNameList;
        if (classNameList.length > 0) {
            const filterClassNameList = [];
            existClassNames.forEach((item) => {
                classNameList.forEach((className) => {
                    const pushClassName = item.includes(className)
                        ? `${stylePrefix}message-${className}`
                        : className;
                    filterClassNameList.push(pushClassName);
                });
            });
            filterClassNameList.forEach((className) => addClass(className, el));
            res = filterClassNameList;
        }
        on(el, "animationend", () => callback?.(res));
    };
    const checkContainer = (el) => {
        if (isDom(el)) {
            return el;
        }
        else if (isString(el)) {
            const container = $(el);
            if (!container) {
                {
                    warn$1(MESSAGE_CONTAINER_WARNING);
                }
                return document.body;
            }
            return container;
        }
        return document.body;
    };

    class Message {
        options;
        el;
        closeBtnEl;
        container;
        instances;
        constructor(options) {
            this.options = normalizeOptions(options);
            this.el = null;
            this.closeBtnEl = null;
            this.instances = null;
            this.container = checkContainer(this.options.container);
            this.render();
        }
        destroy() {
            if (this.el) {
                this.close([this.el], 0, true);
            }
        }
        render(opt) {
            this.options = Object.assign({}, this.options, opt);
            const { duration } = this.options;
            const { element: el, closeBtnEl } = this.createMessage();
            this.animationAddNode(el, this.container);
            this.instances = $$(".ew-message");
            this.setTop(this.instances);
            if (duration > 0) {
                this.close([el], duration);
            }
            if (closeBtnEl) {
                on(closeBtnEl, "click", () => this.close([el], 0));
            }
        }
        createMessage() {
            const { type, center, content, showTypeIcon, typeIcon, showClose, closeIcon: optionCloseIcon, } = this.options;
            const element = create("div");
            const baseClassnames = ["ew-message", `ew-message-${type}`];
            if (center) {
                baseClassnames.push("ew-message-center");
            }
            addClass(baseClassnames, element);
            const p = create("p");
            p.appendChild(createElement(content));
            if (showTypeIcon) {
                const icon = typeIcon ? typeIcon : typeIconMap[type || "info"]('ew-');
                element.appendChild(createElement(icon));
            }
            element.appendChild(p);
            if (showClose) {
                this.closeBtnEl = create("i");
                addClass(`ew-message-close`, this.closeBtnEl);
                this.closeBtnEl.appendChild(createElement(optionCloseIcon ? optionCloseIcon : closeIcon("ew-")));
                element.appendChild(this.closeBtnEl);
            }
            this.el = element;
            return {
                element,
                closeBtnEl: this.closeBtnEl,
            };
        }
        setTop(nodeList) {
            const nodes = toArray(nodeList);
            if (nodes.length === 0)
                return;
            const { top } = this.options;
            const height = nodes[0].offsetHeight;
            const getFinalTop = (i) => `top:${getOffsetTop(top) !== baseTopUnit
            ? top
            : `${baseTopUnit * (i + 1) + height * i}px`};`;
            for (let i = 0, len = nodes.length; i < len; i++) {
                nodes[i].setAttribute("style", getFinalTop(i));
            }
        }
        animationAddNode(el, container) {
            const { startClassName } = this.options;
            if (startClassName) {
                handleAnimationNode(el, startClassName, "ew-", utilAnimationAddClassNames, (res) => {
                    res.forEach((className) => removeClass(className, el));
                });
            }
            container.appendChild(el);
        }
        animationRemoveNode(el, isDestroy = false) {
            const removeHandler = () => new Promise((resolve) => {
                const { removeClassName } = this.options;
                if (!isDestroy && removeClassName.length > 0) {
                    handleAnimationNode(el, removeClassName, "ew-", utilAnimationRemoveClassNames, () => {
                        removeNode(el);
                        resolve(true);
                    });
                }
                else {
                    removeNode(el);
                    resolve(true);
                }
            });
            removeHandler().then(() => {
                this.el = null;
                this.closeBtnEl = null;
                this.instances = $$('.ew-message', this.container);
                if (this.instances && this.instances.length > 0) {
                    this.setTop(this.instances);
                }
            });
        }
        close(nodes = [], time, isDestroy = false) {
            const delay = Math.min(10000, time);
            const closeHandler = () => {
                nodes.forEach((item) => {
                    if (isRemoveNode(item)) {
                        this.animationRemoveNode(item, isDestroy);
                    }
                });
            };
            if (isDestroy) {
                closeHandler();
            }
            else {
                setTimeout(closeHandler, delay);
            }
        }
    }

    const { hasOwn, isObject, warn } = util;
    const ewMessage = (options) => new Message(options);
    ewMessage.util = util;
    for (let key in typeMap) {
        ewMessage[key] = (option) => {
            const messageOption = normalizeOptions(option);
            if (isObject(option) &&
                hasOwn(option, 'type') &&
                true) {
                warn(MESSAGE_TYPE_WARNING);
            }
            return new Message({ ...messageOption, type: key });
        };
    }

    return ewMessage;

}));
