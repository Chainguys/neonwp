---
sidebar_position: 3
title:  我如何使用(How can I use Neon?)
---

- [我如何使用部署在Neon EVM 上的dApps?(How do I start using dApps deployed on Neon EVM?)](#我如何使用部署在neon-evm-上的dappshow-do-i-start-using-dapps-deployed-on-neon-evm)
- [一个Neon EVM 用户在开始使用时需要什么工具?(What tools does a Neon EVM user need to start using the Neon EVM?)](#一个neon-evm-用户在开始使用时需要什么工具what-tools-does-a-neon-evm-user-need-to-start-using-the-neon-evm)
- [运营方需要什么工具来运行Neon EVM?(What tools does a Neon EVM operator need to run the Neon EVM?)](#运营方需要什么工具来运行neon-evmwhat-tools-does-a-neon-evm-operator-need-to-run-the-neon-evm)
- [用户如何为使用Neon EVM 上部署的dApps付费?(How do Neon EVM users pay for using dApps deployed on Neon EVM?)](#用户如何为使用neon-evm-上部署的dapps付费how-do-neon-evm-users-pay-for-using-dapps-deployed-on-neon-evm)
- [如果没有Neon EVM运营方愿意接收我的Neon交易怎么办?(What happens if no Neon EVM operators accept my requested Neon transaction?)](#如果没有neon-evm运营方愿意接收我的neon交易怎么办what-happens-if-no-neon-evm-operators-accept-my-requested-neon-transaction)
- [我如何在代理网络转移部署在代理上的合约代币(How do I transfer the token contracts deployed on the proxy network to my Phantom wallet?)](#我如何在代理网络转移部署在代理上的合约代币how-do-i-transfer-the-token-contracts-deployed-on-the-proxy-network-to-my-phantom-wallet)

#### 我如何使用部署在Neon EVM 上的dApps?(How do I start using dApps deployed on Neon EVM?)

To start using a dApp deployed on Neon EVM as a user, you should have an account within with a balance in NEON.

要以用户身份开始使用部署在 Neon EVM 上的 dApp，您应该有一个拥有NEON余额的账户。

#### 一个Neon EVM 用户在开始使用时需要什么工具?(What tools does a Neon EVM user need to start using the Neon EVM?)

As a user, all you need is a MetaMask wallet pointed to the Neon network. For a description of how to set up this configuration, check out this [quick tutorial](https://www.youtube.com/watch?v=ry2yGhWmGRw).

作为用户，您只需要一个指向 Neon 网络的 MetaMask 钱包。有关如何设置此配置的说明，请查看此[快速教程](https://www.youtube.com/watch?v=ry2yGhWmGRw)。

#### 运营方需要什么工具来运行Neon EVM?(What tools does a Neon EVM operator need to run the Neon EVM?)

A Neon EVM operator needs the following:  
Neon EVM运营方需要以下工具：

- The Neon Web3 Proxy. A dedicated RPC Solana node for Operators is highly desirable.  
   Neon Web3代理。最好是运营方专用 RPC Solana 节点。

- A Solana account (wallet) funded with SOL tokens.  
   有充足SOL代币的Solana钱包

See details [here](#_运营方简要说明(Quick_Operator's_Guide)).

细节可以参考[此处](#_运营方简要说明(Quick_Operator's_Guide))

#### 用户如何为使用Neon EVM 上部署的dApps付费?(How do Neon EVM users pay for using dApps deployed on Neon EVM?)

A Neon EVM user would simply transfer funds to the address of the dApp (contract).

Neon EVM用户只需言将资金简单转账给dApps(合约)地址。

#### 如果没有Neon EVM运营方愿意接收我的Neon交易怎么办?(What happens if no Neon EVM operators accept my requested Neon transaction?)

In this scenario, a Neon EVM user will have two options:  
在这个场景下，有两个选项：

1. Increase the fee to be paid for the successful execution of their transaction.  
   增加为成功执行交易而支付的费用。

2. Perform the Neon transaction on their own.  
   自行执行 Neon 交易

#### 我如何在代理网络转移部署在代理上的合约代币(How do I transfer the token contracts deployed on the proxy network to my Phantom wallet?)

Solana wallets do not work with Neon EVM. You need to use MetaMask. In the future SOL/SPL tokens will be available in MetaMask.

Solana 钱包不适用于 Neon EVM。您需要使用 MetaMask。未来 SOL/SPL 代币将在 MetaMask 中提供。  
