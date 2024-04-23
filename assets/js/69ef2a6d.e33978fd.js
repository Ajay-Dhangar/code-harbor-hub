"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[37808],{33396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(17624),s=n(4552);const i={id:"using-https-in-development",title:"Using HTTPS in Development",sidebar_label:"HTTPS in Development",sidebar_position:4,tags:["react","create-react-app","https","development","environment-variables","ssl","certificate","custom-certificate","environment","npm","package.json",".env","create-react-app","CRA","development-server","HTTPS","SSL","SSL certificate","self-signed certificate","custom SSL certificate","environment variables","HTTPS environment variable","SSL_CRT_FILE","SSL_KEY_FILE","start script",".env file","environment variables","environment variables in Create React App","CRA documentation","custom environment variables"],description:"Learn how to serve your Create React App over HTTPS in development. This is useful when you need to send requests to an API server that requires HTTPS, or when you want to test your site using a secure connection."},a=void 0,o={id:"react/development/using-https-in-development",title:"Using HTTPS in Development",description:"Learn how to serve your Create React App over HTTPS in development. This is useful when you need to send requests to an API server that requires HTTPS, or when you want to test your site using a secure connection.",source:"@site/docs/react/development/using-https-in-development.md",sourceDirName:"react/development",slug:"/react/development/using-https-in-development",permalink:"/docs/react/development/using-https-in-development",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/react/development/using-https-in-development.md",tags:[{label:"react",permalink:"/docs/tags/react"},{label:"create-react-app",permalink:"/docs/tags/create-react-app"},{label:"https",permalink:"/docs/tags/https"},{label:"development",permalink:"/docs/tags/development"},{label:"environment-variables",permalink:"/docs/tags/environment-variables"},{label:"ssl",permalink:"/docs/tags/ssl"},{label:"certificate",permalink:"/docs/tags/certificate"},{label:"custom-certificate",permalink:"/docs/tags/custom-certificate"},{label:"environment",permalink:"/docs/tags/environment"},{label:"npm",permalink:"/docs/tags/npm"},{label:"package.json",permalink:"/docs/tags/package-json"},{label:".env",permalink:"/docs/tags/env"},{label:"CRA",permalink:"/docs/tags/cra"},{label:"development-server",permalink:"/docs/tags/development-server"},{label:"SSL certificate",permalink:"/docs/tags/ssl-certificate"},{label:"self-signed certificate",permalink:"/docs/tags/self-signed-certificate"},{label:"custom SSL certificate",permalink:"/docs/tags/custom-ssl-certificate"},{label:"HTTPS environment variable",permalink:"/docs/tags/https-environment-variable"},{label:"SSL_CRT_FILE",permalink:"/docs/tags/ssl-crt-file"},{label:"SSL_KEY_FILE",permalink:"/docs/tags/ssl-key-file"},{label:"start script",permalink:"/docs/tags/start-script"},{label:".env file",permalink:"/docs/tags/env-file"},{label:"environment variables in Create React App",permalink:"/docs/tags/environment-variables-in-create-react-app"},{label:"CRA documentation",permalink:"/docs/tags/cra-documentation"},{label:"custom environment variables",permalink:"/docs/tags/custom-environment-variables"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710610499e3,sidebarPosition:4,frontMatter:{id:"using-https-in-development",title:"Using HTTPS in Development",sidebar_label:"HTTPS in Development",sidebar_position:4,tags:["react","create-react-app","https","development","environment-variables","ssl","certificate","custom-certificate","environment","npm","package.json",".env","create-react-app","CRA","development-server","HTTPS","SSL","SSL certificate","self-signed certificate","custom SSL certificate","environment variables","HTTPS environment variable","SSL_CRT_FILE","SSL_KEY_FILE","start script",".env file","environment variables","environment variables in Create React App","CRA documentation","custom environment variables"],description:"Learn how to serve your Create React App over HTTPS in development. This is useful when you need to send requests to an API server that requires HTTPS, or when you want to test your site using a secure connection."},sidebar:"react",previous:{title:"Analyzing Bundle Size",permalink:"/docs/react/development/analyzing-the-bundle-size"},next:{title:"Styles and Assets",permalink:"/docs/category/styles-and-assets-1"}},l={},c=[{value:"Starting the Development Server with HTTPS",id:"starting-the-development-server-with-https",level:3},{value:"Using a Custom SSL Certificate",id:"using-a-custom-ssl-certificate",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"When you're developing a website using Create React App (CRA), you might need to serve your pages over HTTPS instead of HTTP. This is especially important if you're using the \"proxy\" feature to send requests from your development server to an API server that requires HTTPS."}),"\n",(0,r.jsx)(t.h3,{id:"starting-the-development-server-with-https",children:"Starting the Development Server with HTTPS"}),"\n",(0,r.jsx)(t.p,{children:"To start the development server with HTTPS, follow these steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Open your command prompt or terminal."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Set the ",(0,r.jsx)(t.code,{children:"HTTPS"})," environment variable to ",(0,r.jsx)(t.code,{children:"true"}),". This tells the development server to use HTTPS."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Windows (cmd.exe):"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cmd",children:"set HTTPS=true\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Windows (PowerShell):"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-PowerShell",children:'$env:HTTPS = "true"\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Linux, macOS (Bash):"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"export HTTPS=true\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Start the development server by running the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"npm start\n"})}),"\n",(0,r.jsx)(t.p,{children:"After executing this command, the development server will serve your pages over HTTPS using a self-signed certificate. It's important to note that self-signed certificates are not trusted by default, so your web browser will display a warning when accessing the page. You can safely proceed past the warning to view your site."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"using-a-custom-ssl-certificate",children:"Using a Custom SSL Certificate"}),"\n",(0,r.jsx)(t.p,{children:"If you prefer to use a custom SSL certificate instead of the self-signed certificate, you can follow these additional steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Set the ",(0,r.jsx)(t.code,{children:"HTTPS"})," environment variable to ",(0,r.jsx)(t.code,{children:"true"}),", as explained in the previous section."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Set the ",(0,r.jsx)(t.code,{children:"SSL_CRT_FILE"})," and ",(0,r.jsx)(t.code,{children:"SSL_KEY_FILE"})," environment variables to the paths of your custom certificate and key files."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Linux, macOS (Bash):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"export HTTPS=true\nexport SSL_CRT_FILE=path/to/cert.crt\nexport SSL_KEY_FILE=path/to/cert.key\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.code,{children:"path/to/cert.crt"})," with the actual path to your SSL certificate file, and ",(0,r.jsx)(t.code,{children:"path/to/cert.key"})," with the path to your SSL key file."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Start the development server by running the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"npm start\n"})}),"\n",(0,r.jsx)(t.p,{children:"With these environment variables set, the development server will use your custom SSL certificate for HTTPS connections."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"To avoid having to set the environment variables every time you start the development server, you have two options:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Update the ",(0,r.jsx)(t.code,{children:"start"})," script in your ",(0,r.jsx)(t.code,{children:"package.json"})," file to include the environment variables. Here's an example of how the ",(0,r.jsx)(t.code,{children:"start"})," script could look:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "start": "HTTPS=true SSL_CRT_FILE=path/to/cert.crt SSL_KEY_FILE=path/to/cert.key react-scripts start"\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.code,{children:"path/to/cert.crt"})," with the actual path to your SSL certificate file, and ",(0,r.jsx)(t.code,{children:"path/to/cert.key"})," with the path to your SSL key file."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Create a ",(0,r.jsx)(t.code,{children:".env"})," file in your project's root directory and set the ",(0,r.jsx)(t.code,{children:"HTTPS"})," variable to ",(0,r.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"HTTPS=true\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This approach is useful if you want to keep your environment variables separate from the ",(0,r.jsx)(t.code,{children:"package.json"})," file. However, remember to keep your ",(0,r.jsx)(t.code,{children:".env"})," file private and never commit it to a public repository."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For more detailed information on using environment variables in Create React App (CRA), you can refer to the ",(0,r.jsx)(t.a,{href:"https://create-react-app.dev/docs/adding-custom-environment-variables",children:"official CRA documentation on adding custom environment variables"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>a});var r=n(11504);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);