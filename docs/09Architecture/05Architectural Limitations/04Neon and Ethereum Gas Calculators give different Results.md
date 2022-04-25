---
sidebar_position: 4
title: Neon和以太坊gas计算器结果不同(Neon and Ethereum Gas Calculators give different Results)
---


#### 问题(Problem)

In Neon EVM, a calculator is implemented to account the gas consumption. Despite the fact that this calculator is implemented in the same way as in Ethereum, sometimes it shows different results in gas calculations on tests.

在 Neon EVM 中，实现了一个计算器来计算gas消耗。尽管这个计算器的实现方式与以太坊相同，但有时它会在测试中显示不同的gas计算结果。

Since contracts for Neon EVM can be created using various languages (including Solidity/Viper/others), these contracts can implement their own gas counting method.

由于 Neon EVM 的合约可以使用各种语言(包括 Solidity/Viper/其他)创建，这些合约可以实现自己的 gas 计算方法。

Let's assume that the Ethereum network contract implements the following operations:

假设以太坊网络合约实现了以下操作：

- Calculation of gas consumption using their own methods.  
  用自己的方法计算消耗的gas。

- Calculation of gas consumption using the EVM calculator.  
  使用 EVM 计算器计算消耗的gas。

- Comparison of the results obtained.  
  比较所得结果

Since the results may be different, this method will not be able to work.  
由于结果可能不同，此方法不可行。

At the moment, the following is known about this bug:  
目前，有关此bug的已知信息如下：

- The error is in the Neon EVM code.  
  错误存在于Neon EVM 代码。

- The error does not affect the stability of the code.  
  错误不影响代码的稳定性。

- The error appears if:  
  该错误在以下情况下复现：
  - a contract independently calculates gas consumption.  
    智能合约独立计算gas消耗

  - in the contract, the calculation is checked with issuing a message like this: "the gas has been calculated correctly".  
    在合约中，通过发出“gas已被正确计算”的消息来检查计算。

Due to a bug in the Neon EVM code, the result of such checks may be incorrect.  
由于 Neon EVM 代码中的错误，此类检查的结果可能不正确。

#### Bug何时修复(When will the bug be fixed)

Investigating and fixing the bug will start after MVP on Mainnet.  
调查和修复bug将在主网上 MVP 之后开始。