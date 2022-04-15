---
sidebar_position: 2
title: 术语(Terminology)
---

### 应用二进制接口Application Binary Interface (ABI)

A JSON-based description on how to convert user actions between their JSON and binary representations. The ABI may also describe how to convert the database state to/from JSON. Once you have described your contract via an ABI this allows developers and users to interact with your contract seamlessly via JSON.

一个基于JSON的，关于如何在 JSON 和二进制之间转换用户行为的描述。 ABI 还可以描述如何将数据库状态和JSON相互转换。一旦您使用 ABI 描述(编译)了您的合约，开发人员和用户就可以通过 JSON 与您的合约无缝交互。

### 账户(Account)

A unique identifier that is required to interact with Solana. Unlike most other cryptocurrencies, transfers are sent to a readable account name instead of a public key, while keys attributed to the account are used to sign transactions.

与 Solana 交互时所需的唯一标识。与大多数其他加密货币不同，转账不是通过公钥，而是被发送到可读的账户，而归属于账户的密钥用于对交易签名。

### 区块(block)

A special structure for recording a group of transactions in blockchain systems. A block consists of a header and a list of transactions. The block header includes its hash, the hash of the previous block, transaction hashes, and additional overhead information.

用于记录区块链系统中一组交易的特殊结构。一个区块由一个区块头和一个交易列表组成。区块头包括其哈希、前一个区块的哈希、交易哈希和额外费用信息。

### 区块链(Blockchain)

A database with a strict structure and certain rules for building chains of transactions and accessing information which excludes data theft, fraud, violation of property rights, and more.

具有严格结构和特定规则的，用于构建交易链条和不含数据盗窃、欺诈、侵犯产权的访问信息的数据库。

### 区块日志(Block log)

An append-only log of blocks written to disk and containing all the irreversible blocks.

写入磁盘并包含所有不可逆区块的块的，只能附加的区块日志/记录。

### 伯克利包过滤器(Berkeley Packet Filter, BPF)

A technology used in computer operating systems to analyze network traffic. It provides a raw interface to data link layers, permitting raw link-layer packets to be sent and received.

计算机操作系统中用于分析网络流量的一种技术。它为数据链路层提供了一个原始接口，允许发送和接收原始链路层数据包。

### 容器(Container)

An object created using a Docker image and containing all the necessary components for the operation of the application. The container is a secure platform for the operation of the application.

使用 Docker 镜像创建的对象，包含应用程序运行所需的所有组件。容器是应用程序运行的安全平台。

### 加密哈希函数(Cryptographic hash function ,CHF)

A type of hash function that takes an input (or message) and returns a fixed-size alphanumeric string. The alphanumeric string is called the hash value, message digest, digital fingerprint, digest, or checksum.

一种接受输入(或消息)并返回固定大小(规模) 字母数字字符串(即字母和数字并用的字符串)的哈希函数。字母数字字符串也被称为哈希值、消息摘要、数字指纹、摘要或校验和。

### 守护进程(Daemon)

A program on Linux systems that is launched by the system itself and runs in the background without direct user interaction.

Linux 系统的一个程序，由系统本身启动并在后台运行，不与用户直接交互。

### 去中心化应用(Decentralized Application，dAapp)

An application built on a decentralized network that combines a smart contract and a frontend user interface.

建立在去中心化网络上，结合了智能合约和前端用户界面的应用程序。

### 数字签名(Digital signature)

A mathematical algorithm used to verify the authenticity and integrity of digital messages or documents. A valid digital signature helps to reassure the recipient that the message was created by a known sender, and that the message was not altered in transit. Digital signatures are a standard feature of most cryptographic protocol suites, and are also commonly used for software distribution, financial transactions, contract management software, and other cases where it is important to detect and/or prevent forgery or tampering.

一种用于验证数字消息或文档真实性和完整性数学算法。有效的数字签名帮助向收件人确保消息是由已知的发送者创建的，并且在传输过程中没有被篡改。数字签名是大多数加密协议套件的标准功能，也常用于软件分发、金融交易、合同管理软件以及其他需要检测和/或防止伪造或篡改的场景。

### Docker

Software used to automate application installation in the virtualization environment at the operating system level. Packages an application, along with all its environments and dependencies, into a container that can be ported to any Linux system with cgroups support in the kernel, and also provides a container management environment.

用于在操作系统级别的虚拟化环境中自动安装应用程序的软件。它将应用程序及其(运行)环境和依赖(内容)打包到一个容器中，该容器可以移植到任何在核心(kernel)中具备控制组群支持(cgroups support)的Linux 系统，(当然)也可以提供容器管理的环境。

### Docker Compose

A command line tool for managing multiple Docker multi-container applications.

用于管理多个 Docker 和多个容器应用程序的命令行工具。

### Docker文档(Dockerfile)

A file containing instructions and parameters for creating a Docker image for specific tasks.

一份包含Docker镜像说明和参数的文件，这个Docker镜像是为特定任务专门创建的。

### Docker镜像(Docker image)

A read-only template on the Docker platform that is used to create containers.

在Docker 平台上用于创建容器的只读模板。

### DPoS (Delegated Proof-of-Stake)

A consensus algorithm initially developed by Daniel Larimer in 2013 for BitShares. It's sometimes referred to as the more “democratic” version of Proof-of-Stake (PoS).

最初由 Daniel Larimer 于2013年为比特股开发的共识算法。它有时被称为更“民主”的权益证明 (PoS) 。

### ERC-20

The token standard used for Ethereum smart contracts. Developed in 2015, ERC-20 defines a common list of rules that Ethereum tokens must implement. This gives developers the ability to program how new tokens will function within the Ethereum ecosystem.

用于以太坊智能合约的代币标准。2015年开发的ERC20，定义了以太坊代币必须采用的通用规则列表。这使开发人员能够通过编程(来控制)新代币在以太坊生态系统中的运行。

### ERC-721

A more complex token standard than ERC-20 that is split across a number of contracts with multiple optional extensions. Unlike ERC-20, tokens of this standard are not interchangeable. No two ERC-721 tokens are the same, and each have different characteristics.

一种比 ERC-20 更复杂的代币标准，它分为多个具有多个可选扩展的合约。与 ERC-20 不同，此标准的代币不可互换。(理论上)任意两个ERC-721 代币都是不同的，并且各自都有不同的特征。

### Gwei

A denomination, or smaller unit, of the cryptocurrency ETH, which is used on the Ethereum network. Gwei is the most commonly used unit of ETH because gas prices are easily specified in gwei. For example, instead of saying that your gas costs 0.000000001 ETH, you can say your gas costs 1 gwei.

以太坊网络上使用的加密货币ETH的面额或更小的单位。Gwei 是最常用的 ETH 单位，因为 gas 价格很容易在 gwei 中指明。例如，比起说你的gas成本为 0.000000001 ETH，说你的 gas 成本为 1 gwei反而更好。

### 头块(Head block)

The head block is the last block written to the blockchain, stored in reversible blocks.

头块是写入区块链的最后一个块，存储在可逆区块中。

### 秘钥(Key)

A string of characters (bit string) that is used by the cryptographic algorithm for encrypting and decrypting messages, setting and verifying digital signatures, and identification. Keys are symmetric (the same key is used for encryption and decryption), and asymmetric (public and private).

加密算法用于加密和解密消息、设置和验证数字签名以及标识的字符串(位串)。密钥是对称的(加密和解密使用相同的密钥)和非对称的(公共和私有)。

### 默克尔山脉(Merkle Mountain Range)

A type of merkle tree that can be visualized as many (perfect) merkle trees which are then combined into 1, by creating a single root from all of their peaks.

一种默克尔树，可以可视化为许多(完美的)默克尔树，然后通过从它们的所有“峰”创建一个单独的“根”，从而将它们组合为一个。

### MPT(Merkle Patricia trie)

A hash tree that stores key-value pairs, with the keys being represented in binary form. The nodes of this tree consist of two types: prefix nodes that contain part of the path, and end nodes that contain the stored value.

存储键值对的哈希树，键以二进制形式表示。这棵树的节点由两种类型组成：包含部分路径的前缀节点和包含存储值的结束节点。

### MetaMask

A software cryptocurrency wallet that is used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications.

用于与以太坊区块链交互的加密货币钱包软件。它允许用户通过浏览器扩展程序或移动应用程序访问他们的以太坊钱包，然后可用于与去中心化应用程序进行交互。

### 最小可行性产品(Minimum Viable Product ,MVP)

A product with minimal features and/or functionality, but enough to satisfy early consumers. Its purpose is to gather feedback and learnings to inform further product development.

足以满足早期消费者需求但功能尽量精简的产品。其目的是收集反馈和学习，为下一步迭代提供信息。

### NeonPass

An open-source service for transferring SPL tokens to Neon EVM.

一个开源服务，负责将SLP代币传输到Neon EVM中。

### NeonSwap

An open-source service and Uniswap V2 fork that runs on Neon EVM in the Solana Testnet.

在 Solana 测试网中的 Neon EVM 上运行的开源服务和 Uniswap V2 分叉。

### 节点(Node)

A separate software device that is connected to the blockchain network according to the client-server scheme. Nodes are active elements and form the basis of the blockchain network technology.

通过客户端-服务器方案连接到区块链网络的单独软件设备。节点是活跃的元素，是区块链网络技术的基础。

### Phantom

A software cryptocurrency wallet reimagined for DeFi. Phantom makes it safe and easy for you to store, send, receive, collect and swap tokens on the Solana blockchain.

为 DeFi 重新设计的软件加密钱包。 Phantom 让您可以安全轻松地在 Solana 区块链上存储、发送、接收、收集和交换代币。

### 插件(Plugin)

A software component, built as a separate module, that adds new capabilities to the main program.

作为独立模块构建的，可为主程序添加新功能的软件组件。

### 私钥(Private key)

A secret number (code string) that you can use to securely access your wallet or bitcoin address, and do transactions.

可以用来安全地访问钱包或比特币地址并进行交易的一串密码(代码字符串)。

### 历史证明(Proof-of-History, PoH)

The blockchain algorithm for time synchronisation. Instead of using the traditional timestamps, PoH is able to prove that a message or event occurred at a certain time after one event, but before another.

时间同步的区块链算法。不使用传统的时间戳，PoH能够证明消息或事件发生在一个事件之后但在另一个事件之前的某个时间。

### 公钥(Public key)

A publicly available key that is required for users to receive transactions into their account. A public key can be inferred from a signature.

用户在其帐户中接收交易所需的公开可用密钥。可以从签名中推断出公钥。

### Remix

An online Integrated Development Environment (IDE) used to write, compile, deploy, and debug Solidity code. This web tool can be connected with MetaMask and used to deploy smart contracts to both the Solana Testnet and Solana Mainnet.

用于编写、编译、部署和调试 Solidity 代码的在线集成开发环境 (IDE)。该网络工具可以与 MetaMask 连接，用于将智能合约部署到 Solana 测试网和 Solana 主网。

### 远程过程调用(Remote Procedure Call , RPC)

A system that lets users send Queries and commands to a system remotely.

一个允许用户远程发送查询和命令的系统。

### RSA(Rivest-Shamir-Adleman)

A public key cryptosystem that is widely used for secure data transmission.

一种广泛用于安全数据传输的公钥密码系统。

### 序列化(Serialization)

The process of turning an object in memory into a stream of bytes so it can be stored on disk or sent over the network.

为了将内存中的对象存储在磁盘上或通过网络发送，而将其转换为字节流的过程。

### 签名(Signature)

A mathematical algorithm used to demonstrate the authenticity of digital messages or documents.

一种用于证明数字消息或文档真实性的数学算法。

### 滑点(Slippage)

The difference between where the computer signaled the entry and exit for a trade and where actual clients, with actual money, entered and exited the market using the computer’s signals.

计算机发出交易买卖信号与客户实际买卖成本的差异。

### 间隔/时段(Slot)

The period of time during which a block is created. Collectively, slots create a logical clock. Slots are ordered sequentially and non-overlapping, comprising roughly equal time.

区块创建的时间段。总的来说，间隔创建了一个逻辑时钟。间隔按顺序排列且不重叠，由大致相等的时间组成。

### 智能合约(Smart contract)

A computer protocol intended to facilitate, verify, or enforce the negotiation or performance of a contract.

旨在促进、验证或执行合同谈判或履行的计算机协议。

### Sollet

Sollet (Sollet.io) is browser-based wallet for Solana and SPL tokens. It was created by the Project Serum team.

Sollet (Sollet.io) 是基于浏览器的， Solana 和 SPL 代币钱包。它由 Project Serum 团队创建。

### SPL代币(Solana Program Library Token ,SPL Token)

A contract containing a system register of tokens that are in the system along with the Solana balances of their accounts.

一个包含系统中注册的代币和对应账户Solana余额的(智能)合约。

### SPL代币(SPL token)

A token registered in [SPL Token](https://spl.solana.com/token).

在SPL Token中注册过的代币

### 已质押代币(Staked tokens)

Tokens allocated for a stake acquisition that can’t be used for anything else in this state. The user can stake active tokens listed on their balance, or deposit them. Also, the user can perform the reverse operation: withdraw tokens from the staked state to active.

为通过质押掌握(控制)权力而分配的，在此状态下不能用于其他任何用途的代币。用户可以存入或质押在其余额中的活跃代币。用户也可以执行相反的操作：将代币从质押状态撤回到活动状态。

### 临时文件(Tmpfs)

A temporary file storage paradigm implemented in many Unix-like operating systems. It is intended to appear as a mounted file system, but data is stored in volatile memory instead of a persistent storage device.

在许多类 Unix 操作系统中采用的临时文件存储范式。它旨在显示为已挂载的文件系统，但数据存储在易失性内存中，而不是持久存储设备中。

### 交易(Transaction)

A combination of one or more actions that results in a complete all-or-nothing change to the blockchain.. Usually the executional result of a smart contract.

一个或多个动作的组合，导致区块链发生完整的全有或全无变化(all-or-nothing change)。通常是智能合约的执行结果。

### Uniswap

A decentralized exchange. Liquidity providers can earn fees by providing the required tokens or ETH for both sides of a trade. Uniswap is widely used and therefore has one of the highest liquidities for a wide range of tokens.

去中心化交易所。流动性提供者可以通过为交易双方提供所需的代币或ETH来赚取费用。Uniswap被广泛使用，拥有许多代币最好的流动性(之一)。

### USDT

USDT is the ticker symbol for the Tether stablecoin cryptocurrency.

USDT 是 Tether 稳定币的代码。

### 钱包(Wallet)

Wallets are clients that store keys that may or may not be associated with the permissions of one or more accounts. Ideally a wallet has a locked (encrypted) and unlocked (decrypted) state, which is protected by a high entropy password.

钱包是存储密钥的客户端，这些密钥可能与一个或多个帐户的权限相关或无关。理想情况下，钱包具有封锁(加密)和解锁(解密)状态，由高熵密码保护。

### Web 3

In the context of Ethereum, Web3 is a collection of decentralized apps that run on the blockchain and allow anyone to participate without monetizing their personal data.

在以太坊的语境下，Web3 是在区块链上运行的去中心化应用的集合，允许任何人参与而无需将其数据货币化。

### 虫洞(Wormhole)

The Solana Wormhole is an Ethereum bridge that helps transfer wealth from the Ethereum blockchain to the Solana blockchain. It also helps transfer liquidity between the Ethereum ERC-20 token standard to the Solana SPL token standard.

Solana虫洞是一个帮助将资产从以太坊区块链传输到 Solana 区块链的以太坊跨链桥。它也帮助以太坊 ERC-20 代币标准与 Solana SPL 代币标准之间传输流动性。

### ZK-SNARK

Zero-Knowledge Scalable Transparent Argument of Knowledge (zk-SNARK) is a cryptographic protocol that uses public zero-knowledge probabilistically-verifiable proofs. This technology allows users to exchange verified information without disclosing it, or to perform computations with a third party without disclosing the computation.

零知识可扩展透明知识论证 (zk-SNARK) 是一种使用公共零知识概率可验证证明的加密协议。该技术能让用户在不披露信息的情况下交换已验证信息，或者在不披露计算结果的情况下与第三方执行计算。