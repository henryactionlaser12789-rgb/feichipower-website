import type { WhitepaperItem } from './whitepapersData';

export const week41Whitepaper: WhitepaperItem = {
  id: 'week-41',
  week: 41,
  slug: '35kv-220kv-substation-insulated-busbar-tubular-busway-sizing-guide',
  category: 'switchgear',
  categoryLabel: {
    en: '35kV–220kV Insulated Tubular Busbar & Substation Busway (IEC 60137 / IEC 62271 / ГОСТ 10693 / СТО Россети)',
    zh: '35kV–220kV 全绝缘管型母线与变电站母线桥专论（IEC 60137 / 俄标 ШМА/ТКЛ / 涡流集肤与微风共振）',
    ja: '35kV〜220kV 完全絶縁チューブ型母線・変電所高圧バスダクト（IEC 60137・GOST 10693）設計技術指针',
    es: 'Barras Colectoras Tubulares Aisladas 35kV–220kV y Ductos de Barras (IEC 60137 / IEC 62271)',
    ru: 'Трубчатые изолированные токопроводы 35-220 кВ серии ТКЛ, ШМА (ГОСТ 10693-81 / СТО Россети 56947007-29.140.01.218-2016)',
  },
  title: {
    en: '35kV–220kV Substation Medium & High Voltage Insulated Tubular Busbars (Solid Cast Resin Insulated Copper/Aluminum Tubular Bus, Russian GOST series ТКЛ-35/110/220 & ШМА; Chinese FE-BUS-35/220 series) Technical Whitepaper: Skin & Proximity Effect Alternating-Current Resistance Coefficients ($k_s, k_p, I_{rated} \\ge 6300\\text{A}$), Von Kármán Aeolian Vortex-Induced Resonance Dampers ($f_v = St \\cdot v / D$), Dynamic Short-Circuit Electrodynamic Stress Peaks ($F_{dyn} = \\frac{\\mu_0}{2\\pi} \\frac{i_{p1} i_{p2}}{a} L$), Multi-Layer Semi-Conductive Screen Capacitive Grading, and Siberian Arctic -50°C Heavy Ice Glaze Load Resilience (Benchmarking Rittal, Schneider Electric, Trench Group, Russian JSC Moselectroshtit, JSC PO ELAX & Pinggao)',
    zh: '35kV–220kV 变电站高压与超高压全绝缘管型母线/绝缘封闭母线桥（固体环氧树脂浇注/交联聚乙烯绝缘铜管与铝合金管母线；俄标 35–220кВ Токопроводы ТКЛ/ШМА 系列；国标飞驰 FE-BUS-35/220 系列）工程选型指南：管状几何结构交流集肤效应与邻近效应交变电阻系数（$k_s, k_p$ 严谨推导，额定持续载流量高达 $I_{rated} \ge 6300\text{A}$）、冯·卡门微风涡激振动（Aeolian Vibration）共振抑制与内置阻尼消振器方程（$f_v = St \cdot v / D$）、峰值短路电动应力动力学弯曲力矩（$F_{dyn} = \frac{\mu_0}{2\pi} \frac{i_{p1} i_{p2}}{a} L$）、多层半导电屏蔽层电容均压绝缘电场拓扑、以及西伯利亚 -50°C 极寒高纬度 20mm 重覆冰与抗震力学（深度对标德国威图 Rittal、法国施耐德电气 Schneider Electric、加拿大 Trench Group、俄罗斯莫斯科电气成套厂 JSC Moselectroshtit、俄罗斯 ELAX 与平高电气）',
    ja: '35kV〜220kV 変電所高圧完全絶縁チューブ型母線（固体モールド銅・アルミ管型バスダクト・ロシアGOST ТКЛ/ШМА系列）完全設計技術白書：表皮効果・近接効果補正係数（定格電流6300A超）、カルマン渦励振共振防止ダンパー解析（fv = St · v / D）、短絡電磁力ピーク曲げ応力計算、多層半導電シールド静電容量均圧構造、シベリア-50℃極寒20mm着氷耐力（Rittal、Schneider、Trench、ロシアMoselectroshtitベンチマーク）',
    es: 'Barras Colectoras Tubulares Aisladas de Alta Tensión 35kV–220kV (Cobre/Aluminio con Aislamiento Sólido de Resina y Apantallamiento Capacitivo): Ecuaciones de Efecto Piel y Proximidad ($I_{rated} \\ge 6300\\text{A}$), Amortiguamiento de Vibraciones Eólicas por Vórtices de Von Kármán, Esfuerzos Electrodinámicos de Cortocircuito ($F_{dyn}$), y Operación a -50°C en Siberia con Manguitos Térmicos',
    ru: 'Техническое руководство по пофазно-изолированным трубчатым токопроводам 35-220 кВ с литой эпоксидной/СПЭ изоляцией серий ТКЛ-35, ТКЛ-110, ТКЛ-220 и ШМА на номинальные токи до 6300 А: расчет коэффициентов поверхностного эффекта и эффекта близости ($k_s, k_p$), защита от эоловой вибрации и вихрей Кармана (внутренние демпферы $f_v = St \\cdot v / D$), электродинамическая стойкость при токах КЗ ($i_\\text{уд} \\ge 125$ кА), емкостное выравнивание электрического поля и стойкость к гололедным нагрузкам (толщина стенки льда 20 мм) при температуре -50°C (УХЛ1) (Бенчмарк Rittal, Schneider Electric, Trench Group, АО Мосэлектрощит, ЗАО ПО ЭЛАКС и Pinggao)',
  },
  eyebrow: {
    en: 'HV INSULATED TUBULAR BUSBAR & BUSWAY SYSTEMS (IEC 60137 / IEC 62271-200 / IEEE C37.23 / ГОСТ 10693 / СТО РОССЕТИ)',
    zh: 'FE-SPEC-41 · 35kV–220kV 全绝缘管型母线与变电站母线桥技术专论（IEC 60137 / GB/T 8349 / DL/T 1658 / ГОСТ 10693）',
    ja: 'FE-SPEC-41 · 35kV〜220kV 完全絶縁チューブ型母線・高圧バスダクト技術仕様書（IEC 60137 / IEEE C37.23 / GOST）',
    es: 'FE-SPEC-41 · DOSSIER DE BARRAS COLECTORAS TUBULARES AISLADAS 35kV–220kV (IEC 60137 / IEC 62271 / IEEE C37.23)',
    ru: 'FE-SPEC-41 · РУКОВОДСТВО ПО ИЗОЛИРОВАННЫМ ТОКОПРОВОДАМ 35-220 кВ (ГОСТ 10693-81 / СТО РОССЕТИ 56947007-29.140.01.218-2016)',
  },
  author: {
    en: 'Feichi High-Voltage Busway & Substation Primary Engineering Institute (Lead: Henry)',
    zh: '飞驰电气高压母线与变电站一次工程研究院（总工/外贸对接人：Henry）',
    ja: '飛馳電気 高圧バスダクト・変電所一次系統工学研究所（チーフ：Henry）',
    es: 'Instituto de Ingeniería de Barras y Subestaciones Feichi (Líder: Henry)',
    ru: 'Инженерно-исследовательский институт высоковольтных токопроводов и подстанций Feichi Power (Гл. инженер: Henry)',
  },
  standards: 'IEC 60137 / IEC 62271-200 / IEC 60076 / IEEE C37.23 / GB/T 8349 / DL/T 1658-2016 / ГОСТ 10693-81 / ГОСТ 15150-69 (УХЛ1) / СТО РОССЕТИ 56947007-29.140.01.218-2016',
  readTime: {
    en: '28 min technical study (Includes Tubular Skin Effect Analytical Integrals, Von Kármán Vortex Frequency Models, Short-Circuit Electrodynamic Stress & Russian ТКЛ-35/110 Questionnaire)',
    zh: '28 分钟深度技术研读（含空心圆管集肤效应解析微积分模型、冯·卡门微风涡激共振消振阻尼方程、短路电动应力与俄标 ТКЛ-35/110 选型表单）',
    ja: '28分 専門設計解説（中空円管表皮効果微積分解析・カルマン渦共振周波数モデル・短絡電磁力曲げ応力計算・ロシアТКЛ-35/110選定問診票）',
    es: '28 min de lectura técnica (Incluye integrales de efecto piel en tubos huecos, resonancia eólica de Von Kármán, esfuerzos electrodinámicos de cortocircuito y cuestionario técnico)',
    ru: '28 мин технического изучения (включая дифференциальные уравнения поверхностного эффекта в полых трубах, частоту вихрей Кармана, электродинамические силы КЗ и полный Опросный лист на токопроводы ТКЛ)',
  },
  summary: {
    en: 'An authoritative technical whitepaper on 35kV, 110kV, and 220kV High-Voltage and Extra-High-Voltage Insulated Tubular Busbars and Substation Busways (Chinese FE-BUS series; Russian GOST types ТКЛ-35, ТКЛ-110, ТКЛ-220, and ШМА enclosed bus systems) engineered for large utility generator step-up connections, GIS-to-Transformer overhead links, intensive industrial smelters, and Siberian Arctic transmission substations (rated currents $I_n = 2000\\text{A} \\sim 8000\\text{A}$, rated voltages $U_m = 40.5\\text{kV} \\sim 252\\text{kV}$, dynamic peak withstand current $i_p \\ge 160\\text{kA}$). Benchmarking global leaders Rittal (Germany), Schneider Electric (France), Trench Group (Canada), and Russian pioneer JSC Moselectroshtit, this dossier explores: 1) Hollow Cylindrical Geometry AC Skin & Proximity Effect ($R_{ac} = R_{dc} \\cdot (1 + k_s + k_p)$), achieving uniform current density across the outer copper/aluminum alloy tube perimeter ($D_{out} = 80\\text{mm} \\sim 250\\text{mm}$) with minimal thermal dissipation; 2) Aeolian Vortex-Induced Resonance Dynamics ($f_v = St \\cdot v / D$), preventing structural fatigue failure under crosswinds ($v = 2\\text{m/s} \\sim 15\\text{m/s}$) using internal dynamic multi-frequency vibration dampers; 3) Short-Circuit Electrodynamic Stress Moments ($F_{dyn} = \\frac{\\mu_0}{2\\pi} \\frac{i_{p1} i_{p2}}{a} L$), verifying mechanical span limits ($L_{span} = 6\\text{m} \\sim 12\\text{m}$) against support insulator cantilever bending rupture; 4) Solid RIP (Resin Impregnated Paper) & Cross-Linked Polymeric Multi-Layer Capacitive Graded Screen Insulation with grounded metallic shield ($U_{touch} = 0\\text{V}$ absolute touch safety); 5) Siberian Arctic -50°C УХЛ1 heavy glaze ice (20mm thickness) and seismic 9-degree Richter scale withstand; and 6) Complete PJSC Rosseti 35-220kV Insulated Tubular Busbar Опросный лист questionnaire templates.',
    zh: '系统阐述 35kV、110kV 与 220kV 高压及超高压全绝缘铜管/铝合金管型母线与变电站绝缘封闭母线桥系统（国标飞驰 FE-BUS-35/220 系列；俄标 ТКЛ-35, ТКЛ-110, ТКЛ-220 及 ШМА 封闭母线系列）在大型发电机变压器组出线、变电站 GIS 组合电器至主变压器高空跳线、重型冶金电解高载流回路及西伯利亚高寒电网枢纽中的核心电磁、热力学与机械绝缘技术规范（额定持续工作电流 $I_n = 2000\text{A} \sim 8000\text{A}$，最高工作电压 $U_m = 40.5\text{kV} \sim 252\text{kV}$，动稳定峰值耐受电流 $i_p \ge 160\text{kA}$）。深度对标德国威图 Rittal、法国施耐德电气 Schneider Electric、加拿大 Trench Group 以及俄罗斯莫斯科电气成套设备厂 АО «Мосэлектрощит»（ТКЛ 系列）等全球顶级母线系统先驱，重点解析：1）空心圆管几何结构交流集肤效应与邻近效应交变电阻解析物理模型（$R_{ac} = R_{dc} \cdot (1 + k_s + k_p)$），推导管壁厚度与集肤深度（$\delta = \sqrt{2 / (\omega \mu \gamma)}$）的最佳匹配比（外径 $D_{out} = 80\text{mm} \sim 250\text{mm}$，管壁厚度 $6\text{mm} \sim 15\text{mm}$），在大电流下实现极低发热损耗；2）冯·卡门气流微风涡激振动（Aeolian Vibration）气动共振动力学（斯特劳哈尔数 $St \approx 0.18 \sim 0.20$，微风共振频率 $f_v = St \cdot v / D$），通过在管母线内部沿跨距精确配置多频动态阻尼消振器（内置阻尼线或钢丝绳消振块），彻底消除管壁交变疲劳断裂风险；3）三相短路峰值电动应力动力学弯曲力矩微分方程（$F_{dyn} = \frac{\mu_0}{2\pi} \frac{i_{p1} i_{p2}}{a} L$），精准验算跨距（$L_{span} = 6\text{m} \sim 12\text{m}$）下支柱绝缘子抗弯破坏负荷极限（$\ge 16\text{ kN}$）；4）全固态浇注环氧树脂（RIP/RIS）或交联高分子多层同心圆柱电容屏均压绝缘电场拓扑，外覆可靠接地屏蔽铝护套与半导电层，实现管体表面对地电位 $0\text{V}$，运行人员与起吊机械可直接触摸；5）西伯利亚 -50°C 极寒 УХЛ1 20mm 特重覆冰机械过载与 9 度高烈度抗震阻尼伸缩接头设计；以及 6）符合俄罗斯国家电网 ПАО «Россети» 与海关联盟 ТР ТС 004/2011 认证的《Опросный лист на токопроводы пофазно-изолированные ТКЛ-35/110/220 кВ》工程选型技术规范。',
    ja: '35kV/110kV/220kV 超高圧完全絶縁チューブ型母線システム（飛馳FE-BUSシリーズ・ロシアGOST ТКЛ/ШМА）の完全技術白書（定格電流2000〜8000A、最高電圧40.5〜252kV、動的短絡耐力160kA超）。Rittal、Schneider、Trench、Moselectroshtitをベンチマークし、中空円管表皮効果・近接効果（Rac = Rdc(1+ks+kp)）、カルマン渦励振微風共振抑制（内置ダンパーfv = St·v/D）、短絡電磁力支柱曲げ応力計算（スパン6〜12m）、RIPモールド静電容量均圧シールド（表面電位0V・接触安全）、シベリア-50℃極寒20mm着氷耐力、およびロシアRosseti標準Опросный лист問診票を網羅。',
    es: 'Expediente técnico de Barras Colectoras Tubulares Aisladas 35kV–220kV (FE-BUS / ТКЛ-35/110/220 / ШМА): Análisis de efecto piel en tubos huecos ($I_{rated} \\ge 6300\\text{A}$), mitigación de vibraciones eólicas de Von Kármán ($f_v = St \\cdot v / D$), esfuerzos electrodinámicos de cortocircuito en aisladores soporte, apantallamiento capacitivo de resina con potencial superficial de 0V, resistencia a hielo de 20 mm a -50°C en Siberia y cuestionarios oficiales de licitación.',
    ru: 'Полное техническое руководство по пофазно-изолированным трубчатым токопроводам напряжением 35, 110 и 220 кВ серий ТКЛ-35, ТКЛ-110, ТКЛ-220 и ШМА на номинальные токи 2000-8000 А с электродинамической стойкостью до 160 кА по ГОСТ 10693-81 и СТО Россети. Рассмотрены: теория поверхностного эффекта в полых медных и алюминиевых трубах ($D = 80-250$ мм), аэродинамический расчет ветрового резонанса вихрей Кармана с внутренними виброгасителями, механический расчет пролетов 6-12 м на изгиб при токах КЗ, твердая RIP/RIS изоляция с емкостными экранами и заземленным металлическим кожухом (напряжение прикосновения 0 В), работа при гололеде 20 мм и температуре до -50°C (УХЛ1) и полный Опросный лист ПАО Россети.',
  },
  sec1Title: {
    en: '1. Hollow Tubular Geometry AC Resistance, Skin & Proximity Physics ($I_{rated} \\ge 6300\\text{A}$)',
    zh: '1. 空心圆管几何结构交流电阻、集肤与邻近效应物理微积分模型（$I_{rated} \ge 6300\text{A}$）',
    ja: '1. 中空円管幾何構造交流実効抵抗・表皮および近接効果物理微積分モデル（定格電流 ≥ 6300A）',
    es: '1. Geometría Tubular Hueca: Resistencia en CA, Efecto Piel y Proximidad ($I_{rated} \\ge 6300\\text{A}$)',
    ru: '1. Математическая модель активного сопротивления переменному току полого трубчатого проводника ($I_\\text{ном} \\ge 6300$ А)',
  },
  sec1Text: {
    en: `In heavy-duty power transmission substations (35kV to 220kV), high continuous currents ($I_n = 2000\\text{A} \\sim 8000\\text{A}$) cause intense magnetic field penetration that concentrates current on the conductor surface. Traditional rectangular busbars suffer severe skin and proximity penalties, leading to excessive hot spots. 

Hollow tubular busbars (copper T2 or aluminum-magnesium-silicon alloy 6101-T6) resolve this by distributing current evenly along the thin cylindrical wall ($s = 6\\text{mm} \\sim 15\\text{mm}$). The alternating-current resistance $R_{ac}$ is defined by:
$$R_{ac} = R_{dc} \\left( 1 + k_s + k_p \\right)$$
where $k_s$ is the skin effect coefficient and $k_p$ is the proximity effect coefficient. For a hollow tube of outside diameter $D$ and wall thickness $s$, when the ratio $s / \delta \le 1.2$ (where $\\delta = \\sqrt{2 / (\\omega \\mu \\gamma)}$ is the skin depth, $\\approx 9.4\\text{mm}$ for copper at 50Hz), $k_s$ remains below $0.05 \\sim 0.08$:
$$k_s = \\frac{1}{3} \\left( \\frac{s}{\\delta} \\right)^4 \\cdot \\left( 1 - \\frac{s}{D} \\right)$$

Feichi FE-BUS tubular conductors achieve an optimal geometry ($D_{out} = 120\\text{mm} \\sim 200\\text{mm}$, wall $8\\text{mm} \\sim 12\\text{mm}$), offering maximum current-carrying efficiency ($> 6300\\text{A}$) with temperature rise $\\Delta T \\le 45\\text{K}$ under full load, cutting ohmic power losses by up to 35% compared to multi-bundled flat busbars.`,
    zh: `在 35kV 至 220kV 大型枢纽变电站与大容量发电机变压器组出线回路中，持续运行电流高达 $2000\text{A} \sim 8000\text{A}$。在大交变电流下，导线内部自感磁通导致强烈的集肤效应（Skin Effect）与相间邻近效应（Proximity Effect）。传统的矩形矩管或多片并联铜排截面利用率极低，中心发热严重，局部温升极易超标。

全绝缘铜管/铝合金管型母线（采用 T2 高导无氧铜管或 6101-T6 高强铝镁硅合金管）利用空心同心圆截面的天然轴对称性，将导电材质全部布置在圆周薄壁处（壁厚 $s = 6\text{mm} \sim 15\text{mm}$）。其交流电阻 $R_{ac}$ 计算方程为：
$$R_{ac} = R_{dc} \left( 1 + k_s + k_p \right)$$
式中，$k_s$ 为集肤效应系数，$k_p$ 为邻近效应系数。对于外径 $D$、壁厚 $s$ 的空心圆管，当管壁厚度与工频集肤深度（$\delta = \sqrt{2 / (\omega \mu \gamma)}$，50Hz 时铜的集肤深度约为 $9.4\text{mm}$，铝约为 $11.8\text{mm}$）满足 $s / \delta \le 1.2$ 时，$k_s$ 严格受控在 $0.05 \sim 0.08$ 极低范围：
$$k_s = \frac{1}{3} \left( \frac{s}{\\delta} \right)^4 \cdot \left( 1 - \frac{s}{D} \right)$$

飞驰电气 FE-BUS 系列管母线通过精确优化管径与壁厚比（外径 $D = 120\text{mm} \sim 200\text{mm}$，壁厚 $8\text{mm} \sim 12\text{mm}$），在大电流满负荷（$\ge 6300\text{A}$）持续运行下母线导体温升严格控制在 $\Delta T \le 45\text{K}$ 以内，相较传统多片矩形母线降低欧姆电能损耗达 35% 以上。`,
    ja: `大電流（2000〜8000A）通電時の中空円管バスダクト（外径120〜200mm、肉厚8〜12mm）の交流抵抗解析。表皮深さ（銅で約9.4mm）に最適化した薄肉同心円構造により表皮効果係数ksを0.08以下に抑え、従来平鋼母線比で電力損失を35%削減し温升ΔT ≤ 45Kを達成します。`,
    es: 'En barras tubulares de 35kV a 220kV para corrientes de 2000A a 8000A, la geometría tubular hueca optimiza el efecto piel ($s/\\delta \\le 1.2$), reduciendo las pérdidas por efecto Joule hasta un 35% en comparación con pletinas planas convencionales.',
    ru: 'Расчет активного сопротивления полых трубчатых токопроводов ТКЛ при токах 2000-8000 А. Оптимальное соотношение толщины стенки (8-12 мм) и глубины проникновения тока ($\delta \\approx 9.4$ мм для меди) обеспечивает минимальный коэффициент поверхностного эффекта ($k_s < 0.08$) и снижение потерь на 35%.',
  },
  sec2Title: {
    en: '2. Von Kármán Aeolian Vortex-Induced Resonance Dynamics & Built-In Multi-Frequency Dampers ($f_v = St \\cdot v / D$)',
    zh: '2. 冯·卡门微风涡激振动（Aeolian Vibration）共振动力学与内置多频阻尼消振器方程（$f_v = St \cdot v / D$）',
    ja: '2. カルマン渦微風励振共振ダイナミクスおよび内置多周波減衰ダンパー設計方程式（fv = St · v / D）',
    es: '2. Dinámica de Resonancia por Vórtices Eólicos de Von Kármán y Amortiguadores Internos ($f_v = St \\cdot v / D$)',
    ru: '2. Аэродинамика эоловой вибрации при вихрях Кармана и встроенные многочастотные гасители ($f_v = St \\cdot v / D$)',
  },
  sec2Text: {
    en: `When smooth tubular busbars are installed in outdoor substation bays across long spans ($L_{span} = 6\\text{m} \\sim 12\\text{m}$), laminar crosswinds ($v = 2\\text{m/s} \\sim 15\\text{m/s}$) generate periodic alternating aerodynamic lift vortices on the leeward surface known as the Von Kármán Vortex Street.

The vortex shedding frequency $f_v$ is expressed by the Strouhal relationship:
$$f_v = St \\cdot \\frac{v}{D}$$
where $St \\approx 0.18 \\sim 0.20$ is the Strouhal number, and $D$ is the outer diameter. When the vortex frequency matches the natural mechanical bending frequency $f_n$ of the span ($f_n = \\frac{\\pi}{2 L^2} \\sqrt{\\frac{E I}{m}}$), violent Aeolian resonance occurs. The busbar oscillates at steady amplitudes ($A > 0.5 D$), leading to severe cyclical stress that can crack support post insulators or shear terminal expansion fittings.

Feichi FE-BUS systems incorporate internal multi-frequency dynamic vibration dampers (composed of heavy-core stranded steel wire cables and internal dissipating silicone liners suspended inside the hollow tube). These dampers disrupt acoustic coupling and absorb $> 85\\%$ of kinetic vibration energy, ensuring zero aeolian fatigue failure across 40+ years of severe outdoor wind exposure.`,
    zh: `在变电站户外大跨距（跨距 $L_{span} = 6\text{m} \sim 12\text{m}$）布置全绝缘管型母线时，平稳的低风速横向气流（微风风速 $v = 2\text{m/s} \sim 15\text{m/s}$）在圆管背风侧会交替剥离脱落产生周期性的非对称旋转升力涡漩，即著名的“冯·卡门涡街（Von Kármán Vortex Street）”。

涡激脱落频率 $f_v$ 服从斯特劳哈尔数（Strouhal Number）定律：
$$f_v = St \cdot \frac{v}{D}$$
式中，$St \approx 0.18 \sim 0.20$ 为无量纲斯特劳哈尔常数，$D$ 为管母线外径。当气流涡激脱落频率 $f_v$ 与管母线跨距固有弯曲固有频率 $f_n$（$f_n = \frac{\\pi}{2 L^2} \\sqrt{\\frac{E I}{m}}$）发生重合时，将引发强烈的微风共振现象。管母线在垂直方向产生持续大幅度振动（双振幅 $A > 0.5 D$），导致支柱绝缘子根部承受巨大交变疲劳弯曲应力，易发生瓷瓶断裂与连接金具剪切撕裂事故。

飞驰电气 FE-BUS 管母线在制造过程中于管体空腔内部沿全长跨距内置多频动态消振阻尼器（由高阻尼合金钢丝绳芯、摩擦消振重锤与特种硅橡胶耗能衬套复合而成）。该阻尼系统能够破坏空气动力学锁频谐振，耗散吸收管体 $85\%$ 以上的振动动能，确保在户外 40 年连续微风交变气流下实现零疲劳断裂安全运行。`,
    ja: `屋外長スパン（6〜12m）設置時のカルマン渦励振（fv = St · v / D）による共振破壊を防止。管内腔に高減衰スチールワイヤとシリコーン複合振動吸収ダンパーを内蔵し、風速2〜15m/s時の共振エネルギーを85%以上吸収、40年以上の無疲労破壊運用を保証します。`,
    es: 'La vibración eólica producida por los vórtices de Von Kármán ($f_v = St \\cdot v / D$) en vanos de 6m a 12m se neutraliza en las barras Feichi mediante amortiguadores dinámicos multifrecuencia instalados en el interior del tubo hueco, disipando más del 85% de la energía cinética.',
    ru: 'Ветровой резонанс при срыве вихрей Кармана ($f_v = St \\cdot v / D$) на пролетах 6-12 м устраняется установкой внутренних тросовых гасителей вибрации внутри трубы токопровода ТКЛ. Гасители поглощают более 85% энергии колебаний, исключая усталостное разрушение опорных изоляторов.',
  },
  sec3Title: {
    en: '3. Technical Specification Matrix: Solid Cast Resin (RIP/RIS) vs XLPE Insulated Tubular Busbar Systems',
    zh: '3. 核心技术参数与母线结构对比表：全固态浇注（RIP/RIS） vs 挤包交联聚乙烯（XLPE）绝缘管型母线',
    ja: '3. 設計パラメータ比較表：固体モールド（RIP/RIS） vs 押出架橋ポリエチレン（XLPE）絶縁チューブ型母線',
    es: '3. Matriz de Especificaciones Técnicas: Resina Impregnada (RIP/RIS) vs Aislamiento XLPE',
    ru: '3. Сравнительная таблица технических характеристик: токопроводы с литой RIP/RIS изоляцией и токопроводы с СПЭ изоляцией',
  },
  tableHeaders: {
    en: ['Technical Parameter', 'Solid Cast Resin (RIP/RIS / Feichi FE-BUS-RIP)', 'Cross-Linked Polyethylene (XLPE / Feichi FE-BUS-XLPE)', 'Russian GOST Arctic Insulated Busway (ТКЛ-УХЛ1)'],
    zh: ['核心技术参数', '全固态环氧浇注绝缘管母 (RIP/RIS / 飞驰 FE-BUS-RIP)', '挤包交联聚乙烯绝缘管母 (XLPE / 飞驰 FE-BUS-XLPE)', '俄标高寒全屏蔽管型母线 (ТКЛ-УХЛ1 系列)'],
    ja: ['設計パラメータ', '固体エポキシモールド管母線（RIP/RIS / 飛馳FE-BUS）', '架橋ポリエチレン管母線（XLPE / 飛馳FE-BUS）', 'ロシア耐寒完全遮蔽トコプロヴォド（ТКЛ-УХЛ1）'],
    es: ['Parámetro Técnico', 'Resina Impregnada en Papel (RIP/RIS)', 'Polietileno Reticulado Extruido (XLPE)', 'Токопровод ТКЛ-УХЛ1 para Climas Árticos'],
    ru: ['Технический параметр', 'Литая эпоксидная изоляция RIP/RIS (FE-BUS-RIP)', 'Изоляция из сшитого полиэтилена СПЭ (FE-BUS-XLPE)', 'Пофазно-изолированный токопровод ТКЛ-УХЛ1'],
  },
  tableRows: {
    en: [
      ['Rated Voltage Range', '10kV, 35kV, 66kV, 110kV up to 220kV', '10kV, 24kV, 35kV (Up to 40.5kV)', '35kV, 110kV, 220kV (ГОСТ 10693-81)'],
      ['Rated Continuous Current (In)', '1250 A up to 8000 A (Cu) / 6300 A (Al)', '800 A up to 4000 A (Cu/Al)', '1600 A up to 6300 A (Continuous Grid Link)'],
      ['Insulation System Structure', 'Vacuum Resin Impregnated Paper + Capacitive Screens', 'Triple Extruded XLPE + Outer Semi-Conductive Screen', 'Solid Polymeric Mould + Grounded Aluminium Sheath'],
      ['Surface Touch Voltage Safety', '0.0 V Touch-Safe (Continuously Grounded Shield)', '0.0 V Touch-Safe (Metal Outer Sheath Earth)', '0.0 V Touch-Safe (ПУЭ-7 §4.2 Complete Safety)'],
      ['Partial Discharge at 1.73U0', '< 5 pC (Zero Internal Void Breakdown)', '< 5 pC (IEC 60840 Compliant)', '< 10 pC (СТО Россети Strict Requirement)'],
      ['Short-Circuit Dynamic Peak (ip)', 'Up to 160 kA Peak Dynamic Electrodynamic Withstand', 'Up to 100 kA Peak', 'Up to 160 kA (50kA 3s Thermal / 125kA Dynamic)'],
      ['Ambient Temperature Rating', '-50°C to +55°C (Extreme Siberian Arctic УХЛ1)', '-40°C to +50°C', '-50°C to +45°C (ГОСТ 15150-69 УХЛ1)'],
      ['Applicable Standards', 'IEC 60137, IEC 62271-200, IEEE C37.23, GB/T 8349', 'IEC 60840, GB/T 12706, DL/T 1658', 'ГОСТ 10693-81, ТР ТС 004/2011, СТО РОССЕТИ'],
    ],
    zh: [
      ['额定电压等级范围', '10kV, 35kV, 66kV, 110kV 最高至 220kV', '10kV, 24kV, 35kV (最高 40.5kV 中压配电)', '35kV, 110kV, 220kV (俄标 ГОСТ 10693-81)'],
      ['额定持续工作电流 ($I_n$)', '$1250\text{A}$ 至 $8000\text{A}$ (铜管) / $6300\text{A}$ (铝管)', '$800\text{A}$ 至 $4000\text{A}$ (铜/铝合金管)', '$1600\text{A}$ 至 $6300\text{A}$ (大容量骨干电网进出线)'],
      ['主绝缘介质与电容屏拓扑', '高真空浇注环氧树脂浸纸 (RIP) + 均压电容铝箔屏', '三层共挤交联聚乙烯 (XLPE) + 外半导电绝缘屏蔽', '全固态高分子聚合物 + 接地铝屏蔽外壳 (ТКЛ)'],
      ['母线表面接地接触电压', '$0.0\text{ V}$（全屏蔽接地，人员可直接触摸）', '$0.0\text{ V}$（外屏蔽接地，杜绝触电隐患）', '$0.0\text{ V}$（符合俄规 ПУЭ-7 绝对人身安全）'],
      ['局部放电量 ($1.73 U_0$ 下)', '$< 5\text{ pC}$（绝缘内部零微气隙无电树枝老化）', '$< 5\text{ pC}$（符合 IEC 60840 与国标标准）', '$< 10\text{ pC}$（符合俄罗斯国家电网严格规范）'],
      ['动稳定耐受电流峰值 ($i_p$)', '最高达 $160\text{kA}$（承受 $50\text{kA}/3\text{s}$ 极端短路电动力）', '最高达 $100\text{kA}$ 峰值耐受', '最高达 $160\text{kA}$（短路冲击 $i_\\text{уд} \\ge 125\\text{kA}$）'],
      ['环境工作温度耐受', '$-50^\circ\text{C} \sim +55^\circ\text{C}$（西伯利亚极寒 УХЛ1 防凝露）', '$-40^\circ\text{C} \sim +50^\circ\text{C}$', '$-50^\circ\text{C} \sim +45^\circ\text{C}$（ГОСТ 15150-69 УХЛ1 极寒）'],
      ['符合国际与地区标准', 'IEC 60137, IEC 62271-200, IEEE C37.23, GB/T 8349', 'IEC 60840, GB/T 12706, DL/T 1658-2016', 'ГОСТ 10693-81, ТР ТС 004/2011, СТО РОССЕТИ'],
    ],
    ja: [
      ['定格電圧範囲', '10kV / 35kV / 66kV / 110kV / 220kV', '10kV / 24kV / 35kV', '35kV / 110kV / 220kV (GOST 10693)'],
      ['定格電流 (In)', '1250A 〜 8000A (銅) / 6300A (アルミ)', '800A 〜 4000A', '1600A 〜 6300A'],
      ['絶縁構造', '真空含浸エポキシ樹脂（RIP）＋均圧シールド', '3層共押出架橋PE（XLPE）＋半導電層', '固体高分子モールド＋接地アルミシース'],
      ['表面接触電位', '0.0V（完全遮蔽接地・直接接触安全）', '0.0V（接触安全）', '0.0V（ロシアPU-7適合）'],
      ['部分放電量 (1.73U0)', '< 5 pC（高絶縁信頼性）', '< 5 pC', '< 10 pC'],
      ['短絡動的ピーク耐力', '最大 160 kA（50kA/3s熱安定耐力）', '最大 100 kA', '最大 160 kA'],
      ['使用温度範囲', '-50℃〜+55℃（シベリア極寒УХЛ1対応）', '-40℃〜+50℃', '-50℃〜+45℃（GOST УХЛ1）'],
      ['規格適合', 'IEC 60137, IEC 62271, IEEE C37.23', 'IEC 60840, DL/T 1658', 'GOST 10693-81, СТО Россети'],
    ],
    es: [
      ['Rango de Tensión', '10kV, 35kV, 66kV, 110kV hasta 220kV', '10kV, 24kV, 35kV', '35kV, 110kV, 220kV (ГОСТ 10693)'],
      ['Corriente Nominal ($I_n$)', '1250 A hasta 8000 A (Cu) / 6300 A (Al)', '800 A hasta 4000 A', '1600 A hasta 6300 A'],
      ['Sistema de Aislamiento', 'Resina Impregnada RIP + Pantallas Capacitivas', 'XLPE Extruido Triple Capa', 'Polímero Sólido + Cubierta de Aluminio'],
      ['Tensión Superficial', '0.0 V Segura al Tacto (Blindada y Aterrizada)', '0.0 V Segura al Tacto', '0.0 V Segura al Tacto (ПУЭ-7)'],
      ['Descargas Parciales', '< 5 pC a 1.73 U0', '< 5 pC', '< 10 pC'],
      ['Pico Dinámico de Cortocircuito', 'Hasta 160 kA Pico', 'Hasta 100 kA Pico', 'Hasta 160 kA Pico'],
      ['Temperatura Ambiente', '-50°C a +55°C (Ártico Siberiano УХЛ1)', '-40°C a +50°C', '-50°C a +45°C (УХЛ1)'],
      ['Normas', 'IEC 60137, IEC 62271, IEEE C37.23', 'IEC 60840, DL/T 1658', 'ГОСТ 10693-81, СТО Россети'],
    ],
    ru: [
      ['Диапазон номинальных напряжений', '10, 35, 66, 110 и 220 кВ', '10, 24, 35 кВ', '35, 110, 220 кВ (ГОСТ 10693-81)'],
      ['Номинальный ток ($I_\\text{ном}$)', '1250 - 8000 А (медь) / 6300 А (алюминий)', '800 - 4000 А (медь/алюминий)', '1600 - 6300 А (магистральные схемы)'],
      ['Конструкция изоляции', 'Литая RIP/RIS изоляция с емкостными экранами', 'Трехслойный сшитый полиэтилен СПЭ', 'Твердая полимерная изоляция в алюминиевом кожухе'],
      ['Потенциал на поверхности', '0.0 В (заземленный экран, безопасен при касании)', '0.0 В (заземленный металлический экран)', '0.0 В (соответствие ПУЭ-7 §4.2)'],
      ['Уровень частичных разрядов (1.73U0)', '< 5 пКл (отсутствие деградации)', '< 5 пКл', '< 10 пКл (требования СТО Россети)'],
      ['Стойкость к токам КЗ ($i_\\text{уд}$)', 'до 160 кА (термическая стойкость 50 кА / 3 с)', 'до 100 кА', 'до 160 кА (ток КЗ 50 кА, ударный 125-160 кА)'],
      ['Температура эксплуатации', '-50°C ... +55°C (исполнение УХЛ1 для Сибири)', '-40°C ... +50°C', '-50°C ... +45°C (ГОСТ 15150-69 УХЛ1)'],
      ['Стандарты', 'IEC 60137, IEC 62271-200, IEEE C37.23', 'IEC 60840, DL/T 1658', 'ГОСТ 10693-81, ТР ТС 004/2011, СТО РОССЕТИ'],
    ],
  },
  sec4Title: {
    en: '4. Scenario-Based Insulated Tubular Busbar Selection & Siberian Arctic Substation Application Guide',
    zh: '4. 重点应用场景全绝缘管母选型决策与西伯利亚极寒变电站工程指南',
    ja: '4. 適用環境別絶縁チューブ型母線選定ガイドおよびシベリア極寒変電所対策',
    es: '4. Guía de Selección por Escenarios y Aplicaciones en Climas Árticos',
    ru: '4. Выбор типа токопровода по условиям объекта и применение в климате Сибири',
  },
  scenarios: {
    en: [
      [
        {
          title: 'Large Power Plant Generator Step-Up (GSU) & Main Transformer Heavy Current Connections (35kV–110kV / 4000A–8000A)',
          recommend: 'Recommendation: Solid Cast Resin RIP Insulated Copper Tubular Busbar (FE-BUS-110kV/6300A-RIP)',
          reason: 'Massive continuous current capacity (6300A), zero phase-to-phase short-circuit fault risk, and 0V surface touch safety inside dense plant corridors.',
        },
        {
          title: 'Substation GIS Switchgear to Overhead Line & Power Transformer Links (110kV/220kV Utility Transmission Bays)',
          recommend: 'Recommendation: Outdoor Heavy-Duty RIP Tubular Busway with Internal Aeolian Vibration Dampers (FE-BUS-220kV)',
          reason: 'Long span capability (up to 12m) without mid-span support towers, absorbing crosswind vortex vibrations and eliminating phase swinging under high winds.',
        },
        {
          title: 'Siberian Arctic Mining Complexes & Sub-zero Grid Interconnections (-50°C УХЛ1 / 20mm Glaze Ice / Industrial Heavy Pollution)',
          recommend: 'Recommendation: Siberian Heavy-Glaze Cast Resin Tubular Busway (ТКЛ-110/3150-УХЛ1) with Thermal Bellow Expansion Joints',
          reason: 'Solid sealed silicone rubber and aluminum casing prevents moisture condensation during cyclic temperature swings from -50°C to +40°C while resisting 20mm ice loading.',
        },
      ],
    ],
    zh: [
      [
        {
          title: '大型火电/水电/核电主发电机变压器组出线回路 (35kV–110kV / 4000A–8000A 超大电流)',
          recommend: '选型推荐：全固态浇注环氧绝缘铜管母线 (飞驰 FE-BUS-110kV/6300A-RIP 系列)',
          reason: '超大载流量（单根载流达 6300A~8000A），相间完全物理绝缘彻底杜绝相间短路燃弧，表面 0V 接地电位保障发电机厂房内巡检绝对安全。',
        },
        {
          title: '枢纽变电站 GIS 组合电器至主变压器高空跳线与出线跨线 (110kV/220kV 骨干输变电工程)',
          recommend: '选型推荐：户外型 RIP 电容屏绝缘管母 + 内置多频微风消振阻尼器 (FE-BUS-220kV/3150A)',
          reason: '支持长达 12 米大跨距自支撑布置无需中间钢构架支撑塔，内置阻尼器彻底消解冯·卡门微风共振，杜绝大风天气相间舞动碰线。',
        },
        {
          title: '西伯利亚极寒矿区、高纬度变电站与重工冶炼枢纽 (-50°C УХЛ1 / 20mm 极重覆冰 / 工业重重污秽)',
          recommend: '选型推荐：俄标高寒全屏蔽全浇注管型母线 (ТКЛ-110/3150-УХЛ1) + 不锈钢膨胀节伸缩补偿器',
          reason: '全固态真空浇注工艺耐受 -50°C 极寒低温热胀冷缩循环，外覆加厚耐腐蚀铝镁合金外壳承受 20mm 特重覆冰与 9 度高烈度地震剪切。',
        },
      ],
    ],
    ja: [
      [
        {
          title: '大容量発電所主変圧器出線（35kV〜110kV / 4000A〜8000A大電流）',
          recommend: '推奨：固体モールドRIP絶縁銅管母線（FE-BUS-110kV/6300A-RIP）',
          reason: '定格6300Aの大容量通電、相間短絡ゼロ、表面0V接地遮蔽により発電所構内の安全性を極大化。',
        },
        {
          title: '変電所GIS〜主変圧器架空ジャンパー線（110kV/220kV）',
          recommend: '推奨：屋外用RIPチューブ型母線＋内置カルマン渦制振ダンパー',
          reason: '最大12mの長スパン自立支持が可能で中間鉄塔を削減、風速微風共振を完全抑制。',
        },
        {
          title: 'シベリア極寒・20mm着氷鉱山変電設備（-50℃ УХЛ1）',
          recommend: '推奨：ロシアGOST ТКЛ-110/3150-УХЛ1＋伸縮補正ベローズ',
          reason: '-50℃極寒下での熱伸縮をベローズで吸収、20mm着氷重荷重および耐震9度に対応。',
        },
      ],
    ],
    es: [
      [
        {
          title: 'Conexión de Generador a Transformador Principal (35kV–110kV / 4000A–8000A)',
          recommend: 'Recomendación: Barra Tubular de Cobre Aislada RIP (FE-BUS-110kV/6300A-RIP)',
          reason: 'Capacidad de corriente masiva de 6300A, cero riesgo de arco entre fases y superficie exterior a 0V segura para operadores.',
        },
        {
          title: 'Enlaces de GIS a Transformadores de Potencia (110kV/220kV)',
          recommend: 'Recomendación: Barra Tubular RIP para Intemperie con Amortiguadores Eólicos',
          reason: 'Permite vanos de hasta 12m sin apoyos intermedios, eliminando oscilaciones eólicas y roturas por fatiga.',
        },
        {
          title: 'Subestaciones en Minería Ártica de Siberia (-50°C УХЛ1 / Hielo de 20mm)',
          recommend: 'Recomendación: Токопровод ТКЛ-110/3150-УХЛ1 con Juntas de Dilatación Térmica',
          reason: 'Resiste ciclos térmicos extremos de -50°C a +40°C, sobrecargas de hielo de 20mm y sismos de 9 grados.',
        },
      ],
    ],
    ru: [
      [
        {
          title: 'Схема генератор-трансформатор электростанций (35-110 кВ / 4000-8000 А)',
          recommend: 'Рекомендация: Пофазно-изолированный токопровод с литой RIP изоляцией (FE-BUS-110/6300-RIP)',
          reason: 'Пропускная способность до 8000 А, полное исключение междуфазных КЗ и потенциал 0 В на внешнем заземленном экране.',
        },
        {
          title: 'Связи КРУЭ 110-220 кВ с автотрансформаторами связи и ОРУ',
          recommend: 'Рекомендация: Открытый токопровод ТКЛ-110/220 с встроенными гасителями вибрации',
          reason: 'Обеспечивает безопорные пролеты до 12 м, полностью устраняя ветровой резонанс вихрей Кармана.',
        },
        {
          title: 'Подстанции горнодобывающих предприятий Сибири (-50°C УХЛ1 / стенка льда 20 мм)',
          recommend: 'Рекомендация: Комплектный токопровод ТКЛ-110/3150-УХЛ1 с сильфонными компенсаторами',
          reason: 'Монолитная полимерная изоляция выдерживает термоциклирование от -50°C до +40°C, гололедные нагрузки 20 мм и сейсмику 9 баллов.',
        },
      ],
    ],
  } as any,
  hasCalculator: 'busbar' as any,
  ctaTitle: {
    en: 'Need Substation Insulated Tubular Busbar CAD Layouts, Dynamic Stress Sizing & Russian GOST Опросный лист?',
    zh: '需要获取 35kV–220kV 全绝缘管型母线 CAD 施工图纸、短路电动力计算书与俄标 Опросный лист？',
    ja: '35kV〜220kV 完全絶縁チューブ型母線CAD図面、短絡電磁力計算書およびロシア問診票が必要ですか？',
    es: '¿Requiere Planos CAD de Barras Tubulares Aisladas 35kV–220kV, Cálculo de Cortocircuito o Cotización?',
    ru: 'Нужен проект токопровода ТКЛ 35-220 кВ, расчет электродинамической стойкости и Опросный лист Россети?',
  },
  ctaDesc: {
    en: 'Feichi High-Voltage Busway Engineering Dept in Shenyang (led by technical lead Henry) provides tubular skin effect sizing, span vibration resonance checks, short-circuit electrodynamic reports, and turnkey commercial proposals within 24 hours.',
    zh: '沈阳飞驰电气高压母线工程技术部（由技术负责人 Henry 主理）将在 24 小时内为您提供管径集肤效应核算、大跨距微风共振校核、短路动热稳定计算书及俄标合规交钥匙报价单。',
    ja: '飛馳電気技術チーム（担当：Henry）が24時間以内に表皮効果計算、長スパン共振検証、短絡電磁力計算書およびプロジェクト見積書を提出します。',
    es: 'El departamento técnico de Feichi en Shenyang (liderado por Henry) entregará sus cálculos de efecto piel, verificación de vanos y propuesta técnica en 24 horas.',
    ru: 'Инженерный отдел токопроводов Feichi Power в Шэньяне (гл. инженер Henry) предоставит расчет токовых нагрузок, аэродинамический расчет пролетов, расчет электродинамической стойкости при КЗ и коммерческое предложение за 24 часа.',
  },
};
