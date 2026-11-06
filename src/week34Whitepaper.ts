import type { WhitepaperItem } from './whitepapersData';

export const week34Whitepaper: WhitepaperItem = {
  id: 'week-34',
  week: 34,
  slug: '110kv-220kv-gas-insulated-transmission-lines-gil-vs-xlpe-guide',
  category: 'switchgear',
  categoryLabel: {
    en: '110kV–220kV Gas-Insulated Transmission Lines (GIL / Токопровод КРУЭ / IEC 62271-204 / ГОСТ Р 54828-2011)',
    zh: '110kV–220kV 气体绝缘金属封闭输电线路（GIL）vs 高压电缆选型白皮书（N2/SF6 混合环保气体 / 大容量直埋与管廊 / 俄标 КТПП-110/220）',
    ja: '110kV〜220kV ガス絶縁送電線路（GIL/IEC 62271-204/N2・SF6混合環境配慮型/GOST R 54828）設計指針',
    es: 'Líneas de Transmisión Aisladas en Gas 110kV–220kV (GIL / N2-SF6 Ecológico / IEC 62271-204 / ГОСТ Р 54828)',
    ru: 'Газоизолированные линии передач КЛЭ, КРУЭ и токопроводы 110-220 кВ на смеси N2/SF6 (ГОСТ Р 54828-2011 / СТО Россети 56947007-29.240.10.249-2017)',
  },
  title: {
    en: '110kV–220kV Gas-Insulated Transmission Lines (GIL: Rigid Aluminum Outer Enclosure & Coaxial Copper/Al Conductor with N2/SF6 Eco-Gas Mixture) Technical Whitepaper: 3150A–5000A Continuous Heavy Power Transmission Capacity ($C_{capacitance} < 55\\text{ pF/m}$), Low Dielectric Loss vs XLPE Cables, Thermal Soil Dissipation Differential Equations, 63kA/3s Short-Circuit Electrodynamic Stability, and Siberian -50°C Frost Heave Compensation (Benchmarking Siemens GIL, ABB/Hitachi ELK-3, Russian Elektroapparat & Pinggao)',
    zh: '110kV–220kV 气体绝缘金属封闭输电线路（GIL：高强度铝合金外壳、同轴高导电管形导体与 N2/SF6 混合环保绝缘气体）工程选型指南：3150A–5000A 超大容量连续输送能力（超低极间电容 $C_{capacitance} < 55\\text{ pF/m}$ 消除对地容性无功充电电流）、介质损耗对标高压交联聚乙烯（XLPE）电缆、直埋与综合管廊土壤热阻散热微积分方程、63kA/3s 极限短路电动力刚度力学模型与西伯利亚 -50°C 永久冻土冻胀自补偿伸缩节设计（深度对标德国西门子 GIL、瑞士 ABB/Hitachi ELK-3、俄罗斯圣彼得堡 Электроаппарат 与平高电气）',
    ja: '110kV〜220kV ガス絶縁送電線路（GIL：高強度アルミニウム外被・同軸導体・N2/SF6混合ガス）完全設計技術白書：3150A〜5000A大容量送電（超低静電容量 C<55pF/m により充電電流ゼロ化）、XLPE電力ケーブル対比誘電体損失解析、地中直埋・共同溝土壌熱放散微分方程式、63kA/3s短絡電磁力剛性力学、およびシベリア-50℃永久凍土凍上伸縮継手（Siemens GIL、ABB ELK-3、ロシアElektroapparatベンチマーク）',
    es: 'Líneas de Transmisión Aisladas en Gas 110kV–220kV (GIL: Envolvente Coaxial de Aluminio con Mezcla N2/SF6): Capacidad Continua de 3150A a 5000A ($C < 55\\text{ pF/m}$ sin Corriente de Carga Capacitiva), Comparativa de Pérdidas Dieléctricas vs Cables XLPE, Disipación Térmica en Suelo, Estabilidad Electrodinámica de 63kA/3s y Compensación Térmica en Permafrost Ártico a -50°C',
    ru: 'Техническое руководство по газоизолированным линиям электропередачи (ГИЛ/GIL) и жестким токопроводам 110-220 кВ с эко-газовой смесью N2/SF6: передача мощности токами 3150-5000 А при минимальной емкости ($C < 55$ пФ/м, отсутствие зарядной мощности кабелей), сравнение диэлектрических потерь с кабелями из сшитого полиэтилена (СПЭ/XLPE), расчет теплового рассеяния в грунте и туннелях, электродинамическая стойкость 63 кА / 3 с и компенсаторы морозного пучения в вечной мерзлоте Сибири до -50°C (Бенчмарк Siemens GIL, ABB ELK-3, ЗАО Электроаппарат и Pinggao)',
  },
  eyebrow: {
    en: 'GAS-INSULATED TRANSMISSION LINES & HEAVY POWER CORRIDORS (IEC 62271-204 / IEEE C37.122.4 / ГОСТ Р 54828-2011 / СТО РОССЕТИ)',
    zh: 'FE-SPEC-34 · 110kV–220kV 气体绝缘金属封闭输电线路（GIL）与大容量电力走廊专论（IEC 62271-204 / GB/T 22383 / ГОСТ Р 54828 / ТР ТС 004/2011）',
    ja: 'FE-SPEC-34 · 110kV〜220kV ガス絶縁送電線路（GIL）大容量基幹送電仕様書（IEC 62271-204 / IEEE C37.122 / ГОСТ Р 54828）',
    es: 'FE-SPEC-34 · DOSSIER DE LÍNEAS DE TRANSMISIÓN AISLADAS EN GAS GIL 110kV–220kV (IEC 62271-204 / IEEE / GOST)',
    ru: 'FE-SPEC-34 · РУКОВОДСТВО ПО ГАЗОИЗОЛИРОВАННЫМ ЛИНИЯМ ГИЛ (GIL) 110-220 кВ (ГОСТ Р 54828-2011 / СТО РОССЕТИ 56947007-29.240.10.249-2017)',
  },
  author: {
    en: 'Feichi High-Voltage GIL & Bulk Power Transmission Engineering Institute (Lead: Henry)',
    zh: '飞驰电气高压 GIL 气体绝缘输电线路与大容量走廊工程研究院（总工/外贸对接人：Henry）',
    ja: '飛馳電気 高圧GILガス絶縁送電・大容量電力網工学研究所（チーフ：Henry）',
    es: 'Instituto de Ingeniería de Líneas Aisladas en Gas GIL y Transmisión de Potencia Feichi (Líder: Henry)',
    ru: 'Инженерно-исследовательский институт газоизолированных токопроводов и линий электропередачи Feichi Power (Гл. инженер: Henry)',
  },
  standards: 'IEC 62271-204 / IEC 62271-1 / IEEE C37.122.4 / GB/T 22383-2019 / ГОСТ Р 54828-2011 / ГОСТ 15150-69 (УХЛ1) / ТР ТС 004/2011 / СТО РОССЕТИ 56947007-29.240.10.249-2017',
  readTime: {
    en: '26 min technical study (Includes Coaxial Electric Field Stress Equations, Soil Thermal Resistance Dissipation Integrals, Electrodynamic Short-Circuit Peak Forces & Russian КТПП-110/220 Questionnaire)',
    zh: '26 分钟深度技术研读（含同轴圆柱电场分布解析微分方程、土壤热阻温升微积分传热模型、短路电动力峰值力学刚度计算与俄标 КТПП-110/220 选型表单）',
    ja: '26分 専門設計解説（同軸円筒電界強度解析微分方程式・土壌熱抵抗放熱積分モデル・短絡電磁力ピーク剛性力学・ロシアKTPP-110/220選定問診票）',
    es: '26 min de lectura técnica (Incluye ecuaciones de campo eléctrico coaxial, integrales de disipación térmica en suelo, fuerzas electrodinámicas de cortocircuito y cuestionario КТПП-110/220)',
    ru: '26 мин технического изучения (включая расчет коаксиального распределения напряженности электрического поля, интегралы теплопередачи в грунте и туннелях, формулы электродинамических усилий при КЗ и полный Опросный лист на токопровод КРУЭ / ГИЛ 110-220 кВ)',
  },
  summary: {
    en: 'An authoritative technical whitepaper on 110kV and 220kV (up to 252kV) Gas-Insulated Transmission Lines (GIL: Russian GOST series KTPP-110, KTPP-220, Tokoprovod KRUE; Chinese FE-GIL-110/220 series) engineered for high-capacity underground transmission tunnels, hydro/nuclear power plant transformer-to-switchyard bulk connections, ultra-dense urban transmission corridors, and severe Siberian permafrost environments (continuous rated current 3150A to 5000A, short-time withstand current up to 63kA/3s, peak dynamic withstand up to 160kA). Benchmarking global leaders Siemens (Second-Generation GIL), ABB/Hitachi Energy (ELK-3 series), and Russian pioneer JSC Elektroapparat (St. Petersburg), this guide analyzes: 1) Physical comparison between rigid GIL and High-Voltage XLPE Cables—demonstrating that GIL has less than one-third the capacitance ($C_{GIL} < 55\\text{ pF/m}$ vs $C_{XLPE} > 180\\text{ pF/m}$), eliminating capacitive charging currents and expensive shunt reactors for lengths up to 50km; 2) $80\\%\\text{ N}_2 + 20\\%\\text{ SF}_6$ eco-friendly insulating gas mixture slashing greenhouse potential (GWP) by $> 75\\%$ while preventing gas liquefaction down to $-50^\\circ\\text{C}$; 3) Coaxial aluminum alloy structural tube design ($D_{enclosure} \\approx 400\\text{ mm} \\sim 550\\text{ mm}$) with epoxy resin post/disc insulators; 4) Direct-buried and tunnel thermal heat transfer models under heavy soil thermal resistivity ($g = 1.0 \\sim 2.5\\text{ K}\\cdot\\text{m/W}$); 5) Dynamic expansion bellow joints absorbing axial thermal dilation and frost heave soil shifts ($\\Delta L = \\alpha \\cdot L \\cdot \\Delta T$); and 6) Complete PJSC Rosseti GIL / enclosed busbar Опросный лист questionnaire templates.',
    zh: '系统阐述 110kV 与 220kV（最高 252kV 系统电压）气体绝缘金属封闭输电线路（GIL：俄标 КТПП-110, КТПП-220, Токопровод КРУЭ 系列；国标飞驰 FE-GIL-110/220 系列）在大型水电站/核电站主变出线跨越、特大城市地下综合管廊大容量输电走廊、密集化工园区防爆输电以及俄罗斯西伯利亚永久冻土地带中的核心电气力学机理与工程选型规范（额定连续通电电流 3150A 至 5000A，额定短时耐受电流高达 63kA/3s，额定峰值耐受电动力高达 160kA）。深度对标德国西门子（第二代 GIL 输电系统）、瑞士 ABB/Hitachi Energy（ELK-3 系列）以及俄罗斯圣彼得堡高压电气厂 ЗАО «Электроаппарат»，重点解析：1）刚性金属封闭 GIL 与高压交联聚乙烯（XLPE）电缆全生命周期深度物理对比——GIL 极间工作电容不足电缆的三分之一（$C_{GIL} < 55\\text{ pF/m}$ vs $C_{XLPE} > 180\\text{ pF/m}$），在长距离（达 50km）地下输电时彻底消除对地充电容性无功电流，免除昂贵的高压并联电抗器补偿投资；2）采用 $80\\%\\text{ N}_2 + 20\\%\\text{ SF}_6$ 环保混合绝缘气体，温室效应潜能值（GWP）削减 $75\\%$ 以上，且在 $-50^\\circ\\text{C}$ 极寒环境下彻底杜绝绝缘气体液化；3）同轴高导电铝合金管形结构（外壳直径 $D \\approx 400\\text{ mm} \\sim 550\\text{ mm}$）搭配高强度三支柱/盆式环氧树脂绝缘子；4）直埋回填与隧道架空工况下土壤热阻温升微积分传热学方程（土壤热阻率 $g = 1.0 \\sim 2.5\\text{ K}\\cdot\\text{m/W}$）；5）多自由度波纹补偿器与滑动支座自适应吸收热胀冷缩与冻土冻胀位移（$\\Delta L = \\alpha \\cdot L \\cdot \\Delta T$）；以及 6）符合俄罗斯国家电网 ПАО «Россети» 与海关联盟 ТР ТС 004/2011 认证的《Опросный лист на токопровод КРУЭ / ГИЛ 110-220 кВ》工程选型技术规范。',
    ja: '110kV/220kV ガス絶縁送電線路（GIL：ロシアGOST КТПП-110/220、飛馳FE-GIL-110/220）の完全設計解説書（定格電流3150A〜5000A、短時間耐電流63kA/3s、ピーク耐電流160kA）。Siemens GIL、ABB ELK-3、ロシアElektroapparatをベンチマークし、高圧XLPEケーブル対比静電容量1/3以下（C<55pF/m）、長距離（50km）送電時の充電無効電力ゼロ化、N2/SF6（80/20%）環境混合ガスによる-50℃耐寒性（液化防止）、同軸アルミニウム管構造（外径400〜550mm）、地中直埋熱放散解析、凍土凍上吸収伸縮ベローズ継手、およびロシアRosseti標準Опросный лист問診票を網羅。',
    es: 'Expediente técnico de Líneas de Transmisión Aisladas en Gas GIL 110kV–220kV (КТПП-110 / КТПП-220 / FE-GIL-110) para túneles urbanos y centrales hidroeléctricas (3150A a 5000A, Icw hasta 63kA/3s, Ipeak hasta 160kA). Demuestra que GIL tiene un tercio de la capacitancia que los cables XLPE ($C < 55\\text{ pF/m}$), eliminando reactancias de compensación en longitudes de hasta 50km. Emplea mezcla ecológica 80% N2 + 20% SF6 sin riesgo de licuefacción a -50°C, diseño coaxial de aluminio y juntas de expansión para permafrost.',
    ru: 'Полное техническое руководство по газоизолированным линиям электропередачи (ГИЛ/GIL) и жестким токопроводам КРУЭ 110-220 кВ серии КТПП-110, КТПП-220 на номинальные токи 3150-5000 А и токи термической стойкости до 63 кА / 3 с (электродинамическая стойкость 160 кА) по ГОСТ Р 54828-2011 и СТО Россети. Рассмотрены: сравнение с кабелями из сшитого полиэтилена (СПЭ/XLPE) — емкость ГИЛ в 3 раза ниже ($C < 55$ пФ/м), что исключает зарядную мощность и необходимость компенсационных шунтирующих реакторов на длинах до 50 км; эко-смесь газов $80\\%\\text{ N}_2 + 20\\%\\text{ SF}_6$ без ожижения при -50°C; коаксиальная конструкция из алюминиевого сплава; расчет рассеяния тепла в грунте; компенсаторы линейного расширения и морозного пучения вечной мерзлоты и полный Опросный лист ПАО Россети.',
  },
  sec1Title: {
    en: '1. Electromagnetic & Dielectric Physics: Gas-Insulated Lines (GIL) vs High-Voltage Cross-Linked Polyethylene (XLPE) Cables',
    zh: '1. 电磁场与介质物理学对比：气体绝缘金属封闭输电线路（GIL）vs 高压交联聚乙烯（XLPE）电缆深度剖析',
    ja: '1. 電磁界・誘電体物理比較：ガス絶縁送電線（GIL）vs 高圧架橋ポリエチレン（XLPE）電力ケーブル',
    es: '1. Física Electromagnética y Dieléctrica: Líneas Aisladas en Gas (GIL) vs Cables de Potencia XLPE',
    ru: '1. Электромагнитные и диэлектрические свойства: газоизолированные линии (ГИЛ/GIL) vs кабели из сшитого полиэтилена (СПЭ/XLPE)',
  },
  sec1Text: {
    en: `For high-capacity bulk power transmission ($P > 1000\\text{ MVA}$ at 220kV) across constrained corridors, electrical utilities face a critical choice between High-Voltage XLPE Underground Cables and Gas-Insulated Transmission Lines (GIL).

**Dielectric & Transmission Dynamics Comparison**:
1. **Ultra-Low Capacitance and Minimal Charging Current**:
   - The coaxial cylindrical geometry of GIL with gas insulation yields a dielectric constant $\\varepsilon_r \\approx 1.0$ (compared to $\\varepsilon_r \\approx 2.3$ for XLPE solid insulation):
     $$C_{GIL} = \\frac{2\\pi \\varepsilon_0 \\varepsilon_r}{\\ln(r_{outer} / r_{inner})} \\approx 50\\text{ pF/m} \\sim 55\\text{ pF/m}$$
   - Whereas XLPE cables exhibit $C_{XLPE} \\ge 180\\text{ pF/m} \\sim 220\\text{ pF/m}$.
   - **Critical Engineering Advantage**: For a 20km transmission run at 220kV, XLPE cables generate $> 65\\text{ Mvar}$ of capacitive charging reactive power requiring massive shunt reactors, while GIL generates $< 18\\text{ Mvar}$, allowing transmission up to 50km without reactive compensation.
2. **Current Carrying Ampacity ($3150\\text{A} \\sim 5000\\text{A}$ Continuous)**:
   - GIL utilizes heavy-gauge tubular aluminum/copper alloy conductors ($D_{conductor} \\approx 120\\text{ mm} \\sim 180\\text{ mm}$) with hollow central air circulation, achieving continuous ratings up to $5000\\text{A}$ in a single circuit (saving the need for multiple parallel cable runs).
3. **Intrinsic Fire Safety & Zero Aging**:
   - GIL contains zero flammable cross-linked polymers or oil fluids, eliminating fire hazards in urban underground tunnels and providing a design lifetime exceeding 50+ years with zero dielectric aging.`,
    zh: `在 110kV/220kV 大容量超高功率输电走廊（单回输送容量 $P > 1000\\text{ MVA}$）中，电气总包与电网公司面临着高压交联聚乙烯（XLPE）电缆与气体绝缘金属封闭输电线路（GIL）两大技术路径的核心选型抉择。

**两大输电拓扑介质绝缘与电磁动力学深度对比**：
1. **超低工作电容与极微容性对地充电电流**：
   - GIL 采用同轴圆柱金属导体与气体绝缘，相对介电常数 $\\varepsilon_r \\approx 1.0$（而高压 XLPE 固体绝缘介质 $\\varepsilon_r \\approx 2.3$）：
     $$C_{GIL} = \\frac{2\\pi \\varepsilon_0 \\varepsilon_r}{\\ln(r_{outer} / r_{inner})} \\approx 50\\text{ pF/m} \\sim 55\\text{ pF/m}$$
   - 而高压 XLPE 电缆工作电容高达 $C_{XLPE} \\ge 180\\text{ pF/m} \\sim 220\\text{ pF/m}$；
   - **重大工程价值**：在 220kV 线路长度达到 20km 时，XLPE 电缆每相产生超 $65\\text{ Mvar}$ 的无功充电电流，必须在两端变电站配置庞大且昂贵的高压并联电抗器（Shunt Reactor）；而 GIL 每相充电无功 $< 18\\text{ Mvar}$，输电距离可达 50km 以上而无需任何无功补偿站。
2. **单回超大通流能力（$3150\\text{A} \\sim 5000\\text{A}$ 连续载流）**：
   - GIL 内部采用大截面空心管形铝合金/铜导电杆（外径 $D \\approx 120\\text{ mm} \\sim 180\\text{ mm}$），集肤效应系数接近 1.0，单回直埋或管廊敷设即可承载 $5000\\text{A}$ 连续负荷，彻底替代 3~4 回并联敷设的笨重电缆群。
3. **本质防火安全与五十年零绝缘老化寿命**：
   - 管道内部无任何易燃聚合物与液体绝缘油，完全杜绝电缆火灾与爆燃炸裂；气体分子在密封铝合金金属管内不发生热氧老化，设计寿命达 50 年以上。`,
    ja: '220kV大容量送電（1000MVA以上）において、GILはガス比誘電率ε_r≈1.0により静電容量がXLPEケーブルの1/3以下（50〜55pF/m）。20km送電時の充電無効電力を極小化し高価な分路リアクトルを削減。導体外径120〜180mmのパイプ構造により単回線で5000A大電流を連続送電可能。可燃性絶縁材料ゼロによりトンネル内火災リスクを完全排除します。',
    es: 'En 220kV para más de 1000MVA, la tecnología GIL presenta una permitividad relativa $\\varepsilon_r \\approx 1.0$ logrando una capacitancia mínima ($C < 55\\text{ pF/m}$ vs $>180\\text{ pF/m}$ en cables XLPE). Esto elimina reactancias shunt para longitudes de hasta 50km. El conductor tubular de aluminio de 180mm transporta hasta 5000A continuos por circuito sin riesgo de incendio ni envejecimiento dieléctrico.',
    ru: 'При передаче мощности свыше 1000 МВА на напряжении 220 кВ линии ГИЛ (GIL) имеют удельную емкость всего 50-55 пФ/м благодаря газовой изоляции с $\\varepsilon_r \\approx 1.0$ (против 180-220 пФ/м у кабелей из сшитого полиэтилена СПЭ). Это устраняет зарядный ток и необходимость установки дорогостоящих шунтирующих реакторов на трассах длиной до 50 км. Трубчатый алюминиевый проводник обеспечивает длительный ток до 5000 А на одну цепь при полном отсутствии горючих полимеров и сроке службы более 50 лет.',
  },
  sec2Title: {
    en: '2. Environmental Gas Dynamics ($N_2/SF_6$ Eco-Mixture) & Soil Thermal Dissipation in Direct-Buried / Tunnel Trenches',
    zh: '2. 环保绝缘混合气体（$N_2/SF_6$）动力学与直埋/综合管廊土壤热阻散热微积分传热模型',
    ja: '2. 環境配慮型混合ガス（N2/SF6）ダイナミクスおよび地中直埋・共同溝土壌熱放散伝熱力学',
    es: '2. Dinámica de Gases Ecológicos (Mezcla N2/SF6) y Disipación Térmica en Suelo en Zanja Directa y Túneles',
    ru: '2. Эко-газовая смесь $N_2/SF_6$, исключение ожижения при -50°C и расчет теплоотдачи в грунте и кабельных коллекторах',
  },
  sec2Text: {
    en: `In extreme Siberian, CIS, and Northern European climates, pure SF6 gas liquefies at low temperatures under operational pressure ($P_{gas} \\ge 0.45\\text{ MPa}$ abs), causing dangerous dielectric breakdown.

**Eco-Gas Dynamics & Soil Heat Transfer Differential Formulation**:
1. **$80\\%\\text{ N}_2 + 20\\%\\text{ SF}_6$ Gas Mixture Optimization**:
   - Mixing $80\\%$ dry Nitrogen (N2) with $20\\%$ Sulfur Hexafluoride (SF6) maintains $> 85\\%$ of the dielectric breakdown strength of pure SF6 while lowering the liquefaction threshold down to $-50^\\circ\\text{C}$ (УХЛ1), slashing greenhouse gas GWP impact by $> 75\\%$.
2. **Soil Thermal Resistance & Steady-State Heat Dissipation ($g = 1.0 \\sim 2.5\\text{ K}\\cdot\\text{m/W}$)**:
   - The conductor temperature rise $\\Delta T_{cond}$ depends on Joule heating ($I^2 R_{ac}$) and thermal conduction through outer aluminum casing, fluidized backfill sand, and surrounding soil:
     $$\\Delta T_{cond} = I_{rms}^2 R_{ac} \\left[ \\frac{1}{2\\pi \\lambda_{gas}} \\ln\\left(\\frac{r_{enc}}{r_{cond}}\\right) + \\frac{1}{2\\pi \\lambda_{soil}} \\ln\\left(\\frac{2h_{depth}}{r_{enc}}\\right) \\right]$$
   - Aluminum casing emissivity $\\epsilon \\ge 0.85$ and low-resistance thermal backfill maintain conductor hot-spot temperature $T_{max} < 90^\\circ\\text{C}$ under $4000\\text{A}$ full continuous load.
3. **Axial Thermal Expansion Bellows ($-50^\\circ\\text{C} \\sim +90^\\circ\\text{C}$)**:
   - Compensates linear dilation ($\\Delta L = \\alpha_{Al} \\cdot L \\cdot \\Delta T \\approx 2.4\\text{ mm/m}$ per $100^\\circ\\text{C}$ delta) preventing mechanical buckling and soil permafrost frost heave displacement.`,
    zh: `在俄罗斯西伯利亚、独联体高寒高纬度地区，纯 SF6 气体在额定工作气压（$P_{gas} \\ge 0.45\\text{ MPa}$ 绝对压力）下极易在 $-30^\\circ\\text{C}$ 时发生严重液化，导致气体介质绝缘击穿强度断崖式下跌。

**环保混合气体动力学与地下直埋传热学微积分模型**：
1. **$80\\%\\text{ N}_2 + 20\\%\\text{ SF}_6$ 环保混合绝缘气体黄金配比**：
   - 采用 $80\\%$ 高纯干燥氮气（N2）与 $20\\%$ 六氟化硫（SF6）混合气体，在 $-50^\\circ\\text{C}$ 严寒工况下绝缘气体完全不液化（俄标 УХЛ1 认证），绝缘耐受强度达到纯 SF6 的 $85\\%$ 以上，且温室效应潜能值（GWP）大幅下降 $75\\%$。
2. **直埋回填与地下综合管廊土壤热阻传热学稳态方程**：
   - 导体中心稳态温升 $\\Delta T_{cond}$ 取决于一次大电流焦耳热（$I^2 R_{ac}$）及通过气体自然对流、外壳热辐射与土壤热阻（$g = 1.0 \\sim 2.5\\text{ K}\\cdot\\text{m/W}$）的综合散热路径：
     $$\\Delta T_{cond} = I_{rms}^2 R_{ac} \\left[ \\frac{1}{2\\pi \\lambda_{gas}} \\ln\\left(\\frac{r_{enc}}{r_{cond}}\\right) + \\frac{1}{2\\pi \\lambda_{soil}} \\ln\\left(\\frac{2h_{depth}}{r_{enc}}\\right) \\right]$$
   - 铝合金外壳表面覆涂高发射率涂层（$\\epsilon \\ge 0.85$），配合低热阻回填流态砂，在 $4000\\text{A}$ 满负荷连续通流下主导电杆最高温升严格控制在 $T_{max} < 90^\\circ\\text{C}$ 安全温度以内。
3. **多自由度轴向不锈钢波纹管膨胀补偿节**：
   - 铝合金热膨胀系数 $\\alpha_{Al} \\approx 23.8 \\times 10^{-6}\\text{ K}^{-1}$，在 $-50^\\circ\\text{C} \\sim +90^\\circ\\text{C}$（温差 $\\Delta T = 140^\\circ\\text{C}$）剧烈温度交变与永久冻土冻胀位移下，波纹补偿器自动吸收每 100 米高达 $330\\text{ mm}$ 的轴向伸缩位移，杜绝管道弯曲失稳与法兰螺栓剪切破坏。`,
    ja: 'シベリア酷寒環境下でのSF6液化を防ぐため、N2/SF6（80%/20%）混合ガスを採用し-50℃でも液化ゼロ。土壌熱抵抗（g=1.0〜2.5K・m/W）に対する伝熱解析に基づき、4000A通電時でも最高温度90℃以下を維持。アルミニウムの熱膨張（140℃温度差で約3.3mm/m）および凍土変位を多自由度ステンレスベローズ伸縮継手で完全吸収します。',
    es: 'Para evitar la licuefacción del SF6 a bajas temperaturas, se utiliza una mezcla del 80% N2 + 20% SF6 operable hasta -50°C (УХЛ1) con reducción del 75% del efecto invernadero. Las ecuaciones de transferencia térmica en suelo garantizan que con 4000A la temperatura no supere 90°C. Los fuelles de expansión de acero inoxidable absorben dilataciones de 3.3mm/m causadas por gradientes térmicos en permafrost.',
    ru: 'При давлении 0.45 МПа чистый элегаз SF6 начинает сжижаться при -30°C. Применение смеси $80\\%\\text{ N}_2 + 20\\%\\text{ SF}_6$ исключает ожижение газа вплоть до -50°C (исполнение УХЛ1) и снижает эквивалентный углеродный след на 75%. Расчет теплоотдачи в грунте гарантирует нагрев токоведущей жилы не более 90°C при токе 4000 А. Сильфонные компенсаторы из нержавеющей стали компенсируют температурные удлинения до 330 мм на каждые 100 м трассы при морозном пучении грунтов.',
  },
  sec3Title: {
    en: '3. Technical Benchmarking Matrix: Feichi FE-GIL-110/220 vs. Siemens 2nd-Gen GIL vs. ABB/Hitachi ELK-3 vs. Russian Elektroapparat KTPP',
    zh: '3. 国际顶级高压 GIL 输电线路核心技术参数深度对标表：飞驰 FE-GIL-110/220 vs. 德国西门子 GIL vs. 瑞士 ABB ELK-3 vs. 俄罗斯 ЗАО Электроаппарат КТПП',
    ja: '3. 国際トップガス絶縁送電線（GIL）技術仕様比較：飛馳 FE-GIL-110/220 vs. Siemens GIL vs. ABB ELK-3 vs. ロシア Elektroapparat KTPP',
    es: '3. Matriz de Benchmarking Técnico: Feichi FE-GIL-110/220 vs. Siemens GIL vs. ABB ELK-3 vs. Elektroapparat КТПП (Rusia)',
    ru: '3. Сравнительная матрица параметров: Feichi FE-GIL-110/220 (КТПП-110) vs. Siemens GIL vs. ABB ELK-3 vs. ЗАО Электроаппарат КТПП-110/220',
  },
  tableHeaders: {
    en: ['Technical Specification & Parameter', 'Feichi FE-GIL-110/220 (УХЛ1)', 'Siemens 2nd-Gen GIL System', 'ABB / Hitachi Energy ELK-3 GIL', 'Russian ЗАО Электроаппарат КТПП'],
    zh: ['核心技术参数 / 性能维度', '飞驰电气 FE-GIL-110/220 (УХЛ1)', '德国西门子第二代 GIL 输电系统', '瑞士 ABB / Hitachi ELK-3 系列', '俄罗斯 Электроаппарат КТПП 系列'],
    ja: ['技術仕様・性能パラメータ', '飛馳電気 FE-GIL-110/220 (УХЛ1)', 'Siemens 第2世代GILシステム', 'ABB / Hitachi ELK-3 GIL', 'ロシア Электроаппарат КТПП'],
    es: ['Parámetro Técnico', 'Feichi FE-GIL-110/220 (УХЛ1)', 'Siemens GIL 2da Generación', 'ABB ELK-3 GIL (Hitachi)', 'Elektroapparat КТПП (Rusia)'],
    ru: ['Технический параметр', 'Feichi FE-GIL-110/220 / КТПП УХЛ1', 'Siemens GIL 2-го поколения', 'ABB / Hitachi Energy ELK-3', 'ЗАО Электроаппарат КТПП-110/220'],
  },
  tableRows: {
    en: [
      ['System Rated Voltage (Ur)', '110 kV, 126 kV, 220 kV, 252 kV', '110 kV, 145 kV, 245 kV, 400 kV', '110 kV, 145 kV, 245 kV, 500 kV', '110 kV, 220 kV (ГОСТ 1516.3)'],
      ['Rated Continuous Current (Ir)', '3150 A, 4000 A, 5000 A Continuous', '3150 A, 4000 A, 4500 A', '3150 A, 4000 A, 5000 A', '2000 A, 3150 A, 4000 A'],
      ['Short-Time Thermal Current (Icw)', '50 kA / 3s, 63 kA / 3s Dynamic', '50 kA / 3s, 63 kA / 3s', '50 kA / 3s, 63 kA / 3s', '40 kA / 3s, 50 kA / 3s (ГОСТ)'],
      ['Peak Dynamic Withstand (Ipeak)', '125 kA / 160 kA Peak Electrodynamic', '125 kA / 160 kA Peak', '125 kA / 160 kA Peak', '100 kA / 125 kA Peak'],
      ['Operating Working Capacitance', '< 55 pF/m (Eliminates Shunt Reactors)', '< 55 pF/m', '< 58 pF/m', '< 60 пФ/м (ГОСТ Р 54828)'],
      ['Insulating Gas Chemistry', '80% N2 + 20% SF6 (Zero Liquefaction at -50°C)', '80% N2 + 20% SF6 or Pure SF6', '80% N2 + 20% SF6 Eco-Mix', 'Элегаз SF6 или смесь N2/SF6'],
      ['Enclosure Outer Diameter (D)', '420 mm (110kV) / 520 mm (220kV)', '400 mm / 500 mm', '420 mm / 520 mm', '450 мм / 550 мм'],
      ['Enclosure Shell Metallurgy', 'Extruded High-Strength Al-Mg Alloy 6063', 'Al-Mg Alloy Pipe (Seamless)', 'High-Grade Aluminum Alloy', 'Алюминиевый сплав АД31Т1'],
      ['Laying Installation Modes', 'Direct-Buried, Tunnel Trench, Open Air, Vertical Shaft', 'Direct-Buried / Tunnel / Shaft', 'Tunnel / Direct-Buried / Bridge', 'Туннели, открытая эстакада, шахты'],
      ['Ambient Climate Rating', '-50°C to +55°C (GOST 15150-69 УХЛ1)', '-40°C to +50°C', '-40°C to +50°C', '-50°C to +45°C (УХЛ1 Siberian)'],
      ['Design Maintenance-Free Life', '≥ 50 Years (Zero Polymer Degradation)', '≥ 50 Years', '≥ 50 Years', '≥ 40-50 лет по ГОСТ'],
      ['PD Online Monitoring System', 'UHF Partial Discharge + Dual-Gas Sensor', 'UHF Acoustic & RF Sensors', 'UHF Optical Monitoring', 'Датчики ЧР (UHF) + контроль газа'],
    ],
    zh: [
      ['电网额定最高电压等级 (Ur)', '110 kV, 126 kV, 220 kV, 252 kV', '110 kV, 145 kV, 245 kV, 400 kV', '110 kV, 145 kV, 245 kV, 500 kV', '110 kV, 220 kV (ГОСТ 1516.3)'],
      ['额定连续通电电流 (Ir)', '3150 A, 4000 A, 5000 A 连续载流', '3150 A, 4000 A, 4500 A', '3150 A, 4000 A, 5000 A', '2000 A, 3150 A, 4000 A'],
      ['额定短时耐受电流 (Icw)', '50 kA / 3s, 63 kA / 3s 动热稳定', '50 kA / 3s, 63 kA / 3s', '50 kA / 3s, 63 kA / 3s', '40 kA / 3s, 50 kA / 3s (ГОСТ)'],
      ['额定峰值耐受电流 (Ipeak)', '125 kA / 160 kA 峰值电动力冲击', '125 kA / 160 kA 峰值', '125 kA / 160 kA 峰值', '100 kA / 125 kA 峰值'],
      ['极间工作工作电容指标', '< 55 pF/m（消除容性充电电流）', '< 55 pF/m', '< 58 pF/m', '< 60 пФ/м（ГОСТ Р 54828）'],
      ['绝缘气体介质化学配比', '80% N2 + 20% SF6 混合气体（-50°C不液化）', '80% N2 + 20% SF6 或纯 SF6', '80% N2 + 20% SF6 环保混合', 'Элегаз SF6 或混合气体 N2/SF6'],
      ['外壳管道标准外径 (D)', '420 mm (110kV) / 520 mm (220kV)', '400 mm / 500 mm', '420 mm / 520 mm', '450 мм (110кВ) / 550 мм (220кВ)'],
      ['外壳管壁高强度冶金材质', '高强度耐腐蚀 6063-T6 铝镁合金挤压管', '无缝铝合金管材', '高牌号铝合金焊接管', 'Алюминиевый сплав АД31Т1'],
      ['工程敷设方式适配能力', '地下直埋回填、综合管廊、架空管桥、垂直竖井', '直埋、隧道、垂直竖井', '管廊、直埋、桥梁跨越', 'Туннели, открытая эстакада, шахты'],
      ['环境气候耐受工作范围', '-50°C 至 +55°C（俄标 УХЛ1 极寒高纬度认证）', '-40°C 至 +50°C', '-40°C 至 +50°C', '-50°C 至 +45°C (УХЛ1 极寒型)'],
      ['全生命周期免维护设计寿命', '≥ 50 年（零聚合物固体介质老化）', '≥ 50 年', '≥ 50 年', '≥ 40-50 年（符合俄标规范）'],
      ['局放与气体在线监测系统', '特高频（UHF）局放传感器 + 混合气体微水密度', 'UHF 超声与射频监测', 'UHF 光学/电磁双监测', 'Датчики ЧР (UHF) + контроль газа'],
    ],
    ja: [
      ['定格電圧 (Ur)', '110 kV, 126 kV, 220 kV, 252 kV', '110 kV 〜 400 kV', '110 kV 〜 500 kV', '110 kV, 220 kV'],
      ['定格電流 (Ir)', '3150A, 4000A, 5000A 連続', '3150A 〜 4500A', '3150A 〜 5000A', '2000A 〜 4000A'],
      ['短時間耐電流 (Icw)', '50 kA / 3s, 63 kA / 3s', '50 kA / 3s, 63 kA / 3s', '50 kA / 3s, 63 kA / 3s', '40 kA / 3s, 50 kA / 3s'],
      ['ピーク耐電流 (Ipeak)', '125 kA / 160 kA ピーク', '125 kA / 160 kA ピーク', '125 kA / 160 kA ピーク', '100 kA / 125 kA ピーク'],
      ['動作静電容量', '< 55 pF/m (リアクトル不要)', '< 55 pF/m', '< 58 pF/m', '< 60 pF/m'],
      ['絶縁ガス組成', '80% N2 + 20% SF6 (-50℃不液化)', '80% N2 + 20% SF6', '80% N2 + 20% SF6', 'SF6 / N2+SF6'],
      ['外郭パイプ径', '420 mm (110kV) / 520 mm (220kV)', '400 mm / 500 mm', '420 mm / 520 mm', '450 mm / 550 mm'],
      ['耐寒温度定格', '-50°C 〜 +55°C (ロシア УХЛ1 適合)', '-40°C 〜 +50°C', '-40°C 〜 +50°C', '-50°C 〜 +45°C (УХЛ1)'],
      ['設計寿命', '≥ 50 年 (絶縁劣化ゼロ)', '≥ 50 年', '≥ 50 年', '≥ 40-50 年'],
    ],
    es: [
      ['Tensión Nominal (Ur)', '110 kV, 126 kV, 220 kV, 252 kV', '110 kV a 400 kV', '110 kV a 500 kV', '110 kV, 220 kV'],
      ['Corriente Nominal (Ir)', '3150 A, 4000 A, 5000 A Continuo', '3150 A a 4500 A', '3150 A a 5000 A', '2000 A a 4000 A'],
      ['Corriente de Cortocircuito', '50 kA / 3s, 63 kA / 3s Dinámico', '50 kA / 3s, 63 kA / 3s', '50 kA / 3s, 63 kA / 3s', '40 kA / 3s, 50 kA / 3s'],
      ['Capacitancia de Trabajo', '< 55 pF/m (Sin Reactancias Shunt)', '< 55 pF/m', '< 58 pF/m', '< 60 pF/m'],
      ['Composición de Gas', '80% N2 + 20% SF6 (Operable a -50°C)', '80% N2 + 20% SF6', '80% N2 + 20% SF6', 'SF6 / N2+SF6'],
      ['Diámetro Exterior', '420 mm (110kV) / 520 mm (220kV)', '400 mm / 500 mm', '420 mm / 520 mm', '450 mm / 550 mm'],
      ['Rango de Temperatura', '-50°C a +55°C (Clima Ártico УХЛ1)', '-40°C a +50°C', '-40°C a +50°C', '-50°C a +45°C (УХЛ1)'],
      ['Vida Útil de Diseño', '≥ 50 Años (Sin Degradación)', '≥ 50 Años', '≥ 50 Años', '≥ 40-50 Años'],
    ],
    ru: [
      ['Номинальное напряжение сети', '110 кВ, 126 кВ, 220 кВ, 252 кВ', '110 кВ, 145 кВ, 245 кВ, 400 кВ', '110 кВ, 145 кВ, 245 кВ, 500 кВ', '110 кВ, 220 кВ (ГОСТ 1516.3)'],
      ['Длительный номинальный ток', '3150 А, 4000 А, 5000 А длительно', '3150 А, 4000 А, 4500 А', '3150 А, 4000 А, 5000 А', '2000 А, 3150 А, 4000 А'],
      ['Ток термической стойкости (Iтерм)', '50 кА / 3 с, 63 кА / 3 с', '50 кА / 3 с, 63 кА / 3 с', '50 кА / 3 с, 63 кА / 3 с', '40 кА / 3 с, 50 кА / 3 с (ГОСТ)'],
      ['Электродинамическая стойкость', '125 кА / 160 кА ударный пик', '125 кА / 160 кА', '125 кА / 160 кА', '100 кА / 125 кА'],
      ['Рабочая емкость фазы', '< 55 пФ/м (исключает шунтирующие реакторы)', '< 55 пФ/м', '< 58 пФ/м', '< 60 пФ/м (ГОСТ Р 54828)'],
      ['Изоляционный газ', '80% N2 + 20% SF6 (без ожижения при -50°C)', '80% N2 + 20% SF6 или SF6', '80% N2 + 20% SF6 эко-смесь', 'Элегаз SF6 или смесь N2/SF6'],
      ['Внешний диаметр оболочки', '420 мм (110 кВ) / 520 мм (220 кВ)', '400 мм / 500 мм', '420 мм / 520 мм', '450 мм (110 кВ) / 550 мм (220 кВ)'],
      ['Материал оболочки трубы', 'Высокопрочный сплав АД31Т1 (6063-T6)', 'Алюминиевый сплав', 'Алюминиевый сплав', 'Алюминиевый сплав АД31Т1'],
      ['Способы прокладки', 'Прямая укладка в грунт, коллекторы, эстакады, шахты', 'В грунт, туннели, шахты', 'Коллекторы, в грунт, мосты', 'Туннели, эстакады, шахты гидростанций'],
      ['Климатическое исполнение', '-50°C...+55°C (ГОСТ 15150-69 УХЛ1 для Сибири)', '-40°C...+50°C', '-40°C...+50°C', '-50°C...+45°C (УХЛ1)'],
      ['Расчетный срок службы', '≥ 50 лет (абсолютное отсутствие старения изоляции)', '≥ 50 лет', '≥ 50 лет', '≥ 40-50 лет по стандартам ПАО Россети'],
      ['Система онлайн-мониторинга', 'СВЧ датчики ЧР (UHF) + плотность смеси газов', 'UHF датчики ЧР', 'UHF оптический мониторинг', 'Датчики ЧР (UHF) + контроль влажности'],
    ],
  },
  sec4Title: {
    en: '4. Scenario-Based Application Decision Guide: Hydro/Nuclear Power Outlets, Urban Tunnels & Siberian Permafrost',
    zh: '4. 重点应用场景工程选型与系统集成决策指南',
    ja: '4. 適用産業別選定マトリクス：水力・原子力発電所引出線・都市共同溝・シベリア永久凍土',
    es: '4. Guía de Decisión por Sector: Centrales Hidroeléctricas, Túneles Urbanos y Permafrost Ártico',
    ru: '4. Руководство по выбору оборудования: выдача мощности ГЭС/АЭС, городские кабельные коллекторы и трассы в вечной мерзлоте',
  },
  scenarios: {
    en: [
      {
        title: 'Large Hydroelectric Dam & Nuclear Power Plant Bulk Transmission Outlets (P > 1500MVA)',
        recommend: 'Recommendation: Feichi FE-GIL-220 5000A Dual-Circuit System (КТПП-220)',
        reason: 'Direct vertical shaft and tunnel routing with zero fire risk, saving 80% footprint compared to open-air busbars and eliminating cable explosion hazards.',
      },
      {
        title: 'High-Density Mega-City Underground Transmission Corridors (110kV/220kV > 10km)',
        recommend: 'Recommendation: Direct-Buried Eco-Gas N2/SF6 GIL with Ultra-Low Capacitance',
        reason: 'Eliminates expensive urban shunt reactor substation real estate, transmitting 3150A continuously with EMF magnetic fields < 1.0 μT at surface level.',
      },
      {
        title: 'Severe Siberian Arctic & Mining Bulk Power Transmission (-50°C УХЛ1 Permafrost)',
        recommend: 'Recommendation: Arctic Armored Skid-Mounted / Elevated GIL with Axial Bellows',
        reason: 'Eco-gas 80% N2 + 20% SF6 eliminates gas liquefaction, with flexible expansion bellows accommodating frost heave ground displacement up to 330mm/100m.',
      },
    ],
    zh: [
      {
        title: '大型水电站大坝地下厂房、核电站主变出线至开关站跨越（大容量 P > 1500MVA）',
        recommend: '选型推荐：飞驰 FE-GIL-220 5000A 双回大容量金属封闭线路（俄标 КТПП-220）',
        reason: '可在垂直高差 100m 以上竖井与倾斜出线洞中无火灾隐患敷设，较敞开式管形母线占地缩减 80%，彻底消除高压电缆绝缘老化击穿爆燃危险。',
      },
      {
        title: '特大城市中心密集地下综合管廊大容量主干电网（110kV/220kV 长距离 > 10km 输电）',
        recommend: '选型推荐：环保型 N2/SF6 混合绝缘气体直埋/管廊 GIL 输电线路',
        reason: '超低工作电容彻底免除城市中心昂贵的高压并联电抗器占地，单回连续输送 3150A~4000A，地面磁场辐射强度 $< 1.0\\,\\mu\\text{T}$（满足严苛环保要求）。',
      },
      {
        title: '俄罗斯西伯利亚极寒矿区与远东永久冻土电力走廊（-50°C 严寒与冻胀 УХЛ1）',
        recommend: '选型推荐：极寒高强度铝合金架空/直埋 GIL 输电线路 + 多自由度波纹补偿器',
        reason: '$80\\%\\text{ N}_2 + 20\\%\\text{ SF}_6$ 彻底消除极寒气体液化风险，波纹补偿节自适应吸收冻土冻胀与温差位移（每百米达 330mm），完全符合俄罗斯 ПАО «Россети» 标准规范。',
      },
    ],
    ja: [
      {
        title: '大型水力ダム・原子力発電所主変圧器引出大容量送電（P > 1500MVA）',
        recommend: '推奨：飛馳 FE-GIL-220 5000A 2回線システム（КТПП-220）',
        reason: '垂直シャフト内での完全不燃敷設が可能。占有スペースを80%削減し火災リスクをゼロ化。',
      },
      {
        title: '大都市地下共同溝長距離基幹送電線路（110kV/220kV 送電距離 > 10km）',
        recommend: '推奨：環境配慮型N2/SF6混合ガス直埋・管路GIL',
        reason: '低静電容量により分路リアクトル用地費をゼロ化。地表電磁界<1.0μTの環境調和。',
      },
      {
        title: 'ロシア・シベリア極寒鉱山・永久凍土送電網 (-50℃ УХЛ1 酷寒環境)',
        recommend: '推奨：極寒仕様架空・直埋GIL＋凍上吸収ベローズ継手',
        reason: 'N2/SF6混合ガスにより氷点下50℃でも液化ゼロ。凍土変位を自動吸収。',
      },
    ],
    es: [
      {
        title: 'Centrales Hidroeléctricas y Nucleares para Evacuación de Potencia (P > 1500MVA)',
        recommend: 'Recomendación: Sistema Doble Circuito Feichi FE-GIL-220 5000A (КТПП-220)',
        reason: 'Instalación segura en pozos verticales y túneles sin riesgo de incendio, ahorrando 80% de espacio.',
      },
      {
        title: 'Túneles Urbanos de Alta Densidad en Grandes Metrópolis (> 10km en 220kV)',
        recommend: 'Recomendación: GIL Aislado con Mezcla Ecológica N2/SF6 de Baja Capacitancia',
        reason: 'Elimina reactancias shunt urbanas con radiación magnética superficial < 1.0 μT.',
      },
      {
        title: 'Regiones Mineras Árticas en Siberia con Suelos de Permafrost (-50°C УХЛ1)',
        recommend: 'Recomendación: Línea GIL Elevada o Directa con Juntas de Dilatación Articuladas',
        reason: 'La mezcla 80% N2 + 20% SF6 no se licúa a -50°C absorbiendo movimientos de congelamiento.',
      },
    ],
    ru: [
      {
        title: 'Схемы выдачи мощности крупных ГЭС, ГАЭС и АЭС от блочных трансформаторов (P > 1500 МВА)',
        recommend: 'Рекомендация: Газоизолированная линия Feichi FE-GIL-220 на ток 5000 А (КТПП-220)',
        reason: 'Прокладка в вертикальных шахтах высотой свыше 100 м и наклонных туннелях при 100% пожаровзрывобезопасности, сокращение габаритов на 80% по сравнению с открытыми ошиновками.',
      },
      {
        title: 'Магистральные кабельные коллекторы мегаполисов (110-220 кВ протяженностью свыше 10 км)',
        recommend: 'Рекомендация: Эко-ГИЛ прямой прокладки на смеси N2/SF6 с ультранизкой емкостью',
        reason: 'Исключает необходимость строительства подстанций с шунтирующими реакторами в черте города, длительный ток 3150-4000 А, напряженность магнитного поля на поверхности земли менее 1.0 мкТл.',
      },
      {
        title: 'Горнодобывающие предприятия и сетевые коридоры Сибири и вечной мерзлоты (-50°C, УХЛ1)',
        recommend: 'Рекомендация: Эстакадная или подземная линия ГИЛ 110-220 кВ с сильфонными компенсаторами',
        reason: 'Смесь $80\\%\\text{ N}_2 + 20\\%\\text{ SF}_6$ полностью исключает ожижение газа при -50°C, а компенсаторы воспринимают перемещения грунта при морозном пучении до 330 мм на 100 м.',
      },
    ],
  },
  hasCalculator: 'gil' as any,
  ctaTitle: {
    en: 'Need Tunnel Thermal Sizing Calculations or Russian GOST Опросный лист for 110kV/220kV GIL / KTPP?',
    zh: '需要获取 110kV/220kV GIL 气体绝缘输电线路隧道热阻计算书或俄标 Опросный лист 选型方案？',
    ja: '110kV/220kV GIL 送電線路熱抵抗計算書やロシアGOST問診票が必要ですか？',
    es: '¿Requiere Cálculos Térmicos de Túnel o Cuestionario GOST para GIL 110kV/220kV (КТПП)?',
    ru: 'Требуется тепловой расчет прокладки ГИЛ в грунте/туннеле или Опросный лист на токопровод КРУЭ / ГИЛ 110-220 кВ КТПП-110?',
  },
  ctaDesc: {
    en: 'Connect directly with technical lead Henry to receive complete coaxial electromagnetic simulations, soil backfill thermal profiles, single-line diagrams, and Russian PJSC Rosseti certified commercial proposals within 24 hours.',
    zh: '直接与技术负责人 Henry 沟通，获取同轴电磁场仿真分析报告、回填土壤传热温升曲线、一次单线图（SLD）及符合俄罗斯国家电网认证的正式报价单（24 小时内响应）。',
    ja: '技術責任者 Henry に直接ご連絡ください。電磁界シミュレーション、土壌伝熱計算書、単線結線図（SLD）およびロシアRosseti認定見積書を24時間以内に提供します。',
    es: 'Contacte directamente con el líder técnico Henry para obtener simulaciones electromagnéticas, perfiles térmicos en suelo, diagramas unifilares y propuestas comerciales certificadas en 24 horas.',
    ru: 'Свяжитесь напрямую с техническим руководителем Henry для получения электромагнитного расчета, тепловой модели прокладки в грунте, однолинейных схем и коммерческого предложения по стандартам ПАО Россети в течение 24 часов.',
  },
};
