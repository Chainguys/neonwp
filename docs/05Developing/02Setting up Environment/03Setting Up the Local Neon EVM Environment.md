---
sidebar_position: 3
title: 配置本地Neon EVM 环境 (Setting Up the Local Neon EVM Environment)
---

This step-by-step guide describes how to install, configure, and test the local Solana cluster with Neon EVM onboard. It will help new developers create their own environment and run Ethereum programs wrapped into the Neon EVM.

本指南介绍了如何一步步使用Neon EVM 安装、配置和测试本地 Solana 集群。它将帮助新开发人员创建自己的环境并运行封装在 Neon EVM 中的以太坊程序。

The [Neon EVM](https://neon-labs.org/) is a solution that performs transaction execution outside layer 1. The development process can be run on any modern Linux or Mac system, though this document is based on an Ubuntu 20.04 experience.

[Neon EVM](https://neon-labs.org/) 是一种在第 1 层（layer 1）之外执行交易的解决方案。虽然本文档基于 Ubuntu 20.04，但开发过程可以在任何现代 Linux 或 Mac 系统上运行，。

All the services in the `Neon EVM environment` presented by the docker-compose configuration files can be interchangeably substituted with their experimental versions in order to develop and test each service independently. To resolve issues, the Neon engineer has to be able to replace any service with a customized one according to the current requirements. You are welcome to change the following docker-compose configuration files based on your needs. Also, you can bring them altogether in a single docker-compose file, it is important to provide dependencies according to the following sequence.

Docker-compose 配置文件提供的 `Neon EVM 环境` 中的所有服务，都可以替换为对应的实验版本，以便独立开发和测试每个服务。为了解决问题， Neon工程师必须要能够根据当前需求，将任何服务替换为定制服务。欢迎您根据需要更改以下 docker-compose 配置文件。此外，您可以将它们完全放在一个 docker-compose 文件中，根据以下顺序提供依赖项很重要。

Before you start to build your local environment, make sure you have all the prerequisites.

在开始构建本地环境之前，请确保您具备所有先决条件。

#### 先决条件 (Prerequisites)

- **Docker** --- for docker installation, please follow instructions at: <https://docs.docker.com/engine/install/ubuntu/>  
   **Docker** --- 对于 docker > 安装，请按照以下说明操作：https://docs.docker.com/engine/install/ubuntu/

- **Docker Compose** --- Docker Compose is required to start up containers at : https://docs.docker.com/compose/install/  
   **Docker Compose** --- Docker Compose > 需要在以下位置启动容器：https://docs.docker.com/compose/install/

- **Solana Tool Suite** --- for interaction with Solana, we need to install Solana CLI Tools: <https://docs.solana.com/ru/cli/install-solana-cli-tools>  
   **Solana Tool Suite** --- 为了与 Solana 交互，我们需要安装 Solana CLI > Tools：<https://docs.solana.com/ru/cli/install-solana-cli-tools>

- **A Chromium-based browser** --- for MetaMask and Remix  
   **基于 Chromium 的浏览器** ---用于 MetaMask 和 Remix

- **Node package manager** --- Node.js/npm to interact with he Neon EVM with Web3 and Eth modules.  
   **节点包管理器** --- Node.js/npm 与带有 Web3 和 Eth 模块的 Neon EVM > 交互。

#### 配置Neon本地工作环境 (Setting up the Neon Local Workspace Environment)

Currently, the most flexible way is to use the set of independent docker containers sharing the common external network. To create the network called `local` that will be used over the docker containers, just input the following command:

目前，最灵活的方式是使用一组独立的, 共享公共外部网络的docker 容器。要在 docker 容器上创建使用名为`本地 (local)` 的网络，只需输入以下命令：

```bash
docker network create local
```

If you want to bind some ports from the service to the host machine to be able to connect them and work with a service independently, just extend a `docker-compose.yml` configurations with the ports instruction. For example, you can bind the Solana (8899, 8900)- or Proxy (9090)-related ports to the host machine this way.

如果您想将一些端口从服务绑定到主机，从而能够连接它们并独立使用服务，只需使用端口指令扩展 `docker-compose.yml` 配置。例如，您可以通过这种方式将 Solana（8899、8900）或代理（9090）相关端口绑定到主机。

After establishing the local network, it's time to start the following containers:

建立本地网络后，就可以启动以下容器了：

1. **Solana验证者服务 (Solana validator service)**

This service presents the Solana validator running inside the container

此服务提供在容器内运行的 Solana 验证者

Once you deploy the environment, you'll have the Solana RPC endpoint working from the docker container at the 9090 port. The folder named "solana_state" will be created as well. It contains the Solana ledger to keep the state over restarts. If you need to reset the ledger, just remove this folder and it'll be recreated the next time you run docker-compose.

部署环境后，您可以让 Solana RPC 端点从docker 容器的9090 端口工作。名为"solana_state"的文件夹也会被创建。它包含 Solana 账本，用于在重启时保持状态。如果您需要重置账本，只需删除此文件夹，它将在您下次运行 docker-compose 时重新创建。

**docker-compose.yml**

```yml 
version: "3"

services:
  solana:
    container_name: solana
    image: neonlabsorg/solana:${SOLANA_REVISION:-v1.9.12-testnet}
    environment:
      SOLANA_URL: http://solana:8899
      RUST_LOG: solana_runtime::system_instruction_processor=trace,solana_runtime::message_processor=debug,solana_bpf_loader=debug,solana_rbpf=debug
    expose:
      - 8899
      - 8900
    networks:
      - net
    healthcheck:
      test: [ CMD-SHELL, "solana cluster-version -u http://solana:8899" ]
      interval: 5s
      timeout: 10s
      retries: 10
      start_period: 10s
    volumes:
      - "./solana_state:/opt/solana/config/"

networks:
  net:
    external: yes
    name: local
```

**How to run it in bash**  
**如何在bash中运行**
```bash
$ docker-compose -f solana/docker-compose.yml pull
$ docker-compose -f solana/docker-compose.yml up -d
```
2. **EVM加载者服务 (EVM loader service)**

This container helps deploy the Neon EVM base contract onto Solana that listens for incoming connections on the port 8899

这个容器帮助将 Neon EVM 基础合约部署到 Solana 上，监听端口 8899的传入连接

**docker-compose.yml**
```yml
version: "3"

services:
  evm_loader:
    container_name: evm_loader
    image: neonlabsorg/evm_loader:latest
    environment:
      - SOLANA_URL=http://solana:8899
    networks:
      - net
    command: bash -c "create-test-accounts.sh 1 && deploy-evm.sh && /opt/spl-token create-account HPsV9Deocecw3GeZv1FkAPNCBRfuVyfw9MMwjwRe1xaU && /opt/spl-token mint HPsV9Deocecw3GeZv1FkAPNCBRfuVyfw9MMwjwRe1xaU 1000000000 --owner /opt/evm_loader-keypair.json -- HX14J4Pp9CgSbWP13Dtpm8VLJpNxMYffLtRCRGsx7Edv"

networks:
  net:
    external: yes
    name: local
```
**How to run it in bash**  
**如何在bash中运行**
```bash
$ docker-compose -f evm-loader/docker-compose.yml pull
$ docker-compose -f evm-loader/docker-compose.yml up
```

3. **数据库服务 (Database services)**

This container aims to handle the database that stores all the relevant Ethereum processing metadata linked to each other: `transactions, blocks, receipts, accounts` etc. This data is consumed by the indexer service.

该容器旨在掌控所有与以太坊处理元数据相关的数据库：`交易、区块、回执、账户`等。这些数据由索引服务使用。

**docker-compose.yml**
```yml
version: "3"

services:
  postgres:
    container_name: postgres
    image: postgres:14.0
    command: postgres -c 'max_connections=1000'
    environment:
      POSTGRES_DB: neon-db
      POSTGRES_USER: neon-proxy
      POSTGRES_PASSWORD: neon-proxy-pass
    hostname: postgres
    healthcheck:
      test: [ CMD-SHELL, "pg_isready -h postgres -p 5432" ]
      interval: 5s
      timeout: 10s
      retries: 10
      start_period: 5s
    networks:
      - net
    ports:
      - "127.0.0.1:5432:5432"
    expose:
      - "5432"

  dbcreation:
    container_name: dbcreation
    image: neonlabsorg/proxy:latest
    environment:
      SOLANA_URL: http://solana:8899
      POSTGRES_DB: neon-db
      POSTGRES_USER: neon-proxy
      POSTGRES_PASSWORD: neon-proxy-pass
      POSTGRES_HOST: postgres
    entrypoint: proxy/run-dbcreation.sh
    networks:
      - net
    depends_on:
      postgres:
        condition: service_healthy


networks:
  net:
    external: yes
    name: local
```

**How to run it in bash**  
**如何在bash中运行**

```bash
$ docker-compose -f postgres/docker-compose.yml pull
$ docker-compose -f postgres/docker-compose.yml up -d
```

4. **索引服务 (Indexer service)**

The indexer service indexes all the relevant Ethereum processing metadata consisting of `signatures`, `transactions`, `blocks`, `receipts`, `accounts`,etc. It gathers all this data from the Solana blockchain, filtering them by the EVM contract address. It also makes it possible to provide our users with the Ethereum API according to the data provided by the whole known operators.

索引服务将所有相关以太坊处理元数据进行索引化，包括`签名、交易、区块、回执、账户`等。它从 Solana 区块链收集所有这些数据，并通过 EVM 合约地址过滤它们。它还可以根据整个已知运营商提供的数据为我们的用户提供以太坊 API。

**docker-compose.yml**

```yml
version: "3"

services:
  indexer:
    container_name: indexer
    image: neonlabsorg/proxy:latest
    environment:
      SOLANA_URL: http://solana:8899
      POSTGRES_DB: neon-db
      POSTGRES_USER: neon-proxy
      POSTGRES_HOST: postgres
      POSTGRES_PASSWORD: neon-proxy-pass
      CONFIG: ci
      START_SLOT: LATEST
    hostname: indexer
    entrypoint: proxy/run-indexer.sh

    networks:
      - net

networks:
  net:
    external: yes
    name: local
```

**How to run it in bash**  
**如何在bash中运行**

```bash
$ docker-compose -f indexer/docker-compose.yml pull
$ docker-compose -f indexer/docker-compose.yml up -d
```

5. **代理服务 (Proxy service)**

The Proxy service is a core service that allows Ethereum-like transactions to be processed on [Solana](https://docs.solana.com/introduction), taking full advantage of the functionality native to Solana, including the ability to execute transactions in parallel. It\'s available on 9090 port.

代理服务是一项核心服务，它使得在 Solana 上能处理类以太坊的交易，充分利用包括并行执行交易在内的(各种) Solana 原生功能。它在 9090 端口上可用。

**docker-compose.yml**

```yml
version: "3"

services:
  proxy:
    container_name: proxy
    image: neonlabsorg/proxy:latest
    environment:
      - POSTGRES_DB=neon-db
      - POSTGRES_USER=neon-proxy
      - POSTGRES_PASSWORD=neon-proxy-pass
      - POSTGRES_HOST=postgres
      - SOLANA_URL=http://solana:8899
      - EXTRA_GAS=5000
      - EVM_LOADER=53DfF883gyixYNXnM7s5xhdeyV8mVk9T4i2hGV9vG9io
      - CONFIG=ci
      - LOG_NEON_CLI_DEBUG=YES
      - USE_COMBINED_START_CONTINUE=yes
      - NEON_CLI_TIMEOUT=60
      - NEW_USER_AIRDROP_AMOUNT=0
      - WRITE_TRANSACTION_COST_IN_DB=NO
      - START_SLOT=LATEST
      - PERM_ACCOUNT_LIMIT=16
    hostname: proxy
    entrypoint: ./proxy/run-proxy.sh
    ports:
      - "9090:9090"
    expose:
      - "9090"
    networks:
      - net

networks:
  net:
    external: yes
    name: local
```

**How to run it in bash**  
**如何在bash中运行**

```bash
$ docker-compose -f proxy/docker-compose.yml pull
$ docker-compose -f proxy/docker-compose.yml up -d
```

6. **水龙头服务 (Faucet service)**

The Faucet service provides the liquidity in \`NEON\` to all the accounts that are mentioned in the incoming requests.

水龙头服务给传入请求中提到的所有账户提供"NEON"的流动性。

**docker-compose.yml**

```yml
version: "3"

services:

  faucet:
    container_name: faucet
    image: neonlabsorg/faucet:latest
    environment:
      - FAUCET_RPC_BIND=0.0.0.0
      - FAUCET_RPC_PORT=3333
      - SOLANA_URL=http://solana:8899
      - NEON_ETH_MAX_AMOUNT=50000
      - EVM_LOADER=53DfF883gyixYNXnM7s5xhdeyV8mVk9T4i2hGV9vG9io
      - FAUCET_RPC_ALLOWED_ORIGINS=["https://neonswap.live"]
      - FAUCET_WEB3_ENABLE=false
      - FAUCET_SOLANA_ENABLE=true
      - NEON_OPERATOR_KEYFILE=/opt/faucet/id.json
      - SOLANA_COMMITMENT=confirmed
    entrypoint: /opt/faucet/faucet --config /opt/proxy/faucet.conf run
    ports:
      - 3333:3333
    expose:
      - "3333"
    networks:
      - net

networks:
  net:
    external: yes
    name: local
```

**How to run it in bash**  
**如何在bash中运行**

```bash
$ docker-compose -f faucet/docker-compose.yml pull
$ docker-compose -f faucet/docker-compose.yml up -d
```

7. **全测试套件服务 (Full test suite service)**

The full test suite provides in general the OpenZeppelin tests to make sure the infrastructure deployed by this guide works properly. At the end, the `full test suite` outputs the result in the following form:

完整的测试套件通常提供 OpenZeppelin 测试，以确保本指南部署的基础设施正常工作。最后，`完整的测试套件 (full test suite)`用以下形式输出结果：

```bash
Full test passing - 1743
Full test threshold - 1700
Check if 1743 is greater or equal 1700
```

**full_test_suite/docker-compose.yml**

```yml
version: "3"

services:

  full_test_suite:
    container_name: ${FTS_CONTAINER_NAME:-full_test_suite}
    image: ${FTS_IMAGE:-neonlabsorg/full_test_suite:develop}
    entrypoint: ./run-full-test-suite.sh 2>/dev/null
    environment:
      - NETWORK_NAME=${NETWORK_NAME}
      - PROXY_URL=${PROXY_URL}
      - NETWORK_ID=${NETWORK_ID}
      - REQUEST_AMOUNT=${REQUEST_AMOUNT}
      - FAUCET_URL=${FAUCET_URL}
      - USE_FAUCET=${USE_FAUCET}
      - SOLANA_URL=${SOLANA_URL}
      - FTS_USERS_NUMBER=${FTS_USERS_NUMBER}
      - FTS_JOBS_NUMBER=${FTS_JOBS_NUMBER}

    networks:
      - net

networks:
  net:
    external: yes
    name: local
```

**full_test_suite/local.env**

```env
NETWORK_NAME=local
PROXY_URL=http://proxy:9090/solana
NETWORK_ID=111
REQUEST_AMOUNT=20000
FAUCET_URL=http://faucet:3333/request_neon
USE_FAUCET=true
SOLANA_URL=http://solana:8899
FTS_USERS_NUMBER=15
FTS_JOBS_NUMBER=8
```

**How to run it in bash**  
**如何在bash中运行**

```bash
$ docker-compose -f full_test_suite/docker-compose.yml pull
$ docker-compose -f full_test_suite/docker-compose.yml --env-file full_test_suite/local.env up
```

#### 日志 (Logs)

After following the previous steps, you will have four running containers for the Neon EVM local environment: `solana`, `postgres, proxy, indexer:`

完成上述步骤后，您将拥有4个用于 Neon EVM 本地环境的运行容器：`solana`、`postgres、proxy、indexer`

```
49c864f47ccd   neonlabsorg/solana:v1.9.12-testnet   "./run.sh"               About an hour ago   Up About an hour (healthy)   8003/udp, 0.0.0.0:8899-8900->8899-8900/tcp, :::8899-8900->8899-8900/tcp, 9900/tcp   solana
92f6b4492894   neonlabsorg/proxy:latest             "./proxy/run-proxy.sh"   46 hours ago        Up About an hour             0.0.0.0:9090->9090/tcp, :::9090->9090/tcp                                           proxy
932d4d860629   neonlabsorg/proxy:latest             "proxy/run-indexer.sh"   46 hours ago        Up About an hour             9090/tcp                                                                            indexer
5a7df37069fc   postgres:14.0                        "docker-entrypoint.s…"   47 hours ago        Up About an hour (healthy)   127.0.0.1:5432->5432/tcp                                                            postgres
```

To look for events or errors, just run the `docker logs` for either the `solana` or `proxy` container:

要查找事件或错误，只需为 `solana` 或`代理 (proxy)` 容器运行`docker日志 (docker logs)` ：

#### Neon EVM内使用Remix和Metamask (Remix and MetaMask with the Neon EVM)

Set up the \"MetaMask\" Chromium extension to connect to the proxy via Custom RPC at `http://localhost:9090/solana`. The following image describes how to set up the local Solana connection:

在 `http://localhost:9090/solana` 设置"MetaMask" 这个Chromium扩展（插件），并通过自定义 RPC 连接到代理。下图描述了如何设置本地 Solana 连接：

![](https://docs.neon-labs.org/assets/images/cluster-install-1-2a934237b77806464af491c468c92f13.png)

Note: Once you create or import a new account in MetaMask, some NEONs will be airdropped into it.

注意：在 MetaMask 中创建或导入新帐户后，会向其中空投一些 NEON。

Open Remix (also in Chromium) and select Injected Web3 environment. You can deploy EVM-wrapped smart contracts on Solana and input these instructions:

（也在Chromium 中）打开 Remix并选择 `Injected Web3` environment。您可以在 Solana 上部署封装过 EVM 的智能合约并输入以下指令：

![](https://docs.neon-labs.org/assets/images/cluster-install-2-0e37ce12c2afc407dcdd02b669044898.png)

#### Neon EVM 的Truffle套件 (Truffle Suite with Neon EVM

Truffle is a popular platform to deploy and test Solidity programs. This section shows you how to check the compatibility of the Neon EVM and the Truffle suite.

Truffle 是部署和测试 Solidity 比较流行平台。本节向您展示如何检查 Neon EVM 和 Truffle 套件的兼容性。

In the new terminal, create a Truffle project and deploy contracts into EVM:

在新终端中，创建一个 Truffle 项目并将合约部署到 EVM：

```bash
$ sudo npm install -g truffle
$ mkdir myproject && cd myproject
$ truffle init
$ npm install web3 @truffle/hdwallet-provider
```

##### Truffle设置 (Common Truffle Settings)

Put your `truffle-config.js` into the Truffle root:  
把您的`truffle-config.js` 放入Truffle根目录：

```js
$ echo 'const Web3 = require("web3");

const Web3eth = require("web3-eth");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const web3eth = new Web3eth();
const accs = Array.from(Array(10), (_, x) => web3eth.accounts.create());
const privateKeys = accs.map((account) => account.privateKey);

module.exports = {
  networks: {
    solana: {
      provider: new HDWalletProvider(privateKeys, "http://127.0.0.1:9090/solana"),
      from: accs[0].publicKey,
      network_id: "111",
      gas: 3000000,
      gasPrice: 1000000000,
    }
  },

  compilers: {
    solc: {
      version: "0.8.9"
    }
  }
};' > truffle-config.js
```

##### 创建合约 (Contract Creation)
Create a trivial contract at `contracts/Storage.sol`:  
在`contracts/Storage.sol` 创建一个简单的合约：

```
$ echo '// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Storage {
    uint256 number;

    function put(uint256 num) public {
        number = num;
    }

    function get() public view returns (uint256) {
        return number;
    }
}' > contracts/Storage.sol
```

##### 测试 (Testing)

You can now start testing `Storage` invocations with Truffle facility:

您现在可以开始使用 Truffle 工具测试`存储 (Storage)`调用：

```
$ echo 'const Storage = artifacts.require("Storage");

contract("Storage", (accounts) => {
    let storage;

    beforeEach(async () => {
        storage = await Storage.new();
    });

    it("should store a value", async () => {
        const setResult = await storage.put(248);
        assert.equal(setResult.receipt.status, true);
        const value = await storage.get();
        assert.equal(value, 248);
    })
})' > test/Storage.test.js

$ truffle test test/Storage.test.js --network solana
```

##### 可能的问题 (Possible Problems)

If for some reasons you remove the Solana container and run it again, then all related accounts stored in foreign systems get invalid from that moment. That\'s why you need to re-run the proxy container and reset the state of MetaMask and Truffle as well, to make all relations consistent.

如果由于某些原因您删除了 Solana 容器,之后再次运行，则存储在外部系统中的所有相关帐户从那时起都将失效。这就是为什么您需要重新运行代理容器并重置 MetaMask 和 Truffle 的状态，以使所有关系保持一致。

To reset the MetaMask state, follow the steps at `Settings, Advanced, Reset Account`.

要重置MetaMask的状态，请遵循下面的步骤：设置(`Settings),高级(Advanced),重置账户（Reset Account）`

The Truffle state can be reset by redeploying it in the following way:  
可以通过以下方式重新部署 Truffle 来重置它的状态：

```bash
$ truffle compile --network solana --reset
```