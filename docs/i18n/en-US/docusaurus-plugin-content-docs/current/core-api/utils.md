---
sidebar_position: 1
---

# 内置工具函数接口

插件内部提供了一些工具函数可供调用，该工具函数定义在 ewMessage 的静态属性 util 上，我们可以通过如下代码来获取:

```ts
const util = ewMessage.util;
// 以下的util均指这里
```

以下是部分工具函数描述，具体以代码为准。

## isFunction

该工具函数表示判断是否是一个函数，传入一个需要判断的参数。如:

```ts
const testFn = function () {
  console.log('这是一个函数');
};
util.isFunction(testFn); // true
util.isFunction(null); // false
```

## isDom

该工具函数表示判断是否是一个 dom 元素，传入一个需要判断参数。如:

```ts
const div = document.querySelector('#app');
util.isDom(div); // true;
util.isDom(1); // false;
```

## isObject

该工具函数表示判断是否是一个对象，传入一个需要判断的参数。如:

```ts
util.isObject({}); // true;
util.isObject([]); // true;
util.isObject(function () {
  console.log(1);
}); // false;
util.isObject(111); // false;
```

## isString

该工具函数表示判断是否是一个字符串，传入一个需要判断的参数。如:

```ts
util.isString('111'); // true;
util.isString(111); // false
```

## isNumber(0.0.7 版本新增)

该工具函数表示判断是否是一个数值，传入一个需要判断的参数。如:

```ts
util.isNumber(123); // true;
util.isNumber(NaN); // false;
util.isNumber('1111'); // false
```

## warn

该函数表示在控制台打印一些警告信息，传入一个需要打印的信息字符串。如:

```ts
util.warn('warning: this is not a function');
```

## hasOwn

该工具函数表示某个属性是否在某个对象上，传入 2 个参数，第一个参数是一个对象，第二个参数是一个属性名。如:

```ts
const obj = { name: 'eveningwater' };
util.hasOwn(obj, 'name'); // true;
util.hasOwn(obj, 'age'); // false;
```

## toArray

该工具函数用于将伪数组转换成真正的数组，传入一个需要转换的值。如:

```ts
// 假设页面有多个<div class="list-item"></div>的元素
const listItems = document.querySelectorAll('.list-item');
util.toArray(listItems); // 一个包含多个div元素的数组
```

## $

该工具函数用于获取 dom 元素，有两个参数，第一个参数是一个字符串，第二个参数是一个 dom 元素。如:

```ts
const app = util.$('#app');
util.$('.child', app);
```

## $$

该工具函数用于获取 dom 元素集合即 NodeList,参数同\$方法。如:

```ts
const app = util.$('#app');
util.$$('.child', app);
util.$$('.child');
```

## createElement(0.0.8 新增)

该工具函数用于根据模板字符串创建一个 dom 元素，模板字符串可以带入子元素，如:

```ts
const html = util.createElement(`<div><span></span></div>`);
console.log(html); // 返回div节点
```

## addClass(0.0.9 新增)

该工具函数用于给 dom 元素添加类名，需要传入 2 个参数，如:

```ts
const html = util.addClass(`app`, util.$('#app'));
// 给id为app的元素添加app类名
```

## removeClass(0.1.1 新增)

该工具函数用于给 dom 元素移除类名，需要传入 2 个参数，如:

```ts
const html = util.removeClass(`app`, util.$('#app'));
// 给id为app的元素移除app类名，如果含有app类名
```

## off(0.0.9 新增)

该方法用于给移除一个事件监听器，传入四个参数，第一个为 DOM 元素，第二个为事件名，第三个参数为事件监听器，第四个参数为一个布尔值。如:

```ts
const test = document.getElementById('test');
const handler = e => console.log(e.target.tagName);
util.off(test, 'click', handler);
```

## on(0.0.9 新增)

该方法用于添加一个事件监听器，参数等同 off 方法。如:

```ts
const test = document.getElementById('test');
const handler = e => console.log(e.target.tagName);
util.on(test, 'click', handler);
```

## isArray(0.1.2 新增)

该方法用于判断值是否是一个数组，参数为任意值。如:

```ts
const arr = [1, 2, 3];
util.isArray(arr); // true
```

## isRemoveNode(0.1.2 新增)

该方法用于判断一个节点是否可以被删除，参数为任意 DOM 节点元素。如:

```ts
const test = document.getElementById('test');
util.isRemoveNode(test); // true
```
