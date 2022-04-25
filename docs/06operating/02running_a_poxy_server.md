---
sidebar_position: 2
title: 运行代理服务器 (Running a Proxy server)
---

_This guide is for people who want to register with Neon EVM as a proxy operator for processing transactions on Solana. It is assumed these people have previous experience compiling Solana-based blockchain nodes or have worked as blockchain validators._

_本指南适用于想要注册 Neon EVM 作为代理运营方，并在 Solana 处理交易的人。假定这些人以前有编译基于Solana 区块链节点的经验，或曾担任区块链验证者。_

### 导言 (Introduction)

Ethereum users have the opportunity to run their smart contract-based applications on Solana via Neon EVM. Smart contracts generate transactions in accordance with the Ethereum rules and submit them to Neon EVM. Since the structures of Ethereum and Solana transactions differ from each other, Neon EVM contains special proxy servers that are responsible for converting and executing transactions in Solana. These servers are configured and maintained by Neon EVM proxy operators.

以太坊用户现在有机会通过 Neon EVM 在 Solana 上运行他们基于智能合约的应用程序。智能合约根据以太坊规则生成交易并提交给 Neon EVM。由于以太坊和 Solana 交易的结构彼此不同，Neon EVM 包含特殊的代理服务器，负责在 Solana 中转换和执行交易。这些服务器由 Neon EVM 代理运营方配置和维护。

This guide contains a list of the proxy operator’s duties, as well as instructions to ensure the successful operation of a proxy and the successful execution of transactions.

本说明包含代理运营方的职责清单，以及确保代理成功运营和交易成功执行的说明。

### 代理运营方的职责(Duties of a Proxy Operator)

A proxy operator’s main task is to install software on a server to accept a transaction formed according to Ethereum rules, and to ensure its execution in Solana. This involves:

代理运营方的主要任务是在服务器上安装软件以接收根据以太坊规则形成的交易，并确保其在 Solana 中执行。这涉及：  

- Configuring a proxy server to perform the following operations:  
   配置代理服务器来执行以下操作：

	- Receiving requests over Web3 API protocol.  
   通过Web3 API协议接收请求。  
	- Shaping responses using Web3 API protocol.  
   使用 Web3 API 协议(编辑)塑造响应。  
	- Converting transactions to Solana format.  
   将交易转换为 Solana 格式。

- Connecting a proxy server to a Solana cluster RPC endpoint.  
   将代理服务器连接到 Solana 集群 RPC 端点。

- Successfully executing transactions.  
   成功执行交易。

> All operations related to the execution of transactions on Solana are performed by the software installed on your node.
> 
> 在 Solana 上执行交易相关的操作,都由安装在您节点上的软件执行。

### 使用Docker安装(Installation Using Docker)

After you have chosen the node (Neon EVM proxy) that meets the listed recommendations, you can start installing a proxy operator software on it.

选择满足所列建议的节点(Neon EVM 代理)后，您可以开始在其上安装代理运营方软件。

#### 运行守护进程(Run a daemon)

Make sure that you have a daemon running. If you see something like:  
确保守护进程已经运行。如果你看到:

```bash
$ docker info

Cannot connect to the Docker daemon at <docker.sock>. Is the docker daemon running?
```

you need to run the daemon and PostgreSQL services first:  
那你需要先运行守护进程和PostgreSQL：

```bash
$ sudo systemctl start docker
$ sudo docker run --rm -ti --network=host -e POSTGRES_HOST=<localhost|postgres> -e POSTGRES_DB=<database> -e POSTGRES_USER=<username> -e POSTGRES_PASSWORD=<password> --name=postgres postgres:14.0
```

**The command line options:**
命令行选项：

`--rm —` delete a container when the command is completed.  
`--rm —` 命令完成后删除容器。

`-ti —` allocate a pseudo-TTY connected to the container’s stdin; creating an interactive bash shell in the container.  
`-ti —` 分配一个连接到容器标准输入的伪 TTY；在容器中创建交互式 bash shell。

`--network host —` use host network.  
`--network host —` 使用主机网络。

`-e POSTGRES_HOST=<localhost|postgres> —` specifies DB hosting; `localhost` is set by default and is recommended; the parameter can be skipped if you use PostgreSQL hosted locally.  
`-e POSTGRES_HOST=<localhost|postgres> —`指定数据库托管； `localhost`推荐使用默认设置；如果您使用本地托管的 PostgreSQL，则可以跳过该参数。

`-e POSTGRES_DB=<database> —` specifies the name of DB; `neon-db` is recommended.  
`-e POSTGRES_DB=<database> —` 指定数据库的名称；推荐使用 `neon-db`。

`-e POSTGRES_USER=<username> —` specifies a username of DB; `neon-proxy` is recommended.  
`-e POSTGRES_USER=<username> —`指定数据库的用户名；推荐使用`neon-proxy`

`-e POSTGRES_PASSWORD=<password> —` specifies a username's password; `neon-proxy-pass` is recommended.  
`-e POSTGRES_PASSWORD=<password> —` 指定用户名的密码；推荐使用 `neon-proxy-pass`。

`--name=postgres —` specifies a version of PostgreSQL; `postgres:14.0` is recommended.  
`--name=postgres —` 指明PostgreSQL版本;推荐使用 `postgres:14.0` 。

_Example_:  
_举例_：

```bash
$ sudo docker run --rm -ti --network=host -e POSTGRES_DB=neon-db -e POSTGRES_USER=neon-proxy -e POSTGRES_PASSWORD=neon-proxy-pass --name=postgres postgres:14.0
```

#### 在Docker容器中开始运行代理(Start a proxy in a Docker container)

Create and run a proxy container on the daemon. When starting Docker, you need to set the _CONFIG_ environment variable, which can take one of the following values: local, devnet, testnet.

在守护进程上创建并运行代理容器。启动 Docker 时，需要设置 _CONFIG_ 环境变量，可以采用以下值之一：local、devnet、testnet。

```bash
$ sudo docker run --rm -ti --network=host -e CONFIG=<network> -e POSTGRES_DB=<database> -e POSTGRES_USER=<username> -e POSTGRES_PASSWORD=<password> -v <path-to-keypair-file/id.json>:/root/.config/solana/id.json neonlabsorg/proxy:v0.5.1
```

The command line options:

`-e CONFIG=<network> —` specifies a Solana network configuration; `CONFIG=devnet` is recommended.  
`-e CONFIG=<network> —` 指定 Solana 网络配置；推荐使用 `CONFIG=devnet`。

`-v <path-to-keypair-file/id.json>:/root/.config/solana/id.json —` specifies the path to the .JSON file where your keypair is stored and passes your private key to the container.  
`-v <path-to-keypair-file/id.json>:/root/.config/solana/id.json —` 指定存储密钥对的 .JSON 文件的路径，并将您的私钥传递给容器。

`neonlabsorg/proxy:v0.5.1 —` the specific proxy image.  
`neonlabsorg/proxy:v0.5.1 —` 特定代理的镜像。

>The option `-v <path-to-keypair-file>` is only relevant for authorized operators. If you are not yet registered as an operator and are just about to become one, you do not need to specify this option.  
>
>选项 `-v <path-to-keypair-file>` 仅与授权运营方相关。如果您尚未注册为运营方或者即将成为一名运营方，则无需指定此选项。

This command line will automatically perform all the actions required to launch a Docker container and run a proxy.  

此命令行将自动执行启动 Docker 容器和运行代理所需的所有操作。

_Example:  
举例_：

```bash
$ sudo docker run --rm -ti --network=host -e CONFIG=devnet -e POSTGRES_DB=neon-db -e POSTGRES_USER=neon-proxy -e POSTGRES_PASSWORD=neon-proxy-pass neonlabsorg/proxy:v0.5.1
```

#### CONFIG 的值(CONFIG values)

Each `CONFIG` value (devnet/testnet/local), by default, the corresponding variables are set:

每个`CONFIG`值(devnet/testnet/local)，都按默认值设置对应的变量：

- `SOLANA_URL`  
- `NEON_CLI_TIMEOUT`  
- `CANCEL_TIMEOUT`  
- `POSTGRES_HOST`  
- `MINIMAL_GAS_PRICE`  
- `EVM_LOADER`  
- `NEON_TOKEN_MINT`  

When you start Docker, you can override all these parameters by specifying different values for them on the command line. The table below shows default values for the following variables:

启动 Docker 时，您可以通过在命令行上为它们指定不同的值来覆盖所有参数。下表显示了以下变量的默认值：

| 配置 CONFIG | SOLANA_URL                       | NEON_CLI_TIMEOUT | CANCEL_TIMEOUT | POSTGRES_HOST | MINIMAL_GAS_PRICE |
|:----------- |:-------------------------------- |:---------------- |:-------------- |:------------- |:----------------- |
| devnet      | `https://api.devnet.solana.com`  | 10 (s)           | 60 (slot)     | localhost           | 1               |
| testnet     | `https://api.testnet.solana.com` | 15 (s)           |   60 (slot)   | localhost             | 1                 |
| local       | ``http://localhost:8899``          | 0.9 (s)          |   10 (slot)    | localhost            | 0                 |

**SOLANA_URL**

Specifies a Solana RPC endpoint that a proxy is connecting to. If you specify `CONFIG=local` and `SOLANA_URL=<your node URL>`, then requests of a proxy will be sent to your node.

指定代理连接到的 Solana RPC 端点。如果您指定 `CONFIG=local` 和 `SOLANA_URL=<您的节点 URL>`，则代理请求将发送到您的节点。

**NEON_CLI_TIMEOUT**

In Neon EVM, a transaction is run for emulation before execution to determine the accounts that will be involved in it. The `NEON_CLI_TIMEOUT` variable specifies the time (in seconds) required for a transaction to be executed.

在 Neon EVM 中，在执行之前会运行一笔模拟交易来确定交易会涉及哪些账户。`NEON_CLI_TIMEOUT` 变量指定执行交易所需的时间(以秒为单位)。

The emulation execution time is affected by the following factors:  
模拟执行的时间受到以下因素的影响：

- The geographical distance between a node and proxy.  
   节点和代理之间的地理距离。

- The load of the node due to processing requests at the moment.  
   节点当前处理请求的负载。

Setting the NEON_CLI_TIMEOUT time too short may not be sufficient to complete a transaction and pack it into a block. Therefore, NEON_CLI_TIMEOUT is set to the smallest value for CONFIG = local. Setting the NEON_CLI_TIMEOUT value too high may block other users from accessing this node.

将 `NEON_CLI_TIMEOUT` 时间设置得太短，可能会不足以完成交易并将其打包到一个块中。因此，`NEON_CLI_TIMEOUT` 设置为 `CONFIG = local` 的最小值。将 `NEON_CLI_TIMEOUT` 值设置得太高可能会阻止其他用户访问此节点。

**CANCEL_TIMEOUT**

This parameter limits the time (in [slots](../01About/02Terminology#间隔时段slot)) for blocking an account. If the blocking time for the account exceeds the time specified in this parameter, an attempt will be made to cancel the transaction that blocked this account.

此参数限制封锁帐户的时间(以[slots]((../01About/02Terminology#间隔时段slot))为单位)。如果账户的封锁时间超过了此参数中指定的时间，将尝试取消封锁该账户的交易。

**MINIMAL_GAS_PRICE**

This parameter sets the lowest possible gas price specified in a transaction.  
此参数设置交易中指定的最低gas价格。

**EVM_LOADER**

`CONFIG` defaults the following values for the variable `EVM_LOADER`:  
`CONFIG` 变量的 `EVM_LOADER` 的默认值如下：

| CONFIG| EVM_LOADER|
| ------- | --- |
| devnet  |eeLSJgWzzxrqKv1UxtRVVH8FX3qCQWUs9QuAjJpETGU|
| testnet |eeLSJgWzzxrqKv1UxtRVVH8FX3qCQWUs9QuAjJpETGU|
| local   |   __  |

**NEON_TOKEN_MINT**

`CONFIG` defaults the following values for the variable :  
`CONFIG` 变量的 `NEON_TOKEN_MINT`的默认值如下：

| CONFIG| NEON_TOKEN_MINT|
| ------- | --- |
| devnet  |89dre8rZjLNft7HoupGiyxu3MNftR577ZYu8bHe2kK7g|
| testnet |89dre8rZjLNft7HoupGiyxu3MNftR577ZYu8bHe2kK7g|
| local   |HPsV9Deocecw3GeZv1FkAPNCBRfuVyfw9MMwjwRe1xaU|

