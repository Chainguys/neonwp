---
sidebar_position: 1
title: 迭代交易的限制(Restriction on Iterative Transactions)
---

Executing a transaction in iterative mode is a sequence of actions, each of which is performed by a separate account specified in it. The list of accounts is specified by the creator of the transaction.

用迭代模式执行交易包含一系列操作，每个操作都由其中指定的单独帐户执行。账户列表由交易的创建者指定。

#### 问题描述(Description of the problem)

When executing a transaction in iterative mode via Neon EVM, a user may receive the error with a message about a blocked account. In this case, further execution of the transaction is terminated. This can happen despite the fact that the execution of the same transaction on Ethereum completes successfully. This fact confuses the user even more, since they are sure of the correctness of the transaction they has created.

当通过 Neon EVM 用迭代模式执行交易时，用户可能会收到账户被封锁的消息提示。在这种情况下，交易的进一步执行被终止。尽管在以太坊上执行相同的交易成功完成，但仍可能发生这种情况。这个事实让用户更加困惑，因为他们确信他们创建的交易的正确性。

#### 细节(Details)

The error is not typical for Ethereum and only appears in Neon EVM. The reason for the error with the message about blocked accounts lies in the processing of iterative transactions in Neon EVM.

该错误不是以太坊的典型错误，仅出现在 Neon EVM 中。关于被封锁帐户的消息提示的原因在于 Neon EVM 中迭代交易的处理。

Processing an iterative transaction in Neon EVM:

在 Neon EVM 中处理迭代交易：

- Neon EVM receives the transaction for iterative execution and first marks the accounts specified in it for blocking.  
   Neon EVM 接收到交易进行迭代执行，首先将其中指定的账户标记为封锁。

- When the next transaction enters Neon EVM, the list of accounts specified in it and involved in its execution is viewed. If at this moment any listed account is in a blocked state for iterative execution in another transaction, Neon EVM returns the error.  
   下一笔交易进入 Neon EVM 时，会查看其中指定并参与其执行账户的列表。如果此时任何列出的帐户因在另一个交易中迭代执行而处于封锁状态，Neon EVM 将返回错误。

- The first transaction that blocked accounts will unblock them only when it is completed.  
   第一笔被封锁账户的交易只有在完成后才会解除封锁。

The point of this implementation for Mainnet is to have a consistent state for Solana accounts during the execution of the transaction until it completes. Since the transaction is executed in iterative mode, there are time intervals between the steps being executed. Therefore, such a solution excludes the possibility of changing the data of Solana’s accounts located in system state during these intervals.

在主网实施这个操作的目的是为了在交易执行到结束期间维护Solana 账户的(一致)状态。由于交易以迭代模式执行，因此执行的步骤之间存在时间间隔。因此，这样的解决方案排除了在间隔期间更改在系统状态的 Solana 帐户数据的可能。

#### 解决方案(Solution)

Issuing the error about blocked accounts when starting a transaction is a temporary solution (workaround). The final decision will be made after MVP on Mainnet.

在开始交易时发出有关被封锁帐户的提示是一种临时解决方案(解决方法)。最终决定将在主网 MVP 之后做出。