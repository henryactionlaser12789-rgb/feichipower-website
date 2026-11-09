import type { WhitepaperItem } from './whitepapersData';

export const week42Whitepaper: WhitepaperItem = {
  id: 'week-42',
  week: 42,
  slug: '110kv-500kv-transformer-bushings-dga-dielectric-loss-pdm-guide',
  category: 'substation',
  categoryLabel: {
    en: '110kV–500kV Transformer Bushings & Online DGA/Dielectric Dissipation Monitoring (IEC 60137 / IEEE C57.19.01 / ГОСТ 10693 / СТО Россети)',
    zh: '110kV–500kV 大容量主变高压电容型套管（RIP/RIS/OIP）介损微变化与油中溶解气体（DGA）在线色谱预警专论',
    ja: '110kV〜500kV 主変圧器コンデンサ形ブッシング（RIP/RIS/OIP）誘電正接（tanδ）・DGA油中ガスオンライン診断技術指針',
    es: 'Pasatapas Capacitivos de Transformador 110kV–500kV (RIP/RIS/OIP): Pérdidas Dieléctricas (tanδ), DGA Cromatografía y Monitoreo Térmico (IEC 60137)',
    ru: 'Высоковольтные конденсаторные вводы трансформаторов 110-500 кВ (RIP, RIS, ОИП): онлайн-мониторинг тангенса диэлектрических потерь (tgδ), емкости C1, газов в масле (ХАРГ/DGA) по ГОСТ 10693-81 и СТО Россети',
  },
  title: {
    en: '110kV–500kV Power Transformer Capacitive Bushings (Resin Impregnated Paper RIP vs Synthetic RIS vs Oil-Impregnated OIP) Dielectric Dissipation Factor ($\tan\delta$), Capacitance ($C_1$), and Multi-Gas Chromatographic DGA Inversion (Thermal Aging Kinetics, Moisture Migration Dynamics, Creepage Distance for Siberian -50°C Arctic УХЛ1; Russian GOST series ВВТ-110/220/500; Chinese FE-BUSH-110/500 series) Technical Whitepaper: Dualoville Duval Triangle 1-4-5 Diagnostics ($C_2H_2 / C_2H_4$ Arcing Margins), Extreme Cold Shock Hydrophobic Silicone Rubber Shed Hydrolysis, High-Precision On-Line Dielectric Bridge ($\Delta\tan\delta \le 0.001$), and Seismic High-Withstand Architecture (Benchmarking Hitachi Energy, Trench Group, HSP Hochspannungsgeräte, Russian JSC Izolyator & CHINT)',
    zh: '110kV–500kV 大容量电力变压器电容型高压套管（环氧玻纤浇注纸绝缘 RIP、合成树脂绝缘 RIS 与传统油纸电容 OIP）介质损耗因数（$\tan\delta$）、主电容量（$C_1$）热电微漂移与油中溶解气体（DGA）色谱反演工程指南：西伯利亚 -50°C 极寒环境大温差冷热冲击硅橡胶复合伞裙水解老化方程（爬电比距 $\ge 31\text{ mm/kV}$ 符合 ГОСТ 9920 Ⅳ级重污秽防污闪）、杜瓦尔三角形（Duval Triangle 1-4-5）内部放电/过热故障特征气体多维映射（乙炔 $C_2H_2$ 产生率 $\le 0.1\text{ ppm/天}$ 极早期击穿拦截）、高精度数字差频介损电桥在线检测（$\Delta\tan\delta \le 0.001$ 纳安级漏电流解析）、以及 9 度抗震重型法兰力学拓扑（深度对标瑞士日立能源 Hitachi Energy、德国 Trench Group、德国 HSP Hochspannungsgeräte、俄罗斯百年套管厂 ООО «Завод «Изолятор» 与正泰电气）',
    ja: '110kV〜500kV 超高圧電力変圧器コンデンサ形ブッシング（RIP/RIS/OIP）誘電正接（tanδ）・静電容量（C1）微小ドリフトおよび油中溶存ガス（DGA）Duval三角形多次元診断技術白書：シベリア-50℃極寒複合シリコンゴム加水分解・耐汚損設計（31mm/kV）、アセチレンC2H2極初期絶縁破壊予知、ナノアンペア級漏洩電流測定（Hitachi Energy、Trench Group、Izolyatorベンチマーク）',
    es: 'Pasatapas Capacitivos de Alta Tensión 110kV–500kV (RIP/RIS/OIP / FE-BUSH-110/500 / ВВТ-110/500): Termodinámica y Envejecimiento Dieléctrico (tanδ, C1), Cromatografía DGA (Triángulo de Duval), Faldones de Silicona Hidrofóbicos para Siberia (-50°C) y Monitoreo en Línea de Corriente de Fuga (IEC 60137 / IEEE C57.19.01)',
    ru: 'Полное техническое руководство по расчету, выбору и предиктивному онлайн-мониторингу высоковольтных вводов трансформаторов 110, 220, 330 и 500 кВ серии ВВТ-110, ВВТ-220, ВВТ-500 (с RIP, RIS и бумажно-масляной изоляцией) по ГОСТ 10693-81, ГОСТ 15150-69 (УХЛ1), СТО Россети и IEC 60137. Рассмотрены: математическая модель диэлектрических потерь ($\\tan\\delta$), дрейфа емкости $C_1$, хроматографический анализ газов (ХАРГ) по треугольникам Дюваля 1-4-5, гидрофобность кремнийорганических юбок в условиях Арктики (-50°C), вибро- и сейсмостойкость до 9 баллов по MSK-64 и полный Опросный лист ПАО Россети (завод «Изолятор»).',
  },
  eyebrow: {
    en: 'EHV TRANSFORMER BUSHINGS & ONLINE DGA DIAGNOSTICS (IEC 60137 / ГОСТ 10693 / СТО РОССЕТИ)',
    zh: 'FE-SPEC-42 · 110kV–500kV 主变高压套管与 DGA 油气在线色谱诊断专论（IEC 60137 / ГОСТ 10693）',
    ja: 'FE-SPEC-42 · 110kV〜500kV 超高圧変圧器ブッシング・DGAガス解析仕様書（IEC 60137 / GOST）',
    es: 'FE-SPEC-42 · DOSSIER DE PASATAPAS DE TRANSFORMADOR Y DGA 110kV–500kV (IEC 60137 / ГОСТ 10693)',
    ru: 'FE-SPEC-42 · РУКОВОДСТВО ПО ТРАНСФОРМАТОРНЫМ ВВОДАМ 110-500 кВ (ГОСТ 10693-81 / СТО РОССЕТИ 56947007-29.180.010.008-2008)',
  },
  author: {
    en: 'Feichi EHV Power Transformer Insulation & Asset Health Institute (Lead: Henry)',
    zh: '飞驰电气超高压变压器绝缘与主设备健康诊断工程研究院（总工/外贸对接人：Henry）',
    ja: '飛馳電気 超高圧変圧器絶縁・アセットマネジメント研究所（チーフ：Henry）',
    es: 'Instituto de Ingeniería de Aislamiento y Diagnóstico de Transformadores Feichi (Líder: Henry)',
    ru: 'Инженерно-исследовательский институт изоляции трансформаторов сверхвысокого напряжения и систем мониторинга Feichi Power (Гл. инженер: Henry)',
  },
  standards: 'IEC 60137 / IEEE Std C57.19.01 / IEC 60599 / GB/T 4109 / DL/T 1432 / ГОСТ 10693-81 / ГОСТ 9920-89 / ГОСТ 15150-69 (УХЛ1) / СТО РОССЕТИ 56947007-29.180.010.008-2008',
  readTime: {
    en: '29 min technical study (Includes Equivalent Dielectric Dissipation Loss Inversion, Duval Multi-Triangle Gas Inversion Matrices, RIP/RIS Stress Grading Dynamics & Russian ВВТ-110/500 Questionnaire)',
    zh: '29 分钟深度技术研读（含等效介损微漂移物理反演方程、杜瓦尔特征气体多维张量矩阵、RIP/RIS 固态电容芯体轴向电场分级计算与俄标 ВВТ-110/500 选型表单）',
    ja: '29分 専門設計解説（誘電損失等価反転モデル・Duval三角形多次元行列・RIP/RIS電位分圧コア軸方向電界解析・ロシアВВТ-110/500選定問診票）',
    es: '29 min de lectura técnica (Incluye ecuaciones de disipación dieléctrica, matrices cromatográficas de Duval, gradación de campo en núcleos RIP/RIS y cuestionario técnico)',
    ru: '29 мин технического изучения (включая уравнения дрейфа $\\tan\\delta$, матрицы треугольников Дюваля для ХАРГ, расчет емкостных экранов остовов RIP/RIS и полный Опросный лист на вводы 110-500 кВ)',
  },
  summary: {
    en: 'An authoritative technical whitepaper on 110kV, 220kV, 330kV, and 500kV Extra-High Voltage Power Transformer Bushings (Resin Impregnated Paper RIP, Resin Impregnated Synthetic RIS, Oil-Impregnated Paper OIP; Chinese FE-BUSH series; Russian GOST types ВВТ-110, ВВТ-220, ВВТ-330, ВВТ-500) engineered for thermal/hydro generation step-up transformers, bulk transmission hubs, and Siberian Arctic -50°C УХЛ1 networks (rated currents $I_r = 1250\\text{A} \\sim 4000\\text{A}$, cantilever bending withstand $\\ge 2000\\text{N} \\sim 5000\\text{N}$, test tan $\\delta \\le 0.40\\%$, annual failure rate $\\le 0.05\\%$). Benchmarking international leaders Hitachi Energy (Switzerland), Trench Group (Germany), HSP Hochspannungsgeräte (Germany), and Russian pioneer Zavod Izolyator (Moscow), this dossier explores: 1) Capacitive Core Equipotential Electric Stress Grading (hyperbolic logarithmic screen radius distribution $r_n = r_0 \\cdot e^{k n}$), eliminating internal edge field concentrations; 2) Dielectric Loss Factor ($\\tan\\delta$) and Main Capacitance ($C_1$) Inversion under multi-harmonic electric fields, quantifying moisture ingress ($H_2O > 1.5\\%$) and partial conductive layer puncture; 3) Multi-Gas Chromatographic Dissolved Gas Analysis (DGA) inversion via Duval Triangles 1, 4, and 5 ($CH_4, C_2H_4, C_2H_2, C_2H_6, CO, H_2$), establishing sub-ppm early arcing warnings; 4) Hydrophobic Silicone Rubber Composite Shed (SIR) Aging Resistance under Arctic $-50^\\circ\\text{C}$ frost-thaw mechanical stress (ГОСТ 9920 IV creepage $\\ge 31\\text{ mm/kV}$); 5) Explosion-proof, oil-free, dry-type RIP vs solid RIS synthetic core mechanical reliability; and 6) Complete PJSC Rosseti 110-500kV High-Voltage Transformer Bushings Опросный лист questionnaire templates.',
    zh: '系统阐述 110kV、220kV、330kV 与 500kV 超高压主变压器与并联电抗器高压电容型套管系统（环氧玻纤浇注纸绝缘 RIP、合成无水绝缘 RIS、高纯油纸电容 OIP；国标飞驰 FE-BUSH 系列；俄标 ВВТ-110, ВВТ-220, ВВТ-330, ВВТ-500 变压器套管装置）在大型发电机升压变、跨区电网联络变及西伯利亚极寒工矿区中的主绝缘微裂化演化、电容芯体等电位均压与油气色谱（DGA）在线诊断规范（额定工作电流 $I_r = 1250\text{A} \sim 4000\text{A}$，法兰弯曲机械破坏负荷 $\ge 2000\text{N} \sim 5000\text{N}$，出厂工频介损因数 $\tan\delta \le 0.40\%$，主电容年漂移率 $\le 0.5\%$）。深度对标瑞士日立能源 Hitachi Energy、德国 Trench Group、德国高压套管公司 HSP Hochspannungsgeräte 以及俄罗斯百年套管设计制造先驱 ООО «Завод «Изолятор» 等全球顶级套管专家，重点解析：1）电容芯体等容等电位同心屏双曲对数半径梯级拓扑（$r_n = r_0 \cdot e^{k n}$），实现轴向与径向绝缘电场强度完全均匀化；2）介质损耗因数（$\tan\delta$）与主电容量（$C_1$）热电微漂移方程，精准反演微量水分受潮侵蚀（绝缘纸含水量 $>1.5\%$）与电容屏击穿短路早期缺陷；3）油中溶解气体（DGA）色谱反演模型结合杜瓦尔三角形（Duval Triangle 1-4-5）与三比值法（$CH_4, C_2H_4, C_2H_2, C_2H_6, CO, H_2$），确立微量乙炔（$C_2H_2$ 产生率 $\le 0.1\text{ ppm/天}$）极早期放电短路预警拦截；4）西伯利亚 -50°C 极寒环境硅橡胶复合绝缘外套（SIR）大温差冻融抗撕裂与防污闪机理（爬电比距 $\ge 31\text{ mm/kV}$ 符合 ГОСТ 9920 Ⅳ级严酷重污秽环境）；5）干式无油防爆 RIP/RIS 套管抗震防爆与零火灾蔓延物理架构；以及 6）符合俄罗斯国家电网 ПАО «Россети» 与海关联盟 ТР ТС 004/2011 认证的《Опросный лист на вводы трансформаторные 110-500 кВ》工程选型技术规范。',
    ja: '110kV〜500kV 超高圧変圧器コンデンサ形ブッシング（飛馳FE-BUSHシリーズ・ロシアGOST ВВТ-110/500）の完全技術白書（定格電流1250〜4000A、機械曲げ耐力≥2000〜5000N、tanδ ≤ 0.40%）。Hitachi Energy、Trench Group、HSP、ロシアIzolyatorをベンチマークし、同心電容スクリーン均一電界設計、誘電正接（tanδ）・静電容量（C1）オンライン反転解析、Duval三角形DGA油中溶存ガス極早期診断、シベリア-50℃極寒シリコンゴム複合笠耐汚損設計、およびロシアRosseti標準Опросный лист問診票を網羅。',
    es: 'Expediente técnico de Pasatapas Capacitivos de Transformadores 110kV–500kV (FE-BUSH-110/500 / ВВТ-110/500): Gradación de campo eléctrico en núcleos RIP/RIS, ecuaciones de disipación dieléctrica (tanδ, C1), cromatografía de gases DGA (Duval), faldones de caucho de silicona resistentes a -50°C en Siberia y cuestionario técnico normalizado de Rosseti.',
    ru: 'Полное техническое руководство по расчету, выбору и диагностике трансформаторных вводов 110, 220, 330 и 500 кВ серии ВВТ-110, ВВТ-220, ВВТ-330, ВВТ-500 на токи до 4000 А с изоляцией RIP/RIS по ГОСТ 10693-81, ГОСТ 15150-69 (УХЛ1), СТО Россети и IEC 60137. Рассмотрены: расчет емкостного остова с равномерным градиентом поля, онлайн-анализ тангенса угла потерь ($\\tan\\delta$) и емкости $C_1$, хроматография газов в масле (ХАРГ) по Дювалю, гидрофобная кремнийорганическая изоляция для Сибири при -50°C (длина пути утечки $\\ge 31$ мм/кВ) и полный Опросный лист ПАО Россети (завод «Изолятор»).',
  },
  sec1Title: {
    en: '1. Capacitive Core Dielectric Field Grading & Dissipation Inversion ($r_n = r_0 \\cdot e^{k n}$ & $\\tan\\delta$)',
    zh: '1. 电容芯体等电位梯度分压拓扑与介质损耗因数（$\\tan\\delta$）在线反演物理模型',
    ja: '1. コンデンサ形コア等電位分圧トポロジーおよび誘電正接（tanδ）オンライン反転物理モデル',
    es: '1. Gradación de Campo Dieléctrico en Núcleos Capacitivos y Modelo de Disipación ($\\tan\\delta$)',
    ru: '1. Электростатический расчет емкостного остова ввода и физическая модель дрейфа диэлектрических потерь ($\\tan\\delta$)',
  },
  sec1Text: {
    en: `High-voltage transformer bushings rated for 110kV to 500kV must control extreme electric field stress concentrations at the grounded mounting flange interface. Feichi capacitive cores utilize precision-wound conductive aluminum foil screens embedded inside Resin Impregnated Paper (RIP) or synthetic resin (RIS), establishing an array of cylindrical capacitors in series ($C_1, C_2, \\dots, C_n$):
$$r_n = r_0 \\cdot \\exp\\left( \\frac{n}{N} \\ln\\frac{r_N}{r_0} \\right), \\quad L_n = L_0 \\cdot \\left( 1 - \\frac{n}{N} \\left( 1 - \\frac{L_N}{L_0} \\right) \\right)$$
where $r_n$ and $L_n$ are the radius and axial length of the $n$-th capacitor screen layer, maintaining equal partial capacitances ($C_i = 2\\pi \\epsilon_0 \\epsilon_r L_i / \\ln(r_i / r_{i-1}) = \\text{const}$) and uniform radial/axial electric field gradients ($E_r \\le 4.5\\text{ kV/mm}, E_z \\le 1.2\\text{ kV/mm}$).

The dielectric dissipation factor ($\\tan\\delta$) of the main insulation ($C_1$) reflects thermal aging and polar moisture ingress:
$$\\tan\\delta = \\frac{I_R}{I_C} = \\frac{G}{\\omega C_1} = \\frac{\\epsilon''}{\\epsilon'}$$
For brand new RIP bushings tested at $+20^\\circ\\text{C}$, $\\tan\\delta \\le 0.40\\%$. Under continuous operating conditions, on-line monitoring bridges track micro-fluctuations in dielectric loss ($\\Delta\\tan\\delta \\le 0.001$) and capacitance shifts ($\\Delta C_1 / C_1 \\ge 1.0\\%$). An upward shift in $C_1$ signals breakdown of internal foil screen layers, allowing asset managers to perform controlled replacement prior to explosive catastrophic failure.`,
    zh: `在 110kV 至 500kV 超高压变压器套管中，接地的安装法兰与高电位中心导杆之间承受着极高的空间电场集中应力。飞驰电气高压电容型套管采用高真空环氧树脂浇注纸（RIP）或无水合成树脂（RIS）电容芯体，在层间精密卷制多层同心同轴导电铝箔均压屏，构成一系列串联同心圆柱形电容器阵列（$C_1, C_2, \dots, C_n$）：
$$r_n = r_0 \cdot \exp\left( \frac{n}{N} \ln\frac{r_N}{r_0} \right), \quad L_n = L_0 \cdot \left( 1 - \frac{n}{N} \left( 1 - \frac{L_N}{L_0} \right) \right)$$
式中，$r_n$ 与 $L_n$ 分别为第 $n$ 层电容屏的半径与轴向有效长度。通过精细数学求解，确保各相邻同心电容屏的电容量完全恒定相等（$C_i = 2\pi \epsilon_0 \epsilon_r L_i / \ln(r_i / r_{i-1}) = \text{常数}$），从而在整个绝缘芯体内实现完全均匀的径向电场（$E_r \le 4.5\text{ kV/mm}$）与轴向电位梯度（$E_z \le 1.2\text{ kV/mm}$）。

主绝缘（$C_1$）的介质损耗因数（$\tan\delta$）是表征绝缘老化与极性微量水分侵蚀的核心物理指标：
$$\tan\delta = \frac{I_R}{I_C} = \frac{G}{\omega C_1} = \frac{\epsilon''}{\epsilon'}$$
在 $+20^\circ\text{C}$ 标准试验条件下，全新出厂的飞驰 RIP 干式电容套管工频介损因数 $\tan\delta \le 0.40\%$。在现场带电运行中，高精度全数字在线差频介损监测电桥实时捕获末屏纳安级泄漏电流矢量，实现介损微漂移（分辨率 $\Delta\tan\delta \le 0.001$）与主电容量微变（$\Delta C_1 / C_1 \ge 1.0\%$ 预警）的在线诊断。主电容 $C_1$ 阶跃上升即标志着内部存在局部电容屏击穿短路，能够在发生恶性绝缘闪络爆炸前数周发出精准预警。`,
    ja: `高圧変圧器ブッシングは多層同心アルミスクリーンによる均等分圧設計（半径対数分布）を採用し、半径方向（≤4.5kV/mm）および軸方向（≤1.2kV/mm）の電界を完全平坦化。出廠時誘電正接tanδ ≤ 0.40%を達成し、運転中ΔC1 ≥ 1.0%検知による電容スクリーン破壊の極早期予知を実現します。`,
    es: 'Los pasatapas capacitivos de 110kV–500kV utilizan pantallas cilíndricas concéntricas con gradiente logarítmico para uniformizar el campo eléctrico. Feichi garantiza tanδ ≤ 0.40% en fábrica e integra puentes de medición en línea capaces de detectar variaciones de capacitancia de ΔC1 ≥ 1.0% antes de fallas catastróficas.',
    ru: 'Емкостный остов вводов 110-500 кВ состоит из слоев RIP/RIS изоляции с алюминиевыми уравнительными обкладками по логарифмическому закону ($E_r \\le 4.5$ кВ/мм). Завод Feichi гарантирует исходный $\\tan\\delta \\le 0.40\\%$, а системы онлайн-мониторинга фиксируют пробой секций обкладок при дрейфе емкости $\\Delta C_1 / C_1 \\ge 1.0\\%$.',
  },
  sec2Title: {
    en: '2. Multi-Gas Chromatographic DGA Inversion via Duval Triangles ($CH_4, C_2H_4, C_2H_2$ Dynamics)',
    zh: '2. 变压器绝缘油溶解气体（DGA）色谱反演模型与杜瓦尔特征三角形（Duval Triangle 1-4-5）',
    ja: '2. 変圧器油中溶存ガス分析（DGA）Duval三角形多次元診断モデル（CH4, C2H4, C2H2動態解析）',
    es: '2. Análisis Cromatográfico de Gases Disueltos (DGA) mediante Triángulos de Duval (Cinética $CH_4, C_2H_4, C_2H_2$)',
    ru: '2. Хроматографический анализ растворенных в масле газов (ХАРГ/DGA) по треугольникам Дюваля 1-4-5 ($CH_4, C_2H_4, C_2H_2$)',
  },
  sec2Text: {
    en: `In oil-filled power transformer main tanks and Oil-Impregnated Paper (OIP) bushings, localized electrical and thermal stresses decompose liquid hydrocarbon molecules ($C_n H_{2n+2}$) and solid cellulose paper into diagnostic fault gases: hydrogen ($H_2$), methane ($CH_4$), ethane ($C_2H_6$), ethylene ($C_2H_4$), acetylene ($C_2H_2$), carbon monoxide ($CO$), and carbon dioxide ($CO_2$).

Feichi engineering implements the advanced Duval Triangle method (IEC 60599 / IEEE C57.104 standard coordinates) to discriminate internal insulation failure mechanisms:
• Triangle 1 (Classic Fault Identification): Coordinates represent relative percentage concentrations:
$$\\% CH_4 = \\frac{CH_4}{CH_4 + C_2H_4 + C_2H_2} \\times 100$$
$$\\% C_2H_4 = \\frac{C_2H_4}{CH_4 + C_2H_4 + C_2H_2} \\times 100$$
$$\\% C_2H_2 = \\frac{C_2H_2}{CH_4 + C_2H_4 + C_2H_2} \\times 100$$
• Fault Classifications:
  - Partial Discharge (PD): High $H_2$ / $CH_4$ ratio without acetylene;
  - Low-Energy Discharge (D1): Sparking and tracking along pressboard barriers, trace $C_2H_2$;
  - High-Energy Arcing (D2): Flashover between bushing turrets or winding turns with massive $C_2H_2$ surge;
  - Thermal Faults ($T_1 < 300^\\circ\\text{C}, T_2 = 300\\sim 700^\\circ\\text{C}, T_3 > 700^\\circ\\text{C}$): Dominated by $C_2H_4$ and $C_2H_6$.

Our on-line photoacoustic spectroscopy (PAS) and gas chromatography analyzers achieve a detection limit of $0.1\\text{ ppm}$ for acetylene ($C_2H_2$), providing autonomous warning triggers when gas generation rates exceed $0.1\\text{ ppm/day}$.`,
    zh: `在充油大容量电力变压器本体及油纸电容（OIP）高压套管中，局部的微弱电弧放电、火花放电与过热热应力会促使变压器矿物绝缘油中的碳氢化合物分子（$C_n H_{2n+2}$）与固体纤维素绝缘纸发生热裂解，析出特征特征溶解气体：氢气（$H_2$）、甲烷（$CH_4$）、乙烷（$C_2H_6$）、乙烯（$C_2H_4$）、乙炔（$C_2H_2$）、一氧化碳（$CO$）与二氧化碳（$CO_2$）。

飞驰电气绝缘健康系统采用杜瓦尔特征三角形（Duval Triangle 1-4-5，IEC 60599 / IEEE C57.104 国际标准）构建多维放电与过热故障诊断空间：
• 三角形 1 经典故障识别坐标定义：
$$\% CH_4 = \frac{CH_4}{CH_4 + C_2H_4 + C_2H_2} \times 100$$
$$\% C_2H_4 = \frac{C_2H_4}{CH_4 + C_2H_4 + C_2H_2} \times 100$$
$$\% C_2H_2 = \frac{C_2H_2}{CH_4 + C_2H_4 + C_2H_2} \times 100$$
• 内部典型绝缘故障分类映射：
  - 局部放电（PD）：以高浓度 $H_2$ 与 $CH_4$ 为主，不含乙炔；
  - 低能放电（D1）：绝缘纸板沿面火花放电与碳化爬电，伴随微量 $C_2H_2$；
  - 高能电弧放电（D2）：套管升高座或绕组匝间工频击穿拉弧，产生剧烈激增的 $C_2H_2$；
  - 热过热故障（$T_1 < 300^\circ\text{C}, T_2 = 300\sim 700^\circ\text{C}, T_3 > 700^\circ\text{C}$）：以高浓度乙烯 $C_2H_4$ 与乙烷 $C_2H_6$ 为主导。

飞驰电气高精度光声光谱（PAS）与在线气相色谱分析仪将乙炔（$C_2H_2$）检测下限推进至 $0.1\text{ ppm}$，当特征气体绝对产气速率突破 $0.1\text{ ppm/天}$ 阈值时自动触发停电检修预警，彻底杜绝主变突发性击穿爆炸事故。`,
    ja: `変圧器油中溶存ガス分析（DGA）において、Duval三角形（CH4/C2H4/C2H2相対比率）を用い、部分放電（PD）、低エネルギー放電（D1）、高エネルギーアーク（D2）、熱的過熱（T1-T3）を精密分類。高精度PAS分析器によりアセチレンC2H2を0.1ppmの極限感度で常時監視します。`,
    es: 'La degradación térmica del aceite mineral genera gases disueltos (H2, CH4, C2H6, C2H4, C2H2). El método del Triángulo de Duval (IEC 60599) clasifica descargas parciales (PD), arcos de alta energía (D2) y sobrecalentamientos térmicos (T1-T3) con límites de detección de C2H2 de 0.1 ppm.',
    ru: 'Диагностика ХАРГ трансформаторного масла основана на треугольниках Дюваля 1-4-5 по МЭК 60599. Метод разделяет частичные разряды (PD), дуговые разряды (D1, D2) и термические дефекты (T1-T3). Фотоакустические датчики Feichi фиксируют появление ацетилена ($C_2H_2$) с точностью до 0.1 ppm.',
  },
  sec3Title: {
    en: '3. Technical Specification & Multi-Standard Comparison Matrix (FE-BUSH vs Russian ВВТ & Global Benchmarks)',
    zh: '3. 核心技术参数与多国标准对比矩阵（飞驰 FE-BUSH vs 俄标 ВВТ vs 国际标杆）',
    ja: '3. 主要技術パラメータおよび多国間規格比較表（FE-BUSH vs ロシアВВТ vs 国際基準）',
    es: '3. Matriz Comparativa de Especificaciones Técnicas (FE-BUSH vs ВВТ vs Estándares Globales)',
    ru: '3. Сравнительная матрица технических параметров (FE-BUSH-110/500 vs ВВТ-110/500 по ГОСТ 10693 vs мировые аналоги)',
  },
  tableHeaders: {
    en: [
      'Engineering Parameter',
      'Feichi FE-BUSH-110/220 Series (ВВТ-110/220)',
      'Feichi FE-BUSH-330/500 Series (ВВТ-330/500)',
      'Global Utility Standard (Hitachi / Izolyator / Trench)',
    ],
    zh: [
      '核心工程技术参数',
      '飞驰 FE-BUSH-110/220 系列 (俄标 ВВТ-110/220)',
      '飞驰 FE-BUSH-330/500 系列 (俄标 ВВТ-330/500)',
      '国际电网顶级标杆 (日立能源 / 俄罗斯Izolyator / Trench)',
    ],
    ja: [
      '主要設計パラメータ',
      '飛馳 FE-BUSH-110/220 (ВВТ-110/220)',
      '飛馳 FE-BUSH-330/500 (ВВТ-330/500)',
      '国際基準 (Hitachi Energy / Izolyator / Trench)',
    ],
    es: [
      'Parámetro Técnico',
      'Feichi FE-BUSH-110/220 (ВВТ-110/220)',
      'Feichi FE-BUSH-330/500 (ВВТ-330/500)',
      'Estándar Global (Hitachi / Izolyator / Trench)',
    ],
    ru: [
      'Технический параметр',
      'Feichi FE-BUSH-110/220 (ВВТ-110/220 кВ)',
      'Feichi FE-BUSH-330/500 (ВВТ-330/500 кВ)',
      'Отраслевой стандарт (Hitachi / Завод Изолятор / СТО Россети)',
    ],
  },
  tableRows: {
    en: [
      ['Rated Highest Voltage ($U_m$)', '126 kV / 145 kV / 252 kV', '363 kV / 420 kV / 550 kV', '126 kV – 550 kV (IEC 60137)'],
      ['Rated Normal Current ($I_r$)', '1250 A / 2000 A / 3150 A', '2000 A / 3150 A / 4000 A', '1250 A – 4000 A'],
      ['Lightning Impulse Withstand (BIL / $U_p$)', '550 kV / 650 kV / 1050 kV', '1175 kV / 1425 kV / 1550 kV', 'IEC 60137 / ГОСТ 1516.3-96'],
      ['Switching Impulse Withstand (SIL / $U_s$)', 'N/A / 850 kV', '950 kV / 1050 kV / 1175 kV', 'IEC 60137 / ГОСТ 10693-81'],
      ['Dielectric Loss Factor ($\\tan\\delta$ at 20°C)', '≤ 0.38% (Tested ≤ 0.30%)', '≤ 0.38% (Tested ≤ 0.32%)', '≤ 0.50% (Standard IEC / GOST)'],
      ['Core Insulation Technology', 'Dry RIP / RIS (Solid Epoxy Resin)', 'Dry RIP / RIS (Solid Epoxy Resin)', 'RIP, RIS, or Oil-Paper OIP'],
      ['Cantilever Bending Withstand', '≥ 2000 N / ≥ 3150 N (Heavy Duty)', '≥ 4000 N / ≥ 5000 N (Seismic 9-deg)', '1600 N – 4000 N'],
      ['Specific Creepage Distance', '≥ 31 mm/kV (ГОСТ 9920 IV Pollution)', '≥ 31 mm/kV (ГОСТ 9920 IV Pollution)', '25 mm/kV (Class III) / 31 mm/kV (Class IV)'],
      ['Siberian Cold Rating (Ambient)', '-50°C to +45°C (ГОСТ УХЛ1 Certified)', '-50°C to +45°C (ГОСТ УХЛ1 Certified)', '-40°C to +40°C (Standard IEC)'],
    ],
    zh: [
      ['最高工作电压 ($U_m$)', '126 kV / 145 kV / 252 kV', '363 kV / 420 kV / 550 kV', '126 kV – 550 kV (IEC 60137)'],
      ['额定工作电流 ($I_r$)', '1250 A / 2000 A / 3150 A', '2000 A / 3150 A / 4000 A', '1250 A – 4000 A'],
      ['雷电冲击耐受电压 (BIL / $U_p$)', '550 kV / 650 kV / 1050 kV', '1175 kV / 1425 kV / 1550 kV', 'IEC 60137 / ГОСТ 1516.3-96'],
      ['操作冲击耐受电压 (SIL / $U_s$)', '不适用 / 850 kV', '950 kV / 1050 kV / 1175 kV', 'IEC 60137 / ГОСТ 10693-81'],
      ['出厂工频介质损耗因数 ($\\tan\\delta$)', '≤ 0.38% (实测典型 ≤ 0.30%)', '≤ 0.38% (实测典型 ≤ 0.32%)', '≤ 0.50% (国标/俄标红线上限)'],
      ['电容芯体绝缘制造工艺', '全干式 RIP / RIS 固态环氧纸', '全干式 RIP / RIS 固态环氧纸', '干式 RIP/RIS 或 传统油纸 OIP'],
      ['法兰抗弯机械破坏负荷', '≥ 2000 N / ≥ 3150 N (重型加固)', '≥ 4000 N / ≥ 5000 N (抗震 9 度)', '1600 N – 4000 N'],
      ['外绝缘比爬电比距', '≥ 31 mm/kV (ГОСТ 9920 Ⅳ级重污秽)', '≥ 31 mm/kV (ГОСТ 9920 Ⅳ级重污秽)', '25 mm/kV (Ⅲ级) / 31 mm/kV (Ⅳ级)'],
      ['极寒气候运行等级', '-50°C 至 +45°C (俄标 УХЛ1 认证)', '-50°C 至 +45°C (俄标 УХЛ1 认证)', '-40°C 至 +40°C (常规环境)'],
    ],
    ja: [
      ['最高電圧 (Um)', '126 kV / 145 kV / 252 kV', '363 kV / 420 kV / 550 kV', '126 kV 〜 550 kV (IEC)'],
      ['定格電流 (Ir)', '1250 A / 2000 A / 3150 A', '2000 A / 3150 A / 4000 A', '1250 A 〜 4000 A'],
      ['雷インパルス耐電圧 (BIL)', '550 kV / 650 kV / 1050 kV', '1175 kV / 1425 kV / 1550 kV', 'IEC 60137 / GOST 1516.3'],
      ['誘電正接 (tanδ at 20°C)', '≤ 0.38% (実測 ≤ 0.30%)', '≤ 0.38% (実測 ≤ 0.32%)', '≤ 0.50% (IEC/GOST上限)'],
      ['絶縁構造方式', '完全乾式 RIP / RIS 固形樹脂', '完全乾式 RIP / RIS 固形樹脂', '乾式 RIP/RIS または 油浸紙 OIP'],
      ['曲げ機械破壊荷重', '≥ 2000 N / ≥ 3150 N', '≥ 4000 N / ≥ 5000 N (耐震9度)', '1600 N 〜 4000 N'],
      ['耐寒性 (環境温度)', '-50°C 〜 +45°C (ロシアУХЛ1適合)', '-50°C 〜 +45°C (ロシアУХЛ1適合)', '-40°C 〜 +40°C'],
    ],
    es: [
      ['Tensión Máxima (Um)', '126 kV / 145 kV / 252 kV', '363 kV / 420 kV / 550 kV', '126 kV – 550 kV (IEC)'],
      ['Corriente Nominal (Ir)', '1250 A / 2000 A / 3150 A', '2000 A / 3150 A / 4000 A', '1250 A – 4000 A'],
      ['Nivel de Impulso (BIL)', '550 kV / 650 kV / 1050 kV', '1175 kV / 1425 kV / 1550 kV', 'IEC 60137 / GOST 1516.3'],
      ['Factor de Pérdidas (tanδ)', '≤ 0.38% (Típico ≤ 0.30%)', '≤ 0.38% (Típico ≤ 0.32%)', '≤ 0.50% (IEC / GOST)'],
      ['Tecnología del Núcleo', 'RIP / RIS Seco (Resina Epóxica)', 'RIP / RIS Seco (Resina Epóxica)', 'RIP, RIS o Papel en Aceite OIP'],
      ['Carga Mecánica de Flexión', '≥ 2000 N / ≥ 3150 N', '≥ 4000 N / ≥ 5000 N (Sismo 9°)', '1600 N – 4000 N'],
      ['Clima Gélido Extremo', '-50°C a +45°C (Norma УХЛ1)', '-50°C a +45°C (Norma УХЛ1)', '-40°C a +40°C'],
    ],
    ru: [
      ['Наибольшее рабочее напряжение ($U_\\text{макс}$)', '126 кВ / 145 кВ / 252 кВ', '363 кВ / 420 кВ / 550 кВ (500 кВ)', '110 – 500 кВ (ГОСТ 10693)'],
      ['Номинальный ток ($I_\\text{ном}$)', '1250 А / 2000 А / 3150 А', '2000 А / 3150 А / 4000 А', '1250 А – 4000 А'],
      ['Испытательное напряжение грозового импульса (БИЛ)', '550 кВ / 650 кВ / 1050 кВ', '1175 кВ / 1425 кВ / 1550 кВ', 'ГОСТ 1516.3-96 / СТО Россети'],
      ['Испытательное напряжение коммутационного импульса', 'N/A / 850 кВ', '950 кВ / 1050 кВ / 1175 кВ', 'ГОСТ 10693-81 / СТО Россети'],
      ['Тангенс угла диэлектрических потерь ($\\tan\\delta$)', '≤ 0.38% (типовой ≤ 0.30%)', '≤ 0.38% (типовой ≤ 0.32%)', '≤ 0.50% (норма ГОСТ 10693)'],
      ['Тип внутренней изоляции', 'Твердая RIP / RIS изоляция', 'Твердая RIP / RIS изоляция', 'RIP, RIS или бумажно-масляная (ОИП)'],
      ['Испытательная консольная нагрузка на изгиб', '≥ 2000 Н / ≥ 3150 Н', '≥ 4000 Н / ≥ 5000 Н (сейсмика 9 баллов)', '1600 Н – 4000 Н'],
      ['Удельная длина пути утечки', '≥ 31 мм/кВ (IV степень загрязнения)', '≥ 31 мм/кВ (IV степень загрязнения)', '31 мм/кВ по ГОСТ 9920-89'],
      ['Климатическое исполнение', 'УХЛ1 (-50°C ... +45°C по ГОСТ 15150-69)', 'УХЛ1 (-50°C ... +45°C по ГОСТ 15150-69)', 'У1 / ХЛ1 / УХЛ1'],
    ],
  },
  sec4Title: {
    en: '4. Scenario-Based High-Voltage Bushing & Asset Health Application Decision Guide',
    zh: '4. 重点应用场景与超高压变压器套管工程选型决策指南',
    ja: '4. 重点適用産業別変圧器ブッシング選定マトリクス',
    es: '4. Guía de Decisión de Pasatapas de Transformador por Sector Industrial',
    ru: '4. Руководство по выбору высоковольтных вводов трансформаторов 110-500 кВ по отраслям применения',
  },
  scenarios: {
    en: [
      {
        title: 'Thermal & Nuclear Power Plant Generation Step-Up Transformers (GSU)',
        recommend: 'Recommendation: FE-BUSH-220/500-RIP Heavy Current Dry Bushings (3150A/4000A)',
        reason: 'Explosion-proof, oil-free RIP core eliminates transformer top tank fire hazards, handling continuous full-load thermal currents up to 4000A.',
      },
      {
        title: '500kV / 330kV Bulk Transmission Interconnection Grid Substations',
        recommend: 'Recommendation: FE-BUSH-500-RIS Solid Synthetic Resin Bushings with Online DGA/tanδ',
        reason: 'Zero-moisture absorbing synthetic RIS core with 1550kV BIL lightning withstand and integrated digital capacitance loss bridges.',
      },
      {
        title: 'Siberian Arctic Mining, Heavy Smelting & Polar Substations (-50°C, УХЛ1)',
        recommend: 'Recommendation: FE-BUSH-110/220-ARCTIC with Hydrophobic Silicone Rubber (IV Pollution)',
        reason: 'Certified for -50°C extreme thermal shock, 31mm/kV creepage for saline-alkali dust resistance, and 9-degree MSK-64 seismic reinforced flanges.',
      },
    ],
    zh: [
      {
        title: '大型火电、核电与燃气电厂发电机主变升压变电站（GSU 出口）',
        recommend: '选型推荐：FE-BUSH-220/500-RIP 大电流全干式套管 (3150A / 4000A，ВВТ-220/500)',
        reason: '全干式无油 RIP 结构彻底杜绝变压器箱顶火灾与爆炸扩散风险，超大载流容量满足发电机满负荷长期稳定送出。',
      },
      {
        title: '500kV / 330kV 跨省跨区主网架大型骨干联络变电站',
        recommend: '选型推荐：FE-BUSH-500-RIS 固态合成树脂超高压套管（配 DGA / $\tan\delta$ 在线监测）',
        reason: '无水合成绝缘芯体彻底消除受潮老化，雷电冲击耐受高达 1550kV，集成数字微介损电桥实现 24 小时绝缘健康掌控。',
      },
      {
        title: '西伯利亚极寒工矿冶炼基地与高盐雾重污秽极地电网（-50°C，УХЛ1）',
        recommend: '选型推荐：FE-BUSH-110/220-ARCTIC 极寒重污秽型（硅橡胶复合外套，Ⅳ级防污闪）',
        reason: '通过 -50°C 极限冷热冲击考核，31mm/kV 大爬电比距抵御工业粉尘盐渍闪络，重型加固法兰耐受 9 度强震（MSK-64）。',
      },
    ],
    ja: [
      {
        title: '火力・原子力・大型水力発電所主変圧器（GSU）昇圧設備',
        recommend: '推奨：FE-BUSH-220/500-RIP 大電流完全乾式ブッシング（3150A/4000A）',
        reason: '完全乾式無油構造で変圧器天板の火災爆発リスクをゼロ化、4000A大電流送電に対応。',
      },
      {
        title: '500kV / 330kV 基幹送電系統連系超高圧変電所',
        recommend: '推奨：FE-BUSH-500-RIS 合成樹脂乾式ブッシング（DGA・tanδ常時監視付）',
        reason: '非吸湿性RISコアにより劣化ゼロ、1550kV BIL耐圧性能とナノアンペア級誘電損診断を統合。',
      },
      {
        title: 'シベリア極寒鉱山・重化学プラント（-50℃極寒・重汚損環境）',
        recommend: '推奨：FE-BUSH 極寒重汚損対応シリコンゴム複合ブッシング（УХЛ1）',
        reason: '-50℃熱衝撃耐性、31mm/kV比沿面距離による塩害・粉塵フラッシオーバ完全防止設計。',
      },
    ],
    es: [
      {
        title: 'Transformadores Elevadores de Generación (GSU) en Centrales Térmicas y Nucleares',
        recommend: 'Recomendación: FE-BUSH-220/500-RIP Tipo Seco de Alta Corriente (3150A / 4000A)',
        reason: 'Núcleo RIP seco y libre de aceite que previene incendios en la cuba del transformador y soporta 4000A continuos.',
      },
      {
        title: 'Subestaciones de Interconexión Troncal de 500kV / 330kV',
        recommend: 'Recomendación: FE-BUSH-500-RIS de Resina Sintética con Monitoreo DGA/tanδ',
        reason: 'Núcleo hidrofóbico inmune a la humedad con BIL de 1550kV y puentes digitales de capacitancia integrados.',
      },
      {
        title: 'Minería y Plantas Metalúrgicas en Siberia (-50°C, УХЛ1, Alta Contaminación)',
        recommend: 'Recomendación: FE-BUSH Ártico con Aisladores de Caucho de Silicona (Clase IV)',
        reason: 'Diseñado para choque térmico polar de -50°C, línea de fuga de 31mm/kV contra salinidad y bridas para sismos de 9° MSK.',
      },
    ],
    ru: [
      {
        title: 'Блочные повышающие трансформаторы (БТ) ГЭС, ТЭС и АЭС (РУВН 110-500 кВ)',
        recommend: 'Рекомендация: Вводы серии ВВТ-220/500 с RIP-изоляцией на токи 3150 А / 4000 А',
        reason: 'Взрыво- и пожаробезопасность сухой RIP-изоляции, отсутствие масла на крышке бака и пропускная способность до 4000 А.',
      },
      {
        title: 'Опорные автотрансформаторы магистральных сетей 330 кВ и 500 кВ (ПАО Россети)',
        recommend: 'Рекомендация: Вводы ВВТ-500 с полимерной RIS-изоляцией и онлайн-системой tgδ/DGA',
        reason: 'Негигроскопичный остов RIS, испытательное напряжение грозового импульса 1550 кВ и встроенные датчики емкости C1/tgδ.',
      },
      {
        title: 'Тяжелые ГОКи, металлургические заводы и подстанции Сибири (-50°C, УХЛ1, IV СЗА)',
        recommend: 'Рекомендация: Вводы ВВТ-110/220 в исполнении УХЛ1 с кремнийорганической покрышкой',
        reason: 'Работа при -50°C без растрескивания, удельная длина пути утечки ≥ 31 мм/кВ (IV степень загрязнения) и сейсмостойкость 9 баллов.',
      },
    ],
  },
  hasCalculator: 'bushing',
  ctaTitle: {
    en: 'Need 110kV–500kV Transformer Bushing CAD Drawings, DGA Sizing or Russian GOST Опросный лист Quotations?',
    zh: '需要获取 110kV–500kV 主变套管 CAD 图纸、DGA 色谱计算书与俄标 ВВТ 选型报价？',
    ja: '110kV〜500kV 変圧器ブッシングCAD図面・DGA診断計算書・ロシアВВТ見積が必要ですか？',
    es: '¿Requiere Planos CAD de Pasatapas 110kV–500kV, Cálculo DGA o Cotización Normalizada?',
    ru: 'Требуется сборочный чертеж высоковольтных вводов 110-500 кВ в CAD, расчет tgδ/ХАРГ или Опросный лист ПАО Россети (завод «Изолятор»)?',
  },
  ctaDesc: {
    en: 'Our EHV Power Transformer Insulation Institute in Shenyang (led by technical chief Henry) provides bushing dimensional drawings, terminal connector layouts, and EAC/GOST compliance dossier within 24 hours.',
    zh: '沈阳飞驰电气超高压变压器绝缘工程研究所（由技术负责人 Henry 主理）将在 24 小时内为您提供套管外形尺寸图、接线端子布局图、DGA 故障色谱分析报告与俄标 Опросный лист 正式报价单。',
    ja: '飛馳電気超高圧変圧器技術研究所（担当：Henry）が24時間以内に外形図面、端子接続図、DGA解析計算書およびロシアGOST仕様見積を提出します。',
    es: 'Nuestro Instituto de Aislamiento de Transformadores Feichi en Shenyang (liderado por Henry) entregará su propuesta técnica de pasatapas en 24 horas.',
    ru: 'Инженерный отдел высоковольтных вводов завода Feichi Power в Шэньяне (главный инженер Henry) предоставит габаритные чертежи вводов ВВТ, схему подключения датчиков и расчет стоимости по Опросному листу в течение 24 часов.',
  },
};
