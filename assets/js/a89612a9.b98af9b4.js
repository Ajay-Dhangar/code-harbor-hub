"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[83048],{13472:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=a(17624),s=a(4552);const i={id:"switch-in-javascript",title:"Switch Statement in JavaScript",sidebar_label:"Switch Statement",sidebar_position:20,tags:["JavaScript","Conditional","Statement","Switch","Case","Break","Default","Decision","Making","Control","Flow","Conditional","Statements"],description:"In this tutorial, we will learn about the switch statement in JavaScript. We will learn how to use the switch statement to make decisions in JavaScript."},o=void 0,c={id:"javascript/switch-in-javascript",title:"Switch Statement in JavaScript",description:"In this tutorial, we will learn about the switch statement in JavaScript. We will learn how to use the switch statement to make decisions in JavaScript.",source:"@site/docs/javascript/switch.md",sourceDirName:"javascript",slug:"/javascript/switch-in-javascript",permalink:"/docs/javascript/switch-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/javascript/switch.md",tags:[{label:"JavaScript",permalink:"/docs/tags/java-script"},{label:"Conditional",permalink:"/docs/tags/conditional"},{label:"Statement",permalink:"/docs/tags/statement"},{label:"Switch",permalink:"/docs/tags/switch"},{label:"Case",permalink:"/docs/tags/case"},{label:"Break",permalink:"/docs/tags/break"},{label:"Default",permalink:"/docs/tags/default"},{label:"Decision",permalink:"/docs/tags/decision"},{label:"Making",permalink:"/docs/tags/making"},{label:"Control",permalink:"/docs/tags/control"},{label:"Flow",permalink:"/docs/tags/flow"},{label:"Statements",permalink:"/docs/tags/statements"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:171023759e4,sidebarPosition:20,frontMatter:{id:"switch-in-javascript",title:"Switch Statement in JavaScript",sidebar_label:"Switch Statement",sidebar_position:20,tags:["JavaScript","Conditional","Statement","Switch","Case","Break","Default","Decision","Making","Control","Flow","Conditional","Statements"],description:"In this tutorial, we will learn about the switch statement in JavaScript. We will learn how to use the switch statement to make decisions in JavaScript."},sidebar:"javascript",previous:{title:"If...Else",permalink:"/docs/javascript/if-else-in-javascript"},next:{title:"For Loop",permalink:"/docs/javascript/for-loop-in-javascript"}},d={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Flow Chart of the <code>switch</code> Statement",id:"flow-chart-of-the-switch-statement",level:2},{value:"Example",id:"example",level:2},{value:"Multiple Cases",id:"multiple-cases",level:2},{value:"Conclusion",id:"conclusion",level:2}];function r(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In JavaScript, the ",(0,t.jsx)(n.code,{children:"switch"})," statement is used to execute a block of code based on the value of a variable. It is an alternative to the ",(0,t.jsx)(n.code,{children:"if...else"})," statement when you need to compare the value of a variable to multiple values."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["The syntax of the ",(0,t.jsx)(n.code,{children:"switch"})," statement is as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"switch (expression) {\n  case value1:\n    // code to be executed if expression is equal to value1\n    break;\n  case value2:\n    // code to be executed if expression is equal to value2\n    break;\n  case value3:\n    // code to be executed if expression is equal to value3\n    break;\n  default:\n    // code to be executed if expression is different from all values\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"switch"})," statement starts with the ",(0,t.jsx)(n.code,{children:"switch"})," keyword followed by an expression in parentheses."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"case"})," keyword is followed by a value and a colon. If the value of the expression matches the value of the ",(0,t.jsx)(n.code,{children:"case"}),", the code inside the ",(0,t.jsx)(n.code,{children:"case"})," block is executed."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"break"})," statement is used to exit the ",(0,t.jsx)(n.code,{children:"switch"})," statement. If the ",(0,t.jsx)(n.code,{children:"break"})," statement is omitted, the code will continue to execute the next ",(0,t.jsx)(n.code,{children:"case"})," block."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"default"})," case is optional and is executed if the value of the expression does not match any of the ",(0,t.jsx)(n.code,{children:"case"})," values."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"default"})," case does not require a ",(0,t.jsx)(n.code,{children:"break"})," statement because it is always the last case in the ",(0,t.jsx)(n.code,{children:"switch"})," statement."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"default"})," case can be placed anywhere in the ",(0,t.jsx)(n.code,{children:"switch"})," statement."]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"flow-chart-of-the-switch-statement",children:["Flow Chart of the ",(0,t.jsx)(n.code,{children:"switch"})," Statement"]}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD;\n    Start([Start]) --\x3e Condition{Expression};\n    Condition --\x3e|Case 1| Action1;\n    Condition --\x3e|Case 2| Action2;\n    Condition --\x3e|Case 3| Action3;\n    Condition --\x3e|Case 4| Action4;\n    Condition --\x3e|Default| DefaultAction;\n    Action1 --\x3e End;\n    Action2 --\x3e End;\n    Action3 --\x3e End;\n    Action4 --\x3e End;\n    DefaultAction --\x3e End;\n    End --\x3e Stop([Stop]);\n"}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["The following example demonstrates how to use the ",(0,t.jsx)(n.code,{children:"switch"})," statement to check the day of the week:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:'let day = 3;\nlet dayName;\n\nswitch (day) {\n  case 1:\n    dayName = "Sunday";\n    break;\n  case 2:\n    dayName = "Monday";\n    break;\n  case 3:\n    dayName = "Tuesday";\n    break;\n  case 4:\n    dayName = "Wednesday";\n    break;\n  case 5:\n    dayName = "Thursday";\n    break;\n  case 6:\n    dayName = "Friday";\n    break;\n  case 7:\n    dayName = "Saturday";\n    break;\n  default:\n    dayName = "Invalid day";\n}\n\nconsole.log(dayName); // Tuesday\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the above example, the ",(0,t.jsx)(n.code,{children:"switch"})," statement checks the value of the ",(0,t.jsx)(n.code,{children:"day"})," variable and assigns the corresponding day name to the ",(0,t.jsx)(n.code,{children:"dayName"})," variable."]}),"\n",(0,t.jsx)(n.admonition,{title:"Flow Chart for the Example",type:"tip",children:(0,t.jsx)(n.mermaid,{value:"graph TD;\n    Start([Start]) --\x3e Condition{day};\n    Condition --\x3e|1| Action1;\n    Condition --\x3e|2| Action2;\n    Condition --\x3e|3| Action3;\n    Condition --\x3e|4| Action4;\n    Condition --\x3e|5| Action5;\n    Condition --\x3e|6| Action6;\n    Condition --\x3e|7| Action7;\n    Condition --\x3e|Default| DefaultAction;\n    Action1 --\x3e End;\n    Action2 --\x3e End;\n    Action3 --\x3e End;\n    Action4 --\x3e End;\n    Action5 --\x3e End;\n    Action6 --\x3e End;\n    Action7 --\x3e End;\n    DefaultAction --\x3e End;\n    End --\x3e Stop([Stop]);\n\n    subgraph DayNames\n    Action1(Sunday)\n    Action2(Monday)\n    Action3(Tuesday)\n    Action4(Wednesday)\n    Action5(Thursday)\n    Action6(Friday)\n    Action7(Saturday)\n    DefaultAction(Invalid day)\n    end"})}),"\n",(0,t.jsx)(n.h2,{id:"multiple-cases",children:"Multiple Cases"}),"\n",(0,t.jsxs)(n.p,{children:["You can use multiple ",(0,t.jsx)(n.code,{children:"case"})," blocks to execute the same code for different values. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:'let grade = "B+";\nlet message;\n\nswitch (grade) {\n  case "A+":\n  case "A":\n  case "A-":\n    message = "Excellent";\n    break;\n  case "B+":\n  case "B":\n  case "B-":\n    message = "Good";\n    break;\n  case "C+":\n  case "C":\n  case "C-":\n    message = "Fair";\n    break;\n  case "D+":\n  case "D":\n  case "D-":\n    message = "Poor";\n    break;\n  case "F":\n    message = "Fail";\n    break;\n  default:\n    message = "Invalid grade";\n}\n\nconsole.log(message); // Good\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the above example, the ",(0,t.jsx)(n.code,{children:"switch"})," statement checks the value of the ",(0,t.jsx)(n.code,{children:"grade"})," variable and assigns a message based on the grade."]}),"\n",(0,t.jsxs)(n.admonition,{title:"\ud83d\udcdd Note",type:"info",children:[(0,t.jsx)("h2",{children:"Live Example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"live",live:!0,children:'function todayIs(){\n    let day = new Date().getDay();\n    let dayName;\n\n    switch (day) {\n      case 0:\n        dayName = "Sunday";\n        break;\n      case 1:\n        dayName = "Monday";\n        break;\n      case 2:\n        dayName = "Tuesday";\n        break;\n      case 3:\n        dayName = "Wednesday";\n        break;\n      case 4:\n        dayName = "Thursday";\n        break;\n      case 5:\n        dayName = "Friday";\n        break;\n      case 6:\n        dayName = "Saturday";\n        break;\n      default:\n        dayName = "Invalid day";\n    }\n\n    return (\n        <div>\n            <h3>Today is {dayName}</h3>\n        </div>\n    )\n}\n\n'})}),(0,t.jsxs)(n.p,{children:["In the above example, the ",(0,t.jsx)(n.code,{children:"switch"})," statement checks the value of the ",(0,t.jsx)(n.code,{children:"day"})," variable and assigns the corresponding day name to the ",(0,t.jsx)(n.code,{children:"dayName"})," variable."]})]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["In this tutorial, you learned about the ",(0,t.jsx)(n.code,{children:"switch"})," statement in JavaScript and how to use it to make decisions based on the value of a variable. You also learned how to use multiple ",(0,t.jsx)(n.code,{children:"case"})," blocks to execute the same code for different values."]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},4552:(e,n,a)=>{a.d(n,{I:()=>c,M:()=>o});var t=a(11504);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);