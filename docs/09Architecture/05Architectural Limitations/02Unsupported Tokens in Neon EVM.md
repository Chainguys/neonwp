---
sidebar_position: 2
title: Neon EVM上不支持的代币(Unsupported Tokens in Neon EVM)
---

#### 问题(Problem)

In Testnet and Devnet, Neon EVM operates with those tokens that comply with the [ERC-20](/01About/02Terminology#erc-20) standard. Non-fungible tokens (NFT) generated in accordance with the [ERC-721](/01About/02Terminology#erc-721) standard are not processed by Neon EVM.

在 Testnet 和 Devnet 中，Neon EVM 使用符合 [ERC-20](/01About/02Terminology#erc-20)  标准的代币进行操作。 Neon EVM 不处理根据 [ERC-721](/01About/02Terminology#erc-721) 标准生成的不可替代代币 (NFT)。

#### 细节(Details)

To support the [ERC-20](/01About/02Terminology#erc-20) token type, a separate component is implemented in the form of a wrapper over the Solana system frame named [SPL Token](/01About/02Terminology#spl代币spl-token). This wrapper uses the API to access the SPL-token methods to obtain the account balance data.

为了支持 [ERC-20](/01About/02Terminology#erc-20)  令牌类型，一个单独的组件被以 Solana 系统框架([SPL代币](/01About/02Terminology#spl代币spl-token))的封装器的形式实现。此封装器使用 API 访问 SPL 代币方法来获取帐户余额数据。

To transfer tokens, wrapper calls the corresponding instruction in [SPL Token](/01About/02Terminology#spl代币spl-token), which transfers funds from one account balance to another. Currently the wrapper is implemented to support the instruction set only of the ERC20 standard.

为了转移代币，封装器调用 [SPL 代币](/01About/02Terminology#spl代币spl-token)中的相应指令，将资金从一个账户余额转移到另一个账户余额。目前，封装器仅支持 ERC20 标准的指令集。

#### 如果NFT从以太转到Solana会发生什么?(What happens if a user transfers NFT tokens from Ethereum to Solana)

In this case, a contract will be created in Neon EVM to work with this type of tokens. Processing these tokens in [SPL Token](/01About/02Terminology#spl代币spl-token) will not comply with the standard adopted in Ethereum.

这种情况下， Neon EVM 中会创建一个合约来使用这种类型的代币。在[SPL 代币](/01About/02Terminology#spl代币spl-token)中处理这些代币将不会符合以太坊采用的标准。

If you use the [ERC-721](/01About/02Terminology#erc-721)  contract implemented in Ethereum, compile and run it in Neon EVM, then the tokens generated using this contract can only be liquid within the Neon EVM. These tokens cannot be transferred anywhere, including to the exchange, since there is no standard in Solana that supports this type of token. As a result, the tokens will not have any value.

如果使用以太坊实现的 [ERC-721](/01About/02Terminology#erc-721)  合约在 Neon EVM 中编译运行，那么使用该合约生成的代币只能在 Neon EVM 内流通。这些代币无法转移到任何地方，包括交易所，因为 Solana 中没有支持此类代币的标准。因此，代币将没有任何价值。

#### 支持在 Neon EVM 中对NFT进行操作的建议解决方案(Proposed solution to support operations on non-fungible tokens in Neon EVM)

It is proposed to integrate the ERC-721 standard with the core of those programs that work inside Solana.

已有建议提出将 ERC-721 标准与在 Solana 内部运行的程序的核心相集成。