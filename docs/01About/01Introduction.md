---
sidebar_position: 1
title: 导言 (Introduction)
---
*Neon EVM is an _[Ethereum virtual machine](https://ethereum.org/en/developers/docs/evm/)_ on Solana that enables dApp developers to use Ethereum tooling to scale and get access to liquidity on Solana.*

*Neon EVM 是Solana上的[以太坊虚拟机(EVM)](https://ethereum.org/en/developers/docs/evm/)，它使 dApp 开发人员能够使用以太坊工具来扩展和获取 Solana 上的流动性。*


### 概述(Abstract)

Neon EVM is a tool that allows Ethereum-like transactions to be processed on [Solana](https://docs.solana.com/introduction), taking full advantage of the functionality native to Solana, including the ability to execute transactions in parallel. As such, Neon EVM allows dApps to operate with the low gas fees, high transaction speed, and high throughput of Solana, while also offering access to the growing Solana market.

Neon EVM 是一个允许在  [Solana](https://docs.solana.com/introduction) 上处理类似以太坊交易的工具，它充分利用包括并行执行交易在内的(各种) Solana 原生功能。因此，Neon EVM 允许 dApp 以 Solana 的低 gas 费用、高交易速度和高吞吐量运行，同时还可以进入不断增长的 Solana 市场。

The Ethereum state is represented by a Merkle-Patricia Trie that stores key-value data for all smart contracts, and smart contracts written in Solidity do not have separate references to shared data and contracts’ code. Therefore, these smart contracts have to be executed in sequence to ensure deterministic behavior. This limits a throughput: highly optimized blockchains with EVM are capable of processing up to a maximum of 1,500 transactions per second (TPS).



以太坊状态由存储所有智能合约键值数据的MPT(Merkle-Patricia Trie)表示，而用Solidity编写的智能合约并无对共享数据及合约代码的单独引用。因此，这些智能合约必须按顺序执行以保证行为的确定性。这样一来，链上的吞吐量就被限制了：高度优化的EVM区块链能购达到的(吞吐量)最多1,500 TPS。

Solana, however, is designed to support massive scaling of decentralized applications, with a maximum throughput of more than 50,000 TPS. To take full advantage of Solana's functionality, Neon EVM is built as a smart contract of Solana. This flexibility also ensures that: Neon EVM can be updated with ease when new Ethereum functionality is introduced.

但是，Solana为了去中心化应用程序的大规模扩展而设计，最大吞吐量超过了50,000 TPS。为了充分利用Solan的功能，Neon EVM作为Solana的智能合约应运而生。这也确保了更新方面的灵活性：当新的以太坊功能出现时，Neon EVM(也)可以轻松更新。

In the case of Neon EVM, Ethereum-like transactions are wrapped into Solana transactions by an intermediary proxy server, and sent to Neon EVM, which executes them in parallel. To facilitate this parallel execution of smart contracts, Neon EVM ensures that each contract keeps its data in its own Solana storage, and account balances used to pay for Neon transactions are also separated.

在Neon EVM中，任何人都可以运行的中间代理服务器将类以太坊的交易打包到Solana交易中，并将它们发送到并行执行它们的Neon EVM。为了确保智能合约(能)并行执行，Neon EVM采取了多种策略。特别来说，每个合约都将其数据保存在各自的Solana存储中，而用于支付Neon交易的账户，余额也是分开的。

The solution allows any Ethereum application to be run on Solana without any changes to its codebase, including Uniswap, SushiSwap, 0x, and MakerDAO. All key Ethereum dApp tools can also work on Solana, including Solidity, MetaMask, Remix, and Truffle.

该解决方案允许任何以太坊应用在Solana上运行，而无需更改其代码库，包括 UniSwap、SushiSwap、0x 和 Maker DAO。以太坊dApp的所有关键工具(也)都可以在Solana上运行，包括 Solidity、Metamask、Remix、Truffle等。

Neon EVM is best suited to developers who want to enjoy a first-mover advantage and reach new customers on Solana, or those who want to scale with the low gas fees and high throughput that Solana provides. It is also good for developers looking to tap into liquidity on Solana.

希望在Solana上享受先发优势并接触新用户的开发人员是最适合Neon EVM的。或者是希望通过Solana低gas费用和高吞吐量进行扩展的开发人员。对那些希望在Solana上挖掘流动性的开发人员来说，也很不错。

### 为什么选择Neon(Why Neon EVM)

Ethereum is set to remain booming blockchain ecosystem. The number of active dApps on Ethereum is hovering above 300 and the number of active users of these dApps is close to 6 million, with the number of transactions on the rise. Ethereum’s popularity is not only down to its processing of smart contracts, but also its sophisticated infrastructure for application development.

以太坊肯定会继续留在蓬勃发展的区块链生态系统中。以太坊上活跃的 dApp 数一直保持在300以上，并且这些dApp的活跃用户数接近600万，交易量也呈上升趋势。以太坊的流行不仅归功于其对智能合约的处理，它用于应用开发的复杂基础设施也有功劳。

Solana is one of the most technically advanced and innovative blockchains offering low gas fees and high throughput of transactions. Among these innovations is its Proof-of-Stake consensus system, which is reinforced via a Proof-of-History protocol, a transaction parallelization technology that optimizes resources and ensures that Solana can scale horizontally across GPUs and SSDs, along with an optimized mempool system that speeds up throughput.

Solana是技术最先进的区块链之一，得益于技术创新，它能提供低gas费和高交易吞吐量。这些创新包括其股权/质押证明共识系统，该系统通过历史证明协议得到加强，这是一种交易并行化技术，与加快吞吐量的优化内存池系统一起，可以充分利用资源并使得Solana可以跨GPU和SSD 来进行水平(横向)扩展。

Neon EVM is a cross-chain solution that allows dApp developers to access the advantages of Solana to expand their services: to offer new products like arbitrage or high-frequency trading, grow their user base, and decrease costs where possible, including gas fees. Neon EVM enables full compatibility with Ethereum on Solana.

Neon EVM是一种跨链解决方案，允许dApp开发人员利用Solana的优势来扩展他们的服务：提供套利或高频交易等新产品，扩大用户基数，同时尽可能降低成本，包括gas费。它使得Solana与以太坊完全兼容。
