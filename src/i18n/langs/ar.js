
import enLocale from "element-ui/lib/locale/lang/en";
const ar = {
  common: {
    projectName: "Apoy",
    homeTip1: "Apoy Finance هي DeFi توفر السيولة الاستدانة وصناديق إدارة الأصول القائمة على الذكاء الاصطناعي لـ AMM & CLM Dexes",
    product: "منتجات",
    whitePaper: "ورق ابيض",
    community: "مجتمع",
    video: "فيديو",
    secure: "يؤمن",
    docs: "المستندات",
    buyApoy: "يشتري APOY",
    launchApp: "يطلق",
    tvl: "القيمة الإجمالية مغلقة",
    lock: "قفل",
    learnMore: "يتعلم أكثر",
    twitter: "Twitter",
    discord: "Discord",
    telegram: "Telegram",
    homeCardTitleFund: "الصندوق اللامركزي",
    homeCardTitleAi: "الذكاء الاصطناعي",
    homeFirst1: "Apoy هو أول برنامج لإدارة الأصول متوافق تمامًا مع خوارزميات AMM وCLMM",
    homeFirst2: "Apoy هو أول من استخدم العقود الذكية اللامركزية لصناديق إدارة الأصول",
    homeFirst3: "Apoy هو أول من استخدم خوارزميات الذكاء الاصطناعي للحصول على أفضل إيرادات في الأموال",
    howItWorkTitle: "كيف تعمل",
    howItWorkLYFTitle: "مزارع الإنتاجية ذات الاستدانة",
    howItWorkLYF1: "• اقتراض الرموز المميزة من مجمعات الإقراض كرافعة مالية وتوفير السيولة إلى Dex للحصول على المكافآت",
    howItWorkLYF2: "• استفد من العديد من الاستراتيجيات المصممة جيدًا",
    howItWorkLYF3: "• ضبط النطاق السعري لـ CLMM تلقائيًا لمنع الخروج من النطاق",
    howItWorkLendTitle: "الإقراض",
    howItWorkLend1: "• يقوم المستخدمون بالإيداع في مجمعات الإقراض للحصول على عوائد من المقترضين",
    howItWorkLend2: "• قامت شركة Lend to Apoy بالاستفادة من مزارع العائد وصناديق إدارة الأصول كرافعة مالية",
    howItWorkAMFTitle: "صناديق إدارة الأصول",
    howItWorkAMF1: "• إدارة المواقف تلقائيًا في مزارع العائدات ذات الرافعة المالية بواسطة خوارزميات الذكاء الاصطناعي للحصول على أفضل الدخل",
    howItWorkAMF2: "• أنواع مختلفة من الصناديق لتلبية احتياجات إدارة الأصول. مثل صناديق السندات، وصناديق التحوط، وصناديق المؤشرات، وما إلى ذلك",
    howItWorkAMF3: "",
    howItWorkDexTitle: "التنفيذ المباشر",
    howItWorkDex1: "• تعاون النار مع Dex من الدرجة الأولى. يتم إيداع سيولة Apoy في UniSwap وPancakeSwap",
    howItWorkDex2: "• Apoy هو أول DeFi يدعم إدارة أصول خوارزمية AMM وCLMM",
    lyfHead: "الزراعة ذات الإنتاجية العالية",
    lyfDesc1: "يمكن لخوارزمية Apoy ضبط النطاق السعري لتعهد السيولة الخاص بـ CLMM تلقائيًا لتجنب تجاوز النطاق السعري والحصول على سعر أعلى في نفس الوقت",
    lyfDesc2: " تتيح مزارع العائد ذات الرافعة المالية للمستخدمين إجراء عمليات الشراء الطويلة والبيع على المكشوف في نفس الوقت. إن الاقتراض من مجمع الإقراض يعادل البيع على المكشوف، والاحتفاظ بمركز ما يعادل الشراء على المدى الطويل. في المقابل، فإن المستخدمين الذين يقومون بمراهنة السيولة على Dex لديهم فقط وظيفة الشراء الطويل",
    lyfDesc3: "الاستفادة من المخاطرة. ومع ذلك، يمكن للمستخدمين تجنب المخاطر من خلال استراتيجيات مصممة جيدًا والحصول على مكافآت زراعية غنية",
    lyfStrategy1: "استراتيجية الرموز المستقرة المزدوجة",
    lyfStrategy2: "لا توجد استراتيجية الاستدانة",
    lyfStrategy3: "طويلة في استراتيجية السوق الصاعدة",
    lyfStrategy4: "قصيرة في استراتيجية السوق الدب",
    lyfStrategy5: "استراتيجية التحوط ضد المخاطر",
    lyfStrategy6: "1x استراتيجية التعرض الطويل",
    amfHead: "صناديق إدارة الأصول",
    amfBondTitle: "صناديق السندات",
    amfBondFund1: "• عوائد استثمارية مستقرة للغاية باستخدام الرموز المميزة المزدوجة المستقرة", 
    amfBondFund2: "• تقوم خوارزمية Apoy الذكية تلقائيًا بحساب أفضل معدل للرافعة المالية وفوائد الاقتراض لتحقيق أقصى قدر من الاستثمار", 
    amfBondFund3: "• يعتمد الربح والخسارة على معيار الرموز المميزة", 
    amfHedgeTitle: "صناديق التحوط",
    amfHedgeFund1: "• يستخدم Apoy العقود الذكية لإدارة كل من المراكز الطويلة والقصيرة للتحوط من التعرض إلى الصفر",
    amfHedgeFund2: "• يمكنه تحييد مخاطر السوق لكسب عوائد استثمارية عالية ومستقرة",
    amfHedgeFund3: "• يستخدم Apoy خوارزميات ذكية لضبط الأوضاع تلقائيًا",
    amfHedgeFund4: "• يعتمد الربح والخسارة على معيار الرموز المميزة",
    amfIndexTitle: "صناديق المؤشرات",
    amfIndexFund1: "• تستخدم Apoy العقود الذكية لإدارة المراكز الطويلة والقصيرة لتتبع تقلبات الأسعار",
    amfIndexFund2: "• استمتع ليس فقط بنمو القيمة على المدى الطويل للأسعار، ولكن أيضًا بمكافآت الزراعة الغنية",
    amfIndexFund3: "• يستخدم Apoy خوارزميات ذكية لضبط المواضع تلقائيًا",
    amfIndexFund4: "• يعتمد الربح والخسارة على معيار الرموز غير المستقرة",
    aiHead: "الذكاء الاصطناعي",
    aiTitle1: "المشكلة",
    aiDesc1: "عند تخزين السيولة، كيف يمكن الموازنة بين زيادة كفاءة استخدام رأس المال وانخفاض الخسائر المجانية؟ عندما تتم إعادة توازن الأموال، كيف يمكن تحديد أفضل نسبة لتعديل التعرض لتحقيق أفضل تأثير بين فقدان القيمة وتكرار إعادة التوازن؟",
    aiTitle2: "هندسة الميزات",
    aiDesc2: "يقوم Apoy بأخذ عينات من البيانات الموجودة على السلسلة ويستخدم خوارزميات التجميع للقيام بهندسة الميزات، بما في ذلك استخراج الميزات ودمج الميزات. يمكن أن يوفر إنشاء مساحة ميزات عالية الأبعاد حلاً جيدًا للمشاكل عبر الإنترنت في التدريب النموذجي.",
    aiTitle3: "الخوارزمية",
    aiDesc3: "يستخدم Apoy SVM وDNN وخوارزميات الذكاء الاصطناعي الأخرى للتعلم الآلي لحل هذه المشكلات، بما في ذلك التدريب النموذجي والتنبؤ عبر الإنترنت، لمساعدة المستخدمين في الحصول على أفضل الفوائد.",
    diyTitle: "DIY على Dexes",
    diyAdvn: "مزايا",
    diyAdvanTip1: "الرافعة المالية تعني المزيد من الرموز والمزيد من المكافآت",
    diyAdvanTip2: "لدى Apoy عمليات طويلة وقصيرة. بالمقارنة، فإن DIY لها وظائف طويلة فقط. يمكن للمستخدمين الاستفادة من العمليات الطويلة والقصيرة والحصول على المزيد من الاستراتيجيات",
    diyAdvanTip3: "توفر Apoy صناديق إدارة أصول السيارات، بما في ذلك صناديق السندات والتحوط وصناديق المؤشرات",
    diyAdvanTip4: "يمكن لمزودي السيولة جعل تعرض المركز للصفر، وهو ما يسمى دلتا محايدة، لتجنب مخاطر السوق. واحصل على مكافآت زراعية غنية في نفس الوقت",
    diyAdvanTip5: "يمكن لمزودي السيولة تتبع القيمة طويلة المدى عندما يرتفع سعر العملة المشفرة ويحصلون على مكافآت زراعية غنية",
    diyAdvanTip6: "يمكن لخوارزمية Apoy إعادة التوازن التلقائي لـ CLMM Dexes لتجنب الخروج من النطاق",
    diyAdvanTip7: "خوارزمية Apoy AI لتعظيم الإيرادات للمستخدمين",
    joinCommunity: "انضم إلى المجتمع",

  },
  error: {},

  ...enLocale,
};

export default ar;