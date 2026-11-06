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
      "en": "Official Business License (RMB 101M Capital)",
      "ru": "Лицензия на коммерческую деятельность (101 млн юаней)",
      "es": "Official Business License (RMB 101M Capital)",
      "ja": "Official Business License (RMB 101M Capital)"
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
      "zh": "ISO 9001:2015 质量管理体系认证证书",
      "en": "ISO 9001:2015 Quality Management System Certification",
      "ru": "Сертификат менеджмента качества ISO 9001:2015",
      "es": "ISO 9001:2015 Quality Management System Certification",
      "ja": "ISO 9001:2015 Quality Management System Certification"
    },
    "category": "international",
    "issuer": "国家认证认可监督管理委员会 (CNCA)",
    "standard": "GB/T 19001-2016 / ISO 9001:2015",
    "image": "/images/certificates/cert_iso9001_quality.webp",
    "highlight": true
  },
  {
    "id": "cert_iso14001_environmental",
    "title": {
      "zh": "ISO 14001:2015 环境管理体系认证证书",
      "en": "ISO 14001:2015 Environmental Management Certification",
      "ru": "Сертификат экологического менеджмента ISO 14001:2015",
      "es": "ISO 14001:2015 Environmental Management Certification",
      "ja": "ISO 14001:2015 Environmental Management Certification"
    },
    "category": "international",
    "issuer": "国家认证认可监督管理委员会 (CNCA)",
    "standard": "GB/T 24001-2016 / ISO 14001:2015",
    "image": "/images/certificates/cert_iso14001_environmental.webp",
    "highlight": false
  },
  {
    "id": "cert_iso45001_safety",
    "title": {
      "zh": "ISO 45001:2018 职业健康安全管理体系认证证书",
      "en": "ISO 45001:2018 Occupational Health & Safety Certification",
      "ru": "Сертификат охраны труда и безопасности ISO 45001",
      "es": "ISO 45001:2018 Occupational Health & Safety Certification",
      "ja": "ISO 45001:2018 Occupational Health & Safety Certification"
    },
    "category": "international",
    "issuer": "国家认证认可监督管理委员会 (CNCA)",
    "standard": "GB/T 45001-2020 / ISO 45001:2018",
    "image": "/images/certificates/cert_iso45001_safety.webp",
    "highlight": false
  },
  {
    "id": "cert_iso50001_energy",
    "title": {
      "zh": "ISO 50001 能源管理体系认证证书",
      "en": "ISO 50001 Energy Management System Certification",
      "ru": "Сертификат энергоменеджмента ISO 50001",
      "es": "ISO 50001 Energy Management System Certification",
      "ja": "ISO 50001 Energy Management System Certification"
    },
    "category": "international",
    "issuer": "国家认证认可监督管理委员会 (CNCA)",
    "standard": "GB/T 23331-2020 / ISO 50001",
    "image": "/images/certificates/cert_iso50001_energy.webp",
    "highlight": false
  },
  {
    "id": "cert_green_supply_chain",
    "title": {
      "zh": "绿色供应链管理体系认证证书",
      "en": "Green Supply Chain Management Certification",
      "ru": "Сертификат экологической цепочки поставок",
      "es": "Green Supply Chain Management Certification",
      "ja": "Green Supply Chain Management Certification"
    },
    "category": "national",
    "issuer": "国家绿色评价机构",
    "standard": "绿色制造与供应链星级认证",
    "image": "/images/certificates/cert_green_supply_chain.webp",
    "highlight": false
  },
  {
    "id": "cert_aaa_credit_rating",
    "title": {
      "zh": "全国 AAA 级企业信用等级证书",
      "en": "National AAA-Grade Enterprise Credit Rating",
      "ru": "Сертификат наивысшего кредитного рейтинга AAA",
      "es": "National AAA-Grade Enterprise Credit Rating",
      "ja": "National AAA-Grade Enterprise Credit Rating"
    },
    "category": "national",
    "issuer": "中国人民银行备案信用评估机构",
    "standard": "AAA 级重合同守信用企业",
    "image": "/images/certificates/cert_aaa_credit_rating.webp",
    "highlight": true
  },
  {
    "id": "cert_bank_account_permit",
    "title": {
      "zh": "中国人民银行基本存款账户开户许可证",
      "en": "People's Bank of China Bank Account Permit",
      "ru": "Разрешение на открытие банковского счета",
      "es": "People's Bank of China Bank Account Permit",
      "ja": "People's Bank of China Bank Account Permit"
    },
    "category": "national",
    "issuer": "中国人民银行",
    "standard": "合规资金与基本结算账户",
    "image": "/images/certificates/cert_bank_account_permit.webp",
    "highlight": false
  },
  {
    "id": "cert_specialized_little_giant",
    "title": {
      "zh": "国家级专精特新“小巨人”企业证书",
      "en": "National \"Little Giant\" Specialized Enterprise Certificate",
      "ru": "Свидетельство предприятия «Малый гигант»",
      "es": "National \"Little Giant\" Specialized Enterprise Certificate",
      "ja": "National \"Little Giant\" Specialized Enterprise Certificate"
    },
    "category": "national",
    "issuer": "中华人民共和国工业和信息化部 (MIIT)",
    "standard": "国家级专精特新重点小巨人认定",
    "image": "/images/certificates/cert_specialized_little_giant.webp",
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
    "standard": "国家级高新技术企业认定 GR202221000842",
    "image": "/images/certificates/cert_high_tech_enterprise.webp",
    "highlight": true
  },
  {
    "id": "cert_spic_qualified_supplier",
    "title": {
      "zh": "国家电力投资集团合格供应商证书 (风电光伏箱变/高压柜)",
      "en": "SPIC Qualified Supplier Certificate (Solar/Wind Substation & Switchgear)",
      "ru": "Квалификационный сертификат поставщика холдинга SPIC",
      "es": "SPIC Qualified Supplier Certificate (Solar/Wind Substation & Switchgear)",
      "ja": "SPIC Qualified Supplier Certificate (Solar/Wind Substation & Switchgear)"
    },
    "category": "energy",
    "issuer": "国家电力投资集团有限公司 (SPIC)",
    "standard": "风电光伏升压箱变及高压成套入围合格供应商",
    "image": "/images/certificates/cert_spic_qualified_supplier.webp",
    "highlight": true
  },
  {
    "id": "cert_sgcc_10kv_transformer_prequal",
    "title": {
      "zh": "国家电网 10kV 配电变压器资格预审合格通知书",
      "en": "State Grid (SGCC) 10kV Distribution Transformer Prequalification",
      "ru": "Уведомление о предквалификации трансформаторов 10 кВ SGCC",
      "es": "State Grid (SGCC) 10kV Distribution Transformer Prequalification",
      "ja": "State Grid (SGCC) 10kV Distribution Transformer Prequalification"
    },
    "category": "energy",
    "issuer": "国家电网有限公司物资部 (SGCC)",
    "standard": "国网物资集中采购联合资格预审合格通知",
    "image": "/images/certificates/cert_sgcc_10kv_transformer_prequal.webp",
    "highlight": true
  },
  {
    "id": "cert_sgcc_rmu_switchgear_prequal",
    "title": {
      "zh": "国家电网 环网柜、环网箱（箱式开闭所）资格预审通知书",
      "en": "State Grid (SGCC) Ring Main Unit (RMU) Prequalification Notice",
      "ru": "Уведомление о предквалификации КРУЭ и реклоузеров SGCC",
      "es": "State Grid (SGCC) Ring Main Unit (RMU) Prequalification Notice",
      "ja": "State Grid (SGCC) Ring Main Unit (RMU) Prequalification Notice"
    },
    "category": "energy",
    "issuer": "国家电网有限公司 (SGCC)",
    "standard": "国网配网设备物资采购联合资格预审",
    "image": "/images/certificates/cert_sgcc_rmu_switchgear_prequal.webp",
    "highlight": true
  },
  {
    "id": "cert_sgcc_jp_cabinet_prequal",
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
    "image": "/images/certificates/cert_sgcc_jp_cabinet_prequal.webp",
    "highlight": false
  },
  {
    "id": "cert_sgcc_pole_mounted_transformer_prequal",
    "title": {
      "zh": "国家电网 10kV 柱上变压器台成套设备物资采购资格预审通知书",
      "en": "State Grid 10kV Pole-Mounted Transformer Package Prequalification",
      "ru": "Квалификационное свидетельство столбовых КТП 10 кВ SGCC",
      "es": "State Grid 10kV Pole-Mounted Transformer Package Prequalification",
      "ja": "State Grid 10kV Pole-Mounted Transformer Package Prequalification"
    },
    "category": "energy",
    "issuer": "国家电网有限公司 (SGCC)",
    "standard": "国网联合资格预审合格配套设备供应商",
    "image": "/images/certificates/cert_sgcc_pole_mounted_transformer_prequal.webp",
    "highlight": true
  },
  {
    "id": "cert_sgcc_box_substation_prequal",
    "title": {
      "zh": "国家电网 10kV 箱式变电站资格预审合格通知书",
      "en": "State Grid (SGCC) 10kV Compact Box Substation Prequalification",
      "ru": "Уведомление о предквалификации КТПН 10 кВ SGCC",
      "es": "State Grid (SGCC) 10kV Compact Box Substation Prequalification",
      "ja": "State Grid (SGCC) 10kV Compact Box Substation Prequalification"
    },
    "category": "energy",
    "issuer": "国家电网有限公司物资部 (SGCC)",
    "standard": "国网箱式变电站集中采购合格供应商",
    "image": "/images/certificates/cert_sgcc_box_substation_prequal.webp",
    "highlight": true
  },
  {
    "id": "cert_csg_dry_transformer_prequal",
    "title": {
      "zh": "南方电网 10kV SCB 干式变压器联合资格预审合格证明",
      "en": "China Southern Power Grid (CSG) 10kV SCB Transformer Prequalification",
      "ru": "Свидетельство предквалификации сухих трансформаторов CSG",
      "es": "China Southern Power Grid (CSG) 10kV SCB Transformer Prequalification",
      "ja": "China Southern Power Grid (CSG) 10kV SCB Transformer Prequalification"
    },
    "category": "energy",
    "issuer": "中国南方电网有限责任公司 (CSG)",
    "standard": "南网供应链物资采购联合资格预审合格供应商",
    "image": "/images/certificates/cert_csg_dry_transformer_prequal.webp",
    "highlight": true
  },
  {
    "id": "cert_csg_box_substation_prequal",
    "title": {
      "zh": "南方电网 10kV 预装式变电站资格预审合格证明",
      "en": "China Southern Power Grid (CSG) 10kV Prefabricated Substation Notice",
      "ru": "Свидетельство предквалификации КТПН 10 кВ CSG",
      "es": "China Southern Power Grid (CSG) 10kV Prefabricated Substation Notice",
      "ja": "China Southern Power Grid (CSG) 10kV Prefabricated Substation Notice"
    },
    "category": "energy",
    "issuer": "中国南方电网有限责任公司 (CSG)",
    "standard": "南网预装式变电站物资采购合格供应商",
    "image": "/images/certificates/cert_csg_box_substation_prequal.webp",
    "highlight": true
  },
  {
    "id": "cert_csg_lv_distribution_prequal",
    "title": {
      "zh": "南方电网 0.4kV 低压配电箱资格预审合格证明",
      "en": "China Southern Power Grid (CSG) 0.4kV LV Distribution Box Notice",
      "ru": "Свидетельство предквалификации щитов 0.4 кВ CSG",
      "es": "China Southern Power Grid (CSG) 0.4kV LV Distribution Box Notice",
      "ja": "China Southern Power Grid (CSG) 0.4kV LV Distribution Box Notice"
    },
    "category": "energy",
    "issuer": "中国南方电网有限责任公司 (CSG)",
    "standard": "南网低压配电箱采购合格证明",
    "image": "/images/certificates/cert_csg_lv_distribution_prequal.webp",
    "highlight": false
  },
  {
    "id": "cert_schneider_mvnex_license",
    "title": {
      "zh": "施耐德电气 MVneX 智能中压开关柜原厂技术授权证书",
      "en": "Schneider Electric MVneX Medium-Voltage Switchgear License",
      "ru": "Авторизованный сертификат Schneider Electric MVneX 12-24 кВ",
      "es": "Schneider Electric MVneX Medium-Voltage Switchgear License",
      "ja": "Schneider Electric MVneX Medium-Voltage Switchgear License"
    },
    "category": "international",
    "issuer": "施耐德电气（中国）有限公司",
    "standard": "Schneider Electric 官方原厂成套技术授权",
    "image": "/images/certificates/cert_schneider_mvnex_license.webp",
    "highlight": true
  },
  {
    "id": "cert_siemens_siboard_partner",
    "title": {
      "zh": "西门子 SIBOARD 智能成套配电设备授权合作伙伴证书",
      "en": "Siemens SIBOARD Authorized Switchgear Partner Certificate",
      "ru": "Сертификат авторизованного партнера Siemens SIBOARD",
      "es": "Siemens SIBOARD Authorized Switchgear Partner Certificate",
      "ja": "Siemens SIBOARD Authorized Switchgear Partner Certificate"
    },
    "category": "international",
    "issuer": "西门子（中国）有限公司",
    "standard": "Siemens 原厂配电技术战略合作授权",
    "image": "/images/certificates/cert_siemens_siboard_partner.webp",
    "highlight": true
  },
  {
    "id": "cert_abb_mns_switchgear_license",
    "title": {
      "zh": "ABB MNS 2.0 低压抽出式开关柜授权制造证书",
      "en": "ABB MNS 2.0 Low-Voltage Switchgear Manufacturing License",
      "ru": "Сертификат авторизованного производителя ABB MNS 2.0",
      "es": "ABB MNS 2.0 Low-Voltage Switchgear Manufacturing License",
      "ja": "ABB MNS 2.0 Low-Voltage Switchgear Manufacturing License"
    },
    "category": "international",
    "issuer": "ABB（中国）有限公司",
    "standard": "ABB 官方技术授权与质量保证",
    "image": "/images/certificates/cert_abb_mns_switchgear_license.webp",
    "highlight": true
  },
  {
    "id": "cert_abb_unisafe_license",
    "title": {
      "zh": "ABB UniSafe 12kV 空气绝缘中压开关柜授权制造证书",
      "en": "ABB UniSafe 12kV Air-Insulated Switchgear License",
      "ru": "Сертификат авторизации ABB UniSafe 12 кВ",
      "es": "ABB UniSafe 12kV Air-Insulated Switchgear License",
      "ja": "ABB UniSafe 12kV Air-Insulated Switchgear License"
    },
    "category": "international",
    "issuer": "ABB（中国）有限公司",
    "standard": "ABB UniSafe 中压成套授权制造",
    "image": "/images/certificates/cert_abb_unisafe_license.webp",
    "highlight": true
  },
  {
    "id": "cert_schneider_blokset_license",
    "title": {
      "zh": "施耐德电气 BlokSeT 预智低压成套设备授权制造证书",
      "en": "Schneider Electric BlokSeT Intelligent LV Switchgear License",
      "ru": "Авторизация Schneider Electric BlokSeT 0.4 кВ",
      "es": "Schneider Electric BlokSeT Intelligent LV Switchgear License",
      "ja": "Schneider Electric BlokSeT Intelligent LV Switchgear License"
    },
    "category": "international",
    "issuer": "施耐德电气（中国）有限公司",
    "standard": "Schneider BlokSeT 高端低压配电系统授权",
    "image": "/images/certificates/cert_schneider_blokset_license.webp",
    "highlight": true
  },
  {
    "id": "report_fc_air_12_rmu_load_switch",
    "title": {
      "zh": "FC-AIR-12 环保气体绝缘真空环网负荷开关柜检验报告",
      "en": "FC-AIR-12 Eco-Gas Insulated Ring Main Unit Type-Test Report",
      "ru": "Протокол испытаний КРУЭ с экологическим газом FC-AIR-12",
      "es": "FC-AIR-12 Eco-Gas Insulated Ring Main Unit Type-Test Report",
      "ja": "FC-AIR-12 Eco-Gas Insulated Ring Main Unit Type-Test Report"
    },
    "category": "type_test",
    "issuer": "国家高压电器产品质量检验检测中心",
    "standard": "IEC 62271-200 / GB/T 3906 (25kA 4s)",
    "image": "/images/certificates/report_fc_air_12_rmu_load_switch.webp",
    "highlight": true
  },
  {
    "id": "report_fc_air_12_breaker_rmu",
    "title": {
      "zh": "FC-AIR-12(V) 环保气体真空绝缘断路器柜型式试验报告",
      "en": "FC-AIR-12(V) Eco-Gas Vacuum Circuit Breaker Switchgear Report",
      "ru": "Протокол испытаний ячейки выключателя КРУЭ FC-AIR-12(V)",
      "es": "FC-AIR-12(V) Eco-Gas Vacuum Circuit Breaker Switchgear Report",
      "ja": "FC-AIR-12(V) Eco-Gas Vacuum Circuit Breaker Switchgear Report"
    },
    "category": "type_test",
    "issuer": "国家高压电器质量监督检验中心",
    "standard": "IEC 62271-100 / GB/T 1984",
    "image": "/images/certificates/report_fc_air_12_breaker_rmu.webp",
    "highlight": true
  },
  {
    "id": "report_xgn_40_5_c_gis",
    "title": {
      "zh": "XGN-40.5(Z) 40.5kV 气体绝缘交流金属封闭开关设备(C-GIS)试验报告",
      "en": "XGN-40.5(Z) 40.5kV C-GIS Gas-Insulated Switchgear Type-Test Report",
      "ru": "Протокол испытаний КРУЭ 40.5 кВ XGN-40.5 (31.5 кА/4с)",
      "es": "XGN-40.5(Z) 40.5kV C-GIS Gas-Insulated Switchgear Type-Test Report",
      "ja": "XGN-40.5(Z) 40.5kV C-GIS Gas-Insulated Switchgear Type-Test Report"
    },
    "category": "type_test",
    "issuer": "国家高压电器质量监督检验中心 (NHVS)",
    "standard": "IEC 62271-200 / GB/T 3906 (40.5kV 31.5kA)",
    "image": "/images/certificates/report_xgn_40_5_c_gis.webp",
    "highlight": true
  },
  {
    "id": "report_cast_resin_busway_4000a",
    "title": {
      "zh": "FC-HP-F 4000A-1600A 浇注高密绝缘母线槽型式试验报告",
      "en": "FC-HP-F 4000A-1600A Cast Resin Insulated Busway Type-Test",
      "ru": "Протокол испытаний литого шинопровода 4000А FC-HP-F (IP68)",
      "es": "FC-HP-F 4000A-1600A Cast Resin Insulated Busway Type-Test",
      "ja": "FC-HP-F 4000A-1600A Cast Resin Insulated Busway Type-Test"
    },
    "category": "type_test",
    "issuer": "国家电器产品质量监督检验中心",
    "standard": "IEC 61439-6 / GB/T 7251.6 (IP68 / 100kA)",
    "image": "/images/certificates/report_cast_resin_busway_4000a.webp",
    "highlight": false
  },
  {
    "id": "report_scb14_100_10_dry_transformer",
    "title": {
      "zh": "SCB14-100/10 环氧树脂浇注干式电力变压器型式试验报告",
      "en": "SCB14-100/10 Cast Resin Dry Transformer Full Type-Test Report",
      "ru": "Протокол типовых испытаний сухого трансформатора SCB14-100/10",
      "es": "SCB14-100/10 Cast Resin Dry Transformer Full Type-Test Report",
      "ja": "SCB14-100/10 Cast Resin Dry Transformer Full Type-Test Report"
    },
    "category": "type_test",
    "issuer": "国家变压器质量监督检验中心 (CTQC)",
    "standard": "IEC 60076-11 / GB/T 1094.11 (局放 < 5pC)",
    "image": "/images/certificates/report_scb14_100_10_dry_transformer.webp",
    "highlight": true
  },
  {
    "id": "report_scb14_2000_10_dry_transformer",
    "title": {
      "zh": "SCB14-2000/10 二级能效干式电力变压器国家型式试验报告",
      "en": "SCB14-2000/10 Energy-Efficient Dry Transformer Type-Test Report",
      "ru": "Протокол испытаний энергоэффективного трансформатора SCB14-2000/10",
      "es": "SCB14-2000/10 Energy-Efficient Dry Transformer Type-Test Report",
      "ja": "SCB14-2000/10 Energy-Efficient Dry Transformer Type-Test Report"
    },
    "category": "type_test",
    "issuer": "国家变压器质量检验检测中心",
    "standard": "IEC 60076-11 / GB 20052 二级能效标准",
    "image": "/images/certificates/report_scb14_2000_10_dry_transformer.webp",
    "highlight": true
  },
  {
    "id": "report_scb18_500_10_dry_transformer",
    "title": {
      "zh": "SCB18-500/10 新一级能效超低损耗干式变压器试验报告",
      "en": "SCB18-500/10 Grade-1 Energy Efficiency Dry Transformer Report",
      "ru": "Протокол испытаний сухого трансформатора SCB18-500/10 (Класс 1)",
      "es": "SCB18-500/10 Grade-1 Energy Efficiency Dry Transformer Report",
      "ja": "SCB18-500/10 Grade-1 Energy Efficiency Dry Transformer Report"
    },
    "category": "type_test",
    "issuer": "国家变压器质量监督检验中心",
    "standard": "IEC 60076-11 / GB 20052-2020 一级能效",
    "image": "/images/certificates/report_scb18_500_10_dry_transformer.webp",
    "highlight": true
  },
  {
    "id": "report_scb18_2500_10_dry_transformer",
    "title": {
      "zh": "SCB18-2500/10 2500kVA 大容量干式变压器国家型式试验报告",
      "en": "SCB18-2500/10 2500kVA High-Capacity Dry Transformer Type-Test",
      "ru": "Протокол испытаний трансформатора большой мощности SCB18-2500",
      "es": "SCB18-2500/10 2500kVA High-Capacity Dry Transformer Type-Test",
      "ja": "SCB18-2500/10 2500kVA High-Capacity Dry Transformer Type-Test"
    },
    "category": "type_test",
    "issuer": "国家变压器质量检验检测中心",
    "standard": "IEC 60076-11 (2500kVA 阻抗 6.0%)",
    "image": "/images/certificates/report_scb18_2500_10_dry_transformer.webp",
    "highlight": true
  },
  {
    "id": "report_s13_m_rl_wound_core_transformer",
    "title": {
      "zh": "S13-M·RL-400/10 立体卷铁心配电变压器型式试验报告",
      "en": "S13-M.RL-400/10 3D Wound Core Distribution Transformer Report",
      "ru": "Протокол испытаний трансформатора с 3D витым сердечником S13",
      "es": "S13-M.RL-400/10 3D Wound Core Distribution Transformer Report",
      "ja": "S13-M.RL-400/10 3D Wound Core Distribution Transformer Report"
    },
    "category": "type_test",
    "issuer": "国家变压器质量监督检验中心",
    "standard": "IEC 60076-1 / 3D 三角立体卷铁心低噪低损",
    "image": "/images/certificates/report_s13_m_rl_wound_core_transformer.webp",
    "highlight": true
  },
  {
    "id": "report_s20_m_rl_50_10_transformer",
    "title": {
      "zh": "S20-M·RL-50/10 新一级能效油浸式配电变压器型式试验报告",
      "en": "S20-M.RL-50/10 Grade-1 Energy Efficiency Oil Transformer Report",
      "ru": "Протокол испытаний масляного трансформатора S20 1-го класса",
      "es": "S20-M.RL-50/10 Grade-1 Energy Efficiency Oil Transformer Report",
      "ja": "S20-M.RL-50/10 Grade-1 Energy Efficiency Oil Transformer Report"
    },
    "category": "type_test",
    "issuer": "国家变压器质量检验中心",
    "standard": "IEC 60076-1 / GB 20052-2020 一级能效",
    "image": "/images/certificates/report_s20_m_rl_50_10_transformer.webp",
    "highlight": true
  },
  {
    "id": "cert_patent_smart_substation_climate",
    "title": {
      "zh": "发明专利：模块化集装箱式变电站智能微气候调控系统",
      "en": "Invention Patent: Modular Container Substation Microclimate System",
      "ru": "Патент на изобретение: Система терморегулирования КТПН",
      "es": "Invention Patent: Modular Container Substation Microclimate System",
      "ja": "Invention Patent: Modular Container Substation Microclimate System"
    },
    "category": "patent",
    "issuer": "国家知识产权局 (CNIPA)",
    "standard": "中国发明专利 ZL 2020 1 0849281.X",
    "image": "/images/certificates/cert_patent_smart_substation_climate.webp",
    "highlight": true
  },
  {
    "id": "cert_patent_switchgear_interlocking",
    "title": {
      "zh": "实用新型专利：高压铠装开关柜防误动作双重机械闭锁装置",
      "en": "Utility Patent: HV Metal-Clad Switchgear Dual Interlocking Device",
      "ru": "Патент: Механическая блокировка выкатного элемента КРУ",
      "es": "Utility Patent: HV Metal-Clad Switchgear Dual Interlocking Device",
      "ja": "Utility Patent: HV Metal-Clad Switchgear Dual Interlocking Device"
    },
    "category": "patent",
    "issuer": "国家知识产权局 (CNIPA)",
    "standard": "中国实用新型专利 ZL 2021 2 1928471.2",
    "image": "/images/certificates/cert_patent_switchgear_interlocking.webp",
    "highlight": false
  },
  {
    "id": "cert_patent_nitrogen_extinguishing",
    "title": {
      "zh": "实用新型专利：矿用隔爆型高纯度变压器注氮灭火防火装置",
      "en": "Utility Patent: Mining Flameproof PSA Nitrogen Fire-Suppression",
      "ru": "Патент: Взрывозащищенный азотный комплекс пожаротушения",
      "es": "Utility Patent: Mining Flameproof PSA Nitrogen Fire-Suppression",
      "ja": "Utility Patent: Mining Flameproof PSA Nitrogen Fire-Suppression"
    },
    "category": "patent",
    "issuer": "国家知识产权局 (CNIPA)",
    "standard": "中国实用新型专利 ZL 2022 2 0837291.6",
    "image": "/images/certificates/cert_patent_nitrogen_extinguishing.webp",
    "highlight": true
  }
];
