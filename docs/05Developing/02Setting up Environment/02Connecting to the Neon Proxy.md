---
sidebar_position: 2
title: 连接到 Neon代理 (Connecting to the Neon Proxy)
---

#### 目标 (Goal)

*Connect to the Solana cluster via a proxy server.  
通过代理服务器连接到Solana*

Depending on the tasks to be solved, as well as on the location of the proxy and Solana, you can use one of 3 options for configuring the network:

根据要解决的任务和Solana代理的位置，您可从选择下面三个选项之一来配置网络：

[Option 1](#选项1通过托管在远程虚拟服务器上的代理与-solana-集群交互-option-1-interaction-with-the-solana-cluster-via-a-proxy-hosted-on-a-remote-virtual-server): The proxy is hosted on a remote virtual server; Solana [Testnet](https://docs.solana.com/clusters#testnet)/[Devnet](https://docs.solana.com/clusters#devnet)/[Mainnet](https://docs.solana.com/clusters#mainnet-beta) is used.

[选项 1](#选项1通过托管在远程虚拟服务器上的代理与-solana-集群交互-option-1-interaction-with-the-solana-cluster-via-a-proxy-hosted-on-a-remote-virtual-server)：代理托管在远程虚拟服务器上；而Solana使用[Testnet](https://docs.solana.com/clusters#testnet)/[Devnet](https://docs.solana.com/clusters#devnet)/[Mainnet](https://docs.solana.com/clusters#mainnet-beta)。

[Option 2](#选项2通过本地托管的代理运行-solana-集群-option-2-running-solana-cluster-via-a-proxy-hosted-locally): The proxy is hosted locally; Solana [Testnet](https://docs.solana.com/clusters#testnet)/[Devnet](https://docs.solana.com/clusters#devnet)/[Mainnet](https://docs.solana.com/clusters#mainnet-beta) is used.

[选项 2](#选项2通过本地托管的代理运行-solana-集群-option-2-running-solana-cluster-via-a-proxy-hosted-locally)：代理在本地托管；而Solana使用 [Testnet](https://docs.solana.com/clusters#testnet)/[Devnet](https://docs.solana.com/clusters#devnet)/[Mainnet](https://docs.solana.com/clusters#mainnet-beta)。

[Option 3](#选项3当两者都在本地托管时通过代理运行-solana-option-3-running-solana-via-a-proxy-when-both-are-hosted-locally): Both the proxy and Solana are hosted locally (debug mode, which allows you to configure your node locally).

[选项 3](#选项3当两者都在本地托管时通过代理运行-solana-option-3-running-solana-via-a-proxy-when-both-are-hosted-locally)：代理和 Solana 都在本地托管(调试模式，允许您在本地配置节点)。

[Testnet](https://docs.solana.com/clusters#testnet), like [Devnet](https://docs.solana.com/clusters#devnet), is an alternative cryptocurrency chain exclusively for developers. It allows developers to run their node in a test blockchain and experiment without losing real currency.

与 [Devnet](https://docs.solana.com/clusters#devnet) 一样，[Testnet](https://docs.solana.com/clusters#testnet) 是专门为开发人员提供的替代型加密货币链。它允许开发人员在测试区块链中运行他们的节点并进行实验，而不会损失真实货币。

The mainnet, testnet, and devnet coins are incompatible with each other. Testnet and devnet coins have no value and developers cannot treansfer mainnet coins to testnet/devnet. Likewise, they cannot transfer testnet/devnet coins to mainnet.

Mainnet, testnet和devnet的币互不兼容。Testnet和devnet币没有价值，开发人员不能将mainnet的代币转移到testnet/devnet，反之亦然。

#### 设备需求(Requirements for your device)

The MetaMask wallet must be installed on your device.  
MetaMask钱包必须已经安装。

> Although this tutorial uses the _Ubuntu_ platform, these instructions can be applied to other Linux platforms.  
> 
> 虽然本教程使用的是 Ubuntu 平台，但内容也可以应用于其他 Linux 平台。

#### 选项1：通过托管在远程虚拟服务器上的代理与 Solana 集群交互 (Option 1: Interaction with the Solana cluster via a proxy hosted on a remote virtual server)

##### 网络设置 (The network configuration)

- The [Solana cluster](https://docs.solana.com/cluster/overview) is accessed via a proxy hosted on a remote virtual server.  
   [Solana 集群](https://docs.solana.com/cluster/overview)可以通过托管在远程虚拟服务器上的代理访问。

- Solana works in test mode (recommended) and the proxy interacts with it through Neon EVM.  
  Solana 在测试模式下工作(推荐)，代理通过 Neon EVM 与之交互。

##### 第1步(Step 1)

Open your MetaMask wallet and in the upper-right corner, click the identical.  

打开您的 MetaMask 钱包，然后在右上角单击相同的(图标)。

Click `Create Account` in the dropdown menu and add one more account to interact with the network configured.

单击下拉菜单中的`创建帐户(Create Account)`，然后再添加一个帐户来同配置的网络交互。

##### 第2步(Step 2)

Open your wallet under the new account and click Settings in the dropdown menu.  

在新帐户下打开您的钱包，然后单击下拉菜单中的设置。

The settings menu window to selecting a network should open.  
选择网络的设置菜单窗口此时应该被打开了。

##### 第3步(Step 3)

Click `Add Network` in the top-right corner.  
单击右上角的`添加网络(Add Network)`。

To connect to the Solana [Devnet](https://docs.solana.com/clusters#devnet) cluster, in the window opened fill in the fields, for example:

要请在打开的窗口中填写字段以连接到 Solana [Devnet](https://docs.solana.com/clusters#devnet) 集群，例如：

- `网络名称(Network Name) :` \"remote proxy --- solana devnet\"    
- `New RPC URL:` https://proxy.devnet.neonlabs.org/solana  
- `链ID(Chain ID):` 245022926  
- `代币符号 (Currency Symbol):` NEON  

To connect to the Solana Testnet cluster, in the window opened fill in the fields, for example:

要请在打开的窗口中填写字段以连接到 Solana [Testnet](https://docs.solana.com/clusters#testnet)集群，例如：

- `网络名称(Network Name):` \"remote proxy --- solana testnet\"  
- `New RPC URL:` https://proxy.testnet.neonlabs.org/solana  
- `链ID(Chain ID):` 245022940  
- `代币符号 (Currency Symbol):` NEON  

 > **Note:** We recommend that you use Devnet instead of Testnet, as Devnet is more stable and reliable.
 > 
 > **注意:**  我们建议您使用 Devnet 而不是 Testnet，因为 Devnet 更稳定可靠。

To connect to the Solana [Mainnet](https://docs.solana.com/clusters#mainnet-beta) cluster, in the window opened fill in the fields, for example:

要请在打开的窗口中填写字段以连接到 Solana [Mainnet](https://docs.solana.com/clusters#mainnet-beta)集群，例如：

- `网络名称(Network Name) :` \"remote proxy --- solana mainnet-beta\"  
- `New RPC URL:` (will be published after MVP on Mainnet)  
- `链ID(Chain ID):` 245022934  
- `代币符号 (Currency Symbol):` NEON  

> Only authorized operators can connect proxies to Mainnet, since access to any Solana node through the Neon EVM is possible only with an operator's private key.  
> 
> 只有获得授权的运营方才能将代理连接到主网，因为只有使用运营方的私钥才能通过 Neon EVM 访问任何 Solana 节点。

##### 第4步(Step 4)

After filling in the field click `Save`. You can now access to the [Solana cluster](https://docs.solana.com/cluster/overview) and carry out transactions.

填写完字段后点击`保存(Save)`。您现在可以访问 [Solana 集群](https://docs.solana.com/cluster/overview)并执行交易。

#### 选项2：通过本地托管的代理运行 Solana 集群 (Option 2: Running Solana cluster via a proxy hosted locally)

##### 网络设置(The network configuration)

- Solana cluster is accessed via the proxy hosted locally.  
   Solana 集群可以通过本地托管的代理访问。

- Solana [Testnet](https://docs.solana.com/clusters#testnet)/[Devnet](https://docs.solana.com/clusters#devnet)/[Mainnet](https://docs.solana.com/clusters#mainnet-beta) is used and the proxy interacts with it through Neon EVM.  
   Solana使用了 > [Testnet](https://docs.solana.com/clusters#testnet)/[Devnet](https://docs.solana.com/clusters#devnet)/[Mainnet](https://docs.solana.com/clusters#mainnet-beta)，代理通过 > Neon EVM 与之交互。

##### 第1步(Step 1)

Docker images themselves are never \"started\" and never \"running\". The docker run command takes the Docker image as a template and produces a container from it. Before starting your proxy container, you need to start service containers.

Docker 镜像本身永远不会"启动"，也不会"运行"。 docker run 命令将 Docker 镜像作为模板并从中生成一个容器。在启动代理容器之前，您需要启动服务容器。

Make sure that you have a daemon running. If you see something like:

确保您有一个守护进程正在运行。如果你看到类似的东西：

you need to run the daemon first:

```bash
$ docker info

Cannot connect to the Docker daemon at <docker.sock>. Is the docker daemon running?
```

你需要先运行守护进程：

``` bash
$ sudo systemctl start docker
```

Currently, Neon EVM proxies are hard-coded to work with PostgreSQL. To connect the proxy to DB, you also need to start the PostgreSQL container before. For a quick start of PostgreSQL, most of the configurable parameters can be left as they are, by default, with the exception of the password, which must be set explicitly. To start the PostgreSQL container, you can use the following command:

目前，Neon EVM 代理被硬编码过，从而来配合 PostgreSQL 一起使用。要将代理连接到数据库，您还需要先启动 PostgreSQL 容器。为了快速启动 PostgreSQL，默认情况下大多数可配置参数可以保留，除了必须被明确设置的密码。要启动 PostgreSQL 容器，可以使用以下命令：

``` bash
$ sudo docker run --rm -ti --network=host -e POSTGRES_HOST=localhost -e POSTGRES_DB=neon-db -e POSTGRES_USER=neon-proxy -e POSTGRES_PASSWORD=neon-proxy-pass --name=postgres postgres:14.0
```

If you want to use your proxy with other settings, you need to register as an operator so that the Neon EVM can recognize your keys.

如果您想将代理与其他设置一起使用，您需要注册为(已认证)运营方，以便 Neon EVM 可以识别您的密钥。

> Only authorized operators can change the settings of these parameters.  
> 只有授权的运营方才能改变这些设置的参数

##### 第2步(Step 2)

Start the proxy and connect it to the Docker network:  
启动代理并连带到Docker网络

```bash
$ sudo docker run --rm -ti --network=host -e CONFIG=<network> -e POSTGRES_DB=neon-db -e POSTGRES_USER=neon-proxy -e POSTGRES_PASSWORD=neon-proxy-pass neonlabsorg/proxy:v0.5.1
```

The command line parameters:  
命令行参数如下：

- `CONFIG=\<network\>` --- specifies a Solana network configuration; CONFIG=devnet is recommended.  
   `CONFIG=\<network\>` --- 指明 Solana 网络配置；建议使用 > CONFIG=devnet。

- `neonlabsorg/proxy:v0.5.1` --- specific Neon EVM proxy.  
   `neonlabsorg/proxy:v0.5.1` --- 指明Neon EVM代理。

The Neon EVM address is registered inside `neonlabsorg/proxy:v0.5.1`, so the proxy knows which Neon EVM is running in Solana cluster.

Neon EVM 地址在 `neonlabsorg/proxy:v0.5.1`中注册，因此代理就能知道 Solana 集群中运行的是哪个 Neon EVM。

After executing this command, the proxy will be available at `http://localhost:9090/solana`. This address is set by default.

执行此命令后，代理将在 `http://localhost:9090/solana` 可用。该地址是默认的。

A proxy connects to public [Solana cluster RPC endoint](https://docs.solana.com/cluster/rpc-endpoints) depending on the *SOLANA_URL* value set. The table below shows endpoint value that are set automatically when specifying *CONFIG.*

代理连接到公共 Solana 集群 RPC 端点([Solana cluster RPC endoint](https://docs.solana.com/cluster/rpc-endpoints))，具体取决于 *SOLANA_URL* 值集。下表显示了在指定 *CONFIG* 时自动设置的端点值。

 **CONFIG** **RPC endpoint**

| 配置(CONFIG) |RPC端点 (RPC endpoint)|
|:------- |:------ |
| devnet  |https://api.devnet.solana.com| 
| testnet |https://api.testnet.solana.com | 
| mainnet |https://api.mainnet-beta.solana.com|

To use a different endpoint, you need to specify the variable `-e SOLANA_URL=\'http://\<Solana-node RPC endpoint\>\'` on the command line. 

要使用一个不同的端点，在命令行中输入：`-e SOLANA_URL=\'http://\<Solana-node RPC endpoint\>\'`

When a proxy is deployed, it generates a wallet containing a key pair. If you do not need the new wallet and want to use the keys you already have, then you need to specify the path to your wallet on the command line. In this case, the proxy will not create a new key pair. The command line will look like the following:

部署代理时，会自动生成一个包含密钥对的钱包。如果您不需要新钱包并想使用已有的密钥，则需要在命令行中指定钱包的路径。在这种情况下，代理不会创建新的密钥对。命令行如下所示：

```bash
$ sudo docker run --rm -ti --network=host -e CONFIG=<network> -e POSTGRES_DB=neon-db -e POSTGRES_USER=neon-proxy -e POSTGRES_PASSWORD=neon-proxy-pass -v ~/.config/solana/id.json:/root/.config/solana/id.json --name proxy neonlabsorg/proxy:v0.5.1
```

**The command line options:**  
**命令行选项：**

- `\~/.config/solana/id.json` --- the path to your key pair.  
   `\~/.config/solana/id.json` --- 密钥对的路径。

- `\--name proxy ---` specify the proxy name.  
   `\--name proxy ---` 指定代理的名字。

If you is not registered as an operator, you can only use test public keys (the list of available public keys is given in the table). You do not need to specify the key via the -v flag, since it is already hard-coded in Devnet/Testnet containers. Use the following command:

如果您未注册为运营方，则只能使用测试公钥（可用公钥列表在表中给出）。您不需要通过 -v 标志指定密钥，因为它已经在 Devnet/Testnet 容器中进行了硬编码。使用以下命令：

```bash
sudo docker run --rm -ti --network=host -e CONFIG=<network> -e POSTGRES_DB=neon-db -e POSTGRES_USER=neon-proxy -e POSTGRES_PASSWORD=neon-proxy-pass neonlabsorg/proxy:v0.5.1
```

#### 选项3:当两者都在本地托管时，通过代理运行 Solana (Option 3: Running Solana via a proxy when both are hosted locally)

This option can be useful for developers who want to debug their solidity contracts by hosting a proxy and a solana node locally.

此选项对于希望在本地托管代理和 solana 节点，来调试Solidity合约的开发人员非常有用。

##### 网络设置(The network configuration)

- Both the Solana node and the proxy are hosted locally.  
   Solana 节点和代理都在本地托管。

- The proxy interacts with the Solana node through Neon EVM.  
   代理通过 Neon EVM 与 Solana 节点交互。

Upload the docker-compose-test.yml file to your currently directory using the following command:

使用以下命令将 docker-compose-test.yml 文件上传到您当前的目录：

```bash
$ wget https://raw.githubusercontent.com/neonlabsorg/proxy-model.py/master/proxy/docker-compose-test.yml
```

Execute the command:  
执行命令：
```bash
$ sudo REVISION=stable docker-compose -f docker-compose-test.yml up -d
```
As soon as the latest command is completed, the proxy will start to deploy Neon EVM in a local solana node. After that, the proxy and Solana will be available at the URLs `http://localhost:9090/solana` and `http://localhost:8899`, respectively.

最新命令完成后，代理将开始在本地 solana 节点中部署 Neon EVM。之后，代理和 Solana 将分别在 URLs `http://localhost:9090/solana` 和 `http://localhost:8899` 上可用。


>**Note
>注意：**
>As a proxy, you can use the dedicated neon server, or a separate server that you will need to deploy and log into it.
>
>作为代理，您可以使用专用的 neon 服务器，或需要部署和登录的单独服务器。
>
>As a Solana endpoint, you can use a separate node hosted on devnet or testnet.
>
>作为 Solana 端点，您可以使用托管在 devnet 或 testnet 上的单独节点。
>
>You can also use a Solana node that is not hosted on any network. In this case, you will need to configure this node and synchronize it with the devnet or testnet network. Then you will need to deploy the local proxy and configure it to work with this node. You will also need to connect to the EVM loader deployed within devnet or testnet.
>
>您还可以使用未托管在任何网络上的 Solana 节点。在这种情况下，您需要配置此节点并将其与 devnet 或 testnet 网络同步。然后，您将需要部署本地代理并将其配置为与该节点一起使用。您还需要连接到部署在 devnet 或 testnet 中的 EVM 加载器。


