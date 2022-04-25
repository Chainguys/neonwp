---
sidebar_position: 1
title: 选择一个Neon代理 (Choosing a Neon Proxy)
---

*This guide describes how to choose a Neon proxy to send a transaction to Solana.*

*本问介绍如何选择 Neon 代理向 Solana 发送交易。*

Before sending a transaction to Neon EVM, a user can choose an operator the most acceptable for them to perform the transaction. The operator is not chosen directly, but through the proxies they serves.

在向 Neon EVM 发送交易之前，用户可以选择他们最能接受的运营方来执行交易。运营方不是直接选择的，而要通过他们服务的代理。

The Neon EVM provides users with the [table](/08env/02Neon%20Proxy%20RPC%20Endpoints) containing [RPC](/01About/02Terminology#远程过程调用remote-procedure-call--rpc) URLs of all available proxies, each served by a separate operator. Each URL corresponds to the operator's public key, which they uses to sign and send a transaction to Neon EVM.

Neon EVM 为用户提供包含所有可用代理的 [RPC](/01About/02Terminology#远程过程调用remote-procedure-call--rpc) URLs 的[总表](/08env/02Neon%20Proxy%20RPC%20Endpoints)，每个代理由一个单独的运营方提供服务。每个 URL 都对应一个运营方的公钥，他们用它来签名并将其发送到 Neon EVM。

The proxy interacts with one EVM loader, which can be deployed in different Solana chains. This interaction allows the proxy to be used on different networks (Testnet, Devnet, Mainnet Beta).

代理与一个 EVM 加载器交互，可以部署在不同的 Solana 链中。这种交互使得代理在不同的网络(Testnet、Devnet、Mainnet Beta)上使用。

>
**Note:  
注意:**  
Currently, the table contains just a list of URLs of proxies using in [MVP](/01About/02Terminology#最小可行性产品minimum-viable-product-mvp) on Mainnet. With the development of Neon EVM, this table will be supplemented with statistical indicators evaluating the operator's service and the capabilities of their proxy. A user will choose an operator based on these indicators. Depending on the resources (proxy capabilities) provided by operators, the "gas price" will be different for each operator. Hence, the transaction cost will also be differ and depend on the RPC URL selected from the [table](/08env/02Neon%20Proxy%20RPC%20Endpoints).  
>
当前，该总表仅包含在主网上 [最小可行性产品](/01About/02Terminology#最小可行性产品minimum-viable-product-mvp)中使用的代理 URL 列表。随着 Neon EVM 的发展，该总表将补充评估运营方服务及其代理能力的统计指标。用户将根据这些指标选择运营方。根据运营发个提供的资源(代理能力)，每个运营方的“gas 价格”会有所不同。因此，交易成本也会因从[总表](/08env/02Neon%20Proxy%20RPC%20Endpoints)中选择不同的 RPC URL而变化。  
>
For instance. If a transaction does not require huge resources, a user can choose the URL with the lowest "gas price", that is, choose a proxy with limited resources. To perform important operations, it will make sense for the user to choose URL with the higher "gas price", that is, to choose the operator providing the highest quality service.  
>
例如，如果一笔交易不需要大量资源，用户可以选择“gas 价格”最低的 URL，即选择资源有限的代理。用户在进行重要操作时，选择“gas 价格”较高的 URL 则更为明智，即选择提供最高质量服务的运营方。  
>
The table data will be provided to users in real time.    
表格数据将会实时提供给用户。

To connect to a proxy using Metamask/Truffle follow the instructions below.

请按照以下说明使用 Metamask/Truffle 连接到代理。

#### 用MetaMask连接到代理 (Connecting to a proxy using MetaMask)

To connect to a proxy using Metamask follow the instruction [Installing and setting up MetaMask](/02Wallets/01settingup). You need to specify the `New RPC URL` field selected from the [table](/08env/02Neon%20Proxy%20RPC%20Endpoints), and also specify the `Chain ID`.

要使用 Metamask 连接到代理，请按照[安装和设置MetaMask](/02Wallets/01settingup)的说明进行操作。您需要指定从[总表](/08env/02Neon%20Proxy%20RPC%20Endpoints)中选择的 `New RPC URL` 字段，还需要指定`Chain ID`。

#### 用Truffle 连接到代理 (Connecting to a proxy using Truffle)

To connect to a proxy using Truffle follow the instruction [Debugging Contracts via Truffle](/05Developing/03Deploying%20dApps/02Using%20Truffle). You need to configure `truffle-config.js` by setting the HDWalletProvider library to the RPC URL selected from the [table](/08env/02Neon%20Proxy%20RPC%20Endpoints).

要使用 Truffle 连接到代理，请按照说明[通过Truffle调试合约](/05Developing/03Deploying%20dApps/02Using%20Truffle)。您需要通过将 HDWalletProvider 库设置为从[总表](/08env/02Neon%20Proxy%20RPC%20Endpoints)中选择的 RPC URL的方式，来配置 `truffle-config.js`。

#### 用Hardhat 连接到代理 (Connecting to a Proxy using Hardhat)

To connect to a proxy using Hardhat, follow the instructions Using Hardhat. You need to configure hardhat.config.js by setting the URL, network_id/chainId to RPC URL selected from the [table](/08env/02Neon%20Proxy%20RPC%20Endpoints).

要使用 Hardhat 连接到代理，请按照说明通过 Hardhat进行操作。您需要通过将 URL、network_id/chainId 设置为从[总表](/08env/02Neon%20Proxy%20RPC%20Endpoints)中选择的 RPC URL的方式，来配置 `hardhat.config.js`。