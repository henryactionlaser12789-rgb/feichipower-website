import type { WhitepaperItem } from './whitepapersData';

export const week31Whitepaper: WhitepaperItem = {
  id: 'week-31',
  week: 31,
  slug: '110kv-220kv-optical-electronic-current-voltage-transformer-guide',
  category: 'switchgear',
  categoryLabel: {
    en: '110kV–220kV Optical & Electronic Instrument Transformers (NCIT / ГОСТ Р МЭК 61869 / IEC 61869-9 / SV 9-2LE)',
    zh: '110kV–220kV 光电与电子式互感器工程选型白皮书（罗氏线圈/法拉第磁光效应/IEC 61869-9 SV 采样值 / 俄标 ЭТТ-110）',
    ja: '110kV〜220kV 光・電子式変成器（NCIT/IEC 61869-9/ロコフスキコイル・ファラデー効果/GOST R IEC 61869）設計指針',
    es: 'Transformadores de Medida Ópticos y Electrónicos 110kV–220kV (NCIT / Bobina Rogowski / IEC 61869-9 / SV 9-2LE)',
    ru: 'Оптические и электронные трансформаторы тока и напряжения 110-220 кВ ЭТТ-110, ЭТН-220 (IEC 61869-9 / МЭК 61850-9-2LE / ГОСТ Р 55153-2012)',
  },
  title: {
    en: '110kV–220kV Optical & Non-Conventional Electronic Instrument Transformers (NCIT: Rogowski Coil, Faraday Magneto-Optic & Pockels Electro-Optic Sensing) Technical Whitepaper: Zero Ferromagnetic Saturation Dynamics, IEC 61869-9 / IEC 61850-9-2LE Sampled Value (SV 4000Hz/4800Hz) Digital Merging Units, 0.2S Class Metrological Precision, and Siberian Arctic -50°C Fiber-Optic Thermal Derating (Benchmarking ABB FOCA, Trench Trench/Alstom, Russian Profotech & Pinggao)',
    zh: '110kV–220kV 光学与非常规电子式互感器（NCIT：罗氏线圈 Rogowski Coil、法拉第磁光效应 Faraday Effect 与普克尔斯电光效应 Pockels Effect）工程选型指南：零铁磁饱和磁滞消除模型、IEC 61869-9 / IEC 61850-9-2LE 采样值（SV 4000Hz/4800Hz）数字合并单元架构、0.2S 级宽量程计量精度与西伯利亚 -50°C 极寒光纤铠装热膨胀补偿（深度对标瑞士 ABB FOCA、德国 Trench/Alstom、俄罗斯 ЗАО «Профотек» 与平高电气）',
    ja: '110kV〜220kV 光・電子式変成器（NCIT：ロコフスキコイル、ファラデー磁気光学効果、ポッケルス電気光学効果）完全設計技術白書：強磁性飽和ゼロ動的モデル、IEC 61869-9 / IEC 61850-9-2LE サンプリング値（SV 4000Hz/4800Hz）マージングユニット、0.2S級広域計測精度およびシベリア-50℃極寒光ファイバー熱補償（ABB FOCA、Trench/Alstom、ロシアProfotechベンチマーク）',
    es: 'Transformadores de Medida Ópticos y Electrónicos no Convencionales 110kV–220kV (NCIT: Bobina Rogowski, Efecto Faraday y Pockels): Eliminación de Saturación Ferromagnética, Unidades de Mezcla IEC 61869-9 / IEC 61850-9-2LE (SV 4000Hz/4800Hz), Precisión Clase 0.2S y Compensación Térmica Ártica a -50°C',
    ru: 'Техническое руководство по оптическим и электронным трансформаторам тока и напряжения (NCIT) 110-220 кВ: пояс Роговского, магнитооптический эффект Фарадея и электрооптический эффект Поккельса, исключение феррорезонанса и насыщения сердечника, цифровые блоки объединения (Merging Unit) IEC 61869-9 / МЭК 61850-9-2LE (потоки SV 4000/4800 Гц), класс точности 0.2S и работа при -50°C (Бенчмарк ABB FOCA, Trench/Alstom, АО Профотек и Pinggao)',
  },
  eyebrow: {
    en: 'DIGITAL SUBSTATION NCIT & OPTICAL SENSING (IEC 61869-9 / IEC 61850-9-2LE / ГОСТ Р 55153-2012 / СТО РОССЕТИ)',
    zh: 'FE-SPEC-31 · 110kV–220kV 光电与电子式互感器及数字化变电站合并单元专论（IEC 61869-9 / IEC 61850-9-2LE / ГОСТ Р 55153）',
    ja: 'FE-SPEC-31 · 110kV〜220kV 光・電子式変成器およびデジタル変電所プロセスバス仕様書（IEC 61869-9 / IEC 61850-9-2LE）',
    es: 'FE-SPEC-31 · DOSSIER DE TRANSFORMADORES ÓPTICOS Y SUBESTACIÓN DIGITAL (IEC 61869-9 / IEC 61850-9-2LE / GOST)',
    ru: 'FE-SPEC-31 · РУКОВОДСТВО ПО ОПТИЧЕСКИМ ТРАНСФОРМАТОРАМ ЭТТ-110, ЭТН-220 (ГОСТ Р 55153-2012 / СТО РОССЕТИ 56947007-29.240.10.191-2014)',
  },
  author: {
    en: 'Feichi High-Voltage Digital Substation & Optical Instrument Transformer Institute (Lead: Henry)',
    zh: '飞驰电气高压数字化变电站与光学传感互感器工程研究院（总工/外贸对接人：Henry）',
    ja: '飛馳電気 高圧デジタル変電所・光センサ変成器工学研究所（チーフ：Henry）',
    es: 'Instituto de Ingeniería de Subestaciones Digitales y Transformadores Ópticos Feichi (Líder: Henry)',
    ru: 'Инженерно-исследовательский институт цифровых подстанций и оптических трансформаторов Feichi Power (Гл. инженер: Henry)',
  },
  standards: 'IEC 61869-1 / IEC 61869-6 / IEC 61869-9 / IEC 61850-9-2LE / IEEE C37.92 / ГОСТ Р 55153-2012 / ГОСТ Р МЭК 61869-9-2018 / СТО 56947007-29.240.10.191-2014',
  readTime: {
    en: '26 min technical study (Includes Faraday Polarization Angle Calculations, Rogowski Mathematical Integrators, Sampled Values SV 9-2LE Network Modeling & Russian ЭТТ-110 Questionnaire)',
    zh: '26 分钟深度技术研读（含法拉第偏振旋转角积分模型、无铁芯罗氏线圈瞬态响应微积分方程、IEC 61850-9-2LE 光纤以太网抖动分析与俄标 ЭТТ-110 数字化选型表单）',
    ja: '26分 専門設計解説（ファラデー偏光回転角力学計算・ロコフスキコイル積分過渡応答・SV 9-2LEイーサネット遅延解析・ロシアETT-110選定問診票）',
    es: '26 min de lectura técnica (Incluye ecuaciones de rotación de polarización Faraday, integradores Rogowski, arquitectura de red SV 9-2LE y cuestionario oficial ЭТТ-110)',
    ru: '26 мин технического изучения (включая расчет угла фарадеевского вращения поляризации, дифференциальные уравнения пояса Роговского, джиттер Ethernet потоков SV 9-2LE по МЭК 61850-9-2LE и полный Опросный лист на оптический трансформатор тока ЭТТ-110)',
  },
  summary: {
    en: 'An authoritative technical whitepaper on 110kV and 220kV Optical & Non-Conventional Electronic Instrument Transformers (NCIT: Russian GOST series ETT-110, ETN-110, ETT-220, ETN-220; Chinese FE-NCIT-110/220 series) for next-generation smart digital substations, ultra-compact GIS switchgear, offshore wind platforms, and high-altitude mining networks. Benchmarking international leaders ABB (FOCA series), Trench Group / Alstom (NXCT), and Russian pioneer JSC Profotech (ЭТТ-110/ЭТН-110), this dossier delivers rigorous engineering analysis on: 1) Elimination of core ferromagnetic saturation, ferroresonance, and open-circuit CT secondary explosive overvoltages; 2) Faraday magneto-optic crystal and pure fiber spun-ring sensing physics; 3) Electronic Rogowski coil dynamic response ($di/dt > 100\\text{kA}/\\mu\\text{s}$) paired with low-drift DSP digital integrators; 4) Process Bus merging units broadcasting IEC 61869-9 / IEC 61850-9-2LE Sampled Value (SV) streams at 4000Hz (50Hz protection) and 4800Hz (60Hz metering) synchronized via IEEE 1588 PTP (Precision Time Protocol $\\le 1\\,\\mu\\text{s}$); 5) 0.2S metering accuracy maintained across 1% to 120% rated current; 6) Siberian extreme -50°C thermal expansion compensated silicone composite insulators (creepage $\\ge 31\\text{ mm/kV}$); and 7) Complete PJSC Rosseti digital substation Опросный лист questionnaire templates.',
    zh: '系统阐述 110kV 与 220kV 光学及非常规电子式电流/电压互感器（NCIT：俄标 ЭТТ-110, ЭТН-110, ЭТТ-220, ЭТН-220 系列；飞驰 FE-NCIT-110/220 系列）在现代数字智能变电站（Digital Substation）、高压 GIS 气体绝缘组合电器、海上风电升压站及高寒矿山电网中的核心传感机理与工程选型规范。深度对标瑞士 ABB（FOCA 纯光互感器）、德国 Trench / Alstom（NXCT 系列）以及俄罗斯国家电网数字化先驱圣彼得堡 ЗАО «Профотек»（ЭТТ/ЭТН 系列），重点解析：1）彻底根除传统电磁式 CT 的铁芯磁饱和、铁磁谐振过电压及二次侧开路高压放电爆炸隐患；2）基于法拉第磁光效应（Faraday Magneto-Optic Effect）的偏振光纤环传感物理模型；3）无铁芯罗氏线圈（Rogowski Coil）高频瞬态响应（$di/dt > 100\\text{kA}/\\mu\\text{s}$）与自适应微积分数字滤波算法；4）过程层数字合并单元（Merging Unit, MU）基于 IEC 61869-9 与 IEC 61850-9-2LE 标准发布 4000Hz（50Hz 保护）/ 4800Hz（60Hz 计量）点对点光纤以太网采样值（SV）报文，结合 IEEE 1588v2 PTP 精确时钟纳秒级同步（对时抖动 $\\le 1\\,\\mu\\text{s}$）；5）全温度与全量程范围内实现 0.2S 级超高精度电能计量；6）西伯利亚 -50°C 极寒工况下特种耐低温光纤铠装与硅橡胶复合套管热膨胀力学自补偿；以及 7）符合俄罗斯国家电网 ПАО «Россети» 与海关联盟 ТР ТС 004/2011 认证的《Опросный лист на оптический трансформатор тока и напряжения ЭТТ-110 / ЭТН-110》数字化变电站选型技术规范。',
    ja: '110kV/220kV 光・電子式変成器（NCIT：ロシアGOST ЭТТ-110/ЭТН-110/ЭТТ-220、飛馳FE-NCIT-110）の完全設計解説書。ABB FOCA、Trench NXCT、ロシアProfotech ЭТТ-110をベンチマークし、強磁性鉄芯飽和および二次側開放高圧爆発の根絶、ファラデー効果偏光ファイバーセンシング、ロコフスキコイル高周波過渡応答、IEC 61869-9 / IEC 61850-9-2LEサンプリング値（SV 4000/4800Hz）マージングユニット（MU）IEEE 1588v2 PTP同期（≤1μs）、0.2S級広域高精度計測、シベリア-50℃極寒光ファイバー熱補償複合がいし、およびロシアRosseti標準Опросный лист問診票を網羅。',
    es: 'Expediente técnico de Transformadores de Medida Ópticos y Electrónicos no Convencionales 110kV-220kV (NCIT: ЭТТ-110 / ЭТН-110 / FE-NCIT-110) para subestaciones digitales y parques eólicos. Analiza la eliminación de saturación ferromagnética y ferroresonancia, sensores de fibra óptica por efecto Faraday, bobinas Rogowski con respuesta ultra-rápida, unidades de mezcla Merging Unit (MU) bajo IEC 61869-9 y IEC 61850-9-2LE (SV 4000Hz/4800Hz) con sincronización PTP IEEE 1588v2 (≤1μs), precisión 0.2S, operación en Siberia a -50°C y cuestionarios oficiales de licitación.',
    ru: 'Полное техническое руководство по оптическим и электронным трансформаторам тока и напряжения (NCIT) наружной установки и для КРУЭ серии ЭТТ-110, ЭТН-110, ЭТТ-220 на напряжение 110-220 кВ по стандартам МЭК 61869-9, МЭК 61850-9-2LE и ГОСТ Р 55153-2012 для цифровых подстанций. Рассмотрены: абсолютное исключение насыщения железа и феррорезонанса, волоконно-оптические датчики тока на эффекте Фарадея, пояса Роговского с цифровыми интеграторами, блоки объединения Merging Unit (потоки SV 4000/4800 Гц по оптическому Ethernet) с синхронизацией PTP IEEE 1588v2, класс точности 0.2S в диапазоне 1%-120% тока, эксплуатация при температуре до -50°C (УХЛ1) и полный Опросный лист ПАО Россети.',
  },
  sec1Title: {
    en: '1. Sensor Physics: Faraday Magneto-Optic vs Rogowski Coil vs Traditional Iron-Core Electromagnetic CT',
  zh: '1. 传感机理拓扑：法拉第偏振磁光效应 vs 罗氏线圈 Rogowski Coil vs 传统电磁式铁芯 CT 深度对比',
    ja: '1. センシング原理比較：ファラデー磁気光学効果 vs ロコフスキコイル vs 従来型電磁式変流器',
    es: '1. Física de Detección: Efecto Magneto-Óptico Faraday vs Bobina Rogowski vs TC Convencional',
    ru: '1. Физические принципы измерений: магнитооптический эффект Фарадея vs пояс Роговского vs традиционный электромагнитный ТТ',
  },
  sec1Text: {
    en: `Conventional electromagnetic current transformers (CTs) with laminated silicon steel cores suffer from fundamental physical limitations: saturation during short circuits with high DC offset ($X/R > 30$), risk of catastrophic explosion if secondary terminals are open-circuited ($V_{open} > 5\\text{kV}$), and heavy weight ($> 800\\text{ kg}$ for 220kV poles).

**Optical & Electronic Instrument Transformer (NCIT) Principles**:
1. **Pure Fiber-Optic Faraday Magneto-Optic Current Sensor (Feichi FE-OCT / Russian ЭТТ-110)**:
   - Polarized light from a superluminescent diode (SLD, $\\lambda = 1310\\text{ nm}$) propagates through a spun optical fiber coil looped around the high-voltage conductor ($N$ turns).
   - The magnetic field generated by the primary current $i(t)$ induces a circular birefringence, rotating the polarization plane by angle $\\theta_F$:
     $$\\theta_F = V_L \\oint \\vec{B} \\cdot \\mathrm{d}\\vec{l} = V_L \\cdot \\mu_0 \\cdot N \\cdot i(t)$$
   - Where $V_L$ is the Verdet constant of the silica fiber ($V_L \\approx 0.75\\text{ rad}/(\\text{T}\\cdot\\text{m})$ at $1310\\text{ nm}$).
   - **Advantage**: Zero magnetic saturation, wide dynamic bandwidth ($0\\text{ Hz} \\sim 500\\text{ kHz}$), complete electrical insulation via dielectric glass fiber, and explosion-proof.
2. **Electronic Non-Iron Rogowski Coil Current Sensor (Feichi FE-RCT)**:
   - An air-cored toroidal solenoid wrapped uniformly around the conductor produces an output voltage proportional to the rate of change of primary current:
     $$e_{rog}(t) = -M \\frac{\\mathrm{d}i(t)}{\\mathrm{d}t} = -\\frac{\\mu_0 \\cdot N \\cdot A_{loop}}{2\\pi r} \\frac{\\mathrm{d}i(t)}{\\mathrm{d}t}$$
   - Paired with an FPGA hardware digital integrator, it reproduces instantaneous current without saturation up to $I_{peak} = 150\\text{kA}$.
3. **Pockels Electro-Optic / Resistive-Capacitive Voltage Sensor (Feichi FE-OVT / Russian ЭТН-110)**:
   - Employs electro-optic crystal birefringence ($V_{out} \\propto E_{field}$) or precision gas-insulated capacitive dividers providing true linear voltage replication up to $220\\text{kV}$.`,
    zh: `传统油浸式与气体绝缘电磁式电流互感器（CT）采用硅钢片铁芯结构，存在三大固有致命物理缺陷：在电网短路伴随高直流分量（$X/R > 30$）时铁芯发生深度磁饱和导致继电保护拒动/误动；二次回路意外开路时产生超过 $5\\text{kV}$ 的致命高压并引发绝缘热击穿爆炸；高压设备自重极大（220kV 瓷套 CT 重量常超 $800\\text{ kg}$）。

**光学与电子式互感器（NCIT）核心物理传感机制**：
1. **全光纤法拉第磁光效应电流传感（飞驰 FE-OCT / 俄标 ЭТТ-110 系列）**：
   - 采用超辐射发光二极管（SLD，工作波长 $\\lambda = 1310\\text{ nm}$）发射线偏振光，通过特种保偏光纤注入环绕高压主导电母线的敏感光纤环（绕制 $N$ 匝）；
   - 一次大电流 $i(t)$ 激发环向磁场，使穿过光纤的左旋与右旋圆偏振光产生相位差，导致偏振光振动面发生法拉第偏振旋转角 $\\theta_F$：
     $$\\theta_F = V_L \\oint \\vec{B} \\cdot \\mathrm{d}\\vec{l} = V_L \\cdot \\mu_0 \\cdot N \\cdot i(t)$$
   - 其中 $V_L$ 为石英光纤在 $1310\\text{ nm}$ 下的费尔德常数（Verdet Constant，约为 $0.75\\text{ rad}/(\\text{T}\\cdot\\text{m})$）；
   - **工程优势**：无铁芯物理饱和、动态频响宽达 $0\\text{ Hz} \\sim 500\\text{ kHz}$（可无失真采集高频行波与高次谐波）、高压与二次侧纯光纤介质完全电气隔离、彻底杜绝燃爆风险。
2. **无铁芯空心罗氏线圈电子式互感器（飞驰 FE-RCT 系列）**：
   - 采用无磁性骨架均匀密绕环形螺线管，输出电压直接正比于一次电流变化率：
     $$e_{rog}(t) = -M \\frac{\\mathrm{d}i(t)}{\\mathrm{d}t} = -\\frac{\\mu_0 \\cdot N \\cdot A_{loop}}{2\\pi r} \\frac{\\mathrm{d}i(t)}{\\mathrm{d}t}$$
   - 后端配合高速 FPGA 硬件数字积分器，在 $I_{peak} = 150\\text{kA}$ 峰值冲击电流下保持 $100\\%$ 线性度，无剩磁滞后。
3. **普克尔斯电光效应与阻容分压电子式电压互感器（飞驰 FE-OVT / 俄标 ЭТН-110 系列）**：
   - 利用 BGO 晶体在电场作用下的双折射效应或超高稳定度温度补偿阻容分压拓扑，实现 110kV/220kV 高压电场的线性转换与测量。`,
    ja: '従来の電磁式変流器（CT）は、短絡時の鉄芯飽和、二次開放時の5kV以上の高圧爆発、および重量大（800kg以上）の課題があります。飛馳FE-OCT/ロシアЭТТ-110は、ファラデー効果による偏光回転（θ=V・B・L）を利用した全光ファイバーセンサを採用。鉄芯飽和ゼロ、500kHz広域周波数応答、完全光絶縁・防爆構造を実現。ロコフスキコイル型（FE-RCT）はdi/dt出力をFPGA積分器で瞬時復調し、150kAピーク電流でも直線性100%を維持します。',
    es: 'Los transformadores convencionales sufren de saturación ferromagnética en fallas con alta componente continua ($X/R > 30$), riesgo de explosión por circuito secundario abierto ($>5\\text{kV}$) y peso excesivo ($>800\\text{kg}$). El sensor de fibra óptica Feichi FE-OCT / ЭТТ-110 utiliza el efecto magneto-óptico Faraday (rotación $\\theta_F = V_L \\mu_0 N i(t)$), eliminando el núcleo de hierro y garantizando seguridad total. La bobina Rogowski FE-RCT mide $di/dt$ sin saturación hasta 150kA.',
    ru: 'Традиционные ТТ со стальными сердечниками насыщаются при переходных токах КЗ с апериодической составляющей ($X/R > 30$) и взрывоопасны при обрыве вторичной цепи. В оптических трансформаторах тока Feichi ЭТТ-110 (FE-OCT) используется эффект Фарадея в волоконном контуре: угол поворота плоскости поляризации $\\theta_F = V_L \\mu_0 N i(t)$ строго пропорционален току. Пояс Роговского FE-RCT генерирует ЭДС, пропорциональную $di/dt$, обеспечивая абсолютную линейность при токах КЗ до 150 кА.',
  },
  sec2Title: {
    en: '2. Process Bus Digital Architecture: IEC 61869-9 / IEC 61850-9-2LE Merging Unit & IEEE 1588 PTP Synchronization',
    zh: '2. 数字化变电站过程层架构：IEC 61869-9 / IEC 61850-9-2LE 合并单元（Merging Unit）与 IEEE 1588 PTP 精确对时',
    ja: '2. プロセスバスデジタル構造：IEC 61869-9 / IEC 61850-9-2LE マージングユニット（MU）および IEEE 1588 PTP 同期',
    es: '2. Arquitectura de Bus de Proceso: Merging Unit IEC 61869-9 / IEC 61850-9-2LE y Sincronización IEEE 1588 PTP',
    ru: '2. Архитектура шины процесса: блоки объединения (Merging Unit) по МЭК 61869-9 / МЭК 61850-9-2LE и PTP IEEE 1588',
  },
  sec2Text: {
    en: `Digital substations eliminate tons of bulky high-voltage copper control cables by converting sensor analog/optical signals into standardized Ethernet Sampled Value (SV) multicast packets right inside the outdoor switchyard merging unit (MU).

**IEC 61869-9 / IEC 61850-9-2LE Merging Unit Standards**:
1. **Dual SV Stream Sampling Rates**:
   - **Protection Stream (ASDUs = 1)**: 80 samples/cycle (4000 Hz at 50Hz grid; 4800 Hz at 60Hz grid) with latency $\\le 1.5\\text{ ms}$, feeding digital protective relays (Feichi FE-PROT, ABB Relion 670, Siemens SIPROTEC 5).
   - **Revenue Metering & Power Quality Stream (ASDUs = 8)**: 256 samples/cycle (12.8 kHz / 15.36 kHz) ensuring 0.2S class revenue metering and harmonic detection up to the 50th harmonic order.
2. **IEEE 1588v2 PTP / IEC 61850-9-3 Precision Clock Synchronization**:
   - Transparent Clock / Boundary Clock hardware timestamping with time alignment jitter $\\Delta t_{sync} \\le 100\\text{ ns}$, guaranteeing phase angle measurement error $\\Delta \\phi \\le 0.1^\\circ$ across all bay merging units.
3. **Redundant Optical Ethernet Topologies**:
   - Zero-packet-loss dual-redundant IEC 62439-3 PRP (Parallel Redundancy Protocol) and HSR (High-availability Seamless Redundancy) 100Base-FX LC optical fiber interfaces.`,
    zh: `数字化智能变电站通过在户外高压开关场就地部署合并单元（Merging Unit, MU），将光学/电子互感器采集的原生信号在一次设备侧就地转换为数字化以太网采样值（SV）报文，彻底取消了传统变电站成百上千根昂贵、沉重且易受雷击浪涌干扰的高压铜芯二次控制电缆。

**IEC 61869-9 与 IEC 61850-9-2LE 合并单元核心规范**：
1. **双采样速率以太网光纤组播通道**：
   - **继电保护采样流（Protection SV，1 ASDU/帧）**：每工频周期 80 点（50Hz 电网下为 4000 Hz；60Hz 电网下为 4800 Hz），传输延迟严格锁定在 $\\le 1.5\\text{ ms}$ 以内，直供微机保护装置（飞驰 FE-PROT、ABB Relion 670、西门子 SIPROTEC 5、俄罗斯 ЭКРА-200）；
   - **关口电能计量与电能质量采样流（Metering SV，8 ASDU/帧）**：每周期 256 点（12.8 kHz / 15.36 kHz），全面满足 0.2S 级关口计量及高达 50 次谐波高精度监测。
2. **IEEE 1588v2 PTP / IEC 61850-9-3 纳秒级高精度时钟同步**：
   - 采用硬件时间戳透明时钟（TC）与边界时钟（BC）技术，全网合并单元对时同步抖动 $\\Delta t_{sync} \\le 100\\text{ ns}$，相角测量误差 $\\Delta \\phi \\le 0.1^\\circ$。
3. **零丢包双网冗余以太网物理层架构**：
   - 标配符合 IEC 62439-3 标准的双网冗余 PRP（并行冗余协议）与环网 HSR（高可用无缝冗余）100Base-FX 多模/单模 LC 光纤接口，单网断纤时实现零毫秒无扰动切换。`,
    ja: 'デジタル変電所では、屋外マージングユニット（MU）がアナログ信号を光ファイバーSVパケットに直接変換し、膨大な銅ケーブルを完全排除。保護用SV（80サンプル/サイクル、4000Hz、遅延≤1.5ms）と計量用SV（256サンプル/サイクル、12.8kHz）のデュアルストリームを出力。IEEE 1588v2 PTP同期により全ステーション同期ジッタ≤100nsを実現。IEC 62439-3 PRP/HSR冗長化により断線時ゼロ秒切替を保証します。',
    es: 'La subestación digital elimina los cables de control de cobre convirtiendo las señales en tramas Ethernet Sampled Values (SV) mediante Unidades de Mezcla (Merging Unit). Proporciona tramas para protección (80 muestras/ciclo, 4000Hz, latencia ≤1.5ms) y tramas para facturación (256 muestras/ciclo, 12.8kHz clase 0.2S). Sincronización PTP IEEE 1588v2 con jitter ≤100ns y redundancia sin pérdida PRP/HSR bajo IEC 62439-3.',
    ru: 'В цифровых подстанциях блоки объединения (Merging Unit) оцифровывают сигналы датчиков тока и напряжения и передают их в оптическую шину процесса по стандарту МЭК 61850-9-2LE / МЭК 61869-9. Поток релейной защиты формируется со скоростью 80 выборок на период (4000 Гц при 50 Гц, задержка $\\le 1.5$ мс), а поток учета электроэнергии — 256 выборок на период (12.8 кГц, класс 0.2S). Синхронизация выполняется по протоколу PTP IEEE 1588v2 (джиттер менее 100 нс). Резервирование каналов обеспечивается по стандартам PRP и HSR (IEC 62439-3).',
  },
  sec3Title: {
    en: '3. Technical Benchmarking Matrix: Feichi FE-NCIT-110/220 vs. ABB FOCA vs. Trench/Alstom NXCT vs. Russian Profotech ETT-110',
    zh: '3. 国际顶级光学与电子式互感器核心技术参数深度对标表：飞驰 FE-NCIT-110/220 vs. 瑞士 ABB FOCA vs. 德国 Trench NXCT vs. 俄罗斯 ЗАО Профотек ЭТТ-110',
    ja: '3. 国際トップ光学・電子式変成器技術仕様比較：飛馳 FE-NCIT-110 vs. ABB FOCA vs. Trench NXCT vs. ロシア Profotech ETT-110',
    es: '3. Matriz de Benchmarking Técnico: Feichi FE-NCIT-110/220 vs. ABB FOCA vs. Trench NXCT vs. Profotech ЭТТ-110 (Rusia)',
    ru: '3. Сравнительная матрица параметров: Feichi FE-NCIT-110 (ЭТТ-110) vs. ABB FOCA vs. Trench NXCT vs. АО Профотек ЭТТ-110',
  },
  tableHeaders: {
    en: ['Technical Specification & Parameter', 'Feichi FE-NCIT-110/220 (УХЛ1)', 'ABB FOCA 145/245 (Hitachi Energy)', 'Trench / Alstom NXCT 110-220', 'Russian ЗАО Профотек ЭТТ-110/220'],
    zh: ['核心技术参数 / 性能维度', '飞驰电气 FE-NCIT-110/220 (УХЛ1)', '瑞士 ABB FOCA 145/245 系列', '德国 Trench / Alstom NXCT 系列', '俄罗斯 ЗАО Профотек ЭТТ-110/220'],
    ja: ['技術仕様・性能パラメータ', '飛馳電気 FE-NCIT-110/220 (УХЛ1)', 'ABB FOCA 145/245 光CT', 'Trench NXCT 複合変成器', 'ロシア Profotech ETT-110/220'],
    es: ['Parámetro Técnico', 'Feichi FE-NCIT-110/220 (УХЛ1)', 'ABB FOCA 145/245 (Hitachi)', 'Trench NXCT 110-220', 'Profotech ЭТТ-110/220 (Rusia)'],
    ru: ['Технический параметр', 'Feichi FE-NCIT-110 / ЭТТ-110 УХЛ1', 'ABB FOCA 145/245 (Hitachi Energy)', 'Trench / Alstom NXCT 110-220', 'АО Профотек ЭТТ-110 / ЭТН-110'],
  },
  tableRows: {
    en: [
      ['Primary Rated Voltage (Ur)', '110 kV, 126 kV, 220 kV, 252 kV', '110 kV, 145 kV, 245 kV', '110 kV, 123 kV, 245 kV', '110 kV, 220 kV (ГОСТ 1516.3)'],
      ['Sensing Physics Topology', 'Pure Fiber Faraday Magneto-Optic + Rogowski Coil', 'Pure Fiber-Optic Faraday Polarimetric', 'Hybrid Electro-Optic Crystal Sensor', 'Fiber-Optic Spun Magneto-Optic Faraday'],
      ['Rated Continuous Current (Ir)', '1250 A, 2000 A, 3150 A, 4000 A', '1250 A, 2500 A, 4000 A', '1250 A, 2000 A, 3150 A', '1000 A, 2000 A, 3150 A'],
      ['Short-Circuit Dynamic Peak (Ipeak)', '100 kA / 125 kA Peak (0% Saturation)', '100 kA / 125 kA Peak', '80 kA / 100 kA Peak', '100 kA / 125 kA Peak'],
      ['Short-Time Thermal Current (Icw)', '40 kA / 3s, 50 kA / 3s', '40 kA / 3s, 50 kA / 3s', '31.5 kA / 3s, 40 kA / 3s', '40 kA / 3s (ГОСТ Р 55153)'],
      ['Metering Accuracy Class', '0.2S Class (IEC 61869-2 / GOST 7746)', '0.2S Class', '0.2 Class', '0.2S Class (ГОСТ Р МЭК 61869-2)'],
      ['Protection Transient Class', '5TPE / 0.2 TPE (IEC 61869-2)', '5TPE', '5TPE', '5TPE / 0.5 TPE'],
      ['Digital Process Bus Protocol', 'IEC 61869-9 / IEC 61850-9-2LE (SV 4000/4800Hz)', 'IEC 61850-9-2LE / IEC 61869-9', 'IEC 61850-9-2LE SV 80/256', 'МЭК 61850-9-2LE (SV 4000/4800 Гц)'],
      ['Time Synchronization Standard', 'IEEE 1588v2 PTP / 1PPS Optical (Jitter < 100ns)', 'IEEE 1588v2 PTP (IEC 61850-9-3)', 'IEEE 1588v2 PTP / IRIG-B', 'PTP IEEE 1588v2 / 1PPS / ГОСТ'],
      ['Ambient Climate Rating', '-50°C to +55°C (GOST 15150-69 УХЛ1 Siberian)', '-40°C to +50°C', '-40°C to +50°C', '-50°C to +50°C (УХЛ1)'],
      ['External Insulation & Creepage', 'Silicone Composite Housing (≥ 31 mm/kV Class IV)', 'Silicone Rubber Composite', 'Porcelain or Silicone Composite', 'Полимерная изоляция (≥ 3.1 см/кВ)'],
      ['Total Unit Weight (110kV Pole)', '~65 kg (Saves 88% Weight vs Oil CT)', '~75 kg', '~95 kg', '~70 kg'],
    ],
    zh: [
      ['额定最高工作电压 (Ur)', '110 kV, 126 kV, 220 kV, 252 kV', '110 kV, 145 kV, 245 kV', '110 kV, 123 kV, 245 kV', '110 kV, 220 kV (ГОСТ 1516.3)'],
      ['核心物理传感拓扑', '全光纤法拉第磁光效应 + 罗氏线圈双冗余', '全光纤偏振法拉第磁光效应', '混合式电光晶体传感', '特种保偏光纤环法拉第效应'],
      ['额定连续通电电流 (Ir)', '1250 A, 2000 A, 3150 A, 4000 A', '1250 A, 2500 A, 4000 A', '1250 A, 2000 A, 3150 A', '1000 A, 2000 A, 3150 A'],
      ['额定峰值耐受电流 (Ipeak)', '100 kA / 125 kA 峰值（0% 磁饱和失真）', '100 kA / 125 kA 峰值', '80 kA / 100 kA 峰值', '100 kA / 125 kA 峰值'],
      ['额定短时耐受电流 (Icw)', '40 kA / 3s, 50 kA / 3s 动热稳定', '40 kA / 3s, 50 kA / 3s', '31.5 kA / 3s, 40 kA / 3s', '40 kA / 3s (ГОСТ Р 55153)'],
      ['关口电能计量精度等级', '0.2S 级宽量程计量（IEC 61869-2 / 国标）', '0.2S 级', '0.2 级', '0.2S 级（ГОСТ Р МЭК 61869-2）'],
      ['继电保护暂态特性等级', '5TPE / 0.2 TPE 瞬态无延迟线性重现', '5TPE 级', '5TPE 级', '5TPE / 0.5 TPE 级'],
      ['数字化过程层通信协议', 'IEC 61869-9 / IEC 61850-9-2LE (SV 4000/4800Hz)', 'IEC 61850-9-2LE / IEC 61869-9', 'IEC 61850-9-2LE SV 80/256', 'МЭК 61850-9-2LE (SV 4000/4800 Гц)'],
      ['高精度时钟对时标准', 'IEEE 1588v2 PTP / 1PPS 光纤（抖动 < 100ns）', 'IEEE 1588v2 PTP (IEC 61850-9-3)', 'IEEE 1588v2 PTP / IRIG-B', 'PTP IEEE 1588v2 / 1PPS / ГОСТ'],
      ['极端环境气候耐受评级', '-50°C 至 +55°C（俄标 УХЛ1 极寒高纬度认证）', '-40°C 至 +50°C', '-40°C 至 +50°C', '-50°C 至 +50°C (УХЛ1 极寒型)'],
      ['外绝缘与爬电比距配置', '硅橡胶复合绝缘套管（爬电比距 ≥ 31 mm/kV IV级）', '硅橡胶复合套管', '瓷套或复合套管', 'Полимерная изоляция (≥ 3.1 см/кВ)'],
      ['单极整机自重 (110kV)', '约 65 kg（较传统油浸 CT 减重 88%）', '约 75 kg', '约 95 kg', '约 70 kg'],
    ],
    ja: [
      ['定格電圧 (Ur)', '110 kV, 126 kV, 220 kV, 252 kV', '110 kV, 145 kV, 245 kV', '110 kV, 123 kV, 245 kV', '110 kV, 220 kV'],
      ['センシング原理', '全光ファイバーファラデー効果＋ロコフスキコイル', '全光ファイバー偏光ファラデー効果', 'ハイブリッド電光結晶センサ', '偏光光ファイバーファラデー効果'],
      ['定格電流 (Ir)', '1250A 〜 4000A', '1250A 〜 4000A', '1250A 〜 3150A', '1000A 〜 3150A'],
      ['ピーク耐電流 (Ipeak)', '100 kA / 125 kA ピーク（飽和0%）', '100 kA / 125 kA ピーク', '80 kA / 100 kA ピーク', '100 kA / 125 kA ピーク'],
      ['計量精度クラス', '0.2S 級広域計量精度', '0.2S 級', '0.2 級', '0.2S 級'],
      ['デジタル通信規格', 'IEC 61869-9 / IEC 61850-9-2LE (SV 4000Hz)', 'IEC 61850-9-2LE', 'IEC 61850-9-2LE', 'МЭК 61850-9-2LE'],
      ['時刻同期規格', 'IEEE 1588v2 PTP（ジッタ < 100ns）', 'IEEE 1588v2 PTP', 'IEEE 1588v2 PTP', 'PTP IEEE 1588v2'],
      ['耐寒環境定格', '-50°C 〜 +55°C (ロシア УХЛ1 適合)', '-40°C 〜 +50°C', '-40°C 〜 +50°C', '-50°C 〜 +50°C (УХЛ1)'],
      ['製品重量 (110kV)', '約 65 kg (油入CT比 88% 削減)', '約 75 kg', '約 95 kg', '約 70 kg'],
    ],
    es: [
      ['Tensión Nominal (Ur)', '110 kV, 126 kV, 220 kV, 252 kV', '110 kV, 145 kV, 245 kV', '110 kV, 123 kV, 245 kV', '110 kV, 220 kV'],
      ['Principio de Medida', 'Fibra Óptica Efecto Faraday + Bobina Rogowski', 'Fibra Óptica Efecto Faraday', 'Cristal Electro-Óptico', 'Fibra Óptica Magneto-Óptica'],
      ['Corriente Nominal (Ir)', '1250 A a 4000 A', '1250 A a 4000 A', '1250 A a 3150 A', '1000 A a 3150 A'],
      ['Corriente Pico (Ipeak)', '100 kA / 125 kA Pico (Saturación 0%)', '100 kA / 125 kA Pico', '80 kA / 100 kA Pico', '100 kA / 125 kA Pico'],
      ['Clase de Precisión', 'Clase 0.2S (IEC 61869-2)', 'Clase 0.2S', 'Clase 0.2', 'Clase 0.2S'],
      ['Protocolo Bus de Proceso', 'IEC 61869-9 / IEC 61850-9-2LE (SV)', 'IEC 61850-9-2LE', 'IEC 61850-9-2LE', 'МЭК 61850-9-2LE'],
      ['Sincronización PTP', 'IEEE 1588v2 PTP (Jitter < 100ns)', 'IEEE 1588v2 PTP', 'IEEE 1588v2 PTP', 'PTP IEEE 1588v2'],
      ['Rango de Temperatura', '-50°C a +55°C (Clima Ártico УХЛ1)', '-40°C a +50°C', '-40°C a +50°C', '-50°C a +50°C (УХЛ1)'],
      ['Peso del Equipo (110kV)', '~65 kg (88% menor que TC en Aceite)', '~75 kg', '~95 kg', '~70 kg'],
    ],
    ru: [
      ['Номинальное напряжение (Uном)', '110 кВ, 126 кВ, 220 кВ, 252 кВ', '110 кВ, 145 кВ, 245 кВ', '110 кВ, 123 кВ, 245 кВ', '110 кВ, 220 кВ (ГОСТ 1516.3)'],
      ['Принцип измерения тока', 'Волоконно-оптический эффект Фарадея + пояс Роговского', 'Волоконно-оптический поляриметрический', 'Электрооптический датчик', 'Волоконно-оптический датчик Фарадея'],
      ['Номинальный ток (Iном)', '1250 А, 2000 А, 3150 А, 4000 А', '1250 А, 2500 А, 4000 А', '1250 А, 2000 А, 3150 А', '1000 А, 2000 А, 3150 А'],
      ['Электродинамическая стойкость (iдин)', '100 кА / 125 кА (0% насыщения при КЗ)', '100 кА / 125 кА', '80 кА / 100 кА', '100 кА / 125 кА'],
      ['Термическая стойкость (Iтерм / 3с)', '40 кА / 3 с, 50 кА / 3 с', '40 кА / 3 с, 50 кА / 3 с', '31.5 кА / 3 с, 40 кА / 3 с', '40 кА / 3 с (ГОСТ Р 55153)'],
      ['Класс точности для учета', 'Класс 0.2S (ГОСТ Р МЭК 61869-2 / IEC)', 'Класс 0.2S', 'Класс 0.2', 'Класс 0.2S (ГОСТ Р 55153-2012)'],
      ['Класс точности для защиты', '5TPE / 0.2 TPE (без искажения апериодики)', '5TPE', '5TPE', '5TPE / 0.5 TPE'],
      ['Протокол шины процесса', 'МЭК 61869-9 / МЭК 61850-9-2LE (SV 4000/4800 Гц)', 'МЭК 61850-9-2LE / МЭК 61869-9', 'МЭК 61850-9-2LE SV 80/256', 'МЭК 61850-9-2LE (SV 4000/4800 Гц)'],
      ['Синхронизация времени', 'PTP IEEE 1588v2 / 1PPS (джиттер < 100 нс)', 'IEEE 1588v2 PTP (IEC 61850-9-3)', 'IEEE 1588v2 PTP / IRIG-B', 'PTP IEEE 1588v2 / 1PPS / ГОСТ'],
      ['Климатическое исполнение', '-50°C...+55°C (ГОСТ 15150-69 УХЛ1 для Сибири)', '-40°C...+50°C', '-40°C...+50°C', '-50°C...+50°C (УХЛ1)'],
      ['Внешняя изоляция и длина пути утечки', 'Кремнийорганическая резина (≥ 3.1 см/кВ IV СЗРИ)', 'Полимерная изоляция', 'Фарфор или полимер', 'Полимерная изоляция (≥ 3.1 см/кВ)'],
      ['Масса одной фазы (110 кВ)', '~65 кг (на 88% легче масляного ТТ)', '~75 кг', '~95 кг', '~70 кг'],
    ],
  },
  sec4Title: {
    en: '4. Scenario-Based Application Decision Guide: Smart Digital Substations, Offshore Wind & Siberian Mining',
    zh: '4. 重点应用场景工程选型与系统集成决策指南',
    ja: '4. 適用産業別選定マトリクス：スマート変電所・洋上風力・シベリア極寒鉱山',
    es: '4. Guía de Decisión por Sector: Subestaciones Digitales, Eólica Marina y Minería Ártica',
    ru: '4. Руководство по выбору оборудования: цифровые подстанции МЭК 61850, ветропарки и горнодобывающие предприятия Сибири',
  },
  scenarios: {
    en: [
      {
        title: 'Next-Gen Digital Smart Transmission Substations (110kV/220kV IEC 61850 Process Bus)',
        recommend: 'Recommendation: Feichi FE-NCIT-110/220 Pure Optical CT (ЭТТ-110) + PTP Merging Unit',
        reason: 'Direct fiber SV 9-2LE publishing eliminates copper secondary trenches, eliminates CT saturation in fast differential busbar relays, and cuts commissioning time by 60%.',
      },
      {
        title: 'Offshore Wind Booster Platforms & High-Rise Urban Substations',
        recommend: 'Recommendation: Compact GIS-Integrated Rogowski & Optical Transformer Module',
        reason: 'Cuts instrument transformer footprint and structural steel weight by >85%, immune to extreme electromagnetic interference and vibration.',
      },
      {
        title: 'Severe Arctic Siberian & CIS Mining Power Grids (-50°C УХЛ1)',
        recommend: 'Recommendation: Siberian Arctic Armored Fiber NCIT with Class IV Heavy Silicone Housing',
        reason: 'Operates with zero SF6 or insulating oil at -50°C, zero liquefaction or seal failure risks, fully certified under Russian GOST R 55153-2012.',
      },
    ],
    zh: [
      {
        title: '国家电网与跨国骨干输电网 110kV/220kV 新建/改造全数字智能变电站 (IEC 61850 过程层)',
        recommend: '选型推荐：飞驰 FE-NCIT-110/220 纯光纤电流互感器（俄标 ЭТТ-110）+ IEEE 1588 合并单元',
        reason: '直接输出 IEC 61869-9 / 9-2LE 光纤采样流，彻底取消开关场电缆沟，在母线与变压器差动保护中彻底消除 CT 饱和失真，缩短变电站现场联调周期 60% 以上。',
      },
      {
        title: '海上风电升压站、紧凑型地下变电站与城市中心 GIS 组合电器',
        recommend: '选型推荐：GIS 嵌入式无铁芯罗氏线圈 + 阻容分压一体化电子式互感器',
        reason: '互感器体积与结构承重减小 85% 以上，彻底杜绝易燃易爆介质，且对变频器与高频开关电磁干扰具备 100% 免疫能力。',
      },
      {
        title: '俄罗斯西伯利亚、远东极寒矿区与重工业供电枢纽（-50°C 严寒与高覆冰 УХЛ1）',
        recommend: '选型推荐：极寒特种耐低温铠装光纤 NCIT + IV 级特重污秽硅橡胶复合套管',
        reason: '本体无变压器油、无 SF6 气体绝缘，在 -50°C 极寒下无介质液化与密封圈冷脆泄漏风险，完全符合俄罗斯 ПАО «Россети» 标准规范。',
      },
    ],
    ja: [
      {
        title: '次世代デジタルスマート変電所 (110kV/220kV IEC 61850 プロセスバス)',
        recommend: '推奨：飛馳 FE-NCIT-110 全光ファイバーCT (ЭТТ-110) ＋ PTP マージングユニット',
        reason: '銅ケーブルを光ファイバーSV 9-2LEに完全置換。母線差動保護におけるCT飽和をゼロ化し、試運転期間を60%短縮。',
      },
      {
        title: '洋上風力発電プラットフォーム・都市型コンパクトGIS変電所',
        recommend: '推奨：GIS組込型ロコフスキコイル・電子式変成器',
        reason: '変成器重量を85%以上削減し、高周波電磁ノイズ耐性を100%確保。',
      },
      {
        title: 'ロシア・シベリア極寒鉱山送電網 (-50℃ УХЛ1 酷寒環境)',
        recommend: '推奨：極寒仕様アーマード光ファイバーNCIT＋シリコーン複合がいし',
        reason: '油・SF6ガスを使用しないため極寒での液化・漏洩リスクが完全ゼロ。',
      },
    ],
    es: [
      {
        title: 'Subestaciones Digitales Inteligentes 110kV/220kV (Bus de Proceso IEC 61850)',
        recommend: 'Recomendación: Transformador Óptico Feichi FE-NCIT-110 (ЭТТ-110) + Merging Unit PTP',
        reason: 'La transmisión digital por fibra SV 9-2LE elimina canalizaciones de cobre y la saturación de TC en protecciones diferenciales.',
      },
      {
        title: 'Plataformas Eólicas Marinas y Subestaciones GIS Compactas',
        recommend: 'Recomendación: Módulo Electrónico Integrado Bobina Rogowski + Divisor Capacitivo',
        reason: 'Reduce el peso estructural en >85% e inmunidad total a interferencias electromagnéticas.',
      },
      {
        title: 'Redes Mineras en Climas Árticos y Siberia (-50°C УХЛ1)',
        recommend: 'Recomendación: Sensor Óptico Armado para Clima Ártico con Aislamiento Polimérico',
        reason: 'Sin aceite ni gas SF6, elimina riesgos de licuefacción y fugas a -50°C.',
      },
    ],
    ru: [
      {
        title: 'Цифровые подстанции 110-220 кВ нового поколения (Шина процесса МЭК 61850-9-2LE / МЭК 61869-9)',
        recommend: 'Рекомендация: Волоконно-оптический трансформатор тока Feichi FE-NCIT-110 (ЭТТ-110) + Merging Unit',
        reason: 'Прямая передача потоков SV 9-2LE исключает медные кабели, гарантирует отсутствие насыщения ТТ в дифференциальных защитах шин и трансформаторов и сокращает пусконаладку на 60%.',
      },
      {
        title: 'Офшорные ветроэлектростанции и компактные КРУЭ 110-220 кВ',
        recommend: 'Рекомендация: Встраиваемый оптико-электронный модуль (пояс Роговского + емкостный делитель)',
        reason: 'Снижает массу измерительного оборудования на 85%, пожаровзрывобезопасен и устойчив к электромагнитным помехам.',
      },
      {
        title: 'Горнодобывающие узлы и сетевые подстанции Сибири и Севера (-50°C, исполнение УХЛ1)',
        recommend: 'Рекомендация: Оптический трансформатор тока ЭТТ-110 в кремнийорганической изоляции',
        reason: 'Отсутствие масла и элегаза SF6 полностью исключает проблемы ожижения изоляционных газов и растрескивания уплотнений при -50°C.',
      },
    ],
  },
  hasCalculator: 'ncit' as any,
  ctaTitle: {
    en: 'Need Merging Unit ICD/CID Files or Russian GOST Опросный лист for 110kV/220kV NCIT?',
    zh: '需要获取 110kV/220kV 光电互感器合并单元 ICD/CID 配置文件或俄标 Опросный лист 选型方案？',
    ja: '110kV/220kV 光変成器マージングユニットICD/CID設定ファイルやロシアGOST問診票が必要ですか？',
    es: '¿Requiere Archivos ICD/CID de Merging Unit o Cuestionario GOST para NCIT 110kV/220kV?',
    ru: 'Требуется файл конфигурации Merging Unit (ICD/CID) или Опросный лист на оптический трансформатор ЭТТ-110 / ЭТН-110?',
  },
  ctaDesc: {
    en: 'Connect directly with technical lead Henry to receive complete SCL system specifications, optical budget calculations, IEC 61869-9 SV traffic captures, and factory type test certificates within 24 hours.',
    zh: '直接与技术负责人 Henry 沟通，获取完整的 SCL 系统配置、光纤功率损耗裕量计算表、IEC 61869-9 采样值网络报文抓包数据及出厂型式试验报告（24 小时内响应）。',
    ja: '技術責任者 Henry に直接ご連絡ください。SCL設定ファイル、光損失計算書、IEC 61869-9 パケットデータおよび型式試験証明書を24時間以内に提供します。',
    es: 'Contacte directamente con el líder técnico Henry para obtener especificaciones SCL completas, balance óptico, capturas de tráfico SV IEC 61869-9 y certificados de prueba en 24 horas.',
    ru: 'Свяжитесь напрямую с техническим руководителем Henry для получения SCL файлов (ICD/CID), расчета оптического бюджета, тестовых дампов потоков SV МЭК 61869-9 и протоколов типовых испытаний в течение 24 часов.',
  },
};
