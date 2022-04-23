---
sidebar_position: 5
title: 工作量证明(Proof-of-Work)
---

**Proof-of-work (PoW)** is a consensus protocol (proof-of-work completion) that allows the decentralized Ethereum network to come to consensus, or agree on things like account balances and the order of transactions. This prevents users "double spending" their coins and ensures that the Ethereum chain is incredibly difficult to attack or overwrite.

**工作量证明 (PoW)** 是一种共识协议(工作量证明完成)，它使得去中心化的以太坊网络达成共识，或就账户余额和交易顺序等达成一致。这可以防止用户“双花”其代币，并确保以太坊极难被攻击或覆盖。

#### 以太坊的PoW是怎么做的?(How does Ethereum's PoW work?)

Ethereum transactions are processed into blocks. Each block has a:

以太坊的交易经过处理嵌入区块，每个区块都有：

- **Block difficulty** – for example: 3,092,324,262,183,265  
   **区块难度** – 举例：3,092,324,262,183,265

- **MixHash** – for example: 0xf83b13079807244144bca881b07a6a09705d9f2f39a3cdf3bee29a665c5ac8bd  
   **混合哈希**– 举例: 0xf83b13079807244144bca881b07a6a09705d9f2f39a3cdf3bee29a665c5ac8bd

- **Nonce** – for example: 0x4fb3d26bd3ee432b  
   **随机数** – 举例: 0x4fb3d26bd3ee432b

This block data is directly related to PoW.  
这些区块数据和PoW直接相关.

#### 与PoS比较(Compared to PoS)

**PoW**

Cryptocurrency mining requires expensive equipment, special knowledge, and labor. Most cryptocurrencies operate on the PoW protocol.

加密货币挖矿需要昂贵的设备、专门的知识和劳动力。大多数加密货币都在 PoW 协议上运行。

**PoS**

The number of coins in the user's account or on lease reflects their mining power. The more coins a user has, the higher their chances of creating the next block and, accordingly, receiving a reward from the transaction fee.

用户账户中或出借中的代币数量反映了他们的挖矿能力。用户拥有的代币越多，他们创建下一个区块的机会就越大，并因此从交易费用中获得奖励。

>More details  
>更多细节
>
>[PROOF of WORK](https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/)
>
>[Proof of work](https://en.wikipedia.org/wiki/Proof_of_work)