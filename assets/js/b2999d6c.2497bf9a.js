"use strict";(self.webpackChunkneonwp=self.webpackChunkneonwp||[]).push([[8735],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,f=h["".concat(p,".").concat(m)]||h[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8584:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2,title:"Neon EVM\u4e0a\u4e0d\u652f\u6301\u7684\u4ee3\u5e01(Unsupported Tokens in Neon EVM)"},p=void 0,l={unversionedId:"09Architecture/05Architectural Limitations/02Unsupported Tokens in Neon EVM",id:"09Architecture/05Architectural Limitations/02Unsupported Tokens in Neon EVM",title:"Neon EVM\u4e0a\u4e0d\u652f\u6301\u7684\u4ee3\u5e01(Unsupported Tokens in Neon EVM)",description:"\u95ee\u9898(Problem)",source:"@site/docs/09Architecture/05Architectural Limitations/02Unsupported Tokens in Neon EVM.md",sourceDirName:"09Architecture/05Architectural Limitations",slug:"/09Architecture/05Architectural Limitations/02Unsupported Tokens in Neon EVM",permalink:"/neonwp/09Architecture/05Architectural Limitations/02Unsupported Tokens in Neon EVM",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/09Architecture/05Architectural Limitations/02Unsupported Tokens in Neon EVM.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Neon EVM\u4e0a\u4e0d\u652f\u6301\u7684\u4ee3\u5e01(Unsupported Tokens in Neon EVM)"},sidebar:"tutorialSidebar",previous:{title:"\u8fed\u4ee3\u4ea4\u6613\u7684\u9650\u5236(Restriction on Iterative Transactions)",permalink:"/neonwp/09Architecture/05Architectural Limitations/01Restriction on Iterative Transactions"},next:{title:"\u65e0\u6cd5\u5728 Solana \u4e2d\u4f7f\u7528\u7684\u9884\u7f16\u8bd1\u5408\u7ea6(Precompiled Contracts that can not be used in Solana)",permalink:"/neonwp/09Architecture/05Architectural Limitations/03Precompiled Contracts that can not be used in Solana"}},c={},u=[{value:"\u95ee\u9898(Problem)",id:"\u95ee\u9898problem",level:4},{value:"\u7ec6\u8282(Details)",id:"\u7ec6\u8282details",level:4},{value:"\u5982\u679cNFT\u4ece\u4ee5\u592a\u8f6c\u5230Solana\u4f1a\u53d1\u751f\u4ec0\u4e48?(What happens if a user transfers NFT tokens from Ethereum to Solana)",id:"\u5982\u679cnft\u4ece\u4ee5\u592a\u8f6c\u5230solana\u4f1a\u53d1\u751f\u4ec0\u4e48what-happens-if-a-user-transfers-nft-tokens-from-ethereum-to-solana",level:4},{value:"\u652f\u6301\u5728 Neon EVM \u4e2d\u5bf9NFT\u8fdb\u884c\u64cd\u4f5c\u7684\u5efa\u8bae\u89e3\u51b3\u65b9\u6848(Proposed solution to support operations on non-fungible tokens in Neon EVM)",id:"\u652f\u6301\u5728-neon-evm-\u4e2d\u5bf9nft\u8fdb\u884c\u64cd\u4f5c\u7684\u5efa\u8bae\u89e3\u51b3\u65b9\u6848proposed-solution-to-support-operations-on-non-fungible-tokens-in-neon-evm",level:4}],h={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"\u95ee\u9898problem"},"\u95ee\u9898(Problem)"),(0,a.kt)("p",null,"In Testnet and Devnet, Neon EVM operates with those tokens that comply with the ",(0,a.kt)("a",{parentName:"p",href:"#_ERC-20"},"ERC-20")," standard. Non-fungible tokens (NFT) generated in accordance with the ",(0,a.kt)("a",{parentName:"p",href:"#_ERC-721"},"ERC-721")," standard are not processed by Neon EVM."),(0,a.kt)("p",null,"\u5728 Testnet \u548c Devnet \u4e2d\uff0cNeon EVM \u4f7f\u7528\u7b26\u5408 ",(0,a.kt)("a",{parentName:"p",href:"#_ERC-20"},"ERC-20")," \xa0\u6807\u51c6\u7684\u4ee3\u5e01\u8fdb\u884c\u64cd\u4f5c\u3002 Neon EVM \u4e0d\u5904\u7406\u6839\u636e ",(0,a.kt)("a",{parentName:"p",href:"#_ERC-721"},"ERC-721")," \u6807\u51c6\u751f\u6210\u7684\u4e0d\u53ef\u66ff\u4ee3\u4ee3\u5e01 (NFT)\u3002"),(0,a.kt)("h4",{id:"\u7ec6\u8282details"},"\u7ec6\u8282(Details)"),(0,a.kt)("p",null,"To support the ",(0,a.kt)("a",{parentName:"p",href:"#_ERC-20"},"ERC-20")," token type, a separate component is implemented in the form of a wrapper over the Solana system frame named ",(0,a.kt)("a",{parentName:"p",href:"#_SPL%E4%BB%A3%E5%B8%81%EF%BC%88Solana_Program_Library"},"SPL Token"),". This wrapper uses the API to access the SPL-token methods to obtain the account balance data."),(0,a.kt)("p",null,"\u4e3a\u4e86\u652f\u6301 ",(0,a.kt)("a",{parentName:"p",href:"#_ERC-20"},"ERC-20")," \u4ee4\u724c\u7c7b\u578b\uff0c\u4e00\u4e2a\u5355\u72ec\u7684\u7ec4\u4ef6\u88ab\u4ee5 Solana \u7cfb\u7edf\u6846\u67b6(",(0,a.kt)("a",{parentName:"p",href:"#_SPL%E4%BB%A3%E5%B8%81%EF%BC%88Solana_Program_Library"},"SPL\u4ee3\u5e01"),")\u7684\u5c01\u88c5\u5668\u7684\u5f62\u5f0f\u5b9e\u73b0\u3002\u6b64\u5c01\u88c5\u5668\u4f7f\u7528 API \u8bbf\u95ee SPL \u4ee3\u5e01\u65b9\u6cd5\u6765\u83b7\u53d6\u5e10\u6237\u4f59\u989d\u6570\u636e\u3002"),(0,a.kt)("p",null,"To transfer tokens, wrapper calls the corresponding instruction in ",(0,a.kt)("a",{parentName:"p",href:"#_SPL%E4%BB%A3%E5%B8%81%EF%BC%88Solana_Program_Library"},"SPL Token"),", which transfers funds from one account balance to another. Currently the wrapper is implemented to support the instruction set only of the ERC20 standard."),(0,a.kt)("p",null,"\u4e3a\u4e86\u8f6c\u79fb\u4ee3\u5e01\uff0c\u5c01\u88c5\u5668\u8c03\u7528 ",(0,a.kt)("a",{parentName:"p",href:"#_SPL%E4%BB%A3%E5%B8%81%EF%BC%88Solana_Program_Library"},"SPL \u4ee3\u5e01"),"\u4e2d\u7684\u76f8\u5e94\u6307\u4ee4\uff0c\u5c06\u8d44\u91d1\u4ece\u4e00\u4e2a\u8d26\u6237\u4f59\u989d\u8f6c\u79fb\u5230\u53e6\u4e00\u4e2a\u8d26\u6237\u4f59\u989d\u3002\u76ee\u524d\uff0c\u5c01\u88c5\u5668\u4ec5\u652f\u6301 ERC20 \u6807\u51c6\u7684\u6307\u4ee4\u96c6\u3002"),(0,a.kt)("h4",{id:"\u5982\u679cnft\u4ece\u4ee5\u592a\u8f6c\u5230solana\u4f1a\u53d1\u751f\u4ec0\u4e48what-happens-if-a-user-transfers-nft-tokens-from-ethereum-to-solana"},"\u5982\u679cNFT\u4ece\u4ee5\u592a\u8f6c\u5230Solana\u4f1a\u53d1\u751f\u4ec0\u4e48?(What happens if a user transfers NFT tokens from Ethereum to Solana)"),(0,a.kt)("p",null,"In this case, a contract will be created in Neon EVM to work with this type of tokens. Processing these tokens in ",(0,a.kt)("a",{parentName:"p",href:"#_SPL%E4%BB%A3%E5%B8%81%EF%BC%88Solana_Program_Library"},"SPL Token")," will not comply with the standard adopted in Ethereum."),(0,a.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c Neon EVM \u4e2d\u4f1a\u521b\u5efa\u4e00\u4e2a\u5408\u7ea6\u6765\u4f7f\u7528\u8fd9\u79cd\u7c7b\u578b\u7684\u4ee3\u5e01\u3002\u5728",(0,a.kt)("a",{parentName:"p",href:"#_SPL%E4%BB%A3%E5%B8%81%EF%BC%88Solana_Program_Library"},"SPL \u4ee3\u5e01"),"\u4e2d\u5904\u7406\u8fd9\u4e9b\u4ee3\u5e01\u5c06\u4e0d\u4f1a\u7b26\u5408\u4ee5\u592a\u574a\u91c7\u7528\u7684\u6807\u51c6\u3002"),(0,a.kt)("p",null,"If you use the ",(0,a.kt)("a",{parentName:"p",href:"#_ERC-721"},"ERC-721")," contract implemented in Ethereum, compile and run it in Neon EVM, then the tokens generated using this contract can only be liquid within the Neon EVM. These tokens cannot be transferred anywhere, including to the exchange, since there is no standard in Solana that supports this type of token. As a result, the tokens will not have any value."),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4ee5\u592a\u574a\u5b9e\u73b0\u7684 ",(0,a.kt)("a",{parentName:"p",href:"#_ERC-721"},"ERC-721")," \u5408\u7ea6\u5728 Neon EVM \u4e2d\u7f16\u8bd1\u8fd0\u884c\uff0c\u90a3\u4e48\u4f7f\u7528\u8be5\u5408\u7ea6\u751f\u6210\u7684\u4ee3\u5e01\u53ea\u80fd\u5728 Neon EVM \u5185\u6d41\u901a\u3002\u8fd9\u4e9b\u4ee3\u5e01\u65e0\u6cd5\u8f6c\u79fb\u5230\u4efb\u4f55\u5730\u65b9\uff0c\u5305\u62ec\u4ea4\u6613\u6240\uff0c\u56e0\u4e3a Solana \u4e2d\u6ca1\u6709\u652f\u6301\u6b64\u7c7b\u4ee3\u5e01\u7684\u6807\u51c6\u3002\u56e0\u6b64\uff0c\u4ee3\u5e01\u5c06\u6ca1\u6709\u4efb\u4f55\u4ef7\u503c\u3002"),(0,a.kt)("h4",{id:"\u652f\u6301\u5728-neon-evm-\u4e2d\u5bf9nft\u8fdb\u884c\u64cd\u4f5c\u7684\u5efa\u8bae\u89e3\u51b3\u65b9\u6848proposed-solution-to-support-operations-on-non-fungible-tokens-in-neon-evm"},"\u652f\u6301\u5728 Neon EVM \u4e2d\u5bf9NFT\u8fdb\u884c\u64cd\u4f5c\u7684\u5efa\u8bae\u89e3\u51b3\u65b9\u6848(Proposed solution to support operations on non-fungible tokens in Neon EVM)"),(0,a.kt)("p",null,"It is proposed to integrate the ERC-721 standard with the core of those programs that work inside Solana."),(0,a.kt)("p",null,"\u5df2\u6709\u5efa\u8bae\u63d0\u51fa\u5c06 ERC-721 \u6807\u51c6\u4e0e\u5728 Solana \u5185\u90e8\u8fd0\u884c\u7684\u7a0b\u5e8f\u7684\u6838\u5fc3\u76f8\u96c6\u6210\u3002"))}m.isMDXComponent=!0}}]);