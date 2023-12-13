---
sidebar_position: 1
---

# 实例方法接口

除了属性接口之外，我们也可以使用插件的一些实例方法，总结如下。

## 实例属性

### options

消息提示框的配置对象。如:

```ts
const msg = ewMessage("这是一个默认的消息提示框");
console.log(msg.options); // { content:"这是一个默认的消息提示框",... }
```

### el

消息提示框的根元素。

### closeBtnEl

消息提示框的关闭元素。

## 实例方法

### destroy (0.0.6 版本新增)

该方法将会立即销毁消息提示框实例。如:

```ts
const msg = ewMessage("这是一个默认的消息提示框");
msg.destroy(); // 页面将不再看到消息提示框
```

### validateHasStyle

该方法验证消息提示框是否含有样式，如果通过 link 标签导入样式，则该方法返回 true，否则返回 false。如:

```ts
const msg = ewMessage("这是一个默认的消息提示框");
msg.validateHasStyle(); // 假设页面引入了消息提示框的样式，则返回true
```

### normalizeOptions

该方法规范化传入的参数，并和默认配置对象合并，最终返回一个消息提示框的配置对象。

### getMessageType

该方法返回消息提示框支持的类型值。

### getDefaultOption

该方法用于获取消息提示框的默认配置对象。

### addMessageStyle

该方法用于添加消息提示框的样式，如果传入了第二个参数，将会将第二个参数的样式作为最终样式添加到页面中，两个参数都是一个字符串。不同的是，第一个参数代表样式前缀名，第二个参数代表一个样式字符串。如:

```ts
const msg = ewMessage("这是一个默认的消息提示框");
msg.addMessageStyle("ew-", `body { background: #2396ef; }`); // 第一个参数实际上就没有什么作用了，页面body元素的背景是蓝色
msg.addMessageStyle("el-"); // 会添加消息提示框的默认样式，但类名前缀是el-
```

### render

这个方法就是渲染消息提示框的核心方法，不需要使用，感兴趣可参看[源码](https://github.com/eveningwater/ew-message/blob/main/src/message.ts)。

### create

该方法表示创建一个消息提示框的元素，返回消息提示框的根元素，不需要使用，感兴趣可参看[源码](https://github.com/eveningwater/ew-message/blob/main/src/message.ts)。

### setTop

该方法用于设置消息提示框的 top 偏移量，不需要使用，感兴趣可参看[源码](https://github.com/eveningwater/ew-message/blob/main/src/message.ts)。

### close

该方法用于销毁一个 dom 元素，传入 2 个参数，第一个参数是一个 dom 元素或者是 dom 元素集合，第二个参数是销毁的时间，是一个数值。如:

```ts
const msg = ewMessage("这是一个默认的消息提示框");
msg.close(msg.el, 1000); // 将在1s后移除元素
```

### animationRemoveNode(0.0.9 新增)

该方法用于为消息提示框移除时添加动画，不需要使用，感兴趣可参看[源码](https://github.com/eveningwater/ew-message/blob/main/src/message.ts)。

### animationAddNode(0.1.1 新增)

该方法用于为消息提示框出现时添加动画，不需要使用，感兴趣可参看[源码](https://github.com/eveningwater/ew-message/blob/main/src/message.ts)。
