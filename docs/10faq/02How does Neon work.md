---
sidebar_position: 2
title: Neon怎样运行?(How does Neon work?)
---
- [Neon如何与Solana交互(How does Neon EVM interact with Solana?)](#neon如何与solana交互how-does-neon-evm-interact-with-solana)

- [Neon EVM合约如何运行?(How does the Neon EVM contract work?)](#neon-evm合约如何运行how-does-the-neon-evm-contract-work)

- [Neon EVM 如何确保交易并行执行?(How does Neon EVM enable the parallel execution of transactions?)](#neon-evm-如何确保交易并行执行how-does-neon-evm-enable-the-parallel-execution-of-transactions)

- [什么类型的交易可以被并行执行(What types of transactions can be executed in parallel?)](#什么类型的交易可以被并行执行what-types-of-transactions-can-be-executed-in-parallel)

- [哪些类型的交易会被迭代执行，为什么?(What types of transactions are executed iteratively by Neon EVM, and why?)](#哪些类型的交易会被迭代执行为什么what-types-of-transactions-are-executed-iteratively-by-neon-evm-and-why)

- [如何保证迭代执行由Neon EVM最终完成?(How do you ensure that iterative transactions are finalized by the Neon EVM operator?)](#如何保证迭代执行由neon-evm最终完成how-do-you-ensure-that-iterative-transactions-are-finalized-by-the-neon-evm-operator)

- [什么迭代执行时Solana账户会被封锁?(Why are Solana accounts "blocked" when iterative execution begins?)](#什么迭代执行时solana账户会被封锁why-are-solana-accounts-blocked-when-iterative-execution-begins)

- [Neon EVM 与原生SPL代币是兼容的吗?(Is Neon EVM compatible with native Solana contracts such as SPL tokens?)](#neon-evm-与原生spl代币是兼容的吗is-neon-evm-compatible-with-native-solana-contracts-such-as-spl-tokens)

- [通过Neon EVM从Solana调用一个函数或者合约可行吗?(Is it possible to call a function of a contract running on Neon EVM from other Solana contracts?)](#通过neon-evm从solana调用一个函数或者合约可行吗is-it-possible-to-call-a-function-of-a-contract-running-on-neon-evm-from-other-solana-contracts)

- [EVM的gas是如何计算的?(How are Neon EVM gas fees calculated?)](#evm的gas是如何计算的how-are-neon-evm-gas-fees-calculated)

- [在Neon EVM花费的gas如何支付?(How are gas costs paid on Neon EVM?)](#在neon-evm花费的gas如何支付how-are-gas-costs-paid-on-neon-evm)

- [Neon代币能用来干什么?(What are NEON tokens used for?)](#neon代币能用来干什么what-are-neon-tokens-used-for)

- [为什么交易在发送到Neon之前默认要先去Neon Web3代理?(Why do transactions go through the Neon Web3 Proxy before Neon EVM by default?)](#为什么交易在发送到neon之前默认要先去neon-web3代理why-do-transactions-go-through-the-neon-web3-proxy-before-neon-evm-by-default)

- [“不经Neon Web3代理，直接发送一笔Solana交易到Solana节点”意味着什么?(What does it mean to "send a Solana transaction directly to a Solana node without Neon Web3 Proxy"?)](#不经neon-web3代理直接发送一笔solana交易到solana节点意味着什么what-does-it-mean-to-send-a-solana-transaction-directly-to-a-solana-node-without-neon-web3-proxy)

- [没有Web3代理，Neon 交易如何进行?(How can Neon transactions be performed without the Neon Web3 Proxy?)](#没有web3代理neon-交易如何进行how-can-neon-transactions-be-performed-without-the-neon-web3-proxy)

- [我是一个不想使用Neon Web3代理的dApp开发者，这会如何影响我的项目?(I'm a dApp developer and I don't want to use the Neon Web3 Proxy. How will this impact my project?)](#我是一个不想使用neon-web3代理的dapp开发者这会如何影响我的项目im-a-dapp-developer-and-i-dont-want-to-use-the-neon-web3-proxy-how-will-this-impact-my-project)

- [代理是保管制吗?(Are proxies custodial?)](#代理是保管制吗are-proxies-custodial)

- [Neon EVM的账户怎么运行?(How do accounts work in Neon EVM?)](#neon-evm的账户怎么运行how-do-accounts-work-in-neon-evm)

- [远程托管的任何数据都可以在Solana上执行吗?(Is arbitrary data stored on a remote host and simply executed on Solana?)](#远程托管的任何数据都可以在solana上执行吗is-arbitrary-data-stored-on-a-remote-host-and-simply-executed-on-solana)

- [Neon EVM 是否添加了复杂的，需要 Solana 验证者跨多个区块协作执行 Neon 交易的虚拟化?(Does Neon EVM add complex virtualization requiring Solana validators to cooperatively execute Neon transactions across multiple blocks?)](#neon-evm-是否添加了复杂的需要-solana-验证者跨多个区块协作执行-neon-交易的虚拟化does-neon-evm-add-complex-virtualization-requiring-solana-validators-to-cooperatively-execute-neon-transactions-across-multiple-blocks)

- [从以太坊到Neon EVM的转账是如何进行的?(How does the transfer of funds from Ethereum to Neon EVM occur?)](#从以太坊到neon-evm的转账是如何进行的how-does-the-transfer-of-funds-from-ethereum-to-neon-evm-occur)

- [有什么基础设施(钱包，区块浏览器，预言机等)已经对Neon EVM用户可用了吗?(What infrastructure is available -wallets, blockchain explorers, oracles, etc.-for Neon EVM users?)](#有什么基础设施钱包区块浏览器预言机等已经对neon-evm用户可用了吗what-infrastructure-is-available--wallets-blockchain-explorers-oracles-etc-for-neon-evm-users)

#### Neon如何与Solana交互(How does Neon EVM interact with Solana?)

The alpha version of Neon EVM has an interface that can interact with [SPL Token](#_SPL代币（Solana_Program_Library) accounts. The beta version of Neon EVM will have interface that can read data from Solana accounts and will facilitate the integration of Neon EVM contracts with Oracles on Solana. In upcoming versions, Neon Labs has plans to impelement an interface for writing data to Solana accounts, which will allow the integration of Neon EVM contracts with Solana programs.

Neon EVM 的 alpha 版有一个可以与[SPL Token代币](#_SPL代币（Solana_Program_Library) 账户交互的界面。 Neon EVM 的beta版将可以从接口读取 Solana 账户数据，并将促进 Neon EVM 合约与 Solana 上预言机集成。在即将发布的版本中，Neon Labs 计划引入一个将数据写入 Solana 帐户的接口，这将使得Neon EVM 合约与 Solana 程序集成。

Neon EVM works as a smart contract on the Solana blockchain. The contract can interact with and call other smart contracts on Solana—for example, SPL tokens. Neon EVM is able to access data stored on Solana accounts. Furthermore, every Ethereum-like account within Neon EVM is stored in a corresponding Solana account.

Neon EVM 作为 Solana 区块链上的智能合约。该合约可以与 Solana 上的其他智能合约交互和调用，例如 SPL 代币。 Neon EVM 能够访问存储在 Solana 帐户上的数据。此外，Neon EVM 中的每个类似以太坊的账户都存储在对应的 Solana 账户中。

#### Neon EVM合约如何运行?(How does the Neon EVM contract work?)

Neon EVM is a smart contract on Solana acting as the Ethereum Virtual Machine. It is compiled into Berkeley Packet Filter bytecode, a format that can be executed on Solana.This allows Neon EVM to receive Solana transactions with wrapped Ethereum-like transactions and process them on Solana according to Ethereum rules.

Neon EVM 是 Solana 上的智能合约，充当以太坊虚拟机。它被编译成 BPF 字节码，这是一种可在 Solana 上执行的格式。这使得 Neon EVM 可以接收经过封装的，类似以太坊交易的 Solana 交易，并根据以太坊规则在 Solana 上处理它们。

#### Neon EVM 如何确保交易并行执行?(How does Neon EVM enable the parallel execution of transactions?)

Solana can process tens of thousands of contracts in parallel using as many cores as are available to its validator. This functionality is known as Sealevel. Parallel processing is possible because Solana transactions describe all the accounts a transaction will read or write while executing. This prevents transactions from overlapping, and allows independent transactions and those that are reading the same account to be executed concurrently.

Solana可以对验证者提供的内核“能用尽用”，从而来并行处理数万份合约。此功能称为海平面(Sealevel)。并行处理是可能的，因为 Solana 交易描述了交易在执行时要读写的所有帐户。这可以防止交易重叠，并允许一笔独立交易和正在读取同一帐户的交易同时执行。

Regarding parallel processing on Neon EVM, Neon transactions are wrapped into Solana transactions by the Neon Web3 Proxy. The Neon EVM program is a smart contract on Solana, so Solana loads the Neon EVM program for each Neon transaction. This allows them to be executed in parallel by Solana.

关于 Neon EVM 上的并行处理，Neon 交易由 Neon Web3 代理封装到 Solana 交易中。 Neon EVM 程序是 Solana 上的智能合约，因此 Solana 为每笔 Neon 交易加载 Neon EVM 程序。如此它们就由 Solana 并行执行。

#### 什么类型的交易可以被并行执行(What types of transactions can be executed in parallel?)

Transactions that do not change/write data to the same Solana accounts can be executed in parallel

不同时对同一账户更改/写入数据的交易可以被并行执行。

#### 哪些类型的交易会被迭代执行，为什么?(What types of transactions are executed iteratively by Neon EVM, and why?)

The Solana blockchain limits the resources (instructions) allocated to the execution of a single transaction to ensure optimal usage of hardware. Due to this restriction, Neon transactions that exceed Solana's resource limit are executed iteratively by Neon EVM.

#### 如何保证迭代执行由Neon EVM最终完成?(How do you ensure that iterative transactions are finalized by the Neon EVM operator?)

Neon EVM operators deposit their own funds at the start of execution of iterative transactions. If the transaction isn't fully executed by the original operator, the deposit and the user's fee are granted to another operator who finalizes it.

Neon EVM 运营方在开始执行迭代交易时存入自己的资金。如果原始运营方未完全执行交易，则将押金和用户费用授予完成交易的另一运营商。

Each operator has a financial interest in executing an operation that was not finalized by the original operator. This eliminates the appearance of unfinalized transactions.

每个运营方在执行原始运营方未最终确定的行动（交易）时都有经济利益。这最终会消除未完成交易。

#### 什么迭代执行时Solana账户会被封锁?(Why are Solana accounts "blocked" when iterative execution begins?)

The "blocking" of Solana accounts supports the atomicity of entire Neon transactions by preventing modifications to the targeted accounts through other Neon transactions.

Solana 账户的“封锁”通过防止通过其他 Neon 交易修改目标账户，来支持整个 Neon 交易的原子性。

#### Neon EVM 与原生SPL代币是兼容的吗?(Is Neon EVM compatible with native Solana contracts such as SPL tokens?)

Yes, Neon EVM has compatibility with native Solana tokens.

是的，Neon EVM 与原生 Solana 代币兼容。

#### 通过Neon EVM从Solana调用一个函数或者合约可行吗?(Is it possible to call a function of a contract running on Neon EVM from other Solana contracts?)

No, this is not possible in the alpha version of Neon EVM. We are working on an architecture that will allow the integration of Neon EVM contracts and Solana programs.

不，至少在 Neon EVM 的 alpha 版中是不可能的。我们正在研究一种允许集成 Neon EVM 合约和 Solana 程序的架构。

#### EVM的gas是如何计算的?(How are Neon EVM gas fees calculated?)

Neon EVM gas fees include three main components:

Neon EVM gas费包括三个主要部分：

1. The cost of executing a Solana transaction, which depends on the number of signatures specified in the transaction.  
   执行 Solana 交易的成本，取决于交易中指定的签名数量。

2. A fee paid to the Neon EVM governance body for using Neon EVM.  
   为使用 Neon EVM 向 Neon EVM 治理机构支付的费用。

3. A fee paid to the Neon EVM operator that executes the transaction.  
   支付给执行交易的 Neon EVM 运营方的费用。

#### 在Neon EVM花费的gas如何支付?(How are gas costs paid on Neon EVM?)

Gas costs on Neon EVM will be initially paid in NEON tokens. Eventually, payment will be accepted in NEON/ETH/ERC-20 at the discretion of the Neon EVM operator.

Neon EVM 的 Gas 费用最初将以 NEON 代币支付。最终，将由 Neon EVM 运营方自行决定是否接受NEON/ETH/ERC-20付款。

#### Neon代币能用来干什么?(What are NEON tokens used for?)

Neon economy is fee-based. The NEON token is a utility token that is needed to pay for the execution of Neon transactions. At launch, Neon governance will be handled by a multisig account whose keys are held by reputable individuals and entities with a vested interest in the success of Neon. Additionally, there will be a clear and user-friendly process for proposing and voting for protocol improvements.

Neon经济是基于收费制的。NEON 代币是一种功能代币，用于支付执行 Neon 交易的费用。在发布时，Neon 治理将由一个多重签名账户处理，其密钥由有社区具有声望的，并且仰赖 Neon EVM 项目成功的“既得利益”个人和机构，共同来持有。此外，将有一个清晰且用户友好的流程，通过提议和投票来改进协议。

Shortly after mainnet launch, Neon governance will transition to a DAO, and the NEON token will be used for governance purposes as well.

主网启动后不久，Neon 治理将过渡到 DAO，NEON 代币也将用于治理目的。

#### 为什么交易在发送到Neon之前默认要先去Neon Web3代理?(Why do transactions go through the Neon Web3 Proxy before Neon EVM by default?)

The Neon Web3 Proxy performs 2 main functions:  
Neon Web3代理有两大功能：

- The first function is to enable interactions between Ethereum clients and a Solana cluster. An Ethereum client doesn’t know anything about the interaction protocol for the Solana node. The Solana node doesn't know anything about Ethereum-like transactions. The Neon Web3 Proxy provides an Ethereum-like RPC endpoint for Ethereum clients. When an Ethereum client sends a Neon transaction to the Neon Web3 Proxy, the Proxy packs the Neon transaction into a Solana transaction and sends the Solana transaction to the Solana cluster for on-chain execution.  
   第一个功能是保障以太坊客户端和 Solana 集群之间的交互。以太坊客户端对 Solana 节点的交互协议一无所知。 Solana 节点对类以太坊交易一无所知。Neon Web3 代理为以太坊客户端提供了一个类似以太坊的 RPC 端点。当以太坊客户端向 Neon Web3 代理 发送 Neon 交易时，代理将 Neon 交易打包到 Solana 交易中，并将 Solana 交易发送到 Solana 集群进行链上执行。

- The second function is to process big Ethereum-like transactions. Solana limits the amount of resources for the execution of a single Solana transaction. If an Ethereum-like transaction requires a lot of compute units, it cannot be performed within a single Solana transaction.  
   第二个功能是处理类以太坊的大交易。Solana 限制执行单个 Solana 交易的资源量。如果类以太坊交易需要大量计算单位，则无法在单个 Solana 交易中执行。

Therefore, the Neon EVM program saves the EVM state to the Solana storage, and when the Neon Web3 Proxy sends a command to the Solana cluster, the execution of the stored Neon transaction is renewed. So the Neon EVM program restores the EVM state on demand and continues the Neon transaction execution from the stopping point. This process continues until the Neon transaction is completed.

因此，Neon EVM 程序将 EVM 状态保存到 Solana 存储中，当 Neon Web3代理向 Solana 集群发送指令时，存储的 Neon 交易执行就被刷新了。因此，Neon EVM 程序按需恢复 EVM 状态，并从停止点继续执行 Neon交易。这个过程一直持续到 Neon 交易完成。


#### 不经Neon Web3代理，直接发送一笔Solana交易到Solana节点”意味着什么?(What does it mean to "send a Solana transaction directly to a Solana node without Neon Web3 Proxy"?)

It means that a Neon user makes Solana transactions needed to execute their Ethereum-like transactions on their own. In this use case, the Neon operator is excluded from the process.

这意味着 Neon 用户自己进行 Solana 交易来执行类以太坊交易。在这个用例中，Neon 运营方被排除在流程之外。

All fees tied to the Solana transactions for this use case must be paid for directly by the Neon user in SOL.

与此用例的 Solana 交易相关的所有费用必须由 SOL 中的 Neon 用户直接支付。

#### 没有Web3代理，Neon 交易如何进行?(How can Neon transactions be performed without the Neon Web3 Proxy?)

The Solana transaction needs to be built on the client side (web/mobile) with a Neon transaction packed within it. The Solana transaction can then be sent directly to a Solana node without the Neon Web3 Proxy.

Solana 交易就需要在客户端（网络/移动）上自行构建，且需要把 Neon 交易打包进去。然后可以将 Solana 交易直接发送到 Solana 节点，而无需使用 Neon Web3 代理。

When using this method, it’s important to understand that the sender (Neon user) is responsible for the following items:

使用此方法时，重要的是要明确发件人（Neon 用户）负责以下项目：

- In cases where the Neon transaction is too large, it has to be executed [iteratively](#_代币流通(Token_circulation)).  
   Neon 交易过大的情况下，必须[迭代执行](#_代币流通(Token_circulation))。

- A list of all Neon accounts and contracts corresponding to the Neon transaction needs to be determined on the client side.  
   客户端要确定Neon 交易对应的所有 Neon 账户和合约的列表。

#### 我是一个不想使用Neon Web3代理的dApp开发者，这会如何影响我的项目?(I'm a dApp developer and I don't want to use the Neon Web3 Proxy. How will this impact my project?)

The Neon Web3 Proxy can be implemented as a library, but implementation isn't simple. The most complex part of Neon Web3 Proxy implementation is the iterative transaction execution. The Neon Web3 Proxy forms Solana transactions, marking the number of VM steps to be executed without exceeding the BPF instruction limit of the Solana VM. The Neon Web3 Proxy traces the process of Neon transaction execution, sending transactions for the continuation of the suspended Neon transaction, awaiting its full execution. So if you don't want to use the Neon Web3 Proxy, you will still need to implement its functionality in your client.

Neon Web3 代理可以作为一个库来实现，但实现起来并不简单。Neon Web3 代理实现中最复杂的部分是迭代交易执行。 Neon Web3代理形成 Solana 交易，标记要执行的VM 步骤数且要保证不超过 Solana VM 的 BPF 指令限制。Neon Web3代理跟踪 Neon交易执行的过程，向暂停的 Neon交易发送交易继续（的命令），然后等待其完全执行。因此，如果您不想使用 Neon Web3 代理，您仍然需要在客户端中实现其功能。

#### 代理是保管制吗?(Are proxies custodial?)

Proxy operators are not gatekeepers. Neon EVM ensures the independence of its operations by providing open access to its infrastructure to anyone who is willing and capable of running Neon Web3 Proxy. Moreover, Neon Web3 Proxy can be replaced with a client library by any Neon EVM client. The transactions received by Neon EVM cannot be discriminated against because they do not have any attributes that determine their priority. The unchangeable nonce and user signature fields verified by the Neon EVM program guarantee the consistency of execution of Neon transactions and protect from re-execution.

代理运营方不是看门人。Neon EVM 通过向愿意并有能力运行 Neon Web3 代理的任何人开放其对基础设施的访问，来确保运营的独立性。不仅如此，Neon Web3 代理可以被任何 Neon EVM 客户端替换为客户端库。 Neon EVM 收到的 交易不会被特殊对待，因为它们没有任何属性来决定它们的优先级。Neon EVM 验证的不可更改的随机数 和用户签名字段保证了 Neon 交易执行的一致性，并防止重复执行。

#### Neon EVM的账户怎么运行?(How do accounts work in Neon EVM?)

The Ethereum-like accounts are saved in Solana storage by Neon EVM (Solana is agnostic to such data), and therefore there is no need to redesign or even to recompile Ethereum smart contracts.

类以太坊的账户由 Neon EVM 保存在 Solana 存储中（Solana 不知道此类数据），因此无需重新设计甚至重新编译以太坊智能合约。

#### 远程托管的任何数据都可以在Solana上执行吗?(Is arbitrary data stored on a remote host and simply executed on Solana?)

Neon EVM stores all data in Solana state. In terms of execution, the Neon EVM smart contract on Solana handles and processes arbitrary data.

Neon EVM 在Solana 状态存储所有数据。在执行方面，Solana 上的 Neon EVM 智能合约掌握和处理任意数据。

#### Neon EVM 是否添加了复杂的，需要 Solana 验证者跨多个区块协作执行 Neon 交易的虚拟化?(Does Neon EVM add complex virtualization requiring Solana validators to cooperatively execute Neon transactions across multiple blocks?)

The Neon EVM Web3 Proxy handles all the transaction structuring and conversion work automatically. There is no need for Solana validators to treat transactions from Neon EVM any differently. Anyone, including Neon EVM clients or users, can launch and run the Neon Web3 Proxy.

Neon EVM Web3 代理自动处理所有交易结构和转换工作。Solana 验证者无需对来自 Neon EVM 的交易进行任何不同的处理。任何人，包括 Neon EVM 客户端或用户，都可以启动和运行 Neon Web3代理。

#### 从以太坊到Neon EVM的转账是如何进行的?(How does the transfer of funds from Ethereum to Neon EVM occur?)

This transfer is then facilitated by the

然后，虫洞跨链桥促进了这种转移。

When ERC-20 tokens on layer 1 (L1) are sent across the Wormhole Bridge, SPL tokens representing the ERC-20 tokens are generated by an SPL token contract on Solana.

当第 1 层 (L1) 上的 ERC-20 代币通过虫洞跨链桥发送时，代表 ERC-20 代币的 SPL 代币由 Solana 上的 SPL 代币合约生成。

To enable the interaction between SPL tokens and the Neon EVM interface (along with smart contracts on Neon EVM), the original ERC-20 tokens are "wrapped" into SPL tokens. Once the ERC-20 tokens are wrapped, they're able to operate on the Solana network. This "wrapper" is also used to transfer SOL/SPL tokens to Ethereum wallets such as MetaMask.

为了实现 SPL 代币和 Neon EVM 接口（以及 Neon EVM 上的智能合约）之间的交互，原始 ERC-20 代币被“封装”到 SPL 代币中。封装完 ERC-20 代币后，它们就可以在 Solana 网络上运行。这个“封装器”还用于将 SOL/SPL 代币转移到 MetaMask 等以太坊钱包。

After these two steps, the funds are considered to be transferred from Ethereum to a Neon user's wallet.

在这两个步骤之后，资金被认为从以太坊转移到了 Neon 用户的钱包。

#### 有什么基础设施(钱包，区块浏览器，预言机等)已经对Neon EVM用户可用了吗?(What infrastructure is available -wallets, blockchain explorers, oracles, etc.-for Neon EVM users?)

Blockchain explorers and oracles will be available in the future.

未来会提供区块链浏览器和预言机。