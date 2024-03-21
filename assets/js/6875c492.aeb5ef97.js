"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[32392],{77508:(e,t,n)=>{n.d(t,{c:()=>i});n(11504);var s=n(57932),r=n(31152),a=n(17624);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,a.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.G)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,a.jsx)(r.c,{permalink:n,title:(0,a.jsx)(s.c,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),i&&(0,a.jsx)(r.c,{permalink:i,title:(0,a.jsx)(s.c,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},56565:(e,t,n)=>{n.d(t,{c:()=>i});n(11504);var s=n(26064),r=n(73472),a=n(17624);function i(e){let{items:t,component:n=r.c}=e;return(0,a.jsx)(a.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,a.jsx)(s.E,{content:t,children:(0,a.jsx)(n,{children:(0,a.jsx)(t,{})})},t.metadata.permalink)}))})}},86332:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(11504);var s=n(65456),r=n(57932),a=n(45648),i=n(53236),o=n(55808),l=n(45800),c=n(88936),d=n(77508),u=n(11248),h=n(56565),m=n(98938),p=n(30028),x=n(17624);function g(e){const t=function(){const{selectMessage:e}=(0,a.A)();return t=>e(t,(0,r.G)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.G)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function b(e){let{tag:t}=e;const n=g(t);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.U7,{title:n}),(0,x.jsx)(u.c,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:s,listMetadata:a}=e;const i=g(t);return(0,x.jsxs)(c.c,{sidebar:s,children:[t.unlisted&&(0,x.jsx)(m.c,{}),(0,x.jsxs)("header",{className:"margin-bottom--xl",children:[(0,x.jsx)(p.c,{as:"h1",children:i}),(0,x.jsx)(l.c,{href:t.allTagsPath,children:(0,x.jsx)(r.c,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,x.jsx)(h.c,{items:n}),(0,x.jsx)(d.c,{metadata:a})]})}function f(e){return(0,x.jsxs)(i.cr,{className:(0,s.c)(o.W.wrapper.blogPages,o.W.page.blogTagPostListPage),children:[(0,x.jsx)(b,{...e}),(0,x.jsx)(j,{...e})]})}},98938:(e,t,n)=>{n.d(t,{c:()=>m});n(11504);var s=n(65456),r=n(57932),a=n(18300),i=n(17624);function o(){return(0,i.jsx)(r.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(r.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,i.jsx)(a.c,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(55808),u=n(72488);function h(e){let{className:t}=e;return(0,i.jsx)(u.c,{type:"caution",title:(0,i.jsx)(o,{}),className:(0,s.c)(t,d.W.common.unlistedBanner),children:(0,i.jsx)(l,{})})}function m(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(h,{...e})]})}},55544:(e,t,n)=>{n.d(t,{c:()=>i});n(11504);var s=n(65456);const r={browserWindow:"browserWindow_jiSI",browserWindowHeader:"browserWindowHeader_ITW5",row:"row_OMw1",buttons:"buttons_hZyy",right:"right_RrL_",browserWindowAddressBar:"browserWindowAddressBar_iwHb",dot:"dot_Oyi3",browserWindowMenuIcon:"browserWindowMenuIcon_KLvG",bar:"bar_Liox",browserWindowBody:"browserWindowBody_T8Vh"};var a=n(17624);function i(e){let{children:t,minHeight:n,url:i="http://localhost:3000",style:o,bodyStyle:l}=e;return(0,a.jsxs)("div",{className:r.browserWindow,style:{...o,minHeight:n},children:[(0,a.jsxs)("div",{className:r.browserWindowHeader,children:[(0,a.jsxs)("div",{className:r.buttons,children:[(0,a.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,a.jsx)("div",{className:(0,s.c)(r.browserWindowAddressBar,"text--truncate"),children:i}),(0,a.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:r.bar}),(0,a.jsx)("span",{className:r.bar}),(0,a.jsx)("span",{className:r.bar})]})})]}),(0,a.jsx)("div",{className:r.browserWindowBody,style:l,children:t})]})}},32216:(e,t,n)=>{n.d(t,{c:()=>i});n(11504);var s=n(59400),r=n(70768),a=n(17624);function i(){const{colorMode:e}=(0,r.U)();return(0,a.jsx)("div",{className:"giscus-component",children:(0,a.jsx)(s.c,{id:"giscus",repo:"ajay-dhangar/code-harbor-hub",repoId:"R_kgDOLNryZQ",category:"General",categoryId:"DIC_kwDOLNryZc4Cc7ll",mapping:"pathname",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"bottom",theme:e,lang:"en",loading:"lazy"})})}},68984:(e,t,n)=>{n.d(t,{c:()=>d});n(11504);var s=n(65456),r=n(55808);const a={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContent:"admonitionContent_UjKb"};var i=n(17624);function o(e){let{type:t,className:n,children:o}=e;return(0,i.jsx)("div",{className:(0,s.c)(r.W.common.admonition,r.W.common.admonitionType(t),a.admonition,n),children:o})}function l(e){let{icon:t,title:n}=e;return(0,i.jsxs)("div",{className:a.admonitionHeading,children:[(0,i.jsx)("span",{className:a.admonitionIcon,children:t}),n]})}function c(e){let{children:t}=e;return t?(0,i.jsx)("div",{className:a.admonitionContent,children:t}):null}function d(e){const{type:t,icon:n,title:s,children:r,className:a}=e;return(0,i.jsxs)(o,{type:t,className:a,children:[(0,i.jsx)(l,{title:s,icon:n}),(0,i.jsx)(c,{children:r})]})}},83792:(e,t,n)=>{n.d(t,{c:()=>L});var s=n(9370),r=n(86212),a=n(22440),i=n(11504),o=n(17624);function l(e){let{names:t}=e;if(!t)return null;const n=t.split(",");return(0,o.jsx)("div",{className:"tag-wrapper",children:n.map(((e,t)=>(0,o.jsx)("span",{className:"topic-tag",children:e},t)))})}const c=()=>{const[e,t]=(0,i.useState)([]),[n,s]=(0,i.useState)(300),[r,a]=(0,i.useState)(null),[l,c]=(0,i.useState)(!1),[d,u]=(0,i.useState)(null),[h,m]=(0,i.useState)(!1);(0,i.useEffect)((()=>{p()}),[]),(0,i.useEffect)((()=>{x()}),[n]);const p=()=>{const e=Array.from({length:18},(()=>Math.ceil(90*Math.random())+10));t(e)},x=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const s=e[t].cssRules||e[t].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${n}ms`;break}}};return(0,o.jsxs)("div",{className:"array-visualizations",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"50",max:"500",value:n,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{c(!0),m(!0);let t=e[0],s=0;for(let r=1;r<e.length;r++)u(r),e[r]<t&&(t=e[r],s=r),await new Promise((e=>setTimeout(e,n)));a(s),m(!1),c(!1)},disabled:l||h,children:"Find Lowest"}),"\xa0",(0,o.jsx)("button",{onClick:()=>{p(),a(null)},disabled:l||h,children:"New Values"}),(0,o.jsxs)("p",{children:["Lowest value: ",null!==r?e[r]:null]}),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:`array-bar ${t===r?"min-value":""} ${t===d?"current-value":""}`,style:{height:3*e+"px"}},t)))})]})},d=()=>{const[e,t]=(0,i.useState)([]),[n,s]=(0,i.useState)(300),[r,a]=(0,i.useState)(!1),[l,c]=(0,i.useState)([]);(0,i.useEffect)((()=>{d()}),[]),(0,i.useEffect)((()=>{u()}),[n]);const d=()=>{const e=Array.from({length:30},(()=>Math.ceil(100*Math.random())));t(e)},u=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const s=e[t].cssRules||e[t].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${n}ms`;break}}};return(0,o.jsxs)("div",{className:"selection-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:n,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{a(!0);let s=[...e];for(let e=0;e<s.length-1;e++){let r=e;for(let t=e+1;t<s.length;t++)c([r,t]),await new Promise((e=>setTimeout(e,n))),s[t]<s[r]&&(r=t);if(r!==e){let n=s[e];s[e]=s[r],s[r]=n,t([...s])}}c([]),a(!1)},disabled:r,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:r,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar "+(l.includes(t)?"comparing":""),style:{height:3*e+"px"}},t)))})]})},u=()=>{const[e,t]=(0,i.useState)([]),[n,s]=(0,i.useState)(200),[r,a]=(0,i.useState)(!1),[l,c]=(0,i.useState)([]);(0,i.useEffect)((()=>{d()}),[]),(0,i.useEffect)((()=>{u()}),[n]);const d=()=>{const e=Array.from({length:30},(()=>Math.ceil(100*Math.random())));t(e)},u=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const s=e[t].cssRules||e[t].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${n}ms`;break}}};return(0,o.jsxs)("div",{className:"bubble-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:n,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{a(!0);let s=[...e];for(let e=0;e<s.length-1;e++)for(let r=0;r<s.length-e-1;r++)if(c([r,r+1]),await new Promise((e=>setTimeout(e,n))),s[r]>s[r+1]){let e=s[r];s[r]=s[r+1],s[r+1]=e,t([...s])}c([]),a(!1)},disabled:r,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:r,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Instructions:"}),' Click the "Sort" button to visualize the Bubble Sort algorithm. You can also adjust the speed of the visualization using the slider.']}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar "+(l.includes(t)?"comparing":""),style:{height:3*e+"px"}},t)))})]})};var h=n(55544),m=n(32216),p=n(67288);const x=p.xZ`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,g=p.cp.a`
    display: block;
    padding: 20px;
    margin: 10px 0;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    transition: transform 0.3s ease;
    animation: ${x} 0.5s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    }
`,b=p.cp.h3`
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 600;
    color: #7f8c8d;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`,j=p.cp.span`
    font-size: 14px;
`,f=e=>{let{collections:t}=e;return(0,o.jsx)("div",{children:t.map(((e,t)=>(0,o.jsxs)(g,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)(b,{children:e.label}),(0,o.jsx)(j,{children:e.url})]},t)))})};var v=n(97512);const w=p.cp.div`
  margin: 20px;
`,y=p.cp.div`
  margin-bottom: 10px;
`,N=p.cp.button`
  margin-right: 10px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`,k=p.cp.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`,S=p.cp.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`,C=p.cp.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`,_=p.cp.h3`
  margin-bottom: 5px;
`,T=p.cp.p`
  margin-bottom: 5px;
`,W=p.cp.span`
  font-style: italic;
`,A=e=>{let{courses:t}=e;const[n,s]=(0,i.useState)("all"),r="all"===n?t:t.filter((e=>e.category===n));return(0,o.jsxs)(w,{children:[(0,o.jsxs)(y,{children:[(0,o.jsx)(N,{onClick:()=>s("all"),children:"All"}),(0,o.jsx)(N,{onClick:()=>s("html"),children:"HTML"}),(0,o.jsx)(N,{onClick:()=>s("css"),children:"CSS"}),(0,o.jsx)(N,{onClick:()=>s("javascript"),children:"JavaScript"})]}),(0,o.jsx)(k,{children:r.map((e=>(0,o.jsxs)(S,{children:[(0,o.jsx)(C,{src:e.imageUrl,alt:e.title}),(0,o.jsx)(_,{children:e.title}),(0,o.jsx)(T,{children:e.description}),(0,o.jsxs)(W,{children:[(0,o.jsx)("strong",{children:"Author:"})," ",e.author]}),(0,o.jsx)("div",{children:(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"Visit Course"})})]},e.id)))})]})},L={...s.c,SolutionAuthor:function(e){let{name:t}=e;return(0,o.jsx)("div",{className:"solution-author-wrapper",children:(0,o.jsxs)("span",{children:["Written by ",t]})})},Tabs:r.c,TabItem:a.c,TutorialAuthors:function(e){let{names:t}=e;const n=t.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper",children:[n.length>1?"Authors: ":"Author: ",n.map(((e,t)=>(0,o.jsx)("span",{className:"author-tag tag",children:e},t)))]})},Table:function(e){let{title:t,collectionLink:n,isSorted:s=!0,data:r}=e;const a=r.some((e=>e.tags)),i={Easy:0,Medium:1,Hard:2},c=(s?r.sort(((e,t)=>i[e.difficulty]-i[t.difficulty])):r).map(((e,t)=>{return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:e.leetCodeLink,target:"_blank",rel:"noopener noreferrer",children:e.problemName})}),(0,o.jsx)("td",{className:(n=e.difficulty,n.toLowerCase()),children:e.difficulty}),(0,o.jsxs)("td",{style:{textAlign:"center"},children:[e.solutionLink&&(0,o.jsx)("a",{href:e.solutionLink,target:"_blank",rel:"noopener noreferrer",children:"View Solutions"}),!e.solutionLink&&(0,o.jsx)("span",{children:"N/A"})]}),a&&(0,o.jsx)("td",{children:(0,o.jsx)(l,{names:e.tags})})]},t);var n}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:t}),n&&(0,o.jsxs)("h4",{children:["Start Practicing:"," ",(0,o.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:n})]}),(0,o.jsxs)("table",{className:"suggested-problem-table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Problem Name"}),(0,o.jsx)("th",{children:"Difficulty"}),(0,o.jsx)("th",{children:"Solution Link"}),a&&(0,o.jsx)("th",{children:"Topic"})]})}),(0,o.jsx)("tbody",{children:c})]})]})},Contributors:function(e){let{names:t}=e;const n=t.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper contributors",children:[n.length>1?"Contributors: ":"Contributor: ",n.map(((e,t)=>(0,o.jsx)("span",{className:"contributor-tag tag",children:e},t)))]})},BrowserWindow:h.c,GiscusComponent:m.c,ArrayVisualizations:c,BubbleSortVisualization:u,SelectionSortVisualization:d,CollectionList:f,FaReact:v.GAi,Courses:A}},22192:(e,t,n)=>{n.d(t,{c:()=>r});var s=n(11504);const r={React:s,...s}}}]);