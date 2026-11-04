import type { WhitepaperItem } from './whitepapersData';

export const week20Whitepaper: WhitepaperItem = {
  id: 'week-20',
  week: 20,
  slug: 'sf6-free-clean-air-and-solid-insulated-switchgear-engineering-guide',
  category: 'switchgear',
  categoryLabel: {
    en: 'Eco-Friendly MV Switchgear (SF6-Free / Clean Air / Solid Insulation / ГОСТ КРУ)',
    zh: '环保中压配电设备（无SF6 / 干燥空气 / 固体绝缘 / ГОСТ КРУ）',
    ja: '環境配慮型MV開閉装置（SF6フリー / クリーンエア / 固体絶縁）',
    es: 'Celdas de Media Tensión Ecológicas (Libres de SF6 / Aire Seco / Aislamiento Sólido)',
    ru: 'Экологичные КРУ и КРУЭ без элегаза (SF6-Free / Сухой воздух / ГОСТ 14693 УХЛ1)',
  },
  title: {
    en: 'Eco-Friendly SF6-Free 12kV–40.5kV Medium-Voltage Switchgear & Clean Air/Solid-Insulated Architecture Dossier: Dielectric Replacement, Sub-Zero Arc Flash Safety, and Russian/Global Decarbonized Grid Integration (Benchmarking Ormazabal & Siemens Blue GIS)',
    zh: '环保无六氟化硫 (SF6-Free) 12kV~40.5kV 中压开关设备与干燥空气/固体绝缘配电技术选型全案：绝缘介质替代、全工况极低温燃弧安全与俄罗斯/全球电网脱碳并网实践（对标 Ormazabal 与 Siemens Blue GIS 标杆架构）',
    ja: '環境配慮型 SF6フリー 12kV〜40.5kV 中圧スイッチギア・クリーンエア/固体絶縁システム選定ガイド：代替絶縁媒体・極寒アーク保護設計・グローバル脱炭素系統連系（Ormazabal＆Siemens Blue GISベンチマーク）',
    es: 'Dossier de Ingeniería de Celdas de Media Tensión Ecológicas Libres de SF6 (12kV a 40.5kV) con Aire Seco y Aislamiento Sólido: Sustitución Dieléctrica, Seguridad contra Arco Eléctrico y Descarbonización de Redes Globales',
    ru: 'Инженерное руководство по экологичным распределительным устройствам КРУ / КРУЭ 10-35 кВ без элегаза (SF6-Free): изоляция сухим воздухом (Clean Air), твердая изоляция, дугостойкость при -50°C (УХЛ1) и соответствие стандартам ГОСТ / МЭК (Бенчмарк Ormazabal и Siemens Blue GIS)',
  },
  eyebrow: {
    en: 'ECO-FRIENDLY GRID DECARBONIZATION & SF6-FREE MV SWITCHGEAR (IEC 62271-200 / EU F-GAS 2024/573 / ГОСТ 14693 / СТО РОССЕТИ)',
    zh: '中压电网低碳环保与无六氟化硫配电设备（IEC 62271-200 / GB/T 3906 / ГОСТ 14693）',
    ja: '配電系統脱炭素化・SF6フリーMV開閉設備（IEC 62271-200 / JIS C 4620 / GOST 14693）',
    es: 'DESCARBONIZACIÓN DE REDES Y CELDAS DE MEDIA TENSIÓN LIBRES DE SF6 (IEC / IEEE)',
    ru: 'ЭКОЛОГИЧЕСКИЕ КРУ И КРУЭ БЕЗ ЭЛЕГАЗА ДЛЯ ЭНЕРГЕТИКИ И ПРОМЫШЛЕННОСТИ (ГОСТ 14693 / ГОСТ 15150 УХЛ1 / СТО 56947007)',
  },
  author: {
    en: 'Feichi Eco-Power & MV Switchgear Engineering Research Institute (Lead: Henry)',
    zh: '飞驰电气环保电力装备与中压开关研究所（技术总工：Henry）',
    ja: '飛馳電気 エコ配電機器・高圧スイッチギア研究所（チーフエンジニア：Henry）',
    es: 'Instituto de Investigación de Celdas Ecológicas Feichi (Líder Técnico: Henry)',
    ru: 'Инженерный отдел экологичных КРУ и безэлегазовых технологий Feichi (Гл. инженер: Henry)',
  },
  standards: 'IEC 62271-200:2021 / IEC 62271-1 / GB/T 3906-2020 / EU F-Gas Reg 2024/573 / ГОСТ 14693-90 / ГОСТ 15150-69 (УХЛ1) / СТО 56947007-29.240.10.248-2017',
  readTime: {
    en: '19 min deep technical study (Includes dielectric breakdown gradients, thermal gas dynamics & Russian GOST questionnaire)',
    zh: '19 分钟深度技术研读（含绝缘介质击穿场强微分方程、极低温气固耦合热流体仿真与俄标 Опросный лист 实战拆解）',
    ja: '19分 専門設計解説（絶縁破壊電界計算・極寒熱流体解析・ロシア標準選定問診票解説を含む）',
    es: '19 min de lectura técnica (Incluye cálculo de gradiente dieléctrico, termofluidos a baja temperatura y cuestionario ruso)',
    ru: '19 мин углубленного изучения (включая расчет диэлектрической прочности сухого воздуха, дугостойкости при -50°C и полный Опросный лист ГОСТ)',
  },
  summary: {
    en: 'A comprehensive technical engineering sizing guide evaluating the transition from sulfur hexafluoride (SF6, GWP 25,200) to climate-neutral Dry Air (Clean Air, GWP=0) and Solid-Insulated Ring Main Units (RMU/C-GIS) for 12kV, 24kV, and 40.5kV grids. Benchmarking market leaders Ormazabal (c-GIS synthetic air) and Siemens (Blue GIS), this dossier analyzes vacuum arc quenching in hermetically sealed laser-welded stainless steel tanks (IP67), sub-zero performance under Siberian extreme climates (-50°C ГОСТ 15150 УХЛ1 without gas liquefaction), internal arc classification (IAC AFLR 25kA/1s, 31.5kA/1s), and direct digital SCADA/RTU integration.',
    zh: '深度评估 12kV、24kV 及 40.5kV 电网从中压六氟化硫（SF6，温室效应潜值 GWP 达 25,200）全面转向气候中性干燥空气（Clean Air，GWP=0）与固体绝缘环网柜/充气柜（C-GIS）的工程技术全案。对标国际标杆 Ormazabal（合成空气 c-GIS）与 Siemens（Blue GIS 洁净空气柜），系统解析真空灭弧室与全封闭激光焊接不锈钢气室（IP67）的协同机理、西伯利亚极寒工况（-50°C ГОСТ 15150 УХЛ1 无液化风险）下的高可靠绝缘保持率、内部燃弧防护等级（IAC AFLR 25kA/1s、31.5kA/1s）与微机综合保护远动系统（IEC 61850 / ГОСТ 60870-5-104）的一体化集成。',
    ja: '12kV・24kV・40.5kV配電系統におけるSF6ガス（地球温暖化係数 GWP 25,200）からクリーンエア（ドライエア GWP=0）および固体絶縁スイッチギア（C-GIS）への移行に関する完全技術解説書。欧州トップメーカーOrmazabalおよびSiemens Blue GISをベンチマークし、真空バルブ遮断技術、レーザー溶接ステンレス気密タンク（IP67）、シベリア極寒環境（-50℃耐候・液化ゼロ）、内部アーク耐量（IAC AFLR 31.5kA/1s）を徹底解析。',
    es: 'Guía técnica sobre la transición de SF6 (GWP 25,200) a Aire Seco Neutro (Clean Air, GWP=0) y Celdas de Media Tensión con Aislamiento Sólido (C-GIS) de 12kV a 40.5kV. Inspirado en Ormazabal y Siemens Blue GIS, analiza la interrupción en vacío, envolventes selladas de acero inoxidable (IP67), comportamiento a temperaturas árticas (-50°C sin riesgo de licuefacción) y seguridad contra arco interno.',
    ru: 'Исчерпывающее техническое руководство по замене элегаза (SF6, ПГП 25200) на сухой очищенный воздух (Clean Air, ПГП=0) и твердую изоляцию в распределительных устройствах КРУ, КРУЭ и КСО на напряжение 10, 20 и 35 кВ. На основе передового опыта Ormazabal и Siemens Blue GIS подробно рассматриваются вакуумные дугогасительные камеры в герметичных резервуарах из нержавеющей стали (IP67), эксплуатация в условиях Крайнего Севера и Сибири (-50°C ГОСТ 15150 УХЛ1 без выпадения конденсата и сжижения газа), локализация дуги IAC AFLR 25/31.5 кА/1с и интеграция с АСУ ТП по МЭК 61850.',
  },
  sec1Title: {
    en: '1. Dielectric Physics: SF6 vs Synthetic Clean Air vs Solid Epoxy Shielded Insulation',
    zh: '1. 绝缘介质物理特性对比：传统 SF6 气体 vs 干燥合成空气（Clean Air）vs 固体环氧屏蔽绝缘',
    ja: '1. 絶縁媒体の物理特性比較：SF6ガス vs 合成クリーンエア vs 固体エポキシシールド絶縁',
    es: '1. Física Dieléctrica: SF6 vs Aire Sintético Limpio vs Aislamiento Sólido Apantallado',
    ru: '1. Физика диэлектриков: Элегаз (SF6) против Очищенного сухого воздуха (Clean Air) и Твердой изоляции',
  },
  sec1Text: {
    en: `Environmental regulations worldwide (e.g., EU F-Gas Regulation 2024/573 mandating a complete phase-out of SF6 in medium-voltage installations up to 24kV by 2026 and 145kV by 2030) are forcing a technological paradigm shift in power distribution.

1. Traditional SF6 Gas Insulated Switchgear (GIS):
• SF6 possesses exceptional dielectric strength (approx. 2.5x that of air at 0.1 MPa) and superior thermal arc-quenching capability.
• Major Drawback: Global Warming Potential (GWP) of 25,200 and atmospheric lifetime of 3,200 years. At low ambient temperatures (below -25°C to -30°C at 0.15 MPa), SF6 starts to liquefy, causing a catastrophic drop in internal gas pressure and dielectric withstand voltage, requiring continuous electrical trace heating in Arctic climates.

2. Clean Air / Dry Synthetic Air Insulated Switchgear (Ormazabal & Siemens Approach):
• Composed of 80% Nitrogen (N2) and 20% Oxygen (O2) with ultra-low dew point (<-50°C) and zero toxic decomposition byproducts. GWP = 0.
• Dielectric insulation is decoupled from the switching function: Vacuum Interrupters (VI) perform current interruption, while Dry Air at low gauge pressure (0.02 - 0.05 MPa) or ambient pressure provides primary phase-to-phase and phase-to-earth insulation.
• Liquid phase boundary is below -65°C, eliminating gas liquefaction failure modes across Russian Siberian and CIS winter operations.

3. Solid Shielded Insulated Switchgear (SIS / 固体绝缘环网柜):
• Encapsulates each phase (vacuum bottle, disconnect switch, and copper conductors) inside a solid epoxy resin / polyurethane molding with a conductive grounded outer layer (E-Screen).
• 100% gas-free, eliminating gas pressure monitoring, gas leakage detectors, and pressure gauges while offering complete phase-to-phase galvanic isolation.`,
    zh: `全球电网脱碳法规与环保指令（如欧盟 F-Gas 2024/573 法规，强制要求 2026 年起 24kV 及以下中压设备、2030 年起 145kV 及以下高压设备全面禁止使用 SF6）正推动配电开关设备发生革命性变革。

1. 传统六氟化硫（SF6）充气开关柜（GIS / RMU）：
• 优势：SF6 具有极高的绝缘强度（标准大气压下约为空气的 2.5~3 倍）及优异的电弧熄灭特性。
• 致命痛点：其全球变暖潜能值（GWP）高达 25,200，在大气中寿命长达 3,200 年。此外，在极低温工况下（0.15MPa 充气压力下，当温度低于 -25°C~-30°C 时），SF6 气体将发生不可逆相变液化，导致气室绝缘压力骤降、耐压击穿风险剧增，在俄罗斯及高寒地区必须加装大功率电伴热保温层。

2. 干燥洁净空气（Clean Air / Dry Air）绝缘中压开关设备（对标 Ormazabal 与 Siemens 标杆路线）：
• 气体介质采用 80% 高纯氮气（N2）与 20% 高纯氧气（O2）精确配比，露点低于 -50°C，GWP 严格为 0，零毒害、零温室效应、无需回收处理。
• 核心原理：“灭弧与绝缘解耦”。采用高性能真空灭弧室（VI）负责分断短路电流与负荷电流，微正压干燥空气（0.02~0.05 MPa）仅用于母线及隔离开关相间与对地绝缘。
• 气化临界温度低于 -65°C，在西伯利亚永久冻土带、高寒露天矿山及光伏电站彻底消除液化失压跳闸风险。

3. 固体绝缘与外屏蔽环网柜（SIS / 固体绝缘开关设备）：
• 将真空灭弧室、三工位隔离开关、主母线及铜排整体浇注于环氧树脂/特种聚氨酯绝缘固封极柱内，外部涂覆半导电屏蔽接地层。
• 实现 100% 无气体（No Gas），彻底告别气压表监控与漏气风险，相间完全物理隔离，杜绝相间短路发生。`,
    ja: `世界的な脱炭素規制（EU F-Gas規制 2024/573 等）に伴い、SF6ガス（地球温暖化係数 25,200）全廃に向けた技術転換が急務となっています。\n\n1. 従来のSF6ガス開閉装置：優れた絶縁耐圧と消弧性を誇る一方、-25℃以下の寒冷地ではガスが液化し絶縁低下を引き起こすため、ヒーター加熱が必須でした。\n2. クリーンエア（ドライエア）方式：高純度窒素・酸素の最適混合ガス（GWP=0、露点-50℃以下）を採用。真空バルブで電流遮断を行い、ドライエアで絶縁を担保する「機能分離構造」により、-50℃極寒でも液化せず安定動作します。\n3. 固体絶縁方式（SIS）：真空バルブと導体をエポキシ樹脂で完全モールドし外層を接地シールド。ガス管理が一切不要で相間短絡事故を物理的に防ぎます。`,
    es: 'Las regulaciones globales contra gases de efecto invernadero (como la normativa europea F-Gas 2024/573) están acelerando el reemplazo del SF6 (GWP 25,200) por tecnologías limpias.\n\n1. Celdas Tradicionales con SF6: Alta rigidez dieléctrica pero con riesgo de licuefacción a temperaturas inferiores a -25°C.\n2. Celdas con Aire Seco Sintético (Clean Air): GWP=0. Emplea interruptores en vacío para la corte de corriente y aire seco a baja presión para el aislamiento, operando de forma fiable hasta -50°C sin licuefacción.\n3. Celdas con Aislamiento Sólido Apantallado (SIS): Encapsulado en resina epoxi con apantallamiento exterior a tierra, eliminando completamente el uso de gas y los riesgos de fugas.',
    ru: 'Международные климатические соглашения и отраслевые стандарты (СТО 56947007 ПАО «Россети», регламент ЕС 2024/573) стимулируют переход от элегаза (SF6, ПГП 25200) к экологичным распределительным устройствам 10-35 кВ.\n\n1. Традиционные элегазовые КРУЭ/КРУ: обладают высокой диэлектрической прочностью, однако при температурах ниже -25°C...-30°C элегаз переходит в жидкую фазу, что вызывает резкое падение давления и пробой изоляции, требуя мощного электрообогрева ячеек.\n2. КРУ с изоляцией сухим воздухом (Clean Air / Очищенный воздух): ПГП = 0. Функции гашения дуги и изоляции разделены: отключение токов КЗ выполняется в вакуумных камерах (КДВ), а сухой воздух (точка росы <-50°C, избыточное давление 0.02-0.05 МПа) обеспечивает изоляцию токоведущих частей. Работоспособен до -50°C (УХЛ1) без сжижения газа.\n3. Твердая изоляция с экранированием (КРУ с твердой изоляцией): вакуумный выключатель и разъединитель залиты в монолитный блок из эпоксидного компаунда с заземленным полупроводящим слоем. Полное отсутствие газа и необходимости контроля давления.',
  },
  sec2Title: {
    en: '2. Sub-Zero Arctic Engineering & Arc Flash Containment (IEC 62271-200 IAC AFLR 31.5kA/1s & ГОСТ 15150 УХЛ1)',
    zh: '2. 极寒工况结构热力学与内部燃弧安全泄压设计（IEC 62271-200 IAC AFLR 31.5kA/1s 与 ГОСТ 15150 УХЛ1 极地验证）',
    ja: '2. 耐寒・極低温環境設計および内部アーク保護構造（IEC 62271-200 IAC AFLR 31.5kA/1s / GOST 15150 UHL1）',
    es: '2. Ingeniería para Climas Árticos y Contención de Arco Interno (IAC AFLR 31.5kA/1s y GOST 15150 UHL1)',
    ru: '2. Эксплуатация в арктических условиях и локализация внутренней дуги (IAC AFLR 31.5 кА/1с, ГОСТ 14693 и ГОСТ 15150 УХЛ1)',
  },
  sec2Text: {
    en: `Designing medium-voltage switchgear for Siberian oilfields, northern mining hubs, and cold-climate renewables presents severe mechanical and thermal challenges:

• Hermetic Stainless Steel Tank Fabrication:
Feichi Clean Air switchgear utilizes robotically laser-welded 3.0mm AISI 304 / 316L stainless steel tanks, achieving an IP67 rating for the live high-voltage compartment. Leakage rate is certified below 0.1% per year over a 30-year operational lifecycle without top-up requirements.

• Low-Temperature Mechanical Drive Reliability (-50°C):
Spring and permanent magnetic actuator (PMA) mechanisms are fitted with aerospace-grade synthetic fluorosilicone lubricants and copper-beryllium springs tested to 10,000 mechanical operations (M2 class) at -50°C without sluggishness or contact bounce.

• Internal Arc Classification (IAC AFLR 25kA/1s & 31.5kA/1s):
Dedicated gas expansion ducts and heavy-duty burst discs direct thermal overpressures toward the rear or top chimney, preventing hot gases, toxic particles, and shrapnel from entering operator corridors in front (A), lateral (L), and rear (R) zones under IEC 62271-200. Optional optical arc detection relays trigger breaker trip in under 5 milliseconds.`,
    zh: `针对俄罗斯西伯利亚油气田、高纬度矿区及极寒高海拔风光电站的极端环境（-50°C 暴风雪与冻土），飞驰电气环保中压开关设备在材料、机械与燃弧安全上实施了严苛的工程加固：

• 激光无缝焊接不锈钢全密封气箱（IP67）：
选用 3.0mm 宝钢/太钢优质 AISI 304/316L 奥氏体不锈钢板，采用五轴联动三维激光全自动熔焊技术。气箱整体年漏气率低于 0.1%/年，在 30 年设计运行寿命内实现免充气、免维护（Sealed Pressure System for Life）。

• 极低温特种操动机构可靠性（-50°C 机械 M2 级）：
弹簧操动机构与永磁操动机构（PMA）全系装配航空级氟硅合成超低温润滑脂（耐受 -65°C 至 +180°C）及铍铜防疲劳弹簧，在 -50°C 极寒低温试验箱中完成连续 10,000 次分合闸动作无卡涩、触头弹跳时间 <2ms。

• 内部燃弧安全防御（IAC AFLR 25kA/1s 与 31.5kA/1s）：
配备专用后置/顶置定向金属泄压通道与防爆泄压膜片。当柜内发生非预期内部燃弧时，超高热气流在 15ms 内沿预设排气通道向上或向后释放，严格符合 IEC 62271-200 与 GB/T 3906 的 A（授权人员）、F（正面）、L（侧面）、R（背面）全方位燃弧防护标准。可集成超高速光纤弧光保护系统，实现 <5ms 快速跳闸切除。`,
    ja: `シベリア油田や高地鉱山等の過酷な環境に対応するため、以下の耐候・安全対策を標準装備しています。\n\n• ロボットレーザー溶接ステンレス気密タンク（IP67）：3.0mm厚SUS304を採用し、年漏れ率0.1%以下、30年間メンテナンスフリーを実現。\n• -50℃極低温対応高信頼操作機構：航空規格フッ素シリコングリスと高耐久ベリリウム銅スプリングを採用し、10,000回の開閉耐久試験（M2クラス）をパス。\n• 内部アーク防爆構造（IAC AFLR 31.5kA/1s）：方向性圧力放散ダクトを備え、異常アーク発生時の超高圧ガスを上部へ安全に排出。光ファイバー高速アークセンサー（検出時間5ms以下）も搭載可能。`,
    es: 'Para soportar condiciones extremas en minería y petróleo en regiones frías (-50°C), Feichi incorpora:\n\n• Tanque Hermético de Acero Inoxidable (IP67): Soldadura láser robotizada en chapa de 3.0 mm, garantizando una tasa de fuga <0.1%/año durante 30 años.\n• Mecanismo Mecánico para Bajas Temperaturas (-50°C): Lubricación aeroespacial y resortes de berilio-cobre certificados para 10,000 maniobras (Clase M2).\n• Protección contra Arco Interno (IAC AFLR 31.5kA/1s): Ductos de alivio direccional y detección óptica ultra rápida (<5ms).',
    ru: 'Для надежной работы на месторождениях Сибири, Дальнего Востока и Крайнего Севера ячейки КРУ Feichi оснащены:\n\n• Герметичный резервуар из нержавеющей стали (IP67): лазерная роботизированная сварка листов стали AISI 304 толщиной 3.0 мм. Уровень утечки менее 0.1% в год в течение 30-летнего срока службы без дозаправки.\n• Приводные механизмы для условий УХЛ1 (-50°C): использование авиационных фторсиликоновых смазок и пружин из бериллиевой бронзы. Ресурс 10 000 циклов ВО (класс М2).\n• Локализация аварийной дуги (IAC AFLR 25/31.5 кА/1с): направленные клапаны сброса избыточного давления в задний/верхний отсек, исключающие поражение оператора спереди (F), сбоку (L) и сзади (R) по ГОСТ 14693 и МЭК 62271-200. Возможность установки оптической дуговой защиты (время срабатывания <5 мс).',
  },
  sec3Title: {
    en: '3. Technical Comparison Matrix: SF6 vs Clean Air (Ormazabal/Feichi) vs Solid SIS vs Air Insulated (AIS)',
    zh: '3. 关键技术参数综合对比：传统 SF6 柜 vs 干燥空气柜（Ormazabal/Feichi 路线）vs 固体绝缘柜 vs 传统空气绝缘柜（AIS）',
    ja: '3. 主要スイッチギア技術比較表：SF6ガス vs クリーンエア vs 固体絶縁 vs 気中絶縁（AIS）',
    es: '3. Matriz Comparativa Técnica: SF6 vs Aire Limpio vs Aislamiento Sólido vs Aire Atmosférico (AIS)',
    ru: '3. Сравнительная матрица характеристик: SF6 vs Сухой воздух (Clean Air) vs Твердая изоляция (SIS) vs Традиционное КРУ (AIS)',
  },
  tableHeaders: {
    en: ['Technical Specification / Parameter', 'Traditional SF6 GIS (12-24kV)', 'Feichi Eco Clean Air (12-40.5kV)', 'Solid Insulated (SIS 12-24kV)', 'Conventional Air AIS (KYN28)'],
    zh: ['技术参数 / 关键指标', '传统 SF6 充气柜 (12-24kV)', '飞驰 Clean Air 环保柜 (12-40.5kV)', '固体绝缘环网柜 (12-24kV)', '传统空气绝缘中置柜 (KYN28)'],
    ja: ['技術仕様項目', '従来型 SF6ガスRMU (12-24kV)', 'Feichi クリーンエア (12-40.5kV)', '固体絶縁RMU (12-24kV)', '気中絶縁中置盤 (KYN28)'],
    es: ['Parámetro Técnico', 'Celdas SF6 Tradicionales', 'Feichi Clean Air Ecológico', 'Aislamiento Sólido (SIS)', 'Aire Tradicional (KYN28 AIS)'],
    ru: ['Параметры и характеристики', 'Традиционные КРУЭ с SF6', 'Feichi Clean Air (Сухой воздух)', 'Твердая изоляция (SIS)', 'Традиционные КРУ с ВОИ (AIS)'],
  },
  tableRows: {
    en: [
      ['Insulating Gas / Dielectric Medium', 'Sulfur Hexafluoride (SF6 100%)', 'Dry Synthetic Air (80% N2 + 20% O2)', 'Solid Epoxy + Conductive Shield', 'Ambient Atmospheric Air'],
      ['Global Warming Potential (GWP)', '25,200 (Extreme Carbon Impact)', '0 (Zero Greenhouse Impact)', '0 (Zero Greenhouse Impact)', '0 (Zero Greenhouse Impact)'],
      ['Operating Pressure (Relative)', '0.04 - 0.15 MPa (Gauge)', '0.02 - 0.05 MPa (Micro-positive)', '0.00 MPa (Completely Gas-Free)', '0.00 MPa (Atmospheric)'],
      ['Sub-Zero Temperature Threshold', 'Gas liquefaction below -25°C', 'No liquefaction down to -60°C (УХЛ1)', 'Operational to -50°C (Resin brittle check)', 'Operational to -40°C (Dew-point condensation)'],
      ['Arc Quenching Technology', 'SF6 Thermal Puffer / Rotary Arc', 'Hermetic Vacuum Interrupter (VI)', 'Hermetic Vacuum Interrupter (VI)', 'Vacuum Breaker in Open Air Cart'],
      ['Internal Arc Classification (IAC)', 'IAC AFLR 20kA/1s - 25kA/1s', 'IAC AFLR 25kA/1s - 31.5kA/1s', 'IAC AFLR 20kA/1s', 'IAC AFLR 25kA/1s - 31.5kA/1s'],
      ['Dimensions per Bay (WxDxH mm)', '375 x 800 x 1400', '420 x 850 x 1500 (Ultra Compact)', '420 x 820 x 1450', '800 x 1500 x 2200 (Large Footprint)'],
      ['Lifecycle End-of-Life Handling', 'Mandatory F-Gas Recovery & Disposal', 'Natural Vented Atmosphere (Zero Cost)', 'Polymer Recycling & Landfill', 'Standard Scrap Metal Recycling'],
      ['Russian GOST / Rosseti Certification', 'GOST 15150 / EAC TR CU 004', 'GOST 14693 / СТО РОССЕТИ / УХЛ1', 'GOST 15150 / EAC TR CU 004', 'GOST 14693 / ГОСТ 15150 УХЛ1'],
    ],
    zh: [
      ['绝缘介质与技术路线', '100% 六氟化硫气体 (SF6)', '高纯干燥空气 (80% N2 + 20% O2)', '环氧树脂/特种聚氨酯固体绝缘', '常压环境空气 (大气绝缘)'],
      ['全球变暖潜能值 (GWP)', '25,200 (极高碳税与环境制约)', '0 (完全气候中性，零碳排放)', '0 (完全气候中性)', '0 (完全气候中性)'],
      ['气室运行表压 (Relative)', '0.04 ~ 0.15 MPa', '0.02 ~ 0.05 MPa (微正压安全运行)', '0.00 MPa (绝对无气体)', '0.00 MPa (常压开放)'],
      ['极低温运行临界点', '-25°C 以下发生气体相变液化', '-60°C 极寒无任何液化风险 (УХЛ1)', '-50°C 正常运行 (需校验树脂低温韧性)', '-40°C 需防凝露与内部电晕闪络'],
      ['灭弧核心技术', 'SF6 压气式/旋弧式自能灭弧', '长寿命真空灭弧室 (VI) 陶瓷封装', '真空灭弧室 (VI) 固封极柱', '真空断路器移开式手车'],
      ['内部燃弧耐受等级 (IAC)', 'IAC AFLR 20kA/1s ~ 25kA/1s', 'IAC AFLR 25kA/1s ~ 31.5kA/1s', 'IAC AFLR 20kA/1s', 'IAC AFLR 25kA/1s ~ 31.5kA/1s'],
      ['单间隔标准尺寸 (宽x深x高 mm)', '375 x 800 x 1400', '420 x 850 x 1500 (高密度紧凑型)', '420 x 820 x 1450', '800 x 1500 x 2200 (占地面积大)'],
      ['全生命周期末端回收处置', '强制危险废气专业回收资质（高昂成本）', '自然安全排气，零合规处置成本', '聚合物环保降解或填埋', '常规废旧金属回收处理'],
      ['俄联邦 GOST / 全俄电网认证', 'ГОСТ 15150 / EAC TR CU 004', 'ГОСТ 14693 / СТО РОССЕТИ / УХЛ1', 'ГОСТ 15150 / EAC TR CU 004', 'ГОСТ 14693 / ГОСТ 15150 УХЛ1'],
    ],
    ja: [
      ['絶縁媒体', 'SF6ガス (100%)', '高純度クリーンエア (80% N2 + 20% O2)', 'エポキシ樹脂固体絶縁', '常圧大気空気'],
      ['地球温暖化係数 (GWP)', '25,200 (極めて高環境負荷)', '0 (ゼロエミッション)', '0 (ゼロエミッション)', '0 (ゼロエミッション)'],
      ['運転圧力', '0.04〜0.15 MPa', '0.02〜0.05 MPa (微加圧)', '0.00 MPa (ガスレス)', '0.00 MPa (常圧)'],
      ['極低温耐性', '-25℃以下で液化の恐れあり', '-60℃でも液化なし（極寒仕様）', '-50℃対応', '-40℃（結露防止必須）'],
      ['遮断技術', 'SF6パッファー遮断', '高耐久真空バルブ (VI)', '固体モールド真空バルブ', '真空遮断器（手車式）'],
      ['アーク耐量 (IAC)', 'IAC AFLR 20kA/1s', 'IAC AFLR 31.5kA/1s', 'IAC AFLR 20kA/1s', 'IAC AFLR 31.5kA/1s'],
      ['外形寸法 (幅x奥行x高さ mm)', '375 x 800 x 1400', '420 x 850 x 1500', '420 x 820 x 1450', '800 x 1500 x 2200'],
      ['廃棄時処理', '専門資格によるガス回収が必須', '大気解放可能（コストゼロ）', '樹脂リサイクル処理', '一般金属スクラップ処理'],
      ['ロシア規格適合', 'GOST 15150 / EAC', 'GOST 14693 / Rosseti / UHL1', 'GOST 15150 / EAC', 'GOST 14693 / UHL1'],
    ],
    es: [
      ['Medio Aislante', 'Gas Hexafluoruro de Azufre (SF6)', 'Aire Sintético Seco (80% N2 + 20% O2)', 'Resina Epoxi Sólida + Blindaje', 'Aire Atmosférico Ambiente'],
      ['Potencial de Calentamiento (GWP)', '25,200 (Alto impacto ambiental)', '0 (Cero emisiones netas)', '0 (Cero emisiones netas)', '0 (Cero emisiones netas)'],
      ['Presión de Trabajo', '0.04 - 0.15 MPa', '0.02 - 0.05 MPa (Micro-positiva)', '0.00 MPa (Sin Gas)', '0.00 MPa (Presión Atmosférica)'],
      ['Comportamiento Bajo Cero', 'Licuefacción por debajo de -25°C', 'Sin licuefacción hasta -60°C (UHL1)', 'Operativo hasta -50°C', 'Condensación y coronas a -40°C'],
      ['Tecnología de Corte', 'Soplado térmico en SF6', 'Cámara de corte en vacío (VI)', 'Cámara de vacío encapsulada', 'Interruptor en vacío extraíble'],
      ['Clasificación Arco (IAC)', 'IAC AFLR 20kA/1s', 'IAC AFLR 31.5kA/1s', 'IAC AFLR 20kA/1s', 'IAC AFLR 31.5kA/1s'],
      ['Dimensiones (AxPxH mm)', '375 x 800 x 1400', '420 x 850 x 1500 (Muy compacta)', '420 x 820 x 1450', '800 x 1500 x 2200 (Mayor espacio)'],
      ['Fin de Vida Útil', 'Recuperación obligatoria de F-Gas', 'Ventilación limpia a la atmósfera', 'Reciclaje de polímeros', 'Chatarra metálica estándar'],
      ['Certificación GOST / CIS', 'GOST 15150 / EAC TR CU', 'GOST 14693 / Rosseti / UHL1', 'GOST 15150 / EAC TR CU', 'GOST 14693 / GOST 15150 UHL1'],
    ],
    ru: [
      ['Изоляционная среда', 'Элегаз (SF6 100%)', 'Очищенный сухой воздух (Clean Air)', 'Твердый эпоксидный компаунд (SIS)', 'Атмосферный воздух (AIS)'],
      ['Потенциал потепления (ПГП)', '25 200 (Высокий углеродный налог)', '0 (Полная климатическая нейтральность)', '0 (Климатическая нейтральность)', '0 (Климатическая нейтральность)'],
      ['Рабочее давление в баке', '0.04 - 0.15 МПа', '0.02 - 0.05 МПа (Микроизбыточное)', '0.00 МПа (Без газа)', '0.00 МПа (Атмосферное)'],
      ['Предел низких температур', 'Сжижение газа при t < -25°C', 'Работоспособность до -60°C (УХЛ1)', 'Работоспособность до -50°C', 'Риск конденсата при t < -40°C'],
      ['Принцип гашения дуги', 'Автопневматическое гашение в SF6', 'Вакуумная камера (КДВ)', 'Вакуумная камера (КДВ) в монолите', 'Вакуумный выключатель на выкатной тележке'],
      ['Стойкость к дуге (IAC)', 'IAC AFLR 20 кА/1с', 'IAC AFLR 25 / 31.5 кА/1с', 'IAC AFLR 20 кА/1с', 'IAC AFLR 25 / 31.5 кА/1с'],
      ['Габариты ячейки (ШхГхВ мм)', '375 x 800 x 1400', '420 x 850 x 1500 (Ультракомпакт)', '420 x 820 x 1450', '800 x 1500 x 2200 (Большая площадь)'],
      ['Утилизация в конце срока', 'Специализированная откачка и утилизация', 'Экологичный сброс в атмосферу (0 руб)', 'Утилизация полимеров', 'Стандартная переработка металлолома'],
      ['Соответствие ГОСТ и Россети', 'ГОСТ 15150 / ТР ТС 004/2011', 'ГОСТ 14693 / СТО РОССЕТИ / УХЛ1', 'ГОСТ 15150 / ТР ТС 004/2011', 'ГОСТ 14693 / ГОСТ 15150 УХЛ1'],
    ],
  },
  sec4Title: {
    en: '4. Industrial Deployment Scenarios & Russian Standard Опросный лист (Design Institute Questionnaire)',
    zh: '4. 典型工程场景选型推荐与俄罗斯主流设计院《Опросный лист》（选型问卷）实战拆解',
    ja: '4. 産業別エンジニアリング適用事例およびロシア設計院標準選定問診票（Опросный лист）',
    es: '4. Escenarios de Aplicación Industrial y Cuestionario Estándar Ruso «Опросный лист»',
    ru: '4. Практические сценарии применения и заполнение Опросного листа для проектных институтов (РФ и СНГ)',
  },
  scenarios: {
    en: [
      {
        title: 'Renewable Solar & Wind Collector Stations (10kV - 35kV)',
        recommend: 'Feichi Clean Air C-GIS 35kV / 1250A / 31.5kA with Integrated SCADA (IEC 61850)',
        reason: 'Zero-carbon footprint aligning with ESG investment criteria, compact footprint in modular container E-Houses, and maintenance-free 30-year operational life.',
      },
      {
        title: 'Siberian Mining & Heavy Metallurgy Hubs (Norilsk / Kuzbass / Yakutia, -50°C УХЛ1)',
        recommend: 'Feichi Arctic Heavy-Duty Clean Air Switchgear with IP67 Laser-Welded Stainless Shell',
        reason: 'Complete immunity to extreme sub-zero gas liquefaction; tested with fluorosilicone mechanics and optical arc mitigation for hazardous processing plants.',
      },
      {
        title: 'Urban Underground & High-Density Commercial Substations',
        recommend: 'Feichi Solid Insulated Switchgear (SIS) 10kV / 630A / 20kA',
        reason: 'Zero risk of toxic gas leakage in enclosed basements, minimal bay width (420mm), and complete phase-to-phase flashover protection.',
      },
      {
        title: 'Oil & Gas Processing Plants & Chemical Refineries (Aggressive H2S & C5-M Marine Environment)',
        recommend: 'Feichi Hermetic Clean Air Stainless C-GIS with C5-M Coating and Sealed Busbars',
        reason: 'Total physical isolation of energized contacts from corrosive hydrogen sulfide and saline ambient air.',
      },
    ],
    zh: [
      {
        title: '大型地面光伏与风电集电线路升压站（10kV / 20kV / 35kV 并网）',
        recommend: '飞驰 Clean Air 环保充气柜 35kV / 1250A / 31.5kA 集成微机远动测控（IEC 61850 / ГОСТ 104）',
        reason: '完全符合国际电网 ESG 绿色低碳评级与欧盟出口标准，可无缝安装于预制舱式箱变中，30 年免维护。',
      },
      {
        title: '西伯利亚露天煤矿、有色金属采选与高寒重工基地（诺里尔斯克/库兹巴斯/萨哈，-50°C УХЛ1）',
        recommend: '飞驰极地特种 Clean Air 干燥空气环保柜（3.0mm 激光焊接 AISI 304 不锈钢 IP67 气箱）',
        reason: '彻底免除极寒工况下 SF6 气体相变液化失压跳闸风险，耐受暴风雪与剧烈振动，标配毫秒级光纤弧光保护。',
      },
      {
        title: '城市地下变电所、商业综合体与高密度数据中心',
        recommend: '飞驰固体绝缘环网柜（SIS）10kV / 630A / 20kA',
        reason: '全固封防爆防触电，密闭地下空间零有毒废气窒息隐患，单柜宽度仅 420mm，节省黄金机房占地。',
      },
      {
        title: '油气长输管线泵站、石化炼油及重度盐雾沿海港口（防 H2S 腐蚀与 C5-M 等级）',
        recommend: '飞驰全封闭干燥空气充气柜（IP67 气密不锈钢外壳 + C5-M 防腐涂装）',
        reason: '带电导电触头与外界高腐蚀性硫化氢及高盐分湿气完全隔离，杜绝局部放电与母线氧化闪络。',
      },
    ],
    ja: [
      {
        title: 'メガソーラー・風力発電所 集電系統（10kV〜35kV）',
        recommend: 'Feichi クリーンエア C-GIS 35kV / 1250A / 31.5kA（IEC 61850スマート通信内蔵）',
        reason: 'ESG脱炭素投資要件に完全適合し、コンテナ変電所内に高密度配置可能。30年間保守不要。',
      },
      {
        title: 'シベリア極寒鉱山・製鉄コンビナート（-50℃耐候仕様 УХЛ1）',
        recommend: 'Feichi 極地仕様 クリーンエア開閉装置（レーザー溶接SUS304気密IP67構造）',
        reason: '極低温下でのガス液化事故を完全に防止し、耐震動・耐粉塵性能を強化。',
      },
      {
        title: '都市部地下変電設備・データセンター',
        recommend: 'Feichi 固体絶縁スイッチギア（SIS）10kV / 630A',
        reason: '有毒ガス漏えいリスクゼロ、省スペース設計（幅420mm）、最高水準の防災安全性を確保。',
      },
      {
        title: '石油精製プラント・沿海部化学工場（H2S防食・C5-M塗装）',
        recommend: 'Feichi 完全密閉クリーンエアC-GIS（C5-M重防食仕様）',
        reason: '硫化水素ガスや高湿度塩分から充電部を完全隔離し、沿面放電トラブルを根絶。',
      },
    ],
    es: [
      {
        title: 'Parques Solares y Eólicos (10kV a 35kV)',
        recommend: 'Feichi Clean Air C-GIS 35kV / 1250A / 31.5kA con SCADA IEC 61850',
        reason: 'Cumplimiento estricto con metas de descarbonización, diseño ultracompacto y libre de mantenimiento durante 30 años.',
      },
      {
        title: 'Minería e Industria Pesada en Regiones Árticas (-50°C УХЛ1)',
        recommend: 'Feichi Clean Air Ártico con Envolvente Soldada por Láser IP67 en Acero Inoxidable',
        reason: 'Elimina el riesgo de congelamiento/licuefacción del gas SF6 y cuenta con protección óptica contra arco.',
      },
      {
        title: 'Subestaciones Subterráneas Urbanas y Centros de Datos',
        recommend: 'Celdas Feichi con Aislamiento Sólido (SIS) 10kV / 630A',
        reason: 'Cero riesgo de fuga de gases tóxicos en espacios cerrados, ancho reducido (420mm) y máxima seguridad operativa.',
      },
      {
        title: 'Refinerías y Plantas Químicas Costeras (Ambientes H2S y C5-M)',
        recommend: 'Feichi C-GIS Hermético de Aire Seco con Recubrimiento Anticorrosivo C5-M',
        reason: 'Aislamiento total de las partes activas frente a la corrosión química y la salinidad marina.',
      },
    ],
    ru: [
      {
        title: 'СЭС, ВЭС и объекты распределенной генерации (10-35 кВ)',
        recommend: 'Ячейки Feichi Clean Air C-GIS 35 кВ / 1250 А / 31.5 кА с интеграцией в АСУ ТП (МЭК 61850 / МЭК 104)',
        reason: 'Соответствие жестким экологическим нормативам, ультракомпактные габариты для монтажа в блочно-модульные здания (БМЗ) и 30 лет без обслуживания.',
      },
      {
        title: 'Горнорудные предприятия и металлургические комбинаты Сибири (Кузбасс, Норильск, Якутия, -50°C УХЛ1)',
        recommend: 'Ячейки Feichi Clean Air в арктическом исполнении (бак из стали AISI 304 толщиной 3.0 мм, IP67)',
        reason: 'Полное отсутствие риска сжижения газа при -50°C, надежная работа фторсиликоновых приводов и оптическая дуговая защита.',
      },
      {
        title: 'Городские закрытые подстанции, метрополитен и центры обработки данных (ЦОД)',
        recommend: 'Ячейки Feichi с твердой изоляцией (SIS) 10 кВ / 630 А / 20 кА',
        reason: 'Отсутствие риска загазованности в подземных сооружениях, ширина ячейки всего 420 мм, пофазное экранирование.',
      },
      {
        title: 'Нефтегазоперекачивающие станции и шельфовые комплексы (среда H2S и C5-M)',
        recommend: 'Герметичные ячейки Feichi Clean Air C-GIS со специальным антикоррозионным покрытием C5-M',
        reason: 'Полная изоляция токоведущих контактов от агрессивного сероводорода и морского соляного тумана.',
      },
    ],
  },
  hasCalculator: 'sld',
  ctaTitle: {
    en: 'Download SF6-Free Clean Air Switchgear Engineering Dossier & Request Russian ГОСТ Опросный лист / CAD Drawings',
    zh: '获取 12kV~40.5kV 环保无SF6干燥空气开关柜全套工程技术方案、俄标《Опросный лист》与 CAD 图纸',
    ja: '環境配慮型 SF6フリー クリーンエア開閉装置 技術資料ダウンロードおよびロシアGOST選定問診票請求',
    es: 'Descargar Dossier de Celdas Ecológicas Libres de SF6 y Solicitar Cuestionario Ruso «Опросный лист» y Planos CAD',
    ru: 'Скачать техническое руководство по ячейкам КРУ без элегаза (Clean Air) и запросить Опросный лист ГОСТ / чертежи CAD',
  },
  ctaDesc: {
    en: 'Feichi High-Voltage & Eco-Switchgear Technical Team (Lead: Henry) provides single-line diagrams (SLD), internal arc simulation reports, Russian ГОСТ Опросный лист, and turnkey commercial proposals within 24 hours.',
    zh: '飞驰电气高压与环保开关技术工程部（总工/外贸对接人：Henry）将在 24 小时内为您提供完整的一次单线图（SLD）、耐寒与内部燃弧型式试验报告、俄标《Опросный лист》及全球 EPC 项目正式技术商务方案。',
    ja: '飛馳電気 高圧・エコ開閉機器技術部門（担当：Henry）が24時間以内に単線結線図（SLD）、耐寒・内部アーク試験報告書、ロシア標準Опросный листおよびプロジェクト見積書を提出します。',
    es: 'El departamento técnico de Feichi entregará diagramas unifilares (SLD), reportes de prueba de arco interno, cuestionarios técnicos en ruso y cotizaciones formales en 24 horas.',
    ru: 'Инженерный отдел высоковольтного оборудования Feichi (Гл. инженер: Henry) в течение 24 часов подготовит однолинейные схемы (Э3), габаритные чертежи (ВО), заполненный Опросный лист по стандартам ГОСТ / Россети и технико-коммерческое предложение (ТКП).',
  },
};
