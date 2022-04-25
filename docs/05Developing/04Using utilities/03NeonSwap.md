---
sidebar_position: 3
title: NeonSwap
---
#### 目标 (Goal)

To swap an ERC-20 token with another token of the same standard using the NeonSwap application.

使用 NeonSwap 应用程序将 ERC-20 代币与另一个相同标准的代币交换。

*Condition*: The ERC-20 token can be any [SPL token](/01About/02Terminology#spl代币spl-token) whose contract complies with the [ERC-20](/01About/02Terminology#erc-20) standard and is deployed on the Neon EVM.

*条件*：ERC-20 代币可以是符合 ERC-20 标准并部署在 Neon EVM 上的任何 [SPL 代币]/01About/02Terminology##spl代币spl-token。

#### 开始之前 (Before You Begin)

- Familiarize yourself with the following:
   熟悉以下内容
    - The [Solana](https://docs.solana.com/clusters) network.  
       [Solana](https://docs.solana.com/clusters)网络

    - [MetaMask](/01About/02Terminology#metamask).

- The [MetaMask](/01About/02Terminology#metamask) wallet must be installed on your device and can be accessed from the browser you are using.  
	[MetaMask](/01About/02Terminology#metamask) 钱包必须安装在您的设备上，并且可以从您使用的浏览器访问。

Read the guide [How to Connect MetaMask to Solana's Network](/02Wallets/01settingup).  
[阅读此文](/02Wallets/01settingup)。

#### NeonSwap Overview

_NeonSwap is open-source service forked from [Uniswap V2](https://uniswap.org/blog/uniswap-v2) and modified to work with the Neon EVM._

_NeonSwap 是从 [Uniswap V2](https://uniswap.org/blog/uniswap-v2) 分叉出来的开源服务，经过修改以与 Neon EVM 一起使用。_

NeonSwap is an open-source dApp whose main function is to provide the services required to deploy Ethereum contracts on the Neon EVM. In Ethereum, transactions such as exchanging one token for another require the deployment of contracts. These contracts operate using their specific services and cannot be deployed outside of this environment.

NeonSwap 是一个开源 dApp，其主要功能是提供在 Neon EVM 上部署以太坊合约所需的服务。在以太坊中，诸如代币交换等交易需要部署合约。这些合约使用其特定服务运行，且不能在此环境之外部署。

We want to demonstrate that our Neon EVM product allows you to transfer your applications from Ethereum to Solana while ensuring that they function reliably. The NeonSwap infrastructure provides full support for your applications on the Neon EVM as well as the swap interface on a separate server. No changes are required to port applications using the NeonSwap service.

我们想要阐明: Neon EVM 产品允许您将应用从以太坊转移到 Solana，并确保它们可靠运行。 NeonSwap 基础架构向Neon EVM 上的应用以及独立服务器上的swap接口提供全面支持。无需更改即可使用 NeonSwap 服务移植应用。

>[NeonSwap](/01About/02Terminology#neonswap) service provides an opportunity for Ethereum developers to migrate their applications to the Neon EVM without any difficulties.
>
>[NeonSwap](/01About/02Terminology#neonswap) 服务给以太坊开发人员提供了一个机会，可以毫无困难地将他们的应用迁移到 Neon EVM。

#### 步骤 (Steps)

The NeonSwap application allows any user to swap one token for another. You just need to connect your wallet to the application following the step-by-step instructions. Swapping tokens will be carried out automatically without sending funds to the exchange. There are some gas transaction fees to pay with the application.

NeonSwap 应用允许任何用户交换代币。您只需按照说明将您的钱包连接到应用。交换将自动进行，无需向交易所发送资金。应用需要支付一些gas作为交易费用。

As an example, this tutorial outlines the exchange of ETH-\>USDT tokens.

例如，本教程将概述 ETH-\>USDT 代币的交换。

##### 步骤 1. 打开 NeonSwap 应用程序并连接您的钱包 (Step 1. Open the NeonSwap application and connect your wallet)

Go to the [NeonSwap](/01About/02Terminology#neonswap) page to call the NeonSwap application. Before you can make a swap, you need to connect your wallet. Click `Connect Wallet` on the swap screen.

进入 NeonSwap 页面调用 NeonSwap 应用程序。在进行交换之前，您需要连接您的钱包。单击交换屏幕上的 `连接钱包(Connect Wallet)` 。

![](https://docs.neon-labs.org/assets/images/swap-erc20-1-f9b7f366542437abbe732afbb8c1201d.png)

From the list appears in the dropdown, you must select your wallet. (In our case, this is MetaMask.) Select the account you want to connect to.

从下拉列表中显示的列表中，您必须选择您的钱包。(在我们的例子中，是 MetaMask)选择您要连接的帐户。

##### 步骤 2. 选择一对要交换的代币 (Step 2. Select a pair of tokens to be swapped)

After connecting your wallet, you can begin setting up the exchange. You need to select the token that will be swapping from. It will retrieve your balance from the connected wallet. In our case, it will be ETH.

连接钱包后，您可以开始设置交易所。您需要选择将要交换的代币。它将从连接的钱包中检索您的余额。在我们的例子中，它将是 ETH。

Click `Select a token` to open up a menu where you can select a token to exchange for.
单击`选择代币 (Select a token)`以打开一个菜单，您可以在其中选择要兑换的代币。

![](https://docs.neon-labs.org/assets/images/swap-erc20-2-0ebab1f697adec6b2536979003808115.png)

##### 步骤 3.如有必要，将新代币添加到列表中 (Step3. Add a new token to the list, if necessary)

The `Select a token` menu contains tokens deployed in the Neon EVM. If the token symbol you specified is not in the list, you can paste the token's address if you know what it is. Note: the token must first be deployed on the Neon EVM network

`选择代币 (Select a token)`菜单包含部署在 Neon EVM 中的代币。如果您指定的代币符号不在列表中，您可以粘贴代币的地址（如果您知道它是什么）。注意：代币必须首先部署在 Neon EVM 网络上。

If you want to add a new token to the list, click `Manage` at the bottom of the box. The Manage tab will open on the screen. Add the address of the new token deployed in the Neon EVM network and click `Import`. (You can take a token's address from the [token-list](https://github.com/neonlabsorg/token-list/).)

如果要向列表中添加新代币，请单击框底的 `管理(Manage)`。管理选项卡将在屏幕上打开。添加部署在 Neon EVM 网络中的新代币的地址，然后单击`导入(Import)`。 （您可以从[代币列表](https://github.com/neonlabsorg/token-list/)中获取代币的地址。）

![](https://docs.neon-labs.org/assets/images/swap-erc20-3-0101e77aeeceed40a68d59c897e7c27f.png)

You will receive a warning message, "Trade at your own risk!" If you are confident in your actions, agree by choosing `I understand` then click `Import`.

您将收到一条警告消息，“交易风险自负！”如果您对自己的行为有信心，请选择`我理解(I understand)`同意，然后单击`导入(Import)`。

The symbol of the new token will appear in the list of tokens available for swapping
新代币的符号将出现在可用于交换的代币列表中。

##### 步骤 4. 输入您要卖出的数量 (Step 4. Enter the quantity you want to sell)

To check the balance of the token being sold, click `max` (next to the token symbol). Keep in mind that some amount of the token must be spent as a fee to pay for the gas required for a transaction to execute. If you specify the entire amount of funds for trade, the resulting exchanged amount will be reduced by the fee.

要检查所售代币的余额，请单击 `max`（代币符号旁边）。请记住，必须花费一定数量的代币作为费用来支付执行交易所需的gas。如果您指定交易全部金额，则由此产生的兑换金额将减去费用。

If there are not enough tokens in the pool to exchange, NeonSwap will warn you by issuing the message "Insufficient liquidity for this trade".

如果池中没有足够的代币进行交换，NeonSwap 将通过发出“此交易的流动性不足”的警告。

In our case, we exchange ETH tokens for USDT tokens. Let's specify the number of tokens to be exchanged equal to 10. Neon Swap will indicate the expected number of purchased USDT tokens, corresponding to 2.49176 at the exchange rate before our transaction.

在我们的例子中，我们将 ETH 换成了 USDT。我们指定要兑换的代币数量为10。Neon Swap 将显示购买的 USDT 代币的预期数量，对应我们交易前的汇率2.49176。

![](https://docs.neon-labs.org/assets/images/swap-erc20-4-ad2823a18de705ae19b2a7609ffa0945.png)

##### 步骤 5. 执行交换 (Step 5. Perform the exchange)

Before you can submit this exchange, you need to understand the following:
在提交此交换之前，您需要了解以下内容：

- `Price` --- the price at which the exchange is possible  
   `价格` --- 可以兑换的价格

- `Minimum received` --- the minimum amount of tokens (in our case, USDT) you will receive if the trade goes through. The trade will fail if the price deviates too much during the transaction (also known as [slippage](/01About/02Terminology#滑点slippage).  
   `最少可获得` --- 如果交易完成，您将收到的最低代币数量（在我们的例子中是 USDT）。如果在交易过程中价格偏离太多（也称为[滑点](/01About/02Terminology#滑点slippage)），交易将失败。

- `Price impact` --- tells you how much your swap will affect this token's price. This value can be seen as a loss you will take on the swap. The closer this number is to zero, the better.  
   `价格影响` --- 告诉您的swap会对这个代币的价格产生多大的影响。这个值可以被视为您将在swap中承担的损失。这个数字越接近零越好。

- `Liquidity Provider Fee` --- the fee you will pay for this transaction. NeonSwap charges a 0.03 % fee of the total transaction amount. This fee is expressed in the token you are selling (in our case, ETH).  
   `流动性提供者费用` --- 您将为此交易支付的费用。 NeonSwap 收取总交易金额的 0.03% 的费用。此费用以您卖出的代币（在我们的例子中为 ETH）表示。

Once you are ready to perform the exchange click `Swap`. A confirmation window will pop up with details of the exchange. If the conditions are accepted, click `Confirm Swap`. A request will be sent to MetaMask to `confirm` the transaction.

一旦您准备好执行交换，请单击“ `交换(Swap)`”。一个包含swap的详细信息确认窗口就会弹出。如您接收，请单击`确认交换 (Confirm Swap)`。随后 MetaMask 会发送一个请求来`确认 (confirm)`交易。

##### 步骤 6. 检查结果 (Step 6. Check the result of the exchange)

The request will open up a MetaMask window where you can confirm the transaction. You can see an estimate of how much gas you will pay. Click `Confirm` to send the transaction.

该请求将打开一个 MetaMask 窗口，您可以在其中确认交易。您可以看到您将支付多少汽油的估计值。点击`确认 (Confirm)`发送交易。

![](https://docs.neon-labs.org/assets/images/swap-erc20-5-3b658a59730f63d6de3b75750b701deb.png)

You can also check the result of the trade in the NeonSwap window. Click `Close` to complete the transaction.

您还可以在 NeonSwap 窗口中查看交易结果。单击`关闭 (Close)`以完成交易。

![](https://docs.neon-labs.org/assets/images/swap-erc20-6-4b5e9bebe8c7f03065ccb69fa8e8cbd4.png)

Now you can open MetaMask, as well as the list of tokens, by clicking`Select a token` to make sure that the balances of tokens have changed to the expected values

现在您可以通过单击`选择代币 (Select a token)`来打开 MetaMask 以及代币列表，以确保代币余额已变为为预期值。

![](https://docs.neon-labs.org/assets/images/swap-erc20-7-4ff4106ebb8881074ae9f179308c5fa9.png)

The transaction is complete, which means you have successfully changed your ETH for USDT

交易完成，这意味着您已成功将您的 ETH 兑换为 USDT。

##### 步骤 7. 交易的附加设置 (Step 7. Additional settings for trading)

Click the cogwheel icon. The window `Transaction Settings` will pop up on the screen to set up the advanced swap:

单击齿轮图标。屏幕上会弹出`Transaction Settings (交易设置)`窗口以设置高级交换：

![](https://docs.neon-labs.org/assets/images/swap-erc20-8-8f41a5ccbb687cbff6e8650c800588f8.png)

Transaction settings:
交易设定

- `Slippage tolerance` --- the allowable amount of price change. It means that the order is fulfilled at a price different from what you expected. If it exceeds the tolerance level selected, the transaction will not go through. If you are trading during high volatility, you may want to increase this value. Increasing the transaction speed can help you to reduce the chances of high [slippage](/01About/02Terminology#滑点slippage).  
   `滑点容忍度` --- 能接收的价格变化量。这意味着订单的履行价格与您的预期不同。如果超过容差水平，交易就不会通过。如果您在高波动期间进行交易，则可能需要增加此值。提升交易速度可以帮助您减少高[滑点](/01About/02Terminology#滑点slippage)的机会。

- `Transaction deadline` --- allows the transaction to automatically cancel if it is taking too long to process  
   `交易截止日间` --- 允许交易在处理时间过长时自动取消。

- `Toggle Expert Mode` --- disables the confirmation screen and removes [slippage](/01About/02Terminology#滑点slippage) limits. Enabling this mode is not recommended unless you fully understand the risks.  
   `专家模式` --- 禁用确认屏幕并移除[滑点](/01About/02Terminology#滑点slippage)限制。除非您完全了解风险，否则不建议启用此模式。


- `Disable Multihops` --- disables complex conversion paths. For example, if there is not enough liquidity in the "A-\>B" token pair, then the algorithm can involve other tokens to find the "A-\>C-\>B" intermediate route and make an exchange for you. This action requires more network fees because several smart contracts are involved.  
`禁用多路径` --- 禁用复杂的转换路径。例如，如果 "A-\>B" 代币对中没有足够的流动性，那么算法可以让其他代币找到 "A-\>C-\>B" 中间路径来为您交换。此操作需要更多的网络费用，因为涉及多个智能合约。
