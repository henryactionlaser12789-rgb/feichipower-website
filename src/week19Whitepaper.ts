import type { WhitepaperItem } from './whitepapersData';

export const week19Whitepaper: WhitepaperItem = {
  id: 'week-19',
  week: 19,
  slug: 'utility-scale-solar-pv-and-bess-1500v-mv-skid-substation-guide',
  category: 'substation',
  categoryLabel: {
    en: 'Renewable & BESS MV Skid (1500V Solar / Wind / BESS / ГОСТ КТП-СЭС)',
    zh: '新能源光储 1500V 升压一体舱 / MV Skid (光伏 / 储能 / ГОСТ КТП-СЭС)',
    ja: '再生可能エネルギー・蓄電池 1500V昇圧スキッド変電所 (PV / BESS MV Skid)',
    es: 'Subestación Elevadora MV Skid para Solar Fotovoltaica 1500V y Almacenamiento BESS',
    ru: 'КТП для СЭС, ВЭС и BESS (MV Skid 1500В / IEC 62271-202 / ГОСТ 14695 УХЛ1)',
  },
  title: {
    en: 'Utility-Scale 1500V Solar PV & BESS Medium-Voltage Step-Up Skid Substation Engineering Dossier: Split-Winding Inverter Duty Transformers, Ring Main Unit Protection, and Extreme Climate Hardening (-50°C to +55°C)',
    zh: '集中式光伏与储能 1500V 升压变流一体舱（MV Skid / 预装式升压站）工程设计指南：双分裂低损耗变压器选型、环网柜继电保护协同与高寒极热工况热管理',
    ja: 'メガソーラー＆大型蓄電池（BESS）用 1500V連系 MV Skid 昇圧変電設備設計計算書：二分割巻線変圧器選定・RMU保護協調・極限環境（-50℃〜+55℃）耐候設計',
    es: 'Dossier de Ingeniería de Subestaciones Elevadoras en Skid de Media Tensión para Plantas Solares de 1500V y BESS: Transformadores de Devanados Divididos, Protección con RMU y Diseño para Climas Extremos (-50°C a +55°C)',
    ru: 'Руководство по проектированию блочно-комплектных трансформаторных подстанций (КТП-СЭС/ВЭС / MV Skid) 1500В для солнечных электростанций и накопителей энергии BESS: расщепленные обмотки, релейная защита и сейсмостойкость (IEC 62271-202 / ГОСТ 14695 / ГОСТ 15150 УХЛ1)',
  },
  eyebrow: {
    en: 'UTILITY RENEWABLE INFRASTRUCTURE & BESS INTEGRATION (IEC 62271-202 / IEEE C57.12.00 / ГОСТ 14695 / СТО РОССЕТИ)',
    zh: '大型地面光储电站升压接入与高可靠成套设备（IEC 62271-202 / GB/T 17467 / ГОСТ 14695）',
    ja: 'メガソーラー・大型蓄電所連系システム（IEC 62271-202 / JEC / JIS）',
    es: 'INFRAESTRUCTURA DE ENERGÍAS RENOVABLES Y ALMACENAMIENTO A GRAN ESCALA (IEC / IEEE)',
    ru: 'БЛОЧНО-КОМПЛЕКТНЫЕ ПОДСТАНЦИИ ДЛЯ СЭС, ВЭС И НАКОПИТЕЛЕЙ BESS (ГОСТ 14695 / ГОСТ 15150 УХЛ1 / СТО 56947007)',
  },
  author: {
    en: 'Feichi Renewable Power Systems & Skid Engineering Division (Lead: Henry)',
    zh: '飞驰电气新能源电力系统与集装箱升压站研究所（总工：Henry）',
    ja: '飛馳電気 再生可能エネルギー・変電システム研究所（チーフ：Henry）',
    es: 'División de Ingeniería Renovable y Subestaciones Feichi (Líder Técnico: Henry)',
    ru: 'Инженерный отдел подстанций для ВИЭ и накопителей энергии Feichi (Гл. инженер: Henry)',
  },
  standards: 'IEC 62271-202 / IEEE C57.12.00 / GB/T 17467-2020 / ГОСТ 14695-80 / ГОСТ 15150-69 (УХЛ1) / ГОСТ 32144',
  readTime: {
    en: '19 min deep technical study (Includes dual split-winding short-circuit calculation & thermal CFD sizing)',
    zh: '19 分钟深度技术研读（含双分裂阻抗平衡计算、高次谐波损耗校验与极寒/高温防砂散热风道设计）',
    ja: '19分 専門設計解説（分割巻線短絡インピーダンス計算および極限環境熱流体解析を含む）',
    es: '19 min de lectura técnica (Incluye cálculo de impedancia de devanados divididos y modelado térmico CFD)',
    ru: '19 мин углубленного изучения (включая расчет расщепленных обмоток трансформатора и тепловой расчет ОВиК при -50°C)',
  },
  summary: {
    en: 'A definitive engineering sizing and architecture guide for 1500V DC utility-scale Solar Photovoltaic (PV) power plants and Battery Energy Storage Systems (BESS). Explores the complete Medium-Voltage (MV) Skid integration: 2.5 MVA to 6.3 MVA dual split-winding inverter-duty step-up transformers (0.69kV/0.8kV to 10kV/20kV/35kV), SF6-free and compact vacuum Ring Main Units (RMU), SCADA/RTU telemechanics (IEC 61850 / ГОСТ Р МЭК 60870-5-104), and heavy-duty structural enclosures rated for arctic sub-zero (-50°C УХЛ1) and desert sandstorm (IP55/C5-M) deployments.',
    zh: '专为 1500V 高压直流集中式光伏电站与百兆瓦级电化学储能（BESS）电站打造的升压变流一体成套设备（MV Skid / 箱变）工程设计全案。深度解析 2.5MVA~6.3MVA 双分裂/多分式光储专用低损耗升压变压器（0.69kV/0.8kV 升压至 10kV/20kV/35kV）的电磁解耦与阻抗匹配、中压环保/SF6环网柜（RMU）防反送电及快速弧光保护配置、预装式箱体智能温控微环境（-50°C 极寒 УХЛ1 至 +55°C 极热防风沙 IP55/C5-M）以及满足国家电网/俄联邦 Rosseti 并网标准的 SCADA 远动通信架构。',
    ja: '1500V高圧直流メガソーラーおよび大型系統用蓄電池（BESS）向けに特化した昇圧変電スキッド（MV Skid）の完全エンジニアリングガイド。2.5MVA〜6.3MVA二分割巻線インバータ用変圧器（0.69kV/0.8kVから10kV/35kV昇圧）の高調波耐量設計、環境配慮型RMU開閉装置保護協調、マイナス50℃極寒からプラス55℃砂漠過酷環境対応IP55/C5-M筐体構造を網羅。',
    es: 'Guía integral de diseño e ingeniería para subestaciones en Skid de Media Tensión (MV Skid) en plantas fotovoltaicas de 1500V DC y sistemas de almacenamiento de energía en baterías (BESS). Analiza transformadores de devanados divididos de 2.5 MVA a 6.3 MVA (0.69kV/0.8kV a 10kV/20kV/35kV), celdas de media tensión RMU compactas libres de SF6, telemetría SCADA (IEC 61850) y envolventes preparadas para frío ártico (-50°C) o ambientes desérticos.',
    ru: 'Полное техническое руководство по проектированию и поставке блочно-комплектных трансформаторных подстанций (КТП-СЭС/ВЭС, MV Skid) на напряжение 1500В постоянного тока для солнечных, ветровых электростанций и систем накопления энергии BESS. Рассматриваются подстанции мощностью 2500-6300 кВА с расщепленными обмотками НН (0.69/0.8 кВ в 10/20/35 кВ), компактные КРУ/КСО с вакуумными выключателями, шкафы телемеханики (МЭК 61850 / МЭК 104) и модульные климатические блок-боксы в исполнении УХЛ1 (-50°C ~ +45°C, ГОСТ 15150).',
  },
  sec1Title: {
    en: '1. Topological Architecture: MV Skid vs Containerized E-House vs Traditional Central Inverter Stations',
    zh: '1. 拓扑架构选型：集成式 MV Skid 露天撬装 vs 封闭集装箱式箱变 vs 传统分体配电室',
    ja: '1. システム構成比較：オープン型MV Skid vs コンテナ型E-House vs 従来型建屋設置方式',
    es: '1. Arquitectura Topológica: MV Skid Abierto vs E-House Contenerizado vs Sala Eléctrica Tradicional',
    ru: '1. Топология компоновки: Открытый MV Skid vs Блочно-модульное здание (БМЗ/E-House) vs Традиционное ЗРУ',
  },
  sec1Text: {
    en: `Utility-scale solar PV and BESS projects (50MW to 500MW+) demand optimal capital efficiency (CAPEX), rapid field installation, and high round-trip efficiency (RTE). In 1500V DC systems, the MV step-up substation links central/string PCS inverter clusters directly to the 10kV, 20kV, or 35kV medium-voltage collector grid.

1. Pre-Packaged MV Skid (Open Steel Base Frame with Canopy):
• Integrates the dual split-winding oil-immersed transformer, medium-voltage Ring Main Unit (RMU), low-voltage protection/breaker cabinet, and auxiliary control panel on a monolithic hot-dip galvanized steel skid.
• Reduces civil engineering costs by 35% and allows rapid crane hoisting and plug-and-play cable termination. Ideal for temperate and dry desert regions where natural ventilation minimizes cooling parasitic losses.

2. Fully Enclosed Modular Containerized E-House (БКТП / БМЗ):
• Encloses transformers and switchgear inside a thermal-insulated sandwich container (100mm-150mm PIR/Rockwool insulation, EI 120 fire rating).
• Mandatory for extreme sub-zero Russian/CIS climates (ГОСТ 15150 УХЛ1, down to -50°C) and heavy marine/industrial corrosion zones (ISO 12944 C5-M). Includes automated HVAC and positive pressure ventilation to prevent condensation and snow ingress.

3. Split Central Architecture:
• Employs separate concrete-foundation buildings for switchgear and standalone outdoor transformers. While offering spacious maintenance corridors, it increases on-site cabling labor, footprint, and construction schedules by 2-3 months.`,
    zh: `在大型地面光伏与储能电站（50MW~500MW+）工程中，1500V 直流系统的核心诉求是降低度电成本（LCOE）、缩短施工周期并提升系统全生命周期转换效率。升压站将多个集中式/组串式逆变器或 PCS 升压变流单元汇集并升压至 10kV、20kV 或 35kV 场内集电线路。

1. 预制一体化 MV Skid（露天钢结构撬装底座方案）：
• 将双分裂低损耗油浸变压器、中压环网柜（RMU）、低压进线断路器柜及光伏通信箱（SCADA/RTU）一体化集成安装于热浸锌高强度槽钢底座上，上方配备防雨遮阳顶棚。
• 节省现场土建开挖与浇筑成本达 35%，支持集装箱平板车整体运输与吊装即用。自然通风散热优异，自耗电极低，广泛适用于中东、澳洲、拉美等中高温及荒漠光伏基地。

2. 全封闭集装箱式升压站（БКТП / БМЗ / 预制舱式箱变）：
• 变压器室与中低压开关室置于具备 100mm~150mm 岩棉/聚氨酯高强度阻燃保温夹心舱体（EI 120 防火等级）内。
• 专为俄罗斯、独联体高寒地区（ГОСТ 15150 УХЛ1，耐受 -50°C 暴风雪与冻土）及重度盐雾腐蚀环境（ISO 12944 C5-M）设计。内置防凝露 PTC 智能调温加热系统与微正压防尘风道，彻底隔绝沙尘与冰雪。

3. 传统分体土建式升压站：
• 变压器室与高压配电室采用混凝土现浇建筑。维护通道宽敞但现场施工周期延长 2~3 个月，线缆铺设繁复，已逐步被模块化预装式 Skid 取代。`,
    ja: `1500Vメガソーラーおよび大型蓄電所において、設備投資（CAPEX）の低減と設置工期の短縮は至上命題です。

1. 一体型 MV Skid（オープンスキッド架台方式）：
• 二分割巻線油入変圧器、高圧RMU、低圧遮断器盤、通信制御盤を亜鉛メッキ一体型スキッド上に配置。基礎工事費用を約35%削減し、現場での即時結線・即時稼働を実現します。

2. 完全密閉コンテナ型変電所（E-House / БКТП）：
• 耐火断熱パネル（100〜150mmロックウール、EI 120）を採用し、ロシア・CIS等の極寒環境（-50℃対応 УХЛ1）や重塩害地域に最適です。自動除湿ヒーターと陽圧換気システムを標準搭載。

3. 従来型現場打ち建屋方式：
• 工期が2〜3ヶ月長期化するため、現在ではプレハブ化されたMV Skid方式への移行が主流となっています。`,
    es: `En proyectos solares de 1500V y BESS a gran escala, la subestación elevadora en Skid de media tensión (MV Skid) optimiza el CAPEX y la velocidad de montaje.

1. MV Skid Pre-ensamblado (Estructura de Acero Abierta):
• Integra transformador de devanados divididos, celda RMU de media tensión, gabinete de baja tensión y unidad SCADA en una base única de acero galvanizado en caliente. Reduce el coste de obra civil en un 35%.

2. E-House Modular Contenerizado (БКТП / БМЗ):
• Envolvente cerrada con paneles sándwich aislantes (100-150 mm lana de roca, resistencia al fuego EI 120). Obligatorio para climas árticos (-50°C УХЛ1) o ambientes con alta salinidad y corrosión (C5-M).

3. Sala Eléctrica Tradicional de Obra Civil:
• Requiere mayor tiempo de ejecución y mayor despliegue de cables en campo, siendo reemplazada por soluciones modulares Skid.`,
    ru: `В проектах СЭС и ВЭС на напряжение 1500В постоянного тока выбор конструкции подстанции определяет сроки окупаемости (LCOE) и надежность выдачи мощности:

1. Открытый блочный скид (MV Skid на общей раме):
• Силовой трансформатор с расщепленными обмотками, КРУ/КСО (RMU), шкафы НН и шкаф телемеханики смонтированы на единой горячеоцинкованной раме. Снижает затраты на фундаменты на 35% и обеспечивает быстрый монтаж "plug-and-play".

2. Блочно-комплектная трансформаторная подстанция в БМЗ (БКТП / E-House):
• Размещение оборудования в теплоизолированном блок-модуле из сэндвич-панелей (100-150 мм минвата, огнестойкость EI 120). Исполнение УХЛ1 (-50°C ~ +45°C по ГОСТ 15150) с автоматическим обогревом, вентиляцией и защитой от коррозии C5-M.

3. Традиционное кирпично-бетонное ЗРУ:
• Увеличивает сроки строительно-монтажных работ на объекте на 2-3 месяца и уступает блочно-модульным решениям заводской готовности.`,
  },
  sec2Title: {
    en: '2. Split-Winding Inverter-Duty Transformers: Electromagnetic Decoupling, Harmonic Losses, and Protection Sizing',
    zh: '2. 光储专用双分裂变压器设计：阻抗解耦、高次谐波发热损耗校验与差动微机保护配置',
    ja: '2. インバータ用二分割巻線変压器の理論設計：電磁的非干渉・高調波損失補正・保護協調',
    es: '2. Transformadores para Inversores con Devanados Divididos: Desacoplamiento, Pérdidas por Armónicos y Protección',
    ru: '2. Трансформаторы с расщепленными обмотками: расчет межимпедансного расщепления, гармонических потерь и РЗА',
  },
  sec2Text: {
    en: `1. Dual Split-Winding Sizing & Decoupling Coefficient:
• In high-power solar arrays (e.g. 3.125 MVA or 6.25 MVA blocks), a dual split-winding transformer features two independent low-voltage windings (LV1 & LV2, e.g. 0.8kV each) magnetically coupled to a common high-voltage winding (HV, e.g. 35kV).
• Splitting Factor (K_split = Z_LV1-LV2 / Z_HV-LV): Sized typically at K_split ≥ 3.5 to 4.0 (with Z_LV1-LV2 ≈ 22%-26% and Z_HV-LV ≈ 6.5%-7.5%).
• Benefit: When an inverter or DC-link fault occurs on LV1, the high transfer impedance between LV1 and LV2 suppresses fault current back-feeding and voltage sag on LV2 below 15%, preventing adjacent inverter trip and cascading solar plant shutdown.

2. Inverter Harmonic Factor & K-Factor Eddy Current Loss:
• High-frequency pulse-width modulation (PWM, 3kHz-10kHz) generates continuous current harmonics (5th, 7th, 11th, 13th, and sidebands).
• Transformer winding eddy current loss (P_EC) scales with the square of harmonic frequency:
  P_EC = P_EC_fundamental * Sum[ (I_h / I_1)^2 * h^2 ]
• Feichi employs Nomex / transposed copper conductors (CTC) and K-Factor 7 to K-Factor 13 design margins, limiting hot-spot temperature rise (Delta_T) under 65K at 100% inverter overload capability.

3. Complete Medium-Voltage Protection Package:
• MV Ring Main Unit incorporates a 630A/1250A Vacuum Circuit Breaker (VCB) with multi-function numerical protection relay (50/51 overcurrent, 50N/51N zero-sequence ground fault, 49 thermal overload, 87T transformer differential protection, and 59N zero-sequence overvoltage).
• Integrated pressure relief vents (IAC AFLR 20kA/1s), fast optical arc sensors (<10ms quenching), and lightning surge arresters (Class II / IEC 60099-4).`,
    zh: `1. 双分裂绕组阻抗设计与电磁解耦系数：
• 在 3.125MVA 与 6.25MVA 大容量光伏/储能发电子方阵中，双分裂变压器设置两个电气上相互独立、电磁上高度解耦的低压绕组（LV1 和 LV2，如 0.8kV），分别接入 2 台大功率集中式逆变器或储能 PCS。
• 分裂系数（K_split = Z_LV1-LV2 / Z_HV-LV）：工程上严格控制分裂系数 K_split ≥ 3.5~4.0（其中高中低短路阻抗 Z_HV-LV 约为 6.5%~7.5%，低压两臂间短路阻抗 Z_LV1-LV2 高达 22%~26%）。
• 核心价值：当 LV1 支路逆变器发生短路或直流拉弧故障时，由于两低压臂间超高阻抗，短路电流在 LV2 侧引起的母线电压跌落被严格限制在 15% 以内，保障相邻逆变器免于欠压脱网，彻底杜绝大面积连环停机事故。

2. 逆变器高次谐波发热（K-Factor）与换位导线涡流损耗校验：
• IGBT 高频 PWM 开关（3kHz~10kHz）向变压器注入大量 5、7、11、13 次谐波电流。
• 绕组涡流损耗（P_EC）随谐波频率平方倍增：P_EC = P_EC_基波 * Σ [ (I_h / I_1)^2 * h^2 ]。
• 飞驰电气采用自粘换位导线（CTC）与 Nomex 耐高温绝缘体系，变压器具备 K-Factor 7~13 抗谐波过载裕度，在满负荷及 110% 长期过载工况下热点温升不超过 65K。

3. 环网柜保护与防反送电联锁：
• 配备 630A/1250A 真空断路器（VCB）与微机综合保护装置，集成速断（50）、过流（51）、零序接地（50N/51N）、变压器差动保护（87T）及防逆流过电压保护（59N）。
• 标配超快速弧光传感器（光纤毫秒级测弧，<10ms 切除故障）与重载氧化锌避雷器（MOA），满足 IEC 60099-4 与国网/俄标安全红线。`,
    ja: `1. 二分割巻線のインピーダンス設計：
• 3.125MVA/6.25MVAの大容量変圧器において、2系統の低圧巻線（LV1, LV2）間の短絡インピーダンス（Z_LV1-LV2）を22%〜26%と高く設定（分裂係数 K ≥ 3.5）。LV1側で短絡故障が発生しても、LV2側の電圧降下を15%以下に抑え、健全なパワーコンディショナ（PCS）の運転継続を保証します。

2. 高調波損失（K-Factor）対策：
• PWMスイッチングに起因する高調波電流発熱に対し、転位銅線（CTC）およびK-Factor 7〜13対応設計を採用。巻線ホットスポット温度上昇を65K以下に抑制します。

3. 高圧保護システム：
• 630A/1250A真空遮断器（VCB）と高機能デジタルリレー（50/51/50N/87T）、10ms以内の高速アーク検出センサーを標準装備しています。`,
    es: `1. Dimensionamiento de Devanados Divididos y Coeficiente de Desacoplamiento:
• Para bloques de 3.125 MVA o 6.25 MVA, el transformador cuenta con dos devanados de baja tensión (LV1 y LV2 a 0.8kV) independientes.
• Factor de división (K_split ≥ 3.5 a 4.0, con Z_LV1-LV2 entre 22% y 26%). Una falla en LV1 limita la caída de tensión en LV2 a menos del 15%, evitando desconexiones masivas de inversores.

2. Factor K y Pérdidas por Armónicos de Inversores:
• La modulación PWM genera armónicos significativos. Feichi utiliza conductores transpuestos (CTC) y diseño bajo Factor K (K-7 a K-13), limitando la elevación de temperatura del punto caliente a <65K.

3. Protección de Media Tensión:
• Celda RMU con interruptor en vacío (VCB), relé digital multifunción (50/51/50N/87T), sensores ópticos de arco ultrarrápidos (<10ms) y descargadores de sobretensión ZnO.`,
    ru: `1. Расчет расщепления обмоток НН трансформатора:
• Для блоков СЭС 3125 кВА и 6300 кВА трансформатор имеет две независимые обмотки НН (0.8 кВ каждая), подключенные к инверторам или PCS BESS.
• Коэффициент расщепления K_расщ = Z_НН1-НН2 / Z_ВН-НН ≥ 3.5-4.0 (Z_НН1-НН2 ≈ 22-26%, Z_ВН-НН ≈ 6.5-7.5%). При КЗ на стороне НН1 остаточное напряжение на НН2 сохраняется выше 85%, исключая каскадное отключение смежных инверторов.

2. Учет гармоник ШИМ и коэффициент K-фактора:
• Применение транспонированного провода (CTC) и термостойкой изоляции Nomex обеспечивает устойчивость к гармоникам высших порядков (K-Factor 7-13) и перегрузкам до 110-120%.

3. Комплект защит РЗА и КРУ:
• Вакуумный выключатель 630А/1250А с микропроцессорным блоком защиты (МТЗ 50/51, ЗНЗ 50N/51N, дифференциальная защита 87T, защита от обратной мощности), оптическая дуговая защита (<10 мс) и ОПН (ГОСТ 14693 / ГОСТ 1516.3).`,
  },
  sec3Title: {
    en: '3. Technical Sizing & Specification Matrix: Solar PV & BESS MV Skid Models',
    zh: '3. 光储升压一体站（MV Skid）标准化技术规格与选型矩阵表',
    ja: '3. 太陽光・蓄電池用 MV Skid 標準仕様・技術選定マトリクス',
    es: '3. Matriz de Especificaciones Técnicas y Dimensionamiento: Modelos MV Skid para Solar y BESS',
    ru: '3. Технические характеристики и типовой ряд подстанций КТП-СЭС/ВЭС (MV Skid)',
  },
  tableHeaders: {
    en: ['Technical Parameter', 'Feichi FSKID-2500 (2.5 MVA)', 'Feichi FSKID-3125 (3.125 MVA)', 'Feichi FSKID-5000 (5.0 MVA)', 'Feichi FSKID-6250 (6.25 MVA BESS)'],
    zh: ['技术参数与配置指标', '飞驰 FSKID-2500 (2.5 MVA)', '飞驰 FSKID-3125 (3.125 MVA)', '飞驰 FSKID-5000 (5.0 MVA)', '飞驰 FSKID-6250 (6.25 MVA 光储旗舰)'],
    ja: ['技術仕様・定格項目', '飛馳 FSKID-2500 (2.5 MVA)', '飛馳 FSKID-3125 (3.125 MVA)', '飛馳 FSKID-5000 (5.0 MVA)', '飛馳 FSKID-6250 (6.25 MVA 蓄電対応)'],
    es: ['Parámetro Técnico', 'Feichi FSKID-2500 (2.5 MVA)', 'Feichi FSKID-3125 (3.125 MVA)', 'Feichi FSKID-5000 (5.0 MVA)', 'Feichi FSKID-6250 (6.25 MVA BESS)'],
    ru: ['Технический параметр', 'КТП-СЭС-2500 (2.5 МВА)', 'КТП-СЭС-3125 (3.125 МВА)', 'КТП-СЭС-5000 (5.0 МВА)', 'КТП-СЭС-6250 (6.25 МВА BESS)'],
  },
  tableRows: {
    en: [
      ['Nominal Capacity / Overload', '2500 kVA (Continuous 110% @ 45°C)', '3125 kVA (Continuous 115% @ 45°C)', '5000 kVA (Dual Split, 110% rating)', '6250 kVA (Four-Split / Dual 3.125 MVA)'],
      ['HV Voltage Rating', '10kV, 20kV, 33kV, 35kV (50/60 Hz)', '10kV, 20kV, 34.5kV, 35kV', '20kV, 33kV, 35kV', '33kV, 35kV (IEC / ГОСТ 35 кВ)'],
      ['LV Voltage (Inverter Side)', '2 x 0.69kV or 2 x 0.8kV', '2 x 0.8kV (Dual Split Winding)', '2 x 0.8kV or 4 x 0.69kV', '2 x 0.8kV / 4 x 0.8kV (BESS PCS)'],
      ['Short-Circuit Impedance', 'Z_HV-LV = 6.5% / Z_LV-LV = 22%', 'Z_HV-LV = 7.0% / Z_LV-LV = 24%', 'Z_HV-LV = 7.5% / Z_LV-LV = 25%', 'Z_HV-LV = 8.0% / Z_LV-LV = 26%'],
      ['Transformer Fluid / Core', 'Mineral Oil (IEC 60296) / High Permeability CRGO', 'Ester Fluid / Synthetic Oil (FR3 Option)', 'High-Grade CRGO Silicon Steel / Low Loss', 'Amorphous Alloy Core (Ultra-Low No-Load Loss)'],
      ['MV Switchgear Configuration', 'SF6 / Solid RMU: C-V-F (630A, 25kA/1s)', 'SF6-Free Dry-Air RMU: C-C-V-F (630A)', 'C-C-V (1250A VCB with 87T Diff)', 'Heavy-Duty 35kV Vacuum Breaker + Fast Optical Arc'],
      ['Environmental & Enclosure', 'IP54 / C4 Corrosion / -30°C ~ +50°C', 'IP55 / C5-M Marine / -40°C ~ +55°C', 'IP55 / Sandstorm Barrier / -40°C', 'ГОСТ 15150 УХЛ1 (-50°C ~ +45°C) Thermal E-House'],
      ['SCADA Communication', 'Modbus TCP / RTU (Fiber Ring)', 'IEC 61850 (GOOSE) + IEC 60870-5-104', 'IEC 61850 MMS / dual redundancy', 'МЭК 61850 / МЭК 104 / АИИС КУЭ (Rosseti Ready)'],
    ],
    zh: [
      ['额定容量与过载能力', '2500 kVA（45°C 环境下 110% 长期过载）', '3125 kVA（集中式光伏标准子方阵，115% 过载）', '5000 kVA（双分裂超大方阵，110% 过载）', '6250 kVA（光储融合旗舰款，支持多分接头）'],
      ['高压侧额定电压 (HV)', '10kV, 20kV, 33kV, 35kV (50/60 Hz)', '10kV, 20kV, 34.5kV, 35kV', '20kV, 33kV, 35kV', '33kV, 35kV (符合国网/俄标 35kV)'],
      ['低压侧逆变接入电压 (LV)', '2 x 0.69kV 或 2 x 0.8kV', '2 x 0.8kV (双分裂解耦绕组)', '2 x 0.8kV 或 4 x 0.69kV', '2 x 0.8kV / 4 x 0.8kV (匹配主流 BESS PCS)'],
      ['短路阻抗参数 (Uk%)', '高中低 Z=6.5% / 低压臂间 Z=22%', '高中低 Z=7.0% / 低压臂间 Z=24%', '高中低 Z=7.5% / 低压臂间 Z=25%', '高中低 Z=8.0% / 低压臂间 Z=26%'],
      ['绝缘介质与铁芯材料', '优质环烷基矿物油 (IEC 60296) / 高导磁硅钢', '植物绝缘油 (FR3 可选，高燃点 >300°C)', '高导磁取向硅钢片 / 阶梯叠接超低损耗', '非晶合金铁芯可选 (空载损耗降低 65%)'],
      ['中压环网柜配置 (RMU)', 'SF6/固体绝缘环网柜: C-V-F (630A, 25kA/1s)', '环保干燥空气环网柜: C-C-V-F (630A)', '断路器柜单元 C-C-V (1250A 带差动保护)', '35kV 户外充气柜/真空断路器 + 毫秒级弧光保护'],
      ['结构防护与气候适应', 'IP54 / C4 中度防腐 / -30°C ~ +50°C', 'IP55 / C5-M 重度防腐 / -40°C ~ +55°C', 'IP55 / 迷宫式防风沙导流 / -40°C ~ +55°C', 'ГОСТ 15150 УХЛ1 (-50°C ~ +45°C) 极地特种预制舱'],
      ['远动通信与监控协议', 'Modbus TCP / RTU 光纤环网', 'IEC 61850 (GOOSE) + IEC 60870-5-104', 'IEC 61850 MMS 双网冗余', 'МЭК 61850 / МЭК 104 / АИИС КУЭ (全俄网规范)'],
    ],
    ja: [
      ['定格容量 / 過負荷耐量', '2500 kVA (110% 連続過負荷 @45℃)', '3125 kVA (115% 連続過負荷 @45℃)', '5000 kVA (二分割巻線大容量仕様)', '6250 kVA (蓄電ハイブリッドフラッグシップ)'],
      ['高圧側定格電圧', '10kV, 20kV, 33kV, 35kV (50/60 Hz)', '10kV, 20kV, 34.5kV, 35kV', '20kV, 33kV, 35kV', '33kV, 35kV (系統連系用)'],
      ['低圧側インバータ電圧', '2 x 0.69kV または 2 x 0.8kV', '2 x 0.8kV (二分割独立巻線)', '2 x 0.8kV または 4 x 0.69kV', '2 x 0.8kV / 4 x 0.8kV (BESS対応)'],
      ['短絡インピーダンス', 'Z_HV-LV = 6.5% / Z_LV-LV = 22%', 'Z_HV-LV = 7.0% / Z_LV-LV = 24%', 'Z_HV-LV = 7.5% / Z_LV-LV = 25%', 'Z_HV-LV = 8.0% / Z_LV-LV = 26%'],
      ['絶縁油・鉄芯材料', '高品質鉱油 / 高透磁率ケイ素鋼板', '植物油（FR3難燃仕様対応）', '低損失高磁束方向性電磁鋼板', 'アモルファス合金鉄芯（無負荷損65%低減）'],
      ['高圧RMU開閉装置', 'SF6 / 固体絶縁RMU: 630A 25kA/1s', '環境配慮型ドライエアRMU: 630A', '1250A VCB真空遮断器ユニット', '35kV遮断器＋10ms以内高速アーク保護'],
      ['筐体構造・環境規格', 'IP54 / C4耐食 / -30℃〜+50℃', 'IP55 / C5-M重塩害 / -40℃〜+55℃', 'IP55 / 防砂迷路構造 / -40℃〜+55℃', '極寒耐寒コンテナ（-50℃〜+45℃ УХЛ1）'],
      ['通信プロトコル', 'Modbus TCP / RTU 光ファイバ', 'IEC 61850 (GOOSE) / IEC 104', 'IEC 61850 MMS 冗長ネットワーク', 'IEC 61850 / IEC 60870-5-104'],
    ],
    es: [
      ['Capacidad / Sobrecarga', '2500 kVA (110% continuo @ 45°C)', '3125 kVA (115% continuo @ 45°C)', '5000 kVA (Doble devanado, 110%)', '6250 kVA (Cuádruple devanado BESS)'],
      ['Tensión en Media Tensión', '10kV, 20kV, 33kV, 35kV', '10kV, 20kV, 34.5kV, 35kV', '20kV, 33kV, 35kV', '33kV, 35kV (Normas IEC / GOST)'],
      ['Tensión en Baja Tensión', '2 x 0.69kV o 2 x 0.8kV', '2 x 0.8kV (Devanados divididos)', '2 x 0.8kV o 4 x 0.69kV', '2 x 0.8kV / 4 x 0.8kV (PCS BESS)'],
      ['Impedancia de Cortocircuito', 'Z_AT-BT = 6.5% / Z_BT-BT = 22%', 'Z_AT-BT = 7.0% / Z_BT-BT = 24%', 'Z_AT-BT = 7.5% / Z_BT-BT = 25%', 'Z_AT-BT = 8.0% / Z_BT-BT = 26%'],
      ['Fluido y Núcleo', 'Aceite Mineral / Acero Silicio CRGO', 'Fluido Éster FR3 (Alto punto inflamación)', 'Chapa de Acero CRGO de bajas pérdidas', 'Núcleo Amorfo (Reducción de pérdidas en vacío)'],
      ['Celda de Media Tensión', 'SF6 / Sólida RMU (630A, 25kA/1s)', 'RMU Ecológica con Aire Seco (630A)', 'Interruptor VCB 1250A con diferencial 87T', 'Interruptor en Vacío 35kV + Arco óptico <10ms'],
      ['Grado de Protección', 'IP54 / C4 Anticorrosión / -30°C a +50°C', 'IP55 / C5-M Marina / -40°C a +55°C', 'IP55 / Laberinto Antipolvo y Arena', 'E-House Ártica (-50°C a +45°C УХЛ1)'],
      ['Comunicaciones SCADA', 'Modbus TCP / Anillo de fibra óptica', 'IEC 61850 (GOOSE) / IEC 60870-5-104', 'IEC 61850 MMS Doble redundancia', 'IEC 61850 / IEC 60870-5-104 / Medición comercial'],
    ],
    ru: [
      ['Номинальная мощность', '2500 кВА (перегрузка 110% при +45°C)', '3125 кВА (типовой блок СЭС, перегрузка 115%)', '5000 кВА (двойное расщепление, 110%)', '6250 кВА (флагман СЭС/BESS 1500В)'],
      ['Номинальное напряжение ВН', '10 кВ, 20 кВ, 35 кВ (50 Гц)', '10 кВ, 20 кВ, 35 кВ', '20 кВ, 35 кВ', '35 кВ (ГОСТ 1516.3 / СТО РОССЕТИ)'],
      ['Номинальное напряжение НН', '2 x 0.69 кВ или 2 x 0.8 кВ', '2 x 0.8 кВ (расщепленная обмотка)', '2 x 0.8 кВ или 4 x 0.69 кВ', '2 x 0.8 кВ / 4 x 0.8 кВ (для инверторов/PCS)'],
      ['Напряжение КЗ (Uк, %)', 'Uк ВН-НН = 6.5% / Uк НН-НН = 22%', 'Uк ВН-НН = 7.0% / Uк НН-НН = 24%', 'Uк ВН-НН = 7.5% / Uк НН-НН = 25%', 'Uк ВН-НН = 8.0% / Uк НН-НН = 26%'],
      ['Исполнение трансформатора', 'Герметичный масляный ТМГ / сталь Э330', 'Экологичное растительное масло (FR3)', 'Низколегированная электротехническая сталь', 'Аморфный магнитопровод (потери ХХ снижены на 65%)'],
      ['Распредустройство ВН (КРУ)', 'КСО/КРУ с вакуумным выключателем 630А', 'Экологичное КРУ без SF6 (сухой воздух)', 'КРУ 1250А с защитой 87T и МЭК 61850', 'КРУ 35 кВ 1250А + оптическая дуговая защита <10 мс'],
      ['Климатическое исполнение', 'У1 / IP54 (-30°C ~ +45°C)', 'УХЛ1 / IP55 (-40°C ~ +50°C, C5-M)', 'У1 / IP55 с лабиринтной защитой от пыли', 'УХЛ1 (-50°C ~ +45°C, ГОСТ 15150) БМЗ EI 120'],
      ['Телемеханика и связь', 'Modbus TCP / Оптоволоконное кольцо', 'МЭК 61850 (GOOSE) / МЭК 60870-5-104', 'МЭК 61850 MMS с резервированием', 'МЭК 61850 / ГОСТ Р МЭК 60870-5-104 / АИИС КУЭ'],
    ],
  },
  sec4Title: {
    en: '4. Project Application Scenarios & Engineering Recommendation Guide',
    zh: '4. 典型工程场景选型策略与飞驰电气推荐配置方案',
    ja: '4. プロジェクト適用シナリオ別 エンジニアリング推奨構成',
    es: '4. Escenarios de Aplicación y Recomendaciones de Ingeniería Feichi',
    ru: '4. Типовые сценарии применения и рекомендации по выбору конфигурации КТП-СЭС',
  },
  scenarios: {
    en: [
      {
        title: 'Utility Desert PV Park (1500V DC / High Ambient & Sandstorm)',
        recommend: 'Feichi FSKID-3125 Open MV Skid with Sand-Labyrinth Canopy & K-Factor 11 Transformer',
        reason: 'Features IP55 sandstorm baffling, natural convection cooling without air conditioning parasitic load, ester-filled transformer with 300°C+ fire point, and high splitting factor (Z=24%) preventing inverter interaction under intense solar irradiance.',
      },
      {
        title: 'Cold-Climate Solar / BESS Hybrid Station (Russia & Kazakhstan -50°C)',
        recommend: 'Feichi Arctic UHL1-Certified Containerized 6.25 MVA БКТП-СЭС/ВЭС Substation',
        reason: 'Constructed with 120mm sandwich panels, 09G2S low-temperature alloy chassis, automated PTC floor heating, vacuum switchgear, and full compliance with Rosseti/FGC UES grid connection standards (ГОСТ Р 51321 & ГОСТ 14695).',
      },
      {
        title: 'Fast-Track Industrial Microgrid & 1500V Battery Energy Storage (BESS)',
        recommend: 'Feichi FSKID-5000 Plug-and-Play BESS Step-Up Skid with Dual Fiber SCADA',
        reason: 'Fully pre-commissioned at the factory with integrated four-quadrant bidirectional metering, fast optical arc flash quenching (<10ms), and IEC 61850 GOOSE messaging for sub-cycle response during grid frequency disturbances.',
      },
    ],
    zh: [
      {
        title: '大型荒漠集中式光伏电站（1500V 直流系统 / 极热与沙尘暴环境）',
        recommend: '飞驰 FSKID-3125 户外耐候型 MV Skid 撬装升压站（迷宫式防砂顶棚 + K-Factor 11 耐谐波变压器）',
        reason: '配置 IP55 迷宫导流防沙百叶窗与双低压臂独立绝缘隔板，自然对流散热免去空调高能耗，高分裂阻抗（Z=24%）彻底杜绝强日照瞬变下的逆变器谐振过电压。',
      },
      {
        title: '高寒极地大型光伏与储能电站（俄罗斯/哈萨克斯坦等独联体 -50°C 工况）',
        recommend: '飞驰极地特种 УХЛ1 认证集装箱式 6.25MVA БКТП-СЭС/ВЭС 升压变电站',
        reason: '采用 120mm 阻燃岩棉夹心保温舱体、09Г2С 耐低温结构钢底梁、PTC 自动除湿调温系统及 35kV 固体绝缘/环保环网柜，完全符合俄联邦国家电网（Россети）入网认证与 GOST 标准。',
      },
      {
        title: '工商业微电网与百兆瓦级电化学储能（1500V 集中式 BESS 升压站）',
        recommend: '飞驰 FSKID-5000 即插即用型储能变流升压一体舱（双光纤环网 + IEC 61850 架构）',
        reason: '出厂完成 100% 联调测试，集成四象限双向高精度电能计量、毫秒级超快弧光保护及 GOOSE 纳秒级通信同步，完美匹配调频调峰等高频响应工况。',
      },
    ],
    ja: [
      {
        title: 'メガソーラー砂漠発電所（1500V 直流 / 高温・砂塵環境）',
        recommend: '飛馳 FSKID-3125 屋外形 MV Skid 昇圧スキッド（防砂ルーバー＋K-11変圧器）',
        reason: 'IP55防塵構造と自然対流冷却により空調電力を不要化。高い分割インピーダンス（24%）により日射変動時のインバータ間干渉を防止します。',
      },
      {
        title: '極寒地太陽光・蓄電所（ロシア・CIS -50℃ 耐寒仕様）',
        recommend: '飛馳 極地対応 УХЛ1認証 コンテナ型 6.25MVA БКТП-СЭС 変電所',
        reason: '120mm断熱パネルと耐低温合金鋼を採用し、PTCヒーターによる完全自動温度管理を実現。ロシア送電網規格に完全適合します。',
      },
      {
        title: '大規模系統用蓄電所（1500V BESS 昇圧連系システム）',
        recommend: '飛馳 FSKID-5000 プラグ＆プレイ対応 蓄電用昇圧スキッド',
        reason: '工場出荷前完全テスト済み。双方向高速電力制御、10ms以内アーク保護、IEC 61850通信により瞬時系統周波数調整に対応します。',
      },
    ],
    es: [
      {
        title: 'Plantas Solares en Desiertos (1500V DC / Altas Temperaturas y Polvo)',
        recommend: 'Feichi FSKID-3125 MV Skid con Techo Antipolvo y Transformador Factor K-11',
        reason: 'Protección IP55 contra arena, disipación por convección natural sin consumo de climatización y devanados divididos que eliminan la resonancia entre inversores.',
      },
      {
        title: 'Plantas Solares y BESS en Climas Árticos (-50°C Rusia y Asia Central)',
        recommend: 'Subestación Contenerizada Feichi 6.25 MVA БКТП-СЭС/ВЭС (Certificación УХЛ1)',
        reason: 'Paneles sándwich de 120 mm, acero 09G2S para bajas temperaturas, calefacción PTC inteligente y celdas RMU preparadas para normas GOST y Rosseti.',
      },
      {
        title: 'Microredes Industriales y Almacenamiento en Baterías BESS de 1500V',
        recommend: 'Feichi FSKID-5000 Plug-and-Play BESS Step-Up Skid con SCADA IEC 61850',
        reason: 'Equipo probado en fábrica, medición bidireccional en cuatro cuadrantes, mitigación de arco en <10ms y comunicación de alta velocidad para respuesta en frecuencia.',
      },
    ],
    ru: [
      {
        title: 'Крупные СЭС в пустынных и засушливых регионах (1500В DC / пылевые бури и жара)',
        recommend: 'Открытый MV Skid FSKID-3125 с лабиринтным защитным козырьком и трансформатором K-11',
        reason: 'Степень защиты IP55, естественное охлаждение без затрат на кондиционирование, негорючее масло FR3 и высокое сопротивление расщепления (Z=24%), исключающее взаимное влияние инверторов.',
      },
      {
        title: 'СЭС и ВЭС в условиях Крайнего Севера и Сибири (-50°C / ГОСТ 15150 УХЛ1)',
        recommend: 'БКТП-СЭС-6250 в утепленном блочно-модульном здании БМЗ из панелей 120 мм',
        reason: 'Конструкция из хладостойкой стали 09Г2С, автоматический микроклимат PTC, вакуумное КРУ 35 кВ и полное соответствие техническим требованиям ПАО "Россети" и ГОСТ 14695.',
      },
      {
        title: 'Системы накопления энергии BESS и промышленные микросети 1500В',
        recommend: 'КТП-СЭС-5000 высокой заводской готовности с телемеханикой МЭК 61850 / МЭК 104',
        reason: 'Полная заводская наладка, двунаправленный коммерческий учет АИИС КУЭ, быстродействующая оптическая дуговая защита (<10 мс) для мгновенной реакции на системные аварии.',
      },
    ],
  },
  hasCalculator: 'sld',
  ctaTitle: {
    en: 'Need a Customized 1500V Solar PV / BESS MV Skid CAD Layout or Engineering Sizing?',
    zh: '需要针对您的光伏/储能项目定制 1500V 升压变流一体舱（MV Skid）CAD 图纸与工程算例？',
    ja: '1500V太陽光・BESS昇圧スキッドのCAD図面・単線結線図および選定計算書が必要ですか？',
    es: '¿Requiere un Plano CAD o Dimensionamiento Personalizado para su Proyecto Solar / BESS de 1500V?',
    ru: 'Требуется опросный лист, чертежи КД/Э3 или расчет подстанции КТП-СЭС/BESS 1500В?',
  },
  ctaDesc: {
    en: 'Feichi Electrical provides tailored single-line diagrams (SLD), split-winding short-circuit calculation sheets, and Russian GOST Опросный лист for international EPC contractors and utility developers.',
    zh: '飞驰电气技术工程团队为全球 EPC 总包商与电力业主提供单线图（SLD）、短路电流与阻抗分裂校验书及俄标 Опросный лист 选型支持。',
    ja: '飛馳電気の専門技術チームが、海外EPC企業様向けに単線結線図（SLD）、短絡インピーダンス計算書、ロシアGOST選定表を迅速に提供します。',
    es: 'El equipo de ingeniería de Feichi ofrece diagramas unifilares (SLD), memorias de cálculo de cortocircuito y expedientes técnicos para desarrolladores y contratistas EPC.',
    ru: 'Инженерный отдел Feichi Power предоставит однолинейные схемы (Э3), расчеты токов КЗ, компоновочные чертежи и заполненный Опросный лист по стандартам ГОСТ / МЭК.',
  },
};
