---
sidebar_position: 6
title: 以太坊交易(Ethereum transaction)
---

An Ethereum transaction is a cryptographically signed instruction from an account. The account initiates a transaction to update the state of the Ethereum network. An Ethereum transaction refers to an action initiated by an external account, i.e. an account managed by a person, not a contract.

以太坊交易是指来自账户的加密签名指令。该帐户发起交易来更新以太坊网络的状态。以太坊交易指的是由外部账户发起的操作，即由“人”管理的账户，而不是智能合约。

A transaction, which changes the state of the EVM, needs to be broadcast to the whole network. Any node can broadcast a request for a transaction to be executed on the EVM. Transactions require a fee and must be mined to become valid.

改变 EVM 状态的交易需要广播到全网。任何节点都可以广播在 EVM 上执行交易的请求。交易需要付费，并且必须被“挖矿”才能生效。

#### 一笔交易内到底有什么?(What is in a transaction?)

A transaction includes the following information:

一笔交易包含如下信息：

- **_Recipient_** – recipient address.  
   **_接收者_** – 接收地址。

- **_Signature_** – identifier of the sender (sender's signature with a private key).  
   **_签名_** – 发送者的标识(发送者的私钥签名)。

- **_Value_** – amount of coins to transfer from sender to recipient.  
   **_价值_** – 从发送者到到接收者的代币数量。

- **_Data_** – (optional field) arbitrary data.  
   **_数据_** – (可选字段)任意数据。

- **_GasLimit_** – maximum amount of gas units that can be consumed by the transaction.  
   Gas上限 – 交易可以消耗的最大gas的单位数量。

- **_GasPrice_** – fee the sender pays per unit of gas.  
   Gas价格 – 发送者每单位gas支付的费用

#### 注意(Note)

- The block that your transaction is placed in can also contain many other transactions. Checking such a block for the validity of transactions may take more time. Higher priority transactions are served first.  
   你交易所在的区块还可能还包含很多其他的交易。检查这样一个区块的交易有效性可能需要更多时间。优先级较高的交易会被优先“关照”。

- If the network is busy and miners aren't able to keep up, they always prioritise transactions with higher GasPrice because they get to keep the fees.  
   如果网络繁忙，矿工可能力不从心，他们总是会优先考虑 Gas价格较高的交易，因为他们可以保留(更多)费用。

- A transaction gets a block confirmation number. This is the number of blocks created since the block that this transaction was included in. The higher the number, the greater the certainty that the transaction was processed and recognised by the network. For higher value transactions, more block confirmations may be desired.  
   一笔交易获得一个区块确认号。这是自此次交易所在区块以来(新)创建的区块数。数字越高，交易被网络处理和识别的确定性就越大。对于更高价值的交易，可能需要更多的区块确认。

>More details  
>更多信息
>
>[Transactions](https://ethereum.org/en/developers/docs/transactions/)