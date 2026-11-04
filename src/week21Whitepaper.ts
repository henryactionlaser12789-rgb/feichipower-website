import type { WhitepaperItem } from './whitepapersData';

export const week21Whitepaper: WhitepaperItem = {
  id: 'week-21',
  week: 21,
  slug: 'mobile-modular-digital-substation-35kv-110kv-mmps-engineering-guide',
  category: 'substation',
  categoryLabel: {
    en: 'Mobile & Modular Digital Substation (35kV–110kV / 220kV MMPS / ММПС / МБКТП / IEC 61850)',
    zh: '35kV–110kV / 220kV 移动车载式与预装模块化数字变电站 (MMPS / ММПС / МБКТП / IEC 61850)',
    ja: '35kV〜110kV/220kV 移動式車載・モジュール型デジタル変電所 (MMPS / ММПС / IEC 61850)',
    es: 'Subestaciones Móviles y Modulares Digitales de 35kV a 110kV/220kV (MMPS / E-House / IEC 61850)',
    ru: 'Мобильные модульные цифровые подстанции 35-110 кВ (ММПС / МПС / МБКТП / МЭК 61850)',
  },
  title: {
    en: '35kV–110kV/220kV Fast-Deployment Mobile Modular Substation (MMPS / ММПС) & Digital E-House Engineering Dossier: Multi-Axle Heavy-Haul Trailer Architecture, IEC 61850 Process Bus, Compact Hybrid GIS, and Extreme Sub-Zero (-60°C УХЛ1) Emergency Grid Restoration (Benchmarking TGOOD & Ormazabal)',
    zh: '35kV–110kV/220kV 快速部署移动车载式模块化变电站（MMPS / 俄标 ММПС）与预制舱式数字变电站工程全案：多轴重载半挂车底盘减震拓扑、IEC 61850 过程层光纤母线、紧凑型复合 GIS 与极寒（-60°C УХЛ1）应急保电电网重构（对标 TGOOD 特锐德与 Ormazabal 标杆架构）',
    ja: '35kV〜110kV/220kV 高速展開型 車載移動式モジュール変電所（MMPS / MMPS）＆デジタルE-House設計技術指針：多軸重トランスポーター車台・IEC 61850 プロセスバス光ファイバ・高密度ハイブリッドGIS・極寒（-60℃）緊急系統復旧設計（TGOOD・Ormazabalベンチマーク）',
    es: 'Dossier Técnico de Subestaciones Móviles Modulares de 35kV a 110kV/220kV (MMPS / ММПС) y E-House Digital: Plataforma de Transporte Pesado Multieje, Bus de Proceso IEC 61850, Celdas GIS Compactas y Restauración Rápida de Redes en Climas Árticos (-60°C)',
    ru: 'Инженерное руководство по мобильным модульным подстанциям 35-110 кВ (ММПС / МПС / МБКТП) и цифровым БМЗ: многоосные полуприцепы-тяжеловозы, шина процесса МЭК 61850 (SV/GOOSE), компактные КРУЭ/ГИС и аварийное электроснабжение при -60°C (ГОСТ 14695 / СТО РОССЕТИ / Бенчмарк TGOOD)',
  },
  eyebrow: {
    en: 'EMERGENCY GRID RESTORATION & FAST-DEPLOYMENT MOBILE DIGITAL SUBSTATIONS (IEC 62271-202 / IEEE C37.122 / ГОСТ 14695 / СТО 56947007)',
    zh: '电网应急保电与快速部署移动车载数字变电站（IEC 62271-202 / GB/T 17467 / ГОСТ 14695 / 俄联邦电网 СТО）',
    ja: '緊急配電復旧・高速展開型移動式デジタル変電システム（IEC 62271-202 / IEEE C37.122 / GOST 14695）',
    es: 'SUBESTACIONES MÓVILES PARA EMERGENCIAS Y DESPLIEGUE RÁPIDO (IEC / IEEE / GOST)',
    ru: 'МОБИЛЬНЫЕ МОДУЛЬНЫЕ ПОДСТАНЦИИ ДЛЯ ОПЕРАТИВНОГО ЭЛЕКТРОСНАБЖЕНИЯ 35-110 кВ (ГОСТ 14695 / ГОСТ 15150 УХЛ1 / СТО РОССЕТИ)',
  },
  author: {
    en: 'Feichi Mobile High-Voltage Substation & E-House Engineering Institute (Lead: Henry)',
    zh: '飞驰电气移动高压变电站与预制舱工程研究所（技术总工：Henry）',
    ja: '飛馳電気 移動式高圧変電所・E-House研究所（チーフエンジニア：Henry）',
    es: 'Instituto de Ingeniería de Subestaciones Móviles y E-House Feichi (Líder Técnico: Henry)',
    ru: 'Инженерный отдел мобильных подстанций 35-110 кВ и цифровых БМЗ Feichi (Гл. инженер: Henry)',
  },
  standards: 'IEC 62271-202 / IEC 61850-9-2LE / IEEE C37.122 / GB/T 17467 / ГОСТ 14695-80 / ГОСТ 15150-69 (УХЛ1) / СТО 56947007-29.240.10.248-2017',
  readTime: {
    en: '21 min deep technical study (Includes transport vibration damping calculations, optical CT/VT sampled values bus delay <2ms & Siberian -60°C winterization)',
    zh: '21 分钟深度技术研读（含重载车载半挂车三维减震动力学仿真、IEC 61850 过程层采样值 <2ms 确定性时延与西伯利亚 -60°C 极寒防凝露热平衡算例）',
    ja: '21分 専門設計解説（輸送振動吸収サスペンション動力学計算・IEC 61850 2ms以内超低遅延プロセスバス・極寒-60℃結露防止熱力学解析）',
    es: '21 min de lectura técnica (Incluye simulación de amortiguación de transporte, bus de proceso óptico IEC 61850 <2ms y climatización ártica a -60°C)',
    ru: '21 мин углубленного изучения (включая расчет динамического демпфирования полуприцепа, шину процесса МЭК 61850 с задержкой SV <2мс и работу при -60°C ГОСТ 15150 УХЛ1)',
  },
  summary: {
    en: 'A definitive engineering dossier on 35kV, 110kV, and 220kV Fast-Deployment Mobile Modular Substations (MMPS / ММПС) and Prefabricated Digital E-Houses. Benchmarking global mobile substation pioneer TGOOD and European smart grid innovator Ormazabal, this guide details multi-axle heavy-duty low-bed semi-trailer designs with hydraulic self-leveling outriggers, compact SF6/Clean Air Gas-Insulated Switchgear (GIS / КРУЭ), low-noise vibration-isolated oil transformers (up to 40 MVA / 110kV), IEC 61850 full-digital process bus (optical CT/VT, GOOSE, SV), and Arctic climate enclosures engineered down to -60°C (ГОСТ 15150 УХЛ1) for mining, oilfields, and emergency utility restoration.',
    zh: '专为国家电网、大型工矿开采（油气田、金矿、煤矿）、新能源并网及突发灾害电网应急恢复打造的 35kV、110kV 及 220kV 车载移动式模块化变电站（MMPS / 俄标 ММПС）与预制舱式数字变电站工程设计全案。对标全球移动变电站领军企业特锐德（TGOOD）与欧洲电网巨头 Ormazabal，系统拆解多轴重载液压自动调平半挂车底盘与三维减震橡胶隔振垫拓扑、紧凑型复合式 GIS/H-GIS（КРУЭ）、抗震型低损耗主变压器（单台容量达 40MVA / 110kV）、IEC 61850 全数字化过程层（电子式光纤互感器、GOOSE 跳闸与 SV 采样值时延 <2ms）以及适应西伯利亚与远东 -60°C 极寒（ГОСТ 15150 УХЛ1）的全密封双冗余保温舱体。',
    ja: '鉱山、油田、再生可能エネルギー連系、および災害時緊急電力復旧に不可欠な 35kV/110kV/220kV 車載移動式モジュール変電所（MMPS）の完全技術解説書。グローバルトップメーカーTGOODおよびOrmazabalをベンチマークし、多軸油圧レベリング半導体トレーラー、耐震・防振トランス本体（最大40MVA/110kV）、高密度GIS（ガス絶縁開閉装置）、IEC 61850 完全デジタルプロセスバス（光ファイバCT/VT）、-60℃極寒耐候E-Houseコンテナ構造を網羅。',
    es: 'Dossier de ingeniería para subestaciones móviles modulares de 35kV a 110kV/220kV (MMPS / ММПС) y E-House digital sobre semirremolques de carga pesada. Inspirado en los estándares de TGOOD y Ormazabal, analiza sistemas de nivelación hidráulica, celdas compactas GIS, transformadores de potencia antivibratorios (hasta 40 MVA), bus de proceso digital IEC 61850 con fibra óptica y operación en frío extremo hasta -60°C.',
    ru: 'Полное техническое руководство по проектированию и изготовлению мобильных модульных подстанций 35-110 кВ и 220 кВ (ММПС / МПС / МБКТП) и цифровых блок-модульных зданий (БМЗ). На основе передового мирового опыта TGOOD и Ormazabal подробно рассматриваются многоосные низкорамные полуприцепы с гидравлическими аутригерами, компактные КРУЭ 35/110 кВ, виброустойчивые силовые трансформаторы до 40 МВА, цифровая шина процесса МЭК 61850 (SV/GOOSE) с оптическими трансформаторами тока/напряжения и климатические боксы для Крайнего Севера (-60°C ГОСТ 15150 УХЛ1).',
  },
  sec1Title: {
    en: '1. Mechanical & Transport Architecture: Heavy-Haul Trailer, Hydraulic Outriggers & 3D Vibration Isolation',
    zh: '1. 机械与运输动力学架构：多轴重载半挂车底盘、液压自动调平与三维多级减震隔振拓扑',
    ja: '1. 車両・輸送動力学設計：多軸ヘビートレーラー・油圧セルフレベリング・3次元多段防振機構',
    es: '1. Arquitectura Mecánica y Transporte: Semirremolque Pesado, Nivelación Hidráulica y Amortiguación 3D',
    ru: '1. Механическая и транспортная часть: многоосные полуприцепы, гидравлические опоры и 3D-виброизоляция',
  },
  sec1Text: {
    en: `Mobile modular substations (MMPS) must endure severe mechanical road vibrations during long-distance highway, off-road permafrost, and mining haul-road transit without compromising high-voltage ceramic/composite bushings, GIS gas seals, or transformer core clamping pressures.

Key Mechanical & Transport Innovations:
• Multi-Axle Low-Bed Semi-Trailer Chassis: Built with high-strength Q690D/09Г2С cryogenic structural alloy steel. Configured with air suspension and hydraulic steering axles for tight turning radii (≤18m) in rugged open-pit mines and remote Siberian terrain.
• Four-Point Hydraulic Self-Leveling Outriggers: Integrated PLC-controlled electro-hydraulic jacks capable of lifting up to 120 metric tons, achieving horizontal leveling precision of ±0.2° on unpaved gravel or soft tundra within 15 minutes without crane assistance.
• Multi-Stage 3D Vibration Damping System: The heavy power transformer and delicate GIS modules are seated on tuned elastomeric wire-rope dampers and high-damping silicone cushions, attenuating dynamic shock loads by >75% (maintaining vibration acceleration < 0.5g during transport per IEC 60068-2-6 & GOST 17516.1).`,
    zh: `移动车载变电站（MMPS）在长距离公路巡航、恶劣矿山碎石路况及西伯利亚冻土便道运输过程中，面临严酷的三维随机振动与冲击载荷。若无严密的力学防护，极易引发高压绝缘套管开裂、GIS 密封面微量泄漏及变压器铁芯绕组松动。

机械底盘与抗震减震核心创新：
• 多轴特种低平板半挂车底盘：采用 Q690D/09Г2С 耐低温高强度特种合金钢纵梁制造，配备电子气压悬挂系统（ECAS）与多轴液压随动强制转向机构，确保在狭窄弯道（转弯半径 ≤18m）及恶劣越野路况下具备极致通过性。
• 四点式液压全自动调平支腿：集成 PLC 控制的高压电液伺服顶升支腿（总承载能力超 120 吨），在未硬化的砂石地面或冻土苔原上可在 15 分钟内完成整车自动找平（水平度精度优于 ±0.2°），无需大型吊车介入即可快速进入投运就绪状态。
• 三维复合多级减震隔振拓扑：大容量主变压器与紧凑型 GIS 设备底座采用特种钢丝绳隔振器（Wire-Rope Isolator）与高阻尼硅胶减震块复合布局，过滤 75% 以上的行车冲击加速度（确保运输过程中核心设备承受峰值冲击 ≤0.5g，完全符合 IEC 60068-2-6 及 ГОСТ 17516.1 抗震规范）。`,
    ja: `MMPS（移動変電所）は、長距離道路輸送および極寒の未舗装鉱山道路において激しい振動・衝撃にさらされます。高圧ブッシング破損やGISガス漏れを防止するため、高張力09G2S鋼多軸トレーラー、油圧自動レベリング機構（水平精度±0.2度、15分で展開完了）、3次元ワイヤーロープ防振ダンパー（衝撃荷重を75%低減、最大0.5g以下に抑制）を標準装備しています。`,
    es: 'Las subestaciones móviles (MMPS) incorporan chasis de semirremolque de alta resistencia en acero ártico 09Г2С con suspensión neumática y dirección hidráulica. Sus cuatro cilindros hidráulicos permiten la autonivelación en 15 minutos (precisión de ±0.2°), y amortiguadores de cable de acero absorben más del 75% de las vibraciones en transporte.',
    ru: 'Шасси мобильной подстанции ММПС выполнено из хладостойкой стали 09Г2С с пневмоподвеской и гидравлическим подруливанием осей. Четыре встроенных гидроаутригера обеспечивают автоматическое горизонтирование платформы за 15 минут (погрешность ≤±0.2°). Многоуровневые тросовые виброизоляторы снижают транспортные перегрузки более чем на 75% (ускорение <0.5g по ГОСТ 17516.1).',
  },
  sec2Title: {
    en: '2. High-Voltage Primary Apparatus: Compact Hybrid GIS / PASS, Mobile Transformers & Fast Cable Links',
    zh: '2. 高压一次电气设备体系：紧凑型复合式 GIS/PASS 模块、车载低噪主变与快速插拔高压电缆终端',
    ja: '2. 高圧一次電気機器：超小型ハイブリッドGIS/PASS・車載トランス・高圧プラグインケーブル',
    es: '2. Equipamiento Primario de Alta Tensión: Celdas GIS Compactas/PASS, Transformadores y Conectores Rápidos',
    ru: '2. Первичное высоковольтное оборудование: компактные КРУЭ/H-GIS, трансформаторы и быстроразъемные муфты',
  },
  sec2Text: {
    en: `To conform to strict road transport dimensional limits (width ≤2.55m-3.0m, height ≤4.0m-4.5m per international road regulations), primary equipment adopts ultra-compact integration:

1. 110kV/220kV Compact Hybrid GIS (PASS / КРУЭ):
• Combines circuit breaker, disconnector, earthing switch, optical current transformer (OCT), and surge arrester into a single SF6 or Clean Air sealed chamber.
• Footprint reduced by 85% compared to conventional air-insulated (AIS) substations. Fast plug-in pre-molded outer-cone cable terminations allow 110kV line hookup in under 2 hours without on-site gas handling.

2. Heavy-Duty Mobile Power Transformer (10 MVA to 40 MVA):
• Engineered with high thermal withstand Nomex/mineral oil insulation, forced oil directed air cooling (ODAF/OFAS), and anti-sloshing internal oil baffles.
• Integrated dry nitrogen positive-pressure preservation system monitors hermetic seals in real-time during storage and transit.

3. 10kV–35kV Medium-Voltage Switchgear Compartment:
• Features Ormazabal/Siemens benchmark SF6-free or solid-insulated (SIS) vacuum switchgear with IAC AFLR 31.5kA/1s arc containment, guaranteeing total operator safety within compact walk-in E-House aisles.`,
    zh: `为严格满足国际及独联体公路运输限宽（宽度 ≤2.55m~3.0m，高度 ≤4.0m~4.5m）的限界法规，高压一次系统采用极致紧凑与即插即用化设计：

1. 110kV/220kV 紧凑型复合式 GIS（PASS / H-GIS / КРУЭ）：
• 将真空/SF6断路器、三工位隔离开关、接地开关、电子式光学互感器（OCT/OVT）及氧化锌避雷器高度集成于单一全封闭气箱内。
• 较传统敞开式（AIS）变电站占地面积缩减 85% 以上。配备预制式可插拔外锥高压电缆插拔头与旋转出线套管，无需现场充排气作业，高压进出线在 2 小时内即可快速电缆插接完毕。

2. 车载专用高可靠主变压器（单台容量 10 MVA ~ 40 MVA）：
• 采用抗运输冲击加强型夹件结构、杜邦 Nomex 混合耐高温绝缘体系与强油强风冷（ODAF/OFAS）冷却方式。
• 变压器油箱内部加装波浪防荡隔板，配置内置微型充氮恒压呼吸系统，实时监控长途颠簸过程中的微正压密封完整性。

3. 10kV~35kV 中压配电预制舱（E-House 模块）：
• 对标 Ormazabal 与 Siemens Blue GIS 架构，选用环保固体绝缘（SIS）或洁净空气中压开关柜，具备 IAC AFLR 31.5kA/1s 内部燃弧泄压通道，保障狭窄舱内运维人员的绝对安全。`,
    ja: `道路輸送制限（全幅3m以内、全高4.5m以内）をクリアするため、110kV複合型GIS（従来のAIS比で設置面積85%削減）、耐振強化10〜40MVA油入変圧器（スロッシング防止隔板付き）、およびOrmazabalベンチマークの35kV固体・乾燥空気絶縁スイッチギア（IAC AFLR 31.5kA/1s）を採用。プラグイン式高圧ケーブルにより2時間以内の系統接続が可能です。`,
    es: 'El equipamiento primario cumple las normativas viales internacionales (ancho ≤3.0m, alto ≤4.5m): celdas híbridas GIS de 110kV que reducen el espacio un 85%, transformadores móviles de 10 a 40 MVA con deflectores antisplash y celdas de media tensión libres de SF6 con protección contra arco interno IAC AFLR 31.5kA.',
    ru: 'Для соблюдения габаритов автодорог (ширина ≤3.0м, высота ≤4.5м) первичное оборудование включает: компактные КРУЭ 110 кВ (PASS) с сокращением площади на 85%, силовые трансформаторы 10-40 МВА с антиплескательными перегородками и распределительное устройство 10-35 кВ в блок-модуле с дугостойкостью IAC AFLR 31.5 кА/1с.',
  },
  sec3Title: {
    en: '3. Technical Comparison Matrix: Feichi MMPS Mobile Digital Substation vs TGOOD Benchmark vs Fixed AIS',
    zh: '3. 关键技术参数综合对比：飞驰 MMPS 车载移动数字变电站 vs 特锐德 (TGOOD) 标杆预制舱 vs 传统固定式 110kV AIS 变电站',
    ja: '3. 主要仕様比較表：飛馳 MMPS 車載移動変電所 vs TGOOD プレハブ変電所 vs 従来型固定AIS変電所',
    es: '3. Matriz Comparativa Técnica: Feichi MMPS Móvil vs Benchmark TGOOD vs Subestación Fija AIS',
    ru: '3. Сравнительная матрица характеристик: Мобильная подстанция ММПС Feichi vs Бенчмарк TGOOD vs Традиционная ПС 110 кВ (ОРУ)',
  },
  tableHeaders: {
    en: ['Technical Specification', 'Feichi MMPS-110/35/10 (Digital Mobile)', 'TGOOD Modular Substation Benchmark', 'Traditional Fixed AIS Substation (110kV)'],
    zh: ['技术参数与工程指标', '飞驰电气 MMPS 车载移动数字变电站', '特锐德 (TGOOD) 预制舱式变电站标杆', '传统固定式 110kV 敞开式 (AIS) 变电站'],
    ja: ['主要仕様・指標', '飛馳 MMPS 車載移動式デジタル変電所', 'TGOOD プレハブモジュール変電所', '従来型 110kV 固定式AIS変電所'],
    es: ['Parámetros Técnicos', 'Feichi MMPS Móvil Digital (110/35/10kV)', 'Benchmark TGOOD Modular', 'Subestación Convencional AIS 110kV'],
    ru: ['Технические параметры', 'Мобильная подстанция ММПС Feichi 110/35/10', 'Бенчмарк TGOOD (БМЗ/БКТП)', 'Традиционная стационарная ПС 110 кВ (ОРУ)'],
  },
  tableRows: {
    en: [
      ['Rated Voltage & Transformer Capacity', '35kV–110kV / 220kV (Up to 40 MVA / Transformer)', '35kV–110kV / 220kV (Up to 63 MVA)', '35kV–220kV (Custom Field Engineered)'],
      ['On-Site Installation & Power-On Time', '< 24 - 48 Hours (Integrated Hydraulic Leveling)', '3 - 7 Days (Modular Crane Assembly)', '6 - 12 Months (Heavy Civil Works & Cabling)'],
      ['Footprint & Civil Works Cost', 'Reduced by 85% / Zero Permanent Foundation', 'Reduced by 70% / Strip Foundation Required', 'Baseline (Large Land Footprint & Civil Cost)'],
      ['Digital Secondary Architecture', 'Pure IEC 61850 Process Bus (SV + GOOSE <2ms)', 'IEC 61850 Station Bus / Hybrid Process Bus', 'Traditional Copper Multi-Core Wiring'],
      ['Extreme Cold Climate Withstand', '-60°C to +40°C (ГОСТ 15150 УХЛ1 / C5-M Coating)', '-45°C to +45°C (Standard Climate Container)', 'Requires Heated Brick Building & High OPEX'],
      ['Russian GOST / Rosseti Compliance', 'ГОСТ 14695, ГОСТ 15150 УХЛ1, СТО РОССЕТИ', 'GOST / IEC Certified Components', 'GOST Standard Compliant'],
    ],
    zh: [
      ['额定电压等级与主变容量', '35kV–110kV / 220kV（单台主变达 40 MVA）', '35kV–110kV / 220kV（最大 63 MVA）', '35kV–220kV（按项目非标定制）'],
      ['现场就位与通电投运周期', '< 24 ~ 48 小时（液压自动调平即插即用）', '3 ~ 7 天（模块吊装拼接与基础找平）', '6 ~ 12 个月（现场大开挖土建与繁琐布线）'],
      ['占地面积与现场土建造价', '占地缩减 85% / 无需永久硬化混凝土基础', '占地缩减 70% / 需简易条形基础', '基准占地（征地面积大、土建与防雷造价高）'],
      ['数字化二次保护与过程层通信', '纯 IEC 61850 光纤过程层 (SV + GOOSE <2ms)', 'IEC 61850 站控层 / 混合过程层', '传统密集多芯铜质屏蔽控制电缆硬接线'],
      ['极寒极地工况耐受与防凝露', '-60°C ~ +40°C (ГОСТ 15150 УХЛ1 / C5-M 重防腐)', '-45°C ~ +45°C (标准气候预制舱)', '需重型采暖砖混建筑，极寒下巡检维护困难'],
      ['俄联邦 GOST / 全俄电网认证', 'ГОСТ 14695, ГОСТ 15150 УХЛ1, СТО РОССЕТИ', 'GOST / IEC 认证完备', '符合俄标常规标准'],
    ],
    ja: [
      ['定格電圧・変圧器容量', '35kV〜110kV/220kV（最大40 MVA）', '35kV〜110kV/220kV（最大63 MVA）', '35kV〜220kV（個別設計）'],
      ['現地据付・通電工期', '< 24〜48時間（即時稼働）', '3〜7日（クレーン据付）', '6〜12ヶ月（大規模土木工事）'],
      ['設置面積・土木工事費', '85%削減 / 基礎工事不要', '70%削減 / 簡易基礎要', '基準（広大な敷地と高額な土木費用）'],
      ['デジタル二次制御方式', '完全 IEC 61850 光プロセスバス (SV+GOOSE <2ms)', 'IEC 61850 局内バス / ハイブリッド', '従来の多芯銅製メタル配線'],
      ['極寒環境耐性', '-60℃〜+40℃ (GOST UHL1 / C5-M)', '-45℃〜+45℃ (標準耐寒)', '暖房付専用建屋が必須'],
      ['ロシア規格適合', 'GOST 14695 / UHL1 / Rosseti', 'GOST / IEC 認証取得', 'GOST規格適合'],
    ],
    es: [
      ['Tensión Nominal y Capacidad', '35kV–110kV / 220kV (Hasta 40 MVA)', '35kV–110kV / 220kV (Hasta 63 MVA)', '35kV–220kV (Diseño a medida)'],
      ['Tiempo de Puesta en Marcha', '< 24 - 48 Horas (Despliegue rápido)', '3 - 7 Días (Montaje con grúa)', '6 - 12 Meses (Obra civil pesada)'],
      ['Huella y Coste de Obra Civil', 'Reducción del 85% / Sin cimientos fijos', 'Reducción del 70% / Cimentación simple', 'Línea base (Gran superficie y alto coste)'],
      ['Arquitectura Digital Secundaria', 'Bus de proceso IEC 61850 puro (<2ms)', 'Bus de estación IEC 61850 / Híbrido', 'Cableado tradicional en cobre'],
      ['Resistencia a Frío Extremo', '-60°C a +40°C (GOST UHL1 / C5-M)', '-45°C a +45°C (Estándar)', 'Requiere edificio calefactado'],
      ['Normas GOST / Rosseti', 'GOST 14695 / UHL1 / Rosseti', 'Certificado GOST / IEC', 'Conforme con GOST'],
    ],
    ru: [
      ['Номинальное напряжение и мощность', '35-110 кВ / 220 кВ (до 40 МВА на трейлере)', '35-110 кВ / 220 кВ (до 63 МВА)', '35-220 кВ (индивидуальное проектирование)'],
      ['Срок монтажа и ввода в работу', '< 24-48 часов (быстрое гидравлическое горизонтирование)', '3-7 дней (монтаж краном на фундамент)', '6-12 месяцев (капитальное строительство ЗРУ/ОРУ)'],
      ['Площадь застройки и капзатраты', 'Сокращение на 85% / без капитального фундамента', 'Сокращение на 70% / ленточный фундамент', 'Базовый уровень (большой отвод земли и высокий CAPEX)'],
      ['Цифровая вторичная коммутация', 'Шина процесса МЭК 61850-9-2LE (SV+GOOSE <2мс)', 'Шина станции МЭК 61850 / смешанная', 'Традиционные медные контрольные кабели'],
      ['Климатическое исполнение', '-60°C ... +40°C (ГОСТ 15150 УХЛ1, C5-M)', '-45°C ... +45°C (стандартный БМЗ)', 'Требуется отапливаемое капитальное здание'],
      ['Сертификация ГОСТ / Россети', 'ГОСТ 14695, ГОСТ 15150 УХЛ1, СТО РОССЕТИ', 'Сертификаты ГОСТ / МЭК', 'Соответствие ГОСТ'],
    ],
  },
  sec4Title: {
    en: '4. Engineering Application Scenarios & Turnkey Solutions',
    zh: '4. 典型工程应用场景与交钥匙选型方案',
    ja: '4. 代表的エンジニアリング適用シナリオ＆選定ソリューション',
    es: '4. Escenarios de Aplicación y Soluciones Llave en Mano',
    ru: '4. Типовые сценарии применения и готовые решения ММПС',
  },
  scenarios: {
    en: [
      {
        title: 'Emergency Power Restoration for Regional Grid Substations (110kV/35kV/10kV)',
        recommend: 'Feichi MMPS-110/35-25MVA Fast-Deployment Mobile Digital Substation on Dual Semi-Trailers',
        reason: 'Restores power to 100,000+ residents within 24 hours of natural disasters without requiring permanent foundation construction.',
      },
      {
        title: 'Open-Pit Mining & Remote Oil/Gas Field Step-Up (Yakutia & Kuzbass -60°C Arctic Basin)',
        recommend: 'Feichi Arctic MMPS-110/10-31.5MVA with 09Г2С Arctic Steel Chassis and Full Digital Process Bus',
        reason: 'Certified under GOST 15150 UHL1, easily towed along changing mining haul roads and connects via plug-in composite bushings.',
      },
      {
        title: 'Utility Renewable Peak Shaving & Temporary Connection (1500V Solar/Wind Farm)',
        recommend: 'Feichi MMPS-35/10-16MVA Inverter-Duty Mobile Skid with Integrated IEC 61850 RTU',
        reason: 'Enables rapid revenue generation months ahead of permanent substation completion, then re-locatable to new project phases.',
      },
    ],
    zh: [
      {
        title: '电网区域枢纽变电站突发故障与应急保电（110kV/35kV/10kV 快速重构）',
        recommend: '飞驰电气 MMPS-110/35-25MVA 双车联轴快速部署移动车载数字变电站',
        reason: '在重大自然灾害或主变检修时，24 小时内快速抵达现场并通电投运，保障数十万居民及关键工业负荷的不间断供电。',
      },
      {
        title: '高寒露天矿山与偏远油气田采掘配电（西伯利亚雅库特与库兹巴斯 -60°C 极寒工况）',
        recommend: '飞驰电气 极地型 MMPS-110/10-31.5MVA（09Г2С 特种极地钢底盘 + 全光纤过程层）',
        reason: '完全符合 ГОСТ 15150 УХЛ1 极寒标准，随采矿工作面推进随时牵引转移，彻底省去数千万元固定变电站土建与搬迁浪费。',
      },
      {
        title: '大型新能源光储电站早期并网与临时过渡供电（1500V 直流汇集 / 35kV 快速入网）',
        recommend: '飞驰电气 MMPS-35/10-16MVA 移动车载升压一体站（集成 IEC 61850 远动通讯）',
        reason: '在永久变电站施工期间提前 4~6 个月实现发电并网收益，工程竣工后整车机动转场至下一期新能源项目重复使用。',
      },
    ],
    ja: [
      {
        title: '送配電系統の災害緊急復旧・主変圧器更新時バイパス給電（110kV/35kV/10kV）',
        recommend: '飛馳 MMPS-110/35-25MVA 高速展開型 車載移動式デジタル変電所（2台連結型）',
        reason: '土木基礎工事不要で24時間以内に給電を再開し、都市部・重要産業の停電被害を最小限に抑えます。',
      },
      {
        title: '極寒露天採掘鉱山・油田開発用電源（シベリア・ヤクーチア -60℃環境）',
        recommend: '飛馳 極地型 MMPS-110/10-31.5MVA（09G2S特殊耐寒鋼・完全光プロセスバス）',
        reason: 'GOST 15150 UHL1適合。採掘現場の移動に伴い迅速に牽引移設可能で、設備投資を大幅に削減します。',
      },
      {
        title: 'メガソーラー・風力発電所の早期系統連系・先行売電プロジェクト（35kV連系）',
        recommend: '飛馳 MMPS-35/10-16MVA 車載昇圧スキッド（IEC 61850 RTU内蔵）',
        reason: '本設変電所の完成を待たずに数ヶ月先行して売電を開始でき、プロジェクト投資回収を加速します。',
      },
    ],
    es: [
      {
        title: 'Restauración de Emergencia en Redes de Transmisión (110kV / 35kV / 10kV)',
        recommend: 'Subestación Móvil Digital Feichi MMPS-110/35-25MVA sobre Doble Semirremolque',
        reason: 'Despliegue operativo en menos de 24 horas tras catástrofes naturales sin requerir obras de cimentación fija.',
      },
      {
        title: 'Minería a Cielo Abierto y Campos Petrolíferos en Climas Árticos (-60°C en Siberia)',
        recommend: 'Feichi MMPS Ártica 110/10-31.5MVA en Acero 09Г2С con Bus de Proceso Digital IEC 61850',
        reason: 'Conformidad total con GOST UHL1. Reubicable según el avance de la explotación minera eliminando costes civiles.',
      },
      {
        title: 'Conexión Temprana de Parques Solares y Eólicos (35kV)',
        recommend: 'Subestación Móvil Feichi MMPS-35/10-16MVA con Telemetría Integrada',
        reason: 'Permite comenzar la inyección de energía meses antes de finalizar la subestación definitiva, reutilizable en futuras fases.',
      },
    ],
    ru: [
      {
        title: 'Аварийное восстановление электроснабжения узловых подстанций 110/35/10 кВ',
        recommend: 'Мобильная подстанция Feichi ММПС-110/35-25МВА на базе двух полуприцепов',
        reason: 'Ввод в работу за 24 часа после аварий или на период планового ремонта трансформаторов без капстроительства.',
      },
      {
        title: 'Электроснабжение карьеров и нефтепромыслов (Якутия, Кузбасс при -60°C УХЛ1)',
        recommend: 'Арктическая ММПС-110/10-31.5МВА в хладостойком исполнении из стали 09Г2С',
        reason: 'Полное соответствие ГОСТ 15150 УХЛ1, перемещение вслед за фронтом горных работ и подключение через кабельные адаптеры.',
      },
      {
        title: 'Временное и раннее технологическое присоединение СЭС и ВЭС (35 кВ)',
        recommend: 'Мобильный блок Feichi ММПС-35/10-16МВА с поддержкой МЭК 61850',
        reason: 'Начало генерации и окупаемости за 4-6 месяцев до ввода стационарной подстанции с последующим переводом на новый объект.',
      },
    ],
  },
  hasCalculator: 'sld',
  ctaTitle: {
    en: 'Download 35kV–110kV Mobile Modular Substation (MMPS / ММПС) Technical Dossier & Sizing Questionnaire',
    zh: '获取 35kV–110kV 车载移动式模块化数字变电站（MMPS / ММПС）工程技术方案、图纸与选型表单',
    ja: '35kV〜110kV移動式変電所（MMPS）技術仕様書ダウンロードおよび選定ヒアリングシート請求',
    es: 'Descargar Dossier Técnico de Subestaciones Móviles (MMPS / ММПС) y Cuestionario de Dimensionamiento',
    ru: 'Скачать техническое описание и опросный лист на мобильные подстанции ММПС 35-110 кВ (ГОСТ)',
  },
  ctaDesc: {
    en: 'Feichi High-Voltage Mobile Substation Engineering Division (Lead: Henry) provides single-line diagrams (SLD), multi-axle trailer axle-weight calculations, IEC 61850 process bus architecture, and turnkey commercial proposals within 24 hours.',
    zh: '飞驰电气移动高压变电站与预制舱工程研究所（技术总工/外贸对接人：Henry）将在 24 小时内为您提供完整的电气一次单线图（SLD）、半挂车轴荷与通过性计算书、IEC 61850 过程层光纤拓扑图及交钥匙商务报价。',
    ja: '飛馳電気 移動式高圧変電所エンジニアリング部門（担当：Henry）が24時間以内に単線結線図（SLD）、トレーラー軸重計算書、IEC 61850システム構成図および見積書を提出します。',
    es: 'El departamento de ingeniería de subestaciones móviles de Feichi (Líder: Henry) entregará diagramas unifilares, cálculos de distribución de carga en semirremolque, arquitectura IEC 61850 y propuesta comercial en 24 horas.',
    ru: 'Инженерный отдел мобильных подстанций Feichi (Гл. инженер: Henry) подготовит однолинейную схему (SLD), расчет развесовки по осям полуприцепа, архитектуру МЭК 61850 и коммерческое предложение по ГОСТ/СТО Россети в течение 24 часов.',
  },
};
