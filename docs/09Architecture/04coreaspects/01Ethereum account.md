---
sidebar_position: 1
title: 以太坊账户 (Ethereum account)
---

An Ethereum account is an entity with an ETH balance that can send transactions on Ethereum. Accounts can be user-controlled or deployed as smart contracts.

以太坊账户是一个拥有 ETH 余额可以在以太坊上发送交易的实体。账户可以由用户控制或部署为智能合约。

#### 账户类型 (Account types)

Ethereum has two account types:  
以太坊有两类账户：

- **_Externally-owned_** – controlled by anyone with the private keys.  
   **_外部拥有_** – 由任何拥有私钥的人控制。

- **_Contract_** – a smart contract deployed to the network, controlled by code.  
   **_智能合约_** – 部署到网络的智能合约，由代码控制。

##### 关键差异 (Key differences)

**Externally-owned** 
外部拥有

- Creating an account costs nothing.
   免费创建账户。

- Can initiate transactions.  
   可以发起交易。

- Transactions between externally-owned accounts can only be ETH transfers.  
   外部拥有账户之间交易仅可以进行ETH转账。

**Contract**  
智能合约

- Creating an account has a cost because you're using network storage.  
   因为使用网络存储，所以创建账户有费用。

- Can only send transactions in response to receiving a transaction.  
   只能因回复一笔交易而发送交易

- Transactions from an external account to a contract account can trigger code which can execute many different actions, such as transferring tokens or even creating a new contract.  
   从外部账户到合约账户的交易可能会引发执行其他操作的代码，比如转移代币甚至创建新合约

#### 检查过的账户 (An account examined)

Ethereum accounts have four fields:  
以太坊账户有四个字段：

- **Nonce** – a counter that indicates the number of transactions sent from the account.  
   **(密码学)随机数** – 表示从账户发送的交易数量的计数器。

- **Balance** – number of wei owned by this address. Wei is a denomination of ETH and there are 1e+18 wei per ETH.  
   余额 – 该地址拥有的 wei 数量。 Wei 是 ETH 的一种面值，每个 ETH 有 1e+18 wei。

- **CodeHash** – refers to the code of an account on the Ethereum virtual machine (EVM). This EVM code cannot be changed unlike the other account fields. For externally owned accounts, the codeHash field is the hash of an empty string.  
   **代码哈希** – 指以太坊虚拟机(EVM)上的账户代码。与其他帐户字段不同，此 EVM 代码无法更改。对于外部拥有的账户，代码哈希字段是空字符串的哈希值。

- **StorageRoot** – known as a storage hash. A 256-bit hash of the root node of a Merkle Patricia trie that encodes the storage contents of the account (a mapping between 256-bit integer values), encoded into the trie as a mapping from the Keccak 256-bit hash of the 256-bit integer keys to the RLP-encoded 256-bit integer values. This trie encodes the hash of the storage contents of this account, and is empty by default.  
   **存储根** – 又被称为存储哈希。一个MPT(Merkle Patricia trie)根节点的 256 位哈希，用于编码帐户的存储内容(256 位整数值之间的映射)，其作为一个映射被编入了一个树(trie)—从256位整数键的Keccak 256 位哈希到RLP编码的256位整数值。该树(trie)对该账户的存储内容进行哈希编码，默认为空。

#### 外部拥有的账户(Externally-owned accounts)

An account is made up of a cryptographic pair of keys: public and private. They help prove that a transaction was signed by the sender and prevent forgeries. Your private key is what you use to sign transactions, so it grants you custody over the funds associated with your account. You never really hold cryptocurrency, you hold private keys – the funds are always on Ethereum's ledger.

一个帐户由一对密钥组成：公钥和私钥。它们帮助证明交易由发送者签署并防止伪造。您的私钥是您用来签署交易的，因此它授予您对与您帐户相关资金的保管权。您其实从来没有真正持有加密货币，你持有私钥——资金总是在以太坊的账目上。

#### 创建账户(Account creation)

When you have to create an account most libraries will generate a random private key for you.

当您一定要创建一个帐户时，大多数库都会为您生成一个随机私钥。

A private key is made up of 64 hex characters and can be encrypted with a password.

私钥由 64 个十六进制字符组成，并可以使用密码进行加密。

Example:  
例子：

`ffffffffffffffffffffffffffffffff48a03bbfd25e8cd036415febaaedce6a`

The public key is generated from the private key using the [Elliptic Curve Digital Signature](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) Algorithm. To get a public address for your account, you need to add `0x` before the last 20 bytes of the public key.

公钥是使用[椭圆曲线数字签名算法](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)从私钥生成的。要为您的帐户获取公共地址，您需要在公钥的最后 20 个字节之前添加`0x`。

#### 合约账户(Contract accounts)

Contract accounts have a 42 character hexadecimal address:  
合约账户有一个 42 个字符的十六进制地址：

Example:  
例子:  

`0x02042f8cf97ae237070f9587f8e7a266dbead5de`

The contract address is given when a contract is deployed to the Ethereum blockchain. The address comes from the creator's address and the number of transactions sent from that address (`nonce`)

合约地址在将合约部署到以太坊区块链时才会给出。合约地址来自创建者的地址和从该地址发送的交易数量(`(密码学)随机数 nonce`)

>
Note  
注意
>
An account is not a wallet. A wallet is the keypair associated with a user-owned account, which allows a user to make transactions from or manage the account.
>
账户不是钱包。钱包是与用户拥有的账户关联的密钥对，允许用户从账户进行交易或管理账户。

>More details  
>更多细节
>
[ETHEREUM ACCOUNTS](https://ethereum.org/en/developers/docs/accounts/)
