---
sidebar_position: 1
---

# 指南

仅仅只需要一分钟的时间就可以上手使用。

## 安装

```
npm install ew-message --save-dev//或者 yarn add ew-message 或者 pnpm install ew-message --save-dev
```

### 使用

```ts
import ewMessage from 'ewMessage';
//  导入样式
import 'ew-message/dist/ew-message.min.css';
const msg = ewMessage('这是一个默认的消息提示框!');
// 销毁提示框
msg.destroy();
```

> PS: 当然也可以不引入样式，插件检测了如果不导入样式文件，则会自动添加样式，并且也可以给样式添加类名前缀自定义样式。

> PS: 推荐使用导入样式文件的方式。

函数还可以传入一个配置对象，配置对象如下:

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

其中 content 为消息提示框内容，必传参数，如果在开发环境下，不传参数，则会出现警告。

## cdn 引入

```js
//样式引入
// CDN:https://www.unpkg.com/ew-message/dist/ew-message.min.css
// CDN:https://www.unpkg.com/ew-message/dist/ew-message.min.js
```
