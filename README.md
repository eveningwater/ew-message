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
  stylePrefix?: string; //消息提示框样式前缀，注意插件有检测如果导入了样式文件，则这个配置无效
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

当然也可以不引入样式，插件检测了如果不导入样式文件，则会自动添加样式，并且也可以给样式添加类名前缀自定义样式。

更多详情参阅文档官网介绍[ew-message](https://eveningwater.github.io/ew-message/);

# 更新日志

- 0.0.1 ~ 0.0.4: 添加了消息提示框的基本功能。
- 0.0.5: 修改了 ts 类型导入。
- 0.0.6: 消息提示框添加了销毁 destroy 方法。
- 0.0.7: 完善了 ts 类型,新增了最大关闭时间属性 maxDuration,修改了默认关闭时间。
- 0.0.8: 新增了 showTypeIcon 和 typeIcon 属性以及 closeIcon，用于配置图标,新增了工具方法 createElement。
