"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[57836],{20860:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=a(17624),r=a(4552);const n={id:"type-operator-in-javascript",title:"Type Operator in JavaScript",sidebar_label:"Type Operator",sidebar_position:8,tags:["JavaScript","Operators","Type Operator","typeof","Type Operator Syntax","Type Operator Example","ECMAScript 1","ES1","Data Type","Type Checking","Conditional Statements","Unary Operator","Data Types","Number","String","Boolean","Object","Array","Function","Undefined","Symbol","BigInt"],description:"What is the type operator in JavaScript? Learn about the type operator, its syntax, and how to use it to check the data type of a value or variable in JavaScript."},i=void 0,s={id:"javascript/operators/type-operator-in-javascript",title:"Type Operator in JavaScript",description:"What is the type operator in JavaScript? Learn about the type operator, its syntax, and how to use it to check the data type of a value or variable in JavaScript.",source:"@site/docs/javascript/operators/type-operators-js.md",sourceDirName:"javascript/operators",slug:"/javascript/operators/type-operator-in-javascript",permalink:"/docs/javascript/operators/type-operator-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/javascript/operators/type-operators-js.md",tags:[{label:"JavaScript",permalink:"/docs/tags/java-script"},{label:"Operators",permalink:"/docs/tags/operators"},{label:"Type Operator",permalink:"/docs/tags/type-operator"},{label:"typeof",permalink:"/docs/tags/typeof"},{label:"Type Operator Syntax",permalink:"/docs/tags/type-operator-syntax"},{label:"Type Operator Example",permalink:"/docs/tags/type-operator-example"},{label:"ECMAScript 1",permalink:"/docs/tags/ecma-script-1"},{label:"ES1",permalink:"/docs/tags/es-1"},{label:"Data Type",permalink:"/docs/tags/data-type"},{label:"Type Checking",permalink:"/docs/tags/type-checking"},{label:"Conditional Statements",permalink:"/docs/tags/conditional-statements"},{label:"Unary Operator",permalink:"/docs/tags/unary-operator"},{label:"Data Types",permalink:"/docs/tags/data-types"},{label:"Number",permalink:"/docs/tags/number"},{label:"String",permalink:"/docs/tags/string"},{label:"Boolean",permalink:"/docs/tags/boolean"},{label:"Object",permalink:"/docs/tags/object"},{label:"Array",permalink:"/docs/tags/array"},{label:"Function",permalink:"/docs/tags/function"},{label:"Undefined",permalink:"/docs/tags/undefined"},{label:"Symbol",permalink:"/docs/tags/symbol"},{label:"BigInt",permalink:"/docs/tags/big-int"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1708855615e3,sidebarPosition:8,frontMatter:{id:"type-operator-in-javascript",title:"Type Operator in JavaScript",sidebar_label:"Type Operator",sidebar_position:8,tags:["JavaScript","Operators","Type Operator","typeof","Type Operator Syntax","Type Operator Example","ECMAScript 1","ES1","Data Type","Type Checking","Conditional Statements","Unary Operator","Data Types","Number","String","Boolean","Object","Array","Function","Undefined","Symbol","BigInt"],description:"What is the type operator in JavaScript? Learn about the type operator, its syntax, and how to use it to check the data type of a value or variable in JavaScript."},sidebar:"javascript",previous:{title:"Ternary Operator",permalink:"/docs/javascript/operators/ternary-operator-in-javascript"},next:{title:"Data Types in JavaScript",permalink:"/docs/category/data-types-in-javascript-1"}},l={},p=[{value:"Syntax of Type Operator",id:"syntax-of-type-operator",level:2},{value:"Example of Type Operator",id:"example-of-type-operator",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["In JavaScript, the type operator (",(0,o.jsx)(t.code,{children:"typeof"}),") is a unary operator that returns a string indicating the type of the operand. It is used to check the data type of a value or variable."]}),"\n",(0,o.jsx)(t.mermaid,{value:"---\ntitle: Type Operator in JavaScript\n---\n\nclassDiagram\n    class TypeOperation {\n        operand\n        result\n        perform()\n    }\n\n    class TypeOfOperation {\n        perform(): (typeof operand)\n    }\n\n    TypeOperation <|-- TypeOfOperation"}),"\n",(0,o.jsx)(t.h2,{id:"syntax-of-type-operator",children:"Syntax of Type Operator"}),"\n",(0,o.jsx)(t.p,{children:"The syntax of the type operator is as follows:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'{1} title="Type Operator Syntax" showLineNumbers',children:"let result = typeof operand;\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"operand"}),": The value or variable for which the type is to be checked."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"example-of-type-operator",children:"Example of Type Operator"}),"\n",(0,o.jsx)(t.p,{children:"The following example demonstrates the usage of the type operator:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="Type Operator Example" showLineNumbers',children:'let num = 10;\nlet str = "Hello";\nlet bool = true;\nlet obj = {};\nlet arr = [];\nlet func = function() {};\n\nconsole.log(typeof num); // Output: number\nconsole.log(typeof str); // Output: string\nconsole.log(typeof bool); // Output: boolean\nconsole.log(typeof obj); // Output: object\nconsole.log(typeof arr); // Output: object\nconsole.log(typeof func); // Output: function\n'})}),"\n",(0,o.jsxs)(t.p,{children:["In this example, the type operator is used to check the data type of the values and variables. The ",(0,o.jsx)(t.code,{children:"typeof"})," operator returns a string indicating the type of the operand."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"typeof"})," operator returns the following values for different data types:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"number"})," for numbers"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"string"})," for strings"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"boolean"})," for booleans"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"object"})," for objects, arrays, and null"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"function"})," for functions"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"undefined"})," for undefined values"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"symbol"})," for symbols"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"bigint"})," for big integers"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"null"})," for null values"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"typeof"})," operator is a useful tool for checking the data type of a value or variable in JavaScript. It is often used in conditional statements and type checking operations."]}),"\n",(0,o.jsx)(t.admonition,{title:"\ud83d\udcdd Note",type:"info",children:(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"typeof"})," operator is a unary operator that returns a string indicating the type of the operand."]}),"\n",(0,o.jsx)(t.li,{children:"It is introduced in ECMAScript 1 (1997)."}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"typeof"})," operator can be used to check the data type of a value or variable, and it returns a string indicating the type of the operand."]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"typeof"})," operator returns different values for different data types, such as ",(0,o.jsx)(t.code,{children:"number"}),", ",(0,o.jsx)(t.code,{children:"string"}),", ",(0,o.jsx)(t.code,{children:"boolean"}),", ",(0,o.jsx)(t.code,{children:"object"}),", ",(0,o.jsx)(t.code,{children:"function"}),", ",(0,o.jsx)(t.code,{children:"undefined"}),", ",(0,o.jsx)(t.code,{children:"symbol"}),", ",(0,o.jsx)(t.code,{children:"bigint"}),", ",(0,o.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"typeof"})," operator is often used in conditional statements and type checking operations to determine the data type of a value or variable."]}),"\n"]})}),"\n",(0,o.jsxs)(t.p,{children:["In this guide, you learned about the type operator in JavaScript and how to use it to check the data type of a value or variable. You also saw examples of using the ",(0,o.jsx)(t.code,{children:"typeof"})," operator to check the data type of numbers, strings, booleans, objects, arrays, and functions. The ",(0,o.jsx)(t.code,{children:"typeof"})," operator is a useful tool for type checking and conditional statements in JavaScript."]}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(t.p,{children:["The type operator (",(0,o.jsx)(t.code,{children:"typeof"}),") is a unary operator that returns a string indicating the type of the operand. It is used to check the data type of a value or variable. The ",(0,o.jsx)(t.code,{children:"typeof"})," operator returns different values for different data types, such as ",(0,o.jsx)(t.code,{children:"number"}),", ",(0,o.jsx)(t.code,{children:"string"}),", ",(0,o.jsx)(t.code,{children:"boolean"}),", ",(0,o.jsx)(t.code,{children:"object"}),", ",(0,o.jsx)(t.code,{children:"function"}),", ",(0,o.jsx)(t.code,{children:"undefined"}),", ",(0,o.jsx)(t.code,{children:"symbol"}),", ",(0,o.jsx)(t.code,{children:"bigint"}),", ",(0,o.jsx)(t.code,{children:"null"}),". It is often used in conditional statements and type checking operations to determine the data type of a value or variable. The ",(0,o.jsx)(t.code,{children:"typeof"})," operator is a useful tool for type checking and conditional statements in JavaScript."]})]})}function d(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},4552:(e,t,a)=>{a.d(t,{I:()=>s,M:()=>i});var o=a(11504);const r={},n=o.createContext(r);function i(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);