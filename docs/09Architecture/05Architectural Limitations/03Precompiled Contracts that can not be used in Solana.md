---
sidebar_position: 3
title: 无法在 Solana 中使用的预编译合约(Precompiled Contracts that can not be used in Solana)
---


#### 问题(Problem)

Contracts written in the Solidity language cannot work in Solana if they contain calls to the following precompiled contracts:

用 Solidity 语言编写的合约如果包含对以下预编译合约的调用，则无法在 Solana 中运行：

- **_bigModExp_** — Used for efficient RSA verification inside of EVM, as well as other forms of number theory-based cryptography.  
   **_bigModExp_** —用于 EVM 内部的高效 RSA 验证，以及其他形式的基于数论的密码学。

- **_bn256Add_** — Performs addition on the elliptic curve operations.  
   **_bn256Add_** —对椭圆曲线操作进行加法运算。

- **_bn256ScalarMult_** — Performs scalar multiplication on the elliptic curve operations.  
   **_bn256ScalarMult_** — 对椭圆曲线操作执行标量乘法。

- **_bn256Pairing_** — Elliptic curve pairing operations to perform zkSNARKs verification within the block gas limit.  
   **_bn256Pairing_** — 椭圆曲线配对操作，在区块的gas上限内执行 zkSNARKs 验证。

Neon EVM requires the implementation of system calls in Solana for these contracts.  

Neon EVM 需要在 Solana 中为这些合约实现系统调用。

#### 细节(Details)

A solidity contract can contain calls to functions supported by EVM itself. For example, to perform operations such as addition, subtraction, obtaining a hash block, a contract can use methods implemented in EVM. Each called function is an operation-code. EVM contains some such codes (in a limited number).

Solidity 合约可以包含对 EVM 本身支持函数的调用。例如，为了执行加法、减法、获取哈希块等操作，合约可以使用 EVM 中已有的方法。每个被调用的函数都是一个操作码。 EVM 包含一些这样的代码(但数量有限)。

To increase the number of such functions, precompiled contracts implemented inside the blockchain core are used. Since these contracts are written in Solidity, their use requires an increased consumption of resources (i.e. gas). Neon EVM contains several pieces of the program code where calls to these precompiled contracts can occur.

为了增加此类功能的数量，就使用了在区块链核心内部实现的预编译合约。由于这些合约用 Solidity 编写，因此它们的使用需要增加资源消耗(即gas)。 Neon EVM 包含几段程序代码，可以调用这些预编译的合约。

If the program enters such places, Neon EVM does not create a new contract, but calls an already compiled contract from the blockchain core. Although these functions are called within the core, in the code it is like calling another contract. Since this code is executed directly in the core, it is resource intensive.

如果程序进入这些地方，Neon EVM 不会创建新合约，而是从区块链核心调用已经编译好的合约。虽然这些函数是在核心中调用的，但在代码中就像调用另一个合约一样。由于此代码直接在内核中执行，因此是资源密集型的(会耗费大量资源)。

Currently, there are several precompiled contracts implemented as bpf-code. When calling these contracts, a lot of bpf-instructions are used, and therefore, the transaction size limit may be exceeded.

目前，有几个预编译合约实现为 bpf 代码。在调用这些合约时，会使用大量的 bpf 指令，因此可能会超出交易大小限制。

#### 解决方案(Solution)

In order for the precompiled contracts to be used in Solana, it is proposed to implement sys-calls inside the Solana core. That is, to perform an implementation similar to the erc-recover implementation.

为了在 Solana 中使用预编译的合约，已经有建议要在 Solana 核心内实现系统调用。也就是说，执行类似于 erc-recover的实施。

#### 实施策略(Implementation Strategy)

1. Preparing the necessary changes to support precompiled contracts in the Solana core.  
   准备必要的更改以支持 Solana 核心中的预编译合约。

2. Create pull requests for the Solana core to make these improvements.  
   为 Solana 核心创建拉取请求(pull requests)来进行这些改进。

3. Testing changes in Testnet.  
   在Testnet中测试修改

4. Testing changes in Devnet.  
   在Devnet中测试修改

5. Testing changes in Mainnet.  
   在Mainnet中测试修改

6. Update Neon EVM to support these precompiled contracts.  
   更新 Neon EVM 来支持这些预编译合约。