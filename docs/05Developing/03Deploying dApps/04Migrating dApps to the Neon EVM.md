---
sidebar_position: 4
title: 向Neon EVM迁移dApps (Migrating dApps to the Neon EVM)
---

The purpose of this document is to demonstrate to Ethereum users how easily their dApps can be ported to the Neon EVM. Using [*Neon Swap*](/01About/02Terminology#neonswap) as an example/, we wil show you how to run dApps on [*Solana*](https://docs.solana.com/introduction) without any software code changes.

本文档的目的是向以太坊用户展示他们的 dApp 可以多么容易地移植到 Neon EVM。以 [Neon Swap](/01About/02Terminology#neonswap) 为例，我们将向您展示如何在 [*Solana*](https://docs.solana.com/introduction)上运行 dApp，而无需更改任何代码。

Every dApp includes a contract and a software supporting that contract. In the Neon EVM, all dApps are deployed via Neon proxies. To deploy a dApp, it needs to send a request to a proxy, after which the proxy will automatically deploy contracts of the dApp in the Neon EVM environment. Contracts are loaded into a chain, and the software is deployed on a separate server for providing users interaction with these contracts.

每个 dApp 都包含一个合约和支持该合约的软件。在 Neon EVM 中，所有 dApp 都通过 Neon 代理部署。部署 dApp 需要向代理发送请求，代理会自动在 Neon EVM 环境中部署 dApp 的合约。合约被加载到链上，软件则部署在单独的服务器上，来为用户与这些合约交互。

In this description we show you how you can port Uniswap services to the Neon EVM environment. Since we do not have native keys to Uniswap, we will use a fork of Uniswap-V2 called [NeonSwap](/01About/02Terminology#neonswap).

在本描述中，我们将向您展示如何将 Uniswap 服务移植到 Neon EVM 环境。由于我们没有 Uniswap 的本地密钥，我们将使用 Uniswap-V2 的一个分支，称为 [NeonSwap](/01About/02Terminology#neonswap)。

Migrating dApps to the Neon EVM is done in three stages:  
迁移需要分3阶段：

- Stage 1 - Deploying contracts in a Neon EVM environment    
   第 1 阶段 - 在 Neon EVM 环境中部署合约

- Stage 2 - Checking if the deployed contracts work correctly  
   第 2 阶段 - 检查部署的合约是否正常工作

- Stage 3 - Deploying the interface of the contracts  
   第 3 阶段 - 部署合约接口

#### 第 1 阶段 - 在 Neon EVM 环境中部署合约（Stage 1. Deploying Contracts in a Neon EVM Environment）

Using NeonSwap as an example, we can demonstrate that no changes to software serving contracts are required to port dApps. Changes are made only to those components that are necessary for its operation on he Neon EVM.

以 NeonSwap 为例，我们可以证明迁移 dApp 不需要更改软件服务合约。只需要更改在 Neon EVM 上运行所需的组件。

The contracts are built by a typical Solidity compiler used in Ethereum. After compilation, all the necessary contracts are deployed on the Neon EVM using a Web3 proxy. This proxy provides a standard interface that Ethereum utilities and tools can use.

这些合约由以太坊中使用的典型 Solidity 编译器构建。编译后，所有必要的合约都使用 Web3 代理部署在 Neon EVM 上。该代理提供了以太坊实用程序和工具可以使用的标准接口。

For example, Uniswap includes the following list of contracts that need to be deployed:

例如，Uniswap 包括以下需要部署的合约列表：

- Governance  
- Uniswap-v2-periphery  
- Multicall  

##### 为部署合约的更改(Changes for Deploying Contracts)

When deploying Uniswap in Neon EVM contracts, we made the following changes to them:

在 Neon EVM 合约中部署 Uniswap 时，我们对其进行了以下更改：

- The timeout value was increased.  
   超时值增加

- The number of repeated requests for transaction recipes was increased:  
   交易回执的重复请求次数增加：

```js
// The call  
    wait factoryV1.createExchange(WETHPartner.address, overrides)
// was replaced with  
    let id = await factoryV1.createExchange(WETHPartner.address, overrides) let receipt = await provider.waitForTransaction(id.hash, 3)
```

- Added the `deploy contracts()` method.  
   添加`deploy contracts()` 方法

Due to the fact that we did not have native keys to Uniswap, we had to change the addresses of the following uploaded contracts:

由于我们没有 Uniswap 的本地密钥，我们不得不更改以下上传合约的地址：

- UNI_ADDRESS

- TIMELOCK_ADDRESS

- GOVERNANCE_ADDRESS

- MULTICALL_ADDRESS

- MIGRATOR_ADDRESS

- FACTORY_ADDRESS

- ROUTER1_ADDRESS

- ROUTER_ADDRESS

- V1_FACTORY_ADDRESS

- WETH_ADDRESS

#### 第 2 阶段 - 检查部署的合约是否正常工作 (Stage 2. Check if the Deployed Contracts Work Correctly)

Contract health checks are performed in a real chain, not in a test environment, which is fully managed.

合约的健康检查在真正的链中执行，而不是在完全托管的测试环境中执行。

Unlike the test environment, in a real working chain the range of test operations cannot be performed in full. (For example, operations such as generating a block with a specified number of transactions are excluded.) In a chain, all operations rely on real-time, and a user checking the contracts cannot influence the block generation.

与测试环境不同，在真实的工作链中，测试操作的范围不能全部执行。（例如，不包括生成具有指定交易数量的块等操作。）在链中，所有操作都依赖于实时，用户检查合约不能影响块的生成。

To test NeonSwap, we use the entire set of Uniswap-v2-core tests available in their repository for testing on Ethereum. The method of running these tests has been changed. Before running the tests, it is indicated that the deployment of contracts, calls to their methods, as well as testing takes place not in the test framework, but in the real blockchain.

为了测试 NeonSwap，我们使用存储库中可用的整套 Uniswap-v2-core，在以太坊上进行测试。运行这些测试的方法已更改。在运行测试之前，需要表明：合约的部署、方法的调用以及测试不是在测试框架中进行，而是在真正的区块链中进行。

>For testing, we use an unmanaged environment. However, in Uniswap-v2-core tests (in contracts), there are sections of program code that contain environment management. In these pieces, we were able to successfully replace the environment management to expectation for a reaction from a chain. That is, where the block is to be generated, a delay is set. Then an action is performed and the reaction of the contract is evaluated; namely, whether it meets the expectation or not. At the same time, we believe that the number of blocks produced may be different.
>
对于测试，我们使用非托管环境。但是，在 Uniswap-v2-core 测试中（在合约中），有部分程序代码包含环境管理。在这些代码中，我们能够成功地将环境管理替换为对链的期望。也就是说，在要生成块的地方设置延迟。然后执行一个动作并评估合约的反应；即其是否符合预期。同时，我们认为出块的数量可能会有所不同。


The need to adapt tests is because tests must issue correct results regardless of the run conditions.

调整测试的需要是因为无论运行条件如何，测试都必须得到正确的结果。

##### 运行Uniswap-v2-core 套件的更改 (Changes for Running the Uniswap-v2-core Test Suite)

The following changes were made to run the Uniswap-v2-core test suite in the Neon EVM:

为了在 Neon EVM 中运行 Uniswap-v2-core 测试套件，进行了以下更改：

- Increased timeouts when expanding contracts  
   扩展合约的超时时间增加

- Changed ChainId
   改变了链ID

- Replaced the rcp-request libraries, including the following: `Web3Provider` and `MockProvider` replaced with `JsonRpcProvider`  
   替换了 rcp-request 库，包括：`Web3Provider` 和 `MockProvider` > 替换为 `JsonRpcProvider`

- Changed the test using the **mineBlock()** method  
   使用**mineBlock()**方法修改测试

- Increased the number of re-requests in the `ethereum-waffle` library for receiving transaction receipts, including the following:  
   加了 `ethereum-waffle` 库中接收交易回执的重新请求数量，包括：

```js
// In the file  
uniswap-v2-core/node_modules/@ethereum-waffle/chai/dist/cjs/matchers/emit.js  
// the line  
const derivedPromise = promise.then((tx) => contract.provider.getTransactionReceipt(tx.hash) ).then((receipt) => {  
// was replaced with  
const derivedPromise = promise.then((tx) => contract.provider.waitForTransaction(tx.hash, 3) ).then((receipt) => {  
```

- Increased the value of `gasLimit` in the `ethereum-waffle` library.  
   增加了 `ethereum-waffle` 库中 `gasLimit` 的值。

#### 第 3 阶段 - 部署合约接口(Stage 3. Deploying the Uniswap Interface)

After we have got the addresses of the contracts loaded into the Neon EVM, we can start deploying the Uniswap interface. It is necessary to specify that we use a real blockchain, and our contracts are located in this blockchain.

在我们将合约地址加载到 Neon EVM 后，我们就可以开始部署 Uniswap 接口了。有必要指定我们使用真实的区块链，并且我们的合约就在该区块链中。

##### NeonSwap 接口的更改 (Changes for the NeonSwap Interface)

For the [NeonSwap](/01About/02Terminology#neonswap) interface to function successfully in the Neon EVM, we made the following changes:

为了在 Neon EVM 中成功运行 [NeonSwap](/01About/02Terminology#neonswap) 接口，我们进行了以下更改:  

- Added a new testnet to the adapted NeonSwap interface code. The name of the new network with the new chain-ID is registered in all places where it was used:  
   向适配后的 NeonSwap 接口代码添加测试网。具有新链 ID > 的新网络的名称已在所有使用它的地方注册:  

  - Added `ChainId LOCAL` to dependent libraries and sources.  
   依赖库和源新增`ChainId LOCAL`。

  - ChainID, url was specified in the .env file.  
   ChainID, url 在.env 文件中指定。

- For the new network, a set of the loaded contracts was registered. In the directory `node_modules`, the addresses of contracts in the sources and dependent libraries were replaced.  
   对于新网络，一组加载的合约也被注册。在 `node_modules` > 目录中，替换了源和依赖库中的合约地址。

>More details  
>更多细节
>
>A quick guide to using NeonSwap can be found in How to Swap ERC-20 Tokens.
>  
>一个关于使用NeonSwap的快速向导可以在 How to Swap ERC-20 Tokens 找到
>
>All changes we made for porting the Uniswap service to the Neon EVM can be found in the [Uniswap-v2-core Repository](https://github.com/neonlabsorg/uniswap-v2-core).  
>
>我们为将 Uniswap 服务移植到 Neon EVM 所做的所有更改都可以在 [Uniswap-v2-core Repository](https://github.com/neonlabsorg/uniswap-v2-core)存储库中找到。
