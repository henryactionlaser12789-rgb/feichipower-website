import type { WhitepaperItem } from './whitepapersData';

export const week22Whitepaper: WhitepaperItem = {
  id: 'week-22',
  week: 22,
  slug: 'smart-vacuum-recloser-and-overhead-distribution-automation-guide',
  category: 'switchgear',
  categoryLabel: {
    en: 'Smart Grid Reclosers & Overhead Automation (10kV–35kV / Реклоузер ПСС / РВА / IEC 62271-111)',
    zh: '智能真空重合器与架空配电自动化系统 (10kV–35kV / Реклоузер ПСС / РВА / IEC 62271-111)',
    ja: 'スマート真空リクローザー・架空配電自動化システム (10kV〜35kV / Реклоузер / IEC 62271-111)',
    es: 'Reconectadores de Vacío Inteligentes y Automatización de Distribución Aérea (10kV a 35kV)',
    ru: 'Вакуумные реклоузеры и пункты секционирования 10-35 кВ (ПСС / РВА / Реклоузер / ГОСТ Р 58087)',
  },
  title: {
    en: '10kV–35kV Outdoor Smart Vacuum Recloser (ПСС / РВА) & Overhead Distribution Automation Dossier: Microprocessor Protection (РЗА/БМРЗ), Fast Fault Isolation (<100ms), Magnetic Actuators, and -50°C Siberian Heavy-Icing Resilience (Benchmarking Tavrida & Lucy Electric)',
    zh: '10kV–35kV 户外智能真空重合器（分段器 / 俄标 Реклоузер ПСС / РВА）与架空配网自动化工程设计指南：双稳态永磁操动机构、微机继电保护测控（РЗА/БМРЗ）、<100ms 快速故障就地自愈与西伯利亚 -50°C 极寒重覆冰防凝露实战（对标 Tavrida Electric 与 Lucy Electric 标杆架构）',
    ja: '10kV〜35kV 屋外用スマート真空リクローザー（自動区分開閉器 / ロシア標記 Реклоузер ПСС）および架空配電自動化エンジニアリングガイド：双安定永久磁石操作機構・マイクロプロセッサ保護（РЗА）・100ms以内高速事故区間自動遮断・極寒-50℃重着氷耐候設計（Tavrida＆Lucy Electricベンチマーク）',
    es: 'Dossier de Ingeniería de Reconectadores de Vacío Inteligentes de 10kV a 35kV (ПСС / РВА) y Automatización de Redes Aéreas: Actuador Magnético Biestable, Relé Microprocesado, Aislamiento Rápido de Fallas (<100ms) y Resistencia a Hielo Ártico a -50°C',
    ru: 'Инженерное руководство по вакуумным реклоузерам 10-35 кВ (ПСС-10/20/35, РВА) и автоматизации распределительных сетей: моностабильный/бистабильный электромагнитный привод, микропроцессорные блоки РЗА (БМРЗ/Сириус), самовосстановление сети (FLISR <100мс) и эксплуатация при -50°C УХЛ1 в условиях сильного гололеда (Бенчмарк Таврида Электрик и Lucy Electric)',
  },
  eyebrow: {
    en: 'SMART GRID OVERHEAD LINE AUTOMATION & VACUUM RECLOSERS (IEC 62271-111 / IEEE C37.60 / ГОСТ Р 58087 / СТО РОССЕТИ)',
    zh: '智能电网架空线路配网自动化与户外真空重合器（IEC 62271-111 / GB/T 11022 / ГОСТ Р 58087 / 俄联邦电网 СТО）',
    ja: 'スマートグリッド架空配電自動化・高圧真空リクローザー（IEC 62271-111 / IEEE C37.60 / GOST R 58087）',
    es: 'AUTOMATIZACIÓN DE REDES AÉREAS Y RECONECTADORES INTELIGENTES (IEC / IEEE / GOST)',
    ru: 'АВТОМАТИЗАЦИЯ РАСПРЕДЕЛИТЕЛЬНЫХ СЕТЕЙ И ВАКУУМНЫЕ РЕКЛОУЗЕРЫ 10-35 кВ (ГОСТ Р 58087 / ГОСТ 15150 УХЛ1 / СТО 56947007)',
  },
  author: {
    en: 'Feichi Smart Grid Automation & Recloser Engineering Division (Lead: Henry)',
    zh: '飞驰电气智能电网配电自动化与重合器工程研究所（技术总工：Henry）',
    ja: '飛馳電気 スマートグリッド配電自動化・リクローザー研究所（チーフ：Henry）',
    es: 'División de Automatización de Redes Inteligentes y Reconectadores Feichi (Líder Técnico: Henry)',
    ru: 'Инженерный отдел автоматизации сетей и вакуумных реклоузеров Feichi (Гл. инженер: Henry)',
  },
  standards: 'IEC 62271-111 / IEEE C37.60 / GB/T 11022-2020 / ГОСТ Р 58087-2018 / ГОСТ 15150-69 (УХЛ1) / СТО 56947007-29.240.10.248-2017',
  readTime: {
    en: '18 min deep technical study (Includes FLISR fault loop algorithm, magnetic actuator kinematics & Siberian -50°C severe icing simulation)',
    zh: '18 分钟深度技术研读（含配网就地分布式自愈 FLISR 逻辑解算、双稳态永磁机构 10 万次机械寿命微分方程与西伯利亚 -50°C 重覆冰耐压热仿真）',
    ja: '18分 専門設計解説（FLISR自律分散型事故復旧ロジック・10万回永久磁石機構動力学解析・極寒-50℃重着氷耐圧熱流体計算）',
    es: '18 min de lectura técnica (Incluye algoritmo de auto-restauración FLISR <100ms, cinemática de actuador magnético y simulación de congelación extrema a -50°C)',
    ru: '18 мин углубленного изучения (включая алгоритм секционирования FLISR, расчет бистабильного электромагнитного привода и работу в гололедных районах при -50°C ГОСТ 15150 УХЛ1)',
  },
  summary: {
    en: 'A comprehensive technical engineering guide for 10kV, 20kV, and 35kV Outdoor Intelligent Vacuum Reclosers (Pole-Mounted Sectionalizing Units / Реклоузер ПСС / РВА). Benchmarking global pioneers Tavrida Electric (Rec series) and Lucy Electric (Scadaflex / Aegis), this dossier analyzes solid-dielectric hydrophobic cycloaliphatic epoxy resin (HCEP) vacuum interrupter poles, bi-stable magnetic actuators with 100,000 mechanical operations, integrated microprocessor protection relays (РЗА / БМРЗ / FPC-600), automated fault location, isolation and service restoration (FLISR <100ms), and Siberian heavy-icing/arctic climate hardening (-50°C ГОСТ 15150 УХЛ1).',
    zh: '全面解析 10kV、20kV 与 35kV 户外柱上智能真空重合器（自动分段器 / 俄标 Реклоузер ПСС / РВА）的严苛工程技术架构。深度对标全球配网自动化领军企业塔夫里达（Tavrida Electric Rec 系列）与英国露西电气（Lucy Electric），系统阐述憎水性环氧树脂（HCEP）固体绝缘真空灭弧极柱、双稳态单线圈永磁操动机构（免维护机械寿命达 10 万次）、全数字化微机继电保护测控终端（兼容俄标 БМРЗ/Сириус 与飞驰 FPC-600）、架空配电网自愈控制算法（FLISR 毫秒级故障自动隔离与非故障区瞬时转供）以及西伯利亚与远东 -50°C 极寒、重覆冰与盐雾环境下的高可靠抗风雪结构设计。',
    ja: '10kV/20kV/35kV柱上設置型スマート真空リクローザー（ロシア規格 Реклоузер ПСС / РВА）の技術設計全書。世界トップのTavrida ElectricおよびLucy Electricをベンチマークし、疎水性エポキシ樹脂（HCEP）固体モールド極柱、10万回メンテナンスフリー永久磁石操作機構、デジタルマイクロプロセッサ保護制御装置（RZA/BMRZ）、配電系統自律復旧アルゴリズム（FLISR <100ms）、およびシベリア-50℃極寒・重着氷環境耐候設計を網羅。',
    es: 'Guía técnica para reconectadores de media tensión de 10kV a 35kV (ПСС / РВА) en postes de distribución aérea. Inspirada en Tavrida Electric y Lucy Electric, analiza polos de aislamiento sólido HCEP hidrofóbico, actuadores magnéticos biestables (100.000 maniobras), relés microprocesados avanzados, algoritmos FLISR para despeje de fallas en menos de 100ms y operación en climas árticos a -50°C bajo normas GOST.',
    ru: 'Полное техническое руководство по вакуумным реклоузерам 10, 20 и 35 кВ (пунктам секционирования столбового типа ПСС-10/20/35, РВА). На основе мирового опыта Таврида Электрик и Lucy Electric подробно рассматриваются твердотельные кремнийорганические полюсы (HCEP), бистабильные электромагнитные приводы с ресурсом 100 000 циклов, микропроцессорные шкафы управления РЗА (БМРЗ, Сириус, FPC-600), алгоритмы децентрализованной автоматики FLISR (<100мс) и климатическое исполнение УХЛ1 (-50°C ~ +45°C) для районов Крайнего Севера и Сибири.',
  },
  sec1Title: {
    en: '1. Primary Arc Quenching & Dielectric Architecture: HCEP Solid Encapsulation & Magnetic Actuators',
    zh: '1. 一次灭弧与固体绝缘架构：憎水性环氧树脂（HCEP）固封极柱与 10 万次双稳态永磁机构',
    ja: '1. 一次消弧・固体絶縁構造：疎水性エポキシ（HCEP）完全モールド極柱＆10万回永久磁石機構',
    es: '1. Arquitectura de Interrupción y Aislamiento Sólido: Polos HCEP y Actuadores Magnéticos Biestables',
    ru: '1. Первичная коммутационная часть: твердотельная изоляция HCEP и электромагнитный привод на 100 000 циклов',
  },
  sec1Text: {
    en: `Overhead distribution lines traverse vast rural, forest, and mountainous corridors exposed to lightning strikes, tree branches, heavy ice coating, and extreme temperatures. Traditional oil or SF6 gas reclosers suffer from oil degradation, gas leakage, and bulky maintenance.

Key Primary Innovations:
• Hydrophobic Cycloaliphatic Epoxy (HCEP) Solid Encapsulation: The vacuum interrupter (VI) and primary current sensors are cast into a monolithic HCEP resin pole. HCEP prevents surface water film formation, suppresses leakage currents by >80%, and eliminates SF6 greenhouse gas completely (GWP=0).
• Bi-Stable Magnetic Actuator (Single Coil / Rare-Earth Permanent Magnets): Features only ONE moving part per phase, eliminating complex mechanical latches, springs, and gears. Delivers over 100,000 full-load mechanical operations without lubrication, maintenance, or adjustments.
• Integrated Voltage and Current Sensors: Rogowski coils and capacitive voltage dividers are embedded directly inside the solid insulation poles, providing 0.2s class metering accuracy across -50°C to +55°C without external iron-core CT/VT weight burdens.`,
    zh: `架空配电线路穿越辽阔的农网、森林及崇山峻岭，常年暴露于雷击过电压、树障碰线、重度冰雪覆冰与极寒极热恶劣工况中。传统油浸式或 SF6 气体充气式重合器存在漏油起火、低温漏气绝缘击穿及机械弹簧机构锈蚀卡涩等严重隐患。

一次系统与绝缘核心创新：
• 憎水性脂环族环氧树脂（HCEP）固体固封极柱：将长寿命陶瓷真空灭弧室（VI）与一体化微型电流/电压传感器整体浇注封装。HCEP 树脂表面具备极强的憎水性（Water Repellent）与憎水迁移性，有效阻止连续导电水膜形成，在高海拔、盐雾与重污秽区漏电流降低 80% 以上，且 100% 无六氟化硫气体（GWP=0）。
• 双稳态永磁操动机构（单线圈/钕铁硼永磁锁扣）：每相仅保留一个运动部件，彻底摒弃了传统断路器中数十个易磨损卡阻的机械脱扣锁钩、齿轮与储能弹簧。实现 10 万次以上无润滑、免维护、长寿命分合闸操作。
• 极柱内置高精度电子式互感器：采用罗氏线圈（Rogowski Coil）与高压容性分压电容直接固封于极柱内部，在 -50°C ~ +55°C 全温区范围内提供 0.2S 级高精度保护与电能计量，彻底摆脱笨重外挂铁芯互感器。`,
    ja: `架空線は雷撃、樹木接触、着氷など過酷な環境に晒されます。飛馳スマートリクローザーは疎水性エポキシ樹脂（HCEP）で真空バルブとセンサーを一体モールドし、SF6ガス全廃（GWP=0）と漏れ電流80%削減を実現。可動部品1点のみの双安定永久磁石操作機構により、10万回メンテナンスフリー動作を保証します。`,
    es: 'Los reconectadores Feichi sustituyen el aceite y el gas SF6 por polos de aislamiento sólido HCEP hidrofóbico. Su actuador magnético biestable cuenta con una sola pieza móvil por fase, garantizando más de 100.000 operaciones mecánicas libres de mantenimiento con sensores Rogowski integrados de clase 0.2s.',
    ru: 'Коммутационный модуль реклоузера выполнен на базе твердой кремнийорганической изоляции HCEP со встроенными вакуумными камерами и датчиками тока/напряжения (класс 0.2S). Моно/бистабильный электромагнитный привод с магнитной фиксацией имеет ресурс 100 000 операций без регулировки и смазки, полностью исключая утечки элегаза.',
  },
  sec2Title: {
    en: '2. Microprocessor Control & Grid Automation: FLISR Algorithmic Self-Healing, BMRZ Relaying & SCADA',
    zh: '2. 微机继电保护与配网自动化：毫秒级就地自愈 FLISR 算法、俄标 БМРЗ/РЗА 兼容与多协议远动通讯',
    ja: '2. デジタル制御＆配電自動化：FLISR事故自律分散復旧・ロシア規格BMRZ保護リレー・広域SCADA',
    es: '2. Control Microprocesado y Automatización: Algoritmo FLISR, Relé BMRZ y Telemetría SCADA',
    ru: '2. Микропроцессорная РЗА и автоматика: алгоритм FLISR, терминалы БМРЗ/Сириус и телемеханика',
  },
  sec2Text: {
    en: `The pole-mounted microprocessor control cabinet (FPC-600 / БМРЗ / Sirius) acts as the autonomous intelligence brain of the recloser:

1. Directional Overcurrent & Sensitive Earth Fault (SEF) Protection:
• Detects high-impedance single-phase ground faults down to 0.5 Amperes, vital for compensated/ungrounded resonant networks prevalent in CIS and Scandinavian grids.
• Programmable up to 4 autonomous reclosing cycles (O-0.1s-CO-1s-CO-1s-CO) to extinguish transient lightning flashovers without permanent outages.

2. Decentralized FLISR Self-Healing Automation:
• Equipped with peer-to-peer fast wireless/fiber communications and built-in voltage-time / loop-automation algorithms. Automatically locates faulted line segments, trips isolation reclosers, and closes tie switches to restore power to healthy segments in < 100 milliseconds.

3. Telemetry & Protocol Compatibility:
• Natively supports ГОСТ Р МЭК 60870-5-104, МЭК 60870-5-101, DNP3.0 over TCP/IP, and IEC 61850 MMS/GOOSE. Includes integrated 4G/5G/NB-IoT cellular modems and satellite transceivers for instant integration into ROSSETI and international SCADA platforms.`,
    zh: `柱上微机测控保护箱（飞驰 FPC-600 / 俄标 БМРЗ / Сириус 兼容型）是重合器的智能化核心大脑：

1. 方向性相间过流与高灵敏小电流接地选线保护（SEF）：
• 具备最低 0.5A 的高阻单相接地故障精准识别能力，完美契合俄罗斯/独联体广泛采用的中性点不接地或消弧线圈补偿电网。
• 支持多达 4 次自主可编程重合闸时序（分 - 0.1s - 合分 - 1s - 合分 - 1s - 合分 - 闭锁），可在瞬间消除 85% 以上由雷击或飞鸟引发的瞬时性金属性短路。

2. 就地自愈与分布式智能配电自动化（FLISR）：
• 搭载电压时间型（Voltage-Time）与故障电流型自愈控制逻辑，在变电站主干线或分支线发生故障时，相邻重合器通过高速点对点无线光纤互联，在 < 100ms 内全自动完成故障区域精准定位、隔离并闭合联络开关转供非故障区负荷。

3. 多规约远动调度与物联网双向通信：
• 原生支持 ГОСТ Р МЭК 60870-5-104、МЭК 60870-5-101、DNP3.0 及 IEC 61850 MMS 规约。内置 4G/5G/NB-IoT 全网通无线通信模块与备用卫星终端，实现与俄联邦电网（Россети）及海外电力调度中心的高可靠遥测、遥信、遥控与遥调（四遥功能）。`,
    ja: `柱上制御盤（FPC-600/BMRZ）は、高感度地絡保護（最小0.5A検出）、最大4回の自動再閉路シーケンス、100ミリ秒以内の自律分散型事故区間分離・健全区間復旧（FLISR）、およびGOST 104/IEC 61850準拠の4G/5G/衛星SCADA通信を標準搭載しています。`,
    es: 'El gabinete de control en poste incorpora relé microprocesado con detección de falla a tierra de alta impedancia (desde 0.5A), secuencia de hasta 4 reconexiones automáticas, algoritmo de auto-restauración FLISR en menos de 100ms y compatibilidad nativa con GOST 104 y DNP3.',
    ru: 'Шкаф управления (ШУ) на базе микропроцессорных блоков БМРЗ/Сириус/FPC-600 обеспечивает: направленную защиту от МФЗ и ОЗЗ (от 0.5 А), до 4 циклов АПВ, децентрализованную автоматику восстановления питания FLISR (<100мс) и передачу телеметрии по протоколам ГОСТ Р МЭК 60870-5-104 / МЭК 61850 через GSM/4G и спутниковые каналы.',
  },
  sec3Title: {
    en: '3. Technical Comparison Matrix: Feichi FPC-REC Smart Recloser vs Tavrida Benchmark vs Traditional Sectionalizer',
    zh: '3. 关键技术参数综合对比：飞驰 FPC-REC 智能真空重合器 vs 塔夫里达 (Tavrida) 标杆 vs 传统油浸/弹簧机构分段器',
    ja: '3. 主要仕様比較表：飛馳 FPC-REC スマートリクローザー vs Tavrida 標幹 vs 従来型油入開閉器',
    es: '3. Matriz Comparativa Técnica: Reconectador Feichi FPC-REC vs Benchmark Tavrida vs Seccionador Convencional',
    ru: '3. Сравнительная матрица характеристик: Вакуумный реклоузер ПСС Feichi vs Таврида Электрик (Rec) vs Традиционный разъединитель',
  },
  tableHeaders: {
    en: ['Technical Specification', 'Feichi FPC-REC Smart Recloser (10-35kV)', 'Tavrida Electric Rec Series Benchmark', 'Traditional Oil/Spring Sectionalizer'],
    zh: ['技术参数与工程指标', '飞驰电气 FPC-REC 智能真空重合器', '塔夫里达 (Tavrida) 标杆智能重合器', '传统油浸/弹簧机构负荷分段器'],
    ja: ['主要仕様・指標', '飛馳 FPC-REC スマートリクローザー', 'Tavrida リクローザー標幹', '従来型油入・バネ開閉器'],
    es: ['Parámetros Técnicos', 'Reconectador Feichi FPC-REC (10-35kV)', 'Benchmark Tavrida Rec Series', 'Seccionador Tradicional en Aceite'],
    ru: ['Технические параметры', 'Вакуумный реклоузер Feichi ПСС-10/35', 'Бенчмарк Таврида Электрик (РВА/TEL)', 'Традиционный масляный секционайзер'],
  },
  tableRows: {
    en: [
      ['Insulation & Dielectric Medium', 'Hydrophobic Epoxy (HCEP) Solid Resin (100% SF6-Free, GWP=0)', 'Solid Polyurethane / Silicone Molded (SF6-Free)', 'Mineral Oil or SF6 Gas (Leakage Hazard)'],
      ['Actuator Mechanism & Life', 'Bi-Stable Magnetic Actuator (100,000 Operations, Maintenance-Free)', 'Magnetic Actuator (30,000 - 100,000 Operations)', 'Mechanical Springs & Gears (2,000 Operations, Oil Grease Required)'],
      ['Fault Self-Healing Time (FLISR)', '< 100 ms (Peer-to-Peer Distributed Automation)', '< 150 ms (Decentralized Recloser Loop)', 'Manual Line Patrol / Hours (Operator Intervention)'],
      ['Cold Climate Rating & Icing', '-50°C to +55°C (ГОСТ 15150 УХЛ1, 20mm Radial Ice Withstand)', '-40°C to +50°C (Standard Winterization)', '-25°C to +40°C (Frequent Cold Mechanism Lockouts)'],
      ['SCADA Protocols & Modems', 'ГОСТ 104, МЭК 61850, DNP3, 4G/5G/Satellite Built-in', 'ГОСТ 104, DNP3, External Cellular Modem Required', 'None or Hardwired Modbus RTU (No Auto-Healing)'],
    ],
    zh: [
      ['绝缘介质与极柱封装形式', '憎水性环氧树脂 (HCEP) 固体固封（100% 无SF6，GWP=0）', '固体聚氨酯/硅橡胶固封（无SF6）', '变压器油或六氟化硫气体（存在漏气漏油隐患）'],
      ['操动机构形式与机械寿命', '双稳态永磁操动机构（10 万次分合闸，全生命周期免维护）', '永磁操动机构（3 万 ~ 10 万次分合闸）', '传统多级弹簧齿轮机构（约 2000 次，需频繁加润滑油）'],
      ['故障就地自愈与隔离速度', '< 100 ms（就地分布式对等自愈隔离）', '< 150 ms（重合器环网自愈）', '数小时（需人工巡线拉闸试送电）'],
      ['极寒环境耐温与重覆冰能力', '-50°C ~ +55°C (ГОСТ 15150 УХЛ1，耐受 20mm 重度覆冰)', '-40°C ~ +50°C (标准耐寒配置)', '-25°C ~ +40°C（极寒下弹簧易脆断拒动）'],
      ['调度自动化规约与无线通信', 'ГОСТ 104、МЭК 61850、DNP3，内置 4G/5G/卫星远动', 'ГОСТ 104、DNP3，需外挂无线电台', '无或简单串口 Modbus（无自愈逻辑）'],
    ],
    ja: [
      ['絶縁媒体・極柱構造', '疎水性エポキシ樹脂（HCEP）完全モールド（SF6フリー）', 'ウレタン/シリコーンモールド（SF6フリー）', '絶縁油またはSF6ガス（漏洩リスクあり）'],
      ['操作機構・機械的寿命', '双安定永久磁石操作機構（10万回メンテナンスフリー）', '永久磁石操作機構（3〜10万回）', '機械式バネ機構（約2000回、定期給油要）'],
      ['事故自律復旧時間 (FLISR)', '< 100 ms（自律分散型即時遮断）', '< 150 ms（リクローザー連携）', '数時間（手動巡回遮断）'],
      ['耐寒性・耐着氷仕様', '-50℃〜+55℃（GOST UHL1、氷厚20mm対応）', '-40℃〜+50℃（標準耐寒）', '-25℃〜+40℃（低温動作不良多発）'],
      ['上位SCADA通信方式', 'GOST 104 / IEC 61850 / DNP3 / 4G・衛星内蔵', 'GOST 104 / DNP3（外付け通信機要）', 'なし、またはModbusメタル配線'],
    ],
    es: [
      ['Medio Aislante y Polos', 'Resina Epoxi Hidrofóbica HCEP (100% Libre de SF6, GWP=0)', 'Poliuretano / Silicona Sólida (Sin SF6)', 'Aceite Mineral o Gas SF6 (Riesgo de Fugas)'],
      ['Mecanismo y Vida Mecánica', 'Actuador Magnético Biestable (100.000 maniobras libres de mant.)', 'Actuador Magnético (30.000 a 100.000 maniobras)', 'Resortes Mecánicos (2.000 maniobras, lubricación frecuente)'],
      ['Tiempo de Auto-Restauración', '< 100 ms (Automatización distribuida punto a punto)', '< 150 ms (Lazo de reconectadores)', 'Horas (Inspección y maniobra manual en campo)'],
      ['Resistencia a Frío y Hielo', '-50°C a +55°C (GOST UHL1, Manguito de hielo de 20 mm)', '-40°C a +50°C (Invernización estándar)', '-25°C a +40°C (Bloqueos mecánicos por congelación)'],
      ['Protocolos SCADA y Módem', 'GOST 104, IEC 61850, DNP3, 4G/5G/Satélite integrado', 'GOST 104, DNP3, Módem celular externo', 'Ninguno o Modbus RTU básico'],
    ],
    ru: [
      ['Изоляционная среда полюсов', 'Кремнийорганическая твердая изоляция HCEP (SF6-Free, ПГП=0)', 'Твердотельный полиуретан / силикон (без SF6)', 'Трансформаторное масло или элегаз SF6 (риск утечки)'],
      ['Тип привода и ресурс', 'Бистабильный электромагнитный привод (100 000 циклов ВО без ТО)', 'Электромагнитный привод (30 000 - 100 000 циклов)', 'Пружинно-моторный привод (2 000 циклов, регулярная смазка)'],
      ['Время самовосстановления FLISR', '< 100 мс (децентрализованная попиринговая автоматика)', '< 150 мс (петлевая схема АВР/АПВ)', 'Несколько часов (выезд оперативно-выездной бригады ОВБ)'],
      ['Климатическое исполнение и лед', '-50°C ... +55°C (ГОСТ 15150 УХЛ1, стенка гололеда до 20 мм)', '-40°C ... +50°C (стандартное исполнение)', '-25°C ... +40°C (загустевание смазки и отказ привода)'],
      ['Протоколы телемеханики и связь', 'ГОСТ Р МЭК 60870-5-104, МЭК 61850, встроенный 4G/GSM/Спутник', 'ГОСТ 104, DNP3, внешний модем', 'Отсутствует или проводной Modbus RTU'],
    ],
  },
  sec4Title: {
    en: '4. Typical Engineering Application Scenarios & Recommendations',
    zh: '4. 典型工程应用场景与交钥匙选型方案',
    ja: '4. 代表的エンジニアリング適用シナリオ＆選定ソリューション',
    es: '4. Escenarios de Aplicación y Soluciones Recomendadas',
    ru: '4. Типовые сценарии применения и готовые решения ПСС',
  },
  scenarios: {
    en: [
      {
        title: 'Rural & Forest Overhead Distribution Feeders (10kV/20kV Siberian Forestry Power)',
        recommend: 'Feichi FPC-REC-10/630-16 Smart Recloser with Directional Earth Fault Protection',
        reason: 'Eliminates 85% of transient branch outages and localizes permanent faults within 100ms without sending repair crews hundreds of miles.',
      },
      {
        title: 'Open-Pit Mining Heavy Haul Power Line (Kuzbass & Norilsk -50°C Heavy-Icing Zone)',
        recommend: 'Feichi Arctic FPC-REC-35/1250-25 with Double-Wall AISI 304 Cabinet and Heated Batteries',
        reason: 'Full GOST 15150 UHL1 certified, withstands 20mm radial ice and continuous heavy quarry blasting shockwaves.',
      },
      {
        title: 'Renewable Solar/Wind Farm Interconnection Sectionalizing (35kV Collector Line)',
        recommend: 'Feichi FPC-REC-35 Smart Recloser with Integrated IEC 61850 MMS Telemetry',
        reason: 'Provides rapid islanding detection, reverse power flow monitoring, and instant utility grid dispatch intertripping.',
      },
    ],
    zh: [
      {
        title: '农网与林区长距离架空配电线路（10kV/20kV 极寒林区与农村电网）',
        recommend: '飞驰电气 FPC-REC-10/630-16 智能真空重合器（含方向性接地保护）',
        reason: '消除 85% 以上由树枝碰线引起的瞬时跳闸停电，在 100ms 内就地自愈隔离，免除运维人员长途跋涉数百公里人工巡线。',
      },
      {
        title: '高寒露天矿山与采矿干线架空配电（库兹巴斯与诺里尔斯克 -50°C 重覆冰矿区）',
        recommend: '飞驰电气 极地型 FPC-REC-35/1250-25（双层 AISI 304 保温箱 + 自加热低温电池）',
        reason: '具备完整 ГОСТ 15150 УХЛ1 极寒认证，耐受 20mm 重度结冰与采矿爆破振动冲击，保障高负荷采掘动力。',
      },
      {
        title: '大型新能源光伏/风电场 35kV 集电线路分段并网（反孤岛与快速防反送）',
        recommend: '飞驰电气 FPC-REC-35 智能重合器（集成 IEC 61850 MMS 与 ГОСТ 104 远动）',
        reason: '具备毫秒级防孤岛解列检测、潮流方向识别与远程电网调度闭锁功能，满足电网高可靠并网要求。',
      },
    ],
    ja: [
      {
        title: '農村部・森林地帯の長距離架空配電系統（10kV/20kV 林業・地方電力）',
        recommend: '飛馳 FPC-REC-10/630-16 スマートリクローザー（方向性地絡保護内蔵）',
        reason: '樹木接触等による瞬時停電の85%を自動復旧し、100ms以内に事故区間を自動分離。長距離巡回保守コストを削減します。',
      },
      {
        title: '極寒露天採掘鉱山・幹線架空給電線（クズバス・ノリリスク -50℃重着氷地域）',
        recommend: '飛馳 極地型 FPC-REC-35/1250-25（SUS304二重断熱盤・自己加熱バッテリー）',
        reason: 'GOST 15150 UHL1適合。氷厚20mmの過酷環境や採掘発破振動に耐え、重要鉱山動力の安定稼働を維持します。',
      },
      {
        title: 'メガソーラー・風力発電所 35kV連系線区分開閉設備（単独運転防止機能付き）',
        recommend: '飛馳 FPC-REC-35 スマートリクローザー（IEC 61850 MMS / GOST 104対応）',
        reason: '高速単独運転検出、潮流方向監視、上位変電所からの瞬時遮断インターロックに対応します。',
      },
    ],
    es: [
      {
        title: 'Líneas Aéreas Rurales y Forestales (10kV/20kV)',
        recommend: 'Reconectador Feichi FPC-REC-10/630-16 con Protección Direccional de Falla a Tierra',
        reason: 'Elimina el 85% de las interrupciones transitorias y aísla fallas permanentes en menos de 100ms sin desplazar brigadas.',
      },
      {
        title: 'Minería a Cielo Abierto en Zonas Árticas (-50°C y Hielo Severo)',
        recommend: 'Feichi FPC-REC-35/1250-25 Ártico con Gabinete AISI 304 de Doble Pared',
        reason: 'Certificado bajo GOST UHL1, soporta manguitos de hielo de 20 mm y vibraciones por voladuras.',
      },
      {
        title: 'Seccionamiento de Líneas Colectoras en Parques Renovables (35kV)',
        recommend: 'Reconectador Feichi FPC-REC-35 con Telemetría Integrada IEC 61850',
        reason: 'Ofrece detección anti-isla rápida, supervisión de flujo inverso e interdisparo con el despacho central.',
      },
    ],
    ru: [
      {
        title: 'Воздушные линии сельских и лесных распределительных сетей 10-20 кВ',
        recommend: 'Вакуумный реклоузер Feichi ПСС-10/630-16 с направленной защитой от ОЗЗ',
        reason: 'Ликвидирует более 85% переходящих замыканий от веток деревьев и локализует устойчивые аварии за 100 мс без выезда бригады ОВБ.',
      },
      {
        title: 'Электроснабжение карьеров и разрезов (Кузбасс, Норильск при -50°C УХЛ1)',
        recommend: 'Арктический реклоузер Feichi ПСС-35/1250-25 в корпусе AISI 304 с обогревом АКБ',
        reason: 'Полная стойкость к гололеду толщиной до 20 мм и сейсмическим ударам от взрывных работ на разрезах.',
      },
      {
        title: 'Секционирование линий выдачи мощности СЭС и ВЭС 35 кВ',
        recommend: 'Реклоузер Feichi ПСС-35 с поддержкой МЭК 61850 и ГОСТ 104',
        reason: 'Мгновенная защита от работы на остров (anti-islanding), контроль направления перетоков мощности и интеграция в SCADA Россетей.',
      },
    ],
  },
  hasCalculator: 'sld',
  ctaTitle: {
    en: 'Download 10kV–35kV Smart Recloser (ПСС / РВА) Technical Catalog & Request GOST Sizing Sheet',
    zh: '获取 10kV–35kV 户外智能真空重合器（分段器 / Реклоузер ПСС）全套工程技术协议与选型问诊表',
    ja: '10kV〜35kVスマート真空リクローザー（Реклоузер）技術仕様書ダウンロードおよび選定表請求',
    es: 'Descargar Catálogo Técnico de Reconectadores Inteligentes de 10kV a 35kV (ПСС / РВА) y Cuestionario GOST',
    ru: 'Скачать техническое описание и опросный лист на вакуумные реклоузеры ПСС-10/20/35 кВ (ГОСТ)',
  },
  ctaDesc: {
    en: 'Feichi Smart Grid Recloser Engineering Division (Lead: Henry) provides single-line diagrams, FLISR coordination settings, pole-mounting installation drawings, and turnkey commercial proposals within 24 hours.',
    zh: '飞驰电气智能电网重合器工程研究所（技术总工/外贸对接人：Henry）将在 24 小时内为您提供完整的配电单线图、FLISR 自愈保护定值整定表、水泥杆安装图纸及交钥匙商务报价。',
    ja: '飛馳電気 リクローザーエンジニアリング部門（担当：Henry）が24時間以内に配電単線結線図、FLISR保護整定計算書、建柱据付図面および見積書を提出します。',
    es: 'El departamento técnico de reconectadores de Feichi (Líder: Henry) entregará diagramas unifilares, ajustes de coordinación FLISR, planos de montaje en poste y propuesta comercial en 24 horas.',
    ru: 'Инженерный отдел вакуумных реклоузеров Feichi (Гл. инженер: Henry) подготовит однолинейную схему, карту уставок РЗА/FLISR, чертежи установки на опору и коммерческое предложение по ГОСТ в течение 24 часов.',
  },
};
