"use strict";(self.webpackChunkneonwp=self.webpackChunkneonwp||[]).push([[2058],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(t),d=r,E=h["".concat(l,".").concat(d)]||h[d]||p[d]||a;return t?o.createElement(E,s(s({ref:n},u),{},{components:t})):o.createElement(E,s({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=h;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3101:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),s=["components"],i={sidebar_position:5,title:"\u6211\u5982\u4f55\u8fd0\u884cNeon EVM(How can I run Neon EVM?)"},l=void 0,c={unversionedId:"10faq/05how can I run Neon EVM",id:"10faq/05how can I run Neon EVM",title:"\u6211\u5982\u4f55\u8fd0\u884cNeon EVM(How can I run Neon EVM?)",description:"- \u6211\u5982\u4f55\u627e\u5230testnet RPC \u548c\u94feID?(Where can I find the testnet RPC and ChainID?)",source:"@site/docs/10faq/05how can I run Neon EVM.md",sourceDirName:"10faq",slug:"/10faq/05how can I run Neon EVM",permalink:"/neonwp/10faq/05how can I run Neon EVM",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/10faq/05how can I run Neon EVM.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u6211\u5982\u4f55\u8fd0\u884cNeon EVM(How can I run Neon EVM?)"},sidebar:"tutorialSidebar",previous:{title:"\u4e3a\u4ec0\u4e48\u6211\u8981\u9009\u62e9Neon(Why should I choose Neon?)",permalink:"/neonwp/10faq/04Why should I choose Neon"},next:{title:"\u6211\u627e\u4e0d\u5230\u95ee\u9898\u7684\u7b54\u6848(I could not find an answer to my issue)",permalink:"/neonwp/10faq/06no answer to my issue"}},u={},p=[{value:"\u6211\u5982\u4f55\u627e\u5230testnet RPC \u548c\u94feID?(Where can I find the testnet RPC and ChainID?)",id:"\u6211\u5982\u4f55\u627e\u5230testnet-rpc-\u548c\u94feidwhere-can-i-find-the-testnet-rpc-and-chainid",level:4},{value:"\u4e3b\u7f51\u7684USDC/USDT/BTC/ETH \u5730\u5740\u4f1a\u548c\u6d4b\u8bd5\u7f51\u4e00\u6837\u5417?(Will the mainnet addresses for USDC/USDT/BTC/ETH be the same as they are in testnet?)",id:"\u4e3b\u7f51\u7684usdcusdtbtceth-\u5730\u5740\u4f1a\u548c\u6d4b\u8bd5\u7f51\u4e00\u6837\u5417will-the-mainnet-addresses-for-usdcusdtbtceth-be-the-same-as-they-are-in-testnet",level:4},{value:"\u6211\u53ef\u4ee5\u5728Solana\u5f00\u53d1\u7f51\u4e0a\u4f7f\u7528Neon EVM\u7684\u4ee3\u7406\u5417?(Can I use the Solana devnet proxy for Neon EVM?)",id:"\u6211\u53ef\u4ee5\u5728solana\u5f00\u53d1\u7f51\u4e0a\u4f7f\u7528neon-evm\u7684\u4ee3\u7406\u5417can-i-use-the-solana-devnet-proxy-for-neon-evm",level:4},{value:"Neon\u8fd0\u8425\u65b9\u9700\u8981\u591a\u5c11\u5b58\u6b3e\u624d\u80fd\u6267\u884c\u4e00\u7b14\u4ea4\u6613?(How much should a Neon operator deposit for executing a transaction?)",id:"neon\u8fd0\u8425\u65b9\u9700\u8981\u591a\u5c11\u5b58\u6b3e\u624d\u80fd\u6267\u884c\u4e00\u7b14\u4ea4\u6613how-much-should-a-neon-operator-deposit-for-executing-a-transaction",level:4},{value:"\u6709\u67e5\u770bNeon\u4ea4\u6613\u7684\u533a\u5757\u6d4f\u89c8\u5668?\u8fd8\u662f\u4f7f\u7528Solana\u7684?(Is there an explorer to view Neon transactions, or do I use Solana&#39;s explorer?)",id:"\u6709\u67e5\u770bneon\u4ea4\u6613\u7684\u533a\u5757\u6d4f\u89c8\u5668\u8fd8\u662f\u4f7f\u7528solana\u7684is-there-an-explorer-to-view-neon-transactions-or-do-i-use-solanas-explorer",level:4}],h={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#%E6%88%91%E5%A6%82%E4%BD%95%E6%89%BE%E5%88%B0testnet-rpc-%E5%92%8C%E9%93%BEidwhere-can-i-find-the-testnet-rpc-and-chainid"},"\u6211\u5982\u4f55\u627e\u5230testnet RPC \u548c\u94feID?(Where can I find the testnet RPC and ChainID?)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#%E4%B8%BB%E7%BD%91%E7%9A%84usdcusdtbtceth-%E5%9C%B0%E5%9D%80%E4%BC%9A%E5%92%8C%E6%B5%8B%E8%AF%95%E7%BD%91%E4%B8%80%E6%A0%B7%E5%90%97will-the-mainnet-addresses-for-usdcusdtbtceth-be-the-same-as-they-are-in-testnet"},"\u4e3b\u7f51\u7684USDC/USDT/BTC/ETH \u5730\u5740\u4f1a\u548c\u6d4b\u8bd5\u7f51\u4e00\u6837\u5417?(Will the mainnet addresses for USDC/USDT/BTC/ETH be the same as they are in testnet?)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#%E6%88%91%E5%8F%AF%E4%BB%A5%E5%9C%A8solana%E5%BC%80%E5%8F%91%E7%BD%91%E4%B8%8A%E4%BD%BF%E7%94%A8neon-evm%E7%9A%84%E4%BB%A3%E7%90%86%E5%90%97can-i-use-the-solana-devnet-proxy-for-neon-evm"},"\u6211\u53ef\u4ee5\u5728Solana\u5f00\u53d1\u7f51\u4e0a\u4f7f\u7528Neon EVM\u7684\u4ee3\u7406\u5417?(Can I use the Solana devnet proxy for Neon EVM?)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#neon%E8%BF%90%E8%90%A5%E6%96%B9%E9%9C%80%E8%A6%81%E5%A4%9A%E5%B0%91%E5%AD%98%E6%AC%BE%E6%89%8D%E8%83%BD%E6%89%A7%E8%A1%8C%E4%B8%80%E7%AC%94%E4%BA%A4%E6%98%93how-much-should-a-neon-operator-deposit-for-executing-a-transaction"},"Neon\u8fd0\u8425\u65b9\u9700\u8981\u591a\u5c11\u5b58\u6b3e\u624d\u80fd\u6267\u884c\u4e00\u7b14\u4ea4\u6613?(How much should a Neon operator deposit for executing a transaction?)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#%E6%9C%89%E6%9F%A5%E7%9C%8Bneon%E4%BA%A4%E6%98%93%E7%9A%84%E5%8C%BA%E5%9D%97%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BF%98%E6%98%AF%E4%BD%BF%E7%94%A8solana%E7%9A%84is-there-an-explorer-to-view-neon-transactions-or-do-i-use-solanas-explorer"},"\u6709\u67e5\u770bNeon\u4ea4\u6613\u7684\u533a\u5757\u6d4f\u89c8\u5668?\u8fd8\u662f\u4f7f\u7528Solana\u7684?(Is there an explorer to view Neon transactions, or do I use Solana's explorer?)")))),(0,a.kt)("h4",{id:"\u6211\u5982\u4f55\u627e\u5230testnet-rpc-\u548c\u94feidwhere-can-i-find-the-testnet-rpc-and-chainid"},"\u6211\u5982\u4f55\u627e\u5230testnet RPC \u548c\u94feID?(Where can I find the testnet RPC and ChainID?)"),(0,a.kt)("p",null,"You can find the testnet RPC and ChainID at ",(0,a.kt)("a",{parentName:"p",href:"https://chainlist.org/"},"chainlist.org"),"."),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://chainlist.org/"},"chainlist.org"),"\u627e\u5230testnet RPC \u548c\u94feID\u3002"),(0,a.kt)("h4",{id:"\u4e3b\u7f51\u7684usdcusdtbtceth-\u5730\u5740\u4f1a\u548c\u6d4b\u8bd5\u7f51\u4e00\u6837\u5417will-the-mainnet-addresses-for-usdcusdtbtceth-be-the-same-as-they-are-in-testnet"},"\u4e3b\u7f51\u7684USDC/USDT/BTC/ETH \u5730\u5740\u4f1a\u548c\u6d4b\u8bd5\u7f51\u4e00\u6837\u5417?(Will the mainnet addresses for USDC/USDT/BTC/ETH be the same as they are in testnet?)"),(0,a.kt)("p",null,"No, the addresses for USDC/USDT/BTC/ETH won't be the same for mainnet."),(0,a.kt)("p",null,"\u4e0d\uff0cUSDC/USDT/BTC/ETH\u7684\u5730\u5740\u4e0d\u4f1a\u76f8\u540c\u3002"),(0,a.kt)("h4",{id:"\u6211\u53ef\u4ee5\u5728solana\u5f00\u53d1\u7f51\u4e0a\u4f7f\u7528neon-evm\u7684\u4ee3\u7406\u5417can-i-use-the-solana-devnet-proxy-for-neon-evm"},"\u6211\u53ef\u4ee5\u5728Solana\u5f00\u53d1\u7f51\u4e0a\u4f7f\u7528Neon EVM\u7684\u4ee3\u7406\u5417?(Can I use the Solana devnet proxy for Neon EVM?)"),(0,a.kt)("p",null,"Yes, you can. Find the instructions on how to do so at ",(0,a.kt)("a",{parentName:"p",href:"https://chainlist.org/"},"chainlist.org"),"."),(0,a.kt)("p",null,"\u662f\u7684\uff0c\u60a8\u53ef\u4ee5\u3002\u8bf7\u5728",(0,a.kt)("a",{parentName:"p",href:"https://chainlist.org/"},"chainlist.org"),"\u627e\u5230\u76f8\u5173\u6307\u5f15\u3002"),(0,a.kt)("h4",{id:"neon\u8fd0\u8425\u65b9\u9700\u8981\u591a\u5c11\u5b58\u6b3e\u624d\u80fd\u6267\u884c\u4e00\u7b14\u4ea4\u6613how-much-should-a-neon-operator-deposit-for-executing-a-transaction"},"Neon\u8fd0\u8425\u65b9\u9700\u8981\u591a\u5c11\u5b58\u6b3e\u624d\u80fd\u6267\u884c\u4e00\u7b14\u4ea4\u6613?(How much should a Neon operator deposit for executing a transaction?)"),(0,a.kt)("p",null,"The deposit amount should be 5,000 lamports."),(0,a.kt)("p",null,"\u81f3\u5c11\u9700\u89815,000"),(0,a.kt)("h4",{id:"\u6709\u67e5\u770bneon\u4ea4\u6613\u7684\u533a\u5757\u6d4f\u89c8\u5668\u8fd8\u662f\u4f7f\u7528solana\u7684is-there-an-explorer-to-view-neon-transactions-or-do-i-use-solanas-explorer"},"\u6709\u67e5\u770bNeon\u4ea4\u6613\u7684\u533a\u5757\u6d4f\u89c8\u5668?\u8fd8\u662f\u4f7f\u7528Solana\u7684?(Is there an explorer to view Neon transactions, or do I use Solana's explorer?)"),(0,a.kt)("p",null,"Currently you will be able to use Solscan explorer to view Neon transactions"),(0,a.kt)("p",null,"\u76ee\u524d\u60a8\u53ef\u4ee5\u4f7f\u7528Solscan\u6765\u67e5\u770bNeon\u4ea4\u6613\u3002"))}d.isMDXComponent=!0}}]);