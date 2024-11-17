---
sidebar_position: 1
---

# Parameter api

Here we mainly introduce the parameter types of the function.

## String parameter

The default parameter can be a string, which is used as the content of the message, such as:

```ts
const msg = ewMessage("This is a default message");
```

## Configuration object

The configuration object has 6 main properties, as follows:

### 1. content

content is a string, which is used as the content of the message. The default is empty. If it is in the development environment (that is, the non-production mode file ewMessage.js is imported), a warning will be given in the console, such as:

```ts
const msg = ewMessage({ content: "This is a default message" });
```

### 2. center

The center property is a Boolean value, indicating whether to center the content of the message. The default is false. For example:

```ts
// message content is centered
const msg = ewMessage({ content: "This is a default message", center: true });
```

### 3. type

Although the value of type is a string, it only supports "info" | "success" | "warning" | "error" | "loading", indicating the type of the message. The default value is "info". For example:

```ts
const msg = ewMessage({
content: "This is a successful message",
center: true,
type: "success", // Success message
});
```

> Note: 0.1.6 adds a loading message with type loading. The calling method is as follows:

```ts
const msg = ewMessage({
content: "This is a loading message",
center: true,
type: "loading",
});
// or
const msg = ewMessage.loading({
content: "This is a loading message",
center: true
})
```

### 4. duration

The value of this field is a numerical value, indicating the time for the message to close. The default value is 2s, which can be customized and modified. The maximum value is 10s. For example:

```ts
const msg = ewMessage({
content: "This is a default message",
center: true,
type: "success",
duration: 3000, // the message will be closed after 2s
});
```

### 5. showClose

The value of this field is a Boolean value, indicating whether to display the close button of the message. The default value is true, and the value can be set to false. Such as:

```ts
const msg = ewMessage({
content: "This is a default message",
showClose: false,
});
```

> ps: It should be noted that if the value of duration is set to 0 and showClose is set to false, a warning will be given in the development environment, and then the close button of the message will be automatically opened, that is, showClose is set to true.

### 6. showTypeIcon (0.0.8) New

This property is a Boolean value, indicating whether to display the icon. The corresponding icon will be matched according to the relevant type. For example, the info type is the info type icon. The default value is true. As shown below:

```ts
const msg = ewMessage({
content: "This is a default message",
showTypeIcon: true,
});
```

### 7. typeIcon (new in 0.0.8)

This property is used to customize the icon. You need to set showTypeIcon to true. If the default icon does not meet the requirements, you can pass in an img tag or svg tag to customize an icon, or any element. However, you need to adjust the icon style yourself. You can define the class name related to `${prefix}-message-${type}-icon` to use the default style. The value of prefix is ​​the prefix name by default, which is ew, and type is the message type, such as info. As shown below:

```ts
const msg = ewMessage({
content: "This is a default message",
showTypeIcon: true,
typeIcon:
'<svg t="1695191942528" class="ew-message-icon ew-message-info-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7731" id="mx_n_1695191942529"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 448v384h128V448H448z m0-256v128h128V192H448z" fill="#1677ff" p-id="7732"></path></svg>',
});
```

### 8. closeIcon (new in 0.0.8)

This property is used to customize the icon of the close button. You need to set showClose to true. If the default close button icon does not meet your needs, you can pass in an img tag or svg tag to customize an icon, or any element. However, you need to adjust the icon style yourself. You can define the class name related to `${prefix}-message-close-icon` to use the default style. The value of prefix is ​​the prefix name, and the default is ew. Such as:

```ts
// It is not recommended to replace the default icon
const msg = ewMessage({
content: "This is a default message",
showTypeIcon: true,
closeIcon:
'<svg t="1695191942528" class="ew-message-close-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7731" id="mx_n_1695191942529"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 448v384h128V448H448z m0-256v128h128V192H448z" fill="#1677ff" p-id="7732"></path></svg>',
});
```

### 9. container (new in 0.0.9)

This property is used to set the element where the message is mounted. A dom element string or a dom element can be passed in. If it is not satisfied, a warning prompt will be given in the development environment. The default value is the body element. For example:

```ts
const msg = ewMessage({
content: "This is a default message",
container: "#test",
});
// Mount the message to the element with id test in the page
```

### 10. removeClassName (new in 0.0.9, adjusted to string array in 0.1.5)

This property is used to add the animation class name when uninstalling the message. Currently, there are built-in fadeOut and scaleDown animation effects. If the correct animation class name value is specified, when clicking to close or automatically closing the message, there will be a corresponding animation effect. The default value is an empty array, that is, there is no animation effect. For example:

```ts
const msg = ewMessage({
content: "This is a default message",
removeClassName: ["fadeOut"], // Or you can also pass in ew-message-fadeOut
});
```

We can combine [animate.css](https://animate.style/) to add corresponding animation effects for removing the message. If the style file is introduced in the page, the corresponding class name can be passed in, such as:

```ts
// Assume that the page introduces the animate.css file
const msg = ewMessage({
content: "This is a default message",
removeClassName: ["animate__animated","animate__bounce"],
});
```

### 11. top (new in 0.1.1)

The top offset used to customize the message is a number value or a string value, such as the example:

```ts
const msg = ewMessage({
content: "This is a default message",
top: 20,
});
const msg = ewMessage({
content: "This is a default message",
top: "15px",
});
```

### 12. startClassName (new in 0.1.1, adjusted to string array in 0.1.5)

This property is used to add the animation class name when adding a message. Currently, fadeIn and scaleUp animation effects are built-in. If the correct animation class name value is specified, when the message box appears, there will be a corresponding animation effect. After a delay of 1s, the animation effect class name will be removed. The default value is an empty array, that is, there is no animation effect. For example:

```ts
const msg = ewMessage({
content: "This is a default message",
removeClassName: ["fadeIn"], // Or you can also pass in ew-message-fadeIn
});
```

We can combine [animate.css](https://animate.style/) to add corresponding animation effects for removing the message. If the style file is introduced in the page, the corresponding class name can be passed in, such as:

```ts
// Assume that the page introduces the animate.css file
const msg = ewMessage({
content: "This is a default message",
startClassName: ["animate__animated","animate__bounceIn"],
});
```