import { week18Whitepaper } from './week18Whitepaper';
import { week19Whitepaper } from './week19Whitepaper';
import { week20Whitepaper } from './week20Whitepaper';
import { week21Whitepaper } from './week21Whitepaper';
import { week22Whitepaper } from './week22Whitepaper';
import { week23Whitepaper } from './week23Whitepaper';
import { week24Whitepaper } from './week24Whitepaper';
import { week25Whitepaper } from './week25Whitepaper';
import { week26Whitepaper } from './week26Whitepaper';
import { week27Whitepaper } from './week27Whitepaper';
import { week28Whitepaper } from './week28Whitepaper';
import { week29Whitepaper } from './week29Whitepaper';
import { week30Whitepaper } from './week30Whitepaper';
import { week31Whitepaper } from './week31Whitepaper';
import { week32Whitepaper } from './week32Whitepaper';
import { week33Whitepaper } from './week33Whitepaper';
import { week34Whitepaper } from './week34Whitepaper';
import { week35Whitepaper } from './week35Whitepaper';
import { week36Whitepaper } from './week36Whitepaper';
import { week37Whitepaper } from './week37Whitepaper';
import { week38Whitepaper } from './week38Whitepaper';
import { week39Whitepaper } from './week39Whitepaper';

export interface WhitepaperItem {
  id: string;
  week: number;
  slug: string;
  category: 'substation' | 'switchgear' | 'mining' | 'standards';
  categoryLabel: Record<string, string>;
  title: Record<string, string>;
  eyebrow: Record<string, string>;
  author: Record<string, string>;
  standards: string;
  readTime: Record<string, string>;
  summary: Record<string, string>;
  sec1Title: Record<string, string>;
  sec1Text: Record<string, string>;
  sec2Title: Record<string, string>;
  sec2Text: Record<string, string>;
  sec3Title: Record<string, string>;
  tableHeaders: Record<string, string[]>;
  tableRows: Record<string, string[][]>;
  sec4Title: Record<string, string>;
  scenarios: Record<string, { title: string; recommend: string; reason: string }[]>;
  hasCalculator?: 'sld' | 'nitrogen' | 'disconnector' | 'trv' | 'flisr' | 'transformer' | 'svg' | 'ncit' | 'mobile' | 'harmonic' | 'gil' | 'ngr' | 'softstarter' | 'reactor' | 'mosa' | 'cable';
  ctaTitle: Record<string, string>;
  ctaDesc: Record<string, string>;
}

export const whitepapersList: WhitepaperItem[] = [
  {
    id: 'week-01',
    week: 1,
    slug: 'european-vs-american-compact-substation-sizing-guide',
    category: 'substation',
    categoryLabel: { en: 'Substation & Transformers', zh: '箱变与变压器系统', ja: '変電所・変圧器', es: 'Subestaciones y Transformadores' },
    title: {
      en: 'European-Style vs American-Style Compact Substation: Engineering Sizing & Selection Guide for Global Power Projects',
      zh: '欧式箱变 vs 美式箱变：海外电网与新能源项目工程选型与单线图配置指南',
      ja: '欧州式キュービクル vs 米国式パッドマウント変電所：海外電力プロジェクト最適選定ガイド',
      es: 'Subestaciones Compactas Tipo Europeo vs Americano: Guía de Selección para Proyectos Globales',
    },
    eyebrow: {
      en: 'FE-SPEC-01 / COMPACT SUBSTATION DOSSIER',
      zh: 'FE-SPEC-01 · 预装式变电站工程选型指南',
      ja: 'FE-SPEC-01 · プレハブ変電所選定ドシエ',
      es: 'FE-SPEC-01 · EXPEDIENTE DE SUBESTACIÓN',
      ru: 'FE-SPEC-01 · ТЕХНИЧЕСКОЕ РУКОВОДСТВО КТП',
    },
    author: {
      en: 'Feichi Engineering & Technical Dept (Lead: Henry)',
      zh: '飞驰电气技术工程部（总工/外贸对接人：Henry）',
      ja: '飛馳電気 技術部門（担当：Henry）',
      es: 'Departamento Técnico Feichi (Lead: Henry)',
    },
    standards: 'IEC 62271-202 vs IEEE C57.12.28 / ANSI C37',
    readTime: { en: '12 Min Read', zh: '12 分钟深度阅读', ja: '所要時間：12分', es: '12 Min de Lectura' },
    summary: {
      en: 'Comprehensive structural and protection analysis comparing 3-compartment European prefabricated substations (YB series) against oil-immersed integrated American padmounts (ZGS series).',
      zh: '深入解析欧式三舱独立隔离箱变与美式油浸一体化共箱箱变的结构拓扑、断路器/双熔丝保护机制及场景决策。',
      ja: '3室独立型欧州式キュービクルと油槽一体型米国式パッドマウントの構造・保護方式・適用産業を徹底比較。',
      es: 'Análisis detallado entre subestaciones modulares europeas de 3 compartimentos y transformadores padmount americanos.',
    },
    sec1Title: {
      en: '1. Architectural Topology: Three Independent Chambers vs Integrated Oil-Immersed Padmount',
      zh: '1. 结构拓扑对比：三舱独立封闭隔舱 vs 油浸一体化共箱',
      ja: '1. 構造トポロジー比較：3室独立構造 vs 一体型油浸構造',
      es: '1. Topología Arquitectónica: 3 Cámaras Aisladas vs Tanque Integrado',
    },
    sec1Text: {
      en: `When specifying outdoor distribution substations for utility and industrial projects, electrical engineers face a fundamental topological choice: the European-Style Substation (Prefabricated Compact Substation / YB Series) versus the American-Style Substation (Pad-Mounted Transformer / ZGS Series).

The European-style design organizes high-voltage switchgear, transformer, and low-voltage distribution into three physically isolated chambers separated by fireproof and arc-resistant metal partitions. This modular layout allows engineers to pair oil-immersed (S11/S13/S20) or cast-resin dry-type (SCB10/SCB13/SCB14) transformers with various ring main unit (RMU) configurations.

Conversely, the American-style padmount integrates the core, coils, high-voltage load switch, and protection fuses inside a unified hermetically sealed transformer oil tank. While this drastically reduces the footprint by up to 40-50%, it binds switchgear and transformer maintenance into a single fluid enclosure.`,
      zh: `在为海外电网、新能源及重工业项目选择户外预装式变电站时，电气工程师面临着两种截然不同的架构路线：欧式箱变（YB系列预装式变电站）与美式箱变（ZGS系列组合式变压器）。

欧式箱变采用“品字形”或“目字形”的三独立舱室设计，高压室、变压器室和低压室通过防灭火隔板完全隔离。这种模块化架构允许灵活选配油浸式变压器（S11/S13/S20）或环氧树脂干式变压器（SCB10/SCB13/SCB14），并可配备完整的环网柜（RMU）和电容自动补偿屏。

相比之下，美式箱变采用“共箱式”紧凑结构，将变压器铁芯、绕组、高压负荷开关及保护熔断器置于同一个密封油箱内。该设计使设备占地面积大幅缩减 40%~50%，但开关与变压器共油运行，检修独立性相对较低。`,
      ja: `欧州式は高圧室・変圧器室・低圧室が完全に物理分離されており、油入変圧器またはモールド変圧器を自由に選定可能。米国式は変圧器とスイッチを同一油槽に収めた高密度設計で、設置面積を約40%削減します。`,
      es: `El diseño tipo europeo organiza media tensión, transformador y baja tensión en 3 compartimentos independientes con paneles ignífugos. El tipo americano integra núcleo y seccionador en un solo tanque, reduciendo el espacio hasta un 50%.`,
    },
    sec2Title: {
      en: '2. Protection Schemes & Arc Flash Safety Comparison',
      zh: '2. 保护配置与内部电弧安全分析',
      ja: '2. 保護方式とアーク安全性の比較',
      es: '2. Esquemas de Protección y Seguridad contra Arco Eléctrico',
    },
    sec2Text: {
      en: `Protection philosophy differs significantly between the two architectures:
• European-Style: Utilizes standard SF6 gas-insulated or solid-insulated vacuum Ring Main Units (RMUs). Protection is governed by microprocessor relays, vacuum circuit breakers (VCBs), and calibrated current transformers (CTs). Arc venting channels direct internal faults away from operational corridors, meeting IEC 62271-200 internal arc classification (IAC-AFL).
• American-Style: High-voltage protection relies on oil-immersed dual-fuse coordination (Bay-O-Net overload fuse in series with a current-limiting back-up fuse). Load break switching is performed via oil-immersed 2-position or 4-position switches with dead-front elbow connectors.`,
      zh: `两种架构在继电保护与电气安全上有根本区别：
• 欧式箱变：高压侧通常配置 SF6 充气环网柜或固体绝缘环网柜，通过微机综合保护装置与真空断路器（VCB）实现过流、速断及接地保护，配备专用的泄压通道，满足 IEC 62271-200 的内部燃弧（IAC-AFL）安全等级。
• 美式箱变：高压保护依靠油浸式双熔断器协同（插入式 Bay-O-Net 熔断器作为过载保护，与后备限流熔断器串联）。采用全绝缘、全密封的肘型电缆插头实现死前沿（Dead-Front）安全操作。`,
      ja: `欧州式はSF6/固体絶縁RMUと真空遮断器を採用しIEC 62271-200アーク試験に適合。米国式は油中デュアルヒューズとエルボコネクタによるデッドフロント構造を採用しています。`,
      es: `El tipo europeo utiliza celdas RMU con interruptores en vacío y relés digitales (IEC 62271-200 IAC-AFL). El tipo americano emplea fusibles en aceite tipo Bay-O-Net y conectores acodados frontales.`,
    },
    sec3Title: {
      en: '3. Technical Specification & Parameter Comparison Matrix',
      zh: '3. 核心技术参数与工程规格对照表',
      ja: '3. 主要仕様・パラメータ対比表',
      es: '3. Matriz Comparativa de Especificaciones Técnicas',
    },
    tableHeaders: {
      en: ['Engineering Parameter', 'European Compact Substation (YB / IEC)', 'American Pad-Mounted Substation (ZGS / ANSI)'],
      zh: ['核心技术参数', '欧式预装式箱变 (YB / IEC)', '美式组合式箱变 (ZGS / ANSI)'],
      ja: ['設計パラメータ', '欧州式キュービクル (YB / IEC)', '米国式パッドマウント (ZGS / ANSI)'],
      es: ['Parámetro Técnico', 'Subestación Tipo Europeo (YB / IEC)', 'Subestación Tipo Americano (ZGS / ANSI)'],
    },
    tableRows: {
      en: [
        ['Physical Architecture', '3 Isolated Modular Compartments (HV / Trafo / LV)', 'Integrated Single Oil Tank + Front Cable Compartment'],
        ['Voltage Range', '10 kV, 24 kV, 35 kV (Up to 40.5 kV)', '10 kV, 15 kV, 35 kV (Dead-Front Design)'],
        ['Rated Capacity', '100 kVA up to 3,150 kVA (Standard)', '200 kVA up to 2,000 kVA (Compact)'],
        ['Transformer Flexibility', 'Oil-Immersed (S13/S20) OR Cast Resin Dry-Type (SCB13)', 'Oil-Immersed Only (Mineral Oil or FR3 Ester Fluid)'],
        ['Enclosure & Ingress', 'IP54 / IP44 (Double-Wall Galvanized / Composite)', 'IP43 / NEMA 3R (Direct Corrugated Radiator Cooling)'],
        ['Switchgear Modularity', 'Full RMU flexibility (Circuit Breaker / Load Switch)', 'Built-in 2/4-Position Oil Switch + Bay-O-Net Fuse'],
        ['Capacitor Compensation', 'Integrated Automatic Power Factor Controller & Bank', 'Limited / External Separate Enclosure Required'],
        ['Applicable Standards', 'IEC 62271-202, IEC 60076, GB/T 17467', 'IEEE C57.12.28, IEEE C37.74, ANSI C57.12.00'],
      ],
      zh: [
        ['物理结构拓扑', '高压/变压器/低压 3 独立封闭隔舱', '变压器共箱一体化 + 前置电缆室'],
        ['额定电压等级', '10 kV, 24 kV, 35 kV (最高 40.5 kV)', '10 kV, 15 kV, 35 kV (死前沿插接)'],
        ['额定容量范围', '100 kVA 至 3,150 kVA (大容量)', '200 kVA 至 2,000 kVA (紧凑型)'],
        ['变压器适配性', '油浸式 (S13/S20) 或 环氧树脂干变 (SCB13)', '仅限油浸式 (矿物油或 FR3 植物绝缘油)'],
        ['外壳与防护等级', 'IP54 / IP44 (双层镀锌钢板/复合材料)', 'IP43 / NEMA 3R (波纹油箱自然风冷)'],
        ['开关模块化扩展', '完整环网柜 (断路器/负荷开关灵活组合)', '内置 2工位/4工位 负荷开关 + 熔断器'],
        ['低压无功补偿', '标配智能电容自动补偿屏与多路出线', '空间受限，通常需外接独立低压补偿箱'],
        ['执行国际标准', 'IEC 62271-202, IEC 60076, GB/T 17467', 'IEEE C57.12.28, IEEE C37.74, ANSI C57'],
      ],
      ja: [
        ['物理構造', '高圧・変圧器・低圧の3室完全隔離', '油槽一体型＋前面ケーブル室'],
        ['定格電圧', '10kV / 24kV / 35kV (最大 40.5kV)', '10kV / 15kV / 35kV'],
        ['容量範囲', '100kVA 〜 3,150kVA', '200kVA 〜 2,000kVA'],
        ['変圧器適合性', '油入またはモールド乾式対応', '油入変圧器専用'],
        ['規格適合', 'IEC 62271-202, IEC 60076', 'IEEE C57.12.28, ANSI C37'],
      ],
      es: [
        ['Estructura Física', '3 Compartimentos Aislados (MT / Trafo / BT)', 'Tanque Único en Aceite + Caja Frontal'],
        ['Voltaje Nominal', '10 kV, 24 kV, 35 kV (hasta 40.5 kV)', '10 kV, 15 kV, 35 kV'],
        ['Capacidad Nominal', '100 kVA hasta 3,150 kVA', '200 kVA hasta 2,000 kVA'],
        ['Tipo de Transformador', 'En Aceite o Resina Seca (SCB13)', 'Solo en Aceite (Mineral o FR3)'],
        ['Normas Aplicables', 'IEC 62271-202, IEC 60076', 'IEEE C57.12.28, ANSI C37'],
      ],
    },
    sec4Title: {
      en: '4. Scenario-Based Application Decision Guide',
      zh: '4. 重点应用场景选型决策指南',
      ja: '4. 適用産業別選定マトリクス',
      es: '4. Guía de Decisión por Sector Industrial',
    },
    scenarios: {
      en: [
        {
          title: 'Renewable Solar & Wind Farms (Inverter Booster Stations)',
          recommend: 'Recommendation: American Padmount / Integrated Container Cabins',
          reason: 'Low CapEx, minimal footprint, and direct plug-in elbow connectors make padmounts cost-effective for distributed solar strings.',
        },
        {
          title: 'Urban Grid Distribution & Commercial Buildings',
          recommend: 'Recommendation: European Substation with Cast-Resin Dry-Type Transformer',
          reason: 'Eliminates oil fire hazard inside high-density residential and commercial districts, meeting strict IEC municipal safety codes.',
        },
        {
          title: 'Heavy Industrial Plants & Mining Complexes',
          recommend: 'Recommendation: European Substation with Heavy C5-M Anti-Corrosion Enclosure',
          reason: 'Independent chambers allow multi-loop low-voltage outgoing breakers, intelligent motorized MCCB feeders, and integrated harmonic filtering.',
        },
      ],
      zh: [
        {
          title: '光伏与风电升压变电站 (新能源升压并网)',
          recommend: '选型推荐：美式组合式箱变 或 集装箱式升压配电舱',
          reason: '占地极小、初始投资（CapEx）低、防风沙能力强，非常适合集中式光伏电站的分散升压需求。',
        },
        {
          title: '城市主干电网配电与商业综合体、医院',
          recommend: '选型推荐：欧式箱变（搭配环氧树脂浇注干式变压器）',
          reason: '干变彻底杜绝油火灾隐患，且欧式多回路出线与自动化监控能无缝对接城市 SCADA 配网系统。',
        },
        {
          title: '重型工矿冶金与石化化工园区',
          recommend: '选型推荐：欧式箱变（搭配 C5-M 重防腐外壳与谐波治理）',
          reason: '独立低压舱室内可容纳大电流智能塑壳断路器、APF有源电力滤波器与电动机智能控制单元。',
        },
      ],
      ja: [
        {
          title: '太陽光・風力発電所',
          recommend: '推奨：米国式パッドマウント変電所',
          reason: '初期コスト低減、省スペース、高耐候性により分散型発電所に最適。',
        },
        {
          title: '都市商業ビル・病院インフラ',
          recommend: '推奨：欧州式（モールド変圧器搭載型）',
          reason: '不燃性モールド変圧器により火灾リスクを排除。',
        },
      ],
      es: [
        {
          title: 'Parques Solares y Eólicos',
          recommend: 'Recomendación: Tipo Americano / Cabina Integrada',
          reason: 'Bajo costo inicial, dimensiones reducidas y conectores estancos para intemperie extrema.',
        },
        {
          title: 'Redes Urbanas y Edificios Comerciales',
          recommend: 'Recomendación: Tipo Europeo con Transformador Seco',
          reason: 'Elimina riesgo de incendio en zonas densamente pobladas.',
        },
      ],
    },
    hasCalculator: 'sld',
    ctaTitle: {
      en: 'Need Single-Line Diagrams or Customized Substation CADs?',
      zh: '需要获取该工况的 CAD 一次接线图与技术方案？',
      ja: '単線結線図（CAD）や詳細見積が必要ですか？',
      es: '¿Requiere Diagramas Unifilares CAD o Cotización?',
    },
    ctaDesc: {
      en: 'Our engineering department in Shenyang (led by Henry) provides primary schematic design, busbar sizing, and compliance verification within 24 hours.',
      zh: '沈阳飞驰电气工程技术团队（由技术负责人 Henry 主理）将在 24 小时内为您提供母线选型计算、CAD 接线图与正式报价单。',
      ja: '飛馳電気技術チーム（担当：Henry）が24時間以内にカスタム設計案を提出します。',
      es: 'Nuestro equipo de ingeniería en Shenyang (liderado por Henry) entregará su propuesta técnica en 24 horas.',
    },
  },
  {
    id: 'week-02',
    week: 2,
    slug: 'kyn28-mv-switchgear-internal-arc-and-five-anti-interlock-guide',
    category: 'switchgear',
    categoryLabel: { en: 'MV/LV Switchgear & Protection', zh: '高低压开关柜与保护', ja: 'スイッチギア・保護継電', es: 'Celdas de MT/BT y Protección' },
    title: {
      en: 'KYN28A-24 vs KYN28A-12 MV Switchgear: Internal Arc Classification (IAC AFLR) & "Five-Anti" Mechanical Interlock Safety Architecture',
      zh: 'KYN28A-24 与 KYN28A-12 中置柜：内部燃弧安全（IAC AFLR）与“五防”机械联锁工程解析',
      ja: 'KYN28A 高圧スイッチギア：アーク短絡安全基準（IAC AFLR）と「五防」機械連動インターロック構造',
      es: 'Celdas de Media Tensión KYN28: Clasificación de Arco Interno (IAC AFLR) y Seguridad Mecánica "Cinco-Anti"',
    },
    eyebrow: {
      en: 'FE-SAFE-02 / SWITCHGEAR ARC & INTERLOCK SAFETY',
      zh: 'FE-SAFE-02 · 开关柜机械五防与燃弧安全规范',
      ja: 'FE-SAFE-02 · スイッチギア5重インターロック・アーク防護',
      es: 'FE-SAFE-02 · SEGURIDAD Y ENCLAVAMIENTO DE CELDAS',
      ru: 'FE-SAFE-02 · БЛОКИРОВКИ КРУ И ДУГОВАЯ ЗАЩИТА',
    },
    author: {
      en: 'Feichi Engineering & Technical Dept (Lead: Henry)',
      zh: '飞驰电气技术工程部（总工/外贸对接人：Henry）',
      ja: '飛馳電気 技術部門（担当：Henry）',
      es: 'Departamento Técnico Feichi (Lead: Henry)',
    },
    standards: 'IEC 62271-200 / GB/T 3906 / DL/T 404',
    readTime: { en: '14 Min Read', zh: '14 分钟深度阅读', ja: '所要時間：14分', es: '14 Min de Lectura' },
    summary: {
      en: 'Engineering analysis of metal-clad withdrawable switchgear (KYN28), detailing air insulation clearance distances, gas exhaust pressure-relief flaps, and the comprehensive 5-anti interlock logic.',
      zh: '深度解析KYN28金属铠装中置式开关柜在12kV与24kV电网中的绝缘爬距、燃弧泄压通道设计以及防止带负荷误操作的五防机械联锁闭锁逻辑。',
      ja: 'KYN28型引出形スイッチギアの絶縁距離、ガス圧力開放ベント、誤操作防止「五防」インターロックの機械設計を解説。',
      es: 'Análisis de celdas blindadas extraíbles KYN28, distancias de aislamiento en aire, canales de despresurización y enclavamientos mecánicos de seguridad.',
    },
    sec1Title: {
      en: '1. Metal-Clad Enclosure Compartmentalization & Arc Venting Dynamics',
      zh: '1. 金属铠装四隔离隔室与顶部燃弧定向泄压动力学',
      ja: '1. 4区画完全金属隔離構造とアーク圧力開放ダイナミクス',
      es: '1. Compartimentación Metálica y Dinámica de Venteo de Arco',
    },
    sec1Text: {
      en: `The KYN28A series (Air-Insulated Metal-Clad Withdrawable Switchgear) represents the industry gold standard for 12kV–24kV primary power distribution. The cabinet is partitioned into four independent, grounded metal chambers:
1. Busbar Compartment: Hosts main copper busbars insulated with cross-linked heat-shrink sleeves and epoxy support insulators.
2. Circuit Breaker (Handcart) Compartment: Houses the withdrawable vacuum circuit breaker (such as VS1 or VD4) on high-precision guide rails with automatic safety shutters.
3. Cable Compartment: Spacious bottom area allowing up to 3–6 single-core cables per phase, current transformers (CTs), zero-sequence CTs, lightning arresters, and earthing switches.
4. Low-Voltage Instrument Compartment: Accommodates microprocessor protection relays, smart meters, terminal blocks, and auxiliary tripping circuits.

Crucially, each high-voltage chamber is equipped with an independent pressure-relief flap at the cabinet roof. In the rare event of an internal arc flash (up to 31.5kA / 40kA for 1s), the generated overpressure forces the flap open within 10–15ms, exhausting ionized gases upward into the substation ceiling duct away from operating personnel, achieving strict IEC 62271-200 IAC AFLR compliance.`,
      zh: `KYN28A 系列（铠装移开式交流金属封闭开关设备）是 12kV~24kV 主配电网的核心骨干装备。柜体采用敷铝锌钢板经 CNC 高精度弯折加工后螺栓组装，分为四个相互独立的接地金属隔室：
1. 母线室：布置主母线与分支母线，母线表面包裹高分子热缩套管，并采用阻燃环氧树脂绝缘子支撑。
2. 断路器（手车）室：安装可抽出式真空断路器手车（如 VS1、VD4 或 ZN63），配备双向导向滑轨与自动联锁绝缘活门。
3. 电缆室：空间宽敞，可并联 3~6 根单芯中压电缆，配置电流互感器（CT）、零序互感器、避雷器及接地开关。
4. 低压继电器仪表室：集成微机综合保护装置、智能电度表、端子排及交直流控制回路。

每个高压隔室顶部均设有独立的超压泄压翻门。当隔室内发生短路燃弧事故（可达 31.5kA/40kA 1秒）时，内部瞬时高压气体在 10~15 毫秒内顶开泄压翻门向上方排气通道喷出，杜绝横向炸裂，达到严苛的 IEC 62271-200 IAC AFLR 内部燃弧安全等级。`,
      ja: `母線室・遮断器室・ケーブル室・低圧計器室の4室が独立隔離。上部圧力開放ベントにより内部アーク（最大40kA/1s）の衝撃を上方へ逃がし、前面・側面・後面の作業員安全を確保（IAC AFLR）。`,
      es: `Estructura de 4 compartimentos metálicos independientes con trampillas superiores de alivio de sobrepresión que liberan los gases ionizados en <15ms protegiendo al operador frente a arcos internos (IAC AFLR).`,
    },
    sec2Title: {
      en: '2. The "Five-Anti" Comprehensive Mechanical & Electrical Interlocking Logic',
      zh: '2. “五防”机械与电气闭锁逻辑详解',
      ja: '2. 「五防」機械・電気インターロック機構',
      es: '2. Lógica de Seguridad "Cinco-Anti" Mecánica y Eléctrica',
    },
    sec2Text: {
      en: `To prevent catastrophic human operating errors in high-voltage substations, KYN28 incorporates the mandatory "Five-Anti" safety interlock mechanism:
1. Prevent Closing with Load: The VCB handcart cannot be racked in or out between "Test" and "Operating" positions unless the circuit breaker is fully opened.
2. Prevent Inadvertent Breaker Operation: The breaker cannot close if the handcart is in an intermediate racked position.
3. Prevent Closing Earth Switch on Live Bus: The earthing switch interlock prevents the earthing blade from closing if the handcart is in the "Operating" position.
4. Prevent Closing Breaker with Earth Switch Closed: The handcart cannot be pushed into the "Operating" position while the earthing switch is closed.
5. Prevent Inadvertent Entry into Live Compartment: The cable compartment door and handcart door cannot be unlocked unless the earthing switch is closed and the breaker handcart is racked out to the "Test" position.`,
      zh: `为杜绝中高压配电所中因人为误操作引发的人身伤亡与大面积停电，KYN28 严格内置五重机械与电气防误联锁：
1. 防止误分、误合断路器：手车在移动或未到位时，真空断路器合闸回路被机械与电气双重切断。
2. 防止带负荷推拉断路器手车：断路器处于合闸状态时，底盘推进机构被机械卡死，无法在“试验位置”与“工作位置”之间摇动。
3. 防止带电合接地开关：断路器手车处于“工作位置”时，接地开关操作孔被机械挡板锁死，严禁合上接地刀闸。
4. 防止带接地线（开关）送电：接地开关处于合闸状态时，断路器手车推进机构受阻，无法摇进“工作位置”。
5. 防止误入带电间隔：电缆室后门与手车室门设有机械联锁，只有接地开关合闸后，隔室门锁方可打开检修。`,
      ja: `負荷開閉防止、誤投入防止、通電中の接地閉路防止、接地状態での送電防止、通電区画の誤開放防止を機械・電気連動で完全防御。`,
      es: `Previene apertura/cierre bajo carga, maniobras en posiciones intermedias, puesta a tierra con tensión y acceso a compartimentos energizados.`,
    },
    sec3Title: {
      en: '3. Engineering Parameter Comparison: KYN28A-12 vs KYN28A-24',
      zh: '3. KYN28A-12 与 KYN28A-24 开关柜规格对照表',
      ja: '3. 12kV vs 24kV スイッチギア仕様比較',
      es: '3. Comparativa de Especificaciones Técnicas 12kV vs 24kV',
    },
    tableHeaders: {
      en: ['Technical Specification', 'KYN28A-12 (12 kV Class)', 'KYN28A-24 (24 kV Class)'],
      zh: ['核心技术参数', 'KYN28A-12 (12 kV 级中置柜)', 'KYN28A-24 (24 kV 级中置柜)'],
      ja: ['設計パラメータ', 'KYN28A-12 (12kV級)', 'KYN28A-24 (24kV級)'],
      es: ['Parámetro Técnico', 'KYN28A-12 (12 kV)', 'KYN28A-24 (24 kV)'],
    },
    tableRows: {
      en: [
        ['Rated Voltage (Ur)', '12 kV', '24 kV'],
        ['Power Frequency Withstand (1 min)', '42 kV (Dry) / 48 kV (Across Isolating Distance)', '65 kV (Dry) / 79 kV (Across Isolating Distance)'],
        ['Lightning Impulse Withstand (BIL / Up)', '75 kV (Peak) / 85 kV (Isolating Distance)', '125 kV (Peak) / 145 kV (Isolating Distance)'],
        ['Rated Current (Ir)', '630A / 1250A / 2000A / 3150A / 4000A', '630A / 1250A / 2000A / 2500A / 3150A'],
        ['Short-Time Withstand Current (Ik / 4s)', '25 kA / 31.5 kA / 40 kA / 50 kA', '25 kA / 31.5 kA'],
        ['Peak Withstand Current (Ip)', '63 kA / 80 kA / 100 kA / 125 kA', '63 kA / 80 kA'],
        ['Internal Arc Rating (IAC)', 'IAC AFLR 31.5kA / 1s or 40kA / 1s', 'IAC AFLR 25kA / 1s or 31.5kA / 1s'],
        ['Air Clearance (Phase-Phase / Phase-Earth)', '≥ 125 mm (Pure Air) or Composite Insulation', '≥ 180 mm (Pure Air) with Epoxy Barriers'],
        ['Standard Dimensions (W × D × H)', '800/1000 × 1500 × 2200 mm', '1000 × 1700 × 2300 mm'],
      ],
      zh: [
        ['额定工作电压 (Ur)', '12 kV', '24 kV'],
        ['工频耐受电压 (1分钟工频)', '42 kV (相对地) / 48 kV (隔离断口)', '65 kV (相对地) / 79 kV (隔离断口)'],
        ['雷电冲击耐受电压 (BIL / 峰值)', '75 kV (相对地) / 85 kV (隔离断口)', '125 kV (相对地) / 145 kV (隔离断口)'],
        ['额定工作电流 (Ir)', '630A / 1250A / 2000A / 3150A / 4000A', '630A / 1250A / 2000A / 2500A / 3150A'],
        ['额定短时耐受电流 (4秒热稳定 Ik)', '25 kA / 31.5 kA / 40 kA / 50 kA', '25 kA / 31.5 kA'],
        ['额定峰值耐受电流 (动稳定 Ip)', '63 kA / 80 kA / 100 kA / 125 kA', '63 kA / 80 kA'],
        ['内部燃弧安全等级 (IAC)', 'IAC AFLR 31.5kA / 1s 或 40kA / 1s', 'IAC AFLR 25kA / 1s 或 31.5kA / 1s'],
        ['纯空气净绝缘距离 (相间/对地)', '≥ 125 mm (复合绝缘辅助)', '≥ 180 mm (强化环氧屏蔽隔离)'],
        ['标准柜体外形尺寸 (宽×深×高)', '800/1000 × 1500 × 2200 mm', '1000 × 1700 × 2300 mm'],
      ],
      ja: [
        ['定格電圧 (Ur)', '12 kV', '24 kV'],
        ['商用周波耐電圧 (1分)', '42 kV / 48 kV', '65 kV / 79 kV'],
        ['雷インパルス耐電圧 (BIL)', '75 kV / 85 kV', '125 kV / 145 kV'],
        ['定格電流 (Ir)', '630A 〜 4000A', '630A 〜 3150A'],
        ['短時間耐電流 (Ik / 4s)', '最大 50 kA', '最大 31.5 kA'],
        ['アーク安全定格 (IAC)', 'IAC AFLR 40kA / 1s', 'IAC AFLR 31.5kA / 1s'],
      ],
      es: [
        ['Voltaje Nominal (Ur)', '12 kV', '24 kV'],
        ['Tensión de Ensayo a Frecuencia Ind.', '42 kV / 48 kV', '65 kV / 79 kV'],
        ['Nivel Básico de Aislamiento (BIL)', '75 kV / 85 kV', '125 kV / 145 kV'],
        ['Corriente Nominal (Ir)', '630A hasta 4000A', '630A hasta 3150A'],
        ['Corriente de Cortocircuito (4s)', 'Hasta 50 kA', 'Hasta 31.5 kA'],
        ['Clasificación de Arco Interno', 'IAC AFLR 40kA / 1s', 'IAC AFLR 31.5kA / 1s'],
      ],
    },
    sec4Title: {
      en: '4. Critical Engineering Considerations for Overseas Grid Integration',
      zh: '4. 海外配电工程中的关键电气设计考量',
      ja: '4. 海外プロジェクトにおける設計上の留意点',
      es: '4. Consideraciones Críticas para Proyectos de Exportación',
    },
    scenarios: {
      en: [
        {
          title: 'High Altitude (> 1000m ASL) Insulation Derating',
          recommend: 'Mitigation: Increase Air Clearance & Epoxy Bushing Creepage',
          reason: 'Air dielectric strength decreases at higher altitudes. For substations at 2000m-3000m, withstand voltage must be derated by Ka factor per IEC 62271-1.',
        },
        {
          title: 'High Ambient Temperature & Humidity (Tropical Substation)',
          recommend: 'Mitigation: Forced Ventilation Louvers & Dehumidifier Heating Elements',
          reason: 'Prevents condensation on busbar insulators and derates continuous current busbar cross-section to avoid exceeding 105°C temperature rise limits.',
        },
      ],
      zh: [
        {
          title: '高海拔地区（海拔 > 1000m）空气绝缘修正',
          recommend: '解决方案：增大纯空气绝缘间隙或升级复合绝缘外套管',
          reason: '高海拔空气稀薄导致击穿电压降低。在 2000m~3000m 高原地区，需按 IEC 62271-1 标准引入 Ka 海拔绝缘修正系数，提高耐压等级。',
        },
        {
          title: '热带高温高湿与沿海盐雾环境',
          recommend: '解决方案：加装智能温湿度控制加热器与 C5-M 级防腐镀层',
          reason: '防止绝缘子表面凝露产生局部放电（PD），并在铜母线搭接面增加全镀银处理，严格控制 105℃ 母线温升红线。',
        },
      ],
      ja: [
        {
          title: '高地（標高1000m以上）での絶縁補正',
          recommend: '対策：絶縁距離拡大およびエポキシブッシング強化',
          reason: '気圧低下による絶縁耐力低下をIEC規格補正係数に基づき設計。',
        },
        {
          title: '熱帯・多湿環境対策',
          recommend: '対策：除湿ヒーターおよび耐腐食処理',
          reason: '結露による沿面放電を防止し、母線接続部の全数銀メッキを実施。',
        },
      ],
      es: [
        {
          title: 'Instalaciones a Gran Altitud (> 1000m)',
          recommend: 'Mitigación: Mayor Distancia de Aislamiento y Resina Epoxi',
          reason: 'Ajuste de rigidez dieléctrica por menor densidad del aire según IEC 62271-1.',
        },
        {
          title: 'Ambientes Tropicales y Alta Humedad',
          recommend: 'Mitigación: Calefactores Anticondensación y Plateado de Pletinas',
          reason: 'Evita descargas parciales por condensación y asegura límites de temperatura ≤ 105°C.',
        },
      ],
    },
    ctaTitle: {
      en: 'Request KYN28 Primary Schematics & Busbar Sizing Calculations',
      zh: '索取 KYN28 开关柜一次方案图集与母线动热稳定校验报告',
      ja: 'KYN28 系統図面・母線計算書の提供依頼',
      es: 'Solicitar Planos Unifilares y Cálculo de Pletinas KYN28',
    },
    ctaDesc: {
      en: 'Feichi Electrical provides tailored secondary protection schematics, CT/PT ratio selection, and CAD drawings within 24 hours.',
      zh: '飞驰电气技术团队将在 24 小时内为您提供完整的微机二次接线图、互感器精度校验与 CAD 图纸。',
      ja: '飛馳電気技術チームが24時間以内に二次保護図面およびCADデータを作成します。',
      es: 'Feichi Electrical entrega diagramas de protección secundaria y planos CAD en 24 horas.',
    },
  },
  {
    id: 'week-03',
    week: 3,
    slug: 'ccteg-psa-nitrogen-generation-and-coal-mine-safety-sizing-guide',
    category: 'mining',
    categoryLabel: { en: 'Mining Safety & Hazardous Systems', zh: '工矿特种安全与制氮系统', ja: '鉱山安全・ガス防災', es: 'Sistemas Mineros y Seguridad' },
    title: {
      en: 'Feichi FC-N2 Mining Safety: PSA Nitrogen Generation Adsorption Cycle & Underground Oxygen Suppression Sizing Methodology',
      zh: '飞驰电气 FC-N2 矿用安全技术：变压吸附（PSA）制氮循环与井下采空区注氮防灭火计算',
      ja: '飛馳電気 FC-N2 鉱山安全技術：PSA窒素発生装置の吸着サイクルと坑内採空区酸素抑制設計',
      es: 'Seguridad Minera Feichi FC-N2: Generación de Nitrógeno PSA y Metodología de Supresión de Oxígeno',
    },
    eyebrow: {
      en: 'FE-MINE-03 / MINE EXPLOSION-PROOF & NITROGEN SYSTEM',
      zh: 'FE-MINE-03 · 煤矿采空区防灭火制氮系统工程标准',
      ja: 'FE-MINE-03 · 鉱山防爆・窒素消火システム規格',
      es: 'FE-MINE-03 · SEGURIDAD MINERA E INYECCIÓN DE NITRÓGENO',
      ru: 'FE-MINE-03 · ШАХТНЫЕ АЗОТНЫЕ СТАНЦИИ И ВЗРЫВОЗАЩИТА',
    },
    author: {
      en: 'Feichi Special Safety & Gas Separation Equipment Dept',
      zh: '飞驰电气特种安全与气体分离装备技术部',
      ja: '飛馳電気 特殊安全・ガス分離装置部門',
      es: 'Dpto. de Sistemas Especiales y Separación de Gases Feichi',
    },
    standards: 'MT/T 750 / AQ 1028 / GB 50215 / MA Certification',
    readTime: { en: '15 Min Read', zh: '15 分钟深度阅读', ja: '所要時間：15分', es: '15 Min de Lectura' },
    summary: {
      en: 'Mathematical derivation of goaf nitrogen inertization flow rates, Carbon Molecular Sieve (CMS) adsorption pressure kinetics, and underground explosion-proof skid-mounted integration.',
      zh: '系统解析煤矿采空区遗煤自燃的窒息防灭火注氮流量数学计算模型、碳分子筛（CMS）变压吸附动力学，以及井下防爆撬装制氮机组的集成配置。',
      ja: '炭鉱採空区における自然発火防止のための窒素注入計算モデル、カーボンモレキュラーシーブ（CMS）の吸着動特性、坑内防爆パッケージを解説。',
      es: 'Derivación matemática del flujo de inertización por nitrógeno en minería de carbón, cinética de tamiz molecular de carbono (CMS) y skid antiexplosión.',
    },
    sec1Title: {
      en: '1. Fundamentals of Underground Coal Fire Suppression by Nitrogen Inertization',
      zh: '1. 采空区遗煤自燃的注氮惰化机理与临界氧气浓度控制',
      ja: '1. 窒素不活性化による坑内自然発火抑制メカニズム',
      es: '1. Fundamentos de Supresión de Fuego Subterráneo mediante Nitrógeno',
    },
    sec1Text: {
      en: `Underground coal seam spontaneous combustion poses severe catastrophic hazards in mining operations. When broken coal in the goaf (mined-out area) contacts air, low-temperature oxidation begins. If the reaction heat cannot dissipate, the temperature rises past the critical threshold (60°C–80°C), triggering spontaneous open fires.

Injecting high-purity nitrogen (N2 purity ≥ 97%–99.5%) into the oxidization zone serves three critical thermodynamic functions:
1. Oxygen Dilution: Reduces the ambient oxygen volume fraction in the goaf below the spontaneous combustion critical threshold (typically < 7.0%–10.0%), cutting off the chemical oxidation chain.
2. Gas Pressure Suppression: Pressurizes the goaf atmosphere, preventing fresh air leakage from the active working face.
3. Convective Cooling: Continuous cryogenic gas expansion absorbs reaction heat, quenching thermal hotspots.`,
      zh: `煤矿采空区遗煤自燃是井下最重大的安全隐患之一。采空区碎煤在漏风供氧条件下发生低温氧化，热量积聚引发温度升高，一旦超过临界温度（60℃~80℃）便会诱发大面积自燃火灾并引发瓦斯爆炸。

向采空区氧化带持续注入高纯度氮气（纯度 ≥ 97%~99.5%）具有三重防灭火机理：
1. 氧浓度窒息稀释：将采空区多孔介质内的氧气体积分数迅速压降至自燃临界氧浓度（通常为 7.0%~10.0%）以下，从化学动力学上切断氧化链式反应。
2. 均压防漏风阻隔：提高采空区气体压力，抑制工作面新鲜风流向采空区的漏风渗透。
3. 对流吸热降温：连续低温气流流经高温氧化区，带走煤体蓄积的热量，抑制升温热斑扩散。`,
      ja: `採空区の残炭酸化による自然発火を防止するため、純度97%〜99.5%の窒素ガスを連続注入。酸素濃度を限界値（7〜10%以下）に抑制し、風漏れ防止と冷却効果を発揮。`,
      es: `La inyección de nitrógeno (pureza ≥ 97%-99.5%) en zonas mineras explotadas diluye el oxígeno por debajo del umbral crítico (<7-10%), frena fugas de aire y enfría puntos calientes.`,
    },
    sec2Title: {
      en: '2. Engineering Flow Rate Calculation Formula for Goaf Nitrogen Injection',
      zh: '2. 采空区防灭火注氮流量工程计算模型',
      ja: '2. 窒素注入流量の工学的計算式',
      es: '2. Fórmula de Cálculo de Flujo de Nitrógeno en Obra',
    },
    sec2Text: {
      en: `According to Chinese Coal Mine Safety Standard MT/T 750 and Coal Mine Safety Regulations, the design nitrogen injection flow rate $Q_N$ (m³/h) is calculated using the oxygen volumetric balance equation:

$$Q_N = \frac{Q_0 \cdot (C_0 - C_1)}{C_1 - C_N} \cdot K$$

Where:
• $Q_0$: Leakage air volume flowing into the goaf oxidation zone (m³/h, typically measured by tracer gas or ventilation differentials, range: 100–800 m³/h).
• $C_0$: Oxygen concentration of the incoming air stream (standard air = 20.9% or 0.209).
• $C_1$: Target critical safety oxygen concentration in the goaf (specified as 7.0% for anthracite, 10.0% for bituminous coal, i.e., 0.07–0.10).
• $C_N$: Nitrogen gas product purity delivered by the PSA generator (97.0% to 99.5% N2, which contains $1 - C_N$ residual oxygen, e.g., 2% O2 for 98% N2).
• $K$: Reserve leakage coefficient to account for pipeline resistance and fissure dissipation ($K = 1.20 - 1.40$).`,
      zh: `依据国家标准《煤矿注氮防灭火技术规范》（MT/T 750）与《煤矿安全规程》，采空区设计注氮流量 $Q_N$（m³/h）采用氧气体积平衡方程精确计算：

$$Q_N = \frac{Q_0 \cdot (C_0 - C_1)}{C_1 - C_N} \cdot K$$

式中各参数定义如下：
• $Q_0$：采空区氧化带漏风量（m³/h，通常通过示踪气体测定或压差反演，一般为 100~800 m³/h）。
• $C_0$：漏入新鲜风流的原始氧气浓度（标态空气为 20.9%，即 0.209）。
• $C_1$：采空区防火目标极限安全氧浓度（无烟煤/贫煤取 7%，烟煤/褐煤取 10%，即 0.07~0.10）。
• $C_N$：PSA 制氮机输出氮气纯度（97.0%~99.5%，即残氧含量 $1 - C_N$）。
• $K$：管路输送泄漏与围岩裂隙损失备用系数（取 $1.20 \sim 1.40$）。`,
      ja: `MT/T 750規格に基づく酸素収支方程式により、漏風量・目標酸素濃度・製品窒素純度・安全係数を総合考慮して必要窒素流量（m³/h）を算出。`,
      es: `Cálculo de caudal volumétrico de nitrógeno según norma MT/T 750 mediante balance de oxígeno considerando fugas, pureza y coeficientes de reserva.`,
    },
    sec3Title: {
      en: '3. Technical Parameter Matrix: Feichi FC-N2 PSA Nitrogen Systems',
      zh: '3. 飞驰电气 FC-N2 系列变压吸附制氮装备技术规格矩阵',
      ja: '3. 飛馳電気 FC-N2 PSA窒素発生装置の主要技術仕様',
      es: '3. Matriz de Especificaciones Técnicas Feichi FC-N2 PSA',
    },
    tableHeaders: {
      en: ['System Model', 'Rated N2 Flow (Nm³/h)', 'N2 Purity (%)', 'Discharge Pressure (MPa)', 'Air Compressor Power (kW)', 'Installation Mode'],
      zh: ['设备型号代号', '额定产氮量 (Nm³/h)', '氮气纯度 (%)', '输出排气压力 (MPa)', '配套空压机功率 (kW)', '部署与防爆形式'],
      ja: ['型式コード', '定格窒素流量 (Nm³/h)', '窒素純度 (%)', '吐出圧力 (MPa)', '圧縮機電力 (kW)', '設置形態'],
      es: ['Modelo', 'Caudal N2 (Nm³/h)', 'Pureza N2 (%)', 'Presión (MPa)', 'Potencia Compresor (kW)', 'Tipo de Instalación'],
    },
    tableRows: {
      en: [
        ['DT-300 / Mining Skid', '300 Nm³/h', '97.0% – 99.5%', '0.6 – 0.8 MPa', '75 kW (VFD Driven)', 'Underground Ex d I Mb Flameproof Skid'],
        ['DT-600 / Dual Column', '600 Nm³/h', '98.0% – 99.5%', '0.7 – 0.8 MPa', '132 kW', 'Surface Permanent Station or Mobile Trailer'],
        ['DT-1000 / High Capacity', '1,000 Nm³/h', '98.0% – 99.0%', '0.8 – 1.0 MPa', '220 kW', 'Surface Central Inertization Plant'],
        ['DT-1500 / Heavy Duty', '1,500 Nm³/h', '97.0% – 98.5%', '0.8 – 1.2 MPa', '315 kW', 'Extra-Large Gassy Mine Dedicated Station'],
      ],
      zh: [
        ['DT-300 / 井下撬装型', '300 Nm³/h', '97.0% ～ 99.5%', '0.6 ～ 0.8 MPa', '75 kW (变频双螺杆)', '井下防爆型 (Ex d I Mb 矿用隔爆)'],
        ['DT-600 / 地面车载型', '600 Nm³/h', '98.0% ～ 99.5%', '0.7 ～ 0.8 MPa', '132 kW', '地面移动式集装箱 / 井下固定硐室'],
        ['DT-1000 / 地面站房型', '1,000 Nm³/h', '98.0% ～ 99.0%', '0.8 ～ 1.0 MPa', '220 kW', '地面中央制氮机房（多井孔联网）'],
        ['DT-1500 / 特大型矿井', '1,500 Nm³/h', '97.0% ～ 98.5%', '0.8 ～ 1.2 MPa', '315 kW', '千万吨级高瓦斯自燃矿井专用'],
      ],
      ja: [
        ['DT-300 / 坑内スキッド型', '300 Nm³/h', '97.0% 〜 99.5%', '0.6 〜 0.8 MPa', '75 kW', '坑内防爆仕様 (Ex d I Mb)'],
        ['DT-600 / 移動式コンテナ', '600 Nm³/h', '98.0% 〜 99.5%', '0.7 〜 0.8 MPa', '132 kW', '地上移動コンテナ・固定室'],
        ['DT-1000 / 地上固定基地', '1,000 Nm³/h', '98.0% 〜 99.0%', '0.8 〜 1.0 MPa', '220 kW', '地上中央窒素ステーション'],
      ],
      es: [
        ['DT-300 / Skid Minero', '300 Nm³/h', '97.0% – 99.5%', '0.6 – 0.8 MPa', '75 kW', 'Antiexplosión Subterránea (Ex d I Mb)'],
        ['DT-600 / Contenedor Móvil', '600 Nm³/h', '98.0% – 99.5%', '0.7 – 0.8 MPa', '132 kW', 'Estación Superficial o Remolque Móvil'],
        ['DT-1000 / Gran Caudal', '1,000 Nm³/h', '98.0% – 99.0%', '0.8 – 1.0 MPa', '220 kW', 'Planta Central de Inertización'],
      ],
    },
    sec4Title: {
      en: '4. CMS Adsorption Cycle & Real-time Oxygen Telemetry Integration',
      zh: '4. 碳分子筛（CMS）吸附时序与井下氧气在线遥测系统',
      ja: '4. CMS吸着サイクルと坑内酸素濃度遠隔監視システム',
      es: '4. Ciclo de Adsorción CMS y Telemetría de Oxígeno en Tiempo Real',
    },
    scenarios: {
      en: [
        {
          title: 'Dynamic Pressure Swing Cycle (A/B Dual Towers)',
          recommend: 'Sequence: Adsorption (60s) → Pressure Equalization (3s) → Desorption & Vent (55s)',
          reason: 'Ensures uninterrupted gas delivery with continuous molecular sieve regeneration and minimal air loss.',
        },
        {
          title: 'Underground Safety Telemetry Interface',
          recommend: 'Integration: Zirconia O2 Sensor + Modbus RS485 / Industrial Ethernet',
          reason: 'Triggers automatic nitrogen flow boosting if goaf oxygen rises above 7.0%, syncing with mine SCADA safety systems.',
        },
      ],
      zh: [
        {
          title: '变压吸附时序切换（A/B 双塔均压流程）',
          recommend: '时序控制：加压吸附(60s) → 均压降压(3s) → 减压解吸排氧(55s)',
          reason: '双吸附塔交替循环，微电脑 PLC 精确控制气动角座阀，确保产气纯度恒定且分子筛使用寿命超过 8-10 年。',
        },
        {
          title: '井下安全监控与在线氧气遥测联动',
          recommend: '配置：防爆型氧化锆氧量分析仪 + 工业环网通信模块',
          reason: '实时回传注氮管路纯度与采空区束管监测数据，当采空区氧浓度超标时自动触发变频增量注氮。',
        },
      ],
      ja: [
        {
          title: 'A/Bデュアルタワー吸着サイクル',
          recommend: '制御：加圧吸着(60s) → 均圧(3s) → 脱着排気(55s)',
          reason: 'PLC自動バルブ切替により高純度窒素の安定供給と分子篩の長寿命化を実現。',
        },
        {
          title: '坑内安全SCADA連携',
          recommend: '構成：防爆ジルコニア酸素計＋光ファイバー伝送',
          reason: '酸素濃度異常時に窒素流量を自動増量し、坑内環境を常時安全に維持。',
        },
      ],
      es: [
        {
          title: 'Ciclo PSA de Doble Torre (A/B)',
          recommend: 'Secuencia: Adsorción (60s) → Ecualización (3s) → Desorción (55s)',
          reason: 'Garantiza suministro continuo y máxima vida útil del tamiz molecular.',
        },
        {
          title: 'Telemetría de Oxígeno en Red SCADA',
          recommend: 'Integración: Sensor O2 Antiexplosivo + Ethernet Minero',
          reason: 'Ajuste dinámico del caudal de nitrógeno ante incrementos de O2 en tiempo real.',
        },
      ],
    },
    hasCalculator: 'nitrogen',
    ctaTitle: {
      en: 'Request Feichi FC-N2 Mining Safety Nitrogen Engineering Dossier',
      zh: '获取飞驰电气 FC-N2 系列注氮防灭火工程技术方案与煤安（MA）认证资料',
      ja: '飛馳電気 FC-N2 鉱山安全窒素システム技術資料・MA認証のお問い合わせ',
      es: 'Solicitar Expediente Técnico de Generación de Nitrógeno Feichi FC-N2',
    },
    ctaDesc: {
      en: 'Contact Technical Director Henry at Feichi for comprehensive flow sizing, piping friction loss calculations, and underground explosion-proof skid layout.',
      zh: '联系飞驰电气项目负责人 Henry，获取采空区注氮阻力计算书、井下机房布置 CAD 图与成套报价单。',
      ja: '担当のHenryまでご連絡いただければ、流量計算書および坑内配置CAD図面を24時間以内に提供します。',
      es: 'Contacte al Ing. Henry para obtener cálculos de dimensionamiento, pérdidas de carga y planos CAD de equipos mineros.',
    },
  },
  {
    id: 'week-04',
    week: 4,
    slug: 'scb14-dry-type-vs-s20-oil-transformer-tco-and-loss-guide',
    category: 'substation',
    categoryLabel: { en: 'Substation & Transformers', zh: '箱变与变压器系统', ja: '変電所・変圧器', es: 'Subestaciones y Transformadores' },
    title: {
      en: 'SCB14 Cast Resin Dry-Type vs S20 Oil-Immersed Transformers: Total Cost of Ownership (TCO), No-Load Loss & Fire Safety Selection Guide',
      zh: 'SCB14 环氧树脂干式变压器 vs S20 节能油变：全生命周期成本（TCO）、空载损耗与防火等级工程选型指南',
      ja: 'SCB14 モールド乾式変圧器 vs S20 省エネ油入変圧器：TCO・無負荷損・防災性能比較',
      es: 'Transformadores Secos SCB14 vs Baño de Aceite S20: Costo Total (TCO), Pérdidas y Seguridad contra Fuego',
    },
    eyebrow: {
      en: 'FE-EFF-04 / ECO-DESIGN TRANSFORMER EFFICIENCY',
      zh: 'FE-EFF-04 · 一级能效干式变压器损耗白皮书',
      ja: 'FE-EFF-04 · 省エネ型モールド変圧器損失最適化',
      es: 'FE-EFF-04 · EFICIENCIA Y PÉRDIDAS DE TRANSFORMADORES',
      ru: 'FE-EFF-04 · ЭНЕРГОЭФФЕКТИВНОСТЬ ТРАНСФОРМАТОРОВ ТСЛ',
    },
    author: {
      en: 'Feichi Engineering & Technical Dept (Lead: Henry)',
      zh: '飞驰电气技术工程部（总工/外贸对接人：Henry）',
      ja: '飛馳電気 技術部門（担当：Henry）',
      es: 'Departamento Técnico Feichi (Lead: Henry)',
    },
    standards: 'IEC 60076-11 vs IEC 60076-1 / GB 20052-2020 Level 1 Efficiency',
    readTime: { en: '11 Min Read', zh: '11 分钟深度阅读', ja: '所要時間：11分', es: '11 Min de Lectura' },
    summary: {
      en: 'Detailed technical analysis comparing high-efficiency cast resin dry-type transformers (SCB14) against hermetically sealed oil transformers (S20), covering 10kV–35kV losses, F1 fire ratings, and 20-year energy payback.',
      zh: '深度对比SCB14一级能效环氧树脂干变与S20密封油浸式变压器的空载损耗、负载损耗、F1级阻燃特性及20年综合电费TCO投资回收期。',
      ja: 'SCB14モールド乾式とS20油入変圧器の損失低減率、F1難燃性、20年間の電力コスト回収計算（TCO）を分析。',
      es: 'Comparativa de pérdidas en vacío, clasificación F1 contra incendios y retorno de inversión a 20 años entre transformadores SCB14 y S20.',
    },
    sec1Title: {
      en: '1. Core Loss Physics: Amorphous vs High-Permeability Silicon Steel',
      zh: '1. 磁路损耗机理：高导磁取向硅钢片与空载损耗降幅分析',
      ja: '1. コア損失物理：高配向性ケイ素鋼板による無負荷損削減',
      es: '1. Física de Pérdidas en el Núcleo y Reducción de Pérdidas en Vacío',
    },
    sec1Text: {
      en: `Under China's national mandatory energy standard GB 20052-2020 (aligned with EU EcoDesign Tier 2 and IEC standards), power transformers must meet strict efficiency tiers.

The SCB14 dry-type transformer utilizes laser-scribed, high-permeability grain-oriented silicon steel (such as 23Q110 or 20Q085) with stepped 45-degree full-miter lap joints. This reduces no-load loss (hysteresis + eddy current) by approximately 15% compared to SCB13, and by over 30% compared to legacy SCB10 units.

The S20 oil-immersed transformer achieves even lower no-load loss due to mineral oil's superior thermal dissipation, allowing higher magnetic flux density without thermal hotspots. However, oil units introduce environmental spill and fire containment requirements.`,
      zh: `根据国家新版能效强制标准 GB 20052-2020（对标国际 IEC EcoDesign 高能效标准），电力变压器全面步入一级/二级能效时代。

SCB14 系列环氧树脂浇注干式变压器采用激光刻痕高导磁晶粒取向硅钢片（如 23Q110 或 20Q085），配合全斜 45° 阶梯式步进搭接接缝（Step-Lap），使铁芯空载损耗（磁滞损耗与涡流损耗）较上一代 SCB13 降低约 15%，较传统 SCB10 降低达 30% 以上。

S20 油浸式变压器得益于优质变压器油优异的自然对流散热性能，空载与负载损耗更低，但其在室内安装时必须配套建设防爆事故储油坑与泡沫灭火系统。`,
      ja: `高配向性ケイ素鋼板とステップラップ接合により、SCB14は従来のSCB10比で無負荷損失を30%以上削減。S20は油冷による高い熱効率を誇る一方、防火ピット設備が必要です。`,
      es: `El transformador SCB14 emplea chapa magnética orientada con corte a 45° reduciendo las pérdidas en vacío un 30% frente a modelos tradicionales SCB10.`,
    },
    sec2Title: {
      en: '2. Fire Safety & Environmental Classifications (F1 / C2 / E2)',
      zh: '2. 防火阻燃与环境适应等级（F1 / C2 / E2）解析',
      ja: '2. 防災・耐環境性能評価（F1 / C2 / E2）',
      es: '2. Seguridad contra Fuego y Clasificación Ambiental (F1 / C2 / E2)',
    },
    sec2Text: {
      en: `According to IEC 60076-11:
• Fire Behavior Class F1: Certified self-extinguishing material; emits zero toxic halogens or thick corrosive black smoke under external fire attack. Mandatory for high-rise buildings, underground railways, hospitals, and nuclear facilities.
• Climatic Class C2: Operates reliably in ambient temperatures down to -25°C without insulation cracking.
• Environmental Class E2: Resists severe industrial condensation, salt spray humidity, and heavy pollution.`,
      zh: `依据国际电工委员会标准 IEC 60076-11，干式变压器具备极高的安全等级认证：
• 阻燃等级 F1 级：环氧树脂绝缘材料具有自熄性，在外部火源轰燃下不产生助燃明火，且燃烧时释放的有毒卤素和浓黑烟极少。是高层建筑、地铁车站、医院及数据中心的强制性选用标准。
• 气候等级 C2 级：允许在 -25℃ 严寒低温环境下长期稳定运行，树脂绝缘体不开裂。
• 环境等级 E2 级：可承受重度冷凝水滴落、高湿度盐雾及重度工业粉尘侵蚀。`,
      ja: `IEC 60076-11基準：F1難燃性（自消性・有害ガスフリー）、C2耐寒性（-25℃対応）、E2耐環境性（結露・塩害対応）を満たし、都市重要施設に最適。`,
      es: `Certificación IEC 60076-11 F1 (autoextinguible, sin halógenos tóxicos), C2 (-25°C) y E2 (alta resistencia a condensación y salinidad).`,
    },
    sec3Title: {
      en: '3. Technical Parameter Comparison: SCB14 Dry vs S20 Oil (1000 kVA Example)',
      zh: '3. 1000 kVA 变压器核心电气参数与损耗对比',
      ja: '3. 1000kVA 変圧器の主要パラメータ比較',
      es: '3. Parámetros Técnicos y Pérdidas (Ejemplo 1000 kVA)',
    },
    tableHeaders: {
      en: ['Engineering Metric', 'SCB14-1000/10 (Cast Resin Dry)', 'S20-1000/10 (Hermetic Oil-Immersed)'],
      zh: ['核心工程指标', 'SCB14-1000/10 (环氧树脂干变)', 'S20-1000/10 (全密封节能油变)'],
      ja: ['指標項目', 'SCB14-1000/10 (モールド乾式)', 'S20-1000/10 (油入変圧器)'],
      es: ['Parámetro', 'SCB14-1000/10 (Seco Encapsulado)', 'S20-1000/10 (Aceite Sellado)'],
    },
    tableRows: {
      en: [
        ['Rated Capacity', '1,000 kVA', '1,000 kVA'],
        ['Voltage Combination', '10 (or 20) / 0.4 kV', '10 (or 20, 35) / 0.4 kV'],
        ['Vector Group', 'Dyn11 (Standard)', 'Dyn11 (Standard)'],
        ['No-Load Loss (Po)', '1,770 W (Low Standby Consumption)', '1,120 W (Ultra-Low Iron Loss)'],
        ['Load Loss (Pk at 120°C / 75°C)', '7,800 W', '7,200 W'],
        ['Short-Circuit Impedance (Uk)', '6.0%', '4.5%'],
        ['Cooling Mode', 'AN (Air Natural) / AF (Air Forced +40%)', 'ONAN (Oil Natural Air Natural)'],
        ['Insulation Temperature Class', 'Class F (155°C) / Class H (180°C)', 'Class A (105°C) with Mineral Oil'],
        ['Fire Extinguisher System Req.', 'None (Direct Indoor Placement)', 'Oil Catch Basin & Fire Retardant Walls Mandatory'],
      ],
      zh: [
        ['额定容量', '1,000 kVA', '1,000 kVA'],
        ['额定电压组合', '10 (或 20) / 0.4 kV', '10 (或 20, 35) / 0.4 kV'],
        ['联结组标号', 'Dyn11 (抑制3次谐波)', 'Dyn11 (标配)'],
        ['空载损耗 (Po)', '1,770 W (一级能效低待机损耗)', '1,120 W (超低铁损)'],
        ['负载损耗 (Pk 标态)', '7,800 W (120℃ 绕组参考)', '7,200 W (75℃ 铜损参考)'],
        ['阻抗电压 (Uk%)', '6.0%', '4.5%'],
        ['冷却方式', 'AN 自然风冷 / AF 强迫风冷 (可增容40%)', 'ONAN 油浸自冷'],
        ['耐热绝缘等级', 'F 级 (155℃) / H 级 (180℃)', 'A 级 (105℃) 矿物绝缘油'],
        ['土建防火要求', '无需储油坑，可直接布置于配电走廊', '必须配置事故排油坑与甲级防火防爆隔墙'],
      ],
      ja: [
        ['定格容量', '1,000 kVA', '1,000 kVA'],
        ['電圧', '10kV / 0.4kV', '10kV / 0.4kV'],
        ['結線方式', 'Dyn11', 'Dyn11'],
        ['無負荷損 (Po)', '1,770 W', '1,120 W'],
        ['負荷損 (Pk)', '7,800 W', '7,200 W'],
        ['防火設備', '不要（屋内直接設置可）', '防火壁・排油ピット必須'],
      ],
      es: [
        ['Capacidad Nominal', '1,000 kVA', '1,000 kVA'],
        ['Tensión', '10 kV / 0.4 kV', '10 kV / 0.4 kV'],
        ['Grupo de Conexión', 'Dyn11', 'Dyn11'],
        ['Pérdidas en Vacío (Po)', '1,770 W', '1,120 W'],
        ['Pérdidas en Carga (Pk)', '7,800 W', '7,200 W'],
        ['Requisitos Anti-incendios', 'Sin foso de aceite (directo en sala)', 'Foso de recogida de aceite obligatorio'],
      ],
    },
    sec4Title: {
      en: '4. Decision Matrix: CapEx vs OpEx Lifecycle Evaluation',
      zh: '4. 选型决策：初始投资（CapEx）与运行能耗（OpEx）综合权衡',
      ja: '4. 導入コスト（CapEx）と維持費（OpEx）の総合評価',
      es: '4. Evaluación de Inversión Inicial (CapEx) vs Operación (OpEx)',
    },
    scenarios: {
      en: [
        {
          title: 'Indoor Substation & High-Density Commercial Facilities',
          recommend: 'Pick: SCB14 Dry-Type Transformer',
          reason: 'Eliminates oil safety hazards and reduces civil engineering fireproof barrier costs by up to 25%.',
        },
        {
          title: 'Outdoor Heavy Industry & High-Capacity Grid Stations',
          recommend: 'Pick: S20 Oil-Immersed Transformer',
          reason: 'Lower upfront equipment cost, superior thermal overload buffer, and ultra-low no-load losses for 24/7 continuous base-load operations.',
        },
      ],
      zh: [
        {
          title: '室内配电房、商业综合体、医院与轨道交通',
          recommend: '首选：SCB14 环氧树脂干式变压器',
          reason: '杜绝火灾隐患，省去事故储油坑与繁琐的消防喷淋审批，土建综合成本显著降低。',
        },
        {
          title: '户外箱式变电站、工矿冶炼与集中式新能源场站',
          recommend: '首选：S20 节能油浸式变压器',
          reason: '初始采购成本更优，过载耐受能力强，且在连续满负荷运行下具备最低的单位电能损耗。',
        },
      ],
      ja: [
        {
          title: '屋内変電室・病院・商業ビル',
          recommend: '推奨：SCB14 モールド乾式変圧器',
          reason: '火災の危険がなく、土木防火壁工事費を大幅に削減。',
        },
        {
          title: '屋外変電所・重工業プラント',
          recommend: '推奨：S20 油入変圧器',
          reason: '機器導入費用を抑え、過負荷耐性と低損失特性を両立。',
        },
      ],
      es: [
        {
          title: 'Salas Interiores, Edificios y Hospitales',
          recommend: 'Elegir: SCB14 Seco Encapsulado',
          reason: 'Máxima seguridad sin aceite, eliminando costes de fosa y aspersores.',
        },
        {
          title: 'Exteriores, Subestaciones e Industria Pesada',
          recommend: 'Elegir: S20 Baño de Aceite',
          reason: 'Menor costo inicial y óptima disipación térmica para carga base continua.',
        },
      ],
    },
    ctaTitle: {
      en: 'Request Transformer Loss Calculations & Factory Test Reports',
      zh: '获取变压器型式试验报告、损耗实测数据与出厂检验单',
      ja: '変圧器試験成績書・損失計算書のご請求',
      es: 'Solicitar Informes de Ensayos y Cálculo de Pérdidas de Transformador',
    },
    ctaDesc: {
      en: 'Contact Lead Henry at Feichi Electrical for complete SCB14 / S20 datasheets, dimension drawings, and customized voltage ratio designs.',
      zh: '联系飞驰电气外贸技术负责人 Henry，获取完整的变压器外形尺寸 CAD 图纸、阻抗电压定制方案与出厂检验报告。',
      ja: '飛馳電気のHenryまでお問い合わせください。寸法図および試験レポートを提出します。',
      es: 'Contacte a Henry en Feichi para planos dimensionales y cotización formal.',
    },
  },
  {
    id: 'week-05',
    week: 5,
    slug: 'modular-e-house-prefabricated-cabin-hvac-and-c5m-corrosion-guide',
    category: 'standards',
    categoryLabel: { en: 'Standards, E-House & Grid Compliance', zh: '预制舱、标准与电网并网', ja: '規格・プレハブ局舎', es: 'Normas, Cabinas y Red' },
    title: {
      en: 'Pre-fabricated Modular E-House (Substation Cabin) HVAC & C5-M Anti-Corrosion Thermal Simulation for Coastal & Desert Solar Farms',
      zh: '智能预制舱式变电站（E-House）：C5-M 重防腐外壳与沿海/荒漠光伏电站暖通温控热仿真设计',
      ja: 'プレハブ変電局舎（E-House）：C5-M高耐候防食構造と過酷環境向け空調・熱シミュレーション設計',
      es: 'Cabinas Modulares E-House: Protección Anticorrosiva C5-M y Climatización HVAC para Plantas Solares',
    },
    eyebrow: {
      en: 'FE-BMZ-05 / MODULAR PREFABRICATED E-HOUSE',
      zh: 'FE-BMZ-05 · 集装箱式配电舱与预制舱工程规范',
      ja: 'FE-BMZ-05 · プレハブ電気キャビン・E-House設計',
      es: 'FE-BMZ-05 · CABINAS ELÉCTRICAS MODULARES E-HOUSE',
      ru: 'FE-BMZ-05 · БЛОЧНО-МОДУЛЬНЫЕ ЗДАНИЯ БМЗ',
    },
    author: {
      en: 'Feichi Engineering & Technical Dept (Lead: Henry)',
      zh: '飞驰电气技术工程部（总工/外贸对接人：Henry）',
      ja: '飛馳電気 技術部門（担当：Henry）',
      es: 'Departamento Técnico Feichi (Lead: Henry)',
    },
    standards: 'ISO 12944 (C5-M Heavy Marine) / IEC 60529 (IP54/IP55) / GB/T 17467',
    readTime: { en: '13 Min Read', zh: '13 分钟深度阅读', ja: '所要时间：13分', es: '13 Min de Lectura' },
    summary: {
      en: 'Structural engineering principles of containerized E-Houses, including double-layer thermal barrier rockwool insulation, positive pressure sand filtration, and multi-tier industrial HVAC thermal balance.',
      zh: '深入解析集装箱式智能预制舱的双层隔热保温岩棉夹芯板结构、C5-M海工级重防腐涂层工艺、正压防尘风道与工业空调热平衡仿真算法。',
      ja: 'コンテナ型E-Houseの二重断熱構造、ISO 12944 C5-M防食塗装、正圧防塵ファン、熱流体解析による空調設計を解説。',
      es: 'Ingeniería estructural de E-Houses prefabricadas: aislamiento en lana de roca, pintura marina C5-M y climatización industrial.',
    },
    sec1Title: {
      en: '1. Heavy-Duty Structural Enclosure: Double-Skin Panel & C5-M Anti-Corrosion Coating',
      zh: '1. 舱体机械结构：双层镀锌钢板夹芯岩棉与 ISO 12944 C5-M 重防腐工艺',
      ja: '1. 耐久構造：二重鋼板サンドイッチパネルとC5-M防食塗装',
      es: '1. Envolvente Estructural: Paneles Dobles y Recubrimiento C5-M',
    },
    sec1Text: {
      en: `Pre-fabricated Electrical Cabins (E-Houses) deployed in offshore coastal wind projects or high-salinity desert solar farms face extreme environmental corrosion and thermal swings (-40°C to +55°C).

Feichi's prefabricated cabins adopt a structural frame constructed from high-tensile structural steel (Q355B) and corrugated wall panels. The surface coating undergoes a stringent 4-stage marine protection process meeting ISO 12944 C5-M standards:
1. Blast Cleaning: Sa 2.5 surface roughness profile (40–75 µm).
2. Zinc-Rich Epoxy Primer: Dry film thickness (DFT) ≥ 80 µm.
3. Epoxy Micaceous Iron Intermediate Coat: DFT ≥ 100 µm for barrier impermeability.
4. Aliphatic Polyurethane Topcoat: DFT ≥ 60 µm providing UV resistance and gloss retention (Total System DFT ≥ 240 µm).

Inside the walls, 75mm–100mm high-density hydrophobic rockwool (density ≥ 120 kg/m³, Class A1 non-combustible) ensures thermal conductivity $\lambda \le 0.038\ \text{W/(m}\cdot\text{K)}$.`,
      zh: `部署在沿海潮湿盐雾环境（如海上风电陆上集控中心）或高温强紫外荒漠（如中东/西北大型光伏基地）的智能预制舱，面临着严苛的腐蚀与巨大昼夜温差（-40℃ 至 +55℃）。

飞驰电气预制舱主体框架采用 Q355B 高强度耐候型钢，墙体为双层防腐热镀锌压型钢板。全舱外表面严格执行 ISO 12944 C5-M（高盐雾高湿度重工业腐蚀环境）四道防护涂装工艺：
1. 喷砂除锈等级达到 Sa 2.5 级（粗糙度 40~75 µm）。
2. 环氧富锌底漆：干膜厚度（DFT）≥ 80 µm。
3. 环氧云铁中间漆：干膜厚度 ≥ 100 µm，形成严密的物理屏蔽层。
4. 脂肪族聚氨酯面漆：干膜厚度 ≥ 60 µm，具备极强的抗紫外线光泽保持度（总涂层干膜厚度 ≥ 240 µm）。

墙体夹层填充 75mm~100mm 高密度憎水岩棉（容重 ≥ 120 kg/m³，A1级不燃材料），导热系数 $\lambda \le 0.038\ \text{W/(m}\cdot\text{K)}$，实现优异的隔热保温性能。`,
      ja: `Q355B高張力鋼とISO 12944 C5-M対応4層塗装（総膜厚240µm以上）により、沿海塩害および砂漠の過酷な環境で25年以上の耐久性を確保。100mm不燃ロックウールにより高い断熱性を実現。`,
      es: `Estructura de acero Q355B con recubrimiento de 4 capas según ISO 12944 C5-M (DFT ≥ 240µm) y aislamiento en lana de roca hidrófuga de 100mm (A1 incombustible).`,
    },
    sec2Title: {
      en: '2. HVAC Thermal Load Calculation & Positive Pressure Micro-climate Management',
      zh: '2. 暖通热负荷平衡计算与正压防沙微气候管理',
      ja: '2. 空調熱負荷計算と正圧防塵換気システム',
      es: '2. Cálculo de Carga Térmica HVAC y Gestión de Presión Positiva',
    },
    sec2Text: {
      en: `The total internal heat load $Q_{total}$ inside an operational E-House includes equipment electrical loss, solar radiation gain, and ambient conductive heat:

$$Q_{total} = Q_{equip} + Q_{solar} + Q_{ambient} + Q_{lighting}$$

To maintain switchgear temperature within the optimal range of 15°C–25°C, dual industrial-grade redundant HVAC units with automatic master/slave failover are installed. In addition, an intelligent positive-pressure air supply system maintains cabin interior pressure at +20 to +50 Pa relative to outside, completely preventing fine sand and moisture ingress through door gaskets.`,
      zh: `预制舱内部总热负荷 $Q_{total}$ 由一次电气设备运行热损耗、舱体外壁太阳辐射吸热及围护结构对流传热组成：

$$Q_{total} = Q_{equip} + Q_{solar} + Q_{ambient} + Q_{lighting}$$

为确保舱内微机保护、高压开关柜及变频逆变单元稳定工作在 15℃~25℃ 的最佳温区，飞驰预制舱标配双路工业级变频精密空调（实现主/备机自动轮巡与故障无缝切换）。同时，配置微电脑控制的正压新风系统，使舱内对外界保持 +20 ~ +50 Pa 的恒定正压，彻底杜绝沙尘和湿气侵入。`,
      ja: `内部発熱・日射・外気伝熱を合算した熱負荷計算に基づき、冗長化産業用エアコンを自動切替運転。舱内を+20〜+50Paの正圧に保ち、砂塵の侵入を完全防止。`,
      es: `Cálculo de carga térmica total combinando pérdidas de equipos y radiación solar. Climatización redundante y sistema de sobrepresión (+20 a +50 Pa) contra polvo y arena.`,
    },
    sec3Title: {
      en: '3. Technical Specification Matrix: Feichi Modular E-House Series',
      zh: '3. 飞驰模块化预制舱系列规格参数表',
      ja: '3. プレハブE-House主要仕様',
      es: '3. Especificaciones de Cabinas Modulares E-House',
    },
    tableHeaders: {
      en: ['Design Parameter', 'Standard 20ft E-House', 'Standard 40ft E-House', 'Custom Multi-Modular Splice Cabin'],
      zh: ['设计参数项目', '标准 20 尺预制舱 (6.0m)', '标准 40 尺预制舱 (12.2m)', '定制双拼/多联大型配电舱'],
      ja: ['設計パラメータ', '標準 20ft 局舎', '標準 40ft 局舎', '多連結カスタム大型局舎'],
      es: ['Parámetro', 'E-House Estándar 20ft', 'E-House Estándar 40ft', 'Cabina Modular Personalizada'],
    },
    tableRows: {
      en: [
        ['Overall Dimensions (L × W × H)', '6,058 × 2,800 × 3,200 mm', '12,192 × 3,000 × 3,400 mm', 'Up to 24,000 × 6,000 × 3,800 mm'],
        ['Enclosure Ingress Protection', 'IP54 / IP55 (IEC 60529)', 'IP54 / IP55', 'IP55 / IP56'],
        ['Corrosion Protection Grade', 'ISO 12944 C5-M (Marine Heavy)', 'ISO 12944 C5-M', 'ISO 12944 C5-M / CX Extreme'],
        ['Insulation Fire Rating', 'Class A1 Non-Combustible (Rockwool)', 'Class A1 Non-Combustible', 'Class A1 Non-Combustible'],
        ['Internal Cabin Capacity', 'Hosts 6–8 MV/LV Switchgear panels', 'Hosts 12–18 MV/LV Switchgear panels', 'Complete Substation (HV + Trafo + LV + SCADA)'],
        ['HVAC Cooling Capacity', '2 × 5 kW (1+1 Redundant)', '2 × 12 kW (1+1 Redundant)', 'Multi-zone VRV / 4 × 15 kW Precision Units'],
        ['Positive Pressure System', '+30 Pa with Multi-stage G4/F7 filter', '+30 Pa with Multi-stage G4/F7 filter', '+50 Pa with F9 Chemical Sand Filter'],
      ],
      zh: [
        ['外形尺寸 (长×宽×高)', '6,058 × 2,800 × 3,200 mm', '12,192 × 3,000 × 3,400 mm', '最大可扩展至 24,000 × 6,000 × 3,800 mm'],
        ['外壳防护等级', 'IP54 / IP55 (IEC 60529)', 'IP54 / IP55', 'IP55 / IP56'],
        ['防腐涂装标准', 'ISO 12944 C5-M (海工重防腐)', 'ISO 12944 C5-M', 'ISO 12944 C5-M / CX 极端海洋级'],
        ['保温阻燃等级', 'A1 级不燃 (高密度憎水岩棉)', 'A1 级不燃', 'A1 级不燃'],
        ['舱内容纳屏柜数量', '可容纳 6~8 面中高压/低压成套柜', '可容纳 12~18 面中低压开关柜', '完整变电站 (高压+变压器+低压+后台主控)'],
        ['暖通空调配置', '2 × 5 kW (1用1备工业空调)', '2 × 12 kW (1用1备冗余轮训)', '多温区多联机 / 4 × 15 kW 精密机房空调'],
        ['正压防沙系统', '+30 Pa (G4/F7 双级沙尘过滤)', '+30 Pa (双级过滤)', '+50 Pa (F9 级化学防腐抗沙过滤器)'],
      ],
      ja: [
        ['外形寸法 (L×W×H)', '6.0m × 2.8m × 3.2m', '12.2m × 3.0m × 3.4m', '最大 24m × 6m × 3.8m'],
        ['保護構造', 'IP54 / IP55', 'IP54 / IP55', 'IP55 / IP56'],
        ['防食仕様', 'ISO 12944 C5-M', 'ISO 12944 C5-M', 'ISO 12944 C5-M'],
        ['収容盤数', 'スイッチギア 6〜8面', 'スイッチギア 12〜18面', '受変電・主制御一式'],
      ],
      es: [
        ['Dimensiones (L × An × Al)', '6.0m × 2.8m × 3.2m', '12.2m × 3.0m × 3.4m', 'Hasta 24m × 6m × 3.8m'],
        ['Grado de Protección', 'IP54 / IP55', 'IP54 / IP55', 'IP55 / IP56'],
        ['Anticorrosión', 'ISO 12944 C5-M', 'ISO 12944 C5-M', 'ISO 12944 C5-M'],
        ['Capacidad Interior', '6 a 8 Celdas MT/BT', '12 a 18 Celdas MT/BT', 'Subestación Completa Integrada'],
      ],
    },
    sec4Title: {
      en: '4. Factory Plug-and-Play Commissioning & Logistics Advantages',
      zh: '4. 出厂前预装调试与现场“即插即用”交付优势',
      ja: '4. 工場出荷前全数試験と現場「プラグ＆プレイ」納入',
      es: '4. Ventajas de Entrega "Plug-and-Play" y Ahorro en Obra',
    },
    scenarios: {
      en: [
        {
          title: 'Remote Renewable Energy Sites (Solar / Wind)',
          recommend: 'Pre-assembled E-House with All Wiring Tested in Factory',
          reason: 'Shortens on-site construction time by over 70%, avoiding costly skilled labor shortages in remote locations.',
        },
        {
          title: 'Port Terminals & Coastal Chemical Plants',
          recommend: 'Heavy C5-M Coated Cabin with Bottom Cable Penetration Seals',
          reason: 'Resists constant salt spray, chemical vapor attack, and high humidity, ensuring 25-year design lifespan.',
        },
      ],
      zh: [
        {
          title: '偏远集中式光伏/风电场与边境变电站',
          recommend: '选用出厂预调完毕的整装预制舱',
          reason: '所有一二次接线与耐压试验在沈阳工厂内全部完成，现场接线工期缩短 70% 以上，避免偏远荒漠现场工人短缺。',
        },
        {
          title: '沿海港口码头、石化炼化与重度盐雾腐蚀园区',
          recommend: '选用 C5-M 涂层舱体搭配底部 MCT 绝缘穿墙密封系统',
          reason: '强效抵御盐雾与酸性化学气体腐蚀，保障设备 25 年长效运行免维护。',
        },
      ],
      ja: [
        {
          title: '僻地の太陽光・風力発電所',
          recommend: '工場内配線・試験完了型E-Houseを採用',
          reason: '現場据付・試運転期間を70%短縮し、工事コストを大幅削減。',
        },
        {
          title: '港湾施設・化学プラント',
          recommend: 'C5-M重防食仕様＋底部完全気密シーリング',
          reason: '塩害・腐食性ガスを遮断し、25年の耐用年数を保証。',
        },
      ],
      es: [
        {
          title: 'Plantas Solares y Eólicas Remotas',
          recommend: 'E-House Totalmente Probada en Fábrica',
          reason: 'Reduce el tiempo de montaje en obra un 70%, minimizando costos de mano de obra.',
        },
        {
          title: 'Puertos y Plantas Petroquímicas',
          recommend: 'E-House con Pintura Marina C5-M y Sellos MCT',
          reason: 'Resistencia total a la niebla salina y vapores químicos por más de 25 años.',
        },
      ],
    },
    ctaTitle: {
      en: 'Request E-House Structural CAD Layouts & HVAC Thermal Reports',
      zh: '获取智能预制舱结构施工 CAD 图、暖通热平衡计算书与海运装箱方案',
      ja: 'E-House 構造CAD図面・空調熱計算書・輸送計画のご請求',
      es: 'Solicitar Planos Estructurales E-House y Cálculo de Climatización',
    },
    ctaDesc: {
      en: 'Our engineering department (led by Henry) will provide cabin layout drawings, container shipping splits, and complete quotation within 24 hours.',
      zh: '飞驰电气技术团队将在 24 小时内为您提供预制舱内部屏柜排布图、海运拆分吊装方案与正式技术报价单。',
      ja: '飛馳電気技術チームが24時間以内に局舎レイアウト図面および詳細見積を提出します。',
      es: 'Feichi Electrical proporciona planos de distribución y cotización en 24 horas.',
    },
  },
  {
    id: 'week-06',
    week: 6,
    slug: 'gcs-vs-gck-vs-mns-low-voltage-drawout-switchgear-guide',
    category: 'switchgear',
    categoryLabel: { en: 'MV/LV Switchgear & Protection', zh: '高低压开关柜与保护', ja: 'スイッチギア・保護継电', es: 'Celdas de MT/BT y Protección' },
    title: {
      en: 'GCS vs GCK vs MNS Low-Voltage Draw-out Switchgear: Horizontal Busbar Dynamics & Motor Control Center (MCC) Protection Coordination',
      zh: 'GCS / GCK / MNS 低压抽出式开关柜深度对比：水平母线后置架构与马达控制中心（MCC）保护级差配合',
      ja: '低圧引出形スイッチギア比較（GCS / GCK / MNS）：母線配置とモータコントロールセンタ（MCC）保護協調',
      es: 'Celdas de Baja Tensión GCS vs GCK vs MNS: Distribución de Embarrados y Protección en Centros de Control de Motores (MCC)',
    },
    eyebrow: {
      en: 'FE-MCC-06 / INTELLIGENT MOTOR CONTROL MCC',
      zh: 'FE-MCC-06 · 智能低压马达控制中心（MCC）设计手册',
      ja: 'FE-MCC-06 · 低圧インテリジェントMCC配電盤',
      es: 'FE-MCC-06 · CENTROS DE CONTROL DE MOTORES MCC',
      ru: 'FE-MCC-06 · ЩИТЫ УПРАВЛЕНИЯ ЭЛЕКТРОДВИГАТЕЛЯМИ МСС',
    },
    author: {
      en: 'Feichi Engineering & Technical Dept (Lead: Henry)',
      zh: '飞驰电气技术工程部（总工/外贸对接人：Henry）',
      ja: '飛馳電気 技術部門（担当：Henry）',
      es: 'Departamento Técnico Feichi (Lead: Henry)',
    },
    standards: 'IEC 61439-2 / GB/T 7251.12',
    readTime: { en: '12 Min Read', zh: '12 分钟深度阅读', ja: '所要时间：12分', es: '12 Min de Lectura' },
    summary: {
      en: 'Comparative analysis of modular low-voltage draw-out switchboard architectures (20mm vs 25mm modular pitch), drawer mechanical interlocks, and 50kA/80kA short-circuit thermal dynamics for industrial motor drives.',
      zh: '系统对比 GCS（后置母线高密度抽屉）、GCK 与 MNS 低压成套开关柜的模数设计（20mm/25mm）、抽屉三工位机械联锁及大容量电动机回路短路热稳定配合。',
      ja: 'GCS・GCK・MNS低圧スイッチギアのバスバー配置、引出ユニット（20mm/25mmモジュール）、50kA短絡耐力、モータ保護協調を比較。',
      es: 'Comparación técnica de celdas de BT extraíbles GCS, GCK y MNS, diseño modular, enclavamientos mecánicos y dinámica de cortocircuito.',
    },
    sec1Title: {
      en: '1. Topological Differences: Top-Mounted vs Rear-Mounted Main Busbars',
      zh: '1. 母线系统拓扑结构差异：顶置母线 vs 平行后置母线',
      ja: '1. 主母線トポロジー：上部配置 vs 背面水平配置',
      es: '1. Diferencias Topológicas: Embarrado Superior vs Posterior',
    },
    sec1Text: {
      en: `Low-voltage draw-out switchboards serve as the backbone of industrial Motor Control Centers (MCC). The three prevailing architectures present distinct thermal and layout characteristics:
• GCS Architecture: Utilizes rear-flat-lying horizontal busbars. This layout isolates cable compartments to the right and drawer units to the left, enabling superior heat dissipation and high drawer density (up to 22 half-unit circuits per 800mm cabinet).
• GCK Architecture: Features top-mounted horizontal busbars with vertical busbars running behind drawers. It offers robust mechanical strength at a lower fabrication cost.
• MNS Architecture: Employs a standardized 25mm 'C' profile framework with high modularity and full Form 4b separation.`,
      zh: `低压抽出式成套开关设备是工业自动化与马达控制中心（MCC）的心脏。三大主流低压柜型在母线布局与热稳定性上各有特点：
• GCS 柜型：采用水平母线平后置对称排列架构。母线室置于柜后，功能单元室在左，电缆室在右，上下通风对流极佳，支持 1/2 单元高密度抽屉（单柜最多容纳 22 个回路），是石化、电厂首选。
• GCK 柜型：采用水平母线顶置结构，垂直母线位于抽屉后方，机械强度高且经济实用，常用于中小型工矿和建筑配电。
• MNS 柜型：采用 25mm 模数 C 型型材，全组装式结构，具备最高等级的 Form 4b 隔室防护隔离。`,
      ja: `GCS（背面水平バスバー・高密度22回路対応）、GCK（上部バスバー・堅牢設計）、MNS（25mmモジュール・最高レベルForm 4b隔離）の特徴を解説。`,
      es: `GCS (embarrado posterior, alta densidad hasta 22 circuitos), GCK (embarrado superior) y MNS (modular 25mm, separación Form 4b).`,
    },
    sec2Title: {
      en: '2. Drawer Three-Position Mechanical Interlocking Dynamics',
      zh: '2. 抽屉单元三工位机械闭锁动力学与插拔可靠性',
      ja: '2. 引出ユニット3位置（接続・試験・分離）インターロック機構',
      es: '2. Dinámica de Enclavamiento en 3 Posiciones del Módulo Extraíble',
    },
    sec2Text: {
      en: `A critical reliability metric for low-voltage draw-out switchgear is the drawer operating mechanism. GCS and MNS drawers integrate high-precision 3-position mechanical indexing locks:
1. Connected Position: Main and auxiliary circuits fully engaged.
2. Test Position: Main isolating contacts disconnected; secondary auxiliary control contacts remain closed for relay logic testing.
3. Disconnected Position: Both main and secondary circuits isolated; drawer can be padlocked for maintenance.`,
      zh: `低压抽出式开关柜的核心可靠性取决于抽屉机构的插拔寿命与闭锁精准度。飞驰 GCS 与 MNS 抽屉配置高精度三工位机械推进机构：
1. 连接位置（工作状态）：主回路一次插件与二次控制插件完全闭合导通。
2. 试验位置：一次主插件脱开安全隔离距离，二次微动辅助接点接通，可在断电状态下校验接触器与继电器二次回路。
3. 分离位置（检修状态）：一二次插件全部断开，抽屉拉出并可挂安全机械挂锁。`,
      ja: `接続・試験・分離の3位置を機械的にロックし、通電状態での誤引抜を完全防止。`,
      es: `Posición de Conectado, Prueba y Desconectado con bloqueo mecánico para máxima seguridad operativa.`,
    },
    sec3Title: {
      en: '3. Technical Comparison Matrix: GCS vs GCK vs MNS',
      zh: '3. GCS、GCK 与 MNS 技术规格与电气参数对照表',
      ja: '3. GCS / GCK / MNS 仕様対比表',
      es: '3. Comparativa GCS vs GCK vs MNS',
    },
    tableHeaders: {
      en: ['Technical Specification', 'GCS Series (China Standard High-Density)', 'GCK Series (Industrial Robust)', 'MNS Series (Modular Global Standard)'],
      zh: ['核心技术指标', 'GCS 系列 (后置母线高密度型)', 'GCK 系列 (顶置母线实用型)', 'MNS 系列 (模数化全隔离型)'],
      ja: ['設計パラメータ', 'GCS シリーズ', 'GCK シリーズ', 'MNS シリーズ'],
      es: ['Parámetro Técnico', 'Serie GCS', 'Serie GCK', 'Serie MNS'],
    },
    tableRows: {
      en: [
        ['Modular Pitch (E)', '20 mm (1E = 20mm)', '25 mm (1E = 25mm)', '25 mm (8E = 200mm)'],
        ['Max Rated Current (Main Busbar)', 'Up to 4,000 A', 'Up to 3,150 A', 'Up to 6,300 A'],
        ['Short-Time Withstand (Icw / 1s)', '50 kA / 80 kA', '50 kA', '50 kA / 80 kA / 100 kA'],
        ['Peak Short-Circuit Current (Ipk)', '105 kA / 176 kA', '105 kA', '105 kA / 176 kA / 220 kA'],
        ['Max Drawer Circuits per Cabinet', '22 Circuits (Half-Unit Drawers)', '9 Circuits (1-Unit Drawers)', '22 Circuits (Quarter/Half Units)'],
        ['Enclosure Ingress Rating', 'IP30 / IP40', 'IP30 / IP40', 'IP30 / IP42 / IP54'],
        ['Internal Separation Form', 'Form 3b / Form 4a', 'Form 3b', 'Form 4b (Highest Separation)'],
      ],
      zh: [
        ['基准模数 (E)', '20 mm (1E = 20mm)', '25 mm (1模数 = 25mm)', '25 mm (8E = 200mm)'],
        ['主母线最大额定电流', '最高达 4,000 A', '最高达 3,150 A', '最高达 6,300 A'],
        ['短时耐受电流 (Icw / 1s)', '50 kA / 80 kA', '50 kA', '50 kA / 80 kA / 100 kA'],
        ['峰值耐受电流 (Ipk)', '105 kA / 176 kA', '105 kA', '105 kA / 176 kA / 220 kA'],
        ['单柜最大抽屉回路数', '可达 22 个回路 (1/2抽屉)', '标配 9 个回路 (1单元抽屉)', '可达 22 个回路 (1/4或1/2抽屉)'],
        ['外壳防护等级', 'IP30 / IP40', 'IP30 / IP40', 'IP30 / IP42 / IP54'],
        ['内部隔离形式', 'Form 3b / Form 4a', 'Form 3b', 'Form 4b (最高等级隔室全封闭)'],
      ],
      ja: [
        ['基本モジュール', '20 mm', '25 mm', '25 mm'],
        ['主母線定格電流', '最大 4,000 A', '最大 3,150 A', '最大 6,300 A'],
        ['短時間耐電流 (1s)', '50 kA / 80 kA', '50 kA', '最大 100 kA'],
        ['単盤最大回路数', '22 回路', '9 回路', '22 回路'],
        ['内部隔離形式', 'Form 3b / 4a', 'Form 3b', 'Form 4b'],
      ],
      es: [
        ['Paso Modular', '20 mm', '25 mm', '25 mm'],
        ['Corriente Nominal Embarrado', 'Hasta 4,000 A', 'Hasta 3,150 A', 'Hasta 6,300 A'],
        ['Cortocircuito Admisible (1s)', '50 kA / 80 kA', '50 kA', 'Hasta 100 kA'],
        ['Circuitos Máx. por Armario', '22 Circuitos', '9 Circuitos', '22 Circuitos'],
        ['Forma de Separación Interna', 'Form 3b / 4a', 'Form 3b', 'Form 4b'],
      ],
    },
    sec4Title: {
      en: '4. Motor Protection Coordination & Short-Circuit Discrimination',
      zh: '4. 电动机回路保护级差配合与短路选择性设计',
      ja: '4. モータ保護協調と遮断器トリップ特性',
      es: '4. Coordinación de Protecciones y Selectividad en Motores',
    },
    scenarios: {
      en: [
        {
          title: 'Heavy Process Industry (Petrochemical / Power Plants)',
          recommend: 'Pick: GCS or MNS with Intelligent Motor Protection Relays',
          reason: 'Enables high density, continuous telemetry, and Type 2 coordination preventing contactor welding under short circuits.',
        },
        {
          title: 'Commercial Infrastructure & General Industrial Workshops',
          recommend: 'Pick: GCK Low-Voltage Switchgear',
          reason: 'Cost-effective, highly rugged mechanical build, easy field maintenance with standard MCCBs.',
        },
      ],
      zh: [
        {
          title: '大型石化、电厂及连续化生产冶金车间',
          recommend: '首选：GCS 或 MNS 智能型马达控制中心',
          reason: '支持 1/2 单元高密度回路，集成智能微机马达保护器与 RS485/Modbus 工业总线，实现短路 2 类配合（Type 2 Coordination）。',
        },
        {
          title: '普通厂矿车间、商业楼宇及水处理泵房',
          recommend: '首选：GCK 低压抽出式开关柜',
          reason: '结构皮实耐用，元器件通用性高，运维简便且性价比极佳。',
        },
      ],
      ja: [
        {
          title: '石油化学プラント・発電所',
          recommend: '推奨：GCS または MNS 智能MCC',
          reason: '高密度多回路収容とType 2保護協調により短絡時の溶着を防止。',
        },
        {
          title: '一般ビル・水処理施設',
          recommend: '推奨：GCK スイッチギア',
          reason: '保守性に優れコストパフォーマンスが高い。',
        },
      ],
      es: [
        {
          title: 'Industria Petroquímica y Centrales Eléctricas',
          recommend: 'Elegir: GCS o MNS con Relés Inteligentes',
          reason: 'Alta densidad y coordinación Tipo 2 que evita soldadura de contactores en cortocircuito.',
        },
        {
          title: 'Edificación y Talleres Industriales',
          recommend: 'Elegir: GCK de Baja Tensión',
          reason: 'Robusto, económico y fácil de mantener con interruptores estándar.',
        },
      ],
    },
    ctaTitle: {
      en: 'Request GCS / GCK Schematic Drawings & Drawer Layout Sizing',
      zh: '获取 GCS / GCK 一次配电系统图、抽屉回路排布表与技术报价',
      ja: 'GCS / GCK 系統図・引出回路図面・見積依頼',
      es: 'Solicitar Diagramas Unifilares GCS/GCK y Distribución de Módulos',
    },
    ctaDesc: {
      en: 'Feichi Electrical provides complete primary and secondary schematics, motor starting sizing, and formal proposals within 24 hours.',
      zh: '飞驰电气技术工程部将在 24 小时内为您提供回路选型计算书、抽屉排布 CAD 图与正式报价。',
      ja: '飛馳電気技術チームが24時間以内に単線結線図およびモータ選定書を提出します。',
      es: 'El departamento técnico de Feichi entrega planos y propuesta formal en 24 horas.',
    },
  },
  {
    id: 'week-07',
    week: 7,
    slug: 'iec-62271-202-vs-gb-17467-substation-type-test-certification-guide',
    category: 'standards',
    categoryLabel: { en: 'Standards, E-House & Grid Compliance', zh: '预制舱、标准与电网并网', ja: '規格・プレハブ局舎', es: 'Normas, Cabinas y Red' },
    title: {
      en: 'IEC 62271-202 vs GB/T 17467: Demystifying Type-Test Certificates for Overseas Grid Interconnection (Temperature Rise, Short-Circuit & Arc Flash)',
      zh: 'IEC 62271-202 与 GB/T 17467 标准深度解析：海外电网并网型式试验报告（温升、短路耐受与内部燃弧试验）审核指南',
      ja: 'IEC 62271-202 vs GB/T 17467 規格解説：海外送電網連系に向けた型式試験成績書（温度上昇・短絡・アーク試験）検証ガイド',
      es: 'IEC 62271-202 vs GB/T 17467: Guía de Ensayos de Tipo para Interconexión a Red Global',
    },
    eyebrow: {
      en: 'FE-TEST-07 / HIGH-VOLTAGE TYPE TEST & FAT GUIDE',
      zh: 'FE-TEST-07 · 高压型式试验与出厂检验（FAT）规程',
      ja: 'FE-TEST-07 · 高圧型式試験・工場受入試験(FAT)プロトコル',
      es: 'FE-TEST-07 · PROTOCOLO DE ENSAYOS DE TIPO Y FAT',
      ru: 'FE-TEST-07 · ПРОТОКОЛЫ ТИПОВЫХ ИСПЫТАНИЙ И FAT',
    },
    author: {
      en: 'Feichi Quality & Testing Center (Lead: Henry)',
      zh: '飞驰电气检测与质量认证中心（技术主理：Henry）',
      ja: '飛馳電気 品質試験センター（担当：Henry）',
      es: 'Centro de Calidad y Ensayos Feichi (Lead: Henry)',
    },
    standards: 'IEC 62271-202 / GB/T 17467 / IEEE C57.12.28',
    readTime: { en: '13 Min Read', zh: '13 分钟深度阅读', ja: '所要时间：13分', es: '13 Min de Lectura' },
    summary: {
      en: 'A comprehensive engineer’s walkthrough of mandatory type-test certification items for high-voltage packaged substations, detailing enclosure class temperature rise factors (Class 10/15/20), 20kA/3s short-circuit electrodynamic withstand, and third-party laboratory verification.',
      zh: '为海外总包商（EPC）和咨询顾问详解预装式变电站出厂前必须通过的型式试验关键项目：外壳温升外延等级（Class 10/15/20/30）、20kA/3秒短路动热稳定试验及国际第三方认证审核要点。',
      ja: '高圧プレハブ変電所の必須型式試験項目（温度上昇クラス10〜30、20kA/3s短時間耐電流、内部アーク試験）の検証ポイントを解説。',
      es: 'Guía técnica sobre ensayos de tipo obligatorios para subestaciones compactas: elevación de temperatura, cortocircuito 20kA/3s y arco interno.',
    },
    sec1Title: {
      en: '1. Enclosure Class & Temperature Rise Verification in Prefabricated Substations',
      zh: '1. 预装式变电站外壳温升等级（Enclosure Class）与温升试验核心要素',
      ja: '1. 外郭クラス（温度上昇クラス10〜30）と放熱設計',
      es: '1. Clase de Envolvente y Elevación de Temperatura en Subestaciones',
    },
    sec1Text: {
      en: `According to IEC 62271-202 Cl. 6.2, when a distribution transformer is placed inside a closed substation housing, its natural cooling is restricted compared to free outdoor air. The standard defines the 'Enclosure Class' as the additional temperature rise caused by the housing:
• Class 10: Additional temperature rise $\le 10\text{ K}$.
• Class 15: Additional temperature rise $\le 15\text{ K}$.
• Class 20: Additional temperature rise $\le 20\text{ K}$.
• Class 30: Additional temperature rise $\le 30\text{ K}$.

To pass Class 10/15 without derating rated transformer power, Feichi designs aerodynamic natural convection louvers with maze-type rain barriers and optional thermo-controlled forced exhaust fans.`,
      zh: `依据国际电工标准 IEC 62271-202 第 6.2 条，当配电变压器被安装于封闭的箱体外壳内时，其自然通风冷却条件劣于露天自由空气。标准将由于外壳阻碍散热而导致的变压器油顶层或绕组额外温升增量定义为外壳等级（Enclosure Class）：
• Class 10 级：外壳引起的额外温升 $\le 10\text{ K}$（最高散热性能）。
• Class 15 级：额外温升 $\le 15\text{ K}$。
• Class 20 级：额外温升 $\le 20\text{ K}$。
• Class 30 级：额外温升 $\le 30\text{ K}$。

飞驰电气采用计算流体力学（CFD）优化箱体百叶窗迷宫式防雨导流板结构，确保在 40℃ 极端环境温度下无需对变压器实施降容（Derating），稳定达到 Class 10 优级散热标准。`,
      ja: `変圧器を局舎内に収容した際の温度上昇増加分（Class 10〜30）をCFD解析により最適化し、降容運転なしでClass 10基準を達成。`,
      es: `Definición de clases de envolvente según IEC 62271-202 (Class 10/15/20/30) para evitar desclasificación de potencia del transformador.`,
    },
    sec2Title: {
      en: '2. Short-Time Withstand & Peak Current Electrodynamic Stress Testing',
      zh: '2. 短时耐受电流（热稳定）与峰值耐受电流（动稳定）试验机理',
      ja: '2. 短時間耐電流（熱的強度）およびピーク耐電流（機械的強度）試験',
      es: '2. Ensayo de Corriente de Corta Duración y Esfuerzos Electrodinámicos',
    },
    sec2Text: {
      en: `During a terminal short circuit, high-voltage busbars and earthing switches experience massive electrodynamic forces proportional to the square of the peak current ($F \propto I_{pk}^2$).
Under IEC 62271-202, the complete internal electrical connection from the HV connection point through the transformer down to the LV busbars must withstand:
• Rated Short-Time Withstand Current ($I_k$): Typically 20 kA for 3 seconds (thermal capacity test).
• Rated Peak Withstand Current ($I_p$): Up to 50 kA to 63 kA peak (electrodynamic bending test).`,
      zh: `当发生外部短路故障时，变电站内部母线系统和接地回路将承受与短路峰值电流平方成正比的巨大电动力冲击（$F \propto I_{pk}^2$）。
按照 IEC 62271-202 规定，从高压进线端子、变压器连接铜排至低压出线断路器的完整回路必须成功通过两项严苛测试：
• 额定短时耐受电流（热稳定 $I_k$）：通常为 20 kA 持续 3 秒，导体绝缘不得炭化烧损。
• 额定峰值耐受电流（动稳定 $I_p$）：通常为 50 kA ~ 63 kA 瞬时冲击，母线支架与绝缘子不得变形或碎裂。`,
      ja: `短絡時の巨大な電磁力（Ik 20kA/3s, Ip 50kA）に対する母線サポートおよび接地開閉器の機械的・熱的耐力を検証。`,
      es: `Ensayos de cortocircuito (Ik 20kA 3s) y pico (Ip 50kA-63kA) que garantizan que el embarrado soporte los esfuerzos electrodinámicos.`,
    },
    sec3Title: {
      en: '3. Mandatory Type-Test Items Checklist for EPC Contract Review',
      zh: '3. 国际工程总包（EPC）必须核验的型式试验项目清单',
      ja: '3. EPCプロジェクトにおける必須型式試験チェックリスト',
      es: '3. Lista de Ensayos de Tipo Obligatorios para Contratistas EPC',
    },
    tableHeaders: {
      en: ['Test Item per IEC 62271-202', 'Test Requirement & Parameters', 'Feichi Test Pass Evidence'],
      zh: ['IEC 62271-202 标准型式试验项目', '测试标准与严苛技术参数要求', '飞驰电气出厂型式试验验证回执'],
      ja: ['型式試験項目 (IEC 62271-202)', '要求事項・パラメータ', '飛馳電機の試験結果'],
      es: ['Ensayo de Tipo (IEC 62271-202)', 'Requisitos del Ensayo', 'Evidencia de Feichi'],
    },
    tableRows: {
      en: [
        ['Dielectric Insulation Tests', 'Power frequency 42kV / Lightning impulse 75kV', 'Passed (Zero flashover or puncture)'],
        ['Temperature Rise of Components', 'Continuous full load at 40°C ambient (Class 10)', 'Passed (Class 10 achieved)'],
        ['Short-Time & Peak Withstand Current', '20 kA / 3s, Peak 50 kA on HV & LV circuits', 'Passed (National High Voltage Lab Certified)'],
        ['Internal Arc Fault Test (IAC)', 'IAC-AB 20 kA / 1s on HV switchgear chamber', 'Passed (AFLR safety rating achieved)'],
        ['Verification of Protection Degree (IP)', 'IP54 for housing, IP2X for internal partitions', 'Passed (Dust & water jet proof verified)'],
        ['Mechanical Impact & Operation Test', 'IK10 mechanical impact on roof and doors (20 Joules)', 'Passed (Q355B structural frame integrity)'],
      ],
      zh: [
        ['绝缘试验（工频与雷电冲击）', '工频耐压 42kV / 雷电冲击 75kV 峰值', '完全通过（无击穿闪络）'],
        ['主回路温升试验（外壳温升考核）', '40℃ 环境温度下额定全负荷温升考核', '完全通过（达到优级 Class 10 散热）'],
        ['短时耐受与峰值耐受电流试验', '20 kA / 3秒，峰值 50 kA / 63 kA', '国家高压电器质量监督检验中心通过'],
        ['内部燃弧试验（IAC 燃弧考核）', '高压舱室 20 kA / 1秒 内部电弧燃烧', '完全通过（达到 IAC-AFLR 运维安全级）'],
        ['外壳防护等级试验 (IP防护)', '外壳 IP54，内部隔室 IP2X / IP44', '完全通过（高压水枪喷淋与粉尘沉降试验）'],
        ['机械冲击与撞击耐受试验', '外壳与门板承受 20 焦耳（IK10）重物冲击', '完全通过（门锁与铰链无塑性形变）'],
      ],
      ja: [
        ['耐電圧試験 (商用周波・雷インパルス)', '42kV (1分) / 75kV (BIL)', '適合（放電・絶縁破壊なし）'],
        ['温度上昇試験 (外郭クラス10)', '周囲温度40℃・全負荷連続運転', '適合（Class 10 達成）'],
        ['短時間・ピーク耐電流試験', '20 kA / 3s, ピーク 50 kA', '国家高電圧試験機関にて認証取得'],
        ['内部アーク試験 (IAC)', '20 kA / 1s', '適合（IAC AFLR 達成）'],
      ],
      es: [
        ['Ensayos Dieléctricos', 'Frecuencia industrial 42kV / Rayo 75kV', 'Aprobado'],
        ['Elevación de Temperatura', 'Carga nominal a 40°C (Class 10)', 'Aprobado'],
        ['Cortocircuito y Valor de Pico', '20 kA / 3s, Pico 50 kA', 'Aprobado en laboratorio oficial'],
        ['Arco Interno (IAC)', '20 kA / 1s', 'Aprobado (IAC AFLR)'],
      ],
    },
    sec4Title: {
      en: '4. Third-Party Laboratory Inspection & Certification Verification',
      zh: '4. 国际第三方权威实验室检测报告与海外业主（Owner）验收核验',
      ja: '4. 第三者認証機関による試験成績書の検証',
      es: '4. Verificación de Certificados de Laboratorios Internacionales',
    },
    scenarios: {
      en: [
        {
          title: 'Overseas Utility Tender Submission (Grid Connection)',
          recommend: 'Submit: Full Type Test Report (ASTA / DEKRA / CNAS Accredited)',
          reason: 'Verifies identical design lineage and compliance with IEC 62271-202 without requiring expensive repeat testing in project host country.',
        },
        {
          title: 'Factory Acceptance Testing (FAT) Witness Protocol',
          recommend: 'Follow: 100% Routine Test Inspection Matrix',
          reason: 'Includes winding resistance, transformation ratio, partial discharge measurement (< 10 pC), and 100% functional mechanical interlock verification.',
        },
      ],
      zh: [
        {
          title: '海外国家电网招标（EPC 投标与并网资质审核）',
          recommend: '提交：具有 CNAS / ILAC-MRA 国际互认认可的完整型式试验报告',
          reason: '证明设备全项指标符合 IEC 62271-202，避免在海外业主国产生高昂的重复型式试验费用。',
        },
        {
          title: '出厂验收（FAT 监造见证试验）流程',
          recommend: '执行：100% 出厂例行试验（Routine Test）矩阵',
          reason: '涵盖绝缘电阻、工频耐压、局放检测（< 10 pC）、变比与联结组校验以及 100% 机械五防联锁动作测试。',
        },
      ],
      ja: [
        {
          title: '海外送電事業者向け入札',
          recommend: '提出：CNAS/ILAC-MRA国際相互承認型式試験レポート',
          reason: 'IEC 62271-202完全適合を証明し、現地での再試験コストを回避。',
        },
        {
          title: '工場立会検査（FAT）',
          recommend: '実施：100%出荷前ルーチン試験',
          reason: '耐電圧・部分放電（<10pC）・インターロック動作を全数確認。',
        },
      ],
      es: [
        {
          title: 'Licitaciones de Red Eléctrica Internacional',
          recommend: 'Presentar: Informe Completo de Ensayo de Tipo (CNAS/ILAC)',
          reason: 'Demuestra cumplimiento pleno de IEC 62271-202 evitando re-ensayos costosos.',
        },
        {
          title: 'Pruebas de Aceptación en Fábrica (FAT)',
          recommend: 'Protocolo de Ensayos de Rutina al 100%',
          reason: 'Verificación dieléctrica, descargas parciales (<10pC) y enclavamientos.',
        },
      ],
    },
    ctaTitle: {
      en: 'Request Official Type-Test Reports & FAT Protocol Dossiers',
      zh: '获取飞驰电气国家质检中心型式试验报告与出厂 FAT 检验规范',
      ja: '型式試験成績書・FAT検査基準書の提供依頼',
      es: 'Solicitar Informes de Ensayos de Tipo y Protocolo FAT',
    },
    ctaDesc: {
      en: 'Contact Lead Henry to receive complete type-test documentation and bilingual test certificates for project submission.',
      zh: '联系外贸技术负责人 Henry，获取完整的全套型式试验中英文检验报告与出厂质检大纲。',
      ja: '担当のHenryまでご連絡ください。英文試験成績書一式を提供します。',
      es: 'Contacte al Ing. Henry para recibir la documentación completa de ensayos de tipo en inglés y español.',
    },
  },
  {
    id: 'week-08',
    week: 8,
    slug: '35kv-photovoltaic-step-up-substation-harmonic-and-inrush-design',
    category: 'substation',
    categoryLabel: { en: 'Substation & Transformers', zh: '箱变与变压器系统', ja: '変電所・変圧器', es: 'Subestaciones y Transformadores' },
    title: {
      en: '35kV Photovoltaic Step-Up Substation Design: Harmonic Mitigation, Transformer Inrush Currents & Inverter Matching',
      zh: '35kV 光伏升压并网箱变设计：高频谐波抑制、变压器励磁涌流与集中式/组串式逆变器匹配',
      ja: '35kV 太陽光発電用昇圧変電所：高調波抑制・変圧器励磁突入電流対策とパワーコンディショナ（PCS）最適整合',
      es: 'Diseño de Subestaciones Elevadoras Fotovoltaicas de 35kV: Mitigación de Armónicos y Corrientes de Inrush',
    },
    eyebrow: {
      en: 'FE-SOL-08 / 1500V DC SOLAR INVERTER-BOOSTER',
      zh: 'FE-SOL-08 · 1500V 光伏逆变升压一体化技术指南',
      ja: 'FE-SOL-08 · 1500V 太陽光昇圧連系パッケージ',
      es: 'FE-SOL-08 · INTEGRACIÓN SOLAR 1500V DC INVERSOR-TRAFO',
      ru: 'FE-SOL-08 · СЭС 1500В ИНВЕРТОРНО-ТРАНСФОРМАТОРНЫЕ КТП',
    },
    author: {
      en: 'Feichi Renewable Power Systems Dept (Lead: Henry)',
      zh: '飞驰电气新能源工程事业部（技术主理：Henry）',
      ja: '飛馳電気 再生可能エネルギー部門（担当：Henry）',
      es: 'Dpto. de Energías Renovables Feichi (Lead: Henry)',
    },
    standards: 'IEEE 519 / IEC 61000-3-6 / IEC 62271-202 / GB/T 19964',
    readTime: { en: '14 Min Read', zh: '14 分钟深度阅读', ja: '所要时间：14分', es: '14 Min de Lectura' },
    summary: {
      en: 'Engineering sizing guide for 35kV / 3150kVA photovoltaic step-up substations, detailing dual-split low-voltage transformer windings, electrostatic shielding, inrush current suppression, and IEEE 519 harmonic compliance.',
      zh: '详解大型地面光伏电站 35kV / 3150kVA 升压箱变的设计要点：双分裂低压绕组阻抗平衡、原副边静电屏蔽层设置、逆变器励磁涌流抑制及 IEEE 519 谐波治理方案。',
      ja: '35kV太陽光昇圧変電所におけるダブルスプリット低圧巻線、静電シールド、励磁突入電流抑制、IEEE 519高調波対策を詳解。',
      es: 'Guía de diseño para subestaciones elevadoras solares de 35kV: devanados de baja tensión divididos, apantallamiento electrostático y mitigación de armónicos.',
    },
    sec1Title: {
      en: '1. Dual-Split Low Voltage Winding Configuration for Large Inverter Arrays',
      zh: '1. 双分裂低压绕组结构与大容量逆变器阵列阻抗解耦',
      ja: '1. ダブルスプリット低圧巻線によるインバータ間干渉抑制',
      es: '1. Devanados de Baja Tensión Divididos para Inversores Centrales',
    },
    sec1Text: {
      en: `In multi-megawatt solar inverter stations (such as 3.125 MW or 6.25 MW blocks), multiple inverter outputs are connected to a single step-up transformer.
To prevent circulating currents and electrical resonance between parallel inverter units, Feichi specifies a Dual-Split Low Voltage Transformer (e.g., 35 kV / 0.8 kV - 0.8 kV):
• Split Ratio & Impedance ($U_k$): High split impedance ($U_{k, split} \ge 10.0\% - 12.0\%$) electrically decouples the two low-voltage inverter branches.
• Zero Circulating Current: When branch A experiences a fault, branch B operates normally without backfeeding fault current.
• Copper Shielding: An electrostatic grounded copper shield between HV and LV windings suppresses high-frequency carrier PWM switching noise from reaching the utility grid.`,
      zh: `在大型集中式或组串式光伏子阵（如 3.125 MW 或 6.25 MW 发电单元）中，多台逆变器输出汇集至单台升压箱变并网。
为防止并联逆变器之间产生高频环流与电气谐振，飞驰电气采用双分裂低压绕组升压变压器（如 35 kV / 0.8 kV - 0.8 kV）：
• 分裂阻抗比与参数（$U_k$）：分裂阻抗设计达到 $U_{k, 分裂} \ge 10.0\% \sim 12.0\%$，使两个独立的 0.8kV 低压支路实现电气解耦。
• 故障隔离：当支路 A 发生接地或短路故障时，支路 B 逆变器可维持正常发电，互不干扰。
• 铜箔静电屏蔽：高低压绕组之间增设独立接地的铜箔屏蔽层，有效阻断逆变器 IGBT 高频 PWM 开关载波谐波向 35kV 电网传播。`,
      ja: `大容量太陽光発電において、35kV/0.8kV-0.8kVダブルスプリット変圧器を採用。高インピーダンス設計により並列インバータ間の横流と共振を遮断。`,
      es: `Uso de transformadores de devanado dividido (35kV / 0.8kV-0.8kV) con pantalla de cobre que desacoplan eléctricamente los ramales de inversores.`,
    },
    sec2Title: {
      en: '2. Inrush Current Dynamics During Grid Re-energization',
      zh: '2. 电网合闸冲击与变压器励磁涌流（Inrush Current）抑制对策',
      ja: '2. 送電網再投入時の励磁突入電流対策とリレー協调',
      es: '2. Dinámica de Corrientes de Inrush y Coordinación de Protecciones',
    },
    sec2Text: {
      en: `When 35kV solar substations are switched on at sunrise or after grid trips, the transformer core can experience deep magnetic saturation, producing an inrush current peak up to 6–8 times rated current ($I_{inrush} = 6 - 8 \times I_n$) with high 2nd harmonic content.
Protection engineering solutions implemented by Feichi include:
1. Microprocessor Relay 2nd Harmonic Restraint: Differentiates inrush current from genuine short-circuit faults to prevent nuisance tripping of 35kV vacuum circuit breakers.
2. Point-on-Wave (POW) Controlled Switching: Synchronizes breaker pole closing at peak voltage to minimize remanent flux saturation.`,
      zh: `光伏升压箱变在日出并网送电或电网故障重合闸瞬间，铁芯进入深度饱和状态，产生高达 6~8 倍额定电流（$I_{涌流} = 6 \sim 8 \times I_n$）的励磁涌流，其中富含大量的二次谐波分量。
飞驰电气的工程保护对策包括：
1. 35kV 微机保护装置二次谐波制动：通过精准识别二次谐波含量（设定门槛值 15%~20%），可靠闭锁差动保护，杜绝开机瞬间断路器误跳闸。
2. 选相合闸智能控制器（POW）：在高压断路器合闸时精确锁定在电压峰值相位，从物理源头最大限度削减剩磁与涌流峰值。`,
      ja: `変圧器投入時の励磁突入電流（定格の6〜8倍）に対し、第2高調波抑制ブロックおよび選相投入制御（POW）により不要遮断を防止。`,
      es: `Inhibición por segundo armónico en el relé diferencial y control de cierre en el punto de onda (POW) para evitar disparos intempestivos.`,
    },
    sec3Title: {
      en: '3. Technical Specification Matrix: 35kV Photovoltaic Substation Series',
      zh: '3. 35kV 光伏专用升压变电站技术规格表',
      ja: '3. 35kV 太陽光昇圧変電所仕様表',
      es: '3. Especificaciones de Subestaciones Solares 35kV',
    },
    tableHeaders: {
      en: ['Engineering Parameter', '1,600 kVA Substation (ZGS-PV-1600)', '3,150 kVA Substation (ZGS-PV-3150)', '6,300 kVA Precast Cabin (YB-PV-6300)'],
      zh: ['核心设计参数', '1,600 kVA 光伏箱变 (ZGS-PV-1600)', '3,150 kVA 光伏箱变 (ZGS-PV-3150)', '6,300 kVA 大型预制舱 (YB-PV-6300)'],
      ja: ['設計パラメータ', '1,600 kVA 昇圧変電所', '3,150 kVA 昇圧変電所', '6,300 kVA 大型プレハブ局舎'],
      es: ['Parámetro', 'Subestación Solar 1,600 kVA', 'Subestación Solar 3,150 kVA', 'Cabina Pre-ensamblada 6,300 kVA'],
    },
    tableRows: {
      en: [
        ['Rated High Voltage', '35 kV / 33 kV / 38.5 kV', '35 kV / 33 kV / 38.5 kV', '35 kV (Grid Connected)'],
        ['Rated Low Voltage', '0.69 kV or 0.8 kV', '0.8 kV - 0.8 kV (Dual Split)', '0.8 kV - 0.8 kV (Dual Split)'],
        ['Vector Group', 'Dy11', 'Dy11y11 (Dual Split)', 'Dy11y11'],
        ['Short-Circuit Impedance ($U_k$)', '6.5% - 7.0%', '7.5% - 8.0% (Split: 11%)', '8.0% - 8.5% (Split: 12%)'],
        ['Total Harmonic Distortion ($THD_i$)', '< 3.0% (IEEE 519 Compliant)', '< 2.5% (IEEE 519 Compliant)', '< 2.0% (IEEE 519 Compliant)'],
        ['Enclosure Protection & Cooling', 'IP54 / ONAN (Natural Oil Cool)', 'IP54 / ONAN with Radiators', 'IP55 / Forced HVAC + Positive Pressure'],
      ],
      zh: [
        ['高压侧额定电压', '35 kV / 33 kV / 38.5 kV', '35 kV / 33 kV / 38.5 kV', '35 kV (并入区域电网)'],
        ['低压侧额定电压', '0.69 kV 或 0.8 kV', '0.8 kV - 0.8 kV (双低压分裂)', '0.8 kV - 0.8 kV (双低压分裂)'],
        ['变压器联结组', 'Dy11', 'Dy11y11 (双分裂绕组)', 'Dy11y11'],
        ['短路阻抗 ($U_k$)', '6.5% - 7.0%', '7.5% - 8.0% (分裂阻抗 11%)', '8.0% - 8.5% (分裂阻抗 12%)'],
        ['电流总谐波畸变率 ($THD_i$)', '< 3.0% (符合 IEEE 519 标准)', '< 2.5% (严格符合电网入网标准)', '< 2.0% (满足超特高压并网要求)'],
        ['外壳防护与散热方式', 'IP54 / ONAN 油浸自然风冷', 'IP54 / 波纹油箱双侧强化散热', 'IP55 / 工业精密空调强迫风冷+正压防沙'],
      ],
      ja: [
        ['高圧定格電圧', '35 kV / 33 kV', '35 kV / 33 kV', '35 kV'],
        ['低圧定格電圧', '0.69 kV / 0.8 kV', '0.8 kV - 0.8 kV (ダブルスプリット)', '0.8 kV - 0.8 kV'],
        ['インピーダンス ($U_k$)', '6.5%', '8.0% (スプリット 11%)', '8.5% (スプリット 12%)'],
        ['高調波歪み ($THD_i$)', '< 3.0% (IEEE 519適合)', '< 2.5%', '< 2.0%'],
      ],
      es: [
        ['Tensión MT Nominal', '35 kV / 33 kV', '35 kV / 33 kV', '35 kV'],
        ['Tensión BT Nominal', '0.69 kV o 0.8 kV', '0.8 kV - 0.8 kV (Dividido)', '0.8 kV - 0.8 kV'],
        ['Impedancia de Cortocircuito', '6.5% - 7.0%', '7.5% - 8.0% (Dividida: 11%)', '8.0% - 8.5%'],
        ['Distorsión Armónica ($THD_i$)', '< 3.0% (Norma IEEE 519)', '< 2.5%', '< 2.0%'],
      ],
    },
    sec4Title: {
      en: '4. Scenario-Based Application Decision Guide for Solar Farm Developers',
      zh: '4. 光伏电站开发商场景化选型决策指南',
      ja: '4. 発電所規模別選定ガイドライン',
      es: '4. Guía de Decisión para Desarrolladores Solares',
    },
    scenarios: {
      en: [
        {
          title: 'Distributed Utility Solar (10MW – 50MW Plants)',
          recommend: 'Pick: 3,150 kVA Dual-Split American Padmount Substation',
          reason: 'Compact, economical, and directly matched to standard 3.125 MW centralized inverter containers.',
        },
        {
          title: 'Desert Gigawatt-Scale Solar (GW Mega Base)',
          recommend: 'Pick: 6,300 kVA Pre-fabricated Modular E-House Substation',
          reason: 'Accommodates extra-large inverter capacity with C5-M sandstorm protection, internal MV switchgear, and central SCADA RTUs.',
        },
      ],
      zh: [
        {
          title: '中大型集中式光伏电站（10MW ~ 50MW 项目）',
          recommend: '首选：3,150 kVA 双分裂美式组合式箱变',
          reason: '占地极小、初始投资经济，与主流 3.125 MW 逆变升压集成舱实现 1:1 完美匹配。',
        },
        {
          title: '沙漠/戈壁千万千瓦级大型风光大基地（GW级特大项目）',
          recommend: '首选：6,300 kVA 预制舱式升压变电站',
          reason: '单舱集成两台 3150kVA 双分裂变压器、35kV 高压断路器与光伏区主控 SCADA 远动终端，具备 C5-M 级防风沙与恒温能力。',
        },
      ],
      ja: [
        {
          title: 'メガソーラー発電所 (10MW〜50MW)',
          recommend: '推奨：3,150 kVA ダブルスプリット変電所',
          reason: '3.125MWインバータコンテナと完全整合し経済性に優れる。',
        },
        {
          title: '砂漠・超大規模ギガワット発電基地',
          recommend: '推奨：6,300 kVA プレハブE-House変電所',
          reason: '防砂・C5-M防食と内部35kVスイッチギア一体型。',
        },
      ],
      es: [
        {
          title: 'Plantas Solares Utility Scale (10MW - 50MW)',
          recommend: 'Elegir: Subestación Padmount 3,150 kVA Dividida',
          reason: 'Ajuste perfecto a inversores centrales de 3.125 MW con bajo costo de instalación.',
        },
        {
          title: 'Megaproyectos Solares en Desierto (GW Scale)',
          recommend: 'Elegir: Cabina Modular E-House de 6,300 kVA',
          reason: 'Protección extrema contra tormentas de arena C5-M y celdas de 35kV integradas.',
        },
      ],
    },
    ctaTitle: {
      en: 'Request 35kV Photovoltaic Substation Single-Line Diagrams & CAD Files',
      zh: '获取 35kV 光伏升压箱变一次单线图、逆变器匹配计算书与报价单',
      ja: '35kV 太陽光変電所 単線結線図・CADデータのご請求',
      es: 'Solicitar Diagramas Unifilares 35kV y Cálculos para Plantas Solares',
    },
    ctaDesc: {
      en: 'Feichi Renewable Dept (led by Henry) delivers impedance calculation sheets, solar layout drawings, and compliance reviews within 24 hours.',
      zh: '飞驰电气新能源技术团队将在 24 小时内为您提供分裂变压器阻抗选型、高压一次图与正式报价。',
      ja: '担当のHenryまでお問い合わせください。24時間以内に設計図面を提出します。',
      es: 'El equipo de Feichi entregará planos CAD y cotización formal en 24 horas.',
    },
  },
  {
    id: 'week-09',
    week: 9,
    slug: 'underground-coal-mine-flameproof-substation-kbsgzy-guide',
    category: 'mining',
    categoryLabel: { en: 'Mining Safety & Hazardous Systems', zh: '工矿特种安全与制氮系统', ja: '鉱山安全・ガス防災', es: 'Sistemas Mineros y Seguridad' },
    title: {
      en: 'Underground Coal Mine Flameproof Substation (KBSGZY Series) vs Surface Industrial Substations: Hazardous Area Engineering',
      zh: '矿用隔爆型移动变电站（KBSGZY 系列）与地面工业箱变对比：高瓦斯爆炸性危险环境电气工程设计',
      ja: '炭鉱坑内用防爆移動変電所（KBSGZYシリーズ）：高濃度メタン危険場所における防爆電気エンジニアリング',
      es: 'Subestaciones Móviles Antiexplosivas para Minería Subterránea (Serie KBSGZY) vs Superficiales',
    },
    eyebrow: {
      en: 'FE-MINE-09 / HAZARDOUS MINING INFRASTRUCTURE',
      zh: 'FE-MINE-09 · 矿用隔爆特种变电站设计规程',
      ja: 'FE-MINE-09 · 坑内防爆電気設備・移動変電所',
      es: 'FE-MINE-09 · EQUIPOS MINEROS ANTIEXPLOSIVOS',
      ru: 'FE-MINE-09 · ШАХТНЫЕ ВЗРЫВОЗАЩИЩЕННЫЕ ПОДСТАНЦИИ',
    },
    author: {
      en: 'Feichi Mining Equipment & Flameproof Substation Dept',
      zh: '飞驰电气矿用装备与隔爆变配电技术部',
      ja: '飛馳電気 鉱山・防爆変電技術部門',
      es: 'Dpto. de Equipos Mineros y Subestaciones Antiexplosivas Feichi',
    },
    standards: 'IEC 60079-0/1 (Ex d I Mb) / GB 3836 / MT/T 827 / MA Mark',
    readTime: { en: '15 Min Read', zh: '15 分钟深度阅读', ja: '所要时间：15分', es: '15 Min de Lectura' },
    summary: {
      en: 'Technical comparison of underground flameproof mobile substations (KBSGZY, Ex d I Mb) featuring cylindrical corrugated explosion-proof casings, high-voltage vacuum switches, and ultra-fast (<30ms) selective earth-leakage tripping.',
      zh: '深入解析矿用隔爆型移动变电站（KBSGZY）与地面普通箱变的根本差异：圆筒形波纹隔爆外壳机械抗爆强度、高压真空负荷开关防爆结构以及低压微机超快（<30ms）选择性漏电保护机制。',
      ja: '坑内用防爆移動変電所（KBSGZY）の耐圧防爆構造（Ex d I Mb）、円筒波形シェル強度、30ms以下の超高速地絡漏電遮断技術を解説。',
      es: 'Análisis de subestaciones subterráneas antiexplosivas KBSGZY (Ex d I Mb): envolvente corrugada resistente a detonaciones y disparo por fuga a tierra en <30ms.',
    },
    sec1Title: {
      en: '1. Flameproof Explosion Containment Physics (Ex d I Mb Certification)',
      zh: '1. 矿用隔爆结构机理（Ex d I Mb 煤安认证）与机械抗爆强度计算',
      ja: '1. 耐圧防爆構造原理（Ex d I Mb認証）と爆発圧力封じ込め設計',
      es: '1. Principios de Contención Antiexplosiva (Certificación Ex d I Mb)',
    },
    sec1Text: {
      en: `Underground coal mines contain explosive mixtures of methane ($CH_4$) and coal dust. Unlike surface substations that rely on sheet metal enclosures, the KBSGZY underground mobile substation utilizes a heavy cylindrical corrugated steel shell engineered per IEC 60079-1 (Ex d I Mb):
1. Containment of Internal Explosion: If an internal electric arc ignites methane inside the transformer shell, the casing withstands dynamic blast pressures exceeding 1.0 MPa without structural rupture or permanent plastic deformation.
2. Flameproof Joint Flanges: Mating joint gaps are strictly machined ($W \le 0.4\text{ mm}$, length $L \ge 25\text{ mm}$). When hot gases escape through the gap, they are rapidly cooled below the ignition temperature of surrounding mine atmosphere ($T < 450^\circ\text{C}$).`,
      zh: `煤矿井下采掘工作面充满易燃易爆的瓦斯气体（甲烷 $CH_4$）和悬浮煤尘。与地面箱变采用薄钢板不同，KBSGZY 矿用隔爆型移动变电站采用特厚圆筒形波纹钢制隔爆外壳，严格符合 IEC 60079-1 与 GB 3836（Ex d I Mb 矿用最高防爆等级）：
1. 内部爆炸压力遏制：当变压器内部发生局部放电或电弧点燃渗入的瓦斯时，隔爆外壳可承受高达 1.0 MPa 以上的瞬时动态爆炸冲击波而不发生破裂或永久性形变。
2. 隔爆接合面精加工：法兰接合面间隙严格控制在极限公差内（间隙 $W \le 0.4\text{ mm}$，有效宽度 $L \ge 25\text{ mm}$）。高温燃烧气体逸出法兰缝隙时被迅速冷却至外部瓦斯自燃点（$T < 450^\circ\text{C}$）以下，杜绝引爆矿井外部环境。`,
      ja: `メタンガス爆発の衝撃波（1.0MPa以上）に耐える円筒波形スチールシェルと、火炎逸走を防止する高精度防爆接合面（隙間0.4mm以下）を完備。`,
      es: `Carcasa cilíndrica de acero capaz de contener presiones de explosión interna > 1.0 MPa con juntas apagallamas mecanizadas con holgura ≤ 0.4mm.`,
    },
    sec2Title: {
      en: '2. Ultra-Fast Selective Earth-Leakage Protection (< 30ms)',
      zh: '2. 低压侧智能微机选择性漏电保护与超快（< 30ms）跳闸断电机制',
      ja: '2. 30ms以下 超高速選択性地絡漏電遮断技術',
      es: '2. Protección Selectiva contra Fugas a Tierra de Ultra Alta Velocidad (<30ms)',
    },
    sec2Text: {
      en: `Underground electrical safety strictly mandates that any ground fault or human electric shock must be cleared within 30 milliseconds before an ignition spark can trigger a gas explosion.
The low-voltage protection unit of the KBSGZY substation features:
• Zero-Sequence Power Direction Algorithm: Accurately identifies the faulted outgoing feeder cable without false tripping healthy branch circuits.
• High-Speed Vacuum Contactor Interrupter: Clears short circuits and earth leaks in less than 20–30ms.
• 1200V / 3300V High-Power Output: Supplies continuous power to heavy shearers, roadheaders, and high-capacity armored face conveyors (AFC).`,
      zh: `煤矿井下供电规程强制要求：当低压供电电缆发生单相接地或人身触电时，系统必须在 30 毫秒（0.03秒）内瞬间切断电源，杜绝产生引爆瓦斯的危险电火花。
飞驰与煤科院联合研发的 KBSGZY 低压保护箱配备：
• 零序功率方向型选择性漏电保护：精确锁定发生漏电的支路电缆，只跳故障回路，非故障支路不停电。
• 永磁高速真空断路器：全分闸动作时间小于 20~30 毫秒。
• 1140V / 3300V 高压重载供电：为千万吨级综采工作面的大功率采煤机、掘进机和刮板输送机提供强劲动力。`,
      ja: `地絡・漏電発生時に30ms以内で高速遮断する零相電力方向判別アルゴリズムを搭載。事故回路のみを選択遮断し安全を確保。`,
      es: `Detección selectiva de fuga homopolar y disparo en <30ms mediante interruptor de vacío de alta velocidad para evitar chispas peligrosas.`,
    },
    sec3Title: {
      en: '3. Technical Comparison: KBSGZY Underground Mobile vs Standard Surface Substation',
      zh: '3. 矿用隔爆移动变电站与地面工业箱变技术对照表',
      ja: '3. 坑内防爆変電所 vs 地上箱型変電所 仕様比較',
      es: '3. Comparativa Subestación Minera KBSGZY vs Subestación Superficial',
    },
    tableHeaders: {
      en: ['Technical Specification', 'KBSGZY Series (Underground Flameproof)', 'Standard YB Series (Surface Compact Substation)'],
      zh: ['核心技术参数', 'KBSGZY 系列 (矿用隔爆移动变电站)', '标准 YB 系列 (地面预装式箱式变电站)'],
      ja: ['設計パラメータ', 'KBSGZY 坑内防爆移動変電所', 'YB 地上プレハブ変電所'],
      es: ['Parámetro Técnico', 'Serie KBSGZY (Mina Subterránea)', 'Serie YB (Superficie Estándar)'],
    },
    tableRows: {
      en: [
        ['Explosion-Proof Rating', 'Ex d I Mb (Mandatory Coal Mine Safety MA)', 'Non-Ex (Standard IP54 Weatherproof)'],
        ['Enclosure Mechanical Build', 'Heavy Cylindrical Corrugated Steel (Burst Proof >1MPa)', 'Sheet Metal / Galvanized Profile Enclosure'],
        ['Voltage Ratings', '6 kV, 10 kV / 1.2 kV, 3.45 kV', '10 kV, 24 kV, 35 kV / 0.4 kV'],
        ['Capacity Range', '315 kVA up to 4,000 kVA', '100 kVA up to 3,150 kVA'],
        ['Insulation Temperature Class', 'Class H (180°C) or Class C (220°C) Nomex Paper', 'Class F (155°C) Dry or Class A Oil'],
        ['Mobility & Running Gear', 'Mine Track Rail Wheels (600mm/900mm Gauge) or Skid', 'Stationary Concrete Foundation Mounting'],
        ['Earth Leakage Clearance Time', '< 30 ms (Ultra-Fast Selective Cutoff)', '100 ms – 300 ms (Standard Grid Coordination)'],
      ],
      zh: [
        ['防爆认证等级', 'Ex d I Mb (国家强制性煤安 MA 认证)', '非防爆 (标准户外 IP54 防风雨等级)'],
        ['机械外壳结构', '特厚圆筒形波纹钢结构 (抗爆 > 1.0 MPa)', '双层薄钢板/复合材料拼装柜体'],
        ['额定电压等级', '高压 6kV, 10kV / 低压 1.14kV, 3.3kV', '高压 10kV, 24kV, 35kV / 低压 0.4kV'],
        ['额定容量范围', '315 kVA 至 4,000 kVA (大功率综采)', '100 kVA 至 3,150 kVA (城市/工业)'],
        ['绝缘耐热等级', 'H 级 (180℃) 或 C 级 (220℃) 杜邦 Nomex 绝缘', 'F 级 (155℃) 环氧干变 或 A 级油变'],
        ['移动行走装置', '矿用轨轮底盘 (600mm/900mm 轨距可调) 或 撬装', '固定式混凝土条形基础安装'],
        ['漏电保护切除时间', '< 30 毫秒 (超快选择性断电)', '100 毫秒 ～ 300 毫秒 (常规电网级差)'],
      ],
      ja: [
        ['防爆規格', 'Ex d I Mb (鉱山安全MA認証必須)', '非防爆 (IP54耐候仕様)'],
        ['外郭構造', '高耐圧円筒波形鋼板（耐圧1.0MPa超）', '鋼板・複合パネル構造'],
        ['電圧仕様', '6kV, 10kV / 1.14kV, 3.3kV', '10kV〜35kV / 0.4kV'],
        ['漏電遮断速度', '< 30 ms（超高速）', '100〜300 ms'],
      ],
      es: [
        ['Certificación Antiexplosiva', 'Ex d I Mb (Sello Oficial Minero MA)', 'No Antiexplosiva (IP54 Estándar)'],
        ['Estructura Mecánica', 'Acero Cilíndrico Reforzado (> 1.0 MPa)', 'Estructura de Chapa y Perfiles'],
        ['Tensiones', '6kV, 10kV / 1.14kV, 3.3kV', '10kV a 35kV / 0.4kV'],
        ['Tiempo de Corte por Fuga', '< 30 ms (Ultra Rápido)', '100 ms a 300 ms'],
      ],
    },
    sec4Title: {
      en: '4. Critical Installation and Deployment Guidelines for Underground Substations',
      zh: '4. 矿用变电站井下硐室布置与综采工作面跟机推进选型',
      ja: '4. 坑内変電室配置および採掘切羽追従計画',
      es: '4. Pautas de Instalación en Galerías Mineras y Frentes de Explotación',
    },
    scenarios: {
      en: [
        {
          title: 'Fully Mechanized Longwall Mining Face (Follow-up Power Supply)',
          recommend: 'Pick: KBSGZY Mobile Substation on Rail Track Wheelbase',
          reason: 'Advancing smoothly with longwall progress, directly powering high-capacity shearers and armored conveyors.',
        },
        {
          title: 'Central Underground Mine Chamber (Pumping & Ventilation Substation)',
          recommend: 'Pick: High-Capacity Stationary Flameproof Skid Substation',
          reason: 'Provides continuous 1140V/660V power to essential drainage pumps and auxiliary ventilation fans with dual-source ATS.',
        },
      ],
      zh: [
        {
          title: '千万吨级高产高效综采工作面（顺槽跟机供电）',
          recommend: '选用：KBSGZY 轨轮行走式矿用隔爆移动变电站',
          reason: '随着工作面采煤推进在顺槽轨道上平稳前移，直供大功率采煤机与刮板机，减少低压电缆电压降。',
        },
        {
          title: '井下中央主排水泵房与主变电硐室',
          recommend: '选用：大容量撬装隔爆变电站（搭配双回路自动投入装置）',
          reason: '保障矿井主排水泵和主通风机的双重不间断供电，具备高可靠性与瓦斯超限自动断电联锁。',
        },
      ],
      ja: [
        {
          title: '炭鉱採掘切羽（長壁採掘追従電源）',
          recommend: '推奨：KBSGZY レール走行式防爆移動変電所',
          reason: '採掘機の進行に合わせてレール上を前進し、電圧降下を最小化。',
        },
        {
          title: '坑内中央排水・通気ポンプ室',
          recommend: '推奨：大容量スキッド型防爆変電所',
          reason: '二重電源自動切替により重要保安設備の無停電運転を保証。',
        },
      ],
      es: [
        {
          title: 'Frente de Explotación de Carbón por Tajo Largo (Longwall)',
          recommend: 'Elegir: Subestación Móvil KBSGZY sobre Rieles',
          reason: 'Avanza con el frente minero alimentando rozadoras y transportadores blindados.',
        },
        {
          title: 'Cámara Subterránea Central de Bombeo y Ventilación',
          recommend: 'Elegir: Subestación Antiexplosiva Skid de Alta Capacidad',
          reason: 'Suministro continuo e ininterrumpido con transferencia automática de doble fuente.',
        },
      ],
    },
    ctaTitle: {
      en: 'Request KBSGZY Flameproof Substation CAD Drawings & MA Certifications',
      zh: '获取矿用隔爆移动变电站（KBSGZY）图纸、煤安（MA）认证证书与技术报价',
      ja: 'KBSGZY 坑内防爆変電所 図面・MA認証証明書・見積のご請求',
      es: 'Solicitar Planos y Certificaciones Mineras de la Subestación KBSGZY',
    },
    ctaDesc: {
      en: 'Contact Technical Director Henry at Feichi for complete electrical schematics, short-circuit protection calculations, and formal proposals.',
      zh: '联系飞驰电气项目负责人 Henry，获取完整的隔爆开关保护配置、顺槽供电计算书与成套技术报价单。',
      ja: '担当のHenryまでご連絡ください。防爆図面および技術提案書を24時間以内に提供します。',
      es: 'Contacte al Ing. Henry para obtener diagramas unifilares y certificación minera.',
    },
  },
  {
    id: 'week-10',
    week: 10,
    slug: 'transformer-dissolved-gas-analysis-dga-and-dielectric-health-guide',
    category: 'substation',
    categoryLabel: { en: 'Substation & Transformers', zh: '箱变与变压器系统', ja: '変電所・変圧器', es: 'Subestaciones y Transformadores' },
    title: {
      en: 'Oil-Immersed Transformer Dissolved Gas Analysis (DGA) & Online Dielectric Monitoring for Heavy Industrial Substations',
      zh: '油浸式变压器油中溶解气体分析（DGA）与在线绝缘监测：重工业变电站潜伏性故障诊断与寿命预测指南',
      ja: '油入変圧器の油中ガス分析（DGA）とオンライン絶縁診断：重工業変電所の潜在異常診断・余寿命評価ガイド',
      es: 'Análisis de Gases Disueltos (DGA) y Monitoreo Dieléctrico en Transformadores de Subestaciones Industriales',
    },
    eyebrow: {
      en: 'FE-DGA-10 / DGA & THERMAL HEALTH MONITORING',
      zh: 'FE-DGA-10 · 变压器油中溶解气体（DGA）与在线监测',
      ja: 'FE-DGA-10 · 油中ガス分析(DGA)・状態監視システム',
      es: 'FE-DGA-10 · ANÁLISIS DGA Y MONITOREO DE TRANSFORMADORES',
      ru: 'FE-DGA-10 · ХРОМАТОГРАФИЯ ГАЗОВ ДАГ И МОНИТОРИНГ',
    },
    author: {
      en: 'Feichi High-Voltage Testing Laboratory (Lead: Henry)',
      zh: '飞驰电气高压试验与绝缘技术实验室（技术主理：Henry）',
      ja: '飛馳電気 高電圧絶縁診断研究室（担当：Henry）',
      es: 'Laboratorio de Alta Tensión Feichi (Lead: Henry)',
    },
    standards: 'IEEE C57.104 / IEC 60599 / GB/T 7252 / ASTM D3612',
    readTime: { en: '13 Min Read', zh: '13 分钟深度阅读', ja: '所要时间：13分', es: '13 Min de Lectura' },
    summary: {
      en: 'In-depth guide to interpreting key fault gases (H2, CH4, C2H2, C2H4, C2H6, CO, CO2) using Duval Triangle and Rogers Ratios to diagnose thermal hotspots, partial discharges, and high-energy arcing.',
      zh: '系统讲解变压器绝缘油中特征故障气体（氢气、甲烷、乙炔、乙烯、一氧化碳等）的产生机理，结合杜瓦尔三角（Duval Triangle）与三比值法准确定位局部放电、铁芯过热与电弧放电等内部故障。',
      ja: '変圧器絶縁油中の溶存ガス（水素・アセチレン・エチレン等）とデュバル三角法・ロジャース比率による部分放電・過熱・アーク故障診断を解説。',
      es: 'Diagnóstico de fallas incipientes en transformadores mediante cromatografía de gases disueltos (DGA), triángulo de Duval y ratios de Rogers.',
    },
    sec1Title: {
      en: '1. Characteristic Fault Gas Generation Mechanisms in Transformer Oil',
      zh: '1. 变压器绝缘油与油纸绝缘在电热应力下的特征故障气体裂解机理',
      ja: '1. 電気的・熱的ストレスによる絶縁油分解と特徴ガス発生機構',
      es: '1. Mecanismos de Generación de Gases Característicos en Aceite Aislante',
    },
    sec1Text: {
      en: `Under electrical stresses (corona, partial discharge, power arcing) and thermal stresses (overheating of core or conductors), transformer mineral oil ($C_n H_{2n+2}$) and cellulose insulation paper break down into diagnostic hydrocarbon gases:
• Hydrogen ($H_2$): Generated predominantly by partial discharge (corona) and moisture electrolysis.
• Methane ($CH_4$) & Ethane ($C_2H_6$): Formed during low-to-medium thermal overheating ($T < 300^\circ\text{C}$).
• Ethylene ($C_2H_4$): Produced during high-temperature thermal overheating of oil and metal parts ($T > 700^\circ\text{C}$).
• Acetylene ($C_2H_2$): The definitive fingerprint gas of high-energy electrical arcing (arcing temperatures exceed $1000^\circ\text{C}$ to $3000^\circ\text{C}$).
• Carbon Monoxide ($CO$) & Carbon Dioxide ($CO_2$): Generated by thermal degradation of paper winding insulation ($CO_2/CO < 3$ indicates severe paper aging).`,
      zh: `在电气应力（电晕、局部放电、火花放电、电弧）和热应力（铁芯过热、多点接地、接头接触不良）作用下，变压器矿物绝缘油（烃类化合物）与油浸绝缘纸板发生热化学裂解，释放出特征气体：
• 氢气 ($H_2$)：主要由局部放电（PD）、电晕放电以及微量水分电解裂解产生。
• 甲烷 ($CH_4$) 与 乙烷 ($C_2H_6$)：在低温至中温过热（$T < 300^\circ\text{C}$）时大量生成。
• 乙烯 ($C_2H_4$)：在高温过热（$T > 700^\circ\text{C}$，如铁芯短路环流、引线接头严重发热）时占主导。
• 乙炔 ($C_2H_2$)：高能电气电弧放电的特征指纹气体（电弧核心温度达 $1000^\circ\text{C} \sim 3000^\circ\text{C}$）。
• 一氧化碳 ($CO$) 与 二氧化碳 ($CO_2$)：绝缘纸（纤维素）裂解产物（当 $CO_2/CO$ 比值小于 3 时表明固体绝缘深度劣化）。`,
      ja: `水素（部分放電）、メタン・エタン（低温過熱）、エチレン（高温過熱）、アセチレン（アーク放電）、CO/CO2（絶縁紙劣化）の発生メカニズムを解説。`,
      es: `Identificación de gases: H2 (descargas parciales), CH4/C2H6 (sobrecalentamiento bajo), C2H4 (sobrecalentamiento alto), C2H2 (arco eléctrico) y CO/CO2 (celulosa).`,
    },
    sec2Title: {
      en: '2. Duval Triangle Method for Precise Fault Classification (IEC 60599)',
      zh: '2. 杜瓦尔三角法（Duval Triangle 1）故障区域精确判定法则',
      ja: '2. デュバル三角法（Duval Triangle）による故障領域の特定',
      es: '2. Método del Triángulo de Duval para Clasificación Precisa de Fallas',
    },
    sec2Text: {
      en: `The Duval Triangle 1 method normalizes the concentrations of three primary diagnostic gases into percentages ($%CH_4 + %C_2H_4 + %C_2H_2 = 100\%$):
• PD (Partial Discharge): %CH4 > 98%.
• T1 (Thermal Fault < 300°C): High %CH4 with low %C2H4.
• T2 (Thermal Fault 300°C – 700°C): Intermediate %C2H4.
• T3 (Thermal Fault > 700°C): Dominant %C2H4 (> 50%).
• D1 (Low Energy Discharge / Sparking): Moderate %C2H2.
• D2 (High Energy Discharge / Power Arc): High %C2H2 (> 13% - 29%).
• DT (Thermal & Electrical Mixed Fault): Intermediate overlap.`,
      zh: `杜瓦尔三角 1（Duval Triangle 1）通过将三种核心烃类气体的摩尔浓度归一化为百分比（$\%CH_4 + \%C_2H_4 + \%C_2H_2 = 100\%$），将变压器内部潜伏性故障划分为 7 大经典区域：
• PD（局部放电区）：$\%CH_4 > 98\%$，主要为微气隙绝缘缺陷。
• T1（低温过热区 $< 300^\circ\text{C}$）：以甲烷为主。
• T2（中温过热区 $300^\circ\text{C} \sim 700^\circ\text{C}$）：乙烯比例显著上升。
• T3（高温过热区 $> 700^\circ\text{C}$）：$\%C_2H_4 > 50\%$，金属接头熔焊或铁芯过热。
• D1（低能放电/火花区）：伴随少量乙炔产生。
• D2（高能放电/电弧区）：$\%C_2H_2 > 13\% \sim 29\%$，绕组匝间绝缘击穿或分接开关闪络。
• DT（电热混合故障区）：同时存在过热与放电隐患。`,
      ja: `メタン・エチレン・アセチレンの相対比率を三角座標上にプロットし、部分放電（PD）、過熱（T1-T3）、放電（D1-D2）を直感的に特定。`,
      es: `Coordenadas triangulares normalizadas (%CH4, %C2H4, %C2H2) que dividen el estado en 7 zonas de diagnóstico (PD, T1-T3, D1-D2, DT).`,
    },
    sec3Title: {
      en: '3. IEEE C57.104 95th Percentile Dissolved Gas Concentration Limits (ppm)',
      zh: '3. IEEE C57.104 标准 95 分位数特征气体浓度极限参考表（ppm）',
      ja: '3. IEEE C57.104 基準によるガス濃度限界値（ppm）',
      es: '3. Límites de Concentración de Gases según IEEE C57.104 (ppm)',
    },
    tableHeaders: {
      en: ['Gas Component', 'Normal Status (Condition 1)', 'Caution / Warning (Condition 2)', 'Critical Action Required (Condition 3)'],
      zh: ['气体组分名称', '正常安全运行基线 (状态 1)', '注意预警状态 (状态 2)', '严重危险需立即停电检修 (状态 3)'],
      ja: ['ガス成分', '正常値 (Condition 1)', '注意値 (Condition 2)', '異常・危険値 (Condition 3)'],
      es: ['Gas Disuelto', 'Nivel Normal (Condición 1)', 'Alerta / Precaución (Condición 2)', 'Acción Crítica Inmediata (Condición 3)'],
    },
    tableRows: {
      en: [
        ['Hydrogen (H2)', '< 100 ppm', '100 – 700 ppm', '> 700 ppm'],
        ['Methane (CH4)', '< 120 ppm', '120 – 400 ppm', '> 400 ppm'],
        ['Acetylene (C2H2)', '< 1 ppm (Zero Tolerance)', '1 – 9 ppm', '> 9 ppm (Arcing Warning)'],
        ['Ethylene (C2H4)', '< 50 ppm', '50 – 100 ppm', '> 100 ppm (Severe Hotspot)'],
        ['Ethane (C2H6)', '< 65 ppm', '65 – 100 ppm', '> 100 ppm'],
        ['Carbon Monoxide (CO)', '< 350 ppm', '350 – 570 ppm', '> 570 ppm (Paper Degradation)'],
        ['Total Combustible Gases (TDCG)', '< 720 ppm', '720 – 1,920 ppm', '> 1,920 ppm (Immediate Action)'],
      ],
      zh: [
        ['氢气 (H2)', '< 100 ppm', '100 ～ 700 ppm', '> 700 ppm (放电加剧)'],
        ['甲烷 (CH4)', '< 120 ppm', '120 ～ 400 ppm', '> 400 ppm (油温异常)'],
        ['乙炔 (C2H2)', '< 1 ppm (零容忍)', '1 ～ 9 ppm', '> 9 ppm (严重电弧放电报警)'],
        ['乙烯 (C2H4)', '< 50 ppm', '50 ～ 100 ppm', '> 100 ppm (严重高温热斑)'],
        ['乙烷 (C2H6)', '< 65 ppm', '65 ～ 100 ppm', '> 100 ppm'],
        ['一氧化碳 (CO)', '< 350 ppm', '350 ～ 570 ppm', '> 570 ppm (固体绝缘老化)'],
        ['总可燃气体 (TDCG)', '< 720 ppm', '720 ～ 1,920 ppm', '> 1,920 ppm (必须停机排查)'],
      ],
      ja: [
        ['水素 (H2)', '< 100 ppm', '100 〜 700 ppm', '> 700 ppm'],
        ['メタン (CH4)', '< 120 ppm', '120 〜 400 ppm', '> 400 ppm'],
        ['アセチレン (C2H2)', '< 1 ppm', '1 〜 9 ppm', '> 9 ppm（アーク警報）'],
        ['エチレン (C2H4)', '< 50 ppm', '50 〜 100 ppm', '> 100 ppm（高温過熱）'],
        ['総可燃性ガス (TDCG)', '< 720 ppm', '720 〜 1,920 ppm', '> 1,920 ppm（即時点検）'],
      ],
      es: [
        ['Hidrógeno (H2)', '< 100 ppm', '100 – 700 ppm', '> 700 ppm'],
        ['Metano (CH4)', '< 120 ppm', '120 – 400 ppm', '> 400 ppm'],
        ['Acetileno (C2H2)', '< 1 ppm', '1 – 9 ppm', '> 9 ppm (Arco Eléctrico)'],
        ['Etileno (C2H4)', '< 50 ppm', '50 – 100 ppm', '> 100 ppm (Sobrecalentamiento)'],
        ['Total Gases Combustibles', '< 720 ppm', '720 – 1,920 ppm', '> 1,920 ppm (Acción Urgente)'],
      ],
    },
    sec4Title: {
      en: '4. Online DGA Sensor Integration & Preventive Maintenance Protocol',
      zh: '4. 在线油色谱监测传感器集成与预知性维护策略',
      ja: '4. オンライン油中ガスセンサーと予防保全プロトコル',
      es: '4. Sensores DGA en Línea y Protocolo de Mantenimiento Predictivo',
    },
    scenarios: {
      en: [
        {
          title: 'Critical Heavy Industrial Plant (Continuous Smelting / Steel)',
          recommend: 'Integrate: Multi-Gas Photoacoustic Online DGA Monitor + SCADA Alarm',
          reason: 'Continuous 24-hour gas growth rate tracking detects runaway arcing faults before catastrophic tank explosion.',
        },
        {
          title: 'Standard Utility Distribution Substation',
          recommend: 'Routine: Annual Laboratory Gas Chromatography Sampling (ASTM D3612)',
          reason: 'Cost-effective preventative health tracking to plan scheduled oil filtration and degasification cycles.',
        },
      ],
      zh: [
        {
          title: '重工业连续生产企业（冶金冶炼、石化化纤、半导体）',
          recommend: '标配：多组分光声光谱（PAS）在线油色谱监测仪 + 自动越限预警',
          reason: '24 小时连续追踪气体产气速率（产气速率比单次绝对值更敏感），在发生油箱爆炸前抢先预警。',
        },
        {
          title: '常规电网变电站与工矿配电室',
          recommend: '执行：每半年/每年一次离线油样色谱送检（GB/T 7252）',
          reason: '低成本建立变压器全生命周期健康档案，科学规划真空滤油与脱气维护周期。',
        },
      ],
      ja: [
        {
          title: '連続稼働プラント（製鉄・石油化学・半導体）',
          recommend: '多成分光音響分光（PAS）オンラインDGA監視を導入',
          reason: 'ガス発生速度を24時間監視し、重大事故を未然に防止。',
        },
        {
          title: '一般配電用変電所',
          recommend: '年1回の定期採油・ガスクロマトグラフィー分析',
          reason: '長期的な経年劣化傾向を把握し計画的保全を実施。',
        },
      ],
      es: [
        {
          title: 'Plantas de Producción Continua (Siderurgia, Petroquímica)',
          recommend: 'Monitor DGA en Línea Fotoacústico Multigas en SCADA',
          reason: 'Monitoreo en tiempo real de la tasa de incremento de gases para evitar paradas imprevistas.',
        },
        {
          title: 'Subestaciones de Distribución Estándar',
          recommend: 'Cromatografía Anual en Laboratorio (ASTM D3612)',
          reason: 'Planificación preventiva de ciclos de desgasificación y filtrado de aceite.',
        },
      ],
    },
    ctaTitle: {
      en: 'Request Transformer DGA Diagnosis Consultation & S20 Oil Sample Testing Protocols',
      zh: '获取变压器油色谱（DGA）故障诊断评估报告与出厂油质化验单',
      ja: '変圧器DGA診断レポート・油質検査仕様書のご請求',
      es: 'Solicitar Informe Diagnóstico DGA y Protocolos de Ensayos Dieléctricos',
    },
    ctaDesc: {
      en: 'Contact Lead Henry at Feichi Electrical for expert gas ratio interpretation, dielectric loss testing ($tan \\delta$), and transformer health assessment.',
      zh: '联系飞驰电气高压试验负责人 Henry，获取专家级 DGA 产气比值分析、介质损耗角（$tan \\delta$）评估与变压器选型方案。',
      ja: '飛馳電気のHenryまでご連絡ください。専門的なガス比率分析および余寿命評価を提供します。',
      es: 'Contacte al Ing. Henry en Feichi para interpretación de gases y evaluación de transformadores.',
    },
  },
  {
    id: 'week-11',
    week: 11,
    slug: 'epc-single-line-diagram-sld-engineering-design-checklist',
    category: 'standards',
    categoryLabel: { en: 'Standards, E-House & Grid Compliance', zh: '预制舱、标准与电网并网', ja: '規格・プレハブ局舎', es: 'Normas, Cabinas y Red' },
    title: {
      en: 'Single-Line Diagram (SLD) Design Checklist for EPC Contractors: From Utility Grid Infeed to Terminal Distribution Panels',
      zh: '工程总包（EPC）电气一次系统图（SLD）设计审核清单：从高压电网进线到终端低压动力分配全流程',
      ja: 'EPC事業者のための単線結線図（SLD）設計・照査チェックリスト：高圧引込から端末配電盤まで',
      es: 'Lista de Verificación de Diagramas Unifilares (SLD) para Contratistas EPC: Desde la Red de Media Tensión hasta Cuadros Terminales',
    },
    eyebrow: {
      en: 'FE-EPC-11 / ENGINEERING SLD SIGN-OFF CHECKLIST',
      zh: 'FE-EPC-11 · 海外工程总包单线图（SLD）技术确认清单',
      ja: 'FE-EPC-11 · EPC単線結線図技術承認チェックリスト',
      es: 'FE-EPC-11 · LISTA DE VERIFICACIÓN SLD PARA PROYECTOS EPC',
      ru: 'FE-EPC-11 · ЧЕК-ЛИСТ СОГЛАСОВАНИЯ ОДНОЛИНЕЙНЫХ СХЕМ EPC',
    },
    author: {
      en: 'Feichi Engineering & Technical Dept (Lead: Henry)',
      zh: '飞驰电气技术工程部（总工/外贸对接人：Henry）',
      ja: '飛馳電気 技術部門（担当：Henry）',
      es: 'Departamento Técnico Feichi (Lead: Henry)',
    },
    standards: 'IEC 60617 / IEEE 141 (Red Book) / IEC 60364 / GB 50052',
    readTime: { en: '14 Min Read', zh: '14 分钟深度阅读', ja: '所要时间：14分', es: '14 Min de Lectura' },
    summary: {
      en: 'A step-by-step engineering verification protocol for primary single-line diagrams (SLD), covering busbar capacity calculations, CT/PT accuracy classes (0.2S vs 5P20), transformer inrush discrimination, and fault loop impedance.',
      zh: '为海外电气工程师与 EPC 项目经理制定的系统化一次系统图（SLD）审核协议：涵盖母线载流量校核、互感器精度等级选择（计量0.2S级与保护5P20级）、电压降与短路选择性配合。',
      ja: '単線結線図（SLD）の設計・照査マニュアル：母線容量、変成器精度クラス（0.2S / 5P20）、短絡保護協調、電圧降下計算の要点を網羅。',
      es: 'Protocolo de verificación para diagramas unifilares: dimensionamiento de barras, clases de precisión en TC/TT y selectividad de protecciones.',
    },
    sec1Title: {
      en: '1. Infeed Architecture & Instrument Transformer Accuracy Classes',
      zh: '1. 高压进线架构与互感器精度等级（计量 0.2S 级 vs 保护 5P20 级）选型原则',
      ja: '1. 高圧引込構成と計器用変成器（計量用0.2S vs 保護用5P20）の選定',
      es: '1. Arquitectura de Entrada y Clases de Precisión de Transformadores de Medida',
    },
    sec1Text: {
      en: `The foundation of any high-voltage primary diagram is the infeed switchgear cubicle. A robust SLD must define:
1. Current Transformer (CT) Cores:
• Metering Core (Class 0.2S / 0.5S with low saturation factor $FS \le 5$): Protects sensitive revenue meters during short-circuit faults.
• Protection Core (Class 5P20 or 10P20 with Accuracy Limit Factor $ALF = 20$): Ensures non-saturated linear reproduction of fault currents up to 20 times rated current for microprocessor overcurrent and differential relays.
2. Voltage Transformer (PT) Configurations: Open-delta for ground fault zero-sequence voltage ($3U_0$) detection and star-grounded configuration for line-to-line revenue metering.`,
      zh: `高压一次系统图的基石是进线柜与计量保护回路。一份规范的 SLD 必须明确标注：
1. 电流互感器（CT）多绕组划分：
• 计量绕组（0.2S 级或 0.5S 级，仪表保安系数 $FS \le 5$）：在发生短路时铁芯迅速饱和，保护高精度的电网电度表不被大电流烧毁。
• 继电保护绕组（5P20 或 10P20 级，准确限值系数 $ALF = 20$）：确保在高达 20 倍额定短路电流下铁芯不饱和，线性传变短路波形，供微机保护准确动作。
2. 电压互感器（PT）接线方式：开口三角接线用于检测系统接地故障零序电压（$3U_0$），星形接地中性点接线用于线电压与相电压精确计量。`,
      ja: `CT巻線の使い分け：計量用（0.2S級・FS≤5で計器保護）と保護継電器用（5P20級・短絡電流20倍まで非飽和）の明確な仕様区分。`,
      es: `Doble devanado en TC: Núcleo de medida (Clase 0.2S con FS ≤ 5) y Núcleo de protección (Clase 5P20 con ALF = 20) para despeje fiable de faltas.`,
    },
    sec2Title: {
      en: '2. Busbar Ampacity Calculation & Skin Effect Derating Factor',
      zh: '2. 主母线载流量热稳定计算与集肤效应（Skin Effect）修正',
      ja: '2. 主母線許容電流計算と表皮効果補正',
      es: '2. Cálculo de Ampacidad de Embarrados y Efecto Pelicular',
    },
    sec2Text: {
      en: `Copper busbars inside enclosed switchgear must be derated according to ambient temperature ($40^\circ\text{C}$ standard), number of parallel laminations, and AC skin effect ($k_s$):

$$I_{rated} = I_0 \cdot k_t \cdot k_p \cdot k_s$$

Where $I_0$ is open-air DC current capacity, $k_t$ is ambient temperature derating factor ($k_t = 0.82$ for $50^\circ\text{C}$ tropical ambient), $k_p$ is enclosure ventilation coefficient, and $k_s$ accounts for AC eddy current concentration on conductor edges (critical for currents $> 2000\text{ A}$).`,
      zh: `封闭开关柜内部的铜母线载流量必须综合考虑环境温度（基准 40℃）、多条并联布置方式以及交流集肤效应系数（$k_s$）：

$$I_{rated} = I_0 \cdot k_t \cdot k_p \cdot k_s$$

式中 $I_0$ 为敞开空气中直流基准载流量，$k_t$ 为温度降容系数（热带 50℃ 环境取 0.82），$k_p$ 为封闭柜体通风阻力系数，$k_s$ 为集肤效应衰减因子（在 $I > 2000\text{ A}$ 的大电流母线中尤为关键，飞驰采用双拼或三拼矩形铜排加开对流风道）。`,
      ja: `周囲温度補正、密閉筐体通風係数、交流表皮効果（大電流2000A以上）を考慮した母線選定計算式。`,
      es: `Cálculo de corriente admisible considerando temperatura ambiente, ventilación del armario y efecto pelicular en corrientes > 2000A.`,
    },
    sec3Title: {
      en: '3. 8-Point Comprehensive SLD Engineering Verification Checklist',
      zh: '3. 飞驰工程部 8 步一次系统图审核清单',
      ja: '3. SLD 8ステップ設計照査チェックリスト',
      es: '3. Lista de Verificación en 8 Puntos para el Diagrama Unifilar',
    },
    tableHeaders: {
      en: ['Checklist Item', 'Verification Standard', 'Key Engineering Focus & Action'],
      zh: ['审核关键节点', '参考执行标准', '核心工程核查重点与修正措施'],
      ja: ['照査項目', '適用基準', '設計検証のポイント'],
      es: ['Punto de Control', 'Norma Aplicable', 'Foco de Ingeniería'],
    },
    tableRows: {
      en: [
        ['1. Grid Infeed Capacity & Fault Level', 'IEC 60909', 'Verify utility Ik" (e.g. 25kA/31.5kA) matches VCB breaking capacity'],
        ['2. Transformer Capacity & Impedance', 'IEC 60076', 'Check Uk% and vector group (Dyn11 standard for harmonic mitigation)'],
        ['3. MV Switchgear Arc Rating', 'IEC 62271-200', 'Ensure IAC AFLR rating is specified for operator safety corridors'],
        ['4. CT/PT Burden & Accuracy Sizing', 'IEC 61869-2/3', 'Calculate total VA burden including secondary cable run resistance'],
        ['5. LV Main Breaker Selective Trip', 'IEC 60947-2', 'Coordinate ACB short-time delay (Isd, tsd) with downstream MCCB curves'],
        ['6. Reactive Power Compensation', 'IEC 61921', 'Ensure 7% or 14% detuned reactors are added if THD-V > 3.0%'],
        ['7. Earthing & Neutral System (TN-S/IT)', 'IEC 60364-4-41', 'Verify 4-pole vs 3-pole breaker selection for dual source transfer'],
        ['8. Surge Protection Devices (SPD)', 'IEC 61643-11', 'Install Class I+II surge arresters at main incomer with remote telemetry'],
      ],
      zh: [
        ['1. 电网进线容量与短路水平', 'IEC 60909 / GB 15576', '核实电网短路开断容量（如 25kA/31.5kA）与进线断路器参数匹配'],
        ['2. 变压器额定容量与阻抗', 'IEC 60076 / GB 20052', '校核 Uk% 阻抗值与 Dyn11 联结组（有效抑制 3 次谐波）'],
        ['3. 中压开关柜燃弧等级', 'IEC 62271-200', '确认是否明确标注 IAC AFLR 内部燃弧安全防护等级'],
        ['4. 互感器变比与二次负荷 (VA)', 'IEC 61869 / GB 20840', '计算二次电缆线路阻抗与微机保护装置的总 VA 负荷消耗'],
        ['5. 低压主进断路器选择性配合', 'IEC 60947-2', '整定框架断路器（ACB）短延时保护（Isd, tsd）与塑壳（MCCB）曲线'],
        ['6. 无功补偿与电抗率匹配', 'IEC 61921', '当系统谐波畸变率超标时，必须串联 7% 或 14% 抗谐波滤波电抗器'],
        ['7. 接地制式与中性线拓扑 (TN-S)', 'IEC 60364-4-41', '在双电源切换系统中严格确定 3 极还是 4 极断路器以防零线环流'],
        ['8. 浪涌保护器（SPD）配置', 'IEC 61643-11', '在低压总进线处配置 Class I+II 复合型浪涌保护器并带遥信报警'],
      ],
      ja: [
        ['1. 短絡容量整合', 'IEC 60909', '電力会社短絡容量とVCB遮断容量の照合'],
        ['2. 変圧器インピーダンス', 'IEC 60076', 'Uk%およびDyn11結線の確認'],
        ['3. スイッチギアIAC定格', 'IEC 62271-200', 'アーク安全基準（IAC AFLR）の明記'],
        ['4. 選択遮断協調', 'IEC 60947-2', 'ACB・MCCB間のトリップ時間協調'],
        ['5. 力率改善・高調波リアクトル', 'IEC 61921', '7%または14%直列リアクトルの適用'],
      ],
      es: [
        ['1. Capacidad de Cortocircuito', 'IEC 60909', 'Verificar que Ik" coincida con el poder de corte del interruptor'],
        ['2. Impedancia del Trafo', 'IEC 60076', 'Confirmar grupo Dyn11 para mitigación armónica'],
        ['3. Arco Interno IAC', 'IEC 62271-200', 'Exigir clasificación IAC AFLR'],
        ['4. Selectividad de Protecciones', 'IEC 60947-2', 'Curvas de disparo coordinadas entre ACB y MCCBs aguas abajo'],
        ['5. Compensación Reactiva', 'IEC 61921', 'Reactancias de rechazo del 7% o 14% ante presencia de armónicos'],
      ],
    },
    sec4Title: {
      en: '4. Feichi Engineering Support & 24-Hour SLD Review Turnaround',
      zh: '4. 飞驰电气工程支持与 24 小时一次系统图免费审核通道',
      ja: '4. 24時間以内の単線結線図レビューサービス',
      es: '4. Servicio de Revisión de Diagramas Unifilares en 24 Horas',
    },
    scenarios: {
      en: [
        {
          title: 'New Industrial Plant Green-Field Development',
          recommend: 'Send: Preliminary AutoCAD (.dwg) Schematic + Load List',
          reason: 'Our electrical engineers will optimize transformer sizing, breaker trip curves, and busbar layouts.',
        },
        {
          title: 'Overseas Tender & Bidding Document Preparation',
          recommend: 'Send: Client Technical Specification & Single-Line Draft',
          reason: 'We provide full compliance cross-referencing, equipment datasheets, and cost estimation.',
        },
      ],
      zh: [
        {
          title: '新建工业厂区、矿山与商业综合体绿地项目',
          recommend: '提交：初步 AutoCAD 接线草图（.dwg）+ 负载用电负荷表',
          reason: '飞驰总工团队将免费协助优化变压器容量计算、保护级差配合与母线选型，消除设计隐患。',
        },
        {
          title: '海外工程 EPC 投标与技术方案响应',
          recommend: '提交：业主招标文件技术规范书与系统一次图草案',
          reason: '我们在 24 小时内出具完整的技术偏离表、一次系统深化 CAD 图纸与精准设备报价单。',
        },
      ],
      ja: [
        {
          title: '新規プラント・工場建設プロジェクト',
          recommend: 'AutoCAD（.dwg）系統図および負荷リストの送付',
          reason: '変圧器容量・遮断器協調・母線サイズの最適化案を作成。',
        },
        {
          title: '海外入札案件・技術仕様照会',
          recommend: '入札要求仕様書および単線図ドラフトの送付',
          reason: '24時間以内に規格適合性評価および詳細見積書を返送。',
        },
      ],
      es: [
        {
          title: 'Nuevas Plantas Industriales (Greenfield)',
          recommend: 'Enviar: Plano en AutoCAD (.dwg) y Lista de Cargas',
          reason: 'Optimizamos la capacidad de transformadores y selectividad de interruptores.',
        },
        {
          title: 'Licitaciones Internacionales y Ofertas EPC',
          recommend: 'Enviar: Especificaciones del Cliente y Diagrama Unifilar',
          reason: 'Entrega de planos CAD optimizados y oferta técnica en 24 horas.',
        },
      ],
    },
    ctaTitle: {
      en: 'Submit Your Project SLD for 24-Hour Engineering Review',
      zh: '提交您的一次系统接线图（SLD），获取 24 小时免费工程审查与报价',
      ja: '単線結線図（SLD）の無料技術診断・見積依頼',
      es: 'Enviar Diagrama Unifilar (SLD) para Revisión Técnica Gratuita',
    },
    ctaDesc: {
      en: 'Send your project schematics to Lead Henry at Feichi Electrical via WhatsApp or email for prompt engineering verification.',
      zh: '将您的图纸或负荷清单发送至技术负责人 Henry（WhatsApp / 邮箱），我们将在 24 小时内提供专业的审核优化意见与技术方案。',
      ja: '担当のHenryまで図面をお送りください。24時間以内に技術回答とお見積もりを作成します。',
      es: 'Envíe sus esquemas al Ing. Henry en Feichi para una revisión técnica completa.',
    },
  },
  {
    id: 'week-12',
    week: 12,
    slug: 'dual-power-ats-and-fast-bus-transfer-bzt-system-guide',
    category: 'switchgear',
    categoryLabel: { en: 'MV/LV Switchgear & Protection', zh: '高低压开关柜与保护', ja: 'スイッチギア・保護継电', es: 'Celdas de MT/BT y Protección' },
    title: {
      en: 'Dual-Power Automatic Transfer Switch (ATS) & Fast Bus Transfer System (BZT) Integration in Hospital and Data Center Power Systems',
      zh: '双电源自动转换开关（ATS）与中高压备自投（BZT）在数据中心、三甲医院与半导体关键供电系统中的工程实践',
      ja: '二重化電源自動切替（ATS）と高圧自動電源切替（BZT）：データセンター・病院・半導体工場の無停電給電技術',
      es: 'Sistemas de Transferencia Automática (ATS) y Transferencia Rápida de Barras (BZT) en Centros de Datos y Hospitales',
    },
    eyebrow: {
      en: 'FE-GRID-12 / ZERO-DOWNTIME REDUNDANCY DESIGN',
      zh: 'FE-GRID-12 · 关键负荷双电源自动切换（ATS）拓扑架构',
      ja: 'FE-GRID-12 · 重要負荷デュアルATS電源切替トポロジー',
      es: 'FE-GRID-12 · ARQUITECTURA DE TRANSFERENCIA AUTOMÁTICA ATS',
      ru: 'FE-GRID-12 · СИСТЕМЫ АВР И БЕСПЕРЕБОЙНОЕ ЭЛЕКТРОСНАБЖЕНИЕ',
    },
    author: {
      en: 'Feichi Critical Power Systems Group (Lead: Henry)',
      zh: '飞驰电气关键电源系统技术组（技术主理：Henry）',
      ja: '飛馳電気 重要電源システムグループ（担当：Henry）',
      es: 'Grupo de Energía Crítica Feichi (Lead: Henry)',
    },
    standards: 'IEC 60947-6-1 / GB/T 14048.11 / NFPA 110 / Tier IV Data Center',
    readTime: { en: '15 Min Read', zh: '15 分钟深度阅读', ja: '所要时间：15分', es: '15 Min de Lectura' },
    summary: {
      en: 'Engineering guide on Class PC vs Class CB automatic transfer switches (ATS), fast bus transfer schemes (<100ms in-phase transfer), interlocking topologies, and diesel generator synchronizing boards.',
      zh: '深入解析 PC 级与 CB 级自动转换开关的选型原则、中压母线备自投（BZT）的无同期待相快速切换算法（<100ms）及柴油发电机组智能并机柜的闭锁保护逻辑。',
      ja: 'PC級 vs CB級 ATS切替スイッチ、100ms以内の高圧同位相高速切替（BZT）、非常用発電機並列同期制御を解説。',
      es: 'Guía técnica sobre conmutadores de transferencia automática (ATS) Clase PC vs CB, transferencia rápida de barras (<100ms) y sincronismo de generadores.',
    },
    sec1Title: {
      en: '1. Class PC vs Class CB Automatic Transfer Switches: Operating Philosophy',
      zh: '1. PC 级与 CB 级自动转换开关（ATS）的结构差异与分断特性对比',
      ja: '1. PC級 vs CB級 自動切替開閉器（ATS）の構造と動作原理',
      es: '1. Conmutadores de Transferencia Automática: Clase PC vs Clase CB',
    },
    sec1Text: {
      en: `According to IEC 60947-6-1:
• Class PC ATS (Dedicated Switch): An integrated, electromagnetic or motorized double-throw mechanism capable of making and withstanding short-circuit currents without an internal overcurrent trip release. It prioritizes power continuity and mechanical reliability ($100\%$ contact weld-resistant).
• Class CB ATS (Dual Circuit Breaker): Equipped with integrated overcurrent trip releases. If an overload occurs on one branch, the breaker might trip and leave the system de-energized unless external logic handles transfer.

In Tier III / Tier IV Data Centers and Hospital ICU wards, Class PC ATS is mandatory for critical transfer nodes to eliminate accidental tripping due to motor starting inrush currents.`,
      zh: `依据国际标准 IEC 60947-6-1，自动转换开关主要分为两大技术门类：
• PC 级 ATS（一体化双投隔离开关型）：采用励磁驱动或电机驱动的机械双投结构，能够接通、承载短路电流，但内部不设过载脱扣器。核心设计哲学是“保证供电连续性优先”，触头抗熔焊能力极高，机械寿命达数万次。
• CB 级 ATS（双断路器组合型）：由两台标准塑壳或微型断路器加机械互锁组成，配备过载与短路脱扣器。当发生过载时可能发生误跳闸导致双路全停。

在 Tier III / IV 级数据中心、三甲医院手术室与半导体晶圆厂的关键供电母线上，强制推荐选用 PC 级 ATS，杜绝因电机启动涌流引发脱扣导致的非计划停电。`,
      ja: `PC級（専用双投スイッチ型・過負荷トリップなしで給電継続を最優先）とCB級（遮断器型）の違いを解説。重要施設にはPC級が必須。`,
      es: `La Clase PC prioriza la continuidad del suministro sin disparos por sobrecarga accidental, siendo obligatoria en Centros de Datos Tier IV y Hospitales.`,
    },
    sec2Title: {
      en: '2. Medium Voltage Fast Bus Transfer (BZT) Logic (< 100ms In-Phase Transfer)',
      zh: '2. 中压备用电源自投（BZT）同相快速切换（< 100ms）控制逻辑',
      ja: '2. 高圧電源自動切替（BZT）100ms以内同位相高速切替ロジック',
      es: '2. Lógica de Transferencia Rápida de Barras en MT (< 100ms en Fase)',
    },
    sec2Text: {
      en: `When utility Feeder A trips unexpectedly, rotating induction motors connected to the busbar generate decaying residual back-EMF voltage.
If backup Feeder B is closed out-of-phase ($180^\circ$ opposition), massive electromagnetic torque shocks will destroy motor shafts and trip breakers.
Feichi BZT microcomputer relays utilize three prioritized transfer modes:
1. Fast In-Phase Transfer ($t < 100\text{ ms}$): Closes backup breaker while the phase angle difference between bus residual voltage and backup utility is within $\Delta \delta \le 20^\circ$.
2. In-Phase Capture Transfer: Catches the first synchronous phase coincidence cycle.
3. Residual Voltage Transfer: Waits until bus residual voltage drops below $20\% - 40\% U_n$ before safe closing.`,
      zh: `当主供电源进线 A 发生意外失压跳闸时，母线上挂接的大容量电动机在惯性旋转中会产生衰减的残余反电动势。
若盲目合上备用电源进线 B，当两者相位相反（$180^\circ$ 反相）时，将产生巨大的电磁冲击转矩，瞬间扭断电机主轴并引发系统崩溃。
飞驰微机备自投（BZT）装置集成先进的三级快速切换判据：
1. 同相快速切换（$t < 100\text{ ms}$）：实时高频采样母线残压与备用电源相位差，当相位差处于安全窗口（$\Delta \delta \le 20^\circ$）内时极速合上备用断路器，负荷无任何感知。
2. 同相捕捉切换：若错过快速区，智能算法捕捉残压与备用电的第一个同相同步点触发合闸。
3. 残压切换：当电机反电势完全衰减至安全阈值（$20\% \sim 40\% U_n$）以下时再执行合闸。`,
      ja: `モータの残留逆起電力をリアルタイム監視し、位相差20度以内の安全領域で100ms以内にバックアップ電源へ切替（同位相高速切替）。`,
      es: `Conmutación ultrarrápida en fase (<100ms con Δδ ≤ 20°) que evita golpes de par electromagnético destructivos en grandes motores eléctricos.`,
    },
    sec3Title: {
      en: '3. Technical Comparison Matrix: PC-Class ATS vs CB-Class ATS vs Fast BZT',
      zh: '3. PC 级 ATS、CB 级 ATS 与微机 BZT 快速切换性能矩阵',
      ja: '3. ATS / BZT 性能対比表',
      es: '3. Matriz Comparativa: ATS Clase PC vs Clase CB vs BZT',
    },
    tableHeaders: {
      en: ['Performance Metric', 'Class PC ATS (Integrated Double-Throw)', 'Class CB ATS (Dual Breakers)', 'Microprocessor Fast BZT System'],
      zh: ['核心性能指标', 'PC 级 ATS (一体化双投专用品)', 'CB 级 ATS (双断路器组合型)', '微机快速备自投系统 (BZT)'],
      ja: ['性能指標', 'PC級 ATS', 'CB級 ATS', '高速BZTシステム'],
      es: ['Parámetro', 'ATS Clase PC', 'ATS Clase CB', 'Sistema Rápido BZT'],
    },
    tableRows: {
      en: [
        ['Voltage Class', 'Low Voltage (0.4 kV – 0.69 kV)', 'Low Voltage (0.4 kV)', 'Medium & High Voltage (6 kV – 35 kV)'],
        ['Transfer Time ($t$)', '30 ms – 100 ms (Fast Electromagnetic)', '200 ms – 500 ms (Motorized Breakers)', '< 100 ms (Fast In-Phase Switching)'],
        ['Short-Circuit Withstand', 'High Icw (Up to 100 kA / 0.1s)', 'Governed by MCCB breaking rating (Icu)', 'Governed by VCB (31.5 kA / 40 kA / 4s)'],
        ['Nuisance Trip on Motor Inrush', 'Zero Nuisance Trip (No internal trip)', 'Risk of Overcurrent Tripping', 'Zero (Protected by 2nd harmonic restraint)'],
        ['Interlocking Reliability', 'Inherent Mechanical Deadbolt Double-Throw', 'External Mechanical Tie-Rod & Electrical', 'Microprocessor Relay Logic + Hardwired'],
        ['Typical Applications', 'Data Center PDUs, Hospital Operating Rooms', 'Secondary Distribution Panels, HVAC', 'Central MV Infeed Substations, Power Plants'],
      ],
      zh: [
        ['适用电压等级', '低压 (0.4 kV ～ 0.69 kV)', '低压 (0.4 kV)', '中高压 (6 kV ～ 35 kV 成套柜)'],
        ['动作切换时间 ($t$)', '30 ms ～ 100 ms (电磁极速切换)', '200 ms ～ 500 ms (电机储能慢速)', '< 100 ms (微机同相位快速切换)'],
        ['短时耐受能力 (Icw)', '高耐受 (可达 100 kA / 0.1秒)', '受限于断路器分断能力 (Icu)', '取决于真空断路器 (31.5kA / 40kA / 4秒)'],
        ['电机启动涌流误跳闸', '零误跳闸 (无内置过流脱扣)', '存在过流脱扣误断电风险', '零误动作 (微机谐波制动闭锁)'],
        ['闭锁可靠性', '本体固有机械死区双投结构', '外置机械连杆 + 二次电气双闭锁', '微机逻辑闭锁 + 硬接点电气双重闭锁'],
        ['典型应用场景', '数据中心列头柜、医院手术室、机房', '普通照明动力配电、排风水泵', '总降压变电站、热电厂、半导体主站'],
      ],
      ja: [
        ['適用電圧', '低圧 (0.4kV)', '低圧 (0.4kV)', '中高圧 (6kV〜35kV)'],
        ['切替時間', '30〜100 ms（高速）', '200〜500 ms', '< 100 ms（同位相）'],
        ['耐短絡電流', '最大 100 kA', 'MCCB定格に依存', '最大 40 kA (4s)'],
        ['主な用途', 'データセンター・病院', '一般ビル・照明', '高圧受電変電所・プラント'],
      ],
      es: [
        ['Nivel de Tensión', 'Baja Tensión (0.4 kV - 0.69 kV)', 'Baja Tensión (0.4 kV)', 'Media Tensión (6 kV - 35 kV)'],
        ['Tiempo de Transferencia', '30 ms - 100 ms (Electromagnético)', '200 ms - 500 ms', '< 100 ms (Rápido en fase)'],
        ['Resistencia al Cortocircuito', 'Hasta 100 kA / 0.1s', 'Limitada por poder de corte MCCB', '31.5 kA / 40 kA (Interruptor VCB)'],
        ['Aplicaciones', 'CPD / Data Centers, Hospitales', 'Distribución Secundaria', 'Subestaciones Principales MT'],
      ],
    },
    sec4Title: {
      en: '4. Critical Power Architecture Guidelines for Mission-Critical Facilities',
      zh: '4. 关键负荷供电架构设计与发电机智能并机决策',
      ja: '4. 非常用電源システム設計ガイドライン',
      es: '4. Directrices de Diseño para Infraestructuras Críticas',
    },
    scenarios: {
      en: [
        {
          title: 'Tier IV Data Center Server Hall Distribution',
          recommend: 'Dual-Path (2N Architecture) with Class PC ATS at Floor PDU Level',
          reason: 'Provides zero single points of failure and isolated redundant feeds for dual-corded servers.',
        },
        {
          title: 'Hospital Emergency Life-Safety Branches',
          recommend: 'Utility + Diesel Gen-set ATS with Closed-Transition (< 100ms Overlap)',
          reason: 'Enables monthly generator load testing without interrupting life support systems.',
        },
      ],
      zh: [
        {
          title: 'Tier IV 国际标准数据中心服务器机房配电',
          recommend: '采用 2N 容错双路供电架构，在末端精密配电列头柜（PDU）配置 PC 级 ATS',
          reason: '消除任何单点故障（SPOF），为双电源服务器提供相互物理隔离的独立供电通路。',
        },
        {
          title: '三甲医院生命支持系统与手术室应急保障',
          recommend: '市电 + 应急柴油发电机闭环同期切换系统（封闭式无扰动重合）',
          reason: '支持每月定期的发电机带载测试，测试回切过程中不发生任何瞬间断电。',
        },
      ],
      ja: [
        {
          title: 'Tier IV データセンター',
          recommend: '2N冗長構成＋末端PDUにPC級ATSを採用',
          reason: '単一障害点を排除し、完全な給電二重化を担保。',
        },
        {
          title: '病院の生命維持・手術室電源',
          recommend: '無瞬断閉路切替（Closed-Transition）対応システム',
          reason: '非常用発電機の定期負荷試験時も瞬低・停電を発生させない。',
        },
      ],
      es: [
        {
          title: 'Centros de Datos Tier IV',
          recommend: 'Arquitectura 2N Redundante con ATS Clase PC en Cuadros PDU',
          reason: 'Elimina puntos únicos de fallo garantizando disponibilidad del 99.995%.',
        },
        {
          title: 'Quirófanos y Salas Críticas de Hospitales',
          recommend: 'Transferencia en Transición Cerrada (Sin Corte)',
          reason: 'Permite pruebas mensuales de grupos electrógenos sin cortes de energía.',
        },
      ],
    },
    ctaTitle: {
      en: 'Request Dual-Power ATS & Fast BZT Control Schematics',
      zh: '获取双电源 ATS、微机备自投（BZT）二次控制原理图与设备选型报价',
      ja: 'ATS / BZT 制御回路図面・見積のご請求',
      es: 'Solicitar Esquemas de Control ATS y Sistemas BZT',
    },
    ctaDesc: {
      en: 'Feichi Critical Power Group (led by Henry) provides complete generator synchronizing logic, ATS sizing, and formal technical proposals within 24 hours.',
      zh: '飞驰电气关键电源技术团队将在 24 小时内为您提供发电机并机二次控制图、ATS 级差校验报告与成套报价单。',
      ja: '飛馳電気技術チームが24時間以内に制御系統図面および詳細提案書を提出します。',
      es: 'El equipo de Feichi entregará esquemas de control y cotización en 24 horas.',
    },
  },
  {
    id: 'week-13',
    week: 13,
    slug: 'ktp-substation-siberia-gost-selection-guide',
    category: 'substation',
    categoryLabel: {
      en: 'Prefabricated Substation & Siberian Climate Engineering',
      zh: '极寒箱变与西伯利亚工程选型',
      ja: '極寒冷地変電所・シベリア仕様',
      es: 'Subestaciones para Climas Extremos de Siberia y CEI',
    },
    title: {
      en: 'Prefabricated Compact Substations (KTP / 2KTPN) for Siberian & CIS Extreme Climates: GOST 15150-69 UHL1 Engineering Selection Guide (-60°C to +40°C)',
      zh: '极寒与独联体工况预装式变电站（КТП/2КТПН）：ГОСТ 15150-69 УХЛ1 标准工程选型与西伯利亚油气矿山严苛环境技术白皮书',
      ja: 'シベリア・CIS極寒環境対応変電所（KTP / 2KTPN）：GOST 15150-69 UHL1 規格技術ガイド（-60℃〜+40℃）',
      es: 'Subestaciones Compactas (KTP / 2KTPN) para Climas Extremos de Siberia y CEI: Guía de Selección GOST 15150-69 UHL1 (-60°C a +40°C)',
    },
    eyebrow: {
      en: 'FE-CIS-13 / ГОСТ УХЛ1 COLD-CLIMATE ENGINEERING',
      zh: 'FE-CIS-13 · 俄罗斯与独联体 ГОСТ УХЛ1 极寒配电规范',
      ja: 'FE-CIS-13 · ロシア・CIS極寒環境(GOST UHL1)配電仕様',
      es: 'FE-CIS-13 · ESPECIFICACIÓN CLIMA EXTREMO GOST UHL1',
      ru: 'FE-CIS-13 · ГОСТ 15150-69 УХЛ1 СИБИРЬ И СЕВЕРНЫЙ КЛИМАТ',
    },
    author: {
      en: 'Feichi Power Heavy Industry Engineering Dept (Lead: Henry / CIS Operations)',
      zh: '飞驰电气重工技术工程部（总工/外贸对接人：Henry）',
      ja: '飛馳電気 重工業技術部門（担当：Henry）',
      es: 'Departamento Técnico de Industria Pesada Feichi (Lead: Henry)',
    },
    standards: 'ГОСТ 15150-69 (УХЛ1 / ХЛ1), ГОСТ 14695-80, ГОСТ 14693-90, ТР ТС 004/2011, ТР ТС 012/2011',
    readTime: {
      en: '15 Min Read',
      zh: '15 分钟深度阅读',
      ja: '所要時間：15分',
      es: '15 Min de Lectura',
    },
    summary: {
      en: 'In-depth technical breakdown of prefabricated transformer substations (KTP/2KTPN) engineered for Siberian permafrost, oilfields, and open-pit mining. Details thermal insulation enclosures (100mm PU sandwich), automatic PTC pre-heating de-icing systems, vacuum circuit breakers rated for -60°C, and standardized Russian Oprosny List integration.',
      zh: '深度解析专为西伯利亚永久冻土带、大型油气田与露天煤矿定制的 КТП / 2КТПН 预装式变电站工程方案。涵盖 100mm 阻燃聚氨酯保温舱体、PTC 智能梯级预热除湿系统、-60°C 极低温特种真空断路器选型及俄标《Опросный лист》（选型问卷）实战指南。',
      ja: 'シベリア永久凍土、油田、炭鉱向けKTP/2KTPN変電所の技術解説。100mm断熱構造、PTC自動予熱除湿、-60℃対応真空遮断器、GOST規格選定要領を網羅。',
      es: 'Guía técnica exhaustiva sobre subestaciones KTP/2KTPN para condiciones extremas de Siberia y minería de la CEI, aislamiento térmico de 100mm y normativa GOST.',
    },
    sec1Title: {
      en: '1. Climatic Category UHL1 / HL1 & Thermal Insulation Architecture (ГОСТ 15150-69)',
      zh: '1. 气候环境等级 УХЛ1 / ХЛ1 与舱体超厚复合保温架构（ГОСТ 15150-69）',
      ja: '1. 耐環境規格 UHL1 / HL1 と超高断熱キャビン構造（GOST 15150-69）',
      es: '1. Categoría Climática UHL1 / HL1 y Arquitectura Térmica Reforzada (GOST 15150-69)',
    },
    sec1Text: {
      en: `Substations deployed across Siberia, the Russian Far East, and Kazakhstan encounter ambient temperatures dipping to -60°C alongside severe snowdrifts and permafrost ground shifting. Standard IEC tropicalized enclosures fail rapidly due to seal embrittlement, oil condensation, and mechanism freezing.

Feichi KTP / 2KTPN substations employ a specialized ГОСТ 15150-69 УХЛ1 architectural design:
• Double-Wall Thermal Enclosure: Fabricated from 2.0mm hot-dip galvanized or Cor-Ten weather-resistant steel with an internal 100mm fire-retardant polyurethane / mineral wool sandwich core ($K \le 0.38\,\text{W}/(\text{m}^2\cdot\text{K})$).
• Anti-Permafrost Heavy Skid Base: Rigid structural channel beam sled base (I-Beam 200–300mm) with corrosion-resistant zinc thermal spray ($\ge 120\,\mu\text{m}$) capable of direct placement on compacted gravel or screw-pile foundations without deep civil excavations.
• Hermetic Labyrinth Sealing: Triple-barrier fluorosilicone gaskets retain elasticity down to -65°C, ensuring IP54 ingress protection against blowing Arctic snow dust.`,
      zh: `部署于俄罗斯西伯利亚、远东高寒带及哈萨克斯坦北部等严寒地区的变电站，面临冬季最低 -60°C 的极低温、强暴风雪及永久冻土沉降挑战。普通标准外壳在此类环境下极易出现密封圈脆化龟裂、绝缘油粘度剧增、机构润滑脂固化卡涩以及柜内大面积凝露闪络。

飞驰电气 КТП / 2КТПН 极寒型箱变严格遵照 ГОСТ 15150-69（УХЛ1 / ХЛ1 类环境）设计：
• 双层重工保温舱体：外壳采用 2.0mm 热浸镀锌耐候钢板，内嵌 100mm 阻燃高密度聚氨酯/岩棉夹芯隔热层，传热系数 $K \le 0.38\,\text{W}/(\text{m}^2\cdot\text{K})$，隔绝极寒热桥。
• 冻土专用抗沉降重载雪橇底座：采用 200~300mm 重型工字钢焊接整体橇座，全表面热喷锌防腐层厚度 $\ge 120\,\mu\text{m}$，可直接置于碎石垫层或螺旋钢管桩基上，无需高昂的深坑土建。
• 氟硅三道迷宫式密封：耐 -65°C 超低温特种氟硅橡胶发泡密封条，具备永久弹性回弹，确保全天候 IP54 防吹雪暴防护等级。`,
      ja: `シベリア・極寒地仕様のKTP/2KTPN変電所は、GOST 15150-69 UHL1に準拠。100mm厚ウレタン断熱パネル、耐凍土Iビームベースフレーム、-65℃対応特殊フッ素シリコンパッキンを採用し、-60℃の極寒環境下でも内部結露や機構凍結を完全防止します。`,
      es: `Las subestaciones KTP/2KTPN para Siberia cumplen la norma GOST 15150-69 UHL1 con envolvente aislada de 100mm de poliuretano ignífugo, base trineo reforzada para permafrost y juntas de fluorosilicona para -65°C.`,
    },
    sec2Title: {
      en: '2. Multi-Stage Intelligent PTC Pre-Heating & Microclimate Management',
      zh: '2. 智能多梯级 PTC 自动预热与温湿度微气候管理系统',
      ja: '2. 多段階インテリジェントPTC予熱および湿度制御システム',
      es: '2. Sistema Inteligente de Precalentamiento PTC y Gestión de Microclima',
    },
    sec2Text: {
      en: `To guarantee instantaneous breaker tripping and digital relay reliability in -60°C weather, internal chamber temperatures must remain above -10°C at all times.

Feichi integrates an active dual-loop microclimate protection suite:
• Staged PTC Ceramic Heaters: High-voltage, transformer, and low-voltage compartments feature distributed 1.5kW–3.0kW PTC forced-air heaters. When ambient temperature drops below -20°C, secondary pre-heating loops activate automatically to maintain operating mechanisms at optimal lubricant viscosity.
• Intelligent Dehumidification & Air Flaps: Automatic motorized exhaust louvers close hermetically below -15°C to prevent cold air backdrafts, while microclimate controllers monitor dew-point curves to eliminate condensation during seasonal freeze-thaw cycles.
• Auxiliary Control Power Redundancy: Internal 220V AC heating circuits are supplemented by dual-source emergency power feeds (independent station service transformer + external standby generator infeed).`,
      zh: `为确保真空断路器在 -60°C 环境下随时具备可靠的合分闸弹簧动作速度，且微机继电保护装置液晶屏与电子元件不受超低温冻损，箱变内部各舱室工作温度必须维持在 -10°C 以上。

飞驰电气配备主动式双回路微气候防护系统：
• 梯级分舱 PTC 陶瓷电加热器：高压室、变压器室和低压室分别配置 1.5kW~3.0kW PTC 强排风加热器。当外界气温低于 -20°C 时，自动启动二次控制回路预热，确保弹簧操作机构润滑脂维持最佳粘度。
• 智能防结露除湿与电动气密风门：在室外气温低于 -15°C 时，进排风百叶风门自动电机严密闭合，防止外部冷风倒灌；微气候控制器实时根据露点曲线启动除湿，杜绝春秋冻融交替季的柜内凝露水滴。
• 辅助加热电源冗余备份：柜内 220V 辅助加热回路配备双回路冗余电源切换（站用变压器 + 外部自备应急发电机双进线）。`,
      ja: `内部空間を常に-10℃以上に維持するため、各室に1.5〜3.0kWのPTCセラミックヒーターを分散配置。外気温-15℃以下で電動ダンパーが自動密閉し、露点制御ヒーターにより結露を防止します。`,
      es: `Calefactores PTC cerámicos distribuidos de 1.5 a 3.0 kW con compuertas motorizadas herméticas mantienen los compartimentos por encima de -10°C evitando condensaciones y agarrotamientos mecánicos.`,
    },
    sec3Title: {
      en: '3. Engineering Parameter Comparison: Standard IEC KTP vs Feichi Siberian Extreme Class (2KTPN-УХЛ1)',
      zh: '3. 核心工程参数对比：标准普通预装式变电站 vs 飞驰西伯利亚极寒重工型（2КТПН-УХЛ1）',
      ja: '3. 技術仕様比較：標準型変電所 vs 飛馳シベリア極寒重工仕様（2KTPN-UHL1）',
      es: '3. Comparativa Técnica: Subestación Estándar vs Modelo Siberian Heavy-Duty Feichi (2KTPN-UHL1)',
    },
    tableHeaders: {
      en: ['Engineering Parameter', 'Standard Tropical/IEC Substation', 'Feichi Siberian Heavy-Duty Class (2KTPN-УХЛ1)', 'Russian / CIS Standard (ГОСТ)'],
      zh: ['工程技术参数', '普通标准型预装式变电站 (IEC)', '飞驰西伯利亚极寒重工型 (2КТПН-УХЛ1)', '俄罗斯与独联体准入标准 (ГОСТ)'],
      ja: ['技術項目', '標準IEC変電所', '飛馳シベリア仕様 (2KTPN-UHL1)', 'ロシア・CIS規格 (GOST)'],
      es: ['Parámetro Técnico', 'Subestación Estándar IEC', 'Feichi Serie Ártica Siberian (2KTPN-UHL1)', 'Normativa Rusia / CEI (GOST)'],
    },
    tableRows: {
      en: [
        ['Operating Ambient Range', '-25°C to +40°C', '-60°C to +40°C (Extended Arctic Range)', 'ГОСТ 15150-69 (Category УХЛ1 / ХЛ1)'],
        ['Enclosure Thermal Insulation', 'Single wall or 40mm EPS foam', '100mm High-Density Rigid PU Sandwich ($K \le 0.38$)', 'ГОСТ 14695-80 Cl. 3.2.1'],
        ['Switchgear Breaker Rating', 'Standard VCB (Rated min -25°C)', 'Low-temp vacuum interrupter with heated mechanism (-60°C)', 'ГОСТ 14693-90 / ГОСТ Р 55190'],
        ['Transformer Fluid / Insulation', 'Standard Mineral Oil (Pour point -15°C)', 'Low-viscosity Arctic Mineral Oil ТКП/ГК (Pour point $\le -45°C$) or Dry-Type ТСЗЛ', 'ГОСТ 52719-2007 / ГОСТ 982-80'],
        ['Permafrost Foundation Skid', 'Standard angle steel frame', 'Heavy-duty 200–300mm I-Beam sledge chassis ($\ge 120\mu m$ Zn spray)', 'Heavy snowdrift load $S_0 \ge 3.2\,\text{kPa}$'],
        ['Russian Engineering Questionnaire', 'Non-standard custom RFQ', 'Full compliance with Russian standard «Опросный лист»', 'Standard Rosseti / Minenergo Schema'],
      ],
      zh: [
        ['适用环境温度范围', '-25°C ～ +40°C', '-60°C ～ +40°C（极地超低温极值）', 'ГОСТ 15150-69 (УХЛ1 / ХЛ1 等级)'],
        ['外壳保温绝热厚度', '单层钢板或 30-40mm 普通聚苯板', '100mm 阻燃聚氨酯硬质夹芯 ($K \le 0.38\,\text{W}/\text{m}^2\cdot\text{K}$)', 'ГОСТ 14695-80 第 3.2.1 条要求'],
        ['中高压断路器耐寒性能', '普通真空断路器 (最低动作 -25°C)', '特种耐低温真空灭弧室 + 恒温预热操作机构 (-60°C 稳定分合闸)', 'ГОСТ 14693-90 / ГОСТ Р 55190'],
        ['变压器绝缘介质选型', '普通 25# 矿物绝缘油 (凝固点约 -15°C)', '极寒专用 ГК/ТКП 低粘度耐低温绝缘油 (凝固点 $\le -45°C$) 或 ТСЗЛ 干变', 'ГОСТ 52719-2007 / ГОСТ 982-80'],
        ['抗冻土与积雪底座设计', '常规角钢拼焊底盘', '200~300mm 重型工字钢雪橇整体橇座 (热喷锌防腐 $\ge 120\mu m$)', '抗雪荷载等级 $S_0 \ge 3.2\,\text{kPa}$'],
        ['技术选型协议规范', '非标英文 RFQ 沟通', '完全对齐俄罗斯主流设计院标准《Опросный лист》（选型问卷）', '符合全俄电网 Rosseti 标准格式'],
      ],
      ja: [
        ['使用周囲温度', '-25℃〜+40℃', '-60℃〜+40℃（極地仕様）', 'GOST 15150-69 (UHL1)'],
        ['キャビン断熱厚さ', '単層または40mm発泡スチロール', '100mm厚高密度硬質ウレタンパネル', 'GOST 14695-80'],
        ['開閉装置遮断器', '標準VCB（-25℃）', '耐低温真空遮断器＋ヒーター付（-60℃）', 'GOST 14693-90'],
        ['変圧器絶縁油', '標準鉱油（凝固点 -15℃）', '極寒仕様低粘度絶縁油（凝固点 -45℃以下）またはモールド乾式', 'GOST 52719-2007'],
        ['基礎構造', '標準アングル鋼ベース', '重構造Iビームソリ型ベース（重防食溶射）', '積雪荷重 3.2 kPa対応'],
        ['設計様式', '一般英文仕様書', 'ロシア標準「Опросный лист」完全対応', 'Rosseti規格準拠'],
      ],
      es: [
        ['Rango de Temperatura', '-25°C a +40°C', '-60°C a +40°C (Grado Ártico Extremo)', 'GOST 15150-69 (UHL1 / HL1)'],
        ['Aislamiento de Cabina', 'Pared simple o 40mm EPS', '100mm Poliuretano Rígido de Alta Densidad', 'GOST 14695-80'],
        ['Interruptores MT (VCB)', 'Estándar para -25°C', 'Cámaras de vacío criogénicas para -60°C con calefacción', 'GOST 14693-90'],
        ['Aceite / Aislamiento Trafo', 'Aceite Mineral Estándar', 'Aceite Ártico GK/TKP (Punto Fluidez $\le -45°C$) o Seco TSZL', 'GOST 52719-2007'],
        ['Base para Permafrost', 'Perfil de acero estándar', 'Chasis tipo trineo en viga I de 200-300mm con galvanizado', 'Carga de nieve $\ge 3.2\,\text{kPa}$'],
        ['Cuestionario de Diseño', 'Especificaciones generales', 'Conformidad total con «Опросный лист» ruso', 'Estándar Rosseti'],
      ],
    },
    sec4Title: {
      en: '4. Typical Application Scenarios in Siberia, CIS Oilfields & Heavy Mining',
      zh: '4. 西伯利亚、独联体油气能源田与重型矿山典型应用工程决策',
      ja: '4. シベリア・CIS油田・露天掘り鉱山での推奨構成',
      es: '4. Escenarios de Aplicación en Campos Petrolíferos y Minería de Siberia y CEI',
    },
    scenarios: {
      en: [
        {
          title: 'Permafrost Oil & Gas Wellfield Infeed (Yamal / Khanty-Mansiysk)',
          recommend: '2KTPN-1600/10/0.4-UHL1 with Dual TMGA Sealed Transformers + Heavy Skid Sled Base',
          reason: 'Ensures 100% redundant power for drilling ESP pumps with seamless relocation across frozen tundra without concrete foundations.',
        },
        {
          title: 'Kuzbass Open-Pit Coal Mine Excavator Substation',
          recommend: 'Mobile KTPN-1000/6/0.4-UHL1 with Extra Arc Venting (IAC AFLR) + Mechanical Interlocks',
          reason: 'Withstands extreme shock vibrations from mining haulers and blasting dust, directly matched to 6kV Russian dragline excavators.',
        },
      ],
      zh: [
        {
          title: '西伯利亚永久冻土油气田采油井群供电（亚马尔半岛 / 汉特-曼西斯克油气区）',
          recommend: '采用 2КТПН-1600/10/0.4-УХЛ1 双变箱变 + 极寒重载雪橇底座 + ТМГ 油浸密封变压器',
          reason: '为潜油电泵群提供 100% 冗余可靠供电，无需浇筑深基坑混凝土，可随井区调整用重载牵引车直接拖拽转移。',
        },
        {
          title: '库兹巴斯（Кузбасс）露天煤矿与大型电铲供电系统',
          recommend: '移动式 КТПН-1000/6/0.4-УХЛ1 防震型箱变 + 6kV 俄标中压接口 + IAC AFLR 内部燃弧泄压舱',
          reason: '承受矿区重型自卸车碾压震动与爆破粉尘冲击，专配 6kV 俄罗斯电网标准接口，直接驱动大型重型采掘设备。',
        },
      ],
      ja: [
        {
          title: 'ヤマル半島・シベリア油ガス田掘削設備給電',
          recommend: '2KTPN-1600/10/0.4-UHL1 ダブルトランス仕様＋ソリ型ベース',
          reason: '基礎工事不要で凍土上を牽引移動可能。給電冗長性を100%確保。',
        },
        {
          title: 'クズバス露天掘り炭鉱・大型油圧ショベル給電',
          recommend: '移動式 KTPN-1000/6/0.4-UHL1 6kVロシア規格対応仕様',
          reason: '発破振動・粉塵に耐え、6kV鉱山重機へ直接高信頼給電。',
        },
      ],
      es: [
        {
          title: 'Campos Petrolíferos de Permafrost en Siberia (Península de Yamal)',
          recommend: '2KTPN-1600/10/0.4-UHL1 con Transformadores Sellados TMGA y Base Trineo',
          reason: 'Suministro redundante para bombas sumergibles sin cimentación profunda de hormigón.',
        },
        {
          title: 'Minería de Carbón a Cielo Abierto en Kuzbass',
          recommend: 'KTPN-1000/6/0.4-UHL1 Móvil con Interconexión 6kV y Protección IAC AFLR',
          reason: 'Resiste vibraciones severas de voladuras y se conecta directamente a maquinaria minera rusa de 6kV.',
        },
      ],
    },
    hasCalculator: 'sld',
    ctaTitle: {
      en: 'Download Russian Standard «Опросный лист» or Request KTP/2KTPN CAD Drawings',
      zh: '下载俄罗斯标准《Опросный лист》（选型问卷）或获取 КТП/2КТПН 全套俄语工程 CAD 图纸',
      ja: 'ロシア標準「Опросный лист（選定問診票）」ダウンロードおよびKTP/2KTPN図面請求',
      es: 'Descargar Cuestionario Ruso «Опросный лист» o Solicitar Planos CAD para KTP/2KTPN',
    },
    ctaDesc: {
      en: 'Feichi CIS Technical Division (Lead: Henry) provides formal Russian-language Oprosny List templates, single-line diagrams, and turnkey commercial proposals for utility and mining EPCs within 24 hours.',
      zh: '飞驰电气独联体技术工程部（总工/外贸对接人：Henry）将在 24 小时内为您提供标准俄语版《Опросный лист》、全套单线图与俄标 КТП 技术协议草案。',
      ja: '飛馳電気CISエンジニアリング部門が24時間以内にロシア語版Опросный листおよびCAD単線結線図を提出します。',
      es: 'El departamento técnico de Feichi entregará el cuestionario técnico en ruso y planos CAD completos en 24 horas.',
    },
  },
  {
    id: 'week-14',
    week: 14,
    slug: 'ehouse-prefabricated-modular-substation-engineering-guide',
    category: 'substation',
    categoryLabel: {
      en: 'E-House & Modular Substation Systems',
      zh: '预制舱式模块化变电站 (E-House / БМЗ)',
      ja: 'E-House・モジュール式変電所',
      es: 'Sistemas E-House y Subestaciones Modulares',
    },
    title: {
      en: '35kV & 110kV Prefabricated Modular Substation (E-House / БМЗ): Turnkey Architecture, Internal Arc IAC-AFLR Safety & Dual IEC/GOST Compliance for Global Mining & Renewable EPC Projects',
      zh: '35kV/110kV 预制舱式模块化变电站（E-House / БМЗ）：交钥匙集成架构、IAC-AFLR 内部燃弧安全与 IEC/ГОСТ 双标认证工程落地指南',
      ja: '35kV/110kV プレハブ型モジュール変電所（E-House / БМЗ）：ターンキー統合構造・アーク安全IAC-AFLR・IEC/GOST両規格適合設計ガイド',
      es: 'Subestaciones Modulares Prefabricadas E-House / БМЗ de 35kV/110kV: Arquitectura Llave en Mano, Seguridad de Arco IAC-AFLR y Cumplimiento Dual IEC/GOST',
    },
    eyebrow: {
      en: 'FE-SPEC-14 / MODULAR E-HOUSE & SUBSTATION DOSSIER',
      zh: 'FE-SPEC-14 · 预制舱式模块化变电站工程选型指南',
      ja: 'FE-SPEC-14 · E-Houseモジュール変電所設計ドシエ',
      es: 'FE-SPEC-14 · EXPEDIENTE DE SUBESTACIÓN MODULAR E-HOUSE',
      ru: 'FE-SPEC-14 · БЛОЧНО-МОДУЛЬНЫЕ ЗДАНИЯ БМЗ / E-HOUSE 35-110 кВ',
    },
    author: {
      en: 'Feichi Modular EPC & Heavy Industry Engineering Dept (Lead: Henry)',
      zh: '飞驰电气模块化 EPC 与重工工程部（总工/外贸对接人：Henry）',
      ja: '飛馳電気 モジュールEPC・重工業技術部門（担当：Henry）',
      es: 'Departamento Técnico de EPC Modular Feichi (Lead: Henry)',
    },
    standards: 'IEC 62271-202, IEC 62271-200, ГОСТ 14695-80, ГОСТ 15150-69 (УХЛ1), IEEE C37.20.2, ТР ТС 004/2011',
    readTime: {
      en: '16 Min Read',
      zh: '16 分钟深度阅读',
      ja: '所要時間：16分',
      es: '16 Min de Lectura',
    },
    summary: {
      en: 'Comprehensive technical blueprint for 35kV/110kV Prefabricated Electrical Houses (E-House / БМЗ). Covers structural skid engineering, 2-hour fire-rated composite cladding, integrated medium/low voltage GIS/AIS switchgear, active microclimate HVAC, IEC 61850 & GOST R MEK 60870-5-104 SCADA telemetry, and rapid site commissioning reducing on-site civil works by over 75%.',
      zh: '系统拆解面向全球新能源升压站、跨国矿山及极寒油气田的 35kV/110kV 预制舱式变电站（E-House / БМЗ）工程体系。深度涵盖重载一体化钢结构底座、2小时耐火等级复合保温板、中高压成套 GIS/AIS 开关柜集成、恒温除湿主动微气候系统及 IEC 61850 / 俄标 MEK 104 远动监控，帮助 EPC 缩减 75% 以上现场土建周期。',
      ja: '35kV/110kV プレハブ型E-House（BMZ）の技術設計書。重構造スキッド、2時間耐火パネル、GIS/AISスイッチギア統合、IEC 61850遠隔監視システムを解説し、現地工期を75%短縮するターンキーソリューションを提示。',
      es: 'Guía técnica integral para subestaciones modulares E-House (БМЗ) de 35kV/110kV. Aislamiento ignífugo de 2 horas, integración de celdas MT/BT, control microclimático y reducción del 75% en obra civil.',
    },
    sec1Title: {
      en: '1. Turnkey Modular Structural Architecture & Fast-Track Foundation Engineering',
      zh: '1. 交钥匙模块化结构架构与极速免深坑基础工程',
      ja: '1. ターンキーモジュール構造と省力化基礎設計',
      es: '1. Arquitectura Modular Llave en Mano e Ingeniería de Cimentación Rápida',
    },
    sec1Text: {
      en: `Traditional on-site concrete substations require months of complex civil engineering, extensive masonry, and lengthy equipment cabling under harsh weather conditions. The Prefabricated Electrical House (E-House / БМЗ - Блочно-модульное здание) revolutionizes power infrastructure by delivering factory-assembled, fully tested, and pre-commissioned plug-and-play substation modules directly to site.

Key engineering highlights of Feichi E-House systems:
• Heavy-Duty Structural Skid Base: Welded from high-yield structural steel beams (Q355B / 09G2S for Siberian cold climates) capable of single-point crane lifting or multi-point hydraulic jacking. The base includes integrated bottom cable raceways, copper grounding grids ($\ge 50\times 5\,\text{mm}$), and vibration-damped transformer mounting pads.
• Multi-Layer Insulated Enclosure: External 2.0mm–3.0mm Cor-Ten or hot-dip galvanized steel sheet with an internal core of 100mm–150mm non-combustible rockwool or rigid PIR sandwich panels ($K \le 0.32\,\text{W}/(\text{m}^2\cdot\text{K})$). Provides EI 120 (2-hour fire endurance) and IP55 weather sealing against extreme sandstorms, heavy blizzards, and chemical fumes.
• Skid-Mount / Screw-Pile Foundation Compatibility: Eliminates massive concrete basements; E-Houses can be installed directly onto engineered screw piles, precast concrete sleeper pads, or level gravel beds, slashing on-site installation schedules from 6 months to under 15 days.`,
      zh: `传统的现场土建现浇变电站面临工期冗长（通常需 6~9 个月）、受恶劣雨雪冰冻天气影响大、现场二次接线工作量繁复等痛点。预制舱式模块化变电站（E-House / 俄语区称 БМЗ - Блочно-модульное здание）将所有高低压成套开关柜、变压器、继电保护屏、直流屏、UPS 及自动化监控系统在工厂内完成 100% 组装、联调与预出厂测试，实现“整舱吊装、即插即用”。

飞驰电气 E-House 核心结构优势：
• 重载整体钢构橇座（Skid Base）：采用 Q355B 或耐 -60°C 极低温特种合金钢（09Г2С）工字钢全焊接架构，具备多点起吊与液压顶升刚度。底座内置防鼠防虫电缆夹层、$\ge 50\times 5\,\text{mm}$ 镀锡铜接地母线排及减震变压器导轨。
• 多重复合保温围护结构：外蒙皮采用 2.0~3.0mm 耐候耐蚀热浸镀锌钢板，内嵌 100~150mm 不燃高密度憎水岩棉或阻燃 PIR 夹芯层（传热系数 $K \le 0.32\,\text{W}/(\text{m}^2\cdot\text{K})$），具备 EI 120（2小时耐火极限）与 IP55 工业级密封，严密阻隔沙尘暴、极寒暴雪与化工酸碱腐蚀。
• 免深坑桩基快速就位：支持直接架设在预制混凝土条形基础、螺旋钢管桩基或夯实碎石垫层上，无需复杂深挖地坑，使海外 EPC 项目现场通电周期缩减 75% 以上。`,
      ja: `従来のコンクリート建屋変電所と比較し、工場内で高低圧盤・変圧器・制御システムを100%実装・試験完了して出荷するE-House（BMZ）は、現地据付期間を数ヶ月から約2週間に短縮。耐寒鋼材（-60℃対応）と2時間耐火パネルにより、鉱山や砂漠環境でも卓越した信頼性を発揮します。`,
      es: 'La subestación modular E-House (БМЗ) llega completamente integrada y probada de fábrica. Su chasis reforzado de acero estructural y cerramiento de lana de roca de 100-150mm (EI 120) permiten montaje sobre pilotes en menos de 15 días, eliminando la obra civil pesada.',
    },
    sec2Title: {
      en: '2. Ormazabal & Lucy Electric Benchmark: Internal Arc Safety (IAC-AFLR) & SCADA Telemetry Integration',
      zh: '2. 对标国际标杆（Ormazabal & Lucy Electric）：IAC-AFLR 内部燃弧安全与 IEC 61850 自动化监控',
      ja: '2. 欧州先進基準ベンチマーク：アーク安全性（IAC-AFLR）およびIEC 61850遠隔監視統合',
      es: '2. Benchmark Ormazabal y Lucy Electric: Seguridad de Arco IAC-AFLR y Telemetría SCADA',
    },
    sec2Text: {
      en: `Benchmarking leading European manufacturers such as Ormazabal (modular GIS architecture) and Lucy Electric (automation & secondary distribution control), Feichi E-House substations integrate state-of-the-art personnel safety and intelligent telemetry systems:

• Internal Arc Classification IAC-AFLR (31.5kA / 1s): In the rare event of an internal short-circuit arc, integrated top-venting arc ducts and pressure relief flaps channel superheated ionized gases vertically upwards through dedicated exhaust stacks, protecting maintenance personnel stationed around all four sides (Front, Lateral, Rear).
• Complete Primary & Secondary Compartmentalization: Form 4b / Class LSC2B-PM metal-clad partitioning guarantees physical isolation between busbar compartments, circuit breaker drawout carriages, and cable termination vaults.
• Dual-Protocol SCADA Gateway: Microprocessor relays connect via redundant optical Ethernet rings supporting native IEC 61850 (GOOSE / MMS), DNP3, and Russian GOST R MEK 60870-5-104 telemetry, providing real-time harmonic analysis, breaker mechanical life counters, and predictive partial discharge (PD) acoustic monitoring.`,
      zh: `全面对标西欧顶级配电巨头 Ormazabal（模块化气体绝缘气体柜 GIS）与 Lucy Electric（自动化开关与环网供电技术），飞驰电气预制舱在人身电气安全与智能化监控领域确立了行业领先标准：

• 最高安全等级 IAC-AFLR 内部燃弧泄压（31.5kA / 1s）：在极端柜内短路燃弧工况下，舱体顶部配置专用泄压风道与定向防爆膜，将超高温电弧气体垂直向上导引排出，全方位保护舱内外运维人员（AFLR：前、侧、后全方位防电弧）。
• 严格金属铠装隔离（LSC2B-PM / Form 4b）：母线室、断路器手车室及电缆出线室之间采用厚壁镀锌钢板独立物理分隔，单间隔检修时相邻运行回路完全不受干扰。
• 国际/俄标双规远动 SCADA 网关：微机保护装置与测控单元基于冗余光纤自愈环网通信，全面支持原生 IEC 61850（GOOSE / MMS 报文）以及俄罗斯国家电网专用的 ГОСТ Р МЭК 60870-5-104 远动协议，集成电能质量谐波监测、断路器动作机械寿命预测及局放（PD）声光在线预警。`,
      ja: 'OrmazabalやLucy Electricの設計基準を取り入れ、IAC-AFLR 31.5kA/1sアーク安全規格に適合。頂部放圧ダクトにより作業者を保護し、IEC 61850 / GOST 104デュアルプロトコルによりSCADA遠隔制御を標準装備します。',
      es: 'Incorporando estándares de Ormazabal y Lucy Electric, las E-Houses Feichi cuentan con clasificación de arco interno IAC-AFLR 31.5kA/1s con ductos de despresurización vertical y pasarela SCADA compatible con IEC 61850 y GOST R MEK 60870-5-104.',
    },
    sec3Title: {
      en: '3. Technical Specification Matrix: E-House vs Traditional Civil Substation vs Standard Container',
      zh: '3. 核心技术参数对比：预制舱 E-House vs 传统土建变电站 vs 普通集装箱改装',
      ja: '3. 仕様比較：E-House vs 従来土建変電所 vs 汎用コンテナ改造品',
      es: '3. Matriz de Especificaciones Técnicas: E-House vs Subestación de Obra Civil vs Contenedor Estándar',
    },
    tableHeaders: {
      en: ['Engineering Parameter', 'Feichi Heavy-Duty E-House (БМЗ)', 'Standard Shipping Container Conversion', 'Traditional On-Site Civil Substation'],
      zh: ['工程技术指标', '飞驰重工预制舱式变电站 (E-House / БМЗ)', '普通海运集装箱简易改装', '传统现场土建现浇变电站'],
      ja: ['技術項目', '飛馳重工業仕様 E-House (BMZ)', '汎用海上コンテナ改造', '従来型現地土建変電所'],
      es: ['Parámetro Técnico', 'Feichi E-House Industrial Reforzada (БМЗ)', 'Contenedor Marítimo Modificado', 'Subestación Tradicional de Obra Civil'],
    },
    tableRows: {
      en: [
        ['Rated Voltage Class', '6 kV – 35 kV / 110 kV Modular Interface', 'Up to 24 kV only (Space Constrained)', '10 kV – 220 kV'],
        ['Internal Arc Rating', 'IAC-AFLR 31.5 kA / 1s (IEC 62271-200)', 'None / IAC-A only (High Hazard)', 'Dependent on building design'],
        ['Enclosure Fire Rating', 'EI 120 (2-Hour Non-Combustible Rockwool)', 'Unrated / PIR Foam (Combustible risk)', '2 – 3 Hours (Concrete/Masonry)'],
        ['Ambient Temperature', '-60°C to +55°C (ГОСТ 15150-69 УХЛ1)', '-20°C to +40°C (Prone to condensation)', '-30°C to +40°C (Requires heavy HVAC)'],
        ['On-Site Installation Time', '7 to 15 Days (Plug & Play Crane Hookup)', '10 to 20 Days', '180 to 270 Days (6–9 Months)'],
        ['Factory Testing Coverage', '100% Pre-Commissioned & High-Pot Tested', 'Partial mechanical assembly only', '0% (All testing on raw construction site)'],
        ['Seismic & Foundation', '9 Points MSK-64 / Screw-Pile Ready', '6 Points (Requires full flat pad)', 'Requires deep pile excavation & slab'],
        ['Certifications & Approvals', 'IEC 62271, CE, EAC (ТР ТС 004/012/020), ISO', 'Often lack formal type-test reports', 'Local civil permits only'],
      ],
      zh: [
        ['额定电压等级', '6 kV ~ 35 kV / 110 kV 模块化接口', '仅限 24 kV 以下（内部净空与绝缘间隙受限）', '10 kV ~ 220 kV'],
        ['内部燃弧安全等级', 'IAC-AFLR 31.5 kA / 1s（IEC 62271-200 全向泄压）', '无标准泄压通道 / 易发生舱体炸裂', '取决于土建泄爆窗与防爆墙设计'],
        ['围护耐火等级', 'EI 120（2小时不燃高密岩棉，GB 50016 / GOST 30247）', '无耐火分级 / 易燃聚氨酯存在火灾隐患', '2~3 小时（混凝土与砖混砌体）'],
        ['工作环境温度范围', '-60°C 至 +55°C（ГОСТ 15150-69 УХЛ1 极寒与热带沙漠）', '-20°C 至 +40°C（高湿环境极易内部滴水凝露）', '-30°C 至 +40°C（需配备大功率高耗能暖通）'],
        ['现场施工与通电周期', '7 ~ 15 天（吊装就位、电缆插接即投运）', '10 ~ 20 天', '180 ~ 270 天（6~9 个月繁重土建）'],
        ['出厂预联调测试比例', '100% 工厂通电联调、耐压与二次保护整定测试', '仅基础机械组装，现场二次接线量大', '0%（所有配电柜在未完工工地现场接线测试）'],
        ['抗震设防与基础要求', '9度烈度抗震（MSK-64），适配螺旋钢管桩基', '6度烈度，需整块混凝土平整硬化地面', '需深挖基坑、浇筑大体积钢筋混凝土筏板'],
        ['国际与独联体认证', 'IEC 62271, CE, EAC 海关联盟 (ТР ТС 004/012/020)', '通常缺乏第三方型式试验与防爆认证', '仅受限于项目当地地方性土建审批'],
      ],
      ja: [
        ['定格電圧', '6kV〜35kV / 110kVモジュール対応', '最大24kV（絶縁距離制約あり）', '10kV〜220kV'],
        ['アーク安全性能', 'IAC-AFLR 31.5kA/1s（全周防護）', '放圧構造なし（危険度高）', '建屋設計に依存'],
        ['耐火性能', 'EI 120（2時間不燃ロックウール）', '耐火認定なし', '2〜3時間（コンクリート構造）'],
        ['使用周囲温度', '-60℃〜+55℃（GOST UHL1極寒・砂漠仕様）', '-20℃〜+40℃（結露リスクあり）', '-30℃〜+40℃'],
        ['現地工期', '7〜15日（プラグアンドプレイ）', '10〜20日', '6〜9ヶ月（長期土建工事）'],
        ['工場試験網羅率', '100%工場通電・連動保護試験完了', '部分組立のみ', '0%（すべて現場試験）'],
        ['耐震性能', '震度9度（MSK-64）対応・杭基礎直結', '震度6度（フラット基礎必須）', '大規模基礎工事が必要'],
        ['国際規格認証', 'IEC 62271, CE, EAC (TR CU 004/012/020)', '型式試験報告書未取得が多数', '現地建築基準法のみ'],
      ],
      es: [
        ['Tensión Nominal', '6 kV a 35 kV / Interfaz Modular 110 kV', 'Hasta 24 kV máximo', '10 kV a 220 kV'],
        ['Seguridad de Arco', 'IAC-AFLR 31.5 kA / 1s (4 lados protegidos)', 'Sin ductos certificados', 'Dependiente del diseño de la sala'],
        ['Resistencia al Fuego', 'EI 120 (2 Horas de Lana de Roca Ignífuga)', 'No clasificado', '2 a 3 Horas (Mampostería)'],
        ['Rango de Temperatura', '-60°C a +55°C (GOST 15150-69 UHL1)', '-20°C a +40°C', '-30°C a +40°C'],
        ['Tiempo de Montaje', '7 a 15 Días', '10 a 20 Días', '180 a 270 Días (6 a 9 meses)'],
        ['Pruebas en Fábrica', '100% Probado y Parametrizado', 'Ensamble básico únicamente', '0% (Todo en obra)'],
        ['Resistencia Sísmica', '9 Puntos MSK-64 / Compatible Pilotes', '6 Puntos', 'Zapata de hormigón requerida'],
        ['Certificaciones', 'IEC 62271, CE, EAC (TR CU 004/012/020)', 'Carece de ensayos de tipo', 'Permisos locales'],
      ],
    },
    sec4Title: {
      en: '4. High-Value EPC Industrial Scenarios & Real-World Configuration Archetypes',
      zh: '4. 海外高客单价 EPC 典型工业场景选型与实装配置方案',
      ja: '4. 海外高付加価値EPC産業別代表的システム構成',
      es: '4. Escenarios Industriales EPC de Alto Valor y Arquetipos de Configuración',
    },
    scenarios: {
      en: [
        {
          title: 'Permafrost Open-Pit Mine Substation in Siberia / CIS (Norilsk & Yakutia)',
          recommend: 'Feichi Arctic E-House 35/6kV (2x2500kVA) with 150mm PIR Insulation & -60°C VCBs',
          reason: 'Mounted on heavy steel sleds atop screw piles to resist permafrost heave, equipped with dual PTC preheaters and GOST R MEK 60870-5-104 telemetry.',
        },
        {
          title: '200MW Desert Utility-Scale Photovoltaic Collector Substation (Middle East / Central Asia)',
          recommend: 'Turnkey E-House 33kV Switchgear Shelter with Redundant HVAC & Positive Pressure Ingress Protection',
          reason: 'Prevents fine sand dust infiltration with IP55 labyrinth filtration while maintaining internal temperatures below 30°C under 55°C ambient solar radiation.',
        },
        {
          title: 'Heavy Chemical / Petrochemical Refining Plant Secondary Distribution',
          recommend: 'Corrosion-Proof Cor-Ten E-House with C5-M Marine Coating & Gas-Insulated Switchgear (GIS)',
          reason: 'Hermetically sealed SF6/Solid insulated RMU blocks aggressive sulfur dioxide and hydrogen sulfide atmospheric corrosion.',
        },
      ],
      zh: [
        {
          title: '俄罗斯西伯利亚与极北露天采矿永久冻土区（诺里尔斯克 / 雅库特）',
          recommend: '飞驰极寒重工型 35/6kV E-House 预制舱（2×2500kVA，150mm 阻燃保温 + -60°C 特种断路器）',
          reason: '采用重型工字钢雪橇底座架设于螺旋桩基上，彻底克服冻土融沉破坏；配置双回路 PTC 预热与俄网 ГОСТ Р МЭК 60870 远动通讯。',
        },
        {
          title: '中东与中亚 200MW 大型沙漠光伏/风电升压汇集站',
          recommend: '交钥匙 33kV E-House 光伏汇集预制舱（配备 N+1 冗余工业精密空调与微正压防尘系统）',
          reason: '在室外 55°C 强烈日照及扬沙环境下，微正压系统杜绝细微硅砂侵入，维持柜内电子器件处于 25°C 最佳工作工况。',
        },
        {
          title: '大型重化工与石油炼化厂区二级高压配电所',
          recommend: '耐候钢 C5-M 级重防腐 E-House 预制舱（集成充气绝缘开关柜 GIS）',
          reason: '全密封气体绝缘开关柜与舱体 C5-M 涂层隔绝厂区二氧化硫、硫化氢等高腐蚀性气体，免维护运行寿命达 30 年以上。',
        },
      ],
      ja: [
        {
          title: 'シベリア・永久凍土帯露天鉱山変電所',
          recommend: '飛馳極寒仕様 35/6kV E-House（2×2500kVA、150mm断熱パネル・-60℃対応遮断器）',
          reason: '凍土融沈に対応する鋼製ソリ型ベースを採用し、PTC予熱およびGOST 104遠隔制御を完備。',
        },
        {
          title: '中東・中央アジア 200MW砂漠メガソーラー昇圧変電所',
          recommend: 'ターンキー 33kV E-House（N+1冗長空調・微正圧防塵システム）',
          reason: '外気温55℃の砂漠環境下でも微正圧防塵により砂塵の侵入を完全遮断。',
        },
        {
          title: '大型石油化学プラント高圧受変電設備',
          recommend: 'C5-M重防食塗装 E-House（GISガス絶縁開閉装置統合）',
          reason: '硫化水素や腐食性ガスを遮断し、30年以上のメンテナンスフリー運用を実現。',
        },
      ],
      es: [
        {
          title: 'Minería a Cielo Abierto en Permafrost de Siberia (Norilsk)',
          recommend: 'E-House Ártica Feichi 35/6kV (2x2500kVA) con Aislamiento de 150mm y VCB de -60°C',
          reason: 'Estructura trineo sobre pilotes para resistir el permafrost, doble calefacción PTC y protocolo GOST R MEK 60870-5-104.',
        },
        {
          title: 'Planta Solar Fotovoltaica de 200MW en Zonas Desérticas',
          recommend: 'E-House Llave en Mano para Celdas de 33kV con Climatización Redundante y Presión Positiva',
          reason: 'Evita la entrada de arena fina con filtración laberíntica y mantiene la temperatura por debajo de 30°C con 55°C exterior.',
        },
        {
          title: 'Refinería y Complejo Petroquímico Pesado',
          recommend: 'E-House en Acero Cor-Ten con Recubrimiento Marino C5-M y Celdas Aisladas en Gas (GIS)',
          reason: 'El aislamiento hermético protege contra la corrosión por ácido sulfhídrico y vapores químicos agresivos.',
        },
      ],
    },
    hasCalculator: 'sld',
    ctaTitle: {
      en: 'Download E-House Architectural CAD Layout & Request Custom Turnkey Proposal',
      zh: '获取 35kV/110kV E-House 预制舱全套建筑 CAD 平面图与交钥匙工程方案',
      ja: '35kV/110kV E-House CAD図面ダウンロードおよびターンキー提案請求',
      es: 'Descargar Planos CAD de Subestaciones Modulares E-House y Solicitar Propuesta Llave en Mano',
    },
    ctaDesc: {
      en: 'Feichi Modular EPC Engineering Division (Lead: Henry) provides full general arrangement drawings, single-line diagrams, foundation loading data, and customized technical specifications within 24 hours.',
      zh: '飞驰电气模块化 EPC 技术工程部（总工/外贸对接人：Henry）将在 24 小时内为您提供完整的舱体总布置图、电气单线图、基础荷载计算书与交钥匙报价方案。',
      ja: '飛馳電気モジュールEPCエンジニアリング部門が24時間以内に外形図、単線結線図、基礎荷重計算書を提出します。',
      es: 'El departamento técnico de EPC de Feichi entregará planos generales, diagramas unifilares y propuesta técnica y comercial en 24 horas.',
    },
  },
  {
    id: 'week-15',
    week: 15,
    slug: 'sf6-free-solid-air-insulated-ring-main-unit-rmu-guide',
    category: 'switchgear',
    categoryLabel: {
      en: 'MV Switchgear & Ring Main Units (RMU / КРУ / КСО)',
      zh: '中压环网柜与环保开关设备 (RMU / КРУ / КСО)',
      ja: '中圧スイッチギア・環境対応型RMU',
      es: 'Celdas de Media Tensión y Unidades Principales en Anillo (RMU)',
    },
    title: {
      en: 'SF6-Free Eco-Friendly Solid & Air-Insulated Ring Main Units (RMU / КРУЭ / КСО): Zero-GWP Vacuum Interrupter Tech, Sub-Zero (-50°C) Dielectric Reliability & Ormazabal / Lucy / TGOOD Benchmark for Global Grid Decarbonization',
      zh: '无六氟化硫（SF6-Free）绿色环保固体/干燥空气绝缘环网柜（RMU / КРУ / КСО）：真空灭弧技术、极寒 (-50°C) 介质可靠性与欧标/俄标电网去碳化工程指南',
      ja: 'SF6フリー環境配慮型 固体・乾燥空気絶縁リングメインユニット（RMU / КРУЭ）：真空遮断器技術・極寒（-50℃）絶縁信頼性および海外送配電網脱炭素化設計ガイド',
      es: 'Celdas en Anillo (RMU / GIS) Libres de SF6 con Aislamiento Sólido y Aire Seco: Tecnología de Corte en Vacío, Confiabilidad Bajo Cero (-50°C) y Guía de Descarbonización de Redes',
    },
    eyebrow: {
      en: 'FE-SPEC-15 / SF6-FREE ECO RMU & MV SWITCHGEAR DOSSIER',
      zh: 'FE-SPEC-15 · 无SF6环保环网柜与中压开关设备工程选型指南',
      ja: 'FE-SPEC-15 · SF6フリー環境対応RMU設計ドシエ',
      es: 'FE-SPEC-15 · EXPEDIENTE DE CELDAS ECOLÓGICAS SIN SF6',
      ru: 'FE-SPEC-15 · КРУ / КСО БЕЗ ЭЛЕГАЗА С ТВЕРДОЙ/ВОЗДУШНОЙ ИЗОЛЯЦИЕЙ (6-35 кВ, УХЛ1)',
    },
    author: {
      en: 'Feichi MV Switchgear & Eco-Grid Engineering Dept (Lead: Henry)',
      zh: '飞驰电气中压成套与绿色电网工程部（总工/外贸对接人：Henry）',
      ja: '飛馳電気 中圧成套・環境グリッド技術部門（担当：Henry）',
      es: 'Departamento Técnico de Celdas MT y Redes Ecológicas Feichi (Lead: Henry)',
    },
    standards: 'IEC 62271-200, IEC 62271-1, ГОСТ Р 55190-2012, ГОСТ 15150-69 (УХЛ1), ГОСТ 14693-90, EU F-Gas Regulation 2024/573, ТР ТС 004/2011',
    readTime: {
      en: '15 Min Read',
      zh: '15 分钟深度阅读',
      ja: '所要時間：15分',
      es: '15 Min de Lectura',
    },
    summary: {
      en: 'Comprehensive technical blueprint for 12kV, 24kV, and 40.5kV SF6-Free Eco-Friendly Ring Main Units (Solid Insulated Switchgear SIS and Technical Air GIS). Detailed analysis of epoxy resin phase encapsulation, zero greenhouse gas emissions (GWP=0), complete prevention of sub-zero SF6 gas liquefaction at -50°C in Siberian/Arctic grids, IAC-AFLR 20kA/1s internal arc containment, and seamless integration with IEC 61850 / GOST MEK 104 distribution automation.',
      zh: '系统解析面向全球去碳化电网、欧盟新F-Gas环保法规及俄罗斯/独联体高寒电网（УХЛ1 / -50°C）的 12kV/24kV/40.5kV 无SF6环保环网柜（固体绝缘环网柜 SIS 与干燥空气绝缘 GIS）技术体系。深入拆解环氧树脂单相全屏蔽固封极柱、真空灭弧室、完全杜绝极低温气体液化与漏气击穿、IAC-AFLR 20kA/1s 燃弧安全防护，以及 IEC 61850 / ГОСТ МЭК 104 配网自动化集成方案。',
      ja: '12kV/24kV/40.5kV対応のSF6フリー環境配慮型RMU（固体絶縁スイッチギアSIS・乾燥空気GIS）技術設計書。エポキシ樹脂完全モールド構造、GWP=0のゼロ温室効果ガス排出、シベリア極寒（-50℃）におけるガス液化破壊の完全排除、アーク耐性IAC-AFLR、IEC 61850スマートグリッド連携を網羅。',
      es: 'Guía técnica integral para Celdas en Anillo (RMU) de 12kV, 24kV y 40.5kV libres de gas SF6. Aislamiento sólido encapsulado en resina epoxi y aire seco, cero emisiones de gases invernadero (GWP=0), eliminación total del riesgo de licuefacción a -50°C en climas nórdicos y certificación de arco interno IAC-AFLR.',
    },
    sec1Title: {
      en: '1. Technological Transition: Why Global Grids and Sub-Zero CIS Projects Are Phasing Out SF6 Gas',
      zh: '1. 环保与极寒驱动的革命：全球电网与独联体高寒工程为何全面淘汰 SF6 气体',
      ja: '1. 技術転換の背景：世界的な脱炭素規制と極寒地域でのSF6全廃の必然性',
      es: '1. Transición Tecnológica: Por qué las Redes Globales y Proyectos Nórdicos Están Eliminando el SF6',
    },
    sec1Text: {
      en: `Sulfur Hexafluoride (SF6) has been the dominant insulating and arc-quenching medium in medium-voltage ring main units for over four decades due to its high dielectric strength. However, SF6 presents two catastrophic engineering and environmental vulnerabilities:
1. Extreme Global Warming Potential (GWP): SF6 has a GWP of 24,300 over 100 years and an atmospheric lifetime exceeding 3,200 years. The European Union F-Gas Regulation (EU 2024/573) mandates a complete ban on new MV electrical switchgear containing fluorinated greenhouse gases up to 24kV by 2026, and up to 145kV by 2030.
2. Sub-Zero Liquefaction & Dielectric Breakdown at -50°C: In Russia, Siberia, Kazakhstan, and Arctic mining grids (governed by GOST 15150-69 category УХЛ1), ambient temperatures drop below -40°C to -55°C. At these temperatures, SF6 gas liquefies inside sealed pressure tanks, causing chamber pressure to plummet below the minimum dielectric threshold and resulting in fatal internal arc flashovers.

Feichi Eco-Friendly Switchgear delivers two proven, Zero-SF6 solutions:
• Solid Insulated Switchgear (SIS / Твердая изоляция): Each phase’s vacuum interrupter, disconnector, and busbar are fully embedded in solid cycloaliphatic epoxy resin, coated with conductive semiconductive grounding paint. Phase-to-phase separation is 100% solid, eliminating all internal gas pressure monitoring and leak detection systems.
• Dry Air / Technical Air GIS (Осушенный воздух): Uses pure synthetic air (80% N2 + 20% O2, dew point $\le -60^\circ\text{C}$) combined with vacuum circuit breakers. Natural atmospheric air does not liquefy even at -60°C, providing unconditional dielectric stability across harsh climates.`,
      zh: `六氟化硫（SF6）气体凭借优异的绝缘和灭弧性能，在过去四十年统治了中压环网柜市场。然而在当前国际电力市场中，传统 SF6 开关设备面临两大不可逾越的技术与合规瓶颈：
1. 极高的温室效应（GWP）与全球环保法规禁令：SF6 的温室效应潜能值是二氧化碳的 24,300 倍，且在大气中寿命长达 3,200 年。欧盟最新 F-Gas 法规（EU 2024/573）明确规定：2026 年起全面禁止 24kV 及以下中压配电开关使用含氟温室气体，2030 年全面覆盖至 145kV；全球主要电力公用事业公司（Enel, Iberdrola, E.ON, State Grid）均已制定 SF6-Free 采购路线图。
2. 极寒工况（-40°C ~ -55°C）下的气体液化与绝缘击穿：在俄罗斯西伯利亚、远东、哈萨克斯坦等独联体高寒矿区（ГОСТ 15150-69 УХЛ1 极寒气候标准），冬季气温骤降至 -50°C。SF6 气体在密闭气箱内发生冷凝液化，气压骤降至临界绝缘阈值以下，极易引发恶性相间燃弧与爆炸事故。

飞驰电气针对上述痛点提供两大自主研发无氟环保架构：
• 固体绝缘环网柜（SIS 系列）：将真空灭弧室、三工位隔离开关、主母线通过高耐压环氧树脂（APG 自动压力凝胶工艺）实行单相全固封绝缘，外表面喷涂半导电屏蔽接地层。相与相之间完全物理隔离，无气体压力表，终身免维护且杜绝相间短路。
• 干燥空气绝缘环网柜（Clean Air GIS 系列）：采用环保合成干燥空气（80% N2 + 20% O2，露点 $\le -60^\circ\text{C}$）作为绝缘介质，配合特制长寿命真空灭弧室。干燥空气在 -60°C 极寒下绝不液化，完美契合极地油气田与风电升压站。`,
      ja: `SF6ガス（温暖化係数24,300）の全廃規制（EU F-Gas規制）およびロシア・シベリア等の極寒地域（-50℃）におけるガス液化破壊を解決するため、飛馳電気はエポキシ樹脂モールド固体絶縁（SIS）と乾燥空気絶縁（Clean Air）の2大エコスイッチギアを確立。完全気密・完全接地シールドにより、過酷環境でも30年以上のノーメンテナンス運転を実現します。`,
      es: 'Debido a las estrictas normativas ambientales globales (Reglamento F-Gas de la UE) y al problema crítico de licuefacción del gas SF6 a -50°C en regiones boreales, Feichi ha desarrollado celdas con aislamiento sólido (SIS) y aire seco (Clean Air) que garantizan cero emisiones (GWP=0) y máxima seguridad operativa sin riesgo de fugas.',
    },
    sec2Title: {
      en: '2. International Benchmarking (Ormazabal, Lucy Electric, TGOOD): Shielded Solid Phase Encapsulation & Vacuum Interrupter Innovation',
      zh: '2. 对标国际巨头（Ormazabal、Lucy Electric 与特锐德 TGOOD）：单相全屏蔽固封与真空灭弧创新',
      ja: '2. 先進グローバルブランド対比：単相完全シールド封入と高信頼度真空遮断構造',
      es: '2. Comparativa con Líderes Globales (Ormazabal, Lucy, TGOOD): Encapsulamiento Sólido Blindado y Corte en Vacío',
    },
    sec2Text: {
      en: `Benchmarking against international leaders in MV distribution switchgear:
• Ormazabal (Spain): Pioneer in secondary distribution RMU with over 1.5 million units installed globally. Ormazabal's latest cgm.zero24 family utilizes industrial clean air and vacuum technology. Feichi incorporates similar modular phase-plugging design and arc-proof pressure relief channels compliant with IEC 62271-200.
• Lucy Electric (UK): Renowned for the Aegis and Sabre RMU ranges. Lucy's designs excel in outdoor IP65 package enclosures and automated motor actuators. Feichi switchgear features hardened stainless-steel linkages, dual magnetic latch mechanisms, and motorized spring actuators operable down to -50°C.
• TGOOD (TELD): Global leader in modular prefabricated substations and solid-insulated switchgear. Feichi adopts modular pull-out solid-insulated cassettes with live-line capacitive indicators, integrated current/voltage sensors (LPIT per IEC 61869-10/11), and self-healing silicone rubber busbar connectors.

Key Feichi Solid Insulated RMU (SIS) Mechanical & Electrical Specifications:
1. Rated Voltage: 12kV / 24kV / 40.5kV (Rated Current: 630A / 1250A)
2. Rated Short-Time Withstand Current (Icw): 20kA/4s, 25kA/4s (Peak: 50kA / 63kA)
3. Internal Arc Classification: IAC AFLR 20kA / 1.0s (3-sided & 4-sided arc containment)
4. Protection Degree: High-voltage solid-sealed module IP67 (Fully Submersible), Enclosure IP4X / IP54 (Outdoor kiosk)
5. Mechanical Endurance: Circuit Breaker M2 Class (10,000 operations), Disconnector E3/M1 Class (2,000 operations)
6. Sub-Zero Operating Range: -50°C to +55°C (GOST 15150-69 УХЛ1 verified)`,
      zh: `对标国际中压开关行业三大标杆：
• 西班牙 Ormazabal（奥马扎宝）：全球中压二次配电环网柜巨头，其推出的 cgm.zero24 系列采用工业纯净干燥空气与真空灭弧技术。飞驰电气吸收其顶置母线快速快插式扩展架构与底部独立燃弧泄压通道设计，确保柜体达到严苛的 IAC AFLR 20kA/1s 内部燃弧等级。
• 英国 Lucy Electric：在户外重载 RMU（Aegis / Sabre 系列）及恶劣环境电动操作机构领域享誉全球。飞驰电气全系环保环网柜采用不锈钢传动连杆、双稳态永磁/弹簧操动机构，并配置耐 -50°C 专用特种润滑脂与 PTC 智能加热除湿模块。
• 中国特锐德（TGOOD）：箱变与固体绝缘开关领域的全球领跑者。飞驰电气采用模块化单相独立单元结构，每相集成高精度电子式电流/电压传感器（符合 IEC 61869-10/11 低功率互感器 LPIT 标准），母线连接采用屏蔽型可插拔硅橡胶绝缘母线筒，彻底消除相间短路与现场复杂电缆搭接。

飞驰电气环保固体绝缘环网柜（SIS）关键性能指标：
1. 额定电压：12kV / 24kV / 40.5kV（额定工作电流：630A / 1250A）
2. 额定短时耐受电流（Icw）：20kA/4s、25kA/4s（额定峰值耐受电流 Ip：50kA / 63kA）
3. 内部燃弧防护等级：IAC AFLR 20kA / 1.0s（正面、侧面、背面全方位防护）
4. 外壳及模块防护等级：高压固封导电回路 IP67（具备全绝缘全密封防洪淹能力），成套柜体外壳 IP4X / 户外箱体 IP54
5. 机械寿命：真空断路器达到 M2 级（10,000 次分合闸），三工位隔离开关达到 E3/M1 级（2,000 次操作）
6. 极寒运行适应性：-50°C ~ +55°C（通过俄罗斯 ГОСТ 15150-69 УХЛ1 极寒型式试验）`,
      ja: `欧州Ormazabal社、英Lucy Electric社、TGOOD社の先進構造をベンチマークし、飛馳電気は単相完全モールド・シリコンゴム母線接続・低消費電力センサー（LPIT）を統合。高圧充電部はIP67の完全防水・防塵仕様で、IEC 62271-200 IAC-AFLR 20kA/1sアーク試験をクリアしています。`,
      es: 'Siguiendo las mejores prácticas de Ormazabal, Lucy Electric y TGOOD, nuestras celdas ecológicas integran interruptores de vacío en módulos de resina apantallados con protección IP67, conectores de barra de caucho de silicona y actuadores probados para 10.000 maniobras (M2) hasta -50°C.',
    },
    sec3Title: {
      en: '3. Technical Comparison Matrix: SF6 Gas RMU vs Solid Shielded RMU (SIS) vs Dry Air Eco GIS',
      zh: '3. 技术参数与工程特性对比：传统 SF6 充气柜 vs 固体绝缘环网柜 (SIS) vs 干燥空气环保柜',
      ja: '3. 技術仕様比較：SF6ガス絶縁RMU vs 固体絶縁RMU (SIS) vs 乾燥空気絶縁GIS',
      es: '3. Matriz Comparativa Técnica: Celdas SF6 vs Aislamiento Sólido (SIS) vs Aire Seco',
    },
    tableHeaders: {
      en: ['Engineering Parameter', 'Traditional SF6 Gas Insulated RMU', 'Feichi Solid Insulated RMU (SIS Series)', 'Feichi Dry Air Insulated RMU (Clean Air)'],
      zh: ['工程核心指标', '传统 SF6 充气式环网柜', '飞驰电气 固体绝缘环网柜 (SIS 系列)', '飞驰电气 干燥空气绝缘环网柜 (Clean Air)'],
      ja: ['主要エンジニアリング指標', '従来型 SF6 ガス絶縁RMU', '飛馳電気 固体絶縁RMU (SISシリーズ)', '飛馳電気 乾燥空気絶縁RMU (Clean Air)'],
      es: ['Parámetro de Ingeniería', 'Celda Tradicional Aislada en SF6', 'Celda de Aislamiento Sólido Feichi (SIS)', 'Celda de Aire Seco Feichi (Clean Air)'],
    },
    tableRows: {
      en: [
        ['Insulating Medium', 'Sulfur Hexafluoride Gas (SF6, 0.04-0.05 MPa rel)', 'Solid Epoxy Resin APG Vacuum Encapsulation', 'Technical Dry Air (80% N2 + 20% O2, Dew Point ≤ -60°C)'],
        ['Global Warming Potential (GWP)', '24,300 (Severe Greenhouse Gas)', '0 (Zero GHG Emission / GWP=0)', '0 (Zero GHG Emission / GWP=0)'],
        ['EU F-Gas Regulation Compliance', 'Non-compliant (Phased out by 2026/2030)', '100% Compliant (Exempt from F-Gas bans)', '100% Compliant (Exempt from F-Gas bans)'],
        ['Minimum Operating Temp (Sub-Zero)', '-25°C (SF6 liquefaction risk below -30°C)', '-50°C to -60°C (Unconditional solid stability)', '-60°C (Pure air does not liquefy at cold ambient)'],
        ['Phase-to-Phase Insulation Separation', 'Shared gas tank (Arc can spread across phases)', 'Single-Phase Isolated Solid Shield (Zero phase flashover)', 'Isolated vacuum bottles in dry air tank'],
        ['Internal Arc Containment (IAC)', 'IAC AFL 20kA/1s (Gas tank explosion risk)', 'IAC AFLR 20kA/1s, 25kA/1s (Directional vent channel)', 'IAC AFLR 20kA/1s (Zero toxic byproduct release)'],
        ['Pressure Monitoring & Gas Refill', 'Requires manometer, density relay & periodic SF6 top-up', 'Zero gas pressure monitoring; completely dry & maintenance-free', 'Low-pressure sealed dry air; no toxic decomposition products'],
        ['Submersible & Flood Resistance', 'IP65 tank (External cables prone to moisture)', 'IP67 fully shielded vacuum module (Operable after flood)', 'IP65 stainless steel sealed tank with IP67 cable bushings'],
      ],
      zh: [
        ['主绝缘与灭弧介质', '六氟化硫气体 (SF6, 相对压力 0.04~0.05 MPa)', '环氧树脂 APG 固封极柱 + 导电屏蔽接地层', '工业合成干燥空气 (80% N2 + 20% O2, 露点 ≤ -60°C)'],
        ['全球变暖潜能值 (GWP)', '24,300（强效温室气体）', '0（零温室气体排放，GWP=0）', '0（零温室气体排放，GWP=0）'],
        ['欧盟 F-Gas 及全球环保法规合规性', '不符合（2026/2030 年起强制禁售）', '100% 合规（完全豁免环保受限审查）', '100% 合规（完全豁免环保受限审查）'],
        ['极寒工作温度下限 (GOST УХЛ1)', '-25°C（低于 -30°C 存在严重液化击穿风险）', '-50°C ~ -60°C（固体介质物理性质恒定，无液化风险）', '-60°C（合成空气在常压/微正压极低温下绝不液化）'],
        ['相间绝缘与故障隔离', '共箱式气体环境（一相燃弧易扩散至三相）', '单相完全独立固封（相间绝缘击穿概率为零）', '独立真空泡置于干燥空气密封箱内'],
        ['内部燃弧耐受等级 (IAC)', 'IAC AFL 20kA/1s（气箱存在爆裂危险）', 'IAC AFLR 20kA/1s, 25kA/1s（三/四面防电弧泄压通道）', 'IAC AFLR 20kA/1s（无有毒剧毒分解物排放）'],
        ['压力监控与充气维护', '需配置压力表、密度继电器及定期补气检测', '完全无气体监控；真正实现终身免维护', '微正压密封干燥空气；无剧毒分解副产物（如SOF2/HF）'],
        ['防洪淹与水下短时耐受', 'IP65 气箱（外部电缆头受潮易放电）', 'IP67 全屏蔽固封模块（可短时浸水带电正常运行）', 'IP65 304 不锈钢密封箱体与 IP67 可插拔终端'],
      ],
      ja: [
        ['主絶縁媒体', 'SF6ガス（0.04〜0.05 MPa）', 'エポキシ樹脂固体モールド + 接地シールド', '乾燥空気（露点 -60℃以下）'],
        ['地球温暖化係数 (GWP)', '24,300（重度温室効果ガス）', '0（完全ゼロエミッション）', '0（完全ゼロエミッション）'],
        ['EU F-Gas規制適合性', '不適合（2026年以降段階的禁止）', '100% 適合（全免除）', '100% 適合（全免除）'],
        ['極寒下限温度', '-25℃（ガス液化リスク）', '-50℃〜-60℃（安定動作）', '-60℃（液化現象なし）'],
        ['相間短絡リスク', '同一ガス槽（波及リスク有）', '単相完全分離（相間短絡ゼロ）', '真空バルブ＋気密槽'],
        ['内部アーク安全性 (IAC)', 'IAC AFL 20kA/1s', 'IAC AFLR 20kA/1s, 25kA/1s', 'IAC AFLR 20kA/1s'],
        ['ガス圧監視・補給', '圧力計・定期補給が必要', 'ガス監視不要・完全メンテナンスフリー', '低圧乾燥空気・無毒性'],
        ['耐浸水性能', 'IP65ガス槽', 'IP67モールド部（浸水通電可能）', 'IP65ステンレス槽'],
      ],
      es: [
        ['Medio de Aislamiento', 'Gas Hexafluoruro de Azufre (SF6)', 'Resina Epoxi Sólida APG con Blindaje', 'Aire Seco Sintético (Punto de rocío ≤ -60°C)'],
        ['Potencial de Calentamiento (GWP)', '24.300 (Alto impacto ambiental)', '0 (Cero emisiones / GWP=0)', '0 (Cero emisiones / GWP=0)'],
        ['Cumplimiento Reglamento F-Gas UE', 'No conforme (Prohibición en 2026/2030)', '100% Conforme (Exención total)', '100% Conforme (Exención total)'],
        ['Temperatura Mínima de Operación', '-25°C (Riesgo de licuefacción)', '-50°C a -60°C (Estabilidad total)', '-60°C (Sin licuefacción)'],
        ['Aislamiento Entre Fases', 'Tanque de gas compartido', 'Monofásico aislado 100% sólido', 'Botellas de vacío en aire seco'],
        ['Clasificación de Arco Interno (IAC)', 'IAC AFL 20kA/1s', 'IAC AFLR 20kA/1s, 25kA/1s', 'IAC AFLR 20kA/1s'],
        ['Mantenimiento y Fugas', 'Requiere manómetros y recargas', 'Cero supervisión de gas; libre de mantenimiento', 'Aire seco a baja presión; sin gases tóxicos'],
        ['Resistencia a Inundaciones', 'Tanque IP65', 'Módulo IP67 sumergible', 'Tanque de acero inoxidable IP65'],
      ],
    },
    sec4Title: {
      en: '4. Engineering Specification Scenarios & Selection Blueprint',
      zh: '4. 海外工程典型应用场景与设备选型决策蓝图',
      ja: '4. 適用産業シナリオと最適機種選定ガイドライン',
      es: '4. Escenarios de Aplicación y Guía de Selección para Ingeniería',
    },
    scenarios: {
      en: [
        {
          title: 'Siberian & Nordic Sub-Zero Grids (-50°C, ГОСТ УХЛ1)',
          recommend: 'Solid Insulated Switchgear (SIS Series, 10kV / 20kV / 35kV)',
          reason: 'Zero gas pressure eliminates SF6 liquefaction breakdowns; silicone busbar couplings maintain full elasticity under extreme Siberian frost.',
        },
        {
          title: 'EU & North American Utility Decarbonization Projects (F-Gas Compliant)',
          recommend: 'Dry Air Insulated Ring Main Unit (Clean Air Series, 12kV / 24kV)',
          reason: '100% compliant with EU Regulation 2024/573 with zero fluorinated gases, offering identical footprint to legacy SF6 RMUs for drop-in replacement.',
        },
        {
          title: 'Offshore Wind, Coastal Ports & Chemical Plants (C5-M Corrosive Environment)',
          recommend: 'Solid Insulated Switchgear with IP67 Submersible Vacuum Cast Cassettes',
          reason: 'Complete cycloaliphatic epoxy resin encapsulation protects live high-voltage conductors against salt fog, sulfur dioxide, and moisture condensation.',
        },
        {
          title: 'Urban Underground Vault Substations & High-Rise Buildings',
          recommend: 'Compact Solid Insulated RMU with Directional IAC-AFLR 20kA/1s Venting',
          reason: 'Zero toxic gas decomposition byproducts (no SOF2 or HF toxic gases upon arcing) ensures maximum human safety in enclosed civilian basements.',
        },
      ],
      zh: [
        {
          title: '俄罗斯西伯利亚、远东与高寒矿区（-50°C，ГОСТ 15150-69 УХЛ1）',
          recommend: '飞驰电气 固体绝缘环网柜（SIS 系列，10kV / 20kV / 35kV）',
          reason: '无气体压力容器，彻底杜绝 SF6 低温冷凝液化导致的电网跳闸事故；特种硅橡胶母线接头在 -50°C 依然保持极佳密封弹性。',
        },
        {
          title: '欧盟及北美公共事业去碳化改造（符合最新 F-Gas 环保法案）',
          recommend: '飞驰电气 干燥空气绝缘环网柜（Clean Air 系列，12kV / 24kV）',
          reason: '100% 满足欧盟 2024/573 环保法规，零温室气体排放，且柜体安装尺寸与传统 SF6 环网柜完全一致，支持老旧变电站原位无缝替换。',
        },
        {
          title: '沿海港口、海上风电升压站及化工腐蚀环境（C5-M 重腐蚀等级）',
          recommend: '飞驰电气 IP67 全绝缘全屏蔽固体绝缘环网柜（SIS 系列）',
          reason: '导电回路被整体固封在环氧树脂内部，完全隔绝盐雾、二氧化硫酸雾及凝露水汽侵蚀，杜绝沿面放电与闪络。',
        },
        {
          title: '城市地下开闭所、高层建筑地下室及密集商业综合体',
          recommend: '飞驰电气 紧凑型固体绝缘环网柜（配 IAC-AFLR 20kA/1s 泄压通道）',
          reason: '发生偶发燃弧时绝无剧毒分解物（如氟化氢、氟化亚砜）释放，三面/四面燃弧安全气道保护运维人员生命安全。',
        },
      ],
      ja: [
        {
          title: '極寒地配電網・シベリア鉱山（-50℃, GOST UHL1）',
          recommend: '固体絶縁スイッチギア（SISシリーズ 10kV / 20kV / 35kV）',
          reason: 'ガス不使用のため液化トラブルが原理的に発生せず、極低温下でも高絶縁耐力を維持します。',
        },
        {
          title: '欧米脱炭素プロジェクト・F-Gas規制対応グリッド',
          recommend: '乾燥空気絶縁RMU（Clean Airシリーズ 12kV / 24kV）',
          reason: '温室効果ガス排出ゼロ（GWP=0）で最新環境基準をクリア。既存SF6盤からの同寸法リプレイスが可能。',
        },
        {
          title: '洋上風力・沿岸部・化学コンビナート（C5-M腐食環境）',
          recommend: 'IP67完全モールド型 固体絶縁RMU',
          reason: '充電部が樹脂内部に完全封入され、塩害・硫化水素ガス・湿気によるトラッキングを完全阻止。',
        },
        {
          title: '都市部地下変電所・商業ビルキュービクル',
          recommend: 'アーク安全IAC-AFLR対応 コンパクト固体絶縁RMU',
          reason: 'アーク事故時にも有毒フッ素ガスが発生せず、地下密閉空間での作業員安全を確保。',
        },
      ],
      es: [
        {
          title: 'Redes Nórdicas y Minería Siberiana (-50°C, GOST UHL1)',
          recommend: 'Celdas de Aislamiento Sólido (Serie SIS, 10kV / 20kV / 35kV)',
          reason: 'Elimina el riesgo de licuefacción del gas SF6 y garantiza disparo seguro en heladas extremas.',
        },
        {
          title: 'Proyectos de Descarbonización en la Unión Europea (Reglamento F-Gas)',
          recommend: 'Celdas Aisladas en Aire Seco (Serie Clean Air, 12kV / 24kV)',
          reason: 'Cero gases fluorados (GWP=0), dimensiones idénticas a celdas SF6 tradicionales para reemplazo directo.',
        },
        {
          title: 'Parques Eólicos Marinos y Plantas Químicas (Ambiente C5-M)',
          recommend: 'Celdas SIS con Módulos de Vacío Sumergibles IP67',
          reason: 'El encapsulado hermético en resina epoxi evita la corrosión salina y la condensación.',
        },
        {
          title: 'Subestaciones Subterráneas Urbanas y Edificios de Gran Altura',
          recommend: 'Celdas Compactas SIS con Evacuación de Arco IAC-AFLR 20kA/1s',
          reason: 'Sin emisión de subproductos tóxicos durante fallas de arco, protegiendo al personal en recintos cerrados.',
        },
      ],
    },
    hasCalculator: 'sld',
    ctaTitle: {
      en: 'Download SF6-Free RMU Technical Specification & Request Single-Line Diagram (SLD / CAD)',
      zh: '获取无SF6环保环网柜全套技术协议、CAD电气单线图与选型方案',
      ja: 'SF6フリーRMU技術仕様書および単線結線図（SLD / CAD）のダウンロード',
      es: 'Descargar Especificación Técnica de Celdas Sin SF6 y Solicitar Diagrama Unifilar (CAD)',
    },
    ctaDesc: {
      en: 'Feichi MV Switchgear Engineering Team (Lead: Henry) provides full CAD drawings, GOST/IEC type-test dossiers, and tailored project proposals within 24 hours.',
      zh: '飞驰电气中压开关成套技术工程部（总工/外贸对接人：Henry）将在 24 小时内为您提供完整的开关柜 CAD 外形图、一次单线图、GOST/IEC 型式试验报告与定制报价。',
      ja: '飛馳電気中圧スイッチギア部門が24時間以内にCAD図面、型式試験レポート、プロジェクト提案書を提出します。',
      es: 'El departamento técnico de Feichi entregará planos CAD, reportes de ensayos de tipo GOST/IEC y propuesta comercial personalizada en 24 horas.',
    },
  },
  {
    id: 'week-16',
    week: 16,
    slug: 'svg-statcom-high-voltage-reactive-power-compensation-guide',
    category: 'standards',
    categoryLabel: {
      en: 'Power Quality & Grid Stability (SVG / STATCOM / СТАТКОМ)',
      zh: '高压动态无功补偿与电网稳定 (SVG / STATCOM / СТАТКОМ)',
      ja: '電力品質・動的無効電力補償 (SVG / STATCOM)',
      es: 'Calidad de Energía y Compensación Reactiva (SVG / STATCOM)',
    },
    title: {
      en: '6kV–35kV High-Voltage Static Var Generator (SVG / STATCOM / СТАТКОМ / УКРМ): Cascaded H-Bridge Architecture, Sub-5ms Transient Response & Grid Compliance for Renewable Wind/Solar & Mining Metallurgy (IEEE 519 / ГОСТ 32144)',
      zh: '6kV–35kV 高压动态无功补偿装置（SVG / STATCOM / СТАТКОМ / УКРМ）：级联 H 桥架构、5ms 瞬态极速响应与大型新能源/矿山冶金电网合规工程指南',
      ja: '6kV〜35kV 高圧静止型無効電力発生装置（SVG / STATCOM）：カスケードHブリッジ構成・5ms超高速応答およびメガソーラー・風力・鉱山グリッド連系ガイド',
      es: 'Generadores Estáticos de Reactiva (SVG / STATCOM / СТАТКОМ) de 6kV–35kV: Arquitectura en Cascada H-Bridge, Respuesta Sub-5ms y Cumplimiento de Red para Minería y Renovables',
    },
    eyebrow: {
      en: 'FE-SPEC-16 / STATCOM & POWER QUALITY DOSSIER',
      zh: 'FE-SPEC-16 · 高压动态无功补偿工程选型指南',
      ja: 'FE-SPEC-16 · STATCOM・電力品質設計ドシエ',
      es: 'FE-SPEC-16 · EXPEDIENTE DE COMPENSACIÓN SVG/STATCOM',
      ru: 'FE-SPEC-16 · СТАТИЧЕСКИЕ ГЕНЕРАТОРЫ СТАТКОМ / SVG 6-35 кВ (ГОСТ 32144)',
    },
    author: {
      en: 'Feichi Power Quality & Grid Stability Engineering Dept (Lead: Henry)',
      zh: '飞驰电气电能质量与电网稳定工程部（总工/外贸对接人：Henry）',
      ja: '飛馳電気 電力品質・系統連系技術部門（担当：Henry）',
      es: 'Departamento Técnico de Calidad de Energía Feichi (Lead: Henry)',
    },
    standards: 'IEEE 519-2022, IEC 61000-3-6, IEC 62927, ГОСТ 32144-2013, ГОСТ Р 58087-2018, ТР ТС 004/2011',
    readTime: {
      en: '15 Min Read',
      zh: '15 分钟深度阅读',
      ja: '所要時間：15分',
      es: '15 Min de Lectura',
    },
    summary: {
      en: 'Engineering design guide for 6kV, 10kV, 24kV, and 35kV chain-circuit cascaded H-bridge Static Var Generators (SVG / STATCOM / СТАТКОМ). Covers direct high-voltage grid connection without step-up transformers, continuous bi-directional (inductive to capacitive) reactive power regulation, sub-5ms dynamic response, active harmonic filtering up to the 25th harmonic, sub-zero Siberian containerization (-50°C УХЛ1), and dual IEC 61850 / GOST MEK 104 SCADA telemetry for utility renewables and heavy mining loads.',
      zh: '系统拆解 6kV、10kV、24kV 及 35kV 级联 H 桥链式高压动态无功补偿装置（SVG / STATCOM / СТАТКОМ）的工程设计体系。涵盖无升压变压器直接高压并网、感性至容性连续平滑无级调节、<5ms 瞬态全响应时间、2~25 次谐波深度动态抑制、西伯利亚极寒集装箱舱体集成（-50°C УХЛ1）以及 IEC 61850 / 俄网 МЭК 104 远动监控，彻底解决海外新能源电站高低穿脱网与大型矿山电弧炉电网闪变痛点。',
      ja: '6kV〜35kV連系カスケードHブリッジ型SVG/STATCOMの技術設計書。昇圧変圧器なしでの直接高圧連系、遅れ〜進み連続無段階補償、5ms未満の高速過渡応答、25次までの高調波能動抑制、シベリア極寒コンテナ仕様（-50℃）を詳解。',
      es: 'Guía técnica integral para STATCOM / SVG de 6kV a 35kV con topología en puente H cascada. Regulación continua bidireccional (inductiva/capacitiva), tiempo de respuesta <5ms, mitigación activa de armónicos hasta el 25º orden y operación en contenedor ártico a -50°C.',
    },
    sec1Title: {
      en: '1. Topology & Operational Principle: Cascaded H-Bridge Chain Circuit vs Legacy SVC (TCR/FC)',
      zh: '1. 架构拓扑与工作原理：级联 H 桥链式拓扑 vs 传统晶闸管 SVC（TCR+FC）',
      ja: '1. 回路トポロジーと動作原理：カスケードHブリッジ方式 vs 従来型SVC（TCR+FC）',
      es: '1. Topología y Principio Operativo: Circuito en Cascada H-Bridge vs SVC Tradicional (TCR/FC)',
    },
    sec1Text: {
      en: `Modern power grids with high penetration of renewable solar/wind generation and heavy dynamic loads (electric arc furnaces, mine hoists, rolling mills) demand ultra-fast dynamic reactive power compensation. Static Var Generators (SVG), known internationally as STATCOM (Static Synchronous Compensator), represent the 3rd generation of reactive power control technology.
      
Feichi SVG systems utilize a modular chain-circuit cascaded H-bridge (CHB) topology:
• Direct High-Voltage Grid Coupling: Multiple single-phase power units (each containing an IGBT H-bridge and DC-link capacitor bank) are connected in series per phase. This enables direct connection to 6kV, 10kV, 24kV, or 35kV medium-voltage buses without bulky, lossy step-up coupling transformers.
• Multilevel Phase-Shifted PWM Synthesis: By synthesizing step voltages from tens of cascaded power cells, the output waveform achieves pure sinusoidal quality ($THD_u < 1.0\%$), eliminating bulky LC passive output filters.
• Voltage-Source Inverter (VSI) Dynamic Compensation: By controlling the amplitude and phase angle of the SVG output voltage relative to the grid voltage, the device instantaneously generates capacitive reactive current (when $U_{svg} > U_{grid}$) or absorbs inductive reactive current (when $U_{svg} < U_{grid}$) with continuous, step-less power factor correction ($\cos\varphi \ge 0.98$).`,
      zh: `随着高比例风电、光伏等新能源并网以及大型冲击性负荷（如矿山提升机、轧钢机、电弧炉）的普及，电网对毫秒级动态无功支撑与谐波治理提出了苛刻要求。静止同步无功发生器（SVG，国际通称 STATCOM）是继传统电容器组（FC）和晶闸管控制电抗器（SVC）之后的第三代电能质量治理技术。

飞驰电气高压 SVG 采用成熟可靠的链式级联 H 桥（Cascaded H-Bridge, CHB）拓扑架构：
• 模块化无变压器直接并网：每相由若干个结构相同的单相低压 IGBT 功率单元（H 桥逆变器与直流母线电容）直接串联叠加，实现 6kV、10kV、24kV 及 35kV 母线直接高压挂网运行，省去大体积、高损耗的高压连接变压器。
• 载波移相多电平 PWM 调制：各单元载波相位依次错开特定角度，叠加输出等效开关频率高达数十千赫兹的高品质阶梯正弦波（输出电压谐波率 $THD_u < 1.0\%$），无需外挂庞大的高压 LC 滤波装置。
• 电压源型逆变器（VSI）双向无级输出：通过闭环实时精确控制逆变器输出电压的幅值与相位，当 $U_{svg} > U_{grid}$ 时输出容性无功，当 $U_{svg} < U_{grid}$ 时吸收感性无功，实现从超前到滞后连续平滑双向无级调节，将电网功率因数稳定提升至 0.98~0.99 以上。`,
      ja: `カスケードHブリッジ（CHB）方式を採用し、連系変圧器なしで6kV〜35kVに直接高圧接続。キャリア位相シフトPWM制御により、THD 1%未満の極めて滑らかな正弦波を出力し、遅れから進みまで無段階かつ連続的に無効電力を高速制御します。`,
      es: 'La topología en puente H en cascada permite la conexión directa a redes de 6kV a 35kV sin transformador elevador. Mediante modulación PWM multinivel, el STATCOM genera o absorbe potencia reactiva de forma continua y sin escalones, manteniendo el factor de potencia superior a 0.98.',
    },
    sec2Title: {
      en: '2. International Benchmarking (ABB PCS 6000, Siemens SVC PLUS, TGOOD): Ultra-Fast Response, N+1 Redundancy & Cold-Climate Containerization',
      zh: '2. 对标国际巨头（ABB PCS 6000、西门子 SVC PLUS 与特锐德 TGOOD）：极速响应、N+1 单元冗余与极寒集装箱化',
      ja: '2. グローバル先進基準ベンチマーク：超高速過渡応答・N+1冗長化バイパス・極寒コンテナ統合',
      es: '2. Benchmark con Gigantes Globales (ABB, Siemens, TGOOD): Respuesta Ultrarrápida, Redundancia N+1 y Contenedor Ártico',
    },
    sec2Text: {
      en: `Benchmarking against the world's premier power electronics manufacturers (ABB PCS 6000 STATCOM, Siemens Energy SVC PLUS MMC, and TGOOD Modular SVG):
• Sub-5ms Dynamic Response Time: While traditional thyristor-switched SVC requires 20ms–40ms (1–2 grid cycles) to adjust firing angles, Feichi SVG achieves complete transient compensation within $\le 5\,\text{ms}$, successfully suppressing voltage flicker ($\Delta U$) caused by rapid arc furnace strikes or wind gust variations.
• Intelligent N+1 Power Cell Electronic Bypass: Each power cell is equipped with a high-speed electronic thyristor bypass switch. If any single IGBT or capacitor fails, the faulty cell is electronically bypassed in $< 1\,\text{ms}$ without tripping the high-voltage system. The SVG automatically derates or continues full-rated compensation seamlessly.
• Arctic Outdoor Containerized E-House (-50°C УХЛ1): Housed inside thermal-insulated ISO shelters with redundant closed-loop heat pipe/water cooling, PTC preheaters, and C5-M marine anti-corrosion coatings. Fully compliant with Russian GOST 32144-2013 and GOST R 58087-2018.

Key Feichi High-Voltage SVG (STATCOM) Electrical Specifications:
1. Voltage Class: 6kV / 10kV / 24kV / 35kV (±10% to ±20% grid tolerance)
2. Rated Capacity Range: ±1.0 Mvar up to ±100 Mvar (Modular Multi-Stack Array)
3. Total Response Time: $t_{resp} \le 5\,\text{ms}$ (Active current step response $\le 1\,\text{ms}$)
4. Harmonic Mitigation: 2nd through 25th harmonic active filtering (THD compliant with IEEE 519-2022)
5. Efficiency at Full Load: $\ge 98.8\%$ (Low switching losses with optimized IGBT driving)
6. Communication & SCADA: Native IEC 61850 (GOOSE/MMS), GOST R MEK 60870-5-104, Modbus TCP`,
      zh: `全面对标国际顶级电能质量巨头（ABB PCS 6000 STATCOM、西门子能源 SVC PLUS 模块化多电平装置以及特锐德 TGOOD 模块化集装箱 SVG）：
• 毫秒级极速动态响应（$t_{resp} \le 5\,\text{ms}$）：传统晶闸管 SVC 依靠调节触发角，响应时间通常需 20~40ms（1~2 个工频周期）；飞驰电气 SVG 采用全控型 IGBT 结合双 DSP+FPGA 全数字控制系统，全响应时间控制在 5ms 以内（瞬态电流阶跃响应 $< 1\,\text{ms}$），彻底平抑电弧炉引弧瞬间或风机突变引起的母线闪变与电压跌落。
• 智能 N+1 功率单元微秒级旁路：每个功率单元内置高速晶闸管旁路电子开关。当任一单元发生过温、IGBT 击穿或电容故障时，控制系统在 $< 1\,\text{ms}$ 内触发硬件短路旁路，系统不跳闸不停机，自动重构平衡三相输出电压矢量，确保持续不间断供电。
• 极寒预装式集装箱 E-House 集成（-50°C УХЛ1）：采用 100~150mm 高阻燃保温岩棉集装箱舱体，配备双循环相变热管/水风换热冷却、PTC 智能防结露预热与 C5-M 级海洋重防腐涂装，完全满足俄罗斯 GOST 32144-2013 及 GOST R 58087-2018 高压并网认证。

飞驰电气高压动态无功补偿装置（SVG）核心参数：
1. 额定电压等级：6kV / 10kV / 24kV / 35kV（电网允许波动 -20% ~ +15%）
2. 额定容量规格：±1.0 Mvar 至 ±100 Mvar（支持多柜并联模块化扩容）
3. 全响应时间：$t_{resp} \le 5\,\text{ms}$（控制延迟 $< 0.5\,\text{ms}$）
4. 谐波治理能力：同时动态补偿 2~25 次特征与非特征谐波（符合 IEEE 519 规范）
5. 满载运行效率：$\ge 98.8\%$（采用低损耗第四代高压 IGBT 模块）
6. 自动化远动接口：原生支持 IEC 61850（GOOSE / MMS）、俄网 ГОСТ Р МЭК 60870-5-104 及 Modbus TCP`,
      ja: `ABBやSiemensの設計思想に準拠し、応答時間5ms以下、故障ユニットの1ms以内自動電子バイパス（N+1冗長構成）、および98.8%以上の高効率を達成。シベリア極寒（-50℃）対応の防寒コンテナ仕様（GOST UHL1）により、世界中の厳しい現場で安定稼働します。`,
      es: 'Siguiendo los estándares de ABB y Siemens, nuestro STATCOM ofrece respuesta dinâmica inferior a 5ms, bypass electrónico de celdas en menos de 1ms sin interrupción del servicio, y rendimiento global superior al 98.8%, integrado en contenedores climatizados para -50°C (GOST UHL1).',
    },
    sec3Title: {
      en: '3. Technical Comparison Matrix: Feichi Chain SVG (STATCOM) vs Traditional Thyristor SVC (TCR+FC) vs Passive Capacitor Bank (УКРМ)',
      zh: '3. 技术参数与性能指标对照表：飞驰高压链式 SVG vs 传统晶闸管 SVC vs 传统固定电容器组 (УКРМ)',
      ja: '3. 性能対比表：飛馳高圧チェーン式SVG vs 従来型SVC（TCR+FC） vs 固定コンデンサ盤（UKRM）',
      es: '3. Matriz Comparativa Técnica: SVG/STATCOM Feichi vs SVC de Tiristores vs Banco de Condensadores (УКРМ)',
    },
    tableHeaders: {
      en: ['Performance Parameter', 'Feichi High-Voltage SVG (STATCOM)', 'Traditional Thyristor SVC (TCR + FC)', 'Fixed Capacitor Bank (УКРМ / MSC)'],
      zh: ['核心技术指标', '飞驰电气高压链式 SVG (STATCOM)', '传统晶闸管控制静止无功补偿器 (SVC / TCR+FC)', '传统固定电容器投切柜 (УКРМ / MSC)'],
      ja: ['主要性能項目', '飛馳高圧チェーン式 SVG (STATCOM)', '従来型サイリスタ式 SVC (TCR+FC)', '固定コンデンサバンク (UKRM)'],
      es: ['Parámetro Técnico', 'Feichi SVG / STATCOM de Alta Tensión', 'SVC Tradicional con Tiristores (TCR+FC)', 'Banco Fijo de Condensadores (УКРМ)'],
    },
    tableRows: {
      en: [
        ['Operating Principle', 'IGBT Voltage-Source Inverter (Chain Cascaded CHB)', 'Thyristor Controlled Reactor + Fixed Capacitors', 'Electromechanical / Contactor Switched Capacitors'],
        ['Dynamic Response Time', '< 5 ms (Real-time sub-cycle compensation)', '20 ms – 40 ms (1 to 2 grid cycles)', '1000 ms – 10,000 ms (Slow mechanical step)'],
        ['Reactive Output Characteristics', 'Current Source output: Linear output even at low voltage ($I_{out} = I_{max}$)', 'Impedance output: Reactive output drops quadratically ($Q \propto U^2$)', 'Impedance output: Reactive output collapses with grid voltage ($Q \propto U^2$)'],
        ['Harmonic Performance', 'Active harmonic cancellation (2nd-25th order); THDu < 1.5%', 'Generates massive low-order harmonics (requires bulky filters)', 'Prone to harmonic resonance & capacitor explosion risks'],
        ['Low-Voltage Ride-Through (LVRT)', 'Superior LVRT: Injects 1.1x rated capacitive current at 20% grid voltage', 'Poor: Output collapses during severe grid faults', 'Zero ride-through capability; trips offline immediately'],
        ['Footprint & Land Area', 'Compact modular container (100% baseline footprint)', 'Large outdoor yard (Requires 250%–400% land area for reactors)', 'Medium footprint (150% baseline)'],
        ['Sub-Zero Climate Adaptation', '-50°C to +55°C (ГОСТ 15150-69 УХЛ1 container ready)', '-25°C limit (Outdoor reactors suffer insulation cracking in cold)', '-30°C limit (Capacitor dielectric freezing breakdown)'],
        ['Operation & Maintenance', 'Modular hot-plug cells, zero oil/gas maintenance', 'High maintenance on outdoor cooling water and reactor bushings', 'Frequent fuse replacements & contactor pitting repairs'],
      ],
      zh: [
        ['工作机理与拓扑', '高压全控型 IGBT 电压源逆变器（链式级联 CHB）', '半控型晶闸管控制电抗器 + 固定电容器支路 (TCR+FC)', '交流接触器/复合开关投切电力电容器组 (MSC)'],
        ['全动态响应时间', '≤ 5 ms（实时无级连续跟踪平滑输出）', '20 ms ~ 40 ms（1~2 个工频周波，受晶闸管过零限制）', '1000 ms ~ 10,000 ms（受接触器投切机械延时制约）'],
        ['低电压下无功输出特性', '电流源特性：电压跌落时仍能输出额定无功电流（$I_{out} = I_{max}$）', '阻抗型特性：输出无功随电压平方衰减（$Q \propto U^2$，低谷期失效）', '阻抗型特性：电网电压跌落时补偿容量急剧塌陷'],
        ['谐波特性与治理能力', '主动动态抵消 2~25 次谐波，自身注入谐波 $THD_u < 1.5\%$', 'TCR 本身产生大量 3、5、7 次特征谐波，必须配置大体积滤波器', '无法滤除谐波，极易引发电网并联谐振导致电容过流炸裂'],
        ['新能源低电压穿越 (LVRT)', '卓越支撑：电网电压跌至 20% 时仍能满额提供容性无功强行抬升电压', '支撑力弱：电网发生故障时输出无功按 $U^2$ 骤降，加剧脱网', '无低穿能力，电网扰动瞬间保护动作直接解列切除'],
        ['占地面积与土建成本', '高度集成集装箱舱体（基准占地 100%）', '需庞大室外空心配电抗器与电容场区（占地 250%~400%）', '中等占地（占地约为 SVG 的 150%）'],
        ['高寒极端环境适应性 (УХЛ1)', '-50°C 至 +55°C（预装保温预热舱，ГОСТ УХЛ1 极寒型式试验）', '-25°C 限制（室外环氧树脂空心电抗器极寒下易受冻开裂）', '-30°C 限制（极低温下绝缘油稠化、固体介质脆化击穿）'],
        ['运维工作量与全寿命成本', '模块化支持微秒级电子旁路，免日常补油补气检修', '室外水冷系统管路防冻维护繁重，晶闸管阀体易老化', '电容器容量衰减快，熔断器及接触器触头需频繁更换'],
      ],
      ja: [
        ['基本動作原理', 'IGBT 電圧源インバータ（カスケードCHB構成）', 'サイリスタ制御リアクトル＋固定コンデンサ（TCR+FC）', '接触器駆動式 電力コンデンサ盤（UKRM）'],
        ['過渡応答時間', '5 ms 以下（リアルタイム無段階追従）', '20 ms〜40 ms（1〜2サイクル遅延）', '1000 ms〜10000 ms（機械的ステップ遅延）'],
        ['低電圧時の出力特性', '電流源特性（電圧降下時も定格電流を維持 $I=I_{max}$）', 'インピーダンス特性（電圧の2乗で出力低下 $Q \propto U^2$）', 'インピーダンス特性（低電圧時に補償能力が急減）'],
        ['高調波抑制性能', '2〜25次高調波を能動的に相殺（THDu < 1.5%）', 'TCR自身が高調波を発生（大掛かりなLCフィルタ必須）', '高調波を抑制できず、並列共振による機器破損リスク有'],
        ['低電圧補償 (LVRT)', '優良：系統電圧20%低下時も即座に進み無効電力を注入', '劣る：電圧低下とともに出力が減衰し脱落リスク増大', '機能なし：擾乱発生時に保護トリップ'],
        ['設置面積', 'コンパクトなコンテナ一体型（基準100%）', '屋外リアクトル用地が必要（250%〜400%）', '中程度（150%）'],
        ['極寒耐性 (-50℃)', '-50℃〜+55℃（GOST UHL1 耐寒コンテナ仕様）', '-25℃限界（屋外リアクトルのクラックリスク）', '-30℃限界（絶縁油凝固による短絡破壊）'],
        ['保守性', 'モジュール式ホットプラグ・定期ガス油交換不要', '水冷配管の凍結防止対策・サイリスタ保守が必要', 'コンテナ接触器の頻繁な接点摩耗・ヒューズ交換'],
      ],
      es: [
        ['Principio de Operación', 'Inversor de Fuente de Tensión IGBT (Puente H en Cascada)', 'Reactor Controlado por Tiristores + Filtros (TCR+FC)', 'Banco de Condensadores Conmutado por Contactor'],
        ['Tiempo de Respuesta', '< 5 ms (Compensación continua en tiempo real)', '20 ms a 40 ms (1 a 2 ciclos de red)', '1.000 ms a 10.000 ms (Lenta conmutación mecánica)'],
        ['Característica en Tensión', 'Fuente de corriente: Inyección constante incluso con tensión baja ($I=I_{max}$)', 'Tipo impedancia: La potencia cae con el cuadrado de la tensión ($Q \propto U^2$)', 'Tipo impedancia: La capacidad colapsa durante caídas de tensión'],
        ['Comportamiento Armónico', 'Cancelación activa de armónicos (2º al 25º orden); THDu < 1.5%', 'Genera altos armónicos de bajo orden (requiere filtros grandes)', 'Riesgo de resonancia paralela y daño en condensadores'],
        ['Soporte LVRT (Huecos de Red)', 'Excelente: Inyecta corriente capacitiva con tensión al 20% para levantar la red', 'Bajo: La potencia disminuye durante perturbaciones graves', 'Nulo: Desconexión inmediata por relés de subtensión'],
        ['Espacio en Planta', 'Contenedor modular compacto (100% base de referencia)', 'Gran patio exterior (250% a 400% del área requerida)', 'Espacio medio (150% de referencia)'],
        ['Adaptación Ártica (-50°C)', '-50°C a +55°C (Contenedor aislado bajo norma GOST UHL1)', 'Límite de -25°C (Riesgo de fisuras en reactores exteriores)', 'Límite de -30°C (Congelación del dieléctrico líquido)'],
        ['Mantenimiento', 'Módulos extraíbles con bypass electrónico en <1ms', 'Alto mantenimiento de circuitos de agua y tiristores', 'Reemplazo frecuente de fusibles y contactos gastados'],
      ],
    },
    sec4Title: {
      en: '4. Critical Industrial Scenarios & Real-World Grid Stabilization Case Studies',
      zh: '4. 典型工业与电网应用场景选型及实装配置案例',
      ja: '4. 代表的産業シナリオと系統安定化実装ソリューション',
      es: '4. Escenarios Industriales Críticos y Casos de Estudio de Estabilización de Red',
    },
    scenarios: {
      en: [
        {
          title: '200MW Wind & Solar Hybrid Farm in Central Asia / Kazakhstan (Grid LVRT Compliance)',
          recommend: 'Feichi Containerized 35kV / ±40 Mvar High-Voltage SVG with Sub-5ms LVRT Support',
          reason: 'Provides rapid reactive injection during grid voltage dips down to 20%, maintaining point of common coupling (PCC) voltage and meeting strict national grid code requirements.',
        },
        {
          title: 'Deep Underground Shaft Mine Hoist & Ball Mill in Siberia (Norilsk & Kuzbass, -50°C)',
          recommend: 'Feichi Arctic Skid-Mounted 10kV / ±15 Mvar SVG with 150mm Insulation & Dual PTC Heating',
          reason: 'Eliminates severe voltage flicker and unbalance during heavy motor startup while operating reliably under harsh sub-zero Siberian permafrost.',
        },
        {
          title: 'Heavy Metallurgical Electric Arc Furnace (EAF) & Rolling Mill (Harmonic & Flicker Mitigation)',
          recommend: 'Feichi Dynamic 10kV / ±30 Mvar SVG with Active 2nd–25th Harmonic Filtering',
          reason: 'Suppresses instantaneous reactive spikes during scrap melting, slashing voltage flicker by over 70% and increasing furnace smelting productivity by 8–12%.',
        },
        {
          title: 'Remote Siberian Oilfield Pumping Substations (GOST 32144-2013 / MEK 104 Telemetry)',
          recommend: 'Feichi E-House 6kV / ±5 Mvar SVG with Integrated IEC 60870-5-104 SCADA Gateway',
          reason: 'Provides automated power factor correction ($\cos\varphi \ge 0.98$) and remote telemetry integration with central Rosseti / Gazprom power dispatch.',
        },
      ],
      zh: [
        {
          title: '中亚及哈萨克斯坦 200MW 风光互补大型新能源电站（低电压穿越与并网考核）',
          recommend: '飞驰电气 35kV / ±40 Mvar 集装箱式高压 SVG（具备全自动低电压穿越 LVRT 功能）',
          reason: '在电网跌落至 20% 时仍能在 5ms 内注入强容性无功强行抬升并网点电压，完全满足当地国家电网规程，避免大面积脱网罚款。',
        },
        {
          title: '西伯利亚与库兹巴斯大型地下煤矿/金属矿提升机与球磨机（-50°C 极寒冲击负荷）',
          recommend: '飞驰极寒撬装式 10kV / ±15 Mvar SVG（150mm 阻燃岩棉保温 + 双回路 PTC 预热）',
          reason: '实时动态平抑大型重载电机启动与重载提升时的剧烈电压闪变与三相不平衡，在 -50°C 极寒永久冻土区稳定运行。',
        },
        {
          title: '大型冶金电弧炉（EAF）及连轧生产线（高次谐波深度滤除与闪变抑制）',
          recommend: '飞驰动态 10kV / ±30 Mvar 高速 SVG（集成 2~25 次谐波主动滤波算法）',
          reason: '毫秒级响应炉内废钢塌料引起的电弧无功突变，将母线闪变抑制 70% 以上，降低变压器发热损耗，提升冶炼熔化效率 8%~12%。',
        },
        {
          title: '西伯利亚与远东油气田长距离抽油机变电所（俄网 GOST 32144 / MEK 104 远动监控）',
          recommend: '飞驰预制舱 6kV / ±5 Mvar SVG（集成 ГОСТ Р МЭК 60870-5-104 远动协议网关）',
          reason: '全自动自愈跟踪抽油机脉动负荷，将功率因数稳定在 0.98 以上，免去人工巡检并与俄罗斯国家电网中央调度无缝互联。',
        },
      ],
      ja: [
        {
          title: '中央アジア・カザフスタン 200MW風力・太陽光複合発電所（LVRT連系要件適合）',
          recommend: '飛馳コンテナ型 35kV / ±40 Mvar 高圧SVG（超高速LVRT機能搭載）',
          reason: '系統電圧降下時（20%まで）にも5ms以内に進み無効電力を瞬時注入し、発電所の強制遮断を防止。',
        },
        {
          title: 'シベリア極寒鉱山大型巻上機・粉砕ミル（-50℃耐環境・電圧フリッカ補償）',
          recommend: '飛馳極寒仕様 10kV / ±15 Mvar SVG（150mm断熱・PTC予熱完備）',
          reason: '大型モータ起動時の電圧降下と三相不平衡をリアルタイムで解消。',
        },
        {
          title: '重工業・製鉄所アーク炉（EAF）および圧延ライン（高調波能動抑制）',
          recommend: '飛馳高速 10kV / ±30 Mvar SVG（2〜25次高調波アクティブフィルタ統合）',
          reason: 'フリッカを70%以上低減し、電力品質改善と製鋼効率の向上（8〜12%）を両立。',
        },
        {
          title: 'シベリア油田遠隔揚油設備変電所（GOST 32144・MEK 104遠隔制御）',
          recommend: '飛馳E-House型 6kV / ±5 Mvar SVG（ロシア電網SCADA直結）',
          reason: '力率を0.98以上に常時維持し、無人遠隔監視によるメンテナンスフリー運用を実現。',
        },
      ],
      es: [
        {
          title: 'Planta Híbrida Eólica/Solar de 200MW en Asia Central (Cumplimiento LVRT)',
          recommend: 'SVG Contenerizado Feichi de 35kV / ±40 Mvar con Soporte Rápido de Huecos de Tensión',
          reason: 'Inyecta corriente reactiva en menos de 5ms durante caídas de tensión al 20%, cumpliendo el código de red nacional.',
        },
        {
          title: 'Minería Subterránea Pesada en Siberia (Kuzbass, -50°C, Cargas Dinámicas)',
          recommend: 'SVG Ártico Feichi de 10kV / ±15 Mvar en Skid con Aislamiento de 150mm y Calefacción PTC',
          reason: 'Elimina el parpadeo de tensión y desbalance de fases en arranques de grandes molinos bajo permafrost.',
        },
        {
          title: 'Hornos de Arco Eléctrico (EAF) y Trenes de Laminación Siderúrgicos',
          recommend: 'SVG Dinámico Feichi de 10kV / ±30 Mvar con Filtrado Activo de Armónicos 2º al 25º',
          reason: 'Reduce el flicker de tensión en más del 70% y aumenta la productividad del horno entre un 8% y 12%.',
        },
        {
          title: 'Campos Petroleros Remotos en Siberia (Norma GOST 32144 / Telemetría MEK 104)',
          recommend: 'SVG Feichi en E-House de 6kV / ±5 Mvar con Pasarela SCADA GOST R MEK 60870-5-104',
          reason: 'Garantiza un factor de potencia continuo $\ge 0.98$ y conexión directa con el despacho de energía ruso.',
        },
      ],
    },
    hasCalculator: 'sld',
    ctaTitle: {
      en: 'Download High-Voltage SVG Technical Specification & Request Power Quality Calculation Sheet',
      zh: '获取高压 SVG 动态无功补偿装置全套技术协议、系统图纸与电能质量计算书',
      ja: '高圧SVG技術仕様書ダウンロードおよび電力品質補償計算書の請求',
      es: 'Descargar Especificación Técnica de STATCOM/SVG y Solicitar Cálculo de Calidad de Energía',
    },
    ctaDesc: {
      en: 'Feichi Power Quality Engineering Team (Lead: Henry) provides harmonic simulation (IEEE 519), sizing calculations, single-line diagrams, and turnkey commercial proposals within 24 hours.',
      zh: '飞驰电气电能质量技术工程部（总工/外贸对接人：Henry）将在 24 小时内为您提供完整的谐波仿真计算书（IEEE 519 / GOST 32144）、单线系统图、集装箱布置图与交钥匙报价。',
      ja: '飛馳電気電力品質エンジニアリング部門が24時間以内に高調波シミュレーション計算書、単線結線図、コンテナ外形図を提出します。',
      es: 'El departamento técnico de calidad de energía de Feichi entregará simulaciones de armónicos, diagramas unifilares y propuesta técnica y comercial en 24 horas.',
    },
  },
  {
    id: 'week-17',
    week: 17,
    slug: 'mining-explosion-proof-mobile-substation-and-underground-distribution-guide',
    category: 'mining',
    categoryLabel: {
      en: 'Mining Explosion-Proof & Substation (KBSGV / ВРУ / IECEx)',
      zh: '矿用防爆移动变电站与井下配电 (KBSGV / ВРУ / IECEx)',
      ja: '鉱山防爆移動変電所・坑内配電 (KBSGV / ВРУ / IECEx)',
      es: 'Subestación Móvil Antiexplosiva y Distribución Minera',
    },
    title: {
      en: '6kV–10kV Flameproof & Explosion-Proof Mobile Substation (KBSGV / КТПВ / КРУВ): Arc-Fault Suppression, -50°C Heavy-Duty Skids & Underground Mining Power Engineering (IECEx / ATEX / ГОСТ 31610 / ТР ТС 012)',
      zh: '6kV–10kV 矿用隔爆型移动变电站（KBSGV / КТПВ / КРУВ）：内部燃弧抑制、-50°C 重载滑靴底座与井下综采供配电工程选型实战指南（IECEx / ATEX / ГОСТ / 煤安 MA）',
      ja: '6kV〜10kV 鉱山坑内用防爆移動変電所（KBSGV / KTPV / KRUV）：耐アーク構造・極寒重耐荷重ソリ（-50℃）および地下採掘高圧配電エンジニアリングガイド（IECEx / ATEX / GOST準拠）',
      es: 'Subestaciones Móviles Antiexplosivas de 6kV–10kV (KBSGV / КТПВ / КРУВ): Supresión de Arco Interno, Patines para Carga Pesada a -50°C e Ingeniería Subterránea (IECEx / ATEX / GOST)',
    },
    eyebrow: {
      en: 'FE-SPEC-17 / MINING EXPLOSION-PROOF POWER & SUBSTATION DOSSIER',
      zh: 'FE-SPEC-17 · 矿用隔爆移动变电站与井下供配电工程指南',
      ja: 'FE-SPEC-17 · 坑内防爆変電所・採掘電源設計ドシエ',
      es: 'FE-SPEC-17 · EXPEDIENTE TÉCNICO DE SUBESTACIONES MINERAS ANTIDEFLAGRANTES',
      ru: 'FE-SPEC-17 · ВЗРЫВОЗАЩИЩЕННЫЕ ПОДСТАНЦИИ КТПВ / КРУВ 6-10 кВ (ТР ТС 012/2011)',
    },
    author: {
      en: 'Feichi Mining Explosion-Proof Electrical Engineering Dept (Lead: Henry)',
      zh: '飞驰电气矿用防爆成套技术工程部（总工/外贸对接人：Henry）',
      ja: '飛馳電気 鉱山防爆電装エンジニアリング部門（担当：Henry）',
      es: 'Departamento Técnico de Distribución Minera y Antideflagrante Feichi (Lead: Henry)',
    },
    standards: 'IEC 60079-0/1, IECEx Ex d I Mb, ATEX M2, ГОСТ 31610.0-2019, ГОСТ IEC 60079-1-2013, ТР ТС 012/2011, GB/T 3836',
    readTime: {
      en: '16 Min Read',
      zh: '16 分钟深度阅读',
      ja: '所要時間：16分',
      es: '16 Min de Lectura',
    },
    summary: {
      en: 'Comprehensive engineering guide for 6kV and 10kV flameproof mining mobile substations (KBSGV / КТПВ / 2КТПВ) and underground switchgear (КРУВ / BGP9L). Details explosion-proof corrugated cooling enclosures (Ex d I Mb), vacuum circuit breaker fast-trip interlocks (<15ms), Nomex class C dry-type transformer insulation (220°C withstand), integrated selective leakage and ground fault protection, and Siberian heavy-duty mining ski bases (09Г2С steel) engineered for Kuzbass and Vorkuta coal basins.',
      zh: '全面解析 6kV 与 10kV 矿用隔爆型移动变电站（KBSGV / 俄标 КТПВ / 2КТПВ）及高低压防爆开关（КРУВ / BGP9L）的严苛工程设计体系。涵盖圆筒波纹隔爆散热外壳（Ex d I Mb 级防爆）、<15ms 快速断路器真空燃弧切除、美国杜邦 Nomex C 级绝缘干式变压器（220°C 绝缘耐热）、微机选择性漏电保护与绝缘监视系统，以及专为俄罗斯库兹巴斯（Kuzbass）与沃尔库塔极寒矿区定制的 09Г2С 特种低温重载滑靴底座。',
      ja: '6kV/10kV炭鉱・金属鉱山坑内用防爆移動変電所（KBSGV/KTPV）の技術設計書。耐圧防爆構造（Ex d I Mb）、15ms超高速真空遮断器、米国デュポンNomex C種耐熱絶縁（220℃）、選択的漏電保護装置、シベリア極寒鉱山用09G2S特殊鋼ソリベースを完全網羅。',
      es: 'Guía técnica integral para subestaciones móviles antideflagrantes de 6kV y 10kV (KBSGV / КТПВ) e interruptores para interior de mina. Envolventes corrugadas Ex d I Mb, corte ultrarrápido en vacío (<15ms), aislamiento Nomex Clase C (220°C) y patines de arrastre en acero ártico 09Г2С.',
    },
    sec1Title: {
      en: '1. Flameproof Engineering Architecture: Corrugated Ex d I Enclosures & Nomex Dry-Type Core',
      zh: '1. 隔爆电气架构：波纹隔爆壳体、Ex d I 级防护与 Nomex C 级干式铁芯',
      ja: '1. 耐圧防爆構造と変圧器本体：波形防爆ケーシング・Ex d I規格・Nomex C種絶縁コア',
      es: '1. Arquitectura Antideflagrante: Envolvente Corrugada Ex d I y Núcleo Seco con Aislamiento Nomex',
    },
    sec1Text: {
      en: `Underground coal mining, metal extraction, and tunneling operations present extreme hazards of explosive methane ($CH_4$) gas, conductive coal dust, high humidity, and restricted physical clearances. The Feichi KBSGV series mining flameproof mobile substation integrates high-voltage flameproof vacuum switchgear, a dry-type flameproof transformer, and low-voltage protection switchgear into an ultra-compact, high-strength transportable unit.

Key Mechanical & Core Structural Innovations:
• Corrugated Cylindrical Explosion-Proof Enclosure: Manufactured with high-strength low-alloy structural steel with double-sided continuous submerged arc welding. The corrugated surface increases heat dissipation surface area by 220% while providing dynamic pressure withstand capability exceeding 1.5 MPa against internal methane explosion shockwaves (Ex d I Mb per IEC 60079-1 & ГОСТ IEC 60079-1).
• DuPont Nomex Class C Vacuum Pressure Impregnation (VPI): The transformer active part utilizes continuous DuPont Nomex insulation paper (temperature index 220°C) impregnated under high-vacuum resin cycles. Non-flammable, self-extinguishing, and completely immune to moisture absorption in 98% relative humidity underground environments.
• Heavy-Duty Arctic Mining Skids (Сани-лыжи): Base frames constructed from cold-resistant 09Г2С alloy steel with reinforced wear plates and dual tow hitches, tested for continuous dragging along steep inclines (up to 25°) and uneven rocky floor roadways down to -50°C ambient temperatures.`,
      zh: `煤矿井下、非煤金属矿山及大型隧道开挖工况处于瓦斯（甲烷 $CH_4$）、导电性煤尘积聚、相对湿度高达 98% 及顶板淋水的严苛环境中。飞驰电气 KBSGV 系列矿用隔爆型移动变电站集成了高压隔爆真空开关、干式隔爆变压器本体与低压隔爆保护箱，构成高防护、抗冲击、可快速拖拽的井下核心动力中枢。

机械防爆与铁芯绝缘核心创新：
• 强化波纹圆筒隔爆壳体：采用高强度特种低合金钢板连续双面埋弧焊制造。外壳圆弧波纹结构使有效散热面积增加 220%，在承受内部 1.5 MPa 瓦斯爆炸极限冲击波时保持壳体零塑性变形（完全符合 IEC 60079-1、ГОСТ IEC 60079-1 及 煤安 MA Ex d I Mb 防爆认证）。
• 杜邦 Nomex C 级绝缘真空压力浸漆（VPI）：变压器高低压绕组采用美国杜邦 Nomex 绝缘材料（耐温等级达 220°C），经真空压力浸渍无溶剂绝缘漆并高温固化，具有优异的阻燃自熄特性与防潮耐腐蚀性能，即便停机数周后再次送电亦无需预热除湿。
• 极寒重载矿用拖拽滑靴（Сани-лыжи）：底座采用耐 -50°C 冲击韧性的 09Г2С 极地特种低合金钢结构，加装耐磨衬板与双向拖拽牵引钩，经受井下 25° 陡坡及崎岖巷道长距离拖拽拉伸应力测试。`,
      ja: `坑内の爆発性メタンガス（CH4）および高湿度環境に対応。波形耐圧防爆ケーシング（Ex d I Mb）により1.5MPaの爆発内圧に耐え、熱放散面積を2.2倍に拡大。デュポンNomex C種絶縁（220℃耐熱）のVPI含浸コアを採用し、09G2S極寒特殊鋼ソリベースにより過酷な坑内斜坑牽引を可能にします。`,
      es: 'Diseñada para atmósferas explosivas con metano y polvo de carbón en minería subterránea. La envolvente corrugada Ex d I resiste presiones de explosión de 1.5 MPa. El transformador seco con aislamiento DuPont Nomex Clase C (220°C) garantiza operación continua bajo 98% de humedad sin riesgo de incendio.',
    },
    sec2Title: {
      en: '2. International Benchmarking (Ormazabal, Lucy Electric, Becker Mining, Schneider): Sub-15ms Protection & Multi-Feed Telemetry',
      zh: '2. 对标国际防爆巨头（Becker Mining、Schneider 与 Eike）：15ms 超高速漏电保护、微机联锁与 SCADA 遥信遥控',
      ja: '2. 国際防爆ベンチマーク（Becker Mining・シュナイダー）：15ms高速漏電遮断・マイコン協調連動・遠隔テレメトリ',
      es: '2. Benchmark con Líderes Mineros Globales (Becker Mining, Schneider): Protección Sub-15ms y Telemetría Multicanal',
    },
    sec2Text: {
      en: `Benchmarking premier mining equipment suppliers (Becker Mining Systems, Joy Global / Komatsu Mining, and Schneider Electric Mining Solutions):
• Microprocessor-Controlled Selective Leakage & Ground-Fault Protection: Incorporates symmetrical zero-sequence current detection and active directional pulse injection. Ground faults and insulation degradation ($R_{ins} \le 1.0\,\text{k}\Omega/\text{V}$) are isolated within $\le 15\,\text{ms}$, preventing dangerous sparking in methane-rich coal headings.
• High-Speed Vacuum Interrupters with Direct Magnetic Actuators: Rated for 10,000 mechanical operations underground. Low contact bounce ($< 2\,\text{ms}$) minimizes transient switching overvoltages on trailing cables and shearer motors.
• Universal Telemetry & Intrinsically Safe (Ex ia I) Control Bus: Equipped with RS-485 / Modbus RTU, CANopen, and fiber-optic Ethernet supporting dual IEC 61850 and Russian standard ГОСТ Р МЭК 60870-5-104 SCADA networks for remote surface dispatch monitoring.

Feichi KBSGV / КТПВ Explosion-Proof Mobile Substation Technical Parameters:
1. High Voltage Incomer Rating: 6kV / 10kV / 11kV (Tolerance: -20% to +15%)
2. Low Voltage Outgoing Rating: 400V / 690V / 1140V / 3300V Dual-Voltage Reconnection
3. Rated Capacity: 200 kVA, 315 kVA, 500 kVA, 630 kVA, 800 kVA, 1000 kVA, 1250 kVA, 1600 kVA, 2000 kVA
4. Flameproof Protection Class: Ex d I Mb (Underground Methane & Coal Dust), Ex d [ia] I Mb
5. Short-Circuit Breaking Capacity (HV Switch): 12.5 kA / 16 kA / 20 kA / 25 kA
6. Selective Leakage Protection Trip Time: $t_{trip} \le 15\,\text{ms}$ (Intrinsically safe auxiliary circuit)
7. Core Temperature Rise: Class C Insulation ($\le 125\,\text{K}$ rise at full load under 40°C mine ambient)
8. Ingress Protection Rating: IP54 (External Enclosure) / IP67 (High-Voltage Terminal Compartment)`,
      zh: `全面对标全球采矿电气巨头（德国 Becker Mining Systems、小松 Komatsu / Joy Global 以及施耐德电气防爆成套）：
• 微机选择性漏电与绝缘先导监视：采用零序电流矢量算法与直流附加主动检测，当电网发生单相接地或绝缘阻值低于临界安全阈值（$R_{ins} \le 1.0\,\text{k}\Omega/\text{V}$）时，系统在 $\le 15\,\text{ms}$ 内完成超高速分闸与选线闭锁，杜绝井下电火花引爆瓦斯隐患。
• 永磁机构特种真空灭弧室：高压断路器机械寿命达 10,000 次，触头开距与超程经精密动态调校，分闸弹跳时间 $< 2\,\text{ms}$，彻底抑制采煤机、刮板输送机大电机频繁启停产生的高频操作过电压。
• 本安型（Ex ia I）控制总线与矿用光纤工业以太网：集成 RS-485 / Modbus、CAN 工业总线与本安以太网光口，支持 IEC 61850 及俄罗斯国家矿山安全监控网 ГОСТ Р МЭК 60870-5-104 协议，实现地面中央调度室对井下变电所的“遥测、遥信、遥控、遥调”。

飞驰电气 KBSGV / КТПВ 矿用隔爆移动变电站核心技术参数：
1. 高压侧额定电压：6kV / 10kV / 11kV（电网允许波动 -20% ~ +15%）
2. 低压侧额定电压：400V / 690V / 1140V / 3300V（支持双电压灵活抽头切换）
3. 额定容量规格：200kVA、315kVA、500kVA、630kVA、800kVA、1000kVA、1250kVA、1600kVA、2000kVA
4. 防爆标志：Ex d I Mb（甲烷与可燃性粉尘环境）、Ex d [ia] I Mb（含本安型控制回路）
5. 高压真空断路器开断容量：12.5kA / 16kA / 20kA / 25kA
6. 选择性漏电保护动作时间：$t_{trip} \le 15\,\text{ms}$（总切除时间 $< 40\,\text{ms}$）
7. 绝缘耐温与温升限值：Nomex C 级绝缘（40°C 矿井环温下满载温升 $\le 125\,\text{K}$）
8. 外壳防护等级：IP54（整机外壳防尘防水） / IP67（高压接线腔）`,
      ja: `Becker MiningやKomatsu Miningをベンチマークし、15ms超高速選択性漏電保護装置、1万回動作保証の永磁操作真空遮断器、IEC 61850 / GOST 104デュアル通信ポートを標準装備。坑内長距離ケーブルの静電容量漏電を正確に検出し、瞬時にトリップ・インターロックします。`,
      es: 'Comparada con Becker Mining y Schneider, nuestra subestación KBSGV cuenta con relés de fuga a tierra ultrarrápidos (<15ms), interruptores en vacío con actuador magnético permanente (10.000 maniobras) y comunicación de fibra óptica compatible con SCADA minero internacional.',
    },
    sec3Title: {
      en: '3. Technical Comparison: Modern Flameproof Substation (KBSGV / КТПВ) vs Legacy Oil-Filled Transformers & Conventional Switchgear',
      zh: '3. 技术参数横向对比：现代矿用隔爆移动变电站（KBSGV / КТПВ）vs 传统矿用油浸变压器与普通地面开关',
      ja: '3. 技術仕様比較：現代型防爆移動変電所（KBSGV/KTПВ）vs 従来型鉱用油浸変圧器・地上用汎用開閉器',
      es: '3. Comparativa Técnica: Subestación Antideflagrante (KBSGV / КТПВ) vs Transformador en Aceite y Celdas de Superficie',
    },
    tableHeaders: {
      en: ['Engineering Parameter', 'Feichi Mining KBSGV / КТПВ Substation', 'Legacy Oil-Filled Mining Transformer (KS9)', 'Conventional Surface Switchgear (KYN28)'],
      zh: ['工程技术维度', '飞驰 KBSGV / КТПВ 矿用隔爆移动变电站', '传统矿用油浸变压器（KS9/KS11 系列）', '普通地面铠装开关柜（KYN28 等）'],
      ja: ['技術項目', '飛馳 KBSGV / KTПВ 防爆移動変電所', '従来型油浸鉱山変圧器（KS9/KS11）', '地上用スイッチギア（KYN28）'],
      es: ['Parámetro Técnico', 'Subestación Antideflagrante Feichi KBSGV', 'Transformador Minero en Aceite (KS9/11)', 'Celda de Superficie Convencional (KYN28)'],
      ru: ['Технический параметр', 'Взрывозащищенная подстанция КТПВ / KBSGV', 'Масляный шахтный трансформатор ТМВГ / КС', 'Наземное распредустройство КРУ / КСО'],
    },
    tableRows: {
      en: [
        ['Explosion Protection Class', 'Ex d I Mb / ТР ТС 012/2011 (Flameproof)', 'Ex eb mb I (Non-explosion proof / Non-gassy only)', 'Non-Ex (Strictly prohibited underground)'],
        ['Insulation System & Safety', 'DuPont Nomex C-Class Dry Type (220°C, zero fire hazard)', 'Mineral oil (Severe fire/smoke hazard in tunnels)', 'Air/Epoxy (Standard surface distribution)'],
        ['Leakage Protection Speed', 'Selective Microprocessor Trip $\le 15\,\text{ms}$', 'External legacy relay 100–300 ms', 'Standard inverse-time relay 200–500 ms'],
        ['Mobility & Skid Strength', '09Г2С Arctic alloy heavy-duty sleds, 25° incline pulling', 'Rigid flat base, cannot be dragged along rock floors', 'Stationary foundation mounting only'],
        ['Mining Certifications', 'IECEx, ATEX M2, EAC EX ТР ТС 012/2011, MA Certified', 'National standard only', 'Surface industrial certification only'],
      ],
      zh: [
        ['防爆安全等级', 'Ex d I Mb / 煤安 MA / 俄罗斯 ТР ТС 012/2011 隔爆认证', '非防爆或仅限无瓦斯涌出矿井（Ex eb mb）', '非防爆等级（严禁下井使用）'],
        ['绝缘介质与防火性能', '美国杜邦 Nomex C 级干式绝缘（220°C，阻燃自熄零火灾风险）', '矿物绝缘油（井下一旦燃弧极易引发火灾及有毒浓烟窒息）', '空气绝缘 / 环氧树脂（常规地面环境）'],
        ['漏电保护动作速度', '微机矢量选择性漏电切除 $\le 15\,\text{ms}$（本安控制回路）', '外挂式普通继电器 100~300 ms（易产生危险电弧）', '常规反时限保护 200~500 ms'],
        ['底座抗冲击拖拽能力', '09Г2С 极地特种低合金重载滑靴，承受 25° 陡坡及崎岖巷道拖拽', '平底角钢底座，无法承受长距离直接井下拖拽', '固定地脚螺栓安装，无移动拖拽能力'],
        ['矿山国际资质体系', 'IECEx、ATEX M2、海关联盟 EAC EX（ТР ТС 012/2011）、中国 MA', '仅国内矿用一般型标准', '地面一般工业电力标准'],
      ],
      ja: [
        ['防爆安全規格', 'Ex d I Mb / ATEX / ロシア TR CU 012 防爆認証', '非防爆または非ガス鉱山限定（Ex eb mb）', '非防爆（坑内使用厳禁）'],
        ['絶縁方式・防火性', 'デュポンNomex C種乾式（220℃・自己消火性・火災リスクゼロ）', '鉱物油（アーク発生時の爆発・火災・有毒ガスリスク高）', '空気/エポキシ絶縁（地上標準）'],
        ['漏電保護遮断速度', 'マイクロプロセッサ選択的漏電遮断 15ms以下', '外部リレー 100〜300ms', '汎用過電流保護 200〜500ms'],
        ['ソリ構造・移動性', '09G2S極寒特殊鋼ソリベース・25度斜坑牽引試験クリア', 'フラットベース（長距離坑内牽引不可）', '据置固定設置のみ'],
        ['グローバル鉱山認証', 'IECEx, ATEX M2, EAC EX (TR CU 012/2011), 煤安MA', '国内鉱山用規格のみ', '一般工業規格のみ'],
      ],
      es: [
        ['Clase de Protección Antiexplosiva', 'Ex d I Mb / ATEX M2 / TR CU 012/2011 (Antideflagrante)', 'No antideflagrante / Solo minas sin gas grisú', 'Sin protección Ex (Prohibido bajo tierra)'],
        ['Sistema de Aislamiento y Fuego', 'Seco con DuPont Nomex Clase C (220°C, cero riesgo de fuego)', 'Aceite mineral (Grave peligro de incendio y humo tóxico)', 'Aire/Epoxi (Estándar de superficie)'],
        ['Tiempo de Disparo por Fuga', 'Protección Selectiva Microprocesada $\le 15\,\text{ms}$', 'Relé electromecánico externo 100-300 ms', 'Relé temporizado convencional 200-500 ms'],
        ['Resistencia de Patines', 'Patines en acero ártico 09Г2С para arrastre en pendientes de 25°', 'Base plana simple (No apta para arrastre continuo)', 'Montaje fijo sobre base de hormigón'],
        ['Certificaciones Mineras', 'IECEx, ATEX M2, EAC EX (TR CU 012/2011), Certificado MA', 'Normativa nacional básica', 'Certificación industrial de superficie'],
      ],
      ru: [
        ['Уровень взрывозащиты', 'РВ Ex d I Mb / ТР ТС 012/2011 (Взрывобезопасное рудничное)', 'РП (Рудничное повышенной надежности, без газа)', 'Общепромышленное (Запрещено в шахтах)'],
        ['Тип изоляции и пожаробезопасность', 'Сухая изоляция DuPont Nomex класс C (220°C, негорючая)', 'Масляная изоляция (Высокий риск взрыва и задымления)', 'Воздушно-барьерная (Наземная установка)'],
        ['Быстродействие защиты от утечек', 'Микропроцессорная селективная защита $\le 15\,\text{мс}$ (БКИ/АЗУР)', 'Внешнее реле утечки 100-300 мс', 'Стандартная МТЗ 200-500 мс'],
        ['Конструкция салазок (сани)', 'Усиленные сани-лыжи из стали 09Г2С для уклонов до 25°', 'Плоское основание (Без возможности буксировки)', 'Стационарный фундамент'],
        ['Сертификационный пакет', 'ТР ТС 012/2011 (EAC EX), ГОСТ 31610, IECEx, ATEX M2', 'Стандартные шахтные ТУ', 'Общепромышленные ГОСТ'],
      ],
    },
    sec4Title: {
      en: '4. Underground Mining Sizing Matrix & Application Scenarios (Coal Face, Tunneling & Potash Mines)',
      zh: '4. 矿用防爆移动变电站工程选型矩阵与典型工况匹配（综采工作面、掘进迎头与钾盐矿）',
      ja: '4. 坑内採掘アプリケーション別選定マトリクス（長壁採炭・掘進フェイス・カリ鉱山）',
      es: '4. Matriz de Selección para Minería Subterránea (Frentes Largos, Avance de Túneles y Minas de Potasa)',
    },
    scenarios: {
      en: [
        {
          title: 'Longwall Coal Face & High-Power Shearers (1140V / 3300V Dual Incomer)',
          recommend: 'Feichi KBSGV-1600kVA / 10kV Flameproof Mobile Substation with Dual Low-Voltage Breakers',
          reason: 'Provides dedicated dual-circuit 1140V/3300V outputs for continuous high-load operations of shearers and armored face conveyors (AFC) with selective leakage protection.',
        },
        {
          title: 'Siberian & Russian Underground Coal Basins (Kuzbass / Vorkuta, -50°C to +40°C, ТР ТС 012/2011)',
          recommend: 'Feichi KTPV-1000kVA / 6kV Flameproof Arctic Mobile Substation (09Г2С Sled Base & BMRZ Relay)',
          reason: 'Built with cold-resistant steel skids and BMRZ/Sirius Russian microprocessor protection, fully compliant with Rosseti and Russian mining safety standards.',
        },
        {
          title: 'Rapid Heading Roadways & Tunnel Boring Machines (TBM / Roadheaders)',
          recommend: 'Feichi KBSGV-800kVA / 6kV High-Mobility Flameproof Substation with Skid Transport Coupling',
          reason: 'Compact cylindrical enclosure allows easy repositioning alongside rapid roadway advancement without damaging flameproof joints.',
        },
        {
          title: 'Underground Potash & Deep Metal Ore Processing (Corrosive Dust & High Humidity)',
          recommend: 'Feichi KBSGV-1250kVA / 10kV Substation with C5-M Heavy Anti-Corrosion Coating & IP67 Terminals',
          reason: 'Stainless steel fasteners, epoxy corrosion-resistant paint, and hermetically sealed terminal boxes resist aggressive salt dust and moisture.',
        },
      ],
      zh: [
        {
          title: '现代大型高产高效综采工作面（采煤机、刮板机 1140V / 3300V 双回路供电）',
          recommend: '飞驰 KBSGV-1600kVA / 10kV 矿用隔爆型移动变电站（配双高压真空开关与多回路低压保护箱）',
          reason: '低压侧支持 1140V 与 3300V 大功率采煤设备双回路独立供电，集成微机先导闭锁与毫秒级选择性漏电切除，保障工作面连续高强度采掘。',
        },
        {
          title: '俄罗斯库兹巴斯与沃尔库塔极寒深井煤矿（-50°C 严寒环境，俄罗斯 ТР ТС 012/2011 防爆认证）',
          recommend: '飞驰 КТПВ-1000kVA / 6kV 极地型防爆移动变电站（09Г2С 耐低温滑靴底座 + БМРЗ 微机保护）',
          reason: '全套对齐俄罗斯 GOST 31610.0 及海关联盟 ТР ТС 012/2011 矿山防爆规范，配备耐 -50°C 极地拖拽滑靴与俄语微机测控终端。',
        },
        {
          title: '快速掘进迎头与大型盾构掘进机（连续掘进与频繁移动工况）',
          recommend: '飞驰 KBSGV-800kVA / 6kV 高机动型紧凑隔爆移动变电站（高强度滑靴拖拽底座）',
          reason: '高强度圆筒波纹结构大幅减小外形轮廓尺寸与整机重量，跟随掘进机快速推进向前拖拽，接合面无变形无磨损。',
        },
        {
          title: '深部金属矿山与大型钾盐矿井下开采（高盐雾腐蚀粉尘与 98% 极高湿度工况）',
          recommend: '飞驰 KBSGV-1250kVA / 10kV 防腐增强型矿用隔爆变电站（C5-M 级重防腐涂层与 IP67 接线腔）',
          reason: '采用 316L 不锈钢紧固件、特种抗盐雾环氧重防腐喷涂及高压双层密封接线腔，彻底杜绝盐粉受潮结晶爬电。',
        },
      ],
      ja: [
        {
          title: '長壁式高能率採炭フェイス（採炭機・コンベア 1140V/3300V 供給）',
          recommend: '飛馳 KBSGV-1600kVA / 10kV 防爆移動変電所（ダブル高圧真空スイッチ仕様）',
          reason: '長壁採炭機とコンベア向けに1140V/3300Vの独立した高出力回路を供給し、15ms超高速漏電遮断で安全を確保。',
        },
        {
          title: 'シベリア・クズバス極寒炭鉱（-50℃極低温環境・TR CU 012防爆認証適合）',
          recommend: '飛馳 KTПВ-1000kVA / 6kV 極寒仕様防爆移動変電所（09G2S特殊耐寒ソリ＋ロシア語BMRZ保護）',
          reason: 'ロシアの鉱山安全基準に完全準拠し、極寒地での凍結・衝撃に耐える特種合金ソリベースを装備。',
        },
        {
          title: '坑道急速掘進フェイス・トンネルボーリングマシン（TBM/ロードヘッダー）',
          recommend: '飛馳 KBSGV-800kVA / 6kV 高機動コンパクト防爆変電所',
          reason: 'コンパクトな円筒波形ケーシングにより狭小な坑道内でも掘進機の進行に合わせて容易に牽引移動可能。',
        },
        {
          title: '深部金属鉱山・カリ塩鉱山（腐食性粉塵・相対湿度98%の高湿度環境）',
          recommend: '飛馳 KBSGV-1250kVA / 10kV C5-M重防食仕様防爆変電所',
          reason: '316Lステンレス締結具と特殊エポキシ重防食塗装により、高塩分粉塵による絶縁劣化を完全防止。',
        },
      ],
      es: [
        {
          title: 'Frentes Largos de Carbón y Rozadoras de Alta Potencia (1140V / 3300V)',
          recommend: 'Subestación Antideflagrante Feichi KBSGV-1600kVA / 10kV con Salida Doble',
          reason: 'Alimentación independiente para rozadoras y transportadores blindados con protección de fuga selectiva.',
        },
        {
          title: 'Cuencas Carboníferas en Siberia (Kuzbass, -50°C, Certificación TR CU 012/2011)',
          recommend: 'Subestación Antideflagrante Feichi KTPV-1000kVA / 6kV en Acero Ártico 09Г2С',
          reason: 'Conformidad total con las normas mineras rusas GOST y relés microprocesados BMRZ para despacho SCADA.',
        },
        {
          title: 'Galerías de Avance Rápido y Minadores Continuos (TBM / Rozadoras de Avance)',
          recommend: 'Subestación Móvil Compacta Feichi KBSGV-800kVA / 6kV sobre Patines Reforzados',
          reason: 'Diseño corrugado ultracompacto para desplazamiento continuo en frentes estrechos sin desajustar las uniones antideflagrantes.',
        },
        {
          title: 'Minería Subterránea de Potasa y Metálica (Ambientes Salinos y Humedad del 98%)',
          recommend: 'Subestación Feichi KBSGV-1250kVA / 10kV con Recubrimiento C5-M y Terminales IP67',
          reason: 'Protección contra corrosión salina severa y sellado hermético en compartimentos de media tensión.',
        },
      ],
    },
    hasCalculator: 'sld',
    ctaTitle: {
      en: 'Download Mining Flameproof Substation (KBSGV / КТПВ) Engineering Catalog & Request CAD Drawings',
      zh: '获取矿用隔爆移动变电站（KBSGV / КТПВ）全套工程技术协议、CAD 图纸与防爆认证资料',
      ja: '鉱山用防爆移動変電所（KBSGV/KTПВ）技術仕様書ダウンロードおよびCAD図面請求',
      es: 'Descargar Catálogo de Subestaciones Mineras KBSGV / КТПВ y Solicitar Planos CAD',
    },
    ctaDesc: {
      en: 'Feichi Mining Electrical Engineering Team (Lead: Henry) provides single-line diagrams, short-circuit withstand calculations, flameproof certification files (IECEx/EAC EX), and turnkey commercial proposals within 24 hours.',
      zh: '飞驰电气矿用防爆成套技术工程部（总工/外贸对接人：Henry）将在 24 小时内为您提供完整的井下一二次单线图、短路动热稳定计算书、IECEx/海关联盟 EAC EX 防爆资质文件与项目交钥匙报价。',
      ja: '飛馳電気鉱山防爆エンジニアリング部門が24時間以内に単線結線図、防爆認証書（IECEx/EAC EX）、プロジェクト見積書を提出します。',
      es: 'El departamento técnico minero de Feichi entregará diagramas unifilares, certificados antideflagrantes (IECEx/EAC) y propuesta técnico-comercial en 24 horas.',
    },
  },
  week18Whitepaper,
  week19Whitepaper,
  week20Whitepaper,
  week21Whitepaper,
  week22Whitepaper,
  week23Whitepaper,
  week24Whitepaper,
  week25Whitepaper,
  week26Whitepaper,
  week27Whitepaper,
  week28Whitepaper,
  week29Whitepaper,
  week30Whitepaper,
  week31Whitepaper,
  week32Whitepaper,
  week33Whitepaper,
  week34Whitepaper,
  week35Whitepaper,
  week36Whitepaper,
  week37Whitepaper,
  week38Whitepaper,
  week39Whitepaper,
];

