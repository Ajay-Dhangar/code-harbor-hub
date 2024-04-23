"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[58008],{79296:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=o(17624),a=o(4552);const s={id:"comparison-operator-in-javascript",title:"Comparison Operator in JavaScript",sidebar_label:"Comparison Operator",sidebar_position:4,tags:["JavaScript","Operators","Comparison Operators","Comparison Operator in JavaScript","Equal To Operator","Not Equal To Operator","Strict Equal To Operator","Strict Not Equal To Operator","Greater Than Operator","Less Than Operator","Greater Than or Equal To Operator","Less Than or Equal To Operator"],description:"What is the comparison operator in JavaScript? Learn about the types of comparison operators in JavaScript, including the equal to, not equal to, strict equal to, strict not equal to, greater than, less than, greater than or equal to, and less than or equal to operators."},n=void 0,i={id:"javascript/operators/comparison-operator-in-javascript",title:"Comparison Operator in JavaScript",description:"What is the comparison operator in JavaScript? Learn about the types of comparison operators in JavaScript, including the equal to, not equal to, strict equal to, strict not equal to, greater than, less than, greater than or equal to, and less than or equal to operators.",source:"@site/docs/javascript/operators/comparison-operators-js.md",sourceDirName:"javascript/operators",slug:"/javascript/operators/comparison-operator-in-javascript",permalink:"/docs/javascript/operators/comparison-operator-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/javascript/operators/comparison-operators-js.md",tags:[{label:"JavaScript",permalink:"/docs/tags/java-script"},{label:"Operators",permalink:"/docs/tags/operators"},{label:"Comparison Operators",permalink:"/docs/tags/comparison-operators"},{label:"Comparison Operator in JavaScript",permalink:"/docs/tags/comparison-operator-in-java-script"},{label:"Equal To Operator",permalink:"/docs/tags/equal-to-operator"},{label:"Not Equal To Operator",permalink:"/docs/tags/not-equal-to-operator"},{label:"Strict Equal To Operator",permalink:"/docs/tags/strict-equal-to-operator"},{label:"Strict Not Equal To Operator",permalink:"/docs/tags/strict-not-equal-to-operator"},{label:"Greater Than Operator",permalink:"/docs/tags/greater-than-operator"},{label:"Less Than Operator",permalink:"/docs/tags/less-than-operator"},{label:"Greater Than or Equal To Operator",permalink:"/docs/tags/greater-than-or-equal-to-operator"},{label:"Less Than or Equal To Operator",permalink:"/docs/tags/less-than-or-equal-to-operator"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1708855615e3,sidebarPosition:4,frontMatter:{id:"comparison-operator-in-javascript",title:"Comparison Operator in JavaScript",sidebar_label:"Comparison Operator",sidebar_position:4,tags:["JavaScript","Operators","Comparison Operators","Comparison Operator in JavaScript","Equal To Operator","Not Equal To Operator","Strict Equal To Operator","Strict Not Equal To Operator","Greater Than Operator","Less Than Operator","Greater Than or Equal To Operator","Less Than or Equal To Operator"],description:"What is the comparison operator in JavaScript? Learn about the types of comparison operators in JavaScript, including the equal to, not equal to, strict equal to, strict not equal to, greater than, less than, greater than or equal to, and less than or equal to operators."},sidebar:"javascript",previous:{title:"Assignment Operator",permalink:"/docs/javascript/operators/assignment-operator-in-javascript"},next:{title:"String Operator",permalink:"/docs/javascript/operators/string-operator-in-javascript"}},l={},c=[{value:"Types of Comparison Operators in JavaScript",id:"types-of-comparison-operators-in-javascript",level:2},{value:"Equal To Operator (==)",id:"equal-to-operator-",level:3},{value:"Not Equal To Operator (!=)",id:"not-equal-to-operator-",level:3},{value:"Strict Equal To Operator (===)",id:"strict-equal-to-operator-",level:3},{value:"Strict Not Equal To Operator (!==)",id:"strict-not-equal-to-operator-",level:3},{value:"Greater Than Operator (<code>&gt;</code>)",id:"greater-than-operator-",level:3},{value:"Less Than Operator (<code>&lt;</code>)",id:"less-than-operator-",level:3},{value:"Greater Than or Equal To Operator (<code>&gt;=</code>)",id:"greater-than-or-equal-to-operator-",level:3},{value:"Less Than or Equal To Operator (<code>&lt;=</code>)",id:"less-than-or-equal-to-operator-",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const r={admonition:"admonition",code:"code",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["In JavaScript, the comparison operators are used to compare two values. The comparison operators include equal to (",(0,t.jsx)(r.code,{children:"=="}),"), not equal to (",(0,t.jsx)(r.code,{children:"!="}),"), strict equal to (",(0,t.jsx)(r.code,{children:"==="}),"), strict not equal to (",(0,t.jsx)(r.code,{children:"!=="}),"), greater than (",(0,t.jsx)(r.code,{children:">"}),"), less than (",(0,t.jsx)(r.code,{children:"<"}),"), greater than or equal to (",(0,t.jsx)(r.code,{children:">="}),"), and less than or equal to (",(0,t.jsx)(r.code,{children:"<="}),")."]}),"\n",(0,t.jsx)(r.mermaid,{value:"---\ntitle: Comparison Operators in JavaScript\n---\n\nclassDiagram\n    class ComparisonOperation {\n        operand1\n        operand2\n        result\n        compare()\n    }\n\n    class EqualToOperation {\n        compare(): (operand1 == operand2)\n    }\n\n    class NotEqualToOperation {\n        compare(): (operand1 != operand2)\n    }\n\n    class StrictEqualToOperation {\n        compare(): (operand1 === operand2)\n    }\n\n    class StrictNotEqualToOperation {\n        compare(): (operand1 !== operand2)\n    }\n\n    class GreaterThanOperation {\n        compare(): (operand1 > operand2)\n    }\n\n    class LessThanOperation {\n        compare(): (operand1 < operand2)\n    }\n\n    class GreaterThanOrEqualToOperation {\n        compare(): (operand1 >= operand2)\n    }\n\n    class LessThanOrEqualToOperation {\n        compare(): (operand1 <= operand2)\n}\n\n    ComparisonOperation <|-- EqualToOperation\n    ComparisonOperation <|-- NotEqualToOperation\n    ComparisonOperation <|-- StrictEqualToOperation\n    ComparisonOperation <|-- StrictNotEqualToOperation\n    ComparisonOperation <|-- GreaterThanOperation\n    ComparisonOperation <|-- LessThanOperation\n    ComparisonOperation <|-- GreaterThanOrEqualToOperation\n    ComparisonOperation <|-- LessThanOrEqualToOperation"}),"\n",(0,t.jsx)(r.h2,{id:"types-of-comparison-operators-in-javascript",children:"Types of Comparison Operators in JavaScript"}),"\n",(0,t.jsx)(r.p,{children:"The following are the types of comparison operators in JavaScript:"}),"\n",(0,t.jsx)(r.h3,{id:"equal-to-operator-",children:"Equal To Operator (==)"}),"\n",(0,t.jsxs)(r.p,{children:["The equal to operator (",(0,t.jsx)(r.code,{children:"=="}),") is used to compare two values. It returns ",(0,t.jsx)(r.code,{children:"true"})," if the values are equal, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'{3} title="Equal To Operator" showLineNumbers',children:"const num1 = 10;\nconst num2 = 10;\nconsole.log(num1 == num2); // Output: true\n"})}),"\n",(0,t.jsx)(r.h3,{id:"not-equal-to-operator-",children:"Not Equal To Operator (!=)"}),"\n",(0,t.jsxs)(r.p,{children:["The not equal to operator (",(0,t.jsx)(r.code,{children:"!="}),") is used to compare two values. It returns ",(0,t.jsx)(r.code,{children:"true"})," if the values are not equal, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'{3} title="Not Equal To Operator" showLineNumbers',children:"const num1 = 10;\nconst num2 = 20;\nconsole.log(num1 != num2); // Output: true\n"})}),"\n",(0,t.jsx)(r.h3,{id:"strict-equal-to-operator-",children:"Strict Equal To Operator (===)"}),"\n",(0,t.jsxs)(r.p,{children:["The strict equal to operator (",(0,t.jsx)(r.code,{children:"==="}),") is used to compare two values. It returns ",(0,t.jsx)(r.code,{children:"true"})," if the values are equal and of the same type, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'{3} title="Strict Equal To Operator" showLineNumbers',children:"const num1 = 10;\nconst num2 = '10';\nconsole.log(num1 === num2); // Output: false\n"})}),"\n",(0,t.jsx)(r.h3,{id:"strict-not-equal-to-operator-",children:"Strict Not Equal To Operator (!==)"}),"\n",(0,t.jsxs)(r.p,{children:["The strict not equal to operator (",(0,t.jsx)(r.code,{children:"!=="}),") is used to compare two values. It returns ",(0,t.jsx)(r.code,{children:"true"})," if the values are not equal and of the same type, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'{3} title="Strict Not Equal To Operator" showLineNumbers',children:"const num1 = 10;\nconst num2 = '10';\nconsole.log(num1 !== num2); // Output: true\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"greater-than-operator-",children:["Greater Than Operator (",(0,t.jsx)(r.code,{children:">"}),")"]}),"\n",(0,t.jsxs)(r.p,{children:["The greater than operator (",(0,t.jsx)(r.code,{children:">"}),") is used to compare two values. It returns ",(0,t.jsx)(r.code,{children:"true"})," if the left operand is greater than the right operand, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'{3} title="Greater Than Operator" showLineNumbers',children:"const num1 = 20;\nconst num2 = 10;\nconsole.log(num1 > num2); // Output: true\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"less-than-operator-",children:["Less Than Operator (",(0,t.jsx)(r.code,{children:"<"}),")"]}),"\n",(0,t.jsxs)(r.p,{children:["The less than operator (",(0,t.jsx)(r.code,{children:"<"}),") is used to compare two values. It returns ",(0,t.jsx)(r.code,{children:"true"})," if the left operand is less than the right operand, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'{3} title="Less Than Operator" showLineNumbers',children:"const num1 = 10;\nconst num2 = 20;\nconsole.log(num1 < num2); // Output: true\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"greater-than-or-equal-to-operator-",children:["Greater Than or Equal To Operator (",(0,t.jsx)(r.code,{children:">="}),")"]}),"\n",(0,t.jsxs)(r.p,{children:["The greater than or equal to operator (",(0,t.jsx)(r.code,{children:">="}),") is used to compare two values. It returns ",(0,t.jsx)(r.code,{children:"true"})," if the left operand is greater than or equal to the right operand, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'{3} title="Greater Than or Equal To Operator" showLineNumbers',children:"const num1 = 20;\nconst num2 = 20;\nconsole.log(num1 >= num2); // Output: true\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"less-than-or-equal-to-operator-",children:["Less Than or Equal To Operator (",(0,t.jsx)(r.code,{children:"<="}),")"]}),"\n",(0,t.jsxs)(r.p,{children:["The less than or equal to operator (",(0,t.jsx)(r.code,{children:"<="}),") is used to compare two values. It returns ",(0,t.jsx)(r.code,{children:"true"})," if the left operand is less than or equal to the right operand, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'{3} title="Less Than or Equal To Operator" showLineNumbers',children:"const num1 = 10;\nconst num2 = 20;\nconsole.log(num1 <= num2); // Output: true\n"})}),"\n",(0,t.jsx)(r.p,{children:"In the above examples, the comparison operators are used to compare two values and return a boolean value based on the comparison result."}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["The strict equality (",(0,t.jsx)(r.code,{children:"==="}),") and strict inequality (",(0,t.jsx)(r.code,{children:"!=="}),") operators are preferred over the equality (",(0,t.jsx)(r.code,{children:"=="}),") and inequality (",(0,t.jsx)(r.code,{children:"!="}),") operators because they compare both the value and the type of the operands."]})}),"\n",(0,t.jsxs)(r.admonition,{title:"tips and tricks",type:"tip",children:[(0,t.jsx)(r.p,{children:(0,t.jsxs)(r.strong,{children:["1. Defference between ",(0,t.jsx)(r.code,{children:"=="})," and ",(0,t.jsx)(r.code,{children:"==="})]})}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"No."}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.code,{children:"=="})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.code,{children:"==="})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1."}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"=="})," operator is used to compare two values. It returns ",(0,t.jsx)(r.code,{children:"true"})," if the values are equal, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"==="})," operator is used to compare two values. It returns ",(0,t.jsx)(r.code,{children:"true"})," if the values are equal and of the same type, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"2."}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"=="})," operator does not consider the type of the operands."]}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"==="})," operator considers the type of the operands."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3."}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"=="})," operator is called the equality operator."]}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"==="})," operator is called the strict equality operator."]})]})]})]}),(0,t.jsx)(r.p,{children:(0,t.jsxs)(r.strong,{children:["2. Defference between ",(0,t.jsx)(r.code,{children:"!="})," and ",(0,t.jsx)(r.code,{children:"!=="})]})}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"No."}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.code,{children:"!="})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.code,{children:"!=="})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1."}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"!="})," operator is used to compare two values. It returns ",(0,t.jsx)(r.code,{children:"true"})," if the values are not equal, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"!=="})," operator is used to compare two values. It returns ",(0,t.jsx)(r.code,{children:"true"})," if the values are not equal and of the same type, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"2."}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"!="})," operator does not consider the type of the operands."]}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"!=="})," operator considers the type of the operands."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3."}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"!="})," operator is called the inequality operator."]}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"!=="})," operator is called the strict inequality operator."]})]})]})]}),(0,t.jsx)(r.p,{children:(0,t.jsxs)(r.strong,{children:["3. Defference between ",(0,t.jsx)(r.code,{children:">"})," and ",(0,t.jsx)(r.code,{children:">="})]})}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"No."}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.code,{children:">"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.code,{children:">="})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1."}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:">"})," operator is used to compare two values. It returns ",(0,t.jsx)(r.code,{children:"true"})," if the left operand is greater than the right operand, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:">="})," operator is used to compare two values. It returns ",(0,t.jsx)(r.code,{children:"true"})," if the left operand is greater than or equal to the right operand, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"2."}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:">"})," operator is called the greater than operator."]}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:">="})," operator is called the greater than or equal to operator."]})]})]})]}),(0,t.jsx)(r.p,{children:(0,t.jsxs)(r.strong,{children:["4. Defference between ",(0,t.jsx)(r.code,{children:"<"})," and ",(0,t.jsx)(r.code,{children:"<="})]})}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"No."}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.code,{children:"<"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.code,{children:"<="})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1."}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"<"})," operator is used to compare two values. It returns ",(0,t.jsx)(r.code,{children:"true"})," if the left operand is less than the right operand, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"<="})," operator is used to compare two values. It returns ",(0,t.jsx)(r.code,{children:"true"})," if the left operand is less than or equal to the right operand, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"2."}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"<"})," operator is called the less than operator."]}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.code,{children:"<="})," operator is called the less than or equal to operator."]})]})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(r.p,{children:"In this tutorial, you learned about the comparison operators in JavaScript and how to use them to compare two values. You also learned about the different types of comparison operators and their usage with examples. You can use the comparison operators to compare values and make decisions based on the comparison result in your JavaScript programs."})]})}function h(e={}){const{wrapper:r}={...(0,a.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,r,o)=>{o.d(r,{I:()=>i,M:()=>n});var t=o(11504);const a={},s=t.createContext(a);function n(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);