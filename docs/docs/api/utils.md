---
sidebar_position: 1
---

# 内置工具函数接口

插件内部提供了一些工具函数可供调用，该工具函数定义在 ewMessage 的静态属性 util 上，我们可以通过如下代码来获取:

```ts
const util = ewMessage.util;
// 以下的util均指这里
```

## isFunction

该工具函数表示判断是否是一个函数，传入一个需要判断的参数。如:

```ts
const testFn = () => {
  console.log('这是一个函数');
};
util.isFunction(testFn); // true
```
