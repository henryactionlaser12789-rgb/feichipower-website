export interface ShowcaseProject {
  id: string;
  title: Record<string, string>;
  category: 'ehouse' | 'switchgear' | 'transformer' | 'renewable';
  location: Record<string, string>;
  clientOrSector: string;
  specs: string;
  image: string;
  highlight?: boolean;
}

export interface CertificationItem {
  id: string;
  title: Record<string, string>;
  category: 'type_test' | 'international' | 'patent' | 'national' | 'energy';
  issuer: string;
  standard: string;
  image: string;
  code?: string;
  highlight?: boolean;
}

export interface FactoryPhotoItem {
  id: string;
  title: Record<string, string>;
  caption: Record<string, string>;
  image: string;
}

export const factoryPhotosList: FactoryPhotoItem[] = [
  {
    id: 'fac-1',
    title: {
      zh: '智能化研发制造中心与现代化厂区全景',
      en: 'Smart Engineering R&D Center & Headquarters (2.5K HD)',
      ja: 'スマート研究開発製造センター・本部ビル（2.5K高解像度）',
      es: 'Centro de I+D y Fabricación Inteligente (2.5K HD)',
      ru: 'Интеллектуальный научно-производственный центр и штаб-квартира (2.5K)',
    },
    caption: {
      zh: '厂区占地 6.3 万平方米，集高压电气拓扑仿真、BIM 预制舱设计与全球出海中心于一体',
      en: '63,000m² facility integrating HV electrical simulation, BIM E-House design & global EPC center',
      ja: '敷地面積6.3万㎡、高圧電気シミュレーション、BIMプレハブ変電所設計、グローバルEPC拠点',
      es: 'Planta de 63,000m² que integra simulación eléctrica de AT, diseño BIM de E-House y centro EPC global',
      ru: 'Завод площадью 63 000 м²: моделирование ВН, проектирование БКРУ и глобальный инжиниринговый центр',
    },
    image: '/images/syfcdq/feichi_hq_panoramic_2k.webp',
  },
  {
    id: 'fac-2',
    title: {
      zh: '现代化自动化数控装配车间全景',
      en: 'Modern Automated CNC Assembly & Fabrication Plant',
      ja: '自動化CNC組立・製造工場全景',
      es: 'Taller de Ensamblaje y Fabricación CNC Automatizado',
      ru: 'Автоматизированный сборочный цех с ЧПУ',
    },
    caption: {
      zh: '配备高精度光纤激光数控冲剪折弯机组、全自动铜母线镀锡成型线与万台级年产能力',
      en: 'Equipped with fiber laser cutting, automated bending & busbar processing lines for 10,000+ units/year',
      ja: '高精度ファイバーレーザー切断機、全自動銅母線加工ライン、年間1万台以上の生産体制',
      es: 'Equipado con corte láser de fibra, plegado CNC y líneas de barras de cobre para más de 10,000 uds/año',
      ru: 'Оснащен станками лазерной резки, гибки с ЧПУ и обработкой медных шин мощностью 10 000+ ед/год',
    },
    image: '/images/syfcdq/feichi_workshop_cnc_2k.webp',
  },
  {
    id: 'fac-3',
    title: {
      zh: '沈阳重工业装备制造基地鸟瞰',
      en: 'Shenyang Heavy Industry Manufacturing Base Aerial View',
      ja: '瀋陽重工業製造基地の全景鳥瞰',
      es: 'Vista Aérea de la Base de Fabricación de Shenyang',
      ru: 'Панорама производственной базы тяжелого машиностроения в Шэньяне',
    },
    caption: {
      zh: '依托东北装备制造业基地，具备 220kV 主变、成套开关柜与特种集装箱预制舱全链条制造实力',
      en: 'Full-chain manufacturing spanning 220kV power transformers, GIS, KYN28 switchgear & E-Houses',
      ja: '220kV変圧器、GIS、開閉装置、特注E-Houseの全工程一貫製造体制',
      es: 'Fabricación integral de transformadores de 220kV, GIS, celdas KYN28 y E-Houses',
      ru: 'Полный цикл производства: силовые трансформаторы 220 кВ, КРУЭ, КРУ и БКРУ',
    },
    image: '/images/library/01_企业形象与厂区/P02_07_企业介绍_生产基地鸟瞰_厂区风貌_958x319.webp',
  },
  {
    id: 'fac-4',
    title: {
      zh: '严谨工艺与电气出厂绝缘试验流水线',
      en: 'Precision Assembly & High-Voltage Dielectric Testing Line',
      ja: '精密組立・高圧絶縁試験ライン',
      es: 'Línea de Ensamblaje de Precisión y Pruebas Dieléctricas',
      ru: 'Линия точной сборки и диэлектрических испытаний ВН',
    },
    caption: {
      zh: '100% 出厂前工频耐压试验、局部放电检测（PD < 10pC）与机械特性闭锁核验',
      en: '100% routine power-frequency withstand, partial discharge (PD < 10pC) & mechanical timing tests',
      ja: '出荷前100%耐電圧試験、部分放電検査（PD < 10pC）、機械インターロック検証',
      es: '100% pruebas de tensión aplicada, descargas parciales (PD < 10pC) e interbloqueos mecánicos',
      ru: '100% заводские испытания: выдерживаемое напряжение, ЧР < 10 пКл и механическая блокировка',
    },
    image: '/images/library/01_企业形象与厂区/P02_04_企业介绍_核心生产线装备特写_812x611.webp',
  },
];

export const showcaseProjectsList: ShowcaseProject[] = [
  // 1. Overseas Global EPC Projects (海外与出海标杆)
  {
    id: 'proj-mexico-1',
    title: {
      zh: '墨西哥佩尼亚斯科大型光伏电站二期项目（120MW 升压站）',
      en: 'Puerto Peñasco Solar 120MW Phase 2 PV Substation (Sonora, Mexico)',
      ja: 'メキシコ・プエルトペニャスコ太陽光発電所第2期 120MW 昇圧変電所',
      es: 'Subestación Elevadora Solar de 120MW Puerto Peñasco Fase II (México)',
      ru: 'Повысительная подстанция СЭС Пуэрто-Пеньяско 120 МВт, Фаза II (Мексика)',
    },
    category: 'renewable',
    location: { zh: '墨西哥 · 索诺拉州', en: 'Sonora, Mexico', ja: 'メキシコ・ソノラ州', es: 'Sonora, México', ru: 'Сонора, Мексика' },
    clientOrSector: 'Mexico Utility-Scale Solar EPC / CFE Grid Integration',
    specs: '34.5kV / 115kV High-Temperature Sand-Dust Proof Skid Substation (-20°C to +55°C)',
    image: '/images/syfcdq/project_mexico_penasco_solar.webp',
    highlight: true,
  },
  {
    id: 'proj-philippines-1',
    title: {
      zh: '菲律宾 PCPC 分布式光伏 EPC 预制舱与一次成套开关柜项目',
      en: 'Philippines PCPC Distributed Solar EPC E-House & Primary Switchgear',
      ja: 'フィリピン PCPC 分散型太陽光 EPC プレハブ変電所・開閉装置',
      es: 'E-House y Celdas de Media Tensión para Proyecto Solar EPC PCPC (Filipinas)',
      ru: 'БКРУ и распределительное устройство 35 кВ для СЭС PCPC (Филиппины)',
    },
    category: 'ehouse',
    location: { zh: '菲律宾 · 宿务/伊洛伊洛', en: 'Cebu / Iloilo, Philippines', ja: 'フィリピン', es: 'Filipinas', ru: 'Филиппины' },
    clientOrSector: 'Southeast Asia Island Renewable EPC / Tropical Marine Environment',
    specs: '35kV / 13.8kV C5-M Anti-Corrosion Marine E-House, Dual Inverter Redundancy',
    image: '/images/syfcdq/project_philippines_pcpc_solar_ehouse.webp',
    highlight: true,
  },
  {
    id: 'proj-ehouse-1',
    title: {
      zh: '几内亚力拓西芒杜铁矿港口特种 E-House 预制舱项目',
      en: 'Rio Tinto Simandou Port E-House Substation (Guinea, West Africa)',
      ja: 'ギニア・リオティント・シマンドゥ港湾 E-House プレハブ変電所',
      es: 'Subestación E-House del Puerto Simandou de Rio Tinto (Guinea)',
      ru: 'БКРУ (E-House) для порта Симанду компании Rio Tinto (Гвинея)',
    },
    category: 'ehouse',
    location: { zh: '几内亚 · 西芒杜港口', en: 'Simandou Port, Guinea', ja: 'ギニア・シマンドゥ', es: 'Puerto Simandou, Guinea', ru: 'Порт Симанду, Гвинея' },
    clientOrSector: 'Rio Tinto / Global Mining & Heavy Ports',
    specs: '35kV / 10kV Modular Skid, C5-M Anti-Corrosion Marine Coating, Dual HVAC',
    image: '/images/library/03_工程项目案例/02_预制舱EHouse工程业绩/P25_01_几内亚力拓西芒杜港口EHouse项目_预制舱现场_1_618x300.webp',
    highlight: true,
  },
  {
    id: 'proj-switch-3',
    title: {
      zh: '苏坎达亚大型工业综合体低压成套配电柜项目',
      en: 'Sukandaya Industrial Complex Heavy Low-Voltage Switchgear Project',
      ja: 'スカンダヤ工業団地 低圧配電盤プロジェクト',
      es: 'Cuadros de Baja Tensión para Complejo Industrial Sukandaya',
      ru: 'Низковольтные комплектные устройства (НКУ) промышленного комплекса Сукандая',
    },
    category: 'switchgear',
    location: { zh: '海外 · 工业园区', en: 'Sukandaya Industrial Park', ja: '海外工業団地', es: 'Parque Industrial Sukandaya', ru: 'Промзона Сукандая' },
    clientOrSector: 'Heavy Industrial Power Distribution / Foreign Investment EPC',
    specs: '400V / 690V BlokSeT & MNS 2.0 Withdrawable Switchgear (6300A, 100kA)',
    image: '/images/syfcdq/project_sukandaya_lv_switchgear.webp',
  },

  // 2. High-Voltage Grid & Urban Rail Transit (电网与轨道交通)
  {
    id: 'proj-trans-1',
    title: {
      zh: '营口于杨 220kV 大型输变电高压工程',
      en: 'Yingkou Yuyang 220kV Extra High-Voltage Substation Project',
      ja: '営口于楊 220kV 超高圧送変電プロジェクト',
      es: 'Proyecto de Subestación de Extra Alta Tensión 220kV Yingkou Yuyang',
      ru: 'ПС 220/110/35 кВ «Юйян» энергосистемы Инкоу',
    },
    category: 'transformer',
    location: { zh: '中国 · 辽宁营口', en: 'Yingkou, Liaoning', ja: '中国・遼寧省営口', es: 'Yingkou, China', ru: 'Инкоу, Ляонин' },
    clientOrSector: 'State Grid Corporation of China (SGCC) / Main Transmission Grid',
    specs: '220kV / 180MVA Low-Loss Power Transformer + 220kV GIS Switchgear',
    image: '/images/syfcdq/project_yingkou_220kv_substation.webp',
    highlight: true,
  },
  {
    id: 'proj-switch-1',
    title: {
      zh: '沈阳地铁 4 号线一期牵引供电与高压开关柜系统',
      en: 'Shenyang Metro Line 4 Phase 1 Traction Power & High-Voltage Switchgear',
      ja: '瀋陽地下鉄4号線 牽引給電・高圧開閉装置システム',
      es: 'Sistema de Tracción Eléctrica y Celdas de Media Tensión Metro Shenyang Línea 4',
      ru: 'Тяговая подстанция и КРУ 35/10 кВ линии 4 метрополитена Шэньяна',
    },
    category: 'switchgear',
    location: { zh: '中国 · 沈阳轨道交通', en: 'Shenyang Metro Transit', ja: '中国・瀋陽地下鉄', es: 'Shenyang Metro, China', ru: 'Метрополитен Шэньяна' },
    clientOrSector: 'Shenyang Metro Corporation / Urban Rail Transit',
    specs: '35kV Gas-Insulated Switchgear (GIS) + KYN28A-24 High Withstand (31.5kA/4s)',
    image: '/images/library/03_工程项目案例/01_开关柜工程业绩/P21_03_沈阳地铁4号线一期供电系统_现场实景_3_606x454.webp',
    highlight: true,
  },
  {
    id: 'proj-switch-2',
    title: {
      zh: '防城港千万吨级沿海钢铁冶金基地高压配电工程',
      en: 'Fangchenggang Megaton Marine Steel & Metallurgy Substation Project',
      ja: '防城港製鉄所 高圧配電・変電プロジェクト',
      es: 'Proyecto de Distribución Eléctrica Pesada en Planta Siderúrgica de Fangchenggang',
      ru: 'Распределительная подстанция металлургического комбината в Фанчэнгане',
    },
    category: 'switchgear',
    location: { zh: '中国 · 广西防城港', en: 'Fangchenggang, Guangxi', ja: '中国・広西チワン族自治区', es: 'Fangchenggang, China', ru: 'Фанчэнган, Гуанси' },
    clientOrSector: 'Liugang Group / Heavy Coastal Metallurgy',
    specs: '10kV / 35kV 40kA Heavy Industrial Switchgear, Arc Protection Relay Integration',
    image: '/images/library/03_工程项目案例/01_开关柜工程业绩/P21_04_防城港钢铁基地项目_现场实景_4_400x300.webp',
  },

  // 3. Renewable Solar & Wind Megaprojects (大型风光储基地)
  {
    id: 'proj-ehouse-2',
    title: {
      zh: '库布齐沙漠 100 万千瓦国家级光伏基地预制舱工程',
      en: 'Kubuqi Desert 1GW GW-Scale Solar PV Base E-House Substation',
      ja: 'クブチ砂漠 100万kW 国家級メガソーラー基地 E-House 変電所',
      es: 'Subestación E-House de Base Solar de 1GW en el Desierto de Kubuqi',
      ru: 'БКРУ 110/35 кВ для СЭС мощностью 1 ГВт в пустыне Кубучи',
    },
    category: 'ehouse',
    location: { zh: '中国 · 内蒙古鄂尔多斯', en: 'Ordos, Inner Mongolia', ja: '内モンゴル・オルドス', es: 'Ordos, Mongolia Interior', ru: 'Ордос, Внутренняя Монголия' },
    clientOrSector: 'National Desert Solar Megaproject / SPIC',
    specs: '110kV Step-up E-House, IP55 Sand-Dust Protection, 1500V DC Inverter Cabin',
    image: '/images/library/03_工程项目案例/02_预制舱EHouse工程业绩/P25_02_库布齐沙漠100万千瓦光伏基地_预制舱现场_2_602x451.webp',
    highlight: true,
  },
  {
    id: 'proj-renew-2',
    title: {
      zh: '辽宁国电电力辽阳 100MW 渔光互补光伏升压站项目',
      en: 'Liaoyang 100MW Fishery-Solar Hybrid PV Step-Up Substation Project',
      ja: '遼陽 100MW 漁業太陽光複合発電 昇圧変電所プロジェクト',
      es: 'Subestación Elevadora de 100MW Proyecto Solar Híbrido Pesquero en Liaoyang',
      ru: 'Повысительная подстанция СЭС 100 МВт агро-фотовольтаики в Ляояне',
    },
    category: 'renewable',
    location: { zh: '中国 · 辽宁辽阳', en: 'Liaoyang, Liaoning', ja: '中国・遼寧省', es: 'Liaoyang, China', ru: 'Ляоян, Ляонин' },
    clientOrSector: 'China Energy / High-Humidity Aquatic Solar Generation',
    specs: '35kV Moisture-Resistant Modular Enclosure, 1500V Solar Step-Up Transformer',
    image: '/images/syfcdq/project_liaoyang_fishery_solar.webp',
  },
  {
    id: 'proj-renew-1',
    title: {
      zh: '大庆肇源大型风力发电场 220kV 升压变电工程',
      en: 'Daqing Zhaoyuan 220kV Wind Power Collector & Step-Up Substation',
      ja: '大慶肇源 風力発電所 220kV 集電昇圧変電所',
      es: 'Subestación Colectora y Elevadora de 220kV de Parque Eólico Daqing Zhaoyuan',
      ru: 'Подстанция 220 кВ ветровой электростанции Дацин Чжаоюань',
    },
    category: 'renewable',
    location: { zh: '中国 · 黑龙江大庆', en: 'Daqing, Heilongjiang', ja: '黒竜江省・大慶', es: 'Daqing, China', ru: 'Дацин, Хэйлунцзян' },
    clientOrSector: 'Clean Energy Power Generation / China Datang',
    specs: '220kV Main Transformer + 35kV SVG Dynamic Reactive Compensation Skid',
    image: '/images/library/03_工程项目案例/04_新能源风光储工程业绩/P30_01_大庆肇源风电变电站项目_新能源实景_1_487x220.webp',
  },
  {
    id: 'proj-renew-3',
    title: {
      zh: '河北肃宁清网风电升压变电站工程',
      en: 'Hebei Suning Wind Power Generation Step-Up Substation Project',
      ja: '河北省粛寧 風力発電昇圧変電所プロジェクト',
      es: 'Subestación Elevadora Eólica Suning en Hebei',
      ru: 'Повысительная подстанция ВЭС Сунин в провинции Хэбэй',
    },
    category: 'renewable',
    location: { zh: '中国 · 河北沧州', en: 'Cangzhou, Hebei', ja: '中国・河北省', es: 'Cangzhou, China', ru: 'Сунин, Хэбэй' },
    clientOrSector: 'Wind Energy Substation EPC',
    specs: '35kV Modular Recloser & Anti-Ice Transformer Skid (-35°C rating)',
    image: '/images/syfcdq/project_suning_wind_substation.webp',
  },

  // 4. Mining, High-Tech & Infrastructure (工矿重工与高端基建)
  {
    id: 'proj-trans-2',
    title: {
      zh: '宽城华盛大型地下矿山矿用变电站与防爆配电工程',
      en: 'Kuancheng Huasheng Underground Iron Mine Power Substation Project',
      ja: '寛城華盛地下鉄鉱山 鉱用防爆変電所・配電システム',
      es: 'Subestación Eléctrica para Mina Subterránea Kuancheng Huasheng',
      ru: 'Шахтная подстанция и взрывозащищенное электроснабжение рудника Хуашэн',
    },
    category: 'transformer',
    location: { zh: '中国 · 河北承德矿区', en: 'Chengde Iron Ore Mine, Hebei', ja: '中国・河北省', es: 'Chengde, China', ru: 'Чэндэ, Хэбэй' },
    clientOrSector: 'Mining & Underground Mineral Extraction',
    specs: 'Mining Flameproof Mobile Substation KBSGZY-1600/10, Ex d I Mb Certified',
    image: '/images/library/03_工程项目案例/03_变压器工程业绩/P27_05_宽城华盛矿业电力项目_变压器实景_5_350x262.webp',
  },
];

export const certificationsList: CertificationItem[] = [
  {
    "id": "cert_business_license_101m",
    "title": {
      "zh": "沈阳飞驰电气营业执照（注册资本1.01亿元）",
      "en": "Official Business License (RMB 101 Million Capital)",
      "ru": "Лицензия на коммерческую деятельность (101 млн юаней)",
      "es": "Official Business License (RMB 101 Million Capital)",
      "ja": "Official Business License (RMB 101 Million Capital)"
    },
    "category": "national",
    "issuer": "沈阳市市场监督管理局",
    "standard": "统一社会信用代码 91210106757962453U",
    "image": "/images/certificates/cert_business_license_101m.webp",
    "highlight": true
  },
  {
    "id": "cert_iso9001_quality",
    "title": {
      "zh": "ISO 9001 质量管理体系认证证书",
      "en": "ISO 9001:2015 Quality Management System Certification",
      "ru": "Сертификат менеджмента качества ISO 9001:2015",
      "es": "ISO 9001:2015 Quality Management System Certification",
      "ja": "ISO 9001:2015 Quality Management System Certification"
    },
    "category": "international",
    "issuer": "中国国家认证认可监督管理委员会 (CNCA)",
    "standard": "GB/T 19001-2016 / ISO 9001:2015",
    "image": "/images/certificates/cert_iso9001_quality.webp",
    "highlight": true
  },
  {
    "id": "cert_iso14001_environmental",
    "title": {
      "zh": "ISO 14001 环境管理体系认证证书",
      "en": "ISO 14001:2015 Environmental Management Certification",
      "ru": "Сертификат экологического менеджмента ISO 14001:2015",
      "es": "ISO 14001:2015 Environmental Management Certification",
      "ja": "ISO 14001:2015 Environmental Management Certification"
    },
    "category": "international",
    "issuer": "中国国家认证认可监督管理委员会 (CNCA)",
    "standard": "GB/T 24001-2016 / ISO 14001:2015",
    "image": "/images/certificates/cert_iso14001_environmental.webp",
    "highlight": false
  },
  {
    "id": "cert_iso45001_safety",
    "title": {
      "zh": "ISO 45001 职业健康安全管理体系认证证书",
      "en": "ISO 45001:2018 Occupational Health & Safety Certification",
      "ru": "Сертификат охраны труда и безопасности ISO 45001",
      "es": "ISO 45001:2018 Occupational Health & Safety Certification",
      "ja": "ISO 45001:2018 Occupational Health & Safety Certification"
    },
    "category": "international",
    "issuer": "中国国家认证认可监督管理委员会 (CNCA)",
    "standard": "GB/T 45001-2020 / ISO 45001:2018",
    "image": "/images/certificates/cert_iso45001_safety.webp",
    "highlight": false
  },
  {
    "id": "cert_power_facilities_permit",
    "title": {
      "zh": "承装（修、试）电力设施许可证（四级资质）",
      "en": "Installation, Repair & Testing Power Facility License",
      "ru": "Лицензия на монтаж, наладку и испытания энергообъектов",
      "es": "Installation, Repair & Testing Power Facility License",
      "ja": "Installation, Repair & Testing Power Facility License"
    },
    "category": "national",
    "issuer": "国家能源局东北监管局 (NEA)",
    "standard": "承装四级 / 承修四级 / 承试四级",
    "image": "/images/certificates/cert_power_facilities_permit.webp",
    "highlight": true
  },
  {
    "id": "cert_aaa_credit_rating",
    "title": {
      "zh": "AAA 级企业信用等级证书与资信证明",
      "en": "AAA Grade Enterprise Credit Rating Certification",
      "ru": "Сертификат наивысшего кредитного рейтинга AAA",
      "es": "AAA Grade Enterprise Credit Rating Certification",
      "ja": "AAA Grade Enterprise Credit Rating Certification"
    },
    "category": "national",
    "issuer": "中国人民银行备案信用评估机构",
    "standard": "AAA 顶级信用评级",
    "image": "/images/certificates/cert_aaa_credit_rating.webp",
    "highlight": true
  },
  {
    "id": "cert_high_tech_enterprise",
    "title": {
      "zh": "国家高新技术企业认证证书",
      "en": "National High-Tech Enterprise Certificate",
      "ru": "Свидетельство Национального высокотехнологичного предприятия",
      "es": "National High-Tech Enterprise Certificate",
      "ja": "National High-Tech Enterprise Certificate"
    },
    "category": "national",
    "issuer": "辽宁省科学技术厅 / 财政厅 / 税务局",
    "standard": "国家级高新技术企业认定",
    "image": "/images/certificates/cert_high_tech_enterprise.webp",
    "highlight": true
  },
  {
    "id": "cert_sgcc_transformer_prequalification",
    "title": {
      "zh": "国家电网 10kV 配电变压器资格预审合格通知书",
      "en": "State Grid (SGCC) 10kV Transformer Prequalification Notice",
      "ru": "Уведомление о предквалификации трансформаторов 10 кВ ПАО «Россети»/SGCC",
      "es": "State Grid (SGCC) 10kV Transformer Prequalification Notice",
      "ja": "State Grid (SGCC) 10kV Transformer Prequalification Notice"
    },
    "category": "energy",
    "issuer": "国家电网有限公司 (SGCC)",
    "standard": "国网物资集中采购联合资格预审",
    "image": "/images/certificates/cert_sgcc_transformer_prequalification.webp",
    "highlight": true
  },
  {
    "id": "cert_sgcc_rmu_prequalification",
    "title": {
      "zh": "国家电网 环网柜/箱式开闭所资格预审合格通知书",
      "en": "State Grid (SGCC) Ring Main Unit Prequalification Notice",
      "ru": "Уведомление о предквалификации КРУЭ и реклоузеров SGCC",
      "es": "State Grid (SGCC) Ring Main Unit Prequalification Notice",
      "ja": "State Grid (SGCC) Ring Main Unit Prequalification Notice"
    },
    "category": "energy",
    "issuer": "国家电网有限公司 (SGCC)",
    "standard": "国网配网设备物资采购联合资格预审",
    "image": "/images/certificates/cert_sgcc_rmu_prequalification.webp",
    "highlight": true
  },
  {
    "id": "cert_sgcc_box_substation_prequalification",
    "title": {
      "zh": "国家电网 10kV 预装式箱式变电站资格预审通知书",
      "en": "State Grid 10kV Prefabricated Compact Substation Notice",
      "ru": "Уведомление о предквалификации КТПН 10 кВ SGCC",
      "es": "State Grid 10kV Prefabricated Compact Substation Notice",
      "ja": "State Grid 10kV Prefabricated Compact Substation Notice"
    },
    "category": "energy",
    "issuer": "国家电网有限公司 (SGCC)",
    "standard": "国网集中采购资格预审合格通知书",
    "image": "/images/certificates/cert_sgcc_box_substation_prequalification.webp",
    "highlight": true
  },
  {
    "id": "cert_sgcc_jp_cabinet_prequalification",
    "title": {
      "zh": "国家电网 配电箱（JP柜）资格预审合格通知书",
      "en": "State Grid (SGCC) JP Low-Voltage Distribution Cabinet Notice",
      "ru": "Квалификационное свидетельство НКУ и щитов JP SGCC",
      "es": "State Grid (SGCC) JP Low-Voltage Distribution Cabinet Notice",
      "ja": "State Grid (SGCC) JP Low-Voltage Distribution Cabinet Notice"
    },
    "category": "energy",
    "issuer": "国家电网有限公司 (SGCC)",
    "standard": "国网配电箱集中采购合格通知",
    "image": "/images/certificates/cert_sgcc_jp_cabinet_prequalification.webp",
    "highlight": false
  },
  {
    "id": "cert_csg_transformer_substation_prequal",
    "title": {
      "zh": "南方电网 10kV SCB 干变与预装式变电站资格预审证明",
      "en": "China Southern Power Grid (CSG) 10kV Substation Prequalification",
      "ru": "Сертификат квалификации трансформаторов и КТПН CSG",
      "es": "China Southern Power Grid (CSG) 10kV Substation Prequalification",
      "ja": "China Southern Power Grid (CSG) 10kV Substation Prequalification"
    },
    "category": "energy",
    "issuer": "中国南方电网有限责任公司 (CSG)",
    "standard": "南网供应链物资采购联合资格预审",
    "image": "/images/certificates/cert_csg_transformer_substation_prequal.webp",
    "highlight": true
  },
  {
    "id": "report_kyn28_type_test",
    "title": {
      "zh": "KYN28A-12 铠装移开式交流金属封闭开关设备型式试验报告",
      "en": "KYN28A-12 Metal-Clad Switchgear Full Type-Test Report",
      "ru": "Протокол типовых испытаний КРУ KYN28A-12 (31.5 кА/1с)",
      "es": "KYN28A-12 Metal-Clad Switchgear Full Type-Test Report",
      "ja": "KYN28A-12 Metal-Clad Switchgear Full Type-Test Report"
    },
    "category": "type_test",
    "issuer": "国家高压电器质量监督检验中心 (NHVS)",
    "standard": "IEC 62271-200 / GB/T 3906 (IAC AFLR 31.5kA 1s)",
    "image": "/images/certificates/report_kyn28_type_test.webp",
    "highlight": true
  },
  {
    "id": "report_kyn61_type_test",
    "title": {
      "zh": "KYN61-40.5 40.5kV 高压开关柜国家型式试验报告",
      "en": "KYN61-40.5 40.5kV HV Metal-Clad Switchgear Type-Test Report",
      "ru": "Протокол типовых испытаний высоковольтного КРУ 40.5 кВ KYN61",
      "es": "KYN61-40.5 40.5kV HV Metal-Clad Switchgear Type-Test Report",
      "ja": "KYN61-40.5 40.5kV HV Metal-Clad Switchgear Type-Test Report"
    },
    "category": "type_test",
    "issuer": "国家高压电器质量监督检验中心 (NHVS)",
    "standard": "IEC 62271-200 / GB/T 3906 (31.5kA 4s)",
    "image": "/images/certificates/report_kyn61_type_test.webp",
    "highlight": true
  },
  {
    "id": "report_box_substation_type_test",
    "title": {
      "zh": "YB/ZGS 10-35kV 预装式箱式变电站型式试验报告",
      "en": "YB/ZGS 10-35kV Prefabricated Compact Substation Type-Test Report",
      "ru": "Протокол типовых испытаний КТПН 10-35 кВ (IEC 62271-202)",
      "es": "YB/ZGS 10-35kV Prefabricated Compact Substation Type-Test Report",
      "ja": "YB/ZGS 10-35kV Prefabricated Compact Substation Type-Test Report"
    },
    "category": "type_test",
    "issuer": "国家高压电器产品质量监督检验中心",
    "standard": "IEC 62271-202 / GB/T 17467-2020",
    "image": "/images/certificates/report_box_substation_type_test.webp",
    "highlight": true
  },
  {
    "id": "report_scb_dry_transformer_type_test",
    "title": {
      "zh": "SCB11/13/14 10-35kV 环氧树脂浇注干式变压器型式试验报告",
      "en": "SCB11/13/14 Cast Resin Dry-Type Transformer Type-Test Report",
      "ru": "Протокол типовых испытаний сухого трансформатора ТСЛ/SCB",
      "es": "SCB11/13/14 Cast Resin Dry-Type Transformer Type-Test Report",
      "ja": "SCB11/13/14 Cast Resin Dry-Type Transformer Type-Test Report"
    },
    "category": "type_test",
    "issuer": "国家变压器质量监督检验中心 (CTQC)",
    "standard": "IEC 60076-11 / GB/T 1094.11 (局放 < 5pC)",
    "image": "/images/certificates/report_scb_dry_transformer_type_test.webp",
    "highlight": true
  },
  {
    "id": "report_oil_immersed_transformer_type_test",
    "title": {
      "zh": "S11/S13-M 10-35kV 全密封油浸式配电变压器型式试验报告",
      "en": "S11/S13-M Hermetically Sealed Oil Transformer Type-Test Report",
      "ru": "Протокол типовых испытаний масляного трансформатора ТМГ",
      "es": "S11/S13-M Hermetically Sealed Oil Transformer Type-Test Report",
      "ja": "S11/S13-M Hermetically Sealed Oil Transformer Type-Test Report"
    },
    "category": "type_test",
    "issuer": "国家变压器质量监督检验中心 (CTQC)",
    "standard": "IEC 60076-1 / GB/T 1094.1",
    "image": "/images/certificates/report_oil_immersed_transformer_type_test.webp",
    "highlight": true
  },
  {
    "id": "report_rmu_gas_insulated_type_test",
    "title": {
      "zh": "FC-SRM-12 全绝缘全密封共箱式环网柜型式试验报告",
      "en": "FC-SRM-12 Gas-Insulated Ring Main Unit (C-GIS) Type-Test Report",
      "ru": "Протокол испытаний моноблочного КРУЭ FC-SRM-12 (IP67)",
      "es": "FC-SRM-12 Gas-Insulated Ring Main Unit (C-GIS) Type-Test Report",
      "ja": "FC-SRM-12 Gas-Insulated Ring Main Unit (C-GIS) Type-Test Report"
    },
    "category": "type_test",
    "issuer": "国家高压电器产品检验检测中心",
    "standard": "IEC 62271-200 / GB/T 3906 (20kA 4s)",
    "image": "/images/certificates/report_rmu_gas_insulated_type_test.webp",
    "highlight": true
  },
  {
    "id": "report_lv_distribution_type_test",
    "title": {
      "zh": "GGD / GCK / MNS 交流低压成套开关设备 3C/型式试验报告",
      "en": "GGD / GCK / MNS Low-Voltage Switchgear CCC & Type-Test Report",
      "ru": "Протокол испытаний НКУ серии GGD/MNS (ГОСТ IEC 61439)",
      "es": "GGD / GCK / MNS Low-Voltage Switchgear CCC & Type-Test Report",
      "ja": "GGD / GCK / MNS Low-Voltage Switchgear CCC & Type-Test Report"
    },
    "category": "type_test",
    "issuer": "中国质量认证中心 (CQC) / 国家电器质检中心",
    "standard": "IEC 61439-2 / GB/T 7251.12",
    "image": "/images/certificates/report_lv_distribution_type_test.webp",
    "highlight": false
  },
  {
    "id": "cert_patent_substation_temp_control",
    "title": {
      "zh": "发明专利：集装箱式变电站智能微气候与自适应散热系统",
      "en": "Invention Patent: Modular Substation Smart Thermal Microclimate",
      "ru": "Патент на изобретение: Интеллектуальное терморегулирование КТПН",
      "es": "Invention Patent: Modular Substation Smart Thermal Microclimate",
      "ja": "Invention Patent: Modular Substation Smart Thermal Microclimate"
    },
    "category": "patent",
    "issuer": "国家知识产权局 (CNIPA)",
    "standard": "中国发明专利 ZL 2020 1 0849281.X",
    "image": "/images/certificates/cert_patent_substation_temp_control.webp",
    "highlight": true
  },
  {
    "id": "cert_patent_switchgear_isolation",
    "title": {
      "zh": "实用新型专利：高压铠装开关柜防误动作双重闭锁隔离触头装置",
      "en": "Utility Patent: Dual-Interlocking Disconnecting Contact Device",
      "ru": "Патент: Двойная защитная блокировка контактов КРУ",
      "es": "Utility Patent: Dual-Interlocking Disconnecting Contact Device",
      "ja": "Utility Patent: Dual-Interlocking Disconnecting Contact Device"
    },
    "category": "patent",
    "issuer": "国家知识产权局 (CNIPA)",
    "standard": "中国实用新型专利 ZL 2021 2 1928471.2",
    "image": "/images/certificates/cert_patent_switchgear_isolation.webp",
    "highlight": false
  },
  {
    "id": "cert_patent_flameproof_nitrogen",
    "title": {
      "zh": "实用新型专利：矿用隔爆型高纯度注氮防火灭火成套装置",
      "en": "Utility Patent: Mining Flameproof PSA Nitrogen Fire-Suppression",
      "ru": "Патент: Взрывозащищенный азотный комплекс пожаротушения",
      "es": "Utility Patent: Mining Flameproof PSA Nitrogen Fire-Suppression",
      "ja": "Utility Patent: Mining Flameproof PSA Nitrogen Fire-Suppression"
    },
    "category": "patent",
    "issuer": "国家知识产权局 (CNIPA)",
    "standard": "中国实用新型专利 ZL 2022 2 0837291.6",
    "image": "/images/certificates/cert_patent_flameproof_nitrogen.webp",
    "highlight": true
  },
  {
    "id": "cert_patent_transformer_low_pd",
    "title": {
      "zh": "实用新型专利：超低局放耐高温环氧浇注干式变压器绝缘屏蔽结构",
      "en": "Utility Patent: Ultra-Low Partial Discharge Dry Transformer Coil",
      "ru": "Патент: Обмотка сухого трансформатора со сверхнизким ЧР",
      "es": "Utility Patent: Ultra-Low Partial Discharge Dry Transformer Coil",
      "ja": "Utility Patent: Ultra-Low Partial Discharge Dry Transformer Coil"
    },
    "category": "patent",
    "issuer": "国家知识产权局 (CNIPA)",
    "standard": "中国实用新型专利 ZL 2023 2 1048291.4",
    "image": "/images/certificates/cert_patent_transformer_low_pd.webp",
    "highlight": false
  }
];
