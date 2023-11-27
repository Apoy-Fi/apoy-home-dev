
import enLocale from "element-ui/lib/locale/lang/en";
const jp = {
  common: {
    projectName: "Apoy",
    homeTip1: "Apoy Financeは、AMMおよびCLMM Dexにレバレッジ流動性とAIベースの資産管理ファンドを提供するDeFiです.",
    product: "製品",
    whitePaper: "白書",
    community: "コミュニティ",
    video: "ビデオ",
    secure: "安全な",
    docs: "ドキュメント",
    buyApoy: "買うAPOY",
    launchApp: "打ち上げ",
    tvl: "合計値がロックされています",
    lock: "ロック",
    learnMore: "もっと詳しく知る",
    twitter: "Twitter",
    discord: "Discord",
    telegram: "Telegram",
    homeCardTitleFund: "分散型ファンド",
    homeCardTitleAi: "人工知能",
    homeFirst1: "Apoy は、AMM および CLMM アルゴリズムと完全に互換性のある初の資産管理です.",
    homeFirst2: "Apoyは資産管理ファンドに分散型スマートコントラクトを初めて使用した.",
    homeFirst3: "Apoy はファンドで最高の収益を得るために人工知能アルゴリズムを初めて使用しました.",
    howItWorkTitle: "使い方?",
    howItWorkLYFTitle: "レバレッジド・イールド・ファーム",
    howItWorkLYF1: "• レバレッジとして融資プールからトークンを借り、報酬のためにDexに流動性を提供します.",
    howItWorkLYF2: "• 多くの適切に設計された戦略を活用できる.",
    howItWorkLYF3: "• AMM と CLMM の両方に対応するプロフェッショナルな流動性プロバイダー ソリューション.",
    howItWorkLendTitle: "貸し出し",
    howItWorkLend1: "• ユーザーは融資プールに預けて借り手から利益を得ます.",
    howItWorkLend2: "• レンディングでは、他の外部プロトコルにトークンが供給されません。 Apoyレバレッジイールドファームとファンドにのみトークンを貸し出します.",
    howItWorkAMFTitle: "資産運用ファンド",
    howItWorkAMF1: "• ユーザー向けにレバレッジイールドファームのポジションを自動管理.",
    howItWorkAMF2: "• Apoyアルゴリズムによる市場リスクのヘッジ.",
    howItWorkAMF3: "• トークンの価格が上昇したときに長期的な価値の恩恵を受けるだけでなく、リックファーミングの報酬も得られます.",
    howItWorkDexTitle: "分散型取引所",
    howItWorkDex1: "• Apoy の流動性は Uniswap & PancakeSwap Dexes に預けられます.",
    howItWorkDex2: "• Apoy は AMM および CLMM アルゴリズム資産管理をサポートする最初の DeFi です.",
    lyfHead: "収量を活用した農業",
    lyfDesc1: "Apoy アルゴリズムは、範囲外を避けるために CLMM Dex の自動リバランスを行うことができます.",
    lyfDesc2: "レバレッジ収量ファームを使用すると、ユーザーは LONG 操作と SHORT 操作の両方を行うことができます。 貸出プールからの借入は、SHORT 機能と似ています。 市場価格が下がったときに便利です。 ポジションの保持はLONG関数に似ています.",
    lyfDesc3: "レバレッジをかけるのは危険です。 それにもかかわらず、ユーザーは適切に設計された戦略でリスクを回避し、豊かな農業報酬を得ることができます.",
    lyfStrategy1: "デュアルステーブルトークン戦略",
    lyfStrategy2: "レバレッジ戦略なし",
    lyfStrategy3: "強気市場戦略でロング",
    lyfStrategy4: "弱気市場戦略では不十分",
    lyfStrategy5: "リスクヘッジ戦略",
    lyfStrategy6: "1x 長時間露光戦略",
    amfHead: "資産運用ファンド",
    amfBondTitle: "債券ファンド",
    amfBondFund1: "• デュアルステーブルトークンを使用することで非常に安定した投資収益を実現", 
    amfBondFund2: "• Apoy のインテリジェントなアルゴリズムが最適なレバレッジ レートと借入金利を自動計算し、投資を最大化します.", 
    amfBondFund3: "• 損益は安定したトークン基準に基づく.", 
    amfHedgeTitle: "ヘッジファンド",
    amfHedgeFund1: "• Apoy はスマートコントラクトを使用してロングポジションとショートポジションの両方を管理し、エクスポージャーをゼロにヘッジします.",
    amfHedgeFund2: "• 市場リスクを中和し、高く安定した投資収益を得ることができます.",
    amfHedgeFund3: "• Apoy はインテリジェントなアルゴリズムを使用して位置を自動的に調整します.",
    amfHedgeFund4: "• 損益は安定したトークン基準に基づく.",
    amfIndexTitle: "インデックスファンド",
    amfIndexFund1: "• Apoy はスマートコントラクトを使用してロングポジションとショートポジションを管理し、価格変動を追跡します.",
    amfIndexFund2: "• 価格上昇による長期的な価値成長だけでなく、豊かな農業報酬もお楽しみください.",
    amfIndexFund3: "• Apoy はインテリジェントなアルゴリズムを使用して位置を自動的に調整します.",
    amfIndexFund4: "• 損益は不安定なトークン基準に基づく.",
    aiHead: "人工知能",
    aiDesc1: "オンチェーンデータセットのデータ分析。 クラスタリングアルゴリズムによる特徴量エンジニアリング抽出.",
    aiDesc2: "SVM DNNなどの人工知能アルゴリズムによる学習モデル.",
    aiDesc3: "モデルを使用して最適なパラメーターを計算し、より良い結果を予測します.",
    aiDesc4: "ユーザーに最大限の報酬をもたらします.",
    diyTitle: "デックスでDIY",
    diyAdvn: "利点",
    diyAdvanTip1: "レバレッジとは、より多くのトークンとより多くの報酬を意味します",
    diyAdvanTip2: "Apoy には LONG 操作と SHORT 操作の両方があります。 それに比べて、DIY には LONG 機能しかありません。 ユーザーは LONG 操作と SHORT 操作の両方からメリットを得て、より多くの戦略を得ることができます.",
    diyAdvanTip3: "Apoy は、債券、ヘッジ、インデックス ファンドを含む自動車資産管理ファンドを提供しています.",
    diyAdvanTip4: "流動性プロバイダーは、市場リスクを回避するために、デルタ中立化と呼ばれるポジションエクスポージャーをゼロにすることができます。 同時に豊かな農業報酬も手に入れましょう.",
    diyAdvanTip5: "流動性プロバイダーは、暗号通貨の価格が上昇したときに長期的な価値を追跡し、豊かな農業報酬を得ることができます.",
    diyAdvanTip6: "Apoy アルゴリズムは、範囲外を避けるために CLMM Dex の自動リバランスを行うことができます.",
    diyAdvanTip7: "ユーザーの収益を最大化する Apoy AI アルゴリズム.",
    joinCommunity: "コミュニティに参加する",

  },
  error: {},

  ...enLocale,
};

export default jp;