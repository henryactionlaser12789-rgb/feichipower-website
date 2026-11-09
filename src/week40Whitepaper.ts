import type { WhitepaperItem } from './whitepapersData';

export const week40Whitepaper: WhitepaperItem = {
  id: 'week-40',
  week: 40,
  slug: '110kv-220kv-substation-earthing-grid-gpr-touch-step-voltage-guide',
  category: 'substation',
  categoryLabel: {
    en: '110kV–220kV Substation Earthing Grid & GPR Safety (IEEE 80 / IEC 61936 / ГОСТ 12.1.030-81 / СТО Россети)',
    zh: '110kV–220kV 变电站主接地网电位升高（GPR）与跨步/接触电压安全专论（IEEE 80 / 俄标 ГОСТ 12.1.030 / 铜覆钢与热镀锌扁钢）',
    ja: '110kV〜220kV 変電所主接地グリッド・電位上昇（GPR）・歩幅／接触電圧安全（IEEE 80・GOST 12.1.030）技術指針',
    es: 'Mallas de Puesta a Tierra en Subestaciones 110kV–220kV: GPR, Tensión de Contacto y Paso (IEEE 80 / IEC 61936)',
    ru: 'Заземляющие устройства подстанций 110-220 кВ: расчет сопротивления, потенциала GPR, напряжений прикосновения и шага (ГОСТ 12.1.030-81 / СТО Россети)',
  },
  title: {
    en: '110kV–220kV Substation Earthing Grid & Transient Ground Potential Rise (GPR) Dynamics (Copper-Clad Steel vs Hot-Dip Galvanized Grid, Vertical Deep Wells, Step/Touch Voltage Limits; Russian GOST series ЗУ-110/220; Chinese FE-EARTH-110/220 series) Technical Whitepaper: Two-Layer Soil Resistivity Apparent Inversion ($\rho_1, \rho_2, h$), Fault Current Division Factor ($S_f \\le 0.65$), Maximum Grid Potential Rise ($GPR = I_g \\cdot R_g \\le 5\\text{ kV}$), Permissible Touch ($E_{touch} \\le 840\\text{V}$) & Step ($E_{step} \\le 2680\\text{V}$) Safety Thresholds, and Siberian Permafrost Arctic УХЛ1 Seasonal Freezing Layer Expansion (Benchmarking Hitachi Energy, Siemens Energy, nVent ERICO, Russian JSC Energosetproject & CHINT)',
    zh: '110kV–220kV 变电站大型主接地网与瞬态地电位升高（GPR）电磁拓扑（铜覆钢网格、热镀锌扁钢与深井垂直接地极；俄标 110–220кВ Заземляющие устройства 系列；国标飞驰 FE-EARTH-110/220 系列）工程选型指南：双层土壤电阻率视在反演模型（$\rho_1, \rho_2, h$ 视在电阻率方程）、单相接地短路入地电流分流系数（$S_f \le 0.65$ 闭环分流）、最大地网电位升高极限（$GPR = I_g \cdot R_g \le 5\text{ kV}$）、人体允许接触电压（$E_{touch} \le 840\text{V}$）与跨步电压（$E_{step} \le 2680\text{V}$）安全裕度积分、以及西伯利亚 -50°C 极寒永久冻土季冻层电阻率剧增（冻土 $\rho > 3000\,\Omega\cdot\text{m}$）深井降阻优化（深度对标瑞士日立能源 Hitachi Energy、德国西门子能源 Siemens Energy、美国耐斯 nVent ERICO、俄罗斯电力设计院 JSC Energosetproject 与正泰电气）',
    ja: '110kV〜220kV 変電所主接地網・過渡接地電位上昇（GPR）解析（銅被覆鋼グリッド・溶融亜鉛めっき平鋼・深井戸接地極・ロシアGOST接地システム）完全設計技術白書：2層土壌見掛け抵抗率反転解析、地絡電流分流係数（S_f ≤ 0.65）、最大地電位上昇（GPR ≤ 5kV）、許容接触電圧（E_touch ≤ 840V）・歩幅電圧（E_step ≤ 2680V）IEEE 80計算、シベリア永久凍土層-50℃極寒УХЛ1深井戸低減工法（Hitachi Energy、Siemens Energy、nVent ERICOベンチマーク）',
    es: 'Mallas de Puesta a Tierra en Subestaciones de Alta Tensión 110kV–220kV: Ecuaciones de Resistividad de Suelo Estratificado, Factor de División de Corriente ($S_f \\le 0.65$), Elevación de Potencial de Tierra ($GPR \\le 5\\text{ kV}$), Límites de Tensión de Toque ($E_{touch}$) y Paso ($E_{step}$) según IEEE 80 / IEC 61936, y Mitigación en Suelos Congelados de Siberia',
    ru: 'Техническое руководство по расчету и проектированию заземляющих устройств (ЗУ) подстанций 110-220 кВ: расчет сопротивления растеканию тока ($R_\\text{з} \\le 0.5$ Ом), потенциала на заземлителе ($GPR = I_\\text{з} \\cdot R_\\text{з}$), напряжений прикосновения ($U_\\text{пр}$) и шага ($U_\\text{шаг}$) по ПУЭ-7, ГОСТ 12.1.030-81, IEEE 80 и СТО Россети. Анализ двухслойной модели грунта, учет сезонного промерзания вечной мерзлоты Сибири до -50°C (УХЛ1) с глубинными скважинами до 40 м и бенчмарк Hitachi Energy, Siemens Energy, nVent ERICO, АО Энергосетьпроект',
  },
  eyebrow: {
    en: 'SUBSTATION EARTHING & GROUND POTENTIAL RISE SAFETY (IEEE 80 / IEC 61936 / ГОСТ 12.1.030 / СТО РОССЕТИ)',
    zh: 'FE-SPEC-40 · 110kV–220kV 变电站主接地网与地电位升高（GPR）安全专论（IEEE 80 / GB/T 50065 / DL/T 621 / ГОСТ 12.1.030）',
    ja: 'FE-SPEC-40 · 110kV〜220kV 変電所主接地グリッド・GPR電位上昇安全設計仕様書（IEEE 80 / IEC 61936 / GOST）',
    es: 'FE-SPEC-40 · DOSSIER DE MALLAS DE PUESTA A TIERRA Y SEGURIDAD GPR 110kV–220kV (IEEE 80 / IEC 61936)',
    ru: 'FE-SPEC-40 · РУКОВОДСТВО ПО ЗАЗЕМЛЯЮЩИМ УСТРОЙСТВАМ ПОДСТАНЦИЙ 110-220 кВ (ГОСТ 12.1.030-81 / СТО РОССЕТИ 56947007-29.240.10.249-2017)',
  },
  author: {
    en: 'Feichi Substation Earthing & High-Voltage Grid Safety Institute (Lead: Henry)',
    zh: '飞驰电气变电站接地网与高压电网安全工程研究院（总工/外贸对接人：Henry）',
    ja: '飛馳電気 変電所接地工学・高圧電力安全研究所（チーフ：Henry）',
    es: 'Instituto de Ingeniería de Puesta a Tierra y Seguridad de Redes Feichi (Líder: Henry)',
    ru: 'Инженерно-исследовательский институт заземляющих систем и безопасности подстанций Feichi Power (Гл. инженер: Henry)',
  },
  standards: 'IEEE Std 80-2013 / IEEE Std 81 / IEC 61936-1 / GB/T 50065-2011 / DL/T 621 / ГОСТ 12.1.030-81 / ПУЭ-7 Глава 1.7 / ГОСТ 15150-69 (УХЛ1) / СТО РОССЕТИ 56947007-29.240.10.249-2017',
  readTime: {
    en: '27 min technical study (Includes Two-Layer Soil Resistivity Apparent Formulas, Fault Current Division Integrals, Mesh Voltage Matrix Modeling & Russian ЗУ-110/220 Questionnaire)',
    zh: '27 分钟深度技术研读（含双层分层土壤视在电阻率积分方程、单相短路入地电流分流系数推导、网孔电位接触跨步电压矩阵与俄标 ЗУ-110/220 选型表单）',
    ja: '27分 専門設計解説（2層土壌見掛け抵抗率積分モデル・地絡電流分流係数導出・メッシュ電位接触／歩幅電圧行列計算・ロシアЗУ-110/220選定問診票）',
    es: '27 min de lectura técnica (Incluye fórmulas de resistividad estratificada, factor de división de falla, límites de toque/paso según IEEE 80 y cuestionario técnico)',
    ru: '27 мин технического изучения (включая формулы двухслойной структуры грунта, расчет коэффициента стекания тока в землю, матрицу потенциалов сетки заземлителя и полный Опросный лист на ЗУ 110-220 кВ)',
  },
  summary: {
    en: 'An authoritative technical whitepaper on 110kV and 220kV High-Voltage Transmission Substation Earthing Grids (Chinese FE-EARTH series; Russian GOST types ЗУ-110, ЗУ-220) engineered for utility transmission hubs, mining plants, and Siberian permafrost installations (short-circuit currents $I_k = 25\\text{kA} \\sim 50\\text{kA}$, grounding resistance $R_g \\le 0.5\\,\\Omega$, surface gravel layer resistivity $\\rho_s = 3000\\,\\Omega\\cdot\\text{m}$). Benchmarking international leaders Hitachi Energy (Switzerland), Siemens Energy (Germany), nVent ERICO (USA), and Russian pioneer JSC Energosetproject, this dossier explores: 1) Two-Layer Soil Resistivity Inversion and Apparent Resistance Modeling (Wenner 4-pin method $\\rho_a(a) = 2\\pi a R$), calculating upper layer reflection coefficient ($k = (\\rho_2 - \\rho_1)/(\\rho_2 + \\rho_1)$); 2) Substation Ground Potential Rise (GPR) & Fault Current Division ($I_g = S_f \\cdot I_k$), quantifying overhead ground wire (OPGW/shield wire) return distribution; 3) IEEE 80 and GOST 12.1.030 Touch ($E_{touch}$) and Step ($E_{step}$) Voltage Safety Limits (with 50kg/70kg body weight models); 4) Conductor Corrosion & Sizing Dynamics (Copper-Clad Steel CCS vs Hot-Dip Galvanized Steel $50\\times 5\\text{ mm}$ with 30-year corrosion allowance); 5) Siberian Arctic -50°C УХЛ1 seasonal frozen soil deep vertical wells (30m–50m boring through permafrost to reach conductive sub-layers); and 6) Complete PJSC Rosseti 110-220kV Substation Earthing System Опросный лист questionnaire templates.',
    zh: '系统阐述 110kV 与 220kV 高压及超高压变电站主接地网系统（国标飞驰 FE-EARTH-110/220 系列；俄标 ЗУ-110, ЗУ-220 接地网与深井垂直接地系统）在大型枢纽变电站、新能源汇集站及西伯利亚高寒高土壤电阻率环境中的人身安全防护与电磁兼容技术规范（单相短路接地电流 $I_k = 25\text{kA} \sim 50\text{kA}$，接地电阻目标值 $R_g \le 0.5\,\Omega$，地表 100mm 碎石层电阻率 $\rho_s = 3000\,\Omega\cdot\text{m}$）。深度对标瑞士日立能源 Hitachi Energy、德国西门子能源 Siemens Energy、美国耐斯 nVent ERICO 以及俄罗斯国家电力设计院 АО «Энергосетьпроект» 等全球顶级高压接地系统专家，重点解析：1）双层分层土壤视在电阻率温纳四极法反演物理模型（$\rho_a(a) = 2\pi a R$），精确计算上层季冻层与下层高导电基岩反射系数（$k = (\rho_2 - \rho_1)/(\rho_2 + \rho_1)$）；2）地网瞬态地电位升高（GPR）与架空地线（OPGW/避雷线）分流系数微积分方程（$I_g = S_f \cdot I_k$），精准推导回流变压器中性点与远端地网的入地短路电流；3）IEEE 80 与俄标 ГОСТ 12.1.030 接触电压（$E_{touch}$）与跨步电压（$E_{step}$）人体耐受安全临界极限（50kg/70kg 人体阻抗与 15cm 碎石层衰减系数 $C_s$ 耦合模型）；4）地网导体热稳定截面与耐腐蚀选型（电铸铜覆钢 CCS、热镀锌扁钢 $50\times 5\text{ mm}$ 与铜导线在 30 年设计寿命下的年腐蚀余量核算）；5）西伯利亚 -50°C 极寒永久冻土季冻层深井垂直降阻工程（钻孔深度 30m~50m 穿透地表高阻冻结层注入低阻离子膨润土复合接地模块）；以及 6）符合俄罗斯国家电网 ПАО «Россети» 与海关联盟 ТР ТС 004/2011 认证的《Опросный лист на заземляющее устройство подстанции 110-220 кВ》工程选型技术规范。',
    ja: '110kV/220kV 超高圧変電所主接地グリッドシステム（飛馳FE-EARTHシリーズ・ロシアGOST ЗУ-110/220）の完全技術白書（地絡電流25〜50kA、接地抵抗Rg ≤ 0.5Ω、地表砂利層3000Ω・m）。Hitachi Energy、Siemens Energy、nVent ERICOをベンチマークし、ウェンナー4極法2層土壌解析（反射係数k）、地絡電流架空地線分流係数（Sf ≤ 0.65）、地電位上昇（GPR）、IEEE 80許容接触／歩幅電圧限界、銅被覆鋼（CCS）と亜鉛めっき鋼の耐食性計算、シベリア永久凍土層30〜50m深井戸低減工法、およびロシアRosseti標準Опросный лист問診票を網羅。',
    es: 'Expediente técnico de Mallas de Puesta a Tierra en Subestaciones 110kV–220kV (FE-EARTH-110/220 / ЗУ-110/220): Análisis de suelo biestratificado (Wenner), factor de división de corriente por cables de guardia ($S_f \\le 0.65$), elevación de potencial ($GPR = I_g \\cdot R_g$), cálculo de tensiones admisibles de toque ($E_{touch}$) y paso ($E_{step}$) según IEEE 80, conductores de acero cobrizado (CCS) y pozos profundos en suelos congelados de Siberia.',
    ru: 'Полное техническое руководство по расчету и монтажу заземляющих устройств (ЗУ) открытых и закрытых подстанций напряжением 110 и 220 кВ серии ЗУ-110, ЗУ-220 на токи короткого замыкания 25-50 кА с сопротивлением $R_\\text{з} \\le 0.5$ Ом по ГОСТ 12.1.030-81, ПУЭ-7, IEEE 80 и СТО Россети. Рассмотрены: двухслойная модель грунта (метод Веннера с коэффициентом отражения $k$), расчет коэффициента распределения тока КЗ ($S_f$), пределы допустимых напряжений прикосновения ($U_\\text{пр}$) и шага ($U_\\text{шаг}$), выбор сечений проводников (омедненная сталь, горячеоцинкованная полоса $50\\times 5$ мм), технология глубинного заземления (скважины 30-50 м) в вечномерзлых грунтах Сибири при -50°C (УХЛ1) и полный Опросный лист ПАО Россети.',
  },
  sec1Title: {
    en: '1. Two-Layer Soil Resistivity Modeling & Ground Potential Rise (GPR) Dynamics ($GPR = I_g \\cdot R_g$)',
    zh: '1. 双层土壤视在电阻率反演物理模型与变电站地电位升高（GPR）动力学（$GPR = I_g \\cdot R_g$）',
    ja: '1. 2層土壌見掛け抵抗率反転物理モデルおよび変電所地電位上昇（GPR）過渡ダイナミクス（GPR = Ig · Rg）',
    es: '1. Modelo de Resistividad de Suelo Biestratificado y Dinámica de Elevación de Potencial ($GPR = I_g \\cdot R_g$)',
    ru: '1. Двухслойная геоэлектрическая модель грунта и динамика повышения потенциала заземлителя ($GPR = I_\\text{з} \\cdot R_\\text{з}$)',
  },
  sec1Text: {
    en: `In 110kV and 220kV transmission substations, single phase-to-ground short-circuit fault currents ($I_k$) can reach 25kA to 50kA. When this severe fault current enters the earth through the substation earthing grid, the entire grounding system experiences a transient Ground Potential Rise (GPR):
$$GPR = I_g \\cdot R_g = (S_f \\cdot I_k) \\cdot R_g$$
where $R_g$ is the station grounding grid resistance (typically target $\\le 0.5\\,\\Omega$), $I_g$ is the net grid current, and $S_f$ is the fault current division factor ($S_f \\le 0.65$) accounting for inductive return through overhead transmission ground wires (OPGW/shield wires) and underground cable metallic sheaths.

Substation soil structure is rarely homogeneous. Feichi engineers utilize the Wenner 4-pin resistivity survey method to model stratified two-layer soil ($\rho_1$ for upper layer depth $h$, and $\rho_2$ for lower deep bed):
$$\rho_a(a) = \rho_1 \\left[ 1 + 4 \\sum_{n=1}^{\\infty} \\frac{k^n}{\\sqrt{1 + (2n h / a)^2}} - \\frac{k^n}{\\sqrt{4 + (2n h / a)^2}} \\right]$$
where $k = (\\rho_2 - \\rho_1) / (\\rho_2 + \\rho_1)$ is the reflection coefficient. In cold climate regions (such as Siberia and CIS markets), the upper soil layer freezes during winter ($h = 1.5\\text{m} \\sim 3.0\\text{m}$), causing $\\rho_1$ to surge from $80\\,\\Omega\\cdot\\text{m}$ to $> 3000\\,\\Omega\\cdot\\text{m}$. Designing the grid solely with summer measurements leads to dangerous touch and step voltage exceedances during sub-zero operation.`,
    zh: `在 110kV 与 220kV 高压变电站中，系统单相接地短路故障电流（$I_k$）通常高达 25kA 至 50kA。当巨大的短路电流通过变电站主接地网注入大地时，整个接地网及其相连的金属构架将产生瞬态地电位升高（GPR，Ground Potential Rise）：
$$GPR = I_g \cdot R_g = (S_f \cdot I_k) \cdot R_g$$
式中，$R_g$ 为变电站主接地网的工频接地电阻（国际标准通常要求 $R_g \le 0.5\,\Omega$），$I_g$ 为实际注入大地的短路电流，而 $S_f$ 为入地短路电流分流系数（$S_f \le 0.65$），反映了架空避雷线（OPGW 光纤复合地线/架空地线）与进出线电缆金属护层对短路电流的分流与感应回流作用。

变电站实际土壤绝大多数呈现非均匀分层特性。飞驰电气工程部采用温纳四极法（Wenner 4-pin Method）进行现场视在电阻率测试，并建立双层土壤等效物理模型（上层土壤电阻率 $\rho_1$，厚度 $h$；下层无限深土壤电阻率 $\rho_2$）：
$$\rho_a(a) = \rho_1 \left[ 1 + 4 \sum_{n=1}^{\infty} \frac{k^n}{\sqrt{1 + (2n h / a)^2}} - \frac{k^n}{\sqrt{4 + (2n h / a)^2}} \right]$$
式中，$k = (\rho_2 - \rho_1) / (\rho_2 + \rho_1)$ 为土壤电反射系数。在俄罗斯西伯利亚及独联体等极寒地区，冬季地表冻结层深度可达 $h = 1.5\text{m} \sim 3.0\text{m}$，导致上层视在电阻率 $\rho_1$ 从夏季的 $80\,\Omega\cdot\text{m}$ 暴增至 $3000\,\Omega\cdot\text{m}$ 以上。若仅依据夏季数据设计水平网格，冬季极寒工况下接触电压与跨步电压将严重超标击穿人体安全裕度。`,
    ja: `110kV/220kV変電所における1線地絡事故電流（25〜50kA）流入時、主接地網全体に過渡地電位上昇（GPR = Ig · Rg）が発生します。架空地線（OPGW）分流係数（Sf ≤ 0.65）により実入地電流を算出し、ウェンナー4極法による2層土壌モデル（上層凍結時抵抗率3000Ω・m超）を適用して極寒期でも安全なメッシュ設計を実現します。`,
    es: 'En subestaciones de 110kV–220kV con corrientes de cortocircuito de hasta 50kA, la elevación de potencial ($GPR = I_g \\cdot R_g$) depende del factor de división de corriente ($S_f \\le 0.65$) por los cables de guarda OPGW. Mediante el método Wenner de 4 picas, se modela el suelo biestratificado para evitar sobretensiones en invierno siberiano.',
    ru: 'При однофазных КЗ на подстанциях 110-220 кВ токи КЗ достигают 25-50 кА. Потенциал на заземляющем устройстве ($GPR = I_\\text{з} \\cdot R_\\text{з}$) рассчитывается с учетом коэффициента распределения тока ($S_f \\le 0.65$) по тросам ВЛ (ОКГТ). Для условий Сибири с промерзанием грунта до 3 м расчет ведется по двухслойной модели с зимней удельной сопротивляемостью свыше 3000 Ом·м.',
  },
  sec2Title: {
    en: '2. IEEE 80 / GOST 12.1.030 Touch & Step Voltage Safety Margins ($E_{touch} \\le 840\\text{V}$)',
    zh: '2. IEEE 80 与俄标 ГОСТ 12.1.030 允许接触电压与跨步电压安全裕度量化模型（$E_{touch} \\le 840\\text{V}$）',
    ja: '2. IEEE 80／GOST 12.1.030 許容接触電圧および歩幅電圧安全マージン定量解析（E_touch ≤ 840V）',
    es: '2. Límites de Tensión de Toque y Paso según IEEE 80 y GOST 12.1.030 ($E_{touch} \\le 840\\text{V}$)',
    ru: '2. Допустимые напряжения прикосновения и шага по IEEE 80, ПУЭ-7 и ГОСТ 12.1.030-81 ($U_\\text{пр} \\le 840$ В)',
  },
  sec2Text: {
    en: `Human physiological safety during high-voltage ground faults is governed by the maximum electric potential differences bridging the body. According to IEEE Std 80-2013 (50kg body model), permissible Touch ($E_{touch,50}$) and Step ($E_{step,50}$) voltages for a fault duration $t_s$ (typically 0.2s to 0.5s) are defined as:
$$E_{touch,50} = \\left( 1000 + 1.5 \\cdot C_s \\cdot \\rho_s \\right) \\frac{0.116}{\\sqrt{t_s}}$$
$$E_{step,50} = \\left( 1000 + 6.0 \\cdot C_s \\cdot \\rho_s \\right) \\frac{0.116}{\\sqrt{t_s}}$$
where $\\rho_s$ is the resistivity of the surface crushed rock gravel layer ($3000\\,\\Omega\\cdot\\text{m}$ for dry clean granite gravel, thickness $h_s = 0.10\\text{m} \\sim 0.15\\text{m}$), and $C_s$ is the surface derating reduction factor:
$$C_s = 1 - \\frac{0.09 \\left( 1 - \\rho_1 / \\rho_s \\right)}{2 h_s + 0.09}$$

Actual mesh voltage ($E_m$) and step voltage ($E_s$) generated by the grid geometry must remain below these limits:
$$E_m = \\frac{\\rho \\cdot K_m \\cdot K_i \\cdot I_g}{L_M}$$
Feichi engineers optimize horizontal conductor spacing ($D = 5\\text{m} \\sim 10\\text{m}$) and peripheral equalizing ring conductors to ensure the actual mesh potential does not exceed 70% of the permissible touch limit ($M_{safe} \\ge 30\\%$), guaranteeing zero ventricular fibrillation risk for operators standing next to GIS enclosures or transformer tanks.`,
    zh: `在高压变电站发生接地故障时，保障巡检运行人员与周围公众生命安全的核心，是控制人体承受的电位差。根据 IEEE Std 80-2013（50kg 人体质量模型）与俄标 ГОСТ 12.1.030，在短路切除时间 $t_s$（主保护通常为 0.2s~0.5s）内，人体允许接触电压（$E_{touch,50}$）与允许跨步电压（$E_{step,50}$）计算公式为：
$$E_{touch,50} = \left( 1000 + 1.5 \cdot C_s \cdot \rho_s \right) \frac{0.116}{\sqrt{t_s}}$$
$$E_{step,50} = \left( 1000 + 6.0 \cdot C_s \cdot \rho_s \right) \frac{0.116}{\sqrt{t_s}}$$
式中，$\rho_s$ 为变电站地表铺设的花岗岩碎石层电阻率（干燥清洁碎石层典型取 $\rho_s = 3000\,\Omega\cdot\text{m}$，铺设厚度 $h_s = 0.10\text{m} \sim 0.15\text{m}$），$C_s$ 为表层碎石衰减降额系数：
$$C_s = 1 - \frac{0.09 \left( 1 - \rho_1 / \rho_s \right)}{2 h_s + 0.09}$$

地网实际产生的网孔接触电位差（$E_m$）和最大跨步电位差（$E_s$）必须严格低于上述安全极限：
$$E_m = \frac{\rho \cdot K_m \cdot K_i \cdot I_g}{L_M}$$
飞驰电气通过优化水平接地极网格间距（$D = 5\text{m} \sim 10\text{m}$）以及变电站外围闭合均压环（环网外扩均压极），将变电站内实际网孔电位压制在允许接触电压的 70% 以下（安全裕度 $M_{safe} \ge 30\%$），彻底消除 GIS 组合电器柜体、主变油箱及高压构架旁操作人员的心室颤动致命风险。`,
    ja: `IEEE 80（50kg人体モデル）に基づき、短絡継続時間ts=0.2s時の許容接触電圧（E_touch ≤ 840V）および歩幅電圧（E_step ≤ 2680V）を算出。地表15cm砕石層（ρs=3000Ω・m）の減衰係数Csを適用し、メッシュ間距5〜10m最適化により安全マージン30%以上を確保します。`,
    es: 'Según IEEE 80 (modelo de 50 kg), las tensiones admisibles de toque ($E_{touch}$) y paso ($E_{step}$) para un tiempo de falla de 0.2s se calculan con una capa de grava superficial de 15 cm ($\rho_s = 3000\,\Omega\cdot\text{m}$). El diseño de malla Feichi garantiza un margen de seguridad $\\ge 30\\%$.',
    ru: 'Расчет допустимых напряжений прикосновения ($U_\\text{пр}$) и шага ($U_\\text{шаг}$) по IEEE 80 и ГОСТ 12.1.030 при времени действия защиты $t_\\text{о} = 0.2$ с с учетом щебеночного покрытия подстанции толщиной 15 см ($\rho_\\text{щ} = 3000$ Ом·м). Сетка Feichi обеспечивает запас безопасности более 30%.',
  },
  sec3Title: {
    en: '3. Technical Specification Matrix: Copper-Clad Steel (CCS) vs Hot-Dip Galvanized Flat Steel Grounding Systems',
    zh: '3. 核心技术参数与接地材料对比表：电铸铜覆钢（CCS） vs 热镀锌扁钢地网',
    ja: '3. 設計パラメータ比較表：銅被覆鋼（CCS） vs 溶融亜鉛めっき平鋼接地システム',
    es: '3. Matriz de Especificaciones Técnicas: Acero Cobrizado (CCS) vs Acero Galvanizado',
    ru: '3. Сравнительная таблица технических характеристик: омедненная сталь (CCS) и горячеоцинкованная полосовая сталь',
  },
  tableHeaders: {
    en: ['Technical Parameter', 'Electroplated Copper-Clad Steel (CCS / Feichi FE-CCS)', 'Hot-Dip Galvanized Flat Steel (HDG / Feichi FE-HDG)', 'Russian GOST Permafrost Deep Wells (ЗУ-УХЛ1)'],
    zh: ['核心技术参数', '电铸铜覆钢导体 (CCS / 飞驰 FE-CCS 系列)', '热镀锌扁钢网格 (HDG / 飞驰 FE-HDG 系列)', '俄标高寒冻土深井接地系统 (ЗУ-УХЛ1 系列)'],
    ja: ['設計パラメータ', '銅被覆鋼導体（CCS / 飛馳FE-CCS）', '溶融亜鉛めっき平鋼（HDG / 飛馳FE-HDG）', 'ロシア永久凍土深井戸接地（ЗУ-УХЛ1）'],
    es: ['Parámetro Técnico', 'Acero Cobrizado por Electrodeposición (CCS)', 'Pletina de Acero Galvanizado en Caliente (HDG)', 'Pozos Profundos en Permafrost (ЗУ-УХЛ1)'],
    ru: ['Технический параметр', 'Омедненная сталь электролитическая (FE-CCS)', 'Полоса стальная горячеоцинкованная (FE-HDG)', 'Глубинное ЗУ для вечной мерзлоты (ЗУ-УХЛ1)'],
  },
  tableRows: {
    en: [
      ['Core Material & Geometry', 'Solid Low-Carbon Steel Core + 0.254mm Pure Copper Cladding', 'Structural Carbon Steel Q235B Flat Bar (50x5mm / 60x6mm)', 'Electrolytic Chemical Ion Earth Electrodes (D=60mm, L=30m~50m)'],
      ['Electrical Conductivity', '≥ 20% to 40% IACS (High Surge Dispersion)', '≥ 8.5% to 10% IACS', 'High-Dispersion Mineral Electrolyte Leachate Channel'],
      ['Corrosion Rate in Soil', '< 0.005 mm/year in acidic/saline soil (pH 3.0~10.0)', '0.035 ~ 0.080 mm/year (Sacrificial Zinc Layer)', '< 0.008 mm/year (Stainless Steel 316L / Brass Casing)'],
      ['Design Service Life', '≥ 40 to 50 Years Maintenance-Free', '15 to 25 Years (Requires periodic exhumation audit)', '≥ 35 Years in Arctic Sub-zero Ground (-50°C УХЛ1)'],
      ['Short-Circuit Thermal Capacity (1s)', '135 A/mm² (IEEE Std 80 Formula Kf=7.0)', '70 A/mm² (Requires larger cross-section ≥ 250mm²)', '50kA Short-Circuit Symmetric Withstand ($t_s=1\\text{s}$)'],
      ['Joint Connection Method', 'Exothermic Welding (CADWELD / Molecular Fusion)', 'Overlapping Arc Welding + Zinc Spray Anti-Corrosion Wrap', 'Threaded Compression Couplers + Bentonite Slurry Seal'],
      ['Applicable Standards', 'IEEE 80, IEEE 837, UL 467, GB/T 50065', 'IEC 61936-1, GB 50169, ГОСТ 12.1.030', 'СТО РОССЕТИ 56947007-29.240.10.249-2017, ГОСТ 15150'],
    ],
    zh: [
      ['主导体材料与几何结构', '低碳钢芯棒 + 0.254mm (10mil) 纯铜结合层 (99.9% Cu)', 'Q235B 结构碳素钢扁钢 ($50\times 5\text{ mm}$ 或 $60\times 6\text{ mm}$)', '电解离子垂直接地极（$\Phi 60\text{ mm}$，深井深度 30m~50m）'],
      ['导电率 (IACS)', '$\ge 20\% \sim 40\%$ IACS（高频雷电冲击泄流快）', '$\ge 8.5\% \sim 10\%$ IACS（工频导电适中）', '高导电矿物电解质离子缓释扩散通道'],
      ['土壤年腐蚀速率', '$< 0.005\text{ mm/年}$（耐强酸强碱盐雾土壤 pH 3.0~10.0）', '$0.035 \sim 0.080\text{ mm/年}$（牺牲锌层逐步消耗）', '$< 0.008\text{ mm/年}$（316L 不锈钢/高导铜合金管体）'],
      ['设计运行寿命', '$\ge 40 \sim 50$ 年免开挖维护', '$15 \sim 25$ 年（需定期开挖检测壁厚减薄）', '$\ge 35$ 年（西伯利亚 -50°C 极寒 УХЛ1 永久冻土层）'],
      ['热稳定电流耐受 (1s)', '$135\text{ A/mm}^2$（IEEE 80 铜覆钢常数 $K_f=7.0$）', '$70\text{ A/mm}^2$（需加大截面积 $\ge 250\text{ mm}^2$ 防热熔）', '$50\text{kA}$ 大电流短路动热稳定冲击耐受（$t_s=1\text{s}$）'],
      ['接头熔接工艺', '放热熔接（放热焊/分子级铜液熔融，结合力强）', '搭接双面电弧焊接 + 涂刷防腐环氧冷镀锌漆', '螺纹密封铜套接头 + 降阻防冻膨润土压力注浆'],
      ['符合标准规范', 'IEEE 80, IEEE 837, UL 467, GB/T 50065', 'IEC 61936-1, GB 50169, ГОСТ 12.1.030-81', 'СТО РОССЕТИ 56947007-29.240.10.249-2017, ГОСТ 15150'],
    ],
    ja: [
      ['導体材料・構造', '低炭素鋼芯＋0.254mm電気銅被覆（99.9% Cu）', '溶融亜鉛めっき平鋼（50x5mm / 60x6mm）', '電解イオン深井戸接地極（Φ60mm、L=30〜50m）'],
      ['導電率 (IACS)', '≥ 20%〜40% IACS（高周波放電特性優良）', '≥ 8.5%〜10% IACS', '電解質イオン緩慢拡散導電層'],
      ['耐用年数', '40〜50年以上（長寿命・掘削点検不要）', '15〜25年（定期肉厚点検推奨）', '35年以上（シベリア永久凍土層対応）'],
      ['接続工法', '発熱溶接（テルミット融着接合）', '重ね隅肉アーク溶接＋防錆塗装', 'ネジ圧縮継手＋低抵抗ベントナイト圧入'],
      ['規格適合', 'IEEE 80, IEEE 837, UL 467, GB/T 50065', 'IEC 61936-1, GOST 12.1.030-81', 'СТО Россети, GOST 15150 (УХЛ1)'],
    ],
    es: [
      ['Material y Geometría', 'Núcleo de acero + 0.254 mm de cobre electrodepositado', 'Pletina de acero galvanizado en caliente 50x5 mm', 'Electrodo químico ionizante profundo (L=30m a 50m)'],
      ['Conductividad (IACS)', '≥ 20% a 40% IACS', '≥ 8.5% a 10% IACS', 'Canal electrolítico de difusión mineral'],
      ['Vida Útil de Diseño', '≥ 40 a 50 Años Libre de Mantenimiento', '15 a 25 Años', '≥ 35 Años en Suelos Árticos Congelados'],
      ['Método de Unión', 'Soldadura Exotérmica (Fusión Molecular)', 'Soldadura Eléctrica por Traslape + Pintura de Zinc', 'Manguitos Roscados + Lechada de Bentonita'],
      ['Normas', 'IEEE 80, IEEE 837, UL 467', 'IEC 61936-1, GOST 12.1.030', 'СТО Россети, GOST 15150 (УХЛ1)'],
    ],
    ru: [
      ['Материал и конструкция', 'Стальной сердечник + медное покрытие 0.254 мм (99.9% Cu)', 'Полоса горячеоцинкованная 50х5 мм / 60х6 мм (Q235B)', 'Электролитический заземлитель трубчатый D=60 мм, L=30-50 м'],
      ['Проводимость (IACS)', '≥ 20% - 40% IACS', '≥ 8.5% - 10% IACS', 'Канал выщелачивания солевого электролита'],
      ['Срок службы', '≥ 40-50 лет без обслуживания в грунте', '15-25 лет (подвержен коррозии в кислых грунтах)', '≥ 35 лет в условиях вечной мерзлоты (-50°C УХЛ1)'],
      ['Способ соединения', 'Термитная экзотермическая сварка (молекулярное сплавление)', 'Двусторонняя электродуговая сварка внахлест + окраска', 'Резьбовые муфты + гидроизоляция бентонитом'],
      ['Стандарты', 'IEEE 80, IEEE 837, UL 467, ГОСТ 12.1.030', 'ГОСТ 12.1.030-81, ПУЭ-7, СТО Россети', 'СТО РОССЕТИ 56947007-29.240.10.249-2017'],
    ],
  },
  sec4Title: {
    en: '4. Scenario-Based Earthing Grid Selection & Siberian Arctic Permafrost Engineering Guide',
    zh: '4. 重点应用场景接地网选型决策与西伯利亚极寒冻土工程指南',
    ja: '4. 適用環境別接地設計ガイドおよびシベリア永久凍土対策',
    es: '4. Guía de Selección por Escenario y Aplicaciones en Permafrost Ártico',
    ru: '4. Выбор конструкции заземлителя по условиям площадки и специфика вечной мерзлоты Сибири',
  },
  scenarios: {
    en: [
      [
        {
          title: 'Coastal, Chemical & High-Salinity Substation Environments (pH < 4.5 / Marine Salt Fog)',
          recommend: 'Recommendation: Electroplated Copper-Clad Steel (FE-CCS-50kA) with Exothermic CADWELD',
          reason: 'Pure 0.254mm copper cladding eliminates galvanic corrosion and acid pit perforation, guaranteeing a 50-year design life without soil exhumation maintenance.',
        },
        {
          title: 'Inland Standard Utility Substations (110kV/220kV Agricultural & Normal Clay Soils)',
          recommend: 'Recommendation: Heavy Hot-Dip Galvanized Flat Steel Grid (50x5mm) with Cathodic Zinc Protection',
          reason: 'Cost-effective CapEx with proven mechanical rigidity, meeting IEC 61936-1 and GOST 12.1.030 standards for 25-year grid operational cycles.',
        },
        {
          title: 'Siberian Arctic Mining & Permafrost Transmission Substations (УХЛ1 / Deep High-Resistivity Frozen Layer)',
          recommend: 'Recommendation: Hybrid CCS Mesh + 40m Deep Boring Electrolytic Ion Grounding Electrodes',
          reason: 'Deep wells penetrate through the 2.5m insulating seasonal frozen top layer into underlying unfrozen water-bearing talik strata, reducing substation ground resistance from > 15Ω down to < 0.5Ω.',
        },
      ],
    ],
    zh: [
      [
        {
          title: '沿海盐雾、石化工业区与高土壤酸性变电站 (pH < 4.5 强腐蚀工况)',
          recommend: '选型推荐：电铸铜覆钢接地网 (飞驰 FE-CCS 系列) + 全放热焊接（Exothermic Welding）',
          reason: '0.254mm 纯铜包覆层彻底阻隔酸性离子渗透与原电池电化学腐蚀，实现 50 年免开挖检测与低电阻高频雷电流极速散流。',
        },
        {
          title: '内陆标准电网枢纽变电站与常规平原农网 (110kV/220kV 黏土与黄土环境)',
          recommend: '选型推荐：热镀锌扁钢接地网 (50x5mm / 60x6mm) + 均压环外扩拓扑',
          reason: '初期投资 CapEx 经济合理，机械强度极高耐受重型起吊压路机械碾压，完全符合国标 GB 50169 与俄标 ГОСТ 12.1.030 规范。',
        },
        {
          title: '西伯利亚极寒矿区、高山冻土与输变电站 (УХЛ1 极寒 -50°C / 永久冻土层 $\rho > 3000\,\Omega\cdot\text{m}$)',
          recommend: '选型推荐：铜覆钢网格 + 30m~50m 垂直深井电解离子接地极复合系统',
          reason: '深井钻孔直接穿透地表 2.5m 季冻高阻绝缘层，深入地下含水未冻融融区（Talik），配合低阻矿物凝胶回填，将变电站接地电阻从 15Ω 强制压降至 0.5Ω 以下。',
        },
      ],
    ],
    ja: [
      [
        {
          title: '臨海重塩害・化学プラント変電所（pH < 4.5）',
          recommend: '推奨：電鋳銅被覆鋼（FE-CCS）＋テルミット融着接合',
          reason: '0.254mm純銅層が電化学的腐食を完全遮断し、50年間メンテナンスフリーを実現。',
        },
        {
          title: '標準電力系統変電所（110kV/220kV平野部）',
          recommend: '推奨：溶融亜鉛めっき平鋼（50x5mm）グリッド',
          reason: '初期コストを抑制しつつ十分な機械強度とIEC 61936-1規格適合性を確保。',
        },
        {
          title: 'シベリア極寒・永久凍土地域（УХЛ1・凍土層）',
          recommend: '推奨：銅被覆鋼＋30〜50m深井戸電解イオン複合接地極',
          reason: '高抵抗な地表凍結層を貫通して地下水脈層へ達し、接地抵抗を15Ωから0.5Ω以下へ劇的に低減。',
        },
      ],
    ],
    es: [
      [
        {
          title: 'Entornos Costeros y Petroquímicos de Alta Salinidad (pH < 4.5)',
          recommend: 'Recomendación: Acero Cobrizado FE-CCS con Soldadura Exotérmica',
          reason: 'La capa de cobre de 0.254 mm elimina la corrosión galvánica, garantizando 50 años de vida útil.',
        },
        {
          title: 'Subestaciones Estándar de Red Eléctrica (110kV/220kV)',
          recommend: 'Recomendación: Malla de Acero Galvanizado en Caliente 50x5 mm',
          reason: 'Excelente relación costo-beneficio y alta resistencia mecánica según IEC 61936-1.',
        },
        {
          title: 'Subestaciones en Permafrost Ártico de Siberia (-50°C УХЛ1)',
          recommend: 'Recomendación: Malla CCS + Pozos Profundos de 40m con Electrodos Químicos',
          reason: 'Penetra la capa congelada superficial para alcanzar estratos conductores no congelados, bajando $R_g$ a $<0.5\\,\\Omega$.',
        },
      ],
    ],
    ru: [
      [
        {
          title: 'Приморские и химические зоны с высокой коррозионной активностью (pH < 4.5)',
          recommend: 'Рекомендация: Омедненная сталь электролитическая (FE-CCS) с экзотермической сваркой',
          reason: 'Слой чистой меди толщиной 0.254 мм обеспечивает надежную защиту от коррозии на срок до 50 лет без ревизии грунта.',
        },
        {
          title: 'Типовые узловые подстанции 110/220 кВ в глинистых и суглинистых грунтах',
          recommend: 'Рекомендация: Полосовая сталь горячеоцинкованная 50х5 мм по ГОСТ 12.1.030-81',
          reason: 'Оптимальный уровень капитальных затрат и высокая механическая прочность при монтаже.',
        },
        {
          title: 'Подстанции в районах вечной мерзлоты Сибири и Крайнего Севера (УХЛ1 / -50°C)',
          recommend: 'Рекомендация: Комбинированная система: сетка CCS + глубинные скважины 30-50 м с электролитическими заземлителями',
          reason: 'Скважины проходят 3-метровый слой сезонного промерзания в таликовые зоны, снижая сопротивление заземления с 15 Ом до требуемых < 0.5 Ом.',
        },
      ],
    ],
  } as any,
  hasCalculator: 'earthing' as any,
  ctaTitle: {
    en: 'Need Substation Earthing Grid CAD Layouts, IEEE 80 Sizing & Russian GOST Опросный лист?',
    zh: '需要获取 110kV–220kV 变电站接地网 CAD 布置图、IEEE 80 选型计算书与俄标 Опросный лист？',
    ja: '110kV〜220kV 変電所接地グリッドCAD図面、IEEE 80計算書およびロシア問診票が必要ですか？',
    es: '¿Requiere Planos CAD de Malla de Puesta a Tierra 110kV–220kV, Cálculos IEEE 80 o Cotización?',
    ru: 'Нужен проект заземляющего устройства ПС 110-220 кВ, расчет по IEEE 80 / ПУЭ и Опросный лист Россети?',
  },
  ctaDesc: {
    en: 'Feichi Substation Engineering Dept in Shenyang (led by technical lead Henry) provides Wenner soil resistivity inversion, GPR touch/step voltage safety calculations, exothermic welding schedules, and turnkey commercial proposals within 24 hours.',
    zh: '沈阳飞驰电气变电站工程技术部（由技术负责人 Henry 主理）将在 24 小时内为您提供现场土壤反演计算、GPR 地电位升高与跨步/接触电压安全验证报告、放热焊接施工清单及俄标合规报价。',
    ja: '飛馳電気技術チーム（担当：Henry）が24時間以内に土壌解析、GPR接触／歩幅電圧計算書、テルミット溶接部材リストを提出します。',
    es: 'El departamento técnico de Feichi en Shenyang (liderado por Henry) entregará su estudio de resistividad, cálculo IEEE 80 y propuesta técnica en 24 horas.',
    ru: 'Инженерный отдел Feichi Power в Шэньяне (гл. инженер Henry) предоставит расчет сопротивления ЗУ, напряжений прикосновения по IEEE 80 / ПУЭ, спецификацию материалов и коммерческое предложение в течение 24 часов.',
  },
};
