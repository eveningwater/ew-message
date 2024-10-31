"use strict";(self.webpackChunkew_message=self.webpackChunkew_message||[]).push([[421],{2791:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=s(6070),l=s(5296);const t={sidebar_position:1},a="\u5185\u7f6e\u5de5\u5177\u51fd\u6570\u63a5\u53e3",r={id:"core-api/utils",title:"\u5185\u7f6e\u5de5\u5177\u51fd\u6570\u63a5\u53e3",description:"\u63d2\u4ef6\u5185\u90e8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5de5\u5177\u51fd\u6570\u53ef\u4f9b\u8c03\u7528\uff0c\u8be5\u5de5\u5177\u51fd\u6570\u5b9a\u4e49\u5728 ewMessage \u7684\u9759\u6001\u5c5e\u6027 util \u4e0a\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u4ee3\u7801\u6765\u83b7\u53d6:",source:"@site/docs/core-api/utils.md",sourceDirName:"core-api",slug:"/core-api/utils",permalink:"/ew-message/docs/core-api/utils",draft:!1,unlisted:!1,editUrl:"https://github.com/eveningwater/ewMessage/tree/main/docs/core-api/utils.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5b9e\u4f8b\u65b9\u6cd5\u63a5\u53e3",permalink:"/ew-message/docs/core-api/instance"},next:{title:"ew-message",permalink:"/ew-message/docs/intro"}},c={},d=[{value:"isFunction",id:"isfunction",level:2},{value:"isDom",id:"isdom",level:2},{value:"isObject",id:"isobject",level:2},{value:"isString",id:"isstring",level:2},{value:"isNumber(0.0.7 \u7248\u672c\u65b0\u589e)",id:"isnumber007-\u7248\u672c\u65b0\u589e",level:2},{value:"warn",id:"warn",level:2},{value:"hasOwn",id:"hasown",level:2},{value:"toArray",id:"toarray",level:2},{value:"$",id:"",level:2},{value:"$$",id:"-1",level:2},{value:"createElement(0.0.8 \u65b0\u589e)",id:"createelement008-\u65b0\u589e",level:2},{value:"addClass(0.0.9 \u65b0\u589e)",id:"addclass009-\u65b0\u589e",level:2},{value:"removeClass(0.1.1 \u65b0\u589e)",id:"removeclass011-\u65b0\u589e",level:2},{value:"off(0.0.9 \u65b0\u589e)",id:"off009-\u65b0\u589e",level:2},{value:"on(0.0.9 \u65b0\u589e)",id:"on009-\u65b0\u589e",level:2},{value:"isArray(0.1.2 \u65b0\u589e)",id:"isarray012-\u65b0\u589e",level:2},{value:"isRemoveNode(0.1.2 \u65b0\u589e)",id:"isremovenode012-\u65b0\u589e",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u5185\u7f6e\u5de5\u5177\u51fd\u6570\u63a5\u53e3",children:"\u5185\u7f6e\u5de5\u5177\u51fd\u6570\u63a5\u53e3"})}),"\n",(0,i.jsx)(n.p,{children:"\u63d2\u4ef6\u5185\u90e8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5de5\u5177\u51fd\u6570\u53ef\u4f9b\u8c03\u7528\uff0c\u8be5\u5de5\u5177\u51fd\u6570\u5b9a\u4e49\u5728 ewMessage \u7684\u9759\u6001\u5c5e\u6027 util \u4e0a\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u4ee3\u7801\u6765\u83b7\u53d6:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const util = ewMessage.util;\n// \u4ee5\u4e0b\u7684util\u5747\u6307\u8fd9\u91cc\n"})}),"\n",(0,i.jsx)(n.h2,{id:"isfunction",children:"isFunction"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u5de5\u5177\u51fd\u6570\u8868\u793a\u5224\u65ad\u662f\u5426\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4f20\u5165\u4e00\u4e2a\u9700\u8981\u5224\u65ad\u7684\u53c2\u6570\u3002\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const testFn = function () {\n  console.log('\u8fd9\u662f\u4e00\u4e2a\u51fd\u6570');\n};\nutil.isFunction(testFn); // true\nutil.isFunction(null); // false\n"})}),"\n",(0,i.jsx)(n.h2,{id:"isdom",children:"isDom"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u5de5\u5177\u51fd\u6570\u8868\u793a\u5224\u65ad\u662f\u5426\u662f\u4e00\u4e2a dom \u5143\u7d20\uff0c\u4f20\u5165\u4e00\u4e2a\u9700\u8981\u5224\u65ad\u53c2\u6570\u3002\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const div = document.querySelector('#app');\nutil.isDom(div); // true;\nutil.isDom(1); // false;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"isobject",children:"isObject"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u5de5\u5177\u51fd\u6570\u8868\u793a\u5224\u65ad\u662f\u5426\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4f20\u5165\u4e00\u4e2a\u9700\u8981\u5224\u65ad\u7684\u53c2\u6570\u3002\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"util.isObject({}); // true;\nutil.isObject([]); // true;\nutil.isObject(function () {\n  console.log(1);\n}); // false;\nutil.isObject(111); // false;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"isstring",children:"isString"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u5de5\u5177\u51fd\u6570\u8868\u793a\u5224\u65ad\u662f\u5426\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4f20\u5165\u4e00\u4e2a\u9700\u8981\u5224\u65ad\u7684\u53c2\u6570\u3002\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"util.isString('111'); // true;\nutil.isString(111); // false\n"})}),"\n",(0,i.jsx)(n.h2,{id:"isnumber007-\u7248\u672c\u65b0\u589e",children:"isNumber(0.0.7 \u7248\u672c\u65b0\u589e)"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u5de5\u5177\u51fd\u6570\u8868\u793a\u5224\u65ad\u662f\u5426\u662f\u4e00\u4e2a\u6570\u503c\uff0c\u4f20\u5165\u4e00\u4e2a\u9700\u8981\u5224\u65ad\u7684\u53c2\u6570\u3002\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"util.isNumber(123); // true;\nutil.isNumber(NaN); // false;\nutil.isNumber('1111'); // false\n"})}),"\n",(0,i.jsx)(n.h2,{id:"warn",children:"warn"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u8868\u793a\u5728\u63a7\u5236\u53f0\u6253\u5370\u4e00\u4e9b\u8b66\u544a\u4fe1\u606f\uff0c\u4f20\u5165\u4e00\u4e2a\u9700\u8981\u6253\u5370\u7684\u4fe1\u606f\u5b57\u7b26\u4e32\u3002\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"util.warn('warning: this is not a function');\n"})}),"\n",(0,i.jsx)(n.h2,{id:"hasown",children:"hasOwn"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u5de5\u5177\u51fd\u6570\u8868\u793a\u67d0\u4e2a\u5c5e\u6027\u662f\u5426\u5728\u67d0\u4e2a\u5bf9\u8c61\u4e0a\uff0c\u4f20\u5165 2 \u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u5c5e\u6027\u540d\u3002\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const obj = { name: 'eveningwater' };\nutil.hasOwn(obj, 'name'); // true;\nutil.hasOwn(obj, 'age'); // false;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"toarray",children:"toArray"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u5de5\u5177\u51fd\u6570\u7528\u4e8e\u5c06\u4f2a\u6570\u7ec4\u8f6c\u6362\u6210\u771f\u6b63\u7684\u6570\u7ec4\uff0c\u4f20\u5165\u4e00\u4e2a\u9700\u8981\u8f6c\u6362\u7684\u503c\u3002\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// \u5047\u8bbe\u9875\u9762\u6709\u591a\u4e2a<div class=\"list-item\"></div>\u7684\u5143\u7d20\nconst listItems = document.querySelectorAll('.list-item');\nutil.toArray(listItems); // \u4e00\u4e2a\u5305\u542b\u591a\u4e2adiv\u5143\u7d20\u7684\u6570\u7ec4\n"})}),"\n",(0,i.jsx)(n.h2,{id:"",children:"$"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u5de5\u5177\u51fd\u6570\u7528\u4e8e\u83b7\u53d6 dom \u5143\u7d20\uff0c\u6709\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a dom \u5143\u7d20\u3002\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const app = util.$('#app');\nutil.$('.child', app);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"-1",children:"$$"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u5de5\u5177\u51fd\u6570\u7528\u4e8e\u83b7\u53d6 dom \u5143\u7d20\u96c6\u5408\u5373 NodeList,\u53c2\u6570\u540c$\u65b9\u6cd5\u3002\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const app = util.$('#app');\nutil.$$('.child', app);\nutil.$$('.child');\n"})}),"\n",(0,i.jsx)(n.h2,{id:"createelement008-\u65b0\u589e",children:"createElement(0.0.8 \u65b0\u589e)"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u5de5\u5177\u51fd\u6570\u7528\u4e8e\u6839\u636e\u6a21\u677f\u5b57\u7b26\u4e32\u521b\u5efa\u4e00\u4e2a dom \u5143\u7d20\uff0c\u6a21\u677f\u5b57\u7b26\u4e32\u53ef\u4ee5\u5e26\u5165\u5b50\u5143\u7d20\uff0c\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const html = util.createElement(`<div><span></span></div>`);\nconsole.log(html); // \u8fd4\u56dediv\u8282\u70b9\n"})}),"\n",(0,i.jsx)(n.h2,{id:"addclass009-\u65b0\u589e",children:"addClass(0.0.9 \u65b0\u589e)"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u5de5\u5177\u51fd\u6570\u7528\u4e8e\u7ed9 dom \u5143\u7d20\u6dfb\u52a0\u7c7b\u540d\uff0c\u9700\u8981\u4f20\u5165 2 \u4e2a\u53c2\u6570\uff0c\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const html = util.addClass(`app`, util.$('#app'));\n// \u7ed9id\u4e3aapp\u7684\u5143\u7d20\u6dfb\u52a0app\u7c7b\u540d\n"})}),"\n",(0,i.jsx)(n.h2,{id:"removeclass011-\u65b0\u589e",children:"removeClass(0.1.1 \u65b0\u589e)"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u5de5\u5177\u51fd\u6570\u7528\u4e8e\u7ed9 dom \u5143\u7d20\u79fb\u9664\u7c7b\u540d\uff0c\u9700\u8981\u4f20\u5165 2 \u4e2a\u53c2\u6570\uff0c\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const html = util.removeClass(`app`, util.$('#app'));\n// \u7ed9id\u4e3aapp\u7684\u5143\u7d20\u79fb\u9664app\u7c7b\u540d\uff0c\u5982\u679c\u542b\u6709app\u7c7b\u540d\n"})}),"\n",(0,i.jsx)(n.h2,{id:"off009-\u65b0\u589e",children:"off(0.0.9 \u65b0\u589e)"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u65b9\u6cd5\u7528\u4e8e\u7ed9\u79fb\u9664\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u4f20\u5165\u56db\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u4e3a DOM \u5143\u7d20\uff0c\u7b2c\u4e8c\u4e2a\u4e3a\u4e8b\u4ef6\u540d\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u4e3a\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u7b2c\u56db\u4e2a\u53c2\u6570\u4e3a\u4e00\u4e2a\u5e03\u5c14\u503c\u3002\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const test = document.getElementById('test');\nconst handler = e => console.log(e.target.tagName);\nutil.off(test, 'click', handler);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"on009-\u65b0\u589e",children:"on(0.0.9 \u65b0\u589e)"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u65b9\u6cd5\u7528\u4e8e\u6dfb\u52a0\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u53c2\u6570\u7b49\u540c off \u65b9\u6cd5\u3002\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const test = document.getElementById('test');\nconst handler = e => console.log(e.target.tagName);\nutil.on(test, 'click', handler);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"isarray012-\u65b0\u589e",children:"isArray(0.1.2 \u65b0\u589e)"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u65b9\u6cd5\u7528\u4e8e\u5224\u65ad\u503c\u662f\u5426\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u53c2\u6570\u4e3a\u4efb\u610f\u503c\u3002\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const arr = [1, 2, 3];\nutil.isArray(arr); // true\n"})}),"\n",(0,i.jsx)(n.h2,{id:"isremovenode012-\u65b0\u589e",children:"isRemoveNode(0.1.2 \u65b0\u589e)"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u65b9\u6cd5\u7528\u4e8e\u5224\u65ad\u4e00\u4e2a\u8282\u70b9\u662f\u5426\u53ef\u4ee5\u88ab\u5220\u9664\uff0c\u53c2\u6570\u4e3a\u4efb\u610f DOM \u8282\u70b9\u5143\u7d20\u3002\u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const test = document.getElementById('test');\nutil.isRemoveNode(test); // true\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},5296:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var i=s(758);const l={},t=i.createContext(l);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);