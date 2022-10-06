(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{532:function(e,a,t){"use strict";t.r(a);var o=t(1),r=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"distribution-subspace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#distribution-subspace"}},[e._v("#")]),e._v(" "),t("code",[e._v("distribution")]),e._v(" subspace")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("distribution")]),e._v(" module is responsible for distributing staking rewards between validators, delegators, and the Community Pool. It has the following parameters:")]),e._v(" "),t("table",[t("tr",[t("th",[e._v("Key")]),e._v(" "),t("th",[e._v("Value")])]),e._v(" "),e._l(e.$themeConfig.currentParameters.distribution,(function(a,o){return t("tr",[t("td",[t("a",{attrs:{href:"#"+o}},[t("code",[e._v(e._s(o))])])]),e._v(" "),t("td",[t("code",[e._v(e._s(a))])])])}))],2),e._v(" "),t("p",[e._v("The "),t("code",[e._v("distribution")]),e._v(" module enables a simple distribution mechanism that passively distributes rewards between validators and delegators. Collected rewards are pooled globally and divided out passively to validators and delegators. Each validator has the opportunity to charge commission to the delegators on the rewards collected on behalf of the delegators. Fees are collected directly into a global reward pool and validator proposer-reward pool.")]),e._v(" "),t("p",[t("strong",[e._v("There is "),t("a",{attrs:{href:"#known-bug"}},[e._v("a known bug")]),e._v(" associated with this module.")])]),e._v(" "),t("h2",{attrs:{id:"governance-notes-on-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#governance-notes-on-parameters"}},[e._v("#")]),e._v(" Governance notes on parameters")]),e._v(" "),t("h3",{attrs:{id:"communitytax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#communitytax"}},[e._v("#")]),e._v(" "),t("code",[e._v("communitytax")])]),e._v(" "),t("p",[t("strong",[e._v("The proportion of staking rewards diverted to the community pool.")])]),e._v(" "),t("p",[e._v('Staking on the Cosmos Hub entitles participants to inflationary (aka "block") rewards and transaction fees. A portion of these staking rewards is diverted to the community pool, which can be spent with a successful community-spend governance proposal. '),t("code",[e._v("communitytax")]),e._v(" is the parameter that determines the proportion of staking rewards diverted to the community pool, which is currently "),t("code",[e._v("0.020000000000000000")]),e._v(" (2%) of all staking rewards.")]),e._v(" "),t("ul",[t("li",[e._v("on-chain value: "),t("code",[e._v(e._s(e.$themeConfig.currentParameters.distribution.communitytax))])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-4")]),e._v(" default: "),t("code",[e._v("0.020000000000000000")])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-3")]),e._v(" default: "),t("code",[e._v("0.020000000000000000")])])]),e._v(" "),t("h4",{attrs:{id:"decreasing-the-value-of-communitytax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-communitytax"}},[e._v("#")]),e._v(" Decreasing the value of "),t("code",[e._v("communitytax")])]),e._v(" "),t("p",[e._v("Decreasing the value of the "),t("code",[e._v("communitytax")]),e._v(" parameter will decrease the rate that the community pool is funded and will increase the staking rewards captured by staking participants. This will make it more likely for the community pool to be exhausted and could potentially increase the motivation for participants to stake.")]),e._v(" "),t("h4",{attrs:{id:"increasing-the-value-of-communitytax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-communitytax"}},[e._v("#")]),e._v(" Increasing the value of "),t("code",[e._v("communitytax")])]),e._v(" "),t("p",[e._v("Increasing the value of the "),t("code",[e._v("communitytax")]),e._v(" parameter will increase the rate that the community pool is funded and will decrease the staking rewards captured by staking participants. This will make it more less for the community pool to be exhausted and could potentially decrease the motivation for participants to stake.")]),e._v(" "),t("h3",{attrs:{id:"baseproposerreward"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#baseproposerreward"}},[e._v("#")]),e._v(" "),t("code",[e._v("baseproposerreward")])]),e._v(" "),t("p",[t("strong",[e._v("The fixed base reward bonus for the validator proposing a block, as a proportion of transaction fees.")])]),e._v(" "),t("p",[e._v("All validators in the active set share the rewards for producing a block equally, except for the proposer of a valid block: that validator receives a bonus of "),t("code",[e._v("0.010000000000000000")]),e._v(" (1%) more in transaction fees. The proposer must include a minimum of 2/3 of precommit signatures from the other validators in the active set in order for the block to be valid and to receive the "),t("code",[e._v("baseproposerreward")]),e._v(" bonus. All in Bits has published more in-depth information "),t("RouterLink",{attrs:{to:"/validators/validator-faq.html#how-are-fees-distributed"}},[e._v("here")]),e._v(".")],1),e._v(" "),t("ul",[t("li",[e._v("on-chain value:  "),t("code",[e._v(e._s(e.$themeConfig.currentParameters.distribution.baseproposerreward))])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-4")]),e._v(" default: "),t("code",[e._v("0.010000000000000000")])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-3")]),e._v(" default: "),t("code",[e._v("0.010000000000000000")])])]),e._v(" "),t("h4",{attrs:{id:"decreasing-the-value-of-baseproposerreward"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-baseproposerreward"}},[e._v("#")]),e._v(" Decreasing the value of "),t("code",[e._v("baseproposerreward")])]),e._v(" "),t("p",[e._v("Decreasing the value of the "),t("code",[e._v("baseproposerreward")]),e._v(" parameter will decrease the advantage that the proposer has over other validators. This may decrease an operator's motivation to ensure that its validator is reliably online and includes at least 2/3 precommit signatures of the other validators in its proposed block.")]),e._v(" "),t("h4",{attrs:{id:"increasing-the-value-of-baseproposerreward"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-baseproposerreward"}},[e._v("#")]),e._v(" Increasing the value of "),t("code",[e._v("baseproposerreward")])]),e._v(" "),t("p",[e._v("Increasing the value of the "),t("code",[e._v("baseproposerreward")]),e._v(" parameter will increase the advantage that the proposer has over other validators. This may increase an operator's motivation to ensure that its validator is reliably online and includes at least 2/3 precommit signatures of the other validators in its proposed block.")]),e._v(" "),t("h4",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),t("p",[e._v("The Cosmos Hub transaction fee volume is proportionally very low in value compared to the inflationary block rewards, and until that changes, this parameter will likely have very little impact on validator behaviours. As fee volumes increase, the "),t("code",[e._v("baseproposerreward")]),e._v(" bonus may incentivize delegations to the validator(s) with the greatest stake-backing. There are some detailed discussions about the proposer bonus "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/3529",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"bonusproposerreward"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bonusproposerreward"}},[e._v("#")]),e._v(" "),t("code",[e._v("bonusproposerreward")])]),e._v(" "),t("p",[t("strong",[e._v("The maximum additional reward bonus for the validator proposing a block, as a proportion of transaction fees.")])]),e._v(" "),t("p",[e._v("All validators in the active set share the rewards for producing a block equally, except for the proposer of a valid block. If that validator includes more than a minimum of 2/3 of precommit signatures from the other validators in the active set, they are eligible to receive the "),t("code",[e._v("bonusproposerreward")]),e._v(" of up to 4% ("),t("code",[e._v("0.040000000000000000")]),e._v("), beyond the 1% "),t("code",[e._v("baseproposerreward")]),e._v(". The bonus proposer reward amount that a validator receives depends upon how many precommit signatures are included in the proposed block (additional to the requisite 2/3). All in Bits has published more in-depth information "),t("RouterLink",{attrs:{to:"/validators/validator-faq.html#how-are-fees-distributed"}},[e._v("here")]),e._v(".")],1),e._v(" "),t("ul",[t("li",[e._v("on-chain value: "),t("code",[e._v(e._s(e.$themeConfig.currentParameters.distribution.bonusproposerreward))])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-4")]),e._v(" default: "),t("code",[e._v("0.040000000000000000")])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-3")]),e._v(" default: "),t("code",[e._v("0.040000000000000000")])])]),e._v(" "),t("h4",{attrs:{id:"decreasing-the-value-of-bonusproposerreward"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-bonusproposerreward"}},[e._v("#")]),e._v(" Decreasing the value of "),t("code",[e._v("bonusproposerreward")])]),e._v(" "),t("p",[e._v("Decreasing the value of the "),t("code",[e._v("bonusproposerreward")]),e._v(" parameter will decrease the advantage that the proposer has over other validators. This may decrease an operator's motivation to ensure that its validator is reliably online and includes more than 2/3 precommit signatures from the other validators in its proposed block.")]),e._v(" "),t("h4",{attrs:{id:"increasing-the-value-of-bonusproposerreward"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-bonusproposerreward"}},[e._v("#")]),e._v(" Increasing the value of "),t("code",[e._v("bonusproposerreward")])]),e._v(" "),t("p",[e._v("Increasing the value of the "),t("code",[e._v("bonusproposerreward")]),e._v(" parameter will increase the advantage that the proposer has over other validators. This may increase an operator's motivation to ensure that its validator is reliably online and includes more than 2/3 precommit signatures from the other validators in its proposed block.")]),e._v(" "),t("h4",{attrs:{id:"notes-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes-2"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),t("p",[e._v("The Cosmos Hub transaction fee volume is proportionally very low in value compared to the inflationary block rewards, and until that changes, this parameter will likely have very little impact on validator behaviours. As fee volumes increase, the "),t("code",[e._v("bonusproposerreward")]),e._v(" bonus may incentivize delegations to the validator(s) with the greatest stake-backing. There are some detailed discussions about the proposer bonus "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/3529",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("p",[t("strong",[e._v("Note")]),e._v(' that "reserve pool" refers to the community pool. In this example from the '),t("RouterLink",{attrs:{to:"/validators/validator-faq.html#how-are-fees-distributed"}},[e._v("All in Bits website")]),e._v(", there are 10 validators with equal stake. Each of them applies a 1% commission rate and has 20% of self-delegated Atoms. Now comes a successful block that collects a total of 1025.51020408 Atoms in fees.")],1),e._v(" "),t("p",[e._v("First, a 2% tax is applied. The corresponding Atoms go to the reserve pool (aka community pool). Reserve pool's funds can be allocated through governance to fund bounties and upgrades.")]),e._v(" "),t("p",[e._v("2% * 1025.51020408 = 20.51020408 Atoms go to the reserve pool.\n1005 Atoms now remain. Let's assume that the proposer included 100% of the signatures in its block. It thus obtains the full bonus of 5%.")]),e._v(" "),t("p",[e._v("We have to solve this simple equation to find the reward R for each validator:")]),e._v(" "),t("p",[e._v("9"),t("em",[e._v("R + R + R")]),e._v("5% = 1005 ⇔ R = 1005/10.05 = 100")]),e._v(" "),t("p",[e._v("For the proposer validator:")]),e._v(" "),t("p",[e._v("The pool obtains R + R * 5%: 105 Atoms")]),e._v(" "),t("p",[e._v("Commission: 105 * 80% * 1% = 0.84 Atoms")]),e._v(" "),t("p",[e._v("Validator's reward: 105 * 20% + Commission = 21.84 Atoms")]),e._v(" "),t("p",[e._v("Delegators' rewards: 105 * 80% - Commission = 83.16 Atoms (each delegator will be able to claim its portion of these rewards in proportion to their stake)")]),e._v(" "),t("p",[e._v("For each non-proposer validator:")]),e._v(" "),t("p",[e._v("The pool obtains R: 100 Atoms")]),e._v(" "),t("p",[e._v("Commission: 100 * 80% * 1% = 0.8 Atoms")]),e._v(" "),t("p",[e._v("Validator's reward: 100 * 20% + Commission = 20.8 Atoms")]),e._v(" "),t("p",[e._v("Delegators' rewards: 100 * 80% - Commission = 79.2 Atoms (each delegator will be able to claim their portion of these rewards in proportion to their stake)")]),e._v(" "),t("h3",{attrs:{id:"withdrawaddrenabled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#withdrawaddrenabled"}},[e._v("#")]),e._v(" "),t("code",[e._v("withdrawaddrenabled")])]),e._v(" "),t("p",[t("strong",[e._v("Determines whether or not delegators may set a separate address for receiving staking rewards.")])]),e._v(" "),t("p",[e._v("Delegators can designate a separate withdrawal address (account) that receives staking rewards when "),t("code",[e._v("withdrawaddrenabled")]),e._v(" is set to "),t("code",[e._v("true")]),e._v(". When "),t("code",[e._v("withdrawaddrenabled")]),e._v(" is set to "),t("code",[e._v("false")]),e._v(", the delegator can no longer designate a separate address for withdrawals.")]),e._v(" "),t("ul",[t("li",[e._v("on-chain value: "),t("code",[e._v(e._s(e.$themeConfig.currentParameters.distribution.withdrawaddrenabled))])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-4")]),e._v(" default: "),t("code",[e._v("true")])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-3")]),e._v(" default: "),t("code",[e._v("true")])])]),e._v(" "),t("h4",{attrs:{id:"changing-the-withdrawaddrenabled-parameter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-withdrawaddrenabled-parameter"}},[e._v("#")]),e._v(" Changing the "),t("code",[e._v("withdrawaddrenabled")]),e._v(" parameter")]),e._v(" "),t("p",[e._v("Changing the "),t("code",[e._v("withdrawaddrenabled")]),e._v(" to false will prevent delegators from changing or setting a separate withdrawal address (account) that receives the staking rewards. This may disrupt the functionality of applications and the expectations of staking participants.")]),e._v(" "),t("h4",{attrs:{id:"notes-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes-3"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),t("p",[e._v("This parameter was set to "),t("code",[e._v("false")]),e._v(" before transfers were enabled in order to prevent stakers from diverting their rewards to other addresses ie. to avoid a loophole that would enable ATOM transfer via diverting staking rewards to a designated address. This parameter likely is only useful if "),t("RouterLink",{attrs:{to:"/governance/params-change/Bank.html#1-sendenabled"}},[t("code",[e._v("sendenabled")])]),e._v(" is set to "),t("code",[e._v("false")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"known-bug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-bug"}},[e._v("#")]),e._v(" Known Bug")]),e._v(" "),t("p",[e._v("There is a known bug associated with this module that has reportedly caused a chain to halt. In "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/5808",target:"_blank",rel:"noopener noreferrer"}},[e._v("this reported case"),t("OutboundLink")],1),e._v(", the chain's parameter values were changed to be:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y29tbXVuaXR5X3RheDogJnF1b3Q7MC4wMjAwMDAwMDAwMDAwMDAwMDAmcXVvdDsKYmFzZV9wcm9wb3Nlcl9yZXdhcmQ6ICZxdW90OzAuOTk5MDAwMDAwMDAwMDAwMDAwJnF1b3Q7CmJvbnVzX3Byb3Bvc2VyX3Jld2FyZDogJnF1b3Q7MC4wNDAwMDAwMDAwMDAwMDAwMDAmcXVvdDsK"}}),e._v(" "),t("p",[e._v("Though the system will not allow eg. "),t("code",[e._v("baseproposerreward")]),e._v(" to be a value greater than 1.0, it will allow the "),t("a",{attrs:{href:"#1-communitytax"}},[t("code",[e._v("communitytax")])]),e._v(", "),t("a",{attrs:{href:"#2-baseproposerreward"}},[t("code",[e._v("baseproposerreward")])]),e._v(", and "),t("a",{attrs:{href:"#3-bonusproposerreward"}},[t("code",[e._v("bonusproposerreward")])]),e._v(" parameters values to total an amount greater than 1.00, which will apparently cause the chain to panic and halt. You can "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/5808",target:"_blank",rel:"noopener noreferrer"}},[e._v("read more about the reported issue here"),t("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);a.default=r.exports}}]);