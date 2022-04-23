---
sidebar_position: 3
title: Gas
---
Gas is required for the Ethereum network. This is the fuel that allows it to work, just as a car needs gasoline to run.

以太坊网络需要 Gas。这是让它工作的燃料，就像汽车需要汽油才能运行一样。

#### 什么是gas?(What is gas?)

Gas is a unit of measurement that determines the amount of computational effort required to perform certain operations on the Ethereum network.

Gas 是一种计量单位，用来确定在以太坊网络上执行某些操作所需的计算量。

Since each transaction requires computational resources to execute, each transaction requires a fee. Gas refers to the fee required to successfully conduct a transaction on the network.

由于每笔交易都需要计算资源来执行，因此每笔交易都需要收费。Gas是指在网络上成功进行交易所需的费用。

Performing any operation on Ethereum requires gas consumption. This includes calculations, storing or manipulating data, or transferring tokens, each consuming different amounts of "gas" units. As dApp functionality becomes more complex, the number of operations a smart contract performs grows too, and all of them lead to large amounts of gas that must be paid for.

在以太坊上执行任何操作都需要消耗gas。这包括计算、存储或操作数据，或传输代币，每一个都消耗不同数量的“gas”单位。随着 dApp 功能也变得越来越复杂，智能合约执行的操作数量也在增加，所有这些均会导致大量的gas支出。

#### 什么是gas上限?(What is gas limit?)

Gas limit means the maximum amount of gas you are willing to consume on a transaction. A higher gas limit means more computational work can be done while interacting with smart contracts.

Gas上限是指您愿意在交易中消耗的最大gas量。更高的gas上限意味着在与智能合约交互时可以完成更多的计算工作。

For example if you put a gas limit of 50,000 for a simple coin transfer, the coins would consume 21,000, and you would get back the remaining 29,000. However, if you specify too little gas say for example, a gas limit of 20,000 for a simple coin transfer, the coins will consume your 20,000 gas units attempting to fulfill the txn, but it will not complete. The EVM then reverts any changes, but since 20k gas units worth of work has already been done that gas is consumed.

例如，如果您为简单代币转账设置了 50,000 的gas上限，代币将消耗 21,000，而您将取回剩余的 29,000。但是，如果您指定的 gas 太少，例如，简单代币转账的 gas上限为 20,000，硬币将消耗您尝试用20,000 个 gas 单位履行交易，但不会完成。虽然 EVM 不会有任何改变，但由于已经完成了 20k gas 单位的工作，所以因此也消耗了 gas。

>More details
>更多细节
>
>[GAS and FEES](https://ethereum.org/en/developers/docs/gas/)