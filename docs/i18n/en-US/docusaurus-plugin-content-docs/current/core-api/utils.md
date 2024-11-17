---
sidebar_position: 1
---

# Built-in util method api

The plugin provides some util functions for calling. The util function is defined on the static property util of ewMessage. We can get it through the following code:

```ts
const util = ewMessage.util;
// The following util refers to here
```

The following is a description of some util functions. Please refer to the code for details.

## isFunction

This util function indicates whether it is a function and passes in a parameter that needs to be judged. For example:

```ts
const testFn = function () {
console.log('This is a function');
};
util.isFunction(testFn); // true
util.isFunction(null); // false
```

## isDom

This util function indicates whether it is a dom element and passes in a parameter that needs to be judged. For example:

```ts
const div = document.querySelector('#app');
util.isDom(div); // true;
util.isDom(1); // false;
```

## isObject

This utility function determines whether it is an object and passes in a parameter to be determined. For example:

```ts
util.isObject({}); // true;
util.isObject([]); // true;
util.isObject(function () {
console.log(1);
}); // false;
util.isObject(111); // false;
```

## isString

This utility function determines whether it is a string and passes in a parameter to be determined. For example:

```ts
util.isString('111'); // true;
util.isString(111); // false
```

## isNumber(New in version 0.0.7)

This utility function indicates whether it is a number, and passes in a parameter to be judged. For example:

```ts
util.isNumber(123); // true;
util.isNumber(NaN); // false;
util.isNumber('1111'); // false
```

## warn

This function indicates printing some warning information in the console, and passes in a string of information to be printed. For example:

```ts
util.warn('warning: this is not a function');
```

## hasOwn

This utility function indicates whether a certain attribute is on a certain object, and passes in 2 parameters, the first parameter is an object, and the second parameter is a property name. For example:

```ts
const obj = { name: 'eveningwater' };
util.hasOwn(obj, 'name'); // true;
util.hasOwn(obj, 'age'); // false;
```

## toArray

This utility function is used to convert a pseudo array into a real array, passing in a value to be converted. For example:

```ts
// Assume that the page has multiple <div class="list-item"></div> elements
const listItems = document.querySelectorAll('.list-item');
util.toArray(listItems); // An array containing multiple div elements
```

## $

This utility function is used to obtain dom elements, with two parameters, the first parameter is a string, and the second parameter is a dom element. For example:

```ts
const app = util.$('#app');
util.$('.child', app);
```

## $$

This utility function is used to obtain the DOM element collection, i.e. NodeList, with the same parameters as the \$ method. Such as:

```ts
const app = util.$('#app');
util.$$('.child', app);
util.$$('.child');
```

## createElement(new in 0.0.8)

This utility function is used to create a DOM element based on a template string. The template string can bring in child elements, such as:

```ts
const html = util.createElement(`<div><span></span></div>`);
console.log(html); // Return div node
```

## addClass(new in 0.0.9)

This utility function is used to add a class name to a DOM element. Two parameters need to be passed in, such as:

```ts
const html = util.addClass(`app`, util.$('#app'));
// Add the app class name to the element with id app
```

## removeClass(0.1.1 New)

This utility function is used to remove the class name from the DOM element. Two parameters need to be passed in, such as:

```ts
const html = util.removeClass(`app`, util.$('#app'));
// Remove the app class name from the element with id app. If it contains the app class name
```

## off(New in 0.0.9)

This method is used to remove an event listener. Four parameters are passed in. The first one is the DOM element, the second one is the event name, the third one is the event listener, and the fourth one is a Boolean value. For example:

```ts
const test = document.getElementById('test');
const handler = e => console.log(e.target.tagName);
util.off(test, 'click', handler);
```

## on(New in 0.0.9)

This method is used to add an event listener. The parameters are the same as the off method. For example:

```ts
const test = document.getElementById('test');
const handler = e => console.log(e.target.tagName);
util.on(test, 'click', handler);
```

## isArray(new in 0.1.2)

This method is used to determine whether the value is an array. The parameter is any value. For example:

```ts
const arr = [1, 2, 3];
util.isArray(arr); // true
```

## isRemoveNode(new in 0.1.2)

This method is used to determine whether a node can be deleted. The parameter is any DOM node element. For example:

```ts
const test = document.getElementById('test');
util.isRemoveNode(test); // true
```