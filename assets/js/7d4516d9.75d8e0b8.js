"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[98276],{22044:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var n=t(17624),a=t(4552);const r={id:"bigint-in-javascript",title:"BigInt Data Types in JavaScript",sidebar_label:"BigInt",sidebar_position:6,tags:["JavaScript","Data Types","Primitive Data Types","BigInt","BigInt in JavaScript","BigInt data type"],description:"What is the BigInt data type in JavaScript? Learn about the BigInt data type and how to create BigInt in JavaScript."},s=void 0,c={id:"javascript/datatypes/primitive-data-types/bigint-in-javascript",title:"BigInt Data Types in JavaScript",description:"What is the BigInt data type in JavaScript? Learn about the BigInt data type and how to create BigInt in JavaScript.",source:"@site/docs/javascript/datatypes/primitive-data-types/big-int-js.md",sourceDirName:"javascript/datatypes/primitive-data-types",slug:"/javascript/datatypes/primitive-data-types/bigint-in-javascript",permalink:"/docs/javascript/datatypes/primitive-data-types/bigint-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/javascript/datatypes/primitive-data-types/big-int-js.md",tags:[{label:"JavaScript",permalink:"/docs/tags/java-script"},{label:"Data Types",permalink:"/docs/tags/data-types"},{label:"Primitive Data Types",permalink:"/docs/tags/primitive-data-types"},{label:"BigInt",permalink:"/docs/tags/big-int"},{label:"BigInt in JavaScript",permalink:"/docs/tags/big-int-in-java-script"},{label:"BigInt data type",permalink:"/docs/tags/big-int-data-type"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1709121109e3,sidebarPosition:6,frontMatter:{id:"bigint-in-javascript",title:"BigInt Data Types in JavaScript",sidebar_label:"BigInt",sidebar_position:6,tags:["JavaScript","Data Types","Primitive Data Types","BigInt","BigInt in JavaScript","BigInt data type"],description:"What is the BigInt data type in JavaScript? Learn about the BigInt data type and how to create BigInt in JavaScript."},sidebar:"javascript",previous:{title:"Null",permalink:"/docs/javascript/datatypes/primitive-data-types/null-in-javascript"},next:{title:"Symbol",permalink:"/docs/javascript/datatypes/primitive-data-types/symbol-in-javascript"}},d={},o=[{value:"What is BigInt in JavaScript?",id:"what-is-bigint-in-javascript",level:2},{value:"How to Create BigInt in JavaScript?",id:"how-to-create-bigint-in-javascript",level:2},{value:"Checking for BigInt in JavaScript",id:"checking-for-bigint-in-javascript",level:2},{value:"BigInt vs. Number",id:"bigint-vs-number",level:2},{value:"BigInt Literals",id:"bigint-literals",level:2},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const i={admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"BigInt"})," is a primitive data type in JavaScript. It represents an arbitrary-precision integer. It is used to represent integers larger than the maximum safe integer value."]}),"\n",(0,n.jsx)(i.mermaid,{value:"graph LR;\n    A(BigInt)--\x3e|Represents an arbitrary-precision integer| B(BigIntValue);"}),"\n",(0,n.jsx)(i.h2,{id:"what-is-bigint-in-javascript",children:"What is BigInt in JavaScript?"}),"\n",(0,n.jsxs)(i.p,{children:["In JavaScript, ",(0,n.jsx)(i.code,{children:"BigInt"})," is a primitive data type that represents an arbitrary-precision integer. It is used to represent integers larger than the maximum safe integer value."]}),"\n",(0,n.jsx)(i.h2,{id:"how-to-create-bigint-in-javascript",children:"How to Create BigInt in JavaScript?"}),"\n",(0,n.jsxs)(i.p,{children:["You can create ",(0,n.jsx)(i.code,{children:"BigInt"})," in JavaScript using the following syntax:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",metastring:'title="Creating BigInt in JavaScript"',children:"let bigNumber = 9007199254740991n; // BigInt\n\nconsole.log(bigNumber); // Output: 9007199254740991n\n"})}),"\n",(0,n.jsxs)(i.p,{children:["In the above example, the variable ",(0,n.jsx)(i.code,{children:"bigNumber"})," is assigned the value ",(0,n.jsx)(i.code,{children:"9007199254740991n"}),". The ",(0,n.jsx)(i.code,{children:"n"})," at the end of the number indicates that it is a ",(0,n.jsx)(i.code,{children:"BigInt"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"checking-for-bigint-in-javascript",children:"Checking for BigInt in JavaScript"}),"\n",(0,n.jsxs)(i.p,{children:["You can check if a variable is a ",(0,n.jsx)(i.code,{children:"BigInt"})," using the ",(0,n.jsx)(i.code,{children:"typeof"})," operator."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",metastring:'title="Checking for BigInt in JavaScript"',children:"let bigNumber = 9007199254740991n;\n\nconsole.log(typeof bigNumber); // Output: bigint\n"})}),"\n",(0,n.jsxs)(i.p,{children:["In the above example, the ",(0,n.jsx)(i.code,{children:"typeof"})," operator returns ",(0,n.jsx)(i.code,{children:"bigint"})," for the ",(0,n.jsx)(i.code,{children:"bigNumber"})," variable, indicating that it is a ",(0,n.jsx)(i.code,{children:"BigInt"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"bigint-vs-number",children:"BigInt vs. Number"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"No."}),(0,n.jsx)(i.th,{children:"BigInt"}),(0,n.jsx)(i.th,{children:"Number"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"1."}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"BigInt"})," is used to represent integers larger than the maximum safe integer value."]}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"Number"})," is used to represent both integer and floating-point numbers."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"2."}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"BigInt"})," is suffixed with ",(0,n.jsx)(i.code,{children:"n"})," to indicate that it is a ",(0,n.jsx)(i.code,{children:"BigInt"}),"."]}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"Number"})," is not suffixed with any character."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"3."}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"BigInt"})," is a primitive data type."]}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"Number"})," is a primitive data type."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"4."}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"BigInt"})," is used to perform arithmetic operations on large integers."]}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"Number"})," is used to perform arithmetic operations on numbers."]})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"bigint-literals",children:"BigInt Literals"}),"\n",(0,n.jsxs)(i.p,{children:["A ",(0,n.jsx)(i.code,{children:"BigInt"})," literal is created by appending ",(0,n.jsx)(i.code,{children:"n"})," to the end of an integer or by calling the ",(0,n.jsx)(i.code,{children:"BigInt()"})," function."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",metastring:'title="BigInt Literals"',children:"let bigNumber1 = 9007199254740991n; // BigInt literal\n\nlet bigNumber2 = BigInt(9007199254740991); // BigInt literal using BigInt() function\n"})}),"\n",(0,n.jsxs)(i.p,{children:["In the above example, ",(0,n.jsx)(i.code,{children:"bigNumber1"})," and ",(0,n.jsx)(i.code,{children:"bigNumber2"})," are both ",(0,n.jsx)(i.code,{children:"BigInt"})," literals."]}),"\n",(0,n.jsx)(i.admonition,{title:"\ud83d\udcdd Note",type:"info",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"n"})," at the end of the number indicates that it is a ",(0,n.jsx)(i.code,{children:"BigInt"}),". You can also create a ",(0,n.jsx)(i.code,{children:"BigInt"})," using the ",(0,n.jsx)(i.code,{children:"BigInt()"})," function. For example: ",(0,n.jsx)(i.code,{children:"let bigNumber = BigInt(9007199254740991);"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"n"})," is not a part of the number, it is a part of the syntax to create a ",(0,n.jsx)(i.code,{children:"BigInt"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["You cannot perform arithmetic operations between ",(0,n.jsx)(i.code,{children:"BigInt"})," and other number types. You need to convert the other number types to ",(0,n.jsx)(i.code,{children:"BigInt"})," before performing arithmetic operations."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"perform arithmetic operations between BigInt and other number",src:t(57032).c+"",width:"1311",height:"405"})}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"BigInt"})," is not supported in all browsers. You should check for browser compatibility before using ",(0,n.jsx)(i.code,{children:"BigInt"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"BigInt"})," is a new feature in JavaScript and is not supported in older versions of browsers."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["You can use the ",(0,n.jsx)(i.code,{children:"typeof"})," operator to check if a variable is a ",(0,n.jsx)(i.code,{children:"BigInt"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsxs)(i.p,{children:["In this tutorial, you learned about the ",(0,n.jsx)(i.code,{children:"BigInt"})," data type in JavaScript, how to create ",(0,n.jsx)(i.code,{children:"BigInt"})," in JavaScript, and how to check for ",(0,n.jsx)(i.code,{children:"BigInt"})," in JavaScript. You also learned that ",(0,n.jsx)(i.code,{children:"BigInt"})," is a primitive data type that represents an arbitrary-precision integer and is used to represent integers larger than the maximum safe integer value."]})]})}function h(e={}){const{wrapper:i}={...(0,a.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},57032:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/image-7d356c950d9a4f3f6be26ef19a488063.png"},4552:(e,i,t)=>{t.d(i,{I:()=>c,M:()=>s});var n=t(11504);const a={},r=n.createContext(a);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);