---
sidebar_position: 1
title: 什么是Neon?(What is Neon?)
---

- [什么是Neon(What is Neon?)](#什么是neonwhat-is-neon)

- [什么是Neon Web3代理?(What is the Neon Web3 Proxy?)](#什么是neon-web3代理what-is-the-neon-web3-proxy)

- [Neon的主要角色是什么?(What are the main roles in Neon?)](#neon的主要角色是什么what-are-the-main-roles-in-neon)

- [什么是ERC-20/SPL封装器?(What is the ERC-20/SPL wrapper?)](#什么是erc-20spl封装器what-is-the-erc-20spl-wrapper)

- [NFT支持?(What about the NFT support ERC-721 and ERC-1155?)](#nft支持what-about-the-nft-support-erc-721-and-erc-1155)

- [ERC-20/SPL 跨链桥是什么(What is the ERC-20/SPL bridge?)](#erc-20spl-跨链桥是什么what-is-the-erc-20spl-bridge)

#### 什么是Neon(What is Neon?)

Neon is a smart contract on Solana that was designed to bring EVM (Ethereum Virtual Machine) compatibility to Solana. Neon enables the use of Ethereum dApps and tools on Solana without any reconfiguration.

Neon 是 Solana 上的智能合约，旨在为 Solana 带来 EVM(以太坊虚拟机)兼容性。 Neon 无需重新配置即可在 Solana 上使用以太坊 dApps 和工具。

#### 什么是Neon Web3代理?(What is the Neon Web3 Proxy?)

The Neon Web3 Proxy allows users to access Solana via the existing Ethereum app front end. On the back end, it wraps a Neon transaction into a Solana transaction. Then the Proxy sends the Solana transaction to a Solana cluster and the Neon EVM program executes the Neon transaction on-chain.

Neon Web3 代理使得用户通过现有的以太坊应用前端就可访问 Solana。在后端，它将 Neon 交易封装到 Solana 交易中。然后代理将 Solana 交易发送到 Solana 集群，Neon EVM 程序在链上执行 Neon 交易。

#### Neon的主要角色是什么?(What are the main roles in Neon?)

**Neon user**: Any account in Neon EVM with a non-zero balance in Neon tokens (later NEON/ETH/ERC-20). Neon users order Ethereum-like transactions that are executed via Neon EVM program on Solana.

**Neon用户**: Neon EVM 中Neon代币余额不为零(之后是NEON/ETH/ERC-20)的任何账户。 Neon 用户订购通过 Solana 上的 Neon EVM 程序执行的类以太坊的交易。

**Neon client**: An application with EVM bytecode (Solidity, Vyper, etc.) loaded into Neon. The application generates a Neon transaction according to Ethereum rules and sends it to Neon EVM via the Web3 Proxy.

**Neon客户端**: 将 EVM 字节码(Solidity、Vyper 等)加载到 Neon 中的应用。该应用根据以太坊规则生成 Neon 交易，并通过 Web3 代理发送到 Neon EVM

**Neon operator**: Anyone who operates a Neon Web3 Proxy. Operators are compensated by users in Neon tokens (later NEON/ETH/ERC-20). Operators must maintain SOL tokens as payment to Neon EVM and Solana validators for the execution of Neon transactions. Operators receive a fee from Neon users for finalizing the executions of Neon transactions.

**Neon运营方**:任何运营 Neon Web3 代理的人。运营方由用户以 Neon 代币(之后是 NEON/ETH/ERC-20)补偿。运营方必须维护 SOL 代币作为Neon EVM 和 Solana 验证者执行 Neon 交易的支付手段。运营方想 Neon 用户收取费用，用于完成 Neon 交易的执行。

#### 什么是ERC-20/SPL封装器?(What is the ERC-20/SPL wrapper?)

The ERC-20/SPL wrapper is the implementation of the ERC-20 interface for SPL tokens. Its purpose is to ensure the interaction of Solana applications with Neon EVM contracts. The original ERC-20 tokens are "wrapped" in the SPL tokens so that they can operate with Solana. This wrapper can also be used to transfer SOL/SPL tokens using Ethereum wallets such as MetaMask.

ERC-20/SPL 封装器是ERC-20 对SPL 代币接口的实现。其目的是确保 Solana 应用程序与 Neon EVM 合约的交互。原始 ERC-20 代币被“封装”在 SPL 代币中，以便它们可以与 Solana 一起操作。该封装器还可用于使用 MetaMask 等以太坊钱包转移 SOL/SPL 代币。

#### NFT支持?(What about the NFT support ERC-721 and ERC-1155?)

NFTs (ERC-721 and ERC-1155) aren't supported right now but will be supported in the future.

目前不支持 NFT(ERC-721 和 ERC-1155)，但将来会支持。

#### ERC-20/SPL 跨链桥是什么(What is the ERC-20/SPL bridge?)

Say, for example, you have a dApp on Ethereum. This dApp has an ERC-20 contract with its own logic of token minting, and you want to deploy it on Neon EVM.

举例来说，你在以太坊上有一个 dApp。这个 dApp 有一个 ERC-20 合约，它有自己的铸币逻辑，而你想将它部署在 Neon EVM 上。

The dApp tokens will be available to other Solidity contracts on Neon EVM, but they will not exists for Solana programs. The ERC-20/SPL bridge will allow you to transfer such tokens from an ERC-20 contract to SPL token accounts.

dApps 代币将可用于 Neon EVM 上的其他 Solidity 合约，但不适用于 Solana 程序。 ERC-20/SPL 桥将允许您将此类代币从 ERC-20 合约转移到 SPL 代币账户。