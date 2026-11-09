# Feichi Power - Regional SEO/GEO Keyword Matrix & Whitepaper Internal Link Topology

---

## 一、 俄语区 / 独联体（CIS & Central Asia）高价值工程长尾词库

> **核心标准映射**：ГОСТ 14695-80（箱变）, ГОСТ 15150-69 УХЛ1（极寒气候 -60℃）, ГОСТ 11677（油变）, ГОСТ 52719（干变）, БМЗ（预制舱）, КРУ（开关柜）。

| 核心搜索词（Russian） | 搜索意图（Search Intent） | 目标承接页面 | 页面核心转化动作（CTA） |
|---|---|---|---|
| **КТПН 35/10 кВ УХЛ1 производитель Китай** | 极寒 35kV 箱式变电站采购 | `/ru/products/box-substation` | 索取 ГОСТ 认证与 35kV 单线图 |
| **БМЗ блочно модульное здание подстанции** | 模块化预制舱/E-House 招标 | `/ru/products/prefabricated-cabins` | 下载 БМЗ 结构计算书与 CAD 图纸 |
| **КРУ-2-10 К-59 ячейка 10 кВ аналог** | 10kV 中置式高压开关柜替代 | `/ru/products/mv-lv-switchgear` | 索取 KYN28A / КРУ 型式试验报告 |
| **ТМГ 1000 кВА герметичный масляный трансформатор** | 1000kVA 全密封节能油变选型 | `/ru/products/oil-immersed-transformers` | 在线计算空负载损耗与外形尺寸 |
| **ТСЗЛ 1600 кВА сухой трансформатор литая смола** | 1600kVA 环氧树脂浇注干式变压器 | `/ru/products/dry-type-transformers` | 索取 $<5\text{pC}$ 局部放电实测报告 |
| **шахтная передвижная взрывозащищенная подстанция ВУП** | 煤矿井下防爆移动变电站采购 | `/ru/products/box-substation` | 索取 Ex d I Mb 矿用隔爆证书包 |
| **азотная станция КЦА мембранная шахтная** | 矿用制氮系统防灭火设备选型 | `/ru/products/psa-nitrogen-generator` | 使用 Nitrogen Sizer 在线选型 |

---

## 二、 拉美与西班牙语区（Latin America & Spain）长尾词库

> **核心应用场景**：智利/秘鲁高海拔矿业微电网、墨西哥/巴西 1500V 集中式光伏 Skid 升压站、高低压成套配电。

| 核心搜索词（Spanish） | 搜索意图（Search Intent） | 目标承接页面 | 页面核心转化动作（CTA） |
|---|---|---|---|
| **Subestación compacta tipo paquete 33kV 35kV exterior** | 户外箱式变电站工程选型 | `/es/products/box-substation` | Descargar Catálogo Oficial 38P |
| **Skid solar fotovoltaico 1500V media tensión 35kV** | 集中式光伏升压 Skid 招标 | `/es/products/prefabricated-cabins` | Solicitar diagrama unifilar (SLD) |
| **Celdas de media tensión KYN28A 24kV fabricante** | 24kV 中压金属铠装开关柜采购 | `/es/products/mv-lv-switchgear` | Solicitar dossier de ensayos tipo IEC |
| **Transformador seco encapsulado resina epoxi clase H** | H级绝缘环氧浇注干变选型 | `/es/products/dry-type-transformers` | Cotización técnica en 24 horas |
| **Tableros de baja tensión Blokset Schneider autorizado** | 施耐德 Blokset 授权低压开关柜 | `/es/products/blokset-switchgear` | Ver licencia oficial Schneider Electric |

---

## 三、 全球英语区（Global English / Middle East / SEA / Africa）词库

| 核心搜索词（English） | 搜索意图（Search Intent） | 目标承接页面 | 页面核心转化动作（CTA） |
|---|---|---|---|
| **33kV 35kV packaged compact substation manufacturer** | 33-35kV 欧变/美变制造商直采 | `/en/products/box-substation` | Launch Substation Sizer Engine |
| **Containerized E-House modular substation IEC 62271** | 预制舱变电站交钥匙工程 | `/en/products/prefabricated-cabins` | Request Engineering Quotation (RFQ) |
| **Schneider Blokset authorized panel builder China** | 施耐德 Blokset 低压抽屉柜授权商 | `/en/products/blokset-switchgear` | View Stamped License & Form 4b Specs |
| **ABB UniSafe 12kV 24kV metal clad switchgear panel** | ABB UniSafe 中压空气绝缘柜 | `/en/products/unisafe-switchgear` | Download Type-Test & IAC AFLR Report |
| **Cast resin dry type transformer low partial discharge <5pC** | 超低局放干变高端应用 | `/en/products/dry-type-transformers` | Request Factory PD Test Report |

---

## 四、 39 篇 FE-DOC 旗舰白皮书内链拓扑与转化挂载规则

为实现从**技术检索流量 -> 产品规格认知 -> RFQ 留资**的完整漏斗转化，所有技术白皮书页面统一挂载三层内链拓扑：

```
[Google / Yandex / Perplexity 检索长尾技术词]
       │
       ▼
[进入 FE-DOC 深度白皮书页面] (如 FE-DOC-30: 35-110kV 断路器极寒破冰动力学)
       │
       ├── 【层级 1：正文技术参数锚文本内链】
       │    └── 出现 "2КТПН 35kV" 时链接至 `/en/products/box-substation`
       │    └── 出现 "KYN28A IAC AFLR" 时链接至 `/en/products/mv-lv-switchgear`
       │
       ├── 【层级 2：文末技术规格与计算器入口组件 (Interactive Tool Callout)】
       │    └── 嵌入 Substation Sizer / Nitrogen Sizer 快捷交互小部件
       │
       └── 【层级 3：底部一键获取工程包 CTA 转化横幅】
            └── “Need CAD drawings or project SLDs matching this technical standard? [Submit Engineering RFQ]”
```
