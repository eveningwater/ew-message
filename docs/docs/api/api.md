---
sidebar_position: 1
---

# 参数接口

这里主要介绍函数的参数类型。

## 字符串参数

默认参数可以是一个字符串，用作消息提示框的内容，如:

```ts
const msg = ewMessage('这是一个默认的消息提示框');
```

## 配置对象

配置对象主要有 6 个属性，分别如下:

### content

content 是一个字符串，用作消息提示框的内容，默认为空，如果在开发环境下（即导入的是非生产模式的文件 ewMessage.js），则会在控制台给出警告，如:

```ts
const msg = ewMessage({ content: '这是一个默认的消息提示框' });
```

### center

center 属性是一个布尔值，表示是否让消息提示框的内容剧中，默认是 false。如:

```ts
const msg = ewMessage({ content: '这是一个默认的消息提示框', center: true });
```

### type

type 的值虽然是一个字符串，但只支持"info" | "success" | "warning" | "error"，表示消息提示框的类型，默认是值是"info"。如:

```ts
const msg = ewMessage({
  content: '这是一个默认的消息提示框',
  center: true,
  type: 'success'
});
```
