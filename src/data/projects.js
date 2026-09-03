export const projects = [
  {
    id: 'mercado-ar',
    title: 'Mercado AR Dashboard',
    badge: 'Co-creado con Codex',
    accent: 'codex',
    liveUrl: 'https://mercadito-self.vercel.app/',
    thumb: '/thumbs/mercado-ar.jpg',
    description:
      'Dashboard dinámico del mercado argentino en tiempo real. Monitorea bonos soberanos (TIR/Duration), acciones del panel líder, CEDEARs y dólares financieros (MEP/CCL).',
    longDescription:
      'Terminal financiera pensada como puerta de entrada al mercado argentino: combina macro, renta fija, renta variable y dólares en una sola vista en vivo con auto-refresh.',
    overview: [
      'Mercado AR es un dashboard dinámico que centraliza lo que un inversor mira cada mañana: índices globales y Merval en USD, dólares MEP/CCL/oficial, tasa de política monetaria y reservas del BCRA, bonos soberanos en D con TIR, duration, variación, volumen y paridad, y el panel líder de BYMA con heatmaps por volumen.',
      'La gracia está en la densidad útil sin ruido: arriba una marquesina de índices (S&P 500, Dow, Nasdaq, Merval USD), al lado tarjetas macro con fuente declarada (DolarAPI, BCRA, BYMA), y debajo tablas densas pero legibles con buscador por ticker, paginado y orden por variación. Cada ticker tiene su ficha /instrumento/:ticker para profundizar.',
      'Para renta fija resuelve el caso más difícil del mercado local: comparar GD29D, GD30D, GD38D, GD41D, GD46D, AE38D y compañía por TIR, duration y paridad en pesos y dólares, más heatmaps de bonos USD en pesos y tablas de bonos en pesos, letras, soberanos y ONs (257 instrumentos). Para renta variable cubre 1.194 CEDEARs y el panel líder con heatmap donde el área es volumen.',
    ],
    sections: [
      {
        title: 'Marquesina macro en vivo',
        text: 'S&P 500, Dow, Nasdaq, Merval USD, Dólar MEP/CCL/oficial, tasa 23,06% y reservas US$ 48.259M con hora de actualización y fuentes a la vista.',
      },
      {
        title: 'Bonos soberanos D',
        text: 'Tabla GD30D, GD29D, GD46D, GD38D, AE38D, GD41D con precio, TIR, duration, variación, volumen y paridad. 11 instrumentos con paginado.',
      },
      {
        title: 'Heatmaps BYMA',
        text: 'Panel líder (YPFD, GGAL, PAMP, BBAR…) y bonos USD en pesos (AL30, GD35, AO27…) donde el tamaño es volumen operado.',
      },
      {
        title: 'CEDEARs + Renta en pesos',
        text: '1.194 CEDEARs con último, var %, volumen y moneda, más 257 bonos en pesos, LECAPs y ONs con buscador global.',
      },
      {
        title: 'Dólares, Fondos y Crypto',
        text: 'Rutas /fondos, /lecaps y /crypto: desglose de FCI, curva LECAPs y futuros cripto para armar coberturas (hedging).',
      },
      {
        title: 'Ficha por instrumento + Noticias',
        text: 'Detalle /instrumento/:ticker e indicadores clave: riesgo país 500 pb, brecha CCL/MEP +3,88% y Merval en USD.',
      },
    ],
    features: ['Heatmaps por volumen BYMA', 'Bonos D: TIR / Duration / Paridad', 'MEP/CCL + FCI + Crypto hedging'],
    stack: ['React + Vite', 'APIs: DolarAPI / Data912 / BYMA / BCRA / MAE', 'Vercel + auto-refresh'],
    dataSources: ['DolarAPI', 'Data912', 'BYMA', 'BCRA', 'MAE', 'Rava'],
    howToUse:
      'Entrá al sitio en vivo, filtrá por ticker en el buscador global, ordená bonos por TIR o variación, compará paridades y saltá a la ficha del instrumento. Ideal para pre-market y seguimiento intradiario.',
  },
  {
    id: 'porfolio-ar',
    title: 'PorfolioAR',
    badge: 'Co-creado con Codex',
    accent: 'codex',
    liveUrl: 'https://porfolioar.vercel.app/',
    thumb: '/thumbs/porfolio-ar.jpg',
    description:
      'Plataforma de consolidación patrimonial y tracking automatizado de carteras privadas con actualización en vivo. Consume APIs financieras y calcula distribución por categoría.',
    longDescription:
      'Consolidador patrimonial para carteras reales: valor total en ARS y USD, distribución por categoría y peso de cada activo, con lógica VN 100 para renta fija.',
    overview: [
      'PorfolioAR responde la pregunta “¿cuánto tengo y dónde?”: toma posiciones dispersas en acciones, CEDEARs, fondos, renta fija en pesos y dólares, cripto y efectivo, las recotiza en vivo contra APIs financieras y devuelve valor total del portfolio en pesos (ej. $ 4.345.735,00 ≈ US$ 2.848,19) con hora de actualización.',
      'El corazón es la distribución por categoría con donut interactivo (CEDEAR 46,0%, Acciones 34,1%, Renta Fija Dólar 19,7%, Efectivo 0,3%) y el panel de posiciones principales con barras de peso (MELI 29,2%, YPFD 21,1%, AL30 19,7%, AAPL 16,8%…). Pasar el cursor o tocar un segmento filtra mentalmente dónde está concentrado el riesgo.',
      'Debajo, la tabla de detalle con ticker, categoría, tipo (renta fija / variable / liquidez), precio actual en ARS, cantidad, valor total, % del portfolio y acciones por fila, con filtros por categoría y tipo más ordenamiento. Para renta fija se ingresa valor nominal y el sistema aplica precio por cada VN 100, que es como realmente cotiza el mercado local. El precio manual no se guarda: al recargar vuelve a consultar la cotización, evitando datos viejos.',
    ],
    sections: [
      {
        title: 'Resumen patrimonial',
        text: 'Valor total en ARS + equivalente en USD, con timestamp de actualización y botón Actualizar precios.',
      },
      {
        title: 'Distribución por categoría',
        text: 'Donut interactivo por Acciones, CEDEAR, Fondos, Renta Fija Pesos/Dólar, Cripto y Efectivo con totales.',
      },
      {
        title: 'Posiciones principales',
        text: 'Ranking con barra y % sobre valor actualizado: MELI, YPFD, AL30, AAPL, GGAL, ARS, T2X6…',
      },
      {
        title: 'Detalle de activos',
        text: 'Tabla filtrable y ordenable con precio, cantidad, valor total y % del portfolio por activo.',
      },
      {
        title: 'Agregar activo (VN 100)',
        text: 'Modal con ticker, categoría, tipo y cantidad. En renta fija interpreta valor nominal y calcula por VN 100.',
      },
      {
        title: 'Demo + persistencia sana',
        text: 'Botón Restablecer datos de prueba y recotización al recargar para no arrastrar precios manuales viejos.',
      },
    ],
    features: ['Peso % por activo', 'Renta Fija por VN 100', 'Distribución por categoría en vivo'],
    stack: ['React + Vite', 'APIs financieras en vivo', 'Vercel'],
    dataSources: ['APIs financieras en vivo', 'Cotizaciones ARS', 'Tipo de cambio para equivalente USD'],
    howToUse:
      'Tocá + Agregar activo, cargá ticker y cantidad (nominal si es bono), actualizá precios y mirá cómo se mueve el donut y el % de cada posición. Úsalo para rebalancear entre CEDEAR, acciones y renta fija.',
  },
  {
    id: 'analab',
    title: 'AnaLab',
    badge: 'Co-creado con Codex',
    accent: 'codex',
    liveUrl: 'https://analab-coral.vercel.app/',
    thumb: '/thumbs/analab.jpg',
    description:
      'Seguimiento de análisis de sangre en el tiempo: cargá colesterol, triglicéridos, glucemia y vitamina D por perfil y visualizá su evolución con índices derivados.',
    longDescription:
      'Tracker personal de laboratorio: múltiples perfiles, 6 biomarcadores y 4 índices calculados automáticamente, con evolución temporal y rangos orientativos.',
    overview: [
      'AnaLab responde “¿cómo vienen mis análisis?”: permite crear perfiles (una persona por perfil), cargar análisis con fecha y ver la evolución de cada métrica en el tiempo en lugar de comparar PDFs sueltos del laboratorio.',
      'Cubre 6 biomarcadores básicos —colesterol total, HDL, LDL, triglicéridos, glucemia y vitamina D— y calcula solos 4 índices derivados: TG/HDL, colesterol total/HDL, LDL/HDL e índice TyG. Acepta carga parcial: puedes dejar métricas vacías y los índices se calculan solo cuando hay datos suficientes.',
      'Incluye desde el inicio el aviso responsable de que los rangos son orientativos y no sustituyen la evaluación de un profesional de la salud, y un flujo guiado con estados vacíos: sin perfil seleccionado, el panel de evolución espera a que crees o elijas uno.',
    ],
    sections: [
      {
        title: 'Perfiles personales',
        text: 'Creá con + Nuevo y seleccioná la persona analizada; todo el panel de evolución está atado al perfil activo.',
      },
      {
        title: 'Carga fechada',
        text: 'Nuevo análisis con fecha y 6 campos con sus unidades (mg/dL y ng/mL). Admite métricas vacías.',
      },
      {
        title: 'Índices derivados',
        text: 'TG/HDL, Col. total/HDL, LDL/HDL y TyG calculados automáticamente solo con datos suficientes.',
      },
      {
        title: 'Evolución en el tiempo',
        text: 'Panel que muestra cada métrica e índice a lo largo de los análisis cargados para detectar tendencias.',
      },
      {
        title: 'Rangos orientativos',
        text: 'Referencias visuales por biomarcador con disclaimer médico siempre visible.',
      },
      {
        title: 'Flujo guiado',
        text: 'Estados vacíos que explican el siguiente paso: crear perfil → cargar análisis → ver evolución.',
      },
    ],
    features: ['6 biomarcadores + 4 índices (TyG, TG/HDL…)', 'Múltiples perfiles con evolución temporal', 'Carga parcial + rangos orientativos'],
    stack: ['React + Vite', 'Cálculo de índices en cliente', 'Vercel'],
    dataSources: ['Carga manual de laboratorio', 'Rangos de referencia orientativos'],
    howToUse:
      'Creá un perfil con + Nuevo, cargá tu primer análisis con fecha y valores, y mirá la evolución. Sumá cada nuevo laboratorio para comparar períodos.',
  },
  {
    id: 'etf-explorer',
    title: 'ETF Explorer',
    badge: 'Co-creado con DeepSeek',
    accent: 'deepseek',
    liveUrl: 'https://etf-theta-three.vercel.app/',
    thumb: '/thumbs/etf.jpg',
    description:
      'Explorador de ETFs del mercado US agrupados por categoría: filtrá por índices, sectores, commodities y bonos, y desglosá composición, ponderaciones y rendimiento.',
    longDescription:
      'Sector explorer de 44 ETFs norteamericanos: precio en vivo, AUM, expense ratio, retornos y tenencias, con buscador por ticker o acción subyacente.',
    overview: [
      'ETF Explorer responde “¿en qué ETF me posiciono?”: agrupa 44 fondos del mercado US por tipo de activo —14 índices, 20 sectores, 6 commodities y 4 bonos— con precio del día, variación hoy, AUM, expense ratio, retorno a 1 año, YTD, cantidad de posiciones, dividend yield y fecha de datos con badge Live.',
      'Cada tarjeta (XLK, XLV, XLF, XLE, XLY, XLP, XLI, XLU…) muestra de un vistazo lo que define a un ETF: cuánto cuesta, cuánto rinde, cuánto cobra de comisión y qué tan diversificado está. El buscador acepta ticker, nombre o tenencia —podés escribir AAPL o NVDA y ver en qué fondos aparece— y el orden por nombre o AUM permite comparar el tamaño de cada fondo.',
      'El botón Analizar de cada tarjeta abre el desglose de composición y ponderaciones para entender el riesgo sectorial antes de invertir, con refinamiento por subsector y mercado.',
    ],
    sections: [
      {
        title: 'Categorías US',
        text: 'Todos 44, Índices 14, Sectores 20, Commodities 6 y Bonos 4, cada filtro con su conteo de fondos.',
      },
      {
        title: 'Buscador inteligente',
        text: 'Por ticker, nombre o tenencia subyacente: escribí AAPL o NVDA y descubrí en qué ETFs aparecen.',
      },
      {
        title: 'Tarjeta por ETF',
        text: 'Precio, variación hoy, AUM, expense ratio, retorno 1 año, YTD, posiciones, dividend yield y fecha.',
      },
      {
        title: 'Análisis por fondo',
        text: 'Desglose de composición, ponderaciones y rendimiento para evaluar concentración sectorial.',
      },
      {
        title: 'Orden + Live',
        text: 'Orden por nombre o AUM y badge Live con fecha de datos para saber qué tan frescos están.',
      },
      {
        title: 'Cobertura sectorial',
        text: 'Los 11 sectores SPDR: Tecnología, Salud, Financiero, Energía, Consumo, Industrial, Utilities y más.',
      },
    ],
    features: ['44 ETFs: índices, sectores, commodities y bonos', 'Buscador por tenencia (AAPL, NVDA…)', 'AUM, expense ratio y retornos por tarjeta'],
    stack: ['React + Vite', 'Datos US Market en vivo', 'Vercel'],
    dataSources: ['US Market', 'Cotizaciones en vivo'],
    howToUse:
      'Filtrá por categoría, buscá un ticker o una acción que tengas, compará expense ratio y retornos, y entrá a Analizar para ver la composición antes de decidir.',
  },
  {
    id: 'portfolio',
    title: 'Mi Portafolio',
    badge: 'Co-creado con Muse',
    accent: 'deepseek',
    liveUrl: 'https://mi-portafolio-ashy-mu.vercel.app/',
    thumb: '/thumbs/portfolio.jpg',
    description:
      'Este mismo sitio: portfolio cyberpunk en modo oscuro con rutas detalle por proyecto, miniaturas locales, formulario de contacto y menú móvil animado.',
    longDescription:
      'Meta-proyecto: el portfolio que estás viendo, construido como SPA escalable a multipágina con React Router, Tailwind y Framer Motion.',
    overview: [
      'Este portfolio es a la vez contenedor y contenido: la home presenta hero, grid de proyectos, skills y contacto, y cada proyecto tiene su ruta /proyectos/:id con descripción elaborada, miniatura, features, stack y enlace al sitio en vivo.',
      'La estética es cyberpunk minimalista en modo oscuro estricto (#070A13, tarjetas #111625, bordes #1F293D) con dos acentos neón: verde esmeralda y azul eléctrico. Todas las secciones animan con Framer Motion al hacer scroll y las tarjetas tienen hover premium con escala y glow sincronizado a su color.',
      'Las miniaturas viven en public/thumbs para no depender de servicios externos, el formulario de contacto arma un mailto con asunto y cuerpo, y el header lleva menú hamburguesa animado en mobile. Deployado en Vercel con build de Vite.',
    ],
    sections: [
      {
        title: 'Home SPA',
        text: 'Hero, grid de proyectos, skills y contacto en una sola página con navegación por anclas.',
      },
      {
        title: 'Rutas detalle',
        text: 'Ruta /proyectos/:id genérica con overview, recorrido por el sitio, fuentes y cómo usarlo.',
      },
      {
        title: 'Hover premium',
        text: 'Escala 1.02 + box-shadow neón sincronizado al acento en cada tarjeta de proyecto.',
      },
      {
        title: 'Miniaturas locales',
        text: 'Capturas reales en public/thumbs, sin depender de servicios externos pagos.',
      },
      {
        title: 'Contacto real',
        text: 'Formulario que compone un mailto + botón con gradiente esmeralda→azul y glow.',
      },
      {
        title: 'Header mobile',
        text: 'Hamburguesa que muta a X con panel desplegable animado y cierre automático.',
      },
    ],
    features: ['SPA escalable a multipágina con Router', 'Rutas detalle con contenido elaborado', 'Thumbs locales + form + menú animado'],
    stack: ['React + Vite + Tailwind v3', 'Framer Motion + React Router', 'Vercel'],
    dataSources: ['Contenido propio', 'Capturas locales'],
    howToUse:
      'Estás dentro: navegá a cada ruta detalle desde las cards, probá el menú móvil achicando la ventana y usá el formulario para escribirme.',
  },
  {
    id: 'ofertas-ar',
    title: 'OfertasAR',
    badge: 'Co-creado con DeepSeek',
    accent: 'deepseek',
    liveUrl: 'https://superofertas-three.vercel.app/',
    thumb: '/thumbs/superofertas.jpg',
    description:
      'Comparador de supermercados argentinos: buscá productos, marcas o categorías y encontrá el mejor precio de la semana en 8 cadenas.',
    longDescription:
      'Ahorro semanal en un solo lugar: precios reales en tiempo real de Jumbo, Coto, Disco, Vea, Carrefour, Día, ChangoMás y Vital.',
    overview: [
      'OfertasAR responde “¿dónde conviene comprar esta semana?”: centraliza precios reales relevados en tiempo real de ocho supermercados argentinos y muestra el mejor precio por producto, marca o categoría en una sola búsqueda.',
      'El flujo es simple: escribís leche, aceite o fideos (o presionás Enter), filtrás por cadena, activás Solo ofertas, ordenás por relevancia y ponés un precio máximo para acotar. Todo actualizado hoy, con el aviso de que los datos pueden variar según disponibilidad de cada cadena.',
      'Aplica al changuito semanal la misma filosofía de los dashboards financieros: densidad útil, filtros potentes y cero fricción para decidir rápido dónde comprar.',
    ],
    sections: [
      {
        title: 'Buscador',
        text: 'Productos, marcas o categorías con ejemplos (leche, aceite, fideos) y búsqueda con botón o Enter.',
      },
      {
        title: '8 cadenas',
        text: 'Jumbo, Coto, Disco, Vea, Carrefour, Día, ChangoMás y Vital como filtros por supermercado.',
      },
      {
        title: 'Solo ofertas',
        text: 'Toggle para ver únicamente los precios en oferta de la semana.',
      },
      {
        title: 'Precio máximo',
        text: 'Tope en pesos para filtrar resultados según tu presupuesto.',
      },
      {
        title: 'Mejor precio semanal',
        text: 'Comparativa del mejor precio de la semana por producto en un solo lugar.',
      },
      {
        title: 'Datos en vivo',
        text: 'Actualizado hoy, precios reales en ARS con disclaimer de disponibilidad por cadena.',
      },
    ],
    features: ['8 supermercados con precios en tiempo real', 'Filtros por cadena, ofertas y precio máximo', 'Mejor precio de la semana por producto'],
    stack: ['React + Vite', 'Precios reales en tiempo real', 'Vercel'],
    dataSources: ['Relevamiento en tiempo real', '8 cadenas argentinas'],
    howToUse:
      'Escribí un producto y presioná Buscar, filtrá por tus cadenas habituales, activá Solo ofertas y fijá un precio máximo para cazar el mejor precio.',
  },
]
