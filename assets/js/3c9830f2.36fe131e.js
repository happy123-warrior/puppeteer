"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21470],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(r),c=n,y=u["".concat(o,".").concat(c)]||u[c]||m[c]||l;return r?a.createElement(y,p(p({ref:t},s),{},{components:r})):a.createElement(y,p({ref:t},s))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var d=2;d<l;d++)p[d]=r[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},32906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>s});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const p={sidebar_label:"Frame.addStyleTag"},i="Frame.addStyleTag() method",o={unversionedId:"api/puppeteer.frame.addstyletag",id:"version-19.5.2/api/puppeteer.frame.addstyletag",title:"Frame.addStyleTag() method",description:"Adds a ` tag into the page with the desired URL or a ` tag with the content.",source:"@site/versioned_docs/version-19.5.2/api/puppeteer.frame.addstyletag.md",sourceDirName:"api",slug:"/api/puppeteer.frame.addstyletag",permalink:"/api/puppeteer.frame.addstyletag",draft:!1,tags:[],version:"19.5.2",frontMatter:{sidebar_label:"Frame.addStyleTag"},sidebar:"api",previous:{title:"Frame.addScriptTag",permalink:"/api/puppeteer.frame.addscripttag"},next:{title:"Frame.addStyleTag_1",permalink:"/api/puppeteer.frame.addstyletag_1"}},d={},s=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}],m={toc:s};function u(e){var{components:t}=e,r=l(e,["components"]);return(0,a.kt)("wrapper",n({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"frameaddstyletag-method"}),"Frame.addStyleTag() method"),(0,a.kt)("p",null,"Adds a ",(0,a.kt)("inlineCode",{parentName:"p"},'<link rel="stylesheet">')," tag into the page with the desired URL or a ",(0,a.kt)("inlineCode",{parentName:"p"},'<style type="text/css">')," tag with the content."),(0,a.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"class Frame {\n  addStyleTag(\n    options: Omit<FrameAddStyleTagOptions, 'url'>\n  ): Promise<ElementHandle<HTMLStyleElement>>;\n}\n")),(0,a.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"options"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Omit","<",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.frameaddstyletagoptions"}),"FrameAddStyleTagOptions"),", 'url'",">"),(0,a.kt)("td",n({parentName:"tr"},{align:null}))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),"<","HTMLStyleElement",">",">"),(0,a.kt)("p",null,"An ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"element handle")," to the loaded ",(0,a.kt)("inlineCode",{parentName:"p"},"<link>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"<style>")," element."))}u.isMDXComponent=!0}}]);