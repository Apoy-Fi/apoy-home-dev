
import enLocale from "element-ui/lib/locale/lang/en";
const kr = {
  common: {
    projectName: "Apoy",
    homeTip1: "Apoy Finance는 AMM 및 CLMM Dexes에 레버리지 유동성 및 AI 기반 자산 관리 자금을 제공하는 DeFi입니다.",
    product: "제품",
    whitePaper: "백지",
    community: "지역 사회",
    video: "동영상",
    secure: "안전한",
    docs: "문서",
    buyApoy: "구입하다 APOY",
    launchApp: "시작하다",
    tvl: "잠긴 총 가치",
    lock: "잠그다",
    learnMore: "더 알아보기",
    twitter: "Twitter",
    discord: "Discord",
    telegram: "Telegram",
    homeCardTitleFund: "탈중앙화 펀드",
    homeCardTitleAi: "인공지능",
    homeFirst1: "Apoy는 AMM 및 CLMM 알고리즘과 완벽하게 호환되는 최초의 자산 관리입니다..",
    homeFirst2: "Apoy는 자산 관리 자금에 분산형 스마트 계약을 사용한 최초의 회사입니다.",
    homeFirst3: "Apoy는 펀드 중 최고의 수익을 위해 인공 지능 알고리즘을 최초로 사용합니다.",
    howItWorkTitle: "작동 원리?",
    howItWorkLYFTitle: "활용된 수확량 농장",
    howItWorkLYF1: "• 대출 풀에서 토큰을 레버리지로 빌려 Dex에 유동성을 제공하여 보상을 받으세요.",
    howItWorkLYF2: "• 잘 설계된 많은 전략을 활용할 수 있습니다.",
    howItWorkLYF3: "• AMM 및 CLMM을 위한 전문 유동성 공급자 솔루션.",
    howItWorkLendTitle: "대출",
    howItWorkLend1: "• 사용자는 대출자로부터 수익을 얻기 위해 대출 풀에 예금합니다.",
    howItWorkLend2: "• 대출은 다른 외부 프로토콜에 토큰을 공급하지 않습니다. Apoy 활용 이자 농장과 펀드에만 토큰을 빌려줍니다.",
    howItWorkAMFTitle: "자산운용자금",
    howItWorkAMF1: "• 사용자를 위한 활용 수익 농장의 위치 자동 관리.",
    howItWorkAMF2: "• Apoy 알고리즘을 통한 헤지 시장 위험.",
    howItWorkAMF3: "• 토큰 가격이 상승하면 장기적 가치의 혜택을 누릴 수 있을 뿐만 아니라 릭 파밍 보상도 받을 수 있습니다.",
    howItWorkDexTitle: "탈중앙화 거래소",
    howItWorkDex1: "• Apoy의 유동성은 Uniswap 및 PancakeSwap Dexes에 예치됩니다.",
    howItWorkDex2: "• Apoy는 AMM 및 CLMM 알고리즘 자산 관리를 지원하는 최초의 DeFi입니다.",
    lyfHead: "활용형 수확량 농업",
    lyfDesc1: "Apoy 알고리즘은 범위 이탈을 방지하기 위해 CLMM Dexe의 자동 재조정을 수행할 수 있습니다.",
    lyfDesc2: "활용된 수확량 농장을 통해 사용자는 LONG 및 SHORT 작업을 모두 수행할 수 있습니다. 대출 풀에서 차용하는 것은 SHORT 기능과 유사합니다. 시장 가격이 하락할 때 유용합니다. 위치 유지는 LONG 기능과 유사합니다.",
    lyfDesc3: "레버리지는 위험합니다. 그럼에도 불구하고 사용자는 잘 설계된 전략으로 위험을 피하고 풍부한 농업 보상을 얻을 수 있습니다.",
    lyfStrategy1: "듀얼 스테이블 토큰 전략",
    lyfStrategy2: "레버리지 전략 없음",
    lyfStrategy3: "강세장 전략에 오랫동안 참여",
    lyfStrategy4: "약세장 전략이 짧음",
    lyfStrategy5: "헤지 리스크 전략",
    lyfStrategy6: "1회 LONG 노출 전략",
    amfHead: "자산운용자금",
    amfBondTitle: "채권펀드",
    amfBondFund1: "• 듀얼 스테이블 토큰을 사용하여 매우 안정적인 투자 수익", 
    amfBondFund2: "• Apoy 지능형 알고리즘은 투자를 극대화하기 위해 최고의 레버리지 이자율과 차입 이자를 자동으로 계산합니다.", 
    amfBondFund3: "• 손익은 스테이블 토큰 기준을 따릅니다.", 
    amfHedgeTitle: "헤지 펀드",
    amfHedgeFund1: "• Apoy는 스마트 계약을 사용하여 LONG 및 SHORT 포지션을 모두 관리하여 노출을 0으로 방지합니다.",
    amfHedgeFund2: "• 시장위험을 중화시켜 높고 안정적인 투자수익을 얻을 수 있습니다.",
    amfHedgeFund3: "• Apoy는 지능형 알고리즘을 사용하여 위치를 자동으로 조정합니다.",
    amfHedgeFund4: "• 손익은 스테이블 토큰 기준을 따릅니다.",
    amfIndexTitle: "인덱스 펀드",
    amfIndexFund1: "• Apoy는 스마트 계약을 사용하여 LONG 및 SHORT 포지션을 관리하여 가격 변동을 추적합니다.",
    amfIndexFund2: "• 장기적으로 가격이 오르는 가치 상승뿐만 아니라 풍부한 파밍 보상도 누려보세요.",
    amfIndexFund3: "• Apoy는 지능형 알고리즘을 사용하여 위치를 자동으로 조정합니다.",
    amfIndexFund4: "• 손익은 불안정한 토큰 기준으로 산정.",
    aiHead: "인공지능",
    aiDesc1: "온체인 데이터 세트에 대한 데이터 분석. 클러스터링 알고리즘을 통한 특징공학 추출.",
    aiDesc2: "SVM DNN 등 인공지능 알고리즘에 의한 학습 모델.",
    aiDesc3: "모델을 사용하여 최적의 매개변수를 계산하고 더 나은 결과를 예측합니다.",
    aiDesc4: "사용자에게 가장 많은 보상을 받으세요.",
    diyTitle: "Dex에서 직접 해보세요",
    diyAdvn: "장점",
    diyAdvanTip1: "레버리지는 더 많은 토큰과 더 많은 보상을 의미합니다.",
    diyAdvanTip2: "Apoy에는 LONG 및 SHORT 작업이 모두 있습니다. 이에 비해 DIY에는 LONG 기능만 있습니다. 사용자는 LONG 및 SHORT 작업의 이점을 누리고 더 많은 전략을 얻을 수 있습니다.",
    diyAdvanTip3: "Apoy는 채권, 헤지, 인덱스 펀드 등 자동차 자산관리 펀드를 제공합니다.",
    diyAdvanTip4: "유동성 공급자는 시장 위험을 피하기 위해 델타 중립화라고 불리는 포지션 노출을 0으로 만들 수 있습니다. 그리고 동시에 풍부한 농업 보상도 받으세요.",
    diyAdvanTip5: "유동성 공급자는 암호화폐 가격이 상승할 때 장기적인 가치를 추적하고 풍부한 농업 보상을 얻을 수 있습니다.",
    diyAdvanTip6: "Apoy 알고리즘은 범위 이탈을 방지하기 위해 CLMM Dexe의 자동 재조정을 수행할 수 있습니다.",
    diyAdvanTip7: "Apoy AI 알고리즘은 사용자의 수익을 극대화합니다.",
    joinCommunity: "커뮤니티 가입",

  },
  error: {},
  ...enLocale,
};

export default kr;