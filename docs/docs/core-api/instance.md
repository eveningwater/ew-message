---
sidebar_position: 1
---

# 实例属性与实例方法接口

除了属性接口之外，我们也可以使用插件的一些实例属性和实例方法，总结如下。

> ps: 如非必要，不建议使用这些实例属性和实例方法。

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

### instances

消息提示框元素集合。

### container

消息提示框的挂载容器元素，默认是document.body。

## 实例方法

### destroy (0.0.6 版本新增)

该方法将会立即销毁消息提示框实例。如:

```ts
const msg = ewMessage("这是一个默认的消息提示框");
msg.destroy(); // 页面将不再看到消息提示框
```

### render

这个方法就是渲染消息提示框的核心方法，不需要使用，感兴趣可参看[源码](https://github.com/eveningwater/ew-message/blob/main/src/message.ts)。

### createMessage

该方法表示创建一个消息提示框的元素，返回消息提示框的根元素，不需要使用，感兴趣可参看[源码](https://github.com/eveningwater/ew-message/blob/main/src/message.ts)。

### setTop

该方法用于设置消息提示框的 top 偏移量，不需要使用，感兴趣可参看[源码](https://github.com/eveningwater/ew-message/blob/main/src/message.ts)。

### close

该方法用于销毁一个 dom 元素，传入 2 个参数，第一个参数是dom 元素集合，第二个参数是销毁的时间，是一个数值,第三个参数表示是否直接消除（如果传入了removeClassName属性，并且传入改值为false，销毁时会有动画效果）。如:

```ts
const msg = ewMessage("这是一个默认的消息提示框");
msg.close([msg.el], 1000); // 将在1s后移除元素
const msg = ewMessage({
    content: "这是一个默认的消息提示框",
    removeClassName:["fadeOut"],
});
msg.close([msg.el], 1000, false); // 将在1s后移除元素,销毁时会有动画效果
```

### animationRemoveNode(0.0.9 新增)

该方法用于为消息提示框移除时添加动画，不需要使用，感兴趣可参看[源码](https://github.com/eveningwater/ew-message/blob/main/src/message.ts)。

### animationAddNode(0.1.1 新增)

该方法用于为消息提示框出现时添加动画，不需要使用，感兴趣可参看[源码](https://github.com/eveningwater/ew-message/blob/main/src/message.ts)。
