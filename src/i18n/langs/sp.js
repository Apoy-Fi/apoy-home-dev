
import enLocale from "element-ui/lib/locale/lang/en";
const sp = {
  common: {
    projectName: "Apoy",
    homeTip1: "Apoy Finance es una DeFi que proporciona liquidez apalancada y fondos de gestión de activos basados en IA para AMM y CLMM Dexes.",
    product: "Productos",
    whitePaper: "Papel blanco",
    community: "Comunidad",
    video: "Video",
    secure: "Segura",
    docs: "Documentos",
    buyApoy: "Comprar APOY",
    launchApp: "Lanzamiento",
    tvl: "Valor total bloqueado",
    lock: "Cerrar",
    learnMore: "Aprende más",
    twitter: "Twitter",
    discord: "Discord",
    telegram: "Telegram",
    carouselCard1: "Apoy Finance estará en testnet en enero de 2024. Apoy Finance ahora está negociando con cadenas relativas. Anunciará en qué cadena lanzar más adelante.",
    carouselCard2: "Apoy Finance publicará tareas para los usuarios en Discord. Puedes unirte para ganar recompensas al completar las tareas.",
    carouselCard3: "Apoy Finance ofrece una variedad de puestos, que incluyen moderador, embajador, desarrollo comercial e ingeniero. Únase al servidor de Discord para postularse.",
    carouselCard4: "Apoy Finance da la bienvenida a todo tipo de cooperación, incluida, entre otras, la comunidad, la seguridad, los medios, el capital, los creadores de mercado y más.",
    homeCardTitleFund: "Fondo Descentralizado",
    homeCardTitleAi: "Inteligencia artificial",
    homeFirst1: "Apoy es la primera gestión de activos totalmente compatible con los algoritmos AMM y CLMM.",
    homeFirst2: "Apoy es el primero en utilizar contratos inteligentes descentralizados para fondos de gestión de activos.",
    homeFirst3: "Apoy es el primero en utilizar algoritmos de inteligencia artificial para obtener mejores ingresos en fondos.",
    howItWorkTitle: "Cómo funciona?",
    howItWorkLYFTitle: "Granjas de rendimiento apalancado",
    howItWorkLYF1: "• Tomar prestados tokens de grupos de préstamos como apalancamiento y proporcionar liquidez a Dex para obtener recompensas.",
    howItWorkLYF2: "• Aproveche muchas estrategias bien diseñadas.",
    howItWorkLYF3: "• Ajuste automáticamente el rango de precios de CLMM para evitar que esté fuera de rango.",
    howItWorkLendTitle: "Préstamo",
    howItWorkLend1: "• Los usuarios depositan en grupos de préstamos para obtener rendimientos de los prestatarios.",
    howItWorkLend2: "• Préstamo a Apoy apalancó granjas de rendimiento y fondos de gestión de activos como apalancamiento.",
    howItWorkAMFTitle: "Fondos de gestión de activos",
    howItWorkAMF1: "• Gestione automáticamente posiciones en granjas de rendimiento apalancadas mediante algoritmos de inteligencia artificial para obtener los mejores ingresos.",
    howItWorkAMF2: "• Diferentes tipos de fondos para satisfacer las necesidades de gestión de activos. Como fondos de bonos, fondos de cobertura, fondos indexados, etc.",
    howItWorkAMF3: "",
    howItWorkDexTitle: "Intercambio descentralizado",
    howItWorkDex1: "• El fuego coopera con Dex de primer nivel. La liquidez de Apoy se deposita en UniSwap y PancakeSwap.",
    howItWorkDex2: "• Apoy es el primer DeFi que admite la gestión de activos de algoritmos AMM y CLMM.",
    lyfHead: "Agricultura de rendimiento apalancado",
    lyfDesc1: "El algoritmo Apoy puede ajustar automáticamente el rango de precios de la promesa de liquidez de CLMM para evitar exceder el rango de precios y obtener un nivel más alto al mismo tiempo.",
    lyfDesc2: "Las granjas de rendimiento apalancadas permiten a los usuarios realizar operaciones de compra LARGA y de venta CORTA al mismo tiempo. Tomar prestado del fondo de préstamos equivale a vender a CORTO, y mantener una posición equivale a comprar a LARGO. Por el contrario, los usuarios que realizan apuestas de liquidez en Dex solo tienen la función de compras LARGAS.",
    lyfDesc3: "El apalancamiento es arriesgado. No obstante, los usuarios pueden evitar riesgos con estrategias bien diseñadas y obtener ricas recompensas agrícolas.",
    lyfStrategy1: "Estrategia de tokens estables duales",
    lyfStrategy2: "Sin estrategia apalancada",
    lyfStrategy3: "LARGO en la estrategia del mercado alcista",
    lyfStrategy4: "CORTO en la estrategia del mercado bajista",
    lyfStrategy5: "Estrategia de cobertura de riesgo",
    lyfStrategy6: "1x estrategia de larga exposición",
    amfHead: "Fondos de gestión de activos",
    amfBondTitle: "Fondos de bonos",
    amfBondFund1: "• Rentabilidades de inversión extremadamente estables mediante el uso de tokens duales estables", 
    amfBondFund2: "• El algoritmo inteligente de Apoy calcula automáticamente la mejor tasa apalancada y los intereses de los préstamos para maximizar la inversión.", 
    amfBondFund3: "• Las pérdidas y ganancias se basan en el estándar de tokens estables.", 
    amfHedgeTitle: "Los fondos de cobertura",
    amfHedgeFund1: "• Apoy utiliza contratos inteligentes para gestionar posiciones LARGAS y CORTAS para cubrir la exposición a cero.",
    amfHedgeFund2: "• Puede neutralizar el riesgo de mercado para obtener rendimientos de inversión altos y estables.",
    amfHedgeFund3: "• Apoy utiliza algoritmos inteligentes para ajustar posiciones automáticamente.",
    amfHedgeFund4: "• Las pérdidas y ganancias se basan en el estándar de tokens estables.",
    amfIndexTitle: "Fondos indexados",
    amfIndexFund1: "• Apoy utiliza contratos inteligentes para gestionar posiciones LARGAS y CORTAS para rastrear la fluctuación de precios.",
    amfIndexFund2: "• Disfrute no sólo del crecimiento del valor a largo plazo del aumento de precios, sino también de ricas recompensas agrícolas..",
    amfIndexFund3: "• Apoy utiliza algoritmos inteligentes para ajustar posiciones automáticamente.",
    amfIndexFund4: "• Las pérdidas y ganancias se basan en el estándar de tokens inestables.",
    aiHead: "Inteligencia artificial",
    aiTitle1: "Problema",
    aiDesc1: "Al apostar liquidez, ¿cómo equilibrar una mayor eficiencia en la utilización del capital y menores pérdidas libres? Cuando los fondos se reequilibran, ¿cómo establecer el mejor índice de ajuste de exposición para lograr el mejor efecto entre la pérdida de valor y la frecuencia del reequilibrio?",
    aiTitle2: "Ingeniería de funciones",
    aiDesc2: "Apoy toma muestras de los datos en cadena y utiliza algoritmos de agrupación para realizar ingeniería de funciones, incluida la extracción y combinación de funciones. Generar un espacio de características de alta dimensión puede proporcionar un buen ajuste a los problemas en línea en el entrenamiento de modelos.",
    aiTitle3: "Algoritmo",
    aiDesc3: "Apoy utiliza SVM, DNN y otros algoritmos de inteligencia artificial de aprendizaje automático para resolver estos problemas, incluido el entrenamiento de modelos y la predicción en línea, para ayudar a los usuarios a obtener los mejores beneficios.",
    diyTitle: "Hazlo tú mismo en Dexes",
    diyAdvn: "Ventajas",
    diyAdvanTip1: "Apalancamiento significa más tokens y más recompensas",
    diyAdvanTip2: "Apoy tiene operaciones tanto LARGAS como CORTAS. En comparación, el bricolaje sólo tiene funciones LARGAS. Los usuarios pueden beneficiarse de operaciones LARGAS y CORTAS y obtener más estrategias.",
    diyAdvanTip3: "Apoy proporciona fondos de gestión de activos para automóviles, incluidos fondos de bonos, de cobertura e indexados.",
    diyAdvanTip4: "Los proveedores de liquidez pueden hacer que la exposición de la posición sea cero, lo que se denomina delta neutralizado, para evitar el riesgo de mercado. Y obtenga ricas recompensas agrícolas al mismo tiempo.",
    diyAdvanTip5: "Los proveedores de liquidez pueden rastrear el valor a largo plazo cuando el precio de la criptomoneda sube y obtener ricas recompensas agrícolas.",
    diyAdvanTip6: "El algoritmo Apoy puede reequilibrar automáticamente CLMM Dexes para evitar fuera de rango.",
    diyAdvanTip7: "Algoritmo Apoy AI para maximizar los ingresos de los usuarios.",
    joinCommunity: "Únete a la comunidad",

  },
  error: {},

  ...enLocale,
};

export default sp;