"use strict";(self.webpackChunkneonwp=self.webpackChunkneonwp||[]).push([[2400],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3921:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:6,title:"\u5355\u8d26\u53f7\u5b58\u50a8\u9650\u5236(Storage size limit for an account)"},l=void 0,u={unversionedId:"09Architecture/05Architectural Limitations/06Storage size limit for an account",id:"09Architecture/05Architectural Limitations/06Storage size limit for an account",title:"\u5355\u8d26\u53f7\u5b58\u50a8\u9650\u5236(Storage size limit for an account)",description:"\u95ee\u9898(Problem)",source:"@site/docs/09Architecture/05Architectural Limitations/06Storage size limit for an account.md",sourceDirName:"09Architecture/05Architectural Limitations",slug:"/09Architecture/05Architectural Limitations/06Storage size limit for an account",permalink:"/neonwp/09Architecture/05Architectural Limitations/06Storage size limit for an account",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/09Architecture/05Architectural Limitations/06Storage size limit for an account.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u5355\u8d26\u53f7\u5b58\u50a8\u9650\u5236(Storage size limit for an account)"},sidebar:"tutorialSidebar",previous:{title:"Neon EVM \u4e0d\u652f\u6301\u7684\u51fd\u6570(Unsupported Functions in Neon EVM)",permalink:"/neonwp/09Architecture/05Architectural Limitations/05Unsupported Functions in Neon EVM"},next:{title:"\u4ec0\u4e48\u662fNeon?(What is Neon?)",permalink:"/neonwp/10faq/01What is Neon"}},s={},p=[{value:"\u95ee\u9898(Problem)",id:"\u95ee\u9898problem",level:4},{value:"\u5efa\u8bae\u7684\u89e3\u51b3\u65b9\u6848(Suggested solutions)",id:"\u5efa\u8bae\u7684\u89e3\u51b3\u65b9\u6848suggested-solutions",level:4}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"\u95ee\u9898problem"},"\u95ee\u9898(Problem)"),(0,i.kt)("p",null,"In Solana, the size of storage allocated for an account has a limit and it can not exceed 10 MB. This means, the storage size of contracts placed on the account can also not exceed 10 MB. This a threshold value limits an amount of records in a contract and can cause inconvenience to users."),(0,i.kt)("p",null,"\u5728 Solana \u4e2d\uff0c\u4e3a\u5e10\u6237\u5206\u914d\u7684\u5b58\u50a8\u5927\u5c0f\u662f\u6709\u9650\u5236\u7684\uff0c\u5373\u4e0d\u80fd\u8d85\u8fc7 10 MB\u3002\u8fd9\u610f\u5473\u7740\uff0c\u653e\u7f6e\u5728\u8d26\u6237\u4e0a\u5408\u7ea6\u7684\u89c4\u6a21\u4e5f\u4e0d\u80fd\u8d85\u8fc7 10 MB\u3002\u8be5\u9608\u503c\u9650\u5236\u4e86\u5408\u7ea6\u4e2d\u7684\u8bb0\u5f55\u6570\u91cf\uff0c\u53ef\u80fd\u4f1a\u7ed9\u7528\u6237\u5e26\u6765\u4e0d\u4fbf\u3002"),(0,i.kt)("h4",{id:"\u5efa\u8bae\u7684\u89e3\u51b3\u65b9\u6848suggested-solutions"},"\u5efa\u8bae\u7684\u89e3\u51b3\u65b9\u6848(Suggested solutions)"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Solution 1"),". In Neon EVM storage, it is proposed to increase the amount of accounts by 1. The implementation of this solution will be considered by the Neon EVM developers."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u65b9\u68481"),"\uff1a\u5728 Neon EVM \u5b58\u50a8\u4e2d\uff0c\u5efa\u8bae\u5c06\u8d26\u6237\u6570\u91cf\u589e\u52a0 1\u3002\u8be5\u65b9\u6848\u7684\u5b9e\u65bd\u5c06\u7531 Neon EVM \u5f00\u53d1\u8005\u8003\u8651\u3002"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Solution 2"),". In Solana storage, it is proposed to increase the threshold value of the account size, which will be more than 10 MB. The implementation of this solution will be proposed by the Solana developers."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u65b9\u68482"),"\uff1a\u5728Solana\u5b58\u50a8\u4e2d\uff0c\u589e\u52a0\u8d26\u6237\u5927\u5c0f\u7684\u9608\u503c\uff0c\u4f7f\u5176\u5927\u4e8e10MB\u3002\u6b64\u89e3\u51b3\u65b9\u6848\u7684\u5b9e\u65bd\u5c06\u7531 Solana \u5f00\u53d1\u4eba\u5458\u63d0\u51fa"),(0,i.kt)("p",null,"The 10 MB limit means that about 100000 records can be used by the contract for its data. This limitation is set directly in Solana. It is large enough and not critical. At the startup of the ",(0,i.kt)("a",{parentName:"p",href:"/01About/02Terminology#%E6%9C%80%E5%B0%8F%E5%8F%AF%E8%A1%8C%E6%80%A7%E4%BA%A7%E5%93%81minimum-viable-product-mvp"},"MVP")," project, we do not expect contracts with sizes exceeding 10 MB to appear."),(0,i.kt)("p",null,"10 MB \u7684\u9650\u5236\u610f\u5473\u7740\u5408\u7ea6\u53ef\u4ee5\u5c06\u5927\u7ea6 100000 \u6761\u8bb0\u5f55\u7528\u4e8e\u5176\u6570\u636e\u3002\u6b64\u9650\u5236\u76f4\u63a5\u5728 Solana \u4e2d\u8bbe\u7f6e\u3002\u5b83(\u5176\u5b9e)\u8db3\u591f\u5927\u800c\u4e14\u4e0d\u5173\u952e\u3002\u5728 ",(0,i.kt)("a",{parentName:"p",href:"/01About/02Terminology#%E6%9C%80%E5%B0%8F%E5%8F%AF%E8%A1%8C%E6%80%A7%E4%BA%A7%E5%93%81minimum-viable-product-mvp"},"\u6700\u5c0f\u53ef\u884c\u6027\u4ea7 (MVP)")," \u9879\u76ee\u542f\u52a8\u65f6\uff0c\u6211\u4eec\u9884\u8ba1\u4e0d\u4f1a\u51fa\u73b0\u5927\u5c0f\u8d85\u8fc7 10 MB \u7684\u5408\u7ea6\u3002"),(0,i.kt)("p",null,"Therefore, in the first months of Neon EVM operation, the limit on the storage size allocated for one account will still remain the same 10 MB."),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u5728 Neon EVM \u8fd0\u884c\u7684\u524d\u51e0\u4e2a\u6708\uff0c\u4e3a\u4e00\u4e2a\u5e10\u6237\u5206\u914d\u7684\u5b58\u50a8\u5927\u5c0f\u9650\u5236\u4ecd\u5c06\u4fdd\u630110 MB\u4e0d\u53d8\u3002"))}f.isMDXComponent=!0}}]);