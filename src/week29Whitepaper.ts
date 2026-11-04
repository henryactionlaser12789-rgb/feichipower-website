import type { WhitepaperItem } from './whitepapersData';

export const week29Whitepaper: WhitepaperItem = {
  id: 'week-29',
  week: 29,
  slug: 'outdoor-hv-live-tank-dead-tank-circuit-breaker-trv-guide',
  category: 'switchgear',
  categoryLabel: {
    en: '35kV–110kV Outdoor Live-Tank & Dead-Tank Circuit Breakers (ВГТ-110 / ВТ-35 / IEC 62271-100)',
    zh: '35kV–110kV 户外高压断路器自能式灭弧与近区故障 TRV 选型工程指南（ВГТ-110 / ВТ-35 / IEC 62271-100 / ГОСТ Р 52565）',
    ja: '35kV〜110kV 屋外高圧遮断器・自能式消弧および過渡回復電圧TRV設計指針（ВГТ-110 / IEC 62271-100）',
    es: 'Interruptores de Alta Tensión en Intemperie 35kV-110kV Live-Tank / Dead-Tank y TRV (ВГТ-110 / IEC 62271-100)',
    ru: 'Высоковольтные элегазовые и вакуумные выключатели ВГТ-110, ВТ-35 35-110 кВ и расчет ПВН (ГОСТ Р 52565-2006 / ТР ТС 004)',
  },
  title: {
    en: '35kV–110kV Outdoor Live-Tank & Dead-Tank High-Voltage Circuit Breaker (ВГТ-110 / ВТ-35 / LW25) Engineering Guide: Thermal Auto-Puffer Interrupter Dynamics, Short-Line Fault TRV Rise-Rate Withstand, -60°C Siberian Mixed Gas (SF6/CF4 / УХЛ1) Non-Liquefaction Reliability, and 40kA/3s Short-Circuit Duty (Benchmarking ABB LTB, Siemens 3AV1, Russian UETM VGT-110 & Pinggao)',
    zh: '35kV–110kV 户外高压六氟化硫与真空断路器（俄标 ВГТ-110, ВТ-35, 国标 LW25-126）工程选型指南：热自能式（Auto-Puffer）灭弧气动力学模型、近区故障（SLF）超高陡度暂态恢复电压（TRV）耐受机理、-60°C 西伯利亚混合气体（SF6/CF4 / УХЛ1）防液化设计与 40kA/3s 额定短路开断能力（对标瑞士 ABB LTB、德国西门子 3AV1、俄罗斯 УЭТМ ВГТ-110 与平高电气）',
    ja: '35kV〜110kV 屋外高圧気中・ガス遮断器（ロシアВГТ-110・ВТ-35）完全設計ガイド：熱自能式消弧室流体力学モデル、近距離故障（SLF）高急峻度過渡回復電圧TRV耐力、-60℃シベリア極寒混合ガス（SF6/CF4・UHL1）不液化技術および40kA/3s大容量短絡遮断（ABB LTB・Siemens 3AV1・UETM・Pinggaoベンチマーク）',
    es: 'Guía de Ingeniería de Interruptores de Alta Tensión en Intemperie 35kV-110kV (ВГТ-110 / ВТ-35 / LW25): Dinámica Auto-Puffer Térmica, Soporte de TRV en Fallas de Línea Corta (SLF), Mezcla de Gas Ártica SF6/CF4 a -60°C (GOST UHL1) y Capacidad de Corte de 40kA/3s',
    ru: 'Инженерное руководство по высоковольтным элегазовым выключателям колонкового и бакового типа ВГТ-110, ВТ-35 35-110 кВ: автокомпрессионная дугогасительная камера (Thermal Puffer), стойкость к скорости нарастания ПВН при КЗ на линии, невымерзающая газовая смесь SF6/CF4 до -60°C по ГОСТ 15150 УХЛ1 и ток отключения 40 кА / 3 с (Бенчмарк ABB LTB, Siemens 3AV1, УЭТМ ВГТ-110 и Pinggao)',
  },
  eyebrow: {
    en: 'HIGH-VOLTAGE TRANSMISSION & SUBSTATION CIRCUIT BREAKERS (IEC 62271-100 / IEEE C37.04 / ГОСТ Р 52565-2006 / ГОСТ 15150-69 УХЛ1)',
    zh: 'FE-SPEC-29 · 35kV–110kV 户外高压断路器与自能式灭弧选型专论（IEC 62271-100 / GB/T 1984 / ГОСТ Р 52565 / ТР ТС 004/2011）',
    ja: 'FE-SPEC-29 · 35kV〜110kV 屋外高圧遮断器・消弧性能最適化技術仕様書（IEC 62271-100 / IEEE C37.04 / ГОСТ Р 52565）',
    es: 'FE-SPEC-29 · DOSSIER DE INTERRUPTORES DE ALTA TENSIÓN 35kV–110kV Y FENÓMENOS TRANSITORIOS TRV (IEC / IEEE / GOST)',
    ru: 'FE-SPEC-29 · РУКОВОДСТВО ПО ВЫСОКОВОЛЬТНЫМ ВЫКЛЮЧАТЕЛЯМ ВГТ-110, ВТ-35 35-110 кВ (ГОСТ Р 52565-2006 / СТО РОССЕТИ)',
  },
  author: {
    en: 'Feichi High-Voltage Substation Equipment & Circuit Breaker Engineering Institute (Lead: Henry)',
    zh: '飞驰电气高压变电站成套与高压断路器工程研究院（总工/外贸对接人：Henry）',
    ja: '飛馳電気 高圧変電機器・遮断器工学研究所（チーフ：Henry）',
    es: 'Instituto de Ingeniería de Aparamenta de Alta Tensión y Subestaciones Feichi (Líder: Henry)',
    ru: 'Инженерно-исследовательский институт высоковольтных аппаратов и подстанций Feichi Power (Гл. инженер: Henry)',
  },
  standards: 'IEC 62271-100 / IEC 62271-1 / IEEE C37.04 / GB/T 1984-2014 / ГОСТ Р 52565-2006 / ГОСТ 15150-69 (УХЛ1) / ТР ТС 004/2011 / СТО 56947007-29.130.10.091-2011',
  readTime: {
    en: '23 min technical study (Includes Thermal Auto-Puffer Gas Dynamics Modeling, Short-Line Fault TRV Rise-Rate Equations, Arctic Mixed-Gas Phase Diagrams & Russian ВГТ-110 Questionnaire)',
    zh: '23 分钟深度技术研读（含热自能式灭弧室瞬态气动力学微分模型、近区故障 TRV 上升率微分方程、-60°C 极寒 SF6/CF4 混合气体相平衡计算与俄标 ВГТ-110 选型表单）',
    ja: '23分 専門設計解説（熱自能式消弧室内気体力学モデル・近距離故障TRV上昇率微分方程式・-60℃極寒混合ガス相平衡線図・ロシアVGT-110選定問診票）',
    es: '23 min de lectura técnica (Incluye modelos de dinámica de gases auto-puffer, ecuaciones de tasa de crecimiento de TRV, diagramas de fase SF6/CF4 a -60°C y cuestionario ВГТ-110)',
    ru: '23 мин технического изучения (включая дифференциальные уравнения термодинамики автокомпрессионной дугогасительной камеры, расчет скорости нарастания ПВН при КЗ на линии, фазовые диаграммы смесей SF6/CF4 до -60°C и полный Опросный лист на выключатель ВГТ-110)',
  },
  summary: {
    en: 'An authoritative technical whitepaper on 35kV, 72.5kV, and 110kV Outdoor High-Voltage Live-Tank and Dead-Tank Circuit Breakers (Russian GOST VGT-110, VT-35 series; Chinese LW25-126 series) for utility grid substations, thermal/hydro power generation step-up plants, and harsh mining installations (rated continuous current 1250A to 3150A, short-circuit breaking current 25kA to 40kA). Benchmarking international market leaders ABB/Hitachi Energy (LTB series), Siemens (3AV1/3AP1), and Russian UETM (VGT-110), this guide explores thermal auto-puffer interrupter mechanics (utilizing arc energy for high-pressure gas expansion and reducing spring operating mechanism energy by >50%), transient recovery voltage (TRV) withstand under extreme short-line fault (SLF) conditions ($RRTRV \ge 2.0\text{ kV}/\mu\text{s}$), low-temperature binary mixed-gas technology (SF6/CF4 50%/50% or SF6/N2 preventing gas liquefaction at -60°C Siberian УХЛ1 climates), pure spring operating mechanisms (10,000 maintenance-free operations), double-break high-voltage porcelain columns with silicon rubber composite insulators (creepage >= 31mm/kV for heavy industrial/saline pollution), and standard Russian PJSC Rosseti Опросный лист questionnaire formats.',
    zh: '全面剖析 35kV、72.5kV 与 110kV（126kV 最高电压）户外高压瓷柱式/落地式断路器（俄标 ВГТ-110, ВТ-35 系列；国标 LW25-126 / LW36-40.5 系列）的核心灭弧力学与电网开断工程选型（额定电流 1250A 至 3150A，额定短路开断电流 25kA 至 40kA）。深度对标瑞士 ABB / 日立能源（LTB 系列）、德国西门子（3AV1 系列）与俄罗斯乌拉尔重型电气成套厂（УЭТМ ВГТ-110），系统阐述热自能式（Thermal Auto-Puffer）灭弧室气动力学拓扑（利用短路电弧自身热能增压并在电流过零时形成超音速熄弧气流，操动机构储能功耗降低 50% 以上）、近区故障（SLF - Short Line Fault）极高陡度暂态恢复电压（TRV 初始上升率 $\ge 2.0\text{ kV}/\mu\text{s}$）耐受机理、西伯利亚极寒工况二元混合气体技术（$\text{SF}_6 / \text{CF}_4$ 50/50 配比彻底防止 $-60^\circ\text{C}$ 低温液化凝结）、纯弹簧操动机构 10,000 次免维护机械寿命、大爬距硅橡胶复合绝缘套管（爬电比距 $\ge 31\text{ mm/kV}$，耐受重度工业覆冰与盐雾侵蚀），以及符合全俄电网 ПАО «Россети» 与海关联盟 ТР ТС 004/2011 标准的《Опросный лист на элегазовый выключатель ВГТ-110 / ВТ-35》工程选型规范。',
    ja: '35kV/72.5kV/110kV 屋外高圧磁器柱形・タンク形遮断器（ロシアGOST ВГТ-110・ВТ-35シリーズ、LW25-126）の完全設計解説書（定格電流1250A〜3150A、短絡遮断電流25kA〜40kA）。ABB LTB、Siemens 3AV1、ロシアUETM VGT-110をベンチマークし、アーク自身の熱エネルギーを活用した熱自能式（Auto-Puffer）消弧トポロジー、近距離故障（SLF）における急峻な過渡回復電圧TRV（上昇率≥2.0kV/μs）耐力設計、-60℃極寒下でのガス液化を防ぐSF6/CF4（50/50）二元混合ガス技術、10,000回メンテナンスフリー純スプリング操作機構、シリコーンゴム複合がい管（沿面距離≥31mm/kV）、およびロシアRosseti標準Опросный лист選定ノウハウを完全網羅。',
    es: 'Expediente técnico de Interruptores de Alta Tensión en Intemperie 35kV-110kV (ВГТ-110 / ВТ-35 / LW25) para subestaciones de transmisión y generación (1250A a 3150A, corte hasta 40kA). Analiza cámaras de corte térmicas auto-puffer que reducen la energía mecánica en >50%, tolerancia a tasas de crecimiento de tensión transitoria de restablecimiento (TRV) en fallas de línea corta (SLF), mezclas binarias SF6/CF4 para climas siberianos de -60°C (GOST UHL1), mecanismos de resorte puro para 10,000 maniobras y cuestionarios oficiales de licitación.',
    ru: 'Полное техническое руководство по высоковольтным элегазовым выключателям колонкового типа серии ВГТ-110 и ВТ-35 на напряжение 35 и 110 кВ с номинальными токами 1250-3150 А и токами отключения КЗ 25-40 кА по ГОСТ Р 52565-2006 и СТО Россети. Рассмотрены: автокомпрессионная дугогасительная камера (снижение энергоемкости пружинного привода более чем на 50%), расчет восстанавливающегося напряжения (ПВН) при отключении близких коротких замыканий (БКЗ со скоростью нарастания >2 кВ/мкс), технология применения незамерзающей смеси элегаза с тетрафторметаном (SF6/CF4) для температур до -60°C (УХЛ1), пружинный привод на 10 000 циклов ВО и полный Опросный лист ПАО Россети.',
  },
  sec1Title: {
    en: '1. Thermal Auto-Puffer Interrupter Gas Dynamics & Energy-Saving Piston Mechanics (40kA Breaking Duty)',
    zh: '1. 热自能式（Thermal Auto-Puffer）灭弧室气动力学模型与机构节能力学（40kA 额定短路开断）',
    ja: '1. 熱自能式（Thermal Auto-Puffer）消弧室の気体力学モデルおよび省エネルギー駆動機構（40kA短絡遮断）',
    es: '1. Dinámica de Gases en Cámaras Auto-Puffer Térmicas y Mecánica de Pistón de Bajo Consumo (Corte de 40kA)',
    ru: '1. Газодинамика автокомпрессионной дугогасительной камеры и энергосберегающий пружинный привод (ток отключения 40 кА)',
  },
  sec1Text: {
    en: `In conventional high-voltage puffer circuit breakers, the operating mechanism must deliver massive mechanical energy to compress cold SF6 gas inside the piston chamber during the opening stroke, resulting in heavy, failure-prone spring systems with high impact vibrations.

Feichi FLW-110 / Russian VGT-110 series utilizes advanced Thermal Auto-Puffer technology. The interrupter chamber is divided into two distinct volumes: an expansion heating volume ($V_{th}$) and a mechanical compression volume ($V_{comp}$).

**Thermodynamic Differential Governing Equations**:
During the high-current arcing phase ($i(t) > 5\text{ kA}$), arc thermal energy rapidly heats and pressurizes the gas in $V_{th}$:
$$\frac{\mathrm{d}p_{th}}{\mathrm{d}t} = \frac{\gamma - 1}{V_{th}} \left[ \eta_{arc} \cdot u_{arc}(t) \cdot i(t) - \frac{\gamma}{\gamma - 1} p_{th} \cdot Q_{blow}(t) \right]$$
Where $\eta_{arc} \approx 0.65$ is the arc energy thermal transfer coefficient, $\gamma = 1.09$ is the specific heat ratio of SF6 gas, and $Q_{blow}$ is the sonic mass flow rate discharged through the PTFE nozzle.

**Engineering Superiority**:
1. **Operating Energy Reduction by 55%**: Because high-pressure arc blasting gas is generated directly by arc thermal expansion rather than mechanical springs, the required spring drive energy is reduced from $4500\text{ J}$ down to $1950\text{ J}$.
2. **Double Nozzle Symmetrical Blasting**: Symmetrical supersonic PTFE nozzles wash both upstream and downstream contact tips, rapidly de-ionizing arc plasma within $10\text{ }\mu\text{s}$ of current zero.
3. **No-Restrike Capacitor Bank Switching**: Tested for Class C2 back-to-back shunt capacitor switching up to $1000\text{ A}$ with zero dielectric breakdown restrikes.`,
    zh: `在传统的压气式高压断路器中，操动机构必须在分闸行程中输出巨大的机械功，强行通过活塞机械压缩冷态六氟化硫（SF6）气体，导致机构弹簧储能功耗极大、零部件受力冲击恶劣且低温故障率偏高。

飞驰电气 FLW-110（俄标 ВГТ-110 / ВТ-35）采用国际顶尖的热自能式（Thermal Auto-Puffer）灭弧室结构。灭弧室内部划分为热膨胀吸热舱（$V_{th}$）与辅助机械压气舱（$V_{comp}$）。

**热膨胀动态升压微分方程**：
在开断大短路电流（$i(t) > 5\text{ kA}$）主燃弧阶段，电弧热量使热膨胀舱内 SF6 气体急剧膨胀升压：
$$\frac{\mathrm{d}p_{th}}{\mathrm{d}t} = \frac{\gamma - 1}{V_{th}} \left[ \eta_{arc} \cdot u_{arc}(t) \cdot i(t) - \frac{\gamma}{\gamma - 1} p_{th} \cdot Q_{blow}(t) \right]$$
其中 $\eta_{arc} \approx 0.65$ 为电弧能量转换加热效率系数，$\gamma = 1.09$ 为高温 SF6 气体比热容比，$Q_{blow}(t)$ 为通过特种改性聚四氟乙烯（PTFE）喷口喷出的音速气体质量流量。

**核心技术优势**：
1. **机构操作功降低 55%**：由于灭弧所需的高压吹弧压力主要来源于电弧自身热能建立，机械驱动弹簧所需做功从传统的 $4500\text{ J}$ 大幅降低至 $1950\text{ J}$，机械受力极大缓和，可靠性成倍提升；
2. **双喷口对称超音速吹弧**：高压气体通过对称 PTFE 复合喷口在动静触头断口形成超音速气吹，在电流过零点 $10\mu\text{s}$ 内迅速吹散游离态等离子体，介质绝缘强度以 $> 30\text{ kV}/\mu\text{s}$ 的极高速度迅速恢复；
3. **开断电容器组零重燃（C2 级）**：严格通过背靠背开合 1000A 并联电容器组全套型式试验，全程无重燃、无击穿。`,
    ja: '従来のピストン圧気式遮断器では、スプリング機構が多大な機械エネルギーを消費していました。飛馳電気 FLW-110（ロシアВГТ-110）は、アーク自身の熱エネルギーでガスを自力加圧する熱自能式消弧室を採用。機構操作エネルギーを55%削減（4500J→1950J）し、-60℃でも信頼性の高い純スプリング駆動を実現。PTFE超音速ノズルによる対称吹弧により、電流零点後10μs以内にプラズマを消炎し、C2級コンデンサ開閉重燃ゼロを達成します。',
    es: 'En interruptores de soplado convencionales, el mecanismo requiere alta energía para comprimir gas frío. Los interruptores Feichi FLW-110 / ВГТ-110 emplean tecnología térmica auto-puffer donde el propio calor del arco presuriza la cámara de expansión térmica, reduciendo la energía del resorte en un 55% (de 4500J a 1950J). Las toberas dobles de PTFE supersónicas enfrían el plasma en <10μs tras el cruce por cero, garantizando corte de bancos capacitivos Clase C2 sin reencendidos.',
    ru: 'В традиционных автокомпрессионных выключателях пружинный привод совершает большую работу по механическому сжатию холодного элегаза. В выключателях Feichi серии ВГТ-110 (FLW-110) применена дугогасительная камера с тепловым расширением (Thermal Puffer). Давление для гашения дуги создается за счет тепловой энергии самого дугового столба. Это позволило снизить энергоемкость привода на 55% (с 4500 Дж до 1950 Дж). Двустороннее сверхзвуковое дутье через фторопластовые сопла обеспечивает восстановление прочности промежутка за 10 мкс и отключение емкостных токов без повторных пробоев (класс С2).',
  },
  sec2Title: {
    en: '2. Short-Line Fault (SLF) High-Rate Transient Recovery Voltage ($RRTRV \ge 2.0\text{ kV}/\mu\text{s}$) & Siberian Arctic Gas Liquefaction Mitigation (-60°C)',
    zh: '2. 近区故障（SLF）超高陡度暂态恢复电压（TRV）耐受机理与 -60°C 西伯利亚极寒防液化混合气体技术',
    ja: '2. 近距離故障（SLF）急峻過渡回復電圧TRV耐力＆-60℃シベリア極寒SF6/CF4混合ガス不液化技術',
    es: '2. Resistencia a TRV de Alta Pendiente en Fallas de Línea Corta (SLF) y Mezcla de Gas Ártica Anti-Licuefacción a -60°C',
    ru: '2. Стойкость к высокой скорости нарастания ПВН при близких КЗ (БКЗ) и незамерзающая смесь элегаза с хладоном-14 (SF6/CF4 до -60°C)',
  },
  sec2Text: {
    en: `Short-Line Faults (SLF) occurring within $0.5\text{ km} \sim 5\text{ km}$ of the substation overhead feeder produce extremely severe triangular Transient Recovery Voltage (TRV) waveforms with rate-of-rise values exceeding $RRTRV \ge 2.0\text{ kV}/\mu\text{s}$ in the initial microsecond timeframe ($t_{init} < 5\text{ }\mu\text{s}$).

**TRV Mathematical Envelope Calculation (IEC 62271-100)**:
The transient recovery voltage $u_{TRV}(t)$ on the circuit breaker terminal is expressed as the superposition of busbar-side lumped oscillation and line-side traveling wave reflection:
$$u_{TRV}(t) = U_{peak} \left[ 1 - e^{-\frac{t}{\tau}} \cos(\omega_0 t) \right] + Z_{line} \cdot \left| \frac{\mathrm{d}i}{\mathrm{d}t} \right|_{t=0} \cdot v_{wave} \cdot t$$
Where $Z_{line} \approx 450\text{ }\Omega$ is the overhead surge impedance, $\left|\frac{\mathrm{d}i}{\mathrm{d}t}\right|_{t=0} = \sqrt{2} \omega I_{sc}$ is the current zero slope, and $v_{wave} \approx 300\text{ m}/\mu\text{s}$ is the electromagnetic traveling wave velocity.

**Arctic Siberian -60°C Non-Liquefaction Mixed-Gas Chemistry (ГОСТ 15150 УХЛ1)**:
Pure SF6 gas at standard operating gauge pressure ($0.50\text{ MPa}$) liquefies into droplets at $-30^\circ\text{C}$, causing severe dielectric failure and pressure drop alarms.
Feichi FLW-110 arctic execution utilizes an optimized binary gas mixture of **50% SF6 + 50% CF4 (Carbon Tetrafluoride / Хладон-14)** or **70% SF6 + 30% N2**:
1. **Liquefaction Temperature Dropped to $-62^\circ\text{C}$**: Maintains 100% gaseous phase at $-60^\circ\text{C}$ with nominal filling pressure of $0.55\text{ MPa}$;
2. **Dielectric Strength Retention**: Delivers $> 92\%$ of pure SF6 dielectric strength with superior chemical stability under heavy arc discharge.`,
    zh: `在距离变电站架空出线端 $0.5\text{ km} \sim 5\text{ km}$ 处发生的近区短路故障（SLF - Short Line Fault），由于行波在线路断口间的来回高频反射，会在电流过零点后数微秒内（$t_{init} < 5\mu\text{s}$）在断路器断口产生极其严酷的锯齿状暂态恢复电压（TRV），初始电压上升率高达 $RRTRV \ge 2.0\text{ kV}/\mu\text{s}$。

**近区故障 TRV 瞬态包络线微分方程（IEC 62271-100 / GB/T 1984）**：
断路器两端承受的瞬态恢复电压 $u_{TRV}(t)$ 为母线侧集总振荡与线路侧行波反射的叠加：
$$u_{TRV}(t) = U_{peak} \left[ 1 - e^{-\frac{t}{\tau}} \cos(\omega_0 t) \right] + Z_{line} \cdot \left| \frac{\mathrm{d}i}{\mathrm{d}t} \right|_{t=0} \cdot v_{wave} \cdot t$$
其中 $Z_{line} \approx 450\text{ }\Omega$ 为架空线路波阻抗，$\left|\frac{\mathrm{d}i}{\mathrm{d}t}\right|_{t=0} = \sqrt{2} \omega I_{sc}$ 为短路电流过零瞬态变化率，$v_{wave} \approx 300\text{ m}/\mu\text{s}$ 为电磁行波光速传播速率。飞驰电气通过优化金属屏蔽罩断口电场与改性 PTFE 喷口喉部尺寸，确保介质恢复速度始终压制 TRV 上升速度，从根本上杜绝热击穿复燃。

**西伯利亚 $-60^\circ\text{C}$ 极寒防液化混合气体方案（ГОСТ 15150 УХЛ1 认证）**：
纯 SF6 气体在额定工作表压（$0.50\text{ MPa}$）下，当环境温度低于 $-30^\circ\text{C}$ 时即开始凝结液化为液滴，导致灭弧室内气体密度锐减、绝缘击穿和低气压闭锁报警。
飞驰电气针对俄罗斯西伯利亚、远东及极北地区，采用 **50% SF6 + 50% CF4（四氟化碳 / Хладон-14）** 或 **70% SF6 + 30% N2** 优选二元混合气体技术：
1. **液化临界温度降至 $-62^\circ\text{C}$**：在 $-60^\circ\text{C}$ 极寒下 100% 保持纯气态，充气压力稳定在 $0.55\text{ MPa}$；
2. **绝缘与灭弧性能保持率 $> 92\%$**：且具备优异的电弧分解产物化学稳定性，彻底杜绝电加热带故障导致的开关瘫痪。`,
    ja: '変電所引出線近傍（0.5〜5km）の近距離故障（SLF）では、反射波により電流零点直後に2.0kV/μs以上の超急峻な過渡回復電圧TRVが発生します。飛馳電気 FLW-110は電極電界最適化により熱破壊を完全防止。さらに純SF6ガスが-30℃で液化する問題を解決するため、SF6/CF4（50/50）混合ガスを採用し、液化点を-62℃まで降下。ロシアGOST UHL1（-60℃）環境下でもヒーター不要で確実な絶縁・遮断性能を維持します。',
    es: 'Las fallas de línea corta (SLF) a 0.5-5km de la subestación generan tasas de incremento de TRV superiores a 2.0 kV/μs en microsegundos. Los interruptores Feichi optimizan el campo dieléctrico en toberas de PTFE para superar este fenómeno. Adicionalmente, para evitar la licuefacción del SF6 puro a -30°C, incorporan mezclas binarias de 50% SF6 + 50% CF4 (Tetrafluoruro de Carbono), reduciendo el punto de licuefacción a -62°C para operación siberiana (GOST UHL1).',
    ru: 'При близких коротких замыканиях (БКЗ) на расстоянии 0.5-5 км от подстанции скорость нарастания ПВН превышает 2 кВ/мкс. Геометрия дугогасительного промежутка выключателей Feichi рассчитана на опережающее восстановление электрической прочности. Для исключения сжижения чистого элегаза при -30°C в выключателях для Сибири и Крайнего Севера (УХЛ1) применяется смесь 50% SF6 + 50% CF4 (хладон-14) с температурой сжижения ниже -62°C при давлении 0.55 МПа, что исключает необходимость подогрева баков.',
  },
  sec3Title: {
    en: '3. Technical Benchmarking Matrix: Feichi FLW-110 vs. ABB LTB vs. Siemens 3AV1 vs. Russian UETM VGT-110',
    zh: '3. 国际顶级品牌核心技术指标深度对标表：飞驰 FLW-110 vs. 瑞士 ABB LTB vs. 德国西门子 3AV1 vs. 俄罗斯 УЭТМ ВГТ-110',
    ja: '3. 国際トップブランド技術仕様詳細比較：飛馳 FLW-110 vs. ABB LTB vs. Siemens 3AV1 vs. UETM VGT-110',
    es: '3. Matriz de Benchmarking Técnico: Feichi FLW-110 vs. ABB LTB vs. Siemens 3AV1 vs. UETM VGT-110',
    ru: '3. Сравнительная матрица технических параметров: Feichi FLW-110 vs. ABB LTB vs. Siemens 3AV1 vs. УЭТМ ВГТ-110',
  },
  tableHeaders: {
    en: ['Technical Parameter / Dimension', 'Feichi FLW-110 / ВГТ-110', 'ABB LTB 145D1/B Live-Tank', 'Siemens 3AV1 (3AP1) Dead-Tank', 'Russian UETM ВГТ-110 УХЛ1'],
    zh: ['核心技术参数 / 性能维度', '飞驰电气 FLW-110 / ВГТ-110', '瑞士 ABB LTB 145D1/B 瓷柱式', '德国西门子 3AV1 罐式断路器', '俄罗斯 УЭТМ ВГТ-110 УХЛ1'],
    ja: ['技術仕様・性能パラメータ', '飛馳電気 FLW-110 / ВГТ-110', 'ABB LTB 145D1/B 気中遮断器', 'Siemens 3AV1 タンク形遮断器', 'ロシア УЭТМ ВГТ-110 УХЛ1'],
    es: ['Parámetros Técnicos', 'Interruptor Feichi FLW-110', 'ABB LTB 145D1/B Live-Tank', 'Siemens 3AV1 Dead-Tank', 'UETM ВГТ-110 УХЛ1 (Rusia)'],
    ru: ['Технические параметры', 'Выключатель Feichi FLW-110 (ВГТ-110)', 'ABB LTB 145D1/B (Hitachi)', 'Siemens 3AV1 (3AP1) баковый', 'УЭТМ ВГТ-110-40/2500 УХЛ1'],
  },
  tableRows: {
    en: [
      ['Rated Voltage & Max Voltage', '110 kV (Ur = 126 kV) / 35 kV (40.5 kV)', '110 kV (Ur = 145 kV)', '110 kV (Ur = 145 kV)', '110 kV (Ur = 126 kV)'],
      ['Interrupter Chamber Topology', 'Thermal Auto-Puffer (Dual Supersonic PTFE)', 'Auto-Puffer / Puffer Hybrid', 'Self-Compression Dynamic Puffer', 'Автокомпрессионная камера ВГТ'],
      ['Rated Continuous Current', '1250A / 2000A / 3150A', '1250A / 2500A / 3150A', '1250A / 2000A / 3150A', '1250A / 2000A / 2500A'],
      ['Short-Circuit Breaking Current', '31.5kA / 40kA (3s withstand)', '31.5kA / 40kA (3s)', '31.5kA / 40kA (3s)', '31.5kA / 40kA (3s)'],
      ['Operating Mechanism Type', 'Pure Spring Mechanism (Motor Charged 10k Ops)', 'Spring (BLK/HMB Hydraulic-Spring)', 'Spring Mechanism (FK3)', 'Пружинный привод ППВ / МПП'],
      ['Arctic Ambient Temp Rating', '-60°C to +55°C (SF6/CF4 Binary Gas / ГОСТ УХЛ1)', '-50°C to +40°C (Requires Heaters)', '-50°C to +50°C', '-60°C to +40°C (SF6/CF4 УХЛ1)'],
      ['Short-Line Fault TRV Rise Rate', 'RRTRV >= 2.0 kV/μs (SLF 90% L90 Duty)', 'RRTRV >= 2.0 kV/μs', 'RRTRV >= 2.0 kV/μs', 'RRTRV >= 1.8 kV/μs'],
      ['Insulator Type & Creepage', 'Composite Silicon Rubber (>=31mm/kV Class IV)', 'Porcelain / Composite Option', 'Composite Bushing', 'Фарфор / Полимер (3.1 см/кВ)'],
      ['Rated Operating Sequence', 'O - 0.3s - CO - 3min - CO (Rapid Reclosing)', 'O - 0.3s - CO - 3min - CO', 'O - 0.3s - CO - 3min - CO', 'О - 0.3с - ВО - 180с - ВО'],
      ['Seismic & Wind Withstand', '0.3g (9 Magnitude) / Wind 45 m/s', '0.3g / Wind 40 m/s', '0.3g / Wind 40 m/s', '9 баллов (MSK-64) / 40 м/с'],
    ],
    zh: [
      ['额定电压与最高系统电压', '110 kV (最高 126 kV) / 35 kV (40.5 kV)', '110 kV (最高 145 kV)', '110 kV (最高 145 kV)', '110 kV (最高 126 kV)'],
      ['灭弧室拓扑与吹弧机理', '热自能式（双喷口对称超音速 PTFE）', '自能压气复合式灭弧室', '动态自能压缩灭弧室', 'Автокомпрессионная 自能压气室'],
      ['额定工作电流规格', '1250A / 2000A / 3150A', '1250A / 2500A / 3150A', '1250A / 2000A / 3150A', '1250A / 2000A / 2500A'],
      ['额定短路开断与耐受', '31.5kA / 40kA（额定短路持续 3s）', '31.5kA / 40kA (3s)', '31.5kA / 40kA (3s)', '31.5kA / 40kA (3s)'],
      ['操动机构核心类型', '纯弹簧操动机构（电机储能，10,000次免维护）', '弹簧机构 / BLK液压弹簧机构', 'FK3 系列纯弹簧机构', 'ППВ / МПП 弹簧操动机构'],
      ['极寒与恶劣气候耐受', '-60°C 至 +55°C（SF6/CF4 混合气体 / 俄标 УХЛ1）', '-50°C 至 +40°C（需恒温加热带）', '-50°C 至 +50°C', '-60°C 至 +40°C（混合气 УХЛ1）'],
      ['近区故障 TRV 初始上升率', 'RRTRV >= 2.0 kV/μs (SLF L90/L75 严酷考核)', 'RRTRV >= 2.0 kV/μs', 'RRTRV >= 2.0 kV/μs', 'RRTRV >= 1.8 kV/μs'],
      ['绝缘外绝缘套管与爬距', '高强硅橡胶复合套管（爬电比距 >=31mm/kV）', '高强瓷套 / 硅橡胶可选', '复合套管', '高强瓷绝缘 / 复合绝缘 (3.1 cm/kV)'],
      ['额定操作循环时序', '分 - 0.3s - 合分 - 3min - 合分（支持极速重合闸）', '分 - 0.3s - 合分 - 3min - 合分', '分 - 0.3s - 合分 - 3min - 合分', 'О - 0.3с - ВО - 180с - ВО'],
      ['抗震等级与抗风能力', '水平 0.3g（抗地震烈度 9 度）/ 45 m/s 狂风', '0.3g / 40 m/s', '0.3g / 40 m/s', '9 级地震 (MSK-64) / 40 m/s'],
    ],
    ja: [
      ['定格電圧・最高電圧', '110 kV (最高 126 kV) / 35 kV (40.5 kV)', '110 kV (最高 145 kV)', '110 kV (最高 145 kV)', '110 kV (最高 126 kV)'],
      ['消弧室トポロジー', '熱自能式（対称超音速PTFEノズル）', '自能パッファ複合消弧室', '動的自己圧縮消弧室', 'ロシア自能ガス吹き消弧室'],
      ['定格通電電流', '1250A / 2000A / 3150A', '1250A / 2500A / 3150A', '1250A / 2000A / 3150A', '1250A / 2000A / 2500A'],
      ['定格短絡遮断電流', '31.5kA / 40kA (3s耐量)', '31.5kA / 40kA (3s)', '31.5kA / 40kA (3s)', '31.5kA / 40kA (3s)'],
      ['操作機構方式', '純スプリング操作機構（モータ蓄勢・1万回）', 'スプリング/油圧スプリングBLK', 'FK3型スプリング操作機構', 'ППВ型スプリング機構'],
      ['極寒使用環境温度', '-60℃〜+55℃（SF6/CF4混合ガス・ロシアUHL1）', '-50℃〜+40℃（ヒータ要）', '-50℃〜+50℃', '-60℃〜+40℃（混合ガスUHL1）'],
      ['近距離故障TRV上昇率', 'RRTRV >= 2.0 kV/μs (SLF L90厳格試験)', 'RRTRV >= 2.0 kV/μs', 'RRTRV >= 2.0 kV/μs', 'RRTRV >= 1.8 kV/μs'],
      ['がい管種別・沿面距離', 'シリコーンゴム複合がい管（沿面距離≥31mm/kV）', '磁器/ポリマー選択可', '複合ブッシング', '磁器/ポリマー (3.1 cm/kV)'],
      ['定格動作責務', 'O - 0.3s - CO - 3min - CO (高速再閉路)', 'O - 0.3s - CO - 3min - CO', 'O - 0.3s - CO - 3min - CO', 'О - 0.3с - ВО - 180с - ВО'],
      ['耐震・耐風性能', '0.3g (震度9耐震) / 風速 45 m/s', '0.3g / 風速 40 m/s', '0.3g / 風速 40 m/s', '9点 (MSK-64) / 40 m/s'],
    ],
    es: [
      ['Tensión Nominal y Máxima', '110 kV (Ur = 126 kV) / 35 kV (40.5 kV)', '110 kV (Ur = 145 kV)', '110 kV (Ur = 145 kV)', '110 kV (Ur = 126 kV)'],
      ['Topología de Cámara de Corte', 'Térmica Auto-Puffer (Doble Tobera PTFE)', 'Auto-Puffer / Puffer Híbrido', 'Compresión Dinámica Propia', 'Cámara Auto-Puffer ВГТ'],
      ['Corriente Nominal', '1250A / 2000A / 3150A', '1250A / 2500A / 3150A', '1250A / 2000A / 3150A', '1250A / 2000A / 2500A'],
      ['Poder de Corte en Cortocircuito', '31.5kA / 40kA (3s de soporte)', '31.5kA / 40kA (3s)', '31.5kA / 40kA (3s)', '31.5kA / 40kA (3s)'],
      ['Mecanismo de Operación', 'Resorte Puro Motorizado (10,000 ciclos)', 'Resorte / Hidráulico-Resorte BLK', 'Resorte Serie FK3', 'Mecanismo de Resorte ППВ'],
      ['Rango de Temperatura Ártica', '-60°C a +55°C (Mezcla SF6/CF4 / GOST UHL1)', '-50°C a +40°C (Requiere Calefactor)', '-50°C a +50°C', '-60°C a +40°C (SF6/CF4 UHL1)'],
      ['Tasa de Crecimiento TRV (SLF)', 'RRTRV >= 2.0 kV/μs (Ensayos SLF L90/L75)', 'RRTRV >= 2.0 kV/μs', 'RRTRV >= 2.0 kV/μs', 'RRTRV >= 1.8 kV/μs'],
      ['Aislador y Línea de Fuga', 'Silicona Polimérica Compuesta (>=31mm/kV)', 'Porcelana / Polimérico', 'Bushing Compuesto', 'Porcelana / Polímero (3.1 cm/kV)'],
      ['Secuencia de Operación Nominal', 'A - 0.3s - CA - 3min - CA (Recierre Rápido)', 'A - 0.3s - CA - 3min - CA', 'A - 0.3s - CA - 3min - CA', 'О - 0.3с - ВО - 180с - ВО'],
      ['Resistencia Sísmica y Viento', '0.3g (Sismo Magnitud 9) / Viento 45 m/s', '0.3g / Viento 40 m/s', '0.3g / Viento 40 m/s', '9 puntos (MSK-64) / 40 m/s'],
    ],
    ru: [
      ['Номинальное и наибольшее рабочее напряжение', '110 кВ (наиб. 126 кВ) / 35 кВ (40.5 кВ)', '110 кВ (наиб. 145 кВ)', '110 кВ (наиб. 145 кВ)', '110 кВ (наиб. 126 кВ)'],
      ['Тип дугогасительного устройства', 'Автокомпрессионное (тепловое расширение + 2 PTFE сопла)', 'Автокомпрессионное гибридное', 'Автопневматическое динамическое', 'Автокомпрессионное типа ВГТ'],
      ['Номинальный рабочий ток', '1250 А / 2000 А / 3150 А', '1250 А / 2500 А / 3150 А', '1250 А / 2000 А / 3150 А', '1250 А / 2000 А / 2500 А'],
      ['Номинальный ток отключения КЗ', '31.5 кА / 40 кА (ток терм. стойкости 3 с)', '31.5 кА / 40 кА (3 с)', '31.5 кА / 40 кА (3 с)', '31.5 кА / 40 кА (3 с)'],
      ['Тип привода выключателя', 'Пружинный привод с моторным взводом (10 000 циклов)', 'Пружинный / пружинно-гидравлический BLK', 'Пружинный привод FK3', 'Пружинный привод типа ППВ / МПП'],
      ['Климатическое исполнение и температура', '-60°C...+55°C (смесь SF6/CF4 / ГОСТ 15150 УХЛ1)', '-50°C...+40°C (требует обогрева)', '-50°C...+50°C', '-60°C...+40°C (смесь УХЛ1)'],
      ['Скорость нарастания ПВН при БКЗ', 'RRTRV >= 2.0 кВ/мкс (режимы L90/L75)', 'RRTRV >= 2.0 кВ/мкс', 'RRTRV >= 2.0 кВ/мкс', 'RRTRV >= 1.8 кВ/мкс'],
      ['Тип внешней изоляции и длина пути утечки', 'Полимерная кремнийорганическая (IV СЗ >=3.1 см/кВ)', 'Фарфор / полимер на выбор', 'Композитная покрышка', 'Фарфоровая / полимерная (3.1 см/кВ)'],
      ['Номинальный цикл операций', 'О - 0.3 с - ВО - 180 с - ВО (быстродействующее АПВ)', 'О - 0.3 с - ВО - 180 с - ВО', 'О - 0.3 с - ВО - 180 с - ВО', 'О - 0.3 с - ВО - 180 с - ВО'],
      ['Сейсмостойкость и ветроустойчивость', '9 баллов по шкале MSK-64 (0.3g) / ветер 45 м/с', '0.3g / ветер 40 м/с', '0.3g / ветер 40 м/с', '9 баллов (MSK-64) / ветер 40 м/с'],
    ],
  },
  sec4Title: {
    en: '4. Critical Grid Deployment Scenarios & Sizing Recommendations',
    zh: '4. 典型高压电网工况选型配置与工程部署方案',
    ja: '4. 典型高圧系統環境における推奨選定構成・エンジニアリング適用事例',
    es: '4. Escenarios de Aplicación en Alta Tensión y Recomendaciones de Configuración',
    ru: '4. Типовые сценарии применения и рекомендации по выбору конфигурации',
  },
  scenarios: {
    en: [
      {
        title: '110kV/35kV Step-Up Substation for Thermal & Hydro Power Plants',
        recommend: 'FLW-110/3150-40 (ВГТ-110-40/3150) with Pure Spring Mechanism, Composite Bushings & Dual-Core Optical CT Interface',
        reason: 'Delivers full 3150A continuous generation capacity and 40kA short-circuit interrupting duty with ultrafast 3-cycle total break time to protect generation step-up transformers.',
      },
      {
        title: 'Siberian & CIS Permafrost Substation (-60°C / ГОСТ 15150 УХЛ1)',
        recommend: 'FLW-110/2000-31.5-UHL1 (ВГТ-110 УХЛ1) with 50% SF6 + 50% CF4 Binary Non-Freezing Mixed Gas & Stainless Steel Control Cabinet',
        reason: 'Eliminates electrical tank heating failures in Arctic -60°C conditions. Certified for Russian PJSC Rosseti 110kV transmission open switchyards (ОРУ-110).',
      },
      {
        title: 'Renewable 200MW Solar / Wind Collector 35kV High-Capacity Substation',
        recommend: 'FLW-35/2000-31.5 (ВТ-35-31.5/2000) Live-Tank Breaker with Rogowski Coil CTs & IEC 61850 GOOSE Protocol',
        reason: 'Provides zero-restrike shunt capacitor and harmonic filter switching, robust against severe lightning and switching surge overvoltages.',
      },
    ],
    zh: [
      {
        title: '大中型火电/水电站 110kV/35kV 发电机主变升压出线断路器',
        recommend: 'FLW-110/3150-40（俄标 ВГТ-110-40/3150）瓷柱式断路器 + 纯弹簧机构 + 硅橡胶复合套管 + 双套光电电流互感器接口',
        reason: '满足 3150A 满负荷大电流长期安全载流与 40kA 极高短路开断能力，全开断时间 $\le 50\text{ms}$（3 个周波），极速切除主变近区短路冲击。',
      },
      {
        title: '西伯利亚与独联体极寒永久冻土变电站（-60°C 严寒 / ГОСТ 15150 УХЛ1）',
        recommend: 'FLW-110/2000-31.5-UHL1（俄标 ВГТ-110-31.5/2000 УХЛ1）+ 50% SF6 + 50% CF4 耐极寒二元混合气体 + AISI 304 不锈钢控制箱',
        reason: '彻底解决 -60°C 极寒下 SF6 液化与电加热器故障隐患，完全符合俄罗斯国家电网 ПАО «Россети» 110kV 户外敞开式配电装置（ОРУ-110）严苛入网准入。',
      },
      {
        title: '200MW 级集中式光伏/风电汇集站 35kV 高压出线断路器',
        recommend: 'FLW-35/2000-31.5（俄标 ВТ-35-31.5/2000）户外瓷柱式断路器 + 内置罗氏线圈与电容分压 + IEC 61850 GOOSE 通讯',
        reason: '具备 C2 级无重燃开断无功补偿电容器组与 SVG 滤波支路能力，耐受新能源场站频繁投切操作与雷击过电压考验。',
      },
    ],
    ja: [
      {
        title: '発電所 110kV/35kV 主変圧器昇圧送電用高圧遮断器',
        recommend: 'FLW-110/3150-40（ロシアВГТ-110-40/3150）純スプリング式 + 複合がい管',
        reason: '3150A大電流通電と40kA短絡遮断に対応。全遮断時間3サイクル（≤50ms）で主変圧器を保護。',
      },
      {
        title: 'シベリア・永久凍土帯極寒変電所（-60℃耐候 / GOST UHL1）',
        recommend: 'FLW-110/2000-31.5-UHL1 + 50% SF6 + 50% CF4 混合ガス仕様',
        reason: '-60℃でも液化せずヒーター故障による停電を防止。ロシアRosseti認証仕様。',
      },
      {
        title: '200MW風力・太陽光メガソーラー 35kV集電変電所',
        recommend: 'FLW-35/2000-31.5（ロシアВТ-35）+ IEC 61850スマート通信',
        reason: '進相コンデンサ・SVGのC2級無重燃開閉に対応し、再エネ頻繁開閉に最適。',
      },
    ],
    es: [
      {
        title: 'Subestación Elevadora de 110kV/35kV en Centrales de Generación',
        recommend: 'FLW-110/3150-40 (ВГТ-110-40/3150) con Mecanismo de Resorte y Bushings de Silicona',
        reason: 'Soporta 3150A continuos y 40kA de cortocircuito con tiempo total de corte de 3 ciclos (≤50ms) para proteger transformadores principales.',
      },
      {
        title: 'Subestaciones en Permafrost Siberiano (-60°C / GOST UHL1)',
        recommend: 'FLW-110/2000-31.5-UHL1 con Mezcla Incongelable 50% SF6 + 50% CF4',
        reason: 'Evita fallas por licuefacción del gas a -60°C en patios abiertos de 110kV (ОРУ-110) bajo normas de Rosseti.',
      },
      {
        title: 'Subestación Colectora de 35kV para Parques Renovables de 200MW',
        recommend: 'FLW-35/2000-31.5 (ВТ-35) con Protocolo IEC 61850 GOOSE',
        reason: 'Maniobra de bancos capacitivos y filtros armónicos sin reencendidos (Clase C2).',
      },
    ],
    ru: [
      {
        title: 'ОРУ-110 кВ блочных повышающих подстанций ТЭС, ГЭС и АЭС',
        recommend: 'ВГТ-110-40/3150 УХЛ1 (FLW-110) с пружинным приводом и полимерными покрышками',
        reason: 'Обеспечивает длительный ток 3150 А и отключающую способность 40 кА со временем отключения до 50 мс для защиты блочных трансформаторов.',
      },
      {
        title: 'Подстанции ОРУ-110/35 кВ в условиях Сибири и Крайнего Севера (-60°C, ГОСТ 15150 УХЛ1)',
        recommend: 'ВГТ-110-31.5/2000 УХЛ1 на незамерзающей смеси SF6/CF4 со шкафом из нержавеющей стали AISI 304',
        reason: 'Исключает сжижение газа при -60°C и отказ электроподогрева баков. Соответствует требованиям аттестации ПАО «Россети».',
      },
      {
        title: 'ОРУ-35 кВ солнечных и ветровых электростанций мощностью до 200 МВт',
        recommend: 'ВТ-35-31.5/2000 УХЛ1 с поддержкой протокола МЭК 61850 GOOSE',
        reason: 'Обеспечивает коммутацию батарей статических конденсаторов (БСК) и фильтров СТАТКОМ без повторных пробоев (класс С2).',
      },
    ],
  },
  ctaTitle: {
    en: 'Request FLW-110 / ВГТ-110 Circuit Breaker Engineering Catalogs & Russian ГОСТ Опросный лист',
    zh: '获取 FLW-110 / 俄标 ВГТ-110 高压断路器技术白皮书、CAD 尺寸图与俄标 Опросный лист',
    ja: 'FLW-110 / ロシアВГТ-110 高圧遮断器技術カタログ・CAD図面・ロシアGOST問診票の請求',
    es: 'Solicite Catálogos Técnicos de Interruptores FLW-110 / ВГТ-110, Planos CAD y Cuestionario GOST',
    ru: 'Запросить опросный лист на выключатель ВГТ-110 / ВТ-35, габаритные чертежи и коммерческое предложение',
  },
  ctaDesc: {
    en: 'Connect directly with Henry (Feichi Chief High-Voltage Substation Engineer) to review SLD parameters, TRV calculations, arctic mixed-gas options, and request factory type-test reports with global FOB/CIF delivery within 24 hours.',
    zh: '直接与飞驰电气高压变电站总工程师 Henry 沟通，审核单线图一次接线、近区故障 TRV 计算书、极寒混合气体选配方案，获取全套型式试验报告与 24 小时极速技术方案响应。',
    ja: '飛馳電気 高圧変電チーフエンジニア Henry と直接連携し、単線結線図・TRV計算書・極寒混合ガス仕様・型式試験成績書・グローバル見積書をご提供します。',
    es: 'Contacte a Henry (Ingeniero Jefe de Alta Tensión de Feichi) para revisar especificaciones unifilares, cálculos de TRV, opciones de gas ártico y recibir reportes de prueba de tipo con entregas FOB/CIF.',
    ru: 'Свяжитесь с главным инженером Henry для заполнения Опросного листа на элегазовый выключатель ВГТ-110 / ВТ-35, расчета параметров ПВН, получения чертежей КД/Э3 и расчета стоимости поставки.',
  },
};
