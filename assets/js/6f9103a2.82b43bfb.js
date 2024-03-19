"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[18216],{76892:(a,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>t,default:()=>m,frontMatter:()=>s,metadata:()=>l,problems:()=>c,toc:()=>d});var e=n(17624),i=n(4552);const s={id:"arrays-in-dsa",title:"Arrays in Data Structures and Algorithms",sidebar_label:"Arrays",sidebar_position:1,description:"An array is a collection of items stored at contiguous memory locations. It is a data structure that stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.",tags:["dsa","data-structures","arrays","array","array-data-structure","array-in-dsa","array-in-data-structure","array-in-algorithm","array-in-dsa-example","array-in-dsa-explanation","array-in-dsa-conclusion","array-in-dsa-importance","array-in-dsa-syntax","array-in-dsa-declaration","array-in-dsa-access","array-in-dsa-update","array-in-dsa-length","array-in-dsa-iterate","array-in-dsa-max-min","array-in-dsa-program","array-in-dsa-code","array-in-dsa-js","array-in-dsa-java","array-in-dsa-python","array-in-dsa-c","array-in-dsa-cpp","array-in-dsa-ts"]},t=void 0,l={id:"dsa/arrays/arrays-in-dsa",title:"Arrays in Data Structures and Algorithms",description:"An array is a collection of items stored at contiguous memory locations. It is a data structure that stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.",source:"@site/docs/dsa/arrays/arrays-dsa.md",sourceDirName:"dsa/arrays",slug:"/dsa/arrays/arrays-in-dsa",permalink:"/code-harbor-hub/docs/dsa/arrays/arrays-in-dsa",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/dsa/arrays/arrays-dsa.md",tags:[{label:"dsa",permalink:"/code-harbor-hub/docs/tags/dsa"},{label:"data-structures",permalink:"/code-harbor-hub/docs/tags/data-structures"},{label:"arrays",permalink:"/code-harbor-hub/docs/tags/arrays"},{label:"array",permalink:"/code-harbor-hub/docs/tags/array"},{label:"array-data-structure",permalink:"/code-harbor-hub/docs/tags/array-data-structure"},{label:"array-in-dsa",permalink:"/code-harbor-hub/docs/tags/array-in-dsa"},{label:"array-in-data-structure",permalink:"/code-harbor-hub/docs/tags/array-in-data-structure"},{label:"array-in-algorithm",permalink:"/code-harbor-hub/docs/tags/array-in-algorithm"},{label:"array-in-dsa-example",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-example"},{label:"array-in-dsa-explanation",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-explanation"},{label:"array-in-dsa-conclusion",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-conclusion"},{label:"array-in-dsa-importance",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-importance"},{label:"array-in-dsa-syntax",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-syntax"},{label:"array-in-dsa-declaration",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-declaration"},{label:"array-in-dsa-access",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-access"},{label:"array-in-dsa-update",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-update"},{label:"array-in-dsa-length",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-length"},{label:"array-in-dsa-iterate",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-iterate"},{label:"array-in-dsa-max-min",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-max-min"},{label:"array-in-dsa-program",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-program"},{label:"array-in-dsa-code",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-code"},{label:"array-in-dsa-js",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-js"},{label:"array-in-dsa-java",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-java"},{label:"array-in-dsa-python",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-python"},{label:"array-in-dsa-c",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-c"},{label:"array-in-dsa-cpp",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-cpp"},{label:"array-in-dsa-ts",permalink:"/code-harbor-hub/docs/tags/array-in-dsa-ts"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710515178,formattedLastUpdatedAt:"Mar 15, 2024",sidebarPosition:1,frontMatter:{id:"arrays-in-dsa",title:"Arrays in Data Structures and Algorithms",sidebar_label:"Arrays",sidebar_position:1,description:"An array is a collection of items stored at contiguous memory locations. It is a data structure that stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.",tags:["dsa","data-structures","arrays","array","array-data-structure","array-in-dsa","array-in-data-structure","array-in-algorithm","array-in-dsa-example","array-in-dsa-explanation","array-in-dsa-conclusion","array-in-dsa-importance","array-in-dsa-syntax","array-in-dsa-declaration","array-in-dsa-access","array-in-dsa-update","array-in-dsa-length","array-in-dsa-iterate","array-in-dsa-max-min","array-in-dsa-program","array-in-dsa-code","array-in-dsa-js","array-in-dsa-java","array-in-dsa-python","array-in-dsa-c","array-in-dsa-cpp","array-in-dsa-ts"]},sidebar:"dsa",previous:{title:"Arrays",permalink:"/code-harbor-hub/docs/category/arrays-1"},next:{title:"Bubble Sort",permalink:"/code-harbor-hub/docs/dsa/arrays/arrays-bubblesort-in-dsa"}},o={},d=[{value:"Visualizations of Arrays in Data Structures and Algorithms (DSA)",id:"visualizations-of-arrays-in-data-structures-and-algorithms-dsa",level:2},{value:"Why are Arrays important?",id:"why-are-arrays-important",level:2},{value:"How to declare an Array?",id:"how-to-declare-an-array",level:2},{value:"How to access an Array?",id:"how-to-access-an-array",level:2},{value:"How to update an Array?",id:"how-to-update-an-array",level:2},{value:"How to find the length of an Array?",id:"how-to-find-the-length-of-an-array",level:2},{value:"How to iterate through an Array?",id:"how-to-iterate-through-an-array",level:2},{value:"How to find the maximum and minimum elements in an Array?",id:"how-to-find-the-maximum-and-minimum-elements-in-an-array",level:2},{value:"Problems for Practice",id:"problems-for-practice",level:2},{value:"Conclusion",id:"conclusion",level:2}],c=[{problemName:"1. Two Sum",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/two-sum/",solutionLink:"#"},{problemName:"2. Best Time to Buy and Sell Stock",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",solutionLink:"#"},{problemName:"3. Contains Duplicate",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/contains-duplicate/",solutionLink:"#"},{problemName:"4. Product of Array Except Self",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/product-of-array-except-self/",solutionLink:"#"},{problemName:"5. Maximum Subarray",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/maximum-subarray/",solutionLink:"#"}];function h(a){const r={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...a.components},{ArrayVisualizations:n,SolutionAuthor:s,TabItem:t,Table:l,Tabs:o}=r;return n||u("ArrayVisualizations",!0),s||u("SolutionAuthor",!0),t||u("TabItem",!0),l||u("Table",!0),o||u("Tabs",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.p,{children:"An array is a collection of items stored at contiguous memory locations. It is a data structure that stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type."}),"\n",(0,e.jsx)(r.h2,{id:"visualizations-of-arrays-in-data-structures-and-algorithms-dsa",children:"Visualizations of Arrays in Data Structures and Algorithms (DSA)"}),"\n",(0,e.jsx)(n,{}),"\n",(0,e.jsx)(r.h2,{id:"why-are-arrays-important",children:"Why are Arrays important?"}),"\n",(0,e.jsx)(r.p,{children:"Arrays are important because they allow us to store multiple items of the same type in a single variable. They are used to store data in a structured way, and they are used in many algorithms and data structures."}),"\n",(0,e.jsx)(r.h2,{id:"how-to-declare-an-array",children:"How to declare an Array?"}),"\n",(0,e.jsx)(r.p,{children:"An array can be declared in various programming languages using the following syntax:"}),"\n",(0,e.jsxs)(o,{children:[(0,e.jsxs)(t,{value:"js",label:"JavaScipt",default:!0,children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-js",children:"// Declare an array in JavaScript\nlet arr = [1, 2, 3, 4, 5];\n"})})]}),(0,e.jsxs)(t,{value:"java",label:"Java",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-java",children:"// Declare an array in Java\nint[] arr = {1, 2, 3, 4, 5};\n"})})]}),(0,e.jsxs)(t,{value:"python",label:"Python",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-python",children:"# Declare an array in Python\narr = [1, 2, 3, 4, 5]\n"})})]}),(0,e.jsxs)(t,{value:"c",label:"C",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-c",children:"// Declare an array in C\nint arr[] = {1, 2, 3, 4, 5};\n"})})]}),(0,e.jsxs)(t,{value:"cpp",label:"C++",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-cpp",children:"// Declare an array in C++\nint arr[] = {1, 2, 3, 4, 5};\n"})})]}),(0,e.jsxs)(t,{value:"ts",label:"TypeScript",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-ts",children:"// Declare an array in TypeScript\nlet arr: number[] = [1, 2, 3, 4, 5];\n"})})]})]}),"\n",(0,e.jsx)(r.h2,{id:"how-to-access-an-array",children:"How to access an Array?"}),"\n",(0,e.jsx)(r.p,{children:"An array can be accessed using the index of the element. The index of the first element is 0, the index of the second element is 1, and so on."}),"\n",(0,e.jsxs)(o,{children:[(0,e.jsxs)(t,{value:"js",label:"JavaScipt",default:!0,children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-js",children:"// Access an array in JavaScript\nlet arr = [1, 2, 3, 4, 5];\nconsole.log(arr[0]); // 1\nconsole.log(arr[1]); // 2\nconsole.log(arr[2]); // 3\nconsole.log(arr[3]); // 4\nconsole.log(arr[4]); // 5\n"})})]}),(0,e.jsxs)(t,{value:"java",label:"Java",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-java",children:"// Access an array in Java\nint[] arr = {1, 2, 3, 4, 5};\nSystem.out.println(arr[0]); // 1\nSystem.out.println(arr[1]); // 2\nSystem.out.println(arr[2]); // 3\nSystem.out.println(arr[3]); // 4\nSystem.out.println(arr[4]); // 5\n"})})]}),(0,e.jsxs)(t,{value:"python",label:"Python",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-python",children:"# Access an array in Python\narr = [1, 2, 3, 4, 5]\nprint(arr[0]) # 1\nprint(arr[1]) # 2\nprint(arr[2]) # 3\nprint(arr[3]) # 4\nprint(arr[4]) # 5\n"})})]}),(0,e.jsxs)(t,{value:"c",label:"C",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-c",children:'// Access an array in C\nint arr[] = {1, 2, 3, 4, 5};\nprintf("%d\\n", arr[0]); // 1\nprintf("%d\\n", arr[1]); // 2\nprintf("%d\\n", arr[2]); // 3\nprintf("%d\\n", arr[3]); // 4\nprintf("%d\\n", arr[4]); // 5\n'})})]}),(0,e.jsxs)(t,{value:"cpp",label:"C++",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-cpp",children:"// Access an array in C++\nint arr[] = {1, 2, 3, 4, 5};\ncout << arr[0] << endl; // 1\ncout << arr[1] << endl; // 2\ncout << arr[2] << endl; // 3\ncout << arr[3] << endl; // 4\ncout << arr[4] << endl; // 5\n"})})]}),(0,e.jsxs)(t,{value:"ts",label:"TypeScript",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-ts",children:"// Access an array in TypeScript\nlet arr: number[] = [1, 2, 3, 4, 5];\nconsole.log(arr[0]); // 1\nconsole.log(arr[1]); // 2\nconsole.log(arr[2]); // 3\nconsole.log(arr[3]); // 4\nconsole.log(arr[4]); // 5\n"})})]})]}),"\n",(0,e.jsx)(r.h2,{id:"how-to-update-an-array",children:"How to update an Array?"}),"\n",(0,e.jsx)(r.p,{children:"An array can be updated by assigning a new value to the index of the element."}),"\n",(0,e.jsxs)(o,{children:[(0,e.jsxs)(t,{value:"js",label:"JavaScipt",default:!0,children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-js",children:"// Update an array in JavaScript\nlet arr = [1, 2, 3, 4, 5];\narr[0] = 10;\nconsole.log(arr); // [10, 2, 3, 4, 5]\n"})})]}),(0,e.jsxs)(t,{value:"java",label:"Java",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-java",children:"// Update an array in Java\nint[] arr = {1, 2, 3, 4, 5};\narr[0] = 10;\nSystem.out.println(Arrays.toString(arr)); // [10, 2, 3, 4, 5]\n"})})]}),(0,e.jsxs)(t,{value:"python",label:"Python",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-python",children:"# Update an array in Python\narr = [1, 2, 3, 4, 5]\narr[0] = 10\nprint(arr) # [10, 2, 3, 4, 5]\n"})})]}),(0,e.jsxs)(t,{value:"c",label:"C",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-c",children:'// Update an array in C\nint arr[] = {1, 2, 3, 4, 5};\narr[0] = 10;\nfor (int i = 0; i < 5; i++) {\n    printf("%d ", arr[i]);\n}\n// 10 2 3 4 5\n'})})]}),(0,e.jsxs)(t,{value:"cpp",label:"C++",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-cpp",children:'// Update an array in C++\nint arr[] = {1, 2, 3, 4, 5};\narr[0] = 10;\nfor (int i = 0; i < 5; i++) {\n    cout << arr[i] << " ";\n}\n// 10 2 3 4 5\n'})})]}),(0,e.jsxs)(t,{value:"ts",label:"TypeScript",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-ts",children:"// Update an array in TypeScript\nlet arr: number[] = [1, 2, 3, 4, 5];\narr[0] = 10;\nconsole.log(arr); // [10, 2, 3, 4, 5]\n"})})]})]}),"\n",(0,e.jsx)(r.h2,{id:"how-to-find-the-length-of-an-array",children:"How to find the length of an Array?"}),"\n",(0,e.jsxs)(r.p,{children:["The length of an array can be found using the ",(0,e.jsx)(r.code,{children:"length"})," property."]}),"\n",(0,e.jsxs)(o,{children:[(0,e.jsxs)(t,{value:"js",label:"JavaScipt",default:!0,children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-js",children:"// Find the length of an array in JavaScript\nlet arr = [1, 2, 3, 4, 5];\nconsole.log(arr.length); // 5\n"})})]}),(0,e.jsxs)(t,{value:"java",label:"Java",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-java",children:"// Find the length of an array in Java\nint[] arr = {1, 2, 3, 4, 5};\nSystem.out.println(arr.length); // 5\n"})})]}),(0,e.jsxs)(t,{value:"python",label:"Python",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-python",children:"# Find the length of an array in Python\narr = [1, 2, 3, 4, 5]\nprint(len(arr)) # 5\n"})})]}),(0,e.jsxs)(t,{value:"c",label:"C",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-c",children:'// Find the length of an array in C\nint arr[] = {1, 2, 3, 4, 5};\nint length = sizeof(arr) // sizeof(arr[0]);\nprintf("%d\\n", length); // 5\n'})})]}),(0,e.jsxs)(t,{value:"cpp",label:"C++",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-cpp",children:"// Find the length of an array in C++\nint arr[] = {1, 2, 3, 4, 5};\nint length = sizeof(arr) // sizeof(arr[0]);\ncout << length << endl; // 5\n"})})]}),(0,e.jsxs)(t,{value:"ts",label:"TypeScript",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-ts",children:"// Find the length of an array in TypeScript\nlet arr: number[] = [1, 2, 3, 4, 5];\nconsole.log(arr.length); // 5\n"})})]})]}),"\n",(0,e.jsx)(r.h2,{id:"how-to-iterate-through-an-array",children:"How to iterate through an Array?"}),"\n",(0,e.jsxs)(r.p,{children:["An array can be iterated using a loop such as ",(0,e.jsx)(r.code,{children:"for"})," loop, ",(0,e.jsx)(r.code,{children:"while"})," loop, or ",(0,e.jsx)(r.code,{children:"for...of"})," loop."]}),"\n",(0,e.jsxs)(o,{children:[(0,e.jsxs)(t,{value:"js",label:"JavaScipt",default:!0,children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-js",children:"// Iterate through an array in JavaScript\nlet arr = [1, 2, 3, 4, 5];\nfor (let i = 0; i < arr.length; i++) {\n    console.log(arr[i]);\n}\n// 1\n// 2\n// 3\n// 4\n// 5\n"})})]}),(0,e.jsxs)(t,{value:"java",label:"Java",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-java",children:"// Iterate through an array in Java\nint[] arr = {1, 2, 3, 4, 5};\nfor (int i = 0; i < arr.length; i++) {\n    System.out.println(arr[i]);\n}\n// 1\n// 2\n// 3\n// 4\n// 5\n"})})]}),(0,e.jsxs)(t,{value:"python",label:"Python",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-python",children:"# Iterate through an array in Python\narr = [1, 2, 3, 4, 5]\nfor i in arr:\n    print(i)\n# 1\n# 2\n# 3\n# 4\n# 5\n"})})]}),(0,e.jsxs)(t,{value:"c",label:"C",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-c",children:'// Iterate through an array in C\nint arr[] = {1, 2, 3, 4, 5};\nfor (int i = 0; i < 5; i++) {\n    printf("%d\\n", arr[i]);\n}\n// 1\n// 2\n// 3\n// 4\n// 5\n'})})]}),(0,e.jsxs)(t,{value:"cpp",label:"C++",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-cpp",children:"// Iterate through an array in C++\nint arr[] = {1, 2, 3, 4, 5};\n  for (int i = 0; i < 5; i++) {\n      cout << arr[i] << endl;\n  }\n  // 1\n  // 2\n  // 3\n  // 4\n  // 5\n"})})]}),(0,e.jsxs)(t,{value:"ts",label:"TypeScript",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-ts",children:"// Iterate through an array in TypeScript\nlet arr: number[] = [1, 2, 3, 4, 5];\nfor (let i = 0; i < arr.length; i++) {\n    console.log(arr[i]);\n}\n// 1\n// 2\n// 3\n// 4\n// 5\n"})})]})]}),"\n",(0,e.jsx)(r.h2,{id:"how-to-find-the-maximum-and-minimum-elements-in-an-array",children:"How to find the maximum and minimum elements in an Array?"}),"\n",(0,e.jsx)(r.p,{children:"The maximum and minimum elements in an array can be found by iterating through the array and comparing each element with the current maximum and minimum elements."}),"\n",(0,e.jsxs)(o,{children:[(0,e.jsxs)(t,{value:"js",label:"JavaScipt",default:!0,children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-js",children:"// Find the maximum and minimum elements in an array in JavaScript\nfunction findMaxMin(arr) {\n    let max = arr[0];\n    let min = arr[0];\n    for (let i = 1; i < arr.length; i++) {\n        if (arr[i] > max) {\n            max = arr[i];\n        }\n        if (arr[i] < min) {\n            min = arr[i];\n        }\n    }\n    return { max, min };\n}\n\nlet arr = [2, 5, 1, 20, 10];\nconsole.log(findMaxMin(arr)); // { max: 20, min: 1 }\n"})})]}),(0,e.jsxs)(t,{value:"java",label:"Java",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-java",children:'public class Main {\n// Find the maximum and minimum elements in an array in Java\nstatic class MaxMin {\n    int max;\n    int min;\n}\n\nstatic MaxMin findMaxMin(int arr[]) {\n    MaxMin result = new MaxMin();\n    result.max = arr[0];\n    result.min = arr[0];\n    for (int i = 1; i < arr.length; i++) {\n        if (arr[i] > result.max) {\n            result.max = arr[i];\n        }\n        if (arr[i] < result.min) {\n            result.min = arr[i];\n        }\n    }\n    return result;\n}\n\n  public static void main(String[] args) {\n      int arr[] = {2, 5, 1, 20, 10};\n      MaxMin result = findMaxMin(arr);\n      System.out.println("{ max: " + result.max + ", min: " + result.min + " }"); // { max: 20, min: 1 }\n  }\n}\n\n'})})]}),(0,e.jsxs)(t,{value:"python",label:"Python",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-python",children:'# Find the maximum and minimum elements in an array in Python\ndef find_max_min(arr):\n    max = arr[0]\n    min = arr[0]\n    for i in range(1, len(arr)):\n        if arr[i] > max:\n            max = arr[i]\n        if arr[i] < min:\n            min = arr[i]\n    return {"max": max, "min": min}\n\n  arr = [2, 5, 1, 20, 10]\n  print(find_max_min(arr)) # { max: 20, min: 1 }\n'})})]}),(0,e.jsxs)(t,{value:"c",label:"C",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-c",children:'// Find the maximum and minimum elements in an array in C\nstruct MaxMin {\n    int max;\n    int min;\n};\n\nstruct MaxMin findMaxMin(int arr[], int n) {\n    struct MaxMin result;\n    result.max = arr[0];\n    result.min = arr[0];\n    for (int i = 1; i < n; i++) {\n        if (arr[i] > result.max) {\n            result.max = arr[i];\n        }\n        if (arr[i] < result.min) {\n            result.min = arr[i];\n        }\n    }\n    return result;\n}\n\nint arr[] = {2, 5, 1, 20, 10};\nstruct MaxMin result = findMaxMin(arr, 5);\nprintf("{ max: %d, min: %d }\\n", result.max, result.min); // { max: 20, min: 1 }\n'})})]}),(0,e.jsxs)(t,{value:"cpp",label:"C++",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-cpp",children:'// Find the maximum and minimum elements in an array in C++\nstruct MaxMin {\n    int max;\n    int min;\n};\n\nMaxMin findMaxMin(int arr[], int n) {\n    MaxMin result;\n    result.max = arr[0];\n    result.min = arr[0];\n    for (int i = 1; i < n; i++) {\n        if (arr[i] > result.max) {\n            result.max = arr[i];\n        }\n        if (arr[i] < result.min) {\n            result.min = arr[i];\n        }\n    }\n    return result;\n}\n\nint arr[] = {2, 5, 1, 20, 10};\nMaxMin result = findMaxMin(arr, 5);\ncout << "{ max: " << result.max << ", min: " << result.min << " }" << endl; // { max: 20, min: 1 }\n'})})]}),(0,e.jsxs)(t,{value:"ts",label:"TypeScript",children:[(0,e.jsx)(s,{name:"@Ajay-Dhangar"}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-ts",children:"// Find the maximum and minimum elements in an array in TypeScript\ninterface MaxMin {\n    max: number;\n    min: number;\n}\n\nfunction findMaxMin(arr: number[]): MaxMin {\n    let max = arr[0];\n    let min = arr[0];\n    for (let i = 1; i < arr.length; i++) {\n        if (arr[i] > max) {\n            max = arr[i];\n        }\n        if (arr[i] < min) {\n            min = arr[i];\n        }\n    }\n    return { max, min };\n}\n\nlet arr: number[] = [2, 5, 1, 20, 10];\nconsole.log(findMaxMin(arr)); // { max: 20, min: 1 }\n"})})]})]}),"\n",(0,e.jsx)(r.admonition,{title:"\ud83d\udcdd Info",type:"info",children:(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"The time complexity of finding the maximum and minimum elements in an array is O(n)."}),"\n",(0,e.jsx)(r.li,{children:"The space complexity of finding the maximum and minimum elements in an array is O(1)."}),"\n"]})}),"\n",(0,e.jsx)(r.h2,{id:"problems-for-practice",children:"Problems for Practice"}),"\n","\n",(0,e.jsx)(l,{title:"",data:c,isSorted:!1,collectionLink:"https://leetcode.com/study-plan/programming-skills"}),"\n",(0,e.jsx)(r.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,e.jsx)(r.p,{children:"In this tutorial, we learned about arrays in data structures and algorithms. We learned how to declare an array, access an array, update an array, find the length of an array, iterate through an array, and find the maximum and minimum elements in an array. Arrays are an important data structure that is used in many algorithms and data structures."})]})}function m(a={}){const{wrapper:r}={...(0,i.M)(),...a.components};return r?(0,e.jsx)(r,{...a,children:(0,e.jsx)(h,{...a})}):h(a)}function u(a,r){throw new Error("Expected "+(r?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}},4552:(a,r,n)=>{n.d(r,{I:()=>l,M:()=>t});var e=n(11504);const i={},s=e.createContext(i);function t(a){const r=e.useContext(s);return e.useMemo((function(){return"function"==typeof a?a(r):{...r,...a}}),[r,a])}function l(a){let r;return r=a.disableParentContext?"function"==typeof a.components?a.components(i):a.components||i:t(a.components),e.createElement(s.Provider,{value:r},a.children)}}}]);