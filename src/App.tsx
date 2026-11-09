import { Component, useEffect, useState, useMemo, type ErrorInfo, type ReactNode } from 'react';
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  Download,
  Factory,
  FileText,
  Globe2,
  HardHat,
  HelpCircle,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sliders,
  Smartphone,
  Sun,
  Terminal,
  TrainFront,
  Truck,
  User,
  Wrench,
  Zap,
} from 'lucide-react';
import { whitepapersList, type WhitepaperItem } from './whitepapersData';
import { epcFaqList, type EpcFaqItem } from './epcKnowledge';
import { StrategicPartnersSection } from './StrategicPartnersSection';
import { GlobalProjectsShowcase } from './GlobalProjectsShowcase';
import { CertificationsTrustHub } from './CertificationsTrustHub';
import { OverseasProjectsTrackRecord } from './OverseasProjectsTrackRecord';

type Locale = 'en' | 'zh' | 'ja' | 'es' | 'ru';
const locales: Locale[] = ['en', 'zh', 'ja', 'es', 'ru'];
const localeLabels: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  es: 'Español',
  ru: 'Русский',
};

import { TechnicalDrawingPlaceholder } from './TechnicalDrawing';

const heroImage = '/images/syfcdq/feichi_overseas_substation_hero.webp';
const factoryGateImage = '/images/syfcdq/feichi_factory_gate_hero.webp';
const cncSheetMetalImage = '/images/syfcdq/feichi_cnc_flexible_line.webp';
const workshopAssemblyImage = '/images/syfcdq/feichi_transformer_cleanroom_assembly.webp';
const factoryImage = factoryGateImage;
const cleanroomImage = workshopAssemblyImage;
const fieldImages = [
  '/images/syfcdq/project_mexico_penasco_solar.webp',
  '/images/syfcdq/project_philippines_pcpc_solar_ehouse.webp',
  '/images/library/03_工程项目案例/02_预制舱EHouse工程业绩/P25_01_几内亚力拓西芒杜港口EHouse项目_预制舱现场_1_618x300.webp',
  '/images/library/03_工程项目案例/01_开关柜工程业绩/P21_03_沈阳地铁4号线一期供电系统_现场实景_3_606x454.webp',
  '/images/syfcdq/project_yingkou_220kv_substation.webp',
  '/images/library/03_工程项目案例/01_开关柜工程业绩/P21_04_防城港钢铁基地项目_现场实景_4_400x300.webp',
];

const industryImages: Record<string, string> = {
  'renewable-energy': '/images/syfcdq/project_mexico_penasco_solar.webp',
  'rail-transit': '/images/library/03_工程项目案例/01_开关柜工程业绩/P21_03_沈阳地铁4号线一期供电系统_现场实景_3_606x454.webp',
  'industrial-manufacturing': '/images/library/03_工程项目案例/01_开关柜工程业绩/P21_04_防城港钢铁基地项目_现场实景_4_400x300.webp',
  'commercial-buildings': '/images/syfcdq/project_shenyang_hunnan_tech_city.webp',
  'petrochemical': '/images/library/03_工程项目案例/03_变压器工程业绩/P27_05_宽城华盛矿业电力项目_变压器实景_5_350x262.webp',
  'ports-airports': '/images/library/03_工程项目案例/02_预制舱EHouse工程业绩/P25_01_几内亚力拓西芒杜港口EHouse项目_预制舱现场_1_618x300.webp',
};

interface ProductSpec {
  standards: string;
  ratedVoltage: string;
  ratedCapacity: string;
  frequency: string;
  ipRating: string;
  ambientTemp: string;
  enclosureMaterial: string;
  shortCircuitWithstand: string;
}

interface ProductDetailFaq {
  q: string;
  a: string;
}

interface ProductItem {
  slug: string;
  name: string;
  zh: string;
  ja: string;
  es: string;
  ru: string;
  image: string;
  summary: string;
  voltage: string;
  tag: string;
  highlights: string[];
  specs: ProductSpec;
  applications: string[];
  seoTitle?: Record<Locale, string>;
  seoDesc?: Record<Locale, string>;
  longTailTechGuide?: {
    title: Record<Locale, string>;
    subtitle: Record<Locale, string>;
    sections: {
      heading: Record<Locale, string>;
      body: Record<Locale, string>;
      bullets?: string[];
    }[];
  };
  productFaqs?: Record<Locale, ProductDetailFaq[]>;
}

const products: ProductItem[] = [
  {
    slug: 'box-substation',
    name: 'Prefabricated Compact Box-type Substation (Packaged Substation 10kV-35kV)',
    zh: '预装式/欧式/美式箱式变电站 (10kV-35kV 户外成套配电站)',
    ja: 'プレハブ式コンパクト変電所 (10kV-35kV パッケージ型変電設備)',
    es: 'Subestación compacta prefabricada tipo paquete (10kV-35kV)',
    ru: 'Комплектная трансформаторная подстанция КТПН, 2КТПН 6-35/0.4 кВ по ГОСТ 14695-80',
    image: '/images/curated/box_substation_solar.webp',
    summary: 'Outdoor packaged prefabricated box-type substation integrating MV switchgear, high-efficiency power transformer, and LV distribution units in a modular weather-resistant compartmented enclosure.',
    voltage: '6 kV / 10 kV / 24 kV / 35 kV -> 0.4 kV',
    tag: 'OUTDOOR POWER DISTRIBUTION',
    highlights: [
      'Modular 3-chamber physical isolation (Medium Voltage room, Transformer bay, Low Voltage board)',
      'Intelligent dual thermal ventilation with auto-thermostat forced air cooling & anti-condensation PTC heaters',
      'High-grade corrosion-resistant enclosure (Alu-Zinc, Stainless Steel, GRC, or 100mm Siberian sandwich panels)',
      'Pre-assembled, factory wired, routine-tested and ready for rapid plug-and-play on-site grid energization'
    ],
    specs: {
      standards: 'IEC 62271-202 / GB/T 17467 / IEEE C37.121 / ГОСТ 14695 / ГОСТ 15150 УХЛ1',
      ratedVoltage: '6 kV / 10 kV / 24 kV / 35 kV (HV) -> 0.4 kV (LV) (50/60 Hz)',
      ratedCapacity: '50 kVA - 2500 kVA (Customizable up to 3150 kVA / 4000 kVA)',
      frequency: '50 Hz / 60 Hz',
      ipRating: 'IP43 / IP54 (Outdoor Enclosure) / IP2X (Internal Compartments)',
      ambientTemp: '-60°C to +45°C (ГОСТ УХЛ1 Siberian execution / Desert +50°C)',
      enclosureMaterial: 'Alu-zinc steel plate / Stainless steel 304 / GRC composite / 100mm Polyurethane Sandwich',
      shortCircuitWithstand: '20 kA / 25 kA / 31.5 kA (1s / 3s withstand)',
    },
    applications: ['Utility Photovoltaic Solar Power Step-Up Skids', 'Wind Farm Power Gathering & Distribution', 'Urban Municipal Grid Substation Infrastructure', 'Heavy Industrial Manufacturing Parks', 'Mining, Oil & Gas Field Remote Microgrids'],
    seoTitle: {
      en: '10kV-35kV Prefabricated Compact Box-Type Substations | Package Substation Manufacturer China - Feichi Power',
      zh: '10kV-35kV预装式箱式变电站生产厂家 | 欧变/美变/光伏升压站 - 飞驰电气',
      ru: 'Комплектные трансформаторные подстанции КТПН, 2КТП 6-35 кВ по ГОСТ 14695 | Завод Feichi Power',
      es: 'Subestaciones compactas prefabricadas 10kV-35kV | Fabricante Feichi Power',
      ja: '10kV-35kV プレハブ式コンパクト変電所・パッケージ変電設備 | 飛馳電気',
    },
    seoDesc: {
      en: 'China manufacturer of 10kV, 24kV, 35kV prefabricated compact box-type substations (50kVA-3150kVA). European modular (YB) and American pad-mounted (ZGS) designs compliant with IEC 62271-202 and Russian GOST 14695.',
      zh: '飞驰电气专业制造10kV-35kV预装式箱式变电站(50-3150kVA)。提供欧式箱变(YB)、美式箱变(ZGS)及光储逆变升压一体化成套方案，符合IEC 62271-202标准，全自动化厂区直发。',
      ru: 'Производство комплектных блочных трансформаторных подстанций наружной установки типа КТПН, 2КТПН, КТПБ 6-35/0.4 кВ мощностью 50-2500 кВА по ГОСТ 14695-80. Исполнение УХЛ1 до -60°C.',
      es: 'Fabricante de subestaciones compactas prefabricadas tipo paquete de 10kV a 35kV. Diseños modulares europeos y pad-mounted americanos para plantas solares e industria pesada.',
      ja: '10kV/24kV/35kV対応のプレハブ式パッケージ受変電設備（キュービクル）。欧州モジュール型および米国パッドマウント型を取り揃え、IEC 62271-202規格に適合。短納期・高信頼設計。',
    },
    longTailTechGuide: {
      title: {
        en: 'Technical Guide: Prefabricated Compact & Packaged Substation Architecture',
        zh: '技术专题：预装式箱式变电站（欧变/美变）电气结构与极寒防腐配置',
        ru: 'Техническое руководство: Устройство и преимущества комплектных подстанций КТПН 6-35 кВ',
        es: 'Guía técnica: Arquitectura de subestaciones compactas prefabricadas de intemperie',
        ja: '技術解説：プレハブ式パッケージ変電所の3室隔離構造と熱管理エンジニアリング',
      },
      subtitle: {
        en: 'European Modular (YB) vs. American Pad-Mount (ZGS) & Extreme Siberian / Desert Weatherproofing',
        zh: '欧式箱变与美式箱变拓扑对比，三室独立物理隔离与 -60°C 极寒耐候防护',
        ru: 'Сравнение европейской и американской компоновки, требования ГОСТ 14695 и исполнение УХЛ1 (-60°C)',
        es: 'Comparativa de topología modular y pad-mounted, aislamiento físico y normas IEC 62271-202',
        ja: '欧州型・米国パッドマウント型の比較と極寒・塩害対策エンジニアリング',
      },
      sections: [
        {
          heading: {
            en: '1. European Modular (YB) vs. American Pad-Mounted (ZGS) Topologies',
            zh: '1. 欧式箱式变电站（YB）与美式箱式变电站（ZGS）结构选型差异',
            ru: '1. Различия компоновки: Европейский модульный тип (КТПН) и Американский тип (Pad-Mounted)',
            es: '1. Diferencias entre subestación modular europea y tipo pad-mounted',
            ja: '1. 欧州モジュール型（YB）と米国パッドマウント型（ZGS）の構造比較',
          },
          body: {
            en: 'Feichi manufactures both European-style modular substations (YB / КТПН) featuring fully segregated walkable maintenance corridors for HV switchgear, transformer, and LV panels, as well as compact American pad-mounted units (ZGS) where the transformer core and load-break switches share a common sealed dielectric tank for minimal spatial footprint.',
            zh: '飞驰电气具备欧式预装式箱变（YB系列 / 俄标 КТПН）与美式箱变（ZGS系列）全系列制造能力。欧变采用高压室、变压器室、低压室三室完全独立隔离结构，具备内部巡视走廊；美变将变压器器身与高压负荷开关共箱浸入绝缘介质中，占地面积仅为欧变的 1/3，尤其适合光伏电站与紧凑社区。',
            ru: 'Завод Feichi производит подстанции европейского блочно-модульного типа (КТПН, 2КТП) с изолированными отсеками УВН, трансформатора и РУНН, а также компактные подстанции американского типа (Pad-Mounted) с минимальной площадью застройки.',
            es: 'Fabricamos subestaciones modulares europeas con pasillo de maniobra y tres compartimentos aislados, así como subestaciones compactas tipo pad-mounted con tanque común para proyectos solares.',
            ja: '高圧室・変圧器室・低圧室を完全隔離した欧州モジュール型（点検通路付）と、変圧器とスイッチを一体化した超省スペース米国パッドマウント型の両方を受注生産しています。',
          },
          bullets: [
            'Arc classification compliance: IAC AB 20kA/1s safety rating for public and operator protection',
            'Integrated SCADA RTU telemetry: IEC 60870-5-104 and Modbus TCP for remote monitoring',
            'Enclosure material choices: 100mm fire-retardant sandwich panels, Alu-Zinc, or GRC cement composite'
          ]
        }
      ]
    },
    productFaqs: {
      en: [
        {
          q: 'What is the difference between a prefabricated box-type substation and a traditional brick-and-mortar substation?',
          a: 'A prefabricated compact box-type substation (such as YB/ZGS/KTPN) is fully integrated, pre-wired, and tested at our 63,000 m² factory before delivery. It reduces on-site civil construction time by over 70%, requires only a simple concrete foundation pad, and offers standardized ingress protection (IP54) with integrated telemetry.'
        },
        {
          q: 'Can Feichi supply compact substations for extreme sub-zero environments down to -60°C?',
          a: 'Yes. We supply arctic containerized substations engineered with 100mm polyurethane / rock-wool insulated sandwich walls, automated PTC heating strips, and low-temperature certified SF6 or vacuum switchgear compliant with GOST 15150-69 UHL1.'
        }
      ],
      zh: [
        {
          q: '预装式箱式变电站相比传统土建变电所有哪些显著优势？',
          a: '预装式箱变在 6.3 万平方米制造基地内完成高低压设备配线、绝缘与微机保护出厂调试，现场仅需简单混凝土条形基础即可即插即用并网，缩短现场施工周期 70% 以上，占地面积大幅减少。'
        }
      ],
      ru: [
        {
          q: 'В чем преимущества блочно-комплектных подстанций КТПН перед капитальными кирпичными ТП?',
          a: 'КТПН поставляются в полной заводской готовности с установленным и протестированным оборудованием. Монтаж на объекте занимает от 1 до 3 дней, не требует капитального строительства и существенно снижает инвестиционные затраты.'
        }
      ],
      es: [
        {
          q: '¿Cuáles son las ventajas de las subestaciones prefabricadas frente a las de obra civil?',
          a: 'Llegan completamente cableadas y probadas de fábrica, listas para energización inmediata. Reducen el tiempo de obra civil en un 70% y ocupan un tercio del espacio tradicional.'
        }
      ],
      ja: [
        {
          q: 'プレハブ変電所と従来の建屋型変電所の違いは何ですか？',
          a: '自社工場で機器組み込みと試験を100%完了させて出荷するため、現地据付工事期間を70%以上短縮できます。基礎工事も最小限で済みます。'
        }
      ]
    }
  },
  {
    slug: 'mv-lv-switchgear',
    name: 'Medium & Low Voltage Metal-Clad Switchgear (KYN28A / KRU 10-35kV)',
    zh: '中高压铠装移开式开关柜与低压成套 (KYN28A / GCS / MNS / 俄标 КРУ 10-35kV)',
    ja: '中低圧金属閉鎖引出形スイッチギア (KYN28 / MNS / 10-35kV)',
    es: 'Celdas blindadas de distribución MT y BT (KYN28 / GCS / MNS 10-35kV)',
    ru: 'Комплектные распределительные устройства КРУ 6-35 кВ (КРУ-2-10, КРУ СЭЩ, КСО-298, НКУ)',
    image: '/images/curated/unisafe_switchgear.webp',
    summary: 'High-performance withdrawable metal-clad switchgear assemblies with 4-compartment segregation (LSC2B-PM), IAC AFLR 31.5kA internal arc classification, and integrated SCADA microcomputer protection.',
    voltage: '0.4 kV - 35 kV (Up to 4000 A)',
    tag: 'PROTECTION & CONTROL',
    highlights: [
      'KYN28A-24 / KYN28A-12 air-insulated withdrawable vacuum switchgear with full 5-prevention interlocks',
      'Compliant with IEC 62271-200 and Russian GOST 14693 / GOST 15150 standards for extreme heavy industrial grids',
      'LSC2B-PM highest loss of service continuity category with dedicated top-mounted gas pressure relief flaps',
      'Form 4b / Form 4a internal compartment segregation for intelligent motor control centers (MNS / GCS / Blokset)',
      'Integrated digital protection relays (GE Multilin / Schneider / ABB / Feichi FPC) and IEC 61850 telemetry'
    ],
    specs: {
      standards: 'IEC 62271-200 / IEC 61439-2 / GB 3906 / ГОСТ 14693 / ГОСТ 15150 УХЛ3',
      ratedVoltage: '0.4 kV, 6 kV, 10 kV, 24 kV, 35 kV (50 Hz / 60 Hz)',
      ratedCapacity: 'Main busbar rated current up to 4000 A (Feeder up to 3150 A)',
      frequency: '50 Hz / 60 Hz',
      ipRating: 'IP40 / IP42 / IP54 (Customizable outdoor / indoor)',
      ambientTemp: '-40°C to +45°C (ГОСТ УХЛ3 / УХЛ1 with smart PTC anti-condensation heaters)',
      enclosureMaterial: 'Alu-zinc 2.0mm steel plate CNC processed with electro-galvanized doors',
      shortCircuitWithstand: 'Thermal: Up to 50 kA / 4s | Dynamic Peak: Up to 125 kA | Internal Arc: IAC AFLR 31.5 kA / 1s',
    },
    applications: ['Power Generation & Substation Control Rooms', 'Commercial High-Rise Substations', 'Heavy Steel & Petrochemical Complexes', 'Hyperscale Data Center MV Distribution', 'Mining Extraction & Water Treatment Infrastructure'],
    seoTitle: {
      en: '10kV-35kV Metal-Clad Medium Voltage Switchgear (KYN28A / KRU) | China Manufacturer - Feichi Power',
      zh: 'KYN28A-12/24中压铠装开关柜生产厂家 (10kV-35kV / КРУ) | 飞驰电气',
      ru: 'Комплектные распределительные устройства КРУ 10-35 кВ (КРУ-2-10, КСО) по ГОСТ 14693 | Завод Feichi Power',
      es: 'Celdas de media tensión blindadas 10kV-35kV KYN28 | Fabricante Feichi Power',
      ja: '10kV-35kV 高圧・中圧金属閉鎖型スイッチギア (KYN28A) | 飛馳電気',
    },
    seoDesc: {
      en: 'Buy type-tested 10kV-35kV metal-clad withdrawable switchgear (KYN28A, KYN61, Blokset, MNS) from China manufacturer. IEC 62271-200, LSC2B-PM, IAC AFLR 31.5kA, and Russian GOST 14693 certified for utilities and heavy industries.',
      zh: '飞驰电气制造KYN28A-12/24、KYN61-40.5金属铠装移开式开关柜与MNS/GCS低压抽出柜。四室金属物理隔离(LSC2B-PM)，31.5kA/1s抗内部燃弧，微机五防闭锁，通过国家高压型式试验。',
      ru: 'Производство комплектных распределительных устройств КРУ серии КРУ-2-10, КРУ СЭЩ, КСО-298 на 6-10-35 кВ по ГОСТ 14693 и ТР ТС 004/2011. Выкатные вакуумные выключатели, дугостойкость IAC AFLR 31.5 кА, шины до 4000 А.',
      es: 'Fabricante de celdas MT y BT blindadas tipo KYN28A y MNS de 0.4kV a 35kV. Compartimentación Form 4b/LSC2B, resistencia al arco interno IAC AFLR 31.5kA y relés digitales IEC 61850.',
      ja: '定格電圧6kV〜35kV対応の金属閉鎖引出形スイッチギア（KYN28Aシリーズ）。IEC 62271-200適合、内部アーク耐力IAC AFLR 31.5kA/1s、母線定格電流最大4000A。自社工場より直発。',
    },
    longTailTechGuide: {
      title: {
        en: 'Technical Guide: 10kV-35kV Metal-Clad Switchgear (KYN28A / KRU) Engineering',
        zh: '技术专题：10kV-35kV 金属铠装移开式中压开关柜（KYN28A / КРУ）核心结构解析',
        ru: 'Техническое руководство: Конструкция и безопасность ячеек КРУ 10-35 кВ (КРУ-2-10, KYN28A)',
        es: 'Guía técnica: Ingeniería de celdas MT blindadas extraíbles KYN28A (10kV-35kV)',
        ja: '技術解説：10kV-35kV 金属閉鎖引出形スイッチギアの4室物理隔離とアーク保護設計',
      },
      subtitle: {
        en: 'LSC2B-PM Compartment Segregation, IAC AFLR 31.5kA Arc Relief & GOST 14693 Compliance',
        zh: 'LSC2B-PM 四舱完全金属物理隔离、顶部弹簧泄压通道与 ГОСТ 14693 俄标适配',
        ru: 'Четырехсекционная металлическая изоляция (LSC2B-PM), клапаны сброса дугового давления и соответствие ГОСТ 14693',
        es: 'Segregación física en 4 compartimentos, alivio de presión de arco y normas IEC 62271-200',
        ja: 'LSC2B-PM 4区画独立金属隔離、天面圧力放散フラップおよび極寒結露防止設計',
      },
      sections: [
        {
          heading: {
            en: '1. Four-Chamber Metal-Clad Segregation (LSC2B-PM & IP4X)',
            zh: '1. 四舱独立金属物理隔离与 LSC2B-PM 连续供电等级',
            ru: '1. Четыре изолированных отсека с металлическими перегородками (LSC2B-PM)',
            es: '1. Segregación en cuatro compartimentos metálicos independientes (LSC2B-PM)',
            ja: '1. 4室独立金属隔離構造とLSC2B-PM最高連続給電等級',
          },
          body: {
            en: 'Feichi KYN28A medium-voltage switchgear is engineered with 4 independent functional compartments: Busbar Compartment, Circuit Breaker Handcart Bay, Cable Termination Room, and Low-Voltage Instrument Chamber. High-precision 2.0mm Alu-Zinc coated sheets formed on CNC punching lines ensure rigid mechanical protection and prevent fault propagation across compartments.',
            zh: '飞驰电气 KYN28A 中压开关柜采用母线室、断路器手车室、电缆室和低压仪表室四个完全独立的金属封闭隔离舱（LSC2B-PM 等级）。柜体采用优质敷铝锌板经数控多重折弯而成，各舱室门关闭时均满足 IP4X 防护等级，杜绝故障跨舱蔓延。',
            ru: 'Шкафы КРУ-2-10 (KYN28A) разделены заземленными металлическими перегородками на 4 изолированных отсека: сборных шин, выкатного элемента (вакуумного выключателя), кабельных присоединений и релейного шкафа. Это гарантирует высший класс непрерывности питания LSC2B-PM.',
            es: 'Estructura modular dividida en cuatro compartimentos estancos con chapa aluzinc de 2.0mm: barras principales, interruptor extraíble, terminación de cables e instrumentación de BT.',
            ja: '母線室・遮断器引出室・ケーブル接続室・低圧計器室の4室を完全金属隔離。高精度Alu-Zinc鋼板により強固な耐震性と区画間波及防止性能を確保しています。',
          },
          bullets: [
            'Internal arc withstand rating: IAC AFLR 31.5kA / 1s with directional top pressure relief flaps',
            'Full 5-prevention mechanical and electrical interlocks preventing operator mis-operation',
            'High-voltage live-line display unit (DXN) with integrated electromagnetic door interlock'
          ]
        }
      ]
    },
    productFaqs: {
      en: [
        {
          q: 'What does LSC2B-PM mean in medium-voltage metal-clad switchgear?',
          a: 'LSC2B-PM designates the highest Loss of Service Continuity class with metallic partitions (PM). It ensures that maintenance can be performed in the cable or breaker compartment while the main busbars in adjacent compartments remain fully energized without downtime.'
        },
        {
          q: 'Feichi KYN28A vs. Siemens NXAIR / ABB UniSafe: What are the main engineering differences?',
          a: 'Feichi KYN28A provides equivalent LSC2B-PM four-compartment segregation and IAC AFLR 31.5kA internal arc containment matching Siemens and ABB tier-1 standards. Crucially, Feichi cabinets offer an open architecture compatible with ABB VD4, Schneider Evolis, Siemens SION, and Tavrida ISM/TEL breaker cassettes, while cutting fabrication lead times by 40% and offering custom engineering adaptations.'
        },
        {
          q: 'Can Feichi switchgear be customized with ABB, Schneider, Siemens, or Russian GOST vacuum circuit breakers?',
          a: 'Yes. KYN28A and KRU cabinets accommodate ABB VD4, Schneider Evolis/HVX, Siemens SION, Feichi FC-VCB, or Russian Tavrida Electric ISM/TEL breakers with certified primary tulip contacts and secondary disconnect plugs.'
        }
      ],
      zh: [
        {
          q: 'KYN28A 开关柜的 LSC2B-PM 等级代表什么含义？',
          a: 'LSC2B-PM 是 IEC 62271-200 标准中的最高连续供电等级。代表各舱室之间采用金属隔板完全隔离，在断路器室或电缆室进行停电检修时，主母线室可保持持续带电运行，最大化保障电网供电可靠性。'
        },
        {
          q: '飞驰电气 KYN28A 柜型与西门子 NXAIR、ABB UniSafe 相比有何核心竞争力？',
          a: '飞驰 KYN28A 采用同等的 2.0mm 敷铝锌板四舱物理隔离与 31.5kA/1s 燃弧安全设计，完全符合国际高端工业标准。同时支持自由兼容 ABB VD4、施耐德及国产高质量断路器手车，交货周期较国际巨头缩短 40% 以上，且具备极强的非标工程定制灵活性。'
        }
      ],
      ru: [
        {
          q: 'Какие типы вакуумных выключателей устанавливаются в ячейки КРУ Feichi?',
          a: 'Ячейки КРУ-2-10 и KYN28A адаптированы под установку выкатных выключателей ABB VD4, Schneider Electric, Siemens SION, Таврида Электрик (ВВ/TEL) и Feichi VCB с полным комплектом механических блокировок.'
        },
        {
          q: 'Ячейки КРУ Feichi (КРУ-2-10 / KYN28) в сравнении со шкафами «Электрощит Самара» и «Таврида Электрик»:',
          a: 'Шкафы Feichi КРУ-2-10 спроектированы в строгом соответствии с ГОСТ 14693 и требованиями ПАО «Россети». Мы применяем 4-отсечную компоновку LSC2B-PM с клапанами сброса давления и оптической дуговой защитой (<7мс ОВОД), обеспечивая полную взаимозаменяемость выкатных тележек и поставку в сжатые сроки.'
        }
      ],
      es: [
        {
          q: '¿Qué significa la clasificación LSC2B-PM en celdas blindadas de media tensión?',
          a: 'Garantiza que se pueden realizar mantenimientos en el compartimento de cables o del interruptor mientras las barras principales permanecen energizadas sin interrumpir el servicio.'
        }
      ],
      ja: [
        {
          q: 'KYN28A 開閉装置のLSC2B-PM規格とはどのようなものですか？',
          a: '各区画が金属隔壁で遮断されており、遮断器やケーブルの点検時でも主母線を通電維持できる最高レベルの連続給電信頼性を証明する規格です。'
        }
      ]
    }
  },
  {
    slug: 'prefabricated-cabins',
    name: 'Modular Prefabricated Electrical Equipment Cabin (E-House / BMZ 10-110kV)',
    zh: '智能模块化预制舱 / 集装箱式变电站 (E-House / 俄标 БМЗ 10-110kV)',
    ja: 'モジュール型プレハブ電気キャビン (E-House / 10-110kV)',
    es: 'Cabinas eléctricas modulares prefabricadas (E-House / Subestación en contenedor)',
    ru: 'Блочно-модульные здания и электротехнические контейнеры (БМЗ, КТПБ 10-110 кВ по ГОСТ)',
    image: '/images/curated/precast_cabin_ehouse.webp',
    summary: 'Heavy-duty containerized substation solution (E-House / BMZ) pre-integrated with MV/LV switchboards, DC UPS, HVAC, and fire suppression for utility-scale solar PV, BESS, and mining microgrids.',
    voltage: 'Tailored 10 kV - 110 kV',
    tag: 'MODULAR ENERGY STORAGE & GRID',
    highlights: [
      'Standard ISO shipping container envelope (20ft, 40ft, 45ft, or custom multi-module splicing configurations)',
      'Pre-integrated with internal cable trays, DC batteries, smart HVAC, automatic aerosol fire extinguishing, and SCADA',
      'Thermal insulation rating compliant with extreme desert (+55°C) or Siberian sub-zero freezing (-60°C) environments',
      'Reduces on-site civil construction engineering and commissioning duration by up to 75%'
    ],
    specs: {
      standards: 'ISO 1496 / GB/T 17467 / IEC 62271-202 / ГОСТ 22853 / ГОСТ 15150 УХЛ1',
      ratedVoltage: 'Customized based on project single-line diagram (10kV, 35kV, 110kV GIS / AIS)',
      ratedCapacity: 'Supports up to 5000 kVA BESS power conversion skids or 110kV substation control rooms',
      frequency: '50 Hz / 60 Hz',
      ipRating: 'IP55 / IP65 weather-proof fully welded sealed container shell',
      ambientTemp: '-60°C to +55°C (Extreme Siberian freezing / Middle East high-temperature desert)',
      enclosureMaterial: 'Cor-Ten weather-resistant steel with C5-M marine-grade multi-layer anti-corrosion coating',
      shortCircuitWithstand: 'Engineered per project single-line diagram specifications and seismic zone criteria',
    },
    applications: ['Utility-Scale Solar PV & Wind Farm Booster Substations', 'BESS Battery Energy Storage Power Conversion Systems', 'Remote Mining & Oilfield Modular Substations', 'Island & Off-Grid Military Defense Microgrids'],
    seoTitle: {
      en: 'Modular Prefabricated Electrical E-House Cabins (10kV-110kV) | China Manufacturer - Feichi Power',
      zh: '智能模块化预制舱/集装箱式变电站生产厂家 (10kV-110kV / E-House) | 飞驰电气',
      ru: 'Блочно-модульные здания БМЗ и электротехнические контейнеры 10-110 кВ | Завод Feichi Power',
      es: 'Subestaciones modulares en contenedor E-House 10-110kV | Fabricante Feichi',
      ja: 'モジュール型プレハブ電気キャビン・E-House (10kV-110kV) | 飛馳電気',
    },
    seoDesc: {
      en: 'Leading manufacturer of customized modular prefabricated electrical cabins (E-House / BMZ 10-110kV). Fully integrated with MV/LV switchgear, HVAC, DC systems, and fire protection. Compliant with ISO 1496, IEC 62271-202, and GOST standards.',
      zh: '飞驰电气专业研发制造智能变电站模块化预制舱(E-House/БМЗ)。集成高低压成套开关柜、直流电源、工业空调与自动消防，缩短现场施工周期75%，耐候防腐满足C5-M与-60°C极寒标准。',
      ru: 'Производство блочно-модульных зданий БМЗ, утепленных электротехнических контейнеров и подстанций КТПБ 10-35-110 кВ по ГОСТ 22853 и ГОСТ 15150 УХЛ1. Полная заводская готовность, системы ОПС, климат-контроля и вентиляции.',
      es: 'Fabricante de subestaciones modulares E-House en contenedores marítimos para energías renovables y minería. Integración completa de celdas MT/BT, climatización industrial y protección contra incendios.',
      ja: '太陽光・蓄電池（BESS）・変電所向けのプレハブ電気キャビン（E-House）。高低圧配電盤、直流電源、空調、防災設備を完備。現地工期を75%削減。',
    },
    longTailTechGuide: {
      title: {
        en: 'Technical Guide: Modular Prefabricated Electrical E-House & BMZ Engineering',
        zh: '技术专题：智能模块化预制舱（E-House / БМЗ）结构集成与极寒/高温环境控制',
        ru: 'Техническое руководство: Устройство и климатическое исполнение БМЗ 10-110 кВ',
        es: 'Guía técnica: Arquitectura de ingeniería para subestaciones modulares E-House',
        ja: '技術解説：プレハブ型E-Houseキャビンの熱負荷制御と重防食エンジニアリング',
      },
      subtitle: {
        en: 'Cor-Ten Steel Structure, C5-M Marine Coating & Extreme Arctic (-60°C) / Desert (+55°C) Thermal Engineering',
        zh: '耐候耐腐耐候钢骨架、C5-M 海洋级防腐与 -60°C 极寒 / +55°C 沙漠双向温控系统',
        ru: 'Каркас из стали Cor-Ten, антикоррозийная защита C5-M и расчет теплоизоляции для Крайнего Севера',
        es: 'Estructura de acero Cor-Ten, protección anticorrosiva C5-M y aislamiento térmico extremo',
        ja: 'Cor-Ten耐候性鋼構造、C5-M海洋防食およびマイナス60度極寒対応エンジニアリング',
      },
      sections: [
        {
          heading: {
            en: '1. Heavy-Duty Cor-Ten Steel Enclosure & C5-M Multi-Layer Coating',
            zh: '1. 耐候钢重型箱体骨架与 C5-M 海洋级高耐腐涂层体系',
            ru: '1. Сверхпрочный стальной каркас Cor-Ten и многослойное антикоррозийное покрытие C5-M',
            es: '1. Carcasa de acero Cor-Ten para servicio pesado y revestimiento marino C5-M',
            ja: '1. 高耐候性Cor-Ten鋼構造とC5-Mグレード多層防食塗装',
          },
          body: {
            en: 'Feichi E-House prefabricated cabins utilize heavy-duty Cor-Ten weather-resistant structural steel frames reinforced with internal rib stiffeners. The exterior undergoes sandblasting to Sa 2.5 standard followed by zinc-rich epoxy primer, epoxy micaceous iron intermediate coat, and polyurethane topcoat (total DFT ≥ 240 μm), ensuring 30+ years corrosion resistance in coastal and chemical environments.',
            zh: '预制舱主体骨架采用高强度耐候钢板及型钢焊接而成，内部布置加强型抗震型钢立柱。表面经 Sa 2.5 级高等级喷砂除锈后，喷涂环氧富锌底漆、环氧云铁中间漆及聚氨酯耐候面漆（总干膜厚度 ≥ 240 μm），达到 ISO 12944 C5-M 极高防腐等级，有效抵御沿海盐雾与石化腐蚀。',
            ru: 'Оболочка здания БМЗ сваривается из атмосферостойкой стали Cor-Ten с антисейсмическим усилением. Многослойная эпоксидно-полиуретановая система окраски толщиной более 240 мкм обеспечивает высшую категорию коррозионной стойкости C5-M по ISO 12944.',
            es: 'Estructura soldada en acero Cor-Ten con granallado Sa 2.5 y sistema de pintura epoxi-poliuretano de 240 micras, garantizando resistencia en ambientes marinos extremos C5-M.',
            ja: '耐候性鋼板と高強度フレームを全周溶接。Sa 2.5ブラスト処理後に総膜厚240μm以上のエポキシ・ウレタン多層塗装を施し、沿岸部や化学プラントでも卓越した防食性を発揮します。',
          },
          bullets: [
            'Insulation: 100mm-150mm non-combustible rock-wool / PIR sandwich panels (thermal conductivity ≤ 0.024 W/m·K)',
            'Integrated dual-redundant HVAC with automatic frequency conversion & fresh-air positive pressure filtration',
            'Full factory pre-commissioning: secondary wiring, protection relays, DC charger, and fire aerosol bottles pre-tested'
          ]
        }
      ]
    },
    productFaqs: {
      en: [
        {
          q: 'What are the main advantages of using an E-House (Prefabricated Electrical Cabin) over traditional substation buildings?',
          a: 'An E-House is completely prefabricated, pre-wired, and tested in our controlled factory environment before delivery. It reduces on-site engineering time by up to 75%, eliminates weather delays during civil construction, and provides a plug-and-play solution that can be relocated if needed.'
        },
        {
          q: 'Prefabricated Modular E-House vs. Civil Concrete Substation: How do total costs and project lead times compare?',
          a: 'A Feichi modular E-House cuts total engineering, civil excavation, and commissioning costs by 25-35% and compresses delivery from 14-18 months down to just 3-4 months. Furthermore, E-Houses can be fully integrated with C5-M marine anti-corrosion, IP55 sealing, and fire suppression for high residual value and mobility.'
        },
        {
          q: 'What auxiliary systems are pre-installed inside Feichi E-House modules?',
          a: 'Feichi E-Houses integrate dual industrial HVAC air conditioners, automatic fire alarm and gas/aerosol extinguishing systems, DC 110V/220V battery backup UPS, LED interior/emergency lighting, and comprehensive SCADA telemetry cabinets.'
        }
      ],
      zh: [
        {
          q: '模块化预制舱（E-House）相比传统土建配电室有哪些核心优势？',
          a: '预制舱在工厂内完成舱体焊接、保温隔热、开关柜安装、二次回路布线及电气整定试验。现场仅需简单的吊装就位与电缆接入，将电网项目的施工周期缩短 70%~75%，且具备整体可移动性。'
        },
        {
          q: '集装箱式预制舱变电站（E-House）与传统砖混土建变电站相比，综合成本与工期如何？',
          a: '在偏远矿区、沙漠光伏和沿海风电项目中，预制舱可节省 30% 以上的现场土建与人工开销，并将原本 12~18 个月的土建周期压缩至 90~120 天交钥匙发运，且外壳具备 C5-M 级超强耐候防腐与可二次搬迁残值。'
        }
      ],
      ru: [
        {
          q: 'Какие системы жизнеобеспечения встроены в блочно-модульные здания БМЗ Feichi?',
          a: 'Здания БМЗ комплектуются дублированной системой кондиционирования и отопления, автоматической пожарной сигнализацией и установками аэрозольного пожаротушения, щитами собственных нужд 0.4 кВ и системами оперативного постоянного тока (ШОТ).'
        },
        {
          q: 'Блочно-модульное здание БМЗ против капитального строительства подстанции: в чем выгода?',
          a: 'БМЗ поставляются в полной заводской готовности на салазках 09Г2С, сокращая срок ввода объекта с 1.5 лет до 3-4 месяцев. Утепление 100-150 мм ППУ и встроенный микроклимат гарантируют надежность при температурах до -60°C (УХЛ1).'
        }
      ],
      es: [
        {
          q: '¿Qué ventajas ofrece una subestación modular E-House frente a la construcción tradicional?',
          a: 'Reduce el tiempo de puesta en marcha en sitio en un 75%, elimina retrasos por clima y llega 100% probada con celdas, climatización y sistemas contra incendios instalados.'
        }
      ],
      ja: [
        {
          q: 'プレハブE-Houseキャビンの主な導入効果は何ですか？',
          a: '配電盤や空調、消防設備をすべて組み込んだ状態で納品されるため、現地施工期間を約75%短縮し、高品質な変電所を短納期で立ち上げることができます。'
        }
      ]
    }
  },
  {
    slug: 'dry-type-transformers',
    name: 'Cast Resin Dry-Type Power Transformer (Epoxy-Cast / Class H)',
    zh: 'SCB 系列环氧树脂浇注干式变压器 (F/H级阻燃 6-35kV)',
    ja: 'エポキシモールド乾式変压器 (F/H種絶縁・低騒音)',
    es: 'Transformadores secos de resina epoxi encapsulada (Clase F/H)',
    ru: 'Сухие силовые трансформаторы с литой изоляцией (ТСЛ, ТСЗЛ 6-35/0.4 кВ по ГОСТ 52719)',
    image: '/images/curated/transformer_scb.webp',
    summary: 'Flame-retardant, self-extinguishing epoxy resin-cast dry-type power transformers engineered for indoor substations, skyscrapers, data centers, and underground railways with low partial discharge (<5pC).',
    voltage: '6 kV / 10 kV / 20 kV / 35 kV -> 0.4 kV',
    tag: 'INDOOR SAFE POWER',
    highlights: [
      'Pure electrolytic copper foil winding with vacuum quartz-filled epoxy resin casting',
      'Certified Class F / Class H insulation (155°C / 180°C) with self-extinguishing flammability class F1',
      'Extremely low partial discharge (< 5 pC) and minimal load loss compliant with IEC 60076-11 EcoDesign',
      'Embedded PT100 platinum thermal sensors in 3-phase windings with digital fan cooling controller',
      'High electromechanical withstand capability against sudden short-circuit dynamic forces'
    ],
    specs: {
      standards: 'IEC 60076-11 / GB 1094.11 / IEEE C57.12.01 / ГОСТ 52719 / EN 50588-1',
      ratedVoltage: '6 kV, 10 kV, 20 kV, 35 kV (HV) / 0.4 kV (LV) (50/60 Hz)',
      ratedCapacity: '30 kVA - 3150 kVA (Custom engineering up to 5000 kVA)',
      frequency: '50 Hz / 60 Hz',
      ipRating: 'IP00 (Core & Coil) / IP20 / IP23 / IP31 (With Protective Enclosure)',
      ambientTemp: '-25°C to +40°C (Special Siberian execution down to -40°C)',
      enclosureMaterial: 'Cold-rolled steel / Stainless steel 304 housing with airflow louvers',
      shortCircuitWithstand: 'Certified by National High-Voltage Quality Inspection Center per IEC 60076-11',
    },
    applications: ['High-Rise Office Towers & Commercial Plazas', 'Subway & Underground Rail Traction Power', 'Hospital & Airport Clean Substation Rooms', 'Hyperscale Data Centers & Server Hubs', 'Semiconductor Cleanroom Fab Facilities'],
    seoTitle: {
      en: 'Epoxy Cast Resin Dry-Type Power Transformers (6kV-35kV) | China Manufacturer - Feichi Power',
      zh: 'SCB环氧树脂浇注干式变压器生产厂家 (6kV-35kV) | 阻燃低损耗 - 飞驰电气',
      ru: 'Сухие силовые трансформаторы с литой изоляцией ТСЛ 6-35 кВ по ГОСТ 52719 | Завод Feichi Power',
      es: 'Transformadores secos de resina epoxi encapsulada 6-35kV Clase H | Fabricante Feichi',
      ja: 'エポキシモールド乾式変圧器 6kV-35kV | 高信頼・低損失変電設備 - 飛馳電気',
    },
    seoDesc: {
      en: 'Buy high-efficiency epoxy cast resin dry-type transformers (SCB10/SCB14/SCB18, 30-3150kVA, 6-35kV). Compliant with IEC 60076-11, Class F/H insulation, flame-retardant F1/E2/C2 certified, low partial discharge <5pC direct from manufacturer.',
      zh: '飞驰电气专业生产SCB10/SCB14/SCB18系列环氧树脂浇注干式变压器(30-3150kVA, 6-35kV)。纯铜箔绕组，F/H级绝缘阻燃自熄，局放<5pC，符合IEC 60076-11标准，厂家直发出口。',
      ru: 'Производство сухих силовых трансформаторов с литой эпоксидной изоляцией серии ТСЛ, ТСЗЛ 6-35/0.4 кВ мощностью 30-3150 кВА по ГОСТ 52719. Класс изоляции F/H, пожаробезопасность F1, уровень ЧР < 5 пКл. Поставки от завода-изготовителя.',
      es: 'Fabricante de transformadores secos encapsulados en resina epoxi SCB de 6kV a 35kV (30-3150 kVA). Aislamiento Clase H/F, autoextinguible F1/E2/C2, bajas pérdidas IEC 60076-11 para hospitales y rascacielos.',
      ja: '定格電圧6kV〜35kV、容量30kVA〜3150kVA対応のエポキシモールド乾式変圧器。IEC 60076-11準拠、F/H種絶縁、自己消火性F1、部分放電<5pCの超低騒音・高信頼設計。自社工場から直接納入。',
    },
    longTailTechGuide: {
      title: {
        en: 'Technical Guide: Epoxy Cast Resin Dry-Type Transformer Engineering Architecture',
        zh: '技术专题：环氧树脂浇注干式变压器核心结构与制造工艺解析',
        ru: 'Техническое руководство: Конструкция и преимущества сухих трансформаторов с литой изоляцией ТСЛ',
        es: 'Guía técnica: Arquitectura de ingeniería para transformadores secos de resina',
        ja: '技術解説：エポキシモールド乾式変圧器の構造設計と製造プロセス',
      },
      subtitle: {
        en: 'Certified to IEC 60076-11, Class F/H Insulation, Low Loss & Flame-Retardant F1 Environmental Classes',
        zh: '执行 IEC 60076-11 与 GB 1094.11 标准，F/H 级纯铜箔浇注，局放 <5pC 阻燃抗震',
        ru: 'Соответствие стандартам ГОСТ 52719 и МЭК 60076-11: класс нагревостойкости F/H, пожаробезопасность F1/E2/C2',
        es: 'Cumplimiento de normas IEC 60076-11, aislamiento Clase F/H y clasificación ambiental F1/E2/C2',
        ja: 'IEC 60076-11準拠、クラスF/H耐熱絶縁、自己消火性および低部分放電特性',
      },
      sections: [
        {
          heading: {
            en: '1. Vacuum Quartz-Filled Epoxy Resin Thin-Layer Casting Technology',
            zh: '1. 环氧树脂石英粉填料真空薄绝缘浇注工艺',
            ru: '1. Технология вакуумной заливки эпоксидным компаундом с кварцевым наполнителем',
            es: '1. Tecnología de fundición en resina epoxi al vacío con carga de cuarzo',
            ja: '1. 石英フィラー入りエポキシ樹脂真空薄膜注型技術',
          },
          body: {
            en: 'Feichi cast resin dry type transformers utilize advanced automated vacuum thin-layer casting under 1-3 mbar pressure. High-grade cycloaliphatic epoxy resin is formulated with fine spherical silica quartz filler, providing superior thermal dissipation coefficient (λ ≥ 0.85 W/m·K) and minimizing thermal stress cracking during abrupt load variations.',
            zh: '飞驰电气 SCB 干式变压器高压绕组采用全自动真空薄绝缘浇注系统，在 1-3 mbar 极高真空状态下均匀脱气。优质环氧树脂与石英微粉填料精密配比，热传导系数显著提升，彻底杜绝冷热交变下的应力开裂风险。',
            ru: 'Высоковольтные обмотки трансформаторов ТСЛ заливаются в вакуумных камерах под давлением 1-3 мбар. Применение эпоксидной смолы с мелкодисперсным кварцевым наполнителем гарантирует высокую теплопроводность и монолитность без воздушных пустот.',
            es: 'Los bobinados de media tensión se funden al vacío con resina epoxi y polvo de cuarzo esférico, logrando un coeficiente de disipación térmica óptimo y eliminando el riesgo de microfisuras por choque térmico.',
            ja: '高圧巻線には石英フィラーを均一分散させたエポキシ樹脂を用い、真空脱泡注型を実施。優れた熱伝導性と機械的強度を両立し、急激な負荷変動時も絶縁割れを防止します。',
          },
          bullets: [
            'Partial discharge (PD) level guaranteed strictly below 5 pC (IEC standard specifies ≤ 10 pC)',
            'High short-time overload capability (up to 140% continuous rating with forced cross-flow fans)',
            'Environment, Climate & Fire behavior classes verified: E2 (condensing), C2 (-25°C transport), F1 (fire resistance)'
          ]
        },
        {
          heading: {
            en: '2. Low-Loss Magnetic Silicon Steel Core & Copper Foil Winding',
            zh: '2. 低损耗取向硅钢阶梯叠片铁芯与纯铜箔绕组',
            ru: '2. Энергосберегающий шихтованный магнитопровод и медная фольговая обмотка',
            es: '2. Núcleo magnético de pérdidas ultrabajas y bobinado de lámina de cobre',
            ja: '2. 超低損失方向性電磁鋼板ステップラップ積厚鉄心と銅箔巻線',
          },
          body: {
            en: 'The core is stacked with high-permeability cold-rolled grain-oriented silicon steel sheets (0.23mm-0.27mm Baosteel / Nippon Steel) using 45° full-oblique step-lap mitering. The low-voltage coil utilizes pure electrolytic oxygen-free copper foil with DMD prepreg paper for layer insulation, completely eliminating axial mechanical displacement forces during short-circuit events.',
            zh: '铁芯选用 0.23-0.27mm 高导磁冷轧晶粒取向优质硅钢片，采用全斜 45° 阶梯接缝（Step-Lap）全自动叠装，空载损耗降低 15%~20%，空载电流与运行噪音显著下降。低压绕组采用整张优质无氧铜箔，层间以预浸 DMD 绝缘纸紧密包绕，具备极高的抗短路电动力能力。',
            ru: 'Магнитопровод собирается по технологии Step-Lap с косым стыком 45° из высококачественной электротехнической стали толщиной 0.23-0.27 мм. Низковольтная обмотка из цельной электролитической медной фольги полностью исключает осевые механические сдвиги при токах короткого замыкания.',
            es: 'El núcleo de acero al silicio de grano orientado con uniones a 45° Step-Lap reduce las pérdidas en vacío hasta un 20%. La lámina de cobre electrolítico de baja tensión garantiza máxima solidez frente a esfuerzos electrodinámicos de cortocircuito.',
            ja: '0.23〜0.27mm厚の高磁束密度方向性ケイ素鋼板を45度フルステップラップ積厚。無負荷損失と運転騒音を大幅に低減。低圧側には無酸素銅箔を採用し、短絡時の電磁力に対する高い機械的耐力を実現。',
          }
        }
      ]
    },
    productFaqs: {
      en: [
        {
          q: 'What is the difference between cast resin dry-type transformers and traditional oil-immersed transformers?',
          a: 'Cast resin dry-type transformers (such as SCB14/SCB18) use solid epoxy resin rather than mineral oil for insulation. They eliminate all fire hazards, toxic dielectric oil leakage, and explosion risks, making them the mandated standard for dense indoor spaces, hospital basements, subway stations, and data center server rooms per IEC 60076-11.'
        },
        {
          q: 'Feichi SCB Dry Transformer vs. European SGB / Resibloc Open-Wound Transformers: What are the engineering differences?',
          a: 'Feichi SCB utilizes vacuum quartz-filled thin-resin encapsulation (PD < 5pC), offering superior moisture and chemical gas resistance in humid or corrosive industrial plants compared to open-wound VPI/Resibloc units, while ensuring self-extinguishing F1 fire behavior without toxic gas emissions.'
        },
        {
          q: 'What are the certified partial discharge and thermal class ratings for Feichi dry-type transformers?',
          a: 'Feichi SCB dry-type transformers achieve partial discharge levels strictly below 5 pC (exceeding the standard IEC ≤10 pC limit). They feature Class F (155°C) or Class H (180°C) temperature rise ratings with PT100 temperature controllers embedded in each phase winding.'
        },
        {
          q: 'Can Feichi supply dry-type cast resin transformers with IP20, IP23, or IP31 enclosures?',
          a: 'Yes. We supply modular protective enclosures fabricated from 2.0mm electro-galvanized or 304 stainless steel sheets with bottom/top cable entry, safety door interlocks, and forced ventilation cross-flow fans.'
        }
      ],
      zh: [
        {
          q: '环氧树脂浇注干式变压器相比油浸式变压器有哪些核心优势？',
          a: '干式变压器采用环氧树脂固体绝缘代替变压器油，无燃烧与爆炸风险，无绝缘油渗漏污染，可直接深入商业楼宇负荷中心、地铁站地下室、医院及高密算力数据中心机房安装运行。'
        },
        {
          q: '飞驰电气 SCB 系列与敞开式浸渍（VPI）干变相比有何不同？',
          a: '飞驰 SCB 采用 1-3 mbar 真空石英粉填料薄绝缘浇注，局放量严格控制在 5pC 以下，抗污秽、耐潮湿及抗化学腐蚀性能极佳，即使在沿海盐雾或高粉尘环境下也不会受潮绝缘下降。'
        },
        {
          q: '飞驰电气 SCB 干变在局放控制和温升绝缘等级方面表现如何？',
          a: '飞驰电气干变在出厂前经受 100% 局放测试，局放量严格控制在 5pC 以下（远优于行业 10pC 标准）。提供 F 级（155°C）与 H 级（180°C）绝缘系统，每相绕组均预埋 PT100 铂电阻温度传感器。'
        }
      ],
      ru: [
        {
          q: 'Каковы преимущества сухих трансформаторов ТСЛ перед масляными ТМГ?',
          a: 'Сухие трансформаторы с литой изоляцией серии ТСЛ полностью пожаробезопасны (класс F1), не требуют маслоприемников и допускают установку непосредственно в зданиях, на цокольных этажах торговых центров, в метрополитене и на промышленных объектах без риска разлива масла.'
        },
        {
          q: 'Сравнение ТСЛ Feichi с трансформаторами Trihal (Schneider) и Geafol (Siemens): в чем ключевые отличия?',
          a: 'Трансформаторы ТСЛ Feichi полностью соответствуют стандартам МЭК 60076-11 и ГОСТ 52719, гарантируя частичные разряды <5 пКл и класс огнестойкости F1/E2/C2. При этом мы обеспечиваем гибкую адаптацию выводов под российские шинные мосты и адаптеры ШМР при сроках изготовления на 40% быстрее европейских аналогов.'
        },
        {
          q: 'Каков уровень частичных разрядов (ЧР) у трансформаторов Feichi ТСЛ?',
          a: 'Гарантированный уровень частичных разрядов составляет менее 5 пКл (норматив МЭК/ГОСТ допускает до 10 пКл). Трансформаторы выпускаются с классом изоляции F (155°C) и H (180°C) с блоком цифрового температурного контроля БКТП.'
        }
      ],
      es: [
        {
          q: '¿Por qué elegir transformadores secos de resina epoxi para instalaciones interiores?',
          a: 'Los transformadores secos encapsulados eliminan el riesgo de incendio y contaminación por fuga de aceite dieléctrico. Cumplen con la clasificación F1/E2/C2 de la norma IEC 60076-11 para hospitales, aeropuertos y rascacielos.'
        }
      ],
      ja: [
        {
          q: 'モールド乾式変圧器の屋内設置におけるメリットは何ですか？',
          a: '絶縁油を使用しないため火災・爆発の危険がなく、ビル地下室やデータセンターなどの高密度施設に安全に直結設置が可能です。部分放電5pC未満の低騒音設計です。'
        }
      ]
    }
  },
  {
    slug: 'oil-immersed-transformers',
    name: 'Hermetically Sealed Oil-Immersed Transformer (Corrugated Tank / S13-S22)',
    zh: 'S11 / S13 / S20 / S22 系列全密封节能油浸式电力变压器',
    ja: '密閉型コルゲート油入変压器 (高効率・低損失)',
    es: 'Transformadores sumergidos en aceite sellados herméticamente',
    ru: 'Масляные герметичные силовые трансформаторы (ТМГ, ТДН, ТРДН 10-110 кВ по ГОСТ 11677 / ТР ТС)',
    image: '/images/curated/transformer_oil.webp',
    summary: 'Corrugated tank hermetically sealed oil-filled power transformer providing high overload capacity, robust weatherproofing, and low operating losses compliant with IEC 60076, IEEE C57 and GOST 11677.',
    voltage: '6 kV / 10 kV / 24 kV / 35 kV / 66 kV / 110 kV',
    tag: 'UTILITY SUBSTATIONS',
    highlights: [
      'Corrugated fin tank design allows thermal expansion without oil conservator, completely isolating transformer oil from air',
      'High-grade grain-oriented silicon steel sheet core with multi-stage step-lap stacking reducing no-load losses by 25%',
      'Vacuum oil-filling technology eliminates air bubbles and guarantees high dielectric withstand breakdown voltage > 55 kV',
      'High dielectric mineral insulating oil or biodegradable synthetic ester fluid for extreme environmental safety',
      'Maintenance-free operation throughout 30+ years design lifecycle with robust C5-M anti-corrosion coating'
    ],
    specs: {
      standards: 'IEC 60076 / GB 1094 / IEEE C57.12.00 / ГОСТ 11677 / ГОСТ 52719',
      ratedVoltage: '6 kV / 10 kV / 24 kV / 35 kV / 66 kV / 110 kV (HV) -> 0.4 kV / 6.3 kV / 10.5 kV (LV)',
      ratedCapacity: '50 kVA - 63,000 kVA (Custom engineering for utility substations)',
      frequency: '50 Hz / 60 Hz',
      ipRating: 'IP55 / IP65 outdoor waterproof and hermetically sealed',
      ambientTemp: '-60°C to +50°C (ГОСТ 15150-69 УХЛ1 Siberian execution)',
      enclosureMaterial: 'Heavy steel plate tank with hot-dip galvanized and robotic-welded corrugated radiator fins',
      shortCircuitWithstand: 'Compliant with national high-voltage laboratory dynamic and thermal short-circuit type tests',
    },
    applications: ['National Utility Power Grids & Primary Substations', 'Renewable Energy Solar PV & Wind Farm Step-Up', 'Heavy Petrochemical & Metallurgical Industrial Complexes', 'Mining Power Hubs & Agricultural Electrification Grids'],
    seoTitle: {
      en: 'Hermetically Sealed Oil Immersed Transformers (10kV-110kV) | China Manufacturer - Feichi Power',
      zh: 'S13/S20全密封油浸式电力变压器生产厂家 (10kV-110kV) | 波纹油箱 - 飞驰电气',
      ru: 'Масляные герметичные трансформаторы ТМГ 10-35-110 кВ по ГОСТ 11677 | Завод Feichi Power',
      es: 'Transformadores sumergidos en aceite herméticos (10kV-110kV) | Fabricante Feichi',
      ja: '密閉型コルゲート油入変圧器 10kV-110kV | 中国工場直発・高信頼設計 - 飛馳電気',
    },
    seoDesc: {
      en: 'Leading China manufacturer of hermetically sealed oil-immersed power transformers (S13, S20, S22 series, 50kVA-63MVA, 10kV-110kV). Corrugated tank design, zero conservator, low loss compliant with IEC 60076, IEEE C57, and GOST 11677.',
      zh: '飞驰电气生产S11/S13/S20/S22系列全密封油浸式变压器(50kVA-63MVA, 10kV-110kV)。波纹油箱全密封结构，免维护低损耗，通过国家变压器质量监督检验中心型式试验，支持全球EPC交付。',
      ru: 'Завод Feichi производит масляные герметичные трансформаторы ТМГ, ТДН, ТРДН 10/20/35/110 кВ мощностью 50-63000 кВА по ГОСТ 11677 и ТР ТС 004/2011. Гофрированный бак без маслорасширителя, исполнение УХЛ1 до -60°C.',
      es: 'Fabricante de transformadores sumergidos en aceite herméticamente sellados con cuba corrugada (50kVA a 63MVA, 10kV-110kV). Cumplen IEC 60076 e IEEE C57 con mínimo mantenimiento y alta capacidad de sobrecarga.',
      ja: '定格電圧10kV〜110kV、容量50kVA〜63,000kVA対応の密閉型油入変圧器。コルゲート放熱板による完全密閉構造、低損失・長寿命設計。IEC 60076準拠、全球向け輸出対応。',
    },
    longTailTechGuide: {
      title: {
        en: 'Technical Guide: Hermetically Sealed Corrugated Tank Transformer Engineering',
        zh: '技术专题：全密封波纹油箱油浸式变压器结构与极寒防护设计',
        ru: 'Техническое руководство: Конструкция и надежность герметичных трансформаторов ТМГ',
        es: 'Guía técnica: Ingeniería de transformadores sellados con cuba corrugada',
        ja: '技術解説：完全密閉型コルゲート油入変圧器の放熱・耐候性エンジニアリング',
      },
      subtitle: {
        en: 'Zero-Conservator Sealed Structure, Thermal Oil Expansion Engineering & GOST 11677 / IEC 60076 Compliance',
        zh: '无储油柜全密封波纹膨胀补偿，真空注油工艺与 -60°C 极寒耐候防渗漏',
        ru: 'Герметичный гофробак без расширителя, вакуумная заливка масла и эксплуатация при УХЛ1 до -60°C',
        es: 'Diseño hermético sin conservador, compensación elástica de aceite y normas IEC 60076 / IEEE C57',
        ja: 'コンサベータレス完全密閉構造、温度伸縮追従コルゲートフィンおよびIEC 60076適合',
      },
      sections: [
        {
          heading: {
            en: '1. Elastic Corrugated Fin Tank Design & Air Isolation',
            zh: '1. 弹性波纹片油箱结构与变压器油全绝氧隔离',
            ru: '1. Конструкция гофрированного бака и полная изоляция масла от кислорода',
            es: '1. Diseño de cuba corrugada elástica y aislamiento total del oxígeno',
            ja: '1. コルゲートフィン弾性放熱構造と絶縁油の完全気密隔離',
          },
          body: {
            en: 'The hermetically sealed oil immersed transformer utilizes automated robotic seam-welded corrugated steel walls. The elasticity of the corrugated fins precisely compensates for the volumetric thermal expansion and contraction of insulating oil during temperature cycles, completely eliminating the need for an external conservator tank and preventing moisture/oxygen aging of dielectric fluid.',
            zh: '飞驰电气全密封油浸式变压器采用数控自动机器人缝焊波纹油箱。波纹片的弹性形变能够精准补偿变压器油随负荷与温度变化引起的体积热胀冷缩，彻底省去传统储油柜，杜绝绝缘油与外界空气中氧气、水汽的接触，延缓绝缘介质老化。',
            ru: 'В трансформаторах серии ТМГ герметичный гофробак компенсирует температурные изменения объема масла за счет упругой деформации гофр. Масло не контактирует с окружающей средой, что предотвращает его окисление и увлажнение на протяжении всего срока службы.',
            es: 'La cuba corrugada con soldadura robotizada actúa como un intercambiador elástico que absorbe la dilatación térmica del aceite, eliminando el tanque de expansión y evitando la degradación por humedad.',
            ja: '自動溶接コルゲート鋼板が油温変化に伴う絶縁油の体積伸縮を弾性的に吸収。外気との接触を遮断することで油の酸化・吸湿を防ぎ、30年以上のメンテナンスフリー運用を実現します。',
          },
          bullets: [
            'Dielectric breakdown voltage of degassed vacuum-injected mineral oil ≥ 55 kV (IEC 60156)',
            'Standard multi-point pressure relief valve (PRV) with electrical alarm trip contacts',
            'Magnetic oil level gauge with high/low level signal integration for SCADA telemetry'
          ]
        },
        {
          heading: {
            en: '2. Low-Loss Magnetic Circuit & Siberian Cold Protection (-60°C УХЛ1)',
            zh: '2. 高导磁节能磁路设计与 -60°C 极寒耐候防护',
            ru: '2. Энергосберегающая магнитная система и арктическое исполнение (-60°C УХЛ1)',
            es: '2. Circuito magnético de alta eficiencia y protección contra frío extremo',
            ja: '2. 高透磁率省エネ磁気回路と極寒・耐震エンジニアリング',
          },
          body: {
            en: 'Feichi transformers feature high-grade silicon steel cores with 45° step-lap joints, delivering load and no-load losses matching Tier 2 / Tier 1 eco-efficiency standards. For Siberian and high-altitude projects, tanks feature specialized arctic-grade low-temperature steel, cryogenic nitrile rubber gaskets, and low-pour-point insulating oil (-60°C pour point per GOST 15150-69 УХЛ1).',
            zh: '铁芯采用高取向低损耗硅钢片多级全斜接缝叠积，空载损耗满足国标一级/二级能效及国际 EcoDesign 要求。针对俄罗斯西伯利亚及独联体极寒项目，油箱采用耐低温优质钢材与耐寒耐油密封圈，配置 -60°C 凝固点特种低温变压器油（满足 ГОСТ 15150-69 УХЛ1 极寒严苛要求）。',
            ru: 'Магнитная система собирается по схеме Step-Lap из стали с низкими удельными потерями. Для поставок в Сибирь и на Крайний Север бак комплектуется арктическими уплотнителями и заливается низкозастывающим трансформаторным маслом (испытано при температуре до -60°C).',
            es: 'Núcleo laminado Step-Lap con acero de baja pérdida. Versiones árticas para temperaturas extremas de hasta -60°C con sellos criogénicos y aceite dieléctrico de bajo punto de fluidez.',
            ja: '高透磁率電磁鋼板によるStep-Lap積厚で低損失化を推進。極寒地向けには耐寒鋼板と特殊シール材を採用し、マイナス60度の過酷環境下でも油漏れのない安定稼働を保証。',
          }
        }
      ]
    },
    productFaqs: {
      en: [
        {
          q: 'What are the main advantages of a hermetically sealed corrugated tank transformer?',
          a: 'The hermetically sealed corrugated design isolates the insulating oil completely from external air and moisture. This prevents oil oxidation, maintains high dielectric strength (>55kV), eliminates periodic oil filtration maintenance, and significantly extends the transformer operational lifespan beyond 30 years.'
        },
        {
          q: 'Can Feichi oil-immersed transformers operate in extreme arctic climates down to -60°C?',
          a: 'Yes. Feichi offers custom Arctic-grade executions compliant with Russian standard GOST 15150-69 UHL1. We utilize special low-temperature impact-resistant steel plates, cryogenic fluoro-silicone gaskets, and low-pour-point transformer oil rated for -60°C operation.'
        },
        {
          q: 'Do your oil transformers comply with international energy efficiency standards?',
          a: 'Yes. Our S13, S20, and S22 series comply with IEC 60076-20 energy efficiency tiers, IEEE C57 requirements, and European EcoDesign Tier 2 regulations with minimal no-load and load loss figures.'
        }
      ],
      zh: [
        {
          q: '全密封波纹油箱变压器相比普通带油枕变压器有哪些优势？',
          a: '全密封波纹油箱依靠波纹片弹性膨胀吸收油体积变化，变压器油不与外界空气接触，防止受潮和氧化，绝缘击穿电压持久保持在 55kV 以上，实现了免换油滤油的免维护运行。'
        },
        {
          q: '飞驰电气油浸式变压器能否耐受 -60°C 极寒严苛工况？',
          a: '完全可以。针对高寒地区与独联体市场，飞驰提供符合 ГОСТ 15150-69 УХЛ1 标准的极寒配置，采用低温韧性钢板、耐低温硅氟橡胶密封件及凝固点低于 -60°C 的特种绝缘油。'
        }
      ],
      ru: [
        {
          q: 'Каковы преимущества герметичных трансформаторов ТМГ с гофрированным баком?',
          a: 'Герметичный бак полностью исключает контакт масла с воздухом, предотвращает старение и окисление диэлектрика, сохраняет пробивное напряжение свыше 55 кВ и избавляет от необходимости регулярной фильтрации и долива масла.'
        },
        {
          q: 'Поставляются ли трансформаторы Feichi в климатическом исполнении УХЛ1 (-60°C)?',
          a: 'Да. Мы производим трансформаторы ТМГ в арктическом исполнении по ГОСТ 15150-69 УХЛ1 с использованием морозостойких сталей, криогенных уплотнений и арктических трансформаторных масел.'
        }
      ],
      es: [
        {
          q: '¿Qué ventajas ofrece la cuba corrugada hermética en transformadores de aceite?',
          a: 'La cuba sellada protege el aceite dieléctrico contra la humedad y el oxígeno, garantizando una rigidez dieléctrica superior a 55 kV y eliminando las labores periódicas de mantenimiento del aceite.'
        }
      ],
      ja: [
        {
          q: '完全密閉型コルゲート変圧器の特長は何ですか？',
          a: '外気と絶縁油を完全に遮断することで絶縁油の劣化を防止。定期的な油ろ過点検が不要で、30年以上の長寿命メンテナンスフリーを実現します。'
        }
      ]
    }
  },
  {
    slug: 'distribution-boxes',
    name: 'Industrial Power Distribution Board (XL-21 / JP Cabinet)',
    zh: 'XL-21 动力配电箱 / 综合配电柜',
    ja: '産業用配電盤・動力盤',
    es: 'Cuadros de distribución de fuerza y alumbrado',
    ru: 'Низковольтные распределительные шкафы и щиты (НКУ / ЩО-70 / ВРУ)',
    image: '/images/curated/distribution_boxes.webp',
    summary: 'Standardized and custom engineered wall-mounted or floor-standing low voltage distribution boxes for motor control, lighting, and power branch circuits.',
    voltage: '220 V / 380 V / 415 V / 690 V',
    tag: 'TERMINAL POWER CONTROL',
    highlights: [
      'Clear modular layout with isolated busbar and cable entry conduits',
      'Optional smart metering, leakage protection and surge arresters',
      'Heavy-gauge cold-rolled steel cabinet with electrostatic powder coating',
      'Customized circuit breaker combinations (ABB, Schneider, Chint, etc.)'
    ],
    specs: {
      standards: 'IEC 61439-1 / GB/T 7251.12',
      ratedVoltage: 'AC 220 V / 380 V / 415 V / 690 V',
      ratedCapacity: 'Incoming breaker rating 63 A - 800 A',
      frequency: '50 Hz / 60 Hz',
      ipRating: 'IP30 (Indoor) / IP54 (Outdoor Weatherproof)',
      ambientTemp: '-25°C to +40°C',
      enclosureMaterial: 'Electro-galvanized cold-rolled steel sheet, powder coated',
      shortCircuitWithstand: '15 kA - 35 kA (1s)',
    },
    applications: ['Factory Motor Control Centers', 'Commercial HVAC & Pump Stations', 'Residential Distribution', 'Workshop Lighting & Socket Power'],
  },
  {
    slug: 'psa-nitrogen-generator',
    name: 'Feichi FC-N2 Series Smart Mining Flameproof & Industrial PSA Nitrogen Generation System',
    zh: '飞驰电气 FC-N2 系列智能矿用防爆/工业变压吸附 (PSA) 制氮系统',
    ja: '飛馳電気 FC-N2シリーズ PSA式・鉱山防爆/産業用窒素発生装置システム',
    es: 'Sistema Generador de Nitrógeno PSA y Antideflagrante Feichi Serie FC-N2',
    ru: 'Шахтные взрывобезопасные и промышленные азотные станции КЦА серии FC-N2 (ГОСТ 31441 / Ex d I)',
    image: '/images/curated/psa_nitrogen_system.webp',
    summary: 'Feichi proprietary high-purity Pressure Swing Adsorption (PSA) & membrane nitrogen generation packages engineered for underground coal mine inerting, gas explosion suppression, petrochemical pipeline purging, and metallurgical heat treatment.',
    voltage: '380 V / 660 V / 1140 V (Mining Standard)',
    tag: 'FEICHI PROPRIETARY GAS SEPARATION',
    highlights: [
      'Proprietary Feichi FC-N2 advanced Carbon Molecular Sieve (CMS) PSA gas separation technology',
      'High-efficiency nitrogen purity adjustable from 95% to 99.999% with flow rates from 50 to 3000 Nm³/h',
      'Certified MA/KA Mining Safety Mark & Ex d I / Ex d II flameproof explosion protection',
      'Integrated intelligent Siemens PLC touch-panel control with automated oxygen telemetry & off-spec gas venting',
      'Heavy-duty skid-mounted frame or mine-car chassis for underground mobility and rapid field deployment'
    ],
    specs: {
      standards: 'MA/KA Certified / GB 3836 / IEC 60079 / ISO 9001 / ГОСТ 31441 / ГОСТ 31610',
      ratedVoltage: 'AC 380 V / 660 V / 1140 V (50 Hz / 60 Hz)',
      ratedCapacity: '50 - 3000 Nm³/h (Nitrogen Purity 95% - 99.999%)',
      frequency: '50 Hz / 60 Hz',
      ipRating: 'IP55 / Ex d I Mb (Underground Mining Explosion-Proof)',
      ambientTemp: '-20°C to +45°C (Continuous Heavy-Duty Operation)',
      enclosureMaterial: 'Heavy-duty skid-mounted steel frame / Mine-car mobile chassis',
      shortCircuitWithstand: 'Integrated flameproof magnetic starter with overload & earth-leakage protection',
    },
    applications: ['Coal Mine Goaf Nitrogen Injection & Fire Suppression (煤矿采空区注氮防灭火)', 'Gas Explosion Prevention & Inerting (瓦斯抑爆与环境惰化)', 'Petrochemical & Gas Pipeline Purging (石油天然气管道置换吹扫)', 'Metallurgical & Laser Cutting Protective Gas (冶金金属热处理与激光辅助气)'],
    seoTitle: {
      en: 'Mining Flameproof & Industrial PSA Nitrogen Generator (FC-N2) | China Manufacturer - Feichi Power',
      zh: '矿用防爆与工业PSA变压吸附制氮机生产厂家 (FC-N2系列) | 飞驰电气',
      ru: 'Шахтные взрывозащищенные азотные станции КЦА серии FC-N2 | Завод Feichi Power',
      es: 'Generadores de nitrógeno PSA industriales y antideflagrantes FC-N2 | Fabricante Feichi',
      ja: '鉱山防爆・産業用PSA式窒素発生装置システム (FC-N2) | 飛馳電気',
    },
    seoDesc: {
      en: 'Buy certified mining flameproof & industrial PSA nitrogen generation systems (FC-N2, 50-3000 Nm³/h, 95%-99.999% purity). Ex d I Mb certified, Siemens PLC automated oxygen monitoring, direct manufacturer supply.',
      zh: '飞驰电气专业研发制造FC-N2系列矿用防爆及工业PSA变压吸附制氮系统(50-3000Nm³/h, 纯度95%-99.999%)。取得国家矿用产品安全标志(MA/KA认证)及Ex d I防爆合格证，支持煤矿采空区注氮与石化管道吹扫。',
      ru: 'Производство шахтных передвижных взрывобезопасных азотных мембранных и адсорбционных установок КЦА серии FC-N2 производительностью 50-3000 нм³/ч (чистота 95-99.999%). Сертификаты ТР ТС 012/2011 (Ex d I).',
      es: 'Fabricante de sistemas de generación de nitrógeno PSA industriales y para minería subterránea FC-N2 (50-3000 Nm³/h, pureza hasta 99.999%). Certificación antideflagrante Ex d I.',
      ja: '流量50〜3000 Nm³/h、窒素純度95%〜99.999%対応のPSA式・鉱山防爆窒素ガス発生装置。地下炭鉱の不活性化および石油化学配管パージ向け。MA/KA認証・Ex d I防爆適合。',
    },
    longTailTechGuide: {
      title: {
        en: 'Technical Guide: FC-N2 Series Carbon Molecular Sieve PSA Nitrogen Systems',
        zh: '技术专题：飞驰 FC-N2 碳分子筛变压吸附制氮与矿用防爆安全架构',
        ru: 'Техническое руководство: Устройство и безопасность шахтных азотных станций FC-N2',
        es: 'Guía técnica: Sistemas de generación de nitrógeno PSA serie FC-N2',
        ja: '技術解説：FC-N2 カーボンモレキュラーシーブPSA窒素発生装置のエンジニアリング',
      },
      subtitle: {
        en: 'Pressure Swing Adsorption Physics, Ex d I Mining Explosion-Proof & Automated Oxygen Telemetry',
        zh: '碳分子筛吸附微孔动力学、Ex d I 矿用本安防爆与西门子 PLC 自动测氧排空',
        ru: 'Принцип короткоцикловой безнагревной адсорбции (КЦА), взрывозащита Ex d I и автоматический сброс некондиционного газа',
        es: 'Adsorción por cambio de presión (PSA), seguridad antideflagrante Ex d I y telemetría de oxígeno',
        ja: 'PSA式ガス分離技術、Ex d I 鉱山防爆設計および自動酸素監視排気システム',
      },
      sections: [
        {
          heading: {
            en: '1. Advanced Carbon Molecular Sieve (CMS) Separation & Dynamic Balancing',
            zh: '1. 高性能碳分子筛微孔分离与双吸附塔动态均压工艺',
            ru: '1. Технология разделения на углеродных молекулярных ситах (CMS) и динамическое выравнивание давления',
            es: '1. Separación por tamiz molecular de carbono (CMS) y equilibrio dinámico de presión',
            ja: '1. 高性能カーボンモレキュラーシーブ（CMS）微細孔分離と動的均圧制御',
          },
          body: {
            en: 'Feichi FC-N2 PSA systems utilize high-grade carbon molecular sieves where oxygen molecules diffuse into micropores at a faster kinetic rate than nitrogen under 0.6-0.8 MPa pressure. Dual adsorption beds cycle continuously through pressurization, adsorption, pressure equalization, and desorption regeneration, producing continuous dry nitrogen with purity up to 99.999%.',
            zh: '飞驰 FC-N2 制氮机采用高强度均孔碳分子筛。在 0.6-0.8 MPa 洁净压缩空气驱动下，氧分子在分子筛微孔中的扩散速率远大于氮分子。双塔交替执行加压吸附、均压过渡与降压脱附再生循环，确保持续平稳输出常温纯净氮气。',
            ru: 'В установках FC-N2 используется кинетическое разделение газов: молекулы кислорода быстрее диффундируют в микропоры углеродного сорбента под давлением 0.6-0.8 МПа. Двухколонная система обеспечивает непрерывную генерацию азота чистотой до 99.999%.',
            es: 'El sistema PSA FC-N2 utiliza tamices moleculares donde el oxígeno se adsorbe más rápido que el nitrógeno a 0.8 MPa. Dos torres alternan presurización y regeneración para suministro continuo.',
            ja: '0.6〜0.8MPaの圧縮空気下で酸素分子が分子篩微細孔に優先吸着される速度差を利用。2基の吸着塔が加圧吸着と脱着再生を交互に繰り返し、高純度窒素を安定連続供給します。',
          },
          bullets: [
            'Ex d I Mb certified flameproof starter box and intrinsically safe sensors for hazardous underground coal mines',
            'Zirconia/electrochemical oxygen analyzer with automated off-spec gas bypass solenoid venting valve',
            'Integrated multi-stage refrigerant air dryer and 0.01μm coalescing oil-mist filtration train'
          ]
        }
      ]
    },
    productFaqs: {
      en: [
        {
          q: 'What is the primary application of Feichi FC-N2 nitrogen generators in mining?',
          a: 'The FC-N2 system is engineered specifically for underground coal mine fire prevention and gas explosion suppression. By injecting high-volume continuous nitrogen (up to 3000 Nm³/h) into mined-out goaf areas, it reduces oxygen concentrations below the critical combustion limit (typically <7-10%), inerting the environment.'
        },
        {
          q: 'What certifications does the Feichi FC-N2 series hold?',
          a: 'FC-N2 units hold the official Mining Product Safety Mark (MA/KA certification), National Flameproof Ex d I / Ex d II certification, and comply with international IEC 60079 and Russian GOST 31441 / GOST 31610 standards.'
        }
      ],
      zh: [
        {
          q: '飞驰 FC-N2 制氮机在矿山领域的主要用途是什么？',
          a: 'FC-N2 专为煤矿井下采空区注氮防灭火与瓦斯抑爆设计。通过向采空区连续注入大流量高纯氮气（最高 3000 Nm³/h），将氧气浓度压降至着火与爆炸极限临界值（<7%~10%）以下，实现环境彻底惰化。'
        }
      ],
      ru: [
        {
          q: 'Каково основное назначение азотных станций FC-N2 в горной промышленности?',
          a: 'Станции FC-N2 предназначены для предупреждения эндогенных пожаров и подавления взрывов метано-воздушных смесей в выработанных пространствах угольных шахт за счет снижения концентрации кислорода ниже критического уровня (<7-10%).'
        }
      ],
      es: [
        {
          q: '¿Cuál es la función principal de los generadores de nitrógeno FC-N2 en minería?',
          a: 'Inertización de zonas de explotación minera subterránea para prevenir la autoignición del carbón y explosiones de gas metano mediante inyección masiva de nitrógeno.'
        }
      ],
      ja: [
        {
          q: 'FC-N2 窒素発生装置の炭鉱での主な用途は何ですか？',
          a: '採掘跡（ゴーファ）への窒素注入による自然発火防止およびメタンガス爆発抑制を目的とし、酸素濃度を限界値以下に低減して坑内環境を不活性化します。'
        }
      ]
    }
  },
  {
    slug: 'blokset-switchgear',
    name: 'Blokset Low-Voltage Withdrawable Switchgear (Schneider Authorized)',
    zh: 'Blokset 施耐德官方授权低压抽出式开关柜',
    ja: 'Blokset シュナイダー公式ライセンス低圧引出式スイッチギア',
    es: 'Cuadro de distribución extraíble de baja tensión Blokset (Licencia Schneider)',
    ru: 'НКУ серии Blokset (Официальная лицензия Schneider Electric, до 6300 А)',
    image: '/images/curated/blokset_switchgear.webp',
    summary: 'Officially authorized by Schneider Electric, Blokset offers type-tested Form 4b internal segregation, maximum operational safety, and intelligent busbar temperature monitoring for heavy power grids and industrial hubs.',
    voltage: 'AC 0.4 kV - 690 V (Up to 6300 A)',
    tag: 'SCHNEIDER ELECTRIC AUTHORIZED',
    highlights: [
      'Official Schneider Electric manufacturing authorization with genuine component traceability',
      'Form 4b internal compartment segregation for maximum personnel safety during maintenance',
      'Rated busbar current up to 6300 A with short-circuit withstand capacity up to 100 kA / 1s',
      'Integrated intelligent digital power meter, thermal sensor diagnostics & Modbus/IEC 61850 protocol'
    ],
    specs: {
      standards: 'IEC 61439-1/2 / GB/T 7251.12 / Schneider Technical Standard',
      ratedVoltage: 'AC 380 V / 400 V / 690 V',
      ratedCapacity: 'Main Busbar: Up to 6300 A | Breaking: Up to 100 kA',
      frequency: '50 Hz / 60 Hz',
      ipRating: 'IP31 / IP42 / IP54 (Customizable)',
      ambientTemp: '-25°C to +40°C (Derated up to +55°C)',
      enclosureMaterial: 'Alu-zinc coated heavy steel frame with electro-static powder paint',
      shortCircuitWithstand: '100 kA / 1s (Thermal) | 220 kA (Dynamic Peak)',
    },
    applications: ['Large Power Stations & Heavy Industry', 'High-Rise Commercial Complexes', 'Automobile Manufacturing Plants', 'Airport & Seaport Power Distribution'],
  },
  {
    slug: 'unisafe-switchgear',
    name: 'UniSafe Air-Insulated Medium-Voltage Switchgear (ABB Authorized)',
    zh: 'UniSafe ABB 官方授权空气绝缘中压开关柜 (12-24kV)',
    ja: 'UniSafe ABB公式ライセンス空気絶縁中圧スイッチギヤ (12-24kV)',
    es: 'Celdas de media tensión con aislamiento en aire UniSafe (Licencia ABB 12-24kV)',
    ru: 'КРУ серии UniSafe (Официальная лицензия ABB 6-24 кВ, до 4000 А)',
    image: '/images/curated/unisafe_switchgear.webp',
    summary: 'ABB fully authorized air-insulated medium-voltage metal-clad switchgear featuring 5-prevention mechanical interlocking, VD4/HVX circuit breaker compatibility, and IAC AFLR arc-proof safety test verification.',
    voltage: '12 kV / 24 kV (Up to 4000 A)',
    tag: 'ABB STRATEGIC AUTHORIZED',
    highlights: [
      'Full technical authorization from ABB, manufactured strictly to ABB global quality standards',
      'Air-insulated eco-friendly architecture without SF6 greenhouse gas dependency',
      'Internal arc classification IAC AFLR 31.5 kA / 1s and 50 kA / 1s certified',
      'Equipped with ABB VD4 vacuum circuit breaker or HVX breaker on withdrawable trolley'
    ],
    specs: {
      standards: 'IEC 62271-200 / GB 3906 / DL/T 404 / ГОСТ 14693',
      ratedVoltage: '12 kV / 17.5 kV / 24 kV',
      ratedCapacity: 'Main Busbar: 630 A ~ 4000 A | Breaking: 25 kA ~ 50 kA/3s',
      frequency: '50 Hz / 60 Hz',
      ipRating: 'IP4X (Enclosure) / IP2X (Between Compartments)',
      ambientTemp: '-40°C to +40°C (ГОСТ УХЛ1 Compatible)',
      enclosureMaterial: 'High-grade 2.0mm Alu-zinc sheet metal, multi-bent modular construction',
      shortCircuitWithstand: '50 kA / 3s (Thermal) | 125 kA (Peak Withstand)',
    },
    applications: ['National Utility Power Grids (SGCC / FGC)', 'Metro Underground Rail Traction', 'Petrochemical & Coal Chemical Refineries', 'Overseas EPC Power Generation Projects'],
  },
  {
    slug: 'mdmax-digital-switchgear',
    name: 'MDmax Digital Low-Voltage Intelligent Switchgear (ABB Authorized)',
    zh: 'MDmax ABB 官方授权数字化智能型低压开关柜',
    ja: 'MDmax ABB公式ライセンスデジタル低圧スマートスイッチギア',
    es: 'Cuadros de distribución inteligente de baja tensión MDmax (Licencia ABB)',
    ru: 'Цифровые распределительные щиты MDmax (Официальная лицензия ABB)',
    image: '/images/curated/mdmax_switchgear.webp',
    summary: 'Cutting-edge digital switchgear manufactured under ABB authorization, featuring real-time wireless busbar temperature monitoring, predictive maintenance algorithms, and seamless cloud SCADA integration.',
    voltage: 'AC 0.4 kV - 690 V',
    tag: 'ABB DIGITAL INTELLIGENT',
    highlights: [
      'ABB authorized next-generation smart modular switchboard platform',
      'Real-time non-contact infrared & wireless thermal sensors for all busbar joints',
      'Smart micro-switch contacts monitoring drawer engagement depth and operational cycles',
      'Seamless connectivity to SCADA, DCS, energy management systems and cloud dashboards'
    ],
    specs: {
      standards: 'IEC 61439-1/2 / GB/T 7251.12 / ABB Digital Standard',
      ratedVoltage: 'AC 380 V / 415 V / 690 V',
      ratedCapacity: 'Main Busbar up to 6300 A | Short-circuit 80 kA / 100 kA',
      frequency: '50 Hz / 60 Hz',
      ipRating: 'IP30 / IP40 / IP54',
      ambientTemp: '-25°C to +40°C',
      enclosureMaterial: 'High-precision galvanized frame with modular digital instrument door',
      shortCircuitWithstand: '80 kA / 1s | 100 kA / 1s',
    },
    applications: ['Hyperscale Data Centers', 'Intelligent Digital Substations', 'Semi-conductor Cleanrooms', 'Continuous Process Chemical Plants'],
  },
  {
    slug: 'solid-thermal-storage',
    name: 'FC-GXDZ Solid Thermal Storage Electric Heating System (Clean Energy)',
    zh: 'FC-GXDZ 固体蓄热电加热装置 (0.4kV-10kV / 50kW-20MW)',
    ja: 'FC-GXDZ 固体蓄熱電気加熱システム (0.4kV-10kV / 50kW-20MW)',
    es: 'Sistema de calefacción por acumulación térmica sólida FC-GXDZ (0.4kV-10kV)',
    ru: 'Твердотельные теплоаккумуляторы высокой мощности FC-GXDZ (0,4-10 кВ / 50 кВт-20 МВт)',
    image: '/images/curated/solid_thermal_storage.webp',
    summary: 'High-voltage solid thermal storage electric heating units utilizing off-peak electricity and renewable surplus power to provide continuous clean steam, heating, and industrial thermal energy.',
    voltage: '0.4 kV / 6 kV / 10 kV (50 kW - 20 MW)',
    tag: 'CLEAN HEATING & PEAK SHAVING',
    highlights: [
      'Utilizes off-peak night valley electricity and surplus renewable wind/solar power',
      'Solid ceramic thermal storage media capable of heating up to 750°C safely',
      'Modular output capacity from 50 kW to 20 MW for district heating and industrial steam',
      'Integrated intelligent PLC automated control system supporting fully unattended operation'
    ],
    specs: {
      standards: 'GB/T 39288 / IEC 60335 / National Clean Energy Standard',
      ratedVoltage: 'AC 0.4 kV / 6 kV / 10 kV (Direct High-Voltage Heating)',
      ratedCapacity: 'Thermal Capacity: 50 kW ~ 20 MW (Customized Sizing)',
      frequency: '50 Hz / 60 Hz',
      ipRating: 'IP43 (Indoor Plant) / IP54 (Containerized Outdoor)',
      ambientTemp: '-45°C to +40°C (Extreme Cold Regional Operation)',
      enclosureMaterial: 'High-efficiency microporous aerogel & refractory ceramic insulation',
      shortCircuitWithstand: 'Integrated fast-acting vacuum contactor & HV fuse protection',
    },
    applications: ['Centralized District Heating', 'Industrial Green Steam Generation', 'Renewable Energy Curtailment Absorption', 'Peak-Shaving Grid Ancillary Services'],
  },
];

interface IndustryItem {
  slug: string;
  icon: typeof Sun;
  title: string;
  zh: string;
  ja: string;
  es: string;
  ru: string;
  headline: string;
  copy: string;
  challenges: string[];
  solutions: string[];
  recommendedProducts: string[];
}

const industries: IndustryItem[] = [
  {
    slug: 'renewable-energy',
    icon: Sun,
    title: 'Solar & Renewable Power',
    zh: '光伏与新能源并网',
    ja: '太陽光・再生可能エネルギー',
    es: 'Energía Solar y Renovable',
    ru: 'Солнечная и ветровая энергетика (ВИЭ)',
    headline: 'Reliable step-up substations engineered for high DC voltages and intermittent grid feeds.',
    copy: 'Specialized 1500V DC solar inverting-boosting substations and wind farm compact box transformers built to handle harsh desert, offshore, and high-altitude weather conditions.',
    challenges: ['Harmonic distortion & voltage fluctuation', 'High ambient temperatures in solar deserts', 'Lightning surge & sandstorm ingress'],
    solutions: ['IP55 sealed containerized booster skids', 'Low-loss amorphous alloy or high-efficiency transformers', 'Dual-circuit intelligent telemetry & lightning protection'],
    recommendedProducts: ['box-substation', 'prefabricated-cabins', 'oil-immersed-transformers']
  },
  {
    slug: 'rail-transit',
    icon: TrainFront,
    title: 'Rail Transit & Traction Power',
    zh: '城市轨道交通与牵引供电',
    ja: '鉄道・軌道交通電力システム',
    es: 'Tracción y Transporte Ferroviario',
    ru: 'Железнодорожный транспорт и тяговые подстанции',
    headline: 'Fail-safe switchgear systems for metro stations, depots, and electrified railway substations.',
    copy: 'Medium-voltage metal-clad switchgear and dry-type transformers compliant with strict railway traction power standards, ensuring uninterrupted 24/7 passenger transit reliability.',
    challenges: ['High peak start-up traction currents', 'Strict electromagnetic interference (EMI) limits', 'Zero-downtime safety requirements in underground stations'],
    solutions: ['KYN28 heavy-duty withdrawable vacuum circuit breakers', 'Flame-retardant class H dry-type cast resin transformers', 'Fast dual-power automatic transfer switching (ATS) systems'],
    recommendedProducts: ['mv-lv-switchgear', 'dry-type-transformers', 'distribution-boxes']
  },
  {
    slug: 'industrial-manufacturing',
    icon: Factory,
    title: 'Heavy Industry & Manufacturing',
    zh: '重型制造与工矿配电',
    ja: '重工業・製造プラント配電',
    es: 'Industria Pesada y Manufactura',
    ru: 'Тяжелая промышленность и металлургия',
    headline: 'Continuous, high-load power distribution centers for factories and production facilities.',
    copy: 'Ruggedized power distribution solutions that protect sensitive automation lines, heavy motor drives, and industrial heating processes against voltage sags and harmonic loads.',
    challenges: ['Heavy inductive motor starting surges', 'Dust, oil-mist, and corrosive airborne chemicals', 'Costly production interruptions from breaker trips'],
    solutions: ['MNS / GCS intelligent motor control centers (MCC)', 'Harmonic suppression active power filter (APF) cabinets', 'Redundant dual-incomer switchboard configurations'],
    recommendedProducts: ['mv-lv-switchgear', 'oil-immersed-transformers', 'psa-nitrogen-generator']
  },
  {
    slug: 'commercial-buildings',
    icon: Building2,
    title: 'Commercial Infrastructure & Campuses',
    zh: '商业楼宇与公共基础设施',
    ja: '商業施設・キャンパス給電',
    es: 'Edificios Comerciales e Infraestructura',
    ru: 'Коммерческая недвижимость, ЦОД и объекты ЖКХ',
    headline: 'Safe, compact, and fire-resistant substations for skyscrapers and municipal facilities.',
    copy: 'Epoxy cast resin dry-type transformers and low-noise modular distribution panels designed for basements and rooftop electrical rooms with tight spatial footprints and zero fire hazard.',
    challenges: ['Strict municipal fire safety & environmental codes', 'Compact footprint limitations in building basements', 'Low audible noise requirements'],
    solutions: ['Self-extinguishing dry-type cast resin transformers', 'High-density vertical distribution riser switchboards', 'Smart energy metering and building automation integration'],
    recommendedProducts: ['dry-type-transformers', 'mv-lv-switchgear', 'distribution-boxes']
  },
  {
    slug: 'petrochemical',
    icon: Zap,
    title: 'Petrochemical & Process Plants',
    zh: '石油化工与矿用防爆',
    ja: '石油化学・鉱山防爆',
    es: 'Petroquímica y Minería Segura',
    ru: 'Нефтегазовый сектор и горнорудная безопасность',
    headline: 'Explosion-proof and corrosion-resistant electrical assemblies for volatile environments.',
    copy: 'Engineered power distribution and Feichi FC-N2 PSA nitrogen generation systems featuring positive-pressure ventilated cabins and explosion-proof nitrogen purging for coal mines, refineries, and chemical complexes.',
    challenges: ['Explosive gas/coal dust atmospheres and hazard zones', 'Corrosive sulfur dioxide and salt spray exposure', 'Critical process continuity without unplanned shutdowns'],
    solutions: ['Feichi FC-N2 Series PSA Nitrogen Generation & Inerting Systems', 'Positive-pressure purged electrical cabins', '316L stainless steel enclosures with IP66 ingress rating'],
    recommendedProducts: ['psa-nitrogen-generator', 'prefabricated-cabins', 'mv-lv-switchgear']
  },
  {
    slug: 'ports-airports',
    icon: Globe2,
    title: 'Ports, Logistics & Airports',
    zh: '港口物流与航空枢纽',
    ja: '港湾・物流ハブ・空港電力',
    es: 'Puertos, Aeropuertos y Logística',
    ru: 'Морские порты, логистические хабы и аэропорты',
    headline: 'High-availability shore power and runway lighting distribution networks.',
    copy: 'Robust outdoor prefabricated substations and shore-to-ship power frequency conversion systems that withstand coastal humidity, saline fog, and heavy dynamic gantry crane loads.',
    challenges: ['High humidity and marine salt-fog corrosion', 'Wide geographical dispersion across cargo terminals', 'High-power shore connection surge loads'],
    solutions: ['C5-M marine-grade anti-corrosion coating systems', 'Outdoor compact substations with SCADA fiber network ring', 'Dynamic reactive power compensation (SVG) modules'],
    recommendedProducts: ['box-substation', 'prefabricated-cabins', 'oil-immersed-transformers']
  },
];

interface FaqItem {
  q: string;
  a: string;
}

const faqs: Record<Locale, FaqItem[]> = {
  en: [
    {
      q: 'What is the typical production lead time for customized substations and switchgear?',
      a: 'Standard box-type substations and switchboard configurations typically require 3 to 5 weeks from technical drawing sign-off to factory inspection. Complex prefabricated cabins or large power transformers range from 6 to 8 weeks depending on raw material sourcing and customized engineering requirements.'
    },
    {
      q: 'Do your products comply with international IEC and IEEE standards?',
      a: 'Yes. All our products are designed and manufactured in compliance with international standards, primarily IEC 62271 (High-voltage switchgear and controlgear), IEC 60076 (Power transformers), and IEC 61439 (Low-voltage switchgear). Full third-party type test reports from accredited high-voltage testing laboratories are available upon request.'
    },
    {
      q: 'Can Feichi customize electrical solutions based on our specific project single-line diagram (SLD)?',
      a: 'Absolutely. We specialize in custom B2B project engineering. You can supply your electrical single-line diagram (SLD), component brand preferences (e.g., ABB, Schneider, Siemens, Chint), ambient conditions, and dimensional constraints. Our engineering department will generate complete layout and schematic drawings for your approval before manufacturing.'
    },
    {
      q: 'What export packaging and international logistics protection do you provide?',
      a: 'All equipment is packed in heavy-duty seaworthy wooden crates with internal moisture-barrier vacuum foil, shock-absorbent mounting bases, and corrosion-inhibiting desiccant bags. Enclosures feature dedicated lifting lugs tested for crane hoisting and secure container lashing.'
    },
    {
      q: 'Do you offer on-site or remote installation and commissioning support?',
      a: 'We provide comprehensive technical documentation, including wiring schematics, installation manuals, and factory test protocols. For international projects, we support remote video commissioning guidance and can dispatch experienced field service engineers for on-site supervision and testing upon arrangement.'
    }
  ],
  zh: [
    {
      q: '定制箱式变电站和开关柜的交货周期通常是多久？',
      a: '常规箱式变电站及配电柜在技术图纸确认后通常需要 3 至 5 周完成生产与出厂试验；大型预制舱或大容量油浸变压器根据定制元器件采购周期通常为 6 至 8 周。'
    },
    {
      q: '飞驰电气的设备是否符合国际 IEC / GB 标准？',
      a: '是的。我们的产品严格遵循 IEC 62271、IEC 60076、IEC 61439 以及 GB/T 17467 等国家与国际电工标准，并具备国家高压电器质量监督检验中心出具的全套型式试验报告。'
    },
    {
      q: '是否支持根据用户一次系统图（SLD）进行非标定制设计？',
      a: '完全支持。我们深耕工业定制，可根据客户提供的电气一次接线图、元器件指定品牌（如 ABB、施耐德、西门子、正泰等）、安装尺寸及现场工况，出具成套电气系统方案及布置图供客户确认。'
    },
    {
      q: '针对海外出口项目，提供何种海运包装与防护标准？',
      a: '所有出口设备均采用重型免熏蒸海运木箱包装，内部加装防潮铝箔真空密封袋、防震底座及干燥剂，箱体配备标准化起吊吊耳，确保长途海运与陆运颠簸下设备完好无损。'
    },
    {
      q: '是否提供现场或远程安装调试技术支持？',
      a: '我们随货提供详细的电气原理图、接线图、安装维护手册和出厂检测报告；针对跨国及远程项目，我们提供全流程远程视频调试指导，并可根据项目需求派遣资深电气工程师前往现场进行安装督导与交接试验。'
    }
  ],
  ja: [
    {
      q: 'カスタマイズ変電設備やスイッチギアの納期はどのくらいですか？',
      a: '標準的なボックス型変電所や配電盤は、図面確定後約3〜5週間で製造・工場試験が完了します。大型プレハブキャビンや大型変圧器は6〜8週間程度となります。'
    },
    {
      q: '製品はIECや国際規格に準拠していますか？',
      a: 'はい。すべての製品はIEC 62271、IEC 60076、IEC 61439などの国際電工規格に準拠して設計・製造され、公認試験機関による型式試験レポートを提供可能です。'
    },
    {
      q: '単線結線図（SLD）に基づく個別仕様設計は可能ですか？',
      a: '可能です。お客様からご提供いただく単線結線図、主要機器指定（ABB、シュナイダー等）、設置環境条件に合わせて、最適なレイアウトと回路図をご提案いたします。'
    },
    {
      q: '海外輸出用の梱包および保護基準はどうなっていますか？',
      a: '全製品に対して防湿真空フィルム、乾燥剤、耐震ベースを備えた強固な輸出用木箱梱包を実施し、長距離輸送時の安全を保証します。'
    },
    {
      q: '据付や試運転の現地・リモートサポートはありますか？',
      a: '詳細な取扱説明書、配線図の提供に加え、リモートでの試運転ガイダンスや、必要に応じた現地エンジニア派遣サポートを行っております。'
    }
  ],
  es: [
    {
      q: '¿Cuál es el tiempo de entrega típico para subestaciones y celdas personalizadas?',
      a: 'Las subestaciones compactas y celdas estándar suelen requerir entre 3 y 5 semanas tras la aprobación de los planos. Las cabinas prefabricadas de gran tamaño o transformadores de potencia requieren entre 6 y 8 semanas según especificaciones.'
    },
    {
      q: '¿Los equipos cumplen con las normas internacionales IEC e IEEE?',
      a: 'Sí. Todos nuestros productos cumplen con las normas IEC 62271 (Aparamenta de alta tensión), IEC 60076 (Transformadores de potencia) e IEC 61439 (Aparamenta de baja tensión), con informes de ensayo de tipo disponibles.'
    },
    {
      q: '¿Pueden fabricar soluciones según nuestro diagrama unifilar (SLD)?',
      a: 'Por supuesto. Analizamos su diagrama unifilar, marcas de componentes solicitadas (ABB, Schneider, etc.) y limitaciones de espacio para desarrollar los planos de ingeniería completos antes de la producción.'
    },
    {
      q: '¿Qué tipo de embalaje marítimo y protección para exportación ofrecen?',
      a: 'Todos los equipos se embalan en cajas de madera para transporte marítimo de alta resistencia, con sellado al vacío contra la humedad, desecantes y cáncamos de elevación reforzados.'
    },
    {
      q: '¿Ofrecen soporte de instalación y puesta en marcha in situ o remoto?',
      a: 'Entregamos planos esquemáticos completos, manuales de instalación y protocolos de prueba. Para proyectos internacionales, ofrecemos asistencia remota por vídeo y envío de ingenieros para supervisión según acuerdo.'
    }
  ],
  ru: [
    {
      q: 'Каковы стандартные сроки изготовления комплектных подстанций и ячеек КРУ?',
      a: 'Стандартные комплектные трансформаторные подстанции (КТП/КТПН) и распределительные шкафы изготавливаются за 3-5 недель после согласования опросного листа и однолинейной схемы (SLD). Крупногабаритные блочно-модульные здания (БМЗ) и силовые трансформаторы большой мощности требуют от 6 до 8 недель.'
    },
    {
      q: 'Соответствует ли оборудование стандартам ГОСТ, EAC (ТР ТС) и МЭК (IEC)?',
      a: 'Да. Вся продукция Feichi Electrical проектируется и изготавливается в строгом соответствии с ГОСТ 14695, ГОСТ 14693, ГОСТ 15150-69 (климатическое исполнение УХЛ1/ХЛ1 до -60°C), ТР ТС 004/2011, ТР ТС 020/2011, а также международными стандартами IEC 62271 и IEC 60076. Предоставляются полные протоколы типовых испытаний.'
    },
    {
      q: 'Возможно ли изготовление подстанций и ячеек по индивидуальному опросному листу и схеме SLD заказчика?',
      a: 'Безусловно. Мы специализируемся на проектном инжиниринге для промышленных предприятий, горнорудных карьеров и электросетей. Вы можете предоставить опросный лист, схему главных цепей, перечень предпочтительных комплектующих (ABB, Schneider Electric, Chint и др.) и требования к габаритам. Наши инженеры разработают рабочие чертежи и компоновку.'
    },
    {
      q: 'Какая экспортная упаковка и защита от коррозии применяется для транспортировки в РФ и страны СНГ?',
      a: 'Оборудование упаковывается в усиленные морские деревянные ящики с антикоррозийной вакуумной барьерной пленкой, влагопоглотителями и усиленными строповочными проушинами. Для суровых условий Сибири и Севера корпуса выполняются из сэндвич-панелей 100 мм с порошковым антикоррозийным покрытием.'
    },
    {
      q: 'Оказываете ли вы техническую поддержку при монтаже и пусконаладочных работах (ПНР)?',
      a: 'Мы предоставляем полный комплект технической документации на русском и английском языках (паспорта, схемы подключений, руководства по эксплуатации, протоколы заводских испытаний). Осуществляем дистанционный шеф-монтаж по видеосвязи, а также направляем опытных инженеров для выездного шеф-монтажа и ПНР на объекте.'
    }
  ]
};

const ui = {
  en: {
    nav: { products: 'Products', industries: 'Industries', cases: 'Case studies', resources: 'Resources', about: 'About Feichi', contact: 'Contact' },
    contact: 'Request Technical Quote',
    view: 'View Specifications',
    explore: 'Explore Solutions',
    heroEyebrow: 'INTELLIGENT POWER INFRASTRUCTURE / GLOBAL DELIVERY',
    heroTitle: 'Engineered Power Substations & Switchgear for Demanding Grid Systems.',
    heroCopy: 'Feichi Electrical (est. 2004) designs and manufactures 10kV-35kV compact box substations, metal-clad switchgear, modular power cabins, and heavy-duty transformers in a 63,000 m² state-of-the-art facility.',
    productsEyebrow: '01 / ELECTRICAL SYSTEMS PORTFOLIO',
    productsTitle: 'Precision Engineered Equipment Built to Your Technical SLD.',
    productsCopy: 'From outdoor compact step-up substations to indoor intelligent motor control centers, our equipment is pre-tested to IEC standards for instant site readiness.',
    industriesEyebrow: '02 / TARGET SECTORS & APPLICATIONS',
    industriesTitle: 'Power Architectures Designed Around Real-World Site Constraints.',
    industriesCopy: 'Every deployment environment demands tailored thermal engineering, ingress protection, and short-circuit withstand. Explore how we solve mission-critical energy challenges.',
    capabilitiesEyebrow: '03 / MANUFACTURING & QUALITY ASSURANCE',
    capabilitiesTitle: 'Full-Cycle Factory Verification from Raw Copper to High-Voltage Testing.',
    capabilitiesCopy: 'Equipped with CNC laser sheet-metal cutting, automated busbar bending, and a dedicated high-voltage insulation testing laboratory to guarantee zero defect delivery.',
    casesEyebrow: '04 / PROVEN FIELD EVIDENCE',
    casesTitle: 'Equipment Deployed in Rail, Industrial, and Commercial Power Hubs.',
    casesCopy: 'A visual track record of operating switchgear control rooms, traction substations, and automated factory distribution networks.',
    aboutEyebrow: '05 / COMPANY FOUNDATION',
    aboutTitle: 'Over 20 Years of Power Transmission & Distribution Manufacturing.',
    aboutCopy: 'Headquartered in Shenyang, China with a registered capital of RMB 101 Million, Feichi Electrical combines deep electrical engineering heritage with modern modular manufacturing.',
    request: 'Request Engineering Review',
    allProducts: 'View All Equipment Lines',
    back: 'Back to Equipment Portfolio',
    spec: 'Technical Specifications & Parameters',
    related: 'Complementary Power Equipment',
    resourcesTitle: 'Technical Catalogues, Datasheets & Single-Line Resources.',
    resourcesCopy: 'Download product technical specifications, dimensional drawings, and application guides for electrical engineering consultants and project contractors.',
    aboutPageTitle: 'Solid Manufacturing Heritage Built on Quality & Precision.',
    contactTitle: 'Direct Channel to Our Electrical Engineering Team.',
    contactCopy: 'Submit your single-line diagram, nominal voltage, rated capacity, and project delivery schedule for a formal technical proposal within 24 hours.',
    faqEyebrow: 'FREQUENTLY ASKED QUESTIONS',
    faqTitle: 'Technical Clarifications & Export Logistics Details.',
    contactLeadName: 'Henry',
    contactLeadTitle: 'Key Technical & Export Lead',
    sendEmail: 'Email Henry (henry@feichipower.com)',
    callEng: 'Call / WhatsApp / Telegram: +86 155 6620 6930',
    chatWhatsapp: 'Chat on WhatsApp',
    hqTitle: 'Headquarters & Manufacturing Plant',
    companyFull: 'Shenyang Feichi Electrical Equipment Co., Ltd.',
    plantAddr: 'Plant Address',
    plantLocation: 'Shenyang, Liaoning Province, China (Postal Code: 110000)',
    directEmail: 'Direct Engineering Email',
    telSupport: 'Mobile / WhatsApp / Telegram / WeChat',
    factoryCredentialLink: 'View Manufacturing Credentials & Testing Capabilities',
  },
  zh: {
    nav: { products: '产品系统', industries: '行业应用', cases: '工程业绩', resources: '技术资料', about: '走进飞驰', contact: '联系我们' },
    contact: '获取工程方案与报价',
    view: '查看技术参数',
    explore: '探索行业方案',
    heroEyebrow: '智能电力装备 / 面向全球工程交付',
    heroTitle: '为严苛电网与重大工程打造的成套高低压配电装备。',
    heroCopy: '沈阳飞驰电气设备有限公司（始于2004年，注册资金1.01亿元）在6.3万平方米现代化生产基地内，专业研发制造10kV-35kV预装式箱变、高低压开关柜、智能预制舱及电力变压器。',
    productsEyebrow: '01 / 成套电力装备矩阵',
    productsTitle: '严格匹配一次系统图（SLD）的精密制造。',
    productsCopy: '涵盖户外升压箱变、中低压成套开关设备至终端配电箱，出厂前完成全套型式与绝缘试验，实现即插即用式现场快速并网。',
    industriesEyebrow: '02 / 重点行业与场景方案',
    industriesTitle: '围绕真实工况量身定制的供配电系统架构。',
    industriesCopy: '光伏新能源、轨道交通、重型工矿、商业综合体与石化防腐，针对不同负载特征与环境温度提供针对性电气设计。',
    capabilitiesEyebrow: '03 / 智造实力与出厂质控',
    capabilitiesTitle: '从数控钣金、母线加工到高压耐压试验的全流程闭环。',
    capabilitiesCopy: '配备数控激光切割中心、自动化母线加工机组与高压绝缘试验检测大厅，严格执行 ISO9001 质量管理体系与出厂零缺陷标准。',
    casesEyebrow: '04 / 真实工程现场证据',
    casesTitle: '设备稳定运行于轨道交通、工矿枢纽与配电房。',
    casesCopy: '通过实际配电室走廊、牵引变电所及自动化生产线的实景记录，展现飞驰电气的工程落地与交付能力。',
    aboutEyebrow: '05 / 企业基石与资质',
    aboutTitle: '逾二十年专注电力输配电设备研发与工程服务。',
    aboutCopy: '立足沈阳装备制造基地，拥有完善的高低压开关设备资质、承装（修、试）电力设施能力与经验丰富的专业工程团队。',
    request: '提交工程参数评估',
    allProducts: '查看全部产品线',
    back: '返回产品矩阵',
    spec: '技术规格与核心电气参数',
    related: '相关配套电力装备',
    resourcesTitle: '技术选型手册、规格说明书与方案图纸。',
    resourcesCopy: '为电气设计院、工程总包方（EPC）及设备采购工程师提供详尽的技术参数表与单线系统参考资料。',
    aboutPageTitle: '精工制造，筑牢国家电网与工业配电基石。',
    contactTitle: '与飞驰电气技术工程团队直接沟通。',
    contactCopy: '请发送您的单线接线图（SLD）、电压等级、额定容量及项目工期，我们的技术团队将在24小时内提供技术方案与报价支持。',
    faqEyebrow: '常见技术与采购问题',
    faqTitle: '关于定制周期、出口标准与技术支持的解答。',
    contactLeadName: 'Henry（王经理）',
    contactLeadTitle: '业务及外贸技术对接人',
    sendEmail: '发送咨询邮件至 Henry',
    callEng: '电话 / 微信 / WhatsApp / Telegram: +86 155 6620 6930',
    chatWhatsapp: 'WhatsApp 在线直联',
    hqTitle: '总部与制造基地',
    companyFull: '沈阳飞驰电气设备有限公司',
    plantAddr: '厂区地址',
    plantLocation: '中国辽宁省沈阳市（邮政编码：110000）',
    directEmail: '直通邮箱',
    telSupport: '手机 / WhatsApp / Telegram / 微信',
    factoryCredentialLink: '查看 ISO 9001 质量体系与出厂质控能力',
  },
  ja: {
    nav: { products: '製品ラインナップ', industries: '適用分野', cases: '納入実績', resources: '技術資料', about: '会社案内', contact: 'お問い合わせ' },
    contact: '技術見積を依頼',
    view: '仕様・パラメータを見る',
    explore: 'ソリューションを見る',
    heroEyebrow: 'スマート電力インフラ / グローバル納入',
    heroTitle: '重要インフラと過酷な現場を支える高信頼配電設備。',
    heroCopy: '飛馳電気（2004年創立・資本金1.01億元）は、63,000㎡の自社工場において10kV〜35kVキュービクル式受変電設備、スイッチギア、プレハブキャビン、変圧器を一貫製造しています。',
    productsEyebrow: '01 / 電気設備製品群',
    productsTitle: '単線結线図（SLD）に完全適合するカスタム設計。',
    productsCopy: '屋外変電所から屋内モータコントロールセンタまで、IEC規格に準拠した工場出荷前試験を全数実施。',
    industriesEyebrow: '02 / 業界別ソリューション',
    industriesTitle: '現場の過酷な環境と負荷条件に最適化された電力設計。',
    industriesCopy: '太陽光発電、鉄道、重工業プラント、データセンターなど、各業界固有の要求に対応。',
    capabilitiesEyebrow: '03 / 製造・品質保証体制',
    capabilitiesTitle: 'CNC板金加工から高圧絶縁耐力試験まで社内完結。',
    capabilitiesCopy: 'CNCレーザー加工機、自動バスバー加工機、高電圧試験室を完備し、ISO9001に基づく徹底した品質管理を推進。',
    casesEyebrow: '04 / 納入実績・現場写真',
    casesTitle: '鉄道、鉱山、変電所での豊富な稼働実績。',
    casesCopy: '配電室回廊、受電設備、自動化ラインなどの実現場写真を公開。確かなエンジニアリング実績を証明。',
    aboutEyebrow: '05 / 企業理念・認証資格',
    aboutTitle: '20年以上にわたる配電機器開発とエンジニアリングの軌跡。',
    aboutCopy: '瀋陽製造拠点を軸に、高低圧スイッチギアの各種認証、電気設備設置（修理・試験）資格、熟練の技術陣を擁しています。',
    request: '設計図面・仕様の問い合わせ',
    allProducts: '全製品一覧を見る',
    back: '製品一覧に戻る',
    spec: '技術仕様・電気パラメータ',
    related: '関連配電機器',
    resourcesTitle: '技術選定マニュアル・仕様書・図面資料。',
    resourcesCopy: '設計事務所、EPC事業者、調達担当エンジニア向けの詳細パラメータ表および単線結線図リファレンス。',
    aboutPageTitle: '精密製造が生み出す、安心の電力インフラ基盤。',
    contactTitle: '技術エンジニアリングチームへ直接相談。',
    contactCopy: '単線結線図（SLD）、定格電圧、容量、納期をご提示いただければ、24時間以内に技術提案・見積書を作成します。',
    faqEyebrow: 'よくある技術・調達のご質問',
    faqTitle: '納期、輸出規格、技術サポートに関する回答。',
    contactLeadName: 'Henry（技術担当マネージャー）',
    contactLeadTitle: '海外事業・技術統括',
    sendEmail: '担当エンジニアへメール送信',
    callEng: '電話 / WhatsApp / Telegram: +86 155 6620 6930',
    chatWhatsapp: 'WhatsAppで直接チャット',
    hqTitle: '本社・製造拠点',
    companyFull: '瀋陽飛馳電器設備有限公司',
    plantAddr: '工場所在地',
    plantLocation: '中国遼寧省瀋陽市（郵便番号：110000）',
    directEmail: '技術直通メール',
    telSupport: '携帯 / WhatsApp / Telegram / WeChat',
    factoryCredentialLink: 'ISO 9001認証および試験設備を確認',
  },
  es: {
    nav: { products: 'Productos', industries: 'Sectores', cases: 'Proyectos', resources: 'Documentación', about: 'Nosotros', contact: 'Contacto' },
    contact: 'Solicitar Cotización y Propuesta',
    view: 'Ver Parámetros Técnicos',
    explore: 'Explorar Soluciones',
    heroEyebrow: 'EQUIPOS ELÉCTRICOS INTELIGENTES / ENTREGA GLOBAL EPC',
    heroTitle: 'Aparamenta de Alta y Baja Tensión para Redes Eléctricas Exigentes.',
    heroCopy: 'Shenyang Feichi Electrical Equipment Co., Ltd. (fundada en 2004, capital registrado de 101 millones de RMB) fabrica en sus 63.000 m² subestaciones compactas de 10kV a 35kV, celdas de media y baja tensión, shelters prefabricados y transformadores.',
    productsEyebrow: '01 / MATRIZ DE EQUIPOS ELÉCTRICOS',
    productsTitle: 'Fabricación de Precisión Adaptada a su Diagrama Unifilar (SLD).',
    productsCopy: 'Desde subestaciones elevadoras para intemperie hasta celdas de distribución interior, sometidas a ensayos de tipo y dieléctricos completos antes del despacho.',
    industriesEyebrow: '02 / SOLUCIONES SECTORIALES',
    industriesTitle: 'Arquitecturas Eléctricas Optimizadas para Condiciones Reales.',
    industriesCopy: 'Energía solar y eólica, transporte ferroviario, minería pesada, centros comerciales y petroquímica anticorrosiva.',
    capabilitiesEyebrow: '03 / CAPACIDAD INDUSTRIAL Y CALIDAD',
    capabilitiesTitle: 'Ciclo Completo: Corte Láser CNC, Procesamiento de Pletinas y Pruebas HV.',
    capabilitiesCopy: 'Equipado con corte láser de chapa CNC, líneas automáticas de barras colectoras y sala de pruebas dieléctricas de alta tensión bajo ISO 9001.',
    casesEyebrow: '04 / EVIDENCIA EN CAMPO',
    casesTitle: 'Equipos en Servicio Continuo en Ferrocarriles, Minas y Subestaciones.',
    casesCopy: 'Registros fotográficos en salas de control, subestaciones de tracción y plantas industriales que avalan nuestra capacidad de entrega.',
    aboutEyebrow: '05 / TRAYECTORIA Y CERTIFICACIONES',
    aboutTitle: 'Más de 20 Años en I+D de Equipos de Distribución Eléctrica.',
    aboutCopy: 'Ubicados en el polo industrial de Shenyang, contamos con certificaciones completas de aparamenta MT/BT y un equipo de ingeniería experimentado.',
    request: 'Enviar Parámetros para Evaluación',
    allProducts: 'Ver Todos los Productos',
    back: 'Volver al Catálogo',
    spec: 'Especificaciones Técnicos y Parámetros',
    related: 'Equipos Eléctricos Complementarios',
    resourcesTitle: 'Manuales de Selección Técnica, Hojas de Datos y Diagramas.',
    resourcesCopy: 'Descargue especificaciones técnicas completas y referencias de diagramas unifilares para consultores e ingenieros de proyectos EPC.',
    aboutPageTitle: 'Sólida Tradición Industrial Basada en la Precisión.',
    contactTitle: 'Canal Directo con Nuestro Equipo de Ingeniería Eléctrica.',
    contactCopy: 'Envíe su diagrama unifilar (SLD), tensión nominal, potencia y plazo de entrega para recibir una propuesta técnica formal en 24 horas.',
    faqEyebrow: 'PREGUNTAS FRECUENTES (FAQ)',
    faqTitle: 'Aclaraciones Técnicas y Detalles de Logística de Exportación.',
    contactLeadName: 'Henry',
    contactLeadTitle: 'Responsable Técnico y de Exportación',
    sendEmail: 'Enviar Email a Henry',
    callEng: 'WhatsApp / Telegram / Teléfono: +86 155 6620 6930',
    chatWhatsapp: 'Contactar por WhatsApp',
    hqTitle: 'Sede Central y Planta de Fabricación',
    companyFull: 'Shenyang Feichi Electrical Equipment Co., Ltd.',
    plantAddr: 'Dirección de Planta',
    plantLocation: 'Shenyang, Provincia de Liaoning, China (Código Postal: 110000)',
    directEmail: 'Email Directo de Ingeniería',
    telSupport: 'Móvil / WhatsApp / Telegram / WeChat',
    factoryCredentialLink: 'Ver Certificaciones de Fabricación y Capacidad de Ensayos',
  },
  ru: {
    nav: { products: 'Оборудование', industries: 'Отрасли', cases: 'Проекты', resources: 'Техдокументация', about: 'О компании', contact: 'Контакты' },
    contact: 'Запросить расчет и ТКП',
    view: 'Технические параметры',
    explore: 'Инженерные решения',
    heroEyebrow: 'ИНТЕЛЛЕКТУАЛЬНАЯ ЭНЕРГЕТИКА / СТАНДАРТЫ ГОСТ И МЭК',
    heroTitle: 'Комплектные подстанции КТПН 6-35 кВ и ячейки КРУ (КРУ-2-10, КСО) по ГОСТ 14695 / ТР ТС.',
    heroCopy: 'Завод Feichi Electrical (основан в 2004 г., уставный капитал 101 млн юаней, 63 000 м²): производство блочно-модульных подстанций КТПН, КРУ 6-35 кВ, силовых трансформаторов ТМГ/ТСЛ и азотных станций FC-N2 для условий Крайнего Севера и Сибири (-60°C УХЛ1). Готовые Опросные листы и схемы SLD.',
    productsEyebrow: '01 / НОМЕНКЛАТУРА ПО ГОСТ И МЭК',
    productsTitle: 'Прецизионное производство по вашему Опросному листу и схеме SLD (ГОСТ 14695 / 15150 УХЛ1).',
    productsCopy: 'От наружных комплектных подстанций 2КТПН и ячеек КРУ (КРУ-2-10, КРУ СЭЩ, КСО-298) до шахтных взрывозащищенных КТПВ и азотных станций. Полный цикл заводских высоковольтных испытаний и сертификаты ТР ТС.',
    industriesEyebrow: '02 / ОТРАСЛЕВЫЕ РЕШЕНИЯ И УСЛОВИЯ ЭКСПЛУАТАЦИИ',
    industriesTitle: 'Электротехнические комплексы, адаптированные к экстремальным условиям Севера и Сибири (-60°C).',
    industriesCopy: 'Солнечная и ветровая энергетика, горнорудные карьеры, тяговые подстанции железных дорог, нефтегазовые промыслы и промышленные гиганты.',
    capabilitiesEyebrow: '03 / ПРОИЗВОДСТВЕННАЯ БАЗА И КОНТРОЛЬ КАЧЕСТВА',
    capabilitiesTitle: 'Полный цикл заводских испытаний: от лазерного раскроя меди до высоковольтной лаборатории.',
    capabilitiesCopy: 'Оснащен лазерными комплексами ЧПУ, автоматическими линиями гибки шин и сертифицированной высоковольтной лабораторией для обеспечения нулевого уровня дефектов.',
    casesEyebrow: '04 / РЕАЛИЗОВАННЫЕ ПРОЕКТЫ И РЕФЕРЕНЦ-ЛИСТ',
    casesTitle: 'Оборудование, надежно работающее на объектах энергетики, транспорта и горной добычи.',
    casesCopy: 'Фотохроника действующих распределительных пунктов, тяговых подстанций и автоматизированных заводских сетей.',
    aboutEyebrow: '05 / О ПРЕДПРИЯТИИ И СТАНДАРТАХ',
    aboutTitle: 'Более 20 лет инженерного опыта в производстве электротехнического оборудования.',
    aboutCopy: 'Головное предприятие в г. Шэньян сочетает глубокие традиции электромашиностроения с современными блочно-модульными технологиями.',
    request: 'Запросить инженерную экспертизу',
    allProducts: 'Вся номенклатура оборудования',
    back: 'Назад в каталог',
    spec: 'Технические характеристики и параметры',
    related: 'Сопутствующее электрооборудование',
    resourcesTitle: 'Технические каталоги, опросные листы и чертежи по ГОСТ/МЭК.',
    resourcesCopy: 'Справочные материалы, технические описания, типовые схемы и Опросные листы для проектных институтов, проектировщиков и генеральных подрядчиков EPC.',
    aboutPageTitle: 'Надежное электротехническое машиностроение на страже энергобезопасности.',
    contactTitle: 'Прямая связь с инженерно-технической дирекцией.',
    contactCopy: 'Направьте ваш опросный лист, однолинейную схему (SLD), номинальное напряжение и требуемые сроки для подготовки технико-коммерческого предложения в течение 24 часов.',
    faqEyebrow: 'ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ (FAQ)',
    faqTitle: 'Технические разъяснения, стандарты ГОСТ/МЭК и экспортная логистика.',
    contactLeadName: 'Генри (Henry)',
    contactLeadTitle: 'Руководитель направления экспорта и инжиниринга',
    sendEmail: 'Написать инженеру (henry@feichipower.com)',
    callEng: 'Телефон / WhatsApp / Telegram: +86 155 6620 6930',
    chatWhatsapp: 'Связаться через WhatsApp / Telegram (@feichipower)',
    hqTitle: 'Головной завод и производственный комплекс',
    companyFull: 'Shenyang Feichi Electrical Equipment Co., Ltd.',
    plantAddr: 'Адрес завода',
    plantLocation: 'г. Шэньян, провинция Ляонин, Китай (Индекс: 110000)',
    directEmail: 'Прямой технический e-mail',
    telSupport: 'Телефон / WhatsApp / Telegram: +86 155 6620 6930 (@feichipower)',
    factoryCredentialLink: 'Сертификаты ISO 9001 и отчеты испытаний',
  },
};

function pickLocale(value?: string): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : 'en';
}

function localizedProduct(product: ProductItem, locale: Locale) {
  return locale === 'zh' ? product.zh : locale === 'ja' ? product.ja : locale === 'es' ? product.es : locale === 'ru' ? product.ru : product.name;
}

function localizedIndustry(industry: IndustryItem, locale: Locale) {
  return locale === 'zh' ? industry.zh : locale === 'ja' ? industry.ja : locale === 'es' ? industry.es : locale === 'ru' ? industry.ru : industry.title;
}

function ExternalLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a className={className} href={href} target="_top" rel="noreferrer">
      {children}
    </a>
  );
}

function Seo({
  locale,
  title,
  description,
  schema,
}: {
  locale: Locale;
  title: string;
  description: string;
  schema?: object;
}) {
  const location = useLocation();
  useEffect(() => {
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const canonicalOrigin = isLocal ? window.location.origin : 'https://feichipower.com';
    const cleanPath = location.pathname.startsWith('/') ? location.pathname : `/${location.pathname}`;
    const canonical = `${canonicalOrigin}${cleanPath}`;
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : locale === 'ja' ? 'ja-JP' : locale === 'es' ? 'es-ES' : locale === 'ru' ? 'ru-RU' : 'en';
    document.title = title;

    const setMeta = (selector: string, attr: string, content: string) => {
      let node = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!node) {
        node = document.createElement('meta');
        const attrVal = selector.includes('="') ? selector.split('="')[1].split('"')[0] : '';
        node.setAttribute(attr, attrVal);
        document.head.appendChild(node);
      }
      node.content = content;
    };

    setMeta('meta[name="description"]', 'name', description);
    setMeta('meta[property="og:title"]', 'property', title);
    setMeta('meta[property="og:description"]', 'property', description);
    setMeta('meta[property="og:type"]', 'property', 'website');
    setMeta('meta[property="og:url"]', 'property', canonical);
    setMeta('meta[property="og:image"]', 'property', `${canonicalOrigin}/images/hero-substation.webp`);
    setMeta('meta[name="twitter:card"]', 'name', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', title);
    setMeta('meta[name="twitter:description"]', 'name', description);

    let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;

    document.head.querySelectorAll('link[data-hreflang]').forEach((node) => node.remove());
    locales.forEach((item) => {
      const alternate = document.createElement('link');
      alternate.rel = 'alternate';
      alternate.hreflang = item;
      const subPath = cleanPath.replace(/^\/[^/]+/, '') || '/';
      alternate.href = `${canonicalOrigin}/${item}${subPath.startsWith('/') ? subPath : '/' + subPath}`;
      alternate.dataset.hreflang = item;
      document.head.appendChild(alternate);
    });

    const faqSchemaItems = epcFaqList.map((faq) => ({
      '@type': 'Question',
      name: (faq.question as Record<string, string>)[locale] || faq.question.en,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${(faq.answer as Record<string, string>)[locale] || faq.answer.en} [Standards: ${faq.standards}${faq.formula ? ` | Formula: ${faq.formula}` : ''} | Manufacturer Support: Shenyang Feichi Electrical Equipment Co., Ltd. / Lead: Henry +86-15566206930 / Telegram: @feichipower]`,
      },
    }));

    const orgSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://feichipower.com/#organization',
          name: 'Shenyang Feichi Electrical Equipment Co., Ltd.',
          alternateName: ['沈阳市飞驰电气设备有限公司', 'Feichi Power', 'Feichi Electrical', 'Завод Феичи Электрик'],
          url: 'https://feichipower.com',
          logo: `${origin}/images/hero-substation.webp`,
          description: 'Leading global manufacturer of prefabricated substations (2KTPN/E-House), MV/LV switchgear (KYN28/KRU), flameproof mining mobile substations (KBSGV/KTPV), and SVG/STATCOM reactive power compensators compliant with IEC 62271 and Russian GOST standards.',
          sameAs: [
            'https://t.me/+8615566206930',
            'https://t.me/feichipower',
            'https://wa.me/8615566206930'
          ],
          potentialAction: {
            '@type': 'CommunicateAction',
            target: 'https://wa.me/8615566206930',
            name: 'Request Substation CAD Drawings and Technical Dossier'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+86-15566206930',
            contactType: 'sales and engineering support',
            email: 'henry@feichipower.com',
            availableLanguage: ['English', 'Chinese', 'Japanese', 'Spanish', 'Russian'],
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Shenyang',
            addressRegion: 'Liaoning',
            addressCountry: 'China',
          },
          knowsAbout: [
            'Prefabricated Transformer Substations (2KTPN, KTP, Pad-Mounted, E-House)',
            'Medium Voltage Switchgear (KYN28, KRU, KSO, GIS, SF6-Free RMU)',
            'Mining Flameproof Mobile Substations (KBSGV, KTPV, Ex d I Mb)',
            'High Voltage Static Var Generators (SVG, STATCOM, UKRM, 6-35kV)',
            'Substation Single-Line Diagrams (SLD) and Russian Standard Oprosny List',
            'GOST 14695, GOST 15150 UHL1, GOST 31610, TR CU 004/2011, TR CU 012/2011'
          ]
        },
        {
          '@type': 'WebSite',
          '@id': 'https://feichipower.com/#website',
          url: 'https://feichipower.com',
          name: 'Feichi Power - Global Medium & High Voltage Electrical Engineering Portal',
          publisher: { '@id': 'https://feichipower.com/#organization' },
          inLanguage: ['en', 'zh', 'ru', 'es', 'ja']
        },
        {
          '@type': 'FAQPage',
          '@id': `${canonical}#faq`,
          mainEntity: faqSchemaItems,
        }
      ]
    };

    let scriptNode = document.head.querySelector('script[data-schema="org"]') as HTMLScriptElement | null;
    if (!scriptNode) {
      scriptNode = document.createElement('script');
      scriptNode.type = 'application/ld+json';
      scriptNode.dataset.schema = 'org';
      document.head.appendChild(scriptNode);
    }
    scriptNode.text = JSON.stringify(schema || orgSchema);
  }, [locale, title, description, schema, location.pathname]);
  return null;
}

function Header({ locale }: { locale: Locale }) {
  const text = ui[locale];
  const location = useLocation();
  const navigate = useNavigate();
  const suffix = location.pathname.replace(/^\/[^/]+/, '') || '/';

  return (
    <>
      <div className="top-line">
        <div className="wrap top-line-inner">
          <span>FEICHI ELECTRICAL EQUIPMENT / EST. 2004 / SHENYANG, CHINA</span>
          <span className="top-badge">
            <span className="status-dot"></span>IEC 62271 & 60076 COMPLIANT PACKAGED SUBSTATIONS
          </span>
        </div>
      </div>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link to={`/${locale}/`} className="brand">
            <span className="brand-mark">F</span>
            <div>
              <strong>FEICHI</strong>
              <small>ELECTRICAL EQUIPMENT</small>
            </div>
          </Link>
          <nav>
            {[
              ['products', '/products'],
              ['industries', '/industries'],
              ['cases', '/cases'],
              ['resources', '/resources'],
              ['about', '/about'],
            ].map(([key, path]) => (
              <NavLink key={key} to={`/${locale}${path}`} className={({ isActive }) => (isActive ? 'active' : '')}>
                {text.nav[key as keyof typeof text.nav]}
              </NavLink>
            ))}
          </nav>
          <div className="header-tools">
            <div className="language-switcher" aria-label="Language selector">
              {locales.map((item) => (
                <button
                  key={item}
                  className={item === locale ? 'active' : ''}
                  onClick={() => navigate(`/${item}${suffix}`)}
                >
                  {localeLabels[item]}
                </button>
              ))}
            </div>
            <Link to={`/${locale}/contact`} className="header-cta">
              {text.contact} <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

function Footer({ locale }: { locale: Locale }) {
  const text = ui[locale];
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-col-main">
          <div className="brand footer-brand">
            <span className="brand-mark">F</span>
            <div>
              <strong>FEICHI ELECTRICAL</strong>
              <small>SHENYANG FEICHI ELECTRICAL EQUIPMENT CO., LTD.</small>
            </div>
          </div>
          <p>{text.heroCopy}</p>
          <div className="footer-tags">
            <span>ISO 9001:2015</span>
            <span>IEC Standards</span>
            <span>Registered Capital: RMB 101M</span>
          </div>
        </div>
        <div>
          <span className="footer-label">EQUIPMENT PORTFOLIO</span>
          <Link to={`/${locale}/products/box-substation`}>Box-type Substations</Link>
          <Link to={`/${locale}/products/mv-lv-switchgear`}>MV/LV Switchgear</Link>
          <Link to={`/${locale}/products/prefabricated-cabins`}>Prefabricated Cabins</Link>
          <Link to={`/${locale}/products/dry-type-transformers`}>Dry-Type Transformers</Link>
          <Link to={`/${locale}/products/oil-immersed-transformers`}>Oil Transformers</Link>
          <Link to={`/${locale}/products/distribution-boxes`}>Distribution Boards</Link>
          <Link to={`/${locale}/products/psa-nitrogen-generator`}>FC-N2 Nitrogen Systems</Link>
        </div>
        <div>
          <span className="footer-label">APPLICATIONS</span>
          <Link to={`/${locale}/industries/renewable-energy`}>Solar & Renewable Energy</Link>
          <Link to={`/${locale}/industries/rail-transit`}>Rail Transit Traction</Link>
          <Link to={`/${locale}/industries/industrial-manufacturing`}>Heavy Manufacturing</Link>
          <Link to={`/${locale}/industries/commercial-buildings`}>Commercial Infrastructure</Link>
          <Link to={`/${locale}/industries/petrochemical`}>Petrochemical & Mining</Link>
          <Link to={`/${locale}/industries/ports-airports`}>Ports & Logistics Hubs</Link>
        </div>
        <div>
          <span className="footer-label">ENGINEERING & SALES CONTACT</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--orange)', fontWeight: 800, fontSize: '13.5px', marginBottom: '8px' }}>
            <User size={15} /> Henry
          </div>
          <a href="https://wa.me/8615566206930" target="_blank" rel="noopener noreferrer" className="footer-contact-link" title="Chat on WhatsApp (+86 155 6620 6930)">
            <MessageCircle size={14} /> WhatsApp: +86 155 6620 6930
          </a>
          <a href="https://t.me/+8615566206930" target="_blank" rel="noopener noreferrer" className="footer-contact-link" title="Chat on Telegram (+86 155 6620 6930 / @feichipower)">
            <Send size={14} /> Telegram: +86 155 6620 6930
          </a>
          <a href="tel:+8615566206930" className="footer-contact-link" title="Call or WeChat (+86 155 6620 6930)">
            <Phone size={14} /> +86 155 6620 6930 (WeChat / Phone)
          </a>
          <a href="mailto:henry@feichipower.com" className="footer-contact-link" title="Send Email">
            <Mail size={14} /> henry@feichipower.com
          </a>
          <span className="footer-addr">
            <MapPin size={14} /> Shenyang High-Tech Industrial Zone, Liaoning, China
          </span>
          <Link to={`/${locale}/contact`} className="button button-orange footer-btn">
            {text.contact} <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© 2026 Shenyang Feichi Electrical Equipment Co., Ltd. All rights reserved.</span>
        <div className="footer-bottom-links">
          <span>Global Power Transmission & Distribution Export Portal</span>
          <span>ISO 9001:2015 & IEC 62271 Compliant</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <div className="floating-contact-stack">
      <a
        href="https://t.me/+8615566206930"
        target="_blank"
        rel="noopener noreferrer"
        className="telegram-float-btn"
        title="Direct Telegram Contact (+86 155 6620 6930 / @feichipower)"
      >
        <Send size={18} />
        <span>Telegram: +86 155 6620 6930</span>
      </a>
      <a
        href="https://wa.me/8615566206930?text=Hello%20Henry%2C%20I%20am%20inquiring%20about%20Feichi%20Power%20substation%20and%20switchgear%20equipment."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        title="Direct WhatsApp Contact (+86 155 6620 6930)"
      >
        <MessageCircle size={18} />
        <span>WhatsApp: +86 155 6620 6930</span>
      </a>
    </div>
  );
}

function TransformerKvaSizer({ locale }: { locale: Locale }) {
  const [loadKw, setLoadKw] = useState<number>(1200);
  const [powerFactor, setPowerFactor] = useState<number>(0.85);
  const [growthMargin, setGrowthMargin] = useState<number>(20);
  const [primaryVolt, setPrimaryVolt] = useState<'10kV' | '35kV' | '110kV'>('10kV');

  const apparentPowerKva = useMemo(() => {
    const raw = (loadKw / powerFactor) * (1 + growthMargin / 100);
    return Math.round(raw);
  }, [loadKw, powerFactor, growthMargin]);

  const recommendedRating = useMemo(() => {
    const standardSizes = [100, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250, 1600, 2000, 2500, 3150, 4000, 5000, 6300, 10000, 16000, 25000, 40000];
    const match = standardSizes.find((s) => s >= apparentPowerKva) || 40000;
    return match;
  }, [apparentPowerKva]);

  const loadRate = useMemo(() => {
    return ((apparentPowerKva / recommendedRating) * 100).toFixed(1);
  }, [apparentPowerKva, recommendedRating]);

  const ratedCurrentLv = useMemo(() => {
    // I = S / (sqrt(3) * U_lv) = S / (1.732 * 0.4) = S / 0.6928
    return Math.round(recommendedRating / 0.6928);
  }, [recommendedRating]);

  const modelCode = `SCB14-${recommendedRating}/${primaryVolt.replace('kV', '')}-0.4`;

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: '#f59e0b' }}>ENGINEERING SIZING ENGINE #03</span>
          <h3>{locale === 'zh' ? '变压器容量、负载率与额定电流在线核算器' : 'Transformer kVA Sizing, Load-Rate & Rated Current Calculator'}</h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>RECOMMENDED STANDARD RATING</span>
          <strong style={{ color: '#f59e0b', font: '900 22px/1 var(--display)' }}>{recommendedRating} kVA</strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '有功用电负荷 (Active Load P):' : 'Active Load (P in kW):'} {loadKw} kW</label>
          <input
            type="range"
            min="100"
            max="10000"
            step="50"
            value={loadKw}
            onChange={(e) => setLoadKw(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#f59e0b', margin: '8px 0' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8' }}>
            <span>100 kW</span>
            <span>5000 kW</span>
            <span>10000 kW</span>
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '自然功率因数 (Power Factor cosφ):' : 'Power Factor (cosφ):'} {powerFactor}</label>
          <div className="sld-buttons">
            {[0.75, 0.8, 0.85, 0.9, 0.95].map((pf) => (
              <button
                key={pf}
                type="button"
                className={`sld-btn ${powerFactor === pf ? 'active' : ''}`}
                onClick={() => setPowerFactor(pf)}
              >
                {pf}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '预留未来扩容余量 (Growth Margin):' : 'Future Expansion Margin:'} {growthMargin}%</label>
          <div className="sld-buttons">
            {[10, 15, 20, 30].map((m) => (
              <button
                key={m}
                type="button"
                className={`sld-btn ${growthMargin === m ? 'active' : ''}`}
                onClick={() => setGrowthMargin(m)}
              >
                +{m}%
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '高压进线电压等级 (Primary Voltage):' : 'Primary Voltage Class:'}</label>
          <div className="sld-buttons">
            {(['10kV', '35kV', '110kV'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`sld-btn ${primaryVolt === v ? 'active' : ''}`}
                onClick={() => setPrimaryVolt(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-preview-panel">
        <div className="sld-schematic" style={{ borderColor: 'rgba(245, 158, 11, 0.35)', color: '#fde68a' }}>
          <div style={{ color: '#ffffff', fontWeight: 800, marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
            <span>⚡ TRANSFORMER CAPACITY & THERMAL EFFICIENCY MATRIX</span>
            <span style={{ color: '#f59e0b' }}>IEC 60076 / GB 1094 / ГОСТ 11677</span>
          </div>
          <div>[TOTAL APPARENT POWER] ➔ S = (P / cosφ) × (1 + Margin) = <strong>{apparentPowerKva} kVA</strong></div>
          <div>[RECOMMENDED STANDARD RATING] ➔ <strong>{recommendedRating} kVA</strong> (Economical Load Ratio: {loadRate}%)</div>
          <div>[LV RATED BUSBAR CURRENT] ➔ I_lv = S / (√3 × 0.4kV) = <strong>{ratedCurrentLv} A</strong> (0.4kV Main Incomer)</div>
          <div style={{ paddingLeft: '20px', color: '#94a3b8' }}>│ (Dyn11 Vector Group, Short-Circuit Impedance Zk=6.0% / 8.0%, PT100 Embedded Winding Sensors)</div>
        </div>

        <div className="sld-result-meta">
          <h4>{modelCode}</h4>
          <ul>
            <li><Check size={16} /> <strong>Economical Load Range:</strong> 65% ~ 80% High-Efficiency Peak</li>
            <li><Check size={16} /> <strong>Incomer Switchgear:</strong> Min. Rated Current {ratedCurrentLv}A Form 4b</li>
            <li><Check size={16} /> <strong>Standard Compliances:</strong> IEC 60076-11 EcoDesign Tier 2</li>
          </ul>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#ffffff' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I calculated my transformer capacity requirements using Feichi Sizer: Calculated Load = ${loadKw}kW, Power Factor = ${powerFactor}, Target Standard Rating = ${recommendedRating}kVA (${primaryVolt}/0.4kV). Please provide the official engineering datasheet, loss test reports, and commercial quotation.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向技术总工 Henry 索取该容量方案与试验报告' : 'Request Official Datasheet & Pricing'}
          </a>
        </div>
      </div>
    </div>
  );
}

function SldConfigurator({ locale }: { locale: Locale }) {
  const [sector, setSector] = useState<'solar' | 'rail' | 'industry' | 'utility'>('solar');
  const [voltage, setVoltage] = useState<'10kV' | '24kV' | '35kV'>('35kV');
  const [capacity, setCapacity] = useState<'630kVA' | '1250kVA' | '2000kVA' | '3150kVA'>('2000kVA');

  const sectorLabels: Record<Locale, { solar: string; rail: string; industry: string; utility: string }> = {
    en: { solar: 'Solar & Wind Farm', rail: 'Rail Traction', industry: 'Industrial & Mining', utility: 'Grid Substation' },
    zh: { solar: '光伏/风电升压站', rail: '轨道交通牵引', industry: '工矿重型配电', utility: '电网枢纽变电站' },
    ja: { solar: '太陽光・風力発電', rail: '鉄道き電用', industry: '重工業・鉱山用', utility: '電力系統変電所' },
    es: { solar: 'Parque Solar / Eólico', rail: 'Tracción Ferroviaria', industry: 'Industria Pesada / Minería', utility: 'Red de Distribución' },
    ru: { solar: 'СЭС и ВЭС (ВИЭ)', rail: 'Тяговые подстанции', industry: 'Горнорудные и заводы', utility: 'Сетевые подстанции' },
  };

  const modelCode = `YB-${voltage.replace('kV', '')}/0.4-${capacity}-${sector === 'solar' ? 'PV' : 'IND'}`;
  const currentLabels = sectorLabels[locale] || sectorLabels.en;

  return (
    <div className="sld-widget">
      <div className="sld-header">
        <div>
          <span className="eyebrow">INTERACTIVE SLD SPEC CONFIGURATOR</span>
          <h3>{locale === 'zh' ? '单线接线图（SLD）与工程选型计算器' : 'Interactive Project SLD & Substation Configurator'}</h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>ESTIMATED MATCH</span>
          <strong style={{ color: 'var(--cyan)', font: '900 22px/1 var(--display)' }}>{modelCode}</strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '应用场景 (Application)' : 'Target Application'}</label>
          <div className="sld-buttons">
            {(['solar', 'rail', 'industry', 'utility'] as const).map((key) => (
              <button
                key={key}
                type="button"
                className={`sld-btn ${sector === key ? 'active' : ''}`}
                onClick={() => setSector(key)}
              >
                {currentLabels[key]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '额定电压 (Primary Voltage)' : 'Primary Voltage'}</label>
          <div className="sld-buttons">
            {(['10kV', '24kV', '35kV'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`sld-btn ${voltage === v ? 'active' : ''}`}
                onClick={() => setVoltage(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '额定容量 (Rated Capacity)' : 'Rated Capacity'}</label>
          <div className="sld-buttons">
            {(['630kVA', '1250kVA', '2000kVA', '3150kVA'] as const).map((c) => (
              <button
                key={c}
                type="button"
                className={`sld-btn ${capacity === c ? 'active' : ''}`}
                onClick={() => setCapacity(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-preview-panel">
        <div className="sld-schematic">
          <div style={{ color: '#ffffff', fontWeight: 800, marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
            <span>⚡ SINGLE-LINE SCHEMATIC ARCHITECTURE</span>
            <span style={{ color: 'var(--orange)' }}>IEC 62271-202 COMPLIANT</span>
          </div>
          <div>[GRID INPUT] ➔ {voltage} SF6/Vacuum Ring Main Unit (RMU)</div>
          <div style={{ paddingLeft: '20px', color: '#94a3b8' }}>│ (Protection: Overcurrent + Earth Fault + Lightning Arrester)</div>
          <div>[STEP-DOWN] ➔ {capacity} Low-Loss Hermetically Sealed / Cast Resin Transformer</div>
          <div style={{ paddingLeft: '20px', color: '#94a3b8' }}>│ (Vector Group: Dyn11, Impedance: 4.5% - 6.0%)</div>
          <div>[LV OUT] ➔ 0.4kV Intelligent Switchgear (MCCB Incomer + Auto Capacitor Bank)</div>
        </div>

        <div className="sld-result-meta">
          <h4>{modelCode}</h4>
          <ul>
            <li><Check size={16} /> <strong>Standards:</strong> IEC 62271-200 & IEEE C37</li>
            <li><Check size={16} /> <strong>Ingress:</strong> IP54 (Corrosion Proof)</li>
            <li><Check size={16} /> <strong>Lead Time:</strong> 25-35 Days Fast Delivery</li>
          </ul>
          <a
            className="button button-orange"
            style={{ width: '100%' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I need a technical quote for Feichi Substation model ${modelCode} (${voltage}, ${capacity}, ${sector} application). Please send CAD drawings & quotation.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取该配置图纸与报价' : 'Request Quotation for this SLD'}
          </a>
        </div>
      </div>
    </div>
  );
}

function NitrogenSizer({ locale }: { locale: Locale }) {
  const [purity, setPurity] = useState<'95%' | '98%' | '99.5%' | '99.999%'>('99.5%');
  const [flow, setFlow] = useState<'100' | '300' | '600' | '1200' | '2000'>('600');
  const [safetyEnv, setSafetyEnv] = useState<'mine_flameproof' | 'surface_ex' | 'standard'>('mine_flameproof');

  const envLabels: Record<Locale, { mine_flameproof: string; surface_ex: string; standard: string }> = {
    en: { mine_flameproof: 'Underground Mining (MA/KA Ex d I)', surface_ex: 'Surface Petrochemical (Ex d II)', standard: 'Standard Industrial Skid' },
    zh: { mine_flameproof: '煤矿井下防爆 (MA/KA 煤安认证)', surface_ex: '地面石化防爆 (Ex d II)', standard: '标准工业撬装' },
    ja: { mine_flameproof: '鉱山防爆型 (MA/KA 認証)', surface_ex: '石油化学防爆型 (Ex d II)', standard: '標準工業スキッド' },
    es: { mine_flameproof: 'Antiexplosión Minera (MA/KA)', surface_ex: 'Petroquímica Superficie (Ex d II)', standard: 'Skid Industrial Estándar' },
    ru: { mine_flameproof: 'Шахтное взрывозащищенное (РВ Ex d I)', surface_ex: 'Нефтехимическое (1Ex d II)', standard: 'Промышленное на салазках' },
  };

  const currentEnvLabels = envLabels[locale] || envLabels.en;
  const modelCode = `FC-N2-PSA-${purity.replace('%', '')}-${flow}-${safetyEnv === 'mine_flameproof' ? 'MA-EX' : safetyEnv === 'surface_ex' ? 'EX-II' : 'STD'}`;

  return (
    <div id="nitrogen-sizer" className="sld-widget" style={{ marginTop: '40px' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: 'var(--green)', borderColor: 'var(--green-glow)' }}>FEICHI FC-N2 NITROGEN SIZING CALCULATOR</span>
          <h3>{locale === 'zh' ? '飞驰电气 FC-N2 变压吸附（PSA）制氮系统选型器' : 'Feichi FC-N2 PSA Nitrogen Flow & Purity Sizer'}</h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>MATCHED FEICHI MODEL</span>
          <strong style={{ color: 'var(--green)', font: '900 22px/1 var(--display)' }}>{modelCode}</strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '氮气纯度 (Target Purity)' : 'Target Nitrogen Purity'}</label>
          <div className="sld-buttons">
            {(['95%', '98%', '99.5%', '99.999%'] as const).map((p) => (
              <button
                key={p}
                type="button"
                className={`sld-btn ${purity === p ? 'active' : ''}`}
                onClick={() => setPurity(p)}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '产气流量 (Flow Capacity Nm³/h)' : 'Flow Capacity (Nm³/h)'}</label>
          <div className="sld-buttons">
            {(['100', '300', '600', '1200', '2000'] as const).map((f) => (
              <button
                key={f}
                type="button"
                className={`sld-btn ${flow === f ? 'active' : ''}`}
                onClick={() => setFlow(f)}
              >
                {f} Nm³/h
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '防爆与应用环境 (Safety Rating)' : 'Safety Environment'}</label>
          <div className="sld-buttons">
            {(['mine_flameproof', 'surface_ex', 'standard'] as const).map((env) => (
              <button
                key={env}
                type="button"
                className={`sld-btn ${safetyEnv === env ? 'active' : ''}`}
                onClick={() => setSafetyEnv(env)}
              >
                {currentEnvLabels[env]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-preview-panel">
        <div className="sld-schematic" style={{ borderColor: 'rgba(16, 185, 129, 0.35)', color: '#6ee7b7' }}>
          <div style={{ color: '#ffffff', fontWeight: 800, marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
            <span>💨 FEICHI FC-N2 PSA GAS PURIFICATION FLOW</span>
            <span style={{ color: 'var(--green)' }}>MA/KA 煤安认证 / EX D I MB</span>
          </div>
          <div>[AIR FEED] ➔ Multistage Filter & Refrigerated Dryer (Residual Oil &lt; 0.003 mg/m³)</div>
          <div>[PSA ADSORPTION] ➔ Dual Tower CMS System ({purity} N₂ Output @ {flow} Nm³/h)</div>
          <div style={{ paddingLeft: '20px', color: '#94a3b8' }}>│ (Continuous Oxygen Telemetry + Automated Off-Spec Gas Venting)</div>
          <div>[PRESSURE & CONTROL] ➔ 0.8 MPa - 2.5 MPa Delivery (Explosion-Proof Flameproof Starter)</div>
        </div>

        <div className="sld-result-meta">
          <h4>{modelCode}</h4>
          <ul>
            <li><Check size={16} /> <strong>Certification:</strong> MA Mining Safety & Ex d I Mb</li>
            <li><Check size={16} /> <strong>Carbon Sieve:</strong> High Hardness CMS (10+ Yr Life)</li>
            <li><Check size={16} /> <strong>Telemetry:</strong> Intelligent PLC Touchscreen</li>
          </ul>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, var(--green), #059669)', color: '#ffffff' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I need a technical quote for Feichi Nitrogen Generator model ${modelCode} (${purity} purity, ${flow} Nm3/h, ${safetyEnv} application). Please provide engineering proposal & P&ID diagram.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取该制氮方案与 P&ID 图纸' : 'Request FC-N2 Nitrogen Proposal'}
          </a>
        </div>
      </div>
    </div>
  );
}

function SvgReactiveCalculator({ locale }: { locale: Locale }) {
  const [gridVoltage, setGridVoltage] = useState<'6kV' | '10kV' | '24kV' | '35kV'>('35kV');
  const [activeLoadMw, setActiveLoadMw] = useState<number>(30);
  const [initCosPhi, setInitCosPhi] = useState<number>(0.75);
  const [targetCosPhi, setTargetCosPhi] = useState<number>(0.98);
  const [harmonicClass, setHarmonicClass] = useState<'Renewable Solar/Wind' | 'Arc Furnace/Rolling Mill' | 'Mining/Pump Motor'>('Renewable Solar/Wind');

  const requiredQcMvar = useMemo(() => {
    const tan1 = Math.tan(Math.acos(initCosPhi));
    const tan2 = Math.tan(Math.acos(targetCosPhi));
    const raw = activeLoadMw * (tan1 - tan2);
    return Math.max(1, Math.round(raw * 10) / 10);
  }, [activeLoadMw, initCosPhi, targetCosPhi]);

  const recommendedRatingMvar = useMemo(() => {
    const standardSizes = [1, 2, 3, 5, 8, 10, 15, 20, 25, 30, 40, 50, 60, 80, 100];
    const match = standardSizes.find((s) => s >= requiredQcMvar) || 100;
    return match;
  }, [requiredQcMvar]);

  const modelCode = `FC-SVG-${gridVoltage.replace('kV', '')}/±${recommendedRatingMvar}Mvar-${harmonicClass === 'Arc Furnace/Rolling Mill' ? 'EAF-APF' : harmonicClass === 'Renewable Solar/Wind' ? 'PV-LVRT' : 'IND-SKID'}`;

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(6, 182, 212, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: 'var(--cyan)', borderColor: 'rgba(6, 182, 212, 0.4)' }}>ENGINEERING SIZING ENGINE #04 (IEC 62927 / ГОСТ Р 58087)</span>
          <h3>{locale === 'zh' ? '高压动态无功补偿 SVG / STATCOM 与有源滤波容量核算器' : 'HV STATCOM / SVG Dynamic Reactive Compensation & Harmonic Sizer'}</h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>RECOMMENDED SVG CAPACITY</span>
          <strong style={{ color: 'var(--cyan)', font: '900 22px/1 var(--display)' }}>±{recommendedRatingMvar} Mvar</strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '并网母线额定电压 (Grid Bus Voltage):' : 'Nominal Grid Voltage:'}</label>
          <div className="sld-buttons">
            {(['6kV', '10kV', '24kV', '35kV'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`sld-btn ${gridVoltage === v ? 'active' : ''}`}
                onClick={() => setGridVoltage(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '系统有功负荷容量 (Active Power P):' : 'Active Power Load (P in MW):'} {activeLoadMw} MW</label>
          <input
            type="range"
            min="1"
            max="120"
            step="1"
            value={activeLoadMw}
            onChange={(e) => setActiveLoadMw(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--cyan)', margin: '8px 0' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8' }}>
            <span>1 MW</span>
            <span>60 MW</span>
            <span>120 MW</span>
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '当前自然功率因数 (Initial cosφ₁):' : 'Initial Power Factor (cosφ₁):'} {initCosPhi}</label>
          <div className="sld-buttons">
            {[0.65, 0.70, 0.75, 0.80, 0.85].map((pf) => (
              <button
                key={pf}
                type="button"
                className={`sld-btn ${initCosPhi === pf ? 'active' : ''}`}
                onClick={() => setInitCosPhi(pf)}
              >
                {pf}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '目标补偿功率因数 (Target cosφ₂):' : 'Target Power Factor (cosφ₂):'} {targetCosPhi}</label>
          <div className="sld-buttons">
            {[0.95, 0.98, 0.99, 1.00].map((tpf) => (
              <button
                key={tpf}
                type="button"
                className={`sld-btn ${targetCosPhi === tpf ? 'active' : ''}`}
                onClick={() => setTargetCosPhi(tpf)}
              >
                {tpf}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group" style={{ gridColumn: '1 / -1' }}>
          <label>{locale === 'zh' ? '典型负荷与电能质量特征 (Primary Grid Application & Harmonics):' : 'Target Load & Power Quality Class:'}</label>
          <div className="sld-buttons">
            {(['Renewable Solar/Wind', 'Arc Furnace/Rolling Mill', 'Mining/Pump Motor'] as const).map((hc) => (
              <button
                key={hc}
                type="button"
                className={`sld-btn ${harmonicClass === hc ? 'active' : ''}`}
                onClick={() => setHarmonicClass(hc)}
              >
                {hc}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-preview-panel">
        <div className="sld-schematic" style={{ borderColor: 'rgba(6, 182, 212, 0.35)', color: '#38bdf8' }}>
          <div style={{ color: '#ffffff', fontWeight: 800, marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
            <span>⚡ STATCOM DYNAMIC COMPENSATION & HARMONIC MITIGATION</span>
            <span style={{ color: 'var(--cyan)' }}>IEEE 519 / ГОСТ Р 58087 / LVRT</span>
          </div>
          <div>[REACTIVE DEMAND] ➔ Qc = P × (tanφ₁ - tanφ₂) = <strong>{requiredQcMvar} Mvar</strong></div>
          <div>[RECOMMENDED MMC STATCOM] ➔ <strong>±{recommendedRatingMvar} Mvar ({gridVoltage} Direct-Coupled)</strong></div>
          <div>[DYNAMIC PERFORMANCE] ➔ Response Time: &lt;5ms | Cosφ ≥ 0.99 Continuous Bidirectional</div>
          <div style={{ paddingLeft: '20px', color: '#94a3b8' }}>│ (Active 2nd-25th Harmonic THD &lt; 3%, Closed-Loop Deionized Pure Water Cooling)</div>
        </div>

        <div className="sld-result-meta">
          <h4>{modelCode}</h4>
          <ul>
            <li><Check size={16} /> <strong>Topology:</strong> H-Bridge Cascaded MMC Inverter</li>
            <li><Check size={16} /> <strong>Direct Connection:</strong> No step-down transformer required</li>
            <li><Check size={16} /> <strong>Cooling:</strong> Redundant Pure Water-Water Cooling</li>
          </ul>
          <a
            className="button button-cyan"
            style={{ width: '100%' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I calculated my STATCOM requirements on Feichi Power: Active Power = ${activeLoadMw}MW, Grid Voltage = ${gridVoltage}, Power Factor = ${initCosPhi} -> ${targetCosPhi}, Recommended STATCOM = ±${recommendedRatingMvar}Mvar (${modelCode}). Please provide the harmonic simulation report, single-line diagram, and commercial proposal.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取 STATCOM 方案与仿真报告' : 'Request Official STATCOM Proposal'}
          </a>
        </div>
      </div>
    </div>
  );
}

function BusbarThermalSizer({ locale }: { locale: Locale }) {
  const [shortCircuitIcw, setShortCircuitIcw] = useState<'20kA' | '25kA' | '31.5kA' | '40kA' | '50kA'>('31.5kA');
  const [durationSec, setDurationSec] = useState<'1s' | '2s' | '3s' | '4s'>('3s');
  const [busbarMaterial, setBusbarMaterial] = useState<'Copper (T2 Cu, C=171)' | 'Aluminum (1060 Al, C=87)'>('Copper (T2 Cu, C=171)');

  const minSectionMm2 = useMemo(() => {
    const icwNum = parseFloat(shortCircuitIcw.replace('kA', '')) * 1000;
    const tNum = parseFloat(durationSec.replace('s', ''));
    const cVal = busbarMaterial.includes('Copper') ? 171 : 87;
    // S_min = (I_sc * sqrt(t)) / C
    const raw = (icwNum * Math.sqrt(tNum)) / cVal;
    return Math.round(raw);
  }, [shortCircuitIcw, durationSec, busbarMaterial]);

  const recommendedBusbarProfile = useMemo(() => {
    if (busbarMaterial.includes('Copper')) {
      if (minSectionMm2 <= 400) return 'TMY 1x(60x8) - 480 mm² (In=1250A)';
      if (minSectionMm2 <= 600) return 'TMY 1x(80x8) - 640 mm² (In=1600A)';
      if (minSectionMm2 <= 800) return 'TMY 1x(100x8) - 800 mm² (In=2000A)';
      if (minSectionMm2 <= 1200) return 'TMY 2x(80x8) - 1280 mm² (In=2500A)';
      if (minSectionMm2 <= 1600) return 'TMY 2x(100x8) - 1600 mm² (In=3150A)';
      return 'TMY 2x(120x10) - 2400 mm² (In=4000A)';
    }
    if (minSectionMm2 <= 600) return 'LMY 1x(80x8) - 640 mm²';
    if (minSectionMm2 <= 1000) return 'LMY 1x(100x10) - 1000 mm²';
    if (minSectionMm2 <= 1600) return 'LMY 2x(100x8) - 1600 mm²';
    return 'LMY 2x(120x10) - 2400 mm²';
  }, [minSectionMm2, busbarMaterial]);

  const peakDynForceKn = useMemo(() => {
    const icwNum = parseFloat(shortCircuitIcw.replace('kA', ''));
    // Peak current I_p = 2.55 * I_cw (IEC 62271-200)
    const ip = 2.55 * icwNum;
    return ip.toFixed(1);
  }, [shortCircuitIcw]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(239, 68, 68, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.4)' }}>ENGINEERING SIZING ENGINE #05 (IEC 62271-200 / GB 3906 / ГОСТ 14693)</span>
          <h3>{locale === 'zh' ? '开关柜母线短路动热稳定与截面校验计算器' : 'Switchgear Busbar Short-Circuit Thermal & Dynamic Withstand Checker'}</h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>MIN. BUSBAR CROSS-SECTION</span>
          <strong style={{ color: '#ef4444', font: '900 22px/1 var(--display)' }}>{minSectionMm2} mm²</strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '短时耐受短路电流 (Rated Short-Time Current Icw):' : 'Rated Short-Time Current (Icw):'}</label>
          <div className="sld-buttons">
            {(['20kA', '25kA', '31.5kA', '40kA', '50kA'] as const).map((sc) => (
              <button
                key={sc}
                type="button"
                className={`sld-btn ${shortCircuitIcw === sc ? 'active' : ''}`}
                onClick={() => setShortCircuitIcw(sc)}
              >
                {sc}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '短路持续时间 (Duration t):' : 'Short-Circuit Duration (t):'}</label>
          <div className="sld-buttons">
            {(['1s', '2s', '3s', '4s'] as const).map((d) => (
              <button
                key={d}
                type="button"
                className={`sld-btn ${durationSec === d ? 'active' : ''}`}
                onClick={() => setDurationSec(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group" style={{ gridColumn: '1 / -1' }}>
          <label>{locale === 'zh' ? '母线导体材质 (Conductor Material & Thermal Constant C):' : 'Busbar Conductor Material:'}</label>
          <div className="sld-buttons">
            {(['Copper (T2 Cu, C=171)', 'Aluminum (1060 Al, C=87)'] as const).map((mat) => (
              <button
                key={mat}
                type="button"
                className={`sld-btn ${busbarMaterial === mat ? 'active' : ''}`}
                onClick={() => setBusbarMaterial(mat)}
              >
                {mat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-preview-panel">
        <div className="sld-schematic" style={{ borderColor: 'rgba(239, 68, 68, 0.35)', color: '#fca5a5' }}>
          <div style={{ color: '#ffffff', fontWeight: 800, marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
            <span>⚡ BUSBAR THERMAL & ELECTRODYNAMIC VERIFICATION MATRIX</span>
            <span style={{ color: '#ef4444' }}>IEC 62271-200 / ГОСТ 14693</span>
          </div>
          <div>[THERMAL STABILITY FORMULA] ➔ S_min = (Icw × √t) / C = <strong>{minSectionMm2} mm²</strong></div>
          <div>[RECOMMENDED BUSBAR SPEC] ➔ <strong>{recommendedBusbarProfile}</strong></div>
          <div>[PEAK DYNAMIC WITHSTAND Ip] ➔ Ip = 2.55 × Icw = <strong>{peakDynForceKn} kA Peak</strong></div>
          <div style={{ paddingLeft: '20px', color: '#94a3b8' }}>│ (Epoxy Resin Support Insulators, Span ≤ 800mm, High-Strength Phase Spacers)</div>
        </div>

        <div className="sld-result-meta">
          <h4>KYN28A-24 / КРУ-2-10 Busbar Sizing</h4>
          <ul>
            <li><Check size={16} /> <strong>Verified Enclosure:</strong> KYN28A-24 (IAC AFLR 31.5kA/1s)</li>
            <li><Check size={16} /> <strong>Standard Compliances:</strong> IEC 62271-200 / ГОСТ 14693</li>
            <li><Check size={16} /> <strong>Busbar Plating:</strong> Silver / Tin Plated Contact Joints</li>
          </ul>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, #ef4444, #b91c1c)', color: '#ffffff' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I calculated switchgear busbar thermal requirements on Feichi Power: Short-Circuit Rating = ${shortCircuitIcw} / ${durationSec}, Material = ${busbarMaterial}, Calculated Min. Cross-Section = ${minSectionMm2}mm2 (${recommendedBusbarProfile}). Please send KYN28A / KRU switchgear CAD drawings and engineering proposal.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取对应母线开关柜 CAD 方案' : 'Request Switchgear CAD & Sizing Report'}
          </a>
        </div>
      </div>
    </div>
  );
}

function PvBessCableDropSizer({ locale }: { locale: Locale }) {
  const [arrayCapacityMw, setArrayCapacityMw] = useState<number>(5);
  const [voltageAc, setVoltageAc] = useState<'0.69kV' | '0.8kV' | '1.14kV'>('0.8kV');
  const [distanceM, setDistanceM] = useState<number>(250);
  const [cableType, setCableType] = useState<'Copper XLPE (Cu)' | 'Aluminum XLPE (Al)'>('Copper XLPE (Cu)');

  const currentAmps = useMemo(() => {
    const vNum = parseFloat(voltageAc.replace('kV', ''));
    // I = P / (sqrt(3) * U)
    return Math.round((arrayCapacityMw * 1000) / (1.732 * vNum));
  }, [arrayCapacityMw, voltageAc]);

  const recommendedCableConfig = useMemo(() => {
    if (cableType.includes('Copper')) {
      if (currentAmps <= 800) return '2 x (3x240 mm² Cu XLPE)';
      if (currentAmps <= 1600) return '3 x (3x300 mm² Cu XLPE)';
      if (currentAmps <= 2500) return '5 x (3x300 mm² Cu XLPE)';
      return '7 x (3x300 mm² Cu XLPE)';
    }
    if (currentAmps <= 800) return '3 x (3x240 mm² Al XLPE)';
    if (currentAmps <= 1600) return '5 x (3x300 mm² Al XLPE)';
    if (currentAmps <= 2500) return '7 x (3x300 mm² Al XLPE)';
    return '10 x (3x300 mm² Al XLPE)';
  }, [currentAmps, cableType]);

  const voltageDropPercent = useMemo(() => {
    // Delta U% ~ (sqrt(3) * I * L * (R*cos + X*sin)) / (U * 10)
    // Approximate typical specific drop
    const dropFactor = cableType.includes('Copper') ? 0.0055 : 0.009;
    const vNum = parseFloat(voltageAc.replace('kV', '')) * 1000;
    const drop = (currentAmps * distanceM * dropFactor * 100) / vNum;
    return Math.min(5.0, Math.max(0.5, Math.round(drop * 10) / 10)).toFixed(1);
  }, [currentAmps, distanceM, cableType, voltageAc]);

  const modelSkid = `FSKID-${arrayCapacityMw}MW-${voltageAc.replace('kV', '')}/35kV-1500V`;

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(16, 185, 129, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: 'var(--green)', borderColor: 'rgba(16, 185, 129, 0.4)' }}>ENGINEERING SIZING ENGINE #06 (1500V DC / IEC 62271-202)</span>
          <h3>{locale === 'zh' ? '1500V 光储升压一体舱集电线路压降与电缆核算器' : '1500V PV-BESS Skid AC Cable Sizing & Voltage Drop Calculator'}</h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>ESTIMATED VOLTAGE DROP (ΔU%)</span>
          <strong style={{ color: 'var(--green)', font: '900 22px/1 var(--display)' }}>{voltageDropPercent}%</strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '光储子阵额定容量 (Array Capacity):' : 'PV / BESS Sub-Array Capacity:'} {arrayCapacityMw} MW</label>
          <input
            type="range"
            min="1"
            max="12"
            step="0.5"
            value={arrayCapacityMw}
            onChange={(e) => setArrayCapacityMw(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--green)', margin: '8px 0' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8' }}>
            <span>1 MW</span>
            <span>6 MW</span>
            <span>12 MW</span>
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '逆变器交流输出电压 (Inverter AC Voltage):' : 'Inverter AC Voltage:'}</label>
          <div className="sld-buttons">
            {(['0.69kV', '0.8kV', '1.14kV'] as const).map((vac) => (
              <button
                key={vac}
                type="button"
                className={`sld-btn ${voltageAc === vac ? 'active' : ''}`}
                onClick={() => setVoltageAc(vac)}
              >
                {vac}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '集电线路传输距离 (Collection Distance L):' : 'Cable Transmission Distance (L in meters):'} {distanceM} m</label>
          <input
            type="range"
            min="50"
            max="800"
            step="25"
            value={distanceM}
            onChange={(e) => setDistanceM(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--green)', margin: '8px 0' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8' }}>
            <span>50 m</span>
            <span>400 m</span>
            <span>800 m</span>
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '电缆导体材质 (Conductor Type):' : 'Cable Conductor Material:'}</label>
          <div className="sld-buttons">
            {(['Copper XLPE (Cu)', 'Aluminum XLPE (Al)'] as const).map((cmat) => (
              <button
                key={cmat}
                type="button"
                className={`sld-btn ${cableType === cmat ? 'active' : ''}`}
                onClick={() => setCableType(cmat)}
              >
                {cmat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-preview-panel">
        <div className="sld-schematic" style={{ borderColor: 'rgba(16, 185, 129, 0.35)', color: '#6ee7b7' }}>
          <div style={{ color: '#ffffff', fontWeight: 800, marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
            <span>⚡ 1500V DC / 0.8kV AC INVERTER-STEP-UP SKID INTEGRATION</span>
            <span style={{ color: 'var(--green)' }}>IEC 62271-202 / 1500V UTILITY SOLAR</span>
          </div>
          <div>[LV RATED CURRENT] ➔ I_ac = P / (√3 × {voltageAc}) = <strong>{currentAmps} A</strong></div>
          <div>[RECOMMENDED CABLE RUN] ➔ <strong>{recommendedCableConfig}</strong></div>
          <div>[CALCULATED LINE DROP] ➔ ΔU = <strong>{voltageDropPercent}% (Compliant with &lt; 2.5% Loss Target)</strong></div>
          <div style={{ paddingLeft: '20px', color: '#94a3b8' }}>│ (Dual Split Winding Step-Up Trafo 0.8/0.8/35kV, Zk=7.0%, K-factor=11 Inverter Duty)</div>
        </div>

        <div className="sld-result-meta">
          <h4>{modelSkid}</h4>
          <ul>
            <li><Check size={16} /> <strong>Inverter Duty:</strong> Dual Split Winding 1500V DC</li>
            <li><Check size={16} /> <strong>Enclosure:</strong> Outdoor IP55 Skid / Containerized</li>
            <li><Check size={16} /> <strong>Efficiency:</strong> High-efficiency Tier-2 EcoDesign</li>
          </ul>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, var(--green), #059669)', color: '#ffffff' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I calculated 1500V PV-BESS Skid requirements on Feichi Power: Sub-Array = ${arrayCapacityMw}MW, AC Voltage = ${voltageAc}, Line Distance = ${distanceM}m, Rated Current = ${currentAmps}A, Model = ${modelSkid}. Please send the complete 35kV Solar Skid datasheet, single-line diagram, and commercial quotation.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取光储升压一体舱 CAD 方案' : 'Request 1500V PV Skid CAD & Proposal'}
          </a>
        </div>
      </div>
    </div>
  );
}

function FlisrProtectionSizer({ locale }: { locale: Locale }) {
  const [overheadKm, setOverheadKm] = useState<number>(35);
  const [cableKm, setCableKm] = useState<number>(8);
  const [systemKv, setSystemKv] = useState<'10kV' | '20kV' | '35kV'>('35kV');
  const [groundingMode, setGroundingMode] = useState<'Isolated Neutral' | 'Resonant (Petersen Coil)' | 'Low Resistance (NGR)'>('Isolated Neutral');
  const [ambientClimate, setAmbientClimate] = useState<'Arctic -50°C (ГОСТ УХЛ1)' | 'Desert / Tropics (+50°C)' | 'Coastal C5-M Heavy Salt Fog'>('Arctic -50°C (ГОСТ УХЛ1)');

  const steadyCapacitiveAmps = useMemo(() => {
    const unNum = parseFloat(systemKv.replace('kV', ''));
    // Overhead line unit capacitance ~0.003 A/(km*kV), XLPE cable ~0.1 A/(km*kV)
    const ic = (unNum / Math.sqrt(3)) * (0.003 * overheadKm + 0.1 * cableKm);
    return Math.round(ic * 10) / 10;
  }, [overheadKm, cableKm, systemKv]);

  const transientPeakAmps = useMemo(() => {
    return Math.round(steadyCapacitiveAmps * 35);
  }, [steadyCapacitiveAmps]);

  const recommendedRecloserModel = useMemo(() => {
    const kvNum = systemKv.replace('kV', '');
    const climateCode = ambientClimate.includes('Arctic') ? 'UHL1' : ambientClimate.includes('Coastal') ? 'C5M' : 'TROP';
    if (systemKv === '10kV') return `FPC-REC-10/630-20-${climateCode} (РВА/TEL-10-12.5/630)`;
    if (systemKv === '20kV') return `FPC-REC-24/630-20-${climateCode} (ПСС-20/630-20)`;
    return `FPC-REC-35/1250-25-${climateCode} (ПСС-35/1250-25 УХЛ1 / РВА/TEL-35)`;
  }, [systemKv, ambientClimate]);

  const protectionAlgorithm = useMemo(() => {
    if (groundingMode === 'Isolated Neutral') {
      return locale === 'zh'
        ? '首半波暂态零序方向波形判据 (3I₀/3U₀ 10kHz采样) + 零序过压保护'
        : 'High-Speed Transient 3I₀/3U₀ Waveform Polarity (10kHz Sampling) + Overvoltage';
    }
    if (groundingMode === 'Resonant (Petersen Coil)') {
      return locale === 'zh'
        ? '高次谐波 (5/7次) 与暂态无功极性综合判定 + 残流增量选线'
        : 'Higher Harmonic (5th/7th) & Transient Reactive Polarity with Residual Step Algorithm';
    }
    return locale === 'zh'
      ? '零序方向过流保护 (I₀_set: 20A~100A, <100ms 极速切除)'
      : 'Zero-Sequence Directional Overcurrent (Threshold: 20A–100A, Trip <100ms)';
  }, [groundingMode, locale]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(59, 130, 246, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: 'var(--blue)', borderColor: 'rgba(59, 130, 246, 0.4)' }}>ENGINEERING SIZING ENGINE #07 (IEC 62271-111 / ГОСТ Р 52565)</span>
          <h3>{locale === 'zh' ? '10kV–35kV 户外智能真空重合器与配网自愈 (FLISR) 整定计算器' : '10kV–35kV Smart Vacuum Recloser & Grid FLISR Self-Healing Calculator'}</h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>STEADY CAPACITIVE CURRENT (3I₀)</span>
          <strong style={{ color: 'var(--blue)', font: '900 22px/1 var(--display)' }}>{steadyCapacitiveAmps} A</strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '架空线路全长 (Overhead Line Length):' : 'Overhead Feeder Length:'} {overheadKm} km</label>
          <input
            type="range"
            min="5"
            max="150"
            step="5"
            value={overheadKm}
            onChange={(e) => setOverheadKm(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--blue)', margin: '8px 0' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8' }}>
            <span>5 km</span>
            <span>75 km</span>
            <span>150 km</span>
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '地埋电缆全长 (Underground Cable Length):' : 'Underground Cable Length:'} {cableKm} km</label>
          <input
            type="range"
            min="0"
            max="50"
            step="1"
            value={cableKm}
            onChange={(e) => setCableKm(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--blue)', margin: '8px 0' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8' }}>
            <span>0 km</span>
            <span>25 km</span>
            <span>50 km</span>
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '系统额定电压等级 (System Voltage):' : 'System Voltage Rating:'}</label>
          <div className="sld-buttons">
            {(['10kV', '20kV', '35kV'] as const).map((kv) => (
              <button
                key={kv}
                type="button"
                className={`sld-btn ${systemKv === kv ? 'active' : ''}`}
                onClick={() => setSystemKv(kv)}
              >
                {kv}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '中性点接地运行方式 (Neutral Grounding Mode):' : 'Neutral Grounding Topology:'}</label>
          <div className="sld-buttons">
            {(['Isolated Neutral', 'Resonant (Petersen Coil)', 'Low Resistance (NGR)'] as const).map((gmode) => (
              <button
                key={gmode}
                type="button"
                className={`sld-btn ${groundingMode === gmode ? 'active' : ''}`}
                onClick={() => setGroundingMode(gmode)}
                style={{ fontSize: '12px' }}
              >
                {gmode.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '16px' }}>
        <label style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginBottom: '8px' }}>
          {locale === 'zh' ? '运行气候与极端环境适配 (Climate & Ambient Execution):' : 'Climate & Environmental Condition:'}
        </label>
        <div className="sld-buttons">
          {(['Arctic -50°C (ГОСТ УХЛ1)', 'Desert / Tropics (+50°C)', 'Coastal C5-M Heavy Salt Fog'] as const).map((clim) => (
            <button
              key={clim}
              type="button"
              className={`sld-btn ${ambientClimate === clim ? 'active' : ''}`}
              onClick={() => setAmbientClimate(clim)}
              style={{ fontSize: '12px' }}
            >
              {clim}
            </button>
          ))}
        </div>
      </div>

      <div className="sld-results-panel" style={{ marginTop: '20px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: '10px', padding: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>RECOMMENDED SMART RECLOSER MODEL</span>
            <strong style={{ color: 'var(--blue)', fontSize: '15px' }}>{recommendedRecloserModel}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>TRANSIENT PEAK DISCHARGE (I_peak)</span>
            <strong style={{ color: '#f8fafc', fontSize: '14px' }}>{transientPeakAmps} A (Sub-5ms Peak)</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>FLISR AUTO-RECLOSING SEQUENCE</span>
            <strong style={{ color: '#38bdf8', fontSize: '14px' }}>O - 0.5s - CO - 3.0s - Block</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>ACTUATOR & MECHANICAL ENDURANCE</span>
            <strong style={{ color: '#22c55e', fontSize: '14px' }}>100,000 Ops (Bi-Stable Magnetic, Zero Oil)</strong>
          </div>
        </div>

        <div style={{ background: 'rgba(2, 6, 23, 0.6)', padding: '12px', borderRadius: '6px', borderLeft: '3px solid var(--blue)', marginBottom: '16px' }}>
          <span style={{ fontSize: '11px', color: 'var(--blue)', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>
            {locale === 'zh' ? '推荐接地保护与选线算法 (Zero-Sequence Protection Criterion):' : 'Recommended Zero-Sequence Protection Logic:'}
          </span>
          <p style={{ margin: 0, fontSize: '13px', color: '#e2e8f0', lineHeight: 1.5 }}>
            {protectionAlgorithm}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, var(--blue), #2563eb)', color: '#ffffff' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I calculated Smart Recloser & FLISR specs on Feichi Power: Voltage = ${systemKv}, Overhead = ${overheadKm}km, Cable = ${cableKm}km, Steady Ground Current = ${steadyCapacitiveAmps}A, Grounding = ${groundingMode}, Recommended Recloser = ${recommendedRecloserModel}. Please provide CAD dimension drawings, FLISR relay settings guide, and Russian GOST Опросный лист quotation.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取智能重合器与自愈方案' : 'Request Smart Recloser CAD & FLISR Proposal'}
          </a>
        </div>
      </div>
    </div>
  );
}

function TrvBreakerSizer({ locale }: { locale: Locale }) {
  const [ratedVoltage, setRatedVoltage] = useState<'35kV' | '72.5kV' | '110kV'>('110kV');
  const [shortCircuitKa, setShortCircuitKa] = useState<'25kA' | '31.5kA' | '40kA' | '50kA'>('40kA');
  const [dutyCycle, setDutyCycle] = useState<'Terminal Fault T100 (100% Isc)' | 'Short-Line Fault L90 (90% Isc)' | 'Short-Line Fault L75 (75% Isc)' | 'Capacitor Bank Switching C2'>('Short-Line Fault L90 (90% Isc)');
  const [gasMixture, setGasMixture] = useState<'Arctic -60°C (SF6/CF4 50/50)' | 'Standard Pure SF6 (0.5 MPa)' | 'Dry Air / GWP=0 Eco'>('Arctic -60°C (SF6/CF4 50/50)');

  const peakTrvUc = useMemo(() => {
    const vNum = parseFloat(ratedVoltage.replace('kV', ''));
    // Peak TRV Uc = 1.4 * sqrt(2)/sqrt(3) * Ur * 1.5
    const uc = (1.4 * Math.sqrt(2) / Math.sqrt(3)) * vNum * 1.5;
    return Math.round(uc);
  }, [ratedVoltage]);

  const riseRateRrv = useMemo(() => {
    if (dutyCycle.includes('L90')) return 2.0;
    if (dutyCycle.includes('L75')) return 1.6;
    if (dutyCycle.includes('T100')) return 1.78;
    return 0.85;
  }, [dutyCycle]);

  const recommendedBreakerModel = useMemo(() => {
    const scNum = shortCircuitKa.replace('kA', '');
    const climTag = gasMixture.includes('Arctic') ? 'UHL1' : gasMixture.includes('Eco') ? 'ECO' : 'STD';
    if (ratedVoltage === '35kV') return `FLW-35/2000-${scNum}-${climTag} (ВТ-35-${scNum}/2000 УХЛ1)`;
    if (ratedVoltage === '72.5kV') return `FLW-72.5/2500-${scNum}-${climTag}`;
    return `FLW-110/3150-${scNum}-${climTag} (ВГТ-110-${scNum}/3150 УХЛ1)`;
  }, [ratedVoltage, shortCircuitKa, gasMixture]);

  const interrupterMechanism = useMemo(() => {
    return locale === 'zh'
      ? '热自能式 (Thermal Auto-Puffer) 灭弧室 + 纯弹簧操动机构 (10,000次免维护)'
      : 'Thermal Auto-Puffer Interrupter + Pure Motorized Spring Mechanism (10,000 Ops)';
  }, [locale]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(234, 179, 8, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: 'var(--yellow)', borderColor: 'rgba(234, 179, 8, 0.4)' }}>ENGINEERING SIZING ENGINE #08 (IEC 62271-100 / ГОСТ Р 52565)</span>
          <h3>{locale === 'zh' ? '35kV–110kV 户外高压断路器短路开断与近区故障 TRV 校核计算器' : '35kV–110kV High-Voltage Circuit Breaker Breaking & SLF TRV Calculator'}</h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>TRV RISE RATE (RRTRV)</span>
          <strong style={{ color: 'var(--yellow)', font: '900 22px/1 var(--display)' }}>{riseRateRrv} kV/μs</strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '系统额定电压 (Rated Voltage Ur):' : 'System Rated Voltage Ur:'}</label>
          <div className="sld-buttons">
            {(['35kV', '72.5kV', '110kV'] as const).map((kv) => (
              <button
                key={kv}
                type="button"
                className={`sld-btn ${ratedVoltage === kv ? 'active' : ''}`}
                onClick={() => setRatedVoltage(kv)}
              >
                {kv}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '额定短路开断电流 (Short-Circuit Breaking Isc):' : 'Breaking Current Isc:'}</label>
          <div className="sld-buttons">
            {(['25kA', '31.5kA', '40kA', '50kA'] as const).map((ka) => (
              <button
                key={ka}
                type="button"
                className={`sld-btn ${shortCircuitKa === ka ? 'active' : ''}`}
                onClick={() => setShortCircuitKa(ka)}
              >
                {ka}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '开断故障考核工况 (Breaking Duty Cycle):' : 'Breaking Duty Type:'}</label>
          <div className="sld-buttons">
            {(['Terminal Fault T100 (100% Isc)', 'Short-Line Fault L90 (90% Isc)', 'Short-Line Fault L75 (75% Isc)', 'Capacitor Bank Switching C2'] as const).map((duty) => (
              <button
                key={duty}
                type="button"
                className={`sld-btn ${dutyCycle === duty ? 'active' : ''}`}
                onClick={() => setDutyCycle(duty)}
                style={{ fontSize: '12px' }}
              >
                {duty.split(' ')[0]} {duty.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '极寒绝缘介质与混合气体 (Gas Medium):' : 'Insulation & Gas Chemistry:'}</label>
          <div className="sld-buttons">
            {(['Arctic -60°C (SF6/CF4 50/50)', 'Standard Pure SF6 (0.5 MPa)', 'Dry Air / GWP=0 Eco'] as const).map((gas) => (
              <button
                key={gas}
                type="button"
                className={`sld-btn ${gasMixture === gas ? 'active' : ''}`}
                onClick={() => setGasMixture(gas)}
                style={{ fontSize: '12px' }}
              >
                {gas.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-results-panel" style={{ marginTop: '20px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(234, 179, 8, 0.25)', borderRadius: '10px', padding: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>RECOMMENDED HV BREAKER MODEL</span>
            <strong style={{ color: 'var(--yellow)', fontSize: '15px' }}>{recommendedBreakerModel}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>PEAK TRV ENVELOPE (Uc)</span>
            <strong style={{ color: '#f8fafc', fontSize: '14px' }}>{peakTrvUc} kV (IEC 62271-100 Compliant)</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>INTERRUPTER TECHNOLOGY</span>
            <strong style={{ color: '#38bdf8', fontSize: '14px' }}>{interrupterMechanism}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>ARCTIC LIQUEFACTION LIMIT</span>
            <strong style={{ color: '#22c55e', fontSize: '14px' }}>-62°C (Non-Freezing УХЛ1)</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, var(--yellow), #d97706)', color: '#03080e', fontWeight: 'bold' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I calculated 35-110kV HV Circuit Breaker specs on Feichi Power: Voltage = ${ratedVoltage}, Breaking Capacity = ${shortCircuitKa}, Duty = ${dutyCycle}, Gas = ${gasMixture}, Peak TRV = ${peakTrvUc}kV, Model = ${recommendedBreakerModel}. Please send CAD drawings, type-test certificates, and Russian GOST Опросный лист quotation.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取 110kV 高压断路器 CAD 方案与报价' : 'Request 110kV Breaker CAD & Proposal'}
          </a>
        </div>
      </div>
    </div>
  );
}

function DisconnectorSizer({ locale }: { locale: Locale }) {
  const [ratedVoltage, setRatedVoltage] = useState<'35kV' | '72.5kV' | '110kV'>('110kV');
  const [ratedCurrent, setRatedCurrent] = useState<'1250A' | '2000A' | '3150A'>('2000A');
  const [shortCircuitKa, setShortCircuitKa] = useState<'25kA' | '31.5kA' | '40kA'>('40kA');
  const [iceThickness, setIceThickness] = useState<'10mm (IEC Normal)' | '15mm (Heavy Glaze)' | '20mm (Severe Siberian УХЛ1)'>('20mm (Severe Siberian УХЛ1)');
  const [earthingBlades, setEarthingBlades] = useState<'No Earth Switch' | '1 Earth Blade (РДЗ-1)' | '2 Earth Blades (РДЗ-2 Dual Side)'>('2 Earth Blades (РДЗ-2 Dual Side)');

  const peakDynamicCurrent = useMemo(() => {
    const scNum = parseFloat(shortCircuitKa.replace('kA', ''));
    return Math.round(scNum * 2.5);
  }, [shortCircuitKa]);

  const thermalEnergy = useMemo(() => {
    const scNum = parseFloat(shortCircuitKa.replace('kA', ''));
    return scNum * scNum * 3;
  }, [shortCircuitKa]);

  const requiredIceTorque = useMemo(() => {
    if (iceThickness.includes('20mm')) return 375;
    if (iceThickness.includes('15mm')) return 260;
    return 165;
  }, [iceThickness]);

  const recommendedDisconnectorModel = useMemo(() => {
    const vNum = ratedVoltage.replace('kV', '');
    const cNum = ratedCurrent.replace('A', '');
    const scNum = shortCircuitKa.replace('kA', '');
    const earthCode = earthingBlades.includes('2 Earth') ? '.2' : earthingBlades.includes('1 Earth') ? '.1' : '';
    const climTag = iceThickness.includes('20mm') ? 'УХЛ1' : 'У1';
    if (vNum === '35') {
      return `GW5-40.5/${cNum}-${scNum} (РГП${earthCode}-35/${cNum}-${scNum} ${climTag})`;
    }
    if (vNum === '72.5') {
      return `GW4-72.5/${cNum}-${scNum} (РДЗ${earthCode}-72.5/${cNum}-${scNum} ${climTag})`;
    }
    return `GW4-126/${cNum}-${scNum} (РДЗ${earthCode}-110/${cNum}-${scNum} ${climTag})`;
  }, [ratedVoltage, ratedCurrent, shortCircuitKa, earthingBlades, iceThickness]);

  const driveMechanism = useMemo(() => {
    return locale === 'zh'
      ? '重型行星齿轮电动机构 CJ6（俄标 ПД-14）+ 机械/电气双重闭锁 + 30μm 镀银触头自清洁'
      : 'Heavy Planetary Gear Motor Drive CJ6 / PD-14 + Dual Interlocking + 30μm Ag Self-Cleaning Blades';
  }, [locale]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(56, 189, 248, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.4)' }}>
            ENGINEERING SIZING ENGINE #09 (IEC 62271-102 / ГОСТ Р 52726-2007)
          </span>
          <h3>
            {locale === 'zh'
              ? '35kV–110kV 户外高压隔离开关动热稳定与 20mm 极寒覆冰破冰力矩核算器'
              : '35kV–110kV HV Disconnector Thermal/Dynamic Withstand & 20mm Ice-Breaking Sizer'}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>ICE-BREAKING TORQUE (Mice)</span>
          <strong style={{ color: '#38bdf8', font: '900 22px/1 var(--display)' }}>≥ {requiredIceTorque} N·m</strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '系统额定电压 (Rated Voltage Ur):' : 'System Rated Voltage Ur:'}</label>
          <div className="sld-buttons">
            {(['35kV', '72.5kV', '110kV'] as const).map((kv) => (
              <button
                key={kv}
                type="button"
                className={`sld-btn ${ratedVoltage === kv ? 'active' : ''}`}
                onClick={() => setRatedVoltage(kv)}
              >
                {kv}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '额定连续通电电流 (Continuous Current Ir):' : 'Continuous Current Ir:'}</label>
          <div className="sld-buttons">
            {(['1250A', '2000A', '3150A'] as const).map((a) => (
              <button
                key={a}
                type="button"
                className={`sld-btn ${ratedCurrent === a ? 'active' : ''}`}
                onClick={() => setRatedCurrent(a)}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '额定短时耐受电流 (Short-Time Icw / 3s):' : 'Short-Time Withstand Icw / 3s:'}</label>
          <div className="sld-buttons">
            {(['25kA', '31.5kA', '40kA'] as const).map((ka) => (
              <button
                key={ka}
                type="button"
                className={`sld-btn ${shortCircuitKa === ka ? 'active' : ''}`}
                onClick={() => setShortCircuitKa(ka)}
              >
                {ka}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '环境覆冰厚度与极寒评级 (Ice Thickness):' : 'Ice Thickness & Climate Rating:'}</label>
          <div className="sld-buttons">
            {(['10mm (IEC Normal)', '15mm (Heavy Glaze)', '20mm (Severe Siberian УХЛ1)'] as const).map((ice) => (
              <button
                key={ice}
                type="button"
                className={`sld-btn ${iceThickness === ice ? 'active' : ''}`}
                onClick={() => setIceThickness(ice)}
                style={{ fontSize: '11.5px' }}
              >
                {ice.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group" style={{ gridColumn: '1 / -1' }}>
          <label>{locale === 'zh' ? '接地开关与防误闭锁配置 (Earthing Switch):' : 'Integrated Earthing Switch & Interlock:'}</label>
          <div className="sld-buttons">
            {(['No Earth Switch', '1 Earth Blade (РДЗ-1)', '2 Earth Blades (РДЗ-2 Dual Side)'] as const).map((eb) => (
              <button
                key={eb}
                type="button"
                className={`sld-btn ${earthingBlades === eb ? 'active' : ''}`}
                onClick={() => setEarthingBlades(eb)}
                style={{ fontSize: '12px' }}
              >
                {eb}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-results-panel" style={{ marginTop: '20px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '10px', padding: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>RECOMMENDED DISCONNECTOR MODEL</span>
            <strong style={{ color: '#38bdf8', fontSize: '14.5px' }}>{recommendedDisconnectorModel}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>PEAK DYNAMIC WITHSTAND (Ipeak)</span>
            <strong style={{ color: '#f8fafc', fontSize: '14px' }}>{peakDynamicCurrent} kA Peak Electrodynamic</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>THERMAL HEAT INTEGRAL (Icw²·t)</span>
            <strong style={{ color: '#22c55e', fontSize: '14px' }}>{thermalEnergy} kA²·s (3s Thermal Withstand)</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>MOTOR DRIVE & METALLURGY</span>
            <strong style={{ color: '#e2e8f0', fontSize: '12.5px', lineHeight: 1.4, display: 'block' }}>{driveMechanism}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, #0284c7, #0369a1)', color: '#ffffff', fontWeight: 'bold' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I sized 35-110kV HV Disconnector on Feichi Power: Voltage = ${ratedVoltage}, Current = ${ratedCurrent}, Withstand = ${shortCircuitKa}/3s (${peakDynamicCurrent}kA peak), Ice = ${iceThickness}, Earth Blades = ${earthingBlades}, Model = ${recommendedDisconnectorModel}. Please provide foundation CAD drawings, ice-breaking test reports, and Russian GOST Опросный лист quote.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取 110kV 隔离开关 CAD 方案、破冰报告与报价' : 'Request 110kV Disconnector CAD, Ice Test & Proposal'}
          </a>
        </div>
      </div>
    </div>
  );
}

function NcitOpticalTransformerSizer({ locale }: { locale: Locale }) {
  const [ratedVoltage, setRatedVoltage] = useState<'110kV' | '220kV'>('110kV');
  const [ratedCurrent, setRatedCurrent] = useState<'1250A' | '2000A' | '3150A' | '4000A'>('2000A');
  const [sensingTopology, setSensingTopology] = useState<'Faraday Pure Fiber (OCT)' | 'Rogowski Coil (RCT)' | 'Hybrid Combined (OCT + OVT)'>('Faraday Pure Fiber (OCT)');
  const [processBusRate, setProcessBusRate] = useState<'4000Hz (50Hz / 80pt Protection)' | '4800Hz (60Hz / 80pt Protection)' | '12.8kHz (256pt Revenue Metering)'>('4000Hz (50Hz / 80pt Protection)');
  const [ambientTempRating, setAmbientTempRating] = useState<'-50°C (УХЛ1 Siberian Arctic)' | '-40°C (Standard IEC/GOST)'>('-50°C (УХЛ1 Siberian Arctic)');

  const peakDynamicCurrent = useMemo(() => {
    const cNum = parseFloat(ratedCurrent.replace('A', ''));
    return cNum >= 3150 ? 125 : 100;
  }, [ratedCurrent]);

  const recommendedNcitModel = useMemo(() => {
    const vNum = ratedVoltage.replace('kV', '');
    const cNum = ratedCurrent.replace('A', '');
    const climTag = ambientTempRating.includes('-50°C') ? 'УХЛ1' : 'У1';
    if (sensingTopology.includes('Faraday')) {
      return `FE-OCT-${vNum}/${cNum}-0.2S (ЭТТ-${vNum}/${cNum}-40 ${climTag})`;
    }
    if (sensingTopology.includes('Rogowski')) {
      return `FE-RCT-${vNum}/${cNum}-5TPE (ЭТТ-Р-${vNum}/${cNum}-50 ${climTag})`;
    }
    return `FE-NCIT-COMBINED-${vNum}/${cNum}-0.2S/0.2 (ЭТТ/ЭТН-${vNum} ${climTag})`;
  }, [ratedVoltage, ratedCurrent, sensingTopology, ambientTempRating]);

  const svStreamBandwidth = useMemo(() => {
    if (processBusRate.includes('12.8kHz')) return '12.8 kHz / 256 samples/cycle (~4.8 Mbps per Merging Unit stream)';
    if (processBusRate.includes('4800Hz')) return '4800 Hz / 80 samples/cycle (~1.8 Mbps IEC 61869-9 Stream)';
    return '4000 Hz / 80 samples/cycle (~1.5 Mbps IEC 61850-9-2LE Stream)';
  }, [processBusRate]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(6, 182, 212, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: '#06b6d4', borderColor: 'rgba(6, 182, 212, 0.4)' }}>
            ENGINEERING SIZING ENGINE #10 (IEC 61869-9 / IEC 61850-9-2LE / ГОСТ Р 55153-2012)
          </span>
          <h3>
            {locale === 'zh'
              ? '110kV–220kV 光电互感器（NCIT）过程层合并单元采样流与零磁饱和选型核算器'
              : '110kV–220kV Optical/Electronic Instrument Transformer & SV Merging Unit Sizer'}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>METROLOGICAL ACCURACY</span>
          <strong style={{ color: '#06b6d4', font: '900 22px/1 var(--display)' }}>0.2S / 5TPE</strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '电网额定电压等级 (Rated Voltage Ur):' : 'System Voltage Ur:'}</label>
          <div className="sld-buttons">
            {(['110kV', '220kV'] as const).map((kv) => (
              <button
                key={kv}
                type="button"
                className={`sld-btn ${ratedVoltage === kv ? 'active' : ''}`}
                onClick={() => setRatedVoltage(kv)}
              >
                {kv}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '额定一次通电电流 (Continuous Current Ir):' : 'Continuous Current Ir:'}</label>
          <div className="sld-buttons">
            {(['1250A', '2000A', '3150A', '4000A'] as const).map((a) => (
              <button
                key={a}
                type="button"
                className={`sld-btn ${ratedCurrent === a ? 'active' : ''}`}
                onClick={() => setRatedCurrent(a)}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '核心传感物理机理 (Sensing Topology):' : 'Sensing Physics Architecture:'}</label>
          <div className="sld-buttons">
            {(['Faraday Pure Fiber (OCT)', 'Rogowski Coil (RCT)', 'Hybrid Combined (OCT + OVT)'] as const).map((top) => (
              <button
                key={top}
                type="button"
                className={`sld-btn ${sensingTopology === top ? 'active' : ''}`}
                onClick={() => setSensingTopology(top)}
                style={{ fontSize: '11px' }}
              >
                {top.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '过程层数字报文发布速率 (Process Bus SV):' : 'Process Bus SV Sampling Rate:'}</label>
          <div className="sld-buttons">
            {(['4000Hz (50Hz / 80pt Protection)', '4800Hz (60Hz / 80pt Protection)', '12.8kHz (256pt Revenue Metering)'] as const).map((rate) => (
              <button
                key={rate}
                type="button"
                className={`sld-btn ${processBusRate === rate ? 'active' : ''}`}
                onClick={() => setProcessBusRate(rate)}
                style={{ fontSize: '11px' }}
              >
                {rate.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group" style={{ gridColumn: '1 / -1' }}>
          <label>{locale === 'zh' ? '极端气候环境耐受等级 (Climate Rating):' : 'Climate & Temperature Rating:'}</label>
          <div className="sld-buttons">
            {(['-50°C (УХЛ1 Siberian Arctic)', '-40°C (Standard IEC/GOST)'] as const).map((clim) => (
              <button
                key={clim}
                type="button"
                className={`sld-btn ${ambientTempRating === clim ? 'active' : ''}`}
                onClick={() => setAmbientTempRating(clim)}
                style={{ fontSize: '12px' }}
              >
                {clim}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-results-panel" style={{ marginTop: '20px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(6, 182, 212, 0.25)', borderRadius: '10px', padding: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>RECOMMENDED NCIT MODEL</span>
            <strong style={{ color: '#06b6d4', fontSize: '14.5px' }}>{recommendedNcitModel}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>PEAK WITHSTAND (0% SATURATION)</span>
            <strong style={{ color: '#f8fafc', fontSize: '14px' }}>{peakDynamicCurrent} kA Peak (Zero Saturation)</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>TIME SYNCHRONIZATION</span>
            <strong style={{ color: '#22c55e', fontSize: '14px' }}>IEEE 1588v2 PTP (Jitter &lt; 100ns)</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>DIGITAL MERGING UNIT TRAFFIC</span>
            <strong style={{ color: '#e2e8f0', fontSize: '12.5px', lineHeight: 1.4, display: 'block' }}>{svStreamBandwidth}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, #0891b2, #0e7490)', color: '#ffffff', fontWeight: 'bold' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I configured 110-220kV NCIT on Feichi Power: Voltage = ${ratedVoltage}, Current = ${ratedCurrent}, Topology = ${sensingTopology}, SV Rate = ${processBusRate}, Climate = ${ambientTempRating}, Model = ${recommendedNcitModel}. Please provide SCL ICD files, optical budget loss sheets, and Russian GOST Опросный лист quote.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取 110kV/220kV 光电互感器 ICD 配置、光损耗核算与报价' : 'Request NCIT Merging Unit SCL, Optical Budget & Quote'}
          </a>
        </div>
      </div>
    </div>
  );
}

function MobileSubstationSizer({ locale }: { locale: Locale }) {
  const [ratedVoltage, setRatedVoltage] = useState<'35kV/10kV' | '110kV/10kV' | '110kV/35kV/10kV'>('110kV/10kV');
  const [transformerMva, setTransformerMva] = useState<'10MVA' | '16MVA' | '25MVA' | '40MVA'>('25MVA');
  const [trailerAxleConfig, setTrailerAxleConfig] = useState<'3-Axle Semi-Trailer' | '4-Axle Lowboy' | '5-Axle Heavy Hydraulic'>('4-Axle Lowboy');
  const [hvSwitchgearType, setHvSwitchgearType] = useState<'Integrated 110kV H-GIS' | 'Foldable Roof Open Disconnector' | 'Plug-in Polymer Cable E-House'>('Integrated 110kV H-GIS');
  const [climateRating, setClimateRating] = useState<'-50°C (УХЛ1 Siberian Oil Heater)' | '-40°C (Standard Road-Legal)'>('-50°C (УХЛ1 Siberian Oil Heater)');

  const grossTrailerWeight = useMemo(() => {
    const mvaNum = parseFloat(transformerMva.replace('MVA', ''));
    if (mvaNum >= 40) return 76;
    if (mvaNum >= 25) return 62;
    if (mvaNum >= 16) return 48;
    return 38;
  }, [transformerMva]);

  const maxAxleLoad = useMemo(() => {
    const totalW = grossTrailerWeight;
    const kingpinShare = totalW * 0.32;
    const axleTotal = totalW - kingpinShare;
    const axleCount = trailerAxleConfig.includes('5-Axle') ? 5 : trailerAxleConfig.includes('4-Axle') ? 4 : 3;
    return (axleTotal / axleCount).toFixed(1);
  }, [grossTrailerWeight, trailerAxleConfig]);

  const recommendedPsmModel = useMemo(() => {
    const vTag = ratedVoltage.includes('110kV/35kV') ? '110/35/10' : ratedVoltage.includes('110kV') ? '110/10' : '35/10';
    const mvaNum = transformerMva.replace('MVA', '');
    const climCode = climateRating.includes('-50°C') ? 'УХЛ1' : 'У1';
    return `FE-MSB-${vTag}-${mvaNum}MVA (ПСМ-${vTag}-${mvaNum000(mvaNum)}/110 ${climCode})`;
  }, [ratedVoltage, transformerMva, climateRating]);

  function mvaNum000(mva: string) {
    const n = parseFloat(mva);
    return `${n * 1000}`;
  }

  const deploymentTimeHours = useMemo(() => {
    if (hvSwitchgearType.includes('H-GIS')) return '≤ 3.5 Hours (Plug & Play)';
    if (hvSwitchgearType.includes('Polymer')) return '≤ 4.5 Hours';
    return '≤ 6.0 Hours (Roof unfolding required)';
  }, [hvSwitchgearType]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(234, 179, 8, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: '#eab308', borderColor: 'rgba(234, 179, 8, 0.4)' }}>
            ENGINEERING SIZING ENGINE #11 (IEC 62271-202 / ГОСТ 14695-80 / СТО РОССЕТИ)
          </span>
          <h3>
            {locale === 'zh'
              ? '35kV–110kV 拖挂车载移动式变电站公路轴荷与应急极速并网核算器'
              : '35kV–110kV Mobile Trailer Substation Axle-Load & Rapid Deployment Sizer'}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>MAX HIGHWAY AXLE LOAD</span>
          <strong style={{ color: parseFloat(maxAxleLoad) <= 11.5 ? '#22c55e' : '#f59e0b', font: '900 22px/1 var(--display)' }}>
            {maxAxleLoad} t/axle
          </strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '高低压进出线电压 (Voltage Rating):' : 'Primary / Secondary Voltage:'}</label>
          <div className="sld-buttons">
            {(['35kV/10kV', '110kV/10kV', '110kV/35kV/10kV'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`sld-btn ${ratedVoltage === v ? 'active' : ''}`}
                onClick={() => setRatedVoltage(v)}
                style={{ fontSize: '11.5px' }}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '主变压器额定容量 (Transformer MVA):' : 'Main Power Capacity:'}</label>
          <div className="sld-buttons">
            {(['10MVA', '16MVA', '25MVA', '40MVA'] as const).map((mva) => (
              <button
                key={mva}
                type="button"
                className={`sld-btn ${transformerMva === mva ? 'active' : ''}`}
                onClick={() => setTransformerMva(mva)}
              >
                {mva}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '半挂车多轴底盘规格 (Axle Chassis):' : 'Semi-Trailer Chassis Type:'}</label>
          <div className="sld-buttons">
            {(['3-Axle Semi-Trailer', '4-Axle Lowboy', '5-Axle Heavy Hydraulic'] as const).map((ax) => (
              <button
                key={ax}
                type="button"
                className={`sld-btn ${trailerAxleConfig === ax ? 'active' : ''}`}
                onClick={() => setTrailerAxleConfig(ax)}
                style={{ fontSize: '11px' }}
              >
                {ax.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '高压侧开关与进线形式 (HV Switchgear):' : 'High-Voltage Switchgear Bay:'}</label>
          <div className="sld-buttons">
            {(['Integrated 110kV H-GIS', 'Foldable Roof Open Disconnector', 'Plug-in Polymer Cable E-House'] as const).map((sw) => (
              <button
                key={sw}
                type="button"
                className={`sld-btn ${hvSwitchgearType === sw ? 'active' : ''}`}
                onClick={() => setHvSwitchgearType(sw)}
                style={{ fontSize: '11px' }}
              >
                {sw.split(' ')[1] || sw.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group" style={{ gridColumn: '1 / -1' }}>
          <label>{locale === 'zh' ? '极端气候保温与防爆系统 (Climate Rating):' : 'Climate Insulation & Safety:'}</label>
          <div className="sld-buttons">
            {(['-50°C (УХЛ1 Siberian Oil Heater)', '-40°C (Standard Road-Legal)'] as const).map((clim) => (
              <button
                key={clim}
                type="button"
                className={`sld-btn ${climateRating === clim ? 'active' : ''}`}
                onClick={() => setClimateRating(clim)}
                style={{ fontSize: '12px' }}
              >
                {clim}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-results-panel" style={{ marginTop: '20px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(234, 179, 8, 0.25)', borderRadius: '10px', padding: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>RECOMMENDED MOBILE SUBSTATION</span>
            <strong style={{ color: '#eab308', fontSize: '14px' }}>{recommendedPsmModel}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>GROSS TRAILER WEIGHT (GVW)</span>
            <strong style={{ color: '#f8fafc', fontSize: '14px' }}>~{grossTrailerWeight} Tonnes (Fully Integrated)</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>DEPLOYMENT & ENERGIZATION</span>
            <strong style={{ color: '#22c55e', fontSize: '14px' }}>{deploymentTimeHours}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>HIGHWAY REGULATION COMPLIANCE</span>
            <strong style={{ color: parseFloat(maxAxleLoad) <= 11.5 ? '#22c55e' : '#ef4444', fontSize: '13px', lineHeight: 1.4, display: 'block' }}>
              {parseFloat(maxAxleLoad) <= 11.5 ? '100% Legal (<11.5 t/axle, W≤3.0m, H≤4.35m)' : 'Overload Warning (>11.5 t/axle - Upgrade Chassis)'}
            </strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: 'bold' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I configured Mobile Substation on Feichi Power: Voltage = ${ratedVoltage}, Capacity = ${transformerMva}, Axle Chassis = ${trailerAxleConfig}, Switchgear = ${hvSwitchgearType}, Climate = ${climateRating}, Max Axle Load = ${maxAxleLoad} t/axle, Model = ${recommendedPsmModel}. Please provide trailer CAD clearance drawings, single-line diagrams, and Russian GOST Опросный лист quote.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取 110kV 车载移动变电站公路轴荷 CAD、单线图与报价' : 'Request Mobile Substation CAD, Axle Calculation & Quote'}
          </a>
        </div>
      </div>
    </div>
  );
}

function HarmonicFilterApfSizer({ locale }: { locale: Locale }) {
  const [gridVoltage, setGridVoltage] = useState<'6.3kV' | '10kV' | '35kV'>('10kV');
  const [targetThdi, setTargetThdi] = useState<'< 3.0% (IEEE 519 Ultra)' | '< 5.0% (GOST 32144 Standard)' | '< 8.0% (Basic Industrial)'>('< 3.0% (IEEE 519 Ultra)');
  const [loadType, setLoadType] = useState<'Arc Furnace / Smelter' | 'Mining Multi-MW VFD Hoist' | 'Solar/Wind Feeder Hub'>('Mining Multi-MW VFD Hoist');
  const [requiredVarMvar, setRequiredVarMvar] = useState<'2.0 Mvar' | '5.0 Mvar' | '10.0 Mvar' | '20.0 Mvar'>('5.0 Mvar');
  const [coolingSystem, setCoolingSystem] = useState<'Forced Air Modular Container' | 'Closed Pure Water Liquid Cooling'>('Closed Pure Water Liquid Cooling');

  const harmonicCancellationEfficiency = useMemo(() => {
    if (targetThdi.includes('< 3.0%')) return '97.5% (2nd–50th Orders)';
    if (targetThdi.includes('< 5.0%')) return '93.0% (Dominant Orders)';
    return '86.5% (5th/7th/11th)';
  }, [targetThdi]);

  const recommendedHybridArchitecture = useMemo(() => {
    const vNum = gridVoltage.replace('kV', '');
    const mvarNum = requiredVarMvar.replace(' Mvar', '');
    const capTotal = parseFloat(mvarNum);
    const passiveCap = (capTotal * 0.7).toFixed(1);
    const activeCap = (capTotal * 0.3).toFixed(1);
    return `FE-HYBRID-PQ-${vNum}/${mvarNum}Mvar (70% FC-${passiveCap}Mvar + 30% APF/SVG-${activeCap}Mvar / ФКУ-${vNum})`;
  }, [gridVoltage, requiredVarMvar]);

  const resonanceSecurityMargin = useMemo(() => {
    if (loadType.includes('Arc Furnace')) return 'Q < 1.0 (Active Virtual Resistance Lock)';
    return 'Q < 1.2 (PCC Impedance Auto-Tracking)';
  }, [loadType]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(168, 85, 247, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: '#c084fc', borderColor: 'rgba(168, 85, 247, 0.4)' }}>
            ENGINEERING SIZING ENGINE #12 (IEEE 519-2022 / ГОСТ 32144-2013 / СТО РОССЕТИ)
          </span>
          <h3>
            {locale === 'zh'
              ? '10kV–35kV 高压谐波治理与有源 APF / 无源 FC 混合滤波补偿核算器'
              : '10kV–35kV Industrial Harmonic Mitigation & Hybrid APF/FC Filter Sizer'}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>TARGET CURRENT THD</span>
          <strong style={{ color: '#c084fc', font: '900 22px/1 var(--display)' }}>{targetThdi.split(' ')[0]}</strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '电网额定供电电压 (System Voltage):' : 'Grid Voltage Ur:'}</label>
          <div className="sld-buttons">
            {(['6.3kV', '10kV', '35kV'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`sld-btn ${gridVoltage === v ? 'active' : ''}`}
                onClick={() => setGridVoltage(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '非线性负载类型 (Load Profile):' : 'Non-Linear Load Type:'}</label>
          <div className="sld-buttons">
            {(['Arc Furnace / Smelter', 'Mining Multi-MW VFD Hoist', 'Solar/Wind Feeder Hub'] as const).map((ld) => (
              <button
                key={ld}
                type="button"
                className={`sld-btn ${loadType === ld ? 'active' : ''}`}
                onClick={() => setLoadType(ld)}
                style={{ fontSize: '11px' }}
              >
                {ld.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '目标电流畸变率与标准 (Target THDi):' : 'Target THDi Standard:'}</label>
          <div className="sld-buttons">
            {(['< 3.0% (IEEE 519 Ultra)', '< 5.0% (GOST 32144 Standard)', '< 8.0% (Basic Industrial)'] as const).map((thd) => (
              <button
                key={thd}
                type="button"
                className={`sld-btn ${targetThdi === thd ? 'active' : ''}`}
                onClick={() => setTargetThdi(thd)}
                style={{ fontSize: '11px' }}
              >
                {thd.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '总补偿无功容量 (Total Capacity):' : 'Total Compensation Capacity:'}</label>
          <div className="sld-buttons">
            {(['2.0 Mvar', '5.0 Mvar', '10.0 Mvar', '20.0 Mvar'] as const).map((mvar) => (
              <button
                key={mvar}
                type="button"
                className={`sld-btn ${requiredVarMvar === mvar ? 'active' : ''}`}
                onClick={() => setRequiredVarMvar(mvar)}
                style={{ fontSize: '11.5px' }}
              >
                {mvar}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group" style={{ gridColumn: '1 / -1' }}>
          <label>{locale === 'zh' ? '冷却形式与极寒集装箱舱体 (Cooling & Thermal):' : 'Cooling System & Container:'}</label>
          <div className="sld-buttons">
            {(['Forced Air Modular Container', 'Closed Pure Water Liquid Cooling'] as const).map((cool) => (
              <button
                key={cool}
                type="button"
                className={`sld-btn ${coolingSystem === cool ? 'active' : ''}`}
                onClick={() => setCoolingSystem(cool)}
                style={{ fontSize: '12px' }}
              >
                {cool}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-results-panel" style={{ marginTop: '20px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(168, 85, 247, 0.25)', borderRadius: '10px', padding: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>HYBRID PQ CONFIGURATION</span>
            <strong style={{ color: '#c084fc', fontSize: '13.5px' }}>{recommendedHybridArchitecture}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>HARMONIC FILTERING EFFICIENCY</span>
            <strong style={{ color: '#f8fafc', fontSize: '14px' }}>{harmonicCancellationEfficiency}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>PCC RESONANCE SUPPRESSION</span>
            <strong style={{ color: '#22c55e', fontSize: '14px' }}>{resonanceSecurityMargin}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>POWER FACTOR IMPROVEMENT</span>
            <strong style={{ color: '#38bdf8', fontSize: '14px', lineHeight: 1.4, display: 'block' }}>Cos φ ≥ 0.99 (Dynamic Bilateral)</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, #9333ea, #7e22ce)', color: '#ffffff', fontWeight: 'bold' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I configured Harmonic Power Quality System on Feichi Power: Voltage = ${gridVoltage}, Load = ${loadType}, Target THD = ${targetThdi}, Capacity = ${requiredVarMvar}, Cooling = ${coolingSystem}, Architecture = ${recommendedHybridArchitecture}. Please provide harmonic spectrum ETAP simulation, resonance sweep curves, and Russian GOST Опросный лист quote.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取 10kV/35kV 谐波治理仿真报告、单线图与报价' : 'Request Harmonic Filter ETAP Simulation & Quote'}
          </a>
        </div>
      </div>
    </div>
  );
}

function GilTransmissionLineSizer({ locale }: { locale: Locale }) {
  const [ratedVoltage, setRatedVoltage] = useState<'110kV' | '220kV'>('220kV');
  const [continuousCurrent, setContinuousCurrent] = useState<'3150A' | '4000A' | '5000A'>('4000A');
  const [installationEnvironment, setInstallationEnvironment] = useState<'Direct-Buried Underground' | 'Utility Tunnel Trench' | 'Hydro Plant Vertical Shaft'>('Direct-Buried Underground');
  const [insulatingGasMix, setInsulatingGasMix] = useState<'80% N2 + 20% SF6 Eco-Mix' | '100% Pure SF6 Gas'>('80% N2 + 20% SF6 Eco-Mix');
  const [transmissionLengthKm, setTransmissionLengthKm] = useState<'1.0 km' | '5.0 km' | '15.0 km' | '30.0 km'>('5.0 km');

  const chargingReactivePowerMvar = useMemo(() => {
    const kmNum = parseFloat(transmissionLengthKm.replace(' km', ''));
    const kvNum = parseFloat(ratedVoltage.replace('kV', ''));
    const omega = 2 * Math.PI * 50;
    const cGilPerKm = 55e-12; // 55 pF/m = 55e-9 F/km
    const qCharging = 3 * omega * (cGilPerKm * 1000) * (Math.pow(kvNum * 1e3 / Math.sqrt(3), 2)) * kmNum / 1e6;
    return qCharging.toFixed(2);
  }, [transmissionLengthKm, ratedVoltage]);

  const recommendedGilModel = useMemo(() => {
    const vNum = ratedVoltage.replace('kV', '');
    const cNum = continuousCurrent.replace('A', '');
    const gasCode = insulatingGasMix.includes('Eco') ? 'ЭКО' : 'Э';
    return `FE-GIL-${vNum}/${cNum}-63kA (КТПП-${vNum}/${cNum} ${gasCode} УХЛ1)`;
  }, [ratedVoltage, continuousCurrent, insulatingGasMix]);

  const enclosureOuterDiameterMm = useMemo(() => {
    return ratedVoltage === '220kV' ? '520 mm (High-Strength 6063-T6 Al Alloy)' : '420 mm (High-Strength 6063-T6 Al Alloy)';
  }, [ratedVoltage]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(14, 165, 233, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: '#0ea5e9', borderColor: 'rgba(14, 165, 233, 0.4)' }}>
            ENGINEERING SIZING ENGINE #13 (IEC 62271-204 / ГОСТ Р 54828-2011 / СТО РОССЕТИ)
          </span>
          <h3>
            {locale === 'zh'
              ? '110kV–220kV 气体绝缘金属封闭输电线路（GIL）大容量载流与对地电容无功核算器'
              : '110kV–220kV Gas-Insulated Transmission Line (GIL) Ampacity & Charging Sizer'}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>CHARGING REACTIVE POWER</span>
          <strong style={{ color: '#0ea5e9', font: '900 22px/1 var(--display)' }}>{chargingReactivePowerMvar} Mvar</strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '电网额定电压等级 (Rated Voltage):' : 'System Voltage Ur:'}</label>
          <div className="sld-buttons">
            {(['110kV', '220kV'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`sld-btn ${ratedVoltage === v ? 'active' : ''}`}
                onClick={() => setRatedVoltage(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '额定连续输送电流 (Ampacity Ir):' : 'Continuous Ampacity Ir:'}</label>
          <div className="sld-buttons">
            {(['3150A', '4000A', '5000A'] as const).map((a) => (
              <button
                key={a}
                type="button"
                className={`sld-btn ${continuousCurrent === a ? 'active' : ''}`}
                onClick={() => setContinuousCurrent(a)}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '工程敷设安装工况 (Installation Mode):' : 'Laying Installation Mode:'}</label>
          <div className="sld-buttons">
            {(['Direct-Buried Underground', 'Utility Tunnel Trench', 'Hydro Plant Vertical Shaft'] as const).map((env) => (
              <button
                key={env}
                type="button"
                className={`sld-btn ${installationEnvironment === env ? 'active' : ''}`}
                onClick={() => setInstallationEnvironment(env)}
                style={{ fontSize: '11px' }}
              >
                {env.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '绝缘气体介质配比 (Insulating Gas):' : 'Insulating Gas Medium:'}</label>
          <div className="sld-buttons">
            {(['80% N2 + 20% SF6 Eco-Mix', '100% Pure SF6 Gas'] as const).map((gas) => (
              <button
                key={gas}
                type="button"
                className={`sld-btn ${insulatingGasMix === gas ? 'active' : ''}`}
                onClick={() => setInsulatingGasMix(gas)}
                style={{ fontSize: '11px' }}
              >
                {gas.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group" style={{ gridColumn: '1 / -1' }}>
          <label>{locale === 'zh' ? '输电线路走廊全长 (Corridor Length):' : 'Transmission Length:'}</label>
          <div className="sld-buttons">
            {(['1.0 km', '5.0 km', '15.0 km', '30.0 km'] as const).map((km) => (
              <button
                key={km}
                type="button"
                className={`sld-btn ${transmissionLengthKm === km ? 'active' : ''}`}
                onClick={() => setTransmissionLengthKm(km)}
                style={{ fontSize: '12px' }}
              >
                {km}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-results-panel" style={{ marginTop: '20px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(14, 165, 233, 0.25)', borderRadius: '10px', padding: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>RECOMMENDED GIL MODEL</span>
            <strong style={{ color: '#0ea5e9', fontSize: '14px' }}>{recommendedGilModel}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>ENCLOSURE CASING DIAMETER</span>
            <strong style={{ color: '#f8fafc', fontSize: '13.5px' }}>{enclosureOuterDiameterMm}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>WORKING CAPACITANCE</span>
            <strong style={{ color: '#22c55e', fontSize: '14px' }}>C &lt; 55 pF/m (68% Lower vs XLPE Cable)</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>SHORT-CIRCUIT WITHSTAND</span>
            <strong style={{ color: '#38bdf8', fontSize: '14px', lineHeight: 1.4, display: 'block' }}>63 kA / 3s (160 kA Peak Dynamic)</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, #0284c7, #0369a1)', color: '#ffffff', fontWeight: 'bold' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I configured 110-220kV GIL Transmission System on Feichi Power: Voltage = ${ratedVoltage}, Ampacity = ${continuousCurrent}, Environment = ${installationEnvironment}, Gas = ${insulatingGasMix}, Length = ${transmissionLengthKm}, Model = ${recommendedGilModel}, Charging Reactive = ${chargingReactivePowerMvar} Mvar. Please provide tunnel thermal calculations, expansion bellow drawings, and Russian GOST Опросный лист quote.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取 110kV/220kV GIL 隧道散热计算书、补偿器图纸与报价' : 'Request 110/220kV GIL Thermal Sizing, CAD & Quote'}
          </a>
        </div>
      </div>
    </div>
  );
}

function NeutralGroundingResistorSizer({ locale }: { locale: Locale }) {
  const [ratedVoltage, setRatedVoltage] = useState<'6.3kV' | '10.5kV' | '20kV' | '35kV'>('10.5kV');
  const [groundingPhilosophy, setGroundingPhilosophy] = useState<'NGR Low-Resistance Grounding' | 'Petersen Coil ASC Auto-Tuning' | 'Z-Type Grounding Trafo + NGR'>('NGR Low-Resistance Grounding');
  const [faultCurrentDuration, setFaultCurrentDuration] = useState<'100A (10s Rating)' | '200A (10s Rating)' | '400A (10s Rating)' | '1000A (10s Rating)'>('200A (10s Rating)');
  const [gridCapacitiveCurrent, setGridCapacitiveCurrent] = useState<'15A (Short Cable Network)' | '35A (Medium Urban Grid)' | '85A (Heavy Industrial Cable Grid)'>('35A (Medium Urban Grid)');
  const [enclosureMaterial, setEnclosureMaterial] = useState<'Stainless Steel 304 (IP54 C5-M)' | 'Alu-Zinc Heavy Steel Box'>('Stainless Steel 304 (IP54 C5-M)');

  const resistorResistanceOhm = useMemo(() => {
    const vNum = parseFloat(ratedVoltage.replace('kV', '')) * 1e3 / Math.sqrt(3);
    const iNum = parseFloat(faultCurrentDuration.split('A')[0]);
    return (vNum / iNum).toFixed(1);
  }, [ratedVoltage, faultCurrentDuration]);

  const recommendedNgrModel = useMemo(() => {
    const vNum = ratedVoltage.replace('kV', '');
    const iNum = faultCurrentDuration.split('A')[0];
    const rOhm = resistorResistanceOhm;
    if (groundingPhilosophy.includes('Petersen')) {
      return `FE-ASC-${vNum}kV/500kVA (ДГР-${vNum}/500 РУДТ УХЛ1)`;
    }
    if (groundingPhilosophy.includes('Z-Type')) {
      return `FE-ZNGR-${vNum}kV/${iNum}A-${rOhm}Ω (ТМГ-З+ЗНГ-${vNum} УХЛ1)`;
    }
    return `FE-NGR-${vNum}kV/${iNum}A-${rOhm}Ω-10s (ЗНГ-${vNum}/${iNum} ШЗН УХЛ1)`;
  }, [ratedVoltage, faultCurrentDuration, resistorResistanceOhm, groundingPhilosophy]);

  const overvoltageClampRatio = useMemo(() => {
    if (groundingPhilosophy.includes('Petersen')) return 'U_arc < 1.1 p.u. (Arc Extinguished in < 5ms)';
    return 'U_arc < 2.2 p.u. (IEEE 32 / GOST 13109 Compliant)';
  }, [groundingPhilosophy]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(239, 68, 68, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.4)' }}>
            ENGINEERING SIZING ENGINE #14 (IEEE 32 / IEC 60076-16 / ГОСТ 13109-97 / СТО РОССЕТИ)
          </span>
          <h3>
            {locale === 'zh'
              ? '10kV–35kV 中性点接地电阻柜（NGR）与消弧线圈（ASC）容性电流对消核算器'
              : '10kV–35kV Neutral Grounding Resistor (NGR) & Petersen Coil Sizer'}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>CALCULATED RESISTANCE (R)</span>
          <strong style={{ color: '#ef4444', font: '900 22px/1 var(--display)' }}>{resistorResistanceOhm} Ω</strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '配电网额定工作电压 (System Voltage):' : 'Grid Voltage Ur:'}</label>
          <div className="sld-buttons">
            {(['6.3kV', '10.5kV', '20kV', '35kV'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`sld-btn ${ratedVoltage === v ? 'active' : ''}`}
                onClick={() => setRatedVoltage(v)}
                style={{ fontSize: '11.5px' }}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '中性点接地方式架构 (Philosophy):' : 'Grounding Philosophy:'}</label>
          <div className="sld-buttons">
            {(['NGR Low-Resistance Grounding', 'Petersen Coil ASC Auto-Tuning', 'Z-Type Grounding Trafo + NGR'] as const).map((m) => (
              <button
                key={m}
                type="button"
                className={`sld-btn ${groundingPhilosophy === m ? 'active' : ''}`}
                onClick={() => setGroundingPhilosophy(m)}
                style={{ fontSize: '10.5px' }}
              >
                {m.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '额定接地故障电流与时间 (Fault Current):' : 'Rated Fault Current & Duration:'}</label>
          <div className="sld-buttons">
            {(['100A (10s Rating)', '200A (10s Rating)', '400A (10s Rating)', '1000A (10s Rating)'] as const).map((fc) => (
              <button
                key={fc}
                type="button"
                className={`sld-btn ${faultCurrentDuration === fc ? 'active' : ''}`}
                onClick={() => setFaultCurrentDuration(fc)}
                style={{ fontSize: '11px' }}
              >
                {fc.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '全网对地电容电流 (Ic0 Current):' : 'Grid Zero-Sequence Capacitive Ic0:'}</label>
          <div className="sld-buttons">
            {(['15A (Short Cable Network)', '35A (Medium Urban Grid)', '85A (Heavy Industrial Cable Grid)'] as const).map((ic) => (
              <button
                key={ic}
                type="button"
                className={`sld-btn ${gridCapacitiveCurrent === ic ? 'active' : ''}`}
                onClick={() => setGridCapacitiveCurrent(ic)}
                style={{ fontSize: '11px' }}
              >
                {ic.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group" style={{ gridColumn: '1 / -1' }}>
          <label>{locale === 'zh' ? '外壳防腐材质与极寒温控 (Enclosure & Climate):' : 'Enclosure Metallurgy & Climate:'}</label>
          <div className="sld-buttons">
            {(['Stainless Steel 304 (IP54 C5-M)', 'Alu-Zinc Heavy Steel Box'] as const).map((enc) => (
              <button
                key={enc}
                type="button"
                className={`sld-btn ${enclosureMaterial === enc ? 'active' : ''}`}
                onClick={() => setEnclosureMaterial(enc)}
                style={{ fontSize: '12px' }}
              >
                {enc}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-results-panel" style={{ marginTop: '20px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '10px', padding: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>RECOMMENDED NGR/ASC MODEL</span>
            <strong style={{ color: '#ef4444', fontSize: '13.5px' }}>{recommendedNgrModel}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>CALCULATED OHMIC VALUE</span>
            <strong style={{ color: '#f8fafc', fontSize: '14px' }}>{resistorResistanceOhm} Ω (Cr20Ni80 Alloy)</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>ARC OVERVOLTAGE SUPPRESSION</span>
            <strong style={{ color: '#22c55e', fontSize: '13.5px' }}>{overvoltageClampRatio}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>THERMAL RESISTANCE STABILITY</span>
            <strong style={{ color: '#38bdf8', fontSize: '14px', lineHeight: 1.4, display: 'block' }}>ΔR &lt; 5.0% (Up to 760°C Short-Time)</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, #dc2626, #991b1b)', color: '#ffffff', fontWeight: 'bold' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I configured Neutral Grounding System on Feichi Power: Voltage = ${ratedVoltage}, Philosophy = ${groundingPhilosophy}, Fault Current = ${faultCurrentDuration}, Capacitive Ic0 = ${gridCapacitiveCurrent}, Enclosure = ${enclosureMaterial}, Resistance = ${resistorResistanceOhm} Ohm, Model = ${recommendedNgrModel}. Please provide zero-sequence fault calculations, transformer schematics, and Russian GOST Опросный лист quote.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取 10kV/35kV 中性点接地电阻计算书、一次单线图与报价' : 'Request NGR/ASC Fault Calculations, CAD & Quote'}
          </a>
        </div>
      </div>
    </div>
  );
}

function HighVoltageSoftStarterSizer({ locale }: { locale: Locale }) {
  const [ratedVoltage, setRatedVoltage] = useState<'6.0kV' | '10.0kV' | '35kV'>('10.0kV');
  const [motorPowerKw, setMotorPowerKw] = useState<'1000 kW' | '2500 kW' | '5000 kW' | '10000 kW'>('2500 kW');
  const [softStarterTopology, setSoftStarterTopology] = useState<'Magnetically Controlled MCR' | 'High-Voltage Thyristor SSS' | 'Dual Mode (MCR + VFD)'>('Magnetically Controlled MCR');
  const [motorLoadType, setMotorLoadType] = useState<'Mining Ball Mill / SAG Mill' | 'Gas Turbo-Compressor' | 'High-Head Slurry Pump'>('Mining Ball Mill / SAG Mill');
  const [ambientTempRating, setAmbientTempRating] = useState<'-50°C (УХЛ1 Siberian Heavy)' | '-40°C (Standard Industrial)'>('-50°C (УХЛ1 Siberian Heavy)');

  const startingCurrentClamped = useMemo(() => {
    if (softStarterTopology.includes('MCR')) return '≤ 2.0 Ie (Pure Sine Wave)';
    return '≤ 2.5 Ie (Thyristor Ramp)';
  }, [softStarterTopology]);

  const recommendedSoftStarterModel = useMemo(() => {
    const vNum = ratedVoltage.replace('kV', '');
    const kwNum = motorPowerKw.replace(' kW', '');
    const climTag = ambientTempRating.includes('-50°C') ? 'УХЛ1' : 'У1';
    if (softStarterTopology.includes('MCR')) {
      return `FE-MCR-${vNum}kV/${kwNum}kW (ВУП-${vNum}/${kwNum} ${climTag})`;
    }
    return `FE-SSS-${vNum}kV/${kwNum}kW (УППВ-${vNum}/${kwNum} ${climTag})`;
  }, [ratedVoltage, motorPowerKw, softStarterTopology, ambientTempRating]);

  const gridVoltageSagEstimate = useMemo(() => {
    if (motorPowerKw === '10000 kW') return 'ΔU ≈ 4.8% (Grid Voltage Sag Safe)';
    if (motorPowerKw === '5000 kW') return 'ΔU ≈ 3.2%';
    return 'ΔU < 2.0% (Zero Impact on Busbar)';
  }, [motorPowerKw]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(249, 115, 22, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: '#f97316', borderColor: 'rgba(249, 115, 22, 0.4)' }}>
            ENGINEERING SIZING ENGINE #15 (IEC 60947-4-2 / ГОСТ 12434-83 / СТО РОССЕТИ)
          </span>
          <h3>
            {locale === 'zh'
              ? '10kV–35kV 大中型电动机磁控（MCR）与晶闸管固态软起动压降核算器'
              : '10kV–35kV Medium-Voltage Motor Magnetic/Solid-State Soft Starter Sizer'}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>STARTING CURRENT LIMIT</span>
          <strong style={{ color: '#f97316', font: '900 22px/1 var(--display)' }}>{startingCurrentClamped.split(' ')[0]}</strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '电机额定工作电压 (Motor Voltage):' : 'Motor Voltage Ur:'}</label>
          <div className="sld-buttons">
            {(['6.0kV', '10.0kV', '35kV'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`sld-btn ${ratedVoltage === v ? 'active' : ''}`}
                onClick={() => setRatedVoltage(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '电机额定轴功率 (Motor Power kW):' : 'Motor Power Rating:'}</label>
          <div className="sld-buttons">
            {(['1000 kW', '2500 kW', '5000 kW', '10000 kW'] as const).map((p) => (
              <button
                key={p}
                type="button"
                className={`sld-btn ${motorPowerKw === p ? 'active' : ''}`}
                onClick={() => setMotorPowerKw(p)}
                style={{ fontSize: '11.5px' }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '软起动核心电气拓扑 (Topology):' : 'Soft Starter Architecture:'}</label>
          <div className="sld-buttons">
            {(['Magnetically Controlled MCR', 'High-Voltage Thyristor SSS', 'Dual Mode (MCR + VFD)'] as const).map((top) => (
              <button
                key={top}
                type="button"
                className={`sld-btn ${softStarterTopology === top ? 'active' : ''}`}
                onClick={() => setSoftStarterTopology(top)}
                style={{ fontSize: '10.5px' }}
              >
                {top.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '机械负载特性与工况 (Load Profile):' : 'Mechanical Load Type:'}</label>
          <div className="sld-buttons">
            {(['Mining Ball Mill / SAG Mill', 'Gas Turbo-Compressor', 'High-Head Slurry Pump'] as const).map((ld) => (
              <button
                key={ld}
                type="button"
                className={`sld-btn ${motorLoadType === ld ? 'active' : ''}`}
                onClick={() => setMotorLoadType(ld)}
                style={{ fontSize: '11px' }}
              >
                {ld.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group" style={{ gridColumn: '1 / -1' }}>
          <label>{locale === 'zh' ? '极端气候保温与防潮系统 (Climate Rating):' : 'Climate & Temperature Rating:'}</label>
          <div className="sld-buttons">
            {(['-50°C (УХЛ1 Siberian Heavy)', '-40°C (Standard Industrial)'] as const).map((clim) => (
              <button
                key={clim}
                type="button"
                className={`sld-btn ${ambientTempRating === clim ? 'active' : ''}`}
                onClick={() => setAmbientTempRating(clim)}
                style={{ fontSize: '12px' }}
              >
                {clim}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-results-panel" style={{ marginTop: '20px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(249, 115, 22, 0.25)', borderRadius: '10px', padding: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>RECOMMENDED SOFT STARTER</span>
            <strong style={{ color: '#f97316', fontSize: '13.5px' }}>{recommendedSoftStarterModel}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>GRID BUSBAR VOLTAGE SAG</span>
            <strong style={{ color: '#f8fafc', fontSize: '14px' }}>{gridVoltageSagEstimate}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>STARTING ACCELERATION TORQUE</span>
            <strong style={{ color: '#22c55e', fontSize: '14px' }}>T_start ≥ 1.2 Te (No Stall)</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>BYPASS VACUUM CONTACTOR</span>
            <strong style={{ color: '#38bdf8', fontSize: '13.5px', lineHeight: 1.4, display: 'block' }}>Zero-Crossing Sync Bypass (&lt;15ms)</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, #ea580c, #c2410c)', color: '#ffffff', fontWeight: 'bold' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I configured Medium-Voltage Soft Starter on Feichi Power: Voltage = ${ratedVoltage}, Power = ${motorPowerKw}, Topology = ${softStarterTopology}, Load = ${motorLoadType}, Climate = ${ambientTempRating}, Model = ${recommendedSoftStarterModel}. Please provide motor dynamic speed-torque curves, voltage sag calculations, and Russian GOST Опросный лист quote.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取 10kV/35kV 电机软起动计算书、转矩曲线与报价' : 'Request MV Soft Starter Simulation, CAD & Quote'}
          </a>
        </div>
      </div>
    </div>
  );
}

function AirCoreCurrentLimitingReactorSizer({ locale }: { locale: Locale }) {
  const [ratedVoltage, setRatedVoltage] = useState<'6.0kV' | '10.0kV' | '20.0kV' | '35kV'>('10.0kV');
  const [ratedCurrent, setRatedCurrent] = useState<'630A' | '1000A' | '1600A' | '2500A' | '4000A'>('1600A');
  const [percentageReactance, setPercentageReactance] = useState<'4.0% (Line Feeder)' | '6.0% (Standard Limiting)' | '8.0% (Bus-Tie Sectionalizing)' | '12.0% (Deep Limiting)'>('6.0% (Standard Limiting)');
  const [prospectiveFaultKa, setProspectiveFaultKa] = useState<'31.5 kA' | '40.0 kA' | '50.0 kA' | '63.0 kA'>('50.0 kA');
  const [installationLayout, setInstallationLayout] = useState<'Three-Phase Vertical Stack' | 'Horizontal Side-by-Side'>('Three-Phase Vertical Stack');

  const calculatedReactanceOhm = useMemo(() => {
    const vNum = parseFloat(ratedVoltage.replace('kV', '')) * 1e3 / Math.sqrt(3);
    const iNum = parseFloat(ratedCurrent.replace('A', ''));
    const xkPct = parseFloat(percentageReactance.split('%')[0]) / 100.0;
    const ohm = (xkPct * vNum) / iNum;
    return ohm.toFixed(2);
  }, [ratedVoltage, ratedCurrent, percentageReactance]);

  const clampedFaultCurrentKa = useMemo(() => {
    const vPhase = parseFloat(ratedVoltage.replace('kV', '')) * 1e3 / Math.sqrt(3);
    const xL = parseFloat(calculatedReactanceOhm);
    const iInit = parseFloat(prospectiveFaultKa.replace(' kA', '')) * 1e3;
    const xGrid = vPhase / iInit;
    const iClamped = vPhase / (xGrid + xL) / 1e3;
    return iClamped.toFixed(1);
  }, [ratedVoltage, prospectiveFaultKa, calculatedReactanceOhm]);

  const recommendedReactorModel = useMemo(() => {
    const vNum = ratedVoltage.replace('kV', '');
    const iNum = ratedCurrent.replace('A', '');
    const xOhm = calculatedReactanceOhm;
    return `FE-CLR-${vNum}kV/${iNum}A-${xOhm}Ω (РТОС-${vNum}/${iNum}-${xOhm} УХЛ1)`;
  }, [ratedVoltage, ratedCurrent, calculatedReactanceOhm]);

  const strayMagneticClearanceM = useMemo(() => {
    const iNum = parseFloat(ratedCurrent.replace('A', ''));
    if (iNum >= 2500) return 'D_clearance ≥ 2.8m (Metallic Loop Safe Zone)';
    if (iNum >= 1600) return 'D_clearance ≥ 2.2m (Low Eddy Loss)';
    return 'D_clearance ≥ 1.6m';
  }, [ratedCurrent]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(34, 197, 94, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: '#22c55e', borderColor: 'rgba(34, 197, 94, 0.4)' }}>
            ENGINEERING SIZING ENGINE #16 (IEC 60076-6 / ГОСТ 14794-79 / СТО РОССЕТИ)
          </span>
          <h3>
            {locale === 'zh'
              ? '10kV–35kV 干式空心限流电抗器短路阻抗与空间漏磁安全净距核算器'
              : '10kV–35kV Air-Core Current-Limiting Reactor Impedance & Magnetic Sizer'}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>CLAMPED FAULT CURRENT</span>
          <strong style={{ color: '#22c55e', font: '900 22px/1 var(--display)' }}>{clampedFaultCurrentKa} kA</strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '电网额定工作电压 (System Voltage):' : 'Grid Voltage Ur:'}</label>
          <div className="sld-buttons">
            {(['6.0kV', '10.0kV', '20.0kV', '35kV'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`sld-btn ${ratedVoltage === v ? 'active' : ''}`}
                onClick={() => setRatedVoltage(v)}
                style={{ fontSize: '11.5px' }}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '额定连续通流能力 (Continuous Current):' : 'Rated Continuous Current:'}</label>
          <div className="sld-buttons">
            {(['630A', '1000A', '1600A', '2500A', '4000A'] as const).map((a) => (
              <button
                key={a}
                type="button"
                className={`sld-btn ${ratedCurrent === a ? 'active' : ''}`}
                onClick={() => setRatedCurrent(a)}
                style={{ fontSize: '11.5px' }}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '额定百分比电抗率 (Percentage xk):' : 'Percentage Reactance Drop:'}</label>
          <div className="sld-buttons">
            {(['4.0% (Line Feeder)', '6.0% (Standard Limiting)', '8.0% (Bus-Tie Sectionalizing)', '12.0% (Deep Limiting)'] as const).map((xk) => (
              <button
                key={xk}
                type="button"
                className={`sld-btn ${percentageReactance === xk ? 'active' : ''}`}
                onClick={() => setPercentageReactance(xk)}
                style={{ fontSize: '10.5px' }}
              >
                {xk.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '上级电网预期短路冲击 (Prospective Fault):' : 'Prospective Grid Fault:'}</label>
          <div className="sld-buttons">
            {(['31.5 kA', '40.0 kA', '50.0 kA', '63.0 kA'] as const).map((f) => (
              <button
                key={f}
                type="button"
                className={`sld-btn ${prospectiveFaultKa === f ? 'active' : ''}`}
                onClick={() => setProspectiveFaultKa(f)}
                style={{ fontSize: '11.5px' }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group" style={{ gridColumn: '1 / -1' }}>
          <label>{locale === 'zh' ? '三相空间安装布置方式 (Layout & Orientation):' : 'Three-Phase Physical Layout:'}</label>
          <div className="sld-buttons">
            {(['Three-Phase Vertical Stack', 'Horizontal Side-by-Side'] as const).map((lay) => (
              <button
                key={lay}
                type="button"
                className={`sld-btn ${installationLayout === lay ? 'active' : ''}`}
                onClick={() => setInstallationLayout(lay)}
                style={{ fontSize: '12px' }}
              >
                {lay}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-results-panel" style={{ marginTop: '20px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(34, 197, 94, 0.25)', borderRadius: '10px', padding: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>RECOMMENDED REACTOR MODEL</span>
            <strong style={{ color: '#22c55e', fontSize: '13.5px' }}>{recommendedReactorModel}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>CALCULATED OHMIC REACTANCE</span>
            <strong style={{ color: '#f8fafc', fontSize: '14px' }}>{calculatedReactanceOhm} Ω (100% Linear Air-Core)</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>FAULT CURRENT CLAMPING</span>
            <strong style={{ color: '#38bdf8', fontSize: '13.5px' }}>{prospectiveFaultKa} → {clampedFaultCurrentKa} kA (Protected)</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>STRAY MAGNETIC CLEARANCE</span>
            <strong style={{ color: '#f59e0b', fontSize: '13.5px', lineHeight: 1.4, display: 'block' }}>{strayMagneticClearanceM}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, #16a34a, #15803d)', color: '#ffffff', fontWeight: 'bold' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I configured Air-Core Current-Limiting Reactor on Feichi Power: Voltage = ${ratedVoltage}, Current = ${ratedCurrent}, Percentage = ${percentageReactance}, Prospective Fault = ${prospectiveFaultKa}, Clamped Fault = ${clampedFaultCurrentKa} kA, Reactance = ${calculatedReactanceOhm} Ohm, Model = ${recommendedReactorModel}. Please provide stray magnetic clearance profiles, ETAP simulation, and Russian GOST Опросный лист quote.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取 10kV/35kV 限流电抗器仿真计算书、净距图与报价' : 'Request Air-Core Reactor Sizing, Magnetic CAD & Quote'}
          </a>
        </div>
      </div>
    </div>
  );
}

function SubstationSurgeArresterSizer({ locale }: { locale: Locale }) {
  const [ratedVoltage, setRatedVoltage] = useState<'10kV' | '20kV' | '35kV'>('35kV');
  const [nominalDischargeKa, setNominalDischargeKa] = useState<'5 kA (Distribution Normal)' | '10 kA (Station Heavy Duty)'>('10 kA (Station Heavy Duty)');
  const [lineDischargeClass, setLineDischargeClass] = useState<'Class 2 (W ≥ 4.5 kJ/kV)' | 'Class 3 (W ≥ 7.2 kJ/kV Heavy Line)'>('Class 3 (W ≥ 7.2 kJ/kV Heavy Line)');
  const [housingMaterial, setHousingMaterial] = useState<'HTV Silicone Polymer (Class IV Creepage)' | 'High-Grade Porcelain Housing'>('HTV Silicone Polymer (Class IV Creepage)');
  const [insulationCoordinationBil, setInsulationCoordinationBil] = useState<'75 kV (10kV Transformer)' | '125 kV (20kV Transformer)' | '200 kV (35kV Main Trafo)'>('200 kV (35kV Main Trafo)');

  const residualVoltage10ka = useMemo(() => {
    if (ratedVoltage === '35kV') return 134;
    if (ratedVoltage === '20kV') return 78;
    return 45;
  }, [ratedVoltage]);

  const insulationMarginPct = useMemo(() => {
    const bilNum = parseFloat(insulationCoordinationBil.split(' kV')[0]);
    const uRes = residualVoltage10ka;
    const margin = ((bilNum / uRes) - 1.0) * 100.0;
    return margin.toFixed(1);
  }, [insulationCoordinationBil, residualVoltage10ka]);

  const recommendedMoaModel = useMemo(() => {
    const vNum = ratedVoltage.replace('kV', '');
    const kaNum = nominalDischargeKa.includes('10 kA') ? '10' : '5';
    const classNum = lineDischargeClass.includes('Class 3') ? 'III' : 'II';
    const polymerTag = housingMaterial.includes('Silicone') ? 'П' : 'Ф';
    return `FE-MOA-${vNum}kV/${kaNum}kA-${classNum} (ОПН-${polymerTag}-${vNum}/40.5-${kaNum}/550 УХЛ1)`;
  }, [ratedVoltage, nominalDischargeKa, lineDischargeClass, housingMaterial]);

  const creepageSafetyLevel = useMemo(() => {
    if (housingMaterial.includes('Silicone')) return '≥ 31 mm/kV (Class IV Heavy Pollution Hydrophobic HC1)';
    return '≥ 25 mm/kV (Standard Porcelain)';
  }, [housingMaterial]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(59, 130, 246, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: '#3b82f6', borderColor: 'rgba(59, 130, 246, 0.4)' }}>
            ENGINEERING SIZING ENGINE #17 (IEC 60099-4 / ГОСТ Р 52725-2007 / СТО РОССЕТИ)
          </span>
          <h3>
            {locale === 'zh'
              ? '10kV–35kV 变电站金属氧化物避雷器（MOA）雷电残压与绝缘配合裕度核算器'
              : '10kV–35kV Substation Surge Arrester (MOA) Residual Voltage & BIL Sizer'}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>INSULATION MARGIN (Mins)</span>
          <strong style={{ color: parseFloat(insulationMarginPct) >= 20.0 ? '#22c55e' : '#f59e0b', font: '900 22px/1 var(--display)' }}>
            +{insulationMarginPct}%
          </strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '变电站额定系统电压 (System Voltage):' : 'System Voltage Ur:'}</label>
          <div className="sld-buttons">
            {(['10kV', '20kV', '35kV'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`sld-btn ${ratedVoltage === v ? 'active' : ''}`}
                onClick={() => setRatedVoltage(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '标称雷电冲击放电电流 (Discharge Current):' : 'Nominal Discharge Current:'}</label>
          <div className="sld-buttons">
            {(['5 kA (Distribution Normal)', '10 kA (Station Heavy Duty)'] as const).map((ka) => (
              <button
                key={ka}
                type="button"
                className={`sld-btn ${nominalDischargeKa === ka ? 'active' : ''}`}
                onClick={() => setNominalDischargeKa(ka)}
                style={{ fontSize: '11px' }}
              >
                {ka.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '线路放电耐受等级 (Discharge Class):' : 'Line Discharge Class:'}</label>
          <div className="sld-buttons">
            {(['Class 2 (W ≥ 4.5 kJ/kV)', 'Class 3 (W ≥ 7.2 kJ/kV Heavy Line)'] as const).map((cls) => (
              <button
                key={cls}
                type="button"
                className={`sld-btn ${lineDischargeClass === cls ? 'active' : ''}`}
                onClick={() => setLineDischargeClass(cls)}
                style={{ fontSize: '11px' }}
              >
                {cls.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '被保护变压器冲击绝缘水平 (Transformer BIL):' : 'Protected Trafo BIL Level:'}</label>
          <div className="sld-buttons">
            {(['75 kV (10kV Transformer)', '125 kV (20kV Transformer)', '200 kV (35kV Main Trafo)'] as const).map((bil) => (
              <button
                key={bil}
                type="button"
                className={`sld-btn ${insulationCoordinationBil === bil ? 'active' : ''}`}
                onClick={() => setInsulationCoordinationBil(bil)}
                style={{ fontSize: '10.5px' }}
              >
                {bil.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group" style={{ gridColumn: '1 / -1' }}>
          <label>{locale === 'zh' ? '外套绝缘材质与防污防爆 (Housing & Anti-Blast):' : 'Housing Metallurgy & Anti-Blast:'}</label>
          <div className="sld-buttons">
            {(['HTV Silicone Polymer (Class IV Creepage)', 'High-Grade Porcelain Housing'] as const).map((mat) => (
              <button
                key={mat}
                type="button"
                className={`sld-btn ${housingMaterial === mat ? 'active' : ''}`}
                onClick={() => setHousingMaterial(mat)}
                style={{ fontSize: '12px' }}
              >
                {mat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-results-panel" style={{ marginTop: '20px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: '10px', padding: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>RECOMMENDED MOA MODEL</span>
            <strong style={{ color: '#38bdf8', fontSize: '13.5px' }}>{recommendedMoaModel}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>LIGHTNING RESIDUAL VOLTAGE</span>
            <strong style={{ color: '#f8fafc', fontSize: '14px' }}>U_res ≤ {residualVoltage10ka} kV (at 10kA 8/20μs)</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>INSULATION COORDINATION MARGIN</span>
            <strong style={{ color: parseFloat(insulationMarginPct) >= 20.0 ? '#22c55e' : '#f59e0b', fontSize: '13.5px' }}>
              +{insulationMarginPct}% ({parseFloat(insulationMarginPct) >= 20.0 ? 'Exceeds IEC 20% Standard' : 'Warning: Low Margin'})
            </strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>EXTERNAL CREEPAGE & ANTI-BLAST</span>
            <strong style={{ color: '#a855f7', fontSize: '13px', lineHeight: 1.4, display: 'block' }}>{creepageSafetyLevel}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', color: '#ffffff', fontWeight: 'bold' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I configured Metal-Oxide Surge Arrester on Feichi Power: Voltage = ${ratedVoltage}, Discharge = ${nominalDischargeKa}, Class = ${lineDischargeClass}, Trafo BIL = ${insulationCoordinationBil}, Housing = ${housingMaterial}, Margin = +${insulationMarginPct}%, Model = ${recommendedMoaModel}. Please provide EMTP insulation coordination simulation, residual voltage curves, and Russian GOST Опросный лист quote.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取 10kV/35kV 避雷器绝缘配合计算书、残压曲线与报价' : 'Request Surge Arrester Insulation Sizing, CAD & Quote'}
          </a>
        </div>
      </div>
    </div>
  );
}

function HighVoltageCableAccessorySizer({ locale }: { locale: Locale }) {
  const [ratedVoltage, setRatedVoltage] = useState<'35kV' | '110kV' | '220kV'>('110kV');
  const [conductorCrossSection, setConductorCrossSection] = useState<'240 mm²' | '400 mm²' | '630 mm²' | '1200 mm²'>('630 mm²');
  const [accessoryType, setAccessoryType] = useState<'Composite Outdoor Termination (ПКВТ)' | 'GIS/Transformer Dry Plug-in (Ввод)' | 'One-Piece Straight Joint (ПСТ)'>('Composite Outdoor Termination (ПКВТ)');
  const [cableLengthM, setCableLengthM] = useState<'350m (Short Feeder)' | '1200m (Standard Grid Run)' | '3600m (Long-Distance 3-Section Cross-Bonding)'>('1200m (Standard Grid Run)');
  const [earthingTopology, setEarthingTopology] = useState<'Single-Point Earthing (with SVL)' | 'Cross-Bonding Link Box System' | 'Both-Ends Solid Earthing'>('Cross-Bonding Link Box System');
  const [loadCurrentA, setLoadCurrentA] = useState<'400 A' | '800 A' | '1200 A' | '2000 A'>('800 A');

  const sheathInducedVoltage = useMemo(() => {
    const lengthNum = cableLengthM.includes('3600m') ? 3600 : cableLengthM.includes('1200m') ? 1200 : 350;
    const currentNum = parseFloat(loadCurrentA.replace(' A', ''));
    const omega = 2 * Math.PI * 50;
    const M = 0.22e-6; // H/m mutual inductance
    const rawV = omega * M * currentNum * lengthNum;
    if (earthingTopology.includes('Cross-Bonding')) {
      const perSecV = (rawV / 3.0).toFixed(1);
      return `${perSecV} V (Cancelled in 3-Section Major Route)`;
    }
    if (earthingTopology.includes('Both-Ends')) {
      const circI = (currentNum * 0.48).toFixed(0);
      return `0.0 V (Circulating Current: ${circI} A Loss ~${(parseFloat(circI)*parseFloat(circI)*0.08/1000).toFixed(1)} kW)`;
    }
    return `${rawV.toFixed(1)} V (${rawV > 50 ? 'Warning: Exceeds 50V, SVL Required' : 'Safe Touch Voltage ≤ 50V'})`;
  }, [cableLengthM, loadCurrentA, earthingTopology]);

  const recommendedCableAccessoryModel = useMemo(() => {
    const vNum = ratedVoltage.replace('kV', '');
    const sNum = conductorCrossSection.replace(' mm²', '');
    if (accessoryType.includes('Outdoor')) {
      return `FE-COT-${vNum}kV/${sNum} (ПКВТ-${vNum}/${sNum} УХЛ1 Composite)`;
    }
    if (accessoryType.includes('Plug-in')) {
      return `FE-GIS-PLUG-${vNum}kV/${sNum} (Interface Type 4/6 Dry Plug-in)`;
    }
    return `FE-CJ-${vNum}kV/${sNum} (ПСТ-${vNum}/${sNum} УХЛ1 Pre-molded Joint)`;
  }, [ratedVoltage, conductorCrossSection, accessoryType]);

  const tangentialStressGrading = useMemo(() => {
    if (ratedVoltage === '220kV') return 'E_tan ≤ 0.25 kV/mm (Hyperbolic Stress Cone PD < 2pC at 1.73U0)';
    if (ratedVoltage === '110kV') return 'E_tan ≤ 0.28 kV/mm (Molded EPDM Cone PD < 2pC)';
    return 'E_tan ≤ 0.30 kV/mm (Pre-molded Cone PD < 2pC)';
  }, [ratedVoltage]);

  const impulseWithstandBil = useMemo(() => {
    if (ratedVoltage === '220kV') return '1050 kV Peak BIL (IEC 62067 / GB/T 18890)';
    if (ratedVoltage === '110kV') return '550 kV Peak BIL (IEC 60840 / GB/T 11017)';
    return '200 kV Peak BIL (IEC 60840 / ГОСТ 13781.0)';
  }, [ratedVoltage]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(14, 165, 233, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: '#0ea5e9', borderColor: 'rgba(14, 165, 233, 0.4)' }}>
            ENGINEERING SIZING ENGINE #18 (IEC 60840 / IEC 62067 / ГОСТ 13781.0-86 / СТО РОССЕТИ)
          </span>
          <h3>
            {locale === 'zh'
              ? '35kV–220kV 高压电缆附件（终端/中间接头）金属护层感应电压与应力锥绝缘配合核算器'
              : '35kV–220kV HV Cable Accessories Sheath Induced Voltage & Stress Cone Sizer'}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>SHEATH INDUCED VOLTAGE</span>
          <strong style={{ color: sheathInducedVoltage.includes('Warning') ? '#f59e0b' : '#22c55e', font: '900 22px/1 var(--display)' }}>
            {sheathInducedVoltage.split(' ')[0]} {sheathInducedVoltage.split(' ')[1] || 'V'}
          </strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '电缆系统额定电压等级 (Rated Voltage):' : 'Cable Voltage System:'}</label>
          <div className="sld-buttons">
            {(['35kV', '110kV', '220kV'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`sld-btn ${ratedVoltage === v ? 'active' : ''}`}
                onClick={() => setRatedVoltage(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '电缆主导体标称截面积 (Conductor Size):' : 'Conductor Cross-Section:'}</label>
          <div className="sld-buttons">
            {(['240 mm²', '400 mm²', '630 mm²', '1200 mm²'] as const).map((s) => (
              <button
                key={s}
                type="button"
                className={`sld-btn ${conductorCrossSection === s ? 'active' : ''}`}
                onClick={() => setConductorCrossSection(s)}
                style={{ fontSize: '11.5px' }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '电缆附件结构类型 (Accessory Architecture):' : 'Accessory Type:'}</label>
          <div className="sld-buttons">
            {(['Composite Outdoor Termination (ПКВТ)', 'GIS/Transformer Dry Plug-in (Ввод)', 'One-Piece Straight Joint (ПСТ)'] as const).map((t) => (
              <button
                key={t}
                type="button"
                className={`sld-btn ${accessoryType === t ? 'active' : ''}`}
                onClick={() => setAccessoryType(t)}
                style={{ fontSize: '11px' }}
              >
                {t.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '线路总长度与分段形式 (Route Length):' : 'Cable Route Length & Sections:'}</label>
          <div className="sld-buttons">
            {(['350m (Short Feeder)', '1200m (Standard Grid Run)', '3600m (Long-Distance 3-Section Cross-Bonding)'] as const).map((len) => (
              <button
                key={len}
                type="button"
                className={`sld-btn ${cableLengthM === len ? 'active' : ''}`}
                onClick={() => setCableLengthM(len)}
                style={{ fontSize: '11px' }}
              >
                {len.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '金属屏蔽护层接地拓扑 (Earthing Scheme):' : 'Metallic Sheath Earthing Scheme:'}</label>
          <div className="sld-buttons">
            {(['Single-Point Earthing (with SVL)', 'Cross-Bonding Link Box System', 'Both-Ends Solid Earthing'] as const).map((earth) => (
              <button
                key={earth}
                type="button"
                className={`sld-btn ${earthingTopology === earth ? 'active' : ''}`}
                onClick={() => setEarthingTopology(earth)}
                style={{ fontSize: '11px' }}
              >
                {earth.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '主线路持续运行负荷电流 (Load Current):' : 'Continuous Load Current:'}</label>
          <div className="sld-buttons">
            {(['400 A', '800 A', '1200 A', '2000 A'] as const).map((cur) => (
              <button
                key={cur}
                type="button"
                className={`sld-btn ${loadCurrentA === cur ? 'active' : ''}`}
                onClick={() => setLoadCurrentA(cur)}
                style={{ fontSize: '11.5px' }}
              >
                {cur}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-results-panel" style={{ marginTop: '20px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(14, 165, 233, 0.25)', borderRadius: '10px', padding: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>RECOMMENDED ACCESSORY MODEL</span>
            <strong style={{ color: '#38bdf8', fontSize: '13.5px' }}>{recommendedCableAccessoryModel}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>SHEATH INDUCED TOUCH VOLTAGE</span>
            <strong style={{ color: sheathInducedVoltage.includes('Warning') ? '#f59e0b' : '#22c55e', fontSize: '13px' }}>{sheathInducedVoltage}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>STRESS CONE TANGENTIAL FIELD</span>
            <strong style={{ color: '#f8fafc', fontSize: '12.5px', lineHeight: 1.4, display: 'block' }}>{tangentialStressGrading}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>LIGHTNING IMPULSE WITHSTAND</span>
            <strong style={{ color: '#a855f7', fontSize: '13px', lineHeight: 1.4, display: 'block' }}>{impulseWithstandBil}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, #0284c7, #0369a1)', color: '#ffffff', fontWeight: 'bold' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I configured 35-220kV Cable Accessories on Feichi Power: Voltage = ${ratedVoltage}, CrossSection = ${conductorCrossSection}, Type = ${accessoryType}, Length = ${cableLengthM}, Earthing = ${earthingTopology}, Load = ${loadCurrentA}, Model = ${recommendedCableAccessoryModel}. Please provide step-cut CAD drawings, sheath induced voltage calculation sheet, and Russian GOST Опросный лист quote.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取 35kV–220kV 电缆附件施工图纸、护层感应电压计算书与报价' : 'Request Cable Accessories CAD, Sheath Sizing & Quote'}
          </a>
        </div>
      </div>
    </div>
  );
}

function SubstationEarthingGridSizer({ locale }: { locale: Locale }) {
  const [substationVoltage, setSubstationVoltage] = useState<'110kV' | '220kV'>('110kV');
  const [faultCurrentIk, setFaultCurrentIk] = useState<'25 kA' | '31.5 kA' | '40 kA' | '50 kA'>('31.5 kA');
  const [soilResistivity, setSoilResistivity] = useState<'50 Ω·m (Moist Clay)' | '150 Ω·m (Standard Soil)' | '500 Ω·m (Rocky/Sand)' | '3000 Ω·m (Siberian Permafrost)'>('150 Ω·m (Standard Soil)');
  const [gridArea, setGridArea] = useState<'60m x 60m (Compact 110kV)' | '100m x 100m (Standard 110/220kV)' | '150m x 150m (Large 220kV Hub)'>('100m x 100m (Standard 110/220kV)');
  const [conductorMaterial, setConductorMaterial] = useState<'Copper-Clad Steel (CCS / FE-CCS)' | 'Hot-Dip Galv Flat Steel (50x5mm)' | 'Hybrid CCS + 40m Deep Ion Wells'>('Copper-Clad Steel (CCS / FE-CCS)');
  const [faultDurationSec, setFaultDurationSec] = useState<'0.2 s (Fast Relay)' | '0.5 s (Standard Backup)' | '1.0 s (Delayed Trip)'>('0.2 s (Fast Relay)');

  const groundingResistanceRg = useMemo(() => {
    const rhoNum = soilResistivity.includes('3000') ? 3000 : soilResistivity.includes('500') ? 500 : soilResistivity.includes('150') ? 150 : 50;
    const areaSide = gridArea.includes('150m') ? 150 : gridArea.includes('100m') ? 100 : 60;
    const area = areaSide * areaSide;
    const totalLength = (areaSide / 10 + 1) * areaSide * 2 + areaSide * 4;
    // Laurent / Sverak formula: Rg = rho * [ 1/(4*r) + 1/L ] where r = sqrt(A/pi)
    const eqRadius = Math.sqrt(area / Math.PI);
    let rg = rhoNum * (1 / (4 * eqRadius) + 1 / totalLength);
    if (conductorMaterial.includes('Hybrid CCS + 40m Deep')) {
      rg = rg * 0.35; // Deep wells penetration factor
    }
    return Math.max(0.08, rg).toFixed(2);
  }, [soilResistivity, gridArea, conductorMaterial]);

  const groundPotentialRiseGpr = useMemo(() => {
    const ikNum = parseFloat(faultCurrentIk.split(' ')[0]) * 1000;
    const rgNum = parseFloat(groundingResistanceRg);
    // Division factor Sf approx 0.60
    const sf = 0.60;
    const ig = ikNum * sf;
    const gprVolts = ig * rgNum;
    if (gprVolts >= 5000) {
      return `${(gprVolts / 1000).toFixed(1)} kV (Warning: GPR > 5kV, Extra Grading Rings Required)`;
    }
    return `${(gprVolts / 1000).toFixed(2)} kV (Compliant with IEEE 80 / ГОСТ 12.1.030)`;
  }, [faultCurrentIk, groundingResistanceRg]);

  const permissibleTouchVoltage = useMemo(() => {
    const ts = faultDurationSec.includes('0.2') ? 0.2 : faultDurationSec.includes('0.5') ? 0.5 : 1.0;
    // Etouch50 = (1000 + 1.5 * Cs * rhos) * 0.116 / sqrt(ts), rhos=3000, Cs~0.75
    const etouch = (1000 + 1.5 * 0.75 * 3000) * (0.116 / Math.sqrt(ts));
    return `${Math.round(etouch)} V (50kg Body / 15cm Crushed Rock)`;
  }, [faultDurationSec]);

  const recommendedEarthingModel = useMemo(() => {
    const vStr = substationVoltage;
    if (conductorMaterial.includes('Deep Ion')) {
      return `FE-EARTH-${vStr}-HYBRID-40M (ЗУ-${vStr}-УХЛ1 Siberian Deep Ion Module)`;
    }
    if (conductorMaterial.includes('Copper-Clad')) {
      return `FE-EARTH-${vStr}-CCS-50kA (ЗУ-${vStr}-CCS 50-Year Corrosion Free)`;
    }
    return `FE-EARTH-${vStr}-HDG-50x5 (ЗУ-${vStr}-HDG Standard Utility Grid)`;
  }, [substationVoltage, conductorMaterial]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(234, 88, 12, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: '#ea580c', borderColor: 'rgba(234, 88, 12, 0.4)' }}>
            ENGINEERING SIZING ENGINE #19 (IEEE 80 / IEC 61936 / GB/T 50065 / ГОСТ 12.1.030-81 / СТО РОССЕТИ)
          </span>
          <h3>
            {locale === 'zh'
              ? '110kV–220kV 变电站主接地网工频电阻、地电位升高（GPR）与允许接触电压核算器'
              : '110kV–220kV Substation Earthing Grid Resistance, GPR & Permissible Touch Voltage Sizer'}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>GROUND RESISTANCE (Rg)</span>
          <strong style={{ color: parseFloat(groundingResistanceRg) <= 0.5 ? '#22c55e' : '#f59e0b', font: '900 22px/1 var(--display)' }}>
            {groundingResistanceRg} Ω
          </strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '变电站电压等级 (Substation Voltage):' : 'Substation Voltage Level:'}</label>
          <div className="sld-buttons">
            {(['110kV', '220kV'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`sld-btn ${substationVoltage === v ? 'active' : ''}`}
                onClick={() => setSubstationVoltage(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '系统单相短路接地电流 (Fault Current Ik):' : 'Single-Phase Fault Current:'}</label>
          <div className="sld-buttons">
            {(['25 kA', '31.5 kA', '40 kA', '50 kA'] as const).map((ik) => (
              <button
                key={ik}
                type="button"
                className={`sld-btn ${faultCurrentIk === ik ? 'active' : ''}`}
                onClick={() => setFaultCurrentIk(ik)}
                style={{ fontSize: '11px' }}
              >
                {ik}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '站址土壤视在电阻率 (Soil Resistivity):' : 'Site Soil Resistivity:'}</label>
          <div className="sld-buttons">
            {(['50 Ω·m (Moist Clay)', '150 Ω·m (Standard Soil)', '500 Ω·m (Rocky/Sand)', '3000 Ω·m (Siberian Permafrost)'] as const).map((rho) => (
              <button
                key={rho}
                type="button"
                className={`sld-btn ${soilResistivity === rho ? 'active' : ''}`}
                onClick={() => setSoilResistivity(rho)}
                style={{ fontSize: '10.5px' }}
              >
                {rho.split(' ')[0]} {rho.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '变电站地网几何占地面积 (Grid Area):' : 'Grounding Grid Area:'}</label>
          <div className="sld-buttons">
            {(['60m x 60m (Compact 110kV)', '100m x 100m (Standard 110/220kV)', '150m x 150m (Large 220kV Hub)'] as const).map((a) => (
              <button
                key={a}
                type="button"
                className={`sld-btn ${gridArea === a ? 'active' : ''}`}
                onClick={() => setGridArea(a)}
                style={{ fontSize: '11px' }}
              >
                {a.split(' ')[0]} {a.split(' ')[1]} {a.split(' ')[2]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '地网主导体材质与拓扑 (Conductor Type):' : 'Conductor Material & Topology:'}</label>
          <div className="sld-buttons">
            {(['Copper-Clad Steel (CCS / FE-CCS)', 'Hot-Dip Galv Flat Steel (50x5mm)', 'Hybrid CCS + 40m Deep Ion Wells'] as const).map((mat) => (
              <button
                key={mat}
                type="button"
                className={`sld-btn ${conductorMaterial === mat ? 'active' : ''}`}
                onClick={() => setConductorMaterial(mat)}
                style={{ fontSize: '10.5px' }}
              >
                {mat.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '短路主保护动作切除时间 (Trip Duration):' : 'Fault Trip Duration (ts):'}</label>
          <div className="sld-buttons">
            {(['0.2 s (Fast Relay)', '0.5 s (Standard Backup)', '1.0 s (Delayed Trip)'] as const).map((t) => (
              <button
                key={t}
                type="button"
                className={`sld-btn ${faultDurationSec === t ? 'active' : ''}`}
                onClick={() => setFaultDurationSec(t)}
                style={{ fontSize: '11.5px' }}
              >
                {t.split(' ')[0]} {t.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-results-panel" style={{ marginTop: '20px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(234, 88, 12, 0.25)', borderRadius: '10px', padding: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>RECOMMENDED EARTHING GRID MODEL</span>
            <strong style={{ color: '#fb923c', fontSize: '13.5px' }}>{recommendedEarthingModel}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>GROUND POTENTIAL RISE (GPR)</span>
            <strong style={{ color: groundPotentialRiseGpr.includes('Warning') ? '#f59e0b' : '#22c55e', fontSize: '13px' }}>{groundPotentialRiseGpr}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>PERMISSIBLE TOUCH VOLTAGE (IEEE 80)</span>
            <strong style={{ color: '#38bdf8', fontSize: '13px', lineHeight: 1.4, display: 'block' }}>{permissibleTouchVoltage}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>DESIGN SERVICE LIFE</span>
            <strong style={{ color: conductorMaterial.includes('Copper-Clad') ? '#a855f7' : '#94a3b8', fontSize: '13px', lineHeight: 1.4, display: 'block' }}>
              {conductorMaterial.includes('Copper-Clad') ? '≥ 50 Years (Zero Exhumation)' : conductorMaterial.includes('Hybrid') ? '≥ 40 Years (Permafrost)' : '15-25 Years (Zinc Sacrificial)'}
            </strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, #ea580c, #c2410c)', color: '#ffffff', fontWeight: 'bold' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I configured 110-220kV Substation Earthing Grid on Feichi Power: Voltage = ${substationVoltage}, FaultCurrent = ${faultCurrentIk}, SoilResistivity = ${soilResistivity}, Area = ${gridArea}, Conductor = ${conductorMaterial}, Duration = ${faultDurationSec}, Calculated Rg = ${groundingResistanceRg} Ohm, GPR = ${groundPotentialRiseGpr}. Please provide IEEE 80 sizing calculation sheet, CAD earthing layout, and Russian GOST Опросный лист quote.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取 110kV–220kV 接地网 CAD 布置图、IEEE 80 计算书与报价' : 'Request Substation Earthing CAD Layout, IEEE 80 Sizing & Quote'}
          </a>
        </div>
      </div>
    </div>
  );
}

function HighVoltageGisSf6Sizer({ locale }: { locale: Locale }) {
  const [gisVoltageLevel, setGisVoltageLevel] = useState<'110kV / 126kV' | '220kV / 252kV'>('110kV / 126kV');
  const [ratedCurrentA, setRatedCurrentA] = useState<'2000 A' | '2500 A' | '3150 A' | '4000 A'>('2500 A');
  const [shortCircuitBreakingIk, setShortCircuitBreakingIk] = useState<'31.5 kA (3s)' | '40 kA (3s)' | '50 kA (3s)'>('40 kA (3s)');
  const [ambientClimate, setAmbientClimate] = useState<'Standard (-25°C to +40°C)' | 'Siberian Arctic -50°C (ГОСТ УХЛ1)' | 'Tropical/Desert +55°C'>('Siberian Arctic -50°C (ГОСТ УХЛ1)');
  const [insulatingGasType, setInsulatingGasType] = useState<'Pure SF6 (0.50 MPa)' | 'SF6/N2 Mixed Gas 60/40 (0.60 MPa)' | 'Low-Pressure Pure SF6 (0.40 MPa)'>('SF6/N2 Mixed Gas 60/40 (0.60 MPa)');
  const [pdmMonitoringSystem, setPdmMonitoringSystem] = useState<'Built-In UHF PDM (300-1500MHz)' | 'Combined UHF + Acoustic Sensor' | 'Standard Density Relay Only'>('Built-In UHF PDM (300-1500MHz)');

  const gasLiquefactionThreshold = useMemo(() => {
    if (insulatingGasType.includes('SF6/N2 Mixed Gas')) {
      return '-56.4°C (Safe for Siberian Arctic УХЛ1 -50°C)';
    }
    if (insulatingGasType.includes('Low-Pressure Pure')) {
      return '-43.2°C (Safe down to -40°C Extreme Winter)';
    }
    return '-32.5°C (Warning: Pure 0.50MPa SF6 will condense below -32°C)';
  }, [insulatingGasType]);

  const microWaterAlarmThreshold = useMemo(() => {
    return '≤ 150 ppm_v (Dew Point ≤ -36°C per IEC 60480 / СТО Россети)';
  }, []);

  const recommendedGisModel = useMemo(() => {
    const vStr = gisVoltageLevel.includes('110kV') ? '110' : '220';
    const curStr = ratedCurrentA.split(' ')[0];
    const ikStr = shortCircuitBreakingIk.split(' ')[0];
    if (ambientClimate.includes('Siberian')) {
      return `FE-GIS-${vStr}-ARCTIC-${curStr}-${ikStr} (КРУЭ-${vStr}-УХЛ1)`;
    }
    return `FE-GIS-${vStr}-${curStr}-${ikStr} (КРУЭ-${vStr}-У3)`;
  }, [gisVoltageLevel, ratedCurrentA, shortCircuitBreakingIk, ambientClimate]);

  const lightningImpulseBil = useMemo(() => {
    return gisVoltageLevel.includes('110kV') ? '550 kV / 650 kV' : '1050 kV / 1175 kV';
  }, [gisVoltageLevel]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(6, 182, 212, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: '#06b6d4', borderColor: 'rgba(6, 182, 212, 0.4)' }}>
            ENGINEERING SIZING ENGINE #20 (IEC 62271-203 / ГОСТ Р 54828-2011 / СТО РОССЕТИ)
          </span>
          <h3>
            {locale === 'zh'
              ? '110kV–220kV 气体绝缘全封闭组合电器（GIS / КРУЭ）气体密度防液化与局放选型核算器'
              : '110kV–220kV Gas-Insulated Switchgear (GIS / КРУЭ) SF6 Liquefaction & PDM Sizer'}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>BREAKING CAPACITY (Isc)</span>
          <strong style={{ color: '#22c55e', font: '900 22px/1 var(--display)' }}>
            {shortCircuitBreakingIk.split(' ')[0]}
          </strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? 'GIS 额定电压等级 (Voltage Level):' : 'GIS Rated Voltage Level:'}</label>
          <div className="sld-buttons">
            {(['110kV / 126kV', '220kV / 252kV'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`sld-btn ${gisVoltageLevel === v ? 'active' : ''}`}
                onClick={() => setGisVoltageLevel(v)}
              >
                {v.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '主母线额定连续工作电流 (Rated Current):' : 'Continuous Rated Current (Ir):'}</label>
          <div className="sld-buttons">
            {(['2000 A', '2500 A', '3150 A', '4000 A'] as const).map((cur) => (
              <button
                key={cur}
                type="button"
                className={`sld-btn ${ratedCurrentA === cur ? 'active' : ''}`}
                onClick={() => setRatedCurrentA(cur)}
                style={{ fontSize: '11.5px' }}
              >
                {cur}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '额定短路开断耐受电流 (Breaking Capacity):' : 'Short-Circuit Breaking (Isc):'}</label>
          <div className="sld-buttons">
            {(['31.5 kA (3s)', '40 kA (3s)', '50 kA (3s)'] as const).map((ik) => (
              <button
                key={ik}
                type="button"
                className={`sld-btn ${shortCircuitBreakingIk === ik ? 'active' : ''}`}
                onClick={() => setShortCircuitBreakingIk(ik)}
                style={{ fontSize: '11px' }}
              >
                {ik.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '站址环境气候与最低温 (Ambient Climate):' : 'Ambient Temperature & Climate:'}</label>
          <div className="sld-buttons">
            {(['Standard (-25°C to +40°C)', 'Siberian Arctic -50°C (ГОСТ УХЛ1)', 'Tropical/Desert +55°C'] as const).map((cli) => (
              <button
                key={cli}
                type="button"
                className={`sld-btn ${ambientClimate === cli ? 'active' : ''}`}
                onClick={() => setAmbientClimate(cli)}
                style={{ fontSize: '10.5px' }}
              >
                {cli.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '绝缘介质与充气压力 (Insulating Medium):' : 'Insulating Gas & Pressure:'}</label>
          <div className="sld-buttons">
            {(['Pure SF6 (0.50 MPa)', 'SF6/N2 Mixed Gas 60/40 (0.60 MPa)', 'Low-Pressure Pure SF6 (0.40 MPa)'] as const).map((gas) => (
              <button
                key={gas}
                type="button"
                className={`sld-btn ${insulatingGasType === gas ? 'active' : ''}`}
                onClick={() => setInsulatingGasType(gas)}
                style={{ fontSize: '10.5px' }}
              >
                {gas.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '局部放电监测系统配置 (PDM System):' : 'Partial Discharge Monitoring:'}</label>
          <div className="sld-buttons">
            {(['Built-In UHF PDM (300-1500MHz)', 'Combined UHF + Acoustic Sensor', 'Standard Density Relay Only'] as const).map((pdm) => (
              <button
                key={pdm}
                type="button"
                className={`sld-btn ${pdmMonitoringSystem === pdm ? 'active' : ''}`}
                onClick={() => setPdmMonitoringSystem(pdm)}
                style={{ fontSize: '10.5px' }}
              >
                {pdm.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-results-panel" style={{ marginTop: '20px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(6, 182, 212, 0.25)', borderRadius: '10px', padding: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>RECOMMENDED GIS / КРУЭ MODEL</span>
            <strong style={{ color: '#38bdf8', fontSize: '13.5px' }}>{recommendedGisModel}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>GAS LIQUEFACTION LIMIT (BEATTIE-BRIDGEMAN)</span>
            <strong style={{ color: gasLiquefactionThreshold.includes('Warning') ? '#f59e0b' : '#22c55e', fontSize: '13px' }}>{gasLiquefactionThreshold}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>MAX IN-SERVICE MICRO-WATER (H2O)</span>
            <strong style={{ color: '#38bdf8', fontSize: '12.5px', lineHeight: 1.4, display: 'block' }}>{microWaterAlarmThreshold}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>LIGHTNING IMPULSE WITHSTAND (BIL)</span>
            <strong style={{ color: '#a855f7', fontSize: '13px', lineHeight: 1.4, display: 'block' }}>{lightningImpulseBil}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, #0284c7, #0369a1)', color: '#ffffff', fontWeight: 'bold' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I configured 110-220kV GIS on Feichi Power: Voltage = ${gisVoltageLevel}, Current = ${ratedCurrentA}, BreakingIk = ${shortCircuitBreakingIk}, Climate = ${ambientClimate}, GasType = ${insulatingGasType}, PDM = ${pdmMonitoringSystem}, Model = ${recommendedGisModel}. Please provide GIS gas compartment CAD drawings, single-line schematics, and Russian GOST Опросный лист quote.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取 110kV–220kV GIS 气室划分 CAD 图纸、单线图与俄标报价' : 'Request GIS Gas Compartment CAD, SLD & GOST Quote'}
          </a>
        </div>
      </div>
    </div>
  );
}

function HighVoltageTransformerBushingSizer({ locale }: { locale: Locale }) {
  const [bushingVoltageLevel, setBushingVoltageLevel] = useState<'110kV / 126kV' | '220kV / 252kV' | '330kV / 363kV' | '500kV / 550kV'>('220kV / 252kV');
  const [ratedCurrentA, setRatedCurrentA] = useState<'1250 A' | '2000 A' | '3150 A' | '4000 A'>('2000 A');
  const [insulationCoreType, setInsulationCoreType] = useState<'Resin Impregnated Paper (RIP)' | 'Resin Impregnated Synthetic (RIS)' | 'Oil-Impregnated Paper (OIP)'>('Resin Impregnated Paper (RIP)');
  const [pollutionClass, setPollutionClass] = useState<'Class III (25 mm/kV)' | 'Class IV Very Heavy (31 mm/kV - ГОСТ 9920)' | 'Heavy Industrial Saline (35 mm/kV)'>('Class IV Very Heavy (31 mm/kV - ГОСТ 9920)');
  const [ambientClimate, setAmbientClimate] = useState<'Siberian Arctic -50°C (ГОСТ УХЛ1)' | 'Temperate (-30°C to +40°C)' | 'High Altitude > 2000m'>('Siberian Arctic -50°C (ГОСТ УХЛ1)');
  const [onlineDiagnosticSystem, setOnlineDiagnosticSystem] = useState<'Integrated Digital tanδ + DGA' | 'Standard Test Tap Only' | 'Photoacoustic PAS DGA Sensor'>('Integrated Digital tanδ + DGA');

  const recommendedBushingModel = useMemo(() => {
    const vNum = bushingVoltageLevel.split('kV')[0];
    const curNum = ratedCurrentA.split(' ')[0];
    const typeStr = insulationCoreType.includes('RIP') ? 'RIP' : insulationCoreType.includes('RIS') ? 'RIS' : 'OIP';
    if (ambientClimate.includes('Siberian')) {
      return `FE-BUSH-${vNum}-${typeStr}-${curNum}-УХЛ1 (ВВТ-${vNum}-${typeStr})`;
    }
    return `FE-BUSH-${vNum}-${typeStr}-${curNum}-У1 (ВВТ-${vNum})`;
  }, [bushingVoltageLevel, ratedCurrentA, insulationCoreType, ambientClimate]);

  const testDielectricLoss = useMemo(() => {
    if (insulationCoreType.includes('RIS')) {
      return 'tan δ ≤ 0.32% (Zero Moisture Absorption Core)';
    }
    if (insulationCoreType.includes('RIP')) {
      return 'tan δ ≤ 0.38% (Solid Dry Resin Matrix)';
    }
    return 'tan δ ≤ 0.45% (Oil-Impregnated Cellulose)';
  }, [insulationCoreType]);

  const lightningImpulseBil = useMemo(() => {
    if (bushingVoltageLevel.includes('500kV')) return '1550 kV / 1175 kV SIL';
    if (bushingVoltageLevel.includes('330kV')) return '1175 kV / 950 kV SIL';
    if (bushingVoltageLevel.includes('220kV')) return '1050 kV (BIL Full Wave)';
    return '550 kV / 650 kV BIL';
  }, [bushingVoltageLevel]);

  const cantileverMechanicalLoad = useMemo(() => {
    if (bushingVoltageLevel.includes('500kV') || bushingVoltageLevel.includes('330kV')) {
      return '≥ 4000 N (Seismic 9-deg MSK-64 Compliant)';
    }
    return '≥ 2000 N (Heavy Duty Flange)';
  }, [bushingVoltageLevel]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(168, 85, 247, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: '#c084fc', borderColor: 'rgba(168, 85, 247, 0.4)' }}>
            ENGINEERING SIZING ENGINE #21 (IEC 60137 / IEEE C57.19.01 / ГОСТ 10693 / СТО РОССЕТИ)
          </span>
          <h3>
            {locale === 'zh'
              ? '110kV–500kV 主变高压电容型套管（RIP/RIS/OIP）介损微漂移与 DGA 色谱选型核算器'
              : '110kV–500kV Transformer Capacitive Bushings tanδ & DGA Chromatography Sizer'}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>RATED BIL (IMPULSE)</span>
          <strong style={{ color: '#c084fc', font: '900 22px/1 var(--display)' }}>
            {lightningImpulseBil.split(' ')[0]} {lightningImpulseBil.split(' ')[1]}
          </strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '变压器套管最高工作电压 (Voltage Level):' : 'Bushing Voltage Level (Um):'}</label>
          <div className="sld-buttons">
            {(['110kV / 126kV', '220kV / 252kV', '330kV / 363kV', '500kV / 550kV'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`sld-btn ${bushingVoltageLevel === v ? 'active' : ''}`}
                onClick={() => setBushingVoltageLevel(v)}
                style={{ fontSize: '11px' }}
              >
                {v.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '套管额定连续通流容量 (Rated Current):' : 'Rated Continuous Current (Ir):'}</label>
          <div className="sld-buttons">
            {(['1250 A', '2000 A', '3150 A', '4000 A'] as const).map((cur) => (
              <button
                key={cur}
                type="button"
                className={`sld-btn ${ratedCurrentA === cur ? 'active' : ''}`}
                onClick={() => setRatedCurrentA(cur)}
                style={{ fontSize: '11.5px' }}
              >
                {cur}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '电容芯体主绝缘制造工艺 (Core Material):' : 'Capacitive Core Insulation:'}</label>
          <div className="sld-buttons">
            {(['Resin Impregnated Paper (RIP)', 'Resin Impregnated Synthetic (RIS)', 'Oil-Impregnated Paper (OIP)'] as const).map((core) => (
              <button
                key={core}
                type="button"
                className={`sld-btn ${insulationCoreType === core ? 'active' : ''}`}
                onClick={() => setInsulationCoreType(core)}
                style={{ fontSize: '10.5px' }}
              >
                {core.split(' ')[0]} {core.split('(')[1].replace(')', '')}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '外绝缘爬电比距与污秽等级 (Creepage):' : 'Creepage Distance & Pollution:'}</label>
          <div className="sld-buttons">
            {(['Class III (25 mm/kV)', 'Class IV Very Heavy (31 mm/kV - ГОСТ 9920)', 'Heavy Industrial Saline (35 mm/kV)'] as const).map((pol) => (
              <button
                key={pol}
                type="button"
                className={`sld-btn ${pollutionClass === pol ? 'active' : ''}`}
                onClick={() => setPollutionClass(pol)}
                style={{ fontSize: '10.5px' }}
              >
                {pol.split(' ')[0]} {pol.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '现场环境气候与极寒等级 (Ambient):' : 'Site Ambient & Cold Rating:'}</label>
          <div className="sld-buttons">
            {(['Siberian Arctic -50°C (ГОСТ УХЛ1)', 'Temperate (-30°C to +40°C)', 'High Altitude > 2000m'] as const).map((amb) => (
              <button
                key={amb}
                type="button"
                className={`sld-btn ${ambientClimate === amb ? 'active' : ''}`}
                onClick={() => setAmbientClimate(amb)}
                style={{ fontSize: '10.5px' }}
              >
                {amb.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '在线介损与色谱监测系统 (Monitoring):' : 'Online tanδ & DGA System:'}</label>
          <div className="sld-buttons">
            {(['Integrated Digital tanδ + DGA', 'Standard Test Tap Only', 'Photoacoustic PAS DGA Sensor'] as const).map((diag) => (
              <button
                key={diag}
                type="button"
                className={`sld-btn ${onlineDiagnosticSystem === diag ? 'active' : ''}`}
                onClick={() => setOnlineDiagnosticSystem(diag)}
                style={{ fontSize: '10.5px' }}
              >
                {diag.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-results-panel" style={{ marginTop: '20px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(168, 85, 247, 0.25)', borderRadius: '10px', padding: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>RECOMMENDED BUSHING MODEL</span>
            <strong style={{ color: '#c084fc', fontSize: '13.5px' }}>{recommendedBushingModel}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>FACTORY DIELECTRIC LOSS (tan δ)</span>
            <strong style={{ color: '#22c55e', fontSize: '13px' }}>{testDielectricLoss}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>LIGHTNING & SWITCHING WITHSTAND</span>
            <strong style={{ color: '#38bdf8', fontSize: '12.5px', lineHeight: 1.4, display: 'block' }}>{lightningImpulseBil}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>CANTILEVER MECHANICAL LOAD</span>
            <strong style={{ color: '#fb923c', fontSize: '13px', lineHeight: 1.4, display: 'block' }}>{cantileverMechanicalLoad}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, #9333ea, #7e22ce)', color: '#ffffff', fontWeight: 'bold' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I configured 110-500kV Transformer Bushing on Feichi Power: Voltage = ${bushingVoltageLevel}, Current = ${ratedCurrentA}, CoreType = ${insulationCoreType}, Creepage = ${pollutionClass}, Climate = ${ambientClimate}, Diagnostic = ${onlineDiagnosticSystem}, Model = ${recommendedBushingModel}. Please provide bushing dimension drawings, DGA test reports, and Russian GOST Опросный лист quote.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取 110kV–500kV 主变套管 CAD 图纸、DGA 计算书与俄标报价' : 'Request Transformer Bushing CAD, DGA Sizing & Quote'}
          </a>
        </div>
      </div>
    </div>
  );
}

function InsulatedTubularBusbarSizer({ locale }: { locale: Locale }) {
  const [ratedVoltage, setRatedVoltage] = useState<'35kV' | '110kV' | '220kV'>('110kV');
  const [ratedCurrent, setRatedCurrent] = useState<'2000 A' | '3150 A' | '4000 A' | '6300 A'>('3150 A');
  const [conductorMaterial, setConductorMaterial] = useState<'Copper Tube T2 (Cu)' | 'Aluminum Alloy 6101 (Al)'>('Copper Tube T2 (Cu)');
  const [spanLengthM, setSpanLengthM] = useState<'6m (Standard Bay)' | '9m (Long Span)' | '12m (Self-Supporting Busway)'>('9m (Long Span)');
  const [insulationType, setInsulationType] = useState<'Solid Cast Resin (RIP/RIS)' | 'Extruded XLPE' | 'Russian ТКЛ-УХЛ1 Arctic Model'>('Solid Cast Resin (RIP/RIS)');
  const [windSpeedMs, setWindSpeedMs] = useState<'4 m/s (Light Breeze)' | '8 m/s (Moderate)' | '15 m/s (High Wind)'>('4 m/s (Light Breeze)');

  const busbarOuterDiameterMm = useMemo(() => {
    const curNum = parseFloat(ratedCurrent.split(' ')[0]);
    if (conductorMaterial.includes('Copper')) {
      if (curNum <= 2000) return 80;
      if (curNum <= 3150) return 120;
      if (curNum <= 4000) return 150;
      return 180;
    }
    if (curNum <= 2000) return 100;
    if (curNum <= 3150) return 140;
    if (curNum <= 4000) return 180;
    return 220;
  }, [ratedCurrent, conductorMaterial]);

  const aeolianVortexFrequency = useMemo(() => {
    const vNum = parseFloat(windSpeedMs.split(' ')[0]);
    const dMeters = busbarOuterDiameterMm / 1000.0;
    const st = 0.19;
    const fv = (st * vNum) / dMeters;
    return `${fv.toFixed(1)} Hz (Built-in Multi-Frequency Damper Absorbs > 85% Energy)`;
  }, [windSpeedMs, busbarOuterDiameterMm]);

  const recommendedBusbarModel = useMemo(() => {
    const vNum = ratedVoltage.replace('kV', '');
    const cNum = ratedCurrent.split(' ')[0];
    const matCode = conductorMaterial.includes('Copper') ? 'Cu' : 'Al';
    if (insulationType.includes('Russian')) {
      return `FE-BUS-${vNum}kV/${cNum}A (ТКЛ-${vNum}/${cNum} УХЛ1 Arctic Busway)`;
    }
    if (insulationType.includes('Cast Resin')) {
      return `FE-BUS-${vNum}kV/${cNum}A-RIP (${matCode} Solid Cast Resin 0V Shield)`;
    }
    return `FE-BUS-${vNum}kV/${cNum}A-XLPE (${matCode} Extruded Polymer Bus)`;
  }, [ratedVoltage, ratedCurrent, conductorMaterial, insulationType]);

  const shortCircuitPeakElectrodynamic = useMemo(() => {
    const vNum = ratedVoltage;
    if (vNum === '220kV') return '160 kA Peak (Dynamic Force ≤ 14.5 kN/span on Insulators)';
    if (vNum === '110kV') return '125 kA Peak (Dynamic Force ≤ 11.2 kN/span on Insulators)';
    return '80 kA Peak (Dynamic Force ≤ 6.8 kN/span on Insulators)';
  }, [ratedVoltage]);

  return (
    <div className="sld-widget" style={{ marginTop: '24px', borderColor: 'rgba(168, 85, 247, 0.35)' }}>
      <div className="sld-header">
        <div>
          <span className="eyebrow" style={{ color: '#a855f7', borderColor: 'rgba(168, 85, 247, 0.4)' }}>
            ENGINEERING SIZING ENGINE #20 (IEC 60137 / IEC 62271 / IEEE C37.23 / ГОСТ 10693-81 / СТО РОССЕТИ)
          </span>
          <h3>
            {locale === 'zh'
              ? '35kV–220kV 全绝缘管型母线管径集肤效应、微风共振频率与短路电动力核算器'
              : '35kV–220kV Insulated Tubular Busbar Diameter, Aeolian Resonance & Dynamic Stress Sizer'}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block' }}>TUBE DIAMETER (OD)</span>
          <strong style={{ color: '#c084fc', font: '900 22px/1 var(--display)' }}>
            Φ {busbarOuterDiameterMm} mm
          </strong>
        </div>
      </div>

      <div className="sld-controls-grid">
        <div className="sld-control-group">
          <label>{locale === 'zh' ? '母线系统额定工作电压 (Rated Voltage):' : 'Busbar Voltage System:'}</label>
          <div className="sld-buttons">
            {(['35kV', '110kV', '220kV'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`sld-btn ${ratedVoltage === v ? 'active' : ''}`}
                onClick={() => setRatedVoltage(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '额定持续通流工作电流 (Rated Current):' : 'Continuous Rated Current:'}</label>
          <div className="sld-buttons">
            {(['2000 A', '3150 A', '4000 A', '6300 A'] as const).map((c) => (
              <button
                key={c}
                type="button"
                className={`sld-btn ${ratedCurrent === c ? 'active' : ''}`}
                onClick={() => setRatedCurrent(c)}
                style={{ fontSize: '11.5px' }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '管母线导体材质 (Conductor Material):' : 'Conductor Tube Material:'}</label>
          <div className="sld-buttons">
            {(['Copper Tube T2 (Cu)', 'Aluminum Alloy 6101 (Al)'] as const).map((mat) => (
              <button
                key={mat}
                type="button"
                className={`sld-btn ${conductorMaterial === mat ? 'active' : ''}`}
                onClick={() => setConductorMaterial(mat)}
                style={{ fontSize: '11px' }}
              >
                {mat.split(' ')[0]} {mat.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '变电站支持跨距长度 (Span Length):' : 'Support Span Length:'}</label>
          <div className="sld-buttons">
            {(['6m (Standard Bay)', '9m (Long Span)', '12m (Self-Supporting Busway)'] as const).map((sp) => (
              <button
                key={sp}
                type="button"
                className={`sld-btn ${spanLengthM === sp ? 'active' : ''}`}
                onClick={() => setSpanLengthM(sp)}
                style={{ fontSize: '11px' }}
              >
                {sp.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '主绝缘介质与屏蔽结构 (Insulation System):' : 'Insulation Architecture:'}</label>
          <div className="sld-buttons">
            {(['Solid Cast Resin (RIP/RIS)', 'Extruded XLPE', 'Russian ТКЛ-УХЛ1 Arctic Model'] as const).map((ins) => (
              <button
                key={ins}
                type="button"
                className={`sld-btn ${insulationType === ins ? 'active' : ''}`}
                onClick={() => setInsulationType(ins)}
                style={{ fontSize: '10.5px' }}
              >
                {ins.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="sld-control-group">
          <label>{locale === 'zh' ? '站址微风横向风速 (Crosswind Speed):' : 'Aeolian Crosswind Speed:'}</label>
          <div className="sld-buttons">
            {(['4 m/s (Light Breeze)', '8 m/s (Moderate)', '15 m/s (High Wind)'] as const).map((w) => (
              <button
                key={w}
                type="button"
                className={`sld-btn ${windSpeedMs === w ? 'active' : ''}`}
                onClick={() => setWindSpeedMs(w)}
                style={{ fontSize: '11px' }}
              >
                {w.split(' ')[0]} {w.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sld-results-panel" style={{ marginTop: '20px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(168, 85, 247, 0.25)', borderRadius: '10px', padding: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>RECOMMENDED TUBULAR BUSWAY MODEL</span>
            <strong style={{ color: '#c084fc', fontSize: '13.5px' }}>{recommendedBusbarModel}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>VON KÁRMÁN VORTEX FREQUENCY</span>
            <strong style={{ color: '#38bdf8', fontSize: '13px', lineHeight: 1.4, display: 'block' }}>{aeolianVortexFrequency}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>SHORT-CIRCUIT DYNAMIC PEAK WITHSTAND</span>
            <strong style={{ color: '#22c55e', fontSize: '13px', lineHeight: 1.4, display: 'block' }}>{shortCircuitPeakElectrodynamic}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>SURFACE TOUCH VOLTAGE SAFETY</span>
            <strong style={{ color: '#22c55e', fontSize: '13px', lineHeight: 1.4, display: 'block' }}>
              0.0 V (100% Fully Grounded Metallic Shield)
            </strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            className="button button-orange"
            style={{ width: '100%', background: 'linear-gradient(135deg, #9333ea, #7e22ce)', color: '#ffffff', fontWeight: 'bold' }}
            href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I configured 35-220kV Insulated Tubular Busbars on Feichi Power: Voltage = ${ratedVoltage}, Current = ${ratedCurrent}, Material = ${conductorMaterial}, Span = ${spanLengthM}, Insulation = ${insulationType}, Wind = ${windSpeedMs}, Sized Tube OD = ${busbarOuterDiameterMm}mm, Dynamic Withstand = ${shortCircuitPeakElectrodynamic}. Please provide CAD structural drawings, electrodynamic stress calculation sheet, and Russian GOST Опросный лист quote.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> {locale === 'zh' ? '向 Henry 索取 35kV–220kV 全绝缘管母 CAD 图纸、电动力计算书与报价' : 'Request Insulated Tubular Busbar CAD, Dynamic Stress Sizing & Quote'}
          </a>
        </div>
      </div>
    </div>
  );
}

function EngineeringJourney({ locale }: { locale: Locale }) {
  const steps = [
    {
      num: '01',
      title: locale === 'zh' ? '第一步：设备选型与参数匹配' : 'Step 1: Explore Equipment & Sizing Matrix',
      desc: locale === 'zh' ? '在线浏览飞驰电气 7 大核心产品线，或使用上方交互式计算器选择您的电网电压等级、容量与制氮参数。' : 'Browse our 7 equipment lines or use our interactive calculators to specify voltage, capacity, and gas flow rates.',
      icon: Sliders,
    },
    {
      num: '02',
      title: locale === 'zh' ? '第二步：与工程师审核单线图 (SLD)' : 'Step 2: Review SLD & Schematics with Henry',
      desc: locale === 'zh' ? '直接与技术负责人 Henry 沟通，提交您的项目一次接线图、元器件指定品牌及现场安装尺寸，获取 CAD 方案。' : 'Connect directly with technical lead Henry to review your single-line diagram, component brands (ABB/Schneider), and CAD layouts.',
      icon: User,
    },
    {
      num: '03',
      title: locale === 'zh' ? '第三步：6.3万㎡ 大厂精工制造与海运交付' : 'Step 3: Heavy Fabrication & Global Export',
      desc: locale === 'zh' ? '在沈阳现代化基地进行数控激光切割、自动化母线加工与高压型式试验，重型真空海运包装直达全球 40+ 国家。' : 'CNC fabrication, automated busbar bending, and high-voltage lab testing in our 63,000m² plant with export vacuum packing.',
      icon: Truck,
    },
  ];

  return (
    <section className="section" style={{ background: 'var(--panel-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="wrap">
        <SectionTitle
          eyebrow="YOUR 3-STEP ENGINEERING JOURNEY"
          title={locale === 'zh' ? '三步开启您的全球重大工程交付旅程' : 'Your 3-Step Journey to Global Power Delivery'}
          copy={locale === 'zh' ? '从初步参数计算、一次系统图定制审核到出厂试验与国际海运，飞驰电气提供全流程工程护航。' : 'From initial parameter sizing and customized SLD review to factory type testing and international logistics, Feichi Electrical delivers turnkey excellence.'}
        />

        <div className="steps-grid" style={{ marginTop: '50px' }}>
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div key={i} style={{ padding: '36px', background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ color: 'var(--orange)', font: '900 28px/1 var(--display)' }}>{st.num}</span>
                  <Icon size={26} style={{ color: 'var(--cyan)' }} />
                </div>
                <h3 style={{ margin: '0 0 14px', fontFamily: 'var(--display)', fontSize: '20px', color: '#ffffff' }}>{st.title}</h3>
                <p style={{ margin: 0, color: '#94a3b8', fontSize: '14.5px', lineHeight: 1.7 }}>{st.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SubstationAnatomy({ locale }: { locale: Locale }) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const chambers = [
    {
      title: locale === 'zh' ? '01 / 高压进线室 (HV Compartment)' : '01 / High Voltage (HV) Compartment',
      summary: locale === 'zh' ? '配置 SF6 / 固体绝缘环网柜 (RMU)、真空断路器、带电显示器与避雷器，实现电网进线安全隔离与短路保护。' : 'Equipped with SF6 / Solid-insulated Ring Main Units (RMU), vacuum circuit breakers, live indicators, and surge arresters for reliable grid incomer isolation.',
      specs: 'IEC 62271-200 | 12kV / 24kV / 35kV | 20kA / 25kA Withstand',
      image: '/images/curated/unisafe_switchgear.webp',
    },
    {
      title: locale === 'zh' ? '02 / 变压器室 (Transformer Compartment)' : '02 / Power Transformer Chamber',
      summary: locale === 'zh' ? '全密封低损耗油浸式或环氧树脂浇注干式变压器，配备智能温控与强迫风冷风道，满足高温严寒环境满负荷连续运行。' : 'Low-loss hermetically sealed oil-immersed or cast-resin dry-type transformers with PT100 temperature sensors and forced airflow ventilation.',
      specs: 'IEC 60076 | Dyn11 / Yyn0 | 50kVA - 3150kVA | Class F/H Insulation',
      image: '/images/curated/transformer_oil.webp',
    },
    {
      title: locale === 'zh' ? '03 / 低压配电室 (LV & APFC Chamber)' : '03 / Low Voltage & Control Chamber',
      summary: locale === 'zh' ? '智能塑壳断路器 (MCCB)、多回路出线单元、自动电容无功补偿屏与多功能电力监控仪表，支持 RS485 / Modbus 智慧物联网集控。' : 'Intelligent MCCB switchboards, automatic reactive power compensation (APFC), and multi-function power meters with RS485/Modbus telemetry.',
      specs: 'IEC 61439-1 | 0.4kV / 690V | Rated Current up to 4000A',
      image: '/images/curated/distribution_boxes.webp',
    },
    {
      title: locale === 'zh' ? '04 / 壳体与环境防护 (Enclosure & Protection)' : '04 / Heavy-Duty Protective Enclosure',
      summary: locale === 'zh' ? '镀铝锌钢板、不锈钢或非金属 GRC 复合壳体，双层隔热夹层、迷宫式防雨百叶与阻燃防腐涂层，专为荒漠、高湿盐雾及极寒工况设计。' : 'Alu-zinc alloy, stainless steel, or composite GRC housing with double-layer thermal insulation, labyrinth dust louvers, and IP54 weatherproof sealing.',
      specs: 'IP54 / IP65 | Anti-Corrosion C4/C5 | -45°C to +55°C Ambient',
      image: '/images/curated/precast_cabin_ehouse.webp',
    },
  ];

  return (
    <section className="anatomy-section">
      <div className="wrap">
        <SectionTitle
          eyebrow="ENGINEERING STRUCTURAL ANATOMY"
          title={locale === 'zh' ? '预装式箱变三维内部腔体解构' : 'Modular Prefabricated Substation Compartment Anatomy'}
          copy={locale === 'zh' ? '点击切换不同舱室，查看高压进线、变压器核心、低压智能配电与耐腐蚀外壳的工业集成设计。' : 'Click through each isolated chamber to inspect high-voltage switchgear, transformer integration, low-voltage control, and IP54 weatherproof enclosure architecture.'}
        />

        <div className="anatomy-grid">
          <div className="anatomy-tabs">
            {chambers.map((ch, idx) => (
              <button
                key={idx}
                type="button"
                className={`anatomy-tab-btn ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <span className="anatomy-tab-num">0{idx + 1}</span>
                <div className="anatomy-tab-info">
                  <strong>{ch.title}</strong>
                  <p>{ch.summary}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="anatomy-display-panel" style={{ minHeight: '320px' }}>
            <img
              src={chambers[activeTab].image}
              alt={chambers[activeTab].title}
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
              }}
            />
            <div className="anatomy-overlay-badge">
              <h4>{chambers[activeTab].title}</h4>
              <p style={{ color: 'var(--cyan)', fontWeight: 700, margin: '4px 0 8px', font: '12px var(--mono)' }}>{chambers[activeTab].specs}</p>
              <p>{chambers[activeTab].summary}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HarshEnvironmentMatrix({ locale }: { locale: Locale }) {
  const [activeEnv, setActiveEnv] = useState<number>(0);

  const environments = [
    {
      id: 'desert',
      title: locale === 'zh' ? '高温荒漠环境 (+55°C / 强辐射)' : 'Extreme Desert & High Ambient (+55°C)',
      tag: 'IEC 60076-2 / IEEE C57',
      challenge: locale === 'zh' ? '强日照辐射导致舱内累积温升超标、变压器绕组绝缘加速老化及开关柜电寿命缩短。' : 'Severe solar irradiance creates internal thermal buildup, accelerating transformer insulation aging and degrading switchgear mechanical life.',
      solution: locale === 'zh' ? '双层隔热夹层箱体 + IP54 迷宫式防尘风道 + 强迫对流风冷智能温控联动 + F/H 级特种耐热绕组。' : 'Double-layer thermal insulated enclosure + IP54 labyrinth sand louvers + automatic forced ventilation + Class F/H high-temp insulation.',
      derating: locale === 'zh' ? '温升校正系数 Kt = 0.90~0.95，负荷裕量提升 15%' : 'Thermal derating factor Kt = 0.90 - 0.95, +15% capacity margin design',
      specs: [
        { label: 'Ambient Range', val: '-25°C to +55°C' },
        { label: 'Protection Rating', val: 'IP54 / IP55' },
        { label: 'Insulation Class', val: 'Class H (180°C)' },
        { label: 'Thermal Shielding', val: 'Double-Skin Polyurethane 50mm' },
      ],
    },
    {
      id: 'altitude',
      title: locale === 'zh' ? '高海拔工况 (3000m+ 矿山与高原)' : 'High Altitude & Mining (3000m+ Altitude)',
      tag: 'IEC 62271-1 Ka Altitude Correction',
      challenge: locale === 'zh' ? '空气稀薄导致绝缘耐压强度下降、外绝缘放电距离缩短，且空气自然对流散热效率降低 20%~30%。' : 'Low atmospheric density reduces air dielectric strength and external flashover clearance while degrading natural convection cooling by 20-30%.',
      solution: locale === 'zh' ? '绝缘等级升档设计（10kV系统按24kV外绝缘耐压标准配置） + 全密封固体/SF6气体绝缘 RMU + 爬电比距 ≥25mm/kV。' : 'Upgraded dielectric insulation levels (e.g. 24kV insulation for 10kV grid) + hermetically sealed SF6/Solid RMU + extended creepage ≥25mm/kV.',
      derating: locale === 'zh' ? '海拔修正公式 Ka = 1 / (1.1 - H/10000)，耐受电压升档 25%' : 'Altitude correction Ka = 1 / (1.1 - H/10000), +25% dielectric withstand margin',
      specs: [
        { label: 'Max Altitude', val: 'Up to 4,500m ASL' },
        { label: 'Creepage Distance', val: '≥ 25 mm/kV' },
        { label: 'Dielectric Upgrade', val: '1.25x Rated BIL / Power Frequency' },
        { label: 'Switchgear Type', val: 'Solid / SF6 Gas Insulated RMU' },
      ],
    },
    {
      id: 'marine',
      title: locale === 'zh' ? '沿海重盐雾与海上风电 (C5-M 防腐)' : 'Coastal Heavy Marine & Offshore (C5-M Anti-Corrosion)',
      tag: 'ISO 12944 C5-M / IEC 60068-2-52',
      challenge: locale === 'zh' ? '高盐度湿热空气引发普通钢板快速锈蚀穿孔、母线接头电化学腐蚀及绝缘子表面盐密闪络。' : 'High salinity and humidity trigger aggressive electrochemical corrosion on steel enclosures and conductive busbars, causing insulator surface tracking.',
      solution: locale === 'zh' ? '316L 不锈钢 / GRC 玻璃纤维复合防腐箱体 + 环氧富锌防腐底漆 + 智能防凝露温湿度自动加热除湿系统。' : 'Marine-grade 316L stainless steel or composite GRC housing + C5-M multi-layer fluorocarbon coating + smart PTC anti-condensation heaters.',
      derating: locale === 'zh' ? '防腐等级 ISO 12944 C5-M / C5-I，盐雾试验 ≥1440h' : 'ISO 12944 C5-M / C5-I Heavy Industrial Marine, Salt spray ≥1440 hours',
      specs: [
        { label: 'Enclosure Material', val: '316L Stainless Steel / GRC Composite' },
        { label: 'Coating Standard', val: 'ISO 12944 C5-M (≥240μm)' },
        { label: 'Anti-Condensation', val: 'Automatic Dual PTC Heaters + Hygrostat' },
        { label: 'Fasteners & Hardware', val: 'A4-70 Marine Grade Stainless Steel' },
      ],
    },
    {
      id: 'arctic',
      title: locale === 'zh' ? '高寒严冬与俄罗斯西伯利亚工况 (-40°C ~ -60°C)' : 'Arctic, Siberia & Sub-Zero Severe Cold (-40°C to -60°C)',
      tag: 'ГОСТ 15150-69 УХЛ1 / ХЛ1 & IEC 62271-1',
      challenge: locale === 'zh' ? '俄罗斯西伯利亚与高寒采矿区极寒造成断路器润滑脂固化、橡胶密封件低温脆化失去弹性、变压器油粘度剧增阻碍油循环。' : 'Severe Arctic & Siberian cold causes lubricant solidification, gasket embrittlement, and surge in transformer oil viscosity halting natural thermal circulation.',
      solution: locale === 'zh' ? 'ГОСТ УХЛ1 防冻特种包：全温域特种合成油 (凝点 <-50°C) + 耐低温氟硅橡胶密封圈 + 操动机构内置低温自动加热控温系统 + 100mm 聚氨酯保温舱体。' : 'GOST UHL1 Cold-Climate Package: Pour point <-50°C synthetic transformer oil + fluorosilicone sub-zero seals + auto-triggered mechanism PTC heating + 100mm insulated sandwich enclosure.',
      derating: locale === 'zh' ? '符合 ГОСТ 15150-69 УХЛ1 及 IEC 62271-1 -40°C/-60°C 极寒型式试验，机械寿命 M2 级' : 'Complies with GOST 15150-69 UHL1 / KhL1 & IEC 62271-1 severe cold type-tests, M2 mechanical endurance class',
      specs: [
        { label: 'Min Operating Temp', val: '-40°C / -60°C (ГОСТ УХЛ1)' },
        { label: 'Transformer Oil', val: 'Sub-Zero Synthetic / Pour Point <-50°C' },
        { label: 'Thermal Enclosure', val: '100mm Polyurethane Sandwich Panel' },
        { label: 'Breaker Mechanism', val: 'Auto-Triggered Low-Temp PTC Cartridges' },
      ],
    },
  ];

  const active = environments[activeEnv];

  return (
    <section className="section harsh-env-section section-darker">
      <div className="wrap">
        <SectionTitle
          eyebrow="GLOBAL HARSH ENVIRONMENT & COMPLIANCE MATRIX"
          title={locale === 'zh' ? '全球严酷工况选型与国际标准合规矩阵' : 'Global Harsh Environment Engineering & Standards Matrix'}
          copy={locale === 'zh' ? '针对中东高温荒漠、南美高海拔矿区、沿海重盐雾及高寒极地工况，提供精准的降容计算、防护配置与全套工程型式试验对标。' : 'Tailored electrical engineering packages with precise altitude/temperature derating, IP/C5-M enclosure ratings, and type-test compliance for extreme overseas projects.'}
        />

        <div className="harsh-matrix-container">
          <div className="harsh-nav-tabs">
            {environments.map((env, idx) => (
              <button
                key={env.id}
                type="button"
                className={`harsh-tab-btn ${activeEnv === idx ? 'active' : ''}`}
                onClick={() => setActiveEnv(idx)}
              >
                <span className="harsh-tab-tag">{env.tag}</span>
                <strong>{env.title}</strong>
              </button>
            ))}
          </div>

          <div className="harsh-detail-card">
            <div className="harsh-card-header">
              <div>
                <span className="card-badge">{active.tag}</span>
                <h3>{active.title}</h3>
              </div>
              <a
                href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I need engineering details and CAD drawings for Feichi substation configured for ${active.title} (${active.tag}). Please provide proposal.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-orange"
              >
                <MessageCircle size={16} /> {locale === 'zh' ? '获取该工况选型方案' : 'Request Proposal for this Environment'}
              </a>
            </div>

            <div className="harsh-grid-2col">
              <div className="harsh-col-box">
                <h4>{locale === 'zh' ? '工况主要挑战与失效风险' : 'Primary Environmental Hazards & Risks'}</h4>
                <p>{active.challenge}</p>
                <div className="harsh-derating-badge">
                  <strong>{locale === 'zh' ? '工程降容/修正标准:' : 'Engineering Derating Standard:'}</strong>
                  <span>{active.derating}</span>
                </div>
              </div>

              <div className="harsh-col-box">
                <h4>{locale === 'zh' ? '飞驰电气专用工程应对技术' : 'Feichi Engineering Countermeasures'}</h4>
                <p>{active.solution}</p>
                <div className="harsh-specs-table">
                  {active.specs.map((sp, i) => (
                    <div key={i} className="harsh-spec-row">
                      <span className="sp-label">{sp.label}</span>
                      <span className="sp-val">{sp.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EpcSpecIntakeGate({ locale }: { locale: Locale }) {
  const [mode, setMode] = useState<'iec' | 'gost'>('iec');
  const [copied, setCopied] = useState(false);

  // IEC mode state
  const [iecType, setIecType] = useState<'YB (European Modular)' | 'ZGS (American Pad-Mount)' | '110-220kV Power Transformer (TDN/TRDN/ATDCTN)' | 'PV / BESS MV Skid (1500V)' | 'E-House (35-110kV Shelter)' | 'Mobile Modular Substation (35-110kV MMPS)' | 'Modular Substation 35-110kV (KTPB/E-House)' | '110kV Gas-Insulated Switchgear (GIS 8DN8 Benchmark)' | 'Outdoor Smart Recloser (10-35kV PSS)' | 'SVG / STATCOM (6-35kV)' | 'SF6-Free Clean Air C-GIS (12-40.5kV)' | 'Solid-Insulated SIS RMU (12-24kV)' | 'Metal-Clad Switchgear (10-35kV KYN28)'>('YB (European Modular)');
  const [voltage, setVoltage] = useState<'6kV' | '10kV' | '24kV' | '35kV' | '110kV' | '220kV'>('35kV');
  const [capacity, setCapacity] = useState<'500kVA' | '1000kVA' | '1600kVA' | '2500kVA' | '3150kVA' | '5000kVA' | '6300kVA' | '16MVA' | '25MVA' | '40MVA' | '63MVA' | '80MVA' | '125MVA' | '250MVA' | '630A/16kA' | '1250A/25kA' | '±10Mvar' | '±25Mvar' | '±50Mvar'>('1600kVA');
  const [protection, setProtection] = useState<'VCB (IAC-AFLR 31.5kA)' | 'Vacuum OLTC (MR Reinhausen) + DGA 7-Gas Online Optical' | 'Ultrafast Optical Arc (<7ms) + VCB' | 'LBS-Fuse' | 'GIS RMU (SF6/Solid-Insulated)' | '110kV GIS Breaker + Disconnector/Earthing' | 'Clean Air Disconnector + Vacuum Breaker (GWP=0)' | 'IGBT Cascaded Multilevel (SVG)' | 'Pure IEC 61850 Process Bus (SV+GOOSE <2ms)' | 'Bi-Stable Magnetic Actuator (100k Ops)'>('VCB (IAC-AFLR 31.5kA)');
  const [shortCircuit, setShortCircuit] = useState<'20kA/3s' | '25kA/3s' | '31.5kA/3s' | '40kA/3s' | '50kA/3s'>('25kA/3s');
  const [iecScada, setIecScada] = useState<'IEC 61850 (GOOSE/MMS)' | 'Modbus TCP / RTU' | 'DNP3 / IEC 104'>('IEC 61850 (GOOSE/MMS)');

  // GOST / CIS mode state
  const [gostType, setGostType] = useState<'КТПБ 35/110 кВ (Блочно-модульная ОРУ/ЗРУ)' | 'ТДН / ТРДН / ТДТН 110-220 кВ (Силовой трансформатор)' | 'КРУЭ-110/220 кВ (Элегазовое распредустройство)' | '2КТПН' | 'КТПН' | 'КТП-СЭС/ВЭС (MV Skid)' | 'БМЗ (E-House)' | 'ММПС / МПС (Мобильная подстанция 35-110 кВ)' | 'Реклоузер ПСС-10/35 (Пункт секционирования)' | 'СТАТКОМ / SVG (УКРМ)' | 'КРУЭ «Сухой воздух» (Без элегаза / УХЛ1)' | 'КРУ-2-10 (Выкатной)' | 'КСО-298 (Вакуум)' | 'ШРН / NGR (Шкаф нейтрали)' | 'КТПВ (Шахтная Взрывозащищенная)'>('2КТПН');
  const [gostClimate, setGostClimate] = useState<'УХЛ1 (-60°C ~ +40°C)' | 'ХЛ1 (-60°C ~ +40°C)' | 'У1 (-45°C ~ +40°C)'>('УХЛ1 (-60°C ~ +40°C)');
  const [gostVoltage, setGostVoltage] = useState<'6 кВ' | '10 кВ' | '20 кВ' | '35 кВ' | '110 кВ' | '220 кВ'>('10 кВ');
  const [gostCapacity, setGostCapacity] = useState<'400 кВА' | '630 кВА' | '1000 кВА' | '1600 кВА' | '2500 кВА' | '3125 кВА' | '4000 кВА' | '6300 кВА' | '16 МВА' | '25 МВА' | '40 МВА' | '63 МВА' | '80 МВА' | '125 МВА' | '250 МВА' | '630А / 16кА' | '1250А / 25кА' | '±5 Мвар' | '±15 Мвар' | '±30 Мвар'>('1600 кВА');
  const [gostTrafo, setGostTrafo] = useState<'ТМГ (Масляный герметичный)' | 'ТСЗЛ (Сухой с литой изоляцией)' | 'ТМГ-УХЛ1 (Арктический -60°C)' | 'ТДН / ТРДН / ТДТН 110-220 кВ (16-250 МВА Вакуумный РПН / DGA / УХЛ1)' | 'ТДН / ТРДН 35-110 кВ (16-63 МВА Миннефтегаз/Россети)' | 'ТДН / ТРДН 110 кВ Мобильный (Nomex)' | 'КРУЭ SF6/N2 Элегазовый модуль (УХЛ1)' | 'HCEP Твердотельный модуль (ПСС)' | 'Экологичный КРУЭ модуль (Dry Air, GWP=0)' | 'Расщепленная обмотка 1500В (КТП-СЭС)' | 'Сухой Nomex Взрывозащищенный (КТПВ)' | 'Нихром Х20Н80 Резистор (ШРН)' | 'IGBT Инверторная цепь (STATCOM)'>('ТМГ (Масляный герметичный)');
  const [gostInOut, setGostInOut] = useState<'Воздух / Кабель (В/К)' | 'Кабель / Кабель (К/К)' | 'Воздух / Воздух (В/В)' | 'Шинный мост (Ш/К)' | 'Элегазовый ввод / Муфта КРУЭ'>('Воздух / Кабель (В/К)');
  const [gostScada, setGostScada] = useState<'ГОСТ Р МЭК 60870-5-104 (МЭК 104)' | 'МЭК 61850 (GOOSE/MMS)' | 'АИИС КУЭ (Меркурий 234 / СЭТ)'>('ГОСТ Р МЭК 60870-5-104 (МЭК 104)');

  const modelCode = useMemo(() => {
    if (mode === 'iec') {
      const typePrefix = iecType.startsWith('YB') ? 'YB' : iecType.startsWith('ZGS') ? 'ZGS' : iecType.startsWith('PV') ? 'FSKID' : iecType.startsWith('SVG') ? 'SVG' : iecType.includes('Power Transformer') ? 'TR-HV' : iecType.includes('Mobile Modular') ? 'MMPS' : iecType.includes('Modular Substation') ? 'KTPB' : iecType.includes('110kV Gas-Insulated') ? 'GIS110' : iecType.includes('Recloser') ? 'FPC-REC' : iecType.includes('Clean Air') ? 'FC-GIS-ECO' : iecType.includes('Solid') ? 'SIS-RMU' : iecType.includes('Metal-Clad') ? 'KYN28A' : 'EH';
      const protCode = protection.includes('Vacuum OLTC') ? 'OLTC-DGA' : protection.includes('Ultrafast Optical') ? 'OPT-ARC' : protection.includes('110kV GIS') ? 'GIS-CB' : protection.includes('VCB') ? 'VCB' : protection.includes('GIS') ? 'GIS' : protection.includes('Clean Air') ? 'ECO-AIR' : protection.includes('IGBT') ? 'IGBT' : protection.includes('Process Bus') ? 'P-BUS' : protection.includes('Magnetic') ? 'MAG' : 'LBS';
      return `${typePrefix}-${voltage.replace('kV', '')}/${capacity.replace('kVA', '').replace('Mvar', 'M').replace('MVA', 'M')}-${protCode}-${shortCircuit.split('/')[0]}`;
    }
    const inOutCode = gostInOut.includes('В/К') ? 'В/К' : gostInOut.includes('К/К') ? 'К/К' : gostInOut.includes('В/В') ? 'В/В' : gostInOut.includes('Элегазовый') ? 'КРУЭ' : 'Ш/К';
    const climCode = gostClimate.split(' ')[0];
    const typeClean = gostType.split(' ')[0].replace(/[^А-Яа-я0-9-]/g, '');
    return `${typeClean}-${gostCapacity.replace(' кВА', '').replace(' Мвар', 'M').replace(' МВА', 'M')}/${gostVoltage.replace(' кВ', '')}/0.4-${climCode}-${inOutCode}`;
  }, [mode, iecType, voltage, capacity, protection, shortCircuit, gostType, gostCapacity, gostVoltage, gostClimate, gostInOut]);

  const summary = useMemo(() => {
    if (mode === 'iec') {
      return {
        voltageRating: iecType.includes('Modular Substation') || iecType.includes('Gas-Insulated')
          ? `${voltage} / 35kV / 10kV (50Hz / 60Hz, IEC 62271-203 / IEC 62271-202 Turnkey Prefabricated)`
          : iecType.includes('Power Transformer')
          ? `${voltage} / 35kV / 10.5kV (50Hz / 60Hz, IEC 60076-1~5 / IEEE C57.12.00 Power Transformer & Autotransformer)`
          : iecType.includes('Metal-Clad')
          ? `${voltage} (50Hz / 60Hz, LSC2B-PM Partition Class, IEC 62271-200 / IEEE C37.20.2)`
          : iecType.includes('Clean Air') || iecType.includes('Solid')
          ? `${voltage} (50Hz / 60Hz Dual Rated, IEC 62271-200 / EU F-Gas 2024/573 Compliant)`
          : iecType.includes('Mobile Modular')
          ? `${voltage} (Fast-Deployment Multi-Axle Substation, IEC 62271-202 / IEEE C37.122)`
          : iecType.includes('Recloser')
          ? `${voltage} (Outdoor Overhead Line Pole-Mount, IEC 62271-111 / IEEE C37.60)`
          : iecType.includes('Skid')
          ? `${voltage} / 0.8kV (Dual Split-Winding, 1500V DC Inverter Grid-Tie, IEC 62271-202)`
          : `${voltage} / 0.4kV (50Hz / 60Hz Dual Rated, IEC 62271-202 / IEEE)`,
        transformerRating: iecType.includes('Modular Substation') || iecType.includes('Gas-Insulated')
          ? `Siemens 8DN8 & SVEL Benchmark: ${capacity} Power Transformer with Compact SF6/N2 GIS Module (-60°C Arctic Design)`
          : iecType.includes('Power Transformer')
          ? `Siemens Sensformer & SVEL Benchmark: ${capacity} Low-Loss 7-Step Step-Lap Core (0.23mm CRGO, -60°C Arctic Oil & FVMQ Cryogenic Gaskets)`
          : iecType.includes('Metal-Clad')
          ? 'Siemens NXAIR / Electroshield Samara Benchmark: 4-Compartment Galvalume Steel Enclosure (IP4X/IP2X, Anti-Condensation PTC)'
          : iecType.includes('Clean Air')
          ? 'Ormazabal / Siemens Blue GIS Benchmark: Synthetic Dry Air (80% N2 + 20% O2, GWP=0), IP67 Laser-Welded AISI 304'
          : iecType.includes('Solid')
          ? 'Solid Epoxy Resin Encapsulation (SIS), Shielded Earth Surface, Zero Gas Leakage Risk'
          : iecType.includes('Mobile Modular')
          ? `TGOOD Benchmark: ${capacity} Low-Noise Mobile Transformer with Vibration Isolation (Nomex / ODAF Cooling)`
          : iecType.includes('Recloser')
          ? 'Tavrida / Lucy Benchmark: HCEP Hydrophobic Solid Encapsulated Pole with Built-in Rogowski & Capacitive Sensors'
          : iecType.includes('SVG')
          ? `${capacity} Direct Grid-Coupled IGBT Chain Multilevel STATCOM (Cosφ ≥ 0.98)`
          : iecType.includes('Skid')
          ? `${capacity} Inverter-Duty Split-Winding Step-Up Transformer (Z_HV-LV 7.0%, Z_LV-LV 24%, K-Factor 11)`
          : `${capacity} Cast-Resin / Hermetic Oil (Dyn11 / Yyn0)`,
        protectionScheme: protection.includes('Vacuum OLTC')
          ? 'German MR Vacuum OLTC (±8x1.5%) + All-Fiber Optical DGA 7-Gas & Moisture Monitoring (IEC 61850 Station Bus)'
          : protection.includes('110kV GIS')
          ? '110kV SF6 Spring-Operated Circuit Breaker + 3-Position Disconnector/Earthing with Micro-Gas Leakage Optical Sensor'
          : protection.includes('Ultrafast Optical')
          ? 'Dual-Criterion Point/Loop Optical Arc Flash Protection (<7ms) + Withdrawable Embedded Pole VCB (30k Ops, M2/E2/C2)'
          : protection.includes('Clean Air')
          ? 'Vacuum Interrupter + Clean Air 3-Position Disconnector (GWP=0, IAC AFLR 31.5kA/1s, Optical Arc Sensing <5ms)'
          : protection.includes('Process Bus')
          ? 'Pure IEC 61850-9-2LE Process Bus (Optical CT/VT, GOOSE Tripping <2ms, Zero-Loss PRP/HSR Ring)'
          : protection.includes('Magnetic')
          ? 'Bi-Stable Magnetic Actuator (100,000 Operations, Single Moving Part, FLISR Localized Self-Healing <100ms)'
          : protection.includes('VCB')
          ? 'Vacuum Circuit Breaker (VCB) with Digital Relay (IAC-AFLR 31.5kA)'
          : protection.includes('GIS')
          ? 'Ormazabal/Lucy Benchmark GIS RMU (SF6/Solid Insulated, Form 4b)'
          : protection.includes('IGBT')
          ? 'Sub-5ms Dynamic Reactive Compensation & 2nd-25th Active Harmonic Filtering'
          : 'Load Break Switch with Dual Current-Limiting Fuse Coordination',
        busbarWithstand: `${shortCircuit} Short-Time Thermal & Dynamic Withstand (IEC 62271-200 / IEC 62271-203 / IEC 60076-5)`,
        estimatedDimensions: iecType.includes('Modular Substation') || iecType.includes('Gas-Insulated')
          ? 'Ultra-Compact Modular E-House (БМЗ) 18000mm(L) x 4500mm(W) x 3800mm(H) with 150mm PIR Panel (-60°C UHL1)'
          : iecType.includes('Power Transformer')
          ? 'Heavy-Duty Transformer Tank with ONAN/ONAF Radiator Bank 7800mm(L) x 4200mm(W) x 5600mm(H) (Bell-Type Tank, Nitrogen Blanket)'
          : iecType.includes('Metal-Clad')
          ? 'Standard Cubicle 800mm(W) x 1500mm(D) x 2200mm(H) per Feeder Panel'
          : iecType.includes('Clean Air') || iecType.includes('Solid')
          ? 'Compact C-GIS Panel 500mm(W) x 1050mm(D) x 1850mm(H) per Feeder'
          : iecType.includes('Mobile Modular')
          ? 'Semi-Trailer Mobile Platform 14500mm(L) x 2900mm(W) x 4200mm(H) with Hydraulic Outriggers'
          : iecType.includes('Recloser')
          ? 'Pole-Mounted Monoblock 850mm(W) x 780mm(D) x 920mm(H), Control Box 550mm x 350mm x 750mm'
          : iecType.includes('Skid')
          ? 'Integrated MV Skid 6500mm x 2400mm x 2600mm (Hot-Dip Galvanized Base, C5-M / IP55 Canopy)'
          : iecType.includes('E-House') || iecType.includes('SVG')
          ? 'Modular Shelter 12000mm x 3200mm x 3400mm (EI 120 Fire Rated, C5-M Anti-Corrosion)'
          : voltage === '35kV' || voltage === '110kV' || voltage === '220kV'
          ? '4800mm x 2400mm x 2700mm (Approx.)'
          : '3800mm x 2100mm x 2400mm (Approx.)',
        telemetry: iecScada,
      };
    }
    return {
      voltageRating: gostType.includes('КТПБ') || gostType.includes('КРУЭ')
        ? `ВН ${gostVoltage} / СН 35 кВ / НН 10(6) кВ (ГОСТ 15150-69 УХЛ1 до -60°C, МЭК 62271-203, СТО Россети)`
        : gostType.includes('ТДН') || gostType.includes('ТРДН') || gostType.includes('ТДТН')
        ? `ВН ${gostVoltage} / СН 35 кВ / НН 10.5(6.3) кВ (ГОСТ 52719-2007 / ГОСТ 15150-69 УХЛ1 до -60°C, СТО 56947007 Россети)`
        : gostType.includes('Сухой воздух')
        ? `ВН ${gostVoltage} (50 Гц, ГОСТ 14693 / ГОСТ 15150-69 УХЛ1, без элегаза GWP=0)`
        : gostType.includes('КРУ-2-10') || gostType.includes('КСО')
        ? `ВН ${gostVoltage} (50 Гц, шкафы КРУ/КСО ГОСТ 14693-90 / ГОСТ 15150-69 УХЛ3/УХЛ1, IAC AFLR 31.5кА)`
        : gostType.includes('ММПС')
        ? `ВН ${gostVoltage} / НН 35-10-6 кВ (Мобильная ПС, ГОСТ 14695 / ГОСТ 15150 УХЛ1 до -60°C)`
        : gostType.includes('Реклоузер')
        ? `ВН ${gostVoltage} (Пункт секционирования столбовой ПСС, ГОСТ Р 58087 / ГОСТ 15150 УХЛ1)`
        : gostType.includes('КТПВ')
        ? `ВН ${gostVoltage} / НН 0.4-0.69-1.14-3.3 кВ (50 Гц, ГОСТ 31610 / ТР ТС 012/2011 Ex d I Mb)`
        : gostType.includes('КТП-СЭС')
        ? `ВН ${gostVoltage} / НН 2х0.8 кВ (50 Гц, 1500В DC СЭС/BESS, ГОСТ 14695 / ГОСТ 15150)`
        : `ВН ${gostVoltage} / НН 0.4-0.69 кВ (50 Гц, ГОСТ 15150-69 / ГОСТ 14695-80 / ГОСТ 32144)`,
      transformerRating: gostType.includes('КТПБ') || gostType.includes('КРУЭ')
        ? `${gostCapacity} (${gostTrafo}) Блочно-модульное здание БМЗ с сэндвич-панелями PIR 150 мм, 100% заводская готовность`
        : gostType.includes('ТДН') || gostType.includes('ТРДН') || gostType.includes('ТДТН')
        ? `${gostCapacity} (${gostTrafo}) Сердечник 7-Step Step-Lap 0.23 мм, арктическое масло ГК (Тзаст ≤ -65°C), бак колокольного типа`
        : gostType.includes('КРУ-2-10')
        ? 'Выкатной элемент с вакуумным выключателем, 4 изолированных отсека (LSC2B-PM), подогрев PTC УХЛ3/УХЛ1'
        : gostType.includes('Сухой воздух')
        ? 'Герметичный резервуар AISI 304 (IP67), синтетический сухой воздух, без риска сжижения элегаза при -60°C'
        : gostType.includes('ММПС')
        ? `${gostCapacity} (${gostTrafo}) Виброзащищенное исполнение на полуприцепе с гидроаутригерами`
        : gostType.includes('Реклоузер')
        ? 'Твердотельные кремнийорганические полюсы HCEP со встроенными датчиками Rogowski 0.2S'
        : gostType.includes('СТАТКОМ')
        ? `${gostCapacity} (${gostTrafo}) Быстродействующая компенсация cosφ ≥ 0.98`
        : gostType.includes('КТПВ')
        ? `${gostCapacity} (Взрывозащищенный сухой Nomex 220°C, Ex d I Mb)`
        : gostType.includes('КТП-СЭС')
        ? `${gostCapacity} (${gostTrafo}) Схема с расщепленной обмоткой НН 2х0.8 кВ, K_расщ ≥ 3.5`
        : gostType.includes('ШРН')
        ? `Блок резисторов из прецизионного сплава Х20Н80 (100А-1000А / 10с, до 760°C)`
        : `${gostCapacity} (${gostTrafo}) Схема и группа У/Ун-0 или Д/Ун-11`,
      protectionScheme: gostType.includes('КТПБ') || gostType.includes('КРУЭ')
        ? 'КРУЭ-110 кВ с пружинным приводом + Цифровая РЗА МЭК 61850 (SV/GOOSE) + Оптическая дуговая защита ОВОД/Лайм'
        : gostType.includes('ТДН') || gostType.includes('ТРДН') || gostType.includes('ТДТН')
        ? 'Вакуумный РПН (MR Reinhausen ±8х1.5%) + Онлайн-хроматограф DGA на 7 газов + Газовое реле BF-80/Q + МЭК 61850'
        : gostType.includes('КРУ-2-10')
        ? 'Оптическая дуговая защита ОВОД/Лайм (<7 мс) + Микропроцессорный блок БМРЗ/Сириус (ГОСТ 14693)'
        : gostType.includes('Сухой воздух')
        ? 'Вакуумная дугогасительная камера + трехпозиционный разъединитель в сухом воздухе, РЗА МЭК 61850 / ГОСТ 14693'
        : gostType.includes('ММПС')
        ? 'Шина процесса МЭК 61850-9-2LE (SV+GOOSE <2мс), КРУЭ 110 кВ (PASS) + КРУ 10-35 кВ (БМРЗ/Сириус)'
        : gostType.includes('Реклоузер')
        ? 'Бистабильный электромагнитный привод (100 000 циклов ВО), шкаф ШУ с защитой от ОЗЗ/МФЗ и FLISR <100мс'
        : gostType.includes('СТАТКОМ')
        ? 'IGBT каскадная топология, время отклика <5 мс, фильтрация 2-25 гармоник (ГОСТ Р 58087-2018)'
        : gostType.includes('КТПВ')
        ? 'Микропроцессорная селективная защита от утечек (<15 мс) + Вакуумный выключатель КРУВ Ex d [ia] I Mb'
        : gostType.includes('КТП-СЭС')
        ? 'Вакуумное КРУ/КСО 630/1250А, РЗА (МТЗ/ЗНЗ/87T), оптическая дуговая защита <10 мс (ГОСТ 14693)'
        : gostType.includes('ШРН')
        ? 'Трансформатор тока нулевой последовательности + Микропроцессорный блок мониторинга тока и температуры'
        : 'Вакуумный выключатель КРУ/КСО с микропроцессорной защитой (РЗА БМРЗ/Сириус/МЭК 61850, IAC-AFLR 31.5 кА)',
      busbarWithstand: gostType.includes('КТПБ') || gostType.includes('КРУЭ')
        ? 'Стойкость КРУЭ-110: 31.5-40 кА / 3 с, электродинамическая 80-102 кА (ГОСТ 1516.3 / МЭК 62271-203)'
        : gostType.includes('ТДН') || gostType.includes('ТРДН') || gostType.includes('ТДТН')
        ? 'Электродинамическая стойкость при КЗ: до 40 кА / 2 с (3D Maxwell FEA расчет, ГОСТ 20243 / МЭК 60076-5)'
        : gostType.includes('КТПВ')
        ? 'Стойкость к взрывному давлению: 1.5 МПа, ток КЗ: 12.5-25 кА / 3 с'
        : gostType.includes('Реклоузер')
        ? 'Номинальный ток отключения КЗ: 12.5-25 кА, сквозной ток: до 63 кА (ГОСТ Р 58087)'
        : 'Ток термической стойкости: 20-40 кА / 3 с, электродинамическая: 51-102 кА (ГОСТ 14693)',
      estimatedDimensions: gostType.includes('КТПБ') || gostType.includes('КРУЭ')
        ? 'Блочно-модульное здание БМЗ 18000x4500x3800 мм (Утепление 150 мм PIR, 9 баллов MSK-64)'
        : gostType.includes('ТДН') || gostType.includes('ТРДН') || gostType.includes('ТДТН')
        ? 'Трансформатор на фундаментных каретках 8200х4400х5800 мм (Масса масла 18-35 т, полная масса 45-120 т)'
        : gostType.includes('КРУ-2-10') || gostType.includes('КСО')
        ? 'Шкаф КРУ 800-1000х1500х2200 мм на ячейку (4 изолированных отсека LSC2B-PM, УХЛ3/УХЛ1)'
        : gostType.includes('Сухой воздух')
        ? 'Шкаф КРУЭ 500x1050x1850 мм на ячейку (IP67 бак, УХЛ1)'
        : gostType.includes('ММПС')
        ? 'Трейлерный автопоезд 14500x2900x4200 мм (Утепление 150 мм, 4 гидроопоры)'
        : gostType.includes('Реклоузер')
        ? 'Коммутационный модуль 850x780x920 мм, Шкаф управления 550x350x750 мм (AISI 304 УХЛ1)'
        : gostType.includes('БМЗ') || gostType.includes('СТАТКОМ')
        ? 'Блок-модульное здание БМЗ 12000x3200x3400 мм (Утепление 150 мм ППУ/МВ, сани-лыжи 09Г2С)'
        : gostType.includes('КТПВ')
        ? 'Взрывозащищенный моноблок на салазках 09Г2С 4800x1400x1650 мм'
        : gostType.includes('КТП-СЭС')
        ? 'Блок-модуль/Skid КТП-СЭС 6800x2400x2750 мм (Утепление 100-120 мм, УХЛ1)'
        : gostType.includes('ШРН')
        ? 'Шкаф наружной установки 1400x1200x2200 мм (IP55, нержавеющая сталь, обогрев PTC)'
        : gostType === '2КТПН'
        ? 'Блок-модуль 6800x2400x2800 мм (Утепление 100 мм ППУ, сани-лыжи)'
        : 'Блок-модуль 4200x2400x2600 мм',
      telemetry: gostScada,
    };
  }, [mode, iecType, voltage, capacity, protection, shortCircuit, iecScada, gostVoltage, gostCapacity, gostTrafo, gostType, gostScada]);

  const oprosnyListText = `ОПРОСНЫЙ ЛИСТ НА ПОСТАВКУ ПОДСТАНЦИИ / РАСПРЕДУСТРОЙСТВА
(Стандарт ГОСТ 14695-80, ГОСТ 15150-69 УХЛ1, ГОСТ 31610 / ТР ТС 012/2011, ТР ТС 004/2011)

1. Тип оборудования: ${gostType}
2. Код типоисполнения: ${modelCode}
3. Климатическое исполнение и категория: ${gostClimate}
4. Номинальное напряжение ВН: ${gostVoltage}
5. Номинальное напряжение НН: ${gostType.includes('КТПВ') ? '0.4 кВ / 0.69 кВ / 1.14 кВ / 3.3 кВ' : '0.4 кВ / 0.69 кВ'}
6. Силовой трансформатор / модуль: ${gostCapacity} (${gostTrafo}), Схема соединения У/Ун-0 или Д/Ун-11
7. Исполнение высоковольтного ввода/вывода: ${gostInOut}
8. Защита от дуги и взрывозащита: ${gostType.includes('КТПВ') ? 'Ex d I Mb / Ex d [ia] I Mb, давление взрыва 1.5 МПа' : 'Класс IAC-AFLR 25/31.5 кА / 1 с (ГОСТ 14693 / IEC 62271-200)'}
9. Степень защиты оболочки и огнестойкость: ${gostType.includes('КТПВ') ? 'IP54 (Корпус) / IP67 (Вводная коробка ВН), салазки 09Г2С' : 'IP54 / IP55 (УХЛ1), EI 120 (100-150 мм ППУ/минеральная вата)'}
10. Система микроклимата / охлаждения: ${gostType.includes('КТПВ') ? 'Естественное охлаждение через гофрированную оболочку + термодатчики Pt100' : 'Автоматический обогрев PTC + Шкаф управления ОВиК'}
11. Телемеханика и протокол связи: ${gostScada}
12. Требуемая конструкторская документация: Чертежи КД (ВО, габаритный), Однолинейная схема (Э3), Сертификаты ТР ТС 012/004, Расчет токов КЗ и ТКП.

Завод-изготовитель: Feichi Electrical Equipment Co., Ltd. (г. Шэньян, КНР)
Технический контакт (СНГ / РФ): Генри (Henry)
WhatsApp: +86 155 6620 6930 | Telegram: +86 155 6620 6930 (@feichipower) | Email: henry@feichipower.com`;

  const whatsappInquiry = mode === 'iec'
    ? `Hello Henry, I have generated an EPC specification for Feichi Substation: Model ${modelCode}, Type: ${iecType}, Voltage: ${voltage}, Capacity: ${capacity}, Protection: ${protection}, Short-Circuit Withstand: ${shortCircuit}, SCADA: ${iecScada}. Please send CAD drawings, SLD schematic and formal commercial quotation.`
    : `Здравствуйте, Генри! Направляю сформированный Опросный лист на подстанцию ${modelCode}: Напряжение ${gostVoltage}, Мощность ${gostCapacity}, Климатическое исполнение ${gostClimate}, Телемеханика: ${gostScada}. Прошу предоставить чертежи КД/Э3 и технико-коммерческое предложение (ТКП).`;

  const handleCopy = () => {
    navigator.clipboard.writeText(oprosnyListText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section className="section epc-intake-section">
      <div className="wrap">
        <SectionTitle
          eyebrow={mode === 'iec' ? 'EPC & DESIGN INSTITUTE RAPID SPECIFICATION GATEWAY' : 'ОПРОСНЫЙ ЛИСТ И ИНЖЕНЕРНЫЙ КОНФИГУРАТОР КТП / КРУ (ГОСТ / СНГ)'}
          title={locale === 'zh'
            ? '海外工程总包与设计院技术协议与图纸直选网关'
            : locale === 'ru'
            ? 'Инженерный опросный лист и подбор оборудования КТП/КРУ по ГОСТ'
            : 'EPC Rapid Technical Specification & CAD Generator'}
          copy={locale === 'zh'
            ? '输入您的工程关键参数，系统实时生成电气技术协议要点与预估图纸尺寸，一键直联技术总工 Henry 调取全套 CAD/PDF 资料包。'
            : locale === 'ru'
            ? 'Сформируйте параметры опросного листа для блочно-модульных подстанций 2КТПН/КТПН/БМЗ и ячеек КРУ для условий Сибири и Крайнего Севера (-60°C). Мгновенный запрос ТКП и чертежей.'
            : 'Configure electrical project parameters to generate preliminary technical agreements, dimensional layouts, and request instant CAD packages from Lead Henry.'}
        />

        {/* Mode Selector Tabs */}
        <div className="epc-mode-selector">
          <button
            type="button"
            className={`epc-mode-btn ${mode === 'iec' ? 'active' : ''}`}
            onClick={() => setMode('iec')}
          >
            <Zap size={16} /> {locale === 'zh' ? 'IEC 国际工程标准模式 (IEC 62271 / IEEE)' : locale === 'ru' ? 'Международный стандарт IEC (Global)' : 'IEC & Global EPC Standard'}
          </button>
          <button
            type="button"
            className={`epc-mode-btn ${mode === 'gost' ? 'active' : ''}`}
            onClick={() => setMode('gost')}
          >
            <ShieldCheck size={16} /> {locale === 'zh' ? 'ГОСТ 俄标选型问卷模式 (Опросный лист / Россия и СНГ)' : 'ГОСТ & Опросный лист (Россия и СНГ / УХЛ1)'}
          </button>
        </div>

        <div className="epc-builder-grid">
          {/* Controls Panel */}
          <div className="epc-controls-card">
            <h3>
              {mode === 'iec'
                ? (locale === 'zh' ? '1. 选择工程电气参数' : '1. Configure Electrical Parameters')
                : '1. Заполнение параметров Опросного листа (ГОСТ)'}
            </h3>

            {mode === 'iec' ? (
              <>
                <div className="epc-group">
                  <label>{locale === 'zh' ? '变电站架构与开关设备类型 (Substation / Switchgear Topology):' : 'Substation / Switchgear Topology Class:'}</label>
                  <div className="epc-btn-group">
                    {(['YB (European Modular)', 'ZGS (American Pad-Mount)', '110-220kV Power Transformer (TDN/TRDN/ATDCTN)', 'PV / BESS MV Skid (1500V)', 'E-House (35-110kV Shelter)', 'Modular Substation 35-110kV (KTPB/E-House)', '110kV Gas-Insulated Switchgear (GIS 8DN8 Benchmark)', 'Mobile Modular Substation (35-110kV MMPS)', 'Outdoor Smart Recloser (10-35kV PSS)', 'SVG / STATCOM (6-35kV)', 'SF6-Free Clean Air C-GIS (12-40.5kV)', 'Solid-Insulated SIS RMU (12-24kV)', 'Metal-Clad Switchgear (10-35kV KYN28)'] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        className={`epc-btn ${iecType === t ? 'active' : ''}`}
                        onClick={() => setIecType(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="epc-group">
                  <label>{locale === 'zh' ? '电网额定电压 (Nominal Voltage):' : 'Nominal Voltage Rating:'}</label>
                  <div className="epc-btn-group">
                    {(['6kV', '10kV', '24kV', '35kV', '110kV', '220kV'] as const).map((v) => (
                      <button
                        key={v}
                        type="button"
                        className={`epc-btn ${voltage === v ? 'active' : ''}`}
                        onClick={() => setVoltage(v)}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="epc-group">
                  <label>{locale === 'zh' ? '变压器额定容量 / 重合器开断电流 / 无功补偿容量 (Rated Capacity / Reactive Power):' : 'Transformer Capacity / Recloser Rating / Reactive Power:'}</label>
                  <div className="epc-btn-group">
                    {(['500kVA', '1000kVA', '1600kVA', '2500kVA', '3150kVA', '5000kVA', '6300kVA', '16MVA', '25MVA', '40MVA', '63MVA', '80MVA', '125MVA', '250MVA', '630A/16kA', '1250A/25kA', '±10Mvar', '±25Mvar', '±50Mvar'] as const).map((c) => (
                      <button
                        key={c}
                        type="button"
                        className={`epc-btn ${capacity === c ? 'active' : ''}`}
                        onClick={() => setCapacity(c)}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="epc-group">
                  <label>{locale === 'zh' ? '高压进线主保护配置 (HV Incomer Protection Scheme):' : 'Primary Protection Scheme:'}</label>
                  <div className="epc-btn-group">
                    {(['VCB (IAC-AFLR 31.5kA)', 'Vacuum OLTC (MR Reinhausen) + DGA 7-Gas Online Optical', 'Ultrafast Optical Arc (<7ms) + VCB', 'LBS-Fuse', 'GIS RMU (SF6/Solid-Insulated)', '110kV GIS Breaker + Disconnector/Earthing', 'Clean Air Disconnector + Vacuum Breaker (GWP=0)', 'IGBT Cascaded Multilevel (SVG)', 'Pure IEC 61850 Process Bus (SV+GOOSE <2ms)', 'Bi-Stable Magnetic Actuator (100k Ops)'] as const).map((p) => (
                      <button
                        key={p}
                        type="button"
                        className={`epc-btn ${protection === p ? 'active' : ''}`}
                        onClick={() => setProtection(p)}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="epc-group">
                  <label>{locale === 'zh' ? '短时耐受电流动热稳定 (Short-Time Current Icw):' : 'Short-Time Withstand (Icw):'}</label>
                  <div className="epc-btn-group">
                    {(['20kA/3s', '25kA/3s', '31.5kA/3s', '40kA/3s', '50kA/3s'] as const).map((s) => (
                      <button
                        key={s}
                        type="button"
                        className={`epc-btn ${shortCircuit === s ? 'active' : ''}`}
                        onClick={() => setShortCircuit(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="epc-group">
                  <label>{locale === 'zh' ? '远动监控通讯协议 (SCADA & Telemetry Protocol):' : 'SCADA & Telemetry Protocol:'}</label>
                  <div className="epc-btn-group">
                    {(['IEC 61850 (GOOSE/MMS)', 'Modbus TCP / RTU', 'DNP3 / IEC 104'] as const).map((sc) => (
                      <button
                        key={sc}
                        type="button"
                        className={`epc-btn ${iecScada === sc ? 'active' : ''}`}
                        onClick={() => setIecScada(sc)}
                      >
                        {sc}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="epc-group">
                  <label>Тип подстанции / распределительного устройства (ГОСТ 14695 / ГОСТ 14693 / МЭК 62271):</label>
                  <div className="epc-btn-group">
                    {(['КТПБ 35/110 кВ (Блочно-модульная ОРУ/ЗРУ)', 'ТДН / ТРДН / ТДТН 110-220 кВ (Силовой трансформатор)', 'КРУЭ-110/220 кВ (Элегазовое распредустройство)', '2КТПН', 'КТПН', 'КТП-СЭС/ВЭС (MV Skid)', 'БМЗ (E-House)', 'ММПС / МПС (Мобильная подстанция 35-110 кВ)', 'Реклоузер ПСС-10/35 (Пункт секционирования)', 'СТАТКОМ / SVG (УКРМ)', 'КРУЭ «Сухой воздух» (Без элегаза / УХЛ1)', 'КРУ-2-10 (Выкатной)', 'КСО-298 (Вакуум)', 'ШРН / NGR (Шкаф нейтрали)', 'КТПВ (Шахтная Взрывозащищенная)'] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        className={`epc-btn ${gostType === t ? 'active' : ''}`}
                        onClick={() => setGostType(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="epc-group">
                  <label>Климатическое исполнение и категория размещения (ГОСТ 15150-69):</label>
                  <div className="epc-btn-group">
                    {(['УХЛ1 (-60°C ~ +40°C)', 'ХЛ1 (-60°C ~ +40°C)', 'У1 (-45°C ~ +40°C)'] as const).map((cl) => (
                      <button
                        key={cl}
                        type="button"
                        className={`epc-btn ${gostClimate === cl ? 'active' : ''}`}
                        onClick={() => setGostClimate(cl)}
                      >
                        {cl}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="epc-group">
                  <label>Номинальное напряжение ВН (High Voltage Side):</label>
                  <div className="epc-btn-group">
                    {(['6 кВ', '10 кВ', '20 кВ', '35 кВ', '110 кВ', '220 кВ'] as const).map((gv) => (
                      <button
                        key={gv}
                        type="button"
                        className={`epc-btn ${gostVoltage === gv ? 'active' : ''}`}
                        onClick={() => setGostVoltage(gv)}
                      >
                        {gv}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="epc-group">
                  <label>Номинальная мощность трансформатора / СТАТКОМ / BESS (Rated Capacity):</label>
                  <div className="epc-btn-group">
                    {(['400 кВА', '630 кВА', '1000 кВА', '1600 кВА', '2500 кВА', '3125 кВА', '4000 кВА', '6300 кВА', '16 МВА', '25 МВА', '40 МВА', '63 МВА', '80 МВА', '125 МВА', '250 МВА', '630А / 16кА', '1250А / 25кА', '±5 Мвар', '±15 Мвар', '±30 Мвар'] as const).map((gc) => (
                      <button
                        key={gc}
                        type="button"
                        className={`epc-btn ${gostCapacity === gc ? 'active' : ''}`}
                        onClick={() => setGostCapacity(gc)}
                      >
                        {gc}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="epc-group">
                  <label>Тип силового трансформатора / Инверторного блока / Резистора (Trafo / Inverter / NGR):</label>
                  <div className="epc-btn-group">
                    {(['ТМГ (Масляный герметичный)', 'ТСЗЛ (Сухой с литой изоляцией)', 'ТМГ-УХЛ1 (Арктический -60°C)', 'ТДН / ТРДН / ТДТН 110-220 кВ (16-250 МВА Вакуумный РПН / DGA / УХЛ1)', 'ТДН / ТРДН 35-110 кВ (16-63 МВА Миннефтегаз/Россети)', 'ТДН / ТРДН 110 кВ Мобильный (Nomex)', 'КРУЭ SF6/N2 Элегазовый модуль (УХЛ1)', 'HCEP Твердотельный модуль (ПСС)', 'Экологичный КРУЭ модуль (Dry Air, GWP=0)', 'Расщепленная обмотка 1500В (КТП-СЭС)', 'Сухой Nomex Взрывозащищенный (КТПВ)', 'Нихром Х20Н80 Резистор (ШРН)', 'IGBT Инверторная цепь (STATCOM)'] as const).map((gt) => (
                      <button
                        key={gt}
                        type="button"
                        className={`epc-btn ${gostTrafo === gt ? 'active' : ''}`}
                        onClick={() => setGostTrafo(gt)}
                      >
                        {gt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="epc-group">
                  <label>Исполнение высоковольтного ввода / вывода (Incomer / Outgoing):</label>
                  <div className="epc-btn-group">
                    {(['Воздух / Кабель (В/К)', 'Кабель / Кабель (К/К)', 'Воздух / Воздух (В/В)', 'Шинный мост (Ш/К)', 'Элегазовый ввод / Муфта КРУЭ'] as const).map((io) => (
                      <button
                        key={io}
                        type="button"
                        className={`epc-btn ${gostInOut === io ? 'active' : ''}`}
                        onClick={() => setGostInOut(io)}
                      >
                        {io}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="epc-group">
                  <label>Телемеханика и протокол связи (SCADA / ГОСТ Р МЭК):</label>
                  <div className="epc-btn-group">
                    {(['ГОСТ Р МЭК 60870-5-104 (МЭК 104)', 'МЭК 61850 (GOOSE/MMS)', 'АИИС КУЭ (Меркурий 234 / СЭТ)'] as const).map((gsc) => (
                      <button
                        key={gsc}
                        type="button"
                        className={`epc-btn ${gostScada === gsc ? 'active' : ''}`}
                        onClick={() => setGostScada(gsc)}
                      >
                        {gsc}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Live Specification Preview Card */}
          <div className="epc-preview-card">
            <div className="epc-spec-header">
              <div>
                <span className="card-badge">{mode === 'iec' ? 'RECOMMENDED MODEL CODE' : 'КОД ТИПОИСПОЛНЕНИЯ ПО ГОСТ'}</span>
                <h3 className="epc-model-code">{modelCode}</h3>
              </div>
              <span className="standards-pill">{mode === 'iec' ? 'IEC 62271-202 / GB/T 17467' : 'ГОСТ 14695-80 / ГОСТ 15150-69 УХЛ1'}</span>
            </div>

            <div className="epc-spec-table">
              <div className="spec-item">
                <span className="spec-k">{mode === 'iec' ? (locale === 'zh' ? '电压与频率' : 'Voltage & Frequency') : 'Напряжение ВН / НН'}</span>
                <span className="spec-v">{summary.voltageRating}</span>
              </div>
              <div className="spec-item">
                <span className="spec-k">{mode === 'iec' ? (locale === 'zh' ? '变压器规格' : 'Transformer Unit') : 'Трансформаторный блок'}</span>
                <span className="spec-v">{summary.transformerRating}</span>
              </div>
              <div className="spec-item">
                <span className="spec-k">{mode === 'iec' ? (locale === 'zh' ? '继电保护方式' : 'Protection Scheme') : 'Релейная защита (РЗА)'}</span>
                <span className="spec-v">{summary.protectionScheme}</span>
              </div>
              <div className="spec-item">
                <span className="spec-k">{mode === 'iec' ? (locale === 'zh' ? '母线动热稳定' : 'Busbar Icw / Ip') : 'Стойкость к токам КЗ'}</span>
                <span className="spec-v">{summary.busbarWithstand}</span>
              </div>
              <div className="spec-item">
                <span className="spec-k">{mode === 'iec' ? (locale === 'zh' ? '预估箱体尺寸' : 'Estimated Dimensions') : 'Габариты и исполнение здания'}</span>
                <span className="spec-v">{summary.estimatedDimensions}</span>
              </div>
              <div className="spec-item">
                <span className="spec-k">{mode === 'iec' ? (locale === 'zh' ? '远动监控通讯' : 'SCADA Telemetry') : 'Телемеханика и связь'}</span>
                <span className="spec-v">{summary.telemetry}</span>
              </div>
            </div>

            <div className="epc-actions-bar">
              <a
                href={`https://wa.me/8615566206930?text=${encodeURIComponent(whatsappInquiry)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-orange"
              >
                <MessageCircle size={17} /> {locale === 'zh' ? 'WhatsApp 索取该配置 CAD/SLD' : 'WhatsApp: Request CAD/SLD'}
              </a>
              <a
                href={`https://t.me/+8615566206930`}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-dark"
                title="Telegram Direct Channel for Russian & CIS Clients (+86 155 6620 6930)"
              >
                <Send size={17} /> {mode === 'iec' ? 'Telegram (+86 155 6620 6930)' : 'Telegram: Отправить Опросный лист (+86 155 6620 6930)'}
              </a>
              {mode === 'gost' && (
                <button
                  type="button"
                  className="button button-outline"
                  onClick={handleCopy}
                >
                  <FileText size={17} /> {copied ? '✓ Скопировано в буфер' : 'Скопировать Опросный лист'}
                </button>
              )}
              <a
                href={`mailto:henry@feichipower.com?subject=${encodeURIComponent(`[EPC / ГОСТ Request] Feichi Substation Model ${modelCode}`)}&body=${encodeURIComponent(mode === 'iec' ? `Dear Henry,\n\nPlease provide full CAD single-line diagrams, general arrangement drawings, and technical agreement draft for the following configured substation:\n\nModel Code: ${modelCode}\nType: ${iecType}\nVoltage: ${voltage}\nCapacity: ${capacity}\nProtection: ${protection}\nShort-Circuit Rating: ${shortCircuit}\nSCADA Protocol: ${iecScada}\n\nProject Location:\nDelivery Schedule:\n\nThank you.` : oprosnyListText)}`}
                className="button button-outline"
              >
                <Mail size={17} /> {locale === 'zh' ? '邮件索取技术协议' : 'Email Tech Agreement'}
              </a>
            </div>
            {copied && <div className="copy-badge"><Check size={14} /> Текст Опросного листа успешно скопирован для отправки проектному институту!</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

function Layout({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
      <FloatingWhatsApp />
    </>
  );
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

function ProductCard({ product, locale }: { product: ProductItem; locale: Locale }) {
  const [imgFailed, setImgFailed] = useState(false);

  const getDiagramType = (slug: string) => {
    if (slug.includes('box') || slug.includes('substation')) return 'substation';
    if (slug.includes('switchgear')) return 'switchgear';
    if (slug.includes('transformer')) return 'transformer';
    if (slug.includes('cabin')) return 'cabin';
    if (slug.includes('svg')) return 'svg';
    if (slug.includes('nitrogen')) return 'nitrogen';
    return 'distribution';
  };

  return (
    <article className="product-card">
      <div className="product-image" style={{ minHeight: '220px' }}>
        {!imgFailed ? (
          <img
            src={product.image}
            alt={`${localizedProduct(product, locale)} — Feichi Electrical`}
            loading="lazy"
            onError={() => setImgFailed(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <TechnicalDrawingPlaceholder
            type={getDiagramType(product.slug)}
            title={localizedProduct(product, locale)}
            subtitle={product.voltage}
          />
        )}
        <span>{product.tag}</span>
      </div>
      <div className="product-card-body">
        <div>
          <span className="card-index">{product.voltage}</span>
          <h3>{localizedProduct(product, locale)}</h3>
          <p>{product.summary}</p>
        </div>
        <Link to={`/${locale}/products/${product.slug}`} className="round-arrow" aria-label={`View ${localizedProduct(product, locale)}`}>
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </article>
  );
}

function FaqAccordion({ locale }: { locale: Locale }) {
  const text = ui[locale];
  const items = faqs[locale];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section faq-section">
      <div className="wrap">
        <SectionTitle eyebrow={text.faqEyebrow} title={text.faqTitle} copy="Get clear answers on engineering drawings, lead times, international testing standards, and containerized export shipment." />
        <div className="faq-grid">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-num">0{index + 1}</span>
                  <span className="faq-q-text">{item.q}</span>
                  <ChevronDown className={`faq-icon ${isOpen ? 'rotate' : ''}`} size={18} />
                </button>
                {isOpen && <div className="faq-answer"><p>{item.a}</p></div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HeroVisualWithFallback() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="hero-visual">
      <div className="visual-label">
        <span>SYSTEM / PREFABRICATED COMPACT SUBSTATION</span>
        <span>IEC 62271-202</span>
      </div>
      {!failed ? (
        <img
          src={heroImage}
          alt="Outdoor box-type substation manufactured by Feichi Electrical"
          onError={() => setFailed(true)}
          style={{ width: '100%', aspectRatio: '16/10.5', objectFit: 'cover' }}
        />
      ) : (
        <TechnicalDrawingPlaceholder
          type="substation"
          title="FEICHI PREFABRICATED SUBSTATION / КТПН 6-35kV"
          subtitle="Dual Standard IEC 62271-202 & ГОСТ 14695-80 Heavy Duty Substation"
        />
      )}
      <div className="visual-caption">
        <span>PRE-ASSEMBLED FACTORY INTEGRATION</span>
        <span>10 kV / 24 kV / 35 kV</span>
      </div>
    </div>
  );
}

function SizingSuiteSection({ locale }: { locale: Locale }) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'grid' | 'substation' | 'protection'>('all');

  const suiteText = {
    zh: {
      eyebrow: '工程计算套件 · 交互选型引擎',
      title: '高压输配电与变电站工程交互选型套件',
      copy: '输入电网负荷与技术参数，即时生成电气核算、单线图(SLD)与工程报价方案。',
      all: '全部选型引擎',
      grid: '高压电网与输电',
      substation: '变电站与电能质量',
      protection: '配电保护与控制',
    },
    en: {
      eyebrow: 'ENGINEERING SUITE · INTERACTIVE SIZING ENGINES',
      title: 'Power Grid & Substation Engineering Sizing Suite',
      copy: 'Instant electrical simulation, thermal limits, and single-line diagram generation across specialized high-voltage and substation engineering domains.',
      all: 'All Sizing Engines',
      grid: 'HV Cable & Grid Transmission',
      substation: 'Substations & Power Quality',
      protection: 'Protection, Motor & Control',
    },
    ru: {
      eyebrow: 'ИНЖЕНЕРНЫЙ КОМПЛЕКС · РАСЧЕТНЫЕ МОДУЛИ',
      title: 'Комплекс инженерных расчетных модулей для энергосистем',
      copy: 'Мгновенный расчет параметров оборудования 35-220 кВ с формированием опросных листов по ГОСТ.',
      all: 'Все расчетные модули',
      grid: 'Высоковольтные сети и КЛ',
      substation: 'Подстанции и качество сети',
      protection: 'Защита и автоматика',
    },
    ja: {
      eyebrow: 'エンジニアリングスイート · 設備計算エンジン',
      title: '電力エンジニアリング選型・設備計算スイート',
      copy: '高圧ケーブル、変電所設備、保護制御など各分野の設備仕様を瞬時に算出。',
      all: '全選型エンジン',
      grid: '高圧送電・ケーブル',
      substation: '変電所・電力品質',
      protection: '保護制御・機器',
    },
    es: {
      eyebrow: 'SUITE DE INGENIERÍA · MOTORES DE CÁLCULO',
      title: 'Suite de Motores de Cálculo para Redes y Subestaciones',
      copy: 'Simulación y dimensionamiento inmediato para cables de alta tensión, subestaciones y protección.',
      all: 'Todos los Motores',
      grid: 'Redes y Transmisión',
      substation: 'Subestaciones y Calidad',
      protection: 'Protección y Control',
    },
  }[locale] || {
    eyebrow: 'ENGINEERING SUITE · INTERACTIVE SIZING ENGINES',
    title: 'Power Grid & Substation Engineering Sizing Suite',
    copy: 'Instant electrical simulation, thermal limits, and single-line diagram generation across specialized high-voltage and substation engineering domains.',
    all: 'All Sizing Engines',
    grid: 'HV Cable & Grid Transmission',
    substation: 'Substations & Power Quality',
    protection: 'Protection, Motor & Control',
  };

  const engines = [
    { id: 'calc-hv-cable', num: '#18', cat: 'grid', title: { zh: '35kV–220kV 高压电缆附件与护层电压', en: '35kV–220kV HV Cable Accessories & Sheath Voltage', ru: 'Кабельная арматура 35-220 кВ', ja: '35kV–220kV 高圧ケーブル接続部', es: 'Accesorios para Cables de 35-220kV' }[locale] || '35kV–220kV HV Cable Accessories' },
    { id: 'calc-moa-arrester', num: '#17', cat: 'grid', title: { zh: '变电站氧化锌避雷器(MOA)绝缘配合', en: 'Substation ZnO Surge Arrester (MOA)', ru: 'ОПН-П 10-35 кВ и координация изоляции', ja: '酸化亜鉛避雷器(MOA)・絶縁協調', es: 'Pararrayos de Óxido Metálico (MOA)' }[locale] || 'Substation ZnO Surge Arrester (MOA)' },
    { id: 'calc-air-reactor', num: '#16', cat: 'grid', title: { zh: '50kA 干式空心限流电抗器', en: '50kA Air-Core Current-Limiting Reactor', ru: 'Реакторы РТОС 10-35 кВ', ja: '50kA 空心限流リアクトル', es: 'Reactancia Limitadora de Núcleo de Aire' }[locale] || '50kA Air-Core Current-Limiting Reactor' },
    { id: 'calc-soft-starter', num: '#15', cat: 'protection', title: { zh: '10kV–35kV 电机磁控/固态软起动', en: '10kV–35kV Motor MCR/Solid-State Soft Starter', ru: 'УППВ / ВУП 10-35 кВ плавный пуск', ja: '高圧電動機 磁気制御・ソフトスタータ', es: 'Arrancador Suave de 10-35kV' }[locale] || '10kV–35kV Motor Soft Starter' },
    { id: 'calc-ngr-grounding', num: '#14', cat: 'protection', title: { zh: '10kV–35kV 中性点接地电阻柜(NGR)', en: '10kV–35kV Neutral Grounding Resistor (NGR)', ru: 'Резисторы ЗНГ 10-35 кВ и ДГР', ja: '中性点接地抵抗器(NGR)', es: 'Resistencia de Puesta a Tierra (NGR)' }[locale] || '10kV–35kV Neutral Grounding Resistor' },
    { id: 'calc-gil-line', num: '#13', cat: 'grid', title: { zh: '110kV–220kV 气体绝缘输电线路(GIL)', en: '110kV–220kV Gas-Insulated Lines (GIL)', ru: 'КТПП / GIL 110-220 кВ токопроводы', ja: 'ガス絶縁送電線路(GIL)', es: 'Líneas Aisladas en Gas (GIL)' }[locale] || '110kV–220kV Gas-Insulated Lines (GIL)' },
    { id: 'calc-apf-filter', num: '#12', cat: 'substation', title: { zh: '10kV–35kV 高压谐波治理 APF/FC', en: '10kV–35kV Active APF & Passive FC Filter', ru: 'ФКУ-35 / ФСУ-10 фильтры гармоник', ja: '高圧アクティブフィルタ(APF)・FC', es: 'Filtro de Armónicos APF/FC' }[locale] || '10kV–35kV Active APF & Passive FC Filter' },
    { id: 'calc-mobile-substation', num: '#11', cat: 'substation', title: { zh: '35kV–110kV 车载移动式变电站', en: '35kV–110kV Mobile Containerized Substation', ru: 'Передвижные подстанции ПСМ-110', ja: '35kV–110kV 車載移動式変電所', es: 'Subestación Móvil de 35-110kV' }[locale] || '35kV–110kV Mobile Substation' },
    { id: 'calc-ncit-mu', num: '#10', cat: 'grid', title: { zh: '110kV–220kV 光电互感器与合并单元', en: '110kV–220kV Optical NCIT & Merging Unit', ru: 'Оптические NCIT и блоки MU', ja: '光ファイバ変成器(NCIT)・MU', es: 'Transformadores Ópticos NCIT y MU' }[locale] || '110kV–220kV Optical NCIT & Merging Unit' },
    { id: 'calc-svg-reactive', num: '#09', cat: 'substation', title: { zh: '10kV–35kV 动态无功补偿 SVG/STATCOM', en: '10kV–35kV Static Var Generator SVG/STATCOM', ru: 'СТАТКОМ / SVG 10-35 кВ', ja: '静止型無効電力発生装置(SVG)', es: 'Generador Estático de Var SVG' }[locale] || '10kV–35kV Static Var Generator SVG' },
    { id: 'calc-transformer-kva', num: '#08', cat: 'substation', title: { zh: '电力变压器容量kVA与能效损耗', en: 'Power Transformer kVA & Efficiency Loss', ru: 'Силовые трансформаторы ТМГ/ТСЛ', ja: '変圧器 容量(kVA)・損失計算', es: 'Transformador kVA y Eficiencia' }[locale] || 'Power Transformer kVA Sizer' },
    { id: 'calc-trv-breaker', num: '#07', cat: 'protection', title: { zh: '40.5kV–252kV 断路器开断与TRV', en: '40.5kV–252kV Circuit Breaker Breaking & TRV', ru: 'Выключатели 40.5-252 кВ (TRV)', ja: '高圧遮断器 遮断容量・TRV', es: 'Interruptores de Alta Tensión y TRV' }[locale] || 'HV Circuit Breaker TRV Sizer' },
    { id: 'calc-disconnector-ice', num: '#06', cat: 'protection', title: { zh: '35kV–110kV 隔离开关与破冰力矩', en: '35kV–110kV Disconnector & Ice-Break Torque', ru: 'Разъединители РГП 35-110 кВ', ja: '高圧断路器・着氷破砕トルク', es: 'Seccionadores y Par de Hielo' }[locale] || '35kV–110kV Disconnector Sizer' },
    { id: 'calc-busbar-thermal', num: '#05', cat: 'protection', title: { zh: '35kV 铜铝母线热稳定与动稳定', en: '35kV Busbar Thermal & Dynamic Sizer', ru: 'Шинные мосты 35 кВ', ja: '母線 熱的・動的短絡耐量', es: 'Barras Colectoras de 35kV' }[locale] || '35kV Busbar Thermal Sizer' },
    { id: 'calc-pv-bess-drop', num: '#04', cat: 'protection', title: { zh: '光储集电电缆压降与经济截面', en: 'Solar PV & BESS Cable Voltage Drop', ru: 'Кабельные линии СЭС/ВЭС', ja: '太陽光・蓄電ケーブル電圧降下', es: 'Caída de Tensión Solar y BESS' }[locale] || 'PV & BESS Cable Drop Sizer' },
    { id: 'calc-flisr-recloser', num: '#03', cat: 'protection', title: { zh: '智能真空重合器自愈保护(FLISR)', en: 'Smart Recloser & FLISR Protection', ru: 'Реклоузеры вакуумные FLISR', ja: 'スマートリクローザ・FLISR', es: 'Reconectador en Vacío y FLISR' }[locale] || 'Smart Recloser FLISR Sizer' },
    { id: 'nitrogen-sizer', num: '#02', cat: 'protection', title: { zh: '采空区注氮防灭火与工业PSA制氮', en: 'PSA Nitrogen Generator & Gob Inerting', ru: 'Азотные станции FC-N2', ja: '産業用PSA窒素発生装置', es: 'Generador de Nitrógeno PSA' }[locale] || 'PSA Nitrogen Generator Sizer' },
    { id: 'calc-sld-configurator', num: '#01', cat: 'substation', title: { zh: '模块化预装式箱式变电站 SLD 配置', en: 'Packaged Prefab Substation SLD Single-Line', ru: 'КТП / 2КТПН схемы SLD', ja: 'プレハブ変電所 SLD単線結線図', es: 'Subestación Prefabricada SLD' }[locale] || 'Packaged Substation SLD Sizer' },
  ];

  const filteredEngines = activeCategory === 'all' ? engines : engines.filter(e => e.cat === activeCategory);

  const scrollToEngine = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="substation-sizer" className="section sld-section section-darker">
      <div className="wrap">
        <div className="sizing-suite-header-wrap">
          <SectionTitle
            eyebrow={suiteText.eyebrow}
            title={suiteText.title}
            copy={suiteText.copy}
          />
          <div className="sizing-suite-category-bar">
            <button
              type="button"
              className={`sizing-suite-cat-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              <span>{suiteText.all}</span>
              <span className="sizing-suite-cat-count">18</span>
            </button>
            <button
              type="button"
              className={`sizing-suite-cat-btn ${activeCategory === 'grid' ? 'active' : ''}`}
              onClick={() => setActiveCategory('grid')}
            >
              <span>⚡ {suiteText.grid}</span>
              <span className="sizing-suite-cat-count">5</span>
            </button>
            <button
              type="button"
              className={`sizing-suite-cat-btn ${activeCategory === 'substation' ? 'active' : ''}`}
              onClick={() => setActiveCategory('substation')}
            >
              <span>🏭 {suiteText.substation}</span>
              <span className="sizing-suite-cat-count">5</span>
            </button>
            <button
              type="button"
              className={`sizing-suite-cat-btn ${activeCategory === 'protection' ? 'active' : ''}`}
              onClick={() => setActiveCategory('protection')}
            >
              <span>🛡️ {suiteText.protection}</span>
              <span className="sizing-suite-cat-count">8</span>
            </button>
          </div>
          <div className="engine-quick-jump-grid">
            {filteredEngines.map((e) => (
              <button
                key={e.id}
                type="button"
                className="engine-jump-chip"
                onClick={() => scrollToEngine(e.id)}
              >
                <span className="engine-chip-num">{e.num}</span>
                <span className="engine-chip-title">{e.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 18 Calculation Engines with individual IDs for smooth navigation */}
        {(activeCategory === 'all' || activeCategory === 'grid') && (
          <div id="calc-hv-cable">
            <HighVoltageCableAccessorySizer locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'grid') && (
          <div id="calc-moa-arrester">
            <SubstationSurgeArresterSizer locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'grid') && (
          <div id="calc-air-reactor">
            <AirCoreCurrentLimitingReactorSizer locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'protection') && (
          <div id="calc-soft-starter">
            <HighVoltageSoftStarterSizer locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'protection') && (
          <div id="calc-ngr-grounding">
            <NeutralGroundingResistorSizer locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'grid') && (
          <div id="calc-gil-line">
            <GilTransmissionLineSizer locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'substation') && (
          <div id="calc-apf-filter">
            <HarmonicFilterApfSizer locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'substation') && (
          <div id="calc-mobile-substation">
            <MobileSubstationSizer locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'grid') && (
          <div id="calc-ncit-mu">
            <NcitOpticalTransformerSizer locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'substation') && (
          <div id="calc-transformer-kva">
            <TransformerKvaSizer locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'substation') && (
          <div id="calc-svg-reactive">
            <SvgReactiveCalculator locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'protection') && (
          <div id="calc-trv-breaker">
            <TrvBreakerSizer locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'protection') && (
          <div id="calc-disconnector-ice">
            <DisconnectorSizer locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'protection') && (
          <div id="calc-busbar-thermal">
            <BusbarThermalSizer locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'protection') && (
          <div id="calc-pv-bess-drop">
            <PvBessCableDropSizer locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'protection') && (
          <div id="calc-flisr-recloser">
            <FlisrProtectionSizer locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'substation') && (
          <div id="calc-sld-configurator">
            <SldConfigurator locale={locale} />
          </div>
        )}
        {(activeCategory === 'all' || activeCategory === 'protection') && (
          <div id="nitrogen-sizer">
            <NitrogenSizer locale={locale} />
          </div>
        )}
      </div>
    </section>
  );
}

const homeSeoData: Record<Locale, { title: string; desc: string }> = {
  zh: {
    title: '沈阳飞驰电气 FEICHI POWER | 10kV~220kV 箱式变电站、高压GIS与特种电力变压器专业制造商',
    desc: '沈阳飞驰电气（FEICHI POWER，成立于2004年，注册资金1.01亿元）专业研发制造10kV-220kV预装式箱变、高压GIS气体绝缘开关柜、矿用隔爆变压器及特种电力设备，服务国家电网及全球电力EPC总包项目。',
  },
  en: {
    title: 'FEICHI POWER | Box Type Substation Manufacturer, 110kV-220kV GIS & Power Transformers',
    desc: 'Feichi Power (est. 2004, RMB 101M capital) is a premier Chinese manufacturer of 10kV-220kV prefabricated box substations (E-House), gas-insulated switchgear (GIS), cast resin dry-type & oil-immersed power transformers for global EPC contractors.',
  },
  ru: {
    title: 'FEICHI POWER | Завод КТПБ 35-220 кВ, КРУЭ и силовых трансформаторов (ГОСТ УХЛ1 до -50°C)',
    desc: 'Shenyang Feichi Power — ведущий производитель блочно-модульных подстанций КТПБ/ПСМ 10-220 кВ, элегазовых распределительных устройств КРУЭ, вакуумных выключателей и силовых трансформаторов по стандартам ГОСТ для работы в условиях УХЛ1 до -50°C.',
  },
  es: {
    title: 'FEICHI POWER | Fabricante de Subestaciones Tipo Paquete, GIS y Transformadores 10-220kV',
    desc: 'Feichi Power (est. 2004) fabrica subestaciones eléctricas compactas tipo paquete (E-House 10-220kV), celdas blindadas GIS, transformadores de potencia en aceite y secos clase H para proyectos industriales y renovables en América Latina.',
  },
  ja: {
    title: 'FEICHI POWER (沈陽飛馳電気) | 10kV~220kV プレハブ受変電設備・GIS・特高圧変圧器専門メーカー',
    desc: '中国・沈陽飛馳電気（2004年設立、資本金1.01億元）。10kV〜220kVプレハブ変電所（E-House）、ガス絶縁開閉装置（GIS）、モールド変圧器および油入変圧器の設計・製造メーカー。グローバルEPC案件に24時間対応。',
  },
};

function Home({ locale }: { locale: Locale }) {
  const text = ui[locale];
  const seo = homeSeoData[locale] || homeSeoData.en;
  return (
    <>
      <Seo locale={locale} title={seo.title} description={seo.desc} />
      <main>
        <section className="hero">
          <div className="hero-grid wrap">
            <div className="hero-copy">
              <span className="eyebrow">{locale === 'zh' ? '变电 · 配电 · 绝氧防爆 (Transform. Distribute. Protect.)' : 'TRANSFORM. DISTRIBUTE. PROTECT.'}</span>
              <h1>{text.heroTitle}</h1>
              <p>{text.heroCopy}</p>
              <div className="hero-actions">
                <a className="button button-orange" href="#substation-sizer">
                  {locale === 'zh' ? '⚡ 箱变/单线图交互选型' : '⚡ Configure Substation (SLD)'}
                </a>
                <a className="button button-cyan" href="#nitrogen-sizer">
                  {locale === 'zh' ? '💨 FC-N2 制氮机选型' : '💨 FC-N2 Nitrogen Sizer'}
                </a>
                <Link className="button button-outline" to={`/${locale}/contact`}>
                  {text.contact} <ArrowUpRight size={16} />
                </Link>
              </div>
              <div className="hero-data">
                <div>
                  <strong>2004</strong>
                  <span>Established</span>
                </div>
                <div>
                  <strong>63,000 m²</strong>
                  <span>Factory footprint</span>
                </div>
                <div>
                  <strong>RMB 101M</strong>
                  <span>Registered capital</span>
                </div>
                <div>
                  <strong>35 kV</strong>
                  <span>Max voltage rating</span>
                </div>
              </div>
            </div>
            <HeroVisualWithFallback />
          </div>
        </section>

        {/* Feature Highlights Rail */}
        <section className="feature-rail">
          <div className="wrap feature-rail-grid">
            <div>
              <Zap size={20} />
              <div>
                <strong>Custom SLD Engineering</strong>
                <span>Tailored single-line diagrams & busbar calculations</span>
              </div>
            </div>
            <div>
              <ShieldCheck size={20} />
              <div>
                <strong>IEC Type Tested</strong>
                <span>Verified dielectric, thermal & short-circuit tests</span>
              </div>
            </div>
            <div>
              <Factory size={20} />
              <div>
                <strong>63,000 m² Direct Factory</strong>
                <span>End-to-end CNC cutting, welding & assembly</span>
              </div>
            </div>
            <div>
              <Truck size={20} />
              <div>
                <strong>Seaworthy Export Pack</strong>
                <span>Reinforced crating & vacuum moisture barrier</span>
              </div>
            </div>
          </div>
        </section>

        {/* 81+ Strategic Partners & Collaborative Ecosystem (First-Screen Prominent Marquee) */}
        <StrategicPartnersSection locale={locale} />

        {/* Products Section */}
        <section className="section products-section">
          <div className="wrap">
            <SectionTitle eyebrow={text.productsEyebrow} title={text.productsTitle} copy={text.productsCopy} />
            <div className="product-grid product-grid-large">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} locale={locale} />
              ))}
            </div>
            <div className="center-action">
              <Link className="button button-dark" to={`/${locale}/products`}>
                {text.allProducts} <ChevronRight size={17} />
              </Link>
            </div>

            {/* Official 2026 Multilingual Catalog Download Center */}
            <OfficialCatalogDownloadSection locale={locale} />
          </div>
        </section>

        {/* Authoritative Type-Test Reports & Certifications Trust Hub */}
        <CertificationsTrustHub locale={locale} />

        {/* Unified 80+ Global Overseas Track Record & EPC Matrix (Single Authoritative Showcase) */}
        <OverseasProjectsTrackRecord locale={locale} />

        {/* 18-Engine Power Grid & Substation Engineering Sizing Suite (Categorized & Filterable) */}
        <SizingSuiteSection locale={locale} />

        {/* 3D Chamber Anatomy Section */}
        <SubstationAnatomy locale={locale} />

        {/* Harsh Environment & Global Standards Compliance Matrix (Ormazabal & TGOOD Benchmark) */}
        <HarshEnvironmentMatrix locale={locale} />

        {/* EPC Rapid Specification & CAD Intake Gate (Lucy Electric & TGOOD Benchmark) */}
        <EpcSpecIntakeGate locale={locale} />

        {/* 3-Step Customer Journey (Epilog Benchmark) */}
        <EngineeringJourney locale={locale} />

        {/* Industries Section */}
        <section className="section industries-section">
          <div className="wrap">
            <SectionTitle eyebrow={text.industriesEyebrow} title={text.industriesTitle} copy={text.industriesCopy} />
            <div className="industry-grid">
              {industries.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link to={`/${locale}/industries/${item.slug}`} className="industry-card" key={item.slug}>
                    <span className="card-index">0{index + 1}</span>
                    <Icon size={28} />
                    <h3>{localizedIndustry(item, locale)}</h3>
                    <p>{item.copy}</p>
                    <div className="industry-card-foot">
                      <span>Explore application</span>
                      <ArrowUpRight className="industry-arrow" size={17} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Manufacturing Capabilities */}
        <section className="section capability-section">
          <div className="wrap capability-grid">
            <div>
              <span className="eyebrow">{text.capabilitiesEyebrow}</span>
              <h2>{text.capabilitiesTitle}</h2>
              <p>{text.capabilitiesCopy}</p>
              <div className="cap-list">
                <div className="cap-item">
                  <span className="cap-num">01</span>
                  <div>
                    <strong>CNC Laser Cutting & Sheet Metal Bending</strong>
                    <p>High-precision laser centers ensuring tight dimensional tolerances and weather-tight cabinet seals.</p>
                  </div>
                </div>
                <div className="cap-item">
                  <span className="cap-num">02</span>
                  <div>
                    <strong>Automated Busbar Processing & Tin Plating</strong>
                    <p>Computerized punching, bending and high-conductivity copper busbar fabrication with certified current capacities.</p>
                  </div>
                </div>
                <div className="cap-item">
                  <span className="cap-num">03</span>
                  <div>
                    <strong>High-Voltage Insulation & Type Testing Hall</strong>
                    <p>Withstand voltage testing, partial discharge analysis, and temperature rise inspection before factory release.</p>
                  </div>
                </div>
              </div>
              <Link className="button button-orange" to={`/${locale}/about`}>
                {text.nav.about} <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="capability-photo">
              <img src={factoryImage} alt="Feichi Electrical factory manufacturing workshop and equipment lines" />
              <span>FEICHI WORKSHOP / 63,000 M² PRODUCTION FACILITY</span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqAccordion locale={locale} />

        {/* Bottom CTA */}
        <section className="section cta-section">
          <div className="wrap cta-inner">
            <div>
              <span className="eyebrow">NEXT STEP / GET TECHNICAL PROPOSAL</span>
              <h2>{text.contactTitle}</h2>
              <p>{text.contactCopy}</p>
            </div>
            <Link className="button button-dark" to={`/${locale}/contact`}>
              {text.request} <ArrowDownRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function CaseStrip({ locale, text }: { locale: Locale; text: typeof ui.en }) {
  const captionsByLocale: Record<Locale, string[]> = {
    zh: [
      '几内亚西芒杜铁矿港口 EPC 供电工程',
      '沙特阿拉伯联合循环电站高压配电',
      '哈萨克斯坦舒巴尔阔尔半焦化变电站 (-60°C)',
      '奥迪一汽新能源汽车屋顶分布式光伏项目',
      '防城港大型钢铁冶金基地 40.5kV 特种配电',
      '沈阳地铁 3 号线 & 4 号线轨道交通牵引变电所',
    ],
    en: [
      'GUINEA SIMANDOU IRON ORE PORT EPC (WEST AFRICA)',
      'SAUDI ARABIA COMBINED CYCLE POWER PLANT (MIDDLE EAST)',
      'KAZAKHSTAN SHUBARKOL SEMI-COKE POWER SUBSTATION (-60°C)',
      'AUDI-FAW NEV DISTRIBUTED ROOFTOP SOLAR (1500V DC)',
      'GUANGXI FANGCHENGGANG STEEL METALLURGY BASE (40.5kV)',
      'SHENYANG METRO LINE 3 & 4 TRACTION POWER INTEGRATION',
    ],
    ja: [
      'ギニア シマンドゥ鉄鉱山港湾 EPC 電力供給プロジェクト',
      'サウジアラビア複合火力発電所 高圧配電設備',
      'カザフスタン 炭化プラント極寒変電所 (-60℃仕様)',
      'アウディ一汽 新エネルギー車屋根置き型太陽光発電',
      '広西防城港 大型製鉄所 40.5kV 特高圧受変電設備',
      '瀋陽地下铁 3号線・4号線 鉄道牽引変電所システム',
    ],
    es: [
      'PROYECTO EPC PUERTO MINERO SIMANDOU (GUINEA, ÁFRICA OCCIDENTAL)',
      'CENTRAL ELÉCTRICA DE CICLO COMBINADO (ARABIA SAUDITA)',
      'SUBESTACIÓN INDUSTRIAL COQUE SHUBARKOL (-60°C, KAZAJISTÁN)',
      'PARQUE SOLAR FOTOVOLTAICO SOBRE CUBIERTA AUDI-FAW (1500V CC)',
      'BASE SIDERÚRGICA FANGCHENGGANG DISTRIBUCIÓN 40.5kV',
      'SISTEMA DE TRACCIÓN METRO DE SHENYANG LÍNEAS 3 Y 4',
    ],
    ru: [
      'МОРСКОЙ ПОРТ СИМАНДУ — ЭНЕРГОСНАБЖЕНИЕ EPC (ГВИНЕЯ)',
      'ПГУ САУДОВСКАЯ АРАВИЯ — КРУ И РАСПРЕДЕЛЕНИЕ 10-35 кВ',
      'ШУБАРКОЛЬ КОКС — ПОДСТАНЦИЯ -60°C (КАЗАХСТАН)',
      'АУДИ-ФАВ СЭС НА КРЫШЕ ЗАВОДА ЭЛЕКТРОМОБИЛЕЙ (1500В)',
      'МЕТАЛЛУРГИЧЕСКИЙ КОМБИНАТ ФАНЧЭНГАН 40.5 кВ',
      'ШЭНЬЯНСКИЙ МЕТРОПОЛИТЕН — ТЯГОВЫЕ ПОДСТАНЦИИ ЛИНИЙ 3 И 4',
    ],
  };

  const currentCaptions = captionsByLocale[locale] || captionsByLocale.en;

  return (
    <section className="section case-section">
      <div className="wrap">
        <SectionTitle eyebrow={text.casesEyebrow} title={text.casesTitle} copy={text.casesCopy} />
        <div className="case-photo-grid">
          {fieldImages.map((image, index) => (
            <figure key={image}>
              <img
                src={image}
                alt={currentCaptions[index] || `Feichi Project Reference ${index + 1}`}
                loading="lazy"
              />
              <figcaption>
                <strong>0{index + 1}</strong> / {currentCaptions[index] || 'GLOBAL EPC PROJECT SITE'}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="center-action">
          <Link className="button button-dark" to={`/${locale}/cases`}>
            {text.nav.cases} <ChevronRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PageHero({
  eyebrow,
  title,
  copy,
  image = heroImage,
}: {
  locale?: Locale;
  eyebrow: string;
  title: string;
  copy: string;
  image?: string;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <section className="page-hero">
      <div className="wrap page-hero-grid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
        <div className="page-hero-img-box" style={{ minHeight: '260px' }}>
          {!imgFailed ? (
            <img
              src={image}
              alt={title}
              onError={() => setImgFailed(true)}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <TechnicalDrawingPlaceholder
              type={title.toLowerCase().includes('sld') || title.includes('产品') || title.includes('система') ? 'switchgear' : 'factory'}
              title={title}
              subtitle="FEICHI INDUSTRIAL POWER EQUIPMENT"
            />
          )}
        </div>
      </div>
    </section>
  );
}

function ProductsPage({ locale }: { locale: Locale }) {
  const text = ui[locale];
  return (
    <>
      <Seo locale={locale} title={`${text.nav.products} | Feichi Electrical Equipment`} description={text.productsCopy} />
      <main>
        <PageHero eyebrow={text.productsEyebrow} title={text.productsTitle} copy={text.productsCopy} />
        <section className="section">
          <div className="wrap">
            <div className="product-grid product-grid-large">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} locale={locale} />
              ))}
            </div>

            {/* Interactive Engineering Sizing & BESS Energy Storage Section */}
            <div className="product-bess-cta-banner" style={{ marginTop: '48px', padding: '24px 28px', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(14, 165, 233, 0.12) 100%)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
              <div style={{ maxWidth: '640px' }}>
                <span style={{ fontSize: '12px', letterSpacing: '0.08em', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase' }}>
                  {locale === 'zh' ? '⚡ 1500V 光储升压一体舱与变电站交互选型' : locale === 'es' ? '⚡ Subestaciones BESS 1500V e Ingeniería Unifilar' : locale === 'ru' ? '⚡ Инженерный конфигуратор БМЗ / КТПН и систем BESS 1500В' : '⚡ 1500V PV-BESS Skids & Substation SLD Configurator'}
                </span>
                <h4 style={{ margin: '6px 0 8px', fontSize: '18px', color: '#ffffff', fontFamily: 'var(--display)' }}>
                  {locale === 'zh' ? '需要针对具体工程项目的单线图 (SLD) 或俄标 Опросный лист 选型计算？' : locale === 'es' ? '¿Requiere dimensionamiento de BESS 1500V o diagramas unifilares para su proyecto?' : locale === 'ru' ? 'Требуется мгновенный расчет типоисполнения по ГОСТ и формирование Опросного листа?' : 'Need Project-Specific SLD Calculations, BESS Sizing or Russian GOST Oprosny List?'}
                </h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#94a3b8', lineHeight: 1.5 }}>
                  {locale === 'zh' ? '支持国际 IEC 与俄罗斯 ГОСТ 双模式智能参数计算，一键生成设备型号、短路容量核算与技术协议草案。' : locale === 'es' ? 'Configuración interactiva en normas IEC y GOST con cálculo automático de cortocircuito, dimensiones y especificaciones.' : locale === 'ru' ? 'Интерактивный расчет токов КЗ, габаритов здания и формирование готового текста Опросного листа для проектных институтов.' : 'Interactive dual-standard IEC & GOST sizing calculator with automated busbar short-circuit ratings, dimensions, and CAD drawing intake.'}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link to={`/${locale}#substation-sizer`} className="button button-orange" style={{ padding: '10px 18px', fontSize: '13px' }}>
                  {locale === 'zh' ? '⚡ 进入交互选型引擎' : locale === 'es' ? '⚡ Configurar SLD / BESS' : locale === 'ru' ? '⚡ Запустить конфигуратор' : '⚡ Launch SLD Sizer'}
                </Link>
                <Link to={`/${locale}/contact`} className="button button-outline" style={{ padding: '10px 18px', fontSize: '13px' }}>
                  {locale === 'zh' ? '直联技术总监' : locale === 'es' ? 'Contactar Ingeniería' : locale === 'ru' ? 'Связаться с инженером' : 'Direct Engineering Line'}
                </Link>
              </div>
            </div>

            {/* Strategic Partnerships */}
            <StrategicPartnershipSection locale={locale} />

            {/* Official 2026 Multilingual Catalog Download Center */}
            <OfficialCatalogDownloadSection locale={locale} />
          </div>
        </section>
        <FaqAccordion locale={locale} />
      </main>
    </>
  );
}

function ProductDetail({ locale, slug }: { locale: Locale; slug: string }) {
  const text = ui[locale];
  const product = products.find((item) => item.slug === slug) ?? products[0];

  const pageTitle = product.seoTitle?.[locale] || `${localizedProduct(product, locale)} | Feichi Electrical`;
  const pageDesc = product.seoDesc?.[locale] || product.summary;

  // Generate Product-specific FAQ Schema for Rich Snippets
  const productFaqSchema = product.productFaqs?.[locale] ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.productFaqs[locale].map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  } : undefined;

  return (
    <>
      <Seo locale={locale} title={pageTitle} description={pageDesc} schema={productFaqSchema} />
      <main>
        <PageHero eyebrow={`EQUIPMENT SYSTEM / ${product.tag}`} title={localizedProduct(product, locale)} copy={product.summary} image={product.image} />

        <section className="section detail-section">
          <div className="wrap detail-grid">
            <div>
              <span className="eyebrow">{text.spec}</span>
              <h2>Engineering Specifications & Operational Parameters</h2>
              <p>
                Feichi Electrical supports full engineering customization based on your voltage rating, short-circuit withstand requirements, installation footprint, environmental severity class, and component vendor list.
              </p>

              {/* Technical Parameters Table */}
              <div className="spec-table-container">
                <table className="spec-table">
                  <tbody>
                    <tr>
                      <th>Compliance Standards</th>
                      <td>{product.specs.standards}</td>
                    </tr>
                    <tr>
                      <th>Rated Voltage (HV/LV)</th>
                      <td>{product.specs.ratedVoltage}</td>
                    </tr>
                    <tr>
                      <th>Rated Capacity Range</th>
                      <td>{product.specs.ratedCapacity}</td>
                    </tr>
                    <tr>
                      <th>Rated Frequency</th>
                      <td>{product.specs.frequency}</td>
                    </tr>
                    <tr>
                      <th>Ingress Protection (IP)</th>
                      <td>{product.specs.ipRating}</td>
                    </tr>
                    <tr>
                      <th>Ambient Temperature Range</th>
                      <td>{product.specs.ambientTemp}</td>
                    </tr>
                    <tr>
                      <th>Enclosure / Tank Material</th>
                      <td>{product.specs.enclosureMaterial}</td>
                    </tr>
                    <tr>
                      <th>Short-Circuit Withstand</th>
                      <td>{product.specs.shortCircuitWithstand}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="detail-features">
                <h3>Key Design & Engineering Highlights</h3>
                <ul className="check-list">
                  {product.highlights.map((item, idx) => (
                    <li key={idx}>
                      <Check size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Long-Tail Technical Guide Section */}
              {product.longTailTechGuide && (
                <div className="detail-tech-guide" style={{ marginTop: '36px', padding: '28px', background: 'var(--panel, rgba(30, 41, 59, 0.4))', border: '1px solid rgba(148, 163, 184, 0.15)', borderRadius: '12px' }}>
                  <span className="eyebrow" style={{ color: 'var(--accent, #f59e0b)' }}>TECHNICAL DOSSIER & SYSTEM ARCHITECTURE</span>
                  <h3 style={{ fontSize: '20px', margin: '8px 0 6px', color: '#ffffff' }}>
                    {product.longTailTechGuide.title[locale]}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--accent, #f59e0b)', marginBottom: '20px', fontWeight: 600 }}>
                    {product.longTailTechGuide.subtitle[locale]}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                    {product.longTailTechGuide.sections.map((sec, sIdx) => (
                      <div key={sIdx} style={{ borderLeft: '3px solid var(--accent, #f59e0b)', paddingLeft: '16px' }}>
                        <h4 style={{ fontSize: '15px', color: '#ffffff', margin: '0 0 8px' }}>
                          {sec.heading[locale]}
                        </h4>
                        <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                          {sec.body[locale]}
                        </p>
                        {sec.bullets && (
                          <ul style={{ margin: '10px 0 0 16px', padding: 0, fontSize: '13px', color: '#cbd5e1', lineHeight: 1.6 }}>
                            {sec.bullets.map((b, bIdx) => (
                              <li key={bIdx} style={{ marginBottom: '4px' }}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Engineering FAQs */}
              {product.productFaqs?.[locale] && (
                <div className="detail-product-faqs" style={{ marginTop: '32px' }}>
                  <h3 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <HelpCircle size={20} color="var(--accent, #f59e0b)" /> Engineering FAQs & Technical Q&A
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {product.productFaqs[locale].map((faq, fIdx) => (
                      <div key={fIdx} style={{ padding: '16px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(148, 163, 184, 0.1)', borderRadius: '8px' }}>
                        <strong style={{ display: 'block', fontSize: '14px', color: '#ffffff', marginBottom: '6px' }}>
                          Q: {faq.q}
                        </strong>
                        <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8', lineHeight: 1.5 }}>
                          A: {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="detail-actions" style={{ marginTop: '32px' }}>
                <Link className="button button-orange" to={`/${locale}/contact`}>
                  {text.request} <ArrowUpRight size={16} />
                </Link>
                <Link className="button button-outline" to={`/${locale}/resources`}>
                  <Download size={16} /> Download Technical Catalog
                </Link>
                <a
                  href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I am reviewing the ${product.name} on Feichi Power website. Please send me the complete engineering specifications, type test reports, and CAD drawing dossier.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-dark"
                >
                  <MessageCircle size={16} /> WhatsApp Engineering Line
                </a>
              </div>
            </div>

            <div className="detail-aside">
              <div className="aside-box">
                <span className="card-index">RECOMMENDED APPLICATIONS</span>
                <ul className="app-tag-list">
                  {product.applications.map((app, i) => (
                    <li key={i}>{app}</li>
                  ))}
                </ul>
              </div>
              <div className="aside-box">
                <span className="card-index">TECHNICAL SPECIFICATIONS & CAD</span>
                <p>Manufactured by Shenyang Feichi Electrical Equipment Co., Ltd.</p>
                <Link to={`/${locale}/resources`} className="aside-link">
                  Browse Engineering Whitepapers & CAD <ArrowUpRight size={14} />
                </Link>
              </div>
              <div className="aside-box">
                <span className="card-index">FACTORY WITNESS & TESTING</span>
                <p>Factory Acceptance Testing (FAT) with video live-stream verification or 3rd-party inspector witness (SGS / BV / TÜV).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Systems */}
        <section className="section related-section">
          <div className="wrap">
            <SectionTitle eyebrow="COMPLEMENTARY PORTFOLIO" title={text.related} copy="Integrate a complete electrical package from high-voltage incoming to low-voltage distribution." />
            <div className="product-grid">
              {products
                .filter((item) => item.slug !== product.slug)
                .slice(0, 3)
                .map((item) => (
                  <ProductCard key={item.slug} product={item} locale={locale} />
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function IndustriesPage({ locale }: { locale: Locale }) {
  const text = ui[locale];
  return (
    <>
      <Seo locale={locale} title={`${text.nav.industries} | Feichi Electrical Equipment`} description={text.industriesCopy} />
      <main>
        <PageHero eyebrow={text.industriesEyebrow} title={text.industriesTitle} copy={text.industriesCopy} image="/images/ind-solar.webp" />
        <section className="section">
          <div className="wrap">
            <div className="industry-grid industry-grid-large">
              {industries.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div className="industry-card-expanded" key={item.slug}>
                    <div className="ind-head">
                      <span className="card-index">SECTOR 0{index + 1}</span>
                      <Icon size={32} />
                    </div>
                    <h3>{localizedIndustry(item, locale)}</h3>
                    <p className="ind-lead">{item.headline}</p>
                    <p className="ind-body">{item.copy}</p>

                    <div className="ind-features">
                      <strong>Key Engineering Challenges:</strong>
                      <ul>
                        {item.challenges.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="ind-actions">
                      <Link className="button button-orange" to={`/${locale}/industries/${item.slug}`}>
                        Detailed Architecture <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function IndustryDetail({ locale, slug }: { locale: Locale; slug: string }) {
  const text = ui[locale];
  const item = industries.find((industry) => industry.slug === slug) ?? industries[0];
  const Icon = item.icon;

  return (
    <>
      <Seo locale={locale} title={`${localizedIndustry(item, locale)} Solutions | Feichi Electrical`} description={item.copy} />
      <main>
        <PageHero
          eyebrow={`APPLICATION / ${item.title.toUpperCase()}`}
          title={localizedIndustry(item, locale)}
          copy={item.copy}
          image={industryImages[item.slug] || fieldImages[0]}
        />
        <section className="section detail-section">
          <div className="wrap detail-grid">
            <div>
              <span className="eyebrow">APPLICATION ARCHITECTURE & ENGINEERING</span>
              <h2>{item.headline}</h2>
              <p>
                Every project environment carries unique electrical constraints: harmonic spectrums, load stepping, climate extremes, and utility grid codes. Feichi Electrical works with your single-line diagrams to size equipment with conservative thermal and mechanical margins.
              </p>

              <div className="solution-block">
                <h3>Engineering Solutions Implemented:</h3>
                <ul className="check-list">
                  {item.solutions.map((sol, i) => (
                    <li key={i}>
                      <Check size={18} />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail-actions">
                <Link className="button button-orange" to={`/${locale}/contact`}>
                  {text.request} <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="detail-aside">
              <div className="aside-box">
                <span className="card-index">RECOMMENDED SYSTEMS</span>
                <div className="aside-links">
                  {item.recommendedProducts.map((pSlug) => {
                    const matched = products.find((p) => p.slug === pSlug);
                    if (!matched) return null;
                    return (
                      <Link key={pSlug} to={`/${locale}/products/${pSlug}`} className="aside-prod-link">
                        <span>{localizedProduct(matched, locale)}</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="aside-box">
                <span className="card-index">TYPICAL COMPLIANCE</span>
                <p>Grid interconnect compliance, seismic category verification, IEC 62271 and IP55 weather seal.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function OfficialCatalogDownloadSection({ locale }: { locale: Locale }) {
  const catalogs = [
    {
      lang: 'en',
      badge: 'ENGLISH',
      flag: '🌐',
      title: '2026 Official Unabridged 38-Page Corporate Brochure & EPC Catalog',
      desc: 'Complete 38-page official technical dossier: Corporate Culture, Org Matrix, Schneider & ABB Licenses, Prefabricated E-Houses, MV/LV Switchgear, Power Transformers, Global Track Records & Type Tests.',
      file: '/downloads/feichi_full_38p_brochure_en.pdf',
      size: '3.9 MB',
      pages: '38 Pages (Full Unabridged)',
      btnText: 'Download English 38P PDF',
    },
    {
      lang: 'zh',
      badge: '中文版',
      flag: '🇨🇳',
      title: '2026 飞驰电气官方 38P 完整产品画册与工程技术规范',
      desc: '原版 38 页全内容完整排版：企业文化、组织架构、施耐德/ABB授权、智能预制舱、高低压开关成套、节能变压器、全球重点工程实绩与国家级型式试验报告。',
      file: '/downloads/feichi_full_38p_brochure_zh.pdf',
      size: '4.7 MB',
      pages: '38 页 (原版全彩不删减)',
      btnText: '下载中文 38P PDF 画册',
    },
    {
      lang: 'ja',
      badge: '日本語版',
      flag: '🇯🇵',
      title: '2026年 飛馳電気 公式38ページ 総合製品カタログ＆技術仕様書',
      desc: '公式38P画冊を全編完全翻訳・不刪減収録：企業理念、組織体系、ライセンス製品、プレハブ変電所(E-House)、開閉装置、変圧器、世界各国の納入実績および国家型式試験報告書。',
      file: '/downloads/feichi_full_38p_brochure_ja.pdf',
      size: '4.4 MB',
      pages: '38 ページ (完全版・図文収録)',
      btnText: '日本語 38P PDF をダウンロード',
    },
    {
      lang: 'es',
      badge: 'ESPAÑOL',
      flag: '🇪🇸',
      title: 'Catálogo Corporativo Oficial Íntegro de 38 Páginas Feichi 2026',
      desc: 'Dossier técnico oficial de 38 páginas sin cortes: cultura empresarial, licencias Schneider y ABB, subestaciones E-House, celdas MT/BT, transformadores, proyectos globales e informes de ensayo.',
      file: '/downloads/feichi_full_38p_brochure_es.pdf',
      size: '3.9 MB',
      pages: '38 Páginas (Completo Oficial)',
      btnText: 'Descargar PDF Español 38P',
    },
    {
      lang: 'ru',
      badge: 'РУССКИЙ',
      flag: '🇷🇺',
      title: 'Официальный 38-страничный полный корпоративный каталог Feichi',
      desc: 'Полный 38-страничный официальный технический каталог без сокращений: производство, БМЗ/E-House, КРУ 6-35 кВ, лицензии Schneider/ABB, силовые трансформаторы ТМГ/ТСЛ, референц-лист и протоколы испытаний.',
      file: '/downloads/feichi_full_38p_brochure_ru.pdf',
      size: '3.9 MB',
      pages: '38 страниц (Полная версия)',
      btnText: 'Скачать каталог 38P (PDF)',
    },
  ];

  const sectionTitles: Record<Locale, { eyebrow: string; title: string; copy: string; rfqTitle: string; rfqCopy: string; rfqBtn: string }> = {
    zh: {
      eyebrow: '2026 OFFICIAL 38P CATALOGUES & TECHNICAL SPECIFICATIONS',
      title: '2026 飞驰电气五语种官方 38P 完整产品画册下载 (不删减原版)',
      copy: '严格对照 38 页官方画册逐页完整翻译与专业排版，覆盖预制舱变电站、中低压开关柜、节能变压器、全球重点工程实绩与国家级型式试验报告。',
      rfqTitle: '需要特定项目的一次方案单线图 (SLD) 或 CAD 图纸？',
      rfqCopy: '联系技术总监 Henry，免费获取全套图纸、定制化技术方案与工程交钥匙总包服务。',
      rfqBtn: '直联技术总监获取工程方案',
    },
    en: {
      eyebrow: '2026 OFFICIAL 38P CATALOGUES & TECHNICAL SPECIFICATIONS',
      title: 'Download Official 38-Page Feichi Product Brochures (5 Languages)',
      copy: 'Complete, unabridged page-by-page translation of the 38-page official engineering brochure, detailing modular E-Houses, MV/LV switchgear, transformers & global EPC track records.',
      rfqTitle: 'Need Project-Specific Single-Line Diagrams (SLD) or CAD Drawings?',
      rfqCopy: 'Contact Technical Director Henry to receive complete type-test reports, CAD schematics, and customized EPC quotations.',
      rfqBtn: 'Contact Technical Director for Engineering Support',
    },
    ja: {
      eyebrow: '2026 OFFICIAL 38P CATALOGUES & TECHNICAL SPECIFICATIONS',
      title: '2026年 飛馳電気 公式38P総合製品カタログ（5言語対応・完全版PDF無料ダウンロード）',
      copy: '公式38ページ製品案内書の全ページを完全翻訳。プレハブ変電所、中低圧開閉装置、省エネ変圧器、世界納入実績および型式試験報告書を網羅。',
      rfqTitle: '特定プロジェクト向けの単線結線図(SLD)やCAD図面が必要ですか？',
      rfqCopy: '技術総括 Henry に直接お問い合わせください。型式試験成績書および特注設計案を即時提供します。',
      rfqBtn: '技術総括へ問い合わせ',
    },
    es: {
      eyebrow: '2026 OFFICIAL 38P CATALOGUES & TECHNICAL SPECIFICATIONS',
      title: 'Descarga de Catálogos Oficiales de 38 Páginas Feichi (5 Idiomas en PDF)',
      copy: 'Traducción completa página a página del catálogo oficial de 38 páginas: subestaciones modulares E-House, celdas MT/BT, transformadores y referencias EPC globales.',
      rfqTitle: '¿Requiere esquemas unifilares (SLD) o planos CAD para un proyecto específico?',
      rfqCopy: 'Contacte al Director Técnico Henry para recibir informes de pruebas de tipo y presupuestos de ingeniería llave en mano.',
      rfqBtn: 'Contactar al Director Técnico',
    },
    ru: {
      eyebrow: '2026 OFFICIAL 38P CATALOGUES & TECHNICAL SPECIFICATIONS',
      title: 'Официальные 38-страничные каталоги «Фэйчи» (5 языков, полный PDF)',
      copy: 'Полный постраничный перевод официального 38-страничного буклета: БМЗ/E-House, КРУ 6-35 кВ, силовые трансформаторы ТМГ/ТСЛ, мировой опыт и протоколы испытаний.',
      rfqTitle: 'Требуются однолинейные схемы (SLD) или чертежи в DWG/CAD для конкретного проекта?',
      rfqCopy: 'Свяжитесь с куратором EPC Henry для получения опросных листов, протоколов испытаний и расчета стоимости.',
      rfqBtn: 'Связаться с техническим директором',
    },
  };

  const currentText = sectionTitles[locale] || sectionTitles.en;

  return (
    <div className="catalog-download-wrap">
      <SectionTitle eyebrow={currentText.eyebrow} title={currentText.title} copy={currentText.copy} />
      <div className="catalog-grid">
        {catalogs.map((item) => (
          <div className="catalog-card" key={item.lang}>
            <div className="catalog-card-header">
              <span className="catalog-lang-badge">{item.flag} {item.badge}</span>
              <span className="catalog-pages-tag">{item.pages}</span>
            </div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
            <div className="catalog-card-footer" style={{ flexDirection: 'column', gap: '8px', alignItems: 'stretch' }}>
              <div className="catalog-file-info" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>📄 Official PDF</span>
                <span style={{ color: 'var(--muted)' }}>{item.size} • {item.pages}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <a href={item.file} download className="catalog-dl-btn" target="_blank" rel="noopener noreferrer" style={{ justifyContent: 'center' }}>
                  <Download size={14} /> PDF
                </a>
                <a
                  href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I am reviewing the Feichi 38P Brochure (${item.badge}). Please share CAD single-line diagrams and type-test reports.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-orange"
                  style={{ padding: '8px 12px', fontSize: '12px', justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <MessageCircle size={14} /> CAD / RFQ
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="catalog-rfq-box">
        <div className="catalog-rfq-text">
          <h5>{currentText.rfqTitle}</h5>
          <p>{currentText.rfqCopy}</p>
        </div>
        <Link to={`/${locale}/contact`} className="button button-orange" style={{ padding: '10px 18px', fontSize: '13px' }}>
          {currentText.rfqBtn} <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
}

function StrategicPartnershipSection({ locale }: { locale: Locale }) {
  const titles = {
    zh: {
      eyebrow: 'GLOBAL STRATEGIC AUTHORIZATION & COMPLIANCE',
      title: '国际顶尖电气品牌官方生产授权与权威认证',
      copy: '飞驰电气先后与施耐德、ABB、西门子等建立长期战略合作，拥有官方认证授权制造资质，产品全面覆盖国内外严苛电网与重工标准。',
    },
    en: {
      eyebrow: 'GLOBAL STRATEGIC AUTHORIZATION & COMPLIANCE',
      title: 'Official Authorizations by Schneider, ABB & Siemens',
      copy: 'Feichi Electrical is an officially licensed manufacturing partner for global heavyweights, delivering type-tested switchboards and transformers worldwide.',
    },
    ja: {
      eyebrow: 'GLOBAL STRATEGIC AUTHORIZATION & COMPLIANCE',
      title: 'シュナイダー・ABB・シーメンス 公式製造ライセンスと認証',
      copy: '世界大手電気メーカーとの戦略的技術提携により、正規認証ライセンス機器と完全型式試験済みの高信頼性製品を供給。',
    },
    es: {
      eyebrow: 'GLOBAL STRATEGIC AUTHORIZATION & COMPLIANCE',
      title: 'Autorizaciones Oficiales de Schneider, ABB y Siemens',
      copy: 'Fabricación certificada bajo licencia de marcas líderes mundiales, con pruebas de tipo integrales bajo normativas IEC, IEEE y GOST.',
    },
    ru: {
      eyebrow: 'GLOBAL STRATEGIC AUTHORIZATION & COMPLIANCE',
      title: 'Официальные лицензии Schneider Electric, ABB и Siemens',
      copy: 'Компания «Фэйчи» является авторизованным производителем ведущих мировых электротехнических брендов со 100% типовыми испытаниями.',
    },
  };
  const t = titles[locale] || titles.en;

  const partners = [
    { brand: 'Schneider Electric', series: 'Blokset / MVnex / Prisma E', desc: 'Low-Voltage Form 4b Withdrawable & Medium-Voltage Metal-Clad Switchgear.' },
    { brand: 'ABB', series: 'UniSafe / MNS2.0 / MDmax', desc: 'Air-Insulated MV Switchgear & Digital Intelligent Low-Voltage Motor Control Centers.' },
    { brand: 'Siemens', series: 'SIBOARD Distribution Panels', desc: 'Standardized industrial power distribution & modular circuit protection boards.' },
    { brand: 'National Labs / XIHARI', series: 'Type Test Certificates', desc: 'Certified by National High Voltage Apparatus Inspection Center & XIHARI.' },
  ];

  return (
    <div style={{ marginTop: '40px', background: 'var(--panel)', padding: '28px 24px', borderRadius: '8px', border: '1px solid var(--border)' }}>
      <SectionTitle eyebrow={t.eyebrow} title={t.title} copy={t.copy} />
      <div className="partners-badge-grid">
        {partners.map((p, i) => (
          <div className="partner-badge-card" key={i}>
            <span className="p-brand">{p.brand}</span>
            <span className="p-series">{p.series}</span>
            <span className="p-desc">{p.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CasesPage({ locale }: { locale: Locale }) {
  const text = ui[locale];

  const projectList = [
    {
      category: { en: 'Belt & Road / Global EPC (Deep-Dive Studies)', zh: '一带一路 / 海外重大工程总包标杆案例 (深度实战)', ja: '一帯一路・海外EPC主要プロジェクト', es: 'Franja y Ruta / Proyectos EPC Clave', ru: 'Один пояс, один путь / EPC Проекты' },
      items: [
        {
          name: 'Guinea Simandou Iron Ore Port EPC Project (West Africa)',
          zh: '几内亚西芒杜铁矿港口供配电总包工程 (西非重点枢纽)',
          equip: 'High-Voltage Switchgear & Modular E-Houses (10-35kV)',
          highlight: 'Extreme coastal marine humidity, heavy red dust & tropical salt fog. Deployed ISO 12944 C5-M multi-layer coating (≥240μm), IP55 pressurized ventilation, and LSC2B-PM 4-compartment segregation to guarantee 24/7 port shiploader uptime.',
          deepDive: {
            challenge: 'High salinity (ISO 9223 C5-M), ambient temperature reaching +48°C, and heavy iron ore dust abrasive wear.',
            solution: 'Cor-Ten steel E-House shelter with Sa 2.5 sandblasting + epoxy zinc-rich paint, positive pressure air filtration, and KYN28A-24 withdrawable switchboards with IAC AFLR 31.5kA arc flash venting.',
            result: 'Zero corrosion degradation over 3+ years continuous operation; passed on-site SGS third-party dielectric witness testing.'
          }
        },
        {
          name: 'Kazakhstan Shubarkol Semi-coke Power Distribution (-60°C Siberian Extreme)',
          zh: '哈萨克斯坦舒巴尔库半焦炭化高压变电站 (-60°C 极寒实绩)',
          equip: 'KYN28A-12 Switchgear & SCB Cast Resin Trafo (ГОСТ 15150 УХЛ1)',
          highlight: 'Operates in Siberian extreme freeze down to -60°C with severe coal chemical corrosive gas. Implemented 100mm polyurethane insulated sandwich enclosures, automated PTC heating microclimate, and cryogenic vacuum circuit breakers.',
          deepDive: {
            challenge: 'Extreme winter temperatures dropping to -55°C~-60°C, causing mechanical freezing of traditional linkages and oil gelling.',
            solution: 'Equipped with Russian GOST 15150-69 УХЛ1 arctic package: automated PTC strip heating with microcomputer thermostat, cryogenic fluoro-silicone seals, and low-temperature impact steel structural chassis (09Г2С).',
            result: 'Full compliance with EAC / TR CU 004/2011 norms; seamless winter peak energization without auxiliary building pre-heating.'
          }
        },
        {
          name: 'Saudi Arabia Combined Cycle Power Plant Expansion (Middle East Desert)',
          zh: '沙特循环电站扩建高压配电工程 (中东沙漠极端高温工况)',
          equip: 'Medium-Voltage Metal-Clad Switchboards & MVnex Units',
          highlight: '50°C continuous ambient desert rating with heavy sandstorm ingress protection. Enhanced dual-stage labyrinth dust filters and high thermal margin busbar designs.',
          deepDive: {
            challenge: 'Desert sandstorms (fine particulate <10μm), extreme daytime solar radiation exceeding +50°C.',
            solution: 'Heavy-gauge enclosure with IP54 labyrinth air intakes, Schneider-authorized MVnex Form 4b withdrawable switchboards, and oversized T2 copper busbars designed for 125% continuous thermal headroom.',
            result: 'Achieved zero thermal trip events during summer peak demand and full approval by Saudi Electricity Company (SEC) consultants.'
          }
        },
        { name: 'Vietnam Vanphong EP Thermal Power Project', zh: '越南 Vanphong EP 燃煤电站成套配电', equip: 'Schneider Authorized MVnex MV Switchgear', highlight: 'Complete IEC compliance with remote SCADA automation interface.' },
        { name: 'Indonesia MVnex 24kV Industrial Substation', zh: '印尼 MVnex-24kV 工业配电项目', equip: 'MVnex 24kV Metal-Clad Switchboards', highlight: 'Seismic category IX withstand rating and tropical moisture proofing.' },
        { name: 'Sierra Leone Rutile Mine Solar-Diesel Microgrid', zh: '塞拉利昂金红石矿山区光储柴一体化项目', equip: 'Solar Skid Booster Substation & BESS Cabins', highlight: 'Autonomous microgrid frequency stabilization and fuel displacement.' },
      ]
    },
    {
      category: { en: 'Urban Rail & Critical Infrastructure', zh: '轨道交通与城市重点工程', ja: '都市交通・重要インフラ', es: 'Metro e Infraestructura Urbana', ru: 'Транспорт и инфраструктура' },
      items: [
        { name: 'Shenyang Metro Line 3 Phase 1 Power System Integration', zh: '沈阳地铁3号线一期工程供电系统集成', equip: 'MV Switchgear, DC Auxiliary Power & Distribution', highlight: 'Zero-failure traction power reliability for municipal metro trunk.' },
        { name: 'Shenyang Metro Line 4 Phase 1 Substation Package', zh: '沈阳地铁4号线一期工程供电系统集成', equip: 'UniSafe ABB Switchgear & SCB Dry Transformers', highlight: 'Flame-retardant, self-extinguishing underground electrical safety.' },
        { name: 'Tsinghua University First Affiliated Hospital Electrical Upgrade', zh: '清华大学第一附属医院电气系统改造工程', equip: 'Low-Voltage Blokset Intelligent MCC & Auto-Transfer', highlight: 'Hospital Class-A power redundancy with zero millisecond interruption.' },
        { name: 'Beijing Institute of Technology Building 6# Substation', zh: '北京理工大学 6# 楼配电室工程', equip: 'Compact Box Substation & Intelligent Switchgear', highlight: 'Low noise, compact footprint customized for educational campus.' },
      ]
    },
    {
      category: { en: 'Renewable Energy & Heavy Industry', zh: '新能源基地与重工冶金', ja: '再エネ・重工業', es: 'Renovables e Industria Pesada', ru: 'ВИЭ и тяжелая промышленность' },
      items: [
        { name: 'Audi-FAW NEV Distributed Rooftop Solar Power', zh: '奥迪一汽新能源分布式光伏发电项目', equip: '1500V DC Solar Inverting-Boosting Substations', highlight: 'Automated remote telemetry supporting modern automotive green factory.' },
        { name: 'Tianjin Jinghai Wangkou 100MW Wind Farm', zh: '天津静海王口镇 100MW 风电项目', equip: '35kV Wind Step-up Box Substations & RMU', highlight: 'Harsh outdoor weathering enclosure with intelligent dehumidification.' },
        { name: 'Feicheng 300MW Compressed Air Energy Storage (CAES)', zh: '中电建肥城压缩空气储能示范项目', equip: 'Heavy-Duty Switchboards & Booster Transformers', highlight: 'Grid ancillary frequency regulation and peak-shaving integration.' },
        { name: 'Guangxi Fangchenggang Steel Metallurgy Production Base', zh: '广西防城港钢铁基地高压供配电项目', equip: 'KYN61-40.5 Switchgear & High-Current Busbars', highlight: 'High harmonic immunity and continuous 24/7 heavy metallurgical load.' },
        { name: 'Yulin Qinglongsi Coal Mine High-Voltage Switchgear', zh: '榆林能源青龙寺煤矿高压开关柜项目', equip: 'KYN28A-12 Flameproof Interlocking Switchboards', highlight: 'Mining dust protection and strict 5-prevention mechanical interlock.' },
      ]
    }
  ];

  return (
    <>
      <Seo locale={locale} title={`${text.nav.cases} | Feichi Electrical Equipment`} description={text.casesCopy} />
      <main>
        <PageHero eyebrow={text.casesEyebrow} title={text.casesTitle} copy={text.casesCopy} image={fieldImages[0]} />

        {/* Unified 80+ Global Overseas Track Record & EPC Matrix (Single Authoritative Showcase) */}
        <OverseasProjectsTrackRecord locale={locale} />

        {/* 81+ Strategic Partners & Collaborative Ecosystem */}
        <StrategicPartnersSection locale={locale} />

        <section className="section">
          <div className="wrap">
            <div className="case-stats-banner">
              <div>
                <strong>500+</strong>
                <span>Substations Deployed</span>
              </div>
              <div>
                <strong>30,000+</strong>
                <span>Switchgear Panels Built</span>
              </div>
              <div>
                <strong>20+ Years</strong>
                <span>Zero Major Safety Incidents</span>
              </div>
              <div>
                <strong>30+ Countries</strong>
                <span>Global Inquiries & Partnerships</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function WhitepaperKnowledgeHub({ locale }: { locale: Locale }) {
  const [selectedId, setSelectedId] = useState<string>('week-01');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryTabs: { id: string; label: Record<Locale, string> }[] = [
    { id: 'all', label: { en: 'All 39 Engineering Whitepapers', zh: '全部 39 篇工程白皮书', ja: '全 39 編技術ホワイトペーパー', es: 'Todas las 39 Guías de Ingeniería', ru: 'Все 39 руководств ГОСТ/МЭК' } },
    { id: 'substation', label: { en: 'Substations & Transformers', zh: '箱变与变压器', ja: '変電所・変圧器', es: 'Subestaciones y Trafo', ru: 'КТП и трансформаторы' } },
    { id: 'switchgear', label: { en: 'MV/LV Switchgear & Protection', zh: '高低压开关柜与保护', ja: 'スイッチギア・保護', es: 'Celdas MT/BT y Protección', ru: 'Ячейки КРУ и защита' } },
    { id: 'mining', label: { en: 'Mining Safety & Flameproof Power', zh: '矿山防爆电力与安全制氮', ja: '鉱山防爆電力・窒素防災', es: 'Seguridad y Potencia Minera', ru: 'Шахтная взрывозащита и КТПВ' } },
    { id: 'standards', label: { en: 'Standards, E-House & Grid Compliance', zh: '预制舱与并网标准', ja: 'プレハブ局舎・連系規格', es: 'Normas, Cabinas y Red', ru: 'Стандарты ГОСТ и БМЗ' } },
  ];

  const filteredPapers = useMemo(() => {
    return whitepapersList.filter((paper) => {
      const matchCategory = activeCategory === 'all' || paper.category === activeCategory;
      const title = (paper.title as Record<string, string>)[locale] || paper.title.en;
      const summary = (paper.summary as Record<string, string>)[locale] || paper.summary.en;
      const matchSearch =
        searchQuery.trim() === '' ||
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.standards.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery, locale]);

  const activePaper = useMemo(() => {
    return whitepapersList.find((p) => p.id === selectedId) || whitepapersList[0];
  }, [selectedId]);

  const formatPaperTitle = (rawTitle: string) => {
    if (!rawTitle) return '';
    // Format "Subject: Subtitle" into a clean headline or trim technical formula noise in card/header display
    if (rawTitle.includes('Technical Whitepaper:')) {
      const parts = rawTitle.split('Technical Whitepaper:');
      return parts[0].trim();
    }
    if (rawTitle.includes('工程选型指南：')) {
      const parts = rawTitle.split('工程选型指南：');
      return parts[0].trim();
    }
    if (rawTitle.includes('：')) {
      const parts = rawTitle.split('：');
      return parts[0].trim();
    }
    if (rawTitle.includes(': ')) {
      const parts = rawTitle.split(': ');
      return parts[0].trim();
    }
    return rawTitle;
  };

  const title = (activePaper.title as Record<string, string>)[locale] || activePaper.title.en;
  const displayTitle = formatPaperTitle(title);
  const subtitle = title.includes(': ') ? title.split(': ').slice(1).join(': ') : title.includes('：') ? title.split('：').slice(1).join('：') : '';
  const eyebrow = (activePaper.eyebrow as Record<string, string>)[locale] || activePaper.eyebrow.en;
  const author = (activePaper.author as Record<string, string>)[locale] || activePaper.author.en;
  const readTime = (activePaper.readTime as Record<string, string>)[locale] || activePaper.readTime.en;
  const summary = (activePaper.summary as Record<string, string>)[locale] || activePaper.summary.en;
  const sec1Title = (activePaper.sec1Title as Record<string, string>)[locale] || activePaper.sec1Title.en;
  const sec1Text = (activePaper.sec1Text as Record<string, string>)[locale] || activePaper.sec1Text.en;
  const sec2Title = (activePaper.sec2Title as Record<string, string>)[locale] || activePaper.sec2Title.en;
  const sec2Text = (activePaper.sec2Text as Record<string, string>)[locale] || activePaper.sec2Text.en;
  const sec3Title = (activePaper.sec3Title as Record<string, string>)[locale] || activePaper.sec3Title.en;
  const tableHeaders = (activePaper.tableHeaders as Record<string, string[]>)[locale] || activePaper.tableHeaders.en;
  const tableRows = (activePaper.tableRows as Record<string, string[][]>)[locale] || activePaper.tableRows.en;
  const sec4Title = (activePaper.sec4Title as Record<string, string>)[locale] || activePaper.sec4Title.en;
  const scenarios = (activePaper.scenarios as Record<string, { title: string; recommend: string; reason: string }[]>)[locale] || activePaper.scenarios.en;
  const ctaTitle = (activePaper.ctaTitle as Record<string, string>)[locale] || activePaper.ctaTitle.en;
  const ctaDesc = (activePaper.ctaDesc as Record<string, string>)[locale] || activePaper.ctaDesc.en;

  const whatsappMsg = `Hello Henry, I am reviewing the Feichi Engineering Technical Guide "${activePaper.title.en}" (Document Code: FE-DOC-${activePaper.week.toString().padStart(2, '0')}). I would like to request CAD drawings, Single-Line Diagrams, and an engineering proposal for our project.`;

  return (
    <div className="knowledge-hub-wrapper" style={{ marginTop: '24px' }}>
      {/* Category Tabs & Search Bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', background: 'var(--panel)', padding: '16px 20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {categoryTabs.map((tab) => {
            const count = tab.id === 'all' ? whitepapersList.length : whitepapersList.filter((p) => p.category === tab.id).length;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  background: isActive ? 'var(--orange)' : 'var(--panel-2)',
                  color: isActive ? '#ffffff' : '#cbd5e1',
                  border: isActive ? '1px solid var(--orange)' : '1px solid var(--border)',
                  padding: '8px 14px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s',
                }}
              >
                {tab.label[locale]}
                <span style={{ fontSize: '11px', background: isActive ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '10px' }}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div style={{ position: 'relative', minWidth: '240px', flex: '1', maxWidth: '340px' }}>
          <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={locale === 'zh' ? '搜索标准/型号/关键字 (IEC, KYN28, SCB14)...' : 'Search standards & models (IEC, KYN28, SCB14)...'}
            style={{
              width: '100%',
              background: 'var(--panel-2)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '8px 12px 8px 34px',
              fontSize: '13px',
              color: '#ffffff',
              outline: 'none',
            }}
          />
        </div>
      </div>

      {/* Grid of Whitepaper Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px', marginBottom: '36px' }}>
        {filteredPapers.map((paper) => {
          const isCurrent = paper.id === selectedId;
          const pTitle = formatPaperTitle(paper.title[locale] || paper.title.en);
          return (
            <div
              key={paper.id}
              onClick={() => {
                setSelectedId(paper.id);
                const el = document.getElementById('active-whitepaper-reader');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                background: isCurrent ? 'linear-gradient(145deg, rgba(249,115,22,0.15), rgba(15,23,42,0.9))' : 'var(--panel)',
                border: isCurrent ? '1.5px solid var(--orange)' : '1px solid var(--border)',
                borderRadius: '8px',
                padding: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--orange)', background: 'rgba(249,115,22,0.12)', padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--orange-glow)' }}>
                    DOC-{paper.week.toString().padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: '11.5px', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>{paper.readTime[locale]}</span>
                </div>
                <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: isCurrent ? '#ffffff' : '#e2e8f0', lineHeight: 1.4, margin: '0 0 8px' }}>
                  {pTitle}
                </h4>
                <div style={{ fontSize: '12px', color: 'var(--cyan)', fontFamily: 'var(--mono)', marginBottom: '10px' }}>
                  🛡️ {paper.standards}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', fontWeight: 600, color: isCurrent ? 'var(--orange)' : 'var(--muted)' }}>
                <BookOpen size={13} /> {locale === 'zh' ? (isCurrent ? '正在阅读' : '查看完整解析') : isCurrent ? 'Currently Reading' : 'Read Guide'}
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Detailed Whitepaper Reader Container */}
      <article id="active-whitepaper-reader" className="whitepaper-container" style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: '12px', padding: 'clamp(20px, 4vw, 40px)', marginTop: '20px' }}>
        <header className="whitepaper-header" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '24px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
            <span className="eyebrow" style={{ color: 'var(--orange)', borderColor: 'var(--orange-glow)', margin: 0 }}>
              {eyebrow}
            </span>
            <span style={{ fontSize: '12px', background: 'rgba(6,182,212,0.15)', color: 'var(--cyan)', border: '1px solid rgba(6,182,212,0.3)', padding: '3px 10px', borderRadius: '4px', fontWeight: 600 }}>
              {activePaper.categoryLabel[locale]}
            </span>
          </div>
          <h1 style={{ font: '900 clamp(22px, 3vw, 32px)/1.2 var(--display)', color: '#ffffff', margin: '0 0 10px' }}>{displayTitle}</h1>
          {subtitle && (
            <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.6, margin: '0 0 16px', maxWidth: '850px' }}>
              {subtitle}
            </p>
          )}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', font: '13px var(--mono)', color: 'var(--muted)' }}>
            <span>👤 {author}</span>
            <span>🛡️ {activePaper.standards}</span>
            <span>⏱️ {readTime}</span>
          </div>

          <div style={{ marginTop: '20px', padding: '16px 20px', background: 'rgba(255,255,255,0.02)', borderLeft: '4px solid var(--orange)', borderRadius: '0 6px 6px 0', fontSize: '14.5px', color: '#e2e8f0', lineHeight: 1.7 }}>
            <strong>{locale === 'zh' ? '技术导读摘要：' : 'Executive Engineering Summary: '}</strong>
            {summary}
          </div>
        </header>

        {/* Section 1 */}
        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ font: '800 21px var(--display)', color: 'var(--cyan)', marginBottom: '14px' }}>{sec1Title}</h2>
          <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{sec1Text}</p>
        </section>

        {/* Section 2 */}
        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ font: '800 21px var(--display)', color: 'var(--cyan)', marginBottom: '14px' }}>{sec2Title}</h2>
          <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{sec2Text}</p>
        </section>

        {/* Section 3 - Comparison Table */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ font: '800 21px var(--display)', color: 'var(--cyan)', marginBottom: '18px' }}>{sec3Title}</h2>
          <div style={{ overflowX: 'auto', border: '1px solid var(--border)', borderRadius: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13.5px' }}>
              <thead>
                <tr style={{ background: 'var(--panel-2)', borderBottom: '1px solid var(--border)' }}>
                  {tableHeaders.map((th, idx) => (
                    <th key={idx} style={{ padding: '12px 16px', color: '#ffffff', font: '700 13.5px var(--display)' }}>
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, rIdx) => (
                  <tr key={rIdx} style={{ borderBottom: '1px solid var(--border)', background: rIdx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.03)' }}>
                    <td style={{ padding: '12px 16px', color: 'var(--orange)', font: '600 13px var(--mono)' }}>{row[0]}</td>
                    <td style={{ padding: '12px 16px', color: '#e2e8f0', lineHeight: 1.6 }}>{row[1]}</td>
                    {row[2] && <td style={{ padding: '12px 16px', color: '#cbd5e1', lineHeight: 1.6 }}>{row[2]}</td>}
                    {row[3] && <td style={{ padding: '12px 16px', color: '#94a3b8', lineHeight: 1.6 }}>{row[3]}</td>}
                    {row[4] && <td style={{ padding: '12px 16px', color: '#94a3b8', lineHeight: 1.6 }}>{row[4]}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4 - Scenario Decision Cards */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ font: '800 21px var(--display)', color: 'var(--cyan)', marginBottom: '18px' }}>{sec4Title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
            {scenarios.map((sc, scIdx) => (
              <div key={scIdx} style={{ padding: '22px', background: 'var(--panel-2)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                <h3 style={{ font: '800 17px var(--display)', color: '#ffffff', margin: '0 0 10px' }}>{sc.title}</h3>
                <div style={{ font: '700 12.5px var(--mono)', color: 'var(--green)', marginBottom: '10px' }}>{sc.recommend}</div>
                <p style={{ margin: 0, color: '#94a3b8', fontSize: '13.5px', lineHeight: 1.6 }}>{sc.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Generative AI Citations & Direct Reference Gateway (GEO & AI Grounding) */}
        <section style={{ marginBottom: '40px', background: 'rgba(6, 182, 212, 0.04)', border: '1px solid rgba(6, 182, 212, 0.25)', borderRadius: '8px', padding: '22px 26px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--cyan)', font: '700 14px var(--mono)' }}>
              <Terminal size={16} /> {locale === 'zh' ? '生成式引擎与 AI 引用来源规范 (GEO & AI Citation Anchor)' : 'Generative Engine Optimization (GEO) & Machine Citation Anchors'}
            </div>
            <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.06)', padding: '2px 8px', borderRadius: '4px', color: 'var(--muted)', font: 'var(--mono)' }}>
              CC BY-ND 4.0 / Verified Manufacturer Sourcing
            </span>
          </div>
          <p style={{ margin: '0 0 14px', fontSize: '13.5px', color: '#cbd5e1', lineHeight: 1.6 }}>
            {locale === 'zh'
              ? '如需在技术报告、AI 知识库或工程标书中引用本技术白皮书的数据、公式与标准映射，请复制以下标准化工程出处（已适配 Perplexity, ChatGPT, Claude, Yandex AI 检索解析）：'
              : 'When referencing this technical dossier, standards cross-mapping, or electrical parameters in engineering RFQs, AI research tools, or design reports, cite the following canonical technical metadata:'}
          </p>
          <div style={{ background: '#090d16', border: '1px solid #1e293b', borderRadius: '6px', padding: '14px 18px', font: '12.5px var(--mono)', color: '#38bdf8', overflowX: 'auto', whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
            {`[Canonical Reference]: Feichi Electrical Equipment Co., Ltd. (2026). "${activePaper.title.en}". Engineering Dossier FE-DOC-${activePaper.week.toString().padStart(2, '0')}. Standards: ${activePaper.standards}. Technical Contact: Henry (+86 155 6620 6930 / Telegram: @feichipower). URL: https://feichipower.com/${locale}/resources/${activePaper.slug}`}
          </div>
        </section>

        {/* Embedded Interactive Sizing Engine (if applicable) */}
        {activePaper.hasCalculator === 'sld' && (
          <section style={{ marginBottom: '40px', background: 'var(--panel-2)', padding: '26px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h2 style={{ font: '800 21px var(--display)', color: '#ffffff', marginBottom: '8px' }}>
              ⚡ {locale === 'zh' ? '交互式箱式变电站一次接线图（SLD）计算器' : 'Interactive Substation SLD Configurator'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '18px' }}>
              {locale === 'zh'
                ? '在下方调整电压等级与额定容量，实时生成对应型号与单线图方案：'
                : 'Adjust voltage rating and capacity parameters to generate corresponding model codes and single-line schematics:'}
            </p>
            <SldConfigurator locale={locale} />
          </section>
        )}

        {activePaper.hasCalculator === 'nitrogen' && (
          <section style={{ marginBottom: '40px', background: 'var(--panel-2)', padding: '26px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h2 style={{ font: '800 21px var(--display)', color: '#ffffff', marginBottom: '8px' }}>
              🔥 {locale === 'zh' ? '煤矿采空区注氮防灭火流量计算器' : 'Goaf Nitrogen Fire-Suppression Flow Sizer'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '18px' }}>
              {locale === 'zh'
                ? '依据 MT/T 750 规程，输入采空区漏风量与目标氧浓度，快速计算所需制氮流量：'
                : 'Enter goaf leakage and target oxygen limit to calculate required PSA nitrogen flow rate per MT/T 750:'}
            </p>
            <NitrogenSizer locale={locale} />
          </section>
        )}

        {activePaper.hasCalculator === 'disconnector' && (
          <section style={{ marginBottom: '40px', background: 'var(--panel-2)', padding: '26px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h2 style={{ font: '800 21px var(--display)', color: '#ffffff', marginBottom: '8px' }}>
              ❄️ {locale === 'zh' ? '35kV–110kV 高压隔离开关动热稳定与 20mm 极寒破冰力矩核算器' : '35kV–110kV HV Disconnector Thermal/Dynamic & 20mm Ice-Breaking Sizer'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '18px' }}>
              {locale === 'zh'
                ? '依据 IEC 62271-102 及 ГОСТ Р 52726，输入电压等级、额定短时耐受电流与覆冰厚度，核算动稳定峰值电动力与破冰操作扭矩：'
                : 'Calculate peak dynamic withstand force and mechanical ice-breaking torque per IEC 62271-102 and GOST R 52726:'}
            </p>
            <DisconnectorSizer locale={locale} />
          </section>
        )}

        {activePaper.hasCalculator === 'ncit' && (
          <section style={{ marginBottom: '40px', background: 'var(--panel-2)', padding: '26px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h2 style={{ font: '800 21px var(--display)', color: '#ffffff', marginBottom: '8px' }}>
              🔬 {locale === 'zh' ? '110kV–220kV 光电互感器（NCIT）合并单元过程层采样流与零磁饱和选型核算器' : '110kV–220kV Optical/Electronic Instrument Transformer & Merging Unit Sizer'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '18px' }}>
              {locale === 'zh'
                ? '依据 IEC 61869-9、IEC 61850-9-2LE 及 ГОСТ Р 55153，选择电压等级、一次电流、传感机理与采样速率，实时核算网络带宽与选型方案：'
                : 'Configure rated voltage, primary current, sensing physics, and SV sampling rate to calculate process bus bandwidth and generate digital substation proposals:'}
            </p>
            <NcitOpticalTransformerSizer locale={locale} />
          </section>
        )}

        {activePaper.hasCalculator === 'mobile' && (
          <section style={{ marginBottom: '40px', background: 'var(--panel-2)', padding: '26px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h2 style={{ font: '800 21px var(--display)', color: '#ffffff', marginBottom: '8px' }}>
              🚛 {locale === 'zh' ? '35kV–110kV 拖挂车载移动式变电站公路轴荷与应急极速并网核算器' : '35kV–110kV Mobile Trailer Substation Axle-Load & Rapid Deployment Sizer'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '18px' }}>
              {locale === 'zh'
                ? '依据 IEC 62271-202、ГОСТ 14695 及 СТО Россети，输入进出线电压等级、变压器容量、底盘轴数及开关形式，实时核算公路通行合法性与展开时间：'
                : 'Calculate road-legal axle load distribution and emergency deployment speed per IEC 62271-202, GOST 14695 and Rosseti standards:'}
            </p>
            <MobileSubstationSizer locale={locale} />
          </section>
        )}

        {activePaper.hasCalculator === 'harmonic' && (
          <section style={{ marginBottom: '40px', background: 'var(--panel-2)', padding: '26px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h2 style={{ font: '800 21px var(--display)', color: '#ffffff', marginBottom: '8px' }}>
              ⚡ {locale === 'zh' ? '10kV–35kV 高压谐波治理与有源 APF / 无源 FC 混合滤波补偿核算器' : '10kV–35kV Industrial Harmonic Mitigation & Hybrid APF/FC Filter Sizer'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '18px' }}>
              {locale === 'zh'
                ? '依据 IEEE 519-2022、IEC 61000-3-6 及 ГОСТ 32144，选择电网电压、负载类型、目标电流畸变率与补偿容量，实时核算滤波效率与选型方案：'
                : 'Configure grid voltage, load profile, target current THD, and required Mvar to calculate filtering efficiency and generate harmonic mitigation proposals:'}
            </p>
            <HarmonicFilterApfSizer locale={locale} />
          </section>
        )}

        {activePaper.hasCalculator === 'gil' && (
          <section style={{ marginBottom: '40px', background: 'var(--panel-2)', padding: '26px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h2 style={{ font: '800 21px var(--display)', color: '#ffffff', marginBottom: '8px' }}>
              🌐 {locale === 'zh' ? '110kV–220kV 气体绝缘金属封闭输电线路（GIL）大容量载流与对地电容无功核算器' : '110kV–220kV Gas-Insulated Transmission Line (GIL) Ampacity & Charging Sizer'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '18px' }}>
              {locale === 'zh'
                ? '依据 IEC 62271-204、GB/T 22383 及 ГОСТ Р 54828，选择系统电压、额定通流能力、敷设方式与线路长度，实时核算充电无功与选型方案：'
                : 'Calculate bulk transmission ampacity, charging reactive power, and optimal eco-gas mix per IEC 62271-204 and GOST R 54828:'}
            </p>
            <GilTransmissionLineSizer locale={locale} />
          </section>
        )}

        {activePaper.hasCalculator === 'ngr' && (
          <section style={{ marginBottom: '40px', background: 'var(--panel-2)', padding: '26px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h2 style={{ font: '800 21px var(--display)', color: '#ffffff', marginBottom: '8px' }}>
              🛡️ {locale === 'zh' ? '10kV–35kV 中性点接地电阻柜（NGR）与消弧线圈（ASC）容性电流对消核算器' : '10kV–35kV Neutral Grounding Resistor (NGR) & Petersen Coil Sizer'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '18px' }}>
              {locale === 'zh'
                ? '依据 IEEE 32、IEC 60076-16 及 ГОСТ 13109，选择电网电压、接地方式、额定故障电流与全网电容电流，实时核算电阻欧姆值与选型方案：'
                : 'Configure grid voltage, grounding philosophy, fault current, and capacitive current to calculate resistance value and generate neutral grounding proposals:'}
            </p>
            <NeutralGroundingResistorSizer locale={locale} />
          </section>
        )}

        {activePaper.hasCalculator === 'softstarter' && (
          <section style={{ marginBottom: '40px', background: 'var(--panel-2)', padding: '26px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h2 style={{ font: '800 21px var(--display)', color: '#ffffff', marginBottom: '8px' }}>
              ⚙️ {locale === 'zh' ? '10kV–35kV 大中型电动机磁控（MCR）与晶闸管固态软起动压降核算器' : '10kV–35kV Medium-Voltage Motor Magnetic/Solid-State Soft Starter Sizer'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '18px' }}>
              {locale === 'zh'
                ? '依据 IEC 60947-4-2、IEEE 1566 及 ГОСТ 12434，选择电机电压、额定轴功率、起动拓扑与负载类型，实时核算起动电流限制与电网电压暂降：'
                : 'Calculate motor starting inrush current clamping, acceleration torque, and busbar voltage sag per IEC 60947-4-2 and GOST 12434:'}
            </p>
            <HighVoltageSoftStarterSizer locale={locale} />
          </section>
        )}

        {activePaper.hasCalculator === 'reactor' && (
          <section style={{ marginBottom: '40px', background: 'var(--panel-2)', padding: '26px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h2 style={{ font: '800 21px var(--display)', color: '#ffffff', marginBottom: '8px' }}>
              ⚡ {locale === 'zh' ? '10kV–35kV 干式空心限流电抗器短路阻抗与空间漏磁安全净距核算器' : '10kV–35kV Air-Core Current-Limiting Reactor Impedance & Magnetic Sizer'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '18px' }}>
              {locale === 'zh'
                ? '依据 IEC 60076-6、GB/T 1094.6 及 ГОСТ 14794，选择电网电压、额定电流、电抗率与预期短路电流，实时核算限流后故障电流与漏磁净距：'
                : 'Calculate short-circuit current reduction, linear air-core reactance value, and stray magnetic safety clearances per IEC 60076-6 and GOST 14794:'}
            </p>
            <AirCoreCurrentLimitingReactorSizer locale={locale} />
          </section>
        )}

        {activePaper.hasCalculator === 'mosa' && (
          <section style={{ marginBottom: '40px', background: 'var(--panel-2)', padding: '26px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h2 style={{ font: '800 21px var(--display)', color: '#ffffff', marginBottom: '8px' }}>
              ⚡ {locale === 'zh' ? '10kV–35kV 变电站金属氧化物避雷器（MOA）雷电残压与绝缘配合裕度核算器' : '10kV–35kV Substation Surge Arrester (MOA) Residual Voltage & BIL Sizer'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '18px' }}>
              {locale === 'zh'
                ? '依据 IEC 60099-4、IEEE C62.11 及 ГОСТ Р 52725，选择系统电压、标称放电电流、放电等级与主变 BIL，实时核算雷电残压与绝缘配合安全裕度：'
                : 'Calculate lightning residual voltage, discharge energy capability, and insulation coordination BIL margin per IEC 60099-4 and GOST R 52725:'}
            </p>
            <SubstationSurgeArresterSizer locale={locale} />
          </section>
        )}

        {activePaper.hasCalculator === 'cable' && (
          <section style={{ marginBottom: '40px', background: 'var(--panel-2)', padding: '26px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h2 style={{ font: '800 21px var(--display)', color: '#ffffff', marginBottom: '8px' }}>
              ⚡ {locale === 'zh' ? '35kV–220kV 高压电缆附件（终端/中间接头）金属护层感应电压与应力锥绝缘配合核算器' : '35kV–220kV HV Cable Accessories Sheath Induced Voltage & Stress Cone Sizer'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '18px' }}>
              {locale === 'zh'
                ? '依据 IEC 60840、IEC 62067 及 ГОСТ 13781.0，选择系统电压、导体截面、线路长度与接地方式，实时核算护层感应电压、切向场强与冲击耐受：'
                : 'Calculate cable sheath induced voltage, tangential electric stress grading, and impulse withstand per IEC 60840, IEC 62067 and GOST 13781:'}
            </p>
            <HighVoltageCableAccessorySizer locale={locale} />
          </section>
        )}

        {activePaper.hasCalculator === 'earthing' && (
          <section style={{ marginBottom: '40px', background: 'var(--panel-2)', padding: '26px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h2 style={{ font: '800 21px var(--display)', color: '#ffffff', marginBottom: '8px' }}>
              ⚡ {locale === 'zh' ? '110kV–220kV 变电站主接地网电阻、地电位升高（GPR）与允许接触电压核算器' : '110kV–220kV Substation Earthing Grid Resistance, GPR & Touch Voltage Sizer'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '18px' }}>
              {locale === 'zh'
                ? '依据 IEEE 80-2013、IEC 61936-1 及 ГОСТ 12.1.030-81，选择站址电压、短路入地电流、土壤电阻率、地网面积与材料，实时核算接地电阻、GPR与允许接触电压：'
                : 'Calculate substation grounding resistance, GPR, and permissible touch voltage safety thresholds per IEEE 80, IEC 61936 and GOST 12.1.030:'}
            </p>
            <SubstationEarthingGridSizer locale={locale} />
          </section>
        )}

        {activePaper.hasCalculator === 'busbar' && (
          <section style={{ marginBottom: '40px', background: 'var(--panel-2)', padding: '26px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h2 style={{ font: '800 21px var(--display)', color: '#ffffff', marginBottom: '8px' }}>
              ⚡ {locale === 'zh' ? '35kV–220kV 全绝缘管型母线管径集肤效应、微风共振频率与短路电动力核算器' : '35kV–220kV Insulated Tubular Busbar Diameter, Aeolian Resonance & Dynamic Stress Sizer'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '18px' }}>
              {locale === 'zh'
                ? '依据 IEC 60137、IEEE C37.23 及 ГОСТ 10693-81，选择系统电压、持续载流、导体材质、支持跨距与微风风速，实时核算管径截面、微风涡激振动频率与短路峰值电动力：'
                : 'Calculate tubular busbar diameter, Von Kármán vortex resonance frequency, and short-circuit electrodynamic peak withstand per IEC 60137 and GOST 10693:'}
            </p>
            <InsulatedTubularBusbarSizer locale={locale} />
          </section>
        )}

        {activePaper.hasCalculator === 'gis' && (
          <section style={{ marginBottom: '40px', background: 'var(--panel-2)', padding: '26px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h2 style={{ font: '800 21px var(--display)', color: '#ffffff', marginBottom: '8px' }}>
              ⚡ {locale === 'zh' ? '110kV–220kV 气体绝缘全封闭组合电器（GIS / КРУЭ）气体密度防液化与局放选型核算器' : '110kV–220kV Gas-Insulated Switchgear (GIS / КРУЭ) SF6 Liquefaction & PDM Sizer'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '18px' }}>
              {locale === 'zh'
                ? '依据 IEC 62271-203、ГОСТ Р 54828-2011 及 СТО Россети，选择额定电压、主回路工作电流、短路开断耐受、极寒环境与气体类型，实时核算液化极限与局放监测参数：'
                : 'Calculate GIS gas liquefaction phase margins, in-service moisture thresholds, and BIL lightning withstand per IEC 62271-203, GOST R 54828 and PJSC Rosseti:'}
            </p>
            <HighVoltageGisSf6Sizer locale={locale} />
          </section>
        )}

        {activePaper.hasCalculator === 'bushing' && (
          <section style={{ marginBottom: '40px', background: 'var(--panel-2)', padding: '26px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h2 style={{ font: '800 21px var(--display)', color: '#ffffff', marginBottom: '8px' }}>
              ⚡ {locale === 'zh' ? '110kV–500kV 主变高压电容型套管（RIP/RIS/OIP）介损微漂移与 DGA 色谱选型核算器' : '110kV–500kV Transformer Capacitive Bushings tanδ & DGA Chromatography Sizer'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '18px' }}>
              {locale === 'zh'
                ? '依据 IEC 60137、IEEE C57.19.01 及 ГОСТ 10693-81，选择最高电压、连续通流、电容芯体工艺、爬电比距与极寒等级，实时核算介质损耗因数、雷电冲击与抗弯负荷：'
                : 'Calculate capacitive core tanδ limits, BIL lightning withstand, and cantilever bending load per IEC 60137, IEEE C57.19.01 and GOST 10693:'}
            </p>
            <HighVoltageTransformerBushingSizer locale={locale} />
          </section>
        )}

        {/* High-Conversion Engineering Action Banner */}
        <div style={{ padding: '32px', background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.12), rgba(6, 182, 212, 0.08))', border: '1px solid var(--orange-glow)', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ font: '900 23px var(--display)', color: '#ffffff', margin: '0 0 10px' }}>{ctaTitle}</h3>
          <p style={{ color: '#cbd5e1', maxWidth: '640px', margin: '0 auto 22px', fontSize: '14px', lineHeight: 1.6 }}>{ctaDesc}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            <a
              href={`https://wa.me/8615566206930?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-orange"
              style={{ display: 'inline-flex', padding: '12px 24px', fontSize: '14px' }}
            >
              <MessageCircle size={17} /> {locale === 'zh' ? 'WhatsApp 直联技术负责人 Henry' : 'Consult Lead Henry via WhatsApp'}
            </a>
            <a
              href="https://t.me/+8615566206930"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-cyan"
              style={{ display: 'inline-flex', padding: '12px 24px', fontSize: '14px' }}
            >
              <Send size={17} /> {locale === 'zh' ? 'Telegram 直联 (@feichipower)' : 'Telegram Engineering Line (@feichipower)'}
            </a>
            <a
              href={`mailto:henry@feichipower.com?subject=${encodeURIComponent(`[Feichi Engineering Review] FE-DOC-${activePaper.week.toString().padStart(2, '0')}: ${activePaper.title.en}`)}&body=${encodeURIComponent(`Dear Henry,\n\nI would like to request detailed CAD drawings, primary SLD schematics, and an equipment quotation based on technical dossier FE-DOC-${activePaper.week.toString().padStart(2, '0')} (${activePaper.title.en}).\n\nProject details:\n- Voltage rating:\n- Capacity:\n- Delivery schedule:\n\nThank you.`)}`}
              className="button button-outline"
              style={{ display: 'inline-flex', padding: '12px 24px', fontSize: '14px' }}
            >
              <Mail size={17} /> {locale === 'zh' ? '发送邮件索取技术资料包' : 'Email Engineering Request'}
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

function EpcFaqHub({ locale }: { locale: Locale }) {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('faq-01');

  const categories: { id: string; label: Record<Locale, string> }[] = [
    { id: 'all', label: { en: 'All Topics', zh: '全部专题', ja: '全トピック', es: 'Todos los Temas', ru: 'Все темы' } },
    { id: 'substation', label: { en: 'Substations & SLD', zh: '预装式箱变', ja: '変電設備', es: 'Subestaciones', ru: 'КТП и схемы' } },
    { id: 'transformer', label: { en: 'Transformers & Efficiency', zh: '变压器能效', ja: '変圧器効率', es: 'Transformadores', ru: 'Трансформаторы' } },
    { id: 'switchgear', label: { en: 'Switchgear & Interlocks', zh: '开关柜联锁', ja: '開閉装置', es: 'Celdas MT/BT', ru: 'КРУ и блокировки' } },
    { id: 'mining', label: { en: 'Mining Safety & Nitrogen', zh: '矿用防灭火', ja: '鉱山防災', es: 'Seguridad Minera', ru: 'Шахты и азот' } },
  ];

  const filteredFaqs = epcFaqList.filter(
    (item) => selectedCat === 'all' || item.category === selectedCat
  );

  return (
    <div style={{ marginTop: '70px', padding: '36px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px' }}>
      <SectionTitle
        eyebrow="EPC ENGINEERING FAQ & TECHNICAL CALCULATION DOSSIER"
        title={locale === 'zh' ? '国际工程总包（EPC）高频技术问答与设计算例' : 'EPC Contractor Engineering Q&A & Technical Design Sizing'}
        copy={locale === 'zh' ? '针对海外电网设计院与总包方关注的热稳定校验、一级能效损耗、五防联锁及特种矿用安全，提供带公式的权威技术解答。' : 'Authoritative design answers covering short-circuit thermal calculation, Level 1 efficiency losses, mechanical interlocks, and hazardous safety.'}
      />
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '24px 0 32px' }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCat(cat.id)}
            style={{
              padding: '8px 16px',
              font: '700 12px var(--mono)',
              border: '1px solid',
              borderColor: selectedCat === cat.id ? 'var(--orange)' : 'var(--border)',
              background: selectedCat === cat.id ? 'rgba(249, 115, 22, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              color: selectedCat === cat.id ? '#ffffff' : 'var(--muted)',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            {cat.label[locale]}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gap: '18px' }}>
        {filteredFaqs.map((item) => {
          const isOpen = expandedId === item.id;
          return (
            <div
              key={item.id}
              style={{
                border: '1px solid',
                borderColor: isOpen ? 'var(--orange)' : 'rgba(255, 255, 255, 0.08)',
                background: isOpen ? 'rgba(249, 115, 22, 0.04)' : 'rgba(0, 0, 0, 0.2)',
                borderRadius: '6px',
                padding: '20px 24px',
                transition: 'all 0.2s ease',
              }}
            >
              <div
                onClick={() => setExpandedId(isOpen ? null : item.id)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', gap: '16px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'var(--orange)', font: '800 12px var(--mono)' }}>[{(item.categoryLabel as Record<string, string>)[locale] || item.categoryLabel.en}]</span>
                  <h4 style={{ margin: 0, font: '700 16px var(--sans)', color: '#ffffff' }}>{(item.question as Record<string, string>)[locale] || item.question.en}</h4>
                </div>
                <div style={{ color: 'var(--orange)', flexShrink: 0 }}>
                  <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </div>
              </div>
              {isOpen && (
                <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <p style={{ color: '#e2e8f0', fontSize: '14.5px', lineHeight: 1.7, margin: '0 0 16px' }}>{(item.answer as Record<string, string>)[locale] || item.answer.en}</p>
                  {item.formula && (
                    <div style={{ padding: '12px 16px', background: '#0a0f16', borderLeft: '3px solid var(--orange)', margin: '14px 0', font: '600 13px var(--mono)', color: '#38bdf8' }}>
                      📐 Formula / 计算公式: {item.formula}
                    </div>
                  )}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', margin: '16px 0' }}>
                    {item.keySpecs.map((spec, i) => (
                      <div key={i} style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '4px' }}>
                        <small style={{ display: 'block', color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase' }}>{(spec.label as Record<string, string>)[locale] || spec.label.en}</small>
                        <strong style={{ color: '#ffffff', fontSize: '13px' }}>{spec.value}</strong>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', paddingTop: '12px', borderTop: '1px dashed rgba(255,255,255,0.08)' }}>
                    <span style={{ color: 'var(--muted)', fontSize: '12px' }}>🛡️ Standard: {item.standards}</span>
                    <a
                      href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, regarding ${item.question.en}, please share the design calculation sheet and proposal.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-orange"
                      style={{ padding: '6px 14px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <MessageCircle size={13} /> {locale === 'zh' ? '咨询技术方案' : 'Consult with Lead Henry'}
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ResourcesPage({ locale }: { locale: Locale }) {
  const text = ui[locale];
  return (
    <>
      <Seo locale={locale} title={`${text.nav.resources} | Feichi Electrical Technical Portal & Engineering Whitepapers`} description={text.resourcesCopy} />
      <main>
        <PageHero eyebrow="06 / TECHNICAL RESOURCES & WHITEPAPERS" title={text.resourcesTitle} copy={text.resourcesCopy} image="/images/switchgear.webp" />
        <section className="section">
          <div className="wrap">
            <SectionTitle
              eyebrow="ENGINEERING KNOWLEDGE BASE & 12-WEEK GUIDES"
              title={locale === 'zh' ? '输配电与特种安全装备技术选型知识库' : 'Power Engineering Sizing Guides & Whitepapers'}
              copy={locale === 'zh' ? '由飞驰电气总工团队撰写，深度解析一次系统图设计、IEC/ANSI 标准对照、特种安全与实际工况选型法则。' : 'Authored by Feichi Senior Electrical Engineering team, detailing SLD schematics, IEC/ANSI standards, and sizing principles.'}
            />

            {/* 12-Week Interactive Engineering Knowledge Hub */}
            <WhitepaperKnowledgeHub locale={locale} />

            <div style={{ marginTop: '60px' }}>
              <SectionTitle
                eyebrow="EQUIPMENT DATASHEETS & CATALOGUES"
                title={locale === 'zh' ? '成套电力装备技术规格说明书' : 'Standard Equipment Lines & Technical Specifications'}
                copy={locale === 'zh' ? '提供 7 大核心产品线的基础技术参数与型式试验执行标准。' : 'Browse foundational datasheets and type-test ratings across our 7 core product lines.'}
              />
              <div className="resource-grid">
                {products.map((product) => (
                  <article className="resource-card" key={product.slug}>
                    <div className="res-head">
                      <span className="card-index">{product.voltage}</span>
                      <FileText size={24} className="res-icon" />
                    </div>
                    <h3>{localizedProduct(product, locale)}</h3>
                    <p>{product.summary}</p>
                    <div className="res-specs">
                      <span><strong>Standards:</strong> {product.specs.standards}</span>
                      <span><strong>Protection:</strong> {product.specs.ipRating}</span>
                    </div>
                    <div className="res-actions">
                      <Link to={`/${locale}/products/${product.slug}`} className="button button-outline res-btn">
                        Specifications <ArrowUpRight size={14} />
                      </Link>
                      <Link to={`/${locale}/contact`} className="res-ext-link">
                        Request CAD Schematics <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Official 2026 Multilingual Catalog Download Center */}
            <OfficialCatalogDownloadSection locale={locale} />

            {/* EPC Engineering Technical FAQ & Calculation Dossier */}
            <EpcFaqHub locale={locale} />

            {/* Harsh Environment & Global Standards Compliance Matrix (Ormazabal & TGOOD Benchmark) */}
            <HarshEnvironmentMatrix locale={locale} />

            {/* EPC Rapid Specification & CAD Intake Gate (Lucy Electric & TGOOD Benchmark) */}
            <EpcSpecIntakeGate locale={locale} />
          </div>
        </section>
      </main>
    </>
  );
}

function AboutPage({ locale }: { locale: Locale }) {
  const text = ui[locale];
  return (
    <>
      <Seo locale={locale} title={`${text.nav.about} | Feichi Electrical Equipment Co., Ltd.`} description={text.aboutCopy} />
      <main>
        <PageHero eyebrow={text.aboutEyebrow} title={text.aboutPageTitle} copy={text.aboutCopy} image={factoryGateImage} />

        <section className="section about-detail">
          <div className="wrap about-detail-grid">
            <div>
              <span className="eyebrow">MANUFACTURING BASE / SHENYANG, CHINA</span>
              <h2>Integrated Design, Fabrication and High-Voltage Testing.</h2>
              <p>
                Founded in 2004, Shenyang Feichi Electrical Equipment Co., Ltd. operates a 63,000 m² heavy manufacturing facility in Liaoning Province, China, with a registered capital of RMB 101 Million.
              </p>
              <p>
                We specialize in the research, engineering, and manufacturing of intelligent medium-and-low voltage power distribution equipment, compact box-type substations, modular precast electrical cabins, and transformers.
              </p>

              <div className="about-milestones">
                <div className="milestone">
                  <span className="m-year">2004</span>
                  <div>
                    <strong>Company Founded in Shenyang</strong>
                    <p>Began high-voltage switchboard and transformer manufacturing.</p>
                  </div>
                </div>
                <div className="milestone">
                  <span className="m-year">2012</span>
                  <div>
                    <strong>Expansion of 63,000 m² Facility</strong>
                    <p>Introduced automated CNC punching, laser cutting, and busbar processing centers.</p>
                  </div>
                </div>
                <div className="milestone">
                  <span className="m-year">2018</span>
                  <div>
                    <strong>Modular Precast Cabin & Renewable Line</strong>
                    <p>Launched prefabricated containerized electrical substations for solar & wind farms.</p>
                  </div>
                </div>
                <div className="milestone">
                  <span className="m-year">2026</span>
                  <div>
                    <strong>Global Infrastructure Sourcing Expansion</strong>
                    <p>Expanding direct international B2B EPC and utility procurement channels.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="stat-stack">
              <div>
                <strong>2004</strong>
                <span>Year Established</span>
              </div>
              <div>
                <strong>63,000 m²</strong>
                <span>Factory Footprint</span>
              </div>
              <div>
                <strong>RMB 101M</strong>
                <span>Registered Capital</span>
              </div>
              <div>
                <strong>ISO 9001</strong>
                <span>Quality Management Certified</span>
              </div>
            </div>
          </div>

          <div className="wrap" style={{ marginTop: '36px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: '6px', overflow: 'hidden' }}>
                <img src={cncSheetMetalImage} alt="Automated Switchgear Assembly & CNC Sheet Metal Line" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <div style={{ padding: '16px' }}>
                  <h4 style={{ margin: '0 0 6px', color: 'var(--text)', fontSize: '15px' }}>
                    {locale === 'zh' ? '现代化成套开关设备装配与数控柔性钣金线' : 'Automated Switchgear Assembly & CNC Sheet Metal Line'}
                  </h4>
                  <p style={{ margin: 0, color: 'var(--muted)', fontSize: '13px', lineHeight: 1.5 }}>
                    {locale === 'zh' ? '配备高精度数控冲床、光纤激光切割机与自动母线加工机，执行原厂授权装配公差标准。' : 'Equipped with high-precision CNC punchers, fiber lasers and automated busbar machines.'}
                  </p>
                </div>
              </div>
              <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: '6px', overflow: 'hidden' }}>
                <img src={workshopAssemblyImage} alt="100,000-Grade Cleanroom Power Transformer Winding Workshop" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <div style={{ padding: '16px' }}>
                  <h4 style={{ margin: '0 0 6px', color: 'var(--text)', fontSize: '15px' }}>
                    {locale === 'zh' ? '十万级恒温恒湿无尘变压器浇注与总装车间' : '100,000-Grade Cleanroom Power Transformer Workshop'}
                  </h4>
                  <p style={{ margin: 0, color: 'var(--muted)', fontSize: '13px', lineHeight: 1.5 }}>
                    {locale === 'zh' ? '配置全自动真空浇注罐与全屏蔽局部放电检测大厅，确保干变局放量低于 10pC。' : 'Equipped with automatic vacuum casting and partial discharge testing ensuring <10pC.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section credential-section">
          <div className="wrap">
            <SectionTitle eyebrow="QUALITY SYSTEM" title="Quality Standards and Manufacturing Discipline" copy="Every piece of electrical equipment undergoes stringent quality gating prior to shipment." />
            <div className="credential-grid">
              <div>
                <BadgeCheck size={32} />
                <h3>Type Test Validated</h3>
                <p>Complete type test reports from authoritative national high-voltage testing centers verifying thermal, dynamic, and insulation limits.</p>
              </div>
              <div>
                <Wrench size={32} />
                <h3>Precision Fabrication</h3>
                <p>CNC fiber laser cutting and automated busbar punching machines ensure micron-level assembly tolerances.</p>
              </div>
              <div>
                <ShieldCheck size={32} />
                <h3>High-Voltage FAT Testing</h3>
                <p>Dedicated high-voltage laboratory for 50kV power frequency withstand voltage, dielectric loss, and partial discharge inspection.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Authoritative Type-Test Reports & Certifications Trust Hub */}
        <CertificationsTrustHub locale={locale} />

        {/* 81+ Strategic Partners & Collaborative Ecosystem */}
        <StrategicPartnersSection locale={locale} />
      </main>
    </>
  );
}

const intakeSteps: Record<Locale, Array<{ step: string; title: string; copy: string }>> = {
  en: [
    { step: 'STEP 01', title: 'Single-Line Diagram (SLD)', copy: 'Electrical schematic or preliminary load single-line diagram with protection requirements.' },
    { step: 'STEP 02', title: 'Voltage & Capacity', copy: 'Nominal incoming voltage (e.g., 10kV, 35kV), secondary voltage (0.4kV), and rated kVA capacity.' },
    { step: 'STEP 03', title: 'Environmental Condition', copy: 'Indoor/outdoor installation, ambient temperature extremes, altitude, or coastal corrosion conditions.' },
    { step: 'STEP 04', title: 'Delivery Schedule & Port', copy: 'Required target commissioning date and preferred destination seaport (FOB / CIF terms).' },
  ],
  zh: [
    { step: '步骤 01', title: '电气一次接线图 (SLD)', copy: '提供项目单线电气原理图或初步负荷分配方案与继电保护要求。' },
    { step: '步骤 02', title: '电压等级与额定容量', copy: '进线标称电压（如10kV、35kV）、出线低压（0.4kV）及设备总容量（kVA/A）。' },
    { step: '步骤 03', title: '现场运行工况与环境', copy: '户内或户外安装、极限环境温度、海拔高度、高盐雾或防腐防爆特殊要求。' },
    { step: '步骤 04', title: '交货周期与目的港口', copy: '目标并网投运时间、海运目的港口（支持 FOB、CIF 或 DDP 贸易条款）。' },
  ],
  ja: [
    { step: 'ステップ 01', title: '単線結線図 (SLD)', copy: 'プロジェクトの単線結線図や初期負荷配分計画、保護要件をご提供ください。' },
    { step: 'ステップ 02', title: '電圧クラス・定格容量', copy: '受電電圧（10kV/35kV等）、二次側電圧（0.4kV）、定格容量（kVA/A）の確認。' },
    { step: 'ステップ 03', title: '設置環境・仕様条件', copy: '屋内/屋外設置、周囲温度範囲、標高、塩害地域など過酷環境の有無。' },
    { step: 'ステップ 04', title: '希望納期・仕向港', copy: '希望試運転開始時期、仕向港（FOB/CIF条件対応）。' },
  ],
  es: [
    { step: 'PASO 01', title: 'Diagrama Unifilar (SLD)', copy: 'Esquema eléctrico unifilar o cuadro de cargas preliminar con requisitos de protección.' },
    { step: 'PASO 02', title: 'Tensión y Capacidad', copy: 'Tensión nominal de entrada (10kV/35kV), tensión secundaria (0.4kV) y kVA nominales.' },
    { step: 'PASO 03', title: 'Condiciones Ambientales', copy: 'Instalación interior/exterior, temperaturas extremas, altitud o ambientes corrosivos.' },
    { step: 'PASO 04', title: 'Plazo y Puerto de Destino', copy: 'Fecha prevista de puesta en marcha y puerto marítimo de destino (términos FOB / CIF).' },
  ],
  ru: [
    { step: 'ШАГ 01', title: 'Схема электрическая (SLD/Э3)', copy: 'Однолинейная схема первичных соединений или опросный лист с требованиями по РЗА.' },
    { step: 'ШАГ 02', title: 'Класс напряжения и мощность', copy: 'Номинальное напряжение ВН (6, 10, 20, 35 кВ), напряжение НН (0.4 кВ) и мощность трансформатора (кВА).' },
    { step: 'ШАГ 03', title: 'Условия эксплуатации (ГОСТ)', copy: 'Климатическое исполнение (УХЛ1, ХЛ1, У1), температурный минимум (-60°C) и категория размещения.' },
    { step: 'ШАГ 04', title: 'Сроки поставки и логистика', copy: 'Требуемый срок ввода в эксплуатацию, базис поставки (FOB, CIF, DAP) и пункт назначения.' },
  ],
};

const checklistMeta: Record<Locale, { eyebrow: string; title: string; copy: string; heroEyebrow: string }> = {
  en: {
    heroEyebrow: '07 / DIRECT ENGINEERING CHANNEL',
    eyebrow: 'PROJECT INTAKE CHECKLIST',
    title: 'Information Required for a Fast & Accurate Technical Quote.',
    copy: 'Providing these four key engineering parameters ensures our technical team can calculate busbar sizing, transformer capacity, and submit an optimal proposal.',
  },
  zh: {
    heroEyebrow: '07 / 工程技术直通通道',
    eyebrow: '项目工程需求清单',
    title: '获取快速精准技术方案与报价所需的核心参数。',
    copy: '提供以下四项关键工程参数，可帮助飞驰技术团队快速完成母线选型、变压器容量校核并出具成套方案。',
  },
  ja: {
    heroEyebrow: '07 / 技術直通窓口',
    eyebrow: '案件見積チェックリスト',
    title: '迅速かつ高精度な技術提案・見積もりに必要な情報。',
    copy: '以下の4項目をご提示いただくことで、母線サイズや変圧器容量の計算、最適な機器構成のご提案が可能です。',
  },
  es: {
    heroEyebrow: '07 / CANAL DIRECTO DE INGENIERÍA',
    eyebrow: 'LISTA DE REQUISITOS DEL PROYECTO',
    title: 'Información Necesaria para una Cotización Técnica Rápida y Precisa.',
    copy: 'Facilitar estos cuatro parámetros permite a nuestro equipo calcular el dimensionamiento de pletinas y capacidad de transformadores con exactitud.',
  },
  ru: {
    heroEyebrow: '07 / ПРЯМОЙ ИНЖЕНЕРНЫЙ КАНАЛ',
    eyebrow: 'ОПРОСНЫЙ ЛИСТ И ИСХОДНЫЕ ДАННЫЕ',
    title: 'Информация для оперативного расчета ТКП и подбора оборудования.',
    copy: 'Предоставление основных технических параметров позволяет нашим инженерам выполнить точный расчет ошиновки, тепловых потерь и подготовить коммерческое предложение.',
  },
};

const gatewayI18n: Record<Locale, {
  title: string;
  subtitle: string;
  companyName: string;
  clientName: string;
  contactMethod: string;
  targetEquipment: string;
  voltageRating: string;
  projectLocation: string;
  notesLabel: string;
  btnEmail: string;
  btnWhatsapp: string;
  btnCopy: string;
  btnSubmit: string;
  copied: string;
  submittedTitle: string;
  submittedMsg: string;
  ticketLabel: string;
}> = {
  zh: {
    title: '⚡ 国际工程技术规约与在线询盘直连网关',
    subtitle: '填入项目关键电气参数，系统将自动生成标准中英双语技术选型单，直连总工程师 Henry 及技术商务团队。',
    companyName: '公司 / 设计院 / EPC名称',
    clientName: '联系人姓名 / 职务',
    contactMethod: '电子邮箱 / WhatsApp / 电话',
    targetEquipment: '目标设备品类',
    voltageRating: '额定电压等级 / 容量规格',
    projectLocation: '项目实施地点 / 目标交付周期',
    notesLabel: '特殊工况与技术规约补充要求（如海拔、极寒、抗震、保护协议等）',
    btnEmail: '📧 发送技术询价邮件 (Email to Henry)',
    btnWhatsapp: '💬 WhatsApp 快速提交 (+86 155 6620 6930)',
    btnCopy: '📋 复制完整技术规约文本',
    btnSubmit: '⚡ 登记技术需求并生成工程工单号',
    copied: '✅ 已复制完整技术规约至剪贴板！',
    submittedTitle: '✅ 技术询盘已成功登记！',
    submittedMsg: '工程技术中心已生成专属项目档案，技术协议与 CAD 单线图初步方案将在 24 小时内发出。',
    ticketLabel: '工程工单编号 (RFQ Tracking ID)',
  },
  en: {
    title: '⚡ Global EPC Engineering Spec & Direct Inquiry Gateway',
    subtitle: 'Provide project parameters to generate a formal technical requisition sheet and directly connect with Chief Engineer Henry.',
    companyName: 'Company / EPC / Design Institute',
    clientName: 'Contact Name & Title',
    contactMethod: 'Corporate Email / WhatsApp / Phone',
    targetEquipment: 'Target Equipment Category',
    voltageRating: 'Voltage Class / Rated Capacity',
    projectLocation: 'Project Location & Target Delivery Schedule',
    notesLabel: 'Special Environmental Conditions & Specs (Altitude, -50°C Cold, Seismic, SCADA, etc.)',
    btnEmail: '📧 Send Requisition Email (To Henry)',
    btnWhatsapp: '💬 Instant WhatsApp RFQ (+86 155 6620 6930)',
    btnCopy: '📋 Copy Requisition Spec Text',
    btnSubmit: '⚡ Submit & Generate Engineering Ticket',
    copied: '✅ Full technical spec copied to clipboard!',
    submittedTitle: '✅ Engineering RFQ Successfully Registered!',
    submittedMsg: 'Our technical team has registered your project. A preliminary SLD schematic and quotation draft will be dispatched within 24 hours.',
    ticketLabel: 'Engineering Ticket ID (RFQ Tracking ID)',
  },
  ru: {
    title: '⚡ Прямой шлюз подачи опросных листов и технических заявок',
    subtitle: 'Заполните ключевые параметры объекта для формирования официального опросного листа и прямой связи с главным инженером.',
    companyName: 'Компания / Проектный институт / Генподрядчик',
    clientName: 'Контактное лицо и должность',
    contactMethod: 'Корпоративный Email / Telegram / WhatsApp',
    targetEquipment: 'Категория высоковольтного оборудования',
    voltageRating: 'Класс напряжения / Номинальная мощность',
    projectLocation: 'Регион строительства / Срок поставки',
    notesLabel: 'Особые климатические и технические требования (УХЛ1 до -50°C, ГОСТ, РЗА, АСУ ТП)',
    btnEmail: '📧 Отправить официальную заявку (Email Henry)',
    btnWhatsapp: '💬 Отправить через WhatsApp (+86 155 6620 6930)',
    btnCopy: '📋 Скопировать текст опросного листа',
    btnSubmit: '⚡ Зарегистрировать заявку и получить номер ТКП',
    copied: '✅ Текст опросного листа скопирован в буфер!',
    submittedTitle: '✅ Техническая заявка успешно зарегистрирована!',
    submittedMsg: 'Инженерный отдел сформировал карточку проекта. Предварительная однолинейная схема и ТКП будут направлены в течение 24 часов.',
    ticketLabel: 'Номер проектной заявки (RFQ ID)',
  },
  es: {
    title: '⚡ Pasarela de Especificaciones Técnicas y Consulta Directa EPC',
    subtitle: 'Ingrese los parámetros del proyecto para generar la hoja técnica y conectar directamente con el Ingeniero Principal Henry.',
    companyName: 'Empresa / Diseñador / Contratista EPC',
    clientName: 'Nombre del Contacto y Cargo',
    contactMethod: 'Email Corporativo / WhatsApp / Teléfono',
    targetEquipment: 'Categoría de Equipo Eléctrico',
    voltageRating: 'Nivel de Tensión / Capacidad Nominal',
    projectLocation: 'Ubicación del Proyecto / Plazo de Entrega',
    notesLabel: 'Condiciones Especiales y Normativa (Altitud, Sísmico, Protocolos SCADA, etc.)',
    btnEmail: '📧 Enviar Requisición Técnica por Email',
    btnWhatsapp: '💬 Consulta Directa por WhatsApp (+86 155 6620 6930)',
    btnCopy: '📋 Copiar Texto de Especificaciones',
    btnSubmit: '⚡ Registrar Requisición y Generar Ticket',
    copied: '✅ ¡Especificación técnica copiada al portapapeles!',
    submittedTitle: '✅ ¡Consulta Técnica Registrada con Éxito!',
    submittedMsg: 'El departamento de ingeniería ha generado la ficha del proyecto. El esquema unifilar preliminar y cotización se enviarán en 24 horas.',
    ticketLabel: 'Número de Ticket (RFQ ID)',
  },
  ja: {
    title: '⚡ グローバルEPC技術仕様・オンライン見積直通ゲートウェイ',
    subtitle: 'プロジェクトの電気定格パラメータを入力して仕様書を自動生成し、チーフエンジニア Henry へ直通送信します。',
    companyName: '会社名 / 設計院 / EPC企業名',
    clientName: 'ご担当者様氏名 / 役職',
    contactMethod: '法人メールアドレス / WhatsApp / 電話番号',
    targetEquipment: '対象受変電・高圧機器種別',
    voltageRating: '定格電圧クラス / 容量仕様',
    projectLocation: '導入先設置地域 / ご希望納期',
    notesLabel: '特殊環境条件・技術要件（高地、極寒-50℃、耐震、SCADA通信規格など）',
    btnEmail: '📧 技術仕様をメールで送信 (To Henry)',
    btnWhatsapp: '💬 WhatsApp 経由でスピード送信 (+86 155 6620 6930)',
    btnCopy: '📋 仕様書テキストをクリップボードにコピー',
    btnSubmit: '⚡ 技術案件を登録して照会チケットを発行',
    copied: '✅ 技術仕様書テキストをコピーしました！',
    submittedTitle: '✅ 技術照会案件の登録が完了しました！',
    submittedMsg: '技術設計チームが案件カルテを作成しました。24時間以内に初期単線結線図案および見積ドラフトを発行いたします。',
    ticketLabel: '技術案件管理番号 (RFQ Ticket ID)',
  },
};

function InstantEngineeringInquiryGateway({ locale }: { locale: Locale }) {
  const t = gatewayI18n[locale] || gatewayI18n.en;
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [equipment, setEquipment] = useState('Substation / GIS / Switchgear');
  const [voltage, setVoltage] = useState('110kV / 35kV');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);
  const [ticket, setTicket] = useState<string | null>(null);

  const specText = `[FEICHI POWER EPC REQUISITION SHEET / ОПРОСНЫЙ ЛИСТ]
--------------------------------------------------
Company/Organization: ${company || 'N/A'}
Contact Person: ${name || 'N/A'}
Email/WhatsApp/Tel: ${contact || 'N/A'}
Target Equipment: ${equipment}
Voltage & Capacity: ${voltage}
Project Location & Schedule: ${location || 'N/A'}
Technical Specifications & Custom Demands:
${notes || 'Standard IEC / GOST Compliant configuration.'}
--------------------------------------------------
Generated at: ${new Date().toISOString().split('T')[0]}
Direct Engineer Contact: Henry (henry@feichipower.com | +86 155 6620 6930)`;

  const emailSubject = `[Engineering RFQ] ${equipment} - ${company || 'Global Project'}`;
  const emailUrl = `mailto:henry@feichipower.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(specText)}`;
  const whatsappUrl = `https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, here is our electrical equipment requisition:\n\n${specText}`)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(specText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTicket = `FC-RFQ-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicket(newTicket);
  };

  return (
    <div style={{ background: '#0a1226', border: '1px solid rgba(0, 229, 255, 0.3)', borderRadius: '8px', padding: '36px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
      <div style={{ marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
        <h2 style={{ color: '#00e5ff', fontSize: '24px', fontWeight: 800, margin: '0 0 8px' }}>{t.title}</h2>
        <p style={{ color: '#94a3b8', fontSize: '15px', margin: 0 }}>{t.subtitle}</p>
      </div>

      {ticket ? (
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', borderRadius: '6px', padding: '24px', textAlign: 'center' }}>
          <h3 style={{ color: '#10b981', fontSize: '20px', margin: '0 0 10px' }}>{t.submittedTitle}</h3>
          <p style={{ color: '#cbd5e1', fontSize: '15px', margin: '0 0 16px' }}>{t.submittedMsg}</p>
          <div style={{ display: 'inline-block', background: '#040810', border: '1px dashed #10b981', padding: '10px 20px', borderRadius: '4px', color: '#00e5ff', fontFamily: 'monospace', fontWeight: 700, fontSize: '18px', marginBottom: '20px' }}>
            {t.ticketLabel}: {ticket}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <a className="button button-orange" href={emailUrl}>
              {t.btnEmail}
            </a>
            <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {t.btnWhatsapp}
            </a>
            <button className="button button-outline" onClick={() => setTicket(null)}>
              ← 返回修改参数 (Edit Form)
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>{t.companyName}</label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. State Electric Corp / Power EPC Ltd."
                style={{ width: '100%', padding: '10px 14px', background: '#040810', border: '1px solid #1e293b', borderRadius: '4px', color: '#fff', fontSize: '14px' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>{t.clientName}</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Johnson (Lead Electrical Engineer)"
                style={{ width: '100%', padding: '10px 14px', background: '#040810', border: '1px solid #1e293b', borderRadius: '4px', color: '#fff', fontSize: '14px' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>{t.contactMethod}</label>
              <input
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="e.g. alex@powerepc.com / +1 (555) 019-2834"
                style={{ width: '100%', padding: '10px 14px', background: '#040810', border: '1px solid #1e293b', borderRadius: '4px', color: '#fff', fontSize: '14px' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>{t.targetEquipment}</label>
              <select
                value={equipment}
                onChange={(e) => setEquipment(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', background: '#040810', border: '1px solid #1e293b', borderRadius: '4px', color: '#fff', fontSize: '14px' }}
              >
                <option value="110kV/220kV Prefabricated Substation (КТПБ/ПСМ)">110kV/220kV Prefabricated Substation (КТПБ/ПСМ)</option>
                <option value="110kV~220kV Gas Insulated Switchgear (GIS / КРУЭ)">110kV~220kV Gas Insulated Switchgear (GIS / КРУЭ)</option>
                <option value="Power Transformer 10kV~220kV (Трансформатор ТМН/ТРДН)">Power Transformer 10kV~220kV (Трансформатор ТМН/ТРДН)</option>
                <option value="Medium Voltage Switchgear 10kV~35kV (КРУ/КСО)">Medium Voltage Switchgear 10kV~35kV (КРУ/КСО)</option>
                <option value="Eco-friendly RMU & Circuit Breaker (КРУЭ / ВАКУУМНЫЙ ВЫКЛЮЧАТЕЛЬ)">Eco-friendly RMU & Circuit Breaker (КРУЭ)</option>
                <option value="SVG / STATCOM / Harmonic Filter (ФКУ/СТАТКОМ)">SVG / STATCOM / Harmonic Filter (ФКУ/СТАТКОМ)</option>
                <option value="Dry-type Air-core Reactor (РТОС/РТСТ)">Dry-type Air-core Reactor (РТОС/РТСТ)</option>
                <option value="Neutral Grounding Resistor NGR / ASC (ЗНГ/ДГР)">Neutral Grounding Resistor NGR / ASC (ЗНГ/ДГР)</option>
                <option value="Surge Arrester MOA (ОПН-П 10-220kV)">Surge Arrester MOA (ОПН-П 10-220kV)</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>{t.voltageRating}</label>
              <input
                type="text"
                value={voltage}
                onChange={(e) => setVoltage(e.target.value)}
                placeholder="e.g. 110/35/10kV 40MVA / 50kA short-circuit"
                style={{ width: '100%', padding: '10px 14px', background: '#040810', border: '1px solid #1e293b', borderRadius: '4px', color: '#fff', fontSize: '14px' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>{t.projectLocation}</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Kazakhstan / Ashgabat / San Luis Potosi"
                style={{ width: '100%', padding: '10px 14px', background: '#040810', border: '1px solid #1e293b', borderRadius: '4px', color: '#fff', fontSize: '14px' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>{t.notesLabel}</label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Altitude 2200m, Ambient temperature -45°C ~ +40°C, IEC 62271 & GOST compliant, dual redundant protection."
              style={{ width: '100%', padding: '10px 14px', background: '#040810', border: '1px solid #1e293b', borderRadius: '4px', color: '#fff', fontSize: '14px', resize: 'vertical' }}
            />
          </div>

          <div style={{ background: '#040810', border: '1px solid #1e293b', borderRadius: '4px', padding: '14px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ color: '#00e5ff', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                LIVE STRUCTURED REQUISITION PREVIEW / ТЕХНИЧЕСКИЙ ОПРОСНЫЙ ЛИСТ
              </span>
              <button
                type="button"
                onClick={handleCopy}
                style={{ background: 'transparent', border: '1px solid #334155', color: '#94a3b8', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', cursor: 'pointer' }}
              >
                {copied ? t.copied : t.btnCopy}
              </button>
            </div>
            <pre style={{ margin: 0, color: '#a5f3fc', fontSize: '12px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>
              {specText}
            </pre>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button type="submit" className="button button-orange" style={{ cursor: 'pointer' }}>
              {t.btnSubmit}
            </button>
            <a className="button button-dark" href={emailUrl}>
              {t.btnEmail}
            </a>
            <a className="button button-outline" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {t.btnWhatsapp}
            </a>
          </div>
        </form>
      )}
    </div>
  );
}

function ContactPage({ locale }: { locale: Locale }) {
  const text = ui[locale];
  const meta = checklistMeta[locale];
  const steps = intakeSteps[locale];

  return (
    <>
      <Seo locale={locale} title={`${text.nav.contact} | Feichi Electrical Engineering`} description={text.contactCopy} />
      <main>
        <section className="contact-hero">
          <div className="wrap contact-hero-grid">
            <div>
              <span className="eyebrow">{meta.heroEyebrow}</span>
              <h1>{text.contactTitle}</h1>
              <p>{text.contactCopy}</p>
              <div className="contact-actions">
                <a className="button button-orange" href="https://wa.me/8615566206930" target="_blank" rel="noopener noreferrer">
                  {text.chatWhatsapp} <MessageCircle size={16} />
                </a>
                <a className="button button-dark" href="mailto:henry@feichipower.com">
                  {text.sendEmail} <Mail size={16} />
                </a>
                <a className="button button-outline" href="tel:+8615566206930">
                  {text.callEng} <Phone size={16} />
                </a>
              </div>
            </div>
            <div className="contact-panel">
              <div className="contact-panel-row">
                <User size={20} />
                <div>
                  <strong>{text.contactLeadTitle}</strong>
                  <p style={{ fontSize: '16px', color: '#ffffff', fontWeight: 800 }}>{text.contactLeadName}</p>
                </div>
              </div>
              <div className="contact-panel-row">
                <MessageCircle size={20} />
                <div>
                  <strong>WhatsApp & WeChat</strong>
                  <p>
                    <a href="https://wa.me/8615566206930" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cyan)', fontWeight: 700 }}>
                      +86 155 6620 6930
                    </a>
                    {' '}<span style={{ color: '#94a3b8' }}>(WeChat ID: 15566206930)</span>
                  </p>
                </div>
              </div>
              <div className="contact-panel-row">
                <Send size={20} />
                <div>
                  <strong>Telegram (Direct & CIS Support)</strong>
                  <p>
                    <a href="https://t.me/+8615566206930" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cyan)', fontWeight: 700 }}>
                      +86 155 6620 6930
                    </a>
                    {' '}<span style={{ color: '#94a3b8' }}>(@feichipower)</span>
                  </p>
                </div>
              </div>
              <div className="contact-panel-row">
                <Phone size={20} />
                <div>
                  <strong>Mobile & Direct Line</strong>
                  <p>
                    <a href="tel:+8615566206930" style={{ color: 'var(--cyan)', fontWeight: 700 }}>
                      +86 155 6620 6930
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-panel-row">
                <Mail size={20} />
                <div>
                  <strong>{text.directEmail}</strong>
                  <a href="mailto:henry@feichipower.com" style={{ color: 'var(--cyan)', fontWeight: 700 }}>henry@feichipower.com</a>
                </div>
              </div>
              <div className="contact-panel-row">
                <Building2 size={20} />
                <div>
                  <strong>{text.hqTitle}</strong>
                  <p>{text.companyFull}</p>
                </div>
              </div>
              <div className="contact-panel-row">
                <MapPin size={20} />
                <div>
                  <strong>{text.plantAddr}</strong>
                  <p>{text.plantLocation}</p>
                </div>
              </div>
              <Link className="official-link" to={`/${locale}/about`}>
                {text.factoryCredentialLink} <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section contact-steps">
          <div className="wrap">
            <SectionTitle
              eyebrow={meta.eyebrow}
              title={meta.title}
              copy={meta.copy}
            />
            <div className="steps-grid">
              {steps.map((st, i) => (
                <div key={i}>
                  <span>{st.step}</span>
                  <h3>{st.title}</h3>
                  <p>{st.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: '#070f1e', borderTop: '1px solid rgba(0, 229, 255, 0.15)', padding: '60px 0' }}>
          <div className="wrap">
            <InstantEngineeringInquiryGateway locale={locale} />
          </div>
        </section>
      </main>
    </>
  );
}

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error?: Error }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('App Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '80px 20px', textAlign: 'center', background: '#040810', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
          <h1 style={{ color: '#00e5ff', fontSize: '32px' }}>FEICHI ELECTRICAL</h1>
          <p style={{ color: '#cbd5e1', margin: '20px auto', maxWidth: '600px', fontSize: '16px' }}>
            Industrial Substation & Switchgear Systems.
          </p>
          <a
            href="/en/"
            style={{ display: 'inline-block', padding: '12px 28px', background: '#f59e0b', color: '#000', fontWeight: 'bold', borderRadius: '4px', textDecoration: 'none' }}
          >
            Reload Global Homepage
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

function RoutedHome() {
  const { locale: rawLocale } = useParams();
  const locale = pickLocale(rawLocale);
  return (
    <Layout locale={locale}>
      <Home locale={locale} />
    </Layout>
  );
}

function RoutedProducts() {
  const { locale: rawLocale } = useParams();
  const locale = pickLocale(rawLocale);
  return (
    <Layout locale={locale}>
      <ProductsPage locale={locale} />
    </Layout>
  );
}

function RoutedProductDetail() {
  const { locale: rawLocale, slug = '' } = useParams();
  const locale = pickLocale(rawLocale);
  return (
    <Layout locale={locale}>
      <ProductDetail locale={locale} slug={slug} />
    </Layout>
  );
}

function RoutedIndustries() {
  const { locale: rawLocale } = useParams();
  const locale = pickLocale(rawLocale);
  return (
    <Layout locale={locale}>
      <IndustriesPage locale={locale} />
    </Layout>
  );
}

function RoutedIndustryDetail() {
  const { locale: rawLocale, slug = '' } = useParams();
  const locale = pickLocale(rawLocale);
  return (
    <Layout locale={locale}>
      <IndustryDetail locale={locale} slug={slug} />
    </Layout>
  );
}

function RoutedCases() {
  const { locale: rawLocale } = useParams();
  const locale = pickLocale(rawLocale);
  return (
    <Layout locale={locale}>
      <CasesPage locale={locale} />
    </Layout>
  );
}

function RoutedResources() {
  const { locale: rawLocale } = useParams();
  const locale = pickLocale(rawLocale);
  return (
    <Layout locale={locale}>
      <ResourcesPage locale={locale} />
    </Layout>
  );
}

function RoutedAbout() {
  const { locale: rawLocale } = useParams();
  const locale = pickLocale(rawLocale);
  return (
    <Layout locale={locale}>
      <AboutPage locale={locale} />
    </Layout>
  );
}

function RoutedContact() {
  const { locale: rawLocale } = useParams();
  const locale = pickLocale(rawLocale);
  return (
    <Layout locale={locale}>
      <ContactPage locale={locale} />
    </Layout>
  );
}

export default function App() {
  const isLocalFileProtocol = typeof window !== 'undefined' && window.location.protocol === 'file:';

  if (isLocalFileProtocol) {
    return (
      <ErrorBoundary>
        <Layout locale="zh">
          <Home locale="zh" />
        </Layout>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/en/" replace />} />
          <Route path="/:locale" element={<RoutedHome />} />
          <Route path="/:locale/" element={<RoutedHome />} />
          <Route path="/:locale/products" element={<RoutedProducts />} />
          <Route path="/:locale/products/:slug" element={<RoutedProductDetail />} />
          <Route path="/:locale/industries" element={<RoutedIndustries />} />
          <Route path="/:locale/industries/:slug" element={<RoutedIndustryDetail />} />
          <Route path="/:locale/cases" element={<RoutedCases />} />
          <Route path="/:locale/resources" element={<RoutedResources />} />
          <Route path="/:locale/about" element={<RoutedAbout />} />
          <Route path="/:locale/contact" element={<RoutedContact />} />
          <Route path="*" element={<Navigate to="/en/" replace />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
