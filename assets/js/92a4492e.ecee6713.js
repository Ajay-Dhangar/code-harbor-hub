"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[89360],{71716:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(17624),a=i(4552);const r={id:"number-datatypes-in-javascript",title:"Number Data Types in JavaScript",sidebar_label:"Number",sidebar_position:1,tags:["JavaScript","Data Types","Primitive Data Types","Number","Integer","Floating-Point Number","NaN","Infinity","BigInt","Number.MAX_VALUE","Number.MIN_VALUE","Number.EPSILON","Number.POSITIVE_INFINITY","Number.NEGATIVE_INFINITY","Number.NaN"],description:"What is the number data type in JavaScript? Learn about the number data type in JavaScript, including integers, floating-point numbers, NaN, Infinity, and BigInt."},s=void 0,l={id:"javascript/datatypes/primitive-data-types/number-datatypes-in-javascript",title:"Number Data Types in JavaScript",description:"What is the number data type in JavaScript? Learn about the number data type in JavaScript, including integers, floating-point numbers, NaN, Infinity, and BigInt.",source:"@site/docs/javascript/datatypes/primitive-data-types/number-js.md",sourceDirName:"javascript/datatypes/primitive-data-types",slug:"/javascript/datatypes/primitive-data-types/number-datatypes-in-javascript",permalink:"/docs/javascript/datatypes/primitive-data-types/number-datatypes-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/javascript/datatypes/primitive-data-types/number-js.md",tags:[{label:"JavaScript",permalink:"/docs/tags/java-script"},{label:"Data Types",permalink:"/docs/tags/data-types"},{label:"Primitive Data Types",permalink:"/docs/tags/primitive-data-types"},{label:"Number",permalink:"/docs/tags/number"},{label:"Integer",permalink:"/docs/tags/integer"},{label:"Floating-Point Number",permalink:"/docs/tags/floating-point-number"},{label:"NaN",permalink:"/docs/tags/na-n"},{label:"Infinity",permalink:"/docs/tags/infinity"},{label:"BigInt",permalink:"/docs/tags/big-int"},{label:"Number.MAX_VALUE",permalink:"/docs/tags/number-max-value"},{label:"Number.MIN_VALUE",permalink:"/docs/tags/number-min-value"},{label:"Number.EPSILON",permalink:"/docs/tags/number-epsilon"},{label:"Number.POSITIVE_INFINITY",permalink:"/docs/tags/number-positive-infinity"},{label:"Number.NEGATIVE_INFINITY",permalink:"/docs/tags/number-negative-infinity"},{label:"Number.NaN",permalink:"/docs/tags/number-na-n"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1709003935e3,sidebarPosition:1,frontMatter:{id:"number-datatypes-in-javascript",title:"Number Data Types in JavaScript",sidebar_label:"Number",sidebar_position:1,tags:["JavaScript","Data Types","Primitive Data Types","Number","Integer","Floating-Point Number","NaN","Infinity","BigInt","Number.MAX_VALUE","Number.MIN_VALUE","Number.EPSILON","Number.POSITIVE_INFINITY","Number.NEGATIVE_INFINITY","Number.NaN"],description:"What is the number data type in JavaScript? Learn about the number data type in JavaScript, including integers, floating-point numbers, NaN, Infinity, and BigInt."},sidebar:"javascript",previous:{title:"Primitive Data Types",permalink:"/docs/category/primitive-data-types-1"},next:{title:"String",permalink:"/docs/javascript/datatypes/primitive-data-types/string-datatypes-in-javascript"}},c={},d=[{value:"What is a Number in JavaScript?",id:"what-is-a-number-in-javascript",level:2},{value:"How to Create a Number in JavaScript?",id:"how-to-create-a-number-in-javascript",level:2},{value:"Integer",id:"integer",level:2},{value:"Floating-Point Number",id:"floating-point-number",level:2},{value:"NaN (Not a Number)",id:"nan-not-a-number",level:2},{value:"Infinity",id:"infinity",level:2},{value:"BigInt",id:"bigint",level:2},{value:"Conclusion",id:"conclusion",level:2}];function o(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Numbers are a primitive data type in JavaScript. They are used to represent numeric values. JavaScript uses the ",(0,t.jsx)(n.code,{children:"Number"})," object to represent both integer and floating-point numbers."]}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD;\n    A(Number)--\x3e|Integer| B(1, 2, 3, etc.);\n    A(Number)--\x3e|Float| C(1.1, 2.2, 3.3, etc.);\n    A(Number)--\x3e|NaN| D(Not a Number);\n    A(Number)--\x3e|Infinity| E(Positive Infinity, Negative Infinity);\n    A(Number)--\x3e|BigInt| F(9007199254740991n);\n"}),"\n",(0,t.jsx)(n.h2,{id:"what-is-a-number-in-javascript",children:"What is a Number in JavaScript?"}),"\n",(0,t.jsxs)(n.p,{children:["In JavaScript, numbers are used to represent numeric values. JavaScript uses the ",(0,t.jsx)(n.code,{children:"Number"})," object to represent both integer and floating-point numbers."]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-create-a-number-in-javascript",children:"How to Create a Number in JavaScript?"}),"\n",(0,t.jsx)(n.p,{children:"You can create a number in JavaScript using the following syntax:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="Creating a Number in JavaScript"',children:"let count = 100; // Integer\nlet price = 99.99; // Floating-point number\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the above example, ",(0,t.jsx)(n.code,{children:"count"})," is an integer, and ",(0,t.jsx)(n.code,{children:"price"})," is a floating-point number."]}),"\n",(0,t.jsx)(n.h2,{id:"integer",children:"Integer"}),"\n",(0,t.jsx)(n.p,{children:"An integer is a whole number, positive or negative, without decimals, of unlimited length. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="Integer"',children:"let count = 100;\nlet temperature = -10;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"floating-point-number",children:"Floating-Point Number"}),"\n",(0,t.jsx)(n.p,{children:"A floating-point number is a number with a decimal point or an exponent. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="Floating-Point Number"',children:"let price = 99.99;\nlet pi = 3.14;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"nan-not-a-number",children:"NaN (Not a Number)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"NaN"}),' is a special value that represents "Not-a-Number". It indicates that a value is not a legal number. For example:']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="NaN"',children:'let result = 100 / "Apple";\nconsole.log(result); // Output: NaN\n'})}),"\n",(0,t.jsx)(n.h2,{id:"infinity",children:"Infinity"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Infinity"})," is a special value that represents positive infinity. It is displayed when a number exceeds the upper limit of the floating-point numbers. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="Infinity"',children:"let max = Number.MAX_VALUE;\nlet infinity = max * 2;\nconsole.log(infinity); // Output: Infinity\n"})}),"\n",(0,t.jsx)(n.h2,{id:"bigint",children:"BigInt"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"bigint"})," data type is used to represent whole numbers larger than ",(0,t.jsx)(n.code,{children:"2^53 - 1"}),". It is a new feature in JavaScript and is not supported in all browsers. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="BigInt"',children:"let value = 9007199254740991n;\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"\ud83d\udcdd Note",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"n"})," at the end of the number indicates that it is a ",(0,t.jsx)(n.code,{children:"bigint"}),". You can also create a ",(0,t.jsx)(n.code,{children:"bigint"})," using the ",(0,t.jsx)(n.code,{children:"BigInt()"})," function. For example: ",(0,t.jsx)(n.code,{children:"let value = BigInt(9007199254740991);"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"n"})," is not a part of the number, it is a part of the syntax to create a ",(0,t.jsx)(n.code,{children:"bigint"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You cannot perform arithmetic operations between ",(0,t.jsx)(n.code,{children:"bigint"})," and other number types. You need to convert the other number types to ",(0,t.jsx)(n.code,{children:"bigint"})," before performing arithmetic operations."]}),"\n",(0,t.jsxs)(n.li,{children:["infinity is used to represent positive infinity, and ",(0,t.jsx)(n.code,{children:"-Infinity"})," is used to represent negative infinity."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"NaN"}),' is used to represent "Not-a-Number". It indicates that a value is not a legal number.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Number.MAX_VALUE"})," is the largest positive finite value representable in JavaScript."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Number.MIN_VALUE"})," is the smallest positive value representable in JavaScript."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Number.EPSILON"})," is the smallest interval between two representable numbers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Number.POSITIVE_INFINITY"})," is the positive infinity value."]}),"\n"]})}),"\n",(0,t.jsx)(n.admonition,{title:"tipes and tricks",type:"tip",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Integers:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"An integer is a whole number, positive or negative, without decimals, of unlimited length."}),"\n",(0,t.jsxs)(n.li,{children:["For example: ",(0,t.jsx)(n.code,{children:"let count = 100;"}),", ",(0,t.jsx)(n.code,{children:"let temperature = -10;"})]}),"\n",(0,t.jsxs)(n.li,{children:["Output: ",(0,t.jsx)(n.code,{children:"100"}),", ",(0,t.jsx)(n.code,{children:"-10"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Floating-Point Numbers:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A floating-point number is a number with a decimal point or an exponent."}),"\n",(0,t.jsxs)(n.li,{children:["For example: ",(0,t.jsx)(n.code,{children:"let price = 99.99;"}),", ",(0,t.jsx)(n.code,{children:"let pi = 3.14;"})]}),"\n",(0,t.jsxs)(n.li,{children:["Output: ",(0,t.jsx)(n.code,{children:"99.99"}),", ",(0,t.jsx)(n.code,{children:"3.14"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["NaN (Not a Number):","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"NaN"}),' is a special value that represents "Not-a-Number".']}),"\n",(0,t.jsx)(n.li,{children:"It indicates that a value is not a legal number."}),"\n",(0,t.jsxs)(n.li,{children:["For example: ",(0,t.jsx)(n.code,{children:'let result = 100 / "Apple";'})]}),"\n",(0,t.jsxs)(n.li,{children:["Output: ",(0,t.jsx)(n.code,{children:"NaN"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Infinity:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Infinity"})," is a special value that represents positive infinity."]}),"\n",(0,t.jsx)(n.li,{children:"It is displayed when a number exceeds the upper limit of the floating-point numbers."}),"\n",(0,t.jsxs)(n.li,{children:["For example: ",(0,t.jsx)(n.code,{children:"let max = Number.MAX_VALUE;"}),", ",(0,t.jsx)(n.code,{children:"let infinity = max * 2;"})]}),"\n",(0,t.jsxs)(n.li,{children:["Output: ",(0,t.jsx)(n.code,{children:"Infinity"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["BigInt:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"bigint"})," data type is used to represent whole numbers larger than ",(0,t.jsx)(n.code,{children:"2^53 - 1"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"It is a new feature in JavaScript and is not supported in all browsers."}),"\n",(0,t.jsxs)(n.li,{children:["For example: ",(0,t.jsx)(n.code,{children:"let value = 9007199254740991n;"})]}),"\n",(0,t.jsxs)(n.li,{children:["Output: ",(0,t.jsx)(n.code,{children:"9007199254740991n"})]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["In this article, you learned about the number data type in JavaScript and how to use it. You also learned about integers, floating-point numbers, ",(0,t.jsx)(n.code,{children:"NaN"}),", ",(0,t.jsx)(n.code,{children:"Infinity"}),", and ",(0,t.jsx)(n.code,{children:"BigInt"}),". You can use these data types to represent numeric values in JavaScript."]})]})}function p(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>s});var t=i(11504);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);