(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{564:function(v,e,a){"use strict";a.r(e);var t=a(1),_=Object(t.a)({},(function(){var v=this,e=v.$createElement,a=v._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h2",{attrs:{id:"검증인-보안"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#검증인-보안"}},[v._v("#")]),v._v(" 검증인 보안")]),v._v(" "),a("p",[v._v("검증인 세팅의 다양성이 네트워크 전체의 탄력성을 증가하기 때문에 각 검증인은 각자 독립적인 형태로 노드를 운영하는 것을 추천합니다. 메인넷을 대비하기 위해서 지금 부터 노드 운영을 시작하실 것을 추천합니다.")]),v._v(" "),a("h2",{attrs:{id:"키-관리-hsm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#키-관리-hsm"}},[v._v("#")]),v._v(" 키 관리 - HSM")]),v._v(" "),a("p",[v._v("안전한 노드 운영의 기초는 공격자가 검증인의 프라이빗키를 탈취할 수 없게 하는 것입니다. 만약 이 것이 가능하다면, 키가 탈취된 모든 위임된 코인은 위험에 처해질 수 있습니다. 이런 리스크를 줄이기 위한 가장 좋은 방법은 하드웨어 보안 모듈(HSM, Hardware Security Module)을 이용하는 것입니다.")]),v._v(" "),a("p",[v._v("코스모스 허브에서 HSM을 사용하시는 경우, 해당 모듈은 "),a("code",[v._v("ed25519")]),v._v(" 서명을 지원해야 합니다. YubiHSM2는 "),a("code",[v._v("ed25519")]),v._v("를 지원하며 이에 대한 어답터 라이브러리(adapter library)는 추후 지원할 계획입니다. YubiHSM은 프라이빗 키 탈취에 대한 보안을 지원하지만, 동일한 블록을 두번 서명하는 것에 대한 안전성은 제공하지 않는다는 것에 유의하시기 바랍니다.")]),v._v(" "),a("p",[v._v("이 외에도 텐더민트 팀은 현재 검증인 서명을 위한 Ledger Nano S 지원을 준비하고 있습니다. Ledger Nano S의 경우 최신 블록을 저장하기 떄문에 더블사인 공격을 막을 수 있을 것으로 보입니다.")]),v._v(" "),a("p",[v._v("추후 솔루션들이 준비되는대로 이 페이지는 업데이트 됩니다.")]),v._v(" "),a("h2",{attrs:{id:"센트리노드-ddos-방어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#센트리노드-ddos-방어"}},[v._v("#")]),v._v(" 센트리노드 (DDOS 방어)")]),v._v(" "),a("p",[v._v("검증인은 코스모스 네트워크가 일정의 서비스 거부 공격(denial of service) 공격을 감내할 수 있도록 해야 합니다.")]),v._v(" "),a("p",[v._v("이런 공격을 방어할 방법 중 하나는 검증인이 본인의 네트워크를 '센트리노드 아키텍쳐' 형태로 구성하는 것입니다.")]),v._v(" "),a("p",[v._v("검증인은 신뢰할 수 있는 풀노드에만 연결해야 합니다. 이는 본인이 직접 운영하는 노드 또는 사회적으로(개인적으로) 아는 검증인들이 운영하는 풀노드 등이 포함될 수 있습니다. 대다수의 검증인 노드는 데이터센터에서 운영됩니다. 대다수의 데이터센터는 다른 주요 클라우드 서비스 제공자와 직접적인 링크를 제공합니다. 검증인들은 이런 링크를 통해서 클라우드 기반 센트리를 연결할 수 있습니다. 이런 형태의 아키텍쳐는 DDoS 공격의 부담을 검증 노드에서 센트리노드로 우회시키기 때문에 상황에 따라 추가적인 센트리노드를 운영해야될 수 있습니다.")]),v._v(" "),a("p",[v._v("센트리노드는 빠르게 추가될 수 있으며 상황에 따라 IP 주소를 변경할 수 있습니다. 센트리노드와 검증인 노드 간의 연결은 프라이빗 IP를 통해 이루어지기 때문에, 인터넷 기반 공격의 피해를 줄일 수 있습니다. 이런 형태의 디자인은 검증인의 블록 제안과 투표가 언제나 네트워크에 전달될 수 있게 합니다.")]),v._v(" "),a("p",[v._v("센트리노드 아키텍쳐를 세팅하시기 위해서는 다음 절차를 참고하십시오:")]),v._v(" "),a("p",[v._v("검증인 노드는 해당 노드의 "),a("code",[v._v("config.toml")]),v._v("을 수정해야 합니다:")]),v._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyDsp4Dsho3soIHsnLzroZwg7Jew6rKw7ZWgIOuFuOuTnCDrqqnroZ0sIOuLpOyImOydmCDrhbjrk5zripQgYCxg66GcIOu2hOumrAojIO2UhOudvOydtOu5lyDtlLzslrTripQg64W47Lac7J2YIOychO2XmOydtCDsobTsnqztlZjri4gg7J20IOuqqeuhneyXkCDstpTqsIDtlZjsp4Ag66eI7IS47JqULgpwZXJzaXN0ZW50X3BlZXJzID1bbGlzdCBvZiBzZW50cnkgbm9kZXNdCgojIFNldCB0cnVlIHRvIGVuYWJsZSB0aGUgcGVlci1leGNoYW5nZSByZWFjdG9yCnBleCA9IGZhbHNlCg=="}}),v._v(" "),a("p",[v._v("센트리노드 또한 해당 노드의 "),a("code",[v._v("config.toml")]),v._v(" 파일을 수정해야 합니다:")]),v._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBDb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBwZWVyIElEcyB0byBrZWVwIHByaXZhdGUgKHdpbGwgbm90IGJlIGdvc3NpcGVkIHRvIG90aGVyIHBlZXJzKQpwcml2YXRlX3BlZXJfaWRzID0gJnF1b3Q77ZSE65287J2067mXX+2UvOyWtF/rhbjrk5xfSUQmcXVvdDsK"}}),v._v(" "),a("h2",{attrs:{id:"환경-변수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#환경-변수"}},[v._v("#")]),v._v(" 환경 변수")]),v._v(" "),a("p",[v._v("기본적으로 다음 프리픽스(prefix)의 대문자 환경 변수(environment variables)는 소문자 커맨드라인 플래그를 대체하게 됩니다:")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("GA")]),v._v(" (for Gaia 플래그)")]),v._v(" "),a("li",[a("code",[v._v("TM")]),v._v(" (for Tendermint 플래그)")]),v._v(" "),a("li",[a("code",[v._v("BC")]),v._v(" (for democli 또는 basecli 플래그)")])]),v._v(" "),a("p",[v._v("예를들어 "),a("code",[v._v("GA_CHAIN_ID")]),v._v(" 환경 변수는 "),a("code",[v._v("--chain-id")]),v._v(" 커맨드라인 플래그에 매핑됩니다. 명백한(explicit) 커맨드라인 플래그는 환경 변수 보다 상위에 속하며, 환경 변수는 모든 설정 파일 보다 상위에 속합니다. 중요한 파라미터는 CLI의 플래그로 정의되어야 하며 환경 변수의 수정 가능성을 줄이는 것이 중요합니다.")])],1)}),[],!1,null,null,null);e.default=_.exports}}]);