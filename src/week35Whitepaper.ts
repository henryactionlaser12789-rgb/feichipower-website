import type { WhitepaperItem } from './whitepapersData';

export const week35Whitepaper: WhitepaperItem = {
  id: 'week-35',
  week: 35,
  slug: '10kv-35kv-neutral-grounding-resistor-arc-suppression-coil-guide',
  category: 'switchgear',
  categoryLabel: {
    en: '10kV–35kV Neutral Grounding Systems (NGR & Auto-Tuned Arc Suppression Coil / РУДТ / IEEE 32 / ГОСТ 13109)',
    zh: '10kV–35kV 中压中性点接地电阻柜（NGR）与微机消弧线圈自动调谐选型指南（消弧消谐 / 单相接地故障定位 / 俄标 ДГР/ЗНГ）',
    ja: '10kV〜35kV 中性点接地抵抗器（NGR）および自動消弧リアクトル（ASC/IEEE 32/GOST 13109）設計指針',
    es: 'Resistencias de Puesta a Tierra de Neutro (NGR) y Bobinas de Petersen Automáticas 10kV–35kV (IEEE 32 / ГОСТ 13109)',
    ru: 'Дугогасящие реакторы ДГР, резисторы заземления нейтрали ЗНГ и шкафы ШЗН 10-35 кВ (ГОСТ 13109-97 / СТО Россети 56947007-29.240.10.191-2014)',
  },
  title: {
    en: '10kV–35kV Medium-Voltage Neutral Grounding Engineering (Stainless Steel Neutral Grounding Resistor NGR vs Automatic Tracking Petersen Coil / Arc Suppression Coil ASC): Grid Zero-Sequence Capacitive Current ($I_{c0}$) Differential Modeling, Intermittent Arc-Grounding Transient Overvoltage Suppression ($U_{arc} < 2.2\\text{ p.u.}$), Residual Current Damping < 5A, Single-Phase Ground Fault Detection Algorithms, and Siberian Arctic -50°C Heavy Weatherproof Enclosures (Benchmarking Post Glover, Trench Group, Russian JSC SVEL ZNG & Pinggao)',
    zh: '10kV–35kV 中压配电网中性点接地方式（不锈钢中性点接地电阻柜 NGR vs 偏磁/调匝式自动跟踪消弧线圈系统）工程选型指南：电网零序对地分布电容电流（$I_{c0}$）微积分计算模型、间歇性弧光接地过电压抑制（限制过电压 $U_{arc} < 2.2\\text{ p.u.}$）、残流精确补偿阻尼至 5A 以内、微机注入法单相接地故障选线算法、以及西伯利亚 -50°C 极寒高防护防雨防凝露箱体工程集成（深度对标美国 Post Glover、德国 Trench Group、俄罗斯叶卡捷琳堡 СВЭЛ ЗНГ/ДГР 与平高电气）',
    ja: '10kV〜35kV 中性点接地設計（ステンレス中性点接地抵抗器NGR vs 自動追従型消弧リアクトルASC）完全設計技術白書：零相分布静電容量電流（I_c0）力学モデル、間欠アーク接地過電圧抑制（U_arc<2.2 p.u.）、残留補償電流<5A低減、接地故障選線アルゴリズム、およびシベリア-50℃極寒防雨筐体（Post Glover、Trench、ロシアSVELベンチマーク）',
    es: 'Puesta a Tierra de Neutro en Media Tensión 10kV–35kV (Resistencia de Neutro NGR vs Bobina de Petersen Automática ASC): Modelado de Corrientes Capacitivas Homopolares ($I_{c0}$), Supresión de Sobretensiones por Arco Intermitente ($U_{arc} < 2.2\\text{ p.u.}$), Corriente Residual < 5A, Algoritmos de Detección de Falla a Tierra y Gabinetes Árticos a -50°C',
    ru: 'Техническое руководство по заземлению нейтрали в сетях 10-35 кВ: резисторы заземления нейтрали (ЗНГ/NGR) из нержавеющей стали против автоматически перестраиваемых дугогасящих реакторов (ДГР/ASC), расчет емкостных токов замыкания на землю ($I_{c0}$), ограничение феррорезонансных и дуговых перенапряжений ($U_{дуг} < 2.2\\text{ U}_\\text{ф}$), компенсация остаточного тока до $< 5$ А, алгоритмы селективного определения поврежденного фидера и эксплуатация в Сибири до -50°C (Бенчмарк Post Glover, Trench, Группа СВЭЛ ЗНГ/ДГР и Pinggao)',
  },
  eyebrow: {
    en: 'NEUTRAL GROUNDING SYSTEMS & OVERVOLTAGE PROTECTION (IEEE 32 / IEEE 142 / IEC 60076-16 / ГОСТ 13109-97 / СТО РОССЕТИ)',
    zh: 'FE-SPEC-35 · 10kV–35kV 配网中性点接地与弧光过电压抑制专论（IEEE 32 / GB/T 10229 / DL/T 780 / ГОСТ 13109 / ТР ТС 004/2011）',
    ja: 'FE-SPEC-35 · 10kV〜35kV 中性点接地・アーク過電圧保護仕様書（IEEE 32 / IEC 60076-16 / ГОСТ 13109）',
    es: 'FE-SPEC-35 · DOSSIER DE PUESTA A TIERRA DE NEUTRO Y PROTECCIÓN CONTRA SOBRETENSIONES (IEEE 32 / IEC / GOST)',
    ru: 'FE-SPEC-35 · РУКОВОДСТВО ПО ЗАЗЕМЛЕНИЮ НЕЙТРАЛИ ЗНГ, ДГР 10-35 кВ (ГОСТ 13109-97 / СТО РОССЕТИ 56947007-29.240.10.191-2014)',
  },
  author: {
    en: 'Feichi Medium-Voltage Neutral Grounding & Grid Protection Engineering Institute (Lead: Henry)',
    zh: '飞驰电气中压配网中性点接地与电网保护工程研究院（总工/外贸对接人：Henry）',
    ja: '飛馳電気 中圧中性点接地・系統保護工学研究所（チーフ：Henry）',
    es: 'Instituto de Ingeniería de Puesta a Tierra y Protección de Redes Feichi (Líder: Henry)',
    ru: 'Инженерно-исследовательский институт заземления нейтрали и защиты сетей Feichi Power (Гл. инженер: Henry)',
  },
  standards: 'IEEE 32-2020 / IEEE 142 (Green Book) / IEC 60076-16 / GB/T 10229-1988 / DL/T 780-2001 / ГОСТ 13109-97 / ГОСТ 15150-69 (УХЛ1) / СТО РОССЕТИ 56947007-29.240.10.191-2014',
  readTime: {
    en: '25 min technical study (Includes Zero-Sequence Grid Capacitance Equations, Intermittent Arc Energy Dissipation Models, Peterson Coil Auto-Tuning Closed-Loop & Russian ЗНГ-35 Questionnaire)',
    zh: '25 分钟深度技术研读（含配网零序电容电流微积分方程、间歇性弧光接地能量泄放阻尼方程、消弧线圈全自动微机偏磁调谐闭环算法与俄标 ЗНГ-35/ДГР 选型表单）',
    ja: '25分 専門設計解説（零相静電容量電流積分計算・間欠アークエネルギー減衰方程式・消弧リアクトル全自動チューニング閉ループアルゴリズム・ロシアZNG-35選定問診票）',
    es: '25 min de lectura técnica (Incluye ecuaciones de capacitancia homopolar de red, modelos de disipación de energía de arco, sintonización automática de Petersen y cuestionario ЗНГ-35)',
    ru: '25 мин технического изучения (включая расчет емкостных токов замыкания на землю по длине кабельных и воздушных линий, моделирование гашения перемежающейся дуги, алгоритмы автоматической подстройки ДГР по контуру нулевой последовательности и полный Опросный лист на ЗНГ-35 / ДГР)',
  },
  summary: {
    en: 'An authoritative technical whitepaper on 10kV, 20kV, and 35kV Neutral Grounding Systems (Neutral Grounding Resistors NGR / Russian GOST series ZNG, SZN; Automatic Tuning Arc Suppression Coils ASC / Petersen Coils series DGR, RUDT; Chinese FE-NGR-10/35 & FE-ASC-10/35 series) for urban cable networks, open-pit mining power distribution, industrial petrochemical refineries, and high-altitude renewable wind/solar collector substations. Benchmarking international leaders Post Glover (USA), Trench Group (Germany), and Russian pioneer JSC SVEL Group (Yekaterinburg), this dossier explores: 1) Network Zero-Sequence Capacitive Current ($I_{c0}$) calculations across overhead line networks ($I_{c0} \\approx 0.025\\text{ A/km}$) and heavy underground XLPE cable networks ($I_{c0} \\approx 1.5 \\sim 3.5\\text{ A/km}$); 2) Engineering trade-offs between Low-Resistance Grounding (LRG: $I_{fault} = 100\\text{A} \\sim 1000\\text{A}$ for rapid selective breaker tripping $< 100\\text{ ms}$) vs Resonant High-Inductance Grounding (Petersen Coil ASC: auto-tuned to within $\\Delta I_{residual} < 5\\text{A}$ allowing continuous 2-hour operation during single-phase ground faults); 3) High-temperature Cr20Ni80 / Stainless Steel 304/316 resistor bank metallurgy capable of withstanding $760^\\circ\\text{C}$ short-time thermal shocks ($10\\text{s} / 30\\text{s}$) with thermal drift $< 5\\%$; 4) Advanced multi-frequency signal injection algorithms identifying faulted feeders with $> 99.5\\%$ accuracy; 5) Siberian Arctic -50°C insulated IP54 enclosure designs preventing condensation breakdown; and 6) Complete PJSC Rosseti neutral grounding Опросный лист questionnaire templates.',
    zh: '系统阐述 10kV、20kV 与 35kV 中压配电网中性点接地系统（不锈钢中性点接地电阻柜 NGR / 俄标 ЗНГ, ШЗН 系列；偏磁式/调匝式自动跟踪消弧线圈成套装置 ASC / 俄标 ДГР, РУДТ 系列；国标飞驰 FE-NGR-10/35 与 FE-ASC-10/35 系列）在城市大型电缆网、露天重矿开采电网、大型石化炼油厂及高比例风电光伏汇集站中的核心接地故障机理与工程选型规范。深度对标美国 Post Glover（全球 NGR 标杆）、德国 Trench Group（消弧线圈先驱）以及俄罗斯叶卡捷琳堡成套电气巨头 Группа «СВЭЛ»（ЗНГ/ДГР 系列），重点解析：1）电网零序对地分布电容电流（$I_{c0}$）微积分计算模型（架空线网 $I_{c0} \approx 0.025\text{ A/km}$ vs 高压交联电缆网 $I_{c0} \approx 1.5 \sim 3.5\text{ A/km}$）；2）中电阻接地方式（低阻接地 LRG：$I_{fault} = 100\text{A} \sim 1000\text{A}$，快速切除故障线路 $< 100\text{ ms}$）与消弧线圈谐振补偿接地方式（调谐残流 $\Delta I_{residual} < 5\text{A}$，自动熄灭瞬时电弧并允许带单相接地故障连续运行 2 小时）工程决策树；3）特种耐高温 Cr20Ni80 镍铬合金与 304/316 不锈钢电阻片材料冶金学，耐受 $760^\circ\text{C}$ 瞬时短时温升冲击（10s/30s 持续时间），全温区阻值漂移率 $< 5\%$；4）微机综合保护注入法与五次谐波方向法单相接地故障精准选线算法（选线准确率 $> 99.5\%$）；5）西伯利亚 -50°C 极寒双层发泡隔热与智能恒温防凝露 IP54 重载外壳设计；以及 6）符合俄罗斯国家电网 ПАО «Россети» 与海关联盟 ТР ТС 004/2011 认证的《Опросный лист на заземляющий резистор ЗНГ-35 / дугогасящий реактор ДГР》工程选型技术规范。',
    ja: '10kV/20kV/35kV 中性点接地システム（中性点接地抵抗器NGR・ロシアGOST ЗНГ、自動追従消弧リアクトルASC・ロシアGOST ДГР、飛馳FE-NGR/FE-ASC）の完全設計解説書。米国Post Glover、ドイツTrench、ロシアSVELをベンチマークし、零相静電容量電流計算（架空線0.025A/km、XLPEケーブル1.5〜3.5A/km）、低抵抗接地（LRG：100〜1000A、100ms以内即時遮断）と消弧リアクトル接地（残流<5A、単相地絡2時間継続給電可能）の選定比較、760℃耐熱ステンレス抵抗素子、高精度地絡選線アルゴリズム、シベリア-50℃防露IP54筐体、およびロシアRosseti標準Опросный лист問診票を網羅。',
    es: 'Expediente técnico de Puesta a Tierra de Neutro en Media Tensión 10kV–35kV (Resistencias NGR / ЗНГ y Bobinas Petersen ASC / ДГР / FE-NGR-10/35) para redes urbanas y minería. Analiza el cálculo de corriente capacitiva de red ($I_{c0}$), comparativa entre puesta a tierra de baja resistencia (LRG 100A-1000A con disparo rápido <100ms) y compensación resonante Petersen ($\Delta I < 5\text{A}$ permitiendo operar 2 horas en falla), metalurgia de resistencias de acero inoxidable a 760°C, algoritmos de detección de alimentador fallado y cuestionarios oficiales de licitación.',
    ru: 'Полное техническое руководство по заземлению нейтрали в сетях 10, 20 и 35 кВ: резисторы заземления нейтрали (ЗНГ, ШЗН) и автоматически перестраиваемые дугогасящие реакторы (ДГР, РУДТ) по ГОСТ 13109-97 и СТО Россети. Рассмотрены: расчет суммарного емкостного тока сети $I_{c0}$ (воздушные линии 0.025 А/км, кабели СПЭ 1.5-3.5 А/км); выбор между резистивным заземлением (ток 100-1000 А с селективным отключением за < 100 мс) и компенсацией емкостного тока ДГР (остаточный ток < 5 А с сохранением электроснабжения потребителей до 2 часов); жаропрочные резисторы из нержавеющей стали на температуру до 760°C; алгоритмы микропроцессорной селективной сигнализации замыканий на землю; антиконденсатные шкафы IP54 для Сибири до -50°C (УХЛ1) и полный Опросный лист ПАО Россети.',
  },
  sec1Title: {
    en: '1. Grid Physics: Low-Resistance Grounding (NGR) vs Resonant Arc Suppression (Petersen Coil ASC) Topology',
    zh: '1. 接地故障物理学对比：中低电阻接地柜（NGR）vs 谐振补偿消弧线圈（Petersen Coil ASC）工程决策树',
    ja: '1. 接地方式比較：低抵抗接地方式（NGR）vs 消弧リアクトル共振接地方式（ASC）選定基準',
    es: '1. Física de Falla a Tierra: Puesta a Tierra por Resistencia (NGR) vs Bobina Petersen Resonante (ASC)',
    ru: '1. Физика замыканий на землю: резистивное заземление (ЗНГ) vs компенсация емкостных токов (ДГР)',
  },
  sec1Text: {
    en: `In medium-voltage utility and industrial networks (10kV to 35kV), single-phase-to-ground faults represent $> 75\\%$ of all electrical failures. The selection of neutral grounding philosophy dictates network continuity and transient overvoltage severity.

**Grounding Topology Mathematical Modeling**:
1. **Zero-Sequence Capacitive Fault Current Calculation ($I_{c0}$)**:
   - Total uncompensated ground fault current is proportional to cumulative grid capacitive charging:
     $$I_{c0} = \\sqrt{3} \\cdot \\omega \\cdot U_{phase} \\cdot \\left( \\sum L_{cable} \\cdot C_{0, cable} + \\sum L_{overhead} \\cdot C_{0, overhead} \\right)$$
   - In dense urban cable grids where $I_{c0} > 30\\text{A}$, ungrounded isolated systems produce deadly intermittent arc-grounding overvoltages reaching $U_{peak} \\ge 3.5\\text{ p.u.}$, rapidly triggering phase-to-phase short-circuit explosions.
2. **Neutral Grounding Resistor (NGR / Russian ЗНГ)**:
   - Connects a calibrated non-inductive stainless steel resistor between transformer neutral and station ground:
     $$I_R = \\frac{U_{phase}}{R_{NGR}} \\approx (1.0 \\sim 1.5) \\cdot I_{c0}$$
   - **Advantage**: Rapidly discharges trapped line charges, suppresses arc overvoltage below $U_{arc} < 2.2\\text{ p.u.}$, and provides sufficient zero-sequence current ($100\\text{A} \\sim 1000\\text{A}$) for instantaneous relay tripping ($< 100\\text{ ms}$).
3. **Automatic Tracking Arc Suppression Coil (ASC / Russian ДГР)**:
   - Regulates inductive current $I_L = U_{phase} / (\\omega L_{coil})$ to dynamically neutralize capacitive current:
     $$I_{residual} = \\left| I_{c0} - I_L \\right| < 5\\text{ A}$$
   - **Advantage**: Instantly self-extinguishes temporary transient arcs without tripping line breakers, keeping critical continuous manufacturing and mining operations fully energized for up to 2 hours.`,
    zh: `在 10kV~35kV 中压中性点非有效接地系统中，单相接地故障占配网全部电气故障的 $75\\%$ 以上。中性点接地方式的正确工程决策直接决定了电网供电可靠性与内部暂态过电压烈度。

**配网接地拓扑微分计算模型与工程决策对比**：
1. **电网零序对地总电容电流计算方程（$I_{c0}$）**：
   - 全网单相接地故障未补偿总电容电流取决于出线电缆与架空线总长度的对地分布电容积分：
     $$I_{c0} = \\sqrt{3} \\cdot \\omega \\cdot U_{phase} \\cdot \\left( \\sum L_{cable} \\cdot C_{0, cable} + \\sum L_{overhead} \\cdot C_{0, overhead} \\right)$$
   - 当城市电缆化率提升导致 $I_{c0} > 30\\text{A}$ 时，若仍采用不接地（中性点绝缘）运行，故障点极易产生高频间歇性熄弧与重燃，激发高达 $U_{peak} \\ge 3.5\\text{ p.u.}$ 的强烈弧光接地过电压，引发全站避雷器炸裂与多回路绝缘击穿相间短路事故。
2. **中性点接地电阻柜（NGR / 俄标 ЗНГ 系列）**：
   - 在变压器中性点（或经接地变压器 Z 型引出）与大地之间串接高稳定性不锈钢电阻：
     $$I_R = \\frac{U_{phase}}{R_{NGR}} \\approx (1.0 \\sim 1.5) \\cdot I_{c0}$$
   - **工程优势**：为对地电容储存的静电能量提供快速泄放通道，将弧光过电压牢牢钳制在 $U_{arc} < 2.2\\text{ p.u.}$ 以内，并提供足够大（$100\\text{A} \\sim 1000\\text{A}$）的零序电流驱动微机零序保护在 $< 100\\text{ ms}$ 内精准切除故障回路。
3. **自动跟踪消弧线圈成套装置（ASC / 俄标 ДГР 系列）**：
   - 自动调节电感电流 $I_L = U_{phase} / (\\omega L_{coil})$，在接地点实现感性电流与容性电流毫秒级动态对消：
     $$I_{residual} = \\left| I_{c0} - I_L \\right| < 5\\text{ A}$$
   - **工程优势**：接地点瞬时自熄灭瞬态故障电弧，不跳闸跳闸率降低 $80\\%$ 以上，允许重要工业和矿山用户带单相接地故障继续连续安全运行 2 小时。`,
    ja: '10kV〜35kV配電系統では単相地絡が全体の75%以上を占めます。地絡電流（I_c0）が30Aを超える場合、非接地系統では間欠アークにより3.5p.u.以上の危険な過電圧が発生。中性点接地抵抗器（NGR）は過電圧を2.2p.u.以下に抑制し100ms以内に選択遮断。自動消弧リアクトル（ASC）はインダクタンスを自動追従調整して残流を5A以下に抑え、トリップなしで2時間の継続送電を可能にします。',
    es: 'En 10kV–35kV, las fallas a tierra representan >75% del total. Cuando la corriente capacitiva $I_{c0} > 30\\text{A}$, el neutro aislado provoca sobretensiones por arco de $>3.5\\text{ p.u.}$. Las resistencias NGR descargan la red limitando la sobretensión a $<2.2\\text{ p.u.}$ y permiten despejar la falla en <100ms. Las bobinas de Petersen automáticas ASC neutralizan la corriente capacitiva dejando un residual $<5\\text{A}$, manteniendo el servicio 2 horas sin desconexión.',
    ru: 'В сетях 10-35 кВ на долю ОЗЗ приходится свыше 75% повреждений. При емкостном токе $I_{c0} > 30$ А в изолированной нейтрали дуговые перенапряжения достигают 3.5 $U_\\text{ф}$. Резисторы ЗНГ снижают перенапряжения до $< 2.2\\text{ U}_\\text{ф}$ и обеспечивают надежное отключение за $< 100$ мс. Дугогасящие реакторы ДГР компенсируют емкостный ток до остаточного значения менее 5 А, обеспечивая самопогасание дуги и бесперебойное электроснабжение ответственных потребителей до 2 часов.',
  },
  sec2Title: {
    en: '2. Metallurgy & Controls: 760°C Heavy-Duty Stainless Steel Element Alloys & Multi-Frequency Injection Fault Locators',
    zh: '2. 材料冶金与控制架构：760°C 特种耐高温不锈钢电阻片与微机多频注入式接地故障精准选线',
    ja: '2. 材料工学・制御構造：760℃耐熱ステンレス抵抗素子および多周波注入型高精度地絡選線システム',
    es: '2. Metalurgia y Control: Aleaciones de Acero Inoxidable a 760°C y Localizador de Fallas por Inyección Multifrecuencia',
    ru: '2. Материаловедение и микропроцессорная автоматика: резистивные элементы из нержавеющей стали (до 760°C) и мультичастотная селективная сигнализация ОЗЗ',
  },
  sec2Text: {
    en: `Neutral Grounding Resistors (NGR) are exposed to extreme thermal shocks during line-to-ground faults, with element temperatures surging from $-50^\\circ\\text{C}$ to $> 600^\\circ\\text{C}$ within seconds.

**Resistor Metallurgy & Digital Relay Technology**:
1. **Austenitic Stainless Steel / Ni-Cr Alloy Element Grid (Cr20Ni80 / SS304/316)**:
   - High-grade edge-wound or punched-grid stainless steel elements withstand continuous operational temperatures up to $760^\\circ\\text{C}$ without oxidation, fracture, or mechanical warping.
   - Temperature coefficient of resistance is engineered below $\\alpha_R < 0.00015\\text{ K}^{-1}$, guaranteeing resistance stability within $\\pm 5\\%$ across the full temperature range ($-50^\\circ\\text{C} \\sim +760^\\circ\\text{C}$).
2. **Microprocessor Multi-Frequency Signal Injection Fault Feeder Selector (Feichi FE-EFS)**:
   - During Petersen coil operation, standard 50Hz zero-sequence signals are weakened by compensation. The digital controller injects a unique non-integer harmonic signal ($22.5\\text{ Hz}$ or $220\\text{ Hz}$) into the neutral.
   - High-precision zero-sequence CTs across all outgoing feeders track the injected signal signature, identifying the faulted line with $> 99.5\\%$ accuracy in under $250\\text{ ms}$.`,
    zh: `中性点接地电阻器在承受单相接地大短路电流（$I_R = 100\\text{A} \\sim 1000\\text{A}$）通电持续时间（通常为 10s 或 30s）内，内部金属电阻片温度将在数秒内从极寒 $-50^\\circ\\text{C}$ 瞬时飙升至 $600^\\circ\\text{C}$ 以上。

**核心电阻冶金合金与微机选线控制架构**：
1. **Cr20Ni80 镍铬合金与 304/316 奥氏体不锈钢栅格电阻片**：
   - 采用特种波纹绕线式或冲压网状不锈钢网格，最高极限耐受工作温度高达 $760^\\circ\\text{C}$，在剧烈热胀冷缩交变下无氧化脆断与机械扭曲失稳；
   - 优化电阻材料温度电阻系数（$\\alpha_R < 0.00015\\text{ K}^{-1}$），在 $-50^\\circ\\text{C} \\sim +760^\\circ\\text{C}$ 全温度交变区间内电阻阻值温漂偏差严格锁定在 $\\pm 5\\%$ 黄金精度范围内，确保继电保护整定动作值永不变异。
2. **微机多频信号注入式单相接地故障自动选线装置（飞驰 FE-EFS 系列）**：
   - 在消弧线圈过补偿状态下，工频基波零序电流被完全抵消，传统零序过流保护彻底失效。微机控制单元在中性点实时注入特定非工频特征信号（$22.5\\text{ Hz}$ 超低频或 $220\\text{ Hz}$ 调制信号）；
   - 各出线回路专用高灵敏度零序互感器通过数字特征滤波锁定信号流向，在 $< 250\\text{ ms}$ 内精准锁定故障出线回路，选线准确率达到 $> 99.5\\%$。`,
    ja: 'NGRの抵抗エレメントは短絡時に数秒で600℃以上に達します。飛馳Cr20Ni80ニッケルクロム合金・SUS304抵抗素子は760℃の高温衝撃に耐え、全温度域での抵抗値ドリフトを±5%以内に抑制。消弧リアクトル系統では、中性点への非同期周波数（22.5Hz/220Hz）注入方式により、消弧状態でも地絡フィーダーを99.5%以上の高精度で選定検出します。',
    es: 'Las resistencias NGR experimentan choques térmicos severos subiendo a $>600^\\circ\\text{C}$ en segundos. Las aleaciones Cr20Ni80 y SS304/316 de Feichi soportan hasta 760°C con deriva de resistencia $<5\\%$. El localizador digital FE-EFS inyecta una señal no entera ($22.5\\text{ Hz}$ o $220\\text{ Hz}$) identificando el alimentador fallado con $>99.5\\%$ de precisión en $<250\\text{ ms}$.',
    ru: 'Резисторы ЗНГ при аварии нагреваются до $>600^\\circ\\text{C}$ за секунды. Ленточные элементы из сплава Cr20Ni80 и нержавеющей стали AISI 304 выдерживают нагрев до 760°C с изменением сопротивления менее $\\pm 5\\%$. Для селективной сигнализации ОЗЗ в сетях с ДГР микропроцессорная система FE-EFS внедряет зондирующий ток специальной частоты (22.5 Гц или 220 Гц), безошибочно определяя поврежденное присоединение с вероятностью $>99.5\\%$ за 250 мс.',
  },
  sec3Title: {
    en: '3. Technical Benchmarking Matrix: Feichi FE-NGR/ASC vs. Post Glover vs. Trench Group ASC vs. Russian SVEL ZNG/DGR',
    zh: '3. 国际顶级中性点接地与消弧成套系统核心参数深度对标表：飞驰 FE-NGR/ASC vs. 美国 Post Glover vs. 德国 Trench Group vs. 俄罗斯 СВЭЛ ЗНГ/ДГР',
    ja: '3. 国際トップ中性点接地・消弧装置技術仕様比較：飛馳 FE-NGR/ASC vs. 米国 Post Glover vs. ドイツ Trench vs. ロシア SVEL ZNG/DGR',
    es: '3. Matriz de Benchmarking Técnico: Feichi FE-NGR/ASC vs. Post Glover vs. Trench Group vs. SVEL ЗНГ/ДГР (Rusia)',
    ru: '3. Сравнительная матрица параметров: Feichi FE-NGR/ASC (ЗНГ/ДГР) vs. Post Glover vs. Trench Group vs. АО Группа СВЭЛ ЗНГ/ДГР',
  },
  tableHeaders: {
    en: ['Technical Specification & Parameter', 'Feichi FE-NGR / FE-ASC (УХЛ1)', 'Post Glover Neutral Grounding (USA)', 'Trench Group Petersen Coil (Germany)', 'Russian АО Группа СВЭЛ ЗНГ/ДГР'],
    zh: ['核心技术参数 / 性能维度', '飞驰电气 FE-NGR / FE-ASC (УХЛ1)', '美国 Post Glover 中性点接地电阻', '德国 Trench Group 自动消弧线圈', '俄罗斯 СВЭЛ ЗНГ-35 / ДГР 系列'],
    ja: ['技術仕様・性能パラメータ', '飛馳電気 FE-NGR / FE-ASC (УХЛ1)', '米国 Post Glover 接地抵抗器', 'ドイツ Trench 消弧リアクトル', 'ロシア SVEL ZNG-35 / DGR'],
    es: ['Parámetro Técnico', 'Feichi FE-NGR / FE-ASC (УХЛ1)', 'Post Glover NGR (EE.UU.)', 'Trench Group Petersen Coil', 'Группа СВЭЛ ЗНГ/ДГР (Rusia)'],
    ru: ['Технический параметр', 'Feichi FE-NGR / FE-ASC (ЗНГ/ДГР УХЛ1)', 'Post Glover NGR (США)', 'Trench Group Petersen Coil', 'АО Группа СВЭЛ ЗНГ-35 / ДГР УХЛ1'],
  },
  tableRows: {
    en: [
      ['System Rated Voltage (Ur)', '6.3 kV, 10.5 kV, 20 kV, 35 kV (Up to 40.5kV)', '2.4 kV, 4.16 kV, 13.8 kV, 34.5 kV', '10 kV, 20 kV, 35 kV, 110 kV', '6.3 kV, 10 kV, 20 kV, 35 kV (ГОСТ 1516.3)'],
      ['Rated Fault Current (NGR)', '100 A, 200 A, 400 A, 1000 A (10s/30s/Cont.)', '100 A to 1000 A (10s / Continuous)', '50 A to 400 A (Resistor Systems)', '100 A, 200 A, 400 A, 630 A (ГОСТ)'],
      ['Petersen Coil Capacity (ASC)', '200 kVA to 5000 kVA (Bias/Stepped)', 'Limited Offering', '300 kVA to 8000 kVA (Plunger/Stepped)', '150 kVA to 4000 kVA (ДГР СВЭЛ)'],
      ['Resistor Element Metallurgy', 'Cr20Ni80 / Stainless Steel 304/316 (760°C)', '304/316 Stainless Steel Grid', 'Stainless Steel / Special Alloy', 'Нержавеющая сталь 12Х18Н10Т / Х20Н80'],
      ['Resistance Thermal Drift', 'ΔR < 5.0% (-50°C to +760°C Full Range)', 'ΔR < 6.0%', 'ΔR < 5.5%', 'ΔR < 5.0% (ГОСТ 13109-97)'],
      ['Petersen Auto-Tuning Accuracy', 'Residual Current ΔI < 5.0 A (Closed-Loop)', 'N/A', 'Residual Current ΔI < 3.0 A', 'Остаточный ток ΔI < 5.0 А'],
      ['Ground Fault Feeder Locator', 'Multi-Frequency Active Injection (> 99.5%)', 'Optional CT Relay Module', '5th Harmonic Directional / Transient', 'Инжекционная система сигнализации ЧР / ОЗЗ'],
      ['Enclosure Ingress & Finish', 'IP54 Heavy Stainless Steel / Alu-Zinc C5-M', 'NEMA 3R / Galvanized Steel', 'IP54 / Polyester Coated Steel', 'IP54 УХЛ1 / Антикоррозийное С5'],
      ['Ambient Climate Rating', '-50°C to +55°C (GOST 15150-69 УХЛ1)', '-40°C to +50°C', '-40°C to +50°C', '-50°C to +45°C (УХЛ1 Siberian)'],
      ['Integrated Neutral Isolation', 'Motorized Disconnector + Vacuum Contactor', 'Manual Disconnect Switch', 'Integrated Neutral Contactor', 'Разъединитель нейтрали РВЗ / РДЗ'],
      ['Digital Protocol & SCADA', 'IEC 61850 Ed.2 + Modbus TCP + 4G IoT', 'Modbus RTU / DNP3', 'IEC 61850 / Profibus', 'МЭК 61850 / МЭК 60870-5-104'],
      ['Transformer Options', 'Integrated Z-Type Grounding Transformer (ZNyn)', 'Zig-Zag Transformer Available', 'Integrated Earthing Trafo', 'Трансформатор заземляющий ТМГ-З'],
    ],
    zh: [
      ['电网额定电压等级 (Ur)', '6.3 kV, 10.5 kV, 20 kV, 35 kV (最高40.5kV)', '2.4 kV, 4.16 kV, 13.8 kV, 34.5 kV', '10 kV, 20 kV, 35 kV, 110 kV', '6.3 kV, 10 kV, 20 kV, 35 kV (ГОСТ 1516.3)'],
      ['电阻柜额定通流能力 (NGR)', '100 A, 200 A, 400 A, 1000 A (10s/30s/连续)', '100 A 至 1000 A (10s / 连续载流)', '50 A 至 400 A (接地成套配置)', '100 A, 200 A, 400 A, 630 A (符合俄标)'],
      ['消弧线圈容量配置 (ASC)', '200 kVA 至 5000 kVA (偏磁/调匝连续)', '主营纯电阻，消弧线圈定制少', '300 kVA 至 8000 kVA (柱塞/调匝式)', '150 kVA 至 4000 kVA (ДГР 系列)'],
      ['核心电阻片合金冶金材质', 'Cr20Ni80 镍铬合金 / 304/316 奥氏体不锈钢', '304/316 不锈钢冲压栅格', '特种不锈钢合金网格', 'Нержавеющая сталь 12Х18Н10Т / Х20Н80'],
      ['全温区电阻阻值漂移率', 'ΔR < 5.0% (-50°C 至 +760°C 全温区)', 'ΔR < 6.0%', 'ΔR < 5.5%', 'ΔR < 5.0% (ГОСТ 13109-97)'],
      ['消弧线圈微机调谐精度', '残余补偿电流 ΔI < 5.0 A (全闭环自整定)', '不适用', '残余补偿电流 ΔI < 3.0 A', 'Остаточный ток ΔI < 5.0 А'],
      ['单相接地故障选线技术', '微机多频非工频信号注入法 (准确率>99.5%)', '可选配过流传感器模块', '五次谐波方向法 / 首半波暂态法', 'Инжекционная система сигнализации ОЗЗ'],
      ['箱体结构与防护等级', 'IP54 重型不锈钢/敷铝锌板 C5-M 涂层', 'NEMA 3R / 热镀锌钢板', 'IP54 / 聚酯喷涂钢板', 'IP54 УХЛ1 / Антикоррозийное С5'],
      ['环境气候耐受工作范围', '-50°C 至 +55°C (俄标 УХЛ1 极寒高纬度认证)', '-40°C 至 +50°C', '-40°C 至 +50°C', '-50°C 至 +45°C (УХЛ1 极寒型)'],
      ['中性点高压隔离控制', '配置电动隔离开关 + 真空接触器旁路', '配置手动隔离开关', '配置中性点真空接触器', 'Разъединитель нейтрали РВЗ / РДЗ'],
      ['数字化通信与监控协议', 'IEC 61850 Ed.2 + Modbus TCP + 工业云网关', 'Modbus RTU / DNP3', 'IEC 61850 / Profibus', 'МЭК 61850 / МЭК 60870-5-104'],
      ['接地变压器配套能力', '标配 Z 型曲折接线接地变压器 (ZNyn11)', '可选配 Zig-Zag 接地变', '一体化接地变压器集成', 'Трансформатор заземляющий ТМГ-З'],
    ],
    ja: [
      ['定格電圧 (Ur)', '6.3kV, 10.5kV, 20kV, 35kV (最大40.5kV)', '2.4kV 〜 34.5kV', '10kV 〜 110kV', '6.3kV, 10kV, 20kV, 35kV'],
      ['NGR定格電流', '100A, 200A, 400A, 1000A (10s/30s)', '100A 〜 1000A', '50A 〜 400A', '100A 〜 630A'],
      ['消弧リアクトル容量', '200 kVA 〜 5000 kVA (偏磁/タップ式)', '限定的', '300 kVA 〜 8000 kVA', '150 kVA 〜 4000 kVA'],
      ['抵抗素子材質', 'Cr20Ni80 ニクロム合金 / SUS304/316 (760℃)', 'SUS304/316 ステンレス', 'ステンレス特殊合金', '耐熱ステンレス鋼 Х20Н80'],
      ['抵抗値温漂率', 'ΔR < 5.0% (-50℃ 〜 +760℃ 全範囲)', 'ΔR < 6.0%', 'ΔR < 5.5%', 'ΔR < 5.0%'],
      ['消弧リアクトル調諧精度', '残留電流 ΔI < 5.0A (完全閉ループ)', '該当なし', '残留電流 ΔI < 3.0A', '残留電流 ΔI < 5.0A'],
      ['地絡故障選線検出', '多周波信号注入方式 (検出率>99.5%)', 'オプションCTモジュール', '第5高調波方向法', '多周波注入方式'],
      ['耐寒温度定格', '-50°C 〜 +55°C (ロシア УХЛ1 適合)', '-40°C 〜 +50°C', '-40°C 〜 +50°C', '-50°C 〜 +45°C (УХЛ1)'],
      ['通信プロトコル', 'IEC 61850 Ed.2 + Modbus TCP', 'Modbus RTU / DNP3', 'IEC 61850 / Profibus', 'МЭК 61850 / МЭК 60870-5-104'],
    ],
    es: [
      ['Tensión Nominal (Ur)', '6.3 kV, 10.5 kV, 20 kV, 35 kV (hasta 40.5kV)', '2.4 kV a 34.5 kV', '10 kV a 110 kV', '6.3 kV, 10 kV, 20 kV, 35 kV'],
      ['Corriente Nominal NGR', '100 A, 200 A, 400 A, 1000 A (10s/30s)', '100 A a 1000 A', '50 A a 400 A', '100 A a 630 A'],
      ['Capacidad Bobina ASC', '200 kVA a 5000 kVA', 'Bajo pedido', '300 kVA a 8000 kVA', '150 kVA a 4000 kVA'],
      ['Metalurgia Resistencia', 'Aleación Cr20Ni80 / Acero Inox 304/316 (760°C)', 'Acero Inox 304/316', 'Aleación Inoxidable', 'Acero Inoxidable 12Х18Н10Т'],
      ['Deriva Térmica Resistencia', 'ΔR < 5.0% (-50°C a +760°C Rango Total)', 'ΔR < 6.0%', 'ΔR < 5.5%', 'ΔR < 5.0%'],
      ['Precisión Sintonización ASC', 'Corriente Residual ΔI < 5.0 A', 'N/A', 'Corriente Residual ΔI < 3.0 A', 'Corriente Residual ΔI < 5.0 A'],
      ['Detección Falla a Tierra', 'Inyección Activa Multifrecuencia (> 99.5%)', 'Relé de Corriente Homopolar', 'Direccional 5° Armónico', 'Inyección Multifrecuencia'],
      ['Rango de Temperatura', '-50°C a +55°C (Clima Ártico УХЛ1)', '-40°C a +50°C', '-40°C a +50°C', '-50°C a +45°C (УХЛ1)'],
      ['Protocolos Digitales', 'IEC 61850 Ed.2 + Modbus TCP + Cloud IoT', 'Modbus RTU / DNP3', 'IEC 61850 / Profibus', 'МЭК 61850 / МЭК 60870-5-104'],
    ],
    ru: [
      ['Номинальное напряжение сети', '6.3 кВ, 10.5 кВ, 20 кВ, 35 кВ (до 40.5 кВ)', '2.4 кВ, 4.16 кВ, 13.8 кВ, 34.5 кВ', '10 кВ, 20 кВ, 35 кВ, 110 кВ', '6.3 кВ, 10 кВ, 20 кВ, 35 кВ (ГОСТ 1516.3)'],
      ['Номинальный ток резистора ЗНГ', '100 А, 200 А, 400 А, 1000 А (10с/30с/длит.)', '100 А до 1000 А (10с / непрерывно)', '50 А до 400 А', '100 А, 200 А, 400 А, 630 А (ГОСТ)'],
      ['Мощность дугогасящего реактора', 'от 200 до 5000 кВА (плавное регулирование)', 'Ограниченная номенклатура', 'от 300 до 8000 кВА', 'от 150 до 4000 кВА (ДГР СВЭЛ)'],
      ['Материал резистивных элементов', 'Сплав Х20Н80 / сталь 12Х18Н10Т / AISI 304 (760°C)', 'Нержавеющая сталь 304/316', 'Жаропрочная сталь', 'Нержавеющая сталь 12Х18Н10Т / Х20Н80'],
      ['Температурный дрейф сопротивления', 'ΔR < 5.0% (-50°C...+760°C во всем диапазоне)', 'ΔR < 6.0%', 'ΔR < 5.5%', 'ΔR < 5.0% (ГОСТ 13109-97)'],
      ['Точность настройки ДГР', 'Остаточный ток компенсации ΔI < 5.0 А', 'Не применяется', 'Остаточный ток ΔI < 3.0 А', 'Остаточный ток ΔI < 5.0 А'],
      ['Селективная сигнализация ОЗЗ', 'Мультичастотный инжекционный метод (> 99.5%)', 'Модуль реле ТТНП', 'По 5-й гармонике и переходным процессам', 'Инжекционная микропроцессорная система'],
      ['Степень защиты шкафа', 'IP54 нержавеющая сталь / алюмоцинк C5-M', 'NEMA 3R / оцинковка', 'IP54 / сталь с полимерным покрытием', 'IP54 УХЛ1 / антикоррозийное покрытие С5'],
      ['Климатическое исполнение', '-50°C...+55°C (ГОСТ 15150-69 УХЛ1 для Сибири)', '-40°C...+50°C', '-40°C...+50°C', '-50°C...+45°C (УХЛ1)'],
      ['Интегрированный разъединитель', 'Моторный разъединитель + вакуумный контактор', 'Ручной рубильник', 'Вакуумный контактор нейтрали', 'Разъединитель нейтрали РВЗ / РДЗ'],
      ['Цифровые протоколы связи', 'МЭК 61850 Ed.2 + Modbus TCP + IoT-шлюз', 'Modbus RTU / DNP3', 'IEC 61850 / Profibus', 'МЭК 61850 / МЭК 60870-5-104'],
      ['Заземляющий трансформатор', 'Комплектный трансформатор со схемой ZNyn11', 'Трансформатор типа Zig-Zag', 'Комплектный заземляющий ТМ', 'Заземляющий сухой или масляный ТМГ-З'],
    ],
  },
  sec4Title: {
    en: '4. Scenario-Based Application Decision Guide: Urban Cable Grids, Open-Pit Mines & Petrochemical Refineries',
    zh: '4. 重点应用场景工程选型与系统集成决策指南',
    ja: '4. 適用産業別選定マトリクス：都市ケーブル網・露天鉱山・石油化学コンビナート',
    es: '4. Guía de Decisión por Sector: Redes Urbanas de Cables, Minería a Cielo Abierto y Refinerías',
    ru: '4. Руководство по выбору оборудования: городские кабельные сети, разрезы и карьеры, нефтехимические заводы',
  },
  scenarios: {
    en: [
      {
        title: 'High-Density Urban XLPE Underground Cable Distribution Networks (Ic0 > 50A)',
        recommend: 'Recommendation: Low-Resistance Neutral Grounding Resistor NGR (100A–400A / 10s)',
        reason: 'Eliminates intermittent arc overvoltages (Uarc < 2.2 p.u.) and enables fast selective zero-sequence relay protection (< 100ms) to clear cable faults instantly.',
      },
      {
        title: 'Deep Open-Pit Mining Grids & Remote Industrial Facilities Requiring Non-Stop Power',
        recommend: 'Recommendation: Auto-Tuned Petersen Arc Suppression Coil ASC + Fast Injection Locator',
        reason: 'Compensates ground fault current to < 5A, allowing mining excavators and draglines to operate continuously for 2 hours during single-phase ground faults.',
      },
      {
        title: 'Siberian Arctic Oil/Gas Substations & Chemical Refineries (-50°C УХЛ1 Heavy Condensation)',
        recommend: 'Recommendation: Arctic Heavy Stainless Steel NGR Cabinet with Anti-Condensation Heaters',
        reason: 'SS304 element bank withstands 760°C thermal shocks without embrittlement, certified under Russian GOST 13109-97 and PJSC Rosseti standards.',
      },
    ],
    zh: [
      {
        title: '特大城市中心密集高压 XLPE 电缆配电网（零序电容电流大 $I_{c0} > 50\text{A}$）',
        recommend: '选型推荐：中低电阻接地电阻柜 NGR（100A~400A / 10秒短时通流型）',
        reason: '彻底消除间歇性弧光接地过电压（钳制在 $U_{arc} < 2.2\text{ p.u.}$），配合微机零序保护在 $< 100\text{ ms}$ 内精准切除电缆绝缘破坏回路，杜绝电缆爆燃。',
      },
      {
        title: '大型露天煤矿、铁矿与连续生产化工企业（要求单相接地不跳闸保供电）',
        recommend: '选型推荐：微机偏磁式自动跟踪消弧线圈 ASC + 注入式多频精准选线装置',
        reason: '毫秒级自动调谐将残流压低至 5A 以内，电弧瞬间自熄，允许矿区大型电铲、皮带机带单相接地故障连续供电 2 小时，大幅减少非计划停产损失。',
      },
      {
        title: '俄罗斯西伯利亚极寒油气田枢纽与化工厂变电站（-50°C 严寒与重度凝露 УХЛ1）',
        recommend: '选型推荐：极寒重型 304 不锈钢中性点接地电阻柜 + 智能防凝露温控系统',
        reason: '特种合金电阻片耐受 $760^\circ\text{C}$ 瞬时短路冲击，双层保温防雨箱体杜绝凝露爬电闪络，完全符合俄罗斯 ПАО «Россети» 标准规范。',
      },
    ],
    ja: [
      {
        title: '都市部高密度XLPEケーブル配電網 (地絡電流 I_c0 > 50A)',
        recommend: '推奨：低抵抗中性点接地抵抗器 NGR (100A〜400A / 10秒定格)',
        reason: 'アーク過電圧を2.2p.u.以下に制限し、100ms以内の高速遮断でケーブル火災を未然防止。',
      },
      {
        title: '露天掘り鉱山・連続稼働化学プラント (無停電給電要求)',
        recommend: '推奨：自動追従型消弧リアクトル ASC ＋ 信号注入型地絡選線システム',
        reason: '地絡残流を5A以下に抑制し瞬時消弧。2時間の継続送電を保証し生産停止を防止。',
      },
      {
        title: 'ロシア・シベリア極寒油田・化学工場 (-50℃ УХЛ1 酷寒環境)',
        recommend: '推奨：極寒仕様ステンレスNGRキャビネット＋防露ヒーターシステム',
        reason: '760℃耐熱抵抗素子と二重断熱IP54筐体により氷点下50℃でも信頼性100%。',
      },
    ],
    es: [
      {
        title: 'Redes Urbanas de Cables Subterráneos XLPE de Alta Densidad (Ic0 > 50A)',
        recommend: 'Recomendación: Resistencia de Neutro de Baja Resistencia NGR (100A–400A / 10s)',
        reason: 'Elimina sobretensiones por arco ($U < 2.2\\text{ p.u.}$) y permite despeje selectivo ultra-rápido en $<100\\text{ ms}$.',
      },
      {
        title: 'Minería a Cielo Abierto e Industrias con Procesos Críticos Continuos',
        recommend: 'Recomendación: Bobina de Petersen Automática ASC + Localizador por Inyección',
        reason: 'Compensa la corriente residual a $<5\\text{A}$ permitiendo operar 2 horas sin interrumpir la producción.',
      },
      {
        title: 'Campos Petroleros y Refinerías en Siberia (-50°C УХЛ1)',
        recommend: 'Recomendación: Gabinete NGR en Acero Inoxidable con Calefacción Anticondensación',
        reason: 'Elementos de acero inoxidable a 760°C certificados bajo normas rusas GOST y Rosseti.',
      },
    ],
    ru: [
      {
        title: 'Городские кабельные сети 10-20 кВ с кабелями СПЭ (емкостный ток $I_{c0} > 50$ А)',
        recommend: 'Рекомендация: Резистор заземления нейтрали ЗНГ (100–400 А / 10 с) с трансформатором ТМГ-З',
        reason: 'Полностью устраняет дуговые перенапряжения ($U_{дуг} < 2.2\\text{ U}_\\text{ф}$) и обеспечивает быстродействующее селективное отключение повреждения за время менее 100 мс.',
      },
      {
        title: 'Угольные разрезы, карьеры и непрерывные химические производства',
        recommend: 'Рекомендация: Автоматически перестраиваемый ДГР с инжекционной системой селективной сигнализации ОЗЗ',
        reason: 'Компенсация емкостного тока до остаточного $< 5$ А обеспечивает мгновенное самопогасание дуги и позволяет продолжать работу карьерных экскаваторов до 2 часов без отключения фидера.',
      },
      {
        title: 'Подстанции нефтегазовых промыслов и НПЗ Сибири (-50°C, исполнение УХЛ1)',
        recommend: 'Рекомендация: Шкаф резистора нейтрали ШЗН-35 из нержавеющей стали с антиконденсатным обогревом',
        reason: 'Жаропрочные резисторы выдерживают нагрев до 760°C, а утепленный шкаф IP54 исключает перекрытие изоляции при резких перепадах температур по ГОСТ 13109-97.',
      },
    ],
  },
  hasCalculator: 'ngr' as any,
  ctaTitle: {
    en: 'Need Network Zero-Sequence Capacitance Calculations or Russian GOST Опросный лист for 10kV/35kV NGR / DGR?',
    zh: '需要获取 10kV/35kV 电网零序电容电流计算书或俄标 Опросный лист 选型方案？',
    ja: '10kV/35kV 零相静電容量計算書やロシアGOST問診票が必要ですか？',
    es: '¿Requiere Cálculos de Corriente Capacitiva Homopolar o Cuestionario GOST para NGR / DGR 10kV/35kV?',
    ru: 'Требуется расчет емкостных токов замыкания на землю или Опросный лист на резистор ЗНГ-35 / реактор ДГР?',
  },
  ctaDesc: {
    en: 'Connect directly with technical lead Henry to receive complete zero-sequence fault current simulations, neutral grounding sizing sheets, single-line diagrams, and Russian PJSC Rosseti certified commercial proposals within 24 hours.',
    zh: '直接与技术负责人 Henry 沟通，获取完整的零序电容电流仿真计算书、中性点接地电阻选型计算表、一次单线图（SLD）及符合俄罗斯国家电网认证的正式报价单（24 小时内响应）。',
    ja: '技術責任者 Henry に直接ご連絡ください。零相地絡電流シミュレーション、NGR選定計算書、単線結線図（SLD）およびロシアRosseti認定見積書を24時間以内に提供します。',
    es: 'Contacte directamente con el líder técnico Henry para obtener simulaciones de corrientes homopolares, dimensionamiento de NGR, diagramas unifilares y propuestas comerciales certificadas en 24 horas.',
    ru: 'Свяжитесь напрямую с техническим руководителем Henry для получения расчета емкостных токов ОЗЗ, выбора параметров ЗНГ и ДГР, однолинейных схем и коммерческого предложения по стандартам ПАО Россети в течение 24 часов.',
  },
};
