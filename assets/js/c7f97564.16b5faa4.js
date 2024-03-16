"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[73352],{18051:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=i(17624),a=i(4552);const r={id:"where-to-js",title:"Where to Write JavaScript",sidebar_label:"Where to JavaScript",sidebar_position:2,tags:["JavaScript","Introduction of js","Introduction of JavaScript","Where to javascript"],description:"Where to write JavaScript code? Learn about the different places where JavaScript code can be written such as inline JavaScript, internal JavaScript, and external JavaScript."},c=void 0,l={id:"javascript/where-to-js",title:"Where to Write JavaScript",description:"Where to write JavaScript code? Learn about the different places where JavaScript code can be written such as inline JavaScript, internal JavaScript, and external JavaScript.",source:"@site/docs/javascript/where-to-js.md",sourceDirName:"javascript",slug:"/javascript/where-to-js",permalink:"/code-harbor-hub/docs/javascript/where-to-js",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/javascript/where-to-js.md",tags:[{label:"JavaScript",permalink:"/code-harbor-hub/docs/tags/java-script"},{label:"Introduction of js",permalink:"/code-harbor-hub/docs/tags/introduction-of-js"},{label:"Introduction of JavaScript",permalink:"/code-harbor-hub/docs/tags/introduction-of-java-script"},{label:"Where to javascript",permalink:"/code-harbor-hub/docs/tags/where-to-javascript"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710498279,formattedLastUpdatedAt:"Mar 15, 2024",sidebarPosition:2,frontMatter:{id:"where-to-js",title:"Where to Write JavaScript",sidebar_label:"Where to JavaScript",sidebar_position:2,tags:["JavaScript","Introduction of js","Introduction of JavaScript","Where to javascript"],description:"Where to write JavaScript code? Learn about the different places where JavaScript code can be written such as inline JavaScript, internal JavaScript, and external JavaScript."},sidebar:"javascript",previous:{title:"Introduction to JavaScript",permalink:"/code-harbor-hub/docs/javascript/intro-js"},next:{title:"Basic JavaScript",permalink:"/code-harbor-hub/docs/javascript/basic-javascript"}},o={},s=[{value:"1. Inline JavaScript",id:"1-inline-javascript",level:3},{value:"2. Internal JavaScript",id:"2-internal-javascript",level:3},{value:"3. External JavaScript",id:"3-external-javascript",level:3},{value:"Summary",id:"summary",level:3}];function d(e){const t={admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.M)(),...e.components},{BrowserWindow:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("BrowserWindow",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"JavaScript code can be written in three places:"}),"\n",(0,n.jsx)(t.h3,{id:"1-inline-javascript",children:"1. Inline JavaScript"}),"\n",(0,n.jsxs)(t.p,{children:["JavaScript code can be written directly in an HTML file in the HTML element's attribute. For example, in the ",(0,n.jsx)(t.code,{children:"onclick"})," attribute of a button element."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Inline JavaScript</title>\n  </head>\n  <body>\n    <button onclick=\"alert('Hello World!')\">Click me</button>\n  </body>\n</html>\n"})}),"\n",(0,n.jsx)(i,{minHeight:"500",url:"http://127.0.0.1:5500/index.html",children:(0,n.jsx)("button",{onClick:()=>alert("Hello World!"),children:"Click me"})}),"\n",(0,n.jsx)(t.h3,{id:"2-internal-javascript",children:"2. Internal JavaScript"}),"\n",(0,n.jsxs)(t.p,{children:["JavaScript code can be written in the ",(0,n.jsx)(t.code,{children:"<script>"})," tag in the HTML file. The ",(0,n.jsx)(t.code,{children:"<script>"})," tag can be placed in the ",(0,n.jsx)(t.code,{children:"<head>"})," or ",(0,n.jsx)(t.code,{children:"<body>"})," section of the HTML file."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",metastring:'{5-9} title="index.html"',children:"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Internal JavaScript</title>\n    <script>\n      function sayHello() {\n        alert('Hello World!');\n      }\n    <\/script>\n  </head>\n  <body>\n    <button onclick=\"sayHello()\">Click me</button>\n  </body>\n</html>\n"})}),"\n",(0,n.jsx)(i,{minHeight:"500",url:"http://127.0.0.1:5500/index.html",children:(0,n.jsx)("button",{onClick:()=>alert("Hello World!"),children:"Click me"})}),"\n",(0,n.jsx)(t.h3,{id:"3-external-javascript",children:"3. External JavaScript"}),"\n",(0,n.jsxs)(t.p,{children:["JavaScript code can be written in an external file with a ",(0,n.jsx)(t.code,{children:".js"})," extension. The external JavaScript file can be linked to the HTML file using the ",(0,n.jsx)(t.code,{children:"<script>"})," tag."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",metastring:'{5} title="index.html"',children:'<!DOCTYPE html>\n<html>\n  <head>\n    <title>External JavaScript</title>\n    <script src="script.js"><\/script>\n  </head>\n  <body>\n    <button onclick="sayHello()">Click me</button>\n  </body>\n</html>\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="script.js"',children:"function sayHello() {\n  alert('Hello World!');\n}\n"})}),"\n",(0,n.jsx)(i,{minHeight:"500",url:"http://127.0.0.1:5500/index.html",children:(0,n.jsx)("button",{onClick:()=>alert("Hello World!"),children:"Click me"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"It is recommended to write JavaScript code in an external file to separate the structure of the HTML file from the behavior of the web page. This makes the code more organized and easier to maintain."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"It helps to keep the HTML file clean and easy to read. It also allows the JavaScript code to be reused in multiple HTML files."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The external JavaScript file should be linked to the HTML file using the ",(0,n.jsx)(t.code,{children:"<script>"})," tag with the ",(0,n.jsx)(t.code,{children:"src"})," attribute."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"External JavaScript is easy to maintain, debug, and update. It also improves the performance of the web page by allowing the browser to cache the JavaScript file."}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(t.h3,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Inline JavaScript: JavaScript code is written directly in the HTML file in the HTML element's attribute."}),"\n",(0,n.jsxs)(t.li,{children:["Internal JavaScript: JavaScript code is written in the ",(0,n.jsx)(t.code,{children:"<script>"})," tag in the HTML file."]}),"\n",(0,n.jsxs)(t.li,{children:["External JavaScript: JavaScript code is written in an external file with a ",(0,n.jsx)(t.code,{children:".js"})," extension and linked to the HTML file using the ",(0,n.jsx)(t.code,{children:"<script>"})," tag."]}),"\n",(0,n.jsx)(t.li,{children:"It is recommended to write JavaScript code in an external file to separate the structure of the HTML file from the behavior of the web page. This makes the code more organized and easier to maintain."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,t,i)=>{i.d(t,{I:()=>l,M:()=>c});var n=i(11504);const a={},r=n.createContext(a);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);