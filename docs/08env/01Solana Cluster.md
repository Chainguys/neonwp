---
sidebar_position: 1
title: Solana集群(Solana Cluster)
---

A Solana cluster is a set of independently owned computers working together to verify the output of user-submitted programs. A Solana cluster can be utilized any time a user wants to preserve an immutable record of events in time or programmatic interpretations of those events.

Solana 集群是一组独立持有，协同工作以验证用户提交程序输出的计算机。Solana 集群可以在用户想要及时保存事件的不可变记录或这些事件的程序化解释时使用。

It can also be argued that a Solana cluster is a set of validators that serve client transactions and maintain the integrity of the registry. Solana maintains several different clusters with different purposes.

也可以说，Solana 集群是一组验证器，它们服务于客户端交易并维护注册表的合法性。 Solana 维护了几个具有不同目的的不同集群。

Two or more clusters can coexist if they have a common genesis block. Otherwise, they simply ignore the existence of the other. Transactions sent to the wrong address are rejected.

如果两个或多个集群具有共同的创世区块，则它们可以共存。否则，它们就简单地忽略对方的存在。发送到错误地址的交易会被拒绝。

#### 端点(Endpoints)

Solana maintains dedicated api nodes to fulfill JSON-RPC requests for each public cluster, and third parties may as well. Here are the public RPC endpoints currently available and recommended for each public cluster:

Solana 维护专用的 api 节点来满足每个公共集群(有时也包含第三方)的 JSON-RPC 请求。以下是每个公共集群当前可用和推荐的公共 RPC 端点：

- Devnet endpoint  
   Devnet端点  
   `https://api.devnet.solana.com` — single Solana-hosted api node; rate-limited. Devnet serves as a playground for anyone who wants to take Solana for a test drive, as a user, token holder, app developer, or validator. Tokens are not real.  
   `https://api.devnet.solana.com` — 单个 Solana 托管的 api 节点；限速。Devnet 是任何想要使用 Solana 进行测试的人、用户、代币持有者、应用开发人员或验证者的游乐场。所有代币都是测试用的，并不是真实资产。

- Testnet endpoint  
   Testnet端点  
   `https://api.testnet.solana.com` — single Solana-hosted api node; rate-limited.Testnet is used to stress test recent release features on a live cluster, particularly focused on network performance, stability and validator behavior. Tokens are not real.  
   `https://api.testnet.solana.com` — 单个 Solana 托管的 api 节点；限速。测试网用于在实时集群上对最近发布的功能进行压力测试，特别关注网络性能、稳定性和验证者行为。所有代币都是测试用的，并不是真实资产。

- Mainnet Beta endpoints  
   Mainnet Beta端点  
   `https://api.mainnet-beta.solana.com` — Solana-hosted api node cluster, backed by a load balancer; rate-limited.  
   `https://api.mainnet-beta.solana.com` — Solana 托管的 api 节点集群，由一个负载均衡器支持；限速。  
   `https://solana-api.projectserum.com` — Project Serum-hosted api node.This is a permissionless, persistent cluster for early token holders and launch partners. Issuing tokens are real SOL.  
   `https://solana-api.projectserum.com` —Serum项目 托管的 api 节点。这是一个免许可的，长期持久的，面向早期代币持有者和启动合作伙伴的集群。发行的代币是真正的 SOL。

### 同步(Synchronization)

Fast, reliable synchronization is one of the main challenges for achieving high throughput. Traditional blockchains synchronize on large chunks of transactions called blocks. As a consensus algorithm, they use [Proof-of-Work](https://en.wikipedia.org/wiki/Proof_of_work) or [Proof-of-Stake](https://en.wikipedia.org/wiki/Proof_of_stake).

快速、可靠的同步是实现高吞吐量的主要挑战之一。传统区块链在称为区块的大量交易上同步。，他们使用[工作证明](https://en.wikipedia.org/wiki/Proof_of_work)或[权益证明](https://en.wikipedia.org/wiki/Proof_of_stake)作为共识算法

Unlike traditional synchronization methods, Solana takes a completely approach, which it calls Proof-of-History. Solana uses an optimistic method of processing blocks (it was introduced in 1981 and called [Optimistic Concurrency Control](https://en.wikipedia.org/wiki/Optimistic_concurrency_control)).

与传统的同步方法不同，Solana 采用了一种全面的方法，称为历史证明。 Solana 使用一种乐观的方法来处理块(于1981 年引入，称为[乐观并发控制](https://en.wikipedia.org/wiki/Optimistic_concurrency_control))。

The peculiarity of this method is that Solana technically never sends a block, but uses the term to describe the sequence of entries that validators vote on to achieve confirmation. By processing the transactions optimistically, there is effectively no delay between the time the last entry is received and the time when the node can vote. In the event consensus is not achieved, a node simply rolls back its state.

这种方法的特点是 Solana 在技术上从不发送块，而是使用该术语来描述验证者投票以实现确认的条目(交易)序列。通过乐观地处理交易，在收到最后一个条目的时间跟节点可以投票的时间之间实际上没有延迟。如果没有达成共识，节点会简单地回滚状态。


>More details  
>更多细节
>
>[A Solana cluster](https://docs.solana.com/cluster/overview)  
>[Solana clusters](https://docs.solana.com/clusters)  
>[Solana cluster RPC endpoints](https://docs.solana.com/cluster/rpc-endpoints)  