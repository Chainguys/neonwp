---
sidebar_position: 6
title: Neon EVM 不支持的函数(Unsupported Functions in Neon EVM)
---


The Neon EVM doesn't support the following functions:

Neon EVM不支持以下函数：

`gas_price(&self)`

`block_hash(&self, number: U256)`

`block_coinbase(&self)`

`block_dificulty(&self)`

`block_gas_limit(&self)`

#### 为什么它们暂时不被支持?(Why are these features temporarily not supported)

Calling each of the above listed functions mistakenly returns zero instead of the expected ones. The reason for this behavior of these functions is a bug in the Neon EVM program code.

错误地调用上面列出的每个函数都会返回零而不是任何预期值。这些函数出现这种行为的原因是 Neon EVM 程序代码中的一个bug。

#### 什么时候会支持?(When will these features be supported)

Investigating and fixing the bug will start after MVP on Mainnet.  
调查和修复bug将在主网 MVP 之后开始。