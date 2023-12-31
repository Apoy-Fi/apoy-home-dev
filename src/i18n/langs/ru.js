
import enLocale from "element-ui/lib/locale/lang/en";
const ru = {
  common: {
    projectName: "Apoy",
    homeTip1: "Apoy Finance — это DeFi, предоставляющий ликвидность с использованием заемных средств и фонды управления активами на основе искусственного интеллекта для дексов AMM и CLMM.",
    product: "Продукты",
    whitePaper: "Белая бумага",
    community: "Сообщество",
    video: "видео",
    secure: "Безопасный",
    docs: "Документы",
    buyApoy: "Купить APOY",
    launchApp: "Запуск",
    tvl: "Общая стоимость заблокирована",
    lock: "Замок",
    learnMore: "Узнать больше",
    twitter: "Twitter",
    discord: "Discord",
    telegram: "Telegram",
    carouselCard1: "Apoy Finance будет в тестовой сети в январе 2024 года. В настоящее время Apoy Finance ведет переговоры с соответствующими сетями. Позже объявим, какую сеть запустить.",
    carouselCard2: "Apoy Finance будет публиковать задания для пользователей в Discord. Вы можете присоединиться, чтобы получать награды, выполняя задания.",
    carouselCard3: "Apoy Finance предлагает различные должности, включая модератора, представителя, специалиста по развитию бизнеса и инженера. Присоединяйтесь к серверу Discord, чтобы подать заявку.",
    carouselCard4: "Apoy Finance приветствует все виды сотрудничества, включая, помимо прочего, сотрудничество с сообществом, безопасностью, средствами массовой информации, капиталом, маркет-мейкерами и многим другим.",
    homeCardTitleFund: "Децентрализованный фонд",
    homeCardTitleAi: "Искусственный интеллект",
    homeFirst1: "Apoy — первое решение для управления активами, полностью совместимое с алгоритмами AMM и CLMM.",
    homeFirst2: "Apoy — первая компания, которая использует децентрализованные смарт-контракты для фондов управления активами.",
    homeFirst3: "Apoy — первая компания, которая использует алгоритмы искусственного интеллекта для получения максимальной прибыли от фондов..",
    howItWorkTitle: "Как это работает?",
    howItWorkLYFTitle: "Доходные фермы с кредитным плечом",
    howItWorkLYF1: "• Занимайте токены у кредитных пулов в качестве кредитного плеча и предоставляйте Dex ликвидность для получения вознаграждений.",
    howItWorkLYF2: "• Воспользуйтесь преимуществами множества хорошо продуманных стратегий.",
    howItWorkLYF3: "• Автоматическая настройка ценового диапазона CLMM, чтобы предотвратить выход за пределы диапазона.",
    howItWorkLendTitle: "Кредитование",
    howItWorkLend1: "• Пользователи вносят депозиты в кредитные пулы, чтобы получать прибыль от заемщиков.",
    howItWorkLend2: "• В качестве рычага кредитования компания «Lend to Apoy» использовала доходные фермы и фонды управления активами.",
    howItWorkAMFTitle: "Фонды управления активами",
    howItWorkAMF1: "• Автоматическое управление позициями на фермах с использованием заемных средств с помощью алгоритмов искусственного интеллекта для получения наилучших доходов.",
    howItWorkAMF2: "• Различные виды фондов для удовлетворения потребностей в управлении активами. Например, фонды облигаций, хедж-фонды, индексные фонды и т. д.",
    howItWorkAMF3: "",
    howItWorkDexTitle: "Декс",
    howItWorkDex1: "• Огонь сотрудничает с Дексом высшего уровня. Ликвидность Apoy хранится в UniSwap и PancakeSwap.",
    howItWorkDex2: "• Apoy — первый DeFi, поддерживающий управление активами по алгоритмам AMM и CLMM.",
    lyfHead: "Фермерство с использованием заемных средств",
    lyfDesc1: "Алгоритм Apoy может автоматически корректировать ценовой диапазон залога ликвидности CLMM, чтобы избежать превышения ценового диапазона и одновременно получить более высокий уровень.",
    lyfDesc2: "Фермы доходности с кредитным плечом позволяют пользователям одновременно выполнять операции ДЛИТЕЛЬНОЙ покупки и КОРОТКОЙ продажи. Заимствование из кредитного пула эквивалентно КОРОТКОЙ продаже, а удержание позиции эквивалентно ДЛИННОЙ покупке. Напротив, пользователи, которые делают ставки на ликвидность на Dex, имеют только функцию ДЛИТЕЛЬНОЙ покупки",
    lyfDesc3: "Использовать кредитное плечо рискованно. Тем не менее, пользователи могут избежать рисков с помощью хорошо продуманных стратегий и получить богатые награды за сельское хозяйство.",
    lyfStrategy1: "Стратегия двойных стабильных токенов",
    lyfStrategy2: "Нет стратегии с использованием кредитного плеча",
    lyfStrategy3: "ДЛИННАЯ позиция в стратегии бычьего рынка",
    lyfStrategy4: "SHORT в стратегии медвежьего рынка",
    lyfStrategy5: "Стратегия хеджирования рисков",
    lyfStrategy6: "1 стратегия длительного воздействия",
    amfHead: "Фонды управления активами",
    amfBondTitle: "Фонды облигаций",
    amfBondFund1: "• Чрезвычайно стабильный доход от инвестиций за счет использования двойных стабильных токенов", 
    amfBondFund2: "• Интеллектуальный алгоритм Apoy автоматически рассчитывает оптимальную ставку кредитного плеча и проценты по займам для максимизации инвестиций.", 
    amfBondFund3: "• Прибыль и убытки основаны на стандарте стабильных токенов.", 
    amfHedgeTitle: "Хедж-фонды",
    amfHedgeFund1: "• Apoy использует смарт-контракты для управления как ДЛИННЫМИ, так и КОРОТКИМИ позициями, чтобы свести риски к нулю.",
    amfHedgeFund2: "• Он может нейтрализовать рыночный риск и получить высокую и стабильную доходность инвестиций.",
    amfHedgeFund3: "• Apoy использует интеллектуальные алгоритмы для автоматической регулировки позиций.",
    amfHedgeFund4: "• Прибыль и убытки основаны на стандарте стабильных токенов.",
    amfIndexTitle: "Индексные фонды",
    amfIndexFund1: "• Apoy использует смарт-контракты для управления ДЛИННЫМИ и КОРОТКИМИ позициями, чтобы отслеживать колебания цен.",
    amfIndexFund2: "• Наслаждайтесь не только долгосрочным ростом цен, но и богатыми сельскохозяйственными наградами.",
    amfIndexFund3: "• Apoy использует интеллектуальные алгоритмы для автоматической корректировки позиций.",
    amfIndexFund4: "• Прибыль и убытки основаны на нестабильном стандарте токенов.",
    aiHead: "Искусственный интеллект",
    aiTitle1: "Проблема",
    aiDesc1: "Как при ставках на ликвидность найти баланс между более высокой эффективностью использования капитала и меньшими свободными потерями? Когда фонды проводят ребалансировку, как установить наилучший коэффициент корректировки риска, чтобы добиться наилучшего эффекта между потерей стоимости и частотой ребалансировки?",
    aiTitle2: "Разработка функций",
    aiDesc2: "Apoy производит выборку данных в цепочке и использует алгоритмы кластеризации для разработки функций, включая извлечение функций и их комбинацию. Создание многомерного пространства признаков может обеспечить хорошее решение онлайн-задач при обучении модели.",
    aiTitle3: "Алгоритм",
    aiDesc3: "Apoy использует SVM, DNN и другие алгоритмы искусственного интеллекта машинного обучения для решения этих проблем, включая обучение моделей и онлайн-прогнозирование, чтобы помочь пользователям получить максимальную выгоду.",
    diyTitle: "Сделай сам на Дексе",
    diyAdvn: "Преимущества",
    diyAdvanTip1: "Кредитное плечо означает больше токенов и больше вознаграждений",
    diyAdvanTip2: "Apoy имеет как LONG, так и SHORT операции. Для сравнения, DIY имеет только ДЛИННЫЕ функции. Пользователи могут извлечь выгоду из операций LONG и SHORT и получить больше стратегий.",
    diyAdvanTip3: "Apoy предоставляет фонды управления автомобильными активами, включая фонды облигаций, хедж-фонды и индексные фонды.",
    diyAdvanTip4: "Поставщики ликвидности могут сделать позицию нулевой, что называется дельта-нейтрализацией, чтобы избежать рыночного риска. И одновременно получайте богатые награды за сельское хозяйство.",
    diyAdvanTip5: "Поставщики ликвидности могут отслеживать долгосрочную стоимость, когда цена криптовалюты растет, и получать богатые вознаграждения за сельское хозяйство.",
    diyAdvanTip6: "Алгоритм Apoy может автоматически перебалансировать дексы CLMM, чтобы избежать выхода за пределы диапазона.",
    diyAdvanTip7: "Алгоритм Apoy AI для максимизации доходов пользователей.",
    joinCommunity: "Присоединяйтесь к сообществу",

  },
  error: {},

  ...enLocale,
};

export default ru;