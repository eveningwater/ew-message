/*!
 * ewMeassage.js v0.1.2
 * (c) 2023-2024 eveningwater 
 * Released under the MIT License.
 */
const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
};
const defaultMessageOption = {
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
const getMessageStyle = (prefix_class = 'ew-') => `
.${prefix_class}message-fadeOut{animation:fadeOut 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)}@keyframes fadeOut{0%{opacity:1}25%{opacity:0.8}50%{opacity:0.6}75%{opacity:0.4}100%{opacity:0}}.${prefix_class}message-scaleDown{animation:scaleDown 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)}@keyframes scaleDown{0%{transform:scale(1)}25%{transform:scale(0.8)}50%{transform:scale(0.6)}75%{transform:scale(0.4)}100%{transform:scale(0)}}.${prefix_class}message-fadeIn{animation:fadeIn 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)}@keyframes fadeIn{0%{opacity:1}25%{opacity:0.8}50%{opacity:0.6}75%{opacity:0.4}100%{opacity:0}}.${prefix_class}message-scaleUp{animation:scaleUp 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)}@keyframes scaleUp{0%{transform:scale(1)}25%{transform:scale(0.8)}50%{transform:scale(0.6)}75%{transform:scale(0.4)}100%{transform:scale(0)}}.${prefix_class}message{min-width:300px;border:1px solid #ebeef5;position:fixed;left:50%;background-color:#edf2fc;transform:translateX(-50%);display:flex;align-items:center;padding:10px 15px;overflow:hidden;transition:transform 0.4s;border-radius:4px;top:25px;box-sizing:border-box;margin:0;z-index:1000}.${prefix_class}message-icon{width:1em;height:1em;margin-right:5px}.${prefix_class}message p{padding:0;padding-right:15px;line-height:1;font-size:14px;color:#909399;margin:0}.${prefix_class}message-close{position:absolute;top:50%;right:5px;transform:translateY(-50%);cursor:pointer;color:#909399;font-size:20px;font-style:normal}.${prefix_class}message-close:hover,.${prefix_class}message-close:active{color:#909399}.${prefix_class}message-close-icon{width:1em;height:1em}.${prefix_class}message-center{justify-content:center}.${prefix_class}message-success{background-color:#e1f3d8;border-color:#e1f3d8}.${prefix_class}message-success p,.${prefix_class}message-success .${prefix_class}message-close{color:#67c23a}.${prefix_class}message-success .${prefix_class}message-close:hover,.${prefix_class}message-success .${prefix_class}message-close:active{color:#67c23a}.${prefix_class}message-warning{background-color:#faecd8;border-color:#fdfce6}.${prefix_class}message-warning p,.${prefix_class}message-warning .${prefix_class}message-close{color:#e6a23c}.${prefix_class}message-warning .${prefix_class}message-close:hover,.${prefix_class}message-warning .${prefix_class}message-close:active{color:#e6a23c}.${prefix_class}message-error{background-color:#fef0f0;border-color:#fde2e2}.${prefix_class}message-error p,.${prefix_class}message-error .${prefix_class}message-close{color:#f56c6c}.${prefix_class}message-error .${prefix_class}message-close:hover,.${prefix_class}message-error .${prefix_class}message-close:active{color:#f56c6c};
`;
const utilAnimationRemoveClassNames = ['fadeOut', 'scaleUp'];
const utilAnimationAddClassNames = ['fadeIn', 'scaleDown'];
const baseTopUnit = 25;

const successIcon = (prefix) => `<svg t="1695191725930" class="${prefix}message-icon ${prefix}message-success-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4394"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m193.194667 218.331428L447.21981 581.315048l-103.936-107.812572-52.662858 50.761143 156.379429 162.230857 310.662095-319.683047-52.467809-50.956191z" p-id="4395" fill="#1afa29"></path></svg>`;
const warningIcon = (prefix) => `<svg t="1695191794405" class="${prefix}message-icon ${prefix}message-warning-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5405"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296z m32 440c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" p-id="5406" fill="#faad14"></path></svg>`;
const errorIcon = (prefix) => `<svg t="1695191861829" class="${prefix}message-icon ${prefix}message-error-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6407"><path d="M512 64.303538c-247.25636 0-447.696462 200.440102-447.696462 447.696462 0 247.254314 200.440102 447.696462 447.696462 447.696462s447.696462-200.440102 447.696462-447.696462S759.25636 64.303538 512 64.303538zM710.491727 665.266709c12.491499 12.491499 12.489452 32.729425-0.002047 45.220924-6.246261 6.246261-14.429641 9.370415-22.611997 9.370415s-16.363689-3.121084-22.60995-9.366322L512 557.222971 358.730221 710.491727c-6.246261 6.246261-14.429641 9.366322-22.611997 9.366322s-16.365736-3.125177-22.611997-9.370415c-12.491499-12.491499-12.491499-32.729425 0-45.220924l153.268756-153.266709L313.50725 358.730221c-12.491499-12.491499-12.489452-32.729425 0.002047-45.220924s32.729425-12.495592 45.220924-0.004093l153.268756 153.268756 153.268756-153.268756c12.491499-12.491499 32.729425-12.487406 45.220924 0.004093s12.493545 32.729425 0.002047 45.220924L557.225017 512 710.491727 665.266709z" fill="#ff4d4f" p-id="6408"></path></svg>`;
const infoIcon = (prefix) => `<svg t="1695191942528" class="${prefix}message-icon ${prefix}message-info-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7731" id="mx_n_1695191942529"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 448v384h128V448H448z m0-256v128h128V192H448z" fill="#1677ff" p-id="7732"></path></svg>`;
const closeIcon = (prefix) => `<svg t="1690189203554" class="${prefix}message-close-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2272" fill="currentColor"><path d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" p-id="2273"></path></svg>`;
const typeIconMap = {
    success: successIcon,
    warning: warningIcon,
    info: infoIcon,
    error: errorIcon
};

const util = Object.create(null);
util.isFunction = (value) => typeof value === "function";
util.isDom = (el) => typeof HTMLElement === "object"
    ? el instanceof HTMLElement
    : (el &&
        typeof el === "object" &&
        el instanceof Node &&
        el.nodeType === 1 &&
        typeof el.nodeName === "string") ||
        el instanceof HTMLCollection ||
        el instanceof NodeList;
util.warn = (v) => console.warn(v);
util.toArray = (v) => [].slice.call(v);
util.isObject = (v) => typeof v === "object" && !!v;
util.isString = (v) => typeof v === "string";
util.isNumber = (v) => typeof v === "number" && !Number.isNaN(v);
util.isArray = (v) => {
    if (Array.isArray) {
        return Array.isArray(v);
    }
    else {
        return Object.prototype.toString.call(v).slice(8, -1) === "array";
    }
};
util.hasOwn = (v, prop) => v.hasOwnProperty(prop);
util.$$ = (v, el = document) => el.querySelectorAll(v);
util.$ = (v, el = document) => el.querySelector(v);
util.create = (v) => document.createElement(v);
util.createElement = (temp) => {
    const div = document.createElement("div");
    div.innerHTML = temp;
    return div.firstElementChild;
};
util.addClass = (v, el) => el.classList.add(v);
util.removeClass = (v, el) => el.classList.remove(v);
util.on = (element, type, handler, useCapture = false) => {
    if (element && type && handler) {
        element.addEventListener(type, handler, useCapture);
    }
};
util.off = (element, type, handler, useCapture = false) => {
    if (element && type && handler) {
        element.removeEventListener(type, handler, useCapture);
    }
};
util.isRemoveNode = (item) => util.isDom(item) &&
    util.isDom(item.parentElement) &&
    util.isFunction(item.parentElement?.removeChild);

const normalizeOptions = (option) => {
    let messageOption = defaultMessageOption;
    if (typeof option === "string") {
        messageOption.content = option;
    }
    else if (typeof option === "object" && !!option) {
        messageOption = { ...messageOption, ...option };
    }
    return messageOption;
};
const addMessageStyle = (prefix_class = "ew-", style) => new Promise((resolve) => {
    const cssText = style || getMessageStyle(prefix_class);
    const styleInject = (css, ref) => {
        if (ref === void 0)
            ref = {};
        const insertAt = ref.insertAt;
        if (!css || typeof document === "undefined")
            return;
        const head = document.head || util.$("head");
        const style = document.createElement("style");
        style.type = "text/css";
        if (insertAt === "top") {
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
const validateHasStyle = () => {
    let isHasStyle = false;
    const allLinks = util.$$("link");
    allLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href?.includes("ew-message")) {
            isHasStyle = true;
        }
    });
    return isHasStyle;
};
const validateAutoHasStyle = (stylePrefix) => {
    let isHasStyle = false;
    const allStyles = util.$$("style");
    allStyles.forEach((style) => {
        const text = style.textContent;
        if (text === getMessageStyle(stylePrefix)) {
            isHasStyle = true;
        }
    });
    return isHasStyle;
};
const getOffsetTop = (top) => {
    if (util.isNumber(top)) {
        return `${top}px`;
    }
    if (util.isString(top)) {
        const regExp = /[px|%|rem|em|vh|vw|ex|rem|ch|vmin|vmax]/g;
        if (util.isNumber(Number(top.replace(regExp, ""))) &&
            top) {
            return top;
        }
    }
    return baseTopUnit;
};
const handleAnimationNode = (el, className, classNameSymbol, stylePrefix, existClassNames, callback) => {
    const classNameList = className?.split(classNameSymbol);
    let res = className;
    if (classNameList.length > 1) {
        const filterClassNameList = [];
        existClassNames.forEach((item) => {
            classNameList.forEach((className) => {
                const pushClassName = item.includes(className)
                    ? `${stylePrefix}message-${className}`
                    : className;
                filterClassNameList.push(pushClassName);
            });
        });
        filterClassNameList.forEach((className) => util.addClass(className, el));
        res = filterClassNameList;
    }
    else {
        let filterClassName = className;
        if (existClassNames.some((item) => item.includes(className))) {
            filterClassName = `${stylePrefix}message-${className}`;
        }
        util.addClass(filterClassName, el);
        res = filterClassName;
    }
    util.on(el, "animationend", () => callback?.(res));
};

const MESSAGE_WARNING_PREFIX = '[Message Warning]: ';
const MESSAGE_TYPE_WARNING = MESSAGE_WARNING_PREFIX + 'Message type need not to pass!';
const MESSAGE_CLOSE_PARAM_WARNING = MESSAGE_WARNING_PREFIX +
    'Message need a close time to auto close or a close button to close by yourself!';
const MESSAGE_CONTENT_PARAM_WARNING = MESSAGE_WARNING_PREFIX +
    'Message need a value as content ,that is "content" property,otherwise Message will use the default content,that is empty string!';
const MESSAGE_CLOSE_DURATION_WARNING = MESSAGE_WARNING_PREFIX +
    '"Duration" property value is not a number,make sure to use a number';
const MESSAGE_CLOSE_MAX_DURATION_WARNING = MESSAGE_WARNING_PREFIX +
    '"maxDuration" property value is not a number,make sure to use a number';
const MESSAGE_CONTAINER_WARNING = MESSAGE_WARNING_PREFIX +
    'Can not find the dom element,make sure to pass a correct dom element';

class Message {
    constructor(options) {
        this.options = this.normalizeOptions(options);
        this.el = null;
        this.closeBtnEl = null;
        let isHasStyle = this.validateHasStyle();
        if (isHasStyle) {
            this.options.stylePrefix = "ew-";
        }
        if (!isHasStyle && !validateAutoHasStyle(this.options.stylePrefix)) {
            this.addMessageStyle(this.options.stylePrefix);
        }
        this.addZIndex();
        this.options.immediate && this.render(this.options);
    }
    addZIndex() {
        const { messageZIndex, stylePrefix } = this.options;
        if (util.isNumber(messageZIndex) && messageZIndex > 0) {
            this.addMessageStyle(stylePrefix, `.${stylePrefix}message{z-index:${messageZIndex}}`);
        }
    }
    destroy() {
        if (this.el) {
            this.close(this.el, 0, true);
        }
    }
    validateHasStyle() {
        return validateHasStyle();
    }
    normalizeOptions(options) {
        return normalizeOptions(options);
    }
    getMessageType() {
        return typeMap;
    }
    getDefaultOption() {
        return defaultMessageOption;
    }
    addMessageStyle(prefix_class, style) {
        return addMessageStyle(prefix_class, style);
    }
    checkContainer(el) {
        if (util.isDom(el)) {
            return el;
        }
        else if (util.isString(el)) {
            const container = util.$(el);
            if (!container) {
                {
                    util.warn(MESSAGE_CONTAINER_WARNING);
                }
                return document.body;
            }
            return container;
        }
        return document.body;
    }
    render(opt) {
        const options = opt || this.options;
        const { duration, showClose, content, container: optionContainer, stylePrefix, } = options;
        if ((!util.isNumber(duration) || duration <= 0) && !showClose) {
            {
                util.warn(MESSAGE_CLOSE_PARAM_WARNING);
            }
            options.showClose = true;
        }
        if (!util.isString(content) && true) {
            util.warn(MESSAGE_CONTENT_PARAM_WARNING);
        }
        const container = this.checkContainer(optionContainer);
        const el = this.create(options);
        this.animationAddNode(el, container);
        this.setTop(util.$$("." + stylePrefix + "message", container));
        if (util.isNumber(duration) &&
            duration > 0 &&
            this.el instanceof HTMLElement) {
            this.close(this.el, duration);
        }
        if (this.closeBtnEl) {
            util.on(this.closeBtnEl, "click", () => {
                this.close(this.closeBtnEl.parentElement, 0);
            });
        }
    }
    create(options) {
        const { stylePrefix, type, center, content, showTypeIcon, typeIcon, showClose, closeIcon: optionCloseIcon, } = options || this.options;
        let element = util.create("div");
        element.className = `${stylePrefix}message ${stylePrefix}message-${type}`;
        if (center) {
            util.addClass(stylePrefix + "message-center", element);
        }
        const p = util.create("p");
        p.insertAdjacentHTML('afterbegin', content);
        if (showTypeIcon) {
            const icon = typeIcon
                ? typeIcon
                : typeIconMap[type || "info"](stylePrefix);
            element.appendChild(util.createElement(icon));
        }
        element.appendChild(p);
        if (showClose) {
            this.closeBtnEl = util.create("i");
            util.addClass(`${stylePrefix}message-close`, this.closeBtnEl);
            this.closeBtnEl?.appendChild(util.createElement(optionCloseIcon
                ? optionCloseIcon
                : closeIcon(stylePrefix)));
            element.appendChild(this.closeBtnEl);
        }
        this.el = element;
        return element;
    }
    setTop(element) {
        if (!element || !element.length)
            return;
        const { top } = this.options;
        const height = element[0].offsetHeight;
        for (let i = 0, len = element.length; i < len; i++) {
            const item = element[i];
            item.setAttribute("style", `top:${getOffsetTop(top) !== baseTopUnit
                ? top
                : `${baseTopUnit * (i + 1) + height * i}px`};`);
        }
    }
    animationAddNode(el, container) {
        const { startClassName, stylePrefix, startClassNameSymbol } = this.options;
        if (startClassName) {
            handleAnimationNode(el, startClassName, startClassNameSymbol, stylePrefix, utilAnimationAddClassNames, (res) => {
                if (util.isArray(res)) {
                    res.forEach((className) => util.removeClass(className, el));
                }
                else {
                    util.removeClass(res, el);
                }
            });
        }
        container.appendChild(el);
    }
    animationRemoveNode(el, isDestroy = false) {
        const { removeClassName, stylePrefix, removeClassNameSymbol } = this.options;
        if (removeClassName && !isDestroy) {
            handleAnimationNode(el, removeClassName, removeClassNameSymbol, stylePrefix, utilAnimationRemoveClassNames, () => el.parentElement?.removeChild(el));
        }
        else {
            el.parentElement?.removeChild(el);
        }
    }
    close(element, time, isDestroy = false) {
        if ( !util.isNumber(time)) {
            util.warn(MESSAGE_CLOSE_DURATION_WARNING);
        }
        if ( !util.isNumber(this.options.maxDuration)) {
            util.warn(MESSAGE_CLOSE_MAX_DURATION_WARNING);
        }
        const normalizeTime = !util.isNumber(time) || time <= 0 ? 100 : time;
        const maxDuration = this.options.maxDuration || 10000;
        const normalizeMaxDuration = !util.isNumber(maxDuration) || maxDuration <= normalizeTime
            ? normalizeTime
            : maxDuration;
        const container = this.checkContainer(this.options.container);
        const delay = Math.min(normalizeTime < 1000 ? normalizeTime * 10 : normalizeTime, normalizeMaxDuration);
        const closeHandler = () => {
            if (element instanceof NodeList || element instanceof HTMLCollection) {
                util.toArray(element).forEach((item) => {
                    if (util.isRemoveNode(item)) {
                        this.animationRemoveNode(item, isDestroy);
                    }
                });
            }
            else {
                if (util.isRemoveNode(element)) {
                    this.animationRemoveNode(element, isDestroy);
                }
            }
            this.setTop(util.$$("." + this.options.stylePrefix + "message", container));
        };
        if (isDestroy) {
            closeHandler();
        }
        else {
            setTimeout(closeHandler, delay);
        }
    }
}

// import './styles/index.scss';
const ewMessage = (options) => new Message(options);
ewMessage.util = util;
for (let key in typeMap) {
    ewMessage[key] = (option) => {
        const messageOption = normalizeOptions(option);
        if (util.isObject(option) &&
            util.hasOwn(option, 'type') &&
            true) {
            util.warn(MESSAGE_TYPE_WARNING);
        }
        return new Message({ ...messageOption, type: key });
    };
}

export default ewMessage;
