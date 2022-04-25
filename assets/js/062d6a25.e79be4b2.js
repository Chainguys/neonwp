"use strict";(self.webpackChunkneonwp=self.webpackChunkneonwp||[]).push([[5925],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8903:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:3,title:"\u4f7f\u7528Hardhat (Using Hardhat)"},l=void 0,s={unversionedId:"05Developing/03Deploying dApps/03Using Hardhat",id:"05Developing/03Deploying dApps/03Using Hardhat",title:"\u4f7f\u7528Hardhat (Using Hardhat)",description:"Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software. It helps developers manage and automate the recurring tasks that are inherent to the process of building smart contracts and dApps, as well as easily introduce more functionality around this workflow. This means compiling, running, and testing smart contracts at the very core.",source:"@site/docs/05Developing/03Deploying dApps/03Using Hardhat.md",sourceDirName:"05Developing/03Deploying dApps",slug:"/05Developing/03Deploying dApps/03Using Hardhat",permalink:"/neonwp/05Developing/03Deploying dApps/03Using Hardhat",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05Developing/03Deploying dApps/03Using Hardhat.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u4f7f\u7528Hardhat (Using Hardhat)"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528Truffle (Using Truffle)",permalink:"/neonwp/05Developing/03Deploying dApps/02Using Truffle"},next:{title:"\u5411Neon EVM\u8fc1\u79fbdApps (Migrating dApps to the Neon EVM)",permalink:"/neonwp/05Developing/03Deploying dApps/04Migrating dApps to the Neon EVM"}},c={},d=[{value:"Hardhat\u9879\u76ee\u793a\u4f8b (Example Hardhat Project)",id:"hardhat\u9879\u76ee\u793a\u4f8b-example-hardhat-project",level:4}],u={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software. It helps developers manage and automate the recurring tasks that are inherent to the process of building smart contracts and dApps, as well as easily introduce more functionality around this workflow. This means compiling, running, and testing smart contracts at the very core."),(0,o.kt)("p",null,"Hardhat \u662f\u4e00\u4e2a\u7528\u4e8e\u7f16\u8bd1\u3001\u90e8\u7f72\u3001\u6d4b\u8bd5\u548c\u8c03\u8bd5\u4ee5\u592a\u574a\u8f6f\u4ef6\u7684\u5f00\u53d1\u73af\u5883\u3002\u5b83\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u7ba1\u7406\u548c\u81ea\u52a8\u5316\u5728\u6784\u5efa\u667a\u80fd\u5408\u7ea6\u548c dApp \u8fc7\u7a0b\u4e2d\u56fa\u5316\u7684\u91cd\u590d\u4efb\u52a1\uff0c\u5e76\u56f4\u7ed5\u6b64\u5de5\u4f5c\u6d41\u7a0b\u8f7b\u677e\u5f15\u5165\u66f4\u591a\u529f\u80fd\u3002\u8fd9\u610f\u5473\u7740\u5728\u6838\u5fc3\u4e0a\u7f16\u8bd1\u3001\u8fd0\u884c\u548c\u6d4b\u8bd5\u667a\u80fd\u5408\u7ea6\u3002"),(0,o.kt)("p",null,"We will not describe the details of using the Hardhat framework here. You can find all necessary documentation by following this link: ",(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/getting-started/#overview"},"https://hardhat.org/getting-started/#overview"),"."),(0,o.kt)("p",null,"\u6211\u4eec\u4e0d\u4f1a\u5728\u8fd9\u91cc\u63cf\u8ff0\u4f7f\u7528 Hardhat \u6846\u67b6\u7684\u7ec6\u8282\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u94fe\u63a5\u627e\u5230\u6240\u6709\u5fc5\u8981\u7684\u6587\u6863\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/getting-started/#overview"},"https://hardhat.org/getting-started/#overview"),"\u3002"),(0,o.kt)("p",null,"As Neon is an Ethereum-compatible virtual machine and RPC, you can easily migrate existing Hardhat projects to it. The only thing required is the correct ",(0,o.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," file. You can refer to the code below as an example of config-file content:"),(0,o.kt)("p",null,"\u7531\u4e8e Neon \u662f\u4e0e Ethereum \u517c\u5bb9\u7684\u865a\u62df\u673a\u548c RPC\uff0c\u60a8\u53ef\u4ee5\u8f7b\u677e\u5730\u5c06\u73b0\u6709\u7684 Hardhat \u9879\u76ee\u8fc1\u79fb\u5230Neon\u3002\u552f\u4e00\u9700\u8981\u7684\u662f\u6b63\u786e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," \u6587\u4ef6\u3002\u60a8\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u4ee3\u7801\u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u7684\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"require(\"@nomiclabs/hardhat-waffle\");\n\nconst proxy_url = 'https://proxy.devnet.neonlabs.org/solana';\nconst network_id = 245022926;\nconst deployerPrivateKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxx'; // place your private key here (note that wallet must have non-zero balance of NEONs to pay fees)\n\nmodule.exports = {\n  solidity: \"0.8.4\",\n  defaultNetwork: 'neonlabs',\n  networks: {\n    neonlabs: {\n      url: proxy_url,\n      accounts: [deployerPrivateKey],\n      network_id: network_id,\n      chainId: network_id,\n      gas: 3000000,\n      gasPrice: 1000000000,\n      blockGasLimit: 10000000,\n      allowUnlimitedContractSize: false,\n      timeout: 1000000,\n      isFork: true\n    }\n  }\n};\n")),(0,o.kt)("h4",{id:"hardhat\u9879\u76ee\u793a\u4f8b-example-hardhat-project"},"Hardhat\u9879\u76ee\u793a\u4f8b (Example Hardhat Project)"),(0,o.kt)("p",null,"You can obtain an example Hardhat project from here:",(0,o.kt)("br",{parentName:"p"}),"\n","\u60a8\u53ef\u4ee5\u4ece\u6b64\u5904\u83b7\u53d6\u793a\u4f8b Hardhat \u9879\u76ee\uff1a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/neonlabsorg/examples/tree/main/simple-erc20-hardhat"},"https://github.com/neonlabsorg/examples/tree/main/simple-erc20-hardhat"),"."))}h.isMDXComponent=!0}}]);