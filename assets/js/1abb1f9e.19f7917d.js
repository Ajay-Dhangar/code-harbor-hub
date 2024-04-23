"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[17564],{31776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(17624),a=n(4552);const s={title:"Getting Started with React and Vite",authors:["ajay-dhangar"],tags:["React","JavaScript","User interfaces","Library","Virtual DOM","Declarative syntax","Components","Rendering","Web applications","Node.js","Vite","React documentation","React hooks","React Router","React Context API","Awesome React"],date:new Date("2024-03-17T12:15:07.000Z"),description:"Learn how to get started with React by creating a new app using Vite. Follow the steps to set up your development environment and build your first React application."},o=void 0,r={permalink:"/blog/getting-started-with-vite",editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/blog/getting-started-with-vite/index.md",source:"@site/blog/getting-started-with-vite/index.md",title:"Getting Started with React and Vite",description:"Learn how to get started with React by creating a new app using Vite. Follow the steps to set up your development environment and build your first React application.",date:"2024-03-17T12:15:07.000Z",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"JavaScript",permalink:"/blog/tags/java-script"},{label:"User interfaces",permalink:"/blog/tags/user-interfaces"},{label:"Library",permalink:"/blog/tags/library"},{label:"Virtual DOM",permalink:"/blog/tags/virtual-dom"},{label:"Declarative syntax",permalink:"/blog/tags/declarative-syntax"},{label:"Components",permalink:"/blog/tags/components"},{label:"Rendering",permalink:"/blog/tags/rendering"},{label:"Web applications",permalink:"/blog/tags/web-applications"},{label:"Node.js",permalink:"/blog/tags/node-js"},{label:"Vite",permalink:"/blog/tags/vite"},{label:"React documentation",permalink:"/blog/tags/react-documentation"},{label:"React hooks",permalink:"/blog/tags/react-hooks"},{label:"React Router",permalink:"/blog/tags/react-router"},{label:"React Context API",permalink:"/blog/tags/react-context-api"},{label:"Awesome React",permalink:"/blog/tags/awesome-react"}],readingTime:6.145,hasTruncateMarker:!1,authors:[{name:"Ajay Dhangar",url:"https://github.com/ajay-dhangar",imageURL:"https://avatars.githubusercontent.com/u/99037494?v=4",key:"ajay-dhangar"}],frontMatter:{title:"Getting Started with React and Vite",authors:["ajay-dhangar"],tags:["React","JavaScript","User interfaces","Library","Virtual DOM","Declarative syntax","Components","Rendering","Web applications","Node.js","Vite","React documentation","React hooks","React Router","React Context API","Awesome React"],date:"2024-03-17T12:15:07.000Z",description:"Learn how to get started with React by creating a new app using Vite. Follow the steps to set up your development environment and build your first React application."},unlisted:!1,nextItem:{title:" Git Best Practices: Commit Often, Perfect Later, Publish Once",permalink:"/blog/git-best-practicies"}},l={authorsImageUrls:[void 0]},c=[{value:"Quick Start",id:"quick-start",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Building Our First React Application",id:"building-our-first-react-application",level:2},{value:"Why Vite?",id:"why-vite",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Getting Started with React and Vite",src:n(20304).c+"",width:"830",height:"465"})}),"\n",(0,i.jsx)(t.p,{children:"Vite is a modern build tool that offers faster development times and optimized builds. It aligns with modern web standards and provides out-of-the-box support for TypeScript, making it an excellent choice for React development. In this blog post, we will learn how to get started with React by creating a new app using Vite. We will follow the steps to set up our development environment and build our first React application."}),"\n",(0,i.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsx)(t.p,{children:"To get started with Vite, we need to have Node.js installed on our system. We can install Node.js by downloading the installer from the official website or using a package manager. Once we have Node.js installed, we can use npm to create a new Vite project with the React template."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"To quickly get started with Vite and React, follow these steps:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm create vite@latest my-app --template react\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This command will create a new Vite project called ",(0,i.jsx)(t.code,{children:"my-app"})," using the React template. It will set up the project structure and install the necessary dependencies. We can then navigate to the ",(0,i.jsx)(t.code,{children:"my-app"})," directory and start the development server to see our new React application in action."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Now navigate to the ",(0,i.jsx)(t.code,{children:"my-app"})," directory:"]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"cd my-app\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"if you prefer using npm:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Or, if you prefer using yarn:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Now start the development server:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Or, if you prefer using yarn:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn start\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Once the development server has started, open ",(0,i.jsx)(t.a,{href:"http://localhost:3000/",children:"http://localhost:3000/"})," in your browser to see your new React application. You can start building your React components, defining routes, and managing state using the React Context API."]}),"\n",(0,i.jsx)(t.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,i.jsx)(t.p,{children:"The Vite project structure for a new React application is minimal and easy to understand. It provides a clean and organized layout that aligns with modern web development practices. Here is an overview of the project structure:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-plaintext",children:"my-app\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 favicon.ico\n\u2502   \u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 App.css\n\u2502   \u251c\u2500\u2500 App.jsx\n\u2502   \u251c\u2500\u2500 index.css\n\u2502   \u251c\u2500\u2500 index.jsx\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"public"})," directory contains the static assets for our application, such as the ",(0,i.jsx)(t.code,{children:"index.html"})," file and the ",(0,i.jsx)(t.code,{children:"favicon.ico"})," icon. The ",(0,i.jsx)(t.code,{children:"src"})," directory contains the source code for our React application, including the main ",(0,i.jsx)(t.code,{children:"index.jsx"})," file and the ",(0,i.jsx)(t.code,{children:"App.jsx"})," component."]}),"\n",(0,i.jsx)(t.h2,{id:"building-our-first-react-application",children:"Building Our First React Application"}),"\n",(0,i.jsx)(t.p,{children:"Now that we have our development environment set up and our project structure in place, we can start building our first React application. We can create new components, define routes, and manage state using the React Context API. We can also use popular libraries such as React Router and React hooks to enhance our application."}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about building React applications with Vite, refer to the official ",(0,i.jsx)(t.a,{href:"https://reactjs.org/docs/getting-started.html",children:"React documentation"}),". The documentation provides detailed information on React concepts, best practices, and advanced topics."]}),"\n",(0,i.jsx)(t.h2,{id:"why-vite",children:"Why Vite?"}),"\n",(0,i.jsx)(t.p,{children:"Vite offers several advantages for React development, including:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Faster Development"}),": Vite provides a lightning-fast development server with hot module replacement (HMR) and instant server start. It eliminates the need for a bundler during development, resulting in faster build times and a smoother development experience."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Optimized Builds"}),": Vite optimizes the production build by leveraging native ES module support in modern browsers. It generates highly optimized and tree-shaken builds, resulting in smaller bundle sizes and improved performance."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Modern Web Standards"}),": Vite aligns with modern web standards and leverages native browser features such as ES modules, dynamic imports, and web workers. It provides an efficient development environment that embraces the latest web technologies."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"TypeScript Support"}),": Vite offers out-of-the-box support for TypeScript, enabling us to write type-safe code and leverage advanced TypeScript features. It provides seamless integration with React and TypeScript, making it an excellent choice for React development."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Plugin Ecosystem"}),": Vite has a rich plugin ecosystem that allows us to extend its functionality and customize the build process. We can use plugins to add features such as CSS preprocessing, asset optimization, and code transformation."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Developer Experience"}),": Vite provides an excellent developer experience with features such as instant server start, optimized builds, and real-time feedback. It streamlines the development workflow and enables us to focus on building great React applications."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Community Support"}),": Vite has a growing community and active maintainers who contribute to its development and provide support. It has gained popularity in the React ecosystem and is widely adopted by developers."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Migration Path"}),": Vite offers a smooth migration path for existing React projects by providing a Vite-compatible React template. It allows us to migrate our projects to Vite without significant changes to the codebase."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Future Compatibility"}),": Vite is designed to be future-compatible and aligns with the latest web standards and best practices. It provides a solid foundation for building modern React applications that are ready for the future."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Open Source"}),": Vite is an open-source project with a permissive license that allows us to use, modify, and distribute it freely. It is developed in the open and welcomes contributions from the community."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Continuous Improvement"}),": Vite is continuously improved and updated with new features, optimizations, and bug fixes. It has a roadmap for future releases and aims to provide a cutting-edge development experience for React developers."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Integration with Vercel"}),": Vite has seamless integration with Vercel, a popular platform for deploying web applications. It allows us to deploy our Vite projects to Vercel with minimal configuration and take advantage of Vercel's features such as serverless functions and edge caching."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Developer Tools"}),": Vite provides a set of developer tools that enhance the development experience, including a built-in development server, optimized builds, and real-time feedback. It offers a comprehensive toolkit for building and debugging React applications."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Performance Optimization"}),": Vite optimizes the development and production builds by leveraging modern web standards and best practices. It provides a performant and efficient build process that results in faster load times and improved user experience."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Community Plugins"}),": Vite has a rich ecosystem of community plugins that extend its functionality and provide additional features. We can use plugins to add support for features such as PWA, internationalization, and analytics to our Vite projects."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Learning Resources"}),": Vite has a growing collection of learning resources, tutorials, and documentation that help developers get started with Vite and build great React applications. It provides comprehensive guidance on using Vite effectively and efficiently."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Developer Community"}),": Vite has a vibrant developer community that actively contributes to its development and provides support to fellow developers. It has a dedicated Discord server, GitHub repository, and community forums where developers can connect and collaborate."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"\ud83d\udcda Learn More:",type:"info",children:(0,i.jsxs)(t.p,{children:["To learn more about Vite, visit the official ",(0,i.jsx)(t.a,{href:"https://vitejs.dev/",children:"Vite documentation"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"In this blog post, we learned how to get started with React by creating a new app using Vite. We followed the steps to set up our development environment and build our first React application. We explored the advantages of using Vite for React development and discussed its features, benefits, and community support. We also learned about the project structure of a new React application created with Vite and how to build our first React application. We hope this blog post has provided you with valuable insights into using Vite for React development and has inspired you to explore the possibilities of building modern web applications with Vite and React."})]})}function p(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},20304:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/react-and-vite-a4ef1b4d43d0d11e0deee709738b3d8a.jpg"},4552:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>o});var i=n(11504);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);