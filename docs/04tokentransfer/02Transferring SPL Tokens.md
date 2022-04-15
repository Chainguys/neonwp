---
sidebar_position: 2
title: 传输SPL代币 (Transferring SPL Tokens)
---

### 概览 (Overview)

This guide provides instructions on how to transfer ERC-20 tokens between Solana and Neon EVM using NeonPass. You can do it in any direction, i.e. transfer tokens from Solana to Neon EVM or withdraw them back. However, you need to keep in mind that each transaction in Neon EVM or Solana will be charged a fee in the form of NEON or SOL tokens, respectively. For example, withdrawing tokens from Neon EVM to Solana requires 2 transactions: one for Neon EVM (requires a fee in NEON) and another for Solana (requires a fee in SOL). Therefore, you will have to pay two fees.

指南提供 NeonPass 在 Solana 和 Neon EVM 之间传输 ERC-20 代币的说明。您可以向任何方向进行操作：将代币从 Solana 传输到 Neon EVM 或反过来。但是，请记住，Neon EVM 或 Solana 中的每笔交易都将分别以 NEON 或 SOL 代币的形式收取费用。例如，将代币从 Neon EVM 提取到 Solana 需要 2 笔交易：一笔用于 Neon EVM（需要 NEON 费用），另一笔用于 Solana（需要 SOL 费用）。因此，您将需要支付两笔费用。

Before you start transferring ERC-20 tokens, you have to fulfill the following requirements:

在正式传输ERC-20代币之前，您需要满足以下条件：

- On a source side, you should already have an account with the balance of tokens that will be transferred.
   从来源上讲，您应该已经有一个账户，其中包含将要传输的代币余额。
   
- NeonPass uses [MetaMask](https://docs.neon-labs.org/docs/about/terminology#metamask) and [Phantom](https://docs.neon-labs.org/docs/about/terminology#phantom), two popular non-custodial browser based wallets.
   NeonPass 使用 [MetaMask](https://docs.neon-labs.org/docs/about/terminology#metamask) 和 [Phantom](https://docs.neon-labs.org/docs/about/terminology# phantom)，两个流行的，基于浏览器的非托管钱包。
   
- The NeonPass application is deployed in the browser to which your wallets are attached.
   NeonPass 应用部署在您钱包所连接的浏览器中。

### 流程 (Procedure)

This procedure presents the example of transferring USDT tokens from Neon EVM to Solana in Devnet. The task is to transfer 5 USDT from Neon EVM to Solana

此过程展示了如何将 USDT 代币从 Neon EVM 传输到  Solana  Devnet。具体任务是将 5 USDT 从 Neon EVM 传输到 Solana。

Initial conditions:
初始条件：

- Your Neon EVM account contains a non-zero USDT balance.
   您的 Neon EVM 账户包含非零 USDT 余额。
   
- You have a non-zero NEON balance to pay the withdrawal approval fee.
   您有一个非零的 NEON 余额来支付提款批准费。

- Your Solana account contains a non-zero SOL-balance to pay the fee.
   您的 Solana 账户包含用于支付费用的非零 SOL 余额。

Transferring tokens using NeonPass occurs in three stages:
用 NeonPass 传输代币有下面三阶段：

- Source — Connecting the MetaMask wallet to NeonPass and providing access to the sender's account balance.
   来源—将 MetaMask 钱包连接到 NeonPass 并允许访问发件人帐户余额。
   
- Target — Connecting the Phantom wallet to NeonPass and providing access to the recipient's account balance.
   目标—将 Phantom 钱包连接到 NeonPass 并提供对收件人帐户余额的访问。
   
- Confirmation — Signing the transaction and checking the result of transferring tokens.
   确认— 对交易签名并检查传输代币的结果。

#### 来源阶段 (The Source Stage)

Go to the [NeonPass](https://neonpass.live/) page in the browser to which the Phantom and MetaMask wallets are attached. Make sure that the icons of these wallets are displayed at the top right. By default, the direction of transferring tokens is set from `Solana` to `Neon`. If this is not the case, you have to click on the arrow icon to reverse the forwarding direction.

在连接了 Phantom 和 MetaMask 钱包的浏览器中，转到 [NeonPass](https://neonpass.live/) 页面。请确保这些钱包的图标显示在右上角。默认情况下，传输代币的方向设置为从 `Solana` 到 `Neon`。如果不是这种情况，您必须单击箭头图标来反转转发方向。

![图1](https://docs.neon-labs.org/assets/images/transfer-spl-1-5b6adbaa391345fe6f2245325cddc3db.png)

Click `Connect Wallet` to connect your MetaMask wallet to the NeonPass app. The MetaMask window should pop up on the screen. Follow the login procedure to your wallet and make sure it is connected to Devnet. Also, make sure you have enough USDT tokens in your account to transfer (there are 987.9 USDT in our example) and have a non-zero NEON balance to pay the withdrawal approval fee. Upon successful connection of the MetaMask wallet to NeonPass and access to your account balance, the inscription `Connect Wallet` will change to the public key of your account in the Neon EVM.

单击 `连接钱包(Connect Wallet)` 将您的 MetaMask 钱包连接到 NeonPass 应用程序。 MetaMask 窗口应该会在屏幕上弹出。按照登录程序，登录您的钱包并确保它已连接到 Devnet。另外，请确保您的账户中有足够的 USDT 代币进行转账（示例中有 987.9 USDT），并且有非零的 NEON 余额来支付提款批准费。成功将 MetaMask 钱包连接到 NeonPass 并访问您的帐户余额后，`连接钱包(Connect Wallet)`字样将更改为您在 Neon EVM 中帐户的公钥。

![](https://docs.neon-labs.org/assets/images/transfer-spl-2-6063c19e87f36e5a53931f9bde645abc.png)

On the NeonPass screen, click `Select a token`. In the list that appears, select the desired token symbol and specify the quantity to be sent. (In our example, it is 5 USDT.)

在 NeonPass 屏幕上，单击 `选择代币(Select a token)`。在出现的列表中，选择所需的代币符号并指定要发送的数量。(在我们的示例中，它是 5 USDT)



![](https://docs.neon-labs.org/assets/images/transfer-spl-3-b78cda156895ad77ae253a8a4403fbc7.png)

Click `Next` to continue the token transfer procedure and proceed to the Target stage.

单击 `下一步(Next)` 继续传输流程并进入目标阶段。

#### 目标阶段 (The Target Stage)

The `Target` windows will appear on the NeonPass screen. Click `Select Wallet` to connect your Phantom wallet to NeonPass.

`目标(Target)` 窗口将出现在 NeonPass 屏幕上。单击 `选择钱包(Select Wallet)`将您的 Phantom 钱包连接到 NeonPass。

![](https://docs.neon-labs.org/assets/images/transfer-spl-4-1ca0b2c4627d3891583036739d32bcaa.png)

The Phantom window should pop up on the screen. Follow the login procedure to your wallet and make sure it is connected to Devnet. Also make sure you have a non-zero SOL balance in your account to pay the fee. (There are 10 SOL in our example.)

Phantom 窗口应在屏幕上弹出。按照登录程序登录您的钱包，并确保它已连接到 Devnet。还要确保您的帐户中有非零的 SOL 余额来支付费用。(在我们的示例中有 10 个 SOL)

Upon successful connection of the Phantom wallet to NeonPass and access to your account balance, the inscription `Select Wallet` will change to the public key of your account in Solana. This means that a user authorizes NeonPass to use this key to sign transactions. Phantom stores sets of account keys, but does not store any balances. To obtain balances, Phantom will refer to the Solana blockchain.

将 Phantom 钱包成功连接到 NeonPass 并访问您的帐户余额后，`选择钱包(Select Wallet)`字样将更改为您在 Solana 中帐户的公钥。这意味着用户授权 NeonPass 使用此密钥签署交易。 Phantom 存储帐户密钥，但不存储任何余额。为了获得余额，Phantom 会询问 Solana。

![](https://docs.neon-labs.org/assets/images/transfer-spl-5-0705c0b9ef7127a5fe3dd32ae778ce5f.png)

Click `Next` to continue the token transfer procedure and proceed to the Confirmation stage.

单击 `下一步(Next)` 继续传输流程并进入确认阶段。

#### 确认阶段(The Confirmation Stage)

Read the details of the upcoming transfer of tokens and click .

阅读即将进行的代币传输的详细信息，然后单击`确认(Confirm)`。

![](https://docs.neon-labs.org/assets/images/transfer-spl-6-24792ec612908c05a5f0cf0a39b7e24d.png)

The MetaMask window will pop up on the NeonPass screen with the amount of fee charged for using gas in Neon EVM. The fee is paid in NEON tokens. If you agree with these terms, click `Confirm`. The transaction will be signed automatically with the public key of your Neon EVM account.

MetaMask 窗口将在 NeonPass 屏幕上弹出，显示在 Neon EVM 中使用 gas 所收取的费用金额。费用以 NEON 代币支付。如果您同意这些条款，请单击`确认(Confirm)`。交易将使用您的 Neon EVM 帐户的公钥自动签名。

![](https://docs.neon-labs.org/assets/images/transfer-spl-7-9eff4a6a38591ff2926c34edd3111203.png)

You should also approve the transaction in the Phantom window, which will display the amount transferred and fee charged in SOL tokens. The transaction will be signed automatically with the public key of your Solana account.

您还应该在 Phantom 窗口中批准交易，该窗口将显示 SOL 代币的转账金额和收取的费用。交易将使用您 Solana 帐户的公钥自动签名。

![](https://docs.neon-labs.org/assets/images/transfer-spl-8-eab28aa3d8812a07148445f63f688d39.png)

You should receive a notification that the token transfer was successful. Open the `View on Solana Explorer` page to see the results of transferring funds using NeonPass.

您应该会收到打币传输成功的通知。打开`在Solana Explorer上查看(View on Solana Explorer)`页面，查看使用 NeonPass 转账的结果。

![](https://docs.neon-labs.org/assets/images/transfer-spl-9-3d9a4b4197425962d4cd41dd2ea11b80.png)

The `Token Balance Change` tab shows the change in balances upon completion of the procedure.

`代币余额变化(Token Balance Change)` 选项卡显示程序完成后的余额变化。

![](https://docs.neon-labs.org/assets/images/transfer-spl-10-413fd4cc6f94fda4d18b097edb5baa11.png)

### 结论(Conclusion)

We examined the use of NeonPass in Devnet using the example of transferring USDT tokens from Neon EVM to Solana. The procedure for reverse transferring tokens from Solana to Neon EVM using NeonPass is not much different from the one given, and therefore we do not consider it here. The main difference will be only in the order of connecting wallets to NeonPass.

我们以 USDT 代币从 Neon EVM 转移到 Solana 为例，体验了 NeonPass 在 Solana Devnet 中的使用。用 NeonPass 将代币从 Solana 反向传输到 Neon EVM 的过程与给定的过程并无过大差异，主要区别仅在于将钱包连接到 NeonPass 的顺序，就不再赘述。

