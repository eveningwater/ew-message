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
// 消息提示框内容居中
const msg = ewMessage({ content: '这是一个默认的消息提示框', center: true });
```

### type

type 的值虽然是一个字符串，但只支持"info" | "success" | "warning" | "error"，表示消息提示框的类型，默认是值是"info"。如:

```ts
const msg = ewMessage({
  content: '这是一个成功的消息提示框',
  center: true,
  type: 'success' // 成功消息提示框
});
```

### duration

该字段的值是一个数值，表示消息提示框关闭的时间，默认值是 6s，可以自定义修改。如:

```ts
const msg = ewMessage({
  content: '这是一个默认的消息提示框',
  center: true,
  type: 'success',
  duration: 2000 // 消息提示框将在2s后关闭
});
```

需要注意的是，插件内部做了一个小小的规范化，如果传入的时间即 duration 的值小于 1000，则会自动乘以 10。

> ps: 0.0.7 版本做了一个优化，如果 duration 不是一个数值，则会在开发环境下提示警告，如果小于等于 0，则会取 1000 作为默认值，默认值也由 6s 变成了 1s。

> ps: 不建议将该值设置的过大。

### maxDuration (0.0.7 版本新增)

该字段的值也是一个数值，表示消息提示框的最大关闭时间，插件内部会将该值与传入的 duration 值做比较，取两者之间的最小值，默认值是 10s。如:

```ts
const msg = ewMessage({
  content: '这是一个默认的消息提示框',
  center: true,
  type: 'success',
  duration: 120000,
  maxDuration: 10000 // 最大关闭时间设置的是10s，因此消息提示框将在10s后关闭，而不是12s后关闭
});
```

> ps: 如果传入的值不是一个数值，也会在开发环境下提示警告，如果小于等于 duration,则会取 duration 作为默认值。

> ps: 不建议设置该值。

### showClose

该字段的值是一个布尔值，表示是否显示消息提示框的关闭按钮，默认值是 true，可以将值设置为 false。如:

```ts
const msg = ewMessage({
  content: '这是一个默认的消息提示框',
  showClose: false
});
```

> ps: 需要注意的是如果将 duration 的值设置为 0,showClose 设置为 false,则在开发环境下会提供警告，然后自动开启消息提示框的关闭按钮。

### stylePrefix

该属性是一个字符串，表示样式类名的前缀，默认是'ew-',可以自定义类名，方便自己修改样式。如:

```ts
const msg = ewMessage({
  content: '这是一个默认的消息提示框',
  stylePrefix: 'el-'
});
```

以上代码将会给消息提示框的样式类名前缀变成 el-,比如原本是 ew-message 类名将变成 el-message。

通常来讲这个属性应该是用不到的，只有在确实需要自定义样式的时候可以用到。
