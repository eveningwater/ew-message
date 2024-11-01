---
sidebar_position: 1
---

# 参数接口

这里主要介绍函数的参数类型。

## 字符串参数

默认参数可以是一个字符串，用作消息提示框的内容，如:

```ts
const msg = ewMessage("这是一个默认的消息提示框");
```

## 配置对象

配置对象主要有 6 个属性，分别如下:

### 1. content

content 是一个字符串，用作消息提示框的内容，默认为空，如果在开发环境下（即导入的是非生产模式的文件 ewMessage.js），则会在控制台给出警告，如:

```ts
const msg = ewMessage({ content: "这是一个默认的消息提示框" });
```

### 2. center

center 属性是一个布尔值，表示是否让消息提示框的内容剧中，默认是 false。如:

```ts
// 消息提示框内容居中
const msg = ewMessage({ content: "这是一个默认的消息提示框", center: true });
```

### 3. type

type 的值虽然是一个字符串，但只支持"info" | "success" | "warning" | "error"，表示消息提示框的类型，默认是值是"info"。如:

```ts
const msg = ewMessage({
  content: "这是一个成功的消息提示框",
  center: true,
  type: "success", // 成功消息提示框
});
```

> 说明: 0.1.6新增了type为loading的加载消息提示框。调用方式如下:

```ts
const msg = ewMessage({
  content: "这是一个加载中的消息提示框",
  center: true,
  type: "loading",
});
// 或者
const msg = ewMessage.loading({
  content: "这是一个加载中的消息提示框",
  center: true
})
```

### 4. duration

该字段的值是一个数值，表示消息提示框关闭的时间，默认值是 2s，可以自定义修改。如:

```ts
const msg = ewMessage({
  content: "这是一个默认的消息提示框",
  center: true,
  type: "success",
  duration: 3000, // 消息提示框将在2s后关闭
});
```

### 5. showClose

该字段的值是一个布尔值，表示是否显示消息提示框的关闭按钮，默认值是 true，可以将值设置为 false。如:

```ts
const msg = ewMessage({
  content: "这是一个默认的消息提示框",
  showClose: false,
});
```

> ps: 需要注意的是如果将 duration 的值设置为 0,showClose 设置为 false,则在开发环境下会提供警告，然后自动开启消息提示框的关闭按钮。

### 6. showTypeIcon (0.0.8)新增

该属性是一个布尔值，表示是否显示图标，会根据相关的类型来匹配相应的图标，比如 info 类型就是 info 类型的图标,默认值是 true。如下所示:

```ts
const msg = ewMessage({
  content: "这是一个默认的消息提示框",
  showTypeIcon: true,
});
```

### 7. typeIcon(0.0.8 新增)

该属性用于自定义图标，需要将 showTypeIcon 设置为 true 才行，如果默认的图标不符合需求，可以自己传入一个 img 标签或者 svg 标签自定义一个图标，或者是任意元素，不过需要自己调整图标样式，可以定义`${prefix}-message-${type}-icon`相关的类名来使用默认的样式,其中 prefix 的值为前缀名默认是 ew,type 为消息提示框类型，如 info。如下所示:

```ts
const msg = ewMessage({
  content: "这是一个默认的消息提示框",
  showTypeIcon: true,
  typeIcon:
    '<svg t="1695191942528" class="ew-message-icon ew-message-info-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7731" id="mx_n_1695191942529"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 448v384h128V448H448z m0-256v128h128V192H448z" fill="#1677ff" p-id="7732"></path></svg>',
});
```

### 8. closeIcon(0.0.8 新增)

该属性用于自定义关闭按钮的图标，需要将 showClose 设置为 true 才行，如果默认的关闭按钮图标不符合需求，可以自己传入一个 img 标签或者 svg 标签自定义一个图标，或者是任意元素，不过需要自己调整图标样式，可以定义`${prefix}-message-close-icon`相关的类名来使用默认的样式,其中 prefix 的值为前缀名，默认是 ew。如:

```ts
// 不推荐替换默认的图标
const msg = ewMessage({
  content: "这是一个默认的消息提示框",
  showTypeIcon: true,
  closeIcon:
    '<svg t="1695191942528" class="ew-message-close-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7731" id="mx_n_1695191942529"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 448v384h128V448H448z m0-256v128h128V192H448z" fill="#1677ff" p-id="7732"></path></svg>',
});
```

### 9. container(0.0.9 新增)

该属性用于设置消息提示框挂载的元素，可以传入一个 dom 元素字符串或者是 dom 元素，不满足则会在开发环境下给出警告提示，默认值是 body 元素。如:

```ts
const msg = ewMessage({
  content: "这是一个默认的消息提示框",
  container: "#test",
});
// 将消息提示框挂载到页面当中id为test的元素中
```


### 10. removeClassName(0.0.9 新增，0.1.5调整为字符串数组)

该属性用于卸载消息提示框时添加的动画类名，目前内置有 fadeOut 和 scaleDown 动画效果，如指定了正确的动画类名值，当点击关闭或者是自动关闭消息提示框的时候，会有相应的动画效果,默认值是空数组，即没有动画效果。如:

```ts
const msg = ewMessage({
  content: "这是一个默认的消息提示框",
  removeClassName: ["fadeOut"], // 或者也可以传入ew-message-fadeOut
});
```

我们可以结合[animate.css](https://animate.style/)来为移除消息提示框添加对应的动画效果，如果页面当中引入了该样式文件，则可以传入相应的类名，如:

```ts
// 假设页面引入了animate.css文件
const msg = ewMessage({
  content: "这是一个默认的消息提示框",
  removeClassName: ["animate__animated","animate__bounce"],
});
```

### 11. top(0.1.1 新增)

用于自定义消息提示框的 top 偏移量，是一个 number 值或者字符串值，如示例:

```ts
const msg = ewMessage({
  content: "这是一个默认的消息提示框",
  top: 20,
});
const msg = ewMessage({
  content: "这是一个默认的消息提示框",
  top: "15px",
});
```

### 12. startClassName(0.1.1 新增,0.1.5调整为字符串数组)

该属性用于添加消息提示框时添加的动画类名，目前内置有 fadeIn 和 scaleUp 动画效果，如指定了正确的动画类名值，当消息框出现时，会有相应的动画效果,延迟 1s 之后，会移除动画效果类名。默认值是空数组，即没有动画效果。如:

```ts
const msg = ewMessage({
  content: "这是一个默认的消息提示框",
  removeClassName: ["fadeIn"], // 或者也可以传入ew-message-fadeIn
});
```

我们可以结合[animate.css](https://animate.style/)来为移除消息提示框添加对应的动画效果，如果页面当中引入了该样式文件，则可以传入相应的类名，如:

```ts
// 假设页面引入了animate.css文件
const msg = ewMessage({
  content: "这是一个默认的消息提示框",
  startClassName: ["animate__animated","animate__bounceIn"],
});
```

