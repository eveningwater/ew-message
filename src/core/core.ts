import {
  baseTopUnit,
  utilAnimationAddClassNames,
  utilAnimationRemoveClassNames,
} from "../const/config";
import { closeIcon, typeIconMap } from "../const/icon";
import {
  checkContainer,
  getOffsetTop,
  handleAnimationNode,
  normalizeOptions,
} from "./method";
import { $$, on,addClass, createElement, isRemoveNode, create, removeClass, removeNode, toArray } from "../utils/util";
import { ewMessageOption } from "../const/options";

export class Message {
  options: Required<ewMessageOption>;
  el: HTMLElement | null;
  closeBtnEl: HTMLElement | null;
  container: HTMLElement;
  instances: NodeListOf<HTMLDivElement> | null;
  constructor(options: ewMessageOption | string) {
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
  render(opt?: ewMessageOption) {
    this.options = Object.assign({}, this.options, opt);
    const { duration } = this.options;
    const { element: el, closeBtnEl } = this.createMessage();
    this.instances = $$(".ew-message", this.container) as NodeListOf<HTMLDivElement>;
    this.animationAddNode(el, this.container);
    this.setTop(this.instances);
    if (duration > 0) {
      this.close([el], duration);
    }
    if (closeBtnEl) {
      on(closeBtnEl, "click", () => this.close([el], 0));
    }
  }
  createMessage() {
    const {
      type,
      center,
      content,
      showTypeIcon,
      typeIcon,
      showClose,
      closeIcon: optionCloseIcon,
    } = this.options;
    const element = create("div");
    element.className = `ew-message ew-message-${type}`;
    if (center) {
      addClass("ew-message-center", element);
    }
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
      this.closeBtnEl.appendChild(
        createElement(
          optionCloseIcon ? optionCloseIcon : closeIcon("ew-")
        )
      );
      element.appendChild(this.closeBtnEl);
    }
    this.el = element;
    return {
      element,
      closeBtnEl: this.closeBtnEl,
    };
  }
  setTop(nodeList: NodeListOf<HTMLDivElement>) {
    const nodes = toArray(nodeList);
    if (nodes.length === 0) return;
    const { top } = this.options;
    const height = nodes[0].offsetHeight;
    const getFinalTop = (i: number) => `top:${getOffsetTop(top) !== baseTopUnit
      ? top
      : `${baseTopUnit * (i + 1) + height * i}px`
      };`;
    for (let i = 0, len = nodes.length; i < len; i++) {
      nodes[i].setAttribute(
        "style",
        getFinalTop(i)
      );
    }
  }
  animationAddNode(el: HTMLElement, container: HTMLElement) {
    const { startClassName } = this.options;
    if (startClassName) {
      handleAnimationNode(
        el,
        startClassName,
        "ew-",
        utilAnimationAddClassNames,
        (res) => {
          res.forEach((className) =>
            removeClass(className, el)
          );
        }
      );
    }
    container.appendChild(el);
  }
  animationRemoveNode(el: HTMLElement, isDestroy = false) {
    const { removeClassName } =
      this.options;
    if (!isDestroy) {
      handleAnimationNode(
        el,
        removeClassName,
        "ew-",
        utilAnimationRemoveClassNames,
        () => removeNode(el)
      );
    } else {
      removeNode(el);
    }
    this.el = null;
    this.closeBtnEl = null;
  }
  close(
    nodes: HTMLElement[] = [],
    time: number,
    isDestroy = false
  ) {
    const delay = Math.min(10000, time);
    const closeHandler = () => {
      nodes.forEach((item) => {
        if (isRemoveNode(item)) {
          this.animationRemoveNode(item, isDestroy);
        }
      });
      this.setTop(
        this.instances!
      );
    };
    if (isDestroy) {
      closeHandler();
    } else {
      setTimeout(closeHandler, delay);
    }
  }
}
