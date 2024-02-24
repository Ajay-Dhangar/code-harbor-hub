"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[8480],{15160:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});t(11504);var a=t(65238),l=t(87320),s=t(17624);function o(e){let{pluginId:n,pluginInstanceContent:t}=e;return(0,s.jsxs)("section",{style:{marginBottom:30},children:[(0,s.jsx)("code",{children:n}),(0,s.jsx)(l.c,{src:t,collapseDepth:2})]})}function r(e){let{pluginName:n,pluginContent:t}=e;return(0,s.jsxs)("section",{style:{marginBottom:60},children:[(0,s.jsx)("h3",{children:n}),(0,s.jsx)("div",{children:Object.entries(t).filter((e=>{let[,n]=e;return!!n})).map((e=>{let[n,t]=e;return(0,s.jsx)(o,{pluginId:n,pluginInstanceContent:t},n)}))})]})}function c(e){let{allContent:n}=e;return(0,s.jsxs)(a.c,{children:[(0,s.jsx)("h2",{children:"Plugin content"}),(0,s.jsx)("div",{children:Object.entries(n).filter((e=>{let[,n]=e;return Object.values(n).some((e=>!!e))})).map((e=>{let[n,t]=e;return(0,s.jsx)(r,{pluginName:n,pluginContent:t},n)}))})]})}},87320:(e,n,t)=>{t.d(n,{c:()=>M});var a=t(11504);const l=e=>"boolean"==typeof e||e instanceof Boolean,s=e=>"number"==typeof e||e instanceof Number,o=e=>"bigint"==typeof e||e instanceof BigInt,r=e=>!!e&&e instanceof Date,c=e=>"string"==typeof e||e instanceof String,u=e=>Array.isArray(e),i=e=>e instanceof Object&&null!==e;let d=1;const m=()=>d++;function p(e){let{field:n,value:t,data:l,lastElement:s,openBracket:o,closeBracket:r,level:c,style:u,shouldExpandNode:i}=e;const d=(0,a.useRef)(!1),[p,h,b]=function(e){const[n,t]=(0,a.useState)(e());return[n,()=>t((e=>!e)),t]}((()=>i(c,t,n)));(0,a.useEffect)((()=>{d.current?b(i(c,t,n)):d.current=!0}),[i]);const _=p?u.collapseIcon:u.expandIcon,x=p?"collapse JSON":"expand JSON",f=function(){const e=(0,a.useRef)();return void 0===e.current&&(e.current=`:jsnvw:${m()}:`),e.current}(),g=c+1,E=l.length-1,j=e=>{" "===e.key&&h()};return(0,a.createElement)("div",{className:u.basicChildStyle,role:"list"},(0,a.createElement)("span",{className:_,onClick:h,onKeyDown:j,role:"button",tabIndex:0,"aria-label":x,"aria-expanded":p,"aria-controls":p?f:void 0}),n&&(0,a.createElement)("span",{className:u.label},n,":"),(0,a.createElement)("span",{className:u.punctuation},o),p?(0,a.createElement)("div",{id:f},l.map(((e,n)=>(0,a.createElement)(v,{key:e[0]||n,field:e[0],value:e[1],style:u,lastElement:n===E,level:g,shouldExpandNode:i})))):(0,a.createElement)("span",{className:u.collapsedContent,onClick:h,onKeyDown:j,role:"button",tabIndex:-1,"aria-hidden":!0,"aria-label":x,"aria-expanded":p}),(0,a.createElement)("span",{className:u.punctuation},r),!s&&(0,a.createElement)("span",{className:u.punctuation},","))}function h(e){let{field:n,value:t,style:a,lastElement:l,shouldExpandNode:s,level:o}=e;return p({field:n,value:t,lastElement:l||!1,level:o,openBracket:"{",closeBracket:"}",style:a,shouldExpandNode:s,data:Object.keys(t).map((e=>[e,t[e]]))})}function b(e){let{field:n,value:t,style:a,lastElement:l,level:s,shouldExpandNode:o}=e;return p({field:n,value:t,lastElement:l||!1,level:s,openBracket:"[",closeBracket:"]",style:a,shouldExpandNode:o,data:t.map((e=>[void 0,e]))})}function _(e){let{field:n,value:t,style:u,lastElement:i}=e,d=t,m=u.otherValue;return null===t?(d="null",m=u.nullValue):void 0===t?(d="undefined",m=u.undefinedValue):c(t)?(d=`"${t}"`,m=u.stringValue):l(t)?(d=t?"true":"false",m=u.booleanValue):s(t)?(d=t.toString(),m=u.numberValue):o(t)?(d=`${t.toString()}n`,m=u.numberValue):d=r(t)?t.toISOString():t.toString(),""===n&&(n='""'),(0,a.createElement)("div",{className:u.basicChildStyle,role:"listitem"},n&&(0,a.createElement)("span",{className:u.label},n,":"),(0,a.createElement)("span",{className:m},d),!i&&(0,a.createElement)("span",{className:u.punctuation},","))}function v(e){const n=e.value;return u(n)?(0,a.createElement)(b,Object.assign({},e)):i(n)&&!r(n)?(0,a.createElement)(h,Object.assign({},e)):(0,a.createElement)(_,Object.assign({},e))}var x="_2bkNM";const f={container:"_2IvMF _GzYRV",basicChildStyle:x,label:"_1MGIk",nullValue:"_2T6PJ",undefinedValue:"_1Gho6",stringValue:"_vGjyY",booleanValue:"_3zQKs",numberValue:"_1bQdo",otherValue:"_1xvuR",punctuation:"_3uHL6 _3eOF8",collapseIcon:"_oLqym _f10Tu _1MFti _1LId0",expandIcon:"_2AXVT _f10Tu _1MFti _1UmXx",collapsedContent:"_2KJWg _1pNG9 _1MFti"},g=()=>!0,E=e=>{let{data:n,style:t=f,shouldExpandNode:l=g}=e;return(0,a.createElement)("div",{className:t.container},(0,a.createElement)(v,{value:n,style:t,lastElement:!0,level:0,shouldExpandNode:l}))},j="containerParaiso_cQJv",y="basicElementParaiso_QZsA",N="labelParaiso_wRN4",V="nullValueParaiso_AoA7",k="undefinedValueParaiso_FhTI",I="stringValueParaiso_V3BI",C="booleanValueParaiso_DtTx",P="numberValueParaiso_QJS7",S="otherValueParaiso_LEJn",O="punctuationParaiso_IgdH",B="expandIconParaiso_FXv1",D="collapseIconParaiso_vUhq",J="collapseContentParaiso_r7rr";var A=t(17624);const F={container:j,basicChildStyle:y,label:N,nullValue:V,undefinedValue:k,stringValue:I,booleanValue:C,numberValue:P,otherValue:S,punctuation:O,collapseIcon:D,expandIcon:B,collapsedContent:J};function M(e){let{src:n,collapseDepth:t}=e;return(0,A.jsx)(E,{data:n,shouldExpandNode:(e,n)=>Array.isArray(n)?n.length<5:void 0!==t&&e<t,style:F})}},65238:(e,n,t)=>{t.d(n,{c:()=>c});t(11504);var a=t(18300),l=t(45800);const s={container:"container_UJDL",nav:"nav_uyzg",navlink:"navlink_fkkq",active:"active_YJyX"};var o=t(17624);function r(e){let{to:n,children:t}=e;return(0,o.jsx)(l.c,{className:s.navlink,isNavLink:!0,to:n,exact:!0,activeStyle:{backgroundColor:"#363739"},children:t})}function c(e){let{children:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.c,{children:[(0,o.jsx)("html",{lang:"en"}),(0,o.jsx)("title",{children:"Docusaurus debug panel"}),(0,o.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("nav",{className:s.nav,children:[(0,o.jsx)(r,{to:"/__docusaurus/debug",children:"Config"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/metadata",children:"Metadata"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/registry",children:"Registry"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/routes",children:"Routes"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/content",children:"Content"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/globalData",children:"Global data"})]}),(0,o.jsx)("main",{className:s.container,children:n})]})]})}}}]);