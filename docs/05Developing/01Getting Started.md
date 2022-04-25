---
sidebar_position: 1
title: 准备开始 (Getting Started)
---

The purpose of this guide is to familiarize you with the structure of Neon EVM, and to provide step-by-step instructions to set up your local Neon EVM development environment.

本手册/说明的目的是助您熟悉 Neon EVM 的架构，并提供设置本地 Neon EVM 开发环境。

### 设置开发环境(Setting up development environment)

As a developer, you should begin by exploring the Neon EVM framework and setting up your local development environment. Depending on your purposes, there are several ways to do it:

作为开发人员，您应该首先探索 Neon EVM 框架并设置本地开发环境。根据你的目标，有以下集中方法可用：

[🔘 Choosing a Neon Proxy](../05Developing/02Setting%20up%20Environment/01Choosing%20a%20Neon%20Proxy) --- Describes how to connect to an existing Neon Proxy.  
[选择 Neon 代理](../05Developing/02Setting%20up%20Environment/01Choosing%20a%20Neon%20Proxy) --- 描述如何连接到现有的 Neon 代理。

[🔘 Connecting to the Neon Proxy](../05Developing/02Setting%20up%20Environment/02Connecting%20to%20the%20Neon%20Proxy) --- Describes how to connect to the Solana cluster via a local or remote proxy server.  
[连接到 Neon 代理](../05Developing/02Setting%20up%20Environment/02Connecting%20to%20the%20Neon%20Proxy) --- 描述如何通过本地或远程代理服务器连接到Solana 集群。

[🔘 Setting up a local Solana cluster](../05Developing/02Setting%20up%20Environment/03Setting%20Up%20the%20Local%20Neon%20EVM%20Environment) --- Describes how to install, configure, and test the local Solana cluster with Neon EVM onboard.  
[设置本地 Solana 集群](../05Developing/02Setting%20up%20Environment/03Setting%20Up%20the%20Local%20Neon%20EVM%20Environment) --- 描述如何使用板载 Neon EVM 安装、配置和测试本地 Solana 集群。

### 部署dapp (Deploying dApps)

[🔘 Using Remix](../05Developing/03Deploying%20dApps/01iUsing%20Remix) --- Example of deploying smart contracts using Remix.  
[使用 Remix](../05Developing/03Deploying%20dApps/01iUsing%20Remix) --- 使用 Remix 部署智能合约的示例。

[🔘 Using Truffle](../05Developing/03Deploying%20dApps/02Connecting%20to%20the%20Neon%20Proxy) --- Example of deploying smart contracts using Truffle.  
[使用 Truffle](../05Developing/03Deploying%20dApps/02Connecting%20to%20the%20Neon%20Proxy) --- 使用 Truffle 部署智能合约的示例。

[🔘 Using Hardhat](../05Developing/03Deploying%20dApps/03Using%20Hardhat) --- Example of deploying smart contracts using Hardhat.  
[使用 Hardhat](../05Developing/03Deploying%20dApps/03Using%20Hardhat)  --- 使用 Hardhat 部署智能合约的示例。

### Neon EVM架构 (Neon EVM Architecture)

[🔘 Ethereum and Solana capabilities in a single solution](../09Architecture/02Ethereum%20and%2002Solana%20Capabilities%20in%20a%20single%20Solution) --- Describes a unique solution that allows Ethereum users to use the key features of Solana and vice versa.  
[以太坊和 Solana 性能的统一(打包)解决方案](../09Architecture/02Ethereum%20and%2002Solana%20Capabilities%20in%20a%20single%20Solution)---描述一个独特的，允许以太坊用户使用 Solana 关键功能的解决方案，反之亦然。

[🔘 Overview of Neon EVM architecture](../09Architecture/01Neon%20EVM%20Architecture%20Overview) --- Describes the architectural solutions built into Neon EVM that enable fast transaction processing for Ethereum users.  
[Neon EVM 架构一览](../09Architecture/01Neon%20EVM%20Architecture%20Overview)---描述 Neon EVM 内置的，可让以太坊用户实现快速交易处理的架构解决方案

### 基本话题 (Fundamental Topics)

If you are new to Neon EVM development, we recommend starting from the very beginning and moving forward in order through each of the topics.

[🔘 Web2 versus Web3](../09Architecture/04coreaspects/07Web3%20concept)--- Describes the fundamental differences between Web2 and Web3.  
[Web2 对 Web3](../09Architecture/04coreaspects/07Web3%20concept) --- 描述 Web2 和 Web3 之间的根本区别。

[🔘 Ethereum account](../09Architecture/04coreaspects/07Web3%20concept) --- An entity with an ETH balance that can send transactions on Ethereum.  
[以太坊账户](../09Architecture/04coreaspects/01Ethereum%20account) ------拥有ETH余额的实体/账户，可以在以太坊上发送交易。

[🔘 Ethereum transaction](../09Architecture/04coreaspects/06Ethereum%20transaction) --- A cryptographically signed instruction from an account.  
[以太坊交易](../09Architecture/04coreaspects/06Ethereum%20transaction)------来自账户的加密签名指令。

[🔘 Block](../09Architecture/04coreaspects/02Block) --- A special structure for recording a group of transactions in blockchain systems.  
[区块](../09Architecture/04coreaspects/02Block) ------区块链系统中记录一组交易的特殊结构。

[🔘 Gas](../09Architecture/04coreaspects/03gas) --- Computational power represented in tokens. Required to process transactions.  
	[Gas](../09Architecture/04coreaspects/03gas)------以代币表示的算力。处理交易时必须(使用)。