import type { WhitepaperItem } from './whitepapersData';

export const week28Whitepaper: WhitepaperItem = {
  id: 'week-28',
  week: 28,
  slug: 'outdoor-solid-dielectric-smart-recloser-and-pole-mounted-sectionalizer-flisr-guide',
  category: 'switchgear',
  categoryLabel: {
    en: 'Outdoor Smart Vacuum Reclosers & Pole-Mounted Sectionalizers (10kV–35kV / РВА/TEL / ПСС / FLISR / IEC 62271-111)',
    zh: '10kV–35kV 户外柱上智能真空重合器与自动分界负荷开关及配电网自愈自动化选型指南（РВА/TEL / ПСС / FLISR / IEC 62271-111）',
    ja: '10kV〜35kV 屋外柱上スマート真空リクローザ・自動区分開閉器および配電自動化FLISR設計指針（РВА/TEL / IEC 62271-111）',
    es: 'Reconectadores Inteligentes de Media Tensión y Seccionalizadores en Poste 10kV-35kV para Automatización FLISR (РВА/TEL / IEC 62271-111)',
    ru: 'Вакуумные реклоузеры РВА/TEL (ПСС-10/35) 10-35 кВ и пункты секционирования с функцией самовосстановления сети FLISR (ГОСТ Р 52565 / ТР ТС 004)',
  },
  title: {
    en: '10kV–35kV Outdoor Solid-Dielectric Smart Vacuum Recloser (РВА/TEL / ПСС) & Pole-Mounted Sectionalizer Engineering Guide: Bi-Stable Magnetic Actuator Physics, 100,000 Operations Maintenance-Free, Zero-Sequence Ground Fault FLISR Self-Healing, and -50°C Arctic Substation Automation (Benchmarking Tavrida Electric REC15/REC25, Lucy Electric Trident, Schneider Easergy & ABB Sectos)',
    zh: '10kV–35kV 户外固封极柱智能真空重合器（俄标 РВА/TEL, ПСС-10/35）与柱上分段开关工程选型指南：双稳态永磁操动机构力学、10万次免维护机械寿命、零序过流/过压瞬态接地自愈（FLISR）算法与 -50°C 极寒电网自愈闭环（对标俄罗斯 Tavrida Electric REC15/REC25、英国 Lucy Electric Trident、施耐德 Easergy 与 ABB Sectos）',
    ja: '10kV〜35kV 屋外固体絶縁スマート真空リクローザ（ロシアРВА/TEL・ПСС）および柱上自動区分開閉器完全エンジニアリング設計ガイド：双安定永久磁石操作機構、10万回メンテナンスフリー機械寿命、零相地絡・過電流瞬時遮断自律分散FLISRアルゴリズム、および-50℃極寒スマートグリッド配電自動化（Tavrida Electric・Lucy Electric・Schneider・ABBベンチマーク）',
    es: 'Guía de Ingeniería de Reconectadores de Vacío Inteligentes en Dieléctrico Sólido 10kV-35kV (РВА/TEL / ПСС) y Seccionalizadores en Poste: Actuadores Magnéticos Biestables, 100,000 Operaciones Libres de Mantenimiento, Algoritmos de Autorrecuperación FLISR y Automatización a -50°C',
    ru: 'Инженерное руководство по вакуумным реклоузерам РВА/TEL (ПСС-10/35) и пунктам автоматического секционирования 10-35 кВ: физика бистабильного электромагнитного привода, 100 000 циклов без обслуживания, алгоритмы локализации и восстановления сети FLISR и работа при -50°C по ГОСТ 15150 УХЛ1 (Бенчмарк Tavrida Electric REC15/REC25, Lucy Electric Trident, Schneider Easergy и ABB Sectos)',
  },
  eyebrow: {
    en: 'OUTDOOR DISTRIBUTION AUTOMATION & SMART RECLOSERS (IEC 62271-111 / IEEE C37.60 / ГОСТ Р 52565-2006 / ГОСТ 15150-69 УХЛ1)',
    zh: 'FE-SPEC-28 · 10kV–35kV 户外智能重合器与配网自愈自动化选型专论（IEC 62271-111 / GB/T 1984 / ГОСТ Р 52565 / ТР ТС 004/2011）',
    ja: 'FE-SPEC-28 · 10kV〜35kV 屋外配電自動化リクローザ・スマート開閉装置技術仕様書（IEC 62271-111 / IEEE C37.60 / ГОСТ Р 52565）',
    es: 'FE-SPEC-28 · DOSSIER DE RECONECTADORES INTELIGENTES Y AUTOMATIZACIÓN DE REDES EN MEDIA TENSIÓN (IEC 62271-111 / ГОСТ Р 52565)',
    ru: 'FE-SPEC-28 · РУКОВОДСТВО ПО ВАКУУМНЫМ РЕКЛОУЗЕРАМ РВА/TEL И ПУНКТАМ СЕКЦИОНИРОВАНИЯ 10-35 кВ (ГОСТ Р 52565-2006 / СТО РОССЕТИ)',
  },
  author: {
    en: 'Feichi Grid Automation & Medium-Voltage Switchgear Engineering Institute (Lead: Henry)',
    zh: '飞驰电气配网自动化与中压开关工程研究院（总工/外贸对接人：Henry）',
    ja: '飛馳電気 配電自動化・中圧開閉装置工学研究所（チーフ：Henry）',
    es: 'Instituto de Automatización de Redes y Aparamenta de Media Tensión Feichi (Líder: Henry)',
    ru: 'Инженерно-исследовательский институт автоматизации распределительных сетей Feichi Power (Гл. инженер: Henry)',
  },
  standards: 'IEC 62271-111 / IEEE C37.60 / IEC 62271-1 / GB/T 1984-2014 / GB/T 11022 / ГОСТ Р 52565-2006 / ГОСТ 15150-69 (УХЛ1) / ТР ТС 004/2011',
  readTime: {
    en: '21 min technical study (Includes Magnetic Actuator Dynamics, Transient Zero-Sequence Capacitive Current Equations, FLISR Reclosing Sequence Timing & Russian РВА/TEL Questionnaire)',
    zh: '21 分钟深度技术研读（含双稳态永磁机构磁路力学微分方程、单相接地暂态零序容性电流选线算法、配网自愈 FLISR 重合闸时序整定与俄标 РВА/TEL 选型表单）',
    ja: '21分 専門設計解説（永久磁石操作機構磁気回路力学モデル・零相過渡地絡電流選線方程式・FLISR自律再閉路シーケンス整定・ロシアРВА/TEL問診票）',
    es: '21 min de lectura técnica (Incluye dinámica de actuadores magnéticos, ecuaciones de corriente capacitiva homopolar, secuencias FLISR y cuestionario РВА/TEL)',
    ru: '21 мин технического изучения (включая дифференциальные уравнения электромагнитного привода, расчет переходных емкостных токов замыкания на землю $3I_0$, алгоритмы секционирования FLISR и полный Опросный лист на реклоузер РВА/TEL 10-35 кВ)',
  },
  summary: {
    en: 'An authoritative technical engineering whitepaper on 10kV, 24kV, and 35kV Outdoor Solid-Dielectric Smart Vacuum Reclosers (Russian GOST PBA/TEL, PSS series) and Pole-Mounted Sectionalizers for overhead distribution grids, remote mining feeders, and renewable energy collector lines (rated current 630A to 1250A, breaking capacity up to 25kA). Benchmarking global pioneers Tavrida Electric (REC15/REC25), Lucy Electric (Trident), and ABB (Sectos), this guide details bi-stable magnetic actuator mechanics (eliminating mechanical springs, gears, and latches to achieve 100,000 maintenance-free operations from -50°C to +55°C), Hydrophobic Cycloaliphatic Epoxy (HCEP) vacuum interrupter solid embedding (100% SF6-free, creepage >= 31mm/kV for Class IV heavy pollution), transient zero-sequence directional overcurrent/overvoltage protection algorithms for isolated/resonant grounded systems, Fault Location, Isolation and Service Restoration (FLISR) decentralised peer-to-peer reclosing sequences (<500ms auto-restoration), integrated optical Rogowski sensors, standard telemetry (IEC 60870-5-104 / IEC 61850 GOOSE), and Russian PJSC Rosseti standard Опросный лист questionnaire formats.',
    zh: '全面剖析 10kV、24kV 与 35kV 户外固体绝缘智能真空重合器（俄标 РВА/TEL 系列、ПСС 柱上开闭所/分界开关）及自动化分段开关的核心电磁物理架构与配电网自愈（FLISR）工程选型（额定电流涵盖 630A 至 1250A，额定短路开断电流达 16kA~25kA）。深度对标俄罗斯 Tavrida Electric（REC15 / REC25）、英国 Lucy Electric（Trident / Scada-Mate）与瑞士 ABB（Sectos），系统阐述双稳态永磁操动机构（Bi-Stable Magnetic Actuator，彻底摒弃传统复杂储能弹簧、脱扣连杆与润滑减速箱，在 -50°C 极寒至 +55°C 沙漠环境下实现 10 万次机械寿命与零检修）、憎水性环氧树脂（HCEP）真空灭弧室一体化固封极柱（100% 无 SF6 气体排放、爬电比距 $\\ge 31\\text{ mm/kV}$，耐受重度盐雾冰冻与沙尘冲刷）、单相接地瞬态零序电流/电压（$3I_0 / 3U_0$）高灵敏故障判据、配网自愈（FLISR）毫秒级智能重合闸时序（瞬时故障 0.5s 快速复电、永久故障精准分段隔离并自动倒闸转供）、内置罗氏线圈与低功耗高精度电压传感器、支持 IEC 60870-5-104 / IEC 61850 GOOSE 远动协议，以及符合俄罗斯电网 ПАО «Россети» 与欧亚经济联盟 ТР ТС 004/2011 标准的《Опросный лист на вакуумный реклоузер РВА/TEL 10-35 кВ》工程选型规范。',
    ja: '10kV/24kV/35kV 屋外固体絶縁スマート真空リクローザ（ロシアGOST РВА/TELシリーズ・ПСС柱上区分開閉所）および配電自動化スイッチの完全技術解説書（定格電流630A〜1250A、遮断電流最大25kA）。Tavrida Electric（REC15/REC25）、Lucy Electric、ABBをベンチマークし、双安定永久磁石操作機構（スプリング・潤滑油不要で-50℃〜+55℃下で10万回メンテナンスフリー）、疎水性脂環式エポキシ（HCEP）真空バルブ一体注型（SF6完全フリー・沿面距離≥31mm/kV）、零相電流/電圧過渡地絡高精度判定、配電網自律故障分離・健全区間即時復旧（FLISR）再閉路シーケンス、ロゴスキーコイル・高精度分圧センサ内蔵、IEC 60870-5-104/IEC 61850通信対応、およびロシアRosseti規格Опросный лист選定ノウハウを完全網羅。',
    es: 'Expediente técnico de Reconectadores Inteligentes de Vacío en Dieléctrico Sólido 10kV-35kV (РВА/TEL / ПСС) y Seccionalizadores en Poste (630A a 1250A, corte hasta 25kA). Analiza actuadores magnéticos biestables libres de mantenimiento para 100,000 operaciones entre -50°C y +55°C, polos embebidos en resina epóxica cicloalifática hidrofóbica (HCEP) 100% libres de SF6, protección direccional homopolar (3I0 / 3U0) para sistemas aislados o compensados, automatización descentralizada FLISR para reconexión y restauración en <500ms, integración de bobinas Rogowski, protocolos IEC 60870-5-104 e IEC 61850, y cuestionarios oficiales bajo normas GOST.',
    ru: 'Полное техническое руководство по вакуумным реклоузерам РВА/TEL (ПСС-10/35) и пунктам секционирования 10-35 кВ на номинальные токи 630-1250 А с отключающей способностью до 25 кА по стандартам ГОСТ Р 52565-2006 и ТР ТС 004/2011. Рассмотрены: бистабильный электромагнитный привод с магнитной фиксацией (100 000 циклов без смазки и регулировки при температуре от -50°C до +55°C), цельнолитая изоляция полюсов из гидрофобной эпоксидной смолы HCEP без элегаза (длина пути утечки ≥31 мм/кВ), алгоритмы направленной защиты от ОЗЗ ($3I_0 / 3U_0$), децентрализованная автоматика восстановления сети FLISR, встроенные датчики тока Роговского и емкостные делители напряжения, протоколы МЭК 60870-5-104 / МЭК 61850 и полный Опросный лист ПАО Россети.',
  },
  sec1Title: {
    en: '1. Bi-Stable Magnetic Actuator Mechanics & HCEP Solid-Dielectric Pole Design (100,000 Operations at -50°C Arctic Environments)',
    zh: '1. 双稳态永磁操动机构电磁力学与 HCEP 固封极柱绝缘机理（-50°C 极寒工况 10 万次免维护运行）',
    ja: '1. 双安定永久磁石操作機構の電磁力学およびHCEP固体絶縁極柱構造（-50℃極寒下10万回メンテナンスフリー）',
    es: '1. Mecánica del Actuador Magnético Biestable y Aislamiento Dieléctrico Sólido HCEP (100,000 Maniobras a -50°C)',
    ru: '1. Электромагнитный привод с магнитной фиксацией и цельнолитые полюса HCEP (100 000 циклов при -50°C по ГОСТ 15150 УХЛ1)',
  },
  sec1Text: {
    en: `In remote overhead distribution feeders (such as Siberian oil/gas fields, desert mining roads, and coastal wind farms), conventional spring-operated reclosers frequently suffer from lubrication grease hardening, latch sticking, spring fatigue fracture, and mechanical jamming below -20°C.

Feichi FPC-REC / Russian PBA/TEL series employs a high-reliability Bi-Stable Magnetic Actuator direct-drive mechanism developed on the proven benchmark principles of Tavrida Electric.

**Electromagnetic Force Dynamics**:
The closing holding force $F_{hold}$ and dynamic tripping force $F_{trip}$ generated by the NdFeB permanent magnets and control coils are expressed by:
$$F_{mag}(x, i) = \frac{\Phi_{PM}^2}{2 \mu_0 S_{pole}} \pm \frac{N \cdot i \cdot \Phi_{PM}}{S_{pole}} - k_{spring} \cdot x$$
Where $\Phi_{PM}$ is the permanent magnetic flux, $N \cdot i$ is the ampere-turns of the trip/close pulse coil, $S_{pole}$ is the pole cross-section, and $k_{spring}$ is the contact wiping spring stiffness.

**Core Reliability Breakthroughs**:
1. **Mechanical Simplicity**: Only 1 moving part per phase (the direct-drive armature rod), completely eliminating latches, gears, motors, and oil dampers.
2. **Capacitor Energy Discharge**: Stored pulse energy (24VDC charging capacitor) guarantees instant opening ($t_{open} \le 18\text{ ms}$) and closing ($t_{close} \le 35\text{ ms}$) even during complete station blackout.
3. **Hydrophobic Cycloaliphatic Epoxy (HCEP) Solid Insulation**: Vacuum interrupters are seamlessly embedded in HCEP resin, providing superior resistance to UV radiation, ice accumulation, and heavy chemical salt fog (Creepage ratio $\ge 31\text{ mm/kV}$), with zero SF6 gas management over a 30-year design life.`,
    zh: `在偏远架空配电干线与分支线路（如西伯利亚油气田井群、戈壁矿区输电线路及沿海风电场汇集线）中，传统的弹簧储能机构在 -20°C 以下低温环境中极易出现润滑脂凝固凝固卡涩、分合闸脱扣锁扣失效、储能弹簧金属疲劳脆断等致命故障。

飞驰电气 FPC-REC 系列（俄标 РВА/TEL, ПСС-10/35）采用对标俄罗斯 Tavrida Electric 核心原理的双稳态单线圈/双线圈永磁操动机构直驱结构。

**电磁吸力与分合闸动力学方程**：
由高矫顽力钕铁硼（NdFeB）永磁体与脉冲控制线圈合成的动态电磁合闸保持力 $F_{hold}$ 与快速分闸力 $F_{trip}$ 满足：
$$F_{mag}(x, i) = \frac{\Phi_{PM}^2}{2 \mu_0 S_{pole}} \pm \frac{N \cdot i \cdot \Phi_{PM}}{S_{pole}} - k_{spring} \cdot x$$
其中 $\Phi_{PM}$ 为永磁体主工作磁通，$N \cdot i$ 为分合闸线圈脉冲安匝数，$S_{pole}$ 为铁芯极靴有效导磁截面积，$k_{spring}$ 为真空灭弧室触头初压力弹簧刚度。

**核心技术与结构优势**：
1. **极致机械极简（单相仅 1 个运动部件）**：采用衔铁连杆直驱真空灭弧室动触头，彻底取消齿轮减速箱、储能电机、机械棘爪与油缓冲器，机械寿命突破 100,000 次，全寿命周期免调校与免添加润滑脂；
2. **电容脉冲储能驱动**：控制箱内置特种超级电容储能模块，在全站掉电（Blackout）工况下仍可提供至少 3 次完整重合闸循环（分-0.3s-合分-2s-合分），固有分闸时间 $t_{open} \le 18\text{ ms}$，合闸时间 $t_{close} \le 35\text{ ms}$；
3. **憎水性环氧树脂（HCEP）一体化固封极柱**：将陶瓷真空灭弧室直接浇铸于耐紫外线 HCEP 固态绝缘材料中，爬电比距 $\ge 31\text{ mm/kV}$（满足 IEC 60815 IV 级重污秽标准），彻底终结 SF6 温室气体泄漏与六氟化硫年检压力。`,
    ja: '西伯利亚や山岳部の配電線において、従来のバネ操作機構は-20℃以下でグリース硬化やラッチ破損が多発します。飛馳電気 FPC-REC（ロシアРВА/TEL）は、Tavrida Electricをベンチマークした双安定永久磁石操作機構を採用。1相あたり可動部品わずか1個の直動構造により、潤滑油なしで10万回の機械寿命を達成。HCEP固体絶縁極柱によるSF6ガスフリー構造（沿面距離≥31mm/kV）で、-50℃極寒下でも18msの超高速トリップを実現します。',
    es: 'En líneas aéreas en climas extremos, los mecanismos de resortes convencionales fallan a bajas temperaturas. Los reconectadores Feichi FPC-REC / РВА/TEL utilizan actuadores magnéticos biestables con un solo componente móvil por polo. Accionados por descarga capacitiva, alcanzan apertura en ≤18ms y cierre en ≤35ms. Los polos de vacío embebidos en resina epóxica cicloalifática hidrofóbica (HCEP) eliminan el gas SF6 y ofrecen 100,000 operaciones libres de mantenimiento.',
    ru: 'В распределительных сетях Сибири и Дальнего Востока пружинно-моторные приводы традиционных выключателей выходят из строя при температуре ниже -20°C из-за застывания смазки и поломки защелок. В реклоузерах Feichi серии РВА/TEL (ПСС-10/35) применен электромагнитный привод с магнитной фиксацией (бистабильный привод). Один подвижный элемент на фазу, отсутствие механических защелок и редукторов обеспечивают 100 000 циклов ВО без обслуживания. Цельнолитые полюса из гидрофобной смолы HCEP исключают применение элегаза и устойчивы к обледенению (УХЛ1, -50°C...+55°C).',
  },
  sec2Title: {
    en: '2. Zero-Sequence Transient Ground Fault Protection ($3I_0/3U_0$) & Decentralized FLISR Self-Healing Automation',
    zh: '2. 零序暂态接地故障方向保护（$3I_0 / 3U_0$）与分布式配网自愈（FLISR）自动化闭环',
    ja: '2. 零相過渡地絡方向保護（$3I_0/3U_0$）＆自律分散型配電自動化FLISR自律復旧制御',
    es: '2. Protección Direccional Homopolar Transitoria ($3I_0/3U_0$) y Autorrecuperación Descentralizada FLISR',
    ru: '2. Направленная защита от ОЗЗ по переходным токам ($3I_0/3U_0$) и децентрализованная автоматика FLISR',
  },
  sec2Text: {
    en: `In ungrounded, Petersen-coil compensated, or high-resistance grounded distribution networks, single-phase ground faults (SLG) generate faint fundamental steady-state currents ($< 5\text{ A}$), making conventional overcurrent relays completely blind.

Feichi FPC-REC integrated digital controller (FE-RTU-3000) features high-sampling transient zero-sequence directional algorithms (sampling rate $10\text{ kHz}$):

**Transient Zero-Sequence Capacitive Current Equation**:
When a ground fault occurs at $t = 0$, the transient charging/discharging current $i_0(t)$ through line-to-ground capacitance $C_0$ is defined by:
$$i_0(t) = - \sum_{k=1}^{M} C_{0k} \frac{\mathrm{d}u_0(t)}{\mathrm{d}t} = I_{0\_peak} e^{-\frac{t}{\tau}} \sin(\omega_f t + \theta)$$
Where $I_{0\_peak}$ can reach $20 \sim 50$ times the steady-state value within the first half-cycle ($0 \sim 5\text{ ms}$). By comparing the initial polarity of $i_0(t)$ against zero-sequence voltage $u_0(t)$, the controller reliably discriminates internal line faults from busbar faults with $> 99.5\%$ directional accuracy.

**Decentralized FLISR (Fault Location, Isolation & Service Restoration)**:
1. **Instantaneous Tripping**: Isolates permanent short-circuit within $35\text{ ms}$;
2. **Reclosing Sequence**: Fast shot $0.5\text{ s}$ clears $80\%$ transient lightning faults;
3. **Peer-to-Peer Distributed Logic**: Adjacent reclosers communicate via IEC 61850 GOOSE over 4G/optical fiber, automatically isolating the faulted segment and transferring sound sections via tie-reclosers in $< 500\text{ ms}$ without master SCADA intervention.`,
    zh: `在中性点不接地、经消弧线圈接地或经高阻接地的 10kV~35kV 配电电网中，单相接地故障（SLG）稳态基波电流极微弱（通常 $< 5\text{ A}$），常规过流继电器完全无法灵敏动作。

飞驰电气 FPC-REC 配套智能控制器（FE-RTU-3000 / 俄标 БУ/TEL）具备高达 10kHz 采样率的暂态零序方向自适应算法：

**暂态零序容性放电电流数学模型**：
在故障发生瞬时（$t=0$），非故障线路与故障线路对地分布电容 $C_0$ 的瞬态高频充放电电流 $i_0(t)$ 为：
$$i_0(t) = - \sum_{k=1}^{M} C_{0k} \frac{\mathrm{d}u_0(t)}{\mathrm{d}t} = I_{0\_peak} e^{-\frac{t}{\tau}} \sin(\omega_f t + \theta)$$
在首半波内（$0 \sim 5\text{ ms}$），暂态特征电流幅值可达稳态值的 20~50 倍。控制器通过比较首半波瞬态高频电流极性与零序电压 $u_0(t)$ 的方向相位积，实现对高阻接地、间歇性弧光接地故障的高灵敏度选线与分段切除（准确率 $> 99.5\\%$）。

**分布式配网自愈自动化（FLISR）执行逻辑**：
1. **瞬时故障自动重合闸**：第 1 次重合闸时延设定为 $0.5\\text{ s}$，瞬间自愈消除 $80\\%$ 以上的雷击、树木碰线等瞬态闪络故障；
2. **永久性故障精准闭锁**：第 2 次重合闸（时延 $2\\text{ s} \\sim 5\\text{ s}$）若仍闭合在故障上，控制器立即永久闭锁并向主网发送 SOE 事件报文；
3. **对等分布式无主站自愈（Peer-to-Peer Self-Healing）**：相邻智能重合器之间基于 IEC 61850 GOOSE 或 4G 无线微秒级报文交互，在 $500\\text{ ms}$ 内自动识别故障区间、跳开两侧分段开关并自动闭合联络开关（Tie-Recloser），实现非故障区段不停电倒闸供电。`,
    ja: '非接地系・消弧リアクトル接地系配電網において、1線地絡故障時の定常電流は極めて微小です。飛馳電気 FE-RTU-3000コントローラは、10kHz高速サンプリングによる過渡零相方向判定アルゴリズムを搭載。地絡発生初期の半波（0〜5ms）における高周波放電電流i0(t)と零相電圧u0(t)の極性を比較し、高抵抗接地でも99.5%以上の精度で故障フィーダーを選定。FLISR機能により瞬時故障は0.5秒で自動再閉路、永久故障は500ms以内に健全区間へ自動切換給電します。',
    es: 'En redes con neutro aislado o compensado, las fallas monofásicas a tierra presentan corrientes fundamentales mínimas (<5A). El controlador inteligente Feichi FE-RTU-3000 utiliza muestreo a 10 kHz para capturar el transitorio de descarga capacitiva homopolar i0(t) en el primer semiciclo (0-5ms). El esquema descentralizado FLISR ejecuta recierres en 0.5s para fallas transitorias y reconfigura la red aislando la sección fallada en <500ms mediante comunicación IEC 61850 GOOSE.',
    ru: 'В сетях 10-35 кВ с изолированной или компенсированной нейтралью токи замыкания на землю не превышают нескольких ампер. Микропроцессорный блок управления БУ/TEL (FE-RTU-3000) реализует направленную защиту от ОЗЗ по высшим гармоникам и переходным процессам с частотой дискретизации 10 кГц. Встроенная децентрализованная автоматика FLISR (самовосстанавливающаяся сеть) обеспечивает АПВ через 0.5 с при неустойчивых повреждениях, а при устойчивых КЗ передает команды по МЭК 61850 GOOSE и изолирует поврежденный участок за <500 мс с автоматическим включением резерва (АВР).',
  },
  sec3Title: {
    en: '3. Technical Benchmarking Matrix: Feichi FPC-REC vs. Tavrida REC vs. Lucy Electric Trident',
    zh: '3. 国际顶级品牌核心技术指标深度对标表：飞驰 FPC-REC vs. 俄罗斯 Tavrida REC vs. 英国 Lucy Trident',
    ja: '3. 国際トップブランド技術仕様詳細比較：飛馳 FPC-REC vs. Tavrida REC vs. Lucy Trident',
    es: '3. Matriz de Benchmarking Técnico: Feichi FPC-REC vs. Tavrida REC vs. Lucy Electric Trident',
    ru: '3. Сравнительная матрица технических параметров: Feichi FPC-REC vs. Tavrida REC vs. Lucy Trident',
  },
  tableHeaders: {
    en: ['Technical Specification', 'Feichi FPC-REC-35 Smart Recloser', 'Tavrida Electric REC15 / REC25', 'Lucy Electric Trident Recloser', 'Conventional Spring SF6 Recloser'],
    zh: ['核心技术参数 / 性能维度', '飞驰电气 FPC-REC-35 智能重合器', '俄罗斯 Tavrida Electric REC15/REC25', '英国 Lucy Electric Trident', '传统弹簧储能 SF6 重合器'],
    ja: ['技術仕様・性能パラメータ', '飛馳電気 FPC-REC-35 スマートリクローザ', 'Tavrida Electric REC15 / REC25', 'Lucy Electric Trident', '従来型スプリング式SF6リクローザ'],
    es: ['Parámetros Técnicos', 'Reconectador Feichi FPC-REC-35', 'Tavrida Electric REC15 / REC25', 'Lucy Electric Trident', 'Reconectador Convencional Resorte/SF6'],
    ru: ['Технические параметры', 'Реклоузер Feichi FPC-REC-35 (ПСС-35)', 'Tavrida Electric РВА/TEL (REC15/25)', 'Lucy Electric Trident', 'Традиционный пружинный с элегазом'],
  },
  tableRows: {
    en: [
      ['Rated Voltage & Frequency', '10kV / 24kV / 35kV (50/60 Hz)', '15kV / 27kV / 38kV (50/60 Hz)', '12kV / 24kV / 36kV (50/60 Hz)', '10kV / 35kV (50 Hz)'],
      ['Operating Mechanism Type', 'Bi-Stable Magnetic Actuator (Permanent Magnet Direct Drive)', 'Mono-Stable / Bi-Stable Magnetic Actuator', 'Spring-Assisted Magnetic / Motor Mechanism', 'Motorized Mechanical Spring & Latch'],
      ['Mechanical Endurance Life', '100,000 Operations (Zero Maintenance)', '100,000 Operations (Zero Maintenance)', '10,000 Operations (Requires Inspection)', '2,000 – 5,000 Operations (Grease Required)'],
      ['Insulation Medium', 'Solid Dielectric HCEP Resin (100% SF6-Free)', 'Solid Dielectric HCEP Resin (SF6-Free)', 'Solid Dielectric Polyurethane / Resin', 'SF6 Gas (Greenhouse Leakage Risk)'],
      ['Arctic Ambient Temp Rating', '-50°C to +55°C (ГОСТ 15150 УХЛ1 Certified)', '-50°C to +55°C (УХЛ1)', '-40°C to +50°C', '-20°C to +40°C (Grease Freeze Risk)'],
      ['Rated Continuous Current', '630A / 1250A', '630A / 800A', '630A / 800A', '400A / 630A'],
      ['Short-Circuit Breaking Current', '16kA / 20kA / 25kA (3s)', '12.5kA / 16kA (3s)', '12.5kA / 16kA (3s)', '12.5kA (1s - 2s)'],
      ['SLG Ground Fault Algorithm', 'Transient Waveform ($3I_0/3U_0$ 10kHz Sampling)', 'Transient Polarity Detection ($3I_0$ Directional)', 'Fundamental Directional Ground Fault', 'Simple Overcurrent / Residual Current'],
      ['FLISR Peer-to-Peer Latency', '< 500 ms (IEC 61850 GOOSE / 4G RTU)', '< 600 ms (Distributed Protocol)', '1.5 s – 3.0 s (SCADA Master Dependent)', 'Manual / Remote Dispatch (> 30s)'],
      ['Telecontrol Protocol Support', 'IEC 60870-5-104 / IEC 61850 / DNP3 / Modbus TCP', 'IEC 104 / DNP3 / Modbus', 'IEC 104 / DNP3 / Modbus', 'Modbus RTU / Proprietary Serial'],
    ],
    zh: [
      ['额定电压与电网频率', '10kV / 24kV / 35kV (50/60 Hz)', '15kV / 27kV / 38kV (50/60 Hz)', '12kV / 24kV / 36kV (50/60 Hz)', '10kV / 35kV (50 Hz)'],
      ['操动机构核心类型', '双稳态永磁操动机构（永磁直驱保持）', '单稳态 / 双稳态永磁操动机构', '弹簧辅助永磁 / 电动弹簧机构', '纯电动机械弹簧储能与棘爪脱扣'],
      ['机械寿命与维护周期', '100,000 次分合闸（全生命周期免维护）', '100,000 次分合闸（免维护）', '10,000 次（需定期巡检查销）', '2,000 ~ 5,000 次（需定期补充润滑脂）'],
      ['极柱主绝缘介质', '憎水性环氧树脂 HCEP 固态绝缘（100% 无 SF6）', '固态 HCEP 环氧绝缘（零温室气体）', '聚氨酯/环氧固态绝缘', 'SF6 六氟化硫气体（存在漏气与温室风险）'],
      ['极寒与恶劣气候耐受', '-50°C 至 +55°C（符合俄标 ГОСТ УХЛ1 认证）', '-50°C 至 +55°C（УХЛ1 极寒型）', '-40°C 至 +50°C', '-20°C 至 +40°C（低温弹簧卡涩高发）'],
      ['额定持续工作电流', '630A / 1250A', '630A / 800A', '630A / 800A', '400A / 630A'],
      ['额定短路开断电流', '16kA / 20kA / 25kA (3s)', '12.5kA / 16kA (3s)', '12.5kA / 16kA (3s)', '12.5kA (1s ~ 2s)'],
      ['单相接地选线保护算法', '暂态波形分析（$3I_0/3U_0$ 10kHz 高速采样）', '首半波极性瞬态方向法', '基波方向零序电流法', '简单零序过流 / 剩余电流整定'],
      ['FLISR 自愈恢复总耗时', '< 500 ms（IEC 61850 GOOSE 无主站自愈）', '< 600 ms（分布式自愈）', '1.5 s ~ 3.0 s（依赖调度主站集中处理）', '人工复归或主站轮询遥控（> 30s）'],
      ['远动通讯与物联网规约', 'IEC 60870-5-104 / IEC 61850 / DNP3 / Modbus TCP', 'IEC 104 / DNP3 / Modbus', 'IEC 104 / DNP3 / Modbus', 'Modbus RTU / 专有私有串口'],
    ],
    ja: [
      ['定格電圧・周波数', '10kV / 24kV / 35kV (50/60 Hz)', '15kV / 27kV / 38kV (50/60 Hz)', '12kV / 24kV / 36kV (50/60 Hz)', '10kV / 35kV (50 Hz)'],
      ['操作機構方式', '双安定永久磁石ダイレクトドライブ機構', '単安定/双安定永久磁石機構', 'スプリング補助電磁機構', '電動スプリング蓄勢・ラッチ機構'],
      ['機械的開閉寿命', '100,000回（完全メンテナンスフリー）', '100,000回（メンテナンスフリー）', '10,000回（定期点検要）', '2,000〜5,000回（給油点検必須）'],
      ['主絶縁媒体', 'HCEP疎水性固体絶縁（SF6完全フリー）', 'HCEP固体エポキシ（SF6フリー）', 'ポリウレタン/エポキシ固体', 'SF6ガス（温室効果ガス漏洩リスク）'],
      ['使用環境温度範囲', '-50℃〜+55℃（ロシアGOST UHL1認定）', '-50℃〜+55℃（UHL1対応）', '-40℃〜+50℃', '-20℃〜+40℃（低温動作不良リスク）'],
      ['定格通電電流', '630A / 1250A', '630A / 800A', '630A / 800A', '400A / 630A'],
      ['定格短時間遮断電流', '16kA / 20kA / 25kA (3s)', '12.5kA / 16kA (3s)', '12.5kA / 16kA (3s)', '12.5kA (1s〜2s)'],
      ['1線地絡保護アルゴリズム', '過渡波形解析（$3I_0/3U_0$ 10kHzサンプリング）', '初期半波極性判別法', '基本波零相方向判定', '単純零相過電流検出'],
      ['FLISR自律復旧時間', '< 500 ms（IEC 61850 GOOSE自律制御）', '< 600 ms（分散自律）', '1.5 s〜3.0 s（上位SCADA依存）', '手動または遠隔遠方制御（>30s）'],
      ['通信プロトコル', 'IEC 60870-5-104 / IEC 61850 / DNP3 / Modbus TCP', 'IEC 104 / DNP3 / Modbus', 'IEC 104 / DNP3 / Modbus', 'Modbus RTU / 専用シリアル'],
    ],
    es: [
      ['Tensión Nominal y Frecuencia', '10kV / 24kV / 35kV (50/60 Hz)', '15kV / 27kV / 38kV (50/60 Hz)', '12kV / 24kV / 36kV (50/60 Hz)', '10kV / 35kV (50 Hz)'],
      ['Tipo de Mecanismo', 'Actuador Magnético Biestable Directo', 'Actuador Magnético Mono/Biestable', 'Mecanismo Magnético Asistido por Resorte', 'Resorte Mecánico Motorizado'],
      ['Vida Mecánica', '100,000 Operaciones (Cero Mantenimiento)', '100,000 Operaciones (Cero Mantenimiento)', '10,000 Operaciones', '2,000 a 5,000 Operaciones (Requiere Grasa)'],
      ['Medio Aislante', 'Dieléctrico Sólido HCEP (100% Libre de SF6)', 'Dieléctrico Sólido HCEP (Libre de SF6)', 'Dieléctrico Sólido de Resina', 'Gas SF6 (Riesgo de Fugas)'],
      ['Rango de Temperatura Ártica', '-50°C a +55°C (Certificado GOST UHL1)', '-50°C a +55°C (UHL1)', '-40°C a +50°C', '-20°C a +40°C (Riesgo de Congelación)'],
      ['Corriente Nominal', '630A / 1250A', '630A / 800A', '630A / 800A', '400A / 630A'],
      ['Poder de Corte en Cortocircuito', '16kA / 20kA / 25kA (3s)', '12.5kA / 16kA (3s)', '12.5kA / 16kA (3s)', '12.5kA (1s - 2s)'],
      ['Algoritmo de Falla a Tierra', 'Forma de Onda Transitoria ($3I_0/3U_0$ 10kHz)', 'Detección de Polaridad Transitoria', 'Direccional Fundamental', 'Sobrecorriente Residual Simple'],
      ['Tiempo de Restauración FLISR', '< 500 ms (IEC 61850 GOOSE Autónomo)', '< 600 ms (Descentralizado)', '1.5 s – 3.0 s (Dependiente de SCADA)', 'Manual / Telemando Central (>30s)'],
      ['Protocolos de Telecontrol', 'IEC 60870-5-104 / IEC 61850 / DNP3 / Modbus TCP', 'IEC 104 / DNP3 / Modbus', 'IEC 104 / DNP3 / Modbus', 'Modbus RTU / Serial Propietario'],
    ],
    ru: [
      ['Номинальное напряжение и частота', '10 кВ / 24 кВ / 35 кВ (50/60 Гц)', '15 кВ / 27 кВ / 38 кВ (50/60 Гц)', '12 кВ / 24 кВ / 36 кВ (50/60 Гц)', '10 кВ / 35 кВ (50 Гц)'],
      ['Тип привода выключателя', 'Бистабильный электромагнитный привод с магнитной фиксацией', 'Моностабильный / бистабильный электромагнитный', 'Пружинно-электромагнитный / моторный', 'Пружинно-моторный с механическими защелками'],
      ['Механический ресурс (число циклов ВО)', '100 000 циклов (полностью необслуживаемый)', '100 000 циклов (необслуживаемый)', '10 000 циклов (требуется ревизия)', '2 000 – 5 000 циклов (требует смазки)'],
      ['Изоляция полюсов', 'Твердая изоляция HCEP (100% без элегаза)', 'Твердая изоляция HCEP (без элегаза)', 'Твердая полиуретановая изоляция', 'Элегаз SF6 (риск утечек и парниковый газ)'],
      ['Климатическое исполнение', '-50°C...+55°C (ГОСТ 15150 УХЛ1 аттестован)', '-50°C...+55°C (УХЛ1)', '-40°C...+50°C', '-20°C...+40°C (застывание смазки)'],
      ['Номинальный рабочий ток', '630 А / 1250 А', '630 А / 800 А', '630 А / 800 А', '400 А / 630 А'],
      ['Ток отключения короткого замыкания', '16 кА / 20 кА / 25 кА (3с)', '12.5 кА / 16 кА (3с)', '12.5 кА / 16 кА (3с)', '12.5 кА (1с – 2с)'],
      ['Алгоритм защиты от ОЗЗ', 'Анализ переходных процессов ($3I_0/3U_0$ выборка 10 кГц)', 'Направленная по первому полупериоду', 'Направленная по основной гармонике', 'Простая токовая нулевой последовательности'],
      ['Время локализации и АВР (FLISR)', '< 500 мс (МЭК 61850 GOOSE без участия верхнего уровня)', '< 600 мс (децентрализованная)', '1.5 с – 3.0 с (требуется сервер SCADA)', 'Ручное или диспетчерское (> 30 с)'],
      ['Протоколы телемеханики и связи', 'МЭК 60870-5-104 / МЭК 61850 / DNP3 / Modbus TCP / АИИС КУЭ', 'МЭК 104 / DNP3 / Modbus', 'МЭК 104 / DNP3 / Modbus', 'Modbus RTU / проприетарный RS-485'],
    ],
  },
  sec4Title: {
    en: '4. Critical Grid Deployment Scenarios & Sizing Recommendations',
    zh: '4. 典型电网工况选型配置与工程部署方案',
    ja: '4. 典型系統環境における推奨選定構成・エンジニアリング適用事例',
    es: '4. Escenarios de Aplicación en Red y Recomendaciones de Configuración',
    ru: '4. Типовые сценарии применения и рекомендации по выбору конфигурации',
  },
  scenarios: {
    en: [
      {
        title: 'Siberian & Arctic Oilfield Overhead Feeder (-50°C / ГОСТ УХЛ1)',
        recommend: 'FPC-REC-10/630-20-UHL1 (РВА/TEL-10-УХЛ1) with Dual-CT + Integrated Capacitive Voltage Sensors & FE-RTU-3000 Arctic Enclosure',
        reason: 'Eliminates all mechanical lubricants and auxiliary heaters. High-speed transient $3I_0/3U_0$ algorithm instantly isolates single-phase ground faults in extensive cable-overhead mixed oilfield networks.',
      },
      {
        title: '200MW Wind & Solar Collector Line Sectionalizing (35kV Recloser)',
        recommend: 'FPC-REC-35/1250-25-HCEP with IEC 61850 GOOSE Fiber-Optic Teleprotection & Motorized Disconnector Base',
        reason: 'Handles high continuous renewable collector currents up to 1250A and 25kA short-circuit duty with ultrafast reclosing to protect wind turbine step-up transformers from severe lightning flashovers.',
      },
      {
        title: 'Urban / Industrial Feeder Decentralized FLISR Self-Healing Ring',
        recommend: 'FPC-REC-24/630-20 with Peer-to-Peer 4G/5G Wireless Mesh Communication & Directional Tie-Recloser Logic',
        reason: 'Restores power to 90% of downstream commercial/industrial customers within 500ms of a fault, dramatically reducing SAIDI and CAIDI indices without central SCADA delays.',
      },
    ],
    zh: [
      {
        title: '西伯利亚与极北油气田架空混联线路（-50°C 极寒 / ГОСТ УХЛ1）',
        recommend: 'FPC-REC-10/630-20-UHL1（俄标 РВА/TEL-10-УХЛ1）+ 内置双绕组 CT 及电容分压传感器 + FE-RTU-3000 低温特种控制箱',
        reason: '双稳态永磁机构彻底免除机械润滑脂与辅助加热装置，高频暂态 $3I_0/3U_0$ 算法可精准识别长距离架空-电缆混合线路单相接地故障，保障严寒油井连续供电。',
      },
      {
        title: '200MW 级大型风电/光伏电站 35kV 集电线路智能分段',
        recommend: 'FPC-REC-35/1250-25-HCEP（35kV 户外柱上智能真空重合器）+ 光纤 IEC 61850 GOOSE + 集成户外高压隔离刀闸',
        reason: '支持高达 1250A 额定电流与 25kA 短路开断能力，0.5s 快速重合闸迅速消除集电线路雷击瞬态过电压，避免风电机组全场脱网。',
      },
      {
        title: '城市主干配电网与工业园区自愈自恢复环网（FLISR 分布式自愈）',
        recommend: 'FPC-REC-24/630-20 智能真空重合器 + 4G/5G 无线微网 Mesh 组网 + 联络分段自愈控制器',
        reason: '在发生线路永久故障时，两侧分段重合器与联络重合器在 500ms 内自动完成故障定位、段间隔离与负荷转供，使停电时间（SAIDI）下降 90% 以上。',
      },
    ],
    ja: [
      {
        title: 'シベリア極寒油田配電線（-50℃耐候 / GOST UHL1）',
        recommend: 'FPC-REC-10/630-20-UHL1（РВА/TEL-10-УХЛ1）+ 内蔵CT/分圧センサ + FE-RTU-3000極寒制御ボックス',
        reason: '永久磁石機構により給油不要。10kHz過渡零相アルゴリズムにより架空・地中混在線路での微小地絡故障を高感度遮断。',
      },
      {
        title: '200MW風力・メガソーラー 35kV集電線路柱上区分遮断器',
        recommend: 'FPC-REC-35/1250-25-HCEP（35kVスマートリクローザ）+ IEC 61850光ファイバ高速保護',
        reason: '大電流1250A・短絡25kA対応。0.5秒高速再閉路で落雷サージによる風車トリップを未然に防止。',
      },
      {
        title: '都市部・産業プラント配電網自律復旧FLISRループシステム',
        recommend: 'FPC-REC-24/630-20 + 4G/5G無線メッシュ通信 + 連系自動切換ロジック',
        reason: '上位SCADAを介さずにリクローザ間で500ms以内に健全区間へ自動切換送電し、停電時間を最小化。',
      },
    ],
    es: [
      {
        title: 'Alimentadores en Campos Petroleros de Siberia (-50°C / GOST UHL1)',
        recommend: 'FPC-REC-10/630-20-UHL1 (РВА/TEL-10) con Sensores Integrados de Tensión/Corriente y Control FE-RTU-3000',
        reason: 'Elimina lubricantes y calentadores. Detección direccional transitoria $3I_0/3U_0$ para fallas a tierra en redes mixtas aéreas-subterráneas.',
      },
      {
        title: 'Líneas Colectoras de 35kV en Parques Eólicos/Solares de 200MW',
        recommend: 'FPC-REC-35/1250-25-HCEP con Teleprotección IEC 61850 GOOSE y Seccionador de Operación Visible',
        reason: 'Capacidad de 1250A y corte de 25kA con recierre ultrarrápido para proteger aerogeneradores contra sobretensiones atmosféricas.',
      },
      {
        title: 'Anillo de Distribución Urbana e Industrial con Autorrecuperación FLISR',
        recommend: 'FPC-REC-24/630-20 con Comunicación Inalámbrica Mesh 4G/5G y Lógica de Enlace Tie-Recloser',
        reason: 'Aísla la falla y transfiere la carga no afectada en <500ms, reduciendo sustancialmente los índices SAIDI y SAIFI.',
      },
    ],
    ru: [
      {
        title: 'Кустовые воздушные линии нефтепромыслов Сибири (-50°C, ГОСТ 15150 УХЛ1)',
        recommend: 'РВА/TEL-10-12.5/630 УХЛ1 (FPC-REC-10) со встроенными датчиками тока/напряжения и шкафом управления БУ/TEL',
        reason: 'Исключает замерзание смазки при -50°C. Алгоритм по переходным токам $3I_0/3U_0$ обеспечивает селективное отключение ОЗЗ в разветвленных кабельно-воздушных сетях.',
      },
      {
        title: 'Межплощадочные ВЛ-35 кВ ветропарков и солнечных станций мощностью 200 МВт',
        recommend: 'ПСС-35/1250-25 УХЛ1 (FPC-REC-35) с оптическим каналом МЭК 61850 GOOSE и встроенным разъединителем РДЗ',
        reason: 'Поддерживает номинальный ток 1250 А и ток отключения 25 кА. Быстрое АПВ (0.5 с) ликвидирует грозовые перекрытия без отключения генерации.',
      },
      {
        title: 'Кольцевые городские и промышленные сети с автоматикой FLISR (самовосстановление)',
        recommend: 'ПСС-20/630-20 с беспроводной связью 4G/5G и логикой секционирования без участия диспетчера',
        reason: 'Локализует поврежденный участок и восстанавливает электроснабжение потребителей за <500 мс, снижая недоотпуск электроэнергии.',
      },
    ],
  },
  ctaTitle: {
    en: 'Request FPC-REC Smart Recloser Technical Specs, SLDs & Russian ГОСТ Опросный лист',
    zh: '获取 FPC-REC 智能真空重合器技术规格书、一次系统图与俄标 Опросный лист',
    ja: 'FPC-RECスマートリクローザ詳細仕様書・単線結線図・ロシアGOST選定問診票の請求',
    es: 'Solicite Especificaciones Técnicas de Reconectadores FPC-REC, Diagramas Unifilares y Cuestionario GOST',
    ru: 'Запросить опросный лист на реклоузер РВА/TEL, габаритные чертежи и коммерческое предложение',
  },
  ctaDesc: {
    en: 'Connect with Henry (Feichi Chief Grid Automation Engineer) for tailored pole-mounted recloser configurations, FLISR settings, factory type-test reports, and fast global FOB/CIF delivery.',
    zh: '与飞驰电气配电自动化总工程师 Henry 直接对接，获取定制化柱上重合器方案、自愈定值计算、出厂型式试验报告与极速全球交付支持。',
    ja: '飛馳電気 配電自動化チーフエンジニア Henry と直接連携し、カスタマイズ設計・FLISR整定計算書・型式試験成績書・グローバル納入プランをご提供します。',
    es: 'Contacte a Henry (Ingeniero Jefe de Automatización de Redes de Feichi) para recibir configuraciones personalizadas de reconectadores, ajustes FLISR, reportes de pruebas de tipo y entregas FOB/CIF.',
    ru: 'Свяжитесь с главным инженером Henry для заполнения Опросного листа на реклоузер РВА/TEL (ПСС-10/35), расчета уставок защит, получения протоколов испытаний и расчета стоимости поставки.',
  },
};
