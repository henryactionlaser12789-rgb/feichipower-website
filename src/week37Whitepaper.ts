import type { WhitepaperItem } from './whitepapersData';

export const week37Whitepaper: WhitepaperItem = {
  id: 'week-37',
  week: 37,
  slug: '10kv-35kv-series-parallel-reactors-fault-current-limiter-guide',
  category: 'switchgear',
  categoryLabel: {
    en: '10kV–35kV Current-Limiting Series & Shunt Reactors (РТОС / РБКС / IEC 60076-6 / ГОСТ 14794-79)',
    zh: '10kV–35kV 高压限流空心电抗器与并联滤波电抗器选型指南（短路限流电动力 / 动热稳定刚度 / 俄标 РТОС/РТСТ/РБКС）',
    ja: '10kV〜35kV 限流空心リアクトル・分路リアクトル（РТОС/РБКС/IEC 60076-6）設計指針',
    es: 'Reactores Limitadores de Corriente en Serie y Paralelo 10kV–35kV (РТОС / РБКС / IEC 60076-6 / ГОСТ 14794)',
    ru: 'Токоограничивающие сухие бетонные и полимерные реакторы 10-35 кВ РТОС, РТСТ, РБКС (ГОСТ 14794-79 / СТО Россети 56947007-29.240.10.158-2013)',
  },
  title: {
    en: '10kV–35kV Medium-Voltage Air-Core Dry-Type Series & Shunt Current-Limiting Reactors (Russian GOST RTOS, RTST, RBKS; Chinese FE-CLR-10/35 series) Technical Whitepaper: 50kA Short-Circuit Fault Current Clamping ($I_{sc} \\le 25\\text{kA}$), Stray Magnetic Field Clearances & Eddy-Current Structural Heating Models, High-Modulus Glass-Fiber Epoxy Encapsulation Metallurgy, and Siberian -50°C Heavy Seismic Cantilever Electrodynamic Resonance Withstand (Benchmarking Trench Group, Coilcraft, Russian SVEL RTOS & Pinggao)',
    zh: '10kV–35kV 中高压干式空心限流串联电抗器与无功并联电抗器（俄标 РТОС, РТСТ, РБКС 系列；国标飞驰 FE-CLR-10/35 系列）工程选型指南：50kA 级极端短路冲击电流深度限流抑制模型（短路电流阻抗压制至 $I_{sc} \\le 25\\text{kA}$ 以内以降低断路器开断负荷）、周围钢结构与接地网漏磁涡流发热微积分传热方程、环氧树脂浸渍无碱玻璃纤维高模量连续绕组力学刚度、以及西伯利亚 -50°C 极寒 9 度抗震悬臂电动力共振耐受（深度对标德国 Trench Group、美国 Coilcraft、俄罗斯叶卡捷琳堡 СВЭЛ РТОС/РТСТ 与平高电气）',
    ja: '10kV〜35kV 高圧乾式空心限流直列リアクトルおよび分路リアクトル（ロシアGOST РТОС/РТСТ/РБКС）完全設計技術白書：50kA短絡故障電流抑制力学（I_sc ≤ 25kA制限）、周囲鋼構造漏れ磁束渦電流発熱モデル、エポキシガラス繊維高強度バインド構造、およびシベリア-50℃極寒9級耐震カンチレバー電磁力共振耐力（Trench、Coilcraft、ロシアSVELベンチマーク）',
    es: 'Reactores Limitadores de Corriente en Serie y Paralelo Tipo Seco 10kV–35kV (РТОС / РТСТ / РБКС / FE-CLR-10/35): Limitación de Fallas de 50kA ($I_{sc} \\le 25\\text{kA}$), Modelado de Campo Magnético Disperso y Calentamiento por Corrientes de Foucault, Encapsulado en Fibra de Vidrio Epoxi y Resistencia Sísmica a -50°C',
    ru: 'Техническое руководство по сухим токоограничивающим и фильтровым реакторам 10-35 кВ серий РТОС, РТСТ, РБКС с воздушным сердечником: ограничение ударных токов КЗ до 50 кА ($I_{кз} \\le 25$ кА для снижения нагрузки на выключатели), расчет зон рассеяния магнитного поля и вихревого нагрева стальных конструкций, обмотки из алюминиевого/медного провода с полимерной изоляцией и стойкость к сейсмическим и электродинамическим нагрузкам при температуре до -50°C (Бенчмарк Trench Group, Coilcraft, АО Группа СВЭЛ РТОС и Pinggao)',
  },
  eyebrow: {
    en: 'CURRENT-LIMITING REACTORS & SHORT-CIRCUIT PROTECTION (IEC 60076-6 / IEEE C57.16 / ГОСТ 14794-79 / СТО РОССЕТИ)',
    zh: 'FE-SPEC-37 · 10kV–35kV 限流电抗器与短路电动力刚度专论（IEC 60076-6 / GB/T 1094.6 / ГОСТ 14794-79 / ТР ТС 004/2011）',
    ja: 'FE-SPEC-37 · 10kV〜35kV 限流リアクトル・短絡電磁力剛性仕様書（IEC 60076-6 / IEEE C57.16 / ГОСТ 14794）',
    es: 'FE-SPEC-37 · DOSSIER DE REACTORES LIMITADORES DE CORRIENTE 10kV–35kV (IEC 60076-6 / IEEE / GOST)',
    ru: 'FE-SPEC-37 · РУКОВОДСТВО ПО ТОКООГРАНИЧИВАЮЩИМ РЕАКТОРАМ РТОС, РТСТ 10-35 кВ (ГОСТ 14794-79 / СТО РОССЕТИ 56947007-29.240.10.158-2013)',
  },
  author: {
    en: 'Feichi High-Voltage Air-Core Reactor & Short-Circuit Mitigation Engineering Institute (Lead: Henry)',
    zh: '飞驰电气高压干式空心电抗器与短路抑制工程研究院（总工/外贸对接人：Henry）',
    ja: '飛馳電気 高圧乾式空心リアクトル・短絡抑制工学研究所（チーフ：Henry）',
    es: 'Instituto de Ingeniería de Reactores de Media Tensión y Limitación de Cortocircuitos Feichi (Líder: Henry)',
    ru: 'Инженерно-исследовательский институт сухих реакторов и токоограничивающих устройств Feichi Power (Гл. инженер: Henry)',
  },
  standards: 'IEC 60076-6 / IEEE C57.16 / GB/T 1094.6-2011 / DL/T 1087 / ГОСТ 14794-79 / ГОСТ 15150-69 (УХЛ1) / ТР ТС 004/2011 / СТО РОССЕТИ 56947007-29.240.10.158-2013',
  readTime: {
    en: '24 min technical study (Includes Short-Circuit Reactance Voltage Drop Calculations, Stray Magnetic Field Biot-Savart Integrals, Cantilever Electrodynamic Resonance Curves & Russian РТОС-35 Questionnaire)',
    zh: '24 分钟深度技术研读（含短路电抗电网压降微积分方程、毕奥-萨伐尔定律漏磁场空间分布积分模型、悬臂绝缘支柱电动力抗弯刚度力学计算与俄标 РТОС-35 选型表单）',
    ja: '24分 専門設計解説（短絡リアクタンス電圧降下計算・ビオ・サバール漏れ磁界積分モデル・支持がいしカンチレバー曲げ剛性力学・ロシアRTOS-35選定問診票）',
    es: '24 min de lectura técnica (Incluye ecuaciones de caída de tensión por reactancia, integrales Biot-Savart de campo magnético disperso, cálculo de flexión en aisladores soporte y cuestionario РТОС-35)',
    ru: '24 мин технического изучения (включая расчет падения напряжения на реакторе при пуске, интегралы Био-Савара для оценки полей рассеяния и безопасных расстояний до металлоконструкций, прочность опорных изоляторов на изгиб при КЗ и полный Опросный лист на реактор РТОС-35)',
  },
  summary: {
    en: 'An authoritative technical whitepaper on 10kV, 20kV, and 35kV Medium-Voltage Air-Core Dry-Type Current-Limiting Series & Shunt Reactors (Russian GOST series RTOS, RTST, RBKS; Chinese FE-CLR-10/35 series) for urban high-fault distribution substations, thermal/hydro generator feeder outlets, heavy industrial metallurgical arc furnace lines, and harmonic filter capacitor banks (rated continuous current 630A to 4000A, inductive reactance $X_L = 0.1\\,\\Omega \\sim 2.5\\,\\Omega$, percentage reactance $x_k = 3\\% \\sim 12\\%$). Benchmarking international leaders Trench Group (Germany/Austria), Coilcraft (USA), and Russian pioneer JSC SVEL Group (Yekaterinburg), this dossier explores: 1) Physical mechanics of short-circuit current suppression—inserting calibrated series inductive reactance to clamp 50kA prospective utility grid short-circuit currents down below 25kA, protecting downstream medium-voltage switchgear and avoiding costly circuit breaker upgrades; 2) Spatial magnetic field distribution analysis using Biot-Savart integrals to determine mandatory safe clearance distances from surrounding steel building frames, transformer tanks, and rebar concrete ($B_{stray} < 5.0\\text{ mT}$) to prevent severe eddy-current inductive overheating ($T_{steel} < 65^\\circ\\text{C}$); 3) High-grade multi-strand insulated aluminum/copper transposed conductors encapsulated in vacuum-pressure impregnated (VPI) high-modulus glass-fiber epoxy resin with Class H/F insulation (180°C/155°C); 4) Siberian Arctic -50°C cantilever mechanical bending withstand under massive electrodynamic peak forces ($I_{peak} \\ge 100\\text{kA}$); and 5) Complete PJSC Rosseti dry-type reactor Опросный лист questionnaire templates.',
    zh: '系统阐述 10kV、20kV 与 35kV 中高压干式空心限流串联电抗器与无功并联电抗器（俄标 РТОС, РТСТ, РБКС 系列；国标飞驰 FE-CLR-10/35 系列）在城市大容量高短路容量枢纽变电站、大型火电/水电发电机出线端、重型冶金电弧炉母线分段及高压滤波电容器组中的核心限流保护机理与工程选型规范（额定连续通流能力 630A 至 4000A，电抗阻抗值 $X_L = 0.1\,\Omega \sim 2.5\,\Omega$，百分比电抗率 $x_k = 3\% \sim 12\%$）。深度对标德国/奥地利 Trench Group（全球空心电抗器技术发源地）、美国 Coilcraft 以及俄罗斯叶卡捷琳堡成套电气巨头 Группа «СВЭЛ»（РТОС 系列），重点解析：1）短路电流物理抑制机理——通过串联高线性度无铁芯电抗，将上级电网高达 50kA 的极端短路电流瞬时深度压制在 25kA 安全开断范围以内，大幅降低出线中置柜断路器开断负荷，节省全站开关设备重置改造成本；2）基于毕奥-萨伐尔（Biot-Savart）积分定律的空间漏磁场三维解析模型，精确计算周围钢结构建筑物、变压器油箱及地面钢筋网的磁场安全净距（严格控制交变漏磁密 $B_{stray} < 5.0\text{ mT}$），彻底消除闭合金属回路涡流电磁感应发热隐患（结构温升 $T_{steel} < 65^\circ\text{C}$）；3）真空压力浸漆（VPI）无碱玻璃纤维高模量连续环氧树脂封装与多股换位铝/铜导线绝缘系统（H/F 级 180°C/155°C 耐温）；4）西伯利亚 -50°C 极寒工况下支柱瓷瓶/复合绝缘子承受高达 $I_{peak} \ge 100\text{kA}$ 峰值冲击电动力时的悬臂抗弯力学刚度；以及 5）符合俄罗斯国家电网 ПАО «Россети» 与海关联盟 ТР ТС 004/2011 认证的《Опросный лист на реактор токоограничивающий сухой РТОС-10 / РТОС-35》工程选型技术规范。',
    ja: '10kV/20kV/35kV 乾式空心限流リアクトルおよび分路リアクトル（ロシアGOST РТОС/РТСТ/РБКС、飛馳FE-CLR-10/35）の完全設計解説書（定格電流630A〜4000A、リアクタンス率3%〜12%）。ドイツTrench、米国Coilcraft、ロシアSVELをベンチマークし、50kA過大短絡電流の25kA以下への制限技術、ビオ・サバール積分による周囲鉄骨・変圧器への漏れ磁束渦電流発熱（<65℃）回避空間離隔距離設計、H種（180℃）高強度エポキシガラス繊維連続巻線、シベリア-50℃極寒9級耐震カンチレバー曲げ剛性、およびロシアRosseti標準Опросный лист問診票を網羅。',
    es: 'Expediente técnico de Reactores Limitadores de Corriente en Serie Tipo Seco de Núcleo de Aire 10kV–35kV (РТОС / РТСТ / FE-CLR-10/35) para subestaciones y centrales (630A a 4000A, $x_k = 3\\% \\sim 12\\%$). Limita corrientes de cortocircuito de 50kA a $<25\\text{kA}$ protegiendo interruptores de media tensión. Modela campos magnéticos dispersos para evitar calentamiento por inducción en estructuras de acero ($B < 5\\text{ mT}$), encapsulado en fibra de vidrio epoxi Clase H (180°C), resistencia a flexión a -50°C y cuestionarios oficiales de licitación.',
    ru: 'Полное техническое руководство по сухим токоограничивающим и фильтровым реакторам с воздушным сердечником серий РТОС, РТСТ, РБКС на напряжение 10, 20 и 35 кВ с номинальными токами 630-4000 А и индуктивным сопротивлением $X_L = 0.1-2.5$ Ом (процентное сопротивление $x_k = 3-12\\%$) по ГОСТ 14794-79 и СТО Россети. Рассмотрены: расчет ограничения ударных токов КЗ с 50 кА до безопасных 25 кА для разгрузки распределительных устройств; моделирование пространственного распределения полей рассеяния по закону Био-Савара для исключения вихревого нагрева металлоконструкций и арматуры ($B < 5.0$ мТл); монолитная изоляция обмоток стеклопластиком с пропиткой эпоксидным компаундом (класс нагревостойкости H 180°C); механическая прочность опорных изоляторов на изгиб при токах КЗ до 100 кА в условиях Сибири при -50°C (УХЛ1) и полный Опросный лист ПАО Россети.',
  },
  sec1Title: {
    en: '1. Short-Circuit Current Clamping Dynamics: Insertion Reactance ($X_L$) & System Voltage Drop Trade-Offs',
    zh: '1. 短路电流抑制动力学：串联限流电抗阻抗（$X_L$）与工频电网电压降的微积分平衡模型',
    ja: '1. 短絡電流抑制力学：直列リアクタンス（X_L）と系統電圧降下の最適トレードオフ計算',
    es: '1. Dinámica de Limitación de Cortocircuitos: Reactancia de Inserción ($X_L$) y Caída de Tensión',
    ru: '1. Физика токоограничения: выбор индуктивного сопротивления реактора ($X_L$) и допустимого падения напряжения',
  },
  sec1Text: {
    en: `In heavy industrial and high-density distribution substations, grid interconnections cause prospective three-phase short-circuit fault currents to surge beyond $I_{sc} > 50\\text{kA}$, exceeding the breaking capability of standard medium-voltage circuit breakers ($I_{cu} = 25\\text{kA} \\sim 31.5\\text{kA}$).

**Short-Circuit Clamping & Reactance Formulation**:
1. **Prospective Fault Current Clamping**:
   - The insertion of an air-core series current-limiting reactor $X_L$ reduces the downstream fault current $I_{sc, clamped}$:
     $$I_{sc, clamped} = \\frac{U_{phase}}{\\sqrt{(R_{grid} + R_L)^2 + (X_{grid} + X_L)^2}} \\approx \\frac{U_{phase}}{X_{grid} + X_L}$$
   - Where the required reactance $X_L$ to clamp a prospective fault current $I_{sc, prospective}$ down to the target switchgear rating $I_{target}$ is:
     $$X_L = \\frac{U_{phase}}{I_{target}} - X_{grid} = \\frac{U_{sys}}{\\sqrt{3} \\cdot I_{target}} - \\frac{U_{sys}^2}{S_{sc, grid}}$$
2. **Normal Operation Voltage Drop Balancing**:
   - The percentage reactance voltage drop under continuous rated current $I_{nom}$ must be strictly constrained ($x_k \\le 4\\% \\sim 8\\%$ for feeder lines, $x_k \\le 8\\% \\sim 12\\%$ for bus-tie sectionalizing):
     $$\\Delta U_{\\%} = \\frac{\\sqrt{3} \\cdot I_{nom} \\cdot X_L}{U_{sys}} \\cdot 100\\%$$
   - **Advantage**: Air-core design has zero iron core saturation, guaranteeing $100\\%$ linear inductive impedance even under the most severe $50\\text{kA}$ short-circuit peak surges.`,
    zh: `在特大城市电网枢纽变电站、大型发电厂及密集工业园区中，随着电网容量持续扩张，出线侧预期三相短路冲击电流经常激增突破 $I_{sc} > 50\\text{kA}$，远超常规中压真空/SF6 开关柜断路器的额定短路开断容量（常规 $I_{cu} = 25\\text{kA} \\sim 31.5\\text{kA}$）。

**限流阻抗计算方程与工频压降平衡力学**：
1. **短路电流深度阻抗压制方程**：
   - 串入干式空心限流电抗器（阻抗 $X_L$）后，出线短路点故障电流被深度压缩：
     $$I_{sc, clamped} = \\frac{U_{phase}}{\\sqrt{(R_{grid} + R_L)^2 + (X_{grid} + X_L)^2}} \\approx \\frac{U_{phase}}{X_{grid} + X_L}$$
   - 将预期短路电流 $I_{sc, prospective}$ 严格压制到断路器额定安全开断能力 $I_{target}$ 所需的精确电抗阻抗值 $X_L$ 为：
     $$X_L = \\frac{U_{phase}}{I_{target}} - X_{grid} = \\frac{U_{sys}}{\\sqrt{3} \\cdot I_{target}} - \\frac{U_{sys}^2}{S_{sc, grid}}$$
2. **正常负荷通流下的工频电压降平衡**：
   - 在正常额定负荷电流 $I_{nom}$ 通流下，电抗器两端产生的额定百分比电抗电压降必须严格限制在国家规程允许范围以内（出线回路一般取 $x_k \\le 4\\% \\sim 8\\%$，母联分段回路取 $x_k \\le 8\\% \\sim 12\\%$）：
     $$\\Delta U_{\\%} = \\frac{\\sqrt{3} \\cdot I_{nom} \\cdot X_L}{U_{sys}} \\cdot 100\\%$$
   - **核心物理优势**：空心结构内部绝无铁芯，磁导率恒为 $\\mu_0$，在承受 $50\\text{kA}$ 极端短路峰值电流冲击时电抗值绝不发生磁饱和衰减，具备 $100\\%$ 理想线性度。`,
    ja: '短絡容量が50kAを超える変電所において、空心直列限流リアクトル（X_L）を挿入することで下流短絡電流を25kA以下に確実に制限。鉄芯を持たない空心構造により大電流下でも磁気飽和ゼロ、インピーダンス直線性100%を維持。正常運転時の電圧降下率（feederで4〜8%、bus-tieで8〜12%）を最適設計します。',
    es: 'En subestaciones con corrientes de cortocircuito $>50\\text{kA}$, el reactor limitador en serie $X_L$ reduce la falla a $<25\\text{kA}$, evitando reemplazar los interruptores de media tensión. Al ser de núcleo de aire ($\\\\mu_r = 1$), la impedancia permanece 100% lineal sin saturación magnética, con una caída de tensión nominal controlada ($x_k = 4\\% \\sim 8\\%$).',
    ru: 'При токах КЗ в энергосистеме свыше 50 кА установка сухого токоограничивающего реактора $X_L$ снижает ток КЗ до допустимого уровня отключающей способности выключателей ($\le 25$ кА). Воздушный сердечник гарантирует идеальную линейность индуктивности без насыщения при любых токах КЗ. Падение напряжения при номинальном токе поддерживается на уровне $x_k = 4-8\\%$ для фидеров и $8-12\\%$ для секционных реакторов.',
  },
  sec2Title: {
    en: '2. Stray Magnetic Fields (Biot-Savart Model), Induced Structural Eddy Heating & Cantilever Electrodynamic Resonance at -50°C',
    zh: '2. 空间漏磁场分布（毕奥-萨伐尔积分模型）、周围钢结构感应涡流发热与西伯利亚 -50°C 悬臂抗弯力学刚度',
    ja: '2. 漏れ磁界空間分布（ビオ・サバール積分モデル）・周辺鉄骨渦電流発熱抑制およびシベリア-50℃耐振剛性',
    es: '2. Campos Magnéticos Dispersos (Modelo Biot-Savart), Calentamiento por Inducción y Resistencia Sísmica a -50°C',
    ru: '2. Поля рассеяния (закон Био-Савара), вихревой нагрев металлоконструкций и прочность опорных изоляторов при -50°C (УХЛ1)',
  },
  sec2Text: {
    en: `Because air-core reactors lack ferromagnetic shielding cores, the entire operational magnetic flux passes through surrounding switchyard air space, inducing eddy-current heating in nearby closed steel loops.

**Magnetic Clearances & Electrodynamic Mechanics Formulation**:
1. **Biot-Savart Stray Magnetic Field Clearances**:
   - The spatial magnetic flux density $B(r, z)$ surrounding a cylindrical air-core coil of radius $R_c$ and height $H_c$ is determined via numerical elliptic integrals:
     $$\\vec{B}(\\vec{r}) = \\frac{\\mu_0}{4\\pi} \\oint \\frac{I \\cdot \\mathrm{d}\\vec{l} \\times \\vec{r}'}{|\\vec{r}'|^3}$$
   - To prevent structural overheating ($T_{steel} < 65^\\circ\\text{C}$ per IEC 60076-6), magnetic clearance boundaries must be observed:
     - Closed metallic loops (steel frames, mesh fences): $D_{clearance} \\ge (1.0 \\sim 1.5) \\cdot D_{reactor}$;
     - Transformer tanks and breaker cabinets: $D_{clearance} \\ge (1.5 \\sim 2.0) \\cdot D_{reactor}$.
2. **Electrodynamic Mechanical Withstand at -50°C (ГОСТ 14794-79 / УХЛ1)**:
   - During three-phase short circuits, inter-phase repulsive electromagnetic forces peak at $F_{peak} \\propto I_{peak}^2 / d_{phase}$ ($F_{peak} > 45\\text{ kN}$).
   - High-modulus cycloaliphatic epoxy resin encapsulation and high-strength porcelain/silicone post insulators provide cantilever bending strength exceeding $M_{bending} \\ge 16\\text{ kN}\\cdot\\text{m}$, fully validated under Siberian Arctic -50°C and 9-degree Richter seismic accelerations.`,
    zh: `由于干式空心电抗器无铁芯导磁回路，全部主工作磁通经由电抗器线圈外部空气空间闭合，周围空间存在强交变漏磁场，极易在邻近闭合钢结构回路中感应出剧烈涡流并引发局部过热（甚至超过 $150^\circ\text{C}$ 烧损防腐漆与引燃电缆）。

**漏磁场空间积分模型与极寒高刚度力学架构**：
1. **毕奥-萨伐尔空间漏磁场安全净距解析模型**：
   - 半径 $R_c$、高 $H_c$ 的圆柱空心线圈在空间任意点 $(r, z)$ 激发的交变磁感应强度 $\vec{B}(\vec{r})$ 由数值椭圆积分确定：
     $$\vec{B}(\vec{r}) = \frac{\mu_0}{4\pi} \oint \frac{I \cdot \mathrm{d}\vec{l} \times \vec{r}'}{|\vec{r}'|^3}$$
   - 为确保周围闭合金属结构温升安全（按 IEC 60076-6 规范 $T_{steel} < 65^\circ\text{C}$），必须严格执行磁场安全隔离净距：
     - 闭合金属回路（钢结构立柱、金属网栏）：净距 $D_{clearance} \ge (1.0 \sim 1.5) \cdot D_{reactor}$；
     - 主变压器油箱、高压开关柜及控制屏：净距 $D_{clearance} \ge (1.5 \sim 2.0) \cdot D_{reactor}$。
2. **西伯利亚 -50°C 极寒悬臂抗弯力学刚度（ГОСТ 14794-79 / УХЛ1）**：
   - 在发生三相短路瞬间，相间产生巨大的交变相间斥力与端部引线拉力（峰值电动力 $F_{peak} \propto I_{peak}^2 / d_{phase} > 45\text{ kN}$）；
   - 采用高强度无碱玻璃纤维浸渍环氧树脂真空压力一体化固化包封，配合重型高抗弯支柱绝缘子，整机悬臂抗弯弯矩力学极限高达 $M_{bending} \ge 16\text{ kN}\cdot\text{m}$，在西伯利亚 -50°C 严寒与 9 度烈度地震加速度下无共振形变与绝缘开裂。`,
    ja: '空心リアクトルは鉄芯がないため外部空間に漏れ磁束が広がります。ビオ・サバール積分解析に基づき、周辺鉄骨や変圧器タンクへの安全離隔距離（リアクトル外径の1.0〜2.0倍）を確保し、渦電流過熱（<65℃）を完全防止。短絡時の45kN以上の相間電磁反発力に対し、エポキシガラス繊維モノリス構造と高強度支持がいしが16kN・m以上の曲げ剛性を発揮し、シベリア-50℃極寒でもクラックゼロを担保します。',
    es: 'Al carecer de núcleo ferroso, el flujo magnético se cierra por el aire. El modelo Biot-Savart define distancias libres ($1.0 \\sim 2.0$ veces el diámetro del reactor) para evitar calentamientos inductivos en estructuras metálicas ($<65^\\circ\\text{C}$). El encapsulado de fibra de vidrio epoxi y aisladores soporte de alta resistencia soportan fuerzas electrodinámicas de $>45\\text{ kN}$ y flexión de $\\ge 16\\text{ kN}\\cdot\\text{m}$ a -50°C en Siberia.',
    ru: 'Поскольку сухие реакторы не имеют стального сердечника, рабочий магнитный поток замыкается через окружающее пространство. Расчет по закону Био-Савара определяет безопасные расстояния до замкнутых металлоконструкций и баков трансформаторов (1.0-2.0 диаметра реактора) для ограничения вихревого нагрева не более 65°C по ГОСТ 14794. Монолитная стеклопластиковая конструкция обмоток и опорные изоляторы выдерживают электродинамические усилия при КЗ более 45 кН и изгибающий момент $\ge 16$ кН·м при -50°C (УХЛ1).',
  },
  sec3Title: {
    en: '3. Technical Benchmarking Matrix: Feichi FE-CLR vs. Trench Group Dry-Type vs. Coilcraft Heavy Reactor vs. Russian SVEL RTOS',
    zh: '3. 国际顶级干式空心电抗器核心技术参数深度对标表：飞驰 FE-CLR vs. 德国 Trench Group vs. 美国 Coilcraft vs. 俄罗斯 СВЭЛ РТОС-35',
    ja: '3. 国際トップ乾式空心リアクトル技術仕様比較：飛馳 FE-CLR vs. ドイツ Trench vs. 米国 Coilcraft vs. ロシア SVEL RTOS-35',
    es: '3. Matriz de Benchmarking Técnico: Feichi FE-CLR vs. Trench Group vs. Coilcraft vs. SVEL РТОС-35 (Rusia)',
    ru: '3. Сравнительная матрица параметров: Feichi FE-CLR (РТОС) vs. Trench Group vs. Coilcraft vs. АО Группа СВЭЛ РТОС-35',
  },
  tableHeaders: {
    en: ['Technical Specification & Parameter', 'Feichi FE-CLR / RTOS (УХЛ1)', 'Trench Group Air-Core Reactor (Austria)', 'Coilcraft Heavy-Duty Power Reactor', 'Russian АО Группа СВЭЛ РТОС-35 УХЛ1'],
    zh: ['核心技术参数 / 性能维度', '飞驰电气 FE-CLR / RTOS (УХЛ1)', '德国/奥地利 Trench Group 旗舰空心电抗器', '美国 Coilcraft 重载工业电抗器', '俄罗斯 СВЭЛ РТОС-35 / РТСТ 系列'],
    ja: ['技術仕様・性能パラメータ', '飛馳電気 FE-CLR / RTOS (УХЛ1)', 'オーストリア Trench 空心リアクトル', '米国 Coilcraft 大容量リアクトル', 'ロシア SVEL RTOS-35 / RTST'],
    es: ['Parámetro Técnico', 'Feichi FE-CLR / RTOS (УХЛ1)', 'Trench Group Reactor de Aire', 'Coilcraft Heavy Reactor (EE.UU.)', 'Группа СВЭЛ РТОС-35 (Rusia)'],
    ru: ['Технический параметр', 'Feichi FE-CLR / РТОС УХЛ1', 'Trench Group Air-Core (Австрия)', 'Coilcraft Heavy Reactor (США)', 'АО Группа СВЭЛ РТОС-35 УХЛ1'],
  },
  tableRows: {
    en: [
      ['System Rated Voltage (Ur)', '6.0 kV, 10.0 kV, 20.0 kV, 35 kV (Up to 40.5kV)', '10 kV, 20 kV, 35 kV, 110 kV, 220 kV', '4.16 kV, 13.8 kV, 34.5 kV', '6.0 kV, 10.0 kV, 20.0 kV, 35 kV (ГОСТ 1516.3)'],
      ['Rated Continuous Current (Ir)', '630 A, 1000 A, 1600 A, 2500 A, 4000 A', '630 A to 5000 A Continuous', '500 A to 3000 A', '630 A, 1000 A, 1600 A, 2500 A, 4000 A'],
      ['Rated Inductive Reactance (XL)', '0.10 Ω to 2.50 Ω (Custom Linear)', '0.05 Ω to 5.00 Ω', '0.10 Ω to 3.00 Ω', '0.10 до 2.50 Ом (ГОСТ 14794-79)'],
      ['Percentage Reactance Drop (xk)', '3.0% to 12.0% (Feeder / Bus-Tie Custom)', '3.0% to 14.0%', '4.0% to 10.0%', '3.0% до 12.0% (по ТЗ заказчика)'],
      ['Short-Time Thermal Withstand (Icw)', '31.5 kA / 2s, 40 kA / 2s, 50 kA / 2s', '31.5 kA to 63 kA / 2s', '25 kA to 40 kA / 2s', '31.5 кА, 40 кА, 50 кА / 2с (ГОСТ)'],
      ['Peak Dynamic Withstand (Ipeak)', '80 kA, 100 kA, 125 kA Peak (0% Saturation)', '80 kA to 160 kA Peak', '65 kA to 100 kA Peak', '80 кА, 100 кА, 125 кА ударный пик'],
      ['Encapsulation & Insulation Class', 'VPI Glass-Fiber Epoxy (Class H 180°C / Class F)', 'Fiberglass Reinforced Epoxy Class H', 'Epoxy Impregnated Class F', 'Монолитный стеклопластик Класс H (180°C)'],
      ['Loss Quality Factor (Q = X/R)', 'Q ≥ 25 to 45 (Ultra-Low Active Power Losses)', 'Q ≥ 25 to 50', 'Q ≥ 20 to 35', 'Q ≥ 25 до 40 по ГОСТ 14794'],
      ['Installation Physical Layout', 'Three-Phase Vertical Stacked / Triangular Flat', 'Vertical Stack / Horizontal Side-by-Side', 'Horizontal Side-by-Side', 'Вертикальная стопка (этажерка) / В ряд'],
      ['Ambient Climate Rating', '-50°C to +55°C (GOST 15150-69 УХЛ1 Siberian)', '-40°C to +50°C', '-40°C to +50°C', '-50°C to +45°C (УХЛ1 ХЛ1)'],
      ['Post Insulator Cantilever Strength', '≥ 16 kN·m Bending (Seismic 9-Degree Rating)', '≥ 16 kN·m', '≥ 12 kN·m', '≥ 16 кН·м (СВЭЛ усиленные изоляторы)'],
      ['Design Maintenance-Free Life', '≥ 30 Years (Dry Encapsulated Corrosion-Proof)', '≥ 30 Years', '≥ 25 Years', '≥ 30 лет по стандартам СТО Россети'],
    ],
    zh: [
      ['电网额定最高电压等级 (Ur)', '6.0 kV, 10.0 kV, 20.0 kV, 35 kV (最高40.5kV)', '10 kV, 20 kV, 35 kV, 110 kV, 220 kV', '4.16 kV, 13.8 kV, 34.5 kV', '6.0 kV, 10.0 kV, 20.0 kV, 35 kV (ГОСТ 1516.3)'],
      ['额定连续通流能力 (Ir)', '630 A, 1000 A, 1600 A, 2500 A, 4000 A', '630 A 至 5000 A 连续载流', '500 A 至 3000 A', '630 A, 1000 A, 1600 A, 2500 A, 4000 A'],
      ['额定电抗感抗阻抗值 (XL)', '0.10 Ω 至 2.50 Ω (100% 线性无饱和)', '0.05 Ω 至 5.00 Ω', '0.10 Ω 至 3.00 Ω', '0.10 至 2.50 欧姆 (符合俄标 ГОСТ)'],
      ['额定百分比电抗压降率 (xk)', '3.0% 至 12.0% (出线/母联分段精准定制)', '3.0% 至 14.0%', '4.0% 至 10.0%', '3.0% 至 12.0% (按用户技术任务书)'],
      ['额定短时耐受电流 (Icw)', '31.5 kA / 2s, 40 kA / 2s, 50 kA / 2s', '31.5 kA 至 63 kA / 2s', '25 kA 至 40 kA / 2s', '31.5 кА, 40 кА, 50 кА / 2с (ГОСТ)'],
      ['额定峰值耐受电流 (Ipeak)', '80 kA, 100 kA, 125 kA 峰值 (0% 磁饱和)', '80 kA 至 160 kA 峰值', '65 kA 至 100 kA 峰值', '80 кА, 100 кА, 125 кА 极限冲击电动力'],
      ['绕组封装与绝缘耐温等级', 'VPI 真空浸漆无碱玻纤环氧 (H级180°C / F级)', '无碱玻璃纤维增强环氧树脂 H 级', '环氧树脂浸渍 F 级', 'Монолитный стеклопластик Класс H (180°C)'],
      ['电抗器品质因数 (Q = X/R)', 'Q ≥ 25 至 45 (超低有功发热运行损耗)', 'Q ≥ 25 至 50', 'Q ≥ 20 至 35', 'Q ≥ 25 至 40 (符合俄标 14794)'],
      ['三相空间安装布置方式', '三相垂直叠装（品字形/一字形）/ 水平平列', '三相垂直叠装 / 水平品字形', '水平平列安装', 'Вертикальная стопка (этажерка) / В ряд'],
      ['环境气候耐受工作范围', '-50°C 至 +55°C (俄标 УХЛ1 极寒高纬度认证)', '-40°C 至 +50°C', '-40°C 至 +50°C', '-50°C 至 +45°C (УХЛ1 极寒型)'],
      ['支柱绝缘子悬臂抗弯强度', '≥ 16 kN·m 抗弯力矩 (9度抗震烈度认证)', '≥ 16 kN·m', '≥ 12 kN·m', '≥ 16 кН·м (СВЭЛ 增强型支柱绝缘子)'],
      ['全生命周期免维护设计寿命', '≥ 30 年 (干式固化全耐候防腐防紫外线)', '≥ 30 年', '≥ 25 年', '≥ 30 年 (符合俄罗斯国家电网标准)'],
    ],
    ja: [
      ['定格電圧 (Ur)', '6.0kV, 10.0kV, 20.0kV, 35kV (最大40.5kV)', '10kV 〜 220kV', '4.16kV 〜 34.5kV', '6.0kV, 10.0kV, 20.0kV, 35kV'],
      ['定格電流 (Ir)', '630A 〜 4000A 連続', '630A 〜 5000A', '500A 〜 3000A', '630A 〜 4000A'],
      ['インダクタンス (XL)', '0.10 Ω 〜 2.50 Ω (線形無飽和)', '0.05 Ω 〜 5.00 Ω', '0.10 Ω 〜 3.00 Ω', '0.10 〜 2.50 Ω'],
      ['リアクタンス率 (xk)', '3.0% 〜 12.0% (カスタム設計)', '3.0% 〜 14.0%', '4.0% 〜 10.0%', '3.0% 〜 12.0%'],
      ['短時間耐電流 (Icw)', '31.5 kA / 2s 〜 50 kA / 2s', '31.5 kA 〜 63 kA / 2s', '25 kA 〜 40 kA / 2s', '31.5 kA 〜 50 kA / 2s'],
      ['ピーク耐電流 (Ipeak)', '80 kA 〜 125 kA (飽和0%)', '80 kA 〜 160 kA', '65 kA 〜 100 kA', '80 kA 〜 125 kA'],
      ['絶縁耐熱クラス', 'エポキシガラス繊維 H種 (180℃)', 'ガラス繊維強化 H種', 'エポキシ含浸 F種', 'H種 (180℃) モノリス構造'],
      ['品質係数 Q', 'Q ≥ 25 〜 45 (超低損失)', 'Q ≥ 25 〜 50', 'Q ≥ 20 〜 35', 'Q ≥ 25 〜 40'],
      ['耐寒温度定格', '-50°C 〜 +55°C (ロシア УХЛ1 適合)', '-40°C 〜 +50°C', '-40°C 〜 +50°C', '-50°C 〜 +45°C (УХЛ1)'],
      ['支持がいし曲げ強度', '≥ 16 kN・m (耐震9級適合)', '≥ 16 kN・m', '≥ 12 kN・m', '≥ 16 kN・m'],
      ['設計寿命', '≥ 30 年 (完全メンテナンスフリー)', '≥ 30 年', '≥ 25 年', '≥ 30 年'],
    ],
    es: [
      ['Tensión Nominal (Ur)', '6.0 kV, 10.0 kV, 20.0 kV, 35 kV (hasta 40.5kV)', '10 kV a 220 kV', '4.16 kV a 34.5 kV', '6.0 kV, 10.0 kV, 20.0 kV, 35 kV'],
      ['Corriente Nominal (Ir)', '630 A a 4000 A Continuo', '630 A a 5000 A', '500 A a 3000 A', '630 A a 4000 A'],
      ['Reactancia Inductiva (XL)', '0.10 Ω a 2.50 Ω (Lineal 100%)', '0.05 Ω a 5.00 Ω', '0.10 Ω a 3.00 Ω', '0.10 a 2.50 Ω'],
      ['Porcentaje Reactancia (xk)', '3.0% a 12.0% (Ajustable)', '3.0% a 14.0%', '4.0% a 10.0%', '3.0% a 12.0%'],
      ['Corriente Térmica (Icw)', '31.5 kA / 2s a 50 kA / 2s', '31.5 kA a 63 kA / 2s', '25 kA a 40 kA / 2s', '31.5 kA a 50 kA / 2s'],
      ['Pico Dinámico (Ipeak)', '80 kA a 125 kA Pico (Sin Saturación)', '80 kA a 160 kA', '65 kA a 100 kA', '80 kA a 125 kA'],
      ['Aislamiento y Resina', 'Fibra de Vidrio Epoxi VPI Clase H (180°C)', 'Fibra de Vidrio Clase H', 'Epoxi Clase F', 'Monolítico Clase H (180°C)'],
      ['Factor de Calidad Q', 'Q ≥ 25 a 45 (Bajas Pérdidas)', 'Q ≥ 25 a 50', 'Q ≥ 20 a 35', 'Q ≥ 25 a 40'],
      ['Rango de Temperatura', '-50°C a +55°C (Clima Ártico УХЛ1)', '-40°C a +50°C', '-40°C a +50°C', '-50°C a +45°C (УХЛ1)'],
      ['Resistencia a Flexión', '≥ 16 kN·m (Calificación Sísmica 9°)', '≥ 16 kN·m', '≥ 12 kN·m', '≥ 16 kN·m'],
      ['Vida Útil de Diseño', '≥ 30 Años (Libre de Mantenimiento)', '≥ 30 Años', '≥ 25 Años', '≥ 30 Años'],
    ],
    ru: [
      ['Номинальное напряжение сети', '6.0 кВ, 10.0 кВ, 20.0 кВ, 35 кВ (до 40.5 кВ)', '10 кВ, 20 кВ, 35 кВ, 110 кВ, 220 кВ', '4.16 кВ, 13.8 кВ, 34.5 кВ', '6.0 кВ, 10.0 кВ, 20.0 кВ, 35 кВ (ГОСТ 1516.3)'],
      ['Номинальный длительный ток', '630 А, 1000 А, 1600 А, 2500 А, 4000 А', '630 А до 5000 А длительно', '500 А до 3000 А', '630 А, 1000 А, 1600 А, 2500 А, 4000 А'],
      ['Индуктивное сопротивление (XL)', 'от 0.10 до 2.50 Ом (100% линейное)', 'от 0.05 до 5.00 Ом', 'от 0.10 до 3.00 Ом', 'от 0.10 до 2.50 Ом (ГОСТ 14794-79)'],
      ['Индуктивное падение напряжения (xk)', '3.0% до 12.0% (индивидуальный расчет)', '3.0% до 14.0%', '4.0% до 10.0%', '3.0% до 12.0% (по опросному листу)'],
      ['Ток термической стойкости (Iтерм)', '31.5 кА / 2с, 40 кА / 2с, 50 кА / 2с', '31.5 кА до 63 кА / 2с', '25 кА до 40 кА / 2с', '31.5 кА, 40 кА, 50 кА / 2с (ГОСТ)'],
      ['Ударный ток стойкости (iдин)', '80 кА, 100 кА, 125 кА (0% насыщения)', '80 кА до 160 кА', '65 кА до 100 кА', '80 кА, 100 кА, 125 кА ударный пик'],
      ['Изоляция и класс нагревостойкости', 'Монолитный стеклопластик ВПИ (Класс H 180°C)', 'Стеклопластик Класс H', 'Эпоксид Класс F', 'Монолитный стеклопластик Класс H (180°C)'],
      ['Добротность реактора (Q = X/R)', 'Q ≥ 25 до 45 (минимальные потери мощности)', 'Q ≥ 25 до 50', 'Q ≥ 20 до 35', 'Q ≥ 25 до 40 по ГОСТ 14794'],
      ['Пространственная компоновка', 'Вертикальная этажерка (фаза над фазой) / В ряд', 'Вертикальная стопка / Горизонтально', 'Горизонтально в ряд', 'Вертикальная стопка (этажерка) / В ряд'],
      ['Климатическое исполнение', '-50°C...+55°C (ГОСТ 15150-69 УХЛ1 для Сибири)', '-40°C...+50°C', '-40°C...+50°C', '-50°C...+45°C (УХЛ1 ХЛ1)'],
      ['Прочность изоляторов на изгиб', '≥ 16 кН·м (сейсмостойкость до 9 баллов)', '≥ 16 кН·м', '≥ 12 кН·м', '≥ 16 кН·м (усиленные опорные изоляторы)'],
      ['Расчетный срок службы', '≥ 30 лет (полная коррозионная стойкость)', '≥ 30 лет', '≥ 25 лет', '≥ 30 лет по стандартам СТО Россети'],
    ],
  },
  sec4Title: {
    en: '4. Scenario-Based Application Decision Guide: Substation Bus-Tie Sectionalizing, Generator Outlets & Heavy Smelters',
    zh: '4. 重点应用场景工程选型与系统集成决策指南',
    ja: '4. 適用産業別選定マトリクス：母線連絡区分・発電機引出線・大型冶金溶解炉',
    es: '4. Guía de Decisión por Sector: Seccionamiento de Barras, Salidas de Generadores y Plantas Siderúrgicas',
    ru: '4. Руководство по выбору оборудования: секционирование шин подстанций, выводы генераторов ТЭЦ/ГЭС и электрометаллургические заводы',
  },
  scenarios: {
    en: [
      {
        title: 'High-Density Urban Substation Bus-Tie Sectionalizing (Ssc > 1500MVA)',
        recommend: 'Recommendation: Feichi FE-CLR-10/35 Bus-Tie Reactor (РТОС-10/1600-0.35Ω)',
        reason: 'Restricts inter-bus short-circuit fault spillover, allowing parallel transformer operation without upgrading existing 25kA feeder switchboards.',
      },
      {
        title: 'Thermal & Hydro Power Plant Generator Outlets (P > 50MW / 10.5kV)',
        recommend: 'Recommendation: High-Capacity Air-Core Series Reactor FE-CLR (РТСТ-10/3150-0.20Ω)',
        reason: 'Limits generator-fed terminal short-circuit currents while maintaining continuous 3150A power export with minimal active losses (Q > 35).',
      },
      {
        title: 'Siberian Metallurgical Smelters & Mining Heavy Feeders (-50°C УХЛ1 High Seismic 9-Degree)',
        recommend: 'Recommendation: Vertical Stacked Class H Encapsulated Reactor with 16 kN·m Insulators',
        reason: '100% linear air-core design withstands 100kA peak dynamic shocks at -50°C, fully certified under Russian GOST 14794-79 and PJSC Rosseti standards.',
      },
    ],
    zh: [
      {
        title: '特大城市枢纽变电站母联分段限流隔离（短路容量激增 $S_{sc} > 1500\text{ MVA}$）',
        recommend: '选型推荐：飞驰 FE-CLR-10/35 母联干式空心电抗器（俄标 РТОС-10/1600-0.35Ω）',
        reason: '有效阻断相邻母线段短路故障电流横向倒灌，在保障多台主变并列运行供电可靠性的同时，彻底免除出线 25kA 开关柜昂贵的增容更换投资。',
      },
      {
        title: '大型火电厂、水电站发电机机端 10.5kV/13.8kV 直配出线回路（$P > 50\text{MW}$）',
        recommend: '选型推荐：大容量干式空心串联电抗器 FE-CLR（俄标 РТСТ-10/3150-0.20Ω）',
        reason: '将发电机近区极端短路电流钳制在断路器安全开断范围内，连续载流 3150A 且品质因数 $Q > 35$，整机年运行发热损耗极低。',
      },
      {
        title: '俄罗斯西伯利亚重工业冶炼厂与高寒矿山电网（-50°C 严寒与 9 度高抗震 УХЛ1）',
        recommend: '选型推荐：三相垂直叠装式 H 级绝缘空心电抗器 + 16 kN·m 重载支柱瓷瓶',
        reason: '空心纯线性结构耐受 100kA 峰值电动力冲击，在 -50°C 极寒交变下机械绝缘结构零老化，完全符合俄罗斯 ПАО «Россети» 标准规范。',
      },
    ],
    ja: [
      {
        title: '都市部基幹変電所母線連絡区分限流 (短絡容量 Ssc > 1500MVA)',
        recommend: '推奨：飛馳 FE-CLR-10/35 母連空心リアクトル (РТОС-10/1600-0.35Ω)',
        reason: '短絡電流の母線間波及を阻止し、既存25kAスイッチギアの更新なしに変圧器並列運転を実現。',
      },
      {
        title: '火力・水力発電所10.5kV発電機直配出線系統 (P > 50MW)',
        recommend: '推奨：大容量直列空心リアクトル FE-CLR (РТСТ-10/3150-0.20Ω)',
        reason: '発電機近傍短絡電流を抑制しつつ、3150A大電流を低損失（Q>35）で連続送電。',
      },
      {
        title: 'ロシア・シベリア製鉄所・鉱山配電網 (-50℃ УХЛ1 耐震9級環境)',
        recommend: '推奨：垂直三相スタック型H種空心リアクトル＋16kN・m高耐震がいし',
        reason: '100kAピーク電磁力に耐え、氷点下50℃でもクラックゼロ。寿命30年以上の高信頼性。',
      },
    ],
    es: [
      {
        title: 'Seccionamiento de Barras en Subestaciones Urbanas de Alta Capacidad (Ssc > 1500MVA)',
        recommend: 'Recomendación: Reactor de Enlace de Barras Feichi FE-CLR-10/35 (РТОС-10/1600-0.35Ω)',
        reason: 'Limita la corriente de falla entre barras permitiendo operar transformadores en paralelo sin cambiar celdas de 25kA.',
      },
      {
        title: 'Salidas de Generadores en Centrales Hidroeléctricas y Térmicas (P > 50MW / 10.5kV)',
        recommend: 'Recomendación: Reactor Serie de Gran Capacidad FE-CLR (РТСТ-10/3150-0.20Ω)',
        reason: 'Clampa fallas cercanas al generador transportando 3150A continuos con pérdidas mínimas ($Q > 35$).',
      },
      {
        title: 'Plantas Siderúrgicas y Minas en Siberia (-50°C УХЛ1 y Sismicidad de 9 Grados)',
        recommend: 'Recomendación: Reactor Apilado Verticalmente Clase H con Aisladores de 16 kN·m',
        reason: 'Diseño 100% lineal que resiste choques dinámicos de 100kA a -50°C bajo normas GOST y Rosseti.',
      },
    ],
    ru: [
      {
        title: 'Секционирование шин узловых подстанций мегаполисов ($S_{кз} > 1500$ МВА)',
        recommend: 'Рекомендация: Секционный сухой реактор Feichi FE-CLR-10/35 (РТОС-10/1600-0.35 Ом)',
        reason: 'Ограничивает переток токов КЗ между секциями шин, позволяя параллельную работу силовых трансформаторов без замены ячеек КРУ на 25 кА.',
      },
      {
        title: 'Выводы генераторов ТЭЦ и ГЭС на напряжение 10.5 кВ ($P > 50$ МВт)',
        recommend: 'Рекомендация: Линейный токоограничивающий реактор FE-CLR (РТСТ-10/3150-0.20 Ом)',
        reason: 'Надежно ограничивает токи КЗ вблизи генераторов при длительной передаче тока 3150 А с минимальными потерями мощности ($Q > 35$).',
      },
      {
        title: 'Электрометаллургические заводы и горно-обогатительные комбинаты Сибири (-50°C, 9 баллов сейсмичности, УХЛ1)',
        recommend: 'Рекомендация: Реактор вертикальной установки РТОС-35 с изоляторами 16 кН·м',
        reason: 'Абсолютная линейность при токах КЗ до 100 кА и безаварийная эксплуатация при -50°C по ГОСТ 14794-79 и стандартам ПАО Россети.',
      },
    ],
  },
  hasCalculator: 'reactor' as any,
  ctaTitle: {
    en: 'Need Short-Circuit Reactance Sizing Calculations (ETAP) or Russian GOST Опросный лист for 10kV/35kV RTOS / RTST?',
    zh: '需要获取 10kV/35kV 串联限流电抗器短路阻抗计算书（ETAP/MATLAB 仿真）或俄标 Опросный лист 选型方案？',
    ja: '10kV/35kV 限流リアクトル短絡インピーダンス計算書やロシアGOST問診票が必要ですか？',
    es: '¿Requiere Cálculos de Impedancia de Cortocircuito (ETAP) o Cuestionario GOST para РТОС/РТСТ 10kV/35kV?',
    ru: 'Требуется расчет токоограничивающего реактора (ETAP/PSCAD) или Опросный лист на реактор РТОС-10 / РТОС-35?',
  },
  ctaDesc: {
    en: 'Connect directly with technical lead Henry to receive complete stray magnetic clearance profiles, short-circuit current reduction sheets, single-line schematics, and Russian PJSC Rosseti certified commercial proposals within 24 hours.',
    zh: '直接与技术负责人 Henry 沟通，获取完整的空间漏磁安全净距图、短路电流限流微积分计算书、一次单线图（SLD）及符合俄罗斯国家电网认证的正式报价单（24 小时内响应）。',
    ja: '技術責任者 Henry に直接ご連絡ください。漏れ磁界安全離隔図面、短絡電流抑制計算書、単線結線図（SLD）およびロシアRosseti認定見積書を24時間以内に提供します。',
    es: 'Contacte directamente con el líder técnico Henry para obtener planos de distancias magnéticas seguras, cálculo de reducción de cortocircuitos, diagramas unifilares y propuestas comerciales certificadas en 24 horas.',
    ru: 'Свяжитесь напрямую с техническим руководителем Henry для получения карты зон магнитного рассеяния, расчета ограничения токов КЗ, однолинейных схем и коммерческого предложения по стандартам ПАО Россети в течение 24 часов.',
  },
};
