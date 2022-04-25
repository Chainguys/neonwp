---
sidebar_position: 6
title: 单账号存储限制(Storage size limit for an account)
---

#### 问题(Problem)

In Solana, the size of storage allocated for an account has a limit and it can not exceed 10 MB. This means, the storage size of contracts placed on the account can also not exceed 10 MB. This a threshold value limits an amount of records in a contract and can cause inconvenience to users.

在 Solana 中，为帐户分配的存储大小是有限制的，即不能超过 10 MB。这意味着，放置在账户上合约的规模也不能超过 10 MB。该阈值限制了合约中的记录数量，可能会给用户带来不便。

#### 建议的解决方案(Suggested solutions)

_Solution 1_. In Neon EVM storage, it is proposed to increase the amount of accounts by 1. The implementation of this solution will be considered by the Neon EVM developers.

_方案1_：在 Neon EVM 存储中，建议将账户数量增加 1。该方案的实施将由 Neon EVM 开发者考虑。

_Solution 2_. In Solana storage, it is proposed to increase the threshold value of the account size, which will be more than 10 MB. The implementation of this solution will be proposed by the Solana developers.

_方案2_：在Solana存储中，增加账户大小的阈值，使其大于10MB。此解决方案的实施将由 Solana 开发人员提出

The 10 MB limit means that about 100000 records can be used by the contract for its data. This limitation is set directly in Solana. It is large enough and not critical. At the startup of the [MVP](/01About/02Terminology#最小可行性产品minimum-viable-product-mvp) project, we do not expect contracts with sizes exceeding 10 MB to appear.

10 MB 的限制意味着合约可以将大约 100000 条记录用于其数据。此限制直接在 Solana 中设置。它(其实)足够大而且不关键。在 [最小可行性产 (MVP)](/01About/02Terminology#最小可行性产品minimum-viable-product-mvp) 项目启动时，我们预计不会出现大小超过 10 MB 的合约。

Therefore, in the first months of Neon EVM operation, the limit on the storage size allocated for one account will still remain the same 10 MB.

因此，在 Neon EVM 运行的前几个月，为一个帐户分配的存储大小限制仍将保持10 MB不变。