"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[7160],{76472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(17624),i=n(4552);const a={id:"lesson-2",title:"Using React Router for navigation between views",sidebar_label:"Lesson - 2",sidebar_position:2,description:"In this lesson, we will learn how to use React Router to navigate between views in a single-page application.",tags:["courses","react-js","intermidiate-level","routing-for-spas","navigation","react-router"]},r=void 0,s={id:"react-js/intermidiate-level/routing-for-spas/lesson-2",title:"Using React Router for navigation between views",description:"In this lesson, we will learn how to use React Router to navigate between views in a single-page application.",source:"@site/courses/react-js/intermidiate-level/routing-for-spas/lesson_2.md",sourceDirName:"react-js/intermidiate-level/routing-for-spas",slug:"/react-js/intermidiate-level/routing-for-spas/lesson-2",permalink:"/courses/react-js/intermidiate-level/routing-for-spas/lesson-2",draft:!1,unlisted:!1,tags:[{label:"courses",permalink:"/courses/tags/courses"},{label:"react-js",permalink:"/courses/tags/react-js"},{label:"intermidiate-level",permalink:"/courses/tags/intermidiate-level"},{label:"routing-for-spas",permalink:"/courses/tags/routing-for-spas"},{label:"navigation",permalink:"/courses/tags/navigation"},{label:"react-router",permalink:"/courses/tags/react-router"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1712854141e3,sidebarPosition:2,frontMatter:{id:"lesson-2",title:"Using React Router for navigation between views",sidebar_label:"Lesson - 2",sidebar_position:2,description:"In this lesson, we will learn how to use React Router to navigate between views in a single-page application.",tags:["courses","react-js","intermidiate-level","routing-for-spas","navigation","react-router"]},sidebar:"codeharborhub",previous:{title:"Lesson - 1",permalink:"/courses/react-js/intermidiate-level/routing-for-spas/lesson-1"},next:{title:"Lesson - 3",permalink:"/courses/react-js/intermidiate-level/routing-for-spas/lesson-3"}},c={},l=[{value:"Setting up React Router",id:"setting-up-react-router",level:2},{value:"Creating routes with React Router",id:"creating-routes-with-react-router",level:2},{value:"Navigating between views",id:"navigating-between-views",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.M)(),...e.components},{TabItem:n,Tabs:a}=t;return n||h("TabItem",!0),a||h("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"In this lesson, we will learn how to use React Router to navigate between views in a single-page application. React Router is a popular library for routing in React applications. It allows you to define routes and navigate between views using a declarative syntax."}),"\n",(0,o.jsx)(t.h2,{id:"setting-up-react-router",children:"Setting up React Router"}),"\n",(0,o.jsxs)(t.p,{children:["To get started with React Router, you need to install the ",(0,o.jsx)(t.code,{children:"react-router-dom"})," package. You can do this by running the following command:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install react-router-dom\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Once you have installed the ",(0,o.jsx)(t.code,{children:"react-router-dom"})," package, you can start using React Router in your application."]}),"\n",(0,o.jsx)(t.h2,{id:"creating-routes-with-react-router",children:"Creating routes with React Router"}),"\n",(0,o.jsxs)(t.p,{children:["To define routes in your application, you need to use the ",(0,o.jsx)(t.code,{children:"BrowserRouter"})," and ",(0,o.jsx)(t.code,{children:"Route"})," components provided by React Router. The ",(0,o.jsx)(t.code,{children:"BrowserRouter"})," component is used to wrap your application and provide routing functionality, while the ",(0,o.jsx)(t.code,{children:"Route"})," component is used to define individual routes."]}),"\n",(0,o.jsx)(t.p,{children:"Here's an example of how you can define routes in your application:"}),"\n",(0,o.jsxs)(a,{children:[(0,o.jsxs)(n,{value:"app",label:"App.js",children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="/src/App.js"',children:"import React from 'react';\nimport { BrowserRouter as Router, Route, Routes } from 'react-router-dom';\nimport Header from './Header';\nimport Home from './Home';\nimport About from './About';\nimport Contact from './Contact';\n\nfunction App() {\n  return (\n    <>\n      <h1>My App</h1>\n     <Header />\n     <Router>\n       <Routes>\n         <Route path=\"/\" element={<Home />} />\n         <Route path=\"/about\" element={<About />} />\n         <Route path=\"/contact\" element={<Contact />} />\n       </Routes>\n      </Router>\n    </>\n );\n}\n\nexport default App;\n"})}),(0,o.jsxs)(t.p,{children:["In this example, we have defined three routes: ",(0,o.jsx)(t.code,{children:"/"}),", ",(0,o.jsx)(t.code,{children:"/about"}),", and ",(0,o.jsx)(t.code,{children:"/contact"}),". Each route is associated with a component that will be rendered when the route matches the current URL. The ",(0,o.jsx)(t.code,{children:"Router"})," component wraps the ",(0,o.jsx)(t.code,{children:"Routes"})," component and provides the routing functionality to the application. The ",(0,o.jsx)(t.code,{children:"Header"})," component is used to display a navigation menu that allows the user to navigate between the different views."]})]}),(0,o.jsxs)(n,{value:"header",label:"Header.js",children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="/src/Header.js"',children:'import React from \'react\';\nimport { Link } from \'react-router-dom\';\n\nfunction Header() {\n   return (\n    <nav>\n      <ul>\n         <li>\n           <Link to="/">Home</Link>\n         </li>\n         <li>\n           <Link to="/about">About</Link>\n         </li>\n         <li>\n           <Link to="/contact">Contact</Link>\n         </li>\n      </ul>\n     </nav>\n  );\n}\n\nexport default Header;\n'})}),(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Header"})," component displays a navigation menu with links to the different views in the application. The ",(0,o.jsx)(t.code,{children:"Link"})," component provided by React Router is used to create links that navigate to the specified route when clicked."]})]}),(0,o.jsxs)(n,{value:"home",label:"Home.js",children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="/src/Home.js"',children:"import React from 'react';\n\nfunction Home() {\n  return (\n    <div>\n     <h2>Home</h2>\n     <p>Welcome to the home page!</p>\n    </div>\n );\n}\n\nexport default Home;\n"})}),(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Home"})," component displays the content for the home page. When the user navigates to the ",(0,o.jsx)(t.code,{children:"/"})," route, this component will be rendered."]})]}),(0,o.jsxs)(n,{value:"about",label:"About.js",children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="/src/About.js"',children:"import React from 'react';\n\nfunction About() {\n return (\n   <div>\n     <h2>About</h2>\n     <p>Welcome to the about page!</p>\n   </div>\n );\n}\n\nexport default About;\n"})}),(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"About"})," component displays the content for the about page. When the user navigates to the ",(0,o.jsx)(t.code,{children:"/about"})," route, this component will be rendered."]})]}),(0,o.jsxs)(n,{value:"contact",label:"Contact.js",children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="/src/Contact.js"',children:"import React from 'react';\n\nfunction Contact() {\n  return (\n    <div>\n      <h2>Contact</h2>\n      <p>Welcome to the contact page!</p>\n    </div>\n  );\n}\n\nexport default Contact;\n"})}),(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Contact"})," component displays the content for the contact page. When the user navigates to the ",(0,o.jsx)(t.code,{children:"/contact"})," route, this component will be rendered."]})]})]}),"\n",(0,o.jsxs)(t.p,{children:["In this example, we have defined three routes: ",(0,o.jsx)(t.code,{children:"/"}),", ",(0,o.jsx)(t.code,{children:"/about"}),", and ",(0,o.jsx)(t.code,{children:"/contact"}),". Each route is associated with a component that will be rendered when the route matches the current URL. The ",(0,o.jsx)(t.code,{children:"Router"})," component wraps the ",(0,o.jsx)(t.code,{children:"Routes"})," component and provides the routing functionality to the application. The ",(0,o.jsx)(t.code,{children:"Header"})," component is used to display a navigation menu that allows the user to navigate between the different views."]}),"\n",(0,o.jsx)(t.h2,{id:"navigating-between-views",children:"Navigating between views"}),"\n",(0,o.jsxs)(t.p,{children:["To navigate between views in your application, you can use the ",(0,o.jsx)(t.code,{children:"Link"})," component provided by React Router. The ",(0,o.jsx)(t.code,{children:"Link"})," component creates a hyperlink that navigates to the specified route when clicked."]}),"\n",(0,o.jsxs)(t.p,{children:["Here's an example of how you can use the ",(0,o.jsx)(t.code,{children:"Link"})," component to create navigation links in your application:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="/src/Header.js"',children:'import React from \'react\';\nimport { Link } from \'react-router-dom\';\n\nfunction Header() {\n  return (\n    <nav>\n      <ul>\n        <li>\n          <Link to="/">Home</Link>\n        </li>\n        <li>\n          <Link to="/about">About</Link>\n        </li>\n        <li>\n          <Link to="/contact">Contact</Link>\n        </li>\n      </ul>\n    </nav>\n  );\n}\n\nexport default Header;\n'})}),"\n",(0,o.jsxs)(t.p,{children:["In this example, we have created navigation links for the home, about, and contact views using the ",(0,o.jsx)(t.code,{children:"Link"})," component. When the user clicks on one of these links, they will be navigated to the corresponding route."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Link"})," component provided by React Router is similar to the ",(0,o.jsx)(t.code,{children:"<a>"})," element in HTML, but it uses the React Router routing system to navigate between views in a single-page application."]})}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(t.p,{children:"In this lesson, we learned how to use React Router to navigate between views in a single-page application. React Router provides a declarative way to define routes and navigate between views using a simple and intuitive API. By using React Router, you can create complex navigation structures in your application with ease."})]})}function u(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4552:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>r});var o=n(11504);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);