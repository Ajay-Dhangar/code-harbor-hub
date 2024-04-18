"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[8608],{36432:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var o=i(17624),a=i(4552);const t={id:"lesson-1",title:"Building a production-ready build of your React application",sidebar_label:"Lesson - 1",sidebar_position:1,description:"In this lesson, you will learn how to build a production-ready version of your React application. We will cover the steps involved in creating an optimized build, configuring environment variables, and deploying your application to a hosting service.",tags:["courses","react-js","advanced-level","production-build","deployment","hosting","environment-variables"]},r=void 0,l={id:"react-js/advanced-level/deployment-and-beyond/lesson-1",title:"Building a production-ready build of your React application",description:"In this lesson, you will learn how to build a production-ready version of your React application. We will cover the steps involved in creating an optimized build, configuring environment variables, and deploying your application to a hosting service.",source:"@site/courses/react-js/advanced-level/deployment-and-beyond/lesson_1.md",sourceDirName:"react-js/advanced-level/deployment-and-beyond",slug:"/react-js/advanced-level/deployment-and-beyond/lesson-1",permalink:"/code-harbor-hub/courses/react-js/advanced-level/deployment-and-beyond/lesson-1",draft:!1,unlisted:!1,tags:[{label:"courses",permalink:"/code-harbor-hub/courses/tags/courses"},{label:"react-js",permalink:"/code-harbor-hub/courses/tags/react-js"},{label:"advanced-level",permalink:"/code-harbor-hub/courses/tags/advanced-level"},{label:"production-build",permalink:"/code-harbor-hub/courses/tags/production-build"},{label:"deployment",permalink:"/code-harbor-hub/courses/tags/deployment"},{label:"hosting",permalink:"/code-harbor-hub/courses/tags/hosting"},{label:"environment-variables",permalink:"/code-harbor-hub/courses/tags/environment-variables"}],version:"current",lastUpdatedBy:"Restyled.io",lastUpdatedAt:1713430415e3,sidebarPosition:1,frontMatter:{id:"lesson-1",title:"Building a production-ready build of your React application",sidebar_label:"Lesson - 1",sidebar_position:1,description:"In this lesson, you will learn how to build a production-ready version of your React application. We will cover the steps involved in creating an optimized build, configuring environment variables, and deploying your application to a hosting service.",tags:["courses","react-js","advanced-level","production-build","deployment","hosting","environment-variables"]},sidebar:"codeharborhub",previous:{title:"Module 15: Deployment and Beyond",permalink:"/code-harbor-hub/courses/category/module-15-deployment-and-beyond"},next:{title:"Lesson - 2",permalink:"/code-harbor-hub/courses/react-js/advanced-level/deployment-and-beyond/lesson-2"}},s={},d=[{value:"Why build a production-ready version?",id:"why-build-a-production-ready-version",level:2},{value:"Steps to build a production-ready React application",id:"steps-to-build-a-production-ready-react-application",level:2},{value:"1. Create a production build",id:"1-create-a-production-build",level:3},{value:"2. Review the production build",id:"2-review-the-production-build",level:3},{value:"3. Configure environment variables",id:"3-configure-environment-variables",level:3},{value:"4. Deploy your application",id:"4-deploy-your-application",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In this lesson, you will learn how to build a production-ready version of your React application. We will cover the steps involved in creating an optimized build, configuring environment variables, and deploying your application to a hosting service."}),"\n",(0,o.jsx)(n.h2,{id:"why-build-a-production-ready-version",children:"Why build a production-ready version?"}),"\n",(0,o.jsx)(n.p,{children:"When you are ready to deploy your React application to a production environment, it is essential to build a production-ready version that is optimized for performance and security. A production build typically involves minifying and bundling your code, optimizing assets, and configuring environment variables for different deployment environments."}),"\n",(0,o.jsx)(n.h2,{id:"steps-to-build-a-production-ready-react-application",children:"Steps to build a production-ready React application"}),"\n",(0,o.jsx)(n.h3,{id:"1-create-a-production-build",children:"1. Create a production build"}),"\n",(0,o.jsxs)(n.p,{children:["To create a production build of your React application, you can use the ",(0,o.jsx)(n.code,{children:"npm run build"})," command provided by Create React App. This command generates a production-optimized build of your application in the ",(0,o.jsx)(n.code,{children:"build"})," directory."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2-review-the-production-build",children:"2. Review the production build"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"alt text",src:i(46095).c+"",width:"1366",height:"768"})}),"\n",(0,o.jsxs)(n.p,{children:["After running the ",(0,o.jsx)(n.code,{children:"npm run build"})," command, you can review the contents of the ",(0,o.jsx)(n.code,{children:"build"})," directory to ensure that your application is correctly bundled and optimized for production. The build directory will contain the minified and optimized versions of your JavaScript, CSS, and other assets."]}),"\n",(0,o.jsx)(n.h3,{id:"3-configure-environment-variables",children:"3. Configure environment variables"}),"\n",(0,o.jsxs)(n.p,{children:["When deploying your React application to different environments, you may need to configure environment-specific variables such as API endpoints, authentication keys, or feature flags. Create React App allows you to define environment variables in a ",(0,o.jsx)(n.code,{children:".env"})," file or using the ",(0,o.jsx)(n.code,{children:"REACT_APP_"})," prefix."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"REACT_APP_API_URL=https://api.example.com\n"})}),"\n",(0,o.jsx)(n.h3,{id:"4-deploy-your-application",children:"4. Deploy your application"}),"\n",(0,o.jsx)(n.p,{children:"Once you have built a production-ready version of your React application and configured the necessary environment variables, you can deploy your application to a hosting service such as Netlify, Vercel, or AWS Amplify. These services provide easy-to-use deployment options for React applications and offer features like continuous deployment, custom domains, and SSL certificates."}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"If you want to deploy and host your React application on internet, you can use several hosting services like:"}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.netlify.com/",children:"Netlify"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://vercel.com/",children:"Vercel"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://aws.amazon.com/amplify/",children:"AWS Amplify"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://pages.github.com/",children:"GitHub Pages"})," Or ",(0,o.jsx)(n.a,{href:"https://github.com/",children:"GitHub"})," itself"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://firebase.google.com/docs/hosting",children:"Firebase Hosting"})}),"\n"]})]}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"Building a production-ready version of your React application is an essential step before deploying it to a production environment. By following the steps outlined in this lesson, you can create an optimized build, configure environment variables, and deploy your application to a hosting service with ease."})]})}function u(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},46095:(e,n,i)=>{i.d(n,{c:()=>o});const o=i.p+"assets/images/image-9100e02c91198517f30cccee4b1a7138.png"},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>r});var o=i(11504);const a={},t=o.createContext(a);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);