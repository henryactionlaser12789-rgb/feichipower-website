import type { WhitepaperItem } from './whitepapersData';

export const week38Whitepaper: WhitepaperItem = {
  id: 'week-38',
  week: 38,
  slug: '10kv-35kv-heavy-duty-surge-arrester-substation-overvoltage-insulation-coordination-guide',
  category: 'switchgear',
  categoryLabel: {
    en: '10kV–35kV Gapless Metal-Oxide Surge Arresters (MOSA / ОПН-10/35 / IEC 60099-4 / ГОСТ Р 52725-2007)',
    zh: '10kV–35kV 变电站氧化锌避雷器（MOA）与绝缘配合专论（雷电陡波冲击 / 陡波放电残压 / 俄标 ОПН-П-10/35 / 硅橡胶防爆防污）',
    ja: '10kV〜35kV 酸化亜鉛避雷器（MOA/IEC 60099-4/急峻波放電耐力/GOST R 52725）絶縁協調設計指針',
    es: 'Apartarrayos de Óxido Metálico sin Chispómetros 10kV–35kV (MOSA / ОПН / IEC 60099-4 / ГОСТ Р 52725)',
    ru: 'Ограничители перенапряжений нелинейные ОПН-10, ОПН-35 в полимерной изоляции (ГОСТ Р 52725-2007 / СТО Россети 56947007-29.240.10.191-2014)',
  },
  title: {
    en: '10kV–35kV Substation Gapless Metal-Oxide Surge Arresters (MOSA: High-Gradient Zinc Oxide ZnO Varistor Blocks & Polymeric Housings; Russian GOST OPN-P-10, OPN-P-35; Chinese FE-MOA-10/35 series) Technical Whitepaper: Steep-Front & Lightning Impulse Residual Voltage Discharge Dynamics ($U_{res} \\le 2.6 U_n$), 2ms Line Discharge Class 2/3 Energy Absorption Capacity ($W_{thermal} \\ge 4.5\\text{ kJ/kV}$), Substation Insulation Coordination Margin ($M_{ins} \\ge 20\\%$), and Siberian Arctic -50°C Heavy Pollution Class IV Creepage Hydrophobic Transfer (Benchmarking Hubbell/Ohio Brass, Hitachi Energy, Russian JSC Feniks-88 OPN & Pinggao)',
    zh: '10kV–35kV 变电站级无间隙金属氧化物避雷器（MOA：高压梯度 ZnO 压敏电阻芯片与高温硫化硅橡胶外套；俄标 ОПН-П-10, ОПН-П-35 系列；国标飞驰 FE-MOA-10/35 系列）工程选型指南：雷电冲击（8/20μs）与陡波冲击（1/5μs）放电残压瞬态抑制模型（残压比 $U_{res} \le 2.6 U_n$）、2ms 长持续时间线路放电 Class 2/3 热耐受能量吸收能力（$W_{thermal} \ge 4.5\text{ kJ/kV}$）、变电站主变与开关柜绝缘配合安全裕度（绝缘裕度 $M_{ins} \ge 20\%$ 杜绝绝缘击穿）、以及西伯利亚 -50°C 极寒高纬度 IV 级特重污秽硅橡胶憎水性迁移与防爆防飞溅撕裂力学（深度对标美国 Hubbell/Ohio Brass、瑞士日立能源 Hitachi Energy、俄罗斯圣彼得堡 ЗАО «Феникс-88» ОПН 与平高电气）',
    ja: '10kV〜35kV 変電所用無間隙酸化亜鉛避雷器（MOA：高傾斜ZnOバリスタ・シリコーンポリマー外套・ロシアGOST ОПН-П-10/35）完全設計技術白書：雷インパルス（8/20μs）および急峻波（1/5μs）制限電圧過渡力学（U_res ≤ 2.6 U_n）、2ms長波尾放電Class 2/3熱吸収耐力（W ≥ 4.5 kJ/kV）、変電所主変圧器絶縁協調マージン（M_ins ≥ 20%）、およびシベリア-50℃極寒IV種重汚損シリコーン撥水性移行防爆構造（Hubbell、Hitachi Energy、ロシアFeniks-88ベンチマーク）',
    es: 'Apartarrayos de Óxido de Zinc sin Chispómetros en Media Tensión 10kV–35kV (MOSA / ОПН-П / FE-MOA-10/35) y Coordinación de Aislamiento: Dinámica de Tensión Residual por Impulso de Rayo ($U_{res} \le 2.6 U_n$), Capacidad de Absorción Térmica de 2ms Clase 2/3 ($W \ge 4.5\text{ kJ/kV}$), Margen de Seguridad de Aislamiento ($\ge 20\%$) y Envolvente Polimérica Antiexplosiva para -50°C en Siberia',
    ru: 'Техническое руководство по ограничителям перенапряжений нелинейным (ОПН) 10-35 кВ в полимерных корпусах серий ОПН-П-10, ОПН-П-35: характеристики варисторов на основе ZnO, расчет остающегося напряжения при грозовых (8/20 мкс) и крутых (1/5 мкс) импульсах тока ($U_{ост} \le 2.6 U_\\text{ном}$), пропускная способность по энергии класса 2/3 ($W_\\text{уд} \ge 4.5$ кДж/кВ), координация изоляции подстанций (запас надежности $M_\\text{из} \ge 20\%$), гидрофобность кремнийорганической изоляции IV СЗРИ и взрывобезопасность при -50°C (Бенчмарк Hubbell/Ohio Brass, Hitachi Energy, ЗАО Феникс-88 ОПН и Pinggao)',
  },
  eyebrow: {
    en: 'SURGE ARRESTERS & SUBSTATION INSULATION COORDINATION (IEC 60099-4 / IEEE C62.11 / ГОСТ Р 52725-2007 / СТО РОССЕТИ)',
    zh: 'FE-SPEC-38 · 10kV–35kV 金属氧化物避雷器与变电站绝缘配合专论（IEC 60099-4 / GB/T 11032 / ГОСТ Р 52725 / ТР ТС 004/2011）',
    ja: 'FE-SPEC-38 · 10kV〜35kV 酸化亜鉛避雷器・変電所絶縁協調仕様書（IEC 60099-4 / IEEE C62.11 / ГОСТ Р 52725）',
    es: 'FE-SPEC-38 · DOSSIER DE APARTARRAYOS MOSA Y COORDINACIÓN DE AISLAMIENTO 10kV–35kV (IEC 60099-4 / IEEE / GOST)',
    ru: 'FE-SPEC-38 · РУКОВОДСТВО ПО ОГРАНИЧИТЕЛЯМ ПЕРЕНАПРЯЖЕНИЙ ОПН-П 10-35 кВ (ГОСТ Р 52725-2007 / СТО РОССЕТИ 56947007-29.240.10.191-2014)',
  },
  author: {
    en: 'Feichi High-Voltage Surge Protection & Insulation Coordination Institute (Lead: Henry)',
    zh: '飞驰电气高压过电压防护与绝缘配合工程研究院（总工/外贸对接人：Henry）',
    ja: '飛馳電気 高圧過電圧保護・絶縁協調工学研究所（チーフ：Henry）',
    es: 'Instituto de Ingeniería de Protección contra Sobretensiones y Aislamiento Feichi (Líder: Henry)',
    ru: 'Инженерно-исследовательский институт защиты от перенапряжений и изоляции подстанций Feichi Power (Гл. инженер: Henry)',
  },
  standards: 'IEC 60099-4 / IEC 60071-1 / IEEE C62.11 / GB/T 11032-2020 / DL/T 815 / ГОСТ Р 52725-2007 / ГОСТ 15150-69 (УХЛ1) / ТР ТС 004/2011 / СТО РОССЕТИ 56947007-29.240.10.191-2014',
  readTime: {
    en: '25 min technical study (Includes Non-Linear ZnO Varistor V-I Characteristic Curves, Substation Insulation Coordination Margin Integrals, Thermal Energy Absorption Differential Models & Russian ОПН-П-35 Questionnaire)',
    zh: '25 分钟深度技术研读（含 ZnO 压敏非线性伏安特性数学方程、变电站雷电过电压绝缘配合裕度微积分模型、长持续时间线路放电热耐受能量积分与俄标 ОПН-П-35 选型表单）',
    ja: '25分 専門設計解説（ZnO非線形V-I特性解析・変電所絶縁協調マージン積分計算・熱エネルギー吸収過渡モデル・ロシアOPN-P-35選定問診票）',
    es: '25 min de lectura técnica (Incluye curvas características V-I de varistores de ZnO, integrales de margen de coordinación de aislamiento, absorción térmica de energía y cuestionario ОПН-П-35)',
    ru: '25 мин технического изучения (включая нелинейные вольт-амперные характеристики варисторов ZnO, формулы координации изоляции трансформаторов и ячеек КРУ, расчет теплоемкости при рассеянии энергии и полный Опросный лист на ОПН-П-35)',
  },
  summary: {
    en: 'An authoritative technical whitepaper on 10kV, 20kV, and 35kV Substation-Class Gapless Metal-Oxide Surge Arresters (MOSA: Russian GOST series OPN-P-10, OPN-P-20, OPN-P-35; Chinese FE-MOA-10/35 series) for power transformer primary protection, gas-insulated switchgear (GIS/RMU) busbar entry bays, high-altitude overhead transmission line terminals, and severe Siberian mining environments (nominal discharge current $I_n = 5\\text{kA} \\sim 10\\text{kA}$, line discharge Class 2/3, thermal energy rating $W_{th} = 4.5 \\sim 8.0\\text{ kJ/kV}$). Benchmarking international leaders Hubbell / Ohio Brass (USA), Hitachi Energy (Switzerland), and Russian pioneer JSC Feniks-88 (St. Petersburg), this dossier explores: 1) Non-linear Zinc Oxide (ZnO) varistor microstructural physics ($I = k \\cdot V^\\alpha$ with non-linearity coefficient $\\alpha > 45$), conducting micro-amperes under continuous operating voltage ($U_c$) while clamping lightning steep-front overvoltages within nanoseconds; 2) Quantitative Insulation Coordination Margin ($M_{ins} = (BIL / U_{res} - 1) \\times 100\\% \\ge 20\\%$), ensuring complete protection for power transformer Basic Lightning Impulse Insulation Levels ($BIL = 75\\text{kV} \\sim 200\\text{kV}$); 3) High-temperature vulcanized (HTV) silicone rubber direct-molded polymer housings with Class IV heavy pollution creepage ($\\ge 31\\text{ mm/kV}$) and Hydrophobic Recovery / Hydrophobicity Transfer Mechanisms (HC1-HC2); 4) Explosion-proof pressure-relief directional tearing mechanics eliminating flying porcelain fragment hazards during extreme short-circuit fault arcs ($I_{sc} \\ge 31.5\\text{kA}$); and 5) Complete PJSC Rosseti surge arrester Опросный лист questionnaire templates.',
    zh: '系统阐述 10kV、20kV 与 35kV 变电站级无间隙金属氧化物避雷器（MOA：俄标 ОПН-П-10, ОПН-П-20, ОПН-П-35 系列；国标飞驰 FE-MOA-10/35 系列）在主变压器进线端、中压开关柜（KYN28/充气柜）母线联络隔室、高海拔架空线路终端及极寒矿山配电枢纽中的核心过电压防护机理与工程选型规范（标称放电电流 $I_n = 5\text{kA} \sim 10\text{kA}$，长持续时间线路放电等级 Class 2/3，热耐受比能量吸收能力 $W_{th} = 4.5 \sim 8.0\text{ kJ/kV}$）。深度对标美国 Hubbell / Ohio Brass（全球过电压保护先驱）、瑞士日立能源 Hitachi Energy（原 ABB 避雷器业务）以及俄罗斯圣彼得堡成套高压防雷巨头 ЗАО «Феникс-88»（ОПН 系列），重点解析：1）高压梯度 ZnO 氧化锌压敏电阻芯片微观非线性电导物理模型（伏安非线性系数 $\alpha > 45$），在系统持续运行电压 $U_c$ 下仅流过微安级阻性泄漏电流，而在遭遇雷电冲击侵入波时纳秒级极速导通并将残压严格钳制在安全极限；2）变电站主设备绝缘配合量化裕度模型（$M_{ins} = (BIL / U_{res} - 1) \times 100\% \ge 20\%$），确保主变压器与中置柜雷电冲击耐受电压（$BIL = 75\text{kV} \sim 200\text{kV}$）获得绝对安全绝缘配合保护；3）高温硫化（HTV）硅橡胶直接注射包封一体化聚合物外套、IV 级特重污秽超大爬电比距（$\ge 31\text{ mm/kV}$）与微观硅油憎水性迁移分子动力学（HC1-HC2 级憎水性）；4）防爆防飞溅轴向定向撕裂泄压通道，在承受 $31.5\text{kA}$ 极端内部短路燃弧电弧时杜绝传统瓷外套炸碎伤人飞溅事故；以及 5）符合俄罗斯国家电网 ПАО «Россети» 与海关联盟 ТР ТС 004/2011 认证的《Опросный лист на ограничитель перенапряжений ОПН-П-10 / ОПН-П-35》工程选型技术规范。',
    ja: '10kV/20kV/35kV 変電所用無間隙酸化亜鉛避雷器（MOA・ロシアGOST ОПН-П-10/35、飛馳FE-MOA-10/35）の完全設計解説書（公称放電電流5〜10kA、Class 2/3、熱吸収耐力4.5〜8.0kJ/kV）。米国Hubbell、日立エナジー、ロシアFeniks-88をベンチマークし、ZnOバリスタ非線形物理特性（α>45）、変電所主変圧器絶縁協調マージン（M_ins ≥ 20%確保）、HTVシリコーンゴム一体成形外套（沿面距離≥31mm/kV・撥水性移行HC1）、31.5kA内部短絡アーク時破片飛散ゼロ防爆裂開構造、シベリア-50℃極寒対応、およびロシアRosseti標準Опросный лист問診票を網羅。',
    es: 'Expediente técnico de Apartarrayos de Óxido Metálico sin Chispómetros en Media Tensión 10kV–35kV (MOSA / ОПН-П / FE-MOA-10/35) para protección de transformadores y celdas (5kA a 10kA, Clase 2/3, $W \ge 4.5\text{ kJ/kV}$). Analiza la no linealidad del ZnO ($\alpha > 45$), coordinación de aislamiento cuantitativa ($M_{ins} \ge 20\%$) para proteger el BIL del transformador, envolvente de caucho de silicona HTV con línea de fuga Clase IV ($\ge 31\text{ mm/kV}$), mecanismo antiexplosión sin fragmentación y cuestionarios oficiales de licitación.',
    ru: 'Полное техническое руководство по ограничителям перенапряжений нелинейным (ОПН) наружной и внутренней установки серии ОПН-П-10, ОПН-П-20, ОПН-П-35 на номинальные разрядные токи 5 и 10 кА с удельной энергоемкостью 4.5-8.0 кДж/кВ (класс пропускной способности 2 и 3) по ГОСТ Р 52725-2007 и СТО Россети. Рассмотрены: физика нелинейных варисторов ZnO (коэффициент нелинейности $\alpha > 45$), координация изоляции трансформаторов ($M_\\text{из} \ge 20\%$) относительно импульсной прочности BIL (75-200 кВ), цельнолитая кремнийорганическая изоляция IV СЗРИ (длина пути утечки $\ge 3.1$ см/кВ) с гидрофобными свойствами, взрывобезопасность при сквозных токах КЗ 31.5 кА без разлета осколков при -50°C (УХЛ1) и полный Опросный лист ПАО Россети.',
  },
  sec1Title: {
    en: '1. Varistor Microstructure Physics & Substation Insulation Coordination Margin Modeling ($M_{ins} \\ge 20\\%$)',
    zh: '1. 氧化锌（ZnO）压敏微观非线性物理学模型与变电站主绝缘配合安全裕度量化方程（$M_{ins} \\ge 20\\%$）',
    ja: '1. ZnOバリスタ非線形伝導物理モデルおよび変電所主絶縁協調マージン定量計算（M_ins ≥ 20%）',
    es: '1. Física Microestructural de Varistores ZnO y Modelo de Margen de Coordinación de Aislamiento ($M_{ins} \\ge 20\\%$)',
    ru: '1. Физика микроструктуры варисторов ZnO и математическая модель запаса координации изоляции ($M_\\text{из} \\ge 20\\%$)',
  },
  sec1Text: {
    en: `Metal-Oxide Surge Arresters (MOSA) protect critical substation power transformers and switchgear against lightning overvoltages ($8/20\\,\\mu\\text{s}$) and switching surges ($30/60\\,\\mu\\text{s}$).

**Non-Linear Physics & Insulation Coordination Equations**:
1. **Zinc Oxide (ZnO) Non-Linear V-I Characteristics**:
   - The conduction mechanism across doped bismuth-oxide grain boundaries yields an extreme non-linear current-voltage relationship:
     $$I = k \\cdot V^\\alpha \\quad (\\text{where } \\alpha = 45 \\sim 60)$$
   - At continuous operating voltage ($U_c = U_{sys} / \\sqrt{3}$), the leakage current is pure micro-amperes ($I_{leak} < 200\\,\\mu\\text{A}$). When struck by a fast $10\\text{kA}$ lightning wave, the varistor instantly clamps the residual discharge voltage to:
     $$U_{res, 10kA} \\le (2.2 \\sim 2.6) \\cdot U_n$$
2. **Insulation Coordination Safety Margin Equation**:
   - The Basic Lightning Impulse Insulation Level ($BIL$) of the protected transformer or switchgear must exceed the arrester maximum protective level by a strict $20\\%$ safety margin:
     $$M_{ins} = \\left( \\frac{BIL}{U_{res, max}} - 1 \\right) \\times 100\\% \\ge 20\\%$$
   - For a 35kV substation with transformer $BIL = 200\\text{kV}$, pairing with Feichi FE-MOA-35 ($U_{res} = 134\\text{kV}$) provides an exceptional insulation margin of $M_{ins} = 49.2\\%$, guaranteeing absolute protection against lightning flashover degradation.`,
    zh: `金属氧化物无间隙避雷器（MOA）是变电站一次系统抵御直击雷/感应雷过电压（$8/20\\,\\mu\\text{s}$）与操作过电压（$30/60\\,\\mu\\text{s}$）的法定核心过电压保护装备。

**压敏晶界导电机理与绝缘配合量化方程**：
1. **ZnO 氧化锌微观多晶晶界非线性导电方程**：
   - 掺杂铋/锑等稀土氧化物的 ZnO 陶瓷芯片内部，肖特基势垒晶界表现出极高的非线性伏安特性：
     $$I = k \\cdot V^\\alpha \\quad (\\text{非线性系数 } \\alpha = 45 \\sim 60)$$
   - 在系统持续运行工频电压（$U_c = U_{sys} / \\sqrt{3}$）下，全阻性泄漏电流极微（$I_{leak} < 200\\,\\mu\\text{A}$）；而在雷电冲击大电流（$10\\text{kA}$）侵入瞬间，晶界电势垒瞬时崩溃导通泄流，将残压牢牢限制在：
     $$U_{res, 10kA} \\le (2.2 \\sim 2.6) \\cdot U_n$$
2. **变电站主设备雷电冲击绝缘配合安全裕度方程**：
   - 被保护的主变压器绕组与开关柜雷电冲击绝缘耐受水平（$BIL$）必须高出避雷器最大雷电放电残压至少 $20\\%$ 规程法定裕度：
     $$M_{ins} = \\left( \\frac{BIL}{U_{res, max}} - 1 \\right) \\times 100\\% \\ge 20\\%$$
   - 以 35kV 变电站为例，主变压器雷电冲击耐受 $BIL = 200\\text{kV}$，选配飞驰电气 FE-MOA-35（标称放电残压 $U_{res} = 134\\text{kV}$），绝缘配合安全裕度高达 $M_{ins} = 49.2\\%$，彻底杜绝主绝缘雷电累积击穿损伤。`,
    ja: '酸化亜鉛避雷器（MOA）は、微細なZnO粒界電位障壁による超非線形特性（α=45〜60）により、常時電圧下では微小漏れ電流（<200μA）に抑え、10kA雷撃時には瞬時に大電流を逃がして残圧をU_res ≤ 2.6 Unに抑制。主変圧器BILとの絶縁協調マージンを20%以上（35kV系統で49.2%）確保し、絶縁破壊を完全防止します。',
    es: 'Los apartarrayos MOSA aprovechan la no linealidad extrema del ZnO ($\alpha = 45 \sim 60$). En régimen permanente la corriente de fuga es $<200\\,\mu\text{A}$, mientras que ante un rayo de 10kA limita la tensión residual a $U_{res} \le 2.6 U_n$. El margen de aislamiento $M_{ins} = (BIL/U_{res} - 1) \times 100\% \ge 20\%$ garantiza protección absoluta para transformadores (BIL = 200kV en 35kV).',
    ru: 'Ограничители ОПН обладают высоким коэффициентом нелинейности варисторов ZnO ($\alpha = 45-60$), благодаря чему ток утечки при рабочем напряжении не превышает 200 мкА, а при грозовом импульсе 10 кА остающееся напряжение не превышает $2.6 U_\\text{ном}$. Запас координации изоляции силового оборудования $M_\\text{из} = (BIL / U_\\text{ост} - 1) \times 100\% \ge 20\%$ гарантирует защиту изоляции трансформаторов (BIL 200 кВ на 35 кВ).',
  },
  sec2Title: {
    en: '2. High-Temperature Vulcanized (HTV) Silicone Housing Hydrophobic Migration & Short-Circuit Pressure-Relief Mechanics at -50°C',
    zh: '2. 高温硫化（HTV）硅橡胶外套分子级憎水性迁移机理与西伯利亚 -50°C 极寒防爆防飞溅撕裂泄压架构',
    ja: '2. 高温加硫（HTV）シリコーンゴム分子撥水性移行およびシベリア-50℃極寒防爆裂開安全構造',
    es: '2. Migración Hidrofóbica de Silicona HTV y Mecánica Antiexplosiva sin Fragmentación a -50°C',
    ru: '2. Гидрофобность кремнийорганической резины (HTV) и взрывобезопасное направленное стравливание давления при -50°C (УХЛ1)',
  },
  sec2Text: {
    en: `In harsh industrial and arctic mining environments, traditional porcelain surge arresters suffer from wet pollution flashovers and lethal brittle explosions during internal short-circuit faults.

**Polymer Housing Metallurgy & Pressure-Relief Dynamics**:
1. **Direct Injection-Molded HTV Silicone Rubber Housing**:
   - Low-molecular-weight (LMW) silicone chains naturally migrate from the bulk polymer to the surface pollution layer within 24–48 hours, creating a water-repellent hydrophobic surface (Class HC1–HC2 per IEC 62073).
   - Prevents continuous conductive water films in heavy industrial salt/coal dust zones, eliminating pollution flashovers across specific creepage distances $\\ge 31\\text{ mm/kV}$ (Class IV Very Heavy Pollution).
2. **Non-Fragmenting Pressure-Relief Directional Tearing Mechanics**:
   - The ZnO varistor column is tightly bound by high-tensile glass-fiber prepreg winding loops.
   - In the event of an extraordinary internal short-circuit arc ($I_{sc} \\ge 31.5\\text{kA}/0.2\\text{s}$), internal gas overpressure directional tears the silicone polymer sheath along engineered longitudinal micro-slits, venting ionized gas safely without throwing dangerous flying porcelain shards, fully certified down to $-50^\\circ\\text{C}$ (ГОСТ 15150-69 УХЛ1).`,
    zh: `在重重工业污染、高盐雾及极寒矿区恶劣环境中，传统瓷套避雷器面临两大致命威胁：污秽潮湿引发外绝缘沿面闪络击穿，以及内部故障受热产生高压导致瓷套剧烈横向爆炸飞溅伤人。

**高分子聚合物外套微观机理与定向泄压防爆架构**：
1. **高温硫化（HTV）硅橡胶整体无缝注射成型外套**：
   - 硅橡胶内部小分子低聚物（LMW 硅氧烷链）在 24~48 小时内自发向外层污秽粉尘表面持续扩散迁移，赋予污秽层优异的自恢复憎水性（符合 IEC 62073 HC1~HC2 级憎水性评级）；
   - 在煤尘、盐雾重度污染环境下彻底杜绝连续导电水膜形成，爬电比距 $\\ge 31\\text{ mm/kV}$（IV 级特重污秽），将污闪跳闸率压低至零；
2. **防爆防飞溅轴向定向撕裂微缝泄压机构**：
   - 内部 ZnO 压敏电阻柱由无碱高强玻璃纤维环氧预浸带紧密无缝绑扎缠绕；
   - 在承受 $31.5\\text{kA}/0.2\\text{s}$ 极端内部短路燃弧超压时，内部高压气体沿硅橡胶预置轴向微缝薄弱带定向冲开撕裂并瞬间向外泄压，完全杜绝碎片横向爆炸飞溅，在西伯利亚 -50°C 严寒工况下保持高韧性（俄标 УХЛ1 认证）。`,
    ja: '磁器製避雷器の汚損フラッシオーバと爆発飛散事故に対し、飛馳HTVシリコーンゴム一体成形避雷器は低分子シロキサンによる表面撥水性移行（HC1級）により重汚損下でも沿面放電を完全防止（沿面距離≥31mm/kV）。31.5kA短絡アーク時には高強度ガラス繊維バインドと軸方向裂開スリットがガス圧を安全に解放し、破片飛散事故をゼロ化します。',
    es: 'La envolvente de caucho de silicona HTV vulcanizada a alta temperatura migra cadenas de siloxano LMW a la capa de polución exterior, manteniendo hidrofobicidad HC1-HC2 y eliminando el flameo por contaminación ($\ge 31\text{ mm/kV}$). Ante fallas de arco interno de 31.5kA, las ranuras axiales rasgan la envolvente liberando la sobrepresión sin expulsar esquirlas peligrosas a -50°C.',
    ru: 'Цельнолитой полимерный корпус из кремнийорганической резины HTV обладает способностью к регенерации гидрофобности (класс HC1-HC2) за счет диффузии низкомолекулярных силоксанов на поверхность загрязнений, исключая перекрытия при IV СЗРИ ($\ge 3.1$ см/кВ). При внутренних дуговых КЗ током 31.5 кА корпус направленно вскрывается по продольному шву, предотвращая взрывной разлет осколков при температуре до -50°C (УХЛ1).',
  },
  sec3Title: {
    en: '3. Technical Benchmarking Matrix: Feichi FE-MOA vs. Hubbell/Ohio Brass vs. Hitachi Energy MWK vs. Russian Feniks-88 OPN',
    zh: '3. 国际顶级金属氧化物避雷器核心技术参数深度对标表：飞驰 FE-MOA-10/35 vs. 美国 Hubbell/Ohio Brass vs. 瑞士日立能源 MWK vs. 俄罗斯 ЗАО Феникс-88 ОПН',
    ja: '3. 国際トップ酸化亜鉛避雷器技術仕様比較：飛馳 FE-MOA-10/35 vs. 米国 Hubbell vs. 日立エナジー MWK vs. ロシア Feniks-88 OPN',
    es: '3. Matriz de Benchmarking Técnico: Feichi FE-MOA-10/35 vs. Hubbell/Ohio Brass vs. Hitachi Energy MWK vs. Feniks-88 ОПН (Rusia)',
    ru: '3. Сравнительная матрица параметров: Feichi FE-MOA (ОПН-П) vs. Hubbell/Ohio Brass vs. Hitachi Energy MWK vs. ЗАО Феникс-88 ОПН',
  },
  tableHeaders: {
    en: ['Technical Specification & Parameter', 'Feichi FE-MOA-10/35 (ОПН-П УХЛ1)', 'Hubbell / Ohio Brass Optima (USA)', 'Hitachi Energy MWK / POLIM (Switzerland)', 'Russian ЗАО Феникс-88 ОПН-П-10/35'],
    zh: ['核心技术参数 / 性能维度', '飞驰电气 FE-MOA-10/35 (ОПН-П УХЛ1)', '美国 Hubbell / Ohio Brass 旗舰系列', '瑞士日立能源 Hitachi Energy MWK 系列', '俄罗斯 ЗАО Феникс-88 ОПН-П 系列'],
    ja: ['技術仕様・性能パラメータ', '飛馳電気 FE-MOA-10/35 (ОПН-П УХЛ1)', '米国 Hubbell 避雷器', '日立エナジー MWK / POLIM', 'ロシア Feniks-88 OPN-P'],
    es: ['Parámetro Técnico', 'Feichi FE-MOA-10/35 (ОПН-П УХЛ1)', 'Hubbell / Ohio Brass Optima (EE.UU.)', 'Hitachi Energy MWK / POLIM', 'Феникс-88 ОПН-П (Rusia)'],
    ru: ['Технический параметр', 'Feichi FE-MOA / ОПН-П УХЛ1', 'Hubbell / Ohio Brass Optima (США)', 'Hitachi Energy MWK / POLIM (Швейцария)', 'ЗАО Феникс-88 ОПН-П-10/35 УХЛ1'],
  },
  tableRows: {
    en: [
      ['System Rated Voltage (Ur)', '10.0 kV, 10.5 kV, 20.0 kV, 35 kV (Up to 40.5kV)', '4.16 kV, 13.8 kV, 25 kV, 34.5 kV', '10 kV, 20 kV, 35 kV, 72.5 kV', '6.0 kV, 10.0 kV, 20.0 kV, 35 kV (ГОСТ 1516.3)'],
      ['Nominal Discharge Current (In)', '10 kA (8/20 μs Heavy Duty / 5 kA Normal)', '10 kA Heavy Duty', '10 kA Station Class', '10 кА (8/20 мкс) / 5 кА (ГОСТ Р 52725)'],
      ['Line Discharge Class (IEC / GOST)', 'Class 2 / Class 3 (High Thermal Absorption)', 'Class 2 / Heavy Duty', 'Class 2 / Class 3', 'Класс пропускной способности 2 и 3'],
      ['Thermal Energy Rating (W_th)', '≥ 4.5 to 8.0 kJ/kV (2ms Long Duration)', '≥ 4.5 to 7.2 kJ/kV', '≥ 5.0 to 8.5 kJ/kV', '≥ 4.5 до 8.0 кДж/кВ (ГОСТ Р 52725)'],
      ['Lightning Residual Voltage (U_res)', '≤ 134 kV (35kV) / ≤ 45 kV (10kV)', '≤ 138 kV / ≤ 46 kV', '≤ 132 kV / ≤ 44 kV', '≤ 135 кВ (35 кВ) / ≤ 45 кВ (10 кВ)'],
      ['Steep-Front Residual Voltage (1/5μs)', '≤ 148 kV (35kV) / ≤ 49 kV (10kV)', '≤ 152 kV / ≤ 51 kV', '≤ 145 kV / ≤ 48 kV', '≤ 150 кВ (35 кВ) / ≤ 50 кВ (10 кВ)'],
      ['Housing Polymer Technology', 'Direct Molded Seamless HTV Silicone Rubber', 'Silicone Polymer Alloy', 'High-Hydrophobicity Silicone', 'Кремнийорганическая резина HTV литая'],
      ['Creepage Distance Specific', '≥ 31 mm/kV (Class IV Very Heavy Pollution)', '≥ 31 mm/kV', '≥ 31 mm/kV', '≥ 3.1 см/кВ (IV СЗРИ по ГОСТ 9920)'],
      ['Short-Circuit Pressure Relief', '31.5 kA / 0.2s Directional (Non-Fragmenting)', '25 kA / 40 kA Non-Fragmenting', '31.5 kA Non-Fragmenting', '31.5 кА взрывобезопасный без осколков'],
      ['Ambient Climate Rating', '-50°C to +55°C (GOST 15150-69 УХЛ1 Siberian)', '-40°C to +50°C', '-40°C to +50°C', '-50°C to +45°C (УХЛ1 ХЛ1)'],
      ['Online Surge Monitor / Counter', 'Integrated Leakage Micro-Ammeter & Counter', 'Discharge Counter Available', 'SC10 / SC12 Monitor', 'Счетчик импульсов со стрелочным прибором'],
      ['Design Maintenance-Free Life', '≥ 30 Years (Hydrophobic Molecular Stability)', '≥ 30 Years', '≥ 30 Years', '≥ 30 лет по стандартам ПАО Россети'],
    ],
    zh: [
      ['电网额定最高电压等级 (Ur)', '10.0 kV, 10.5 kV, 20.0 kV, 35 kV (最高40.5kV)', '4.16 kV, 13.8 kV, 25 kV, 34.5 kV', '10 kV, 20 kV, 35 kV, 72.5 kV', '6.0 kV, 10.0 kV, 20.0 kV, 35 kV (ГОСТ 1516.3)'],
      ['标称雷电放电电流 (In)', '10 kA (8/20 μs 重载型 / 5 kA 配电型)', '10 kA 重载型', '10 kA 变电站级', '10 кА (8/20 мкс) / 5 кА (符合俄标)'],
      ['线路放电等级 (IEC / 俄标)', 'Class 2 / Class 3 (高热能耐受等级)', 'Class 2 级', 'Class 2 / Class 3 级', 'Класс пропускной способности 2 и 3'],
      ['长持续放电热耐受比能量', '≥ 4.5 至 8.0 kJ/kV (2ms 长波放电能量)', '≥ 4.5 至 7.2 kJ/kV', '≥ 5.0 至 8.5 kJ/kV', '≥ 4.5 至 8.0 кДж/кВ (ГОСТ Р 52725)'],
      ['8/20μs 标称雷电冲击残压', '≤ 134 kV (35kV 系统) / ≤ 45 kV (10kV)', '≤ 138 kV / ≤ 46 kV', '≤ 132 kV / ≤ 44 kV', '≤ 135 кВ (35 кВ) / ≤ 45 кВ (10 кВ)'],
      ['1/5μs 陡波冲击放电残压', '≤ 148 kV (35kV 系统) / ≤ 49 kV (10kV)', '≤ 152 kV / ≤ 51 kV', '≤ 145 kV / ≤ 48 kV', '≤ 150 кВ (35 кВ) / ≤ 50 кВ (10 кВ)'],
      ['外绝缘高分子聚合物材质', 'HTV 高温硫化硅橡胶整体一次注射成型', '硅橡胶共聚高分子', '高憎水性特种硅橡胶', 'Кремнийорганическая резина HTV литая'],
      ['外绝缘爬电比距配置', '≥ 31 mm/kV (IV 级特重污秽与高盐雾)', '≥ 31 mm/kV', '≥ 31 mm/kV', '≥ 3.1 см/кВ (IV СЗРИ 极重污秽等级)'],
      ['内部短路防爆泄压能力', '31.5 kA / 0.2s 轴向定向撕裂 (零飞溅)', '25 kA / 40 kA 零飞溅', '31.5 kA 零飞溅', '31.5 кА 内部短路防爆无碎片飞溅'],
      ['环境气候耐受工作范围', '-50°C 至 +55°C (俄标 УХЛ1 极寒高纬度认证)', '-40°C 至 +50°C', '-40°C 至 +50°C', '-50°C 至 +45°C (УХЛ1 极寒型)'],
      ['在线智能防雷监测选件', '标配放电动作计数器 + 微安泄漏电流表', '选配放电计数器', 'SC10 / SC12 智能监测器', 'Счетчик импульсов с миллиамперметром'],
      ['全生命周期免维护设计寿命', '≥ 30 年 (憎水性分子链零迁移衰减)', '≥ 30 年', '≥ 30 年', '≥ 30 年 (符合俄罗斯国家电网标准)'],
    ],
    ja: [
      ['定格電圧 (Ur)', '10.0kV, 10.5kV, 20.0kV, 35kV (最大40.5kV)', '4.16kV 〜 34.5kV', '10kV 〜 72.5kV', '6.0kV, 10.0kV, 20.0kV, 35kV'],
      ['公称放電電流 (In)', '10 kA (8/20 μs 重負荷型 / 5 kA)', '10 kA 重負荷型', '10 kA 変電所級', '10 kA (8/20 μs) / 5 kA'],
      ['放電クラス', 'Class 2 / Class 3', 'Class 2', 'Class 2 / Class 3', 'Class 2 / 3'],
      ['エネルギー吸収耐力', '≥ 4.5 〜 8.0 kJ/kV (2ms 長波)', '≥ 4.5 〜 7.2 kJ/kV', '≥ 5.0 〜 8.5 kJ/kV', '≥ 4.5 〜 8.0 kJ/kV'],
      ['雷インパルス残圧', '≤ 134 kV (35kV) / ≤ 45 kV (10kV)', '≤ 138 kV / ≤ 46 kV', '≤ 132 kV / ≤ 44 kV', '≤ 135 kV / ≤ 45 kV'],
      ['急峻波残圧 (1/5μs)', '≤ 148 kV (35kV) / ≤ 49 kV (10kV)', '≤ 152 kV / ≤ 51 kV', '≤ 145 kV / ≤ 48 kV', '≤ 150 kV / ≤ 50 kV'],
      ['外套材質', 'HTV シリコーンゴム一体成形', 'シリコーンポリマー', '高撥水性シリコーン', 'HTV シリコーンゴム'],
      ['沿面距離', '≥ 31 mm/kV (IV種重汚損適合)', '≥ 31 mm/kV', '≥ 31 mm/kV', '≥ 31 mm/kV'],
      ['防爆圧力開放耐力', '31.5 kA / 0.2s 破片飛散ゼロ', '25 kA / 40 kA', '31.5 kA', '31.5 kA 破片飛散ゼロ'],
      ['耐寒温度定格', '-50°C 〜 +55°C (ロシア УХЛ1 適合)', '-40°C 〜 +50°C', '-40°C 〜 +50°C', '-50°C 〜 +45°C (УХЛ1)'],
      ['設計寿命', '≥ 30 年 (撥水性劣化ゼロ)', '≥ 30 年', '≥ 30 年', '≥ 30 年'],
    ],
    es: [
      ['Tensión Nominal (Ur)', '10.0 kV, 10.5 kV, 20.0 kV, 35 kV (hasta 40.5kV)', '4.16 kV a 34.5 kV', '10 kV a 72.5 kV', '6.0 kV, 10.0 kV, 20.0 kV, 35 kV'],
      ['Corriente de Descarga', '10 kA (8/20 μs Trabajo Pesado / 5 kA)', '10 kA Heavy Duty', '10 kA Subestación', '10 kA / 5 kA'],
      ['Clase de Descarga', 'Clase 2 / Clase 3 (Alta Absorción)', 'Clase 2', 'Clase 2 / Clase 3', 'Clase 2 / 3'],
      ['Absorción Térmica', '≥ 4.5 a 8.0 kJ/kV (2ms Duración)', '≥ 4.5 a 7.2 kJ/kV', '≥ 5.0 a 8.5 kJ/kV', '≥ 4.5 a 8.0 kJ/kV'],
      ['Tensión Residual Rayo', '≤ 134 kV (35kV) / ≤ 45 kV (10kV)', '≤ 138 kV / ≤ 46 kV', '≤ 132 kV / ≤ 44 kV', '≤ 135 kV / ≤ 45 kV'],
      ['Tensión Residual Onda', '≤ 148 kV (35kV) / ≤ 49 kV (10kV)', '≤ 152 kV / ≤ 51 kV', '≤ 145 kV / ≤ 48 kV', '≤ 150 kV / ≤ 50 kV'],
      ['Material Envolvente', 'Caucho de Silicona HTV Moldeado', 'Polímero Silicona', 'Silicona Hidrofóbica', 'Silicona HTV'],
      ['Línea de Fuga Específica', '≥ 31 mm/kV (Clase IV Muy Pesada)', '≥ 31 mm/kV', '≥ 31 mm/kV', '≥ 31 mm/kV'],
      ['Alivio de Presión Antiexp.', '31.5 kA / 0.2s Sin Fragmentación', '25 kA / 40 kA', '31.5 kA', '31.5 kA Sin Esquirlas'],
      ['Rango de Temperatura', '-50°C a +55°C (Clima Ártico УХЛ1)', '-40°C a +50°C', '-40°C a +50°C', '-50°C a +45°C (УХЛ1)'],
      ['Vida Útil de Diseño', '≥ 30 Años (Libre de Mantenimiento)', '≥ 30 Años', '≥ 30 Años', '≥ 30 Años'],
    ],
    ru: [
      ['Номинальное напряжение сети', '10.0 кВ, 10.5 кВ, 20.0 кВ, 35 кВ (до 40.5 кВ)', '4.16 кВ, 13.8 кВ, 25 кВ, 34.5 кВ', '10 кВ, 20 кВ, 35 кВ, 72.5 кВ', '6.0 кВ, 10.0 кВ, 20.0 кВ, 35 кВ (ГОСТ 1516.3)'],
      ['Номинальный разрядный ток', '10 кА (8/20 мкс тяжелый режим / 5 кА)', '10 кА Heavy Duty', '10 кА станционный', '10 кА (8/20 мкс) / 5 кА (ГОСТ Р 52725)'],
      ['Класс пропускной способности', 'Класс 2 / Класс 3 (повышенная энергоемкость)', 'Класс 2', 'Класс 2 / Класс 3', 'Класс 2 и 3 по ГОСТ Р 52725-2007'],
      ['Удельная энергоемкость', '≥ 4.5 до 8.0 кДж/кВ (прямоугольный импульс 2 мс)', '≥ 4.5 до 7.2 кДж/кВ', '≥ 5.0 до 8.5 кДж/кВ', '≥ 4.5 до 8.0 кДж/кВ (ГОСТ)'],
      ['Остающееся напряжение (8/20мкс)', '≤ 134 кВ (35 кВ) / ≤ 45 кВ (10 кВ)', '≤ 138 кВ / ≤ 46 кВ', '≤ 132 кВ / ≤ 44 кВ', '≤ 135 кВ (35 кВ) / ≤ 45 кВ (10 кВ)'],
      ['Остающееся напряжение (1/5мкс)', '≤ 148 кВ (35 кВ) / ≤ 49 кВ (10 кВ)', '≤ 152 кВ / ≤ 51 кВ', '≤ 145 кВ / ≤ 48 кВ', '≤ 150 кВ (35 кВ) / ≤ 50 кВ (10 кВ)'],
      ['Материал защитной оболочки', 'Цельнолитая кремнийорганическая резина HTV', 'Силиконовый полимер', 'Силикон высокой гидрофобности', 'Кремнийорганическая резина HTV литая'],
      ['Удельная длина пути утечки', '≥ 3.1 см/кВ (IV СЗРИ по ГОСТ 9920)', '≥ 3.1 см/кВ', '≥ 3.1 см/кВ', '≥ 3.1 см/кВ (IV степень загрязнения)'],
      ['Ток взрывобезопасности', '31.5 кА / 0.2 с без разлета осколков', '25 кА / 40 кА', '31.5 кА', '31.5 кА взрывобезопасный без осколков'],
      ['Климатическое исполнение', '-50°C...+55°C (ГОСТ 15150-69 УХЛ1 для Сибири)', '-40°C...+50°C', '-40°C...+50°C', '-50°C...+45°C (УХЛ1 ХЛ1)'],
      ['Счетчик импульсов и регистратор', 'Встроенный регистратор срабатываний с миллиамперметром', 'Счетчик срабатываний', 'SC10 / SC12 регистратор', 'Счетчик срабатываний со стрелочным прибором'],
      ['Расчетный срок службы', '≥ 30 лет (стабильность варисторов и полимера)', '≥ 30 лет', '≥ 30 лет', '≥ 30 лет по стандартам ПАО Россети'],
    ],
  },
  sec4Title: {
    en: '4. Scenario-Based Application Decision Guide: Substation Transformers, GIS Cable Incomers & Siberian Mines',
    zh: '4. 重点应用场景工程选型与系统集成决策指南',
    ja: '4. 適用産業別選定マトリクス：変電所主変圧器・GISケーブル引込部・シベリア極寒鉱山',
    es: '4. Guía de Decisión por Sector: Transformadores de Potencia, Entradas de Cable en GIS y Minas Árticas',
    ru: '4. Руководство по выбору оборудования: защита силовых трансформаторов, кабельные вводы КРУЭ и горнодобывающие предприятия Сибири',
  },
  scenarios: {
    en: [
      {
        title: 'Utility Transmission Substation Main Power Transformer Incomers (10kV/35kV BIL = 75/200kV)',
        recommend: 'Recommendation: Feichi FE-MOA-35 Heavy Duty Surge Arrester (ОПН-П-35/40.5-10/550 УХЛ1)',
        reason: 'Restricts lightning surge overvoltage to 134kV, providing a huge 49.2% insulation coordination safety margin preventing transformer dielectric breakdown.',
      },
      {
        title: 'Gas-Insulated Switchgear (GIS/RMU) Cable Box & Wind Turbine Towers',
        recommend: 'Recommendation: Compact Plug-In Separable Polymeric Arrester FE-MOA-P (ОПН-П-10/24)',
        reason: 'Fully screened, dead-front touchable design fits inside tight medium-voltage cable compartments with zero external flashover risks.',
      },
      {
        title: 'Siberian Arctic Mining Distribution Substation (-50°C УХЛ1 Class IV Heavy Dust/Coal Pollution)',
        recommend: 'Recommendation: Arctic HTV Silicone Arrester with Integrated Leakage Monitor',
        reason: 'Continuous hydrophobic recovery eliminates pollution flashovers in heavy mining dust at -50°C, fully certified under Russian GOST R 52725-2007.',
      },
    ],
    zh: [
      {
        title: '枢纽变电站主变压器 10kV/35kV 高压进线主绝缘防护（变压器 $BIL = 75\text{kV} / 200\text{kV}$）',
        recommend: '选型推荐：飞驰 FE-MOA-35 重载变电站级避雷器（俄标 ОПН-П-35/40.5-10/550 УХЛ1）',
        reason: '将雷电冲击过电压压制在 134kV 极低残压，提供高达 $49.2\%$ 的绝缘配合超强安全裕度，彻底杜绝主变内部绝缘不可逆老化击穿。',
      },
      {
        title: '充气环网柜（GIS/RMU）电缆进线室与高层风电机组塔筒箱变',
        recommend: '选型推荐：紧凑型全绝缘可触摸插拔式避雷器 FE-MOA-P（俄标 ОПН-П-10/24 肘型）',
        reason: '全屏蔽死前沿结构直接插接于开关柜电缆后接头，彻底消除紧凑空间内的相间空气放电闪络，防护等级达 IP67。',
      },
      {
        title: '俄罗斯西伯利亚极寒露天矿山枢纽配电站（-50°C 严寒与 IV 级重度煤尘/矿粉污秽 УХЛ1）',
        recommend: '选型推荐：极寒高强 HTV 硅橡胶无缝注射避雷器 + 带泄漏微安表放电监测仪',
        reason: '分子级憎水性迁移杜绝极寒煤尘污闪，零飞溅防爆外壳保障现场巡检人员生命安全，完全符合俄罗斯 ПАО «Россети» 标准规范。',
      },
    ],
    ja: [
      {
        title: '基幹変電所主変圧器10kV/35kV引込部主絶縁保護 (主変圧器 BIL = 75/200kV)',
        recommend: '推奨：飛馳 FE-MOA-35 重負荷変電所用避雷器 (ОПН-П-35/40.5-10/550)',
        reason: '雷インパルス残圧を134kVに抑制し、49.2%の絶大な絶縁協調マージンで主変圧器の寿命を恒久保護。',
      },
      {
        title: 'GIS/RMU開閉装置ケーブル室および風力発電タワー内変電所',
        recommend: '推奨：コンパクト型完全絶縁プラグイン避雷器 FE-MOA-P (ОПН-П-10)',
        reason: 'タッチプルーフ構造により狭小スペース内での相間短絡事故を完全ゼロ化。',
      },
      {
        title: 'ロシア・シベリア極寒鉱山配電網 (-50℃ УХЛ1 重汚損煤塵環境)',
        recommend: '推奨：極寒仕様HTVシリコーン避雷器＋漏れ電流ミリ計付動作カウンタ',
        reason: '煤塵環境下でも撥水性自己回復により沿面フラッシオーバをゼロ化。寿命30年以上の高信頼性。',
      },
    ],
    es: [
      {
        title: 'Protección de Entrada de Transformadores de Potencia en Subestaciones (BIL = 75/200kV)',
        recommend: 'Recomendación: Apartarrayos de Servicio Pesado Feichi FE-MOA-35 (ОПН-П-35/40.5-10/550)',
        reason: 'Limita las sobretensiones a 134kV, otorgando un margen de coordinación de aislamiento del 49.2% frente al BIL.',
      },
      {
        title: 'Celdas GIS/RMU y Aerogeneradores Eólicos en Espacios Reducidos',
        recommend: 'Recomendación: Apartarrayos Enchufable Apantallado FE-MOA-P (ОПН-П-10/24)',
        reason: 'Diseño frontal muerto apantallado que elimina arcos en compartimentos compactos con protección IP67.',
      },
      {
        title: 'Subestaciones Mineras en Siberia (-50°C УХЛ1 y Polución Extrema Clase IV)',
        recommend: 'Recomendación: Apartarrayos en Silicona HTV Ártica con Contador y Medidor de Fuga',
        reason: 'Recuperación hidrofóbica molecular que evita flameos por polvo de carbón bajo normas GOST y Rosseti.',
      },
    ],
    ru: [
      {
        title: 'Защита вводов силовых трансформаторов подстанций 10/35 кВ (BIL = 75/200 кВ)',
        recommend: 'Рекомендация: Ограничитель перенапряжений станционного класса Feichi FE-MOA-35 (ОПН-П-35/40.5-10/550 УХЛ1)',
        reason: 'Ограничивает грозовые перенапряжения до 134 кВ, обеспечивая огромный запас координации изоляции 49.2% относительно BIL 200 кВ трансформатора.',
      },
      {
        title: 'Кабельные отсеки ячеек КРУЭ/КРУ и ветроэнергетические установки',
        recommend: 'Рекомендация: Адаптерный экранированный ОПН FE-MOA-P штекерного типа (ОПН-П-10/24)',
        reason: 'Полностью экранированная безопасная конструкция для установки непосредственно на кабельные адаптеры в условиях ограниченного пространства ячеек.',
      },
      {
        title: 'Горнодобывающие узлы и распределительные пункты Сибири (-50°C, IV СЗРИ угольной пыли, УХЛ1)',
        recommend: 'Рекомендация: ОПН-П-35 в кремнийорганическом корпусе HTV с регистратором срабатываний',
        reason: 'Быстрое восстановление гидрофобности исключает перекрытия по загрязненной изоляции при -50°C по ГОСТ Р 52725-2007 и стандартам ПАО Россети.',
      },
    ],
  },
  hasCalculator: 'mosa' as any,
  ctaTitle: {
    en: 'Need Insulation Coordination Margin Calculations (EMTP) or Russian GOST Опросный лист for 10kV/35kV OPN-P?',
    zh: '需要获取 10kV/35kV 氧化锌避雷器绝缘配合计算书（EMTP/ATP 仿真）或俄标 Опросный лист 选型方案？',
    ja: '10kV/35kV 酸化亜鉛避雷器絶縁協調計算書やロシアGOST問診票が必要ですか？',
    es: '¿Requiere Cálculos de Coordinación de Aislamiento (EMTP) o Cuestionario GOST para ОПН-П 10kV/35kV?',
    ru: 'Требуется расчет координации изоляции подстанции (EMTP/ATP-Draw) или Опросный лист на ОПН-П-10 / ОПН-П-35?',
  },
  ctaDesc: {
    en: 'Connect directly with technical lead Henry to receive complete lightning residual voltage profiles, energy absorption margin sheets, single-line diagrams, and Russian PJSC Rosseti certified commercial proposals within 24 hours.',
    zh: '直接与技术负责人 Henry 沟通，获取完整的雷电残压包络曲线、长持续放电热吸收校核表、一次单线图（SLD）及符合俄罗斯国家电网认证的正式报价单（24 小时内响应）。',
    ja: '技術責任者 Henry に直接ご連絡ください。雷残圧特性曲線、エネルギー吸収裕度計算書、単線結線図（SLD）およびロシアRosseti認定見積書を24時間以内に提供します。',
    es: 'Contacte directamente con el líder técnico Henry para obtener curvas de tensión residual, cálculo de absorción de energía, diagramas unifilares y propuestas comerciales certificadas en 24 horas.',
    ru: 'Свяжитесь напрямую с техническим руководителем Henry для получения графиков вольт-амперных характеристик, расчета рассеиваемой энергии, однолинейных схем и коммерческого предложения по стандартам ПАО Россети в течение 24 часов.',
  },
};
