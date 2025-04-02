"use strict";(self.webpackChunkew_message=self.webpackChunkew_message||[]).push([[110],{6016:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(6106),a=s(6590);const i={sidebar_position:1},o="Parameter api",c={id:"core-api/api",title:"Parameter api",description:"Here we mainly introduce the parameter types of the function.",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/core-api/api.md",sourceDirName:"core-api",slug:"/core-api/api",permalink:"/ew-message/docs/core-api/api",draft:!1,unlisted:!1,editUrl:"https://github.com/eveningwater/ewMessage/tree/main/docs/core-api/api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"log",permalink:"/ew-message/docs/log"},next:{title:"Instance attribute and instance method interface",permalink:"/ew-message/docs/core-api/instance"}},r={},l=[{value:"String parameter",id:"string-parameter",level:2},{value:"Configuration object",id:"configuration-object",level:2},{value:"1. content",id:"1-content",level:3},{value:"2. center",id:"2-center",level:3},{value:"3. type",id:"3-type",level:3},{value:"4. duration",id:"4-duration",level:3},{value:"5. showClose",id:"5-showclose",level:3},{value:"6. showTypeIcon (0.0.8) New",id:"6-showtypeicon-008-new",level:3},{value:"7. typeIcon (new in 0.0.8)",id:"7-typeicon-new-in-008",level:3},{value:"8. closeIcon (new in 0.0.8)",id:"8-closeicon-new-in-008",level:3},{value:"9. container (new in 0.0.9)",id:"9-container-new-in-009",level:3},{value:"10. removeClassName (new in 0.0.9, adjusted to string array in 0.1.5)",id:"10-removeclassname-new-in-009-adjusted-to-string-array-in-015",level:3},{value:"11. top (new in 0.1.1)",id:"11-top-new-in-011",level:3},{value:"12. startClassName (new in 0.1.1, adjusted to string array in 0.1.5)",id:"12-startclassname-new-in-011-adjusted-to-string-array-in-015",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"parameter-api",children:"Parameter api"})}),"\n",(0,t.jsx)(n.p,{children:"Here we mainly introduce the parameter types of the function."}),"\n",(0,t.jsx)(n.h2,{id:"string-parameter",children:"String parameter"}),"\n",(0,t.jsx)(n.p,{children:"The default parameter can be a string, which is used as the content of the message, such as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage("This is a default message");\n'})}),"\n",(0,t.jsx)(n.h2,{id:"configuration-object",children:"Configuration object"}),"\n",(0,t.jsx)(n.p,{children:"The configuration object has 6 main properties, as follows:"}),"\n",(0,t.jsx)(n.h3,{id:"1-content",children:"1. content"}),"\n",(0,t.jsx)(n.p,{children:"content is a string, which is used as the content of the message. The default is empty. If it is in the development environment (that is, the non-production mode file ewMessage.js is imported), a warning will be given in the console, such as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({ content: "This is a default message" });\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2-center",children:"2. center"}),"\n",(0,t.jsx)(n.p,{children:"The center property is a Boolean value, indicating whether to center the content of the message. The default is false. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// message content is centered\nconst msg = ewMessage({ content: "This is a default message", center: true });\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-type",children:"3. type"}),"\n",(0,t.jsx)(n.p,{children:'Although the value of type is a string, it only supports "info" | "success" | "warning" | "error" | "loading", indicating the type of the message. The default value is "info". For example:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\ncontent: "This is a successful message",\ncenter: true,\ntype: "success", // Success message\n});\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Note: 0.1.6 adds a loading message with type loading. The calling method is as follows:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\ncontent: "This is a loading message",\ncenter: true,\ntype: "loading",\n});\n// or\nconst msg = ewMessage.loading({\ncontent: "This is a loading message",\ncenter: true\n})\n'})}),"\n",(0,t.jsx)(n.h3,{id:"4-duration",children:"4. duration"}),"\n",(0,t.jsx)(n.p,{children:"The value of this field is a numerical value, indicating the time for the message to close. The default value is 2s, which can be customized and modified. The maximum value is 10s. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\ncontent: "This is a default message",\ncenter: true,\ntype: "success",\nduration: 3000, // the message will be closed after 2s\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"5-showclose",children:"5. showClose"}),"\n",(0,t.jsx)(n.p,{children:"The value of this field is a Boolean value, indicating whether to display the close button of the message. The default value is true, and the value can be set to false. Such as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\ncontent: "This is a default message",\nshowClose: false,\n});\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"ps: It should be noted that if the value of duration is set to 0 and showClose is set to false, a warning will be given in the development environment, and then the close button of the message will be automatically opened, that is, showClose is set to true."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"6-showtypeicon-008-new",children:"6. showTypeIcon (0.0.8) New"}),"\n",(0,t.jsx)(n.p,{children:"This property is a Boolean value, indicating whether to display the icon. The corresponding icon will be matched according to the relevant type. For example, the info type is the info type icon. The default value is true. As shown below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\ncontent: "This is a default message",\nshowTypeIcon: true,\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"7-typeicon-new-in-008",children:"7. typeIcon (new in 0.0.8)"}),"\n",(0,t.jsxs)(n.p,{children:["This property is used to customize the icon. You need to set showTypeIcon to true. If the default icon does not meet the requirements, you can pass in an img tag or svg tag to customize an icon, or any element. However, you need to adjust the icon style yourself. You can define the class name related to ",(0,t.jsx)(n.code,{children:"${prefix}-message-${type}-icon"})," to use the default style. The value of prefix is \u200b\u200bthe prefix name by default, which is ew, and type is the message type, such as info. As shown below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\ncontent: "This is a default message",\nshowTypeIcon: true,\ntypeIcon:\n\'<svg t="1695191942528" class="ew-message-icon ew-message-info-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7731" id="mx_n_1695191942529"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 448v384h128V448H448z m0-256v128h128V192H448z" fill="#1677ff" p-id="7732"></path></svg>\',\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"8-closeicon-new-in-008",children:"8. closeIcon (new in 0.0.8)"}),"\n",(0,t.jsxs)(n.p,{children:["This property is used to customize the icon of the close button. You need to set showClose to true. If the default close button icon does not meet your needs, you can pass in an img tag or svg tag to customize an icon, or any element. However, you need to adjust the icon style yourself. You can define the class name related to ",(0,t.jsx)(n.code,{children:"${prefix}-message-close-icon"})," to use the default style. The value of prefix is \u200b\u200bthe prefix name, and the default is ew. Such as:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// It is not recommended to replace the default icon\nconst msg = ewMessage({\ncontent: "This is a default message",\nshowTypeIcon: true,\ncloseIcon:\n\'<svg t="1695191942528" class="ew-message-close-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7731" id="mx_n_1695191942529"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 448v384h128V448H448z m0-256v128h128V192H448z" fill="#1677ff" p-id="7732"></path></svg>\',\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"9-container-new-in-009",children:"9. container (new in 0.0.9)"}),"\n",(0,t.jsx)(n.p,{children:"This property is used to set the element where the message is mounted. A dom element string or a dom element can be passed in. If it is not satisfied, a warning prompt will be given in the development environment. The default value is the body element. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\ncontent: "This is a default message",\ncontainer: "#test",\n});\n// Mount the message to the element with id test in the page\n'})}),"\n",(0,t.jsx)(n.h3,{id:"10-removeclassname-new-in-009-adjusted-to-string-array-in-015",children:"10. removeClassName (new in 0.0.9, adjusted to string array in 0.1.5)"}),"\n",(0,t.jsx)(n.p,{children:"This property is used to add the animation class name when uninstalling the message. Currently, there are built-in fadeOut and scaleDown animation effects. If the correct animation class name value is specified, when clicking to close or automatically closing the message, there will be a corresponding animation effect. The default value is an empty array, that is, there is no animation effect. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\ncontent: "This is a default message",\nremoveClassName: ["fadeOut"], // Or you can also pass in ew-message-fadeOut\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We can combine ",(0,t.jsx)(n.a,{href:"https://animate.style/",children:"animate.css"})," to add corresponding animation effects for removing the message. If the style file is introduced in the page, the corresponding class name can be passed in, such as:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// Assume that the page introduces the animate.css file\nconst msg = ewMessage({\ncontent: "This is a default message",\nremoveClassName: ["animate__animated","animate__bounce"],\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"11-top-new-in-011",children:"11. top (new in 0.1.1)"}),"\n",(0,t.jsx)(n.p,{children:"The top offset used to customize the message is a number value or a string value, such as the example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\ncontent: "This is a default message",\ntop: 20,\n});\nconst msg = ewMessage({\ncontent: "This is a default message",\ntop: "15px",\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"12-startclassname-new-in-011-adjusted-to-string-array-in-015",children:"12. startClassName (new in 0.1.1, adjusted to string array in 0.1.5)"}),"\n",(0,t.jsx)(n.p,{children:"This property is used to add the animation class name when adding a message. Currently, fadeIn and scaleUp animation effects are built-in. If the correct animation class name value is specified, when the message box appears, there will be a corresponding animation effect. After a delay of 1s, the animation effect class name will be removed. The default value is an empty array, that is, there is no animation effect. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\ncontent: "This is a default message",\nremoveClassName: ["fadeIn"], // Or you can also pass in ew-message-fadeIn\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We can combine ",(0,t.jsx)(n.a,{href:"https://animate.style/",children:"animate.css"})," to add corresponding animation effects for removing the message. If the style file is introduced in the page, the corresponding class name can be passed in, such as:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// Assume that the page introduces the animate.css file\nconst msg = ewMessage({\ncontent: "This is a default message",\nstartClassName: ["animate__animated","animate__bounceIn"],\n});\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},6590:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(7378);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);