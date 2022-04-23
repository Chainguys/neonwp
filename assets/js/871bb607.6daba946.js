"use strict";(self.webpackChunkneonwp=self.webpackChunkneonwp||[]).push([[194],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4361:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:4,title:"\u6c34\u9f99\u5934 (Faucet)"},s=void 0,p={unversionedId:"05Developing/04Using utilities/04faucet",id:"05Developing/04Using utilities/04faucet",title:"\u6c34\u9f99\u5934 (Faucet)",description:"Using Faucet you can request Test NEON tokens on Solana devnet.",source:"@site/docs/05Developing/04Using utilities/04faucet.md",sourceDirName:"05Developing/04Using utilities",slug:"/05Developing/04Using utilities/04faucet",permalink:"/neonwp/05Developing/04Using utilities/04faucet",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05Developing/04Using utilities/04faucet.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u6c34\u9f99\u5934 (Faucet)"},sidebar:"tutorialSidebar",previous:{title:"NeonSwap",permalink:"/neonwp/05Developing/04Using utilities/03NeonSwap"},next:{title:"\u8fd0\u8425\u65b9\u9700\u6c42 (Operator Requirements)",permalink:"/neonwp/06operating/01OR"}},u={},c=[{value:"\u901a\u8fc7UI\u8bf7\u6c42\u6d4b\u8bd5\u4ee3\u5e01 (Requesting test NEON tokens via UI)",id:"\u901a\u8fc7ui\u8bf7\u6c42\u6d4b\u8bd5\u4ee3\u5e01-requesting-test-neon-tokens-via-ui",level:4},{value:"\u6b65\u9aa41 (Step 1)",id:"\u6b65\u9aa41-step-1",level:5},{value:"\u6b65\u9aa42  (Step 2)",id:"\u6b65\u9aa42--step-2",level:5},{value:"\u6b65\u9aa43 (Step 3)",id:"\u6b65\u9aa43-step-3",level:5},{value:"\u901a\u8fc7 HTTP API \u7aef\u70b9\u8bf7\u6c42\u6d4b\u8bd5\u4ee3\u5e01 (Requesting test NEON tokens via HTTP API Endpoints)",id:"\u901a\u8fc7-http-api-\u7aef\u70b9\u8bf7\u6c42\u6d4b\u8bd5\u4ee3\u5e01-requesting-test-neon-tokens-via-http-api-endpoints",level:4},{value:"\u8bbe\u7f6e (Configuration)",id:"\u8bbe\u7f6e-configuration",level:4},{value:"\u73af\u5883\u53d8\u91cf (Environment Variables)",id:"\u73af\u5883\u53d8\u91cf-environment-variables",level:4}],m={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using Faucet you can request Test NEON tokens on Solana devnet.",(0,o.kt)("br",{parentName:"p"}),"\n","\u4f7f\u7528 \u6c34\u9f99\u5934 (Faucet)\uff0c\u60a8\u53ef\u4ee5\u5728 Solana devnet \u4e0a\u8bf7\u6c42\u6d4b\u8bd5 NEON \u4ee3\u5e01\u3002"),(0,o.kt)("h4",{id:"\u901a\u8fc7ui\u8bf7\u6c42\u6d4b\u8bd5\u4ee3\u5e01-requesting-test-neon-tokens-via-ui"},"\u901a\u8fc7UI\u8bf7\u6c42\u6d4b\u8bd5\u4ee3\u5e01 (Requesting test NEON tokens via UI)"),(0,o.kt)("h5",{id:"\u6b65\u9aa41-step-1"},"\u6b65\u9aa41 (Step 1)"),(0,o.kt)("p",null,"Set up MetsMask in accordance with\xa0Setting up MetaMask",(0,o.kt)("br",{parentName:"p"}),"\n","\u6309\u7167\u8bbe\u7f6e MetaMask \u6765\u8bbe\u7f6e MetsMask"),(0,o.kt)("h5",{id:"\u6b65\u9aa42--step-2"},"\u6b65\u9aa42  (Step 2)"),(0,o.kt)("p",null,"Go to the page to request test tokens using the following\xa0",(0,o.kt)("a",{parentName:"p",href:"https://neonswap.live/#/get-tokens"},"link"),".  "),(0,o.kt)("h5",{id:"\u6b65\u9aa43-step-3"},"\u6b65\u9aa43 (Step 3)"),(0,o.kt)("p",null,"Connect your wallet:\n\u8fde\u63a5\u4f60\u7684\u94b1\u5305\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click button\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"CONNECT WALET"),(0,o.kt)("br",{parentName:"li"}),"\u70b9\u51fb",(0,o.kt)("inlineCode",{parentName:"li"},"\u8fde\u63a5\u94b1\u5305 (CONNECT WALET)"),"  ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.neon-labs.org/assets/images/connect_walet-96701c4d9b7f8c74d2a43d3187c03e75.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click button\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"CONNECT METAMASK"),(0,o.kt)("br",{parentName:"li"}),"\u70b9\u51fb",(0,o.kt)("inlineCode",{parentName:"li"},"\u8fde\u63a5METAMASK (CONNECT METAMASK)"),"  ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.neon-labs.org/assets/images/connect_metamask-22c2c11a9bc93315d1fed3f42b2c31a9.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the MetaMask window, select one or more accounts and click\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Next"),".",(0,o.kt)("br",{parentName:"li"}),"\u5728MetaMask\u7a97\u53e3, \u9009\u62e9\u4e00\u4e2a\u6216\u591a\u4e2a\u8d26\u53f7\uff0c\u7136\u540e\u70b9\u51fb\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"\u4e0b\u4e00\u6b65 (Next)"),".  ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.neon-labs.org/assets/images/metamask_next-45ca5fa4476c876883048b9e594c8549.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0421lick the\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Connect"),"\xa0button to confirm.",(0,o.kt)("br",{parentName:"li"}),"\u70b9\u51fb\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"\u8fde\u63a5 (Connect)"),"\xa0\u6309\u94ae\u786e\u8ba4\u3002  ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.neon-labs.org/assets/images/confirm_connection-999cda52dbe81e58221b76804345c0eb.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the form that appears, enter the number of requested tokens and click the button\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"GET TOKENS"),".",(0,o.kt)("br",{parentName:"li"}),"\u5728\u51fa\u73b0\u7684\u8868\u5355\u4e2d\uff0c\u8f93\u5165\u8bf7\u6c42\u4ee3\u5e01\u7684\u6570\u91cf\uff0c\u7136\u540e\u70b9\u51fb\u6309\u94ae",(0,o.kt)("inlineCode",{parentName:"li"},"\u83b7\u53d6\u4ee3\u5e01 (GET TOKENS)"),"\u3002  ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.neon-labs.org/assets/images/get_tokens-29f1896fd87b89ca64ea0d06183c4be3.png",alt:null})),(0,o.kt)("h4",{id:"\u901a\u8fc7-http-api-\u7aef\u70b9\u8bf7\u6c42\u6d4b\u8bd5\u4ee3\u5e01-requesting-test-neon-tokens-via-http-api-endpoints"},"\u901a\u8fc7 HTTP API \u7aef\u70b9\u8bf7\u6c42\u6d4b\u8bd5\u4ee3\u5e01 (Requesting test NEON tokens via HTTP API Endpoints)"),(0,o.kt)("p",null,"A client uses POST requests to send data to the server. Several endpoints are supported."),(0,o.kt)("p",null,"\u5ba2\u6237\u7aef\u4f7f\u7528 POST \u8bf7\u6c42\u5c06\u6570\u636e\u53d1\u9001\u5230\u670d\u52a1\u5668\u3002\u652f\u6301\u591a\u4e2a\u7aef\u70b9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"|------------------------------------------------------------------------------------------\n| Endpoint               | Workload    | Description\n|------------------------------------------------------------------------------------------\n| request_ping           | text        | Requests ping to check availability of the service\n| request_version        |             | Requests version of the service\n| request_neon_in_galans | JSON        | Requests NEON tokens, amount in galans (fractions)\n| request_neon           | JSON        | Requests NEON tokens\n| request_erc20          | JSON        | Requests ERC20 tokens\n|------------------------------------------------------------------------------------------\n")),(0,o.kt)("p",null,"Example of JSON workload:",(0,o.kt)("br",{parentName:"p"}),"\n","JSON\u8d1f\u8f7d\u793a\u4f8b:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{ "wallet": "0x4570e07200b6332989Dc04fA2a671b839D26eF0E", "amount": 1 }\n')),(0,o.kt)("p",null,"Example of ping request with\xa0",(0,o.kt)("strong",{parentName:"p"},"curl"),"\xa0utility:",(0,o.kt)("br",{parentName:"p"}),"\n","\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"curl"),"\u5b9e\u4f8b\u53d1\u9001ping\u8bf7\u6c42\u7684\u793a\u4f8b\uff1a  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -i -X POST -d 'Hello' 'http://localhost:3333/request_ping'\n")),(0,o.kt)("p",null,"Example of version request with\xa0",(0,o.kt)("strong",{parentName:"p"},"curl"),"\xa0utility:",(0,o.kt)("br",{parentName:"p"}),"\n","\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"curl"),"\u5b9e\u4f8b\u53d1\u9001 version \u8bf7\u6c42\u7684\u793a\u4f8b\uff1a  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -i -X POST 'http://localhost:3333/request_version'\n")),(0,o.kt)("p",null,"Example of NEON drop request with\xa0",(0,o.kt)("strong",{parentName:"p"},"curl"),"\xa0utility:",(0,o.kt)("br",{parentName:"p"}),"\n","\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"curl"),"\u5b9e\u4f8b\u53d1\u9001 NEON drop \u8bf7\u6c42\u7684\u793a\u4f8b\uff1a  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -i -X POST \\\n    -d \'{"wallet": "0x4570e07200b6332989Dc04fA2a671b839D26eF0E", "amount": 1}\' \\\n    \'http://localhost:3333/request_neon\'\n')),(0,o.kt)("h4",{id:"\u8bbe\u7f6e-configuration"},"\u8bbe\u7f6e (Configuration)"),(0,o.kt)("p",null,"The configuration file should be in TOML format.",(0,o.kt)("br",{parentName:"p"}),"\n","\u8bbe\u7f6e\u6587\u4ef6\u5e94\u8be5\u662fTOML\u683c\u5f0f\u3002  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},"|----------------------------------------------------------------------------------------------\n| Option                  | Description\n|----------------------------------------------------------------------------------------------\n| rpc.bind                | Local interface TCP address\n| rpc.port                | TCP port to listen\n| rpc.allowed_origins     | List of client URLs that can send requests\n| web3.enable             | Flag to on/off the entire web3 section\n| web3.rpc_url            | Ethereum network endpoint\n| web3.private_key        | Ethereum private key to support operations\n| web3.tokens             | List of available ERC20 token addresses\n| web3.max_amount         | Largest amount of ERC20 tokens to distribute with a single request\n| solana.enable           | Flag to on/off the entire solana section\n| solana.url              | Solana network endpoint\n| solana.commitment       | Solana client commitment level\n| solana.operator_keyfile | Solana keyfile to support operations\n| solana.evm_loader       | Address of the EVM Loader program\n| solana.max_amount       | Largest amount of NEONs to distribute with a single request\n|----------------------------------------------------------------------------------------------\n")),(0,o.kt)("p",null,"Example of the configuration file contents:",(0,o.kt)("br",{parentName:"p"}),"\n","\u8bbe\u7f6e\u6587\u4ef6\u5185\u5bb9\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[rpc]\nbind = "0.0.0.0"\nport = 3333\nallowed_origins = ["http://localhost"]\n\n[web3]\nenable = true\nrpc_url = "http://localhost:9090/solana"\nprivate_key = "0x0000000000000000000000000000000000000000000000000000000000000Ace"\ntokens = ["0x00000000000000000000000000000000CafeBabe",\n          "0x00000000000000000000000000000000DeadBeef"]\nmax_amount = 1000\n\n[solana]\nenable = true\nurl = "http://localhost:8899"\ncommitment = "processed"\nevm_loader = "EvmLoaderId11111111111111111111111111111111"\noperator_keyfile = "operator_id.json"\nmax_amount = 10\n')),(0,o.kt)("p",null,"The configuration file is optional and, if present, can be incomplete (default values or environment variables will be used in such cases)."),(0,o.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u662f\u53ef\u9009\u7684\uff0c\u5982\u679c\u5b58\u5728\uff0c\u53ef\u4ee5\u662f\u4e0d\u5b8c\u6574\u7684(\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5c06\u4f7f\u7528\u9ed8\u8ba4\u503c\u6216\u73af\u5883\u53d8\u91cf)\u3002"),(0,o.kt)("h4",{id:"\u73af\u5883\u53d8\u91cf-environment-variables"},"\u73af\u5883\u53d8\u91cf (Environment Variables)"),(0,o.kt)("p",null,"Environment variables, if present, override portions of the configuration.",(0,o.kt)("br",{parentName:"p"}),"\n","\u73af\u5883\u53d8\u91cf(\u5982\u679c\u5b58\u5728)\u4f1a\u8986\u76d6\u90e8\u5206\u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'|----------------------------------------------------------------------------------------------\n| Name                       | Overrides               | Value Example\n|----------------------------------------------------------------------------------------------\n| FAUCET_RPC_BIND            | rpc.bind                | `0.0.0.0`\n| FAUCET_RPC_PORT            | rpc.port                | `3333`\n| FAUCET_RPC_ALLOWED_ORIGINS | rpc.allowed_origins     | `["http://localhost"]`\n| FAUCET_WEB3_ENABLE         | web3.enable             | `true`\n| WEB3_RPC_URL               | web3.rpc_url            | `http://localhost:9090/solana`\n| WEB3_PRIVATE_KEY           | web3.private_key        | `0x00...0A`\n| NEON_ERC20_TOKENS          | web3.tokens             | `["0x00B", "0x00C"]`\n| NEON_ERC20_MAX_AMOUNT      | web3.max_amount         | `1000`\n| FAUCET_SOLANA_ENABLE       | solana.enable           | `true`\n| SOLANA_URL                 | solana.url              | `http://localhost:8899`\n| SOLANA_COMMITMENT          | solana.commitment       | `processed`\n| EVM_LOADER                 | solana.evm_loader       | `EvmLoaderId11111111111111111111111111111111`\n| NEON_OPERATOR_KEYFILE      | solana.operator_keyfile | `operator_id.json`\n| NEON_ETH_MAX_AMOUNT        | solana.max_amount       | `10`\n| NEON_LOG                   |                         | `json`\n| RUST_LOG                   |                         | `info`\n|----------------------------------------------------------------------------------------------\n')))}k.isMDXComponent=!0}}]);