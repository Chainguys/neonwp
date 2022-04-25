---
sidebar_position: 2
title: 区块(Block)
---

_Blocks are batches of transactions with a hash of the previous block in the chain. Hashes link blocks together (in a chain) because they are cryptographically derived from the block data. One change in any block in history will invalidate all the following blocks. This feature protects the blocks in a chain from tampering._

_区块是具有链中前一个块哈希的一批交易。哈希将区块链接在一起(在链中)，因为它们是从区块数据中以加密方式产生的。历史上任何区块的一次改变都会使其下所有区块无效。此功能可保护链中的区块不被篡改。_

_To preserve the transaction history, blocks are strictly ordered (every new block created contains a reference to its parent block), and transactions within blocks are strictly ordered too._

_为了保存交易历史，区块是严格排序的(创建的每个新块都包含对其父块的引用)，并且块内的交易也是严格排序的。_

#### 区块里有什么?(What is in a block?)

- `Timestamp` – the time when the block was mined.  
   `时间戳` – 区块被挖到的时间。

- `Block number` – the length of the blockchain in blocks.  
   `区块号` – 区块链中区块的长度。  

- `Difficulty` – the effort required to mine the block.  
   `难度` – 挖到区块所需的工作量。  

- `MixHash` – a unique identifier for that block.  
   `混合哈希` – 某个块的唯一标识符。  

- `Parent hash` – the unique identifier for the block that came before (this is how blocks are linked in a chain).  
   `父哈希` – 父块的唯一标识符(区块间就是如此链起来地)  

- `Transactions list` – the transactions included in the block.  
   `交易列表` – 区块内包含的交易  

#### 区块大小/规模(Block size)

Blocks themselves are bounded in size. Each block has a block gas limit which is set by the network and the miners collectively: the total amount of gas expended by all transactions in the block must be less than the block gas limit.

区块本身的大小是有限的。每个区块都有一个由网络和矿工共同设定的区块gas费用限制：区块中所有交易消耗的gas总量必须小于区块gas限制。

>
>More details
>更多细节
>
>[区块](https://ethereum.org/en/developers/docs/blocks/)
