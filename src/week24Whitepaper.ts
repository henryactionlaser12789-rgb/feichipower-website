import type { WhitepaperItem } from './whitepapersData';

export const week24Whitepaper: WhitepaperItem = {
  id: 'week-24',
  week: 24,
  slug: '35kv-110kv-modular-prefabricated-substation-and-gis-engineering-guide',
  category: 'substation',
  categoryLabel: {
    en: 'Modular High-Voltage Substations & GIS (35kV–110kV / КТПБ / БМЗ / КРУЭ / IEC 62271-203)',
    zh: '35kV–110kV 模块化预制式变电站与气体绝缘全封闭组合电器 GIS (КТПБ / БМЗ / КРУЭ / IEC 62271-203)',
    ja: '35kV〜110kV モジュール式プレハブ変電所・ガス絶縁開閉装置 GIS (КТПБ / БМЗ / КРУЭ / IEC 62271-203)',
    es: 'Subestaciones Modulares de Alta Tensión y GIS 35kV-110kV (КТПБ / БМЗ / КРУЭ / IEC 62271-203)',
    ru: 'Блочно-модульные подстанции КТПБ 35/110 кВ и КРУЭ (БМЗ / КРУЭ-110 / ГОСТ 15150 УХЛ1 / МЭК 62271-203)',
  },
  title: {
    en: '35kV–110kV Modular Prefabricated Substations (КТПБ / E-House) & Compact Gas-Insulated Switchgear (GIS / КРУЭ): Rapid Arctic Deployment (-60°C ГОСТ 15150 УХЛ1), 9-Point Seismic Hardening, IEC 61850 Digital SCADA, and SF6 Micro-Leakage Monitoring (Benchmarking Siemens 8DN8/8DN9, Ormazabal, TGOOD & SVEL / Electroshield Samara)',
    zh: '35kV–110kV 模块化预装式变电站（俄标 КТПБ / 预制舱 БМЗ / E-House）与气体绝缘全封闭开关设备（GIS / 俄标 КРУЭ）工程选型指南：西伯利亚 -60°C 极寒极地重防腐设计（ГОСТ 15150 УХЛ1）、9 度高烈度抗震加固、全数字化 IEC 61850 站控与 SF6 微水微漏在线监测（对标西门子 8DN8/8DN9、Ormazabal、特锐德 TGOOD 与俄罗斯 SVEL / 萨马拉电气标杆架构）',
    ja: '35kV〜110kV モジュール式プレハブ変電所（ロシア規格 КТПБ / プレハブシェルター БМЗ / E-House）および ガス絶縁開閉装置（GIS / КРУЭ）エンジニアリングガイド：極寒シベリア -60℃耐候（GOST 15150 UHL1）・耐震9度構造・IEC 61850 デジタルSCADA＆SF6ガス微小リーク常時監視（Siemens 8DN8/8DN9・Ormazabal・TGOOD・SVELベンチマーク）',
    es: 'Dossier de Subestaciones Modulares Prefabricadas 35kV–110kV (КТПБ / E-House) y Aparamenta Aislada en Gas (GIS / КРУЭ): Instalación Rápida en Climas Árticos (-60°C GOST UHL1), Resistencia Sísmica Grado 9, SCADA Digital IEC 61850 y Monitoreo de Fugas SF6',
    ru: 'Инженерное руководство по блочно-модульным подстанциям КТПБ 35/110 кВ в блочно-модульных зданиях (БМЗ / E-House) и комплектным распределительным устройствам с элегазовой изоляцией (КРУЭ-110/220 кВ): эксплуатация в Арктике при -60°C УХЛ1, сейсмостойкость 9 баллов, цифровая подстанция МЭК 61850 и мониторинг элегаза (Бенчмарк Siemens 8DN8/8DN9, Ormazabal, TGOOD, ГК СВЭЛ и Электрощит Самара)',
  },
  eyebrow: {
    en: 'HIGH-VOLTAGE MODULAR SUBSTATION & GIS DOSSIER (IEC 62271-203 / IEEE C37.122 / ГОСТ 15150-69 УХЛ1 / ГОСТ 30546.1 СЕЙСМОСТОЙКОСТЬ)',
    zh: 'FE-SPEC-24 · 35kV-110kV 模块化预制式变电站与 GIS 高压选型专论（IEC 62271-203 / GB/T 7674 / ГОСТ 15150-69 / ГОСТ 30546.1）',
    ja: 'FE-SPEC-24 · 35kV-110kV モジュール式プレハブ変電所＆GIS高圧選定仕様書（IEC 62271-203 / IEEE C37.122 / GOST 15150）',
    es: 'FE-SPEC-24 · EXPEDIENTE DE SUBESTACIONES MODULARES DE ALTA TENSIÓN Y GIS 110kV (IEC / IEEE / GOST)',
    ru: 'FE-SPEC-24 · РУКОВОДСТВО ПО КТПБ 35/110 кВ, БМЗ И КРУЭ (ГОСТ 15150-69 УХЛ1 / ГОСТ 30546.1 / СТО РОССЕТИ)',
  },
  author: {
    en: 'Feichi High-Voltage Substation & GIS Engineering Division (Lead: Henry)',
    zh: '飞驰电气高压变电站与气体绝缘开关（GIS）工程设计院（总工/外贸对接人：Henry）',
    ja: '飛馳電気 高圧変電所・GISエンジニアリング設計院（チーフ：Henry）',
    es: 'División de Ingeniería de Alta Tensión y GIS Feichi (Líder: Henry)',
    ru: 'Инженерный отдел высоковольтных подстанций КТПБ и КРУЭ Feichi Power (Гл. инженер: Henry)',
  },
  standards: 'IEC 62271-203 / IEC 62271-200 / IEEE C37.122 / ГОСТ 15150-69 (УХЛ1) / ГОСТ 30546.1-98 (9 баллов MSK-64) / ГОСТ 14693 / СТО 56947007',
  readTime: {
    en: '21 min deep technical study (Includes SF6 Paschen dielectric breakdown equations, thermal insulation heat flux balance & Russian GOST 110kV questionnaire breakdown)',
    zh: '21 分钟深度技术研读（含 SF6 绝缘击穿巴申定律临界场强解算、预制舱极寒热平衡传热方程与俄标 110kV Опросный лист 选型实战）',
    ja: '21分 専門設計解説（SF6ガスパッシェン絶縁破壊限界解析・極寒熱伝導熱流束方程式・ロシアGOST 110kV選定問診票徹底解説）',
    es: '21 min de lectura técnica (Incluye ecuaciones de rigidez dieléctrica Paschen en SF6, balance térmico en cabinas árticas y cuestionario GOST 110kV)',
    ru: '21 мин углубленного изучения (включая закон Пашена для элегаза SF6, расчет теплового баланса БМЗ при -60°C и полный Опросный лист на КТПБ-110 кВ)',
  },
  summary: {
    en: 'A definitive engineering dossier on 35kV, 110kV, and 220kV Modular Prefabricated Substations (КТПБ / БМЗ / E-House) and Gas-Insulated Switchgear (GIS / КРУЭ). Benchmarking industry giants Siemens 8DN8/8DN9, Ormazabal, TGOOD, and SVEL / Electroshield Samara, this guide covers 70% footprint reduction with compact GIS modules, extreme Arctic climate hardening down to -60°C (ГОСТ 15150 УХЛ1) with dual-layer PIR thermal insulation, 9-magnitude MSK-64 seismic resilience, IEC 61850 Station & Process bus architecture, and comprehensive Russian standard Опросный лист procurement templates.',
    zh: '全面剖析 35kV、110kV 与 220kV 模块化预制式变电站（俄标 КТПБ / 预制舱 БМЗ / E-House）与气体绝缘全封闭开关设备（GIS / 俄标 КРУЭ）的顶层工程架构。深度对标西门子（Siemens 8DN8/8DN9）、西班牙欧玛嘉宝（Ormazabal）、特锐德（TGOOD）与俄罗斯本土巨头 SVEL / 萨马拉电气（Electroshield Samara），系统阐述 GIS 模块化集成实现占地面积骤减 70% 以上、西伯利亚与北极圈极寒（-60°C ГОСТ 15150-69 УХЛ1）双层聚氨酯/岩棉保温预制舱、MSK-64 烈度 9 度抗震动载荷验算、全数字化 IEC 61850 过程层/站控层通信网络、SF6 气体微水与微泄漏在线智能监测，以及针对独联体和中亚国家电网的主流《Опросный лист》全套选型工程规范。',
    ja: '35kV/110kV/220kV モジュール式プレハブ変電所（ロシア規格 КТПБ / プレハブ建屋 БМЗ / E-House）および ガス絶縁開閉装置（GIS / КРУЭ）の完全技術解説書。Siemens 8DN8/8DN9、Ormazabal、TGOOD、SVEL、Electroshield Samaraをベンチマークし、設置面積70%削減、-60℃極寒対応2重断熱シェルター（GOST UHL1）、震度9耐震構造（MSK-64）、IEC 61850 デジタル変電所通信網、SF6ガス微小リークオンライン診断、およびロシアCIS向け標準Опросный лист選定ノウハウを網羅。',
    es: 'Guía técnica definitiva de Subestaciones Modulares Prefabricadas de 35kV a 220kV (КТПБ / БМЗ / E-House) y Celdas Aisladas en Gas SF6 (GIS / КРУЭ). Inspirada en Siemens 8DN8/8DN9, Ormazabal, TGOOD y SVEL / Electroshield Samara, analiza la reducción del 70% en espacio con GIS, diseño ártico para -60°C bajo norma GOST UHL1 con paneles térmicos PIR, resistencia sísmica grado 9 (MSK-64), arquitectura IEC 61850 y cuestionarios de selección estándar para licitaciones internacionales.',
    ru: 'Полное инженерно-техническое руководство по блочно-модульным подстанциям КТПБ 35/110/220 кВ в блочно-модульных зданиях (БМЗ) и комплектным распределительным устройствам с элегазовой изоляцией КРУЭ-110/220 кВ. На базе опыта Siemens 8DN8/8DN9, Ormazabal, TGOOD, ГК СВЭЛ и Электрощит Самара детально рассмотрены: сокращение площади ОРУ на 70%, арктическое исполнение УХЛ1 до -60°C с сэндвич-панелями PIR 150 мм, сейсмостойкость 9 баллов (ГОСТ 30546.1), цифровая шина процесса МЭК 61850, система мониторинга элегаза и полный Опросный лист по стандартам ПАО Россети.',
  },
  sec1Title: {
    en: '1. Modular Architecture & Spatial Optimization: Prefabricated E-House (БМЗ) vs Conventional Open Switchyards (ОРУ)',
    zh: '1. 模块化预制舱与空间集约化架构：预装式 E-House (БМЗ) vs 传统敞开式户外变电站 (ОРУ)',
    ja: '1. モジュール式プレハブ構造と空間集約化：E-House (БМЗ) vs 従来型屋外オープン変電所 (ОРУ)',
    es: '1. Arquitectura Modular y Optimización Espacial: E-House Prefabricada (БМЗ) vs Subestaciones Abiertas Convencionales (ОРУ)',
    ru: '1. Архитектура БКТПБ/БМЗ и сокращение площади: Блочно-модульные здания (БМЗ) против открытых распредустройств (ОРУ)',
  },
  sec1Text: {
    en: `In harsh geographic environments, mountainous mining regions, and compact urban utility substations, conventional open air-insulated switchyards (ОРУ 110kV) present severe drawbacks: massive land acquisition footprints ($>2500\\text{m}^2$), prolonged civil construction cycles (12–18 months), and vulnerability to extreme weather and icing.

Feichi High-Voltage Modular Prefabricated Substations (КТПБ-110 / БМЗ Series) solve these challenges through factory-integrated modularization:
• Spatial Footprint Reduction (>70%): By utilizing compact 110kV Gas-Insulated Switchgear (GIS / КРУЭ-110) within prefabricated thermally isolated metal enclosures (БМЗ), the total substation footprint is compressed to under $500\\text{m}^2$.
• Factory Turnkey Assembly & Testing: Power transformers, GIS units, 10kV/35kV switchgear rows, DC battery systems, and protection cabinets are 100% pre-wired, tested, and commissioned inside factory modules before transport, slashing on-site installation time by 80% (from 14 months to 45 days).
• Heavy-Duty Structural Enclosure: High-tensile weather-resistant steel frames ($Q355B / 09G2S$) with C5-M extreme marine/industrial anti-corrosion coating, certified for dynamic transport vibration and quick heavy-crane lifting.`,
    zh: `在极寒高海拔矿区、沿海重度盐雾工业区以及城市用地极其紧张的枢纽电网中，传统的 110kV/220kV 敞开式户外高压变电站（俄标 ОРУ 110 кВ）存在占地面积巨大（通常 $> 2500\\text{m}^2$）、现场土建周期漫长（12~18 个月）以及设备裸露极易遭受风雪冰冻覆冰闪络等致命弱点。

飞驰电气 35kV–110kV 模块化预装式变电站（俄标 КТПБ-110 / БМЗ 系列）通过工厂化深度集成实现颠覆性升级：
• 空间集约化缩减（占地面积骤减 70% 以上）：采用三相共筒或分相紧凑型 110kV 气体绝缘全封闭组合电器（GIS / 俄标 КРУЭ-110）集成于双层保温金属预制舱（БМЗ）内，整座 110kV 双主变变电站占地面积可大幅压缩至 $500\\text{m}^2$ 以内。
• 工厂预制与即插即用（Turnkey Plug & Play）：主变压器进线模块、110kV GIS 间隔、35kV/10kV 金属铠装出线柜（KYN28/КРУ）、一体化直流电源屏及微机继电保护站控屏在出厂前完成 100% 内部走线与联调测试，现场施工周期缩短 80%（由常规 14 个月缩短至 45 天内带电投运）。
• 重型高强度耐候舱体：舱体框架采用 $Q355B / 09\text{Г}2\text{С}$ 低合金高强度耐候钢，外表喷涂 C5-M 级重防腐高耐久氟碳聚氨酯涂层，满足全地形重卡陆运与吊装抗扭曲刚度要求。`,
    ja: `厳しい極寒高地や都市部の狭小用地において、従来の110kV屋外オープン変電所（ОРУ）は広大な用地（2500㎡以上）と12〜18ヶ月の現地工事期間を必要としました。飛馳 КТПБ-110 / БМЗ モジュール式変電所は、GIS（ガス絶縁開閉装置）を断熱プレハブ建屋（БМЗ）に統合することで設置面積を70%以上削減し、500㎡以下に集約。工場内で配線・試験を100%完了させ、現地据付を45日以内に短縮します。`,
    es: 'Las subestaciones modulares Feichi КТПБ-110 / БМЗ integran celdas GIS de 110kV y transformadores en contenedores prefabricados E-House con aislamiento térmico reforzado. Reducen el área requerida en más de un 70% frente a subestaciones abiertas convencionales y disminuyen el tiempo de instalación en sitio de 14 meses a solo 45 días con cableado y pruebas 100% de fábrica.',
    ru: 'Блочно-модульные подстанции КТПБ 110/35/10(6) кВ в зданиях из блок-модулей (БМЗ) с КРУЭ-110 кВ решают проблемы дефицита земли и сложного климата. Площадь застройки сокращается более чем на 70% по сравнению с ОРУ-110 кВ (до <500 м2). 100% заводская готовность оборудования, включая вторичную коммутацию и РЗА, сокращает монтаж и пусконаладку на объекте до 30-45 дней.',
  },
  sec2Title: {
    en: '2. Arctic Climate Hardening (-60°C ГОСТ УХЛ1) & Seismic 9-Magnitude Engineering',
    zh: '2. 极寒西伯利亚与北极圈极地耐候（-60°C ГОСТ 15150 УХЛ1）与 9 度烈度抗震工程力学设计',
    ja: '2. 極寒シベリア・北極圏耐候設計（-60℃ GOST UHL1）＆震度9耐震構造工学',
    es: '2. Adaptación para Climas Árticos (-60°C GOST UHL1) e Ingeniería Sísmica Grado 9',
    ru: '2. Арктическое климатическое исполнение (-60°C ГОСТ 15150 УХЛ1) и сейсмостойкость 9 баллов (ГОСТ 30546.1)',
  },
  sec2Text: {
    en: `Operating high-voltage electrical equipment in Russian Siberia, CIS sub-polar mining zones, and seismic fault lines requires uncompromising mechanical and thermal calculations.

1. Thermal Insulation Balance & Extreme Anti-Freeze Architecture:
• Double-Wall PIR / Rockwool Sandwich Panels (150mm Thickness): Wall thermal conductivity $K \\le 0.22\\text{ W}/(\\text{m}^2\\cdot\\text{K})$, maintaining internal cabin temperature above $+10^{\\circ}\\text{C}$ even when outdoor ambient plunges to $-60^{\\circ}\\text{C}$ (ГОСТ 15150 УХЛ1).
• Redundant Automated HVAC & Forced Air Circulation: Dual-channel explosion-proof PTC electric heating banks with automatic variable-frequency ventilation, preventing condensation and dew-point flashovers on bushings and bus supports during rapid seasonal thawing.
• SF6 / Mixed Gas (SF6/N2) Liquid Phase Prevention: Uses optimized gas mixtures or embedded heating jackets on high-voltage circuit breaker chambers, ensuring gas density remains within safe dielectric margins without liquid condensation down to $-60^{\\circ}\\text{C}$.

2. Seismic 9-Magnitude Dynamic Withstand (ГОСТ 30546.1 / MSK-64):
• Heavy Base Frame Structural Finite Element Analysis (FEA): Dynamic spectrum response verification proves stresses remain well below yield strength ($\\sigma_{\\text{max}} \\le 0.65 \\sigma_y$) under peak seismic ground accelerations ($a_{\\text{horiz}} \\ge 0.4g$).
• Flexible Bellows Expansion Joints: Integrated in GIS busbar duct runs to absorb seismic displacements and differential foundation settlement.`,
    zh: `在俄罗斯西伯利亚极寒冻土区、远东矿区以及高烈度地震活动断裂带，高压电气设备的机械结构与热力学设计面临极限挑战。

1. 极寒保温热平衡与防冻凝露设计：
• 150mm 双面镀铝锌聚氨酯（PIR）/高密度憎水岩棉夹芯板结构：整舱综合传热系数 $K \\le 0.22\\text{ W}/(\\text{m}^2\\cdot\\text{K})$。在室外温度达 $-60^{\\circ}\\text{C}$（ГОСТ 15150-69 УХЛ1）的极寒工况下，舱内微环境始终恒温维持在 $+10^{\\circ}\\text{C} \\sim +25^{\\circ}\\text{C}$。
• 双冗余自适应微气候温控系统：配备双回路防爆型自控温 PTC 伴热带与变频暖通强排风系统，结合露点温度实时演算算法，在春夏极寒融冻交替时彻底杜绝套管绝缘子与母线支撑件表面结露闪络。
• SF6 气体防液化低温特化：针对高寒地区 SF6 气体在低温高压下易液化（导致绝缘介电强度骤降）的物理特性，提供 SF6/N2 混合气体绝缘方案或断路器气室自加热恒温护套，保证 $-60^{\\circ}\\text{C}$ 下介电击穿场强恒定不衰减。

2. 9 度高烈度地震抗震工程力学校核（ГОСТ 30546.1 / MSK-64 标准）：
• 有限元动态频谱抗震分析（FEA）：底座承重钢结构经过 9 度地震谱动态响应验算，在水平向最大峰值加速度 $a_{\\text{horiz}} \\ge 0.4g$ 冲击下，主体结构应力满足 $\\sigma_{\\text{max}} \\le 0.65 \\sigma_y$，焊缝与螺栓连接无撕裂。
• GIS 母线柔性波纹膨胀补偿节：在 110kV GIS 跨舱与母线分段处配置三维柔性波纹膨胀节，吸收地震位移与地基冻土融沉引起的不均匀沉降。`,
    ja: `シベリア凍土や地震帯での運用に対応するため、飛馳 КТПБ-110 は厚さ150mmのPIR断熱サンドイッチパネルを採用し、外気温-60℃でも庫内を+10℃以上に維持（GOST 15150 UHL1）。SF6ガスの低温液化を防止するガスヒーターおよびSF6/N2混合ガス仕様を提供。さらにMSK-64震度9に耐える有限要素法解析済みベースフレームとGISフレキシブル継手を標準装備しています。`,
    es: 'Para soportar inviernos siberianos de hasta -60°C (GOST UHL1), las cabinas Feichi БМЗ utilizan paneles sándwich PIR de 150mm con coeficiente térmico K ≤ 0.22 W/(m²·K) y calefacción redundante PTC. El diseño del GIS evita la licuefacción del SF6 mediante mezclas SF6/N2 o chaquetas térmicas, y cuenta con certificación sísmica de grado 9 (MSK-64 / GOST 30546.1) con juntas de expansión flexibles.',
    ru: 'БМЗ Feichi изготавливаются из сэндвич-панелей с утеплителем PIR 150 мм (негорючие, ГОСТ 30244) с теплопроводностью K ≤ 0.22 Вт/(м2·К), что гарантирует температуру внутри не ниже +10°C при морозах до -60°C (УХЛ1). Для исключения сжижения элегаза в полюсах КРУЭ-110 применяются нагревательные пояса или смесь SF6/N2. Конструкция рассчитана на сейсмические воздействия до 9 баллов по шкале MSK-64 (ГОСТ 30546.1).',
  },
  sec3Title: {
    en: '3. Technical Comparison Matrix: Feichi КТПБ/КРУЭ-110 vs Siemens/Ormazabal Benchmarks vs Conventional Open Substation (ОРУ)',
    zh: '3. 关键技术指标综合对比矩阵：飞驰 КТПБ/КРУЭ-110 预制舱变电站 vs 西门子/Ormazabal 国际标杆 vs 传统敞开式户外变电站 (ОРУ)',
    ja: '3. 主要仕様比較表：飛馳 КТПБ/КРУЭ-110 モジュール式変電所 vs Siemens/Ormazabal 標幹 vs 従来型屋外オープン変電所 (ОРУ)',
    es: '3. Matriz Comparativa Técnica: Feichi КТПБ/КРУЭ-110 vs Benchmark Siemens/Ormazabal vs Subestación Abierta Convencional (ОРУ)',
    ru: '3. Сравнительная матрица характеристик: Подстанции КТПБ-110/35/10 кВ Feichi vs Siemens/Ormazabal vs Традиционные ОРУ-110 кВ',
  },
  tableHeaders: {
    en: ['Technical Specification', 'Feichi Modular Prefab Substation (КТПБ-110 / БМЗ / КРУЭ)', 'Siemens 8DN8 / Ormazabal Benchmark', 'Conventional Open Air Switchyard (ОРУ-110 кВ)'],
    zh: ['技术参数与工程指标', '飞驰电气 模块化预制式变电站 (КТПБ-110 / БМЗ / GIS)', '西门子 8DN8 / Ormazabal 国际标杆', '传统敞开式户外变电站 (ОРУ-110 кВ)'],
    ja: ['主要仕様・指標', '飛馳 モジュール式変電所 (КТПБ-110 / БМЗ / GIS)', 'Siemens 8DN8 / Ormazabal 標幹', '従来型屋外オープン変電所 (ОРУ-110)'],
    es: ['Parámetros Técnicos', 'Subestación Modular Feichi (КТПБ-110 / БМЗ / GIS)', 'Benchmark Siemens 8DN8 / Ormazabal', 'Subestación Abierta Convencional (ОРУ-110)'],
    ru: ['Технические параметры', 'Блочно-модульная подстанция Feichi КТПБ-110 (БМЗ / КРУЭ)', 'Бенчмарк Siemens 8DN8 / Ormazabal', 'Традиционное открытое ОРУ-110 кВ на фундаментах'],
  },
  tableRows: {
    en: [
      ['Total Footprint Area (2x40MVA 110/10kV)', '< 480 m² (Ultra-compact GIS in Prefab E-House)', '< 450 m²', '> 2,800 m² (Massive civil land requirement)'],
      ['On-Site Installation & Commissioning', '30 - 45 Days (100% Factory pre-assembled & tested)', '30 - 60 Days', '12 - 18 Months (Extensive civil & field wiring)'],
      ['Minimum Ambient Operating Temperature', '-60°C (ГОСТ 15150 УХЛ1, 150mm PIR + PTC heating)', '-50°C to -40°C', '-40°C (Susceptible to severe insulator icing)'],
      ['Seismic Resistance Rating', '9-Magnitude MSK-64 (ГОСТ 30546.1 verified, a ≥ 0.4g)', '9-Magnitude MSK-64 / IEEE 693 High', '7-8 Magnitude (Brittle ceramic bushing risk)'],
      ['Digital Automation & Communication', 'IEC 61850 Ed.2 (Process & Station Bus, GOOSE/SV, 104)', 'IEC 61850 Ed.2 (Full Digital Substation)', 'Hardwired 4-20mA / Modbus RTU / Copper Cabling'],
      ['SF6 Leakage Rate & Monitoring', '< 0.1% per year (Optical micro-water & density sensors)', '< 0.1% per year', 'N/A (Air insulation, high atmospheric degradation)'],
    ],
    zh: [
      ['整站占地面积（2x40MVA 110/10kV 双主变）', '< 480 m²（预制舱紧凑型 GIS 集成布局）', '< 450 m²', '> 2,800 m²（需大面积征地与大型户外架构）'],
      ['现场建站与安装调试投运周期', '30 ~ 45 天（工厂 100% 模块化预装预调，即插即用）', '30 ~ 60 天', '12 ~ 18 个月（大量现场土建打桩与户外接线）'],
      ['极端耐低温运行能力', '-60°C (ГОСТ 15150-69 УХЛ1，150mm PIR + 伴热)', '-50°C ~ -40°C（国际主流重工标准）', '-40°C（户外瓷绝缘子极易风雪覆冰闪络）'],
      ['抗震设防烈度等级', '9 度 MSK-64 (ГОСТ 30546.1 动载验算，$a \\ge 0.4g$)', '9 度 MSK-64 / IEEE 693 高抗震等级', '7 ~ 8 度（高支架瓷套管易发生地震断裂）'],
      ['变电站数字自动化协议', 'IEC 61850 Ed.2 全数字（过程层 SV/GOOSE + 站控 104）', 'IEC 61850 Ed.2（全数字化数字化站）', '传统点对点硬接线电缆 / 4-20mA / 铜缆敷设'],
      ['气体微泄漏率与在线监测', '年泄漏率 < 0.1%（激光微水微漏全天候数字化监测）', '年泄漏率 < 0.1%', '不适用（敞开式空气绝缘，极易受环境侵蚀）'],
    ],
    ja: [
      ['敷地面積（2x40MVA 110/10kV 2変圧器構成）', '< 480 ㎡（プレハブシェルター内コンパクトGIS集約）', '< 450 ㎡', '> 2,800 ㎡（広大な用地造成および鉄構工事要）'],
      ['現地据付・試験・送電までの工期', '30〜45日（工場内100%事前配線・通電試験完了）', '30〜60日', '12〜18ヶ月（現地基礎工事・屋外配線多大）'],
      ['極寒最低動作保証温度', '-60℃（GOST 15150 UHL1適合、150mm PIR＋ヒーター）', '-50℃〜-40℃', '-40℃（屋外がいし着氷によるフラッシオーバ頻発）'],
      ['耐震性能クラス', '震度9 MSK-64適合（GOST 30546.1動的検証 a≧0.4g）', '震度9 MSK-64 / IEEE 693 High', '震度7〜8（高架がい管の破損リスク高）'],
      ['デジタル変電所通信プロトコル', 'IEC 61850 Ed.2 完全準拠（GOOSE/SV・MMS・104対応）', 'IEC 61850 Ed.2（フルデジタル変電所）', '従来型メタルケーブル配線 / Modbus / 4-20mA'],
      ['SF6ガス漏洩率・オンライン監視', '年間漏洩率 < 0.1%（光学微小水分・密度常時センサー監視）', '年間漏洩率 < 0.1%', '対象外（空気絶縁のため大気腐食影響大）'],
    ],
    es: [
      ['Área de Ocupación (2x40MVA 110/10kV)', '< 480 m² (GIS ultra compacto en contenedor E-House)', '< 450 m²', '> 2.800 m² (Gran requerimiento de terreno civil)'],
      ['Instalación y Puesta en Servicio en Sitio', '30 a 45 días (100% preensamblada y probada en fábrica)', '30 a 60 días', '12 a 18 meses (Largo proceso de obra civil)'],
      ['Temperatura Mínima de Operación', '-60°C (GOST UHL1, 150mm PIR y calefacción PTC)', '-50°C a -40°C', '-40°C (Alto riesgo de congelamiento de aisladores)'],
      ['Resistencia Sísmica', 'Grado 9 MSK-64 (GOST 30546.1 comprobado, a ≥ 0.4g)', 'Grado 9 MSK-64 / IEEE 693 Alto', 'Grado 7 a 8 (Riesgo de fractura en aisladores)'],
      ['Automatización y Comunicación SCADA', 'IEC 61850 Ed.2 (Bus de Proceso SV/GOOSE y Estación 104)', 'IEC 61850 Ed.2 (Subestación Digital)', 'Cableado de cobre punto a punto / Modbus RTU'],
      ['Tasa de Fuga de SF6 y Monitoreo', '< 0.1% anual (Sensores ópticos de humedad y densidad)', '< 0.1% anual', 'No aplica (Aislamiento en aire susceptible a salinidad)'],
    ],
    ru: [
      ['Занимаемая площадь (2х40 МВА 110/10 кВ)', '< 480 м² (Компактное КРУЭ в блок-модульном здании БМЗ)', '< 450 м²', '> 2800 м² (Большой отвод земли под ОРУ)'],
      ['Срок монтажа и ввода в эксплуатацию', '30 - 45 дней (100% заводская готовность блоков)', '30 - 60 дней', '12 - 18 месяцев (Масштабные строительные работы)'],
      ['Климатическое исполнение и температура', '-60°C (ГОСТ 15150-69 УХЛ1, сэндвич PIR 150мм + обогрев)', '-50°C ... -40°C (стандартное исполнение)', '-40°C (Риск перекрытия гирлянд изоляторов при обледенении)'],
      ['Сейсмостойкость установки', '9 баллов по MSK-64 (ГОСТ 30546.1, а ≥ 0.4g)', '9 баллов MSK-64 / IEEE 693', '7-8 баллов (Опасность излома фарфоровых покрышек)'],
      ['Цифровая подстанция и протоколы', 'МЭК 61850 Ed.2 (Шина процесса SV/GOOSE, МЭК 60870-5-104)', 'МЭК 61850 Ed.2 (Цифровая подстанция ЦПС)', 'Традиционные медные контрольные кабели / 4-20мА'],
      ['Утечка элегаза и система контроля', '< 0.1% в год (Лазерный оптический контроль влаги и плотности)', '< 0.1% в год', 'Не применимо (Открытый воздух, окисление контактов)'],
    ],
  },
  sec4Title: {
    en: '4. Engineering Deployment Solutions & Russian Standard Опросный лист (Design Institute Questionnaire for КТПБ-110)',
    zh: '4. 典型工程场景解决方案与俄罗斯国家设计院《Опросный лист》（110kV 预装式变电站选型问卷）实战拆解',
    ja: '4. 産業別エンジニアリングソリューションおよびロシア設計院標準選定問診票（110kV 変電所 Опросный лист）',
    es: '4. Soluciones de Ingeniería y Cuestionario Estándar Ruso «Опросный лист» para Subestaciones 110kV',
    ru: '4. Типовые проектные решения и заполнение Опросного листа на подстанцию КТПБ 110/35/10 кВ по стандартам ГОСТ',
  },
  scenarios: {
    en: [
      {
        title: 'Arctic Oil & Gas Fields and Pipeline Booster Stations (Yamal & Western Siberia -60°C Permafrost)',
        recommend: 'Feichi Modular КТПБ-110/10kV (2x25MVA) with Compact GIS (КРУЭ-110) in Dual-Layer PIR Modular E-House (БМЗ)',
        reason: 'Delivers turnkey pre-tested substation blocks on skid foundations without deep excavation in permafrost, guaranteeing uninterrupted power at -60°C.',
      },
      {
        title: 'Central Asia Industrial Mining Complexes & Smelters (Turkmenistan & Kazakhstan 110kV Incomer)',
        recommend: 'Feichi 110kV Modular Substation (2x40MVA) with IEC 61850 Digital Automation & 9-Magnitude Seismic Frames',
        reason: 'Withstands extreme desert temperature swings (-30°C to +50°C), heavy sandstorms (IP54 enclosure), and provides seamless integration with national grid SCADA.',
      },
      {
        title: 'Renewable Solar & Wind Farm Step-Up Substations (35kV to 110kV/220kV Grid Interconnection)',
        recommend: 'Feichi Integrated 35/110kV Collector Substation with STATCOM/SVG Dynamic Reactive Power Module',
        reason: 'Optimizes dynamic voltage stability at the grid interconnection point while compressing the entire renewable collection hub into an ultra-compact footprint.',
      },
    ],
    zh: [
      {
        title: '北极圈极寒油气田开采与长输管道加压站（亚马尔与西西伯利亚 -60°C 永久冻土区）',
        recommend: '飞驰电气 极地型 КТПБ-110/10kV (2x25MVA) 模块化预制舱变电站（配 КРУЭ-110 GIS 与 150mm PIR 双层保温 БМЗ）',
        reason: '采用重型钢滑靴式无开挖基础，杜绝冻土融沉破坏；整站 100% 工厂联调后整舱运输，在 -60°C 暴风雪极寒下全天候安全可靠供电。',
      },
      {
        title: '中亚重工业冶炼与大型工矿枢纽变电站（土库曼斯坦与哈萨克斯坦 110kV 进线枢纽工程）',
        recommend: '飞驰电气 110kV 模块化预制变电站 (2x40MVA)（配全数字 IEC 61850 站控与 9 度高抗震加固支架）',
        reason: '适应沙漠戈壁 $-30^{\\circ}\\text{C} \\sim +50^{\\circ}\\text{C}$ 极大昼夜温差与重度沙尘侵蚀（IP54 级防尘密封），无缝接入国家电网高压自动化调度中心。',
      },
      {
        title: '大型集中式新能源光伏/风电汇集升压站（35kV 集电线路汇集至 110kV/220kV 主网并网）',
        recommend: '飞驰电气 35kV/110kV 光储汇集升压一体化预装站（集成 SVG 动态无功补偿模块与主变保护舱）',
        reason: '在并网点提供毫秒级动态无功支撑，抑制电压闪变与谐波，同时将原本分散的升压站设备全部集约为紧凑预制舱模块。',
      },
    ],
    ja: [
      {
        title: '北極圏油田・ガスパイプライン昇圧設備（ヤマル・西シベリア -60℃永久凍土地域）',
        recommend: '飛馳 極地型 КТПБ-110/10kV (2x25MVA) プレハブ変電所（КРУЭ-110 GIS ＆ 150mm PIR断熱 БМЗ）',
        reason: '凍土掘削不要のスキッドベースを採用し、不等沈下を防止。-60℃の極寒環境下でも途切れない高信頼性電力を供給します。',
      },
      {
        title: '中央アジア重工業鉱山・製錬所（トルクメニスタン・カザフスタン 110kV受電プロジェクト）',
        recommend: '飛馳 110kV モジュール式変電所 (2x40MVA)（IEC 61850 デジタル站控＆震度9耐震設計）',
        reason: '砂漠特有の激しい寒暖差（-30℃〜+50℃）と砂嵐（IP54防塵）に耐え、国家送電網SCADAと円滑に連携します。',
      },
      {
        title: '大規模太陽光・風力発電所 集電昇圧変電所（35kVから110kV/220kV系統連系）',
        recommend: '飛馳 35/110kV 再エネ昇圧一体型プレハブ変電所（SVG動的無効電力補償モジュール内蔵）',
        reason: '連系点の電圧安定度をミリ秒単位で制御し、変電所全体の占有面積を最小化します。',
      },
    ],
    es: [
      {
        title: 'Campos Petroleros y Estaciones de Gas en el Ártico (-60°C en Suelo Congelado)',
        recommend: 'Subestación Modular Feichi КТПБ-110/10kV (2x25MVA) con GIS en Contenedor PIR (БМЗ)',
        reason: 'Montaje sobre patines reforzados sin requerir excavaciones profundas en permafrost, asegurando operación continua a -60°C.',
      },
      {
        title: 'Complejos Mineros en Asia Central (Proyectos 110kV en Turkmenistán y Kazajistán)',
        recommend: 'Subestación Modular Feichi 110kV (2x40MVA) con Automatización IEC 61850 y Grado Sísmico 9',
        reason: 'Soporta variaciones extremas de temperatura (-30°C a +50°C) y tormentas de arena con protección IP54, integrándose con el despacho nacional.',
      },
      {
        title: 'Subestaciones Elevadoras para Parques Solares y Eólicos (Interconexión 35kV a 110kV)',
        recommend: 'Subestación Colectora Integrada 35/110kV Feichi con Compensador Dinámico SVG/STATCOM',
        reason: 'Garantiza soporte de tensión ultrarrápido en el punto de interconexión con diseño compacto llave en mano.',
      },
    ],
    ru: [
      {
        title: 'Нефтегазовые месторождения Арктики и компрессорные станции (Ямал, Ванкор, -60°C вечная мерзлота)',
        recommend: 'КТПБ-110/10 кВ (2х25 МВА) Feichi с КРУЭ-110 в блок-модульном здании БМЗ с сэндвич-панелями PIR 150 мм',
        reason: 'Установка на свайный ростверк без массивных земляных работ; 100% заводская наладка обеспечивает надежный пуск при -60°C.',
      },
      {
        title: 'Горно-металлургические комбинаты Центральной Азии (Проекты 110 кВ Туркменистан, Казахстан, Узбекистан)',
        recommend: 'Подстанция КТПБ 110/35/10 кВ (2х40 МВА) Feichi с цифровой системой МЭК 61850 и сейсмостойкостью 9 баллов',
        reason: 'Надежная работа при песчаных бурях и температурах от -30°C до +50°C (IP54), полная интеграция в АСУ ТП энергосистемы.',
      },
      {
        title: 'Опорные подстанции СЭС и ВЭС для выдачи мощности в сеть 110/220 кВ (ВИЭ)',
        recommend: 'Блочно-модульная подстанция 35/110 кВ Feichi с интегрированным модулем СТАТКОМ (СТК/SVG)',
        reason: 'Мгновенное динамическое поддержание напряжения в точке общего присоединения (ТОП) и сокращение площади ОРУ на 70%.',
      },
    ],
  },
  hasCalculator: 'sld',
  ctaTitle: {
    en: 'Download 35kV–110kV Modular Substation & GIS (КТПБ-110 / БМЗ / КРУЭ) Technical Dossier & Request ГОСТ Questionnaire',
    zh: '获取 35kV–110kV 模块化预制式变电站与 GIS 高压组合电器（俄标 КТПБ-110 / БМЗ / КРУЭ）全套工程技术方案、俄标《Опросный лист》与 CAD 单线图',
    ja: '35kV〜110kV モジュール式変電所＆GIS（КТПБ-110 / БМЗ / КРУЭ）技術仕様書ダウンロードおよびロシアGOST選定問診票請求',
    es: 'Descargar Dossier Técnico de Subestaciones Modulares 110kV y GIS (КТПБ / БМЗ / КРУЭ) y Solicitar Cuestionario GOST',
    ru: 'Скачать техническое описание на КТПБ 35/110 кВ и КРУЭ (БМЗ, КРУЭ-110) и запросить Опросный лист по стандартам ГОСТ / чертежи CAD',
  },
  ctaDesc: {
    en: 'Feichi High-Voltage Substation Engineering Division (Lead: Henry) delivers complete single-line diagrams (SLD), general arrangement drawings (GA), thermal dissipation calculations, Russian ГОСТ questionnaires, and turnkey EPC commercial proposals within 24 hours.',
    zh: '飞驰电气高压变电站与 GIS 工程设计院（总工/外贸对接人：Henry）将在 24 小时内为您提供完整的一次单线图（SLD）、总平面布置图（GA）、极寒热平衡传热计算书、俄标《Опросный лист》及全球 EPC 项目正式技术商务方案。',
    ja: '飛馳電気 高圧変電所エンジニアリング部門（担当：Henry）が24時間以内に単線結線図（SLD）、配置図、極寒熱平衡計算書、ロシア標準Опросный листおよびプロジェクト見積書を提出します。',
    es: 'El departamento técnico de alta tensión y GIS de Feichi (Líder: Henry) entregará diagramas unifilares, planos de distribución, memorias de cálculo térmico, cuestionario GOST y propuesta comercial en 24 horas.',
    ru: 'Инженерный отдел подстанций Feichi Power (Гл. инженер: Henry) в течение 24 часов подготовит однолинейные схемы (Э3), компоновку оборудования (АС/АР), расчет теплопотерь БМЗ, заполненный Опросный лист и ТКП.',
  },
};
