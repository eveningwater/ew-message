[English](./README.md) | [简体中文](./README.CN.md)

# ew-message

[![NPM version](https://img.shields.io/npm/v/ew-message.svg?color=red)](https://www.npmjs.com/package/ew-message)
![npm](https://img.shields.io/npm/dw/ew-message)
![npm](https://img.shields.io/npm/dt/ew-message)
[![GitHub stars](https://img.shields.io/github/stars/eveningwater/ewMessage.svg?color=#42b983)](https://github.com/eveningwater/ew-message/stargazers)
[![GitHub stars](https://img.shields.io/github/forks/eveningwater/ewMessage.svg)](https://github.com/eveningwater/ew-message/network/members)

一个基于 typescript 而封装的消息提示框插件。

## 安装与使用

### 安装

```
npm install ew-message --save-dev//或者 yarn add ew-message
```

### 引入

```js
<script src="./dist/ew-message.min.js"></script>
```

消息提示框插件如下:

```js
const msg1 = ewMessage('默认消息提示框');
const msg1 = ewMessage({
  content: '默认消息提示框'
});
```

option 配置对象有如下参数:

```ts
interface ewMessageOption {
  content: string; //消息提示框内容，必传参数
  center?: boolean; //消息提示框内容是否居中
  type?: string; //消息提示框类型，有四种: info,success,warning,error
  duration?: number; //消息提示框消失时间
  showClose?: boolean; //是否显示关闭按钮
  showTypeIcon?: boolean; // 是否显示类型图标，默认为true
  typeIcon?: string; // 自定义类型图标
  closeIcon?: string; // 自定义关闭按钮图标
  container?: string | HTMLElement; // 挂载元素
  removeClassName?: string[]; // 移除消息提示框动画类名，目前内置动画类名值: fadeOut与scaleDown
  startClassName?: string[]; // 添加消息提示框动画类名，目前内置动画类名值: fadeIn与scaleUp
  top?: number; // 用于自定义配置每个消息提示框的top偏移值
}
```

> ps: 推荐使用导入样式文件的方式。

## cdn 引入

```js
//样式引入
// CDN:https://www.unpkg.com/ew-message/dist/ew-message.min.css
// CDN:https://www.unpkg.com/ew-message/dist/ew-message.min.js
```

## 在组件中使用

```js
import ewMessage from 'ewMessage';
//  导入样式
import 'ew-message/dist/ew-message.min.css';
const msg = ewMessage(option); //option为配置对象，详情见前述
```

更多详情参阅文档官网介绍[ew-message](https://eveningwater.github.io/ew-message/);

# 更新日志

- 0.0.1 ~ 0.0.4: 添加了消息提示框的基本功能。
- 0.0.5: 修改了 ts 类型导入。
- 0.0.6: 消息提示框添加了销毁 destroy 方法。
- 0.0.7: 完善了 ts 类型,新增了最大关闭时间属性 maxDuration,修改了默认关闭时间。
- 0.0.8: 新增了 showTypeIcon 和 typeIcon 属性以及 closeIcon，用于配置图标,新增了工具方法 createElement。
- 0.0.9: 新增了 container、immediate、removeClassName、removeClassNameSymbol 配置属性，新增了 on,off,addClass 工具方法。
- 0.1.0: 修复了 ts 类型错误，新增了 messageZIndex 属性。
- 0.1.1: 新增了 top 属性,新增了 startClassName 与 startClassNameSymbol 属性,新增了 removeClass 方法。
- 0.1.2: 修改了销毁消息提示框逻辑,增加了 isArray、isRemoveNode 方法。
- 0.1.3: 调整了代码结构，新增了position属性，新增了isUndef方法。
- 0.1.4: 移除stylePrefix以及监听样式是否加载的逻辑。
- 0.1.5: 移除了很多不必要的代码api和逻辑。
- 0.1.6: 修复了ts类型的问题,优化了一些代码，完善了单元测试,新增了loading消息提示框。
- 0.1.7: 修复了ts类型的问题, 修复了无法关闭消息提示框的问题。
- 0.1.8: 修复了消息提示框重定向位置的问题。
- 0.1.8-beta.x: 一些优化。