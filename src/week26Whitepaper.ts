import type { WhitepaperItem } from './whitepapersData';

export const week26Whitepaper: WhitepaperItem = {
  id: 'week-26',
  week: 26,
  slug: 'high-voltage-statcom-svg-dynamic-reactive-power-compensation-and-harmonic-filtering-guide',
  category: 'switchgear',
  categoryLabel: {
    en: 'HV STATCOM / SVG & Dynamic Reactive Compensation (6kV–35kV / СТАТКОМ / УКРМ / IEC 62927)',
    zh: '6kV–35kV 高压动态无功补偿装置 SVG / STATCOM 与有源滤波谐波治理工程指南 (СТАТКОМ / IEC 62927 / IEEE 1052)',
    ja: '6kV〜35kV 高圧静止型無効電力補償装置 STATCOM/SVG・アクティブ高調波フィルタ設計指針 (IEC 62927)',
    es: 'Compensación Reactiva Dinámica STATCOM / SVG y Filtrado de Armónicos en Alta Tensión 6kV-35kV (IEC 62927)',
    ru: 'Статические тиристорные/транзисторные компенсаторы СТАТКОМ (SVG) 6-35 кВ и активная фильтрация гармоник (ГОСТ Р 58087 / МЭК 62927)',
  },
  title: {
    en: '6kV–35kV High-Voltage Static Synchronous Compensator (STATCOM / SVG) & Active Harmonic Filtering Engineering Guide: Modular Multilevel Cascaded (MMC) IGBT Topology, Sub-5ms Dynamic Response, Microgrid Voltage Stabilization, Arc Furnace & Renewable Grid-Tie Compliance (Benchmarking Siemens SICAM/SVC PLUS, ABB/Hitachi Energy SVC Light, RXPE & TGOOD)',
    zh: '6kV–35kV 高压链式静止无功发生器（SVG / STATCOM）与有源谐波治理系统工程选型指南：模块化级联多电平（MMC）IGBT 拓扑、<5ms 极速动态响应、弱电网电压跌落抑制、光伏/风电并网与电弧炉闪变治理（对标西门子 SVC PLUS、ABB/Hitachi Energy SVC Light、荣信电力电子 RXPE 与特锐德 TGOOD）',
    ja: '6kV〜35kV 高圧モジュール型マルチレベル静止型無効電力補償装置（STATCOM / SVG）＆アクティブ高調波対策完全設計ガイド：MMCカスケードIGBTトポロジー、5ms未満の超高速応答、マイクログリッド電圧安定化、アーク炉フリッカ抑制および再エネ系統連系（Siemens SVC PLUS・ABB SVC Light・RXPE・TGOODベンチマーク）',
    es: 'Guía de Ingeniería de Compensadores Síncronos Estáticos (STATCOM / SVG) de 6kV a 35kV y Filtrado de Armónicos: Topología IGBT Multinivel en Cascada (MMC), Respuesta Dinámica <5ms, Estabilización de Tensión en Microrredes y Mitigación de Flickeo en Hornos de Arco',
    ru: 'Инженерное руководство по быстродействующим статическим компенсаторам реактивной мощности СТАТКОМ (SVG) и активным фильтрам гармоник 6-35 кВ: модульная каскадная многоуровневая топология (MMC) на IGBT-транзисторах, время отклика <5 мс, стабилизация напряжения в слабых сетях, подавление фликкера дуговых печей и интеграция СЭС/ВЭС (Бенчмарк Siemens SVC PLUS, ABB/Hitachi Energy SVC Light, RXPE и TGOOD)',
  },
  eyebrow: {
    en: 'DYNAMIC REACTIVE POWER COMPENSATION & POWER QUALITY (IEC 62927 / IEEE 1052 / IEEE 519 / ГОСТ 32144-2013 / ГОСТ Р 58087-2018)',
    zh: 'FE-SPEC-26 · 6kV–35kV 动态无功补偿 SVG / STATCOM 与电能质量治理选型专论（IEC 62927 / GB/T 33953 / ГОСТ 32144 / ГОСТ Р 58087）',
    ja: 'FE-SPEC-26 · 6kV〜35kV STATCOM/SVG 無効電力補償・電力品質最適化技術仕様書（IEC 62927 / IEEE 519 / GOST 32144）',
    es: 'FE-SPEC-26 · DOSSIER DE COMPENSADORES DINÁMICOS STATCOM/SVG 6kV–35kV Y CALIDAD DE ENERGÍA (IEC / IEEE / GOST)',
    ru: 'FE-SPEC-26 · РУКОВОДСТВО ПО СТАТКОМ (SVG) 6-35 кВ И КАЧЕСТВУ ЭЛЕКТРОЭНЕРГИИ (ГОСТ 32144-2013 / ГОСТ Р 58087-2018 / СТО РОССЕТИ)',
  },
  author: {
    en: 'Feichi Power Quality & Static Compensator Engineering Institute (Lead: Henry)',
    zh: '飞驰电气电能质量与静止无功补偿工程研究院（总工/外贸对接人：Henry）',
    ja: '飛馳電気 電力品質・静止型無効電力補償工学研究所（チーフ：Henry）',
    es: 'Instituto de Ingeniería de Calidad de Energía y Compensación Estática Feichi (Líder: Henry)',
    ru: 'Инженерно-исследовательский институт качества электроэнергии и компенсаторов СТАТКОМ Feichi Power (Гл. инженер: Henry)',
  },
  standards: 'IEC 62927 / IEEE 1052 / IEEE 519-2022 / GB/T 33953-2017 / GB/T 14549 / ГОСТ 32144-2013 / ГОСТ Р 58087-2018 / ГОСТ 15150-69 (УХЛ1)',
  readTime: {
    en: '20 min technical study (Includes Modular Multilevel Cascaded MMC Physics, Sub-5ms Transient Current Equations, Harmonic THD Reduction Modeling & Russian ГОСТ Questionnaire)',
    zh: '20 分钟深度技术研读（含 MMC 级联多电平数学模型、<5ms 瞬态无功电流矢量控制微分方程、谐波 THD 抑制分析与俄标 Опросный лист 选型实战）',
    ja: '20分 専門設計解説（MMCカスケードマルチレベル数式モデル・5ms過渡無効電流ベクトル制御微分方程式・高調波THD低減シミュレーション・GOST選定問診票）',
    es: '20 min de lectura técnica (Incluye modelos matemáticos MMC en cascada, ecuaciones diferenciales de control vectorial <5ms, mitigación de armónicos THD y cuestionario GOST)',
    ru: '20 мин технического изучения (включая математическую модель каскадного инвертора MMC, векторное управление током за <5 мс, расчет фильтрации гармоник THD и полный Опросный лист на СТАТКОМ 6-35 кВ)',
  },
  summary: {
    en: 'A comprehensive technical whitepaper on High-Voltage Static Synchronous Compensators (STATCOM / SVG) and Active Power Quality Systems for 6kV, 10kV, 24kV, and 35kV utility and industrial grids (capacities from ±1 Mvar to ±100 Mvar). Benchmarking global industry leaders Siemens SVC PLUS, ABB/Hitachi Energy SVC Light, and RXPE, this guide details Modular Multilevel Cascaded (MMC) H-bridge IGBT inverter topology, sub-5ms ultra-rapid dynamic response, complete continuous bidirectional reactive power regulation (lagging 0.0 to leading 0.0 with cosφ ≥ 0.99), active mitigation of 2nd to 25th harmonic currents (THD < 3%), low-voltage ride-through (LVRT) support during grid faults, outdoor containerized IP55 / ГОСТ 15150 УХЛ1 arctic execution (-50°C to +55°C) with dual-redundant closed-loop deionized water cooling, and official Russian standard Опросный лист questionnaire formats.',
    zh: '全面剖析 6kV、10kV、24kV 与 35kV 级联型高压静止无功发生器（STATCOM / SVG）及动态电能质量治理系统的核心架构与工程选型（额定容量涵盖 ±1 Mvar 至 ±100 Mvar）。深度对标德国西门子（Siemens SVC PLUS）、瑞士 ABB / 日立能源（Hitachi Energy SVC Light）及荣信电力电子（RXPE），系统阐述基于链式 H 桥 IGBT 模块化多电平级联（MMC）逆变拓扑、瞬态响应时间小于 5ms 的全控型双向无级无功连续调节（感性 0 至容性 0，并网点功率因数 $\\cos\\varphi \\ge 0.99$）、2 至 25 次特征谐波动态滤除（综合畸变率 THD < 3%）、新能源电网高低电压穿越（LVRT/HVRT）支撑、集装箱式全预制 IP55 / -50°C 俄标 ГОСТ УХЛ1 极寒重工结构、双冗余闭式去离子纯水冷却循环体系，以及全套符合全俄电网 ПАО «Россети» 与国际 EPC 标准的《Опросный лист на СТАТКОМ 6-35 кВ》工程选型技术规范。',
    ja: '6kV/10kV/24kV/35kV 高圧静止型無効電力補償装置（STATCOM / SVG、容量±1 Mvar〜±100 Mvar）の完全技術解説書。Siemens SVC PLUS、ABB SVC Light、RXPEをベンチマークし、HブリッジIGBTモジュール式マルチレベルカスケード（MMC）トポロジー、5ms以下の過渡応答時間による連続双方向無段階力率補正（cosφ 0.99以上）、2次〜25次高調波アクティブ抑制（THD < 3%）、風力・太陽光向け低電圧補償（LVRT）、IP55/GOST UHL1極寒（-50℃）密閉型純水冷却コンテナ構造、およびロシアRosseti/CIS向け標準Опросный лист選定ノウハウを完全網罗。',
    es: 'Expediente técnico de Compensadores Síncronos Estáticos de Alta Tensión (STATCOM / SVG) de 6kV a 35kV (±1 Mvar a ±100 Mvar). Diseñado bajo benchmarks de Siemens SVC PLUS, ABB SVC Light y RXPE, aborda la topología de inversores multinivel en cascada (MMC) con IGBTs, tiempo de respuesta dinámico <5ms para regulación continua bidireccional (cosφ ≥ 0.99), filtrado activo de armónicos del 2º al 25º orden (THD < 3%), soporte de huecos de tensión (LVRT), contenedores climatizados IP55 para climas árticos (-50°C GOST UHL1) con refrigeración por agua desionizada en circuito cerrado y cuestionarios oficiales de licitación.',
    ru: 'Полное техническое руководство по статическим синхронным компенсаторам СТАТКОМ (SVG) на напряжение 6, 10, 24 и 35 кВ мощностью от ±1 до ±100 МВар. На основе передового опыта Siemens SVC PLUS, ABB SVC Light и RXPE детально рассмотрены: модульная каскадная H-мостовая топология на IGBT-транзисторах (MMC), субмиллисекундное векторное управление с временем реакции <5 мс, плавное двунаправленное регулирование (от чисто индуктивного до чисто емкостного с cosφ ≥ 0.99), активная фильтрация 2-25 гармоник (THD < 3%), поддержка сети при просадках напряжения (LVRT), контейнерное исполнение IP55 по ГОСТ 15150 УХЛ1 (-50°C...+55°C) с двухконтурной системой водяного охлаждения высокой степени очистки (деионизированная вода) и полный Опросный лист ПАО Россети.',
  },
  sec1Title: {
    en: '1. Modular Multilevel Cascaded (MMC) Topology: Elimination of Massive Passive LC Filters & Direct Grid-Coupling',
    zh: '1. 链式 H 桥模块化多电平（MMC）逆变拓扑：彻底摆脱传统大体积 LC 滤波电抗器与直接电网直挂技术',
    ja: '1. MMCカスケードマルチレベルトポロジー：大型受動LCフィルタ不要＆直接系統連系技術',
    es: '1. Topología Modular Multinivel en Cascada (MMC): Eliminación de Filtros Pasivos LC y Acoplamiento Directo a Red',
    ru: '1. Модульная каскадная топология MMC: отказ от громоздких пассивных LC-фильтров и прямое подключение к сети 6-35 кВ',
  },
  sec1Text: {
    en: `In high-voltage reactive power compensation, legacy Thyristor-Controlled Reactors (TCR/SVC) and Fixed Capacitor Banks (FC) suffer from slow response (20ms-40ms), harmonic resonance risks, and severe capacity degradation during grid voltage drops ($Q \\propto U^2$).

Feichi FC-SVG series utilizes advanced Modular Multilevel Cascaded (MMC) chain topology. Each phase consists of $N$ identical power cells connected in series. Each cell integrates a high-reliability IGBT H-bridge inverter module and DC link capacitor ($C_{dc}$).

**Fundamental Physics of MMC Synthesis**:
By applying Phase-Shifted Carrier PWM (PSC-PWM), the phase output voltage $u_{out}(t)$ is synthesized from $2N+1$ discrete voltage levels:
$$u_{out}(t) = \\sum_{k=1}^{N} S_k(t) \\cdot U_{dc}$$
Where $S_k(t) \\in \\{-1, 0, 1\\}$ represents the instantaneous switching state of the $k$-th H-bridge cell, and $U_{dc}$ is the controlled DC link voltage.

**Key Technical Superiority**:
1. **Direct Grid Coupling (No Step-Down Transformer)**: Feichi STATCOM connects directly to 6kV, 10kV, 24kV, or 35kV medium-voltage buses via small buffer phase reactors ($L_s$), achieving an ultra-compact footprint saving up to 60% substation floor area compared to conventional SVCs.
2. **Current Source Characteristics**: The reactive output current $I_q$ is completely independent of system bus voltage:
$$Q = \\sqrt{3} \\cdot U_{grid} \\cdot I_q$$
Even during deep grid voltage sags down to 20% nominal voltage, Feichi SVG continues to deliver 100% rated capacitive current ($Q \\propto U$), offering robust dynamic voltage support and meeting strict Low-Voltage Ride-Through (LVRT) utility grid codes.`,
    zh: `在高压无功补偿与电能质量领域，传统的晶闸管控制电抗器（TCR 型 SVC）与固定并联电容器组（FC）存在响应速度慢（20ms~40ms）、容易与电网阻抗发生并联谐振、以及在电网电压跌落时无功出力急剧衰减（$Q \\propto U^2$）的固有缺陷。

飞驰电气 FC-SVG 系列采用前沿的模块化多电平级联（MMC / Chain-link）链式逆变拓扑。每相由 $N$ 个结构完全一致的功率单元串联组成，每个单元内部集成高可靠性车规级/工业级 IGBT 全桥逆变桥臂与低感自愈式直流支撑电容器组（$C_{dc}$）。

**MMC 多电平波形合成数学机理**：
通过载波相移脉宽调制（PSC-PWM）技术，各单元输出在时间轴上相互交错，相电压 $u_{out}(t)$ 呈现 $2N+1$ 个极高精细度的阶梯电平波形：
$$u_{out}(t) = \\sum_{k=1}^{N} S_k(t) \\cdot U_{dc}$$
其中 $S_k(t) \\in \\{-1, 0, 1\\}$ 为第 $k$ 个 H 桥单元的实时开关状态，$U_{dc}$ 为单元直流母线稳态电压。

**三大核心工程突破**：
1. **电网直接直挂（无需降压变压器）**：通过级联单元承受高压，飞驰 SVG 仅通过小型空心或铁芯缓冲电抗器（$L_s$）直接挂接于 6kV、10kV、24kV 或 35kV 母线，占地面积仅为传统 SVC 的 1/3~1/2。
2. **理想受控电流源输出特性**：输出无功电流 $I_q$ 不受电网母线电压波动影响。在电网遭受短路冲击、电压骤降至标称值 20% 时，依然能稳定发出 100% 额定容性无功电流（$Q \\propto U$），极大提升系统的故障穿越（LVRT）与电网支撑能力。`,
    ja: `高圧無効電力補償分野において、従来のサイリスタ制御リアクトル（TCR式SVC）や固定コンデンサ（FC）は、応答時間が遅く（20〜40ms）、系統インピーダンスとの共振リスクがあり、電圧低下時に無効電力出力が二乗で激減する（$Q \\propto U^2$）という致命的な欠点がありました。

飛馳電気 FC-SVGシリーズは、MMC（モジュール型マルチレベルカスケード）インバータトポロジーを採用。各相に直列接続されたN個のHブリッジIGBTユニットにより、高精度な疑似正弦波を出力します。降圧変圧器を介さずに6kV/10kV/24kV/35kV系統へ直結可能であり、設置面積を従来のSVC比で最大60%削減します。さらに電流源特性により系統電圧低下時も安定した無効電流を注入し、LVRT要件をクリアします。`,
    es: 'En compensación reactiva de MT/AT, los sistemas tradicionales TCR/SVC sufren de respuesta lenta y pérdida drástica de capacidad durante caídas de tensión ($Q \\propto U^2$). El sistema Feichi FC-SVG adopta una topología modular multinivel en cascada (MMC) con celdas H-Bridge IGBT. Conecta directamente a barras de 6kV, 10kV, 24kV o 35kV sin transformador elevador, ahorrando un 60% de espacio y garantizando una corriente reactiva constante incluso con caídas severas de tensión (soporte LVRT).',
    ru: 'В отличие от традиционных статических тиристорных компенсаторов (ТКР/СТК) и батарей статических конденсаторов (БСК), имеющих время реакции 20-40 мс и квадратичную зависимость мощности от напряжения ($Q \\propto U^2$), СТАТКОМ Feichi серии FC-SVG построен по схеме модульного многоуровневого каскадного инвертора (MMC). Устройство подключается напрямую к шинам 6, 10, 24 и 35 кВ через малогабаритные реакторы, обеспечивает время отклика менее 5 мс и сохраняет 100% выдачу номинального тока даже при падении напряжения в сети до 20% (требования LVRT).',
  },
  sec2Title: {
    en: '2. Sub-5ms Dynamic Response & Active Harmonic Filtering (2nd–25th Harmonics / THD < 3%)',
    zh: '2. <5ms 瞬态极速动态响应与 2~25 次宽频有源滤波（电弧炉闪变治理与 THD < 3%）',
    ja: '2. 5ms未満の過渡応答性と第2〜25次アクティブ高調波補償（アーク炉フリッカ抑制・THD 3%未満）',
    es: '2. Respuesta Dinámica <5ms y Filtrado Activo de Armónicos (2º al 25º orden / THD < 3%)',
    ru: '2. Время реакции менее 5 мс и активная фильтрация 2-25 гармоник (подавление фликкера дуговых печей и THD < 3%)',
  },
  sec2Text: {
    en: `For severe dynamic loads such as Electric Arc Furnaces (EAF), steel rolling mills, mine hoists, and electrified railways, voltage flicker and severe harmonic distortion (predominantly 2nd, 3rd, 5th, 7th harmonics) cause severe grid compliance penalties.

**Vector Control & Instantaneous dq0 Transformation**:
Feichi STATCOM executes high-speed digital signal processing on a dual-core DSP + FPGA control platform at a 20kHz sampling rate. By performing instantaneous reactive power decomposition (ip-iq method):
$$\\begin{bmatrix} i_d \\\\ i_q \\end{bmatrix} = \\mathbf{C}_{3/2} \\begin{bmatrix} i_a \\\\ i_b \\\\ i_c \\end{bmatrix}$$
The decoupling current controller achieves total transient current response time $T_{resp} \\le 5\\text{ ms}$.

**Harmonic Elimination Capability**:
In addition to fundamental reactive compensation, the controller injects anti-phase compensation currents $i_{comp}(t) = -\\sum_{h=2}^{25} i_h(t)$, reducing total harmonic current distortion ($THD_i$) from over 25% down to strictly $< 3\\%$, completely meeting IEEE 519-2022 and ГОСТ 32144-2013 standards.`,
    zh: `在钢铁冶金电弧炉（EAF）、轧钢机、大型矿山提升机及电气化铁道等冲击性非线性负荷现场，无功功率的剧烈瞬变会导致严重的电网电压闪变（Flicker）以及高次谐波污染（主要是 2、3、5、7、11 次特征谐波）。

**基于 dq 坐标解耦的高速矢量控制体系**：
飞驰 SVG 控制核心采用双核 64 位 DSP + Xilinx 高性能 FPGA 全数字化架构，主控循环采样频率高达 20kHz。通过瞬时无功功率理论（$i_p-i_q$ 运算）：
$$\\begin{bmatrix} i_d \\\\ i_q \\end{bmatrix} = \\mathbf{C}_{3/2} \\begin{bmatrix} i_a \\\\ i_b \\\\ i_c \\end{bmatrix}$$
内环电流解耦控制算法可在 1~2ms 内完成目标指令计算，从检测到扰动到输出额定反向无功电流的总响应时间 $T_{resp} \\le 5\\text{ ms}$（仅为传统 SVC 的 1/5）。

**宽频带综合有源滤波能力**：
在进行基波无功连续无级补偿（$\\cos\\varphi \\to 0.99$）的同时，系统通过陷波与重复控制算法，反相注入精准谐波抵消电流 $i_{comp}(t) = -\\sum_{h=2}^{25} i_h(t)$，将电网侧综合电流畸变率（$THD_i$）从治理前的 20%~35% 强力压降至 3% 以内，彻底根除因电压闪变引发的保护误动与精密仪器跳闸事故。`,
    ja: '製鉄所アーク炉や鉱山巻揚機などの激しい負荷変動現場において、フリッカと高調波が深刻な問題となります。飛馳電気 STATCOMは、DSP+FPGAによる20kHz高速サンプリングとdq軸非干渉ベクトル制御により、指令応答時間5ms以下を達成。基本波の力率補正（cosφ ≥ 0.99）と同時に、第2〜25次高調波をアクティブに逆位相補償し、系統側総合高調波歪率（THD）を3%未満に抑えます。',
    es: 'En cargas pesadas como hornos de arco (EAF) y laminadores, el sistema Feichi STATCOM ejecuta un control vectorial en tiempo real en una plataforma DSP+FPGA de 20kHz. Con un tiempo de respuesta de corriente <5ms, mitiga el flickeo de tensión y filtra activamente armónicos del 2º al 25º orden, reduciendo la distorsión armónica total (THD) por debajo del 3% conforme a IEEE 519 y GOST 32144.',
    ru: 'Для дуговых сталеплавильных печей (ДСП), прокатных станов и шахтных подъемных машин СТАТКОМ Feichi реализует цифровое векторное управление на базе DSP+FPGA с частотой дискретизации 20 кГц. Время динамической реакции системы не превышает 5 мс, что позволяет полностью устранить колебания напряжения (фликкер) и снизить суммарный коэффициент гармонических составляющих (THD) с 25-30% до уровня менее 3% по ГОСТ 32144-2013.',
  },
  sec3Title: {
    en: '3. Technical Comparison Matrix: Feichi Modular STATCOM (SVG) vs. Legacy SVC & Competitor Architectures',
    zh: '3. 技术参数横向对比矩阵：飞驰 MMC 级联 SVG vs. 传统晶闸管 SVC 及国际标杆架构',
    ja: '3. 主要技術比較マトリクス：飛馳MMC型STATCOM vs 従来型SVC・競合ベンチマーク',
    es: '3. Matriz Comparativa Técnica: Feichi STATCOM (SVG) vs. SVC Convencional y Fabricantes Líderes',
    ru: '3. Сравнительная матрица характеристик: СТАТКОМ Feichi против традиционных СТК и мировых аналогов',
  },
  tableHeaders: {
    en: ['Technical Parameter / Metric', 'Feichi FC-SVG (MMC Series)', 'Legacy SVC (TCR + FC)', 'Siemens SVC PLUS / ABB SVC Light', 'Standard Passive APFC (Capacitors)'],
    zh: ['技术指标 / 工程参数', '飞驰电气 FC-SVG 级联型', '传统晶闸管 SVC (TCR+FC)', '西门子 / ABB 国际标杆方案', '普通无源电容器自动补偿柜'],
    ja: ['技術指標・仕様項目', '飛馳電気 FC-SVG (MMC型)', '従来型 SVC (TCR+FC)', 'Siemens / ABB グローバル基準', '従来型自動コンデンサ盤 (APFC)'],
    es: ['Parámetro Técnico', 'Feichi FC-SVG (Serie MMC)', 'SVC Clásico (TCR + FC)', 'Siemens SVC PLUS / ABB SVC Light', 'Bancos de Condensadores APFC'],
    ru: ['Технический параметр', 'СТАТКОМ Feichi FC-SVG (MMC)', 'Традиционный СТК (ТКР+БСК)', 'Siemens SVC PLUS / ABB SVC Light', 'Конденсаторная установка УКРМ'],
  },
  tableRows: {
    en: [
      ['Topology Architecture', 'Modular Multilevel Cascaded (MMC) IGBT', 'Thyristor Controlled Reactor + Filter Banks', 'Modular Multilevel VSC (IGBT)', 'Contactor / Thyristor Switched Capacitors'],
      ['Dynamic Response Time', '≤ 5 ms (Ultra-Fast Digital Control)', '20 ms – 40 ms (Half-cycle latency)', '≤ 5 ms (Carrier Phase-Shift)', '1 s – 30 s (Mechanical switching delay)'],
      ['Voltage Sag Capability', 'Constant Current Source (Q ∝ U at 20% Sag)', 'Degrades with Voltage Square (Q ∝ U²)', 'Constant Current Source (Q ∝ U)', 'Severe drop (Q ∝ U²), contactor drop-out'],
      ['Harmonic Mitigation', 'Active elimination 2nd to 25th (THD < 3%)', 'Generates 5th/7th, requires bulky LC', 'Active filtering (THD < 3%)', 'No filtering, risk of harmonic resonance'],
      ['Footprint & Civil Works', '100% Pre-assembled Container (1x 40ft)', 'Large outdoor yard + filter building (3x-4x)', 'Containerized modular hall', 'Standard indoor panels'],
      ['Cooling System', 'Redundant closed-loop pure water cooling', 'Water-cooled thyristor valves + air fans', 'Deionized water cooling system', 'Natural air or fan cooling'],
      ['Arctic / Desert Rating', '-50°C to +55°C (ГОСТ 15150 УХЛ1 / IP55)', '-25°C to +40°C (Requires heavy heating)', '-40°C to +50°C (Custom engineering)', '-10°C to +40°C indoor rating'],
    ],
    zh: [
      ['逆变与功率拓扑', '链式 H 桥模块化多电平（MMC）IGBT', '晶闸管相控电抗器 TCR + 固定电容器组 FC', '模块化级联多电平 VSC (IGBT)', '交流接触器 / 复合开关投切电力电容器'],
      ['动态响应时间', '≤ 5 ms（全数字高频矢量控制）', '20 ms ~ 40 ms（受限于工频半波周期）', '≤ 5 ms（高频载波相移 PWM）', '1 s ~ 30 s（机械式步进阶梯投切延迟）'],
      ['低电压暂态支撑特性', '理想受控电流源（20%残压时保持额定电流）', '阻抗型输出，容量按电压平方衰减（Q ∝ U²）', '恒流源输出特性（满足严苛 LVRT 规范）', '严重衰减，接触器极易在低电压下欠压跳脱'],
      ['谐波治理与自发谐波', '有源双向消除 2~25 次谐波（THD < 3%）', 'TCR 本身产生大量 5/7 次谐波，依赖大型 LC', '宽频带动态有源滤波（THD < 3%）', '无滤波能力，极易与电网发生并联并放大谐波'],
      ['占地面积与土建周期', '全预制模块化集装箱（仅需 1 面 40ft 舱体）', '大型户外围栏电抗器场区 + 配电室（3~4倍面积）', '预制舱模块化布局', '户内常规开关柜'],
      ['核心散热冷却体系', '双冗余密闭循环去离子纯水冷却系统', '纯水冷却晶闸管阀组 + 强迫风冷', '工业纯水热交换循环系统', '自然风冷或箱体抽风'],
      ['环境气候适应等级', '-50°C ~ +55°C（俄标 ГОСТ УХЛ1 / IP55 极地）', '-25°C ~ +40°C（极寒需大功率伴热房）', '-40°C ~ +50°C（高等级工程定制）', '-10°C ~ +40°C 户内标准工况'],
    ],
    ja: [
      ['主回路トポロジー', 'モジュール型マルチレベルカスケード (MMC) IGBT', 'サイリスタ制御リアクトル TCR + フィルタ FC', 'モジュール型マルチレベル VSC (IGBT)', '電磁接触器開閉式コンデンサ盤 (APFC)'],
      ['動的応答速度', '≤ 5 ms（超高速デジタルベクトル制御）', '20 ms 〜 40 ms（半サイクル遅延）', '≤ 5 ms（搬送波位相シフトPWM）', '1秒 〜 30秒（段階的投入遅延）'],
      ['系統電圧低下時特性', '定電流源動作（20%残圧時も定格電流注入）', 'インピーダンス特性（無効電力が電圧の2乗で減衰）', '定電流源動作（LVRT要件準拠）', '出力激減、不足電圧による接触器トリップ'],
      ['高調波対策機能', '第2〜25次アクティブ補償（THD 3%未満）', 'TCR自身が高調波発生、大型受動フィルタ必須', 'アクティブフィルタリング機能内蔵', '高調波除去機能なし、共振拡大リスク'],
      ['設置面積・基礎工事', '完全プレハブコンテナ構造（40ftコンテナ1台）', '広大な屋外リアクトルヤードが必要（3〜4倍）', 'コンテナパッケージ構造', '標準屋内盤配置'],
      ['冷却方式', '二重化密閉式純水冷却システム', 'サイリスタ用純水冷却＋風冷リアクトル', '密閉脱イオン水冷却システム', '自然空冷またはファン強制空冷'],
      ['耐環境性能', '-50℃ 〜 +55℃（極寒GOST UHL1・IP55）', '-25℃ 〜 +40℃（寒冷地では大型保温建屋要）', '-40℃ 〜 +50℃（寒冷地向け仕様）', '-10℃ 〜 +40℃（屋内標準環境）'],
    ],
    es: [
      ['Topología de Inversor', 'Modular Multinivel en Cascada (MMC) IGBT', 'Reactor Controlado por Tiristores TCR + FC', 'Modular Multinivel VSC (IGBT)', 'Condensadores conmutados por contactor'],
      ['Tiempo de Respuesta', '≤ 5 ms (Control vectorial de alta velocidad)', '20 ms a 40 ms (Latencia de medio ciclo)', '≤ 5 ms (PWM con portadora desplazada)', '1 s a 30 s (Retardo mecánico)'],
      ['Soporte ante Huecos', 'Fuente de corriente (Q ∝ U con 20% de tensión)', 'Cae con el cuadrado de tensión (Q ∝ U²)', 'Fuente de corriente constante (LVRT)', 'Caída severa de potencia, riesgo de desenganche'],
      ['Mitigación Armónica', 'Eliminación activa armónicos 2º a 25º (THD<3%)', 'Genera armónicos 5º/7º, requiere filtros LC', 'Filtrado activo dinámico (THD<3%)', 'Sin filtrado, alto riesgo de resonancia'],
      ['Espacio e Ingeniería', 'Contenedor 100% prefabricado (1x 40ft)', 'Patio exterior amplio para reactores (3x-4x)', 'Módulos en contenedor prefabricado', 'Armarios interiores estándar'],
      ['Sistema de Enfriamiento', 'Agua desionizada en circuito cerrado redundante', 'Agua desionizada en tiristores + ventilación', 'Agua pura desionizada redundante', 'Ventilación natural o forzada'],
      ['Rango Climático', '-50°C a +55°C (GOST UHL1 / IP55 contenedor)', '-25°C a +40°C (Requiere climatización pesada)', '-40°C a +50°C (Ingeniería bajo pedido)', '-10°C a +40°C (Solo interiores)'],
    ],
    ru: [
      ['Схемная топология', 'Модульный каскадный инвертор MMC на IGBT', 'Тиристорно-реакторная группа ТКР + ФКУ (БСК)', 'Модульный многоуровневый VSC (IGBT)', 'Конденсаторная установка УКРМ на контакторах'],
      ['Время отклика', '≤ 5 мс (микропроцессорное векторное управление)', '20 мс – 40 мс (задержка коммутации тиристоров)', '≤ 5 мс (ШИМ с фазовым сдвигом несущей)', '1 с – 30 с (ступенчатое переключение ступеней)'],
      ['Работа при просадках', 'Источник тока (выдача 100% тока при остаточном U=20%)', 'Падение мощности пропорционально квадрату (Q ∝ U²)', 'Источник тока (поддержка сети по кодам LVRT)', 'Резкое падение мощности, отпадание контакторов'],
      ['Подавление гармоник', 'Активная фильтрация 2-25 гармоник (THD < 3%)', 'Генерирует 5 и 7 гармоники, требует фильтров', 'Активная фильтрация (THD < 3%)', 'Фильтрация отсутствует, риск резонанса'],
      ['Габариты и монтаж', 'Блочно-модульный контейнер БМЗ (1x 40-фут)', 'Открытая площадка под реакторы + здание (3-4x)', 'Блок-контейнерная подстанция', 'Стандартные шкафы НКУ/КРУ'],
      ['Система охлаждения', 'Двухконтурная система на деионизированной воде', 'Водяное охлаждение тиристоров + обдув', 'Двухконтурное водяное охлаждение', 'Воздушное естественное/принудительное'],
      ['Климатический класс', '-50°C...+55°C (ГОСТ 15150 УХЛ1 / IP55 БМЗ)', '-25°C...+40°C (требует капитального здания)', '-40°C...+50°C (северное исполнение)', '-10°C...+40°C (только внутри помещений)'],
    ],
  },
  sec4Title: {
    en: '4. Engineering Sizing Scenarios & Russian ГОСТ Questionnaire Breakdown (Опросный лист на СТАТКОМ 6-35 кВ)',
    zh: '4. 典型工程场景选型配置与全俄电网标准《Опросный лист на СТАТКОМ 6-35 кВ》实战拆解',
    ja: '4. 適用エンジニアリングシナリオおよびロシアGOST選定問診票（Опросный лист）徹底解説',
    es: '4. Escenarios de Aplicación y Cuestionario Estándar GOST para Licitaciones de STATCOM 6-35kV',
    ru: '4. Типовые сценарии применения и разбор Опросного листа на СТАТКОМ 6-35 кВ (ПАО «Россети»)',
  },
  scenarios: {
    en: [
      {
        title: 'Scenario A: Utility-Scale Solar PV & Wind Farm Grid-Tie (Central Asia / Middle East)',
        recommend: 'Feichi FC-SVG-35/±30Mvar (35kV Direct Grid-Tie, 40ft IP55 Container)',
        reason: 'Meets strict transmission code demanding continuous cosφ ≥ 0.99 at the Point of Common Coupling (PCC), dynamic voltage stabilization during solar irradiance fluctuations, and certified Fault Ride-Through (LVRT/HVRT).',
      },
      {
        title: 'Scenario B: Heavy Metallurgy Arc Furnace & Rolling Mill (Siberian Mining Complexes)',
        recommend: 'Feichi FC-SVG-10/±20Mvar + Active Filter Package (10kV Direct Coupling, -50°C УХЛ1)',
        reason: 'Suppresses rapid voltage flicker caused by scrap collapse in electric arc furnaces, fast reactive power injection (<5ms), and active mitigation of 2nd, 3rd, and 5th harmonics to protect sensitive electronic rolling mill drives.',
      },
      {
        title: 'Scenario C: Remote Mining & Oilfield Weak Island Grid (Permanent Frost Arctic Regions)',
        recommend: 'Feichi FC-SVG-6/±10Mvar Mobile Skid Container with Dual-Redundant Pure Water Cooling',
        reason: 'Stabilizes grid voltage fluctuations during heavy motor direct-on-line (DOL) starting, prevents generator over-excitation tripping, and operates reliably under severe -50°C frost conditions.',
      },
    ],
    zh: [
      {
        title: '场景 A：大型集中式光伏与风电基地并网点无功治理（中亚/中东戈壁新能源）',
        recommend: '飞驰电气 FC-SVG-35/±30Mvar（35kV 直挂集装箱一体舱，IP55 全天候防护）',
        reason: '满足电网调度对并网点（PCC）动态无功功率 $\\cos\\varphi \\ge 0.99$ 的严苛考核，平抑因光照突变引起的电网电压剧烈波动，具备标准的高低电压故障穿越（LVRT/HVRT）支撑能力。',
      },
      {
        title: '场景 B：重工业钢铁冶金电弧炉与连轧机供电系统（西伯利亚重工采选矿基地）',
        recommend: '飞驰电气 FC-SVG-10/±20Mvar 动态无功发生与有源滤波一体机（10kV 直挂，-50°C УХЛ1）',
        reason: '电弧炉废钢熔化阶段会引发剧烈的电网电压闪变，SVG 凭借 <5ms 的极速电流注入有效平抑闪变，同时针对性滤除 2、3、5 次特征谐波，彻底杜绝附近变压器过热与精密继保跳闸。',
      },
      {
        title: '场景 C：偏远极寒矿区与油气田孤网/弱受端电网稳定（北极圈永久冻土带）',
        recommend: '飞驰电气 FC-SVG-6/±10Mvar 滑撬预制舱式成套装置（配置双冗余密闭纯水冷却）',
        reason: '保障大功率矿用提升机与注水泵高压异步电机直接起动（DOL）时的母线电压不发生跌落崩溃，防止柴油发电机组过励磁保护动作，在 -50°C 极寒条件下实现免维护连续运行。',
      },
    ],
    ja: [
      {
        title: 'シナリオ A：大規模メガソーラー・風力発電所 系統連系点無効電力制御',
        recommend: '飛馳電気 FC-SVG-35/±30Mvar（35kV系統直結 40ft IP55コンテナ仕様）',
        reason: '系統連系点（PCC）における力率cosφ ≥ 0.99の常時維持、日照変動に伴う瞬時電圧変動の平滑化、および系統事故時のLVRT（低電圧補償）要件を完全達成。',
      },
      {
        title: 'シナリオ B：製鉄所アーク炉・圧延ラインのフリッカ補償＆高調波アクティブ抑制',
        recommend: '飛馳電気 FC-SVG-10/±20Mvar（10kV直結、-50℃極寒UHL1耐候仕様）',
        reason: 'アーク炉操業に伴う激しい電圧フリッカを5ms以内の超高速電流注入により抑制し、第2〜25次高調波をアクティブに除去。',
      },
      {
        title: 'シナリオ C：極寒隔離鉱山・油田マイクログリッドの電圧安定化',
        recommend: '飛馳電気 FC-SVG-6/±10Mvar（二重化純水冷却コンテナ型）',
        reason: '大型鉱山モーター直入れ起動時の母線電圧低下を瞬時に補償し、発電機の過励磁トリップを未然に防止。',
      },
    ],
    es: [
      {
        title: 'Escenario A: Plantas Solares y Parques Eólicos a Gran Escala',
        recommend: 'Feichi FC-SVG-35/±30Mvar (Conexión Directa a 35kV, Contenedor IP55)',
        reason: 'Cumple con el código de red exigiendo cosφ ≥ 0.99 en el punto de conexión (PCC), estabilización dinámica de tensión y soporte durante huecos de tensión (LVRT).',
      },
      {
        title: 'Escenario B: Hornos de Arco Eléctrico y Trenes de Laminación Pesada',
        recommend: 'Feichi FC-SVG-10/±20Mvar + Filtrado Activo (10kV Directo, -50°C GOST UHL1)',
        reason: 'Mitigación ultra rápida del flickeo (<5ms) durante la fusión de chatarra y eliminación activa de armónicos de 2º a 25º orden.',
      },
      {
        title: 'Escenario C: Microrredes Aisladas Mineras y Petroleras en Climas Árticos',
        recommend: 'Feichi FC-SVG-6/±10Mvar en Contenedor con Refrigeración por Agua Pura',
        reason: 'Evita colapsos de tensión durante el arranque directo de grandes motores de bombeo y protege los generadores diésel en condiciones de -50°C.',
      },
    ],
    ru: [
      {
        title: 'Сценарий А: Сетевые солнечные (СЭС) и ветровые (ВЭС) электростанции (35 кВ)',
        recommend: 'СТАТКОМ Feichi FC-SVG-35/±30 МВар (Прямое подключение к 35 кВ, блок-контейнер IP55)',
        reason: 'Обеспечение нормативного коэффициента мощности cosφ ≥ 0.99 в точке присоединения к сети (PCC), компенсация колебаний генерации ВИЭ и соответствие кодам LVRT/HVRT.',
      },
      {
        title: 'Сценарий Б: Металлургические дуговые сталеплавильные печи (ДСП) и прокатные станы',
        recommend: 'СТАТКОМ Feichi FC-SVG-10/±20 МВар с активной фильтрацией (10 кВ, УХЛ1 -50°C)',
        reason: 'Подавление колебаний напряжения (фликкера) при расплаве шихты за счет времени отклика <5 мс, подавление 2, 3 и 5 гармоник и защита силовых трансформаторов от перегрева.',
      },
      {
        title: 'Сценарий В: Изолированные энергосистемы заполярных рудников и месторождений',
        recommend: 'СТАТКОМ Feichi FC-SVG-6/±10 МВар в модульном здании БМЗ с водяным охлаждением',
        reason: 'Удержание напряжения на шинах 6 кВ при прямом пуске мощных высоковольтных насосов и компрессоров, предотвращение перегрузки дизель-генераторов при температурах до -50°C.',
      },
    ],
  },
  hasCalculator: 'sld',
  ctaTitle: {
    en: 'Download High-Voltage STATCOM / SVG Engineering Dossier & Request System Sizing Calculation',
    zh: '获取高压动态无功补偿 SVG / STATCOM 全套技术规范、系统计算书与俄标 Опросный лист',
    ja: '高圧STATCOM/SVG技術資料ダウンロードおよび系統容量計算書請求',
    es: 'Descargar Catálogo de STATCOM/SVG de Alta Tensión y Solicitar Cálculo de Compensación',
    ru: 'Скачать техническое руководство по СТАТКОМ (SVG) 6-35 кВ и заказать расчет опросного листа',
  },
  ctaDesc: {
    en: 'Feichi Power Quality & High-Voltage Static Compensator Engineering Team (Lead: Henry) delivers complete harmonic calculation reports, MMC simulation schematics, single-line diagrams, and turnkey commercial proposals within 24 hours.',
    zh: '飞驰电气电能质量与高压动态补偿工程部（总工/外贸对接人：Henry）将在 24 小时内为您提供完整的电网谐波仿真报告、MMC 级联拓扑图纸、单线系统图与项目交钥匙商业报价。',
    ja: '飛馳電気 電力品質・無効電力補償エンジニアリング部門（担当：Henry）が、24時間以内に系統高調波計算書、MMCシミュレーション結線図、正式見積書を作成します。',
    es: 'El departamento técnico de calidad de energía de Feichi entregará simulaciones de armónicos, esquemas unifilares y propuesta comercial en 24 horas.',
    ru: 'Инженерный отдел систем качества электроэнергии Feichi Power (Гл. инженер: Генри) предоставит расчет фильтрации гармоник, однолинейные схемы и технико-коммерческое предложение (ТКП) в течение 24 часов.',
  },
};
