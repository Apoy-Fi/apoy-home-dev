
import enLocale from "element-ui/lib/locale/lang/en";
const cn = {
  common: {
    projectName: "Apoy",
    homeTip1: "Apoy Finance是为AMM和CLMM Dexes提供杠杆流动性和基于人工智能的资产管理基金的DeFi协议",
    product: "产品",
    whitePaper: "白皮书",
    community: "社区",
    video: "视频",
    secure: "安全",
    docs: "文档",
    buyApoy: "购买APOY",
    launchApp: "进入",
    tvl: "总锁仓量",
    lock: "锁仓",
    learnMore: "了解更多",
    twitter: "Twitter",
    discord: "Discord",
    telegram: "Telegram",
    homeCardTitleFund: "分布式基金",
    homeCardTitleAi: "人工智能",
    homeFirst1: "Apoy是第一个完全兼容AMM和CLMM算法的资产管理协议。",
    homeFirst2: "Apoy是第一个将去中心化智能合约用于资产管理的基金协议.",
    homeFirst3: "Apoy是第一个使用人工智能算法获得最佳收入的基金协议.",
    howItWorkTitle: "如何运行?",
    howItWorkLYFTitle: "杠杆收益农场",
    howItWorkLYF1: "• 从借贷池借用代币作为杠杆资金，并向Dex提供流动性以获得奖励.",
    howItWorkLYF2: "• 可以利用很多精心设计的策略.",
    howItWorkLYF3: "• 能够自动调解CLMM做市的价格区间，防止价格越界，提升收益.",
    howItWorkLendTitle: "借贷",
    howItWorkLend1: "• 用户可在贷款池中存款，以从借款人那里获得回报.",
    howItWorkLend2: "• 借贷向Apoy的杠杆收益农场和资产管理基金出借代币，作为杠杆资金.",
    howItWorkAMFTitle: "资产管理基金",
    howItWorkAMF1: "• 为用户自动管理杠杆收益农场中的仓位，利用人工智能算法，在风险与收益中取得最佳平衡.",
    howItWorkAMF2: "• 有多种多样的基金，满足不同资产管理需求。如债券基金，对冲基金，指数基金等.",
    howItWorkAMF3: "",
    howItWorkDexTitle: "分布式交易所",
    howItWorkDex1: "• Apoy与顶级Dex合作，流动性存储于Uniswap和PancakeSwap.",
    howItWorkDex2: "• Apoy是DeFi第一个支持AMM和CLMM算法的资产管理协议.",
    lyfHead: "杠杆收益农场",
    lyfDesc1: "Apoy算法可以自动调整CLMM的流动性质押的价格范围，以避免超出价格范围，同时获取更高.",
    lyfDesc2: "杠杆收益农场允许用户同时进行做多和做空操作。从贷款池借款相当于做空功能，持有仓位则相当于做多功能。相比之下，用户自己在Dex上进行流动性质押，则只有做多的功能.",
    lyfDesc3: "杠杆是有风险的。尽管如此，用户可以通过精心设计的策略规避风险，并获得丰厚的农场奖励.",
    lyfStrategy1: "双稳定币策略",
    lyfStrategy2: "无杠杆策略",
    lyfStrategy3: "牛市做多策略",
    lyfStrategy4: "熊市做空策略",
    lyfStrategy5: "对冲风险策略",
    lyfStrategy6: "一倍敞口做多策略",
    amfHead: "资产管理基金",
    amfBondTitle: "债券基金",
    amfBondFund1: "• 使用双稳定代币获得极其稳定的投资回报", 
    amfBondFund2: "• Apoy智能算法自动计算最佳杠杆率和借款利息，实现投资最大化.", 
    amfBondFund3: "• 损益以稳定币为计价标准.", 
    amfHedgeTitle: "对冲基金",
    amfHedgeFund1: "• Apoy使用智能合约管理多头和空头头寸，将风险敞口对冲至零.",
    amfHedgeFund2: "• 可以中和市场风险，获得高而稳定的投资回报.",
    amfHedgeFund3: "• Apoy使用智能算法自动调整仓位.",
    amfHedgeFund4: "• 损益以稳定币为计价标准.",
    amfIndexTitle: "指数基金",
    amfIndexFund1: "• Apoy使用智能合约管理多头和空头头寸以跟踪价格波动.",
    amfIndexFund2: "• 不仅享受币价上涨的长期价值增长，还享受丰厚的农场回报.",
    amfIndexFund3: "• Apoy使用人工智能算法自动调整仓位.",
    amfIndexFund4: "• 损益以非稳定币为计价标准.",
    aiHead: "人工智能",
    aiTitle1: "问题",
    aiDesc1: "流动性质押时，如何在更高的资金使用效率与更低的无常损失取得平衡？基金调仓与重新平衡之际，如何设置最佳的敞口调整比例，才能在价值损失与调仓频率之间取得最佳效果？",
    aiTitle2: "特征工程",
    aiDesc2: "Apoy对链上的数据进行采样，用聚类算法进行特征工程，包括特征抽取，特征组合。生成高维特征空间，能够对线上问题进行很好的拟合，以供模型训练时使用。",
    aiTitle3: "算法",
    aiDesc3: "Apoy使用了SVM，DNN等机器学习人工智能算法来解决这些问题，包括模型训练与在线预测。以帮用户获得最佳收益。",
    diyTitle: "在Dex自己做市",
    diyAdvn: "优点",
    diyAdvanTip1: "杠杆意味着更多代币和更多奖励",
    diyAdvanTip2: "Apoy同时具有做多和做空操作。相比之下，在Dex自己做市只有做多功能。用户可以从做多和做空操作中获益，并使用更多策略.",
    diyAdvanTip3: "Apoy提供自动资产管理基金，包括债券基金、对冲基金和指数基金.",
    diyAdvanTip4: "流动性提供者可以使头寸敞口为零，称为市场中性策略，以避免市场风险。同时获得丰厚的农场奖励.",
    diyAdvanTip5: "流动性提供商可以在加密货币价格上涨时获得长期价值，并获得丰厚的农场奖励.",
    diyAdvanTip6: "Apoy算法可以自动重新平衡使用CLMM算法的Dexes以避免超出范围.",
    diyAdvanTip7: "Apoy人工智能算法为用户带来最大收益.",
    joinCommunity: "加入社区",

  },
  error: {},
  ...enLocale,
};

export default cn;