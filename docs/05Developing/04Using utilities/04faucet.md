---
sidebar_position: 4
title: 水龙头 (Faucet)
---

Using Faucet you can request Test NEON tokens on Solana devnet.  
使用 水龙头 (Faucet)，您可以在 Solana devnet 上请求测试 NEON 代币。


#### 通过UI请求测试代币 (Requesting test NEON tokens via UI)

##### 步骤1 (Step 1)

Set up MetsMask in accordance with Setting up MetaMask  
按照设置 MetaMask 来设置 MetsMask

##### 步骤2  (Step 2)

Go to the page to request test tokens using the following [link](https://neonswap.live/#/get-tokens).  

##### 步骤3 (Step 3)

Connect your wallet:
连接你的钱包：

- Click button `CONNECT WALET`  
   点击`连接钱包 (CONNECT WALET)`  

![](https://docs.neon-labs.org/assets/images/connect_walet-96701c4d9b7f8c74d2a43d3187c03e75.png)

- Click button `CONNECT METAMASK`  
   点击`连接METAMASK (CONNECT METAMASK)`  

![](https://docs.neon-labs.org/assets/images/connect_metamask-22c2c11a9bc93315d1fed3f42b2c31a9.png)

- In the MetaMask window, select one or more accounts and click `Next`.  
   在MetaMask窗口, 选择一个或多个账号，然后点击 `下一步 (Next)`.  

![](https://docs.neon-labs.org/assets/images/metamask_next-45ca5fa4476c876883048b9e594c8549.png)

- Сlick the `Connect` button to confirm.    
   点击 `连接 (Connect)` 按钮确认。  

![](https://docs.neon-labs.org/assets/images/confirm_connection-999cda52dbe81e58221b76804345c0eb.png)

- In the form that appears, enter the number of requested tokens and click the button `GET TOKENS`.  
   在出现的表单中，输入请求代币的数量，然后点击按钮`获取代币 (GET TOKENS)`。  

![](https://docs.neon-labs.org/assets/images/get_tokens-29f1896fd87b89ca64ea0d06183c4be3.png)

#### 通过 HTTP API 端点请求测试代币 (Requesting test NEON tokens via HTTP API Endpoints)

A client uses POST requests to send data to the server. Several endpoints are supported.

客户端使用 POST 请求将数据发送到服务器。支持多个端点。

```
|------------------------------------------------------------------------------------------
| Endpoint               | Workload    | Description
|------------------------------------------------------------------------------------------
| request_ping           | text        | Requests ping to check availability of the service
| request_version        |             | Requests version of the service
| request_neon_in_galans | JSON        | Requests NEON tokens, amount in galans (fractions)
| request_neon           | JSON        | Requests NEON tokens
| request_erc20          | JSON        | Requests ERC20 tokens
|------------------------------------------------------------------------------------------
```

Example of JSON workload:  
JSON负载示例:  

```
{ "wallet": "0x4570e07200b6332989Dc04fA2a671b839D26eF0E", "amount": 1 }
```

Example of ping request with **curl** utility:  
使用**curl**实例发送ping请求的示例：  

```
curl -i -X POST -d 'Hello' 'http://localhost:3333/request_ping'
```

Example of version request with **curl** utility:  
使用**curl**实例发送 version 请求的示例：  

```
curl -i -X POST 'http://localhost:3333/request_version'
```

Example of NEON drop request with **curl** utility:  
使用**curl**实例发送 NEON drop 请求的示例：  

```
curl -i -X POST \
    -d '{"wallet": "0x4570e07200b6332989Dc04fA2a671b839D26eF0E", "amount": 1}' \
    'http://localhost:3333/request_neon'
```


#### 设置 (Configuration)

The configuration file should be in TOML format.  
设置文件应该是TOML格式。  

```toml
|----------------------------------------------------------------------------------------------
| Option                  | Description
|----------------------------------------------------------------------------------------------
| rpc.bind                | Local interface TCP address
| rpc.port                | TCP port to listen
| rpc.allowed_origins     | List of client URLs that can send requests
| web3.enable             | Flag to on/off the entire web3 section
| web3.rpc_url            | Ethereum network endpoint
| web3.private_key        | Ethereum private key to support operations
| web3.tokens             | List of available ERC20 token addresses
| web3.max_amount         | Largest amount of ERC20 tokens to distribute with a single request
| solana.enable           | Flag to on/off the entire solana section
| solana.url              | Solana network endpoint
| solana.commitment       | Solana client commitment level
| solana.operator_keyfile | Solana keyfile to support operations
| solana.evm_loader       | Address of the EVM Loader program
| solana.max_amount       | Largest amount of NEONs to distribute with a single request
|----------------------------------------------------------------------------------------------
```
Example of the configuration file contents:  
设置文件内容示例：

```
[rpc]
bind = "0.0.0.0"
port = 3333
allowed_origins = ["http://localhost"]

[web3]
enable = true
rpc_url = "http://localhost:9090/solana"
private_key = "0x0000000000000000000000000000000000000000000000000000000000000Ace"
tokens = ["0x00000000000000000000000000000000CafeBabe",
          "0x00000000000000000000000000000000DeadBeef"]
max_amount = 1000

[solana]
enable = true
url = "http://localhost:8899"
commitment = "processed"
evm_loader = "EvmLoaderId11111111111111111111111111111111"
operator_keyfile = "operator_id.json"
max_amount = 10
```

The configuration file is optional and, if present, can be incomplete (default values or environment variables will be used in such cases).

配置文件是可选的，如果存在，可以是不完整的(在这种情况下将使用默认值或环境变量)。

#### 环境变量 (Environment Variables)

Environment variables, if present, override portions of the configuration.  
环境变量(如果存在)会覆盖部分配置。

```
|----------------------------------------------------------------------------------------------
| Name                       | Overrides               | Value Example
|----------------------------------------------------------------------------------------------
| FAUCET_RPC_BIND            | rpc.bind                | `0.0.0.0`
| FAUCET_RPC_PORT            | rpc.port                | `3333`
| FAUCET_RPC_ALLOWED_ORIGINS | rpc.allowed_origins     | `["http://localhost"]`
| FAUCET_WEB3_ENABLE         | web3.enable             | `true`
| WEB3_RPC_URL               | web3.rpc_url            | `http://localhost:9090/solana`
| WEB3_PRIVATE_KEY           | web3.private_key        | `0x00...0A`
| NEON_ERC20_TOKENS          | web3.tokens             | `["0x00B", "0x00C"]`
| NEON_ERC20_MAX_AMOUNT      | web3.max_amount         | `1000`
| FAUCET_SOLANA_ENABLE       | solana.enable           | `true`
| SOLANA_URL                 | solana.url              | `http://localhost:8899`
| SOLANA_COMMITMENT          | solana.commitment       | `processed`
| EVM_LOADER                 | solana.evm_loader       | `EvmLoaderId11111111111111111111111111111111`
| NEON_OPERATOR_KEYFILE      | solana.operator_keyfile | `operator_id.json`
| NEON_ETH_MAX_AMOUNT        | solana.max_amount       | `10`
| NEON_LOG                   |                         | `json`
| RUST_LOG                   |                         | `info`
|----------------------------------------------------------------------------------------------
```
