import type { WhitepaperItem } from './whitepapersData';

export const week36Whitepaper: WhitepaperItem = {
  id: 'week-36',
  week: 36,
  slug: '10kv-35kv-intelligent-magnetic-solid-state-soft-starter-guide',
  category: 'switchgear',
  categoryLabel: {
    en: '10kV–35kV High-Voltage Magnetic & Solid-State Soft Starters (ВУП / УМП / IEC 60947-4-2 / ГОСТ 12434)',
    zh: '10kV–35kV 中高压磁控与晶闸管固态软起动系统选型指南（大中型异步/同步电动机重载起动 / 俄标 ВУП/УМП / 矿用提升与泵站）',
    ja: '10kV〜35kV 高圧磁気制御・サイリスタ半導体ソフトスタータ（ВУП/УМП/IEC 60947-4-2）設計指針',
    es: 'Arrancadores Suaves de Media Tensión 10kV–35kV (Magnéticos y de Tiristores / IEC 60947-4-2 / ГОСТ 12434)',
    ru: 'Высоковольтные устройства плавного пуска УППВ, ВУП, УМП 10-35 кВ (ГОСТ 12434-83 / СТО Россети 56947007-29.240.10.158-2013)',
  },
  title: {
    en: '10kV–35kV Medium-Voltage Heavy-Duty Motor Soft Starters (Magnetically Controlled Reactor MCR vs Solid-State High-Voltage Thyristor Soft Starter VFD-SS) Engineering Whitepaper: Mega-Watt Induction/Synchronous Motor Starting Current Limiting ($I_{start} \\le 2.0 \\sim 2.5 I_e$), Closed-Loop Flux Closed Feedback Dynamics ($T_{start} \\ge 1.2 T_e$), In-Line Vacuum Contactor Bypass Transitions, and Siberian Arctic -50°C Heavy Mining Ball Mill / Slurry Pump Grid Voltage Sag Mitigation (Benchmarking Benshaw, Solcon, Russian JSC VEI VUP & Pinggao)',
    zh: '10kV–35kV 中高压大中型电动机重载软起动系统（磁控软起动 MCR vs 高压晶闸管固态软起动 Thyristor Soft Starter）工程选型指南：兆瓦级异步/同步电机起动电流深度平滑限制模型（起动电流锁定在 $I_{start} \\le 2.0 \\sim 2.5 I_e$ 以内）、动态磁通闭环恒力矩起动动力学（起动转矩 $T_{start} \\ge 1.2 T_e$ 杜绝堵转）、起动完成工频真空接触器旁路无扰动切换拓扑、以及西伯利亚 -50°C 极寒高海拔矿山大型球磨机/高扬程主排水泵微电网电压暂降抑制（深度对标美国 Benshaw、以色列 Solcon、俄罗斯全俄电工研究院 ВЭИ 旗下 ВУП/УМП 系列与平高电气）',
    ja: '10kV〜35kV 中高圧大型モータ重負荷ソフトスタータ（磁気制御MCR vs 高圧サイリスタ半導体ソフトスタータ）完全設計技術白書：メガワット級誘導・同期電動機始動電流制限（I_start ≤ 2.0〜2.5 I_e）、磁束閉ループ一定トルク始動過渡力学（T_start ≥ 1.2 T_e）、全速真空コンタクタバイパス無瞬断切替、およびシベリア-50℃極寒鉱山ボールミル・排水ポンプ系統電圧低下抑制（Benshaw、Solcon、ロシアVEI VUPベンチマーク）',
    es: 'Arrancadores Suaves de Media Tensión 10kV–35kV para Motores Pesados (Control Magnético MCR vs Tiristores de Estado Sólido): Limitación de Corriente de Arranque ($I_{start} \\le 2.0 \\sim 2.5 I_e$), Dinámica de Par Constante ($T_{start} \\ge 1.2 T_e$), Transición a Contactor de Vacío de Bypass y Mitigación de Caídas de Tensión en Molinos Mineros en Siberia a -50°C',
    ru: 'Техническое руководство по высоковольтным устройствам плавного пуска 10-35 кВ (магнитно-тиристорные УМП против тиристорных УППВ): ограничение пусковых токов мощных асинхронных и синхронных двигателей ($I_{пуск} \\le 2.0-2.5 I_{ном}$), динамический замкнутый контур поддержания пускового момента ($M_{пуск} \\ge 1.2 M_{ном}$), бесударный перевод на байпасный вакуумный контактор и исключение просадок напряжения в слабых сетях Сибири при пуске мельниц и насосов до -50°C (Бенчмарк Benshaw, Solcon, ФГУП ВЭИ ВУП/УМП и Pinggao)',
  },
  eyebrow: {
    en: 'HIGH-VOLTAGE MOTOR SOFT STARTERS & POWER GRID PROTECTION (IEC 60947-4-2 / IEEE 1566 / ГОСТ 12434-83 / СТО РОССЕТИ)',
    zh: 'FE-SPEC-36 · 10kV–35kV 中高压电动机软起动与电网压降抑制专论（IEC 60947-4-2 / GB 14048.6 / DL/T 1358 / ГОСТ 12434 / ТР ТС 004/2011）',
    ja: 'FE-SPEC-36 · 10kV〜35kV 中高圧電動機ソフトスタート・電圧降下抑制仕様書（IEC 60947-4-2 / IEEE 1566 / ГОСТ 12434）',
    es: 'FE-SPEC-36 · DOSSIER DE ARRANCADORES SUAVES DE MEDIA TENSIÓN 10kV–35kV (IEC 60947-4-2 / IEEE / GOST)',
    ru: 'FE-SPEC-36 · РУКОВОДСТВО ПО ВЫСОКОВОЛЬТНЫМ УСТРОЙСТВАМ ПЛАВНОГО ПУСКА УППВ, ВУП 10-35 кВ (ГОСТ 12434-83 / СТО РОССЕТИ 56947007-29.240.10.158-2013)',
  },
  author: {
    en: 'Feichi High-Voltage Motor Drive & Heavy-Duty Soft Starter Engineering Institute (Lead: Henry)',
    zh: '飞驰电气高压电机电控与重载软起动系统工程研究院（总工/外贸对接人：Henry）',
    ja: '飛馳電気 高圧モータ制御・重負荷ソフトスタータ工学研究所（チーフ：Henry）',
    es: 'Instituto de Ingeniería de Accionamientos de Media Tensión y Arrancadores Suaves Feichi (Líder: Henry)',
    ru: 'Инженерно-исследовательский институт электропривода и высоковольтных пусковых устройств Feichi Power (Гл. инженер: Henry)',
  },
  standards: 'IEC 60947-4-2 / IEC 62271-106 / IEEE 1566 / GB 14048.6 / DL/T 1358-2014 / ГОСТ 12434-83 / ГОСТ 15150-69 (УХЛ1) / ТР ТС 004/2011 / СТО РОССЕТИ 56947007-29.240.10.158-2013',
  readTime: {
    en: '25 min technical study (Includes Motor Dynamic Inrush Integrals, Saturable Core Reactor Magnetic Permeability Modeling, Thyristor Firing Angle Alpha Control & Russian ВУП-10/35 Questionnaire)',
    zh: '25 分钟深度技术研读（含大电机起动冲击电流微积分方程、磁控电抗器铁芯磁导率动态调制力学方程、晶闸管移相触发角 $\\alpha$ 闭环控制模型与俄标 ВУП-10/35 选型表单）',
    ja: '25分 専門設計解説（モータ突入電流微分解析・可飽和リアクトル透磁率制御モデル・サイリスタ位相角アルファ制御・ロシアVUP-10/35選定問診票）',
    es: '25 min de lectura técnica (Incluye ecuaciones diferenciales de corriente de arranque, modelado de permeabilidad de reactores saturables, control de ángulo de disparo de tiristores y cuestionario ВУП-10/35)',
    ru: '25 мин технического изучения (включая дифференциальные уравнения пусковых токов асинхронных двигателей, моделирование магнитной проницаемости подмагничиваемых реакторов, фазовое управление тиристорами и полный Опросный лист на УППВ / ВУП-10/35)',
  },
  summary: {
    en: 'An authoritative technical whitepaper on 10kV, 20kV, and 35kV Medium-Voltage Heavy-Duty Motor Soft Starters (Magnetically Controlled Reactor MCR / Russian GOST series VUP, UMP; High-Voltage Solid-State Thyristor Soft Starter series UPPV; Chinese FE-MCR-10/35 & FE-SSS-10/35 series) for heavy industrial multi-megawatt squirrel-cage induction and synchronous motors (power ratings from 500 kW to 25,000 kW) driving mining ball mills, high-pressure slurry pumps, gas pipeline turbo-compressors, oxygen blowers, and steel hot rolling mills. Benchmarking international leaders Benshaw (USA), Solcon (Israel), and Russian pioneer FSUE VEI (Moscow), this dossier explores: 1) Physical mechanics of direct-on-line (DOL) starting damage—which draws $6.0 \\sim 8.0 I_e$ inrush currents causing severe power grid voltage dips ($\\Delta U > 15\\%$) and massive electrodynamic shear stresses on motor end windings; 2) Magnetically Controlled Reactor (MCR) technology adjusting DC excitation winding bias currents to dynamically vary AC core permeability, smoothly regulating motor stator terminal voltage from $30\\%$ to $100\\%$ ($I_{start} \\le 2.0 I_e$ with zero harmonic pollution and 30-year lifetime); 3) High-Voltage Solid-State Thyristor (SCR) soft starters utilizing fiber-optic isolated series-cascaded thyristor stacks ($V_{drm} \\ge 35\\text{kV}$) with digital closed-loop current ramping ($t_{ramp} = 5\\text{s} \\sim 120\\text{s}$); 4) Automatic zero-crossing vacuum contactor bypass synchronization that unloads power electronics once full speed is reached; 5) Siberian Arctic -50°C insulated IP54 enclosure designs with automated internal heating; and 6) Complete PJSC Rosseti high-voltage soft starter Опросный лист questionnaire templates.',
    zh: '系统阐述 10kV、20kV 与 35kV 中高压大中型电动机重载软起动系统（磁控电抗器软起动 MCR / 俄标 ВУП, УМП 系列；高压晶闸管固态软起动器 SSS / 俄标 УППВ 系列；国标飞驰 FE-MCR-10/35 与 FE-SSS-10/35 系列）在大型矿山矿石自磨机/球磨机、长输天然气管线离心式压缩机、大型引风机、高扬程矿山多级排水泵及钢铁热连轧机中的核心电气驱动机理与工程选型规范（适配电机额定功率 500 kW 至 25,000 kW，电压等级 6kV/10.5kV/35kV）。深度对标美国 Benshaw（全球中压软起动标杆）、以色列 Solcon（固态软起动先驱）以及俄罗斯全俄电工研究院 ВЭИ 旗下 ВУП 系列，重点解析：1）电机全压直接起动（DOL）对电网与机械轴系的破坏力学——直接起动产生高达 $6.0 \\sim 8.0 I_e$ 的剧烈浪涌电流，引发电网母线电压跌落（$\\Delta U > 15\\%$）导致全站欠压跳闸，并在电机定子端部线圈产生巨大的交变剪切电动力；2）磁控软起动（MCR）核心拓扑：通过微机控制直流励磁绕组电流深度调节工作铁芯磁饱和度，平滑改变交流阻抗，实现电机端电压从 $30\\%$ 到 $100\\%$ 的无级平稳爬升（起动电流牢牢限制在 $I_{start} \\le 2.0 I_e$ 以内，无谐波污染且具备 30 年免维护寿命）；3）高压晶闸管固态软起动（Thyristor Soft Starter）架构：采用多级光纤触发串联晶闸管阀组（耐压 $V_{drm} \\ge 35\\text{kV}$），结合全数字化恒流/转矩闭环算法（起动斜坡时间 $5\\text{s} \\sim 120\\text{s}$ 可调）；4）起动结束工频真空接触器自动过零同相位旁路切换拓扑（彻底消除功率器件运行发热损耗）；5）西伯利亚 -50°C 极寒高防护 IP54 防凝露保温舱体；以及 6）符合俄罗斯国家电网 ПАО «Россети» 与海关联盟 ТР ТС 004/2011 认证的《Опросный лист на устройство плавного пуска ВУП-10 / УППВ-35》工程选型技术规范。',
    ja: '10kV/20kV/35kV 高圧大型モータ重負荷ソフトスタータ（磁気制御MCR・ロシアGOST ВУП、サイリスタ半導体ソフトスタータ・ロシアGOST УППВ、飛馳FE-MCR/FE-SSS）の完全設計解説書（500kW〜25,000kW）。米国Benshaw、イスラエルSolcon、ロシアVEIをベンチマークし、全圧直入れ始動電流（6〜8倍）による系統電圧降下（>15%）とモータ巻線機械的衝撃の根絶、磁気制御MCRによる高調波ゼロ・始動電流制限（≤2.0倍）、光ファイバー直列サイリスタによる閉ループトルクランプ始動、全速到達時真空コンタクタ無瞬断バイパス切替、シベリア-50℃極寒IP54筐体、およびロシアRosseti標準Опросный лист問診票を網羅。',
    es: 'Expediente técnico de Arrancadores Suaves de Media Tensión 10kV–35kV (Reactores Magnéticos Saturables MCR / ВУП y Tiristores de Estado Sólido / УППВ / FE-MCR-10/35) para motores de 500 kW a 25.000 kW en minería e industrias pesadas. Elimina las corrientes de arranque directo (6-8 In) y caídas de tensión (>15%), limitando la corriente a $\\le 2.0 I_e$ con rampa de par controlada. Incluye bypass automático con contactor de vacío, operación en Siberia a -50°C y cuestionarios oficiales de licitación.',
    ru: 'Полное техническое руководство по высоковольтным устройствам плавного пуска на напряжение 10, 20 и 35 кВ: магнитно-тиристорные реакторные устройства (ВУП, УМП) и тиристорные устройства плавного пуска (УППВ, ШПП) мощностью от 500 до 25000 кВт по ГОСТ 12434-83 и СТО Россети. Рассмотрены: исключение тяжелых последствий прямого пуска (пусковые токи 6-8 Iном, просадки напряжения сети более 15% и электродинамические усилия в обмотках); технология МКР с плавным регулированием подмагничивания сердечника (ограничение пускового тока до 2.0-2.5 Iном без высших гармоник); тиристорные блоки с оптоволоконной развязкой; автоматический безударный перевод на байпасный вакуумный контактор; контейнерное исполнение для Сибири до -50°C (УХЛ1) и полный Опросный лист ПАО Россети.',
  },
  sec1Title: {
    en: '1. Motor Inrush Dynamics: Direct-on-Line (DOL) Impact vs Magnetically Controlled Reactor (MCR) vs Solid-State Thyristor Soft Starters',
    zh: '1. 电机起动冲击动力学：全压直起（DOL）破坏性 vs 磁控电抗器（MCR）vs 晶闸管固态软起动深度对比',
    ja: '1. 始動過渡現象比較：直入れ始動（DOL）の弊害 vs 磁気制御リアクトル（MCR）vs 半導体サイリスタ方式',
    es: '1. Dinámica de Corrientes de Arranque: Impacto Directo (DOL) vs Reactor Magnético (MCR) vs Arrancador de Tiristores',
    ru: '1. Физика переходных процессов при пуске: прямой пуск (DOL) vs магнитно-тиристорный пуск (ВУП/МКР) vs тиристорный пуск (УППВ)',
  },
  sec1Text: {
    en: `Starting large multi-megawatt medium-voltage induction or synchronous motors ($P > 2000\\text{ kW}$ at 10kV) across industrial and mining grids presents severe electrodynamic and thermal challenges.

**Motor Starting Dynamic Equations & Torque Relations**:
1. **Direct-On-Line (DOL) Inrush Impact**:
   - At locked-rotor standstill ($s = 1.0$), motor terminal impedance is strictly the leakage impedance ($Z_{start} \\approx R_s + R_r' + j(X_{ls} + X_{lr}')$), drawing massive starting current:
     $$I_{start, DOL} = \\frac{U_{phase}}{\\sqrt{(R_s + R_r')^2 + (X_{ls} + X_{lr}')^2}} \\approx (6.0 \\sim 8.0) \\cdot I_e$$
   - This huge surge creates grid busbar voltage drop $\\Delta U = I_{start} \\cdot Z_{grid} > 15\\%$, stalling other running plant motors, while generating extreme electrodynamic repulsive forces on stator end-windings ($F_{em} \\propto I^2$, surging $40 \\sim 64$ times normal nominal levels).
2. **Magnetically Controlled Reactor Soft Starter (Feichi FE-MCR / Russian ВУП-10)**:
   - Connects a saturable-core magnetic reactor in series with the stator. By adjusting DC bias excitation from $0$ to $I_{dc, max}$, the relative AC core permeability $\\mu_r$ shifts dynamically from $1500$ down to $1.0$:
     $$X_{MCR}(t) = \\omega \\cdot \\frac{N^2 \\cdot A_{core} \\cdot \\mu_0 \\mu_r(i_{dc})}{l_{core}}$$
   - **Advantage**: Starting current is smoothly clamped at $I_{start} \\le 2.0 I_e$ with zero power semiconductor harmonics, generating ultra-smooth acceleration torque ($T_{acc} \\ge 1.2 T_e$) ideal for heavy-inertia ball mills.
3. **High-Voltage Solid-State Thyristor Soft Starter (Feichi FE-SSS / Russian УППВ-10)**:
   - Series-connected back-to-back thyristor valves on each phase modulate firing angle $\\alpha$ from $150^\\circ$ down to $0^\\circ$:
     $$U_{rms}(\\alpha) = U_{phase} \\sqrt{1 - \\frac{\\alpha}{\\pi} + \\frac{\\sin(2\\alpha)}{2\\pi}}$$
   - **Advantage**: Fast digital programmable current limit ramps ($5\\text{s} \\sim 120\\text{s}$) with compact modular enclosure footprint.`,
    zh: `在重工业与矿山中压电网（10kV/35kV）中起动多兆瓦级大型高压异步电动机与同步电动机（功率通常在 $2000\\text{ kW} \\sim 25,000\\text{ kW}$）时，面临着剧烈的电动力与母线电压跌落严峻考验。

**电机起动电动力学微分模型与三大拓扑深度对比**：
1. **全压直接起动（DOL）的破坏性力学与电压暂降**：
   - 在电机静止堵转起动瞬间（转差率 $s = 1.0$），电机输入阻抗仅为定转子漏阻抗，起动冲击电流高达：
     $$I_{start, DOL} = \\frac{U_{phase}}{\\sqrt{(R_s + R_r')^2 + (X_{ls} + X_{lr}')^2}} \\approx (6.0 \\sim 8.0) \\cdot I_e$$
   - 剧烈的冲击电流导致电网母线产生严重电压暂降 $\\Delta U = I_{start} \\cdot Z_{grid} > 15\\%$，导致相邻工作电机低电压停机跳闸；同时在电机定子绕组端部产生高达额定值 $40 \\sim 64$ 倍的剧烈交变电动力（$F_{em} \\propto I^2$），导致绝缘磨损与端部绑扎断裂。
2. **磁控电抗器软起动系统（飞驰 FE-MCR / 俄标 ВУП-10 系列）**：
   - 在电机定子回路串入特种可控饱和磁抗器，通过微机控制直流励磁线圈电流，动态改变铁芯磁导率 $\\mu_r(i_{dc})$（从 $1500$ 饱和降低至 $1.0$）：
     $$X_{MCR}(t) = \\omega \\cdot \\frac{N^2 \\cdot A_{core} \\cdot \\mu_0 \\mu_r(i_{dc})}{l_{core}}$$
   - **工程优势**：起动电流被牢牢锁定在 $I_{start} \\le 2.0 I_e$ 以内，输出恒定平滑的机械转矩（$T_{start} \\ge 1.2 T_e$），无高次谐波污染，特别适合大型重载球磨机、高扬程水泵连续平稳起动，使用寿命长达 30 年。
3. **高压晶闸管固态软起动系统（飞驰 FE-SSS / 俄标 УППВ-10 系列）**：
   - 每相采用高压反并联晶闸管阀组经光纤触发，控制移相触发角 $\\alpha$ 从 $150^\\circ$ 连续平滑调制至 $0^\\circ$：
     $$U_{rms}(\\alpha) = U_{phase} \\sqrt{1 - \\frac{\\alpha}{\\pi} + \\frac{\\sin(2\\alpha)}{2\\pi}}$$
   - **工程优势**：体积紧凑轻巧、全数字化控制、支持恒流软起动/突跳起动/软停车等多种控制曲线。`,
    ja: '大容量モータの直入れ始動（DOL）は6〜8倍の突入電流と15%以上の系統電圧降下を招き、巻線に40〜64倍の電磁破壊力を与えます。磁気制御軟始動（MCR）は直流励磁制御により鉄芯透磁率を動的変調し、始動電流を2.0倍以下に抑制、高調波ゼロで1.2倍以上の一定トルクを発生。サイリスタ半導体方式（SSS）は光ファイバー点弧制御により5〜120秒の滑らかな電圧ランプ始動を実現します。',
    es: 'El arranque directo (DOL) genera corrientes de 6-8 In y caídas de tensión >15%, provocando esfuerzos electrodinámicos severos. El Arrancador Magnético MCR (ВУП) modula la saturación del núcleo limitando la corriente a $\\le 2.0 I_e$ con par constante $\\ge 1.2 T_e$ sin armónicos. El arrancador de estado sólido SSS (УППВ) utiliza tiristores en serie con disparo óptico para rampas digitales programables.',
    ru: 'Прямой пуск (DOL) мощных двигателей сопровождается токами 6-8 Iном и просадкой напряжения в сети свыше 15%, вызывая электродинамические силы в обмотках в 40-64 раза выше нормы. Магнитно-тиристорное устройство ВУП (МКР) путем плавного подмагничивания сердечника ограничивает пусковой ток до $\\le 2.0 I_{ном}$ при пусковом моменте $M_{пуск} \\ge 1.2 M_{ном}$ без генерации гармоник. Тиристорное устройство УППВ обеспечивает цифровую рампу нарастания напряжения за 5-120 с.',
  },
  sec2Title: {
    en: '2. Bypass Transitions & Fiber-Optic Firing Architecture for Siberian Extreme Mining Environments (-50°C УХЛ1)',
    zh: '2. 真空接触器无扰动旁路切换拓扑与西伯利亚 -50°C 极寒矿山光纤隔离触发控制架构',
    ja: '2. 真空コンタクタ無瞬断バイパス切替トポロジーおよびシベリア-50℃極寒光絶縁制御構造',
    es: '2. Transición a Bypass con Contactor de Vacío y Disparo por Fibra Óptica para Minería Ártica a -50°C',
    ru: '2. Безударный перевод на байпасный вакуумный контактор и оптоволоконная система управления для тяжелых условий Сибири (-50°C)',
  },
  sec2Text: {
    en: `Once the heavy motor reaches nominal rated speed ($s \\le 0.03$), leaving power electronics or series reactors permanently energized causes unnecessary thermal losses ($P_{loss} > 15\\text{ kW}$) and reduces system reliability.

**Bypass Kinematics & Siberian Cold Engineering**:
1. **Synchronous Zero-Crossing Bypass Transition Logic**:
   - The digital controller continuously tracks motor rotor slip speed and stator terminal phase voltage.
   - When stator voltage reaches $98\\% U_{nominal}$, the internal high-voltage vacuum contactor (Feichi FE-VC12 / Russian ВБ-10) is closed at the exact voltage zero-crossing ($t_{close} \\approx 15\\text{ ms}$), achieving smooth current commutation into the bypass path with zero mechanical torque shock ($\\Delta T_{shock} < 0.05 T_e$).
2. **Fiber-Optic Isolated Gate Drive & Arctic Heating Topology**:
   - High-voltage thyristor gates are driven via high-isolation polymer optical fibers ($V_{iso} \\ge 45\\text{kV}$), achieving complete immunity to massive electromagnetic noise generated by nearby variable-frequency drives and mining arc furnaces.
   - Siberian Arctic (-50°C УХЛ1) heavy-duty IP54 insulated cabinets feature PT100 temperature sensors and automated positive-pressure hot air convection heaters, completely eliminating condensation breakdown.`,
    zh: `当重载大电动机加速至接近额定转速（转差率 $s \\le 0.03$）后，若让晶闸管阀组或磁控电抗器继续串联在主回路中，将产生不必要的热损耗（单台损耗常超 $15\\text{ kW}$）并缩短设备寿命。

**无扰动旁路切换力学与极寒工程架构**：
1. **电网电压过零同步无扰动旁路切换逻辑**：
   - 微机控制器实时闭环跟踪电机转速转差率与定子端电压相位；
   - 当端电压平稳爬升至 $98\\% U_{nominal}$ 时，控制器在电网电压精确过零点触发高压真空接触器（飞驰 FE-VC12 / 俄标 ВБ-10 系列）闭合（动作耗时仅约 $15\\text{ ms}$），一次电流平滑无缝转移至工频直通旁路，切换瞬间电机轴系机械扭矩冲击冲击度 $\\Delta T_{shock} < 0.05 T_e$，彻底消除机械抖动。
2. **全光纤隔离触发驱动与西伯利亚极寒温控系统**：
   - 高压晶闸管门极触发脉冲与故障状态反馈全部通过特种耐高压纯玻璃光纤传输（绝缘耐压强度 $V_{iso} \\ge 45\\text{kV}$），对矿区大功率变频器、中频电炉产生的强烈高频电磁干扰实现 $100\\%$ 物理免疫；
   - 针对西伯利亚 -50°C 严寒工况，柜体配备双层保温防雨外壳、PT100 实时温控联动微正压防潮自加热系统，彻底杜绝极寒冷凝水闪络击穿。`,
    ja: 'モータ定速到達時（s≤0.03）、過零点同期制御により高圧真空コンタクタが15ms以内にバイパス投入され、電力損失ゼロ化とトルクショックゼロ（ΔT<0.05倍）を達成。制御回路は45kV高耐圧光ファイバーで完全光絶縁され、強烈な電磁ノイズを100%遮断。シベリア-50℃極寒環境下でもPT100連動自動除湿ヒーターにより結露短絡を完全防止します。',
    es: 'Al alcanzar la velocidad nominal ($s \\le 0.03$), el controlador conmuta el contactor de vacío en el paso por cero de tensión en <15ms, eliminando pérdidas térmicas y choques de par ($\\Delta T < 0.05 T_e$). El disparo de tiristores por fibra óptica ($V_{iso} \\ge 45\\text{kV}$) otorga inmunidad electromagnética total, con envolvente ártica IP54 calefactada para -50°C.',
    ru: 'При выходе двигателя на номинальную частоту вращения ($s \\le 0.03$) микропроцессорная система при переходе напряжения через ноль включает встроенный вакуумный контактор за 15 мс, исключая нагрев силовой части и броски момента ($\\Delta M < 0.05 M_{ном}$). Оптоволоконная развязка драйверов тиристоров (изоляция $\\ge 45$ кВ) обеспечивает 100% помехозащищенность. Утепленный шкаф IP54 с обогревом гарантирует надежность при -50°C (УХЛ1).',
  },
  sec3Title: {
    en: '3. Technical Benchmarking Matrix: Feichi FE-MCR/SSS vs. Benshaw MV Soft Starter vs. Solcon HRVS-DN vs. Russian VEI VUP-10',
    zh: '3. 国际顶级中高压电动机软起动系统核心技术参数深度对标表：飞驰 FE-MCR/SSS vs. 美国 Benshaw vs. 以色列 Solcon vs. 俄罗斯 ВЭИ ВУП-10',
    ja: '3. 国際トップ高圧モータソフトスタータ技術仕様比較：飛馳 FE-MCR/SSS vs. 米国 Benshaw vs. イスラエル Solcon vs. ロシア VEI VUP-10',
    es: '3. Matriz de Benchmarking Técnico: Feichi FE-MCR/SSS vs. Benshaw MV (EE.UU.) vs. Solcon HRVS-DN vs. VEI ВУП-10 (Rusia)',
    ru: '3. Сравнительная матрица параметров: Feichi FE-MCR/SSS (ВУП/УППВ) vs. Benshaw MV vs. Solcon HRVS-DN vs. ФГУП ВЭИ ВУП-10',
  },
  tableHeaders: {
    en: ['Technical Specification & Parameter', 'Feichi FE-MCR / FE-SSS (УХЛ1)', 'Benshaw Medium Voltage Soft Starter (USA)', 'Solcon HRVS-DN Solid-State Starter', 'Russian ФГУП ВЭИ ВУП-10/35 УХЛ1'],
    zh: ['核心技术参数 / 性能维度', '飞驰电气 FE-MCR / FE-SSS (УХЛ1)', '美国 Benshaw 中压固态软起动系列', '以色列 Solcon HRVS-DN 固态软起', '俄罗斯 ВЭИ ВУП-10/35 系列'],
    ja: ['技術仕様・性能パラメータ', '飛馳電気 FE-MCR / FE-SSS (УХЛ1)', '米国 Benshaw 高圧ソフトスタータ', 'イスラエル Solcon HRVS-DN', 'ロシア ВЭИ ВУП-10/35'],
    es: ['Parámetro Técnico', 'Feichi FE-MCR / FE-SSS (УХЛ1)', 'Benshaw MV Soft Starter (EE.UU.)', 'Solcon HRVS-DN Starter (Israel)', 'ВЭИ ВУП-10/35 (Rusia)'],
    ru: ['Технический параметр', 'Feichi FE-MCR / FE-SSS (ВУП УХЛ1)', 'Benshaw MV Soft Starter (США)', 'Solcon HRVS-DN (Израиль)', 'ФГУП ВЭИ ВУП-10/35 УХЛ1'],
  },
  tableRows: {
    en: [
      ['System Rated Voltage (Ur)', '6.0 kV, 10.0 kV, 10.5 kV, 35 kV', '2.3 kV, 4.16 kV, 6.9 kV, 13.8 kV', '2.3 kV, 4.16 kV, 6.6 kV, 11 kV, 15 kV', '6.0 kV, 10.0 kV, 35 kV (ГОСТ 1516.3)'],
      ['Motor Power Capacity Range', '500 kW to 25,000 kW (Mega-Watt Heavy)', '400 kW to 15,000 kW', '300 kW to 20,000 kW', '400 kW до 20,000 кВт (ВУП/УМП)'],
      ['Starting Current Limit Control', '1.8 to 2.5 Ie (Smooth Adjustable Clamping)', '2.0 to 3.5 Ie', '2.0 to 3.5 Ie', '2.0 до 2.5 Iном (ГОСТ 12434-83)'],
      ['Starting Acceleration Torque', 'T_start ≥ 1.2 Te (Continuous Constant Torque)', 'T_start ≥ 0.8 Te', 'T_start ≥ 0.9 Te', 'M_пуск ≥ 1.2 Mном (для шаровых мельниц)'],
      ['Harmonic Generation During Start', 'THDi = 0.0% (MCR Pure Flux Modulation)', 'THDi ≈ 8–12% (SCR Phase Fired)', 'THDi ≈ 8–12% (SCR Phase Fired)', 'THDi = 0.0% (для магнитных ВУП)'],
      ['Bypass Transition System', 'Integrated Zero-Crossing Vacuum Contactor', 'Integrated Vacuum Contactor', 'Integrated Vacuum Contactor', 'Вакуумный контактор ВБ-10 встроенный'],
      ['Gate Triggering Insulation', '45kV High-Dielectric Polymer Optical Fiber', 'Fiber-Optic Gate Drive', 'Fiber-Optic Gate Control', 'Оптоволоконная развязка сигналов управления'],
      ['Acceleration Ramp Duration', '5s to 120s Programmable (Multi-Ramp Profiles)', '5s to 90s', '5s to 120s', '5с до 120с регулируемое'],
      ['Ambient Climate Rating', '-50°C to +55°C (GOST 15150-69 УХЛ1 Siberian)', '-40°C to +50°C', '-40°C to +50°C', '-50°C to +45°C (УХЛ1 ХЛ1)'],
      ['Motor Multi-Start Capability', 'Up to 6–8 Consecutive Starts per Hour', '3–4 Starts per Hour', '3–4 Starts per Hour', 'До 6-8 пусков в час (магнитный ВУП)'],
      ['Digital Protocol & SCADA', 'IEC 61850 Ed.2 + Modbus TCP + 4G Cloud IoT', 'Modbus RTU / Ethernet/IP', 'Modbus / Profibus', 'МЭК 61850 / МЭК 60870-5-104'],
      ['Design Equipment Life', '≥ 30 Years (MCR Inductive Core Architecture)', '≥ 20 Years (Semiconductor Stacks)', '≥ 20 Years', '≥ 25-30 лет по стандартам ВЭИ'],
    ],
    zh: [
      ['电网额定电压等级 (Ur)', '6.0 kV, 10.0 kV, 10.5 kV, 35 kV 直挂', '2.3 kV, 4.16 kV, 6.9 kV, 13.8 kV', '2.3 kV, 4.16 kV, 6.6 kV, 11 kV, 15 kV', '6.0 kV, 10.0 kV, 35 kV (ГОСТ 1516.3)'],
      ['适配电机额定功率范围', '500 kW 至 25,000 kW (兆瓦级超重载)', '400 kW 至 15,000 kW', '300 kW 至 20,000 kW', '400 kW 至 20,000 kW (ВУП/УМП 系列)'],
      ['起动电流平滑限流倍数', '1.8 至 2.5 Ie (连续无级平滑可调锁定)', '2.0 至 3.5 Ie', '2.0 至 3.5 Ie', '2.0 至 2.5 Iном (符合俄标 ГОСТ)'],
      ['起动输出机械转矩能力', 'T_start ≥ 1.2 Te (恒力矩输出杜绝堵转)', 'T_start ≥ 0.8 Te', 'T_start ≥ 0.9 Te', 'M_пуск ≥ 1.2 Mном (满足大型球磨机)'],
      ['起动过程谐波电流生成', 'THDi = 0.0% (MCR 纯磁通无谐波污染)', 'THDi ≈ 8–12% (晶闸管移相切波)', 'THDi ≈ 8–12% (晶闸管移相切波)', 'THDi = 0.0% (磁控 ВУП 系列无谐波)'],
      ['旁路运行无扰动切换', '标配高压真空接触器（电压过零同步并网）', '标配真空接触器旁路', '标配真空接触器旁路', '内置 ВБ-10 真空接触器自动旁路'],
      ['控制触发绝缘隔离强度', '45kV 高绝缘特种玻璃光纤隔离触发', '光纤触发控制', '光纤触发控制', 'Оптоволоконная изоляция сигналов'],
      ['起动时间斜坡可调范围', '5秒 至 120秒 自由设定 (支持多种曲线)', '5秒 至 90秒', '5秒 至 120秒', '5秒 至 120秒 (连续可调)'],
      ['环境气候耐受工作范围', '-50°C 至 +55°C (俄标 УХЛ1 极寒高纬度认证)', '-40°C 至 +50°C', '-40°C 至 +50°C', '-50°C 至 +45°C (УХЛ1 极寒型)'],
      ['小时内允许连续起动次数', '高达 6–8 次/小时 (热容量大连续起动)', '3–4 次/小时', '3–4 次/小时', '高达 6-8 次/小时 (磁控高热容)'],
      ['数字化通信与监控协议', 'IEC 61850 Ed.2 + Modbus TCP + 工业云网关', 'Modbus RTU / Ethernet/IP', 'Modbus / Profibus', 'МЭК 61850 / МЭК 60870-5-104'],
      ['全生命周期设计使用寿命', '≥ 30 年 (MCR 电磁纯铁芯本体架构)', '≥ 20 年 (半导体阀组架构)', '≥ 20 年', '≥ 25-30 年 (符合全俄电工院标准)'],
    ],
    ja: [
      ['定格電圧 (Ur)', '6.0kV, 10.0kV, 10.5kV, 35kV 直結', '2.3kV 〜 13.8kV', '2.3kV 〜 15kV', '6.0kV, 10.0kV, 35kV'],
      ['モータ容量範囲', '500 kW 〜 25,000 kW (メガワット重負荷)', '400 kW 〜 15,000 kW', '300 kW 〜 20,000 kW', '400 kW 〜 20,000 kW'],
      ['始動電流制限倍数', '1.8 〜 2.5 Ie (滑らかに調整固定)', '2.0 〜 3.5 Ie', '2.0 〜 3.5 Ie', '2.0 〜 2.5 Inom'],
      ['始動出力トルク', 'T_start ≥ 1.2 Te (一定トルク)', 'T_start ≥ 0.8 Te', 'T_start ≥ 0.9 Te', 'M_start ≥ 1.2 Mnom'],
      ['始動時高調波歪み', 'THDi = 0.0% (MCR 磁束変調時ゼロ)', 'THDi ≈ 8–12%', 'THDi ≈ 8–12%', 'THDi = 0.0% (MCR)'],
      ['バイパス切替方式', '内蔵真空コンタクタ過零点同期投入', '内蔵真空コンタクタ', '内蔵真空コンタクタ', '内蔵真空コンタクタ'],
      ['耐寒温度定格', '-50°C 〜 +55°C (ロシア УХЛ1 適合)', '-40°C 〜 +50°C', '-40°C 〜 +50°C', '-50°C 〜 +45°C (УХЛ1)'],
      ['連続始動回数', '最大 6–8 回/時間 (高熱容量)', '3–4 回/時間', '3–4 回/時間', '最大 6–8 回/時間'],
      ['設計寿命', '≥ 30 年 (磁気制御リアクトル本体)', '≥ 20 年', '≥ 20 年', '≥ 25-30 年'],
    ],
    es: [
      ['Tensión Nominal (Ur)', '6.0 kV, 10.0 kV, 10.5 kV, 35 kV Directo', '2.3 kV a 13.8 kV', '2.3 kV a 15 kV', '6.0 kV, 10.0 kV, 35 kV'],
      ['Potencia de Motor', '500 kW a 25.000 kW (Megavatios)', '400 kW a 15.000 kW', '300 kW a 20.000 kW', '400 kW a 20.000 kW'],
      ['Límite de Corriente', '1.8 a 2.5 Ie (Rampa Suave Controlada)', '2.0 a 3.5 Ie', '2.0 a 3.5 Ie', '2.0 a 2.5 Inom'],
      ['Par de Arranque', 'T_start ≥ 1.2 Te (Par Constante)', 'T_start ≥ 0.8 Te', 'T_start ≥ 0.9 Te', 'M_arranque ≥ 1.2 Mnom'],
      ['Distorsión Armónica THD', 'THDi = 0.0% (MCR Libre de Armónicos)', 'THDi ≈ 8–12%', 'THDi ≈ 8–12%', 'THDi = 0.0% (MCR)'],
      ['Sistema de Bypass', 'Contactor de Vacío en Paso por Cero', 'Contactor de Vacío', 'Contactor de Vacío', 'Contactor de Vacío Integrado'],
      ['Rango de Temperatura', '-50°C a +55°C (Clima Ártico УХЛ1)', '-40°C a +50°C', '-40°C a +50°C', '-50°C a +45°C (УХЛ1)'],
      ['Arranques por Hora', 'Hasta 6–8 Arranques/Hora', '3–4 Arranques/Hora', '3–4 Arranques/Hora', 'Hasta 6–8 Arranques/Hora'],
      ['Vida Útil de Diseño', '≥ 30 Años (Núcleo Inductivo MCR)', '≥ 20 Años', '≥ 20 Años', '≥ 25-30 Años'],
    ],
    ru: [
      ['Номинальное напряжение сети', '6.0 кВ, 10.0 кВ, 10.5 кВ, 35 кВ прямое подключение', '2.3 кВ, 4.16 кВ, 6.9 кВ, 13.8 кВ', '2.3 кВ, 4.16 кВ, 6.6 кВ, 11 кВ, 15 кВ', '6.0 кВ, 10.0 кВ, 35 кВ (ГОСТ 1516.3)'],
      ['Диапазон мощности двигателей', 'от 500 до 25000 кВт (сверхтяжелый пуск)', 'от 400 до 15000 кВт', 'от 300 до 20000 кВт', 'от 400 до 20000 кВт (ВУП/УМП)'],
      ['Ограничение пускового тока', '1.8 до 2.5 Iном (плавное регулирование)', '2.0 до 3.5 Iном', '2.0 до 3.5 Iном', '2.0 до 2.5 Iном (ГОСТ 12434-83)'],
      ['Пусковой крутящий момент', 'M_пуск ≥ 1.2 Mном (постоянный момент)', 'M_пуск ≥ 0.8 Mном', 'M_пуск ≥ 0.9 Mном', 'M_пуск ≥ 1.2 Mном (для шаровых мельниц)'],
      ['Гармоники при пуске', 'THDi = 0.0% (МКР синусоидальный ток)', 'THDi ≈ 8–12% (тиристорный срез)', 'THDi ≈ 8–12%', 'THDi = 0.0% (для магнитных ВУП)'],
      ['Схема байпасного перевода', 'Синхронный вакуумный контактор при переходе через 0', 'Встроенный вакуумный контактор', 'Встроенный вакуумный контактор', 'Встроенный вакуумный контактор ВБ-10'],
      ['Изоляция цепей управления', 'Оптоволокно с испытательным напряжением 45 кВ', 'Оптоволоконные драйверы', 'Оптоволоконное управление', 'Оптоволоконная развязка сигналов управления'],
      ['Время разгона (пусковая рампа)', 'от 5 до 120 с программируемое', 'от 5 до 90 с', 'от 5 до 120 с', 'от 5 до 120 с регулируемое'],
      ['Климатическое исполнение', '-50°C...+55°C (ГОСТ 15150-69 УХЛ1 для Сибири)', '-40°C...+50°C', '-40°C...+50°C', '-50°C...+45°C (УХЛ1 ХЛ1)'],
      ['Частота пусков в час', 'До 6-8 последовательных пусков в час', '3-4 пуска в час', '3-4 пуска в час', 'До 6-8 пусков в час (магнитный ВУП)'],
      ['Цифровые протоколы связи', 'МЭК 61850 Ed.2 + Modbus TCP + IoT-шлюз', 'Modbus RTU / Ethernet/IP', 'Modbus / Profibus', 'МЭК 61850 / МЭК 60870-5-104'],
      ['Расчетный срок службы', '≥ 30 лет (электромагнитная часть МКР)', '≥ 20 лет', '≥ 20 лет', '≥ 25-30 лет по стандартам ВЭИ'],
    ],
  },
  sec4Title: {
    en: '4. Scenario-Based Application Decision Guide: Mining Ball Mills, Gas Turbo-Compressors & High-Head Slurry Pumps',
    zh: '4. 重点应用场景工程选型与系统集成决策指南',
    ja: '4. 適用産業別選定マトリクス：鉱山ボールミル・ガス圧縮機・高揚程スラリポンプ',
    es: '4. Guía de Decisión por Sector: Molinos de Bolas en Minería, Turbocompresores de Gas y Bombas de Relaves',
    ru: '4. Руководство по выбору оборудования: мельницы рудоподготовки (МШР/ММС), турбокомпрессоры газопроводов и насосные станции',
  },
  scenarios: {
    en: [
      {
        title: 'Mining Heavy Ore Grinding Ball Mills & SAG Mills (High Breakaway Torque T > 1.2 Te)',
        recommend: 'Recommendation: Feichi FE-MCR 10kV Magnetically Controlled Reactor Starter (ВУП-10)',
        reason: 'Zero-harmonic pure magnetic flux ramp delivers high continuous breakaway torque (1.2 Te) without tripping weak mining grids or overheating motor end windings.',
      },
      {
        title: 'Natural Gas Pipeline High-Power Turbo-Compressors & Boiler Feed Pumps (P > 5000 kW)',
        recommend: 'Recommendation: Solid-State Fiber-Optic Soft Starter FE-SSS (УППВ-10) with Vacuum Bypass',
        reason: 'Programmable linear ramp eliminates fluid water-hammer shocks across long-distance pipelines and reduces peak starting demand charges.',
      },
      {
        title: 'Siberian Arctic Mining Multi-Megawatt Pumping Stations (-50°C УХЛ1 Weak Grid Substation)',
        recommend: 'Recommendation: Arctic Heavy Containerized MCR Soft Starter with Automated Pre-Heating',
        reason: 'Operates continuously at -50°C with 6–8 starts per hour capability, certified under Russian GOST 12434-83 and PJSC Rosseti standards.',
      },
    ],
    zh: [
      {
        title: '大型有色金属与铁矿矿石自磨机、球磨机（重载满载静摩擦力矩大 $T > 1.2 T_e$）',
        recommend: '选型推荐：飞驰 FE-MCR 10kV/35kV 磁控电抗器软起动系统（俄标 ВУП-10/35）',
        reason: '纯磁通调节无高次谐波，输出恒定高起动转矩（$1.2 T_e$），起动电流严格压低至 $2.0 I_e$ 以内，彻底消除弱受端矿山电网电压塌陷风险。',
      },
      {
        title: '长输天然气管线离心式压缩机、大型电厂给水泵与除尘主风机（$P > 5000\text{ kW}$）',
        recommend: '选型推荐：高压晶闸管固态软起动系统 FE-SSS（俄标 УППВ-10）+ 同步真空旁路',
        reason: '数字化平滑电压与转矩斜坡彻底消除水泵停机与起动时的管道水锤破坏破坏力，显著降低变压器需量容量电费。',
      },
      {
        title: '俄罗斯西伯利亚与远东高寒矿区大型主排水泵站（-50°C 严寒与弱电网 УХЛ1）',
        recommend: '选型推荐：极寒保温集装箱式磁控软起动装置 + 智能防冻预热循环温控',
        reason: '在 -50°C 极寒工况下具备 6~8 次/小时高频起动热容量，本体免维护寿命超 30 年，完全符合俄罗斯 ПАО «Россети» 标准规范。',
      },
    ],
    ja: [
      {
        title: '鉱山重負荷ボールミル・SAGミル (高静止摩擦トルク T > 1.2 Te)',
        recommend: '推奨：飛馳 FE-MCR 10kV 磁気制御リアクトルソフトスタータ (ВУП-10)',
        reason: '高調波ゼロで1.2倍以上の高トルクを連続出力し、弱小系統での始動電圧降下を完全防止。',
      },
      {
        title: '天然ガスパイプライン大容量圧縮機・ボイラー給水ポンプ (P > 5000 kW)',
        recommend: '推奨：光ファイバー制御高圧サイリスタソフトスタータ FE-SSS (УППВ-10)',
        reason: '滑らかなトルクランプにより配管水撃（ウォーターハンマー）ショックを完全追放。',
      },
      {
        title: 'ロシア・シベリア極寒鉱山排水ポンプ場 (-50℃ УХЛ1 酷寒環境)',
        recommend: '推奨：極寒コンテナ型MCRソフトスタータ＋自動除湿加温システム',
        reason: '氷点下50℃でも1時間あたり6〜8回の連続始動が可能。寿命30年以上の高信頼性。',
      },
    ],
    es: [
      {
        title: 'Molinos de Bolas y SAG en Minería Pesada (Alto Par de Despegue T > 1.2 Te)',
        recommend: 'Recomendación: Arrancador Magnético Feichi FE-MCR 10kV (ВУП-10)',
        reason: 'Entrega par continuo de 1.2 Te sin armónicos, limitando la corriente a $\\le 2.0 I_e$ en redes débiles.',
      },
      {
        title: 'Turbocompresores de Gasoductos y Bombas de Alimentación (P > 5000 kW)',
        recommend: 'Recomendación: Arrancador de Estado Sólido FE-SSS (УППВ-10) con Bypass de Vacío',
        reason: 'Rampa de tensión programable que elimina el golpe de ariete hidráulico en acueductos y gasoductos.',
      },
      {
        title: 'Estaciones de Bombeo Mineras en Siberia (-50°C УХЛ1 en Redes Débiles)',
        recommend: 'Recomendación: Módulo Contenedorizado Ártico MCR con Calefacción Automática',
        reason: 'Permite 6–8 arranques consecutivos por hora a -50°C bajo normas rusas GOST y Rosseti.',
      },
    ],
    ru: [
      {
        title: 'Шаровые и стержневые мельницы рудоподготовки обогатительных фабрик (тяжелый пуск $M_{пуск} > 1.2 M_{ном}$)',
        recommend: 'Рекомендация: Магнитно-тиристорное пусковое устройство Feichi FE-MCR 10 кВ (ВУП-10)',
        reason: 'Обеспечивает высокий начальный пусковой момент ($1.2 M_{ном}$) при токе не более $2.0 I_{ном}$ без искажения синусоиды напряжения в слабой карьерной сети.',
      },
      {
        title: 'Магистральные нагнетатели газа, компрессоры и питательные насосы ТЭЦ ($P > 5000$ кВт)',
        recommend: 'Рекомендация: Высоковольтное тиристорное устройство УППВ-10 с вакуумным байпасом',
        reason: 'Плавная регулируемая рампа разгона полностью устраняет гидравлический удар в магистральных трубопроводах и защищает муфты привода.',
      },
      {
        title: 'Главные водоотливные установки шахт и разрезов Сибири и Севера (-50°C, исполнение УХЛ1)',
        recommend: 'Рекомендация: Блок-контейнерное устройство ВУП-10 с системой климат-контроля и подогрева',
        reason: 'Высокая перегрузочная способность (до 6-8 пусков в час) и безаварийная эксплуатация при -50°C в соответствии с ГОСТ 12434-83.',
      },
    ],
  },
  hasCalculator: 'softstarter' as any,
  ctaTitle: {
    en: 'Need Motor Starting Voltage Dip Calculations (ETAP) or Russian GOST Опросный лист for 10kV/35kV VUP / UPPV?',
    zh: '需要获取 10kV/35kV 电机起动电网压降计算书（ETAP/MATLAB 仿真）或俄标 Опросный лист 选型方案？',
    ja: '10kV/35kV モータ始動電圧降下シミュレーション計算書やロシアGOST問診票が必要ですか？',
    es: '¿Requiere Cálculos de Caída de Tensión por Arranque de Motor (ETAP) o Cuestionario GOST para ВУП/УППВ?',
    ru: 'Требуется расчет пусковых режимов двигателей и просадок напряжения в сети или Опросный лист на УППВ / ВУП-10/35?',
  },
  ctaDesc: {
    en: 'Connect directly with technical lead Henry to receive complete motor dynamic speed-torque curves, voltage sag calculations, single-line diagrams, and Russian PJSC Rosseti certified commercial proposals within 24 hours.',
    zh: '直接与技术负责人 Henry 沟通，获取完整的电机动态转速-转矩特性曲线、电网母线压降微积分仿真报告、一次单线图（SLD）及符合俄罗斯国家电网认证的正式报价单（24 小时内响应）。',
    ja: '技術責任者 Henry に直接ご連絡ください。モータ速度-トルク過渡特性曲線、系統電圧降下計算書、単線結線図（SLD）およびロシアRosseti認定見積書を24時間以内に提供します。',
    es: 'Contacte directamente con el líder técnico Henry para obtener curvas par-velocidad de motor, cálculo de caídas de tensión, diagramas unifilares y propuestas comerciales certificadas en 24 horas.',
    ru: 'Свяжитесь напрямую с техническим руководителем Henry для получения динамических механических характеристик двигателя, расчета просадки напряжения шин, однолинейных схем и коммерческого предложения по стандартам ПАО Россети в течение 24 часов.',
  },
};
