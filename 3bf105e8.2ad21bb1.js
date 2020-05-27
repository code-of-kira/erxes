(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),i=(n(0),n(206)),o={id:"developer",title:"Developing erxes",sidebar_label:"Developer"},c={id:"developer/developer",title:"Developing erxes",description:"This document describes how to set up your development environment to develop and test Erxes. It also explains the basic mechanics of using git, node, and yarn.",source:"@site/docs/developer/developer.md",permalink:"/developer/developer",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/developer/developer.md",lastUpdatedBy:"Munkhjargal",lastUpdatedAt:1590570298,sidebar_label:"Developer",sidebar:"docs",previous:{title:"Migration",permalink:"/administrator/migration"},next:{title:"Contributing",permalink:"/developer/contributing"}},l=[{value:"Prerequisite Software",id:"prerequisite-software",children:[]},{value:"Getting the Sources and running locally",id:"getting-the-sources-and-running-locally",children:[]},{value:"Checkout running website",id:"checkout-running-website",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document describes how to set up your development environment to develop and test Erxes. It also explains the basic mechanics of using ",Object(i.b)("inlineCode",{parentName:"p"},"git"),", ",Object(i.b)("inlineCode",{parentName:"p"},"node"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"yarn"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#prerequisite-software"}),"Prerequisite Software")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#getting-the-sources"}),"Getting the Sources")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#installing-npm-modules"}),"Installing NPM Modules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#running-tests-locally"}),"Running Tests Locally"))),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"contributing"}),"contribution guidelines")," if you'd like to contribute to erxes."),Object(i.b)("h2",{id:"prerequisite-software"},"Prerequisite Software"),Object(i.b)("p",null,"Before you can develop and test erxes, you must install and configure the following products on your development machine:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://git-scm.com/"}),"Git")," and/or the ",Object(i.b)("strong",{parentName:"li"},"GitHub app")," (for ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://mac.github.com"}),"Mac")," or ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://windows.github.com"}),"Windows"),"); ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://help.github.com/articles/set-up-git"}),"GitHub's Guide to Installing Git")," is a good source of information."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://nodejs.org"}),"Node.js"),", v10.x LTS which is used to run a development web server, run tests, and generate distributable files."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://yarnpkg.com"}),"Yarn")," which is used to install dependencies."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.mongodb.com"}),"MongoDB")," version 3.6.x"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.io"}),"Redis")," version 3.x +")),Object(i.b)("h2",{id:"getting-the-sources-and-running-locally"},"Getting the Sources and running locally"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Login to your GitHub account or create one by following the instructions given ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/signup/free"}),"here"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Configure your ssh key ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/settings/keys"}),"here"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run Erxes backend."))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# Clone your GitHub repository:\ngit clone git@github.com:erxes/erxes-api.git\n\n# Go to the erxes directory:\ncd erxes-api\n\n# Copy preconfigured environment variables:\ncp .env.sample .env\n\n# Install dependencies (package.json)\nyarn install\n\n# Create admin user & save the returned password\nyarn initProject\n\n# Load sample data\nyarn loadInitialData\n\n# Run\nyarn dev\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Run Erxes frontend.")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# Clone your GitHub repository:\ngit clone git@github.com:erxes/erxes.git\n\n# Go to the erxes directory:\ncd erxes\n\n# Copy preconfigured environment variables:\ncp .env.sample .env\n\n# Install dependencies (package.json)\nyarn install\n\n# Run\nyarn start\n")),Object(i.b)("h2",{id:"checkout-running-website"},"Checkout running website"),Object(i.b)("p",null,"Visit http://localhost:3000 and login using following credentials"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"username: admin@erxes.io\npassword: the password generated during initProject\n")))}b.isMDXComponent=!0},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);