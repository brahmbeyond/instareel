"use strict";(self.webpackChunkinstareel_doc=self.webpackChunkinstareel_doc||[]).push([[5780],{6267:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=o(4848),s=o(8453);const i={title:"scrapeWithoutLogin in Instareel",description:"A guide on how to use the scrapeWithoutLogin function in Instareel to scrape Instagram posts without login.",keywords:["Instareel","Installation","Javascript","Instagram downloader","instagram","reels downloader","instagram post downloader","instagram reels downloader","Javascript package","Node.js","npm"],sidebar_position:3},a="By Tag (Without Login)",r={id:"Download Posts/scrapeWithoutLogin",title:"scrapeWithoutLogin in Instareel",description:"A guide on how to use the scrapeWithoutLogin function in Instareel to scrape Instagram posts without login.",source:"@site/docs/Download Posts/scrapeWithoutLogin.md",sourceDirName:"Download Posts",slug:"/Download Posts/scrapeWithoutLogin",permalink:"/instareel/docs/Download Posts/scrapeWithoutLogin",draft:!1,unlisted:!1,editUrl:"https://github.com/brahmbeyond/instareel/docs/Download Posts/scrapeWithoutLogin.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"scrapeWithoutLogin in Instareel",description:"A guide on how to use the scrapeWithoutLogin function in Instareel to scrape Instagram posts without login.",keywords:["Instareel","Installation","Javascript","Instagram downloader","instagram","reels downloader","instagram post downloader","instagram reels downloader","Javascript package","Node.js","npm"],sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Scrape Posts in Instareel",permalink:"/instareel/docs/Download Posts/scrapePosts"},next:{title:"Reels",permalink:"/instareel/docs/category/reels"}},l={},c=[{value:"Function - scrapeWithoutLogin()",id:"function---scrapewithoutlogin",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Download Images with Links Included",id:"download-images-with-links-included",level:3},{value:"Download Images only",id:"download-images-only",level:3},{value:"If you only want Image Links only",id:"if-you-only-want-image-links-only",level:3},{value:"You can also use .then()",id:"you-can-also-use-then",level:3}];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"by-tag-without-login",children:"By Tag (Without Login)"}),"\n",(0,t.jsx)(n.h2,{id:"function---scrapewithoutlogin",children:"Function - scrapeWithoutLogin()"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"No need for setting Cookies"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Remember, all functions return promises."})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"scrapeWithoutLogin"})," takes 2 arguments: ",(0,t.jsx)(n.code,{children:"scrapeWithoutLogin('cat', true)"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Tag name"}),"\n",(0,t.jsxs)(n.li,{children:["Boolean (",(0,t.jsx)(n.code,{children:"true/false"}),") - indicating whether you want to download the images or not"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"download-images-with-links-included",children:"Download Images with Links Included"}),"\n",(0,t.jsxs)(n.p,{children:["By default, the second argument is set to ",(0,t.jsx)(n.code,{children:"true"})," (meaning images will be downloaded to a folder named 'Images')."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The import syntax (",(0,t.jsx)(n.code,{children:"import ... from '@brahmbeyond/instareel'"}),") is used with ES6 modules, which are supported in Node.js version 14 and later, and in most modern browsers. If you're using an older version of Node.js or a runtime that doesn't support ES6 modules, you should use the ",(0,t.jsx)(n.code,{children:"require"})," syntax instead (",(0,t.jsx)(n.code,{children:"const ... = require('@brahmbeyond/instareel')"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="insta.js"',children:"import {scrapeWithoutLogin} from '@brahmbeyond/instareel'\n// const {scrapeWithoutLogin} = require('@brahmbeyond/instareel')\n\nasync function main() {\n    const images = await scrapeWithoutLogin('nature');\n    console.log(images); // This will log the array of image URLs  \n}\n\nmain().catch(console.error);\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"download-images-only",children:"Download Images only"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="insta.js"',children:"import {scrapeWithoutLogin} from '@brahmbeyond/instareel'\n// const {scrapeWithoutLogin} = require('@brahmbeyond/instareel')\n\n\nasync function main() {\n     await scrapeWithoutLogin('nature'); // this will download images only\n\n}\n\nmain().catch(console.error);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"if-you-only-want-image-links-only",children:"If you only want Image Links only"}),"\n",(0,t.jsxs)(n.p,{children:["Set second argument to ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="insta.js"',children:"import {scrapeWithoutLogin} from '@brahmbeyond/instareel'\n// const {scrapeWithoutLogin} = require('@brahmbeyond/instareel')\n\n\nasync function main() {\n    const images = await scrapeWithoutLogin('nature', false);\n    console.log(images); // This will log the array of image URLs\n}\n\nmain().catch(console.error);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"you-can-also-use-then",children:"You can also use .then()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="insta.js"',children:"import {scrapeWithoutLogin} from '@brahmbeyond/instareel'\n// const {scrapeWithoutLogin} = require('@brahmbeyond/instareel')\n\n\nscrapeWithoutLogin('nature', false).then(images => {\n    console.log(images); // This will log the array of image URLs\n});\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var t=o(6540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);