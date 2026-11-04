export interface EpcFaqItem {
  id: string;
  category: 'substation' | 'switchgear' | 'transformer' | 'mining';
  categoryLabel: Record<string, string>;
  question: Record<string, string>;
  standards: string;
  answer: Record<string, string>;
  formula?: string;
  keySpecs: { label: Record<string, string>; value: string }[];
}

export const epcFaqList: EpcFaqItem[] = [
  {
    id: 'faq-01',
    category: 'substation',
    categoryLabel: {
      en: 'Compact Substations & SLD',
      zh: '预装式箱变与一次系统',
      ja: 'キュービクル式受変電設備',
      es: 'Subestaciones Compactas y SLD',
    },
    question: {
      en: 'How to calculate the rated short-time withstand current (Icw) for 35kV compact substation busbars?',
      zh: '如何计算 35kV 预装式箱变主母线的额定短时耐受电流（Icw）与热稳定校验？',
      ja: '35kVキュービクル主母線の定格短時間耐電流（Icw）と熱安定性計算方法は？',
      es: '¿Cómo calcular la corriente soportable de corta duración (Icw) en barras de 35kV?',
    },
    standards: 'IEC 62271-200 / IEC 62271-202 / GB/T 17467',
    formula: 'S_min = (I_k * sqrt(t)) / C',
    keySpecs: [
      { label: { en: 'Thermal Coefficient C (Copper)', zh: '铜母线热稳定常数 C', ja: '銅母線熱定数 C', es: 'Coeficiente térmico C (Cobre)' }, value: '176 A·s^0.5/mm²' },
      { label: { en: 'Standard Withstand Duration (t)', zh: '标称短路持续时间 t', ja: '定格短絡継続時間 t', es: 'Duración nominal de cortocircuito t' }, value: '3.0 s / 4.0 s' },
      { label: { en: 'Typical 35kV Peak Withstand (Ip)', zh: '35kV 峰值耐受电流 Ip', ja: '35kV ピーク耐電流 Ip', es: 'Corriente cresta admisible Ip' }, value: '50 kA / 63 kA' },
    ],
    answer: {
      en: 'Under IEC 62271-202, the minimum cross-sectional area of the main copper busbar is determined by the maximum prospective symmetric short-circuit current (Ik) and duration (t=3s or 4s). Feichi substations utilize T2 electrolytic copper bars (conductivity ≥98% IACS) with rounded edges and heat-shrink insulation sleeves, verified by national high-voltage laboratory type-test reports up to 25kA/3s and 31.5kA/3s.',
      zh: '根据 IEC 62271-202 及 GB/T 17467 标准，主母线最小截面积由系统最大对称短路电流（Ik）及短路持续时间（通常为 3s 或 4s）决定。飞驰电气箱变全系采用 T2 电解无氧铜母线（导电率 ≥98% IACS），倒圆角防局部放电并配置全绝缘热缩套管，出厂通过国家高压电器质检中心 25kA/3s 及 31.5kA/3s 完整动热稳定型式试验。',
      ja: 'IEC 62271-202規格に基づき、主母線の最小断面積は系統の最大短絡電流（Ik）および継続時間（3秒または4秒）から算出されます。飛馳電気のキュービクルは高純度T2銅母線（導電率98%以上）を採用し、25kA/3s〜31.5kA/3sの公的型式試験をクリアしています。',
      es: 'Según IEC 62271-202, la sección mínima de las barras de cobre se calcula a partir de la corriente de cortocircuito simétrica (Ik) y el tiempo de despeje (3s o 4s). Feichi utiliza cobre electrolítico T2 con funda termorretráctil, verificado mediante ensayos de tipo hasta 31.5kA/3s.',
    },
  },
  {
    id: 'faq-02',
    category: 'transformer',
    categoryLabel: {
      en: 'Power Transformers & Efficiency',
      zh: '变压器能效与损耗',
      ja: '変圧器エネルギー効率',
      es: 'Transformadores de Potencia',
    },
    question: {
      en: 'What is the Level 1 energy efficiency standard for SCB14 vs SCB13 dry-type transformers under GB 20052-2020?',
      zh: '根据最新国家标准 GB 20052-2020，SCB14 相比 SCB13 干式变压器的一级能效空载与负载损耗降幅是多少？',
      ja: '最新規格におけるSCB14とSCB13モールド変圧器の無負荷・負荷損失低減率は？',
      es: '¿Cuáles son las reducciones de pérdidas en vacío y carga del transformador seco SCB14 frente a SCB13?',
    },
    standards: 'IEC 60076-11 / GB 20052-2020 / EN 50588-1',
    formula: 'Loss Reduction % = ((P_0_SCB13 - P_0_SCB14) / P_0_SCB13) * 100%',
    keySpecs: [
      { label: { en: 'No-load Loss (P0) Reduction', zh: '空载损耗（P0）降幅', ja: '無負荷損失低減率', es: 'Reducción de pérdidas en vacío (P0)' }, value: '~15% - 20%' },
      { label: { en: 'Load Loss (Pk) Reduction', zh: '负载损耗（Pk）降幅', ja: '負荷損失低減率', es: 'Reducción de pérdidas en carga (Pk)' }, value: '~10% - 15%' },
      { label: { en: 'Insulation Class & Fire Rating', zh: '绝缘耐温与阻燃等级', ja: '絶縁種別・難燃等級', es: 'Clase de aislamiento y fuego' }, value: 'F Class (155°C) / F1 Self-extinguishing' },
    ],
    answer: {
      en: 'GB 20052-2020 (mandating Tier 1 energy efficiency) enforces strict limits on transformer losses. SCB14 utilizes high-permeability grain-oriented silicon steel sheets (0.23mm-0.27mm laser-scribed) and step-lap mitred core stacking, reducing no-load losses by ~15-20% compared to SCB13. This yields substantial annual electricity savings for continuously energized industrial plants and data centers.',
      zh: 'GB 20052-2020 强制性国家能效标准规定了一级能效指标。飞驰电气 SCB14 采用 0.23mm-0.27mm 激光刻痕高导磁取向硅钢片与全斜阶梯搭接（Step-Lap）叠铁心工艺，空载损耗较 SCB13 降低约 15%~20%，负载损耗降低约 10%，为 24 小时连续运行的高负荷工业厂房、数据中心及光伏升压站提供显著的电费节能回报。',
      ja: 'GB 20052-2020エネルギー効率基準において、SCB14は高透磁率珪素鋼板とステップラップ積層を採用し、従来のSCB13に比べ無負荷損失を約15〜20%削減。常時通電される産業施設や太陽光発電所に最適です。',
      es: 'La norma GB 20052-2020 exige alta eficiencia energética. El SCB14 de Feichi utiliza chapa de acero al silicio de alta permeabilidad con corte láser, reduciendo las pérdidas en vacío un 15-20% respecto al SCB13.',
    },
  },
  {
    id: 'faq-03',
    category: 'switchgear',
    categoryLabel: {
      en: 'MV/LV Switchgear & Protection',
      zh: '高低压开关柜与保护',
      ja: '高低圧スイッチギア・保護',
      es: 'Celdas de Media y Baja Tensión',
    },
    question: {
      en: 'What are the strict operational steps enforced by the KYN28A "Five-Anti" mechanical interlock system?',
      zh: 'KYN28A-24/12 铠装移开式中置柜的“五防”机械联锁是如何防止带负荷误操作的？',
      ja: 'KYN28A金属閉鎖形開閉装置の「5防」インターロック機構の動作シーケンスは？',
      es: '¿Cuáles son los pasos obligatorios del enclavamiento de seguridad "Cinco-Anti" en KYN28A?',
    },
    standards: 'IEC 62271-200 / GB 3906 / DL/T 404',
    formula: 'Interlock: VCB Open -> Handcart Test/Service -> Earth Switch Open -> Door Unlocked',
    keySpecs: [
      { label: { en: 'Internal Arc Classification (IAC)', zh: '内部燃弧防护等级', ja: '内部アーク分類 (IAC)', es: 'Clasificación de arco interno' }, value: 'IAC AFLR 25kA/1s, 31.5kA/1s' },
      { label: { en: 'Enclosure Protection Degree', zh: '外壳防护等级', ja: '保護等級', es: 'Grado de protección de envolvente' }, value: 'IP4X (External) / IP2X (Between Compartments)' },
      { label: { en: 'Mechanical Endurance of Truck', zh: '手车机械寿命试验', ja: '引出機構の機械的寿命', es: 'Vida mecánica del carro extraíble' }, value: '2,000 Operations (M2 Class)' },
    ],
    answer: {
      en: 'The KYN28A Five-Anti interlock mechanism prevents five critical human operational errors: (1) Prevents moving the VCB handcart while the breaker is closed; (2) Prevents closing the VCB while the earthing switch is closed; (3) Prevents closing the earthing switch on live circuits; (4) Prevents accidental entry into energized high-voltage compartments; (5) Prevents closing the circuit breaker while in intermediate test positions. All interlocks utilize hardened steel mechanical levers coupled with electromagnetic key locks.',
      zh: 'KYN28A 铠装中置柜采用强制性机械联锁，严格杜绝五类恶性误操作：（1）防止带负荷分/合隔离开关（断路器合闸时手车无法摇进摇出）；（2）防止误分/误合断路器；（3）防止带接地线合断路器（接地刀合闸时手车无法推至工作位置）；（4）防止带电挂接地线/合接地开关（带电传感器闭锁接地刀）；（5）防止误入带电间隔（电缆室与母线室后门受接地刀机械闭锁）。',
      ja: 'KYN28Aは5大誤操作防止機構を備えています：(1)遮断器投入状態での引出入防止、(2)接地開閉器投入状態での遮断器投入防止、(3)充電状態での接地投入防止、(4)充電部への誤進入防止、(5)中間位置での誤投入防止。',
      es: 'El sistema "Cinco-Anti" del KYN28A bloquea mecánicamente los 5 errores operativos más graves en media tensión, garantizando la seguridad absoluta del operador mediante enclavamientos de acero templado.',
    },
  },
  {
    id: 'faq-04',
    category: 'mining',
    categoryLabel: {
      en: 'Mining Safety & PSA Nitrogen',
      zh: '矿山安全与制氮防灭火',
      ja: '鉱山安全・PSA窒素発生装置',
      es: 'Seguridad Minera y Nitrógeno PSA',
    },
    question: {
      en: 'How is the required nitrogen injection volume (Qn) calculated for coal mine goaf inertization under MT/T 750?',
      zh: '根据煤炭行业标准 MT/T 750 与煤矿安全规程，采空区注氮防灭火的注氮流量（Qn）如何精确计算？',
      ja: '炭鉱坑内におけるPSA窒素注入消火流量（Qn）の理論計算式は？',
      es: '¿Cómo se calcula el caudal de inyección de nitrógeno (Qn) para inertización de minas de carbón?',
    },
    standards: 'MT/T 750 / AQ 1028 / GB 50215 / Coal Safety (MA Mark)',
    formula: 'Q_n = (Q_0 * (C_0 - C_1)) / (C_1 - C_n) * K',
    keySpecs: [
      { label: { en: 'Target Oxygen Concentration in Goaf (C1)', zh: '采空区目标氧气浓度 C1', ja: '目標酸素濃度 C1', es: 'Concentración de oxígeno objetivo C1' }, value: '≤ 7.0% - 10.0%' },
      { label: { en: 'Nitrogen Purity (Cn)', zh: '飞驰 FC-N2 制氮纯度 Cn', ja: '発生窒素純度 Cn', es: 'Pureza de nitrógeno generado Cn' }, value: '≥ 97.0% (Up to 99.99%)' },
      { label: { en: 'Safety Margin Factor (K)', zh: '备用富余系数 K', ja: '安全係数 K', es: 'Factor de seguridad K' }, value: '1.2 - 1.4' },
    ],
    answer: {
      en: 'Inertization sizing is governed by the volume displacement of oxygen. Given air leakage rate (Q0), ambient oxygen (C0=21%), target suppressed oxygen (C1≤7%), generated nitrogen purity (Cn≥97%), and safety coefficient (K=1.2-1.3), Feichi proprietary FC-N2 modular PSA nitrogen systems provide high-flow delivery (from 300 Nm³/h up to 3,000 Nm³/h) with Ex d I Mb underground flameproof electrical systems and automated telemetry.',
      zh: '采空区注氮流量计算依据氧气置换平衡原理：Qn = [Q0 * (C0 - C1) / (C1 - Cn)] * K。其中 Q0 为采空区漏风量，C0 为新鲜风流氧气浓度（21%），C1 为抑爆防火目标氧浓度（通常降至 7%~10% 以下），Cn 为注氮纯度（≥97%），K 为富余系数（1.2~1.4）。飞驰电气自主研发的 FC-N2 系列地面及井下防爆注氮系统可提供 300~3000 Nm³/h 稳定产氮能力，全线通过矿用产品安全标志（MA/KA）认证。',
      ja: '酸素濃度を爆発限界（7〜10%以下）まで低下させるための注入量計算式に基づき、飛馳電気の自社開発FC-N2シリーズPSA窒素発生装置は300〜3000Nm³/hの安定供給と防爆（Ex d I Mb）認証を実現しています。',
      es: 'El dimensionamiento del nitrógeno para minas se basa en el balance de desplazamiento de oxígeno. Los sistemas PSA Feichi serie FC-N2 proporcionan de 300 a 3.000 Nm³/h con certificación antiexplosiva subterránea (MA/KA).',
    },
  },
  {
    id: 'faq-05',
    category: 'switchgear',
    categoryLabel: {
      en: 'SF6-Free RMU & Sub-Zero Insulation',
      zh: '环保型固体/空气绝缘环网柜与耐低温性能',
      ja: 'SF6フリーRMU・耐寒絶縁技術',
      es: 'RMU Ecológico Sin SF6 y Aislamiento Subcero',
    },
    question: {
      en: 'Why does SF6 gas liquefy at sub-zero temperatures in Siberia (-50°C), and how does Solid / Dry Air Insulated RMU eliminate this failure mode under GOST R 55190?',
      zh: '在西伯利亚与极寒工况（-50°C / УХЛ1）下六氟化硫（SF6）气体为何会液化导致绝缘击穿？环保固体/干燥空气绝缘开关柜如何彻底根除此故障？',
      ja: '極寒環境（-50℃）においてSF6ガスが液化し絶縁破壊を起こす原理と、固体・乾燥空気絶縁による解決策は？',
      es: '¿Por qué se licúa el gas SF6 a -50°C en climas siberianos y cómo el aislamiento sólido o aire seco elimina este fallo según GOST R 55190?',
    },
    standards: 'ГОСТ Р 55190-2012 / ГОСТ 15150-69 (УХЛ1) / IEC 62271-200 / EU F-Gas 2024/573',
    formula: 'SF6 Liquefaction Threshold: P_rel = f(T), at T = -50°C, max allowable pressure < 0.12 MPa abs',
    keySpecs: [
      { label: { en: 'Operating Temperature Limits', zh: '运行环境耐温极限', ja: '動作保証温度範囲', es: 'Rango de temperatura operativa' }, value: '-50°C to +55°C (GOST УХЛ1 Certified)' },
      { label: { en: 'Global Warming Potential (GWP)', zh: '全球变暖潜能值 GWP', ja: '地球温暖化係数 GWP', es: 'Potencial calentamiento global' }, value: 'GWP = 0 (100% SF6-Free)' },
      { label: { en: 'Live Vacuum Module Ingress', zh: '高压固封单元防护等级', ja: '高圧モールド部保護等級', es: 'Grado de protección del módulo' }, value: 'IP67 Submersible / IP54 External' },
    ],
    answer: {
      en: 'Saturated vapor pressure of SF6 gas decreases drastically with falling temperature. At -50°C, typical RMU filling pressure (0.14-0.15 MPa absolute) exceeds the saturation line, causing gaseous SF6 to condense into liquid droplets. This leads to severe gas density reduction and catastrophic dielectric breakdown. Feichi Solid Insulated Switchgear (SIS) and Dry Air Clean Air RMUs replace pressurized gas with solid cycloaliphatic epoxy resin casting or synthetic air (dew point ≤ -60°C), providing absolute dielectric stability and zero maintenance across extreme Russian/CIS winter conditions.',
      zh: 'SF6 气体的饱和蒸气压随温度下降呈指数衰减。在 -45°C ~ -50°C 极寒环境下，中压充气柜标称充气绝对压力（约 0.14~0.15 MPa）超过饱和临界线，气态 SF6 迅速冷凝凝结为液体。此时气箱内有效气体分子密度暴跌，击穿电压骤降引发相间或对地放电爆炸。飞驰电气固体绝缘环网柜（SIS 系列）采用环氧树脂 APG 固封真空灭弧室与全屏蔽接地层，干燥空气柜采用露点 ≤ -60°C 的合成空气，在物理原理上彻底消除气体冷凝与漏气隐患，完美匹配西伯利亚、远东矿山及北欧高寒电网。',
      ja: '温度低下に伴いSF6ガスの飽和蒸気圧が急減し、-50℃では充填ガスが液化して絶縁破壊に至ります。飛馳電気の固体絶縁RMU（SIS）および乾燥空気RMUは、エポキシ樹脂完全モールドまたは露点-60℃以下の乾燥空気を採用することで液化現象を物理的に排除し、極寒地でも完全な絶縁性能を維持します。',
      es: 'La presión de vapor del SF6 cae drásticamente a bajas temperaturas, licuándose a -50°C y provocando arcos internos. Las celdas de aislamiento sólido (SIS) y aire seco de Feichi eliminan este problema mediante encapsulado epoxi apantallado y aire sintético con punto de rocío ≤ -60°C, cumpliendo la categoría climática GOST UHL1.',
    },
  },
  {
    id: 'faq-06',
    category: 'substation',
    categoryLabel: {
      en: 'SVG / STATCOM & Power Quality',
      zh: '高压动态无功补偿与电能质量',
      ja: '高圧SVG・電力品質補償',
      es: 'Compensación Dinámica SVG/STATCOM',
    },
    question: {
      en: 'How to calculate the required high-voltage SVG (STATCOM) capacity (Q_svg) to improve power factor from cosφ1 to cosφ2 and suppress 2nd-25th harmonics under IEEE 519 / GOST 32144?',
      zh: '如何根据功率因数目标（从 cosφ1 提升至 cosφ2）及谐波治理要求精确计算高压 SVG（STATCOM）的额定无功补偿容量 Q_svg？',
      ja: 'IEEE 519 / GOST 32144規格に基づき、力率改善（cosφ1→cosφ2）および高調波抑制に必要な高圧SVG容量（Q_svg）の計算方法は？',
      es: '¿Cómo calcular la capacidad requerida de un STATCOM/SVG para corregir el factor de potencia y mitigar armónicos según IEEE 519 / GOST 32144?',
    },
    standards: 'IEEE 519-2022 / ГОСТ 32144-2013 / ГОСТ Р 58087-2018 / IEC 61000-3-6',
    formula: 'Q_svg = P * (tan(arccos(cos(phi_1))) - tan(arccos(cos(phi_2)))) * K_harmonic',
    keySpecs: [
      { label: { en: 'Full Dynamic Response Time (t_resp)', zh: '全动态响应时间 t_resp', ja: '過渡応答時間', es: 'Tiempo de respuesta dinámica' }, value: '≤ 5 ms (Step current < 1 ms)' },
      { label: { en: 'Harmonic Compensation Range', zh: '谐波动态滤除范围', ja: '高調波補償次数', es: 'Rango de filtrado de armónicos' }, value: '2nd to 25th Harmonics (THDu < 1.5%)' },
      { label: { en: 'Target Power Factor (cos phi)', zh: '目标补偿功率因数', ja: '目標力率 (cos phi)', es: 'Factor de potencia objetivo' }, value: '≥ 0.98 - 0.99 (Bi-directional)' },
    ],
    answer: {
      en: 'Required fundamental reactive capacity is determined by active load power (P) and target displacement angle: Q_fundamental = P * (tan(phi_1) - tan(phi_2)). To simultaneously compensate dynamic harmonic currents (such as electric arc furnaces or inverter-based renewables), a harmonic margin factor K_harmonic (typically 1.15 to 1.30) is applied. Feichi chain-circuit modular SVGs provide direct high-voltage coupling (6kV/10kV/35kV) with sub-5ms response, preventing utility penalty charges and ensuring smooth grid code compliance.',
      zh: '基波无功需求容量由负载有功功率 P 及补偿前后相角决定：Q_fund = P * (tanφ1 - tanφ2)。当同时需要治理冲击性谐波（如电弧炉、轧机或新能源逆变器高次谐波）时，需引入谐波补偿裕度系数 K_harmonic（通常取 1.15~1.30）：Q_svg = Q_fund * K_harmonic。飞驰电气高压链式 SVG 具备 6kV/10kV/35kV 无变压器直接挂网能力，以 <5ms 的超快响应彻底消除功率因数罚款与电网闪变跳闸。',
      ja: '基本波無効電力は負荷有効電力（P）および力率角度から算出：Q = P * (tanφ1 - tanφ2)。アーク炉等の高調波対策を行う場合は裕度係数（1.15〜1.30）を乗じます。飛馳電気の高圧SVGは変圧器不要で6kV/10kV/35kVに直結し、5ms以下の超高速応答で電力品質ペナルティを完全に回避します。',
      es: 'La capacidad reactiva fundamental se calcula como Q = P * (tanφ1 - tanφ2). Para compensar simultáneamente armónicos de hornos de arco o parques solares, se aplica un factor de sobrecapacidad de 1.15 a 1.30. Los equipos STATCOM de Feichi se conectan directamente a 6kV/10kV/35kV con respuesta menor a 5ms.',
    },
  },
  {
    id: 'faq-07',
    category: 'substation',
    categoryLabel: {
      en: 'Mining Substation & Russian GOST Standards',
      zh: '矿用移动变电站与俄标 GOST 规范',
      ja: '鉱山用移動変電所・GOST規格',
      es: 'Subestación Minera y Normas GOST',
    },
    question: {
      en: 'What are the core technical differences between Russian mining substation standard (ГОСТ 31610 / ТР ТС 012/2011) and IEC 60079-1 for KBSGV / KTPV flameproof units?',
      zh: '矿用隔爆型移动变电站（KBSGV / КТПВ）在俄罗斯海关联盟 ТР ТС 012/2011 及 ГОСТ 31610 认证与国际 IEC 60079-1 标准之间有哪些核心防爆与极寒差异？',
      ja: 'KBSGV/КТПВ鉱山用防爆移動変電所におけるロシアTR CU 012/2011およびGOST 31610とIEC規格の主な相違点は？',
      es: '¿Cuáles son las diferencias críticas entre la norma minera rusa GOST 31610 / TR CU 012/2011 y la norma IEC 60079-1 para subestaciones KBSGV/KTPV?',
    },
    standards: 'ГОСТ 31610.0-2014 / ГОСТ 31610.1-2014 / ТР ТС 012/2011 (Ex d I Mb) / IEC 60079-1',
    formula: 'Overpressure Test: P_test = 1.5 * P_max_explosion (≥ 1.5 MPa for 10s without permanent deformation)',
    keySpecs: [
      { label: { en: 'Explosion-Proof Marking', zh: '防爆防损标志等级', ja: '防爆等級', es: 'Marcado antiexplosivo' }, value: 'Ex d I Mb (Hazardous Methane & Dust)' },
      { label: { en: 'Ambient Temperature Range', zh: '极寒运行环境等级', ja: '耐環境仕様', es: 'Rango de temperatura' }, value: '-50°C to +40°C (GOST УХЛ5 / 09Г2С Steel)' },
      { label: { en: 'Fast Selective Leakage Tripping', zh: '选择性漏电保护切除时间', ja: '地絡遮断速度', es: 'Tiempo de disparo por fuga' }, value: '≤ 15 ms with Active Pilot Interlock' },
    ],
    answer: {
      en: 'Under Russian EAC customs union technical regulation TR CU 012/2011 and GOST 31610, underground mining substations require mandatory Ex d I Mb (flameproof Group I for methane-rich underground mines). In addition to 1.5 MPa hydro-static overpressure proofing, Russian mining authorities mandate sub-zero impact resistance tests on heavy transport skid shoes (using 09G2S low-alloy cryogenic structural steel) and microsecond-level earth leakage detection with pilot wire continuity monitoring.',
      zh: '根据俄罗斯及欧亚经济联盟 ТР ТС 012/2011 及 ГОСТ 31610.1 规程，井下矿用隔爆变电站除必须承受 ≥1.5 MPa 的 10 秒静压水压防爆强度试验外，针对西伯利亚及库兹巴斯极寒深井，强制要求外壳拖拽滑靴采用 09Г2С 低温特种合金钢（具备 -50°C 低温夏比冲击韧性），并配置 ≤15ms 的超高速选择性微机漏电闭锁保护系统，实现全电网无盲区触电与瓦斯引爆防护。',
      ja: 'ロシア関税同盟TR CU 012/2011およびGOST 31610において、鉱山変電所は1.5MPaの耐圧試験に加え、-50℃耐衝撃09G2S特種鋼ソリおよび15ms以内の超高速漏電遮断機能が義務付けられています。',
      es: 'Bajo la normativa rusa TR CU 012/2011 y GOST 31610, las subestaciones mineras requieren certificación Ex d I Mb con prueba hidrostática de 1.5 MPa, patines de acero 09G2S para -50°C y disparo ultrarrápido por fuga ≤15ms.',
    },
  },
  {
    id: 'faq-08',
    category: 'substation',
    categoryLabel: {
      en: 'Mobile Substations & IEC 61850 Process Bus',
      zh: '移动车载变电站与过程层光纤通信',
      ja: '移動式変電所・プロセスバス',
      es: 'Subestaciones Móviles y Bus de Proceso',
    },
    question: {
      en: 'How does an IEC 61850-9-2LE Process Bus reduce trailer weight and transmission latency in 110kV Mobile Modular Substations (MMPS / ММПС)?',
      zh: '在 110kV 快速部署移动车载数字变电站（MMPS / ММПС）中，IEC 61850-9-2LE 过程层光纤母线如何实现大幅减重并将 GOOSE 联锁跳闸时延压缩至 2ms 以内？',
      ja: '110kV車載移動変電所（MMPS）において、IEC 61850-9-2LEプロセスバスが車両軽量化と2ms以内GOOSE遮断を実現する仕組みは？',
      es: '¿Cómo el bus de proceso IEC 61850 reduce el peso y la latencia GOOSE (<2ms) en subestaciones móviles de 110kV?',
    },
    standards: 'IEC 61850-9-2LE / IEC 62271-202 / IEEE C37.122 / ГОСТ 14695',
    formula: 'T_trip = T_sample + T_calc + T_GOOSE + T_breaker < 45 ms (Electrical Clearance)',
    keySpecs: [
      { label: { en: 'Weight Reduction vs Copper Cables', zh: '取代铜缆整车减重', ja: '銅ケーブル削減による軽量化', es: 'Reducción de peso vs cobre' }, value: '3.8 Metric Tons' },
      { label: { en: 'GOOSE Transmission Latency', zh: 'GOOSE 报文确定性时延', ja: 'GOOSE 伝送確定遅延', es: 'Latencia de transmisión GOOSE' }, value: '< 2.0 ms (PRP/HSR Ring)' },
      { label: { en: 'Hydraulic Auto-Leveling Precision', zh: '液压支腿自动找平精度', ja: '油圧自動レベリング精度', es: 'Precisión de nivelación hidráulica' }, value: '±0.2° within 15 Minutes' },
    ],
    answer: {
      en: 'By placing Merging Units (MU) directly at the optical CT/VT primary terminals, all analog currents and voltages are digitized into Sampled Values (SV). Multi-conductor copper control cables are replaced with dual-redundant fiber optic rings (PRP/HSR), eliminating 3.8 tons of dead weight. Breaker trip commands and interlocks are transmitted via GOOSE packets with sub-2ms guaranteed latency, completely immune to electromagnetic transients during high-voltage switching.',
      zh: '通过在电子式光学互感器（OCT/OVT）一次接线端配置就地合并单元（MU），将三相模拟电信号直接数字化为采样值（SV）。以双冗余光纤环网（PRP/HSR 协议）替代数百根多芯屏蔽铜电缆，直接消除 3.8 吨车载死重。断路器快速跳闸与闭锁信号采用 GOOSE 报文传输，实测确定性时延稳定在 2.0ms 以内，彻底杜绝高压大电流断开瞬间的强电磁脉冲干扰与二次雷击击穿。',
      ja: '電子式光CT/VT端子にマージングユニット（MU）を直結し、アナログ計測値をデジタルSVデータ化。多芯銅ケーブルを完全光ファイバ二重リング（PRP/HSR）に置き換えることで3.8トンの軽量化を達成し、GOOSEトリップ信号を2ms以下で伝送します。',
      es: 'Las Unidades de Fusión (MU) digitalizan las señales analógicas en origen, sustituyendo los pesados mazos de cobre por fibra óptica redundante PRP/HSR (-3.8 toneladas). Los disparos e interbloqueos se transmiten por GOOSE con latencia inferior a 2ms e inmunidad electromagnética total.',
    },
  },
  {
    id: 'faq-09',
    category: 'switchgear',
    categoryLabel: {
      en: 'Smart Reclosers & Sub-Zero Distribution',
      zh: '智能重合器与极寒配电自动化',
      ja: 'スマートリクローザー・耐寒配電自動化',
      es: 'Reconectadores Inteligentes y Redes Subcero',
    },
    question: {
      en: 'What are the operational advantages of Bi-Stable Magnetic Actuators and Hydrophobic Epoxy (HCEP) in 10kV–35kV Outdoor Reclosers (ПСС / РВА) under Siberian heavy-icing conditions (-50°C)?',
      zh: '在西伯利亚与极寒重覆冰（-50°C / 20mm 覆冰）工况下，双稳态永磁机构与憎水性环氧树脂（HCEP）固封极柱相比传统柱上开关有哪些决定性优势？',
      ja: '極寒・重着氷環境（-50℃・氷厚20mm）において、双安定永久磁石操作機構と疎水性エポキシ（HCEP）極柱がもたらす優位性は？',
      es: '¿Cuáles son las ventajas del actuador magnético biestable y polos HCEP en reconectadores de media tensión a -50°C con hielo severo?',
    },
    standards: 'IEC 62271-111 / IEEE C37.60 / ГОСТ Р 58087 / ГОСТ 15150 УХЛ1',
    formula: 'Mechanical Operations: N_ops ≥ 100,000 cycles (Maintenance-Free, zero lubricants)',
    keySpecs: [
      { label: { en: 'Mechanical Endurance', zh: '操动机构免维护机械寿命', ja: '機械的開閉寿命', es: 'Vida útil mecánica' }, value: '100,000 Operations (No Grease)' },
      { label: { en: 'Radial Ice Coating Withstand', zh: '耐受极限径向覆冰厚度', ja: '耐着氷許容厚さ', es: 'Espesor de hielo soportado' }, value: '20 mm Radial Ice (ГОСТ 15150)' },
      { label: { en: 'Sensitive Earth Fault (SEF) Threshold', zh: '方向性小电流接地识别门槛', ja: '高感度地絡検出限界', es: 'Umbral de detección SEF' }, value: '≥ 0.5 A (Compensated Grid)' },
    ],
    answer: {
      en: 'Traditional spring-operated mechanisms suffer from lubricant freezing, metal embrittlement, and mechanical latch failure at -50°C. Feichi magnetic actuators utilize rare-earth permanent magnets with only ONE moving part per phase, eliminating lubricants and delivering 100,000 failure-free operations. Hydrophobic Cycloaliphatic Epoxy (HCEP) poles maintain water-shedding surface properties even under severe frost and industrial pollution, preventing conductive ice bridges and insulation flashovers under 20mm ice accretion.',
      zh: '传统弹簧储能机构在 -50°C 极低温下存在润滑油脂凝固、机械脱扣锁钩卡阻脆断及脱扣力不足等顽疾。飞驰电气双稳态永磁操动机构利用钕铁硼永磁锁扣保持分合闸位置，每相仅单一运动部件，无需润滑脂，实现 10 万次无故障免维护运行。HCEP 憎水性环氧树脂固封极柱在重度结霜与污秽下保持极高的水珠滚落角，彻底阻止连续导电冰桥形成，在 20mm 极端径向覆冰下依然杜绝相间和对地外绝缘闪络。',
      ja: '従来の機械式バネ機構は-50℃下でグリス凍結やラッチ破損を起こします。飛馳の永久磁石機構は可動部1点のみで完全無給油10万回動作を達成。HCEP疎水性エポキシ極柱は大沿面距離により氷厚20mmでも導電性アイスブリッジの形成を完全に阻止します。',
      es: 'Los mecanismos de resorte convencionales se bloquean a -50°C por congelación de lubricantes. El actuador magnético Feichi tiene una sola pieza móvil y no requiere grasa (100.000 maniobras). Los polos HCEP hidrofóbicos evitan puentes de hielo conductores incluso bajo 20 mm de hielo radial.',
    },
  },
];

