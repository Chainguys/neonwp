---
sidebar_position: 2
title: 区块(Block)
---

_This section describes a unique solution that allows Ethereum users to use the key features of Solana and vice versa._

本节描述了一个独特的，允许以太坊用户使用 Solana 关键功能的解决方案，反之亦然。

### 术语 (Terminology)

- `BPF` - the Berkeley Packet Filter virtual machine  
   `BPF` - 伯克利包过滤器虚拟机

- `Contract` - smart contract  
  `合约` – 智能合约

- `dApp` - a decentralized application.(Plural: dApps)  
  `dApp` -去中心化应用

- `N-trx` - a neon transaction formed according to the Ethereum network, and executed inside  Neon EVM
   `N交易` - 根据以太坊网络形成的Neon交易，并在Neon EVM内部执行

- `EVM` - the Ethereum Virtual Machine  
   `EVM` - 以太坊虚拟机

- `Proxy` - Neon Web3 Proxy  
   `代理` – Neon Web3代理

- `S-trx` - a transaction formed according to the rules of the Solana network  
  `S交易`- 根据Solana网络形成的交易

### 以太坊的核心性能 (Key Capabilities of Ethereum)

Ethereum’s core innovation, EVM, is a Turing-complete software that runs on the Ethereum network. EVM allows developers to build and deploy dApps, which makes the process of creating blockchain applications much easier and more efficient. Contracts are treated as autonomous scripts or stateful dApps that are stored in the Ethereum blockchain for execution by the EVM at a later stage.

以太坊的核心创新—EVM—是运行在以太坊上的图灵完备软件。EVM 允许开发人员构建和部署 dApps，使得创建区块链应用的过程更加容易和高效。合约被视为自治脚本或有状态的 dApps，它们存储在以太坊区块链中，供 EVM 在稍后阶段执行。

Ethereum has a large number of developer tools available in its ecosystem, including MetaMask, Remix, and Truffle. The toolkit allows users to write dApps in Solidity, which is the standard language for developing contracts.

以太坊生态系统中有大量可用的开发者工具，包括 MetaMask、Remix 和 Truffle。该工具包允许用户使用 Solidity 编写 dApps，Solidity 是开发合约的标准语言。

Ethereum is the flagship of the crypto world. It runs numerous distributed applications that have proven themselves in the market and are in demand all over the world.

以太坊是加密世界的旗舰。它运行许多已经在市场上证明了其(商业价值)并且在世界范围内都有需求的分布式应用程序。

### Solana的核心性能 (Key Capabilities of Solana)

Solana is an exceptionally fast, secure, and relatively inexpensive blockchain network.

Solana是一个非常快速、安全且相对低成本的区块链网络。

The Solana blockchain provides:  
Solana区块链提供：

- High performance, including:  
  高性能，包括：

    - Short block processing time.  
       区块处理时间短
    - Processing many transactions per second due to the ability to execute transactions in parallel.  
       因为可以并行执行交易，所以每秒可以处理多笔交易

- Low transaction fees.  
  低转账费用

- The ability to increase the number of nodes in the network without reducing the performance of the network as a whole.  
   节点增加而不降低网络整体性能

- The capability to build in coding languages C, C++, and Rust.
   可以使用C, C++和Rust开发

### 目标(The Goal)

To find a solution that combined the best of both Ethereum and Solana. This solution would allow:

找到一个将以太坊和 Solana 优点结合的解决方案。该解决方案将允许：

- Solana users to use unique Ethereum toolkits to write dApps in Solidity.  
   Solana 用户可以使用独特的以太坊工具包在 Solidity 中编写 dApp。

- Ethereum dApps to be deployed on Solana, thereby attracting a huge audience of Ethereum users to the Solana blockchain.  
   以太坊 dApps 将部署在 Solana 上，从而将大量以太坊用户吸引到 Solana 区块链。

- Ethereum users to significantly increase the speed of transactions and reduce the fee charged for their execution by using Solana.  
   以太坊用户使用 Solana (可以)显着提高交易速度并降低执行费用。

### 提出的方案(The Proposed Solution)

To achieve the goal, the following solution was proposed and implemented by the NeonLabs development team:

为了实现这一目标，Neon Labs 开发团队提出并实施了以下解决方案：

- Then EVM was integrated in Solana and named Neon EVM: an emulator implemented using Rust.  
   EVM 集成在 Solana 中并取名为 Neon EVM：一个使用 Rust 实现的模拟器。


- Neon EVM operates inside Solana providing parallel transaction processing and a low transaction fee.  
   Neon EVM 在 Solana 内部运行，提供并行交易处理和低交易费用。

- The Neon Web3 Proxy was created to mediate interactions between the Ethereum user (account) and Neon EVM. The main function of the proxy is to provide an API for external clients.  
   创建Neon Web3 代理是为了调解以太坊用户(帐户)和 Neon EVM 之间的交互。代理的主要功能是为外部客户端提供 API。

### 解决方案详情(The Solution in Detail)

The block diagram of the solution is shown in Fig. 1.   
该解决方案的如图1所示。

![[Pasted image 20220420101455.png]]  

(图 1)


#### 伯克利包过滤器 (Berkeley Packet Filter ,BPF)

The BPF virtual machine is installed in Solana, allowing developers to embed other virtual machines inside Solana.

BPF 虚拟机安装在 Solana 中，允许开发人员在 Solana 中嵌入其他虚拟机。

Using BPF capabilities, a contract called Neon EVM is created in Solana, and the EVM was loaded inside it.

使用BPF，一个名为 Neon EVM 的合约就在 Solana 中被创建了，EVM也被加载到其中。

Because Solana has a contract update mechanism, the Neon EVM contract can also be updated independently from updates to the Solana node itself. This allows developers to update EVM versions without updating all the blockchain nodes.

因为 Solana 有合约更新机制，Neon EVM 合约也可以独立于 Solana 节点进行更新。这使得开发人员可以不更新所有区块链节点(也可以)更新 EVM 版本。

#### Neon Web3代理  (Neon Web3 Proxy)

A user can form transactions under an Ethereum account and sign them with a public key generated in Ethereum. Transactions formed according to Ethereum rules are sent to the input of the Proxy component. This component converts N-trxes into transactions under Solana rules.

用户可以在以太坊帐户下形成交易，并使用在以太坊中生成的公钥对其进行签名。以太坊规则下形成的交易被发送到代理组件的输入(端)。该组件将N交易转换为 Solana 规则下的交易。

The size of N-trx can exceed that of S-trx. Also, the amount of resources that a S-trx can spend is limited. Converting a transaction in a one-to-one format is difficult due to the potential lack of resources. Therefore, it was decided to generate multiple S-trxes for one N-trx. Each transaction generated is signed with a proxy key. The proxy sends the generated batch of transactions to Solana.

N交易的大小可以超过S交易。此外，S交易可以花费的资源数量是有限的。由于可能缺乏资源，因此很难用一对一的形式转换交易。故此就决定为一个N交易生成多个S交易。生成的每笔交易都使用代理密钥进行签名。代理将生成的一批交易发送至 Solana。

#### Web3 API

The proxy provides the full Web3 API to interact with external clients. In Ethereum, some contracts work at the blockchain level, and there is also an API that is supported by an Ethereum node. Clients that are created for Ethereum contracts support standard interfaces. For a client (such as MetaMask or Remix) to work in a web browser, it must work via the Web3 API. With Neon EVM, Ethereum dApps can be deployed on Solana without any edits to the source code or recompilation: dApps look and function exactly the same.

代理提供完整的 Web3 API 来与外部客户端交互。在以太坊中，一些合约在区块链层面工作，也有一个由以太坊节点支持的 API。为以太坊合约创建的客户端支持标准接口。要让客户端(例如 MetaMask 或 Remix)在 Web 浏览器中工作，它必须通过 Web3 API 进行。借助 Neon EVM，可以在 Solana 上部署以太坊 dApps，无需对源代码进行任何编辑或重新编译：dApps的外观和功能完全相同。

Clients will work on a different blockchain if they are provided the same interface. You can do this by changing the address for where these clients need to go. Ethereum contracts and clients do not need to be rewritten to work in Solana; you just need to register the proxy address. Any client can run a proxy to deploy a contract inside Solana. The interface that the clients interact with will be the same as for dApps running on Ethereum.

如果给客户端提供统一的接口，它们就可以在不同的链上工作/运行。您可以通过更改这些客户端需要去的地址来达成。以太坊合约和客户端无需重写即可在 Solana 中工作；您只需要注册代理地址。任何客户端都可以运行代理去 Solana 中部署合约。客户端与之交互的界面将与在以太坊上运行的 dApps 相同。

#### Neon EVM

Neon EVM runs inside BPF, which is run by Solana. Neon EVM is a Solana contract, so it recognizes the transaction format from the received batch. Neon EVM extracts data from each transaction, and therefore it can retrieve all the original user information that was placed in the transaction.

Neon EVM 运行在在 Solana 支持的 BPF 内部。Neon EVM 是一个 Solana 合约，因此它可以从收到的批次(批处理文件)中识别交易格式。Neon EVM 从每笔交易中提取数据，因此它可以检索内置在交易中的所有原始用户信息。

Neon EVM also validates the signature that is in the transaction. If the signature is authentic, Neon EVM takes the contract code that the transaction is addressed to and starts to execute it. As soon as the contract code has been executed successfully, Neon EVM records a new state.

Neon EVM 还验证交易中的签名。如果签名是真实(有效)的，Neon EVM 将获取交易相关的合约代码并开始执行。一旦合约代码成功执行，Neon EVM 就会记录一个新状态。

For example, if the transaction is a token transfer, the contract code sends tokens from one account to another. Neon EVM simply records this new state.

例如，如果交易是代币转移，合约代码会将代币从一个账户发送到另一个账户。Neon EVM 只是简单地记录这个新状态。

The user can also form a transaction to load a contract inside Neon EVM. In this case, the contract code will be written for Ethereum. A bytecode of this contract code will be loaded inside Neon EVM. The contract itself and its data will be stored inside Solana.

用户还可以发起交易，在Neon EVM中加载合约。在这种情况下，将参照以太坊规则编写合约代码。该合约代码的字节码会加载到 Neon EVM 中。合约本身及其数据将存储在 Solana 中。

#### 账户数据存储 (Account Data Storage)

Solana stores account data. Neon EVM has access to this storage, and uses the account data. After an account is registered in Solana, the account data is placed in this storage. Ethereum accounts are also stored here, but in the Solana representation. For each Ethereum address there is a corresponding account in the Solana representation. A contract code is placed in a corresponding account of this storage.

Solana 存储帐户数据。Neon EVM 可以访问此存储，并使用帐户数据。帐户在 Solana 中注册后，其数据将放置在此存储中。以太坊账户也存储在这里，但以 Solana 的形式。对于每个以太坊地址，在 Solana 表示中都有一个对应的帐户。一个合约代码被放置在这个存储对应的账户中。

Neon EVM interacts with a set of data that is stored on Solana's accounts. Neon EVM can take a contract code from there using the corresponding account address to validate a transaction. Neon EVM contains a virtual machine inside it that runs according to Ethereum rules.

Neon EVM 与存储在 Solana 帐户中的一组数据进行交互。Neon EVM 可以使用相应的账户地址从那里获取合约代码来验证交易。Neon EVM 内部包含一个根据以太坊规则运行的虚拟机。

### Neon如何工作? (How Neon Works)

A user calls a client that generates a transaction and sends it to the proxy, which is running the Neon EVM emulator inside it. (Fig. 2). The transaction is formed in accordance with the Ethereum rules, and contains mandatory fields, including:

用户调用客户端生成交易并发送到代理，代理在其中运行 Neon EVM 模拟器(图 2)。交易按照以太坊规则生成，包含必填字段，包括：

-  **Nonce:** the number of transactions sent from the current address.  
   **(密码学)随机数：**用来表示从当前地址发送的交易数量。

- **Signature:** generated in accordance with the Ethereum rules.  
   **签名**：按照以太坊规则生成。

- **Gas price:** fee the sender pays per unit of gas.  
   **Gas** 价格：发送方每单位Gas支付的费用。

- **Gas limit:** maximum amount of gas units that can be consumed by the transaction.  
   **Gas上限**：每笔交易可以消耗的最大gas单位数量。

- **Value:** amount of coins to transfer from sender to a recipient.  
   **价值**：从发送者转移到接收者的代币数量。

- **Recipient:** address of the recipient.  
   **接收人**：接收人地址。

![[Pasted image 20220420101739.png]]  

(图 2)

To perform this transaction, the Neon EVM emulator makes a request to Solana to get state data. The proxy requests a blockchain state from Solana and makes a test launch of N-trx using the Solana state. On the basis of the data received, Proxy forms the new transaction according to Solana's rules. The transaction generated for Solana will contain the packaged N-trx, as well as the account data required to complete the transaction, including:

为了执行这笔交易，Neon EVM 模拟器向 Solana 发出请求以获取状态数据。代理从 Solana 请求区块链状态，并使用 Solana 状态测试启动N交易。根据收到的数据，代理根据 Solana 规则生成新的交易。为 Solana 生成的交易将包含打包好的N交易，以及完成交易所需的账户数据，包括：

- The Payer. (The account that pays for the transaction.)  
   付款人(交易的付款账户)。

- Other accounts involved in the execution of this transaction.  
   其他参与本次交易执行的账户。

Next, the transaction is forwarded inside Solana, where participants of the transaction are determined according to the account data. The data added includes details about people who initiate and take part in processing the transaction. The operator of the proxy is specified as the payer. The payer will be rewarded for completing the transaction.

接下来，交易在 Solana 内部转发，根据账户数据确定交易的参与者。添加的数据包括有关发起和参与处理交易的各方的详细信息。代理的运营方被指定为付款人。付款人会因完成交易而获得奖励。

Next, the transaction is transferred to Neon EVM, where its signature is checked according to Ethereum rules. If the signature is valid, the transaction will be transferred to the Solana blockchain for execution. Since testing of N-trx is carried out, it is possible to provide Solana with all the necessary information to run the execution of the N-trx in parallel.

接下来，交易被转移到 Neon EVM，根据以太坊规则检查其签名。如果签名有效，交易将被转移到 Solana 区块链上执行。由于执行了N交易的测试，为 Solana 提供并行执行N交易所需要的全部必要信息就变得可能了。

### Neon方案所带来的好处(The Neon solution offers the following benefits)

Neon's solution offers the following benefits:  
Neon方案有以下优势：

- No changes or additional resources are required to implement dApps on Solana.  
   在 Solana 上部署 dApps 不需要任何更改或额外资源。

- No need to rewrite clients for all existing dApps, since the Ethereum node interface remains unchanged, and therefore clients can run on the Solana node without changes also.  
   无需为目前所有的(以太坊) dApps 重写客户端，因为以太坊节点接口保持不变，因此客户端也可以在 Solana 节点上运行而无需更改。

- No need to rewrite contracts for existing dApps.  
   无需为现有 dApp 重写合约。

- Solana developers are given the opportunity to:  
   Solana 开发人员有机会:    
    - Use a unique toolkit created for Ethereum.  
       使用为以太坊创建的独特工具包。
    - Create and deploy their contracts on the Solana network.  
       在 Solana 网络上创建和部署合约。

- Unlike Ethereum, Neon EVM can be updated at any time, which means that new functionality can be added at any time and code updates can take place simply by uploading them as a new smart contract.  
   与以太坊不同，Neon EVM 可以随时更新，意味着可以随时添加新功能，并且只需将其作为新智能合约上传就可以更新。