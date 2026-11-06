import type { WhitepaperItem } from './whitepapersData';

export const week33Whitepaper: WhitepaperItem = {
  id: 'week-33',
  week: 33,
  slug: '10kv-35kv-harmonic-passive-active-filter-apf-svg-hybrid-guide',
  category: 'switchgear',
  categoryLabel: {
    en: '10kV–35kV Industrial Harmonics & Power Quality (APF / SVG Hybrid / IEEE 519 / ГОСТ 32144-2013)',
    zh: '10kV–35kV 工矿电网高次谐波治理与电能质量补偿（有源 APF / SVG + 无源 FC 混合滤波 / IEEE 519 / 俄标 ФСУ-10/35）',
    ja: '10kV〜35kV 産業高調波抑制・アクティブフィルタ（APF/SVGハイブリッド/IEEE 519/GOST 32144）設計指针',
    es: 'Filtros Activos y Pasivos de Armónicos 10kV–35kV (APF / SVG / Filtros FC / IEEE 519 / ГОСТ 32144)',
    ru: 'Фильтро-компенсирующие устройства ФКУ, ФСУ и активные фильтры гармоник 10-35 кВ (ГОСТ 32144-2013 / IEEE 519-2022)',
  },
  title: {
    en: '10kV–35kV Industrial Harmonic Mitigation & Hybrid Power Quality Compensation (Active APF + Static Var Generator SVG + Passive LC/FC Branch Topology) Engineering Whitepaper: 2nd to 50th Harmonic FFT Current Cancellation Algorithms ($THD_i < 3.0\\%$, $THD_u < 1.5\\%$), Point of Common Coupling (PCC) Resonance Avoidance Dynamics, 10kV Direct-Connected 3-Level Cascaded H-Bridge Inverters, and Siberian Mining Heavy Arc Furnace Dynamic Load Sizing (Benchmarking ABB PQF, Siemens SVG PLUS, Russian ZETO FKU-35 & Pinggao)',
    zh: '10kV–35kV 重工与采矿电网高次谐波治理与混合电能质量补偿系统（高压有源电力滤波器 APF + 动态无功发生器 SVG + LC/FC 无源滤波支路混合拓扑）工程选型指南：2至50次谐波 FFT 快速傅里叶瞬时对消算法（注入点 $THD_i < 3.0\\%$，$THD_u < 1.5\\%$）、公共连接点（PCC）并联谐振点频移阻尼力学模型、10kV 直挂级联 H 桥三电平逆变架构与西伯利亚大型矿山中频电弧炉动态冲击负荷精准配比（深度对标瑞士 ABB PQF、德国西门子 SVG PLUS、俄罗斯大卢基成套厂 ЗЭТО ФКУ-35/110 与平高电气）',
    ja: '10kV〜35kV 産業高調波抑制およびハイブリッド電力品質補償（アクティブフィルタAPF＋SVG＋無源FCフィルタ複合トポロジー）完全設計技術白書：第2〜50次高調波FFT瞬時打消しアルゴリズム（THD_i<3.0%、THD_u<1.5%）、PCC点並列共振回避ダンピング力学、10kV直結カスケードHブリッジインバータ回路、およびシベリア鉱山アーク炉急変負荷選定（ABB PQF、Siemens SVG PLUS、ロシアZETO FKU-35ベンチマーク）',
    es: 'Mitigación de Armónicos y Calidad de Energía Híbrida 10kV–35kV (Filtros Activos APF + Generador SVG + Filtros Pasivos FC): Algoritmos FFT de Cancelación de Armónicos 2° a 50° ($THD_i < 3.0\\%$, $THD_u < 1.5\\%$), Evitación de Resonancia en el PCC, Inversores en Cascada Puente H a 10kV y Compensación de Hornos de Arco en Minería Ártica',
    ru: 'Техническое руководство по фильтро-компенсирующим устройствам (ФКУ, ФСУ), активным фильтрам гармоник (АФГ/APF) и статическим генераторам реактивной мощности (СТАТКОМ/SVG) 10-35 кВ: компенсация гармоник со 2-й по 50-ю (снижение $THD_i < 3.0\\%$, $THD_u < 1.5\\%$ по ГОСТ 32144-2013 / IEEE 519), предотвращение параллельного резонанса в точке общего присоединения (ТОП/PCC), прямое подключение к сети 10(35) кВ по схеме каскадного H-моста, демпфирование резких колебаний дуговых сталеплавильных печей (ДСП) на горно-металлургических комбинатах Сибири (Бенчмарк ABB PQF, Siemens SVG, ЗАО ЗЭТО ФКУ-35 и Pinggao)',
  },
  eyebrow: {
    en: 'INDUSTRIAL POWER QUALITY & HARMONIC FILTERING (IEEE 519-2022 / IEC 61000-3-6 / ГОСТ 32144-2013 / СТО РОССЕТИ)',
    zh: 'FE-SPEC-33 · 10kV–35kV 高压谐波治理与动态无功综合补偿专论（IEEE 519 / GB/T 14549 / ГОСТ 32144 / ТР ТС 004/2011）',
    ja: 'FE-SPEC-33 · 10kV〜35kV 産業高調波抑制・ハイブリッド無効電力補償仕様書（IEEE 519 / IEC 61000-3-6 / ГОСТ 32144）',
    es: 'FE-SPEC-33 · DOSSIER DE CALIDAD DE ENERGÍA Y FILTRADO DE ARMÓNICOS 10kV–35kV (IEEE 519 / IEC / GOST)',
    ru: 'FE-SPEC-33 · РУКОВОДСТВО ПО ФИЛЬТРО-КОМПЕНСИРУЮЩИМ УСТРОЙСТВАМ ФКУ, ФСУ 10-35 кВ (ГОСТ 32144-2013 / СТО РОССЕТИ 56947007-29.240.10.158-2013)',
  },
  author: {
    en: 'Feichi High-Voltage Power Quality & Harmonic Engineering Institute (Lead: Henry)',
    zh: '飞驰电气高压电能质量与谐波治理工程研究院（总工/外贸对接人：Henry）',
    ja: '飛馳電気 高圧電力品質・高調波制御工学研究所（チーフ：Henry）',
    es: 'Instituto de Ingeniería de Calidad de Energía y Armónicos Feichi (Líder: Henry)',
    ru: 'Инженерно-исследовательский институт качества электроэнергии и фильтро-компенсирующих устройств Feichi Power (Гл. инженер: Henry)',
  },
  standards: 'IEEE 519-2022 / IEC 61000-3-6 / IEC 61000-4-30 Class A / GB/T 14549-1993 / ГОСТ 32144-2013 / ГОСТ 13109-97 / ТР ТС 004/2011 / СТО РОССЕТИ 56947007-29.240.10.158-2013',
  readTime: {
    en: '24 min technical study (Includes Harmonic Current FFT Cancellation Equations, Point of Common Coupling PCC Impedance Modeling, 3-Level Cascaded Inverter Efficiency Curves & Russian ФКУ-35 Questionnaire)',
    zh: '24 分钟深度技术研读（含 2~50 次谐波瞬时傅里叶对消微积分方程、公共连接点 PCC 阻抗网络谐振阻尼模型、级联三电平拓扑损耗分析与俄标 ФКУ-35/ФСУ-10 选型表单）',
    ja: '24分 専門設計解説（高調波電流FFT瞬時相殺方程式・PCC点インピーダンス共振減衰モデル・カスケード3レベル損失解析・ロシアFKU-35選定問診票）',
    es: '24 min de lectura técnica (Incluye ecuaciones FFT de cancelación de corrientes armónicas, modelado de impedancia en el PCC, curvas de rendimiento de inversores multinivel y cuestionario ФКУ-35)',
    ru: '24 мин технического изучения (включая формулы БПФ-компенсации гармонических токов, расчет частотных характеристик сопротивления в ТОП для предотвращения резонанса, КПД трехуровневых инверторов и полный Опросный лист на ФКУ-35 / ФСУ-10)',
  },
  summary: {
    en: 'An authoritative technical whitepaper on 10kV, 24kV, and 35kV Industrial Active Harmonic Filters (APF), Static Var Generators (SVG/STATCOM), and Hybrid Passive Filter-Compensating Units (Russian GOST series FKU-10, FKU-35, FSU-10; Chinese FE-APF-10/35 series) for heavy metallurgical arc furnaces, variable-frequency mining hoists, large electrolytic chemical plants, and high-penetration renewable wind/solar feeder bays (rated compensation capacity 1.0 Mvar to 50 Mvar). Benchmarking international leaders ABB (PQF Active Filter series), Siemens (SVG PLUS Static Var System), and Russian ZETO pioneer JSC ZETO (ФКУ-35/110 series), this dossier explores: 1) Real-time DSP/FPGA-based Fast Fourier Transform (FFT) harmonic current detection with sub-5ms closed-loop response injecting anti-phase currents up to the 50th harmonic order ($THD_i < 3.0\\%$, $THD_u < 1.5\\%$ meeting IEEE 519-2022 and GOST 32144-2013); 2) Hybrid topology combining low-cost passive LC tuned branches (5th, 7th, 11th harmonic sinks) with high-speed active APF/SVG modules to optimize total CapEx/OpEx; 3) Point of Common Coupling (PCC) system impedance resonance tracking to eliminate dangerous background harmonic amplification; 4) 10kV direct-connected modular cascaded H-bridge (CHB) multilevel IGBT inverters eliminating heavy step-up matching transformers; 5) Siberian extreme -50°C heavy-duty forced-air/water cooling containers with intelligent heat recovery; and 6) Complete PJSC Rosseti industrial harmonic filter-compensating unit Опросный лист questionnaire templates.',
    zh: '系统阐述 10kV、24kV 与 35kV 高压工业有源电力滤波器（APF）、静止无功发生器（SVG/STATCOM）以及无源滤波补偿装置（俄标 ФКУ-10, ФКУ-35, ФСУ-10/35 系列；国标飞驰 FE-APF-10/35 系列）在重型冶金电弧炉、矿山大型变频提升机、电解铝化工厂及高比例新能源汇集站中的核心滤畸机理与工程选型规范（补偿容量 1.0 Mvar 至 50 Mvar）。深度对标瑞士 ABB（PQF 旗舰有源滤波系列）、德国西门子（SVG PLUS 动态电能质量系统）以及俄罗斯大卢基成套电气厂 ЗАО «ЗЭТО»（ФКУ-35/110 系列），重点解析：1）基于双 DSP + 高速 FPGA 架构的 2 至 50 次谐波瞬时快速傅里叶（FFT）检测与 $< 5\\text{ ms}$ 极速闭环反相电流注入算法（总电流畸变率 $THD_i < 3.0\\%$，电压畸变率 $THD_u < 1.5\\%$，完全满足 IEEE 519-2022 与 ГОСТ 32144-2013 标准）；2）高性价比混合拓扑架构：将大容量无源 LC/FC 调谐支路（吸收 5 次、7 次、11 次主力特征谐波）与高速有源 APF/SVG（连续无级动态消畸与功率因数提升至 0.98+）深度耦合，大幅削减初期投资 CapEx；3）公共连接点（PCC）电网背景阻抗网络谐振频点实时自适应跟踪，彻底杜绝并联电容器组引发的高压谐振过电压事故；4）10kV/35kV 直挂式级联 H 桥（CHB）多电平 IGBT 逆变拓扑，彻底省去笨重且易发热的中间升压变压器；5）西伯利亚 -50°C 极寒高防护风冷/纯水冷集装箱舱体与余热自循环温控；以及 6）符合俄罗斯国家电网 ПАО «Россети» 与海关联盟 ТР ТС 004/2011 认证的《Опросный лист на фильтрокомпенсирующее устройство ФКУ-35 / ФСУ-10》工程选型技术规范。',
    ja: '10kV/24kV/35kV 産業用アクティブ高調波フィルタ（APF）、静止型無効電力発生装置（SVG）、および受動フィルタ補償装置（ロシアGOST ФКУ-10/ФКУ-35、飛馳FE-APF-10/35）の完全設計解説書（容量1.0Mvar〜50Mvar）。ABB PQF、Siemens SVG PLUS、ロシアZETO FKU-35をベンチマークし、第2〜50次高調波FFT瞬時相殺（応答時間<5ms、THD_i<3.0%）、LC無源フィルタとアクティブAPFのハイブリッド構成によるコスト最適化、PCC点並列共振自動回避、10kV直結カスケードHブリッジ（CHB）インバータ、シベリア-50℃極寒コンテナ、およびロシアRosseti標準Опросный лист問診票を網羅。',
    es: 'Expediente técnico de Filtros Activos de Armónicos (APF), Generadores SVG y Bancos Híbridos Pasivos 10kV–35kV (ФКУ-35 / ФСУ-10 / FE-APF-10/35) para hornos de arco y minería (1.0 Mvar a 50 Mvar). Analiza algoritmos FFT en FPGA para cancelar armónicos hasta el orden 50° ($THD_i < 3.0\\%$ según IEEE 519 y GOST 32144), topología híbrida LC + APF para reducir CapEx, prevención de resonancia en el PCC, inversores multinivel Puente H a 10kV sin transformador elevador, contenedor térmico para -50°C y cuestionarios oficiales de licitación.',
    ru: 'Полное техническое руководство по фильтро-компенсирующим устройствам (ФКУ, ФСУ), активным фильтрам гармоник (АФГ/APF) и статическим генераторам реактивной мощности (СТАТКОМ/SVG) 10, 24 и 35 кВ мощностью от 1 до 50 Мвар по ГОСТ 32144-2013, СТО Россети и IEEE 519-2022. Рассмотрены: алгоритмы БПФ-компенсации гармоник со 2-й по 50-ю за время менее 5 мс ($THD_i < 3.0\\%$, $THD_u < 1.5\\%$), гибридные схемы (пассивные LC-фильтры 5, 7, 11 гармоник + активный блок АФГ/SVG) для оптимизации CapEx, расчет резонансных частот в ТОП (PCC), прямое подключение к сети 10-35 кВ по схеме каскадного H-моста, блок-модульное исполнение для Сибири до -50°C (УХЛ1) и полный Опросный лист ПАО Россети.',
  },
  sec1Title: {
    en: '1. Harmonic Cancellation Physics: Real-Time FFT Inversion vs Passive LC Tuned Trap Resonances',
    zh: '1. 谐波治理机理拓扑：有源快速傅里叶（FFT）反相电流对消 vs 无源 LC 调谐陷波谐振特性深度对比',
    ja: '1. 高調波抑制原理比較：アクティブFFT逆位相電流相殺 vs パッシブLC同調トラップ共振特性',
    es: '1. Física de Cancelación de Armónicos: Inversión FFT en Tiempo Real vs Trampas Sintonizadas LC Pasivas',
    ru: '1. Физика фильтрации гармоник: активная БПФ-инверсия токов vs пассивные резонансные LC-контуры',
  },
  sec1Text: {
    en: `Non-linear industrial loads (such as variable-frequency drives, 6-pulse/12-pulse thyristor rectifiers, and electric arc furnaces) inject severe harmonic currents into the power grid, causing transformer overheating, neutral conductor burnout, and protective relay mis-tripping.

**Harmonic Filtering Topological Comparison**:
1. **High-Voltage Active Power Filter (Feichi FE-APF / Russian ФСУ-10/35)**:
   - High-speed CTs sample load currents $i_L(t)$ at $25.6\\text{ kHz}$. A dual DSP+FPGA core executes instantaneous $p$-$q$ theory or $d$-$q$ rotating coordinate transformations and Fast Fourier Transforms (FFT) to extract harmonic components $i_h(t)$:
     $$i_h(t) = \\sum_{n=2}^{50} I_n \\sin(n\\omega t + \\phi_n)$$
   - The multi-level IGBT inverter generates an exact anti-phase compensating current $i_c(t) = -i_h(t) + i_q(t)$ into the grid within $t_{resp} < 5\\text{ ms}$.
   - **Advantage**: Dynamically cancels all harmonics up to the 50th order simultaneously, completely immune to grid frequency fluctuations, and never overloads.
2. **Passive LC/FC Tuned Filter Banks (Feichi FE-FC / Russian ФКУ-35)**:
   - Series reactor ($L$) and capacitor ($C$) branches tuned to specific dominant frequencies:
     $$f_{res} = \\frac{1}{2\\pi \\sqrt{L \\cdot C}} = n \\cdot f_1$$
   - Typical branches are tuned to the 5th ($250\\text{ Hz}$), 7th ($350\\text{ Hz}$), and 11th ($550\\text{ Hz}$) harmonics.
   - **Advantage**: Ultra-low CapEx per Mvar, providing continuous fundamental reactive power compensation alongside harmonic trapping.
3. **Hybrid Active + Passive Architecture (Feichi FE-HYBRID-PQ)**:
   - Combines $70\\%$ capacity passive LC branches for baseline harmonic absorption with $30\\%$ dynamic active APF/SVG capacity for precision harmonic trimming and resonance damping, achieving the optimal cost-to-performance ratio.`,
    zh: `电力电子非线性负载（如大功率高压变频器、6脉波/12脉波晶闸管整流器、直流电弧炉及中频感应炉）向电网注入严重的谐波畸变电流，导致主变压器附加涡流发热损耗剧增、中性线过载过热烧毁以及微机继电保护装置发生拒动与误动。

**两大核心滤波拓扑与混合架构深度对比**：
1. **高压有源电力滤波器（飞驰 FE-APF / 俄标 ФСУ-10/35 系列）**：
   - 采用高频光电霍尔传感器以 $25.6\\text{ kHz}$ 极速采集负载电流 $i_L(t)$。双 DSP+FPGA 控制核心运行瞬时无功功率理论（$p$-$q$ 法）或同步旋转坐标变换（$d$-$q$ 法）及快速傅里叶算法（FFT），瞬间分离出基波与各次高次谐波分量 $i_h(t)$：
     $$i_h(t) = \\sum_{n=2}^{50} I_n \\sin(n\\omega t + \\phi_n)$$
   - 级联多电平 IGBT 逆变器在 $t_{resp} < 5\\text{ ms}$ 内向电网实时注入相位严格相反的补偿电流 $i_c(t) = -i_h(t) + i_q(t)$，在公共连接点实现谐波瞬时全抵消；
   - **工程优势**：同时动态治理 2~50 次全部特征与非特征谐波、不受电网频率偏移影响、自身具备过载自限流保护功能（永不过载）。
2. **无源 LC/FC 调谐滤波电容器组（飞驰 FE-FC / 俄标 ФКУ-35 系列）**：
   - 采用特种空心/铁芯滤波电抗器（$L$）与高压电力电容器（$C$）串联构成特定单调谐陷波支路：
     $$f_{res} = \\frac{1}{2\\pi \\sqrt{L \\cdot C}} = n \\cdot f_1$$
   - 典型支路配置包括 5 次（$250\\text{ Hz}$）、7 次（$350\\text{ Hz}$）、11 次（$550\\text{ Hz}$）调谐支路及高通滤波支路；
   - **工程优势**：单 Mvar 初始造价（CapEx）极低，在滤除主力次谐波的同时向电网提供大容量工频无功功率支持。
3. **有源+无源混合式智能滤波系统（飞驰 FE-HYBRID-PQ 系列）**：
   - 采用“$70\\%$ 无源 FC 大容量底座 + $30\\%$ 有源 APF 动态精确微调”黄金配比拓扑，在彻底杜绝并联谐振的同时将综合造价降低 $45\\%$ 以上。`,
    ja: '非線形負荷（インバータ・整流器・アーク炉）による高調波電流に対し、アクティブフィルタ（APF）は高速DSP+FPGAが第2〜50次高調波を瞬時検出し逆位相電流を5ms以内に注入して相殺（THD_i<3.0%）。パッシブFCフィルタは5次・7次・11次特定周波数に同調し低コストで無効電力を供給。両者を融合したハイブリッドPQシステムが最適コストパフォーマンスを提供します。',
    es: 'Las cargas no lineales inyectan armónicos severos. El Filtro Activo Feichi FE-APF / ФСУ analiza las corrientes de carga en FPGA y genera una corriente en contrafase $i_c(t) = -i_h(t)$ en $<5\\text{ ms}$ eliminando armónicos del orden 2° al 50°. Los bancos pasivos LC (ФКУ-35) sintonizan ramas de 5°, 7° y 11° armónico. La arquitectura híbrida combina 70% de capacidad pasiva con 30% activa reduciendo el CapEx un 45%.',
    ru: 'Нелинейные нагрузки (ЧРП, выпрямители, ДСП) генерируют токи высших гармоник. Активный фильтр гармоник АФГ (ФСУ-10/35) с помощью алгоритмов БПФ на DSP+FPGA выделяет гармоники со 2-й по 50-ю и за время менее 5 мс генерирует в сеть ток в противофазе $i_c(t) = -i_h(t)$. Пассивные фильтры ФКУ-35 содержат LC-цепи, настроенные на 5, 7 и 11 гармоники. Гибридная схема (70% пассивных ФКУ + 30% активного АФГ/SVG) обеспечивает $THD_i < 3.0\\%$ при снижении стоимости на 45%.',
  },
  sec2Title: {
    en: '2. Resonance Avoidance Dynamics at PCC & 10kV Direct-Connected Cascaded H-Bridge (CHB) Multilevel Inverter Topology',
    zh: '2. 公共连接点（PCC）电网背景阻抗网络谐振阻尼模型与 10kV 直挂级联 H 桥（CHB）多电平拓扑',
    ja: '2. PCC点インピーダンス共振回避ダンピング力学および 10kV 直結カスケードHブリッジ（CHB）マルチレベルインバータ',
    es: '2. Dinámica de Amortiguación de Resonancia en el PCC y Topología Multinivel Puente H en Cascada a 10kV',
    ru: '2. Демпфирование резонанса в точке общего присоединения (ТОП) и топология каскадного H-моста (CHB) на 10 кВ без трансформатора',
  },
  sec2Text: {
    en: `A critical engineering hazard of traditional passive capacitors is parallel resonance with grid source inductance $L_{grid}$ at specific harmonic frequencies, which causes catastrophic voltage magnification ($V_{harm} > 2.5\\text{ p.u.}$) and equipment destruction.

**Resonance Damping Mechanics & Cascaded H-Bridge Inverters**:
1. **PCC Resonance Point Shift & Active Virtual Resistance Damping**:
   - The total admittance at the Point of Common Coupling (PCC) is continuously monitored:
     $$Y_{PCC}(s) = \\frac{1}{s L_{grid} + R_{grid}} + Y_{filter}(s) + Y_{load}(s) + G_{active}(s)$$
   - The active APF controller synthesizes a virtual damping resistance $R_{virtual}$, eliminating the sharp resonance peak ($Q < 1.2$) and keeping system operation unconditionally stable across all grid short-circuit levels ($S_{sc} = 50\\text{ MVA} \\sim 2500\\text{ MVA}$).
2. **10kV / 35kV Transformerless Direct-Connection Cascaded H-Bridge (CHB)**:
   - Multiple low-voltage IGBT power cells (1200V / 1700V rated) are cascaded in series per phase (e.g., 8–12 power units in series for a 10kV line).
   - Produces a smooth staircase sinusoidal PWM waveform with an equivalent switching frequency $f_{eq} = 2N \\cdot f_{sw} > 40\\text{ kHz}$, cutting total inverter loss below $1.2\\%$, slashing structural footprint by $> 50\\%$, and eliminating the need for bulky step-up transformers.`,
    zh: `传统纯无源滤波电容器在电网运行中最严峻的致命隐患是与上级电网变压器系统电感 $L_{grid}$ 发生并联谐振（Parallel Resonance），在特定高次谐波频点导致谐波电压与谐波电流恶性放大 $2.5$ 倍以上，造成电容器击穿、母线避雷器炸裂与主变绝缘击穿。

**PCC 阻抗网络谐振主动阻尼与级联 H 桥无变压器直挂拓扑**：
1. **公共连接点（PCC）阻抗主动阻尼与虚拟电阻模型**：
   - 系统实时计算并监测公共连接点的等效导纳函数：
     $$Y_{PCC}(s) = \\frac{1}{s L_{grid} + R_{grid}} + Y_{filter}(s) + Y_{load}(s) + G_{active}(s)$$
   - 有源 APF 核心控制器向系统等效注入虚拟阻尼电阻 $R_{virtual}$，将谐振品质因数压低至 $Q < 1.2$ 以下，在电网短路容量在 $S_{sc} = 50\\text{ MVA} \\sim 2500\\text{ MVA}$ 宽幅波动时彻底杜绝谐振发生。
2. **10kV/35kV 直挂式级联 H 桥（Cascaded H-Bridge, CHB）链式多电平逆变架构**：
   - 每相由多个成熟可靠的低压 IGBT 功率单元（额定 1200V / 1700V）经直流电容独立隔离后直接串联（10kV 系统每相串联 8~12 个功率单元）；
   - 载波移相脉宽调制（CPS-SPWM）输出高达 $N+1$ 电平的阶梯正弦波，等效开关频率 $f_{eq} = 2N \\cdot f_{sw} > 40\\text{ kHz}$，整机逆变运行损耗 $< 1.2\\%$，完全省去中间升压变压器，设备占地面积减少 $50\\%$ 以上。`,
    ja: '従来の受動コンデンサが抱えるグリッドインダクタンスとの並列共振リスクに対し、APFは仮想ダンピング抵抗（R_virtual）を注入して共振を完全排除（Q<1.2）。10kV直結カスケードHブリッジ（CHB）マルチレベルIGBT回路により、変圧器なしで直接10kV系統へ連系し、損失<1.2%、設置面積を50%削減します。',
    es: 'El riesgo de resonancia paralela entre condensadores pasivos y la inductancia de red se elimina mediante amortiguación de resistencia virtual activa inyectada por el APF ($Q < 1.2$). La topología multinivel en cascada Puente H (CHB) conecta directamente a 10kV sin transformador elevador con pérdidas $<1.2\\%$ y reducción del 50% de espacio.',
    ru: 'Опасность параллельного резонанса пассивных конденсаторов с индуктивностью сети устраняется блоком АФГ путем внедрения виртуального демпфирующего сопротивления ($Q < 1.2$). Бестрансформаторная схема прямого подключения к сети 10-35 кВ на базе каскадного H-моста (CHB) из низковольтных IGBT ячеек обеспечивает эквивалентную частоту ШИМ более 40 кГц, снижает потери до $<1.2\\%$ и сокращает площадь на 50%.',
  },
  sec3Title: {
    en: '3. Technical Benchmarking Matrix: Feichi FE-HYBRID-PQ/APF vs. ABB PQF vs. Siemens SVG PLUS vs. Russian ZETO FKU-35',
    zh: '3. 国际顶级高压谐波治理与无功补偿系统核心参数深度对标表：飞驰 FE-HYBRID-PQ vs. 瑞士 ABB PQF vs. 德国西门子 SVG PLUS vs. 俄罗斯 ЗЭТО ФКУ-35',
    ja: '3. 国際トップ電力品質・高調波抑制システム技術仕様比較：飛馳 FE-HYBRID-PQ vs. ABB PQF vs. Siemens SVG PLUS vs. ロシア ZETO FKU-35',
    es: '3. Matriz de Benchmarking Técnico: Feichi FE-HYBRID-PQ vs. ABB PQF vs. Siemens SVG PLUS vs. ZETO ФКУ-35 (Rusia)',
    ru: '3. Сравнительная матрица параметров: Feichi FE-HYBRID-PQ / ФСУ-10 vs. ABB PQF vs. Siemens SVG PLUS vs. ЗАО ЗЭТО ФКУ-35',
  },
  tableHeaders: {
    en: ['Technical Specification & Parameter', 'Feichi FE-HYBRID-PQ / APF (УХЛ1)', 'ABB PQF Active Filter (Hitachi Energy)', 'Siemens SVG PLUS Static Var System', 'Russian ЗАО ЗЭТО ФКУ-35/110 УХЛ1'],
    zh: ['核心技术参数 / 性能维度', '飞驰电气 FE-HYBRID-PQ / APF (УХЛ1)', '瑞士 ABB PQF 旗舰有源滤波系列', '德国西门子 SVG PLUS 动态补偿系统', '俄罗斯 ЗЭТО ФКУ-35/110 系列'],
    ja: ['技術仕様・性能パラメータ', '飛馳電気 FE-HYBRID-PQ / APF (УХЛ1)', 'ABB PQF アクティブフィルタ', 'Siemens SVG PLUS 補償装置', 'ロシア ЗЭТО ФКУ-35/110'],
    es: ['Parámetro Técnico', 'Feichi FE-HYBRID-PQ / APF (УХЛ1)', 'ABB PQF Filtro Activo (Hitachi)', 'Siemens SVG PLUS Calidad de Energía', 'ЗЭТО ФКУ-35/110 (Rusia)'],
    ru: ['Технический параметр', 'Feichi FE-HYBRID-PQ / ФСУ-10 УХЛ1', 'ABB PQF Active Filter (Hitachi)', 'Siemens SVG PLUS STATCOM', 'ЗАО ЗЭТО ФКУ-35/110 УХЛ1'],
  },
  tableRows: {
    en: [
      ['System Rated Voltage (Ur)', '6.3 kV, 10 kV, 24 kV, 35 kV Direct', '6.3 kV, 10 kV (via Step-up or 690V)', '10 kV, 24 kV, 35 kV Direct CHB', '6.3 kV, 10 kV, 35 kV, 110 kV'],
      ['Rated Compensation Capacity', '1.0 Mvar to 50 Mvar (Modular)', '0.5 Mvar to 20 Mvar', '2.0 Mvar to 100 Mvar', '5.0 Mvar to 100 Mvar (FC Banks)'],
      ['Harmonic Order Range', '2nd to 50th Order (Selectable Selective FFT)', '2nd to 50th Order (Up to 15 Orders)', '2nd to 25th Order Harmonic Mitigation', 'Fixed 5th, 7th, 11th, 13th Tuned Banks'],
      ['Current Distortion After Filtering', 'THDi < 3.0% (Exceeds IEEE 519 / GOST)', 'THDi < 3.5%', 'THDi < 4.0%', 'THDi < 5.0% (Load Dependent)'],
      ['Voltage Distortion After Filtering', 'THDu < 1.5% (Class A IEC 61000-4-30)', 'THDu < 1.8%', 'THDu < 2.0%', 'THDu < 2.5% (ГОСТ 32144-2013)'],
      ['Dynamic Response Time (t_resp)', '< 5.0 ms (Closed-Loop Step Response)', '< 10 ms', '< 5.0 ms', '> 20 ms (Thyristor Switched)'],
      ['Inverter Architecture', '10kV Transformerless Cascaded H-Bridge (CHB)', 'Modular 3-Level NPC Topology', 'Modular Multilevel Cascade (MMC)', 'Passive Reactor + Capacitor Banks (FC)'],
      ['Power Factor Correction (Cos φ)', 'Dynamic 0.99 (Leading to Lagging Controllable)', 'Dynamic 0.98+', 'Dynamic 0.99', 'Stepped 0.92–0.96 (Fixed Steps)'],
      ['PCC Resonance Protection', 'Active Virtual Resistance Damping (Auto-Lock)', 'Impedance Frequency Monitor', 'Active Damping Control', 'Detuning Reactors (6% / 12% P-Factor)'],
      ['Ambient Climate Rating', '-50°C to +55°C (GOST 15150-69 УХЛ1)', '-40°C to +50°C', '-40°C to +50°C', '-50°C to +45°C (УХЛ1 Siberian)'],
      ['Digital Protocol & Integration', 'IEC 61850 Ed.2 + Modbus TCP + Cloud IoT', 'IEC 61850 / Profibus', 'IEC 61850 / PROFINET', 'МЭК 60870-5-104 / Modbus RTU'],
      ['Total Energy Loss Ratio', '< 1.2% (Full Active Load) / < 0.2% (Passive)', '< 1.8%', '< 1.5%', '< 0.3% (Passive Only)'],
    ],
    zh: [
      ['电网额定电压等级 (Ur)', '6.3 kV, 10 kV, 24 kV, 35 kV 直挂', '6.3 kV, 10 kV（升压变或 690V 低压）', '10 kV, 24 kV, 35 kV 级联直挂', '6.3 kV, 10 kV, 35 kV, 110 kV 无源'],
      ['额定综合补偿容量范围', '1.0 Mvar 至 50 Mvar（模块化并联）', '0.5 Mvar 至 20 Mvar', '2.0 Mvar 至 100 Mvar', '5.0 Mvar 至 100 Mvar（FC 大容量）'],
      ['高次谐波治理覆盖频次', '2 至 50 次全频段（可任意指定特定次）', '2 至 50 次（最多同时指定15种）', '2 至 25 次特征谐波动态抑制', '固定 5、7、11、13 次单调谐通道'],
      ['治理后注入点电流畸变率', 'THDi < 3.0%（显著优于 IEEE 519 / 俄标）', 'THDi < 3.5%', 'THDi < 4.0%', 'THDi < 5.0%（受电网工况波动）'],
      ['治理后母线电压畸变率', 'THDu < 1.5%（IEC 61000-4-30 A级认证）', 'THDu < 1.8%', 'THDu < 2.0%', 'THDu < 2.5%（ГОСТ 32144-2013）'],
      ['动态响应时间 (t_resp)', '< 5.0 ms（全控闭环阶跃响应）', '< 10 ms', '< 5.0 ms', '> 20 ms（晶闸管投切延迟）'],
      ['核心逆变/滤波主回路拓扑', '10kV/35kV 无变压器直挂级联 H 桥 (CHB)', '模块化三电平 NPC 逆变拓扑', '模块化多电平 MMC 链式拓扑', '无源滤波电抗器 + 高压电容器组 (FC)'],
      ['目标功率因数补偿能力', '双向连续无级调节至 0.99（感性/容性）', '动态调节至 0.98+', '双向连续调节至 0.99', '阶梯有级投切 0.92–0.96'],
      ['PCC 电网谐振阻尼保护', '主动注入虚拟阻尼电阻（实时锁定）', '阻抗频率监测与报警', '主动阻尼控制算法', '配置 6% / 12% 阻抗失谐电抗器'],
      ['环境气候耐受工作范围', '-50°C 至 +55°C（俄标 УХЛ1 极寒高纬度认证）', '-40°C 至 +50°C', '-40°C 至 +50°C', '-50°C 至 +45°C (УХЛ1 极寒型)'],
      ['数字化通信与监控协议', 'IEC 61850 Ed.2 + Modbus TCP + 工业云网关', 'IEC 61850 / Profibus', 'IEC 61850 / PROFINET', 'МЭК 60870-5-104 / Modbus RTU'],
      ['整机综合运行损耗比率', '< 1.2%（满载有源）/ < 0.2%（无源支路）', '< 1.8%', '< 1.5%', '< 0.3%（纯无源）'],
    ],
    ja: [
      ['定格電圧 (Ur)', '6.3kV, 10kV, 24kV, 35kV 直結', '6.3kV / 10kV', '10kV, 24kV, 35kV 直結', '6.3kV, 10kV, 35kV, 110kV'],
      ['補償容量範囲', '1.0 Mvar 〜 50 Mvar', '0.5 Mvar 〜 20 Mvar', '2.0 Mvar 〜 100 Mvar', '5.0 Mvar 〜 100 Mvar'],
      ['高調波抑制次数', '第2〜50次全範囲（選択次数指定可能）', '第2〜50次', '第2〜25次', '固定 5, 7, 11, 13次同調'],
      ['フィルタ後電流歪み率', 'THDi < 3.0% (IEEE 519 / GOST適合)', 'THDi < 3.5%', 'THDi < 4.0%', 'THDi < 5.0%'],
      ['フィルタ後電圧歪み率', 'THDu < 1.5%', 'THDu < 1.8%', 'THDu < 2.0%', 'THDu < 2.5%'],
      ['動的応答時間', '< 5.0 ms 閉ループ応答', '< 10 ms', '< 5.0 ms', '> 20 ms'],
      ['インバータトポロジー', '10kV変圧器レスカスケードHブリッジ (CHB)', '3レベルNPC', 'モジュラーMMC', '受動LCフィルタ回路'],
      ['力率補償能力', '双方向連続 0.99', '動的 0.98+', '双方向 0.99', 'ステップ式 0.92〜0.96'],
      ['耐寒温度定格', '-50°C 〜 +55°C (ロシア УХЛ1 適合)', '-40°C 〜 +50°C', '-40°C 〜 +50°C', '-50°C 〜 +45°C (УХЛ1)'],
      ['総合運転損失', '< 1.2% (アクティブ時)', '< 1.8%', '< 1.5%', '< 0.3% (パッシブ)'],
    ],
    es: [
      ['Tensión Nominal (Ur)', '6.3 kV, 10 kV, 24 kV, 35 kV Directo', '6.3 kV, 10 kV (con Trafo)', '10 kV, 24 kV, 35 kV Directo', '6.3 kV, 10 kV, 35 kV, 110 kV'],
      ['Capacidad de Compensación', '1.0 Mvar a 50 Mvar (Modular)', '0.5 Mvar a 20 Mvar', '2.0 Mvar a 100 Mvar', '5.0 Mvar a 100 Mvar'],
      ['Rango de Armónicos', 'Orden 2° al 50° (Selección Total)', 'Orden 2° al 50°', 'Orden 2° al 25°', 'Ramas Sintonizadas 5°, 7°, 11°'],
      ['Distorsión de Corriente THDi', 'THDi < 3.0% (Cumple IEEE 519)', 'THDi < 3.5%', 'THDi < 4.0%', 'THDi < 5.0%'],
      ['Distorsión de Tensión THDu', 'THDu < 1.5% (Clase A IEC)', 'THDu < 1.8%', 'THDu < 2.0%', 'THDu < 2.5%'],
      ['Tiempo de Respuesta', '< 5.0 ms (Lazo Cerrado)', '< 10 ms', '< 5.0 ms', '> 20 ms'],
      ['Topología de Inversor', 'Puente H en Cascada a 10kV sin Trafo', 'Inversor 3 Niveles NPC', 'Multinivel MMC', 'Bancos Pasivos FC'],
      ['Factor de Potencia Cos φ', 'Dinámico 0.99 (Capacitivo/Inductivo)', 'Dinámico 0.98+', 'Dinámico 0.99', 'Escalonado 0.92-0.96'],
      ['Rango de Temperatura', '-50°C a +55°C (Clima Ártico УХЛ1)', '-40°C a +50°C', '-40°C a +50°C', '-50°C a +45°C (УХЛ1)'],
      ['Pérdidas Totales', '< 1.2% (Plena Carga Activa)', '< 1.8%', '< 1.5%', '< 0.3% (Solo Pasivo)'],
    ],
    ru: [
      ['Номинальное напряжение сети', '6.3 кВ, 10 кВ, 24 кВ, 35 кВ прямое подключение', '6.3 кВ, 10 кВ (через повышающий ТМ)', '10 кВ, 24 кВ, 35 кВ прямое подключение CHB', '6.3 кВ, 10 кВ, 35 кВ, 110 кВ пассивные'],
      ['Диапазон мощности компенсации', 'от 1.0 до 50 Мвар (модульное наращивание)', 'от 0.5 до 20 Мвар', 'от 2.0 до 100 Мвар', 'от 5.0 до 100 Мвар (банки ФКУ)'],
      ['Спектр фильтрации гармоник', 'со 2-й по 50-ю гармоники (селективный выбор)', 'со 2-й по 50-ю гармоники', 'со 2-й по 25-ю гармоники', 'Фиксированные ветви 5, 7, 11, 13 гармоник'],
      ['Искажение тока после фильтрации', 'THDi < 3.0% (ГОСТ 32144-2013 / IEEE 519)', 'THDi < 3.5%', 'THDi < 4.0%', 'THDi < 5.0% (зависит от сети)'],
      ['Искажение напряжения на шинах', 'THDu < 1.5% (Класс А по ГОСТ 30804.4.30)', 'THDu < 1.8%', 'THDu < 2.0%', 'THDu < 2.5% (ГОСТ 32144)'],
      ['Время динамического отклика (t_откл)', '< 5.0 мс (быстродействие замкнутого контура)', '< 10 мс', '< 5.0 мс', '> 20 мс (коммутация тиристоров)'],
      ['Схемотехника силовой части', 'Бестрансформаторный каскадный H-мост (CHB) 10-35 кВ', '3-уровневый NPC инвертор', 'Модульный многоуровневый инвертор MMC', 'Пассивные фильтровые реакторы и конденсаторы ФКУ'],
      ['Коэффициент мощности (Cos φ)', 'Двунаправленное плавное регулирование до 0.99', 'Динамическое до 0.98+', 'Двунаправленное до 0.99', 'Ступенчатое 0.92–0.96'],
      ['Защита от резонанса в ТОП', 'Активное демпфирование виртуальным сопротивлением', 'Контроль резонансных частот', 'Алгоритм активного демпфирования', 'Антирезонансные реакторы 6% / 12%'],
      ['Климатическое исполнение', '-50°C...+55°C (ГОСТ 15150-69 УХЛ1 для Сибири)', '-40°C...+50°C', '-40°C...+50°C', '-50°C...+45°C (УХЛ1)'],
      ['Протоколы цифровой связи', 'МЭК 61850 Ed.2 + Modbus TCP + Облачный шлюз', 'IEC 61850 / Profibus', 'IEC 61850 / PROFINET', 'МЭК 60870-5-104 / Modbus RTU'],
      ['Суммарные потери электроэнергии', '< 1.2% (активный режим) / < 0.2% (пассивный)', '< 1.8%', '< 1.5%', '< 0.3% (только пассивные)'],
    ],
  },
  sec4Title: {
    en: '4. Scenario-Based Application Decision Guide: Heavy Steel Arc Furnaces, Mining VFD Hoists & Solar/Wind Hubs',
    zh: '4. 重点应用场景工程选型与系统集成决策指南',
    ja: '4. 適用産業別選定マトリクス：製鉄アーク炉・鉱山大型巻上機・再エネ集電ハブ',
    es: '4. Guía de Decisión por Sector: Hornos de Arco Metalúrgicos, Malacates Mineros y Parques Eólicos/Solares',
    ru: '4. Руководство по выбору оборудования: дуговые сталеплавильные печи (ДСП), шахтные подъемные машины с ЧРП и ветро/солнечные электростанции',
  },
  scenarios: {
    en: [
      {
        title: 'Heavy Metallurgical Electric Arc Furnaces (EAF) & Induction Smelters',
        recommend: 'Recommendation: Feichi FE-HYBRID-PQ 25Mvar (70% FC-35 + 30% Active SVG/APF)',
        reason: 'Rapid sub-5ms compensation suppresses extreme voltage flicker (Pst < 0.8), eliminates 3rd/5th harmonics, and prevents grid penalty tariffs.',
      },
      {
        title: 'Deep Shaft Mining Heavy Multi-Megawatt VFD Hoists & Ventilators',
        recommend: 'Recommendation: 10kV Direct-Connected Cascaded APF (ФСУ-10) with Resonance Lock',
        reason: 'Absorbs 5th, 7th, 11th, and 13th harmonics from 12-pulse thyristor drives without bulky step-up transformers, reducing transformer thermal aging.',
      },
      {
        title: 'Siberian & Far-East Industrial Grids with Weak Short-Circuit Capacity (Ssc < 100MVA, -50°C УХЛ1)',
        recommend: 'Recommendation: Arctic Containerized Hybrid FC/APF Unit with Active Virtual Damping',
        reason: 'Operates continuously at -50°C with automated damping preventing background harmonic amplification, fully certified under Russian GOST 32144-2013.',
      },
    ],
    zh: [
      {
        title: '重型冶金钢铁电弧炉（EAF）与中频感应熔炼炉（剧烈冲击性畸变负荷）',
        recommend: '选型推荐：飞驰 FE-HYBRID-PQ 25Mvar 混合电能质量系统（70% FC-35 无源 + 30% 有源 SVG/APF）',
        reason: '< 5ms 极速动态无功响应抑制严重电压闪变（闪变值 $P_{st} < 0.8$），滤除 3 次、5 次恶性特征谐波，彻底免除国家电网高额谐波超标罚款。',
      },
      {
        title: '煤矿与金属矿山深井多兆瓦变频提升机、主通风机与空压机房',
        recommend: '选型推荐：10kV 直挂级联有源电力滤波器（俄标 ФСУ-10）+ 谐振主动自锁',
        reason: '直接滤除 12 脉波晶闸管变频器产生的大量 11 次与 13 次高频谐波，省去中间升压变压器，降低配电变压器温升达 18°C 以上。',
      },
      {
        title: '俄罗斯西伯利亚与远东弱受端电网（短路容量小 Ssc < 100MVA，-50°C 严寒 УХЛ1）',
        recommend: '选型推荐：极寒保温集装箱式混合滤波补偿装置 + 主动虚拟阻尼防谐振控制',
        reason: '在 -50°C 极寒工况下具备智能恒温除湿，主动阻尼算法彻底消除弱电网背景谐振放大风险，完全符合俄罗斯 ГОСТ 32144-2013 标准。',
      },
    ],
    ja: [
      {
        title: '製鉄アーク炉（EAF）・高周波誘導溶解炉（急変・高歪み負荷）',
        recommend: '推奨：飛馳 FE-HYBRID-PQ 25Mvar（70% FC無源 ＋ 30% アクティブSVG/APF）',
        reason: '5ms以下の超高速応答で電圧フリッカを抑制（Pst<0.8）、高調波違約金を完全回避。',
      },
      {
        title: '深部鉱山マルチメガワットインバータ巻上機・主扇風機',
        recommend: '推奨：10kV直結カスケードAPF（ФСУ-10）',
        reason: '昇圧トランス不要で11次・13次高調波を直接除去し、トランス発熱を18℃低減。',
      },
      {
        title: 'ロシア・シベリア弱小系統 (-50℃ УХЛ1 酷寒環境)',
        recommend: '推奨：極寒コンテナ型ハイブリッドFC/APF装置＋能動ダンピング',
        reason: '短絡容量が小さい弱系統でも共振増幅を完全ゼロ化。',
      },
    ],
    es: [
      {
        title: 'Hornos Metalúrgicos de Arco Eléctrico (EAF) y Hornos de Inducción',
        recommend: 'Recomendación: Sistema Híbrido Feichi FE-HYBRID-PQ 25Mvar (70% FC-35 + 30% SVG/APF)',
        reason: 'Respuesta dinámica en < 5ms que elimina el parpadeo de tensión (flicker Pst < 0.8) y penalizaciones tarifarias.',
      },
      {
        title: 'Malacates Mineros de Gran Potencia con Variadores de Frecuencia VFD',
        recommend: 'Recomendación: Filtro Activo APF 10kV en Cascada Directa (ФСУ-10)',
        reason: 'Elimina armónicos 11° y 13° sin transformador elevador, reduciendo el sobrecalentamiento del transformador.',
      },
      {
        title: 'Redes Débiles en Siberia con Baja Potencia de Cortocircuito (-50°C УХЛ1)',
        recommend: 'Recomendación: Módulo Contenedorizado Ártico Híbrido FC/APF con Amortiguación Activa',
        reason: 'Evita la amplificación de armónicos en redes débiles operando a -50°C bajo norma GOST 32144.',
      },
    ],
    ru: [
      {
        title: 'Дуговые сталеплавильные печи (ДСП) и индукционные плавильные комплексы',
        recommend: 'Рекомендация: Фильтрокомпенсирующее устройство Feichi FE-HYBRID-PQ 25 Мвар (70% ФКУ-35 + 30% СТАТКОМ/АФГ)',
        reason: 'Сверхбыстродействующая компенсация за время менее 5 мс подавляет фликер напряжения ($P_{st} < 0.8$), устраняет гармоники 3 и 5 порядков и исключает штрафы за качество электроэнергии.',
      },
      {
        title: 'Шахтные подъемные машины и главные вентиляторные установки с тиристорным ЧРП',
        recommend: 'Рекомендация: Активный фильтр гармоник ФСУ-10 прямого подключения 10 кВ с защитой от резонанса',
        reason: 'Эффективно устраняет 11 и 13 гармоники 12-пульсных приводов без установки повышающего трансформатора, снижая нагрев силовых трансформаторов на 18°C.',
      },
      {
        title: 'Слабые электрические сети промышленных узлов Сибири и Дальнего Востока ($S_{кз} < 100$ МВА, -50°C УХЛ1)',
        recommend: 'Рекомендация: Блок-модульное ФКУ-35 / ФСУ-10 в утепленном контейнере с активным демпфированием резонанса',
        reason: 'Надежная работа при -50°C с гарантированным исключением резонансного усиления фоновых гармоник сети в соответствии с ГОСТ 32144-2013.',
      },
    ],
  },
  hasCalculator: 'harmonic' as any,
  ctaTitle: {
    en: 'Need Power Quality Harmonic Simulation (ETAP/PSCAD) or Russian GOST Опросный лист for 10kV/35kV FKU/FSU?',
    zh: '需要获取 10kV/35kV 谐波治理仿真计算报告（ETAP/PSCAD）或俄标 Опросный лист 选型方案？',
    ja: '10kV/35kV 高調波シミュレーション解析書やロシアGOST問診票が必要ですか？',
    es: '¿Requiere Simulación de Calidad de Energía (ETAP/PSCAD) o Cuestionario GOST para ФКУ/ФСУ 10kV/35kV?',
    ru: 'Требуется расчет спектра гармоник (ETAP/PSCAD) или Опросный лист на фильтрокомпенсирующее устройство ФКУ-35 / ФСУ-10?',
  },
  ctaDesc: {
    en: 'Connect directly with technical lead Henry to receive complete harmonic spectrum analyses, resonance frequency sweep curves, single-line schematics, and Russian PJSC Rosseti certified commercial proposals within 24 hours.',
    zh: '直接与技术负责人 Henry 沟通，获取完整的谐波频谱分析报告、PCC 阻抗频扫共振曲线、一次单线图（SLD）及符合俄罗斯国家电网认证的正式报价单（24 小时内响应）。',
    ja: '技術責任者 Henry に直接ご連絡ください。高調波スペクトル解析、PCC共振周波数曲線、単線結線図（SLD）およびロシアRosseti認定見積書を24時間以内に提供します。',
    es: 'Contacte directamente con el líder técnico Henry para obtener análisis de espectro armónico, curvas de barrido de frecuencia en el PCC, diagramas unifilares y propuestas comerciales certificadas en 24 horas.',
    ru: 'Свяжитесь напрямую с техническим руководителем Henry для получения расчета спектра высших гармоник, частотных характеристик ТОП, однолинейных схем и коммерческого предложения по стандартам ПАО Россети в течение 24 часов.',
  },
};
