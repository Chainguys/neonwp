---
sidebar_position: 5
title: 与SPL代币交互 (Interacting with SPL Tokens)
---
The ERC-20 SPL-Wrapper contract provides an access to native Solana tokens, registered in the SPL-token contract, through the ERC-20 interface.

ERC-20 SPL封装器合约通过 ERC-20 接口提供访问在 SPL-token 合约中注册的原生 Solana 代币的入口。

This allows interaction of the Solana applications with EVM(Solidity/Vyper/etc.) bytecode contracts. ERC-20 SPL-Wrapper can also be used to transfer funds in Solana tokens using Ethereum wallets such as Metamask.

这使得 Solana 应用程序与 EVM(Solidity/Vyper/等)字节码合约进行交互。ERC-20 SPL封装器还能用于帮助Metamask 等以太坊钱包以 Solana 代币转移资金。

Contract is implemented in Rust as part of Neon EVM program.

作为 Neon EVM 程序的一部分，Contract 在 Rust 中实现。

**Source codes:**  
**源代码：**

[Rust source code](https://github.com/neonlabsorg/neon-evm/blob/c43345d7abf7af14aa840e6b15c0fc64b084bb2c/evm_loader/program/src/precompile_contracts.rs#L106)

[Solidity wrapper source code](https://github.com/neonlabsorg/neon-evm/blob/develop/evm_loader/SPL_ERC20_Wrapper.sol)

#### 合约接口(Contract interface)

```
interface IERC20 {
    function decimals() external view returns (uint8);
    function totalSupply() external view returns (uint256);
    function balanceOf(address who) external view returns (uint256);
    function allowance(address ow ERC-20 SPL-Wrapperer, address spender) external view returns (uint256);
    function transfer(address to, uint256 value) external returns (bool);
    function approve(address spender, uint256 value) external returns (bool);
    function transferFrom(address from, address to, uint256 value) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    function approveSolana(bytes32 spender, uint64 value) external returns (bool);
    event ApprovalSolana(address indexed owner, bytes32 indexed spender, uint64 value);
}
```

Functionality of interface modules:  
接口各模块功能：

- `decimals() ---` Returns the number of decimals used to get its user representation. For example, if `decimals` equals 2, a balance of 505 tokens should be displayed to a user as 5,05 (505 / 10 \* 2).  
   `小数位() ---` 返回用于获取其用户代表性的小数位数。例如，如果小数等于 2，则应向用户显示 505 个代币的余额为 5,05 (505 / 10 \* 2)。

- `totalSupply() ---` Returns the amount of tokens in existence.  
   `总供给() ---` 返回代币存在总量。

- `balanceOf(address account) ---` Returns the amount of tokens owned by the `account`.  
   `余额(地址账户) ---` 返回`账户`拥有的代币数量。

- `allowance(address owner, address spender) ---` Returns the remaining number of tokens that a `spender` will be allowed to spend on behalf of the `owner` through `transferFrom`. This is zero by default.  
   `津贴(地址所有者，地址花费者) ---` 返回允许`花费者`通过 `转账 (transferFrom)` 代表`拥有者`花费的剩余代币数量。默认情况下为零。

- `transfer(address recipient, uint256 amount) ---` Sends the specified `amount` of tokens from the caller's account balance to the recipient's account balance.  
   `转发者(地址回执, 256单位数量) ---` 将指定`数量`的代币从调用者的帐户余额发送到接收者的帐户余额。

- `approve(address spender, uint256 amount) ---` Sets an `amount` as the spender's allowance over the caller's tokens.  
   `同意金额(地址花费者, 256单位数量) ---` 将金额设置为花费者对调用者代币的津贴。

- `transferFrom(address sender, address recipient, uint256 amount) ---` Transfer the amount of tokens from the `sender` to the `recipient`.  
   `转账(地址所有者, 地址回执, uint256数量) ---` 将代币数额从发送者转移到收件人。

- `approveSolana(bytes32 spender, uint64 value) ---` Allows Solana user `spender` to withdraw from the caller's account multiple times, up to the `value` amount. Only one Solana `spender` can exists at the time. Translates into spl-token `Approve` instruction.  
   `Solana同意金额(32字节花费者, uint64值) ---` 允许 Solana 用户`花费者`多次从调用者的账户中提款，最高可达`价值 `设置的金额。同一时刻只能存在一个 Solana `消费者`。翻译成 spl-token `批准`指令。

#### 限制(Restrictions)

According to SPL token structure, u64 is used to store the balance (In ERC-20 it's u256). Based on u64, maximum balance and transfer amounts are restricted by (2\^64-1)/(10\^9) (for 9 decimals accuracy).

根据 SPL 代币结构，u64 用于存储余额(在 ERC-20 中为 u256)。基于 u64，最大余额和转账金额受 (2\^64-1)/(10\^9) 限制(精确到小数点后 9 位)。

#### 找到代币账户地址(Finding the Token Account address)

Token account for a given wallet address is a program-derived account consisting of three constants, the Ethereum wallet address itself, ERC-20 contract address, and the token mint.

给定钱包地址的代币账户是一个由程序派生的账户，由三个常量组成，即以太坊钱包地址本身、ERC-20 合约地址和代币铸币厂。

The account address can be derived in Rust with:

账户地址可以从Rust中产生：

```
const ACCOUNT_SEED_VERSION: u8 = 1;

fn token_address(owner: &H160, contract: &H160, mint: &Pubkey, neon_evm: &Pubkey) {
    let seeds: &[&[u8]] = &[&[ACCOUNT_SEED_VERSION], b"ERC20Balance", &mint.to_bytes(), contract.as_bytes(), owner.as_bytes()];
    Pubkey::find_program_address(seeds, neon_evm)
}
```

### 创建代币账户 (Creating the Token Account)

Accounts hold token balances and are created using the `ERC20CreateTokenAccount` instruction.

账户持有代币余额，并使用 `ERC20CreateTokenAccount` 指令创建。

This instruction can be created in Rust with:  
这条指令可以在 Rust 中创建：

```rust
fn create_token_account(funding: Pubkey, owner: H160, contract: H160, mint: Pubkey, neon_evm: Pubkey) {
    let (token_address, _) = token_address(&owner, &contract, &mint, &neon_evm);
    let (wallet_address, _) = Pubkey::find_program_address(&[&[ACCOUNT_SEED_VERSION], owner.as_bytes()], &neon_evm);
    let (contract_address, _) = Pubkey::find_program_address(&[&[ACCOUNT_SEED_VERSION], contract.as_bytes()], &neon_evm);

    Instruction::new_with_bincode(
        neon_evm,
        &(15_u8),
        vec![
            AccountMeta::new(funding, true),
            AccountMeta::new(token_address, false),
            AccountMeta::new_readonly(wallet_address, false),
            AccountMeta::new_readonly(contract_address, false),
            AccountMeta::new_readonly(mint, false),
            AccountMeta::new_readonly(system_program::id(), false),
            AccountMeta::new_readonly(spl_token::id(), false),
            AccountMeta::new_readonly(sysvar::rent::id(), false)
        ]
    )
}
```
