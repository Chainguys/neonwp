---
sidebar_position: 2
title: 使用Truffle (Using Truffle)
---

This page outlines a methodology for deploying and testing contracts in Neon EVM using the Truffle tool. This technique can be useful for personnel involved in the development and maintenance of Neon EVM.

本页阐述使用 Truffle 工具在 Neon EVM 中部署和测试合约的方法。该技术对于参与 Neon EVM 开发和维护的人员非常有用。

It should be noted that Ethereum contracts can also be successfully deployed in Neon EVM using Remix in manual mode. Since Remix has not so many capabilities, it turned out to be not very convenient in software development, and therefore we provide developers a more advanced methodology using Truffle.

请注意，以太坊合约也可以通过手动模式使用 Remix部署在 Neon EVM 中。由于 Remix 没有那么多功能，所以在软件开发中不是很方便，因此我们为开发人员提供了使用 Truffle 的更高级的方法。

#### 目标(The Goal)

Our main goal with Truffle is to make it easier for developers to deploy and debug contacts in Neon EVM.

我们使用 Truffle 的主要目标是让开发人员更容易在 Neon EVM 中部署和调试智能合约。

With Truffle, you get:  
使用Truffle，您可以:

- Simple setting of configuration parameters.  
   简单设置参数。

- An easy process of deploying and debugging contacts in the network.  
   方便地在网络中部署和调试智能合约。

- Automated deploying and running tests.  
   自动化部署和测试。

#### 安装(Installation)

##### 设备需求(Requirements for your device)

The following softwares must be installed on your device:  
您的设备上必须安装：

- NodeJS v8.9.4 or later (NodeJS v8.9.4 或更高版本)
- Web3 v1.2.0 or later (Web3 v1.2.0 或更高版本)

>Note: Although this tutorial uses the Ubuntu platform, the instructions provided can be applied to other Linux platforms.
>
>注意：虽然本教程使用的是 Ubuntu 平台，但提供的说明可以适用于其他 Linux 平台。

##### 安装Truffle (Installation of Truffle)

If Truffle is already installed on your device, you can skip this section and move on to the next one. For those just getting started, you need to go through this section.

如果您的设备上已经安装了 Truffle，您可以跳过并继续下一个部分。对于新手，您需要阅读本节。

>Note: This page is just a quickstart. To go into much detail here, you can see the [Truffle documentation](https://www.trufflesuite.com/docs/truffle/getting-started/installation).
>
>注意：此页面只是一个快速入门。要在此处详细介绍，您可以查看 [Truffle 文档](https://www.trufflesuite.com/docs/truffle/getting-started/installation)。

Create a new directory for your Truffle project:  
为您的 Truffle 项目创建一个新目录:  

```bash
$ mkdir <project name>
$ cd <project name>
```

Install Truffle:  
安装Truffle：

```bash
$ npm install truffle
```

Initialize the project directory by running the following command:  
运行以下命令初始化项目目录:  

Once this operation is completed, you will have a project structure with the following items:

完成此操作后，您将拥有一个包含以下的项目结构：

- `contracts/` --- Directory for Solidity contracts.  

`contract/` --- Solidity 合约目录。

- `migrations/` --- Directory for scriptable deployment files.  

`migrations/` --- 可编辑脚本的部署文件之目录。

- `test/` --- Directory for test files for testing your contracts.  

`test/` --- 用于测试合约的测试文件之目录。

- `truffle-config.js` --- Truffle configuration file.  

`truffle-config.js` --- Truffle配置文件。

You can run truffle compile, truffle migrate and truffle test to compile your contracts, deploy them to the network, and run their associated unit tests.

你可以运行 `truffle compile、truffle migrate` 和 `truffle test` 来编译你的合约，将它们部署到网络上，并运行它们相关单元测试。

##### 安装HDWalletProvider 库(Installation of the HDWalletProvider library)

HD Wallet-enabled Web3 provider (HDWalletProvider) is a standalone library. One of its functions is signing transactions with private keys. Since the Neon EVM proxy does not store private keys, it cannot sign transactions. Therefore, during debugging contracts, the HDWalletProvider library is used to sign transactions for addresses derived from a 12 or 24 word mnemonic.

可支持 HD Wallet 的 Web3 供应方 (HDWalletProvider) 是一个独立的库。它的功能之一是使用私钥签署交易。由于 Neon EVM 代理不存储私钥，所以无法签署交易。因此，在调试合约期间，HDWalletProvider 库用于对源自 12 或 24 字助记词的地址的交易进行签名。

By default, the Truffle installation does not provide the HDWalletProvider library. If during the installation of Truffle none of the applications also required the HDWalletProvider library to be installed, you need to install it separately.

Truffle 安装时默认不提供 HDWalletProvider 库。如果在安装 Truffle 期间没有任何应用程序也需要安装 HDWalletProvider 库，则需要单独安装它。

Install the HDWalletProvider library:  
安装代码:  

```bash
$ npm install @truffle/hdwallet-provider
```

>**Note:** To go into much detail here, you can see the [official documentation](https://www.npmjs.com/package/@truffle/hdwallet-provider).
>
>**注意**：要详细了解这里，您可以查看[官方文档](https://www.npmjs.com/package/@truffle/hdwallet-provider)。

#### 将Truffle 连接到代理(Connecting Truffle to a Proxy)

To connect Truffle to a proxy on `node.js`, the `eth_accoun`ts method from the [Ethereum JSON RPC API](https://eth.wiki/json-rpc/API) set is required. This method allows serving a list of 20 Bytes-addresses owned by a client. Since the Neon EVM proxy does not support the `eth_accounts` method required to connect Truffle , the HDWalletProvider library is used to function as this method. The connection is configured in `truffle-config.js.`

要将 Truffle 连接到 `node.js` 上的代理，需要 [Ethereum JSON RPC API](https://eth.wiki/json-rpc/API) 集的 `eth_accounts` 方法。此方法允许服务客户端拥有的 20 字节地址列表。由于 Neon EVM 代理不支持连接 Truffle 所需的 `eth_accounts` 方法，因此 `HDWalletProvider` 库用作此方法。连接在 `truffle-config.js` 中配置。

The configuration file is publicly available and therefore, `word mnemonic` and `private key` contained in the file are also publicly available. This makes it possible to use this data by the library. HDWalletProvider obtains `word mnemonic` or `private key` from the configuration file and uses this data to sign transactions before sending them to the proxy.

配置文件是公开的，因此文件中包含的`助记词`和`私钥`也是公开的。如此，库就可以使用这些数据。 HDWalletProvider 从配置文件中获取`助记词`或`私钥`，并在将交易发送到代理之前使用此数据对交易进行签名。

This method of configuration is convenient for debug mode, but not suitable for work in real conditions. Since the development process uses "test" wallets, this data is not of any value.

这种配置方式很方便调试，但不适合实际工作。由于开发过程使用"测试"钱包，因此这些数据没有任何价值。

#### 配置(Configuration)

Your configuration file is called `truffle-config.js` and is located at the root of your project directory. This file is a JavaScript file and can execute any code necessary to create your configuration.

您的配置文件名为 `truffle-config.js`，位于项目的根目录下。该文件是一个 JavaScript 文件，可以执行创建配置所需的任何代码。

#### 编译合约(Compiling Contracts)

All of your contracts are located in your project's `contracts/` directory. To compile a Truffle project, change to the root of the directory where the project is located and run the following command:

您所有智能合约都位于项目的 `contracts/` 目录中。要编译 Truffle项目，请切换到项目所在根目录并运行以下命令：

```bash
$ truffle compile
```

Upon first run, all contracts will be compiled. Upon subsequent runs, only those contracts will be compiled that have changed since the last compilation.

首次运行时，所有合约都将被编译。在随后的运行中，只有那些(自上次编译后)发生变化的合约才会被编译。

If you want to re-compile all contracts, run the above command with the `\--all` option:

如果要重新编译所有合约，请使用 `\--all` 选项运行上述命令：

```bash
$ truffle compile --all
```

#### 运行迁移 (Running Migrations)

Migration is used to deploy your contracts to the network. This operation is performed using JavaScript files contained in the `migration/` directory. Migrations are simply a set of managed deployment scripts.

迁移会将您的合约部署到网络。此操作使用包含在 `migration/` 目录中的 JavaScript 文件执行。迁移只是一组托管部署脚本。

Run migrations to deploy contracts:  
运行迁移来部署合约:

```bash
$ truffle migrate
```

This will run all migrations located within the `migrations/` directory. If your migrations were previously run successfully, truffle migrate will start execution from the last migration that was run, running only newly created migrations. If no new migrations exist, truffle migrate won't perform any action.

这会运行 `migrations/` 目录中的所有迁移。如果您的迁移之前已成功运行，则 truffle migrate 将从上次运行的迁移开始执行，仅运行新创建的迁移。如果没有新的迁移，则 truffle migrate 不会执行任何操作。

If you need to run all migrations from the beginning, instead of running from the last completed migration, you can use the `\--reset` option:

如果您需要从头开始运行所有迁移，而不是从上次完成的迁移运行，您可以使用 `\--reset` 选项：

```bash
$ truffle migrate --reset
```

The full set of options that you can use during running migrations are listed in the page with [truffle migrate](https://trufflesuite.com/docs/truffle/reference/truffle-commands#migrate) command.

您可以在运行迁移期间使用的全套选项，都可以在[truffle migrate](https://trufflesuite.com/docs/truffle/reference/truffle-commands#migrate) 命令页面中查看。

#### 测试合约(Testing Contracts)

All test files should be located in the `test/` directory.  
所有测试文件都应位于 `test/` 目录中。

To run all tests by default, simply run:  
只需要运行以下代码就可以运行所有默认测试:  

```bash
$ truffle test
```

To run only one file from the entire test suite or a specific file that is not in `test/`, you need to specify the full name of that file:

只想运行整个测试套件中的一个文件或不在 `test/` 中的特定文件，您就需要指定该文件的全名：

```bash
$ truffle test <./path/file.js>
```

The full set of options that you can use during testing are listed in the page with [truffle migrate](https://trufflesuite.com/docs/truffle/reference/truffle-commands#migrate) command.

您可以在测试期间使用的全套选项，都可以在[truffle migrate](https://trufflesuite.com/docs/truffle/reference/truffle-commands#migrate) 命令页面中查看。

#### 设置配置文件举例(Example of configuration file settings)

The example of the configuration file for connecting Truffle to a proxy using the one-way library on Node.js:

使用 Node.js 上的单向库(one-way library)，将 Truffle 连接到代理的配置文件的示例：

```node
const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send

const provider = new Web3.providers.HttpProvider("https://proxy.devnet.neonlabs.org/solana");

const privateKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; // Specify your private key here

module.exports = {
  networks: {
    neonlabs: {
      provider: () => {
        return new HDWalletProvider(
          privateKey,
          provider,
        );
      },
      from: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx", // Specify public key corresponding to private key defined above
      network_id: "*",
      gas: 3000000000,
      gasPrice: 443065000000,
    }
  }
};
```

>Note: If both mnemonic and private keys are provided, the mnemonic is used.
>
>注意：如果提供助记词和私钥，则使用助记词。

Use next command to deploy contracts using **neonlabs** network:  
使用下一个命令,在**neonlabs**部署合约:  

```bash
truffle migrate --network neonlabs
```

#### 示例文件(Example Project）

You can obtain example Truffle project from here  
您可以在此处查看示例文件：

 <https://github.com/neonlabsorg/examples/tree/main/simple-erc20-truffle>

