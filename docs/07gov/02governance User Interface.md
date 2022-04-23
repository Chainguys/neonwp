---
sidebar_position: 2
title: 社区治理用户界面 (Governance User Interface)
---

The Neon Governance application is an open source service designed to provide a convenient forum for submitting proposals to improve Neon EVM and for voting on the acceptance of these proposals.

Neon社区治理 (Neon Governance) 应用是一项开源服务，旨在为提交改进 Neon EVM 的提案和投票接受这些提案，提供一个方便的论坛。

Any Neon user can submit a proposal to improve the Neon EVM governance, but only stakeholders can make the final decision on whether to implement the proposal or not. Submitting proposals and voting on them are carried out using the Neon Governance application.

任何 Neon 用户都可以提交改进 Neon EVM 治理的提案，但只有利益相关者才能最终决定是否实施该提案。提交提案并对其进行投票是使用 Neon社区治理 (Neon Governance) 应用进行的。

### 提案提交步骤 (Proposal Submission Procedure)

>Currently, the procedure for submitting and considering proposals is being finalized and therefore some actions may differ from the ones described below. If you encounter an issue, feel free to contact _community_ for help.
> 
>目前，提交和考虑提案的程序正在最终确定，因此某些操作可能与以下描述的有所不同。如果您遇到问题，请随时联系_社区(community)_寻求帮助。

#### 在Neon论坛发帖 (Posting an Article on the Neon Forum)

The first thing to do is to go to the [Neon forum](https://forum.neon-labs.org/) and post an article describing your proposal. If you are not yet registered, you must do so. Then click `New Topic` and put your content in the pop-up window.

首先要做的是去[Neon论坛](https://forum.neon-labs.org/)发一篇文章描述你的提案。你需要先注册，然后点击`新话题 (New Topic)` 并将您的内容放在弹出窗口中。

![](https://docs.neon-labs.org/assets/images/govern-ui-1-94d047a231c613bbed5e52dd4a4d1124.png)

The topic of your proposal should concern Neon EVM governance. Proposal content may contain a textual description of your idea, illustrations, and links to your prepared and tested program code. If you have the code, you must provide brief instructions for installing it and checking the features that it performs.

您提案的主题应与 Neon EVM 治理有关。提案内容可以包含您想法的文字描述、插图以及指向您准备和测试过的代码的链接。如果您有代码，则必须提供安装和检查它执行功能的简要说明。

Here is an example of the article "Execute new proposal" published on the forum:

以下是论坛上发表的文章“执行新提案”的示例：

![](https://docs.neon-labs.org/assets/images/govern-ui-2-8e329932e3c9fba50c29287c126546d7.png)

#### 提交一份提案 (Submitting a Proposal to Neon Governance)
If after being discussed on the forum, an article receives positive reviews, it can be submitted for consideration to stakeholders. Currently, only the Neon EVM network administrator can register a submission in Governance UI. The author of the article should notify the administrator of the intention to create a proposal.

如果一篇文章在论坛讨论后获得好评，可以提交给利益相关者考虑。目前，只有 Neon EVM 网络管理员可以在治理 UI 中注册提交，文章作者应通知管理员创建一个提案。

The proposal should match the recommended template and contain the following fields:  
提案应与推荐的模板匹配并包含以下字段

- `Summary` — a brief description  
   `总结  — 简要说明

- `Instructions` — the sequence of actions for installing and running program code, if it is in the proposal.  
   `引导 `——安装和运行程序代码的操作顺序，如果它在提案中。 

- `Discussion` — feedback and comments from stakeholders  
   `讨论` — 利益相关者的反馈和评论

Once the proposal is registered in Governance UI, a new line with data about it will appear in the list of [Governance Proposals](https://governance.neon-labs.org/).

在 社区治理 UI 中注册提案后，[社区治理提案 (Governance Proposals)](https://governance.neon-labs.org/)  列表中将出现一条包含有关它的数据的新行。

![](https://docs.neon-labs.org/assets/images/govern-ui-3-30cdf16531c4034642e0bff193eaaf06.png)

#### 观测已提交提案的状态 (Monitoring the Status of the Submitted Proposal)
The page [Governance Proposals](https://governance.neon-labs.org/) contains the list of all proposals, including their names, identifiers, and current states. Authors have the ability to track the status of their proposals and monitor the voting processes. To get up-to-date information about the proposal, click on its status field.

[社区治理提案 (Governance Proposals)](https://governance.neon-labs.org/) 页面含有所有提案的列表，包括其名称、标识符和当前状态。作者可以跟踪其提案的状态和监控投票过程。要获取有关提案的最新信息，请单击其状态字段。

As an example, the following figure shows the page containing detailed information about the "Execute new proposal" with the status `Voting`.

例如，下图显示了包含状态为`正在投票 (Voting)`的“执行新提案”的详细信息页面。

![](https://docs.neon-labs.org/assets/images/govern-ui-4-1741ae53dbf922f56790b8c97f4d228a.png)

Page fields and their functional meanings:

1.  Reverse arrow icon — by clicking on it you go to the `Governance Proposals` page
2.  `Proposer` — public key of the proposer
3.  Name of the proposal
4.  Current status of the proposal
5.  Proposal ID in Neon Governance
6.  The date of the last vote, after which no votes are accepted
7.  `See in forum` — link to forum post for further discussion
8.  Voting scale, visually displaying the voting process. It also displays the percentage of `Approve` and `Deny` votes scored.
9.  `Approval quorum` — displays the percentage of votes required to approve a proposal and the minimum number of approve votes required. Once the approval quorum is greater than or equal to the specified value, the proposal is eligible to pass.
10.  `Cast your vote` — button to open the pop-up voting window. Only stakeholders are allowed to vote.
11.  `Approvals` — list of voters with their votes given. The first numeric value means the number of stakeholders who voted `Approve`. The second numeric value means the total number of stakeholders who have the right to vote.

页面字段及其功能含义：

1. 反向箭头图标——点击它可以进入`治理提案 (Governance Proposals)`页面
2. `提案者 (Proposer)` — 提案者的公钥
3. 提案名称
4. 提案的现状
5. Neon社区治理中的提案 ID
6. 最后一次投票的日期，之后不接受任何投票
7. `在论坛中查看 (See in forum）` - 链接到论坛帖子来进一步讨论
8. 投票比例，直观展示投票过程，同时显示`批准 (Approve)`和 `拒绝 (Deny)`投票得分的百分比。
9. `通过线 (Approval quorum)` - 显示批准提案所需的票数百分比和所需的最低批准票数。一旦批准人数大于或等于指定值，该提案就有资格通过。
10. `投票 (Cast your vote)`——按钮打开弹出式投票窗口。只有利益相关者才能投票。
11. `批准情况 (Approvals)`——投票的利益相关者列表。第一个数值表示利益相关者投`批准 (Approve)`的数量。第二个数值表示有投票权的利益相关者总数。

Here is the list of possible states of proposals and their functional meaning:
以下是提案的可能状态及其功能含义的列表：

- `Draft` — The proposal is in the preparation stage.  
   `草稿` — 提案处于准备阶段。
- `Voting` — Stakeholders are voting to accept the proposal.  
   `投票中`利益相关者正在投票接受该提案。
- `Cancelled` — The proposal was not approved on the forum.  
   `已取消` — 该提案未在论坛上获得批准。
- `Execution errors` — Attempting to execute the program code attached to the proposal ended with an error.  
   `执行错误` — 尝试执行附加到提案的程序代码，以错误结束。
- `Defeated` — The number of `Deny` votes was at least 50% of the total number of stakeholders allowed to vote.  
   `被否决` — `反对 (Deny)` 投票的数量超过允许投票的利益相关者总数的 50%。
- `Approved` — The number of `Approve` votes has reached the `Approval quorum` threshold.  
   `已批准 ` — `批准 (Approve)` 票数已满足`通过线 (Approval quorum)`。
- `Succeeded` — The proposal was approved but not yet implemented.  
   `成功` — 提案已获批准但尚未实施。
- `Completed` — The proposal was approved and has been implemented.   
   `完成` — 提案已获批准并已实施。 
- `Voting ended` — The time allotted for voting has expired.  
   `投票结束`——分配给投票的时间已经到期。

#### 利益相关方投票 (Stakeholder Voting)

If you are a stakeholder and you are allowed to vote, you should be here. Others can skip this section.

如果你是利益相关者并且你被允许投票，你应该在这里。其他人则可以跳过这个部分。

You should first open the list of proposals to view their current status, and select the proposal with `Voting` that you wish to vote on or view. The voting progress page will open.

您应该首先打开提案列表查看其当前状态，然后选择您希望投票，或查看带有`投票 (Voting)`的提案。投票进度页面将打开。

![](https://docs.neon-labs.org/assets/images/govern-ui-5-becb11728d6b1f5662d8aa0f1895835e.png)

Then you should click `See in forum` to view the content of the proposal. To vote on the proposal, you must click `Cast your vote`. A pop-up box will appear.

然后您应该点击`在论坛中查看 (See in forum）`以查看提案的内容。要对提案进行投票，您必须点击`投票 (Cast your vote)`。会出现一个弹出框。

![](https://docs.neon-labs.org/assets/images/govern-ui-6-16e3e78c80af50236416498df9d8cfb2.png)

Click `Approve` or `Decline` to vote on the proposal. Next, you will be asked to confirm and you will have the option to add a message to your vote.

单击`批准 (Approve)`或`反对 (Decline)`对提案进行投票。接下来，系统会要求您确认，您可以选择在投票中添加消息。
