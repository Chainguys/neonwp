"use strict";(self.webpackChunkneonwp=self.webpackChunkneonwp||[]).push([[9296],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=s(n),d=o,k=h["".concat(p,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=h;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6421:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],r={sidebar_position:3,title:"NeonSwap"},p=void 0,s={unversionedId:"05Developing/04Using utilities/03NeonSwap",id:"05Developing/04Using utilities/03NeonSwap",title:"NeonSwap",description:"\u76ee\u6807 (Goal)",source:"@site/docs/05Developing/04Using utilities/03NeonSwap.md",sourceDirName:"05Developing/04Using utilities",slug:"/05Developing/04Using utilities/03NeonSwap",permalink:"/neonwp/05Developing/04Using utilities/03NeonSwap",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05Developing/04Using utilities/03NeonSwap.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"NeonSwap"},sidebar:"tutorialSidebar",previous:{title:"NeonPass",permalink:"/neonwp/05Developing/04Using utilities/02NeonPass"},next:{title:"\u6c34\u9f99\u5934 (Faucet)",permalink:"/neonwp/05Developing/04Using utilities/04faucet"}},c={},u=[{value:"\u76ee\u6807 (Goal)",id:"\u76ee\u6807-goal",level:4},{value:"\u5f00\u59cb\u4e4b\u524d (Before You Begin)",id:"\u5f00\u59cb\u4e4b\u524d-before-you-begin",level:4},{value:"NeonSwap Overview",id:"neonswap-overview",level:4},{value:"\u6b65\u9aa4 (Steps)",id:"\u6b65\u9aa4-steps",level:4},{value:"\u6b65\u9aa4 1. \u6253\u5f00 NeonSwap \u5e94\u7528\u7a0b\u5e8f\u5e76\u8fde\u63a5\u60a8\u7684\u94b1\u5305 (Step 1. Open the NeonSwap application and connect your wallet)",id:"\u6b65\u9aa4-1-\u6253\u5f00-neonswap-\u5e94\u7528\u7a0b\u5e8f\u5e76\u8fde\u63a5\u60a8\u7684\u94b1\u5305-step-1-open-the-neonswap-application-and-connect-your-wallet",level:5},{value:"\u6b65\u9aa4 2. \u9009\u62e9\u4e00\u5bf9\u8981\u4ea4\u6362\u7684\u4ee3\u5e01 (Step 2. Select a pair of tokens to be swapped)",id:"\u6b65\u9aa4-2-\u9009\u62e9\u4e00\u5bf9\u8981\u4ea4\u6362\u7684\u4ee3\u5e01-step-2-select-a-pair-of-tokens-to-be-swapped",level:5},{value:"\u6b65\u9aa4 3.\u5982\u6709\u5fc5\u8981\uff0c\u5c06\u65b0\u4ee3\u5e01\u6dfb\u52a0\u5230\u5217\u8868\u4e2d (Step3. Add a new token to the list, if necessary)",id:"\u6b65\u9aa4-3\u5982\u6709\u5fc5\u8981\u5c06\u65b0\u4ee3\u5e01\u6dfb\u52a0\u5230\u5217\u8868\u4e2d-step3-add-a-new-token-to-the-list-if-necessary",level:5},{value:"\u6b65\u9aa4 4. \u8f93\u5165\u60a8\u8981\u5356\u51fa\u7684\u6570\u91cf (Step 4. Enter the quantity you want to sell)",id:"\u6b65\u9aa4-4-\u8f93\u5165\u60a8\u8981\u5356\u51fa\u7684\u6570\u91cf-step-4-enter-the-quantity-you-want-to-sell",level:5},{value:"\u6b65\u9aa4 5. \u6267\u884c\u4ea4\u6362 (Step 5. Perform the exchange)",id:"\u6b65\u9aa4-5-\u6267\u884c\u4ea4\u6362-step-5-perform-the-exchange",level:5},{value:"\u6b65\u9aa4 6. \u68c0\u67e5\u7ed3\u679c (Step 6. Check the result of the exchange)",id:"\u6b65\u9aa4-6-\u68c0\u67e5\u7ed3\u679c-step-6-check-the-result-of-the-exchange",level:5},{value:"\u6b65\u9aa4 7. \u4ea4\u6613\u7684\u9644\u52a0\u8bbe\u7f6e (Step 7. Additional settings for trading)",id:"\u6b65\u9aa4-7-\u4ea4\u6613\u7684\u9644\u52a0\u8bbe\u7f6e-step-7-additional-settings-for-trading",level:5}],h={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"\u76ee\u6807-goal"},"\u76ee\u6807 (Goal)"),(0,i.kt)("p",null,"To swap an ERC-20 token with another token of the same standard using the NeonSwap application."),(0,i.kt)("p",null,"\u4f7f\u7528 NeonSwap \u5e94\u7528\u7a0b\u5e8f\u5c06 ERC-20 \u4ee3\u5e01\u4e0e\u53e6\u4e00\u4e2a\u76f8\u540c\u6807\u51c6\u7684\u4ee3\u5e01\u4ea4\u6362\u3002"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Condition"),": The ERC-20 token can be any SPL token whose contract complies with the ERC-20 standard and is deployed on the Neon EVM."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u6761\u4ef6"),"\uff1aERC-20 \u4ee3\u5e01\u53ef\u4ee5\u662f\u7b26\u5408 ERC-20 \u6807\u51c6\u5e76\u90e8\u7f72\u5728 Neon EVM \u4e0a\u7684\u4efb\u4f55 SPL \u4ee3\u5e01\u3002"),(0,i.kt)("h4",{id:"\u5f00\u59cb\u4e4b\u524d-before-you-begin"},"\u5f00\u59cb\u4e4b\u524d (Before You Begin)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Familiarize yourself with the following:\n\u719f\u6089\u4ee5\u4e0b\u5185\u5bb9"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.solana.com/clusters"},"Solana")," network.\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.solana.com/clusters"},"Solana"),"\u7f51\u7edc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MetaMask."))))),(0,i.kt)("p",null,"The MetaMask wallet must be installed on your device and can be accessed from the browser you are using."),(0,i.kt)("p",null,"MetaMask \u94b1\u5305\u5fc5\u987b\u5b89\u88c5\u5728\u60a8\u7684\u8bbe\u5907\u4e0a\uff0c\u5e76\u4e14\u53ef\u4ee5\u4ece\u60a8\u4f7f\u7528\u7684\u6d4f\u89c8\u5668\u8bbf\u95ee\u3002"),(0,i.kt)("p",null,"Read the guide How to Connect MetaMask to Solana's Network.\n\u9605\u8bfb\u6b64\u6587\u3002"),(0,i.kt)("h4",{id:"neonswap-overview"},"NeonSwap Overview"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NeonSwap is open-source service forked from Uniswap V2 and modified to work with the Neon EVM.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NeonSwap \u662f\u4ece Uniswap V2 \u5206\u53c9\u51fa\u6765\u7684\u5f00\u6e90\u670d\u52a1\uff0c\u7ecf\u8fc7\u4fee\u6539\u4ee5\u4e0e Neon EVM \u4e00\u8d77\u4f7f\u7528\u3002")),(0,i.kt)("p",null,"NeonSwap is an open-source dApp whose main function is to provide the services required to deploy Ethereum contracts on the Neon EVM. In Ethereum, transactions such as exchanging one token for another require the deployment of contracts. These contracts operate using their specific services and cannot be deployed outside of this environment."),(0,i.kt)("p",null,"NeonSwap \u662f\u4e00\u4e2a\u5f00\u6e90 dApp\uff0c\u5176\u4e3b\u8981\u529f\u80fd\u662f\u63d0\u4f9b\u5728 Neon EVM \u4e0a\u90e8\u7f72\u4ee5\u592a\u574a\u5408\u7ea6\u6240\u9700\u7684\u670d\u52a1\u3002\u5728\u4ee5\u592a\u574a\u4e2d\uff0c\u8bf8\u5982\u4ee3\u5e01\u4ea4\u6362\u7b49\u4ea4\u6613\u9700\u8981\u90e8\u7f72\u5408\u7ea6\u3002\u8fd9\u4e9b\u5408\u7ea6\u4f7f\u7528\u5176\u7279\u5b9a\u670d\u52a1\u8fd0\u884c\uff0c\u4e14\u4e0d\u80fd\u5728\u6b64\u73af\u5883\u4e4b\u5916\u90e8\u7f72\u3002"),(0,i.kt)("p",null,"We want to demonstrate that our Neon EVM product allows you to transfer your applications from Ethereum to Solana while ensuring that they function reliably. The NeonSwap infrastructure provides full support for your applications on the Neon EVM as well as the swap interface on a separate server. No changes are required to port applications using the NeonSwap service."),(0,i.kt)("p",null,"\u6211\u4eec\u60f3\u8981\u9610\u660e: Neon EVM \u4ea7\u54c1\u5141\u8bb8\u60a8\u5c06\u5e94\u7528\u4ece\u4ee5\u592a\u574a\u8f6c\u79fb\u5230 Solana\uff0c\u5e76\u786e\u4fdd\u5b83\u4eec\u53ef\u9760\u8fd0\u884c\u3002 NeonSwap \u57fa\u7840\u67b6\u6784\u5411Neon EVM \u4e0a\u7684\u5e94\u7528\u4ee5\u53ca\u72ec\u7acb\u670d\u52a1\u5668\u4e0a\u7684swap\u63a5\u53e3\u63d0\u4f9b\u5168\u9762\u652f\u6301\u3002\u65e0\u9700\u66f4\u6539\u5373\u53ef\u4f7f\u7528 NeonSwap \u670d\u52a1\u79fb\u690d\u5e94\u7528\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NeonSwap service provides an opportunity for Ethereum developers to migrate their applications to the Neon EVM without any difficulties."),(0,i.kt)("p",{parentName:"blockquote"},"NeonSwap \u670d\u52a1\u7ed9\u4ee5\u592a\u574a\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u4e86\u4e00\u4e2a\u673a\u4f1a\uff0c\u53ef\u4ee5\u6beb\u65e0\u56f0\u96be\u5730\u5c06\u4ed6\u4eec\u7684\u5e94\u7528\u8fc1\u79fb\u5230 Neon EVM\u3002")),(0,i.kt)("h4",{id:"\u6b65\u9aa4-steps"},"\u6b65\u9aa4 (Steps)"),(0,i.kt)("p",null,"The NeonSwap application allows any user to swap one token for another. You just need to connect your wallet to the application following the step-by-step instructions. Swapping tokens will be carried out automatically without sending funds to the exchange. There are some gas transaction fees to pay with the application."),(0,i.kt)("p",null,"NeonSwap \u5e94\u7528\u5141\u8bb8\u4efb\u4f55\u7528\u6237\u4ea4\u6362\u4ee3\u5e01\u3002\u60a8\u53ea\u9700\u6309\u7167\u8bf4\u660e\u5c06\u60a8\u7684\u94b1\u5305\u8fde\u63a5\u5230\u5e94\u7528\u3002\u4ea4\u6362\u5c06\u81ea\u52a8\u8fdb\u884c\uff0c\u65e0\u9700\u5411\u4ea4\u6613\u6240\u53d1\u9001\u8d44\u91d1\u3002\u5e94\u7528\u9700\u8981\u652f\u4ed8\u4e00\u4e9bgas\u4f5c\u4e3a\u4ea4\u6613\u8d39\u7528\u3002"),(0,i.kt)("p",null,"As an example, this tutorial outlines the exchange of ETH-",">","USDT tokens."),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u672c\u6559\u7a0b\u5c06\u6982\u8ff0 ETH-",">","USDT \u4ee3\u5e01\u7684\u4ea4\u6362\u3002"),(0,i.kt)("h5",{id:"\u6b65\u9aa4-1-\u6253\u5f00-neonswap-\u5e94\u7528\u7a0b\u5e8f\u5e76\u8fde\u63a5\u60a8\u7684\u94b1\u5305-step-1-open-the-neonswap-application-and-connect-your-wallet"},"\u6b65\u9aa4 1. \u6253\u5f00 NeonSwap \u5e94\u7528\u7a0b\u5e8f\u5e76\u8fde\u63a5\u60a8\u7684\u94b1\u5305 (Step 1. Open the NeonSwap application and connect your wallet)"),(0,i.kt)("p",null,"Go to the NeonSwap page to call the NeonSwap application. Before you can make a swap, you need to connect your wallet. Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect Wallet")," on the swap screen."),(0,i.kt)("p",null,"\u8fdb\u5165 NeonSwap \u9875\u9762\u8c03\u7528 NeonSwap \u5e94\u7528\u7a0b\u5e8f\u3002\u5728\u8fdb\u884c\u4ea4\u6362\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u8fde\u63a5\u60a8\u7684\u94b1\u5305\u3002\u5355\u51fb\u4ea4\u6362\u5c4f\u5e55\u4e0a\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u8fde\u63a5\u94b1\u5305(Connect Wallet)")," \u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.neon-labs.org/assets/images/swap-erc20-1-f9b7f366542437abbe732afbb8c1201d.png",alt:null})),(0,i.kt)("p",null,"From the list appears in the dropdown, you must select your wallet. (In our case, this is MetaMask.) Select the account you want to connect to."),(0,i.kt)("p",null,"\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u663e\u793a\u7684\u5217\u8868\u4e2d\uff0c\u60a8\u5fc5\u987b\u9009\u62e9\u60a8\u7684\u94b1\u5305\u3002(\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0c\u662f MetaMask)\u9009\u62e9\u60a8\u8981\u8fde\u63a5\u7684\u5e10\u6237\u3002"),(0,i.kt)("h5",{id:"\u6b65\u9aa4-2-\u9009\u62e9\u4e00\u5bf9\u8981\u4ea4\u6362\u7684\u4ee3\u5e01-step-2-select-a-pair-of-tokens-to-be-swapped"},"\u6b65\u9aa4 2. \u9009\u62e9\u4e00\u5bf9\u8981\u4ea4\u6362\u7684\u4ee3\u5e01 (Step 2. Select a pair of tokens to be swapped)"),(0,i.kt)("p",null,"After connecting your wallet, you can begin setting up the exchange. You need to select the token that will be swapping from. It will retrieve your balance from the connected wallet. In our case, it will be ETH."),(0,i.kt)("p",null,"\u8fde\u63a5\u94b1\u5305\u540e\uff0c\u60a8\u53ef\u4ee5\u5f00\u59cb\u8bbe\u7f6e\u4ea4\u6613\u6240\u3002\u60a8\u9700\u8981\u9009\u62e9\u5c06\u8981\u4ea4\u6362\u7684\u4ee3\u5e01\u3002\u5b83\u5c06\u4ece\u8fde\u63a5\u7684\u94b1\u5305\u4e2d\u68c0\u7d22\u60a8\u7684\u4f59\u989d\u3002\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0c\u5b83\u5c06\u662f ETH\u3002"),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Select a token")," to open up a menu where you can select a token to exchange for.\n\u5355\u51fb",(0,i.kt)("inlineCode",{parentName:"p"},"\u9009\u62e9\u4ee3\u5e01 (Select a token)"),"\u4ee5\u6253\u5f00\u4e00\u4e2a\u83dc\u5355\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u9009\u62e9\u8981\u5151\u6362\u7684\u4ee3\u5e01\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.neon-labs.org/assets/images/swap-erc20-2-0ebab1f697adec6b2536979003808115.png",alt:null})),(0,i.kt)("h5",{id:"\u6b65\u9aa4-3\u5982\u6709\u5fc5\u8981\u5c06\u65b0\u4ee3\u5e01\u6dfb\u52a0\u5230\u5217\u8868\u4e2d-step3-add-a-new-token-to-the-list-if-necessary"},"\u6b65\u9aa4 3.\u5982\u6709\u5fc5\u8981\uff0c\u5c06\u65b0\u4ee3\u5e01\u6dfb\u52a0\u5230\u5217\u8868\u4e2d (Step3. Add a new token to the list, if necessary)"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Select a token")," menu contains tokens deployed in the Neon EVM. If the token symbol you specified is not in the list, you can paste the token's address if you know what it is. Note: the token must first be deployed on the Neon EVM network"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u9009\u62e9\u4ee3\u5e01 (Select a token)"),"\u83dc\u5355\u5305\u542b\u90e8\u7f72\u5728 Neon EVM \u4e2d\u7684\u4ee3\u5e01\u3002\u5982\u679c\u60a8\u6307\u5b9a\u7684\u4ee3\u5e01\u7b26\u53f7\u4e0d\u5728\u5217\u8868\u4e2d\uff0c\u60a8\u53ef\u4ee5\u7c98\u8d34\u4ee3\u5e01\u7684\u5730\u5740\uff08\u5982\u679c\u60a8\u77e5\u9053\u5b83\u662f\u4ec0\u4e48\uff09\u3002\u6ce8\u610f\uff1a\u4ee3\u5e01\u5fc5\u987b\u9996\u5148\u90e8\u7f72\u5728 Neon EVM \u7f51\u7edc\u4e0a\u3002"),(0,i.kt)("p",null,"If you want to add a new token to the list, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Manage")," at the bottom of the box. The Manage tab will open on the screen. Add the address of the new token deployed in the Neon EVM network and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Import"),". (You can take a token's address from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/neonlabsorg/token-list/"},"token-list"),".)"),(0,i.kt)("p",null,"\u5982\u679c\u8981\u5411\u5217\u8868\u4e2d\u6dfb\u52a0\u65b0\u4ee3\u5e01\uff0c\u8bf7\u5355\u51fb\u6846\u5e95\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u7ba1\u7406(Manage)"),"\u3002\u7ba1\u7406\u9009\u9879\u5361\u5c06\u5728\u5c4f\u5e55\u4e0a\u6253\u5f00\u3002\u6dfb\u52a0\u90e8\u7f72\u5728 Neon EVM \u7f51\u7edc\u4e2d\u7684\u65b0\u4ee3\u5e01\u7684\u5730\u5740\uff0c\u7136\u540e\u5355\u51fb",(0,i.kt)("inlineCode",{parentName:"p"},"\u5bfc\u5165(Import)"),"\u3002 \uff08\u60a8\u53ef\u4ee5\u4ece",(0,i.kt)("a",{parentName:"p",href:"https://github.com/neonlabsorg/token-list/"},"\u4ee3\u5e01\u5217\u8868"),"\u4e2d\u83b7\u53d6\u4ee3\u5e01\u7684\u5730\u5740\u3002\uff09"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.neon-labs.org/assets/images/swap-erc20-3-0101e77aeeceed40a68d59c897e7c27f.png",alt:null})),(0,i.kt)("p",null,'You will receive a warning message, "Trade at your own risk!" If you are confident in your actions, agree by choosing ',(0,i.kt)("inlineCode",{parentName:"p"},"I understand")," then click ",(0,i.kt)("inlineCode",{parentName:"p"},"Import"),"."),(0,i.kt)("p",null,"\u60a8\u5c06\u6536\u5230\u4e00\u6761\u8b66\u544a\u6d88\u606f\uff0c\u201c\u4ea4\u6613\u98ce\u9669\u81ea\u8d1f\uff01\u201d\u5982\u679c\u60a8\u5bf9\u81ea\u5df1\u7684\u884c\u4e3a\u6709\u4fe1\u5fc3\uff0c\u8bf7\u9009\u62e9",(0,i.kt)("inlineCode",{parentName:"p"},"\u6211\u7406\u89e3(I understand)"),"\u540c\u610f\uff0c\u7136\u540e\u5355\u51fb",(0,i.kt)("inlineCode",{parentName:"p"},"\u5bfc\u5165(Import)"),"\u3002"),(0,i.kt)("p",null,"The symbol of the new token will appear in the list of tokens available for swapping\n\u65b0\u4ee3\u5e01\u7684\u7b26\u53f7\u5c06\u51fa\u73b0\u5728\u53ef\u7528\u4e8e\u4ea4\u6362\u7684\u4ee3\u5e01\u5217\u8868\u4e2d\u3002"),(0,i.kt)("h5",{id:"\u6b65\u9aa4-4-\u8f93\u5165\u60a8\u8981\u5356\u51fa\u7684\u6570\u91cf-step-4-enter-the-quantity-you-want-to-sell"},"\u6b65\u9aa4 4. \u8f93\u5165\u60a8\u8981\u5356\u51fa\u7684\u6570\u91cf (Step 4. Enter the quantity you want to sell)"),(0,i.kt)("p",null,"To check the balance of the token being sold, click ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," (next to the token symbol). Keep in mind that some amount of the token must be spent as a fee to pay for the gas required for a transaction to execute. If you specify the entire amount of funds for trade, the resulting exchanged amount will be reduced by the fee."),(0,i.kt)("p",null,"\u8981\u68c0\u67e5\u6240\u552e\u4ee3\u5e01\u7684\u4f59\u989d\uff0c\u8bf7\u5355\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"\uff08\u4ee3\u5e01\u7b26\u53f7\u65c1\u8fb9\uff09\u3002\u8bf7\u8bb0\u4f4f\uff0c\u5fc5\u987b\u82b1\u8d39\u4e00\u5b9a\u6570\u91cf\u7684\u4ee3\u5e01\u4f5c\u4e3a\u8d39\u7528\u6765\u652f\u4ed8\u6267\u884c\u4ea4\u6613\u6240\u9700\u7684gas\u3002\u5982\u679c\u60a8\u6307\u5b9a\u4ea4\u6613\u5168\u90e8\u91d1\u989d\uff0c\u5219\u7531\u6b64\u4ea7\u751f\u7684\u5151\u6362\u91d1\u989d\u5c06\u51cf\u53bb\u8d39\u7528\u3002"),(0,i.kt)("p",null,'If there are not enough tokens in the pool to exchange, NeonSwap will warn you by issuing the message "Insufficient liquidity for this trade".'),(0,i.kt)("p",null,"\u5982\u679c\u6c60\u4e2d\u6ca1\u6709\u8db3\u591f\u7684\u4ee3\u5e01\u8fdb\u884c\u4ea4\u6362\uff0cNeonSwap \u5c06\u901a\u8fc7\u53d1\u51fa\u201c\u6b64\u4ea4\u6613\u7684\u6d41\u52a8\u6027\u4e0d\u8db3\u201d\u7684\u8b66\u544a\u3002"),(0,i.kt)("p",null,"In our case, we exchange ETH tokens for USDT tokens. Let's specify the number of tokens to be exchanged equal to 10. Neon Swap will indicate the expected number of purchased USDT tokens, corresponding to 2.49176 at the exchange rate before our transaction."),(0,i.kt)("p",null,"\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06 ETH \u6362\u6210\u4e86 USDT\u3002\u6211\u4eec\u6307\u5b9a\u8981\u5151\u6362\u7684\u4ee3\u5e01\u6570\u91cf\u4e3a10\u3002Neon Swap \u5c06\u663e\u793a\u8d2d\u4e70\u7684 USDT \u4ee3\u5e01\u7684\u9884\u671f\u6570\u91cf\uff0c\u5bf9\u5e94\u6211\u4eec\u4ea4\u6613\u524d\u7684\u6c47\u73872.49176\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.neon-labs.org/assets/images/swap-erc20-4-ad2823a18de705ae19b2a7609ffa0945.png",alt:null})),(0,i.kt)("h5",{id:"\u6b65\u9aa4-5-\u6267\u884c\u4ea4\u6362-step-5-perform-the-exchange"},"\u6b65\u9aa4 5. \u6267\u884c\u4ea4\u6362 (Step 5. Perform the exchange)"),(0,i.kt)("p",null,"Before you can submit this exchange, you need to understand the following:\n\u5728\u63d0\u4ea4\u6b64\u4ea4\u6362\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u4e86\u89e3\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Price")," --- the price at which the exchange is possible\n",(0,i.kt)("inlineCode",{parentName:"p"},"\u4ef7\u683c")," --- \u53ef\u4ee5\u5151\u6362\u7684\u4ef7\u683c")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Minimum received")," --- the minimum amount of tokens (in our case, USDT) you will receive if the trade goes through. The trade will fail if the price deviates too much during the transaction (also known as slippage).\n",(0,i.kt)("inlineCode",{parentName:"p"},"\u6700\u5c11\u53ef\u83b7\u5f97")," --- \u5982\u679c\u4ea4\u6613\u5b8c\u6210\uff0c\u60a8\u5c06\u6536\u5230\u7684\u6700\u4f4e\u4ee3\u5e01\u6570\u91cf\uff08\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\u662f USDT\uff09\u3002\u5982\u679c\u5728\u4ea4\u6613\u8fc7\u7a0b\u4e2d\u4ef7\u683c\u504f\u79bb\u592a\u591a\uff08\u4e5f\u79f0\u4e3a\u6ed1\u70b9\uff09\uff0c\u4ea4\u6613\u5c06\u5931\u8d25\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Price impact")," --- tells you how much your swap will affect this token's price. This value can be seen as a loss you will take on the swap. The closer this number is to zero, the better.\n",(0,i.kt)("inlineCode",{parentName:"p"},"\u4ef7\u683c\u5f71\u54cd")," --- \u544a\u8bc9\u60a8\u7684swap\u4f1a\u5bf9\u8fd9\u4e2a\u4ee3\u5e01\u7684\u4ef7\u683c\u4ea7\u751f\u591a\u5927\u7684\u5f71\u54cd\u3002\u8fd9\u4e2a\u503c\u53ef\u4ee5\u88ab\u89c6\u4e3a\u60a8\u5c06\u5728swap\u4e2d\u627f\u62c5\u7684\u635f\u5931\u3002\u8fd9\u4e2a\u6570\u5b57\u8d8a\u63a5\u8fd1\u96f6\u8d8a\u597d\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Liquidity Provider Fee")," --- the fee you will pay for this transaction. NeonSwap charges a 0.03 % fee of the total transaction amount. This fee is expressed in the token you are selling (in our case, ETH).\n",(0,i.kt)("inlineCode",{parentName:"p"},"\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u8d39\u7528")," --- \u60a8\u5c06\u4e3a\u6b64\u4ea4\u6613\u652f\u4ed8\u7684\u8d39\u7528\u3002 NeonSwap \u6536\u53d6\u603b\u4ea4\u6613\u91d1\u989d\u7684 0.03% \u7684\u8d39\u7528\u3002\u6b64\u8d39\u7528\u4ee5\u60a8\u5356\u51fa\u7684\u4ee3\u5e01\uff08\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\u4e3a ETH\uff09\u8868\u793a\u3002"))),(0,i.kt)("p",null,"Once you are ready to perform the exchange click ",(0,i.kt)("inlineCode",{parentName:"p"},"Swap"),". A confirmation window will pop up with details of the exchange. If the conditions are accepted, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Confirm Swap"),". A request will be sent to MetaMask to ",(0,i.kt)("inlineCode",{parentName:"p"},"confirm")," the transaction."),(0,i.kt)("p",null,"\u4e00\u65e6\u60a8\u51c6\u5907\u597d\u6267\u884c\u4ea4\u6362\uff0c\u8bf7\u5355\u51fb\u201c ",(0,i.kt)("inlineCode",{parentName:"p"},"\u4ea4\u6362(Swap)"),"\u201d\u3002\u4e00\u4e2a\u5305\u542bswap\u7684\u8be6\u7ec6\u4fe1\u606f\u786e\u8ba4\u7a97\u53e3\u5c31\u4f1a\u5f39\u51fa\u3002\u5982\u60a8\u63a5\u6536\uff0c\u8bf7\u5355\u51fb",(0,i.kt)("inlineCode",{parentName:"p"},"\u786e\u8ba4\u4ea4\u6362 (Confirm Swap)"),"\u3002\u968f\u540e MetaMask \u4f1a\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\u6765",(0,i.kt)("inlineCode",{parentName:"p"},"\u786e\u8ba4 (confirm)"),"\u4ea4\u6613\u3002"),(0,i.kt)("h5",{id:"\u6b65\u9aa4-6-\u68c0\u67e5\u7ed3\u679c-step-6-check-the-result-of-the-exchange"},"\u6b65\u9aa4 6. \u68c0\u67e5\u7ed3\u679c (Step 6. Check the result of the exchange)"),(0,i.kt)("p",null,"The request will open up a MetaMask window where you can confirm the transaction. You can see an estimate of how much gas you will pay. Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Confirm")," to send the transaction."),(0,i.kt)("p",null,"\u8be5\u8bf7\u6c42\u5c06\u6253\u5f00\u4e00\u4e2a MetaMask \u7a97\u53e3\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u786e\u8ba4\u4ea4\u6613\u3002\u60a8\u53ef\u4ee5\u770b\u5230\u60a8\u5c06\u652f\u4ed8\u591a\u5c11\u6c7d\u6cb9\u7684\u4f30\u8ba1\u503c\u3002\u70b9\u51fb",(0,i.kt)("inlineCode",{parentName:"p"},"\u786e\u8ba4 (Confirm)"),"\u53d1\u9001\u4ea4\u6613\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.neon-labs.org/assets/images/swap-erc20-5-3b658a59730f63d6de3b75750b701deb.png",alt:null})),(0,i.kt)("p",null,"You can also check the result of the trade in the NeonSwap window. Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Close")," to complete the transaction."),(0,i.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u5728 NeonSwap \u7a97\u53e3\u4e2d\u67e5\u770b\u4ea4\u6613\u7ed3\u679c\u3002\u5355\u51fb",(0,i.kt)("inlineCode",{parentName:"p"},"\u5173\u95ed (Close)"),"\u4ee5\u5b8c\u6210\u4ea4\u6613\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.neon-labs.org/assets/images/swap-erc20-6-4b5e9bebe8c7f03065ccb69fa8e8cbd4.png",alt:null})),(0,i.kt)("p",null,"Now you can open MetaMask, as well as the list of tokens, by clicking",(0,i.kt)("inlineCode",{parentName:"p"},"Select a token")," to make sure that the balances of tokens have changed to the expected values"),(0,i.kt)("p",null,"\u73b0\u5728\u60a8\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb",(0,i.kt)("inlineCode",{parentName:"p"},"\u9009\u62e9\u4ee3\u5e01 (Select a token)"),"\u6765\u6253\u5f00 MetaMask \u4ee5\u53ca\u4ee3\u5e01\u5217\u8868\uff0c\u4ee5\u786e\u4fdd\u4ee3\u5e01\u4f59\u989d\u5df2\u53d8\u4e3a\u4e3a\u9884\u671f\u503c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.neon-labs.org/assets/images/swap-erc20-7-4ff4106ebb8881074ae9f179308c5fa9.png",alt:null})),(0,i.kt)("p",null,"The transaction is complete, which means you have successfully changed your ETH for USDT"),(0,i.kt)("p",null,"\u4ea4\u6613\u5b8c\u6210\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u5df2\u6210\u529f\u5c06\u60a8\u7684 ETH \u5151\u6362\u4e3a USDT\u3002"),(0,i.kt)("h5",{id:"\u6b65\u9aa4-7-\u4ea4\u6613\u7684\u9644\u52a0\u8bbe\u7f6e-step-7-additional-settings-for-trading"},"\u6b65\u9aa4 7. \u4ea4\u6613\u7684\u9644\u52a0\u8bbe\u7f6e (Step 7. Additional settings for trading)"),(0,i.kt)("p",null,"Click the cogwheel icon. The window ",(0,i.kt)("inlineCode",{parentName:"p"},"Transaction Settings")," will pop up on the screen to set up the advanced swap:"),(0,i.kt)("p",null,"\u5355\u51fb\u9f7f\u8f6e\u56fe\u6807\u3002\u5c4f\u5e55\u4e0a\u4f1a\u5f39\u51fa",(0,i.kt)("inlineCode",{parentName:"p"},"Transaction Settings (\u4ea4\u6613\u8bbe\u7f6e)"),"\u7a97\u53e3\u4ee5\u8bbe\u7f6e\u9ad8\u7ea7\u4ea4\u6362\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.neon-labs.org/assets/images/swap-erc20-8-8f41a5ccbb687cbff6e8650c800588f8.png",alt:null})),(0,i.kt)("p",null,"Transaction settings:\n\u4ea4\u6613\u8bbe\u5b9a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Slippage tolerance")," --- the allowable amount of price change. It means that the order is fulfilled at a price different from what you expected. If it exceeds the tolerance level selected, the transaction will not go through. If you are trading during high volatility, you may want to increase this value. Increasing the transaction speed can help you to reduce the chances of high slippage.\n",(0,i.kt)("inlineCode",{parentName:"p"},"\u6ed1\u70b9\u5bb9\u5fcd\u5ea6")," --- \u80fd\u63a5\u6536\u7684\u4ef7\u683c\u53d8\u5316\u91cf\u3002\u8fd9\u610f\u5473\u7740\u8ba2\u5355\u7684\u5c65\u884c\u4ef7\u683c\u4e0e\u60a8\u7684\u9884\u671f\u4e0d\u540c\u3002\u5982\u679c\u8d85\u8fc7\u5bb9\u5dee\u6c34\u5e73\uff0c\u4ea4\u6613\u5c31\u4e0d\u4f1a\u901a\u8fc7\u3002\u5982\u679c\u60a8\u5728\u9ad8\u6ce2\u52a8\u671f\u95f4\u8fdb\u884c\u4ea4\u6613\uff0c\u5219\u53ef\u80fd\u9700\u8981\u589e\u52a0\u6b64\u503c\u3002\u63d0\u5347\u4ea4\u6613\u901f\u5ea6\u53ef\u4ee5\u5e2e\u52a9\u60a8\u51cf\u5c11\u9ad8\u6ed1\u70b9\u7684\u673a\u4f1a\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Transaction deadline")," --- allows the transaction to automatically cancel if it is taking too long to process\n",(0,i.kt)("inlineCode",{parentName:"p"},"\u4ea4\u6613\u622a\u6b62\u65e5\u95f4")," --- \u5141\u8bb8\u4ea4\u6613\u5728\u5904\u7406\u65f6\u95f4\u8fc7\u957f\u65f6\u81ea\u52a8\u53d6\u6d88\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Toggle Expert Mode")," --- disables the confirmation screen and removes slippage limits. Enabling this mode is not recommended unless you fully understand the risks.\n",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e13\u5bb6\u6a21\u5f0f")," --- \u7981\u7528\u786e\u8ba4\u5c4f\u5e55\u5e76\u79fb\u9664\u6ed1\u70b9\u9650\u5236\u3002\u9664\u975e\u60a8\u5b8c\u5168\u4e86\u89e3\u98ce\u9669\uff0c\u5426\u5219\u4e0d\u5efa\u8bae\u542f\u7528\u6b64\u6a21\u5f0f\u3002"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Disable Multihops"),' --- disables complex conversion paths. For example, if there is not enough liquidity in the "A-',">",'B" token pair, then the algorithm can involve other tokens to find the "A-',">","C-",">",'B" intermediate route and make an exchange for you. This action requires more network fees because several smart contracts are involved.\n',(0,i.kt)("inlineCode",{parentName:"p"},"\u7981\u7528\u591a\u8def\u5f84"),' --- \u7981\u7528\u590d\u6742\u7684\u8f6c\u6362\u8def\u5f84\u3002\u4f8b\u5982\uff0c\u5982\u679c "A-',">",'B" \u4ee3\u5e01\u5bf9\u4e2d\u6ca1\u6709\u8db3\u591f\u7684\u6d41\u52a8\u6027\uff0c\u90a3\u4e48\u7b97\u6cd5\u53ef\u4ee5\u8ba9\u5176\u4ed6\u4ee3\u5e01\u627e\u5230 "A-',">","C-",">",'B" \u4e2d\u95f4\u8def\u5f84\u6765\u4e3a\u60a8\u4ea4\u6362\u3002\u6b64\u64cd\u4f5c\u9700\u8981\u66f4\u591a\u7684\u7f51\u7edc\u8d39\u7528\uff0c\u56e0\u4e3a\u6d89\u53ca\u591a\u4e2a\u667a\u80fd\u5408\u7ea6\u3002'))}d.isMDXComponent=!0}}]);