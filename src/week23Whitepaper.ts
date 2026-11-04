import type { WhitepaperItem } from './whitepapersData';

export const week23Whitepaper: WhitepaperItem = {
  id: 'week-23',
  week: 23,
  slug: 'metal-clad-arc-resistant-switchgear-and-ultrafast-optical-protection-guide',
  category: 'switchgear',
  categoryLabel: {
    en: 'Metal-Clad MV Switchgear & Optical Arc Mitigation (10kV–35kV / КРУ-2-10 / КРУ СЭЩ / IEC 62271-200)',
    zh: '金属铠装中压开关柜与超高速光纤电弧保护系统 (10kV–35kV / KYN28A / КРУ-2-10 / IEC 62271-200)',
    ja: '金属閉鎖形高圧スイッチギア・超高速光ファイバアーク保護システム (10kV〜35kV / KYN28 / КРУ / IEC 62271-200)',
    es: 'Celdas Blindadas Metal-Clad de Media Tensión y Mitigación Óptica de Arco (<7ms / 10kV a 35kV)',
    ru: 'Шкафы КРУ 10-35 кВ с дугостойкостью IAC AFLR 31.5кА и быстродействующей оптической дуговой защитой (КРУ-2-10 / КРУ СЭЩ / ГОСТ 14693)',
  },
  title: {
    en: '10kV–35kV Metal-Clad Arc-Resistant Switchgear (KYN28A / КРУ-2-10) & Ultrafast Optical Arc-Flash Mitigation (<7ms): Withdrawable Vacuum Breakers, 4-Chamber Metal Segregation, IAC AFLR 31.5kA/1s, and -50°C Siberian Heavy-Industry Hardening (Benchmarking Siemens NXAIR, Ormazabal & Electroshield Samara)',
    zh: '10kV–35kV 金属铠装移开式开关柜（KYN28A / 俄标 КРУ-2-10 / КРУ СЭЩ）与 <7ms 超高速光纤弧光保护工程设计指南：四舱独立金属隔离、31.5kA/1s 内部燃弧安全泄压（IAC AFLR）、可抽出式真空断路器手车互锁与西伯利亚 -50°C 重工业防凝露实战（对标西门子 NXAIR、Ormazabal 与萨马拉电气标杆架构）',
    ja: '10kV〜35kV 金属引出形配電盤（KYN28A / ロシア標記 КРУ-2-10）および 7ms以内 超高速光ファイバアーク短絡保護エンジニアリングガイド：4室完全金属隔離・IAC AFLR 31.5kA/1s アーク放圧・安全引出式VCBインターロック・極寒-50℃重工業耐候設計（Siemens NXAIR・Ormazabal・Electroshield Samaraベンチマーク）',
    es: 'Dossier de Celdas de Media Tensión Metal-Clad Resistentes al Arco (KYN28A / КРУ-2-10) y Mitigación Óptica de Arco (<7ms): Interruptores Extraíbles en Vacío, 4 Compartimentos Aislados, IAC AFLR 31.5kA/1s y Operación Industrial a -50°C',
    ru: 'Инженерное руководство по комплектным распределительным устройствам КРУ 10-35 кВ (КРУ-2-10, КРУ СЭЩ, KYN28A) с быстродействующей оптической дуговой защитой (<7мс ОВОД/Лайм): 4 изолированных отсека, выкатные вакуумные выключатели, дугостойкость IAC AFLR 31.5кА/1с и эксплуатация в условиях Сибири при -50°C УХЛ1 (Бенчмарк Siemens NXAIR, Ormazabal и Электрощит Самара)',
  },
  eyebrow: {
    en: 'METAL-CLAD ARC-RESISTANT SWITCHGEAR & ULTRAFAST OPTICAL RELAYING (IEC 62271-200 / IEEE C37.20.2 / ГОСТ 14693-90 / ГОСТ 15150 УХЛ1)',
    zh: '金属铠装抗燃弧开关柜与超高速光纤弧光保护系统（IEC 62271-200 / GB/T 3906 / ГОСТ 14693-90 / 俄联邦国家标准 ГОСТ 15150）',
    ja: '金属閉鎖アーク耐性スイッチギア・光ファイバ高速保護システム（IEC 62271-200 / IEEE C37.20.2 / GOST 14693）',
    es: 'CELDAS BLINDADAS METAL-CLAD RESISTENTES AL ARCO Y PROTECCIÓN ÓPTICA (IEC / IEEE / GOST)',
    ru: 'ШКАФЫ КРУ 10-35 кВ, ВЫКАТНЫЕ ЭЛЕМЕНТЫ И ОПТИЧЕСКАЯ ДУГОВАЯ ЗАЩИТА (ГОСТ 14693-90 / ГОСТ 15150-69 УХЛ1 / СТО РОССЕТИ)',
  },
  author: {
    en: 'Feichi High-Voltage Switchgear & Arc Safety Engineering Division (Lead: Henry)',
    zh: '飞驰电气高压成套开关设备与电弧安全工程研究所（技术总工：Henry）',
    ja: '飛馳電気 高圧開閉装置・アーク安全エンジニアリング研究所（チーフ：Henry）',
    es: 'División de Celdas de Media Tensión y Seguridad contra Arco Eléctrico Feichi (Líder Técnico: Henry)',
    ru: 'Инженерный отдел высоковольтных КРУ и дуговой безопасности Feichi (Гл. инженер: Henry)',
  },
  standards: 'IEC 62271-200:2021 / IEEE C37.20.2 / GB/T 3906-2020 / ГОСТ 14693-90 / ГОСТ 15150-69 (УХЛ1/УХЛ3) / ГОСТ Р 55190-2012 / СТО 56947007',
  readTime: {
    en: '19 min deep technical study (Includes arc plasma energy equations, dynamic electromagnetic force calculations & Russian GOST questionnaire breakdown)',
    zh: '19 分钟深度技术研读（含内部燃弧等离子体能量积分微分方程、母线动热稳定电动力数值解算与俄标 Опросный лист 选型实战）',
    ja: '19分 専門設計解説（アークプラズマ熱流体エネルギー方程式・短絡電磁力数値解析・ロシアGOST選定問診票徹底解説）',
    es: '19 min de lectura técnica (Incluye ecuaciones de energía de arco plasma, cálculo de fuerzas electrodinámicas en barras y cuestionario GOST)',
    ru: '19 мин углубленного изучения (включая расчет интеграла энергии дуги, электродинамической стойкости сборных шин при токах КЗ и полный Опросный лист ГОСТ 14693)',
  },
  summary: {
    en: 'A comprehensive technical engineering guide for 10kV, 20kV, and 35kV Air-Insulated Metal-Clad Arc-Resistant Switchgear (KYN28A / КРУ-2-10 / КРУ СЭЩ). Benchmarking international benchmarks Siemens NXAIR, Ormazabal cpg.1, and Electroshield Samara, this dossier analyzes 4-compartment physical metal segregation (LSC2B-PM class), withdrawable vacuum circuit breaker (VCB) cassettes with 5-prevention mechanical interlocks, top-venting gas exhaust channels compliant with IAC AFLR 31.5kA/1s, ultrafast optical point/loop sensor arc protection (<7ms trip command), and Siberian mining/metallurgical climate hardening (-50°C to +40°C ГОСТ 15150 УХЛ1/УХЛ3 with automated PTC anti-condensation heating).',
    zh: '全面解析 10kV、20kV 与 35kV 户内金属铠装移开式封闭开关设备（KYN28A / 俄标 КРУ-2-10 / КРУ СЭЩ 系列）的严苛工程技术架构。深度对标西门子（Siemens NXAIR）、西班牙欧玛嘉宝（Ormazabal cpg.1）与俄罗斯萨马拉电气（Electroshield Samara），系统阐述四舱独立封闭金属隔舱（LSC2B-PM 连续供电运行等级）、抽出式真空断路器手车机械五防联锁机构、顶部定向泄压通道（严格符合 IEC 62271-200 IAC AFLR 31.5kA/1s 燃弧防护试验）、基于点式与环形光纤传感器的超高速电弧光毫秒级跳闸保护（总切除时间 < 7ms），以及西伯利亚与远东露天矿山、重度冶金粉尘及极寒环境（-50°C ГОСТ 15150 УХЛ1/УХЛ3）下的防凝露智能微环境温控方案。',
    ja: '10kV/20kV/35kV 金属閉鎖形引出式高圧スイッチギア（中国規格KYN28A / ロシア規格КРУ-2-10）の技術設計全書。世界最高峰のSiemens NXAIR、Ormazabal、Electroshield Samaraをベンチマークし、4室独立完全金属隔離構造（LSC2B-PM級）、5重機械インターロック付き引出形真空遮断器（VCB）、頂部放圧ダクト（IAC AFLR 31.5kA/1s適合）、超高速光ファイバアーク短絡保護（トリップ指令時間 < 7ms）、およびシベリア鉱山・重工業極寒環境（-50℃ GOST UHL1）耐候PTC結露防止設計を網羅。',
    es: 'Guía técnica para celdas blindadas de media tensión de 10kV a 35kV (KYN28A / КРУ-2-10). Inspirada en Siemens NXAIR, Ormazabal y Electroshield Samara, analiza la segregación metálica en 4 compartimentos (LSC2B-PM), carros extraíbles con enclavamientos de seguridad mecánicos, ductos de despresurización IAC AFLR 31.5kA/1s, protección ultrarrápida contra arco óptico en menos de 7ms y adaptación para minería siberiana a -50°C bajo normas GOST 14693.',
    ru: 'Полное инженерное руководство по комплектным распределительным устройствам КРУ 10, 20 и 35 кВ (КРУ-2-10, КРУ СЭЩ-59/70, KYN28A). На основе передового опыта Siemens NXAIR, Ormazabal и Электрощит Самара подробно рассматриваются: 4 изолированных металлическими перегородками отсека (LSC2B-PM), выкатные вакуумные элементы с механическими блокировками, клапаны сброса давления дуги IAC AFLR 31.5кА/1с, оптическая дуговая защита ОВОД/Лайм (<7мс) и климатическое исполнение УХЛ1/УХЛ3 (-50°C ~ +40°C ГОСТ 15150) с системой антиконденсатного подогрева.',
  },
  sec1Title: {
    en: '1. Metal-Clad Structural Topology & Arc Containment: 4-Compartment Segregation & IAC AFLR 31.5kA',
    zh: '1. 金属铠装结构拓扑与内部燃弧安全泄压：四舱独立金属隔离、LSC2B 运行等级与 IAC AFLR 31.5kA/1s',
    ja: '1. 金属閉鎖構造トポロジー＆アーク放圧安全：4室完全独立隔離・LSC2B級＆IAC AFLR 31.5kA/1s',
    es: '1. Topología Metal-Clad y Contención de Arco: 4 Compartimentos Aislados, LSC2B y IAC AFLR 31.5kA',
    ru: '1. Архитектура шкафа КРУ и дугостойкость: 4 изолированных отсека (LSC2B-PM) и стойкость IAC AFLR 31.5кА/1с',
  },
  sec1Text: {
    en: `In heavy industrial facilities, substations, and power plants, internal arc faults represent the most catastrophic hazard. Feichi KYN28A / КРУ-2-10 switchgear adopts a rigorous 4-compartment metal-clad topology:

Structural Innovations & Arc Safety:
• 4 Independent Physical Metal Compartments (LSC2B-PM Class): Busbar chamber, circuit breaker cassette chamber, cable connection chamber, and low-voltage control instrument chamber are fully segregated by 2.0mm–2.5mm Al-Zn coated (Galvalume) steel plates. Even with the breaker withdrawn for maintenance, the busbar and cable chambers remain energized and fully safe to touch (IP4X external / IP2X internal shutters).
• Top-Venting Flap Ducting (IAC AFLR 31.5kA/1s): Each high-voltage compartment features autonomous pressure relief flaps with gas-expansion channels. When an internal fault occurs, pressure waves open the flaps within 10–15ms, directing hot ionized plasma upward and away from front, lateral, and rear operating corridors per IEC 62271-200.
• High-Precision CNC Bending & Riveted Shell: Constructed without continuous thermal welding, eliminating structural thermal stress and warping while ensuring high electrodynamic withstand against short-circuit forces ($I_p \\ge 80\\text{kA}$).`,
    zh: `在重工业厂矿、区域升压站及大型火电/核电辅机系统中，中压开关柜内部燃弧短路是最具破坏性的电气灾难。飞驰电气 KYN28A / КРУ-2-10 严格采用四舱金属封闭铠装拓扑：

核心结构与燃弧安全创新：
• 四舱完全独立金属隔绝（LSC2B-PM 级连续供电服务等级）：母线室、断路器手车室、电缆出线室与低压微机仪表室通过 2.0mm~2.5mm 敷铝锌板经数控高精度折弯后拉铆拼接完全隔离。即使在断路器检修抽出时，主母线室与出线电缆室仍可保持带电安全运行，自动金属活门（Shutters）可靠闭锁，外部防护等级 IP4X，内部隔室间防护 IP2X。
• 顶部定向压力释放通道（IAC AFLR 31.5kA/1s）：三大高压舱室顶部均设有独立弹簧铰链式泄压板与排气阻火通道。发生内部燃弧闪络时，气压峰值在 10~15ms 内顶开泄压阀，将高温游离等离子气体垂直导向柜顶上方泄压通道，确保正面、侧面及背面操作人员绝对生命安全。
• 无热应力全拉铆结构：柜体采用进口高强度覆铝锌钢板多次多折折边工艺，全螺栓螺母与高强度航空抽芯铆钉装配，彻底杜绝焊接热应力变形，机械尺寸公差 $\\le 0.5\\text{mm}$，保障手车滑轨万次推入拔出顺畅自如。`,
    ja: `重工業や発電所において、スイッチギア内部のアーク短絡事故は致命的危険を伴います。飛馳 KYN28A / КРУ-2-10 は4室完全金属隔離構造を採用。母線室・遮断器室・ケーブル室・低圧制御室を2.0〜2.5mmガルバリウム鋼板で完全分離（LSC2B-PM適合）。頂部放圧フラップによりアークプラズマを上方に逃がし、IAC AFLR 31.5kA/1s安全基準を完全満たします。`,
    es: 'Las celdas Feichi KYN28A / КРУ-2-10 cuentan con 4 compartimentos metálicos independientes (barras, interruptor, cables y control BT) con clasificación LSC2B-PM. Disponen de flaps de alivio de presión superior ensayados bajo IAC AFLR 31.5kA/1s, canalizando los gases calientes lejos del personal operador con estructura remachada de acero Al-Zn de alta rigidez.',
    ru: 'Шкафы КРУ серии КРУ-2-10 / КРУ СЭЩ / KYN28A выполнены по схеме с 4 изолированными отсеками (LSC2B-PM): сборных шин, выкатного элемента, кабельных присоединений и релейного шкафа. Листы алюмоцинка 2.0-2.5 мм и клапаны сброса давления обеспечивают локализационную способность при внутреннем КЗ IAC AFLR 31.5 кА/1с по ГОСТ 14693 и МЭК 62271-200.',
  },
  sec2Title: {
    en: '2. Ultrafast Optical Arc Protection & Safety Interlocks: <7ms Optical Relaying & 5-Prevention Mechanism',
    zh: '2. 超高速光纤弧光保护与机械防误五防：<7ms 毫秒级全切除与高精度机械程序互锁',
    ja: '2. 超高速光ファイバアーク保護＆機械的5重インターロック：7ms以内遮断＆高精度誤操作防止',
    es: '2. Protección Óptica Ultrarrápida (<7ms) y Enclavamientos Mecánicos de Seguridad',
    ru: '2. Быстродействующая оптическая дуговая защита (<7мс) и система 5 механических блокировок',
  },
  sec2Text: {
    en: `Arc flash severity is directly proportional to arc duration ($E = \\int u(t) i(t) dt$). Traditional overcurrent relays take 100–300ms, causing severe switchgear destruction.

Ultrafast Protection & Interlock Architecture:
1. Dual-Criterion Ultrafast Optical Protection (<7ms Total Clearance):
• Employs point-type optical sensors in breaker/busbar/cable chambers combined with loop-type radial fiber-optic detectors.
• Uses dual criteria: Light sensor flash + phase overcurrent instant pickup ($I > 1.2 I_n$). The trip pulse is issued within 1–2ms; combined with Feichi vacuum breakers (35–45ms opening time), total arc clearing time is restricted to under 45ms (or <7ms when paired with fast vacuum commutators / pyrotechnic limiters), reducing arc energy by over 80%.

2. Mandatory 5-Prevention Mechanical Interlocks (ГОСТ 12.2.007.4):
• Prevents moving the circuit breaker truck while closed.
• Prevents closing the circuit breaker when the truck is in test/service transition.
• Prevents closing the earthing switch when the breaker is energized.
• Prevents closing the breaker truck when the earthing switch is closed.
• Prevents accidental entry into energized cable/busbar compartments via interlocking shutter padlocks.`,
    zh: `电弧闪络的破坏力与燃弧时间呈指数级正相关（电弧热能量积分公式 $E = \\int_0^T u_{\\text{arc}}(t) \\cdot i_{\\text{fault}}(t) dt$）。传统微机变压器或过流保护动作延时通常在 100~300ms，足以炸毁整列开关柜。

超高速保护与机械安全联锁体系：
1. 双判据超高速光纤弧光保护系统（总动作切除时间 $\\le 7\\text{ms}$）：
• 在断路器手车室、母线室与电缆室关键易燃弧节点布置高灵敏度广角点式光纤探头与环形光纤传感器。
• 采用“弧光强度突变 + 进线相电流瞬间越限增量（$\\Delta I > 1.2 I_n$）”双重物理判据。主保护在 1~2ms 内发出跳闸脉冲，配合飞驰固封真空断路器实现超高速跳闸，将总燃弧时间彻底压缩在电弧破坏能量阈值以下，柜体机械结构无损率达 99% 以上。

2. 强制性机械程序五防联锁机构（符合 GB 3906 与 ГОСТ 12.2.007.4）：
• 防止带负荷推拉断路器手车（分闸后手车摇把方可解锁进入工作位/试验位）。
• 防止断路器手车在非定位锁定状态下合闸。
• 防止带电合接地刀闸（出线侧带电传感器配合高压带电闭锁装置实现强制电磁+机械互锁）。
• 防止接地刀闸在合闸接地状态下推入手车送电。
• 防止误入带电间隔（电缆室与母线室柜门与接地开关联动，非接地状态机械死锁严禁开门）。`,
    ja: `アーク短絡の被害は継続時間に比例します。飛馳 КРУ-2-10 は点式・ループ光ファイバアークセンサーと相電流過電流の二重判定により、1〜2msでトリップ信号を出力。全体遮断時間を極小化し配電盤の溶損を防止します。さらに誤操作を完全に排除する5重の強制機械インターロック（GOST 12.2.007.4準拠）を標準装備しています。`,
    es: 'La protección contra arco óptico combina sensores puntuales de fibra en barras y cables con detección de sobrecorriente instantánea, emitiendo el disparo en menos de 2ms. Cuenta con 5 enclavamientos mecánicos obligatorios que impiden maniobras erróneas de carros, seccionadores y cuchillas de puesta a tierra.',
    ru: 'Оптическая дуговая защита ОВОД/Лайм/FPC-ARC с датчиками в отсеках шин, выключателя и кабелей срабатывает по критерию «Вспышка + Ток КЗ» за 1-2 мс (полное отключение <7мс со сверхбыстрым приводом). Предусмотрена надежная система 5 механических блокировок по ГОСТ 12.2.007.4, исключающая любые ошибочные действия персонала.',
  },
  sec3Title: {
    en: '3. Technical Comparison Matrix: Feichi KYN28/КРУ-2-10 vs Siemens NXAIR/Ormazabal Benchmark vs Legacy AIS Cubicles',
    zh: '3. 关键技术参数综合对比：飞驰 KYN28A/КРУ-2-10 金属铠装柜 vs 西门子 NXAIR/Ormazabal 标杆 vs 传统固定式非抗弧开关柜',
    ja: '3. 主要仕様比較表：飛馳 KYN28/КРУ-2-10 金属閉鎖盤 vs Siemens NXAIR/Ormazabal 標幹 vs 従来型固定式非耐アーク盤',
    es: '3. Matriz Comparativa Técnica: Feichi KYN28/КРУ-2-10 vs Benchmark Siemens NXAIR/Ormazabal vs Celdas AIS Convencionales',
    ru: '3. Сравнительная матрица характеристик: Шкафы КРУ Feichi КРУ-2-10/KYN28 vs Siemens NXAIR/Ormazabal vs Устаревшие ячейки КСО/КРУН',
  },
  tableHeaders: {
    en: ['Technical Specification', 'Feichi KYN28A / КРУ-2-10 Arc-Resistant MV Switchgear', 'Siemens NXAIR / Ormazabal cpg.1 Benchmark', 'Legacy Non-Arc-Resistant Fixed Switchgear'],
    zh: ['技术参数与工程指标', '飞驰电气 KYN28A / КРУ-2-10 抗燃弧金属铠装柜', '西门子 NXAIR / Ormazabal cpg.1 国际标杆', '传统非抗弧固定式开关柜（旧式 KSO/GG-1A）'],
    ja: ['主要仕様・指標', '飛馳 KYN28A / КРУ-2-10 アーク耐性金属閉鎖盤', 'Siemens NXAIR / Ormazabal cpg.1 標幹盤', '従来型非耐アーク固定式配電盤'],
    es: ['Parámetros Técnicos', 'Feichi KYN28A / КРУ-2-10 Metal-Clad Resistente al Arco', 'Benchmark Siemens NXAIR / Ormazabal', 'Celdas Fijas Convencionales sin IAC'],
    ru: ['Технические параметры', 'Шкафы КРУ Feichi КРУ-2-10 / KYN28A (УХЛ1/УХЛ3)', 'Бенчмарк Siemens NXAIR / Ormazabal', 'Устаревшие ячейки КСО-298 / КРУН (без IAC)'],
  },
  tableRows: {
    en: [
      ['Internal Arc Classification (IAC)', 'IAC AFLR 31.5kA / 1s (IEC 62271-200 & ГОСТ 14693 Verified)', 'IAC AFLR 31.5kA / 1s - 40kA / 1s', 'No IAC Rating / Explodes into Operator Corridor'],
      ['Arc Protection Tripping Speed', '< 7 ms (Ultrafast Optical Fiber + Instant Overcurrent)', '< 10 ms (Optical Protection System)', '150 - 300 ms (Standard Time-Delay Overcurrent Relay)'],
      ['Enclosure Metal Segregation', '4 Independent Metal Compartments (LSC2B-PM, Galvalume Plate)', '4 Independent Metal Compartments (LSC2B-PM)', 'Single Shared Compartment (LSC1 Class / No Barrier)'],
      ['Operating Temperature & Anti-Dew', '-50°C to +40°C (ГОСТ 15150 УХЛ1/УХЛ3, Auto-PTC Heating)', '-40°C to +40°C (Standard Industrial Grade)', '-10°C to +40°C (High Flashover Risk from Condensation)'],
      ['Vacuum Circuit Breaker Cassette', 'Withdrawable Embedded Pole VCB (M2/E2/C2 Class, 30,000 Ops)', 'Withdrawable Embedded Pole VCB (M2/E2/C2 Class)', 'Fixed Oil/Air Breaker (Frequent Contacts Replacement)'],
    ],
    zh: [
      ['内部燃弧耐受等级 (IAC 试验)', 'IAC AFLR 31.5kA / 1s（符合 IEC 62271-200 与 ГОСТ 14693）', 'IAC AFLR 31.5kA / 1s ~ 40kA / 1s', '无燃弧分级（燃弧时外壳直接炸裂伤人）'],
      ['电弧光主保护动作切除速度', '< 7 ms（超高速光纤传感器 + 增量相电流双判据）', '< 10 ms（光电弧光保护系统）', '150 ~ 300 ms（依靠后备过流时限动作，柜体多已烧毁）'],
      ['金属隔室独立隔离结构', '四舱完全物理金属隔绝（LSC2B-PM 级，敷铝锌防腐板）', '四舱独立金属隔绝（LSC2B-PM 级）', '单舱或不完全隔离（LSC1 级，手车检修母线全停）'],
      ['极寒环境耐温与防凝露温控', '-50°C ~ +40°C (ГОСТ 15150 УХЛ1/УХЛ3，PTC 自适应加热)', '-40°C ~ +40°C（标准工业耐温等级）', '-10°C ~ +40°C（低温潮湿极易发生绝缘子沿面闪络）'],
      ['断路器形式与机械电寿命', '抽出式固封极柱真空断路器（M2/E2/C2 级，3 万次寿命）', '抽出式真空断路器（M2/E2/C2 级）', '固定式少油/压气式开关（电寿命短，维护繁琐）'],
    ],
    ja: [
      ['内部アーク試験分類 (IAC)', 'IAC AFLR 31.5kA / 1s（IEC 62271-200 / GOST 14693適合）', 'IAC AFLR 31.5kA / 1s 〜 40kA / 1s', '耐アーク規格なし（短絡時に盤扉飛散リスク）'],
      ['アーク保護遮断指令速度', '< 7 ms（超高速光ファイバ＋瞬時過電流）', '< 10 ms（光検出保護）', '150〜300 ms（限時過電流継電器動作遅延）'],
      ['金属隔離構造・運用連続性', '4室完全独立金属隔離（LSC2B-PM級、アルミ亜鉛メッキ鋼板）', '4室独立金属隔離（LSC2B-PM級）', '単一共有室（LSC1級、遮断器点検時に全停電要）'],
      ['極寒動作保証・防露加熱', '-50℃〜+40℃（GOST UHL1/UHL3適合、PTC自動ヒーター）', '-40℃〜+40℃（標準耐寒）', '-10℃〜+40℃（結露による沿面放電多発）'],
      ['遮断器構造・機械的耐久性', '引出形固封真空遮断器（M2/E2/C2級、3万回耐久）', '引出形真空遮断器（M2/E2/C2級）', '固定形油遮断器（頻繁な接点保守要）'],
    ],
    es: [
      ['Clasificación de Arco Interno (IAC)', 'IAC AFLR 31.5kA / 1s (IEC 62271-200 y GOST 14693)', 'IAC AFLR 31.5kA / 1s a 40kA / 1s', 'Sin clasificación IAC (Riesgo de explosión abierta)'],
      ['Velocidad de Disparo Óptico', '< 7 ms (Fibra óptica ultrarrápida + sobrecorriente)', '< 10 ms (Sistema de protección óptica)', '150 a 300 ms (Relé de sobrecorriente convencional)'],
      ['Segregación de Compartimentos', '4 Compartimentos Metálicos Aislados (LSC2B-PM)', '4 Compartimentos Metálicos Aislados (LSC2B-PM)', 'Compartimento Único Compartido (LSC1)'],
      ['Rango de Temperatura y Calefacción', '-50°C a +40°C (GOST UHL1/UHL3, Calefactor PTC inteligente)', '-40°C a +40°C (Grado industrial estándar)', '-10°C a +40°C (Fallas frecuentes por condensación)'],
      ['Tipo de Interruptor de Vacío', 'Carro Extraíble con Polos Embebidos (M2/E2/C2, 30.000 maniobras)', 'Carro Extraíble en Vacío (M2/E2/C2)', 'Interruptor Fijo en Aceite (Mantenimiento continuo)'],
    ],
    ru: [
      ['Стойкость к внутренней дуге (IAC)', 'IAC AFLR 31.5 кА / 1 с (ГОСТ 14693-90 и МЭК 62271-200)', 'IAC AFLR 31.5 кА / 1 с ... 40 кА / 1 с', 'Без дуговой стойкости (разрушение корпуса в коридор обслуживания)'],
      ['Быстродействие дуговой защиты', '< 7 мс (Оптические датчики ОВОД + датчик тока КЗ)', '< 10 мс (Оптическая система РЗА)', '150 - 300 мс (Традиционная МТЗ с выдержкой времени)'],
      ['Металлическое разделение отсеков', '4 изолированных отсека (LSC2B-PM, листы алюмоцинка)', '4 изолированных отсека (LSC2B-PM)', 'Общий объем без перегородок (класс LSC1)'],
      ['Климатическое исполнение и обогрев', '-50°C ... +40°C (ГОСТ 15150 УХЛ1/УХЛ3, автоматический PTC обогрев)', '-40°C ... +40°C (стандартное исполнение)', '-10°C ... +40°C (высокий риск перекрытия по росе)'],
      ['Исполнение выключателя', 'Выкатной элемент с литыми полюсами (M2/E2/C2, 30 000 циклов ВО)', 'Выкатной элемент в вакууме (M2/E2/C2)', 'Стационарный масляный/воздушный выключатель'],
    ],
  },
  sec4Title: {
    en: '4. Industrial Deployment Scenarios & Russian Standard Опросный лист (Design Institute Questionnaire)',
    zh: '4. 典型工程场景选型推荐与俄罗斯主流设计院《Опросный лист》（选型问卷）实战拆解',
    ja: '4. 産業別エンジニアリング適用事例およびロシア設計院標準選定問診票（Опросный лист）',
    es: '4. Escenarios de Aplicación Industrial y Cuestionario Estándar Ruso «Опросный лист»',
    ru: '4. Типовые проектные решения и заполнение Опросного листа по ГОСТ 14693',
  },
  scenarios: {
    en: [
      {
        title: 'Heavy Metallurgical & Electric Arc Furnace Ingot Plants (Norilsk & Magnitogorsk 10kV Feeder)',
        recommend: 'Feichi KYN28A-24 / КРУ-2-10 (3150A / 40kA) with Optical Arc Protection & Water-Cooled Bus Ducts',
        reason: 'Handles continuous high-load fluctuations, extreme harmonic distortion, and trips severe busbar arc flashovers in <7ms without melting copper busbars.',
      },
      {
        title: 'Siberian Open-Pit Coal & Gold Mining Processing Plants (-50°C Heavy Dust & Vibration Zone)',
        recommend: 'Feichi Arctic КРУ СЭЩ-59/70 (1250A / 31.5kA) with IP4X Galvalume Enclosure & Heated Relay Box',
        reason: 'Certified under GOST 15150 УХЛ1/УХЛ3 with automated humidity-controlled PTC heating elements to prevent insulation flashovers under Arctic thawing.',
      },
      {
        title: 'Thermal & Nuclear Power Plant Auxiliary Distribution (6kV/10kV Station Service Board)',
        recommend: 'Feichi KYN28A-12 Switchgear with Dual-Source High-Speed Automatic Bus Transfer (ATS <50ms)',
        reason: 'Delivers LSC2B-PM continuous service availability, allowing hot-swapping breaker trucks while station pumps and fans run uninterrupted.',
      },
    ],
    zh: [
      {
        title: '大型冶金电弧炉与重度重工业冶炼厂配电（诺里尔斯克与马钢 10kV 进线与变压器出线柜）',
        recommend: '飞驰电气 KYN28A-24 / КРУ-2-10 重型高压开关柜（3150A / 40kA，配超高速光纤弧光保护）',
        reason: '经受电弧炉频繁分合冲击与高次谐波振荡，在发生短路闪络时 <7ms 瞬时跳闸隔离，彻底保护昂贵铜母线系统不受高温熔毁。',
      },
      {
        title: '西伯利亚露天煤矿与选矿厂重粉尘极寒配电所（库兹巴斯 -50°C 严寒矿山洗选车间）',
        recommend: '飞驰电气 极地型 КРУ СЭЩ-59/70（1250A / 31.5kA，IP4X 覆铝锌防腐柜体 + 智能加热控温）',
        reason: '全面通过 ГОСТ 15150-69 УХЛ1/УХЛ3 极寒型式试验，配备温湿度自适应 PTC 加热除湿回路，杜绝季节冻融交替时的绝缘子凝露闪络。',
      },
      {
        title: '大型火电厂与核电站厂用电 6kV/10kV 高可靠辅机配电（高要求连续供电厂用电系统）',
        recommend: '飞驰电气 KYN28A-12 铠装柜（配微机厂用电快切装置 ATS < 50ms 与全数字 IEC 61850 站控）',
        reason: '满足 LSC2B-PM 最高级别连续供电服务等级，支持在线检修手车热插拔，确保锅炉给水泵与主通风机动力全天候不间断。',
      },
    ],
    ja: [
      {
        title: '重工業・製鉄所アーク炉用高圧給電設備（10kV 大容量受変電盤）',
        recommend: '飛馳 KYN28A-24 / КРУ-2-10（3150A / 40kA、光アーク高速保護内蔵）',
        reason: '頻繁な開閉サージや高調波歪みに耐え、短絡事故発生時は7ms以内に瞬時遮断。母線バーの溶損を確実に防止します。',
      },
      {
        title: 'シベリア露天鉱山・選鉱プラント（-50℃極寒・粉塵環境）',
        recommend: '飛馳 極地型 КРУ СЭЩ（1250A / 31.5kA、IP4Xガルバリウム防錆構造・PTC防湿ヒーター）',
        reason: 'GOST 15150 UHL1/UHL3適合。温度・湿度センサー連動ヒーターにより、極寒凍結や融雪時の絶縁沿面放電を完全防止します。',
      },
      {
        title: '火力・原子力発電所 所内高圧配電設備（6kV/10kV 高信頼性連続給電盤）',
        recommend: '飛馳 KYN28A-12（高速母線切替装置ATS <50ms＆IEC 61850完全準拠）',
        reason: 'LSC2B-PM高可用性設計により、主補機給電を停止することなく遮断器ユニットの保守点検が可能です。',
      },
    ],
    es: [
      {
        title: 'Plantas Siderúrgicas y Hornos de Arco Eléctrico (Líneas de 10kV)',
        recommend: 'Feichi KYN28A-24 / КРУ-2-10 (3150A / 40kA) con Protección Óptica de Arco',
        reason: 'Soporta maniobras de alta frecuencia y armónicos severos, despejando arcos en menos de 7ms para proteger las barras principales.',
      },
      {
        title: 'Plantas Mineras en Siberia (-50°C, Polvo Severo y Vibración)',
        recommend: 'Feichi КРУ СЭЩ-59/70 Ártico (1250A / 31.5kA) con Envolvente Al-Zn IP4X y Calefacción PTC',
        reason: 'Certificado bajo GOST UHL1/UHL3 con control térmico inteligente para eliminar el riesgo de condensación en invierno ártico.',
      },
      {
        title: 'Servicios Auxiliares en Centrales Térmicas y Nucleares (6kV/10kV)',
        recommend: 'Celdas Feichi KYN28A-12 con Transferencia Rápida ATS <50ms e IEC 61850',
        reason: 'Ofrece servicio continuo LSC2B-PM para mantenimiento seguro de interruptores sin interrumpir las bombas y ventiladores críticos.',
      },
    ],
    ru: [
      {
        title: 'Электродуговые печи и металлургические заводы (РУ-10 кВ Норильск, Магнитогорск)',
        recommend: 'Шкафы Feichi КРУ-2-10 / KYN28A (3150А / 40кА) с оптической дуговой защитой ОВОД',
        reason: 'Выдерживает частые коммутационные перенапряжения дуговых печей и отключает КЗ за <7 мс, исключая выгорание ошиновки.',
      },
      {
        title: 'Обогатительные фабрики и разрезы Кузбасса (-50°C УХЛ3/УХЛ1, угольная пыль)',
        recommend: 'Арктические шкафы Feichi КРУ СЭЩ-59/70 (1250А / 31.5кА) с защитой IP4X и PTC подогревом',
        reason: 'Полное соответствие ГОСТ 15150-69 УХЛ1/УХЛ3 с автоматическим подогревом отсеков, исключающим перекрытие изоляции по росе.',
      },
      {
        title: 'Собственные нужды ТЭЦ, ГРЭС и АЭС (РУСН 6-10 кВ высокой надежности)',
        recommend: 'Шкафы КРУ Feichi KYN28A-12 с быстродействующим АВР (<50мс) и протоколом МЭК 61850',
        reason: 'Класс LSC2B-PM обеспечивает непрерывность питания ответственных насосов и тягодутьевых механизмов при ревизии выключателей.',
      },
    ],
  },
  hasCalculator: 'sld',
  ctaTitle: {
    en: 'Download 10kV–35kV Metal-Clad Arc-Resistant Switchgear (КРУ-2-10 / KYN28) Technical Dossier & Request ГОСТ 14693 Questionnaire',
    zh: '获取 10kV–35kV 金属铠装抗燃弧开关柜（KYN28A / КРУ-2-10 / КРУ СЭЩ）全套工程技术协议、俄标《Опросный лист》与 CAD 图纸',
    ja: '10kV〜35kV 金属閉鎖アーク耐性配電盤（КРУ / KYN28）技術仕様書ダウンロードおよびロシアGOST選定問診票請求',
    es: 'Descargar Dossier Técnico de Celdas Metal-Clad Resistentes al Arco (КРУ-2-10 / KYN28) y Solicitar Cuestionario GOST 14693',
    ru: 'Скачать техническое описание на КРУ 10-35 кВ (КРУ-2-10, КРУ СЭЩ) и запросить Опросный лист по ГОСТ 14693 / чертежи CAD',
  },
  ctaDesc: {
    en: 'Feichi High-Voltage Switchgear Engineering Division (Lead: Henry) provides single-line diagrams (SLD), internal arc type-test certificates (IAC AFLR 31.5kA), Russian ГОСТ 14693 questionnaires, and turnkey EPC commercial proposals within 24 hours.',
    zh: '飞驰电气高压成套开关设备工程研究所（技术总工/外贸对接人：Henry）将在 24 小时内为您提供完整的一次单线图（SLD）、耐寒与内部燃弧型式试验报告（IAC AFLR 31.5kA）、俄标《Опросный лист》及全球 EPC 项目正式技术商务方案。',
    ja: '飛馳電気 高圧スイッチギアエンジニアリング部門（担当：Henry）が24時間以内に単線結線図（SLD）、内部アーク試験成績書、ロシア標準Опросный листおよびプロジェクト見積書を提出します。',
    es: 'El departamento técnico de celdas MT de Feichi (Líder: Henry) entregará diagramas unifilares, certificados de arco interno IAC AFLR 31.5kA, cuestionario GOST 14693 y propuesta comercial en 24 horas.',
    ru: 'Инженерный отдел КРУ Feichi Power (Гл. инженер: Henry) в течение 24 часов подготовит однолинейные схемы (Э3), габаритные чертежи, заполненный Опросный лист по ГОСТ 14693 / СТО Россети и технико-коммерческое предложение (ТКП).',
  },
};
