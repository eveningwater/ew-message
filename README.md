[English](./README.md) | [简体中文](./README.CN.md)

# ew-message

[![NPM version](https://img.shields.io/npm/v/ew-message.svg?color=red)](https://www.npmjs.com/package/ew-message)
![npm](https://img.shields.io/npm/dw/ew-message)
![npm](https://img.shields.io/npm/dt/ew-message)
[![GitHub stars](https://img.shields.io/github/stars/eveningwater/ewMessage.svg?color=#42b983)](https://github.com/eveningwater/ew-message/stargazers)
[![GitHub stars](https://img.shields.io/github/forks/eveningwater/ewMessage.svg)](https://github.com/eveningwater/ew-message/network/members)

A message plugin encapsulated based on typescript.

## Installation and Usage

### Installation

```
npm install ew-message --save-dev//or yarn add ew-message
```

### import

```js
<script src="./dist/ew-message.min.js"></script>
```

The message plugin code is as follows:

```js
const msg1 = ewMessage('the default message');
const msg1 = ewMessage({
  content: 'the default message'
});
```

The option configuration object has the following parameters:

```ts
interface ewMessageOption {
  content: string; // content required
  center?: boolean; // center the content
  type?: string; // message type: info,success,warning,error
  duration?: number; // duration to close the message
  showClose?: boolean; // Whether to display the close button
  showTypeIcon?: boolean; // Whether to display the type icon, the default value is true
  typeIcon?: string; // custom the type icon
  closeIcon?: string; // custom the close icon
  container?: string | HTMLElement; // mounted element
  removeClassName?: string[]; // Remove the message animation class name. Currently, the built-in animation class name values ​​are: fadeOut and scaleDown
  startClassName?: string[]; // Add the message animation class name, currently built-in animation class name values: fadeIn and scaleUp
  top?: number; // Used to customize the top offset value of each message
}
```

## import by cdn

```js
// import the css
// CDN:https://www.unpkg.com/ew-message/dist/ew-message.min.css
// CDN:https://www.unpkg.com/ew-message/dist/ew-message.min.js
```

## use in component

```js
import ewMessage from 'ewMessage';
// import css
import 'ew-message/dist/ew-message.min.css';
const msg = ewMessage(option); // option is a configuration object, see above for details
```

For more details, please refer to the official website introduction [ew-message](https://eveningwater.github.io/ew-message/);

# update log

- 0.0.1 ~ 0.0.4: Added basic functions of message。
- 0.0.5: update the ts about import。
- 0.0.6: add destroy method。
- 0.0.7: Improved the typescript, added the maximum closing time attribute maxDuration, and modified the default closing time。
- 0.0.8: Added showTypeIcon and typeIcon attributes and closeIcon for configuring icons, and added the tool method createElement.
- 0.0.9: Added container, immediate, removeClassName, removeClassNameSymbol configuration attributes, and added on, off, addClass tool methods.
- 0.1.0: Fixed ts type errors, added messageZIndex attribute.
- 0.1.1: Added top attribute, added startClassName and startClassNameSymbol attributes, and added removeClass method.
- 0.1.2: Modified the logic of destroying the message, added isArray and isRemoveNode methods.
- 0.1.3: Adjusted the code structure, added position attribute, and added isUndef method.
- 0.1.4: Removed stylePrefix and the logic of monitoring whether the style is loaded.
- 0.1.5: Removed a lot of unnecessary code APIs and logic.
- 0.1.6: Fixed ts type issues, optimized some codes, improved unit tests, and added a loading message.
- 0.1.7: Fixed ts type issues, fixed the problem of being unable to close the message.
- 0.1.8: Fixed a problem with redirect location。