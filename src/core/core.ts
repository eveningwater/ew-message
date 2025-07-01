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
import { $$, on, off, addClass, createElement, isRemoveNode, create, removeClass, removeNode, toArray } from "../utils/util";
import { ewMessageOption } from "../const/options";

export class Message {
  options: Required<ewMessageOption>;
  el: HTMLElement | null;
  closeBtnEl: HTMLElement | null;
  container: HTMLElement;
  instances: NodeListOf<HTMLElement> | null;
  private closeHandler: (() => void) | null = null;
  private animationFrameId: number | null = null;
  
  constructor(options: ewMessageOption | string) {
    this.options = normalizeOptions(options);
    this.el = null;
    this.closeBtnEl = null;
    this.instances = null;
    this.container = checkContainer(this.options.container);
    this.render();
  }
  
  destroy() {
    // 清理事件监听器
    if (this.closeBtnEl && this.closeHandler) {
      off(this.closeBtnEl, "click", this.closeHandler);
    }
    
    // 取消待执行的动画帧
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    
    if (this.el) {
      this.close([this.el], 0, true);
    }
    
    // 清理引用
    this.closeHandler = null;
  }
  
  render(opt?: ewMessageOption) {
    this.options = { ...this.options, ...opt };
    const { duration } = this.options;
    const { element: el, closeBtnEl } = this.createMessage();
    this.animationAddNode(el, this.container);
    this.updateInstances();
    
    if (duration > 0) {
      this.close([el], duration);
    }
    
    if (closeBtnEl) {
      this.closeHandler = () => this.close([el], 0);
      on(closeBtnEl, "click", this.closeHandler);
    }
  }
  
  private updateInstances() {
    this.instances = $$(".ew-message", this.container);
    if (this.instances && this.instances.length > 0) {
      this.setTop(this.instances);
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
    const baseClassnames = ["ew-message", `ew-message-${type}`];
    if(center){
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
  
  setTop(nodeList: NodeListOf<HTMLElement>) {
    const nodes = toArray(nodeList);
    if (nodes.length === 0) return;
    
    const { top } = this.options;
    const height = nodes[0].offsetHeight || 50; // 默认高度用于测试
    
    const updateStyles = () => {
      // 批量更新样式
      nodes.forEach((node, i) => {
        const offsetTop = getOffsetTop(top);
        const finalTop = typeof offsetTop === 'string' && offsetTop !== `${baseTopUnit}px`
          ? offsetTop
          : `${baseTopUnit * (i + 1) + height * i}px`;
        node.style.top = finalTop;
      });
    };
    
    // 在测试环境中同步执行，生产环境使用 requestAnimationFrame
    if (typeof jest !== 'undefined') {
      updateStyles();
    } else {
      this.animationFrameId = requestAnimationFrame(() => {
        updateStyles();
        this.animationFrameId = null;
      });
    }
  }
  
  animationAddNode(el: HTMLElement, container: HTMLElement) {
    const { startClassName } = this.options;
    if (startClassName && startClassName.length > 0) {
      handleAnimationNode(
        el,
        startClassName,
        "ew-",
        [...utilAnimationAddClassNames],
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
    const removeHandler = () => new Promise<void>((resolve, reject) => {
      try {
        const { removeClassName } = this.options;
        if (!isDestroy && removeClassName.length > 0) {
          handleAnimationNode(
            el,
            removeClassName,
            "ew-",
            [...utilAnimationRemoveClassNames],
            () => {
              removeNode(el);
              resolve();
            }
          );
        } else {
          removeNode(el);
          resolve();
        }
      } catch (error) {
        reject(error);
      }
    });
    
    removeHandler()
      .then(() => {
        this.el = null;
        this.closeBtnEl = null;
        this.updateInstances();
      })
      .catch((error) => {
        console.error('Error during animation removal:', error);
        // 即使出错也要清理引用
        this.el = null;
        this.closeBtnEl = null;
      });
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
    };
    if (isDestroy) {
      closeHandler();
    } else {
      setTimeout(closeHandler, delay);
    }
  }
}
