"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23282],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),f=n,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||o;return r?a.createElement(d,i(i({ref:t},s),{},{components:r})):a.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},14533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={sidebar_label:"Page.waitForTimeout"},p="Page.waitForTimeout() method",l={unversionedId:"api/puppeteer.page.waitfortimeout",id:"version-19.5.2/api/puppeteer.page.waitfortimeout",title:"Page.waitForTimeout() method",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-19.5.2/api/puppeteer.page.waitfortimeout.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitfortimeout",permalink:"/api/puppeteer.page.waitfortimeout",draft:!1,tags:[],version:"19.5.2",frontMatter:{sidebar_label:"Page.waitForTimeout"},sidebar:"api",previous:{title:"Page.waitForSelector",permalink:"/api/puppeteer.page.waitforselector"},next:{title:"Page.waitForXPath",permalink:"/api/puppeteer.page.waitforxpath"}},u={},s=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],m={toc:s};function c(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"pagewaitfortimeout-method"}),"Page.waitForTimeout() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,a.kt)("p",{parentName:"blockquote"},"Replace with ",(0,a.kt)("inlineCode",{parentName:"p"},"new Promise(r => setTimeout(r, milliseconds));"),"."),(0,a.kt)("p",{parentName:"blockquote"},"Causes your script to wait for the given number of milliseconds.")),(0,a.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  waitForTimeout(milliseconds: number): Promise<void>;\n}\n")),(0,a.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"milliseconds"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"the number of milliseconds to wait.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,a.kt)("p",null,"It's generally recommended to not wait for a number of seconds, but instead use ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.frame.waitforselector"}),"Frame.waitForSelector()"),", ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.frame.waitforxpath"}),"Frame.waitForXPath()")," or ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.frame.waitforfunction"}),"Frame.waitForFunction()")," to wait for exactly the conditions you want."),(0,a.kt)("h2",n({},{id:"example"}),"Example"),(0,a.kt)("p",null,"Wait for 1 second:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"await page.waitForTimeout(1000);\n")))}c.isMDXComponent=!0}}]);