---
sidebar_position: 1
---

# Instance attribute and instance method interface

In addition to the attribute interface, we can also use some instance attributes and instance methods of the plug-in, which are summarized as follows.

> ps: If not necessary, it is not recommended to use these instance attributes and instance methods.

## Instance attributes

### options

Configuration object of the message. For example:

```ts
const msg = ewMessage("This is a default message");
console.log(msg.options); // { content:"This is a default message",... }
```

### el

The root element of the message.

### closeBtnEl

The closing element of the message.

### instances

message element collection.

### container

The mounting container element of the message, the default is document.body.

## Instance method

### destroy (new in version 0.0.6)

This method will destroy the message instance immediately. For example:

```ts
const msg = ewMessage("This is a default message");
msg.destroy(); // The page will no longer see the message
```

### render

This method is the core method for rendering the message. It does not need to be used. If you are interested, please refer to the [source code](https://github.com/eveningwater/ew-message/blob/main/src/message.ts).

### createMessage

This method means creating an element of a message and returning the root element of the message. It does not need to be used. If you are interested, please refer to the [source code](https://github.com/eveningwater/ew-message/blob/main/src/message.ts).

### setTop

This method is used to set the top offset of the message. It is not necessary to use it. If you are interested, you can refer to the [source code](https://github.com/eveningwater/ew-message/blob/main/src/message.ts).

### close

This method is used to destroy a DOM element. Two parameters are passed in. The first parameter is the DOM element collection, the second parameter is the destruction time, which is a numerical value, and the third parameter indicates whether to eliminate it directly (if the removeClassName attribute is passed in and the value passed in is false, there will be an animation effect when destroying). Such as:

```ts
const msg = ewMessage("This is a default message");
msg.close([msg.el], 1000); // Remove the element after 1s
const msg = ewMessage({
content: "This is a default message",
removeClassName:["fadeOut"],
});
msg.close([msg.el], 1000, false); // Remove the element after 1s, and there will be animation effect when destroying
```

### animationRemoveNode(New in 0.0.9)

This method is used to add animation when removing the message. It is not necessary to use it. If you are interested, please refer to the [source code](https://github.com/eveningwater/ew-message/blob/main/src/message.ts).

### animationAddNode (new in 0.1.1)

This method is used to add animation when the message appears. It is not necessary to use it. If you are interested, you can refer to the [source code](https://github.com/eveningwater/ew-message/blob/main/src/message.ts).