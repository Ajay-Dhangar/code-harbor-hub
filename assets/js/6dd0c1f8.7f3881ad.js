"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[61968],{24740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(17624),r=n(4552);const s={id:"arrays-selectionsort-in-dsa",title:"Arrays - Selection Sort in DSA",sidebar_label:"Selection Sort",sidebar_position:3,description:"Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted. It repeatedly finds the minimum element from the unsorted part and puts it at the beginning of the unsorted part. The algorithm maintains two subarrays in a given array. The subarray which is already sorted and the remaining subarray which is unsorted. In every iteration of selection sort, the minimum element from the unsorted subarray is picked and moved to the sorted subarray.",tags:["dsa","arrays","sorting","selection-sort","algorithm of selection-sort","pseudocode of selection-sort","complexity of selection-sort","example of selection-sort","live example of selection-sort","explanation of selection-sort","quiz of selection-sort","conclusion of selection-sort"]},o=void 0,a={id:"dsa/arrays/arrays-selectionsort-in-dsa",title:"Arrays - Selection Sort in DSA",description:"Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted. It repeatedly finds the minimum element from the unsorted part and puts it at the beginning of the unsorted part. The algorithm maintains two subarrays in a given array. The subarray which is already sorted and the remaining subarray which is unsorted. In every iteration of selection sort, the minimum element from the unsorted subarray is picked and moved to the sorted subarray.",source:"@site/docs/dsa/arrays/arrays-selectionsort.md",sourceDirName:"dsa/arrays",slug:"/dsa/arrays/arrays-selectionsort-in-dsa",permalink:"/docs/dsa/arrays/arrays-selectionsort-in-dsa",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/dsa/arrays/arrays-selectionsort.md",tags:[{label:"dsa",permalink:"/docs/tags/dsa"},{label:"arrays",permalink:"/docs/tags/arrays"},{label:"sorting",permalink:"/docs/tags/sorting"},{label:"selection-sort",permalink:"/docs/tags/selection-sort"},{label:"algorithm of selection-sort",permalink:"/docs/tags/algorithm-of-selection-sort"},{label:"pseudocode of selection-sort",permalink:"/docs/tags/pseudocode-of-selection-sort"},{label:"complexity of selection-sort",permalink:"/docs/tags/complexity-of-selection-sort"},{label:"example of selection-sort",permalink:"/docs/tags/example-of-selection-sort"},{label:"live example of selection-sort",permalink:"/docs/tags/live-example-of-selection-sort"},{label:"explanation of selection-sort",permalink:"/docs/tags/explanation-of-selection-sort"},{label:"quiz of selection-sort",permalink:"/docs/tags/quiz-of-selection-sort"},{label:"conclusion of selection-sort",permalink:"/docs/tags/conclusion-of-selection-sort"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710515178e3,sidebarPosition:3,frontMatter:{id:"arrays-selectionsort-in-dsa",title:"Arrays - Selection Sort in DSA",sidebar_label:"Selection Sort",sidebar_position:3,description:"Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted. It repeatedly finds the minimum element from the unsorted part and puts it at the beginning of the unsorted part. The algorithm maintains two subarrays in a given array. The subarray which is already sorted and the remaining subarray which is unsorted. In every iteration of selection sort, the minimum element from the unsorted subarray is picked and moved to the sorted subarray.",tags:["dsa","arrays","sorting","selection-sort","algorithm of selection-sort","pseudocode of selection-sort","complexity of selection-sort","example of selection-sort","live example of selection-sort","explanation of selection-sort","quiz of selection-sort","conclusion of selection-sort"]},sidebar:"dsa",previous:{title:"Bubble Sort",permalink:"/docs/dsa/arrays/arrays-bubblesort-in-dsa"},next:{title:"Insertion Sort",permalink:"/docs/dsa/arrays/arrays-insertionsort"}},l={},d=[{value:"Algorithm",id:"algorithm",level:2},{value:"Pseudocode",id:"pseudocode",level:2},{value:"Diagram",id:"diagram",level:2},{value:"Complexity",id:"complexity",level:2},{value:"Example",id:"example",level:2},{value:"Practice Problems",id:"practice-problems",level:2},{value:"Quiz",id:"quiz",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components},{SelectionSortVisualization:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SelectionSortVisualization",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Selection Sort"})," is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted. It repeatedly finds the minimum element from the unsorted part and puts it at the beginning of the unsorted part. The algorithm maintains two subarrays in a given array. The subarray which is already sorted and the remaining subarray which is unsorted. In every iteration of selection sort, the minimum element from the unsorted subarray is picked and moved to the sorted subarray."]}),"\n",(0,i.jsx)(n,{}),"\n",(0,i.jsx)(t.h2,{id:"algorithm",children:"Algorithm"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The selection sort algorithm divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted."}),"\n",(0,i.jsx)(t.li,{children:"The algorithm repeatedly finds the minimum element from the unsorted part and puts it at the beginning of the unsorted part."}),"\n",(0,i.jsx)(t.li,{children:"The algorithm maintains two subarrays in a given array. The subarray which is already sorted and the remaining subarray which is unsorted."}),"\n",(0,i.jsx)(t.li,{children:"In every iteration of selection sort, the minimum element from the unsorted subarray is picked and moved to the sorted subarray."}),"\n",(0,i.jsx)(t.li,{children:"The array is sorted."}),"\n",(0,i.jsx)(t.li,{children:"Exit."}),"\n",(0,i.jsx)(t.li,{children:"The time complexity of the selection sort is O(n^2)."}),"\n",(0,i.jsx)(t.li,{children:"The space complexity of the selection sort is O(1)."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"pseudocode",children:"Pseudocode"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-plaintext",metastring:'title="Selection Sort"',children:"procedure selectionSort( A : list of sortable items )\n    n = length(A)\n    for i = 0 to n-1 inclusive do\n        min = i\n        for j = i+1 to n inclusive do\n            if A[j] < A[min] then\n                min = j\n            end if\n        end for\n        swap(A[i], A[min])\n    end for\nend procedure\n"})}),"\n",(0,i.jsx)(t.h2,{id:"diagram",children:"Diagram"}),"\n",(0,i.jsx)(t.h2,{id:"complexity",children:"Complexity"}),"\n",(0,i.jsx)(t.p,{children:"The time complexity of the selection sort is O(n^2). The space complexity of the selection sort is O(1)."}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="Selection Sort"',children:"function selectionSort(arr) {\n  let n = arr.length;\n  for (let i = 0; i < n - 1; i++) {\n    let min = i;\n    for (let j = i + 1; j < n; j++) {\n      if (arr[j] < arr[min]) {\n        min = j;\n      }\n    }\n    let temp = arr[i];\n    arr[i] = arr[min];\n    arr[min] = temp;\n  }\n  return arr;\n}\n\nconst arr = [64, 25, 12, 22, 11];\n\nconsole.log(selectionSort(arr)); // [11, 12, 22, 25, 64]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"practice-problems",children:"Practice Problems"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/sort-an-array/",children:"Leetcode - Sort an Array"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.hackerrank.com/challenges/countingsort4/problem",children:"HackerRank - The Full Counting Sort"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://codeforces.com/problemset/problem/451/B",children:"Codeforces - Sort the Array"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.codechef.com/problems/TSORT",children:"CodeChef - Turbo Sort"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"quiz",children:"Quiz"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["What is the time complexity of the selection sort?","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A) O(n)"}),"\n",(0,i.jsx)(t.li,{children:"B) O(n^2)"}),"\n",(0,i.jsx)(t.li,{children:"C) O(n log n)"}),"\n",(0,i.jsx)(t.li,{children:"D) O(1)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Correct Answer: B"}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["What is the space complexity of the selection sort?","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A) O(n)"}),"\n",(0,i.jsx)(t.li,{children:"B) O(n^2)"}),"\n",(0,i.jsx)(t.li,{children:"C) O(n log n)"}),"\n",(0,i.jsx)(t.li,{children:"D) O(1)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Correct Answer: D"}),"\n",(0,i.jsx)(t.li,{children:"Explanation: The space complexity of the selection sort is O(1)."}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["What is the best-case time complexity of the selection sort?","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A) O(n)"}),"\n",(0,i.jsx)(t.li,{children:"B) O(n^2)"}),"\n",(0,i.jsx)(t.li,{children:"C) O(n log n)"}),"\n",(0,i.jsx)(t.li,{children:"D) O(1)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Correct Answer: B"}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"What is the worst-case time complexity of the selection sort?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A) O(n)"}),"\n",(0,i.jsx)(t.li,{children:"B) O(n^2)"}),"\n",(0,i.jsx)(t.li,{children:"C) O(n log n)"}),"\n",(0,i.jsx)(t.li,{children:"D) O(1)"}),"\n",(0,i.jsx)(t.li,{children:"Correct Answer: B"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Is the selection sort stable?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A) Yes"}),"\n",(0,i.jsx)(t.li,{children:"B) No"}),"\n",(0,i.jsx)(t.li,{children:"Correct Answer: A"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{title:"Try it yourself",type:"info",children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:"live",live:!0,children:'function selectionSort() {\n  let arr = [64, 25, 12, 22, 11];\n  let n = arr.length;\n  for (let i = 0; i < n - 1; i++) {\n    let min = i;\n    for (let j = i + 1; j < n; j++) {\n      if (arr[j] < arr[min]) {\n        min = j;\n      }\n    }\n    let temp = arr[i];\n    arr[i] = arr[min];\n    arr[min] = temp;\n  }\n  return (\n    <div>\n        <h3>Selection Sort</h3>\n        <p><b>Array:</b> [64, 25, 12, 22, 11]</p>\n        <p>\n            <b>Sorted Array:</b> [{arr.join(", ")}]\n        </p>\n    </div>\n  )\n}\n'})}),(0,i.jsxs)(t.p,{children:["In the above example, we have an array of numbers ",(0,i.jsx)(t.code,{children:"[64, 25, 12, 22, 11]"}),". We are using the selection sort algorithm to sort the array in ascending order. The selection sort algorithm divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted. It repeatedly finds the minimum element from the unsorted part and puts it at the beginning of the unsorted part. The algorithm maintains two subarrays in a given array. The subarray which is already sorted and the remaining subarray which is unsorted. In every iteration of selection sort, the minimum element from the unsorted subarray is picked and moved to the sorted subarray. The sorted array is ",(0,i.jsx)(t.code,{children:"[11, 12, 22, 25, 64]"}),". The time complexity of the selection sort is O(n^2) and the space complexity is O(1)."]})]}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"In this article, we learned about the selection sort algorithm. Selection sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted. It repeatedly finds the minimum element from the unsorted part and puts it at the beginning of the unsorted part. The algorithm maintains two subarrays in a given array. The subarray which is already sorted and the remaining subarray which is unsorted. In every iteration of selection sort, the minimum element from the unsorted subarray is picked and moved to the sorted subarray. The time complexity of the selection sort is O(n^2) and the space complexity is O(1). Selection sort is a stable sorting algorithm."})]})}function h(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>o});var i=n(11504);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);