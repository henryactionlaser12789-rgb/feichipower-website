export interface OverseasProjectItem {
  id: string;
  seq: number;
  country: Record<'zh' | 'en' | 'ru' | 'es' | 'ja', string>;
  countryCode: string;
  flag: string;
  region: 'americas' | 'sea' | 'cis' | 'mea' | 'other';
  sector: 'renewable' | 'mining' | 'energy' | 'infra' | 'utility';
  title: Record<string, string>;
  equipmentSummary: string;
  quantity: number | string;
  client: string;
  image: string;
  highlight?: boolean;
}

export const overseasProjectsList: OverseasProjectItem[] = [
  {
    "id": "overseas-01",
    "seq": 1,
    "country": {
      "zh": "菲律宾",
      "en": "Philippines",
      "ru": "Филиппины",
      "es": "Filipinas",
      "ja": "フィリピン"
    },
    "countryCode": "PH",
    "flag": "🇵🇭",
    "region": "sea",
    "sector": "utility",
    "title": {
      "zh": "菲律宾TVI二期（3#机组）扩建工程全厂小三箱设备采购",
      "en": "Philippines - 菲律宾TVI二期（3#机组）扩建工程全厂小三箱设备采购",
      "ru": "Филиппины - 菲律宾TVI二期（3#机组）扩建工程全厂小三箱设备采购",
      "es": "Filipinas - 菲律宾TVI二期（3#机组）扩建工程全厂小三箱设备采购",
      "ja": "フィリピン - 菲律宾TVI二期（3#机组）扩建工程全厂小三箱设备采购"
    },
    "equipmentSummary": "配电箱FCMCCBF：FCMCCBF",
    "quantity": 258,
    "client": "中国能源建设集团东北电力第一工程有限公司",
    "image": "/images/curated/project_saudi_power.webp",
    "highlight": true
  },
  {
    "id": "overseas-02",
    "seq": 2,
    "country": {
      "zh": "蒙古",
      "en": "Mongolia",
      "ru": "Монголия",
      "es": "Mongolia",
      "ja": "モンゴル"
    },
    "countryCode": "MN",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "renewable",
    "title": {
      "zh": "哈尔霍鲁姆太阳能”11035千伏2×31.5兆伏安的发电站",
      "en": "Mongolia - 哈尔霍鲁姆太阳能”11035千伏2×31.5兆伏安的发电站",
      "ru": "Монголия - 哈尔霍鲁姆太阳能”11035千伏2×31.5兆伏安的发电站",
      "es": "Mongolia - 哈尔霍鲁姆太阳能”11035千伏2×31.5兆伏安的发电站",
      "ja": "モンゴル - 哈尔霍鲁姆太阳能”11035千伏2×31.5兆伏安的发电站"
    },
    "equipmentSummary": "铠装移开式交流金属开关设备：KYN61-40.5",
    "quantity": 16,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/curated/box_substation_solar.webp",
    "highlight": true
  },
  {
    "id": "overseas-03",
    "seq": 3,
    "country": {
      "zh": "几内亚",
      "en": "Guinea",
      "ru": "Гвинея",
      "es": "Guinea",
      "ja": "ギニア"
    },
    "countryCode": "GN",
    "flag": "🇬🇳",
    "region": "mea",
    "sector": "mining",
    "title": {
      "zh": "几内亚铝业开发项目（二期）氧化铝项目",
      "en": "Guinea - 几内亚铝业开发项目（二期）氧化铝项目",
      "ru": "Гвинея - 几内亚铝业开发项目（二期）氧化铝项目",
      "es": "Guinea - 几内亚铝业开发项目（二期）氧化铝项目",
      "ja": "ギニア - 几内亚铝业开发项目（二期）氧化铝项目"
    },
    "equipmentSummary": "配电箱FCMCCBF：FCMCCBF | 预制舱YC：YCⅠ",
    "quantity": 3,
    "client": "北京合锐赛尔电力科技股份有限公司山东分公司",
    "image": "/images/curated/project_simandou_guinea.webp",
    "highlight": true
  },
  {
    "id": "overseas-04",
    "seq": 4,
    "country": {
      "zh": "菲律宾",
      "en": "Philippines",
      "ru": "Филиппины",
      "es": "Filipinas",
      "ja": "フィリピン"
    },
    "countryCode": "PH",
    "flag": "🇵🇭",
    "region": "sea",
    "sector": "renewable",
    "title": {
      "zh": "中国能建东北第一公司菲律宾屋顶光伏项目",
      "en": "Philippines - 中国能建东北第一公司菲律宾屋顶光伏项目",
      "ru": "Филиппины - 中国能建东北第一公司菲律宾屋顶光伏项目",
      "es": "Filipinas - 中国能建东北第一公司菲律宾屋顶光伏项目",
      "ja": "フィリピン - 中国能建东北第一公司菲律宾屋顶光伏项目"
    },
    "equipmentSummary": "欧式变电站：YBM20 -2700/11/0.48 | SF油浸式变压器：SF11-2700/11/0.48 | 环网柜：FC-SRM-12 两进一出、XGN口-40.5/1250-31.5、FC-SRM-12 一进三出+PT | 预制舱YC：YCⅠ | SFZ油浸式变压器：SFZ-1250034.5/11 | SCB11干式变压器：SCB11-100-11/0.4、SCB11-100-11-0.23 | S11油浸式变压器：S11-2700-11/0.48",
    "quantity": 25,
    "client": "中国能源建设集团东北电力第一工程有限公司",
    "image": "/images/curated/project_audifaw_solar.webp",
    "highlight": true
  },
  {
    "id": "overseas-05",
    "seq": 5,
    "country": {
      "zh": "尼加拉瓜",
      "en": "Nicaragua",
      "ru": "Никарагуа",
      "es": "Nicaragua",
      "ja": "ニカラグア"
    },
    "countryCode": "NI",
    "flag": "🇳🇮",
    "region": "americas",
    "sector": "renewable",
    "title": {
      "zh": "尼加拉瓜马萨亚及埃尔哈托光伏发电站项目增补",
      "en": "Nicaragua - 尼加拉瓜马萨亚及埃尔哈托光伏发电站项目增补",
      "ru": "Никарагуа - 尼加拉瓜马萨亚及埃尔哈托光伏发电站项目增补",
      "es": "Nicaragua - 尼加拉瓜马萨亚及埃尔哈托光伏发电站项目增补",
      "ja": "ニカラグア - 尼加拉瓜马萨亚及埃尔哈托光伏发电站项目增补"
    },
    "equipmentSummary": "交流低压配电柜：GGD",
    "quantity": 4,
    "client": "山东金人电气有限公司、山东电工电气集团智能电气有限公司",
    "image": "/images/curated/box_substation_solar.webp",
    "highlight": true
  },
  {
    "id": "overseas-06",
    "seq": 6,
    "country": {
      "zh": "秘鲁",
      "en": "Peru",
      "ru": "Перу",
      "es": "Perú",
      "ja": "ペルー"
    },
    "countryCode": "PE",
    "flag": "🇵🇪",
    "region": "americas",
    "sector": "energy",
    "title": {
      "zh": "秘鲁 150 吨/天 LNG 项目",
      "en": "Peru - 秘鲁 150 吨/天 LNG 项目",
      "ru": "Перу - 秘鲁 150 吨/天 LNG 项目",
      "es": "Perú - 秘鲁 150 吨/天 LNG 项目",
      "ja": "ペルー - 秘鲁 150 吨/天 LNG 项目"
    },
    "equipmentSummary": "预制舱YC：YCⅠ",
    "quantity": 5,
    "client": "北京安珂罗工程技术有限公司",
    "image": "/images/curated/precast_cabin_ehouse.webp",
    "highlight": true
  },
  {
    "id": "overseas-07",
    "seq": 7,
    "country": {
      "zh": "尼日利亚",
      "en": "Nigeria",
      "ru": "Нигерия",
      "es": "Nigeria",
      "ja": "ナイジェリア"
    },
    "countryCode": "NG",
    "flag": "🇳🇬",
    "region": "mea",
    "sector": "energy",
    "title": {
      "zh": "尼日利亚格林维尔液化天然气变频器二拖三启动项目",
      "en": "Nigeria - 尼日利亚格林维尔液化天然气变频器二拖三启动项目",
      "ru": "Нигерия - 尼日利亚格林维尔液化天然气变频器二拖三启动项目",
      "es": "Nigeria - 尼日利亚格林维尔液化天然气变频器二拖三启动项目",
      "ja": "ナイジェリア - 尼日利亚格林维尔液化天然气变频器二拖三启动项目"
    },
    "equipmentSummary": "铠装移开式交流金属封闭开关设备：UniSafe-12",
    "quantity": 11,
    "client": "大连中巨控制系统有限公司",
    "image": "/images/curated/unisafe_switchgear.webp",
    "highlight": true
  },
  {
    "id": "overseas-08",
    "seq": 8,
    "country": {
      "zh": "菲律宾",
      "en": "Philippines",
      "ru": "Филиппины",
      "es": "Filipinas",
      "ja": "フィリピン"
    },
    "countryCode": "PH",
    "flag": "🇵🇭",
    "region": "sea",
    "sector": "utility",
    "title": {
      "zh": "菲律宾Marveles临时用电",
      "en": "Philippines - 菲律宾Marveles临时用电",
      "ru": "Филиппины - 菲律宾Marveles临时用电",
      "es": "Filipinas - 菲律宾Marveles临时用电",
      "ja": "フィリピン - 菲律宾Marveles临时用电"
    },
    "equipmentSummary": "动力箱：XL21 | SCB10干式变压器：SCB10-500-0.46/0.38、SCB10-1250-13.2/0.46、SCB10-1000-0.46/0.38 | 开闭站：XGW□ | 铠装移开式交流金属开关设备KYN28：KYN28A-12 | 低压抽出式开关柜：MNS | 预制舱YC：YCⅠ | 低压母线桥：FC-CCKX-2000A-密集型-IP42",
    "quantity": 60,
    "client": "辽宁金通金属材料发展有限公司、深圳市群佳威科技有限公司",
    "image": "/images/syfcdq/project_philippines_pcpc_solar_ehouse.webp",
    "highlight": true
  },
  {
    "id": "overseas-09",
    "seq": 9,
    "country": {
      "zh": "尼加拉瓜",
      "en": "Nicaragua",
      "ru": "Никарагуа",
      "es": "Nicaragua",
      "ja": "ニカラグア"
    },
    "countryCode": "NI",
    "flag": "🇳🇮",
    "region": "americas",
    "sector": "renewable",
    "title": {
      "zh": "尼加拉瓜埃尔哈托光伏发电站项目:24.9kV箱式变压器",
      "en": "Nicaragua - 尼加拉瓜埃尔哈托光伏发电站项目:24.9kV箱式变压器",
      "ru": "Никарагуа - 尼加拉瓜埃尔哈托光伏发电站项目:24.9kV箱式变压器",
      "es": "Nicaragua - 尼加拉瓜埃尔哈托光伏发电站项目:24.9kV箱式变压器",
      "ja": "ニカラグア - 尼加拉瓜埃尔哈托光伏发电站项目:24.9kV箱式变压器"
    },
    "equipmentSummary": "风电光伏箱变ZGS18：ZGS18-3300/24.9/0.8 | S18油浸式变压器：S18-3300KVA/24.9/0.8",
    "quantity": 123,
    "client": "山东金人电气有限公司、山东电工电气集团智能电气有限公司",
    "image": "/images/curated/box_substation_solar.webp",
    "highlight": false
  },
  {
    "id": "overseas-10",
    "seq": 10,
    "country": {
      "zh": "伊拉克",
      "en": "Iraq",
      "ru": "Ирак",
      "es": "Irak",
      "ja": "イラク"
    },
    "countryCode": "IQ",
    "flag": "🇮🇶",
    "region": "mea",
    "sector": "utility",
    "title": {
      "zh": "伊拉克预制舱项目",
      "en": "Iraq - 伊拉克预制舱项目",
      "ru": "Ирак - 伊拉克预制舱项目",
      "es": "Irak - 伊拉克预制舱项目",
      "ja": "イラク - 伊拉克预制舱项目"
    },
    "equipmentSummary": "S-M油浸式变压器：S-M-2000-11/0.42 | 预制舱YC：YCⅠ | 铠装移开式交流金属开关设备KYN28：KYN28A-12 | 交流低压配电柜：GGD | 直流屏GZDW：GZDW-DC110V/38AH | 低压母线桥：FC-CCKX-4000A-空气型-IP42",
    "quantity": 18,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/curated/precast_cabin_ehouse.webp",
    "highlight": false
  },
  {
    "id": "overseas-11",
    "seq": 11,
    "country": {
      "zh": "印度尼西亚",
      "en": "Indonesia",
      "ru": "Индонезия",
      "es": "Indonesia",
      "ja": "インドネシア"
    },
    "countryCode": "ID",
    "flag": "🇮🇩",
    "region": "sea",
    "sector": "utility",
    "title": {
      "zh": "印尼MVNEX-24KV项目",
      "en": "Indonesia - 印尼MVNEX-24KV项目",
      "ru": "Индонезия - 印尼MVNEX-24KV项目",
      "es": "Indonesia - 印尼MVNEX-24KV项目",
      "ja": "インドネシア - 印尼MVNEX-24KV项目"
    },
    "equipmentSummary": "高压开关柜：Mvnex",
    "quantity": 6,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-12",
    "seq": 12,
    "country": {
      "zh": "吉尔吉斯斯坦",
      "en": "Kyrgyzstan",
      "ru": "Кыргызстан",
      "es": "Kirguistán",
      "ja": "キルギス"
    },
    "countryCode": "KG",
    "flag": "🇰🇬",
    "region": "cis",
    "sector": "mining",
    "title": {
      "zh": "中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "en": "Kyrgyzstan - 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "ru": "Кыргызстан - 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "es": "Kirguistán - 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "ja": "キルギス - 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目"
    },
    "equipmentSummary": "配电箱FCMCCBF：FCMCCBF | 动力箱：XL21 | 低压抽出式开关柜：MNS | 预制舱YC：YCⅠ | 铠装移开式交流金属开关设备KYN28：KYN28A-12 | 交流低压配电柜：GGD",
    "quantity": 24,
    "client": "新疆联达国际贸易有限责任公司",
    "image": "/images/curated/precast_cabin_ehouse.webp",
    "highlight": false
  },
  {
    "id": "overseas-13",
    "seq": 13,
    "country": {
      "zh": "朝鲜",
      "en": "North Korea",
      "ru": "Северная Корея",
      "es": "Corea del Norte",
      "ja": "北朝鮮"
    },
    "countryCode": "KP",
    "flag": "🇰🇵",
    "region": "other",
    "sector": "utility",
    "title": {
      "zh": "朝鲜充电桩配电箱项目",
      "en": "North Korea - 朝鲜充电桩配电箱项目",
      "ru": "Северная Корея - 朝鲜充电桩配电箱项目",
      "es": "Corea del Norte - 朝鲜充电桩配电箱项目",
      "ja": "北朝鮮 - 朝鲜充电桩配电箱项目"
    },
    "equipmentSummary": "动力箱：XL21",
    "quantity": 2,
    "client": "沈阳品川信息技术有限公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-14",
    "seq": 14,
    "country": {
      "zh": "蒙古",
      "en": "Mongolia",
      "ru": "Монголия",
      "es": "Mongolia",
      "ja": "モンゴル"
    },
    "countryCode": "MN",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "infra",
    "title": {
      "zh": "蒙古开闭站项目",
      "en": "Mongolia - 蒙古开闭站项目",
      "ru": "Монголия - 蒙古开闭站项目",
      "es": "Mongolia - 蒙古开闭站项目",
      "ja": "モンゴル - 蒙古开闭站项目"
    },
    "equipmentSummary": "欧式变电站：YBP20 -2*630KVA | 充气柜：FC-SRM-12",
    "quantity": 2,
    "client": "辽宁思远电气有限公司",
    "image": "/images/curated/precast_cabin_ehouse.webp",
    "highlight": false
  },
  {
    "id": "overseas-15",
    "seq": 15,
    "country": {
      "zh": "蒙古",
      "en": "Mongolia",
      "ru": "Монголия",
      "es": "Mongolia",
      "ja": "モンゴル"
    },
    "countryCode": "MN",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "mining",
    "title": {
      "zh": "肯特省石英石项目",
      "en": "Mongolia - 肯特省石英石项目",
      "ru": "Монголия - 肯特省石英石项目",
      "es": "Mongolia - 肯特省石英石项目",
      "ja": "モンゴル - 肯特省石英石项目"
    },
    "equipmentSummary": "交流低压配电柜：GGD",
    "quantity": 16,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-16",
    "seq": 16,
    "country": {
      "zh": "菲律宾",
      "en": "Philippines",
      "ru": "Филиппины",
      "es": "Filipinas",
      "ja": "フィリピン"
    },
    "countryCode": "PH",
    "flag": "🇵🇭",
    "region": "sea",
    "sector": "mining",
    "title": {
      "zh": "菲律宾MASINLOC电厂输煤系统项目",
      "en": "Philippines - 菲律宾MASINLOC电厂输煤系统项目",
      "ru": "Филиппины - 菲律宾MASINLOC电厂输煤系统项目",
      "es": "Filipinas - 菲律宾MASINLOC电厂输煤系统项目",
      "ja": "フィリピン - 菲律宾MASINLOC电厂输煤系统项目"
    },
    "equipmentSummary": "低压母线桥：FC-CCKX-630A-密集型-IP42、FC-CCKX-2500A-密集型-IP40 | 铠装移开式交流金属开关设备KYN28：KYN28A-12 | 低压抽出式开关柜：MNS | SCB18干式变压器：SCB18-1000-7.2/0.48-0.27、SCB18-400-7.2/0.48-0.27、SCB18-125-0.48/0.38-0.22",
    "quantity": 69,
    "client": "徐州中煤汉泰建筑工业化有限公司",
    "image": "/images/curated/project_saudi_power.webp",
    "highlight": false
  },
  {
    "id": "overseas-17",
    "seq": 17,
    "country": {
      "zh": "墨西哥",
      "en": "Mexico",
      "ru": "Мексика",
      "es": "México",
      "ja": "メキシコ"
    },
    "countryCode": "MX",
    "flag": "🇲🇽",
    "region": "americas",
    "sector": "renewable",
    "title": {
      "zh": "墨西哥佩尼亚斯科光伏箱变",
      "en": "Mexico - 墨西哥佩尼亚斯科光伏箱变",
      "ru": "Мексика - 墨西哥佩尼亚斯科光伏箱变",
      "es": "México - 墨西哥佩尼亚斯科光伏箱变",
      "ja": "メキシコ - 墨西哥佩尼亚斯科光伏箱变"
    },
    "equipmentSummary": "元件（成套）",
    "quantity": 1,
    "client": "山东电工电气集团智能电气有限公司",
    "image": "/images/syfcdq/project_mexico_penasco_solar.webp",
    "highlight": false
  },
  {
    "id": "overseas-18",
    "seq": 18,
    "country": {
      "zh": "蒙古",
      "en": "Mongolia",
      "ru": "Монголия",
      "es": "Mongolia",
      "ja": "モンゴル"
    },
    "countryCode": "MN",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "外蒙端子箱",
      "en": "Mongolia - 外蒙端子箱",
      "ru": "Монголия - 外蒙端子箱",
      "es": "Mongolia - 外蒙端子箱",
      "ja": "モンゴル - 外蒙端子箱"
    },
    "equipmentSummary": "配电箱FCMCCBF：FCMCCBF",
    "quantity": 4,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-19",
    "seq": 19,
    "country": {
      "zh": "塞拉利昂",
      "en": "Philippines",
      "ru": "Филиппины",
      "es": "Filipinas",
      "ja": "フィリピン"
    },
    "countryCode": "PH",
    "flag": "🇵🇭",
    "region": "sea",
    "sector": "mining",
    "title": {
      "zh": "塞拉利昂金红石矿山区光储柴一体化项目",
      "en": "Philippines - 塞拉利昂金红石矿山区光储柴一体化项目",
      "ru": "Филиппины - 塞拉利昂金红石矿山区光储柴一体化项目",
      "es": "Filipinas - 塞拉利昂金红石矿山区光储柴一体化项目",
      "ja": "フィリピン - 塞拉利昂金红石矿山区光储柴一体化项目"
    },
    "equipmentSummary": "铠装移开式交流金属开关设备KYN28：KYN28A-12 | 接地变及消弧线圈成套装置：DKSC-800/10.5-315/0.4KV | 高压母线桥：FC-CCKX-2000A-空气型-IP42",
    "quantity": 18,
    "client": "中成进出口股份有限公司",
    "image": "/images/curated/project_kazakhstan_coke.webp",
    "highlight": false
  },
  {
    "id": "overseas-20",
    "seq": 20,
    "country": {
      "zh": "埃塞俄比亚",
      "en": "Philippines",
      "ru": "Филиппины",
      "es": "Filipinas",
      "ja": "フィリピン"
    },
    "countryCode": "PH",
    "flag": "🇵🇭",
    "region": "sea",
    "sector": "utility",
    "title": {
      "zh": "埃塞俄比亚巴哈达尔机场项目",
      "en": "Philippines - 埃塞俄比亚巴哈达尔机场项目",
      "ru": "Филиппины - 埃塞俄比亚巴哈达尔机场项目",
      "es": "Filipinas - 埃塞俄比亚巴哈达尔机场项目",
      "ja": "フィリピン - 埃塞俄比亚巴哈达尔机场项目"
    },
    "equipmentSummary": "配电箱FCMCCBF：FCMCCBF | 动力箱：XL21 | Blokset：Blokset",
    "quantity": 117,
    "client": "北京信达共创机械设备有限公司",
    "image": "/images/syfcdq/project_dalian_airport.webp",
    "highlight": false
  },
  {
    "id": "overseas-21",
    "seq": 21,
    "country": {
      "zh": "菲律宾",
      "en": "Philippines",
      "ru": "Филиппины",
      "es": "Filipinas",
      "ja": "フィリピン"
    },
    "countryCode": "PH",
    "flag": "🇵🇭",
    "region": "sea",
    "sector": "utility",
    "title": {
      "zh": "菲律宾Aboitiz EAUC 30MW30MWh储能项目",
      "en": "Philippines - 菲律宾Aboitiz EAUC 30MW30MWh储能项目",
      "ru": "Филиппины - 菲律宾Aboitiz EAUC 30MW30MWh储能项目",
      "es": "Filipinas - 菲律宾Aboitiz EAUC 30MW30MWh储能项目",
      "ja": "フィリピン - 菲律宾Aboitiz EAUC 30MW30MWh储能项目"
    },
    "equipmentSummary": "预制舱YC：YCⅠ | 低压抽出式开关柜：MNS | 接地变小电阻装置：AL-BNR-13.8KV | ",
    "quantity": 15,
    "client": "河北电力装备有限公司",
    "image": "/images/syfcdq/project_philippines_pcpc_solar_ehouse.webp",
    "highlight": false
  },
  {
    "id": "overseas-22",
    "seq": 22,
    "country": {
      "zh": "蒙古",
      "en": "Mongolia",
      "ru": "Монголия",
      "es": "Mongolia",
      "ja": "モンゴル"
    },
    "countryCode": "MN",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "(蒙古)开关柜报价",
      "en": "Mongolia - (蒙古)开关柜报价",
      "ru": "Монголия - (蒙古)开关柜报价",
      "es": "Mongolia - (蒙古)开关柜报价",
      "ja": "モンゴル - (蒙古)开关柜报价"
    },
    "equipmentSummary": "铠装移开式交流金属开关设备KYN28：KYN28A-12 | 交流低压配电柜：GGD | 油浸式变压器：S11-1600-10/0.4",
    "quantity": 15,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-23",
    "seq": 23,
    "country": {
      "zh": "蒙古",
      "en": "Mongolia",
      "ru": "Монголия",
      "es": "Mongolia",
      "ja": "モンゴル"
    },
    "countryCode": "MN",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "(蒙古)18台高压柜",
      "en": "Mongolia - (蒙古)18台高压柜",
      "ru": "Монголия - (蒙古)18台高压柜",
      "es": "Mongolia - (蒙古)18台高压柜",
      "ja": "モンゴル - (蒙古)18台高压柜"
    },
    "equipmentSummary": "铠装移开式交流金属开关设备KYN28：KYN28A-12 | 高压母线桥：FC-CCKX-1600A-空气型-IP40",
    "quantity": 19,
    "client": "辽宁思远电气有限公司",
    "image": "/images/curated/unisafe_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-24",
    "seq": 24,
    "country": {
      "zh": "蒙古",
      "en": "Mongolia",
      "ru": "Монголия",
      "es": "Mongolia",
      "ja": "モンゴル"
    },
    "countryCode": "MN",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "（蒙古）一台户外箱",
      "en": "Mongolia - （蒙古）一台户外箱",
      "ru": "Монголия - （蒙古）一台户外箱",
      "es": "Mongolia - （蒙古）一台户外箱",
      "ja": "モンゴル - （蒙古）一台户外箱"
    },
    "equipmentSummary": "电缆分支箱：DF-0.4KV",
    "quantity": 1,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/curated/unisafe_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-25",
    "seq": 25,
    "country": {
      "zh": "蒙古",
      "en": "Mongolia",
      "ru": "Монголия",
      "es": "Mongolia",
      "ja": "モンゴル"
    },
    "countryCode": "MN",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "（蒙古）6台低压柜报价",
      "en": "Mongolia - （蒙古）6台低压柜报价",
      "ru": "Монголия - （蒙古）6台低压柜报价",
      "es": "Mongolia - （蒙古）6台低压柜报价",
      "ja": "モンゴル - （蒙古）6台低压柜报价"
    },
    "equipmentSummary": "低压抽出式开关柜：GCS",
    "quantity": 6,
    "client": "辽宁思远电气有限公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-26",
    "seq": 26,
    "country": {
      "zh": "沙特阿拉伯",
      "en": "Saudi Arabia",
      "ru": "Саудовская Аравия",
      "es": "Arabia Saudita",
      "ja": "サウジア拉伯"
    },
    "countryCode": "SA",
    "flag": "🇸🇦",
    "region": "mea",
    "sector": "utility",
    "title": {
      "zh": "沙特PP12联合循环电站扩建项目",
      "en": "Saudi Arabia - 沙特PP12联合循环电站扩建项目",
      "ru": "Саудовская Аравия - 沙特PP12联合循环电站扩建项目",
      "es": "Arabia Saudita - 沙特PP12联合循环电站扩建项目",
      "ja": "サウジア拉伯 - 沙特PP12联合循环电站扩建项目"
    },
    "equipmentSummary": "低压抽出式开关柜：MNS | 交流低压配电柜：GGD",
    "quantity": 307,
    "client": "河北电力装备有限公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-27",
    "seq": 27,
    "country": {
      "zh": "蒙古",
      "en": "Mongolia",
      "ru": "Монголия",
      "es": "Mongolia",
      "ja": "モンゴル"
    },
    "countryCode": "MN",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "（蒙古国）端子箱报价",
      "en": "Mongolia - （蒙古国）端子箱报价",
      "ru": "Монголия - （蒙古国）端子箱报价",
      "es": "Mongolia - （蒙古国）端子箱报价",
      "ja": "モンゴル - （蒙古国）端子箱报价"
    },
    "equipmentSummary": "电缆分支箱：DF-0.4KV",
    "quantity": 213,
    "client": "沈阳普沃电力电缆有限公司",
    "image": "/images/curated/unisafe_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-28",
    "seq": 28,
    "country": {
      "zh": "墨西哥",
      "en": "Mexico",
      "ru": "Мексика",
      "es": "México",
      "ja": "メキシコ"
    },
    "countryCode": "MX",
    "flag": "🇲🇽",
    "region": "americas",
    "sector": "renewable",
    "title": {
      "zh": "（电池）中能建墨西哥光伏箱变项目",
      "en": "Mexico - （电池）中能建墨西哥光伏箱变项目",
      "ru": "Мексика - （电池）中能建墨西哥光伏箱变项目",
      "es": "México - （电池）中能建墨西哥光伏箱变项目",
      "ja": "メキシコ - （电池）中能建墨西哥光伏箱变项目"
    },
    "equipmentSummary": "元件（E-House）",
    "quantity": 1,
    "client": "山东电工电气集团智能电气有限公司",
    "image": "/images/syfcdq/project_mexico_penasco_solar.webp",
    "highlight": false
  },
  {
    "id": "overseas-29",
    "seq": 29,
    "country": {
      "zh": "几内亚",
      "en": "Guinea",
      "ru": "Гвинея",
      "es": "Guinea",
      "ja": "ギニア"
    },
    "countryCode": "GN",
    "flag": "🇬🇳",
    "region": "mea",
    "sector": "infra",
    "title": {
      "zh": "SUB4801-1 几内亚力拓西芒杜港口项目",
      "en": "Guinea - SUB4801-1 几内亚力拓西芒杜港口项目",
      "ru": "Гвинея - SUB4801-1 几内亚力拓西芒杜港口项目",
      "es": "Guinea - SUB4801-1 几内亚力拓西芒杜港口项目",
      "ja": "ギニア - SUB4801-1 几内亚力拓西芒杜港口项目"
    },
    "equipmentSummary": "箱变：YBM-1000、YBM-1600 | 高低压：OKKEN、PIX | SCB14干式变压器：SCB14-1000-10/0.4、SCB14-1600-10/0.4、SCB14-1250-10/0.4、SCB14-2500-10/0.4 | 电力监控屏：电力监控屏 | 低压母线桥：FC-CCKX-2000A-密集型-IP42、FC-CCKX-3150A-密集型-IP42、FC-CCKX-5000A-密集型-IP42 | 预制舱YC：YCⅠ | 配电箱FCMCCBF：FCMCCBF | 直流屏GZDW：GZDW-DC110V/65AH | 交流屏：JLP | 高压母线桥：FC-CCKX-1250A-空气型-IP42",
    "quantity": 308,
    "client": "中国港湾工程有限责任公司、施耐德电气（中国）有限公司",
    "image": "/images/curated/project_simandou_guinea.webp",
    "highlight": false
  },
  {
    "id": "overseas-30",
    "seq": 30,
    "country": {
      "zh": "蒙古",
      "en": "Mongolia",
      "ru": "Монголия",
      "es": "Mongolia",
      "ja": "モンゴル"
    },
    "countryCode": "MN",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "（蒙古）2台100KVA站用变",
      "en": "Mongolia - （蒙古）2台100KVA站用变",
      "ru": "Монголия - （蒙古）2台100KVA站用变",
      "es": "Mongolia - （蒙古）2台100KVA站用变",
      "ja": "モンゴル - （蒙古）2台100KVA站用变"
    },
    "equipmentSummary": "SC10：SC10-100-6.3/0.4",
    "quantity": 2,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/curated/unisafe_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-31",
    "seq": 31,
    "country": {
      "zh": "蒙古",
      "en": "Mongolia",
      "ru": "Монголия",
      "es": "Mongolia",
      "ja": "モンゴル"
    },
    "countryCode": "MN",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "（蒙古）端子箱",
      "en": "Mongolia - （蒙古）端子箱",
      "ru": "Монголия - （蒙古）端子箱",
      "es": "Mongolia - （蒙古）端子箱",
      "ja": "モンゴル - （蒙古）端子箱"
    },
    "equipmentSummary": "配电箱FCMCCBF：FCMCCBF",
    "quantity": 13,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-32",
    "seq": 32,
    "country": {
      "zh": "蒙古",
      "en": "Mongolia",
      "ru": "Монголия",
      "es": "Mongolia",
      "ja": "モンゴル"
    },
    "countryCode": "MN",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "（蒙古）OT项目-MNS2.0",
      "en": "Mongolia - （蒙古）OT项目-MNS2.0",
      "ru": "Монголия - （蒙古）OT项目-MNS2.0",
      "es": "Mongolia - （蒙古）OT项目-MNS2.0",
      "ja": "モンゴル - （蒙古）OT项目-MNS2.0"
    },
    "equipmentSummary": "低压抽出式开关柜：MNS2.0",
    "quantity": 3,
    "client": "沈阳普沃电力电缆有限公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-33",
    "seq": 33,
    "country": {
      "zh": "蒙古",
      "en": "Mongolia",
      "ru": "Монголия",
      "es": "Mongolia",
      "ja": "モンゴル"
    },
    "countryCode": "MN",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "蒙古-OT项目（2台400KVA箱变+1台2x800KVA箱变）",
      "en": "Mongolia - 蒙古-OT项目（2台400KVA箱变+1台2x800KVA箱变）",
      "ru": "Монголия - 蒙古-OT项目（2台400KVA箱变+1台2x800KVA箱变）",
      "es": "Mongolia - 蒙古-OT项目（2台400KVA箱变+1台2x800KVA箱变）",
      "ja": "モンゴル - 蒙古-OT项目（2台400KVA箱变+1台2x800KVA箱变）"
    },
    "equipmentSummary": "低压抽出式开关柜：MNS2.0 | 充气柜：充气柜safe | 欧式变电站：YBM20 -12/400KVA、YBM20 -12/2*800KVA",
    "quantity": 18,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/curated/precast_cabin_ehouse.webp",
    "highlight": false
  },
  {
    "id": "overseas-34",
    "seq": 34,
    "country": {
      "zh": "菲律宾",
      "en": "Philippines",
      "ru": "Филиппины",
      "es": "Filipinas",
      "ja": "フィリピン"
    },
    "countryCode": "PH",
    "flag": "🇵🇭",
    "region": "sea",
    "sector": "utility",
    "title": {
      "zh": "菲律宾美萨美斯扩建项目",
      "en": "Philippines - 菲律宾美萨美斯扩建项目",
      "ru": "Филиппины - 菲律宾美萨美斯扩建项目",
      "es": "Filipinas - 菲律宾美萨美斯扩建项目",
      "ja": "フィリピン - 菲律宾美萨美斯扩建项目"
    },
    "equipmentSummary": "欧式变电站：YBM20 -12/1600KVA",
    "quantity": 2,
    "client": "辽宁亚威电气有限公司",
    "image": "/images/syfcdq/project_philippines_pcpc_solar_ehouse.webp",
    "highlight": false
  },
  {
    "id": "overseas-35",
    "seq": 35,
    "country": {
      "zh": "肯尼亚",
      "en": "Philippines",
      "ru": "Филиппины",
      "es": "Filipinas",
      "ja": "フィリピン"
    },
    "countryCode": "PH",
    "flag": "🇵🇭",
    "region": "sea",
    "sector": "utility",
    "title": {
      "zh": "肯尼亚低压柜配电箱",
      "en": "Philippines - 肯尼亚低压柜配电箱",
      "ru": "Филиппины - 肯尼亚低压柜配电箱",
      "es": "Filipinas - 肯尼亚低压柜配电箱",
      "ja": "フィリピン - 肯尼亚低压柜配电箱"
    },
    "equipmentSummary": "配电箱：JXF",
    "quantity": 26,
    "client": "河北电力装备有限公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-36",
    "seq": 36,
    "country": {
      "zh": "吉尔吉斯斯坦",
      "en": "Kyrgyzstan",
      "ru": "Кыргызстан",
      "es": "Kirguistán",
      "ja": "キルギス"
    },
    "countryCode": "KG",
    "flag": "🇰🇬",
    "region": "cis",
    "sector": "mining",
    "title": {
      "zh": "中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "en": "Kyrgyzstan - 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "ru": "Кыргызстан - 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "es": "Kirguistán - 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "ja": "キルギス - 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目"
    },
    "equipmentSummary": "动力箱：XL21 | 配电箱FCMCCBF：FCMCCBF | SCB14干式变压器：SCB14-500-10/0.4 | 欧式变电站：YBM20 -12/500KVA",
    "quantity": 21,
    "client": "山东骏驰电气有限公司",
    "image": "/images/curated/precast_cabin_ehouse.webp",
    "highlight": false
  },
  {
    "id": "overseas-37",
    "seq": 37,
    "country": {
      "zh": "蒙古",
      "en": "Mongolia",
      "ru": "Монголия",
      "es": "Mongolia",
      "ja": "モンゴル"
    },
    "countryCode": "MN",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "infra",
    "title": {
      "zh": "苏荷巴托110kv变电站项目",
      "en": "Mongolia - 苏荷巴托110kv变电站项目",
      "ru": "Монголия - 苏荷巴托110kv变电站项目",
      "es": "Mongolia - 苏荷巴托110kv变电站项目",
      "ja": "モンゴル - 苏荷巴托110kv变电站项目"
    },
    "equipmentSummary": "高压母线桥：FC-CCKX-1250A-空气型-IP40 | 铠装移开式交流金属开关设备KYN28：KYN28A-12",
    "quantity": 11,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/curated/precast_cabin_ehouse.webp",
    "highlight": false
  },
  {
    "id": "overseas-38",
    "seq": 38,
    "country": {
      "zh": "吉布提",
      "en": "Philippines",
      "ru": "Филиппины",
      "es": "Filipinas",
      "ja": "フィリピン"
    },
    "countryCode": "PH",
    "flag": "🇵🇭",
    "region": "sea",
    "sector": "utility",
    "title": {
      "zh": "吉布提医院项目",
      "en": "Philippines - 吉布提医院项目",
      "ru": "Филиппины - 吉布提医院项目",
      "es": "Filipinas - 吉布提医院项目",
      "ja": "フィリピン - 吉布提医院项目"
    },
    "equipmentSummary": "低压抽出式开关柜：MNS2.0",
    "quantity": 6,
    "client": "大连金弘机电设备有限公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-39",
    "seq": 39,
    "country": {
      "zh": "伊拉克",
      "en": "Iraq",
      "ru": "Ирак",
      "es": "Irak",
      "ja": "イラク"
    },
    "countryCode": "IQ",
    "flag": "🇮🇶",
    "region": "mea",
    "sector": "utility",
    "title": {
      "zh": "伊拉克出口项目增补",
      "en": "Iraq - 伊拉克出口项目增补",
      "ru": "Ирак - 伊拉克出口项目增补",
      "es": "Irak - 伊拉克出口项目增补",
      "ja": "イラク - 伊拉克出口项目增补"
    },
    "equipmentSummary": "交流低压配电柜：GGD",
    "quantity": 3,
    "client": "沈阳华讯通电子科技工程有限公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-40",
    "seq": 40,
    "country": {
      "zh": "印度尼西亚",
      "en": "Indonesia",
      "ru": "Индонезия",
      "es": "Indonesia",
      "ja": "インドネシア"
    },
    "countryCode": "ID",
    "flag": "🇮🇩",
    "region": "sea",
    "sector": "utility",
    "title": {
      "zh": "中铝国际印尼曼帕瓦1000kt/a氧化铝项目",
      "en": "Indonesia - 中铝国际印尼曼帕瓦1000kt/a氧化铝项目",
      "ru": "Индонезия - 中铝国际印尼曼帕瓦1000kt/a氧化铝项目",
      "es": "Indonesia - 中铝国际印尼曼帕瓦1000kt/a氧化铝项目",
      "ja": "インドネシア - 中铝国际印尼曼帕瓦1000kt/a氧化铝项目"
    },
    "equipmentSummary": "动力箱：XL21 | 防爆箱：FBX | 配电箱：JXF",
    "quantity": 134,
    "client": "中铝国际工程股份有限公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-41",
    "seq": 41,
    "country": {
      "zh": "印度尼西亚",
      "en": "Indonesia",
      "ru": "Индонезия",
      "es": "Indonesia",
      "ja": "インドネシア"
    },
    "countryCode": "ID",
    "flag": "🇮🇩",
    "region": "sea",
    "sector": "renewable",
    "title": {
      "zh": "印尼恒生新能源材料有限公司红土镍矿冶炼年高冰镍含镍金属1万吨(印尼)项目",
      "en": "Indonesia - 印尼恒生新能源材料有限公司红土镍矿冶炼年高冰镍含镍金属1万吨(印尼)项目",
      "ru": "Индонезия - 印尼恒生新能源材料有限公司红土镍矿冶炼年高冰镍含镍金属1万吨(印尼)项目",
      "es": "Indonesia - 印尼恒生新能源材料有限公司红土镍矿冶炼年高冰镍含镍金属1万吨(印尼)项目",
      "ja": "インドネシア - 印尼恒生新能源材料有限公司红土镍矿冶炼年高冰镍含镍金属1万吨(印尼)项目"
    },
    "equipmentSummary": "欧式变电站：YBM20 -12/2500KVA",
    "quantity": 1,
    "client": "辽宁亚威电气有限公司",
    "image": "/images/curated/precast_cabin_ehouse.webp",
    "highlight": false
  },
  {
    "id": "overseas-42",
    "seq": 42,
    "country": {
      "zh": "菲律宾",
      "en": "Philippines",
      "ru": "Филиппины",
      "es": "Filipinas",
      "ja": "フィリピン"
    },
    "countryCode": "PH",
    "flag": "🇵🇭",
    "region": "sea",
    "sector": "renewable",
    "title": {
      "zh": "东电一公司菲律宾PCPC分布式光伏 EPC 项目",
      "en": "Philippines - 东电一公司菲律宾PCPC分布式光伏 EPC 项目",
      "ru": "Филиппины - 东电一公司菲律宾PCPC分布式光伏 EPC 项目",
      "es": "Filipinas - 东电一公司菲律宾PCPC分布式光伏 EPC 项目",
      "ja": "フィリピン - 东电一公司菲律宾PCPC分布式光伏 EPC 项目"
    },
    "equipmentSummary": "欧式变电站：YB口 -12/2000KVA、YB口 -12/1000KVA、YB口 -12/1250KVA",
    "quantity": 6,
    "client": "辽宁亚威电气有限公司",
    "image": "/images/curated/box_substation_solar.webp",
    "highlight": false
  },
  {
    "id": "overseas-43",
    "seq": 43,
    "country": {
      "zh": "菲律宾",
      "en": "Philippines",
      "ru": "Филиппины",
      "es": "Filipinas",
      "ja": "フィリピン"
    },
    "countryCode": "PH",
    "flag": "🇵🇭",
    "region": "sea",
    "sector": "renewable",
    "title": {
      "zh": "菲律宾PCPC分布式光伏EPC项目一次设备开关柜、预制舱采购",
      "en": "Philippines - 菲律宾PCPC分布式光伏EPC项目一次设备开关柜、预制舱采购",
      "ru": "Филиппины - 菲律宾PCPC分布式光伏EPC项目一次设备开关柜、预制舱采购",
      "es": "Filipinas - 菲律宾PCPC分布式光伏EPC项目一次设备开关柜、预制舱采购",
      "ja": "フィリピン - 菲律宾PCPC分布式光伏EPC项目一次设备开关柜、预制舱采购"
    },
    "equipmentSummary": "动力箱：XL21 | 预制舱YC：YCⅡ、YCⅠ | 铠装移开式交流金属开关设备KYN28：KYN28A-12",
    "quantity": 26,
    "client": "中国能源建设集团东北电力第一工程有限公司",
    "image": "/images/curated/box_substation_solar.webp",
    "highlight": false
  },
  {
    "id": "overseas-44",
    "seq": 44,
    "country": {
      "zh": "坦桑尼亚",
      "en": "Philippines",
      "ru": "Филиппины",
      "es": "Filipinas",
      "ja": "フィリピン"
    },
    "countryCode": "PH",
    "flag": "🇵🇭",
    "region": "sea",
    "sector": "utility",
    "title": {
      "zh": "坦桑尼亚配电箱",
      "en": "Philippines - 坦桑尼亚配电箱",
      "ru": "Филиппины - 坦桑尼亚配电箱",
      "es": "Filipinas - 坦桑尼亚配电箱",
      "ja": "フィリピン - 坦桑尼亚配电箱"
    },
    "equipmentSummary": "配电箱：JXF | 动力箱：XL21",
    "quantity": 4,
    "client": "葫芦岛电力设备有限公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-45",
    "seq": 45,
    "country": {
      "zh": "蒙古",
      "en": "Mongolia",
      "ru": "Монголия",
      "es": "Mongolia",
      "ja": "モンゴル"
    },
    "countryCode": "MN",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "蒙古国高压柜",
      "en": "Mongolia - 蒙古国高压柜",
      "ru": "Монголия - 蒙古国高压柜",
      "es": "Mongolia - 蒙古国高压柜",
      "ja": "モンゴル - 蒙古国高压柜"
    },
    "equipmentSummary": "高压母线桥：FC-CCKX-1250A-空气型-IP40 | 铠装移开式交流金属开关设备KYN28：KYN28A-12 | 铠装移开式交流金属开关设备：KYN61-40.5",
    "quantity": 79,
    "client": "辽宁思远电气有限公司",
    "image": "/images/curated/unisafe_switchgear.webp",
    "highlight": false
  },
  {
    "id": "overseas-46",
    "seq": 46,
    "country": {
      "zh": "墨西哥",
      "en": "Mexico",
      "ru": "Мексика",
      "es": "México",
      "ja": "メキシコ"
    },
    "countryCode": "MX",
    "flag": "🇲🇽",
    "region": "americas",
    "sector": "renewable",
    "title": {
      "zh": "中能建墨西哥光伏箱变项目",
      "en": "Mexico - 中能建墨西哥光伏箱变项目",
      "ru": "Мексика - 中能建墨西哥光伏箱变项目",
      "es": "México - 中能建墨西哥光伏箱变项目",
      "ja": "メキシコ - 中能建墨西哥光伏箱变项目"
    },
    "equipmentSummary": "S11油浸式变压器：S11-8800/40.5 | 充气柜：FC-SRM-12 | 逆变一体机：YB-4400/40.5",
    "quantity": 51,
    "client": "山东电工电气集团智能电气有限公司",
    "image": "/images/syfcdq/project_mexico_penasco_solar.webp",
    "highlight": false
  },
  {
    "id": "overseas-47",
    "seq": 47,
    "country": {
      "zh": "吉尔吉斯斯坦",
      "en": "Kyrgyzstan",
      "ru": "Кыргызстан",
      "es": "Kirguistán",
      "ja": "キルギス"
    },
    "countryCode": "KG",
    "flag": "🇰🇬",
    "region": "cis",
    "sector": "mining",
    "title": {
      "zh": "中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "en": "Kyrgyzstan - 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "ru": "Кыргызстан - 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "es": "Kirguistán - 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "ja": "キルギス - 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目"
    },
    "equipmentSummary": "配电箱：JXF | 动力箱：XL21 | SCB14干式变压器：SCB14-1250-10/0.4、SCB14-1000-10/0.4、SCB14-500-10/0.4 | 低压母线桥：FC-CCKX-2000A-空气型-IP42 | 铠装移开式交流金属开关设备KYN28：KYN28A-12 | 低压抽出式开关柜：MNS | 欧式变电站：YBM20 -12/500KVA | SCB13干式变压器：SCB13-500-10/0.4 | 油浸式变压器：S11-500-10/0.4",
    "quantity": 294,
    "client": "中国黄金集团有限公司",
    "image": "/images/curated/precast_cabin_ehouse.webp",
    "highlight": false
  },
  {
    "id": "overseas-48",
    "seq": 48,
    "country": {
      "zh": "孟加拉国",
      "en": "Philippines",
      "ru": "Филиппины",
      "es": "Filipinas",
      "ja": "フィリピン"
    },
    "countryCode": "PH",
    "flag": "🇵🇭",
    "region": "sea",
    "sector": "mining",
    "title": {
      "zh": "孟加拉巴瑞萨350MW燃煤电站",
      "en": "Philippines - 孟加拉巴瑞萨350MW燃煤电站",
      "ru": "Филиппины - 孟加拉巴瑞萨350MW燃煤电站",
      "es": "Filipinas - 孟加拉巴瑞萨350MW燃煤电站",
      "ja": "フィリピン - 孟加拉巴瑞萨350MW燃煤电站"
    },
    "equipmentSummary": "SCB10干式变压器：SCB10-400-6.6/0.4",
    "quantity": 1,
    "client": "长春龙源电力设备有限公司",
    "image": "/images/curated/project_saudi_power.webp",
    "highlight": false
  },
  {
    "id": "overseas-49",
    "seq": 49,
    "country": {
      "zh": "伊拉克",
      "en": "Iraq",
      "ru": "Ирак",
      "es": "Irak",
      "ja": "イラク"
    },
    "countryCode": "IQ",
    "flag": "🇮🇶",
    "region": "mea",
    "sector": "utility",
    "title": {
      "zh": "伊拉克出口项目",
      "en": "Iraq - 伊拉克出口项目",
      "ru": "Ирак - 伊拉克出口项目",
      "es": "Irak - 伊拉克出口项目",
      "ja": "イラク - 伊拉克出口项目"
    },
    "equipmentSummary": "交流低压配电柜：GGD",
    "quantity": 4,
    "client": "辽宁康威机电工程有限责任公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": false
  },
  {
    "id": "project-100",
    "seq": 100,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "mining",
    "title": {
      "zh": "广西防城港钢铁基地项目 (千万吨级现代化沿海钢铁基地)",
      "en": "China - 广西防城港钢铁基地项目 (千万吨级现代化沿海钢铁基地)",
      "ru": "Китай - 广西防城港钢铁基地项目 (千万吨级现代化沿海钢铁基地)",
      "es": "China - 广西防城港钢铁基地项目 (千万吨级现代化沿海钢铁基地)",
      "ja": "中国 - 广西防城港钢铁基地项目 (千万吨级现代化沿海钢铁基地)"
    },
    "equipmentSummary": "40.5kV 高压开关设备及主变供电系统",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/project_steel_base.webp",
    "highlight": true
  },
  {
    "id": "project-101",
    "seq": 101,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "mining",
    "title": {
      "zh": "冀南钢铁集团特钢基地项目 (大型特钢轧钢生产线)",
      "en": "China - 冀南钢铁集团特钢基地项目 (大型特钢轧钢生产线)",
      "ru": "Китай - 冀南钢铁集团特钢基地项目 (大型特钢轧钢生产线)",
      "es": "China - 冀南钢铁集团特钢基地项目 (大型特钢轧钢生产线)",
      "ja": "中国 - 冀南钢铁集团特钢基地项目 (大型特钢轧钢生产线)"
    },
    "equipmentSummary": "高压成套配电设备及动力变压器",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/project_steel_base.webp",
    "highlight": true
  },
  {
    "id": "project-102",
    "seq": 102,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "mining",
    "title": {
      "zh": "思山岭铁矿 1500 万吨/年选矿工程 (亚洲最深铁矿动力枢纽)",
      "en": "China - 思山岭铁矿 1500 万吨/年选矿工程 (亚洲最深铁矿动力枢纽)",
      "ru": "Китай - 思山岭铁矿 1500 万吨/年选矿工程 (亚洲最深铁矿动力枢纽)",
      "es": "China - 思山岭铁矿 1500 万吨/年选矿工程 (亚洲最深铁矿动力枢纽)",
      "ja": "中国 - 思山岭铁矿 1500 万吨/年选矿工程 (亚洲最深铁矿动力枢纽)"
    },
    "equipmentSummary": "矿山高压开关柜及重型整流变压器",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/project_kazakhstan_coke.webp",
    "highlight": true
  },
  {
    "id": "project-103",
    "seq": 103,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "mining",
    "title": {
      "zh": "山西铝业挖潜改造 EPC 总承包项目 (氧化铝冶炼整改工程)",
      "en": "China - 山西铝业挖潜改造 EPC 总承包项目 (氧化铝冶炼整改工程)",
      "ru": "Китай - 山西铝业挖潜改造 EPC 总承包项目 (氧化铝冶炼整改工程)",
      "es": "China - 山西铝业挖潜改造 EPC 总承包项目 (氧化铝冶炼整改工程)",
      "ja": "中国 - 山西铝业挖潜改造 EPC 总承包项目 (氧化铝冶炼整改工程)"
    },
    "equipmentSummary": "电解铝供电高压开关柜",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/project_steel_base.webp",
    "highlight": true
  },
  {
    "id": "project-104",
    "seq": 104,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "mining",
    "title": {
      "zh": "哈尔乌素特大型露天煤矿移设工程 (特大型煤炭基地)",
      "en": "China - 哈尔乌素特大型露天煤矿移设工程 (特大型煤炭基地)",
      "ru": "Китай - 哈尔乌素特大型露天煤矿移设工程 (特大型煤炭基地)",
      "es": "China - 哈尔乌素特大型露天煤矿移设工程 (特大型煤炭基地)",
      "ja": "中国 - 哈尔乌素特大型露天煤矿移设工程 (特大型煤炭基地)"
    },
    "equipmentSummary": "破碎输送系统高压开关柜与变电站",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/precast_cabin_ehouse.webp",
    "highlight": true
  },
  {
    "id": "project-105",
    "seq": 105,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "mining",
    "title": {
      "zh": "榆林能源青龙寺煤矿项目 (大型现代化煤矿)",
      "en": "China - 榆林能源青龙寺煤矿项目 (大型现代化煤矿)",
      "ru": "Китай - 榆林能源青龙寺煤矿项目 (大型现代化煤矿)",
      "es": "China - 榆林能源青龙寺煤矿项目 (大型现代化煤矿)",
      "ja": "中国 - 榆林能源青龙寺煤矿项目 (大型现代化煤矿)"
    },
    "equipmentSummary": "矿井防爆供电高压开关设备",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/project_kazakhstan_coke.webp",
    "highlight": true
  },
  {
    "id": "project-106",
    "seq": 106,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "沈阳地铁 3 号线一期工程供电集成 (城市骨干地铁线路)",
      "en": "China - 沈阳地铁 3 号线一期工程供电集成 (城市骨干地铁线路)",
      "ru": "Китай - 沈阳地铁 3 号线一期工程供电集成 (城市骨干地铁线路)",
      "es": "China - 沈阳地铁 3 号线一期工程供电集成 (城市骨干地铁线路)",
      "ja": "中国 - 沈阳地铁 3 号线一期工程供电集成 (城市骨干地铁线路)"
    },
    "equipmentSummary": "牵引降压混合变电所中压开关设备与直流屏",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/project_shenyang_metro.webp",
    "highlight": true
  },
  {
    "id": "project-107",
    "seq": 107,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "沈阳地铁 4 号线一期工程供电集成 (南北大动脉主变电所)",
      "en": "China - 沈阳地铁 4 号线一期工程供电集成 (南北大动脉主变电所)",
      "ru": "Китай - 沈阳地铁 4 号线一期工程供电集成 (南北大动脉主变电所)",
      "es": "China - 沈阳地铁 4 号线一期工程供电集成 (南北大动脉主变电所)",
      "ja": "中国 - 沈阳地铁 4 号线一期工程供电集成 (南北大动脉主变电所)"
    },
    "equipmentSummary": "35kV/10kV 环网供电系统及配电箱群",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/project_shenyang_metro.webp",
    "highlight": true
  },
  {
    "id": "project-108",
    "seq": 108,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "山西龙华口大型调水工程 (国家重点水利枢纽)",
      "en": "China - 山西龙华口大型调水工程 (国家重点水利枢纽)",
      "ru": "Китай - 山西龙华口大型调水工程 (国家重点水利枢纽)",
      "es": "China - 山西龙华口大型调水工程 (国家重点水利枢纽)",
      "ja": "中国 - 山西龙华口大型调水工程 (国家重点水利枢纽)"
    },
    "equipmentSummary": "高扬程大流量水泵高压变频配电设备",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/unisafe_switchgear.webp",
    "highlight": true
  },
  {
    "id": "project-109",
    "seq": 109,
    "country": {
      "zh": "几内亚 (Guinea)",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "mining",
    "title": {
      "zh": "力拓西芒杜铁矿港口 EPC 项目 ()",
      "en": "China - 力拓西芒杜铁矿港口 EPC 项目 ()",
      "ru": "Китай - 力拓西芒杜铁矿港口 EPC 项目 ()",
      "es": "China - 力拓西芒杜铁矿港口 EPC 项目 ()",
      "ja": "中国 - 力拓西芒杜铁矿港口 EPC 项目 ()"
    },
    "equipmentSummary": "模块化预制舱式变电站及港口供电成套",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/precast_cabin_ehouse.webp",
    "highlight": true
  },
  {
    "id": "project-110",
    "seq": 110,
    "country": {
      "zh": "哈萨克斯坦 (Kazakhstan)",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "energy",
    "title": {
      "zh": "舒巴尔库半焦工业变电站 ()",
      "en": "China - 舒巴尔库半焦工业变电站 ()",
      "ru": "Китай - 舒巴尔库半焦工业变电站 ()",
      "es": "China - 舒巴尔库半焦工业变电站 ()",
      "ja": "中国 - 舒巴尔库半焦工业变电站 ()"
    },
    "equipmentSummary": "2КТПН 极寒保温变电站及防冻高压成套",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/precast_cabin_ehouse.webp",
    "highlight": true
  },
  {
    "id": "project-111",
    "seq": 111,
    "country": {
      "zh": "沙特阿拉伯 (Saudi Arabia)",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "energy",
    "title": {
      "zh": "联合循环电站扩建工程 ()",
      "en": "China - 联合循环电站扩建工程 ()",
      "ru": "Китай - 联合循环电站扩建工程 ()",
      "es": "China - 联合循环电站扩建工程 ()",
      "ja": "中国 - 联合循环电站扩建工程 ()"
    },
    "equipmentSummary": "35kV 模块化预制舱与耐高温变电单元",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/precast_cabin_ehouse.webp",
    "highlight": true
  },
  {
    "id": "project-112",
    "seq": 112,
    "country": {
      "zh": "越南 (Vietnam)",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "energy",
    "title": {
      "zh": "Vanphong EP 电厂与清风 29.7MW 风电 ()",
      "en": "China - Vanphong EP 电厂与清风 29.7MW 风电 ()",
      "ru": "Китай - Vanphong EP 电厂与清风 29.7MW 风电 ()",
      "es": "China - Vanphong EP 电厂与清风 29.7MW 风电 ()",
      "ja": "中国 - Vanphong EP 电厂与清风 29.7MW 风电 ()"
    },
    "equipmentSummary": "耐腐蚀中压开关设备与风电组合箱变",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/project_wind_power.webp",
    "highlight": true
  },
  {
    "id": "project-113",
    "seq": 113,
    "country": {
      "zh": "印尼 (Indonesia)",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "mining",
    "title": {
      "zh": "MVNEX-24kV 矿业项目 ()",
      "en": "China - MVNEX-24kV 矿业项目 ()",
      "ru": "Китай - MVNEX-24kV 矿业项目 ()",
      "es": "China - MVNEX-24kV 矿业项目 ()",
      "ja": "中国 - MVNEX-24kV 矿业项目 ()"
    },
    "equipmentSummary": "施耐德授权 MVnex 24kV 紧凑型开关柜",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/project_kazakhstan_coke.webp",
    "highlight": true
  },
  {
    "id": "project-114",
    "seq": 114,
    "country": {
      "zh": "塞拉利昂 (Sierra Leone)",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "mining",
    "title": {
      "zh": "金红石矿山区光储柴一体化项目 ()",
      "en": "China - 金红石矿山区光储柴一体化项目 ()",
      "ru": "Китай - 金红石矿山区光储柴一体化项目 ()",
      "es": "China - 金红石矿山区光储柴一体化项目 ()",
      "ja": "中国 - 金红石矿山区光储柴一体化项目 ()"
    },
    "equipmentSummary": "储能系统舱、光伏变流升压一体机及柴发配电",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/box_substation_solar.webp",
    "highlight": true
  },
  {
    "id": "project-115",
    "seq": 115,
    "country": {
      "zh": "墨西哥 (Mexico)",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "energy",
    "title": {
      "zh": "佩尼亚斯港 (Puerto Peñasco) 光伏电站 ()",
      "en": "China - 佩尼亚斯港 (Puerto Peñasco) 光伏电站 ()",
      "ru": "Китай - 佩尼亚斯港 (Puerto Peñasco) 光伏电站 ()",
      "es": "China - 佩尼亚斯港 (Puerto Peñasco) 光伏电站 ()",
      "ja": "中国 - 佩尼亚斯港 (Puerto Peñasco) 光伏电站 ()"
    },
    "equipmentSummary": "34.5kV 升压变电站与集电线路成套",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/box_substation_solar.webp",
    "highlight": true
  },
  {
    "id": "project-116",
    "seq": 116,
    "country": {
      "zh": "吉尔吉斯斯坦 (Kyrgyzstan)",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "mining",
    "title": {
      "zh": "高寒矿区变电所工程 ()",
      "en": "China - 高寒矿区变电所工程 ()",
      "ru": "Китай - 高寒矿区变电所工程 ()",
      "es": "China - 高寒矿区变电所工程 ()",
      "ja": "中国 - 高寒矿区变电所工程 ()"
    },
    "equipmentSummary": "35kV 预装式变电站与智能配电柜",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/precast_cabin_ehouse.webp",
    "highlight": true
  },
  {
    "id": "project-117",
    "seq": 117,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "吉西基地鲁固直流 140 万千瓦外送工程 (国家特高压外送示范基地)",
      "en": "China - 吉西基地鲁固直流 140 万千瓦外送工程 (国家特高压外送示范基地)",
      "ru": "Китай - 吉西基地鲁固直流 140 万千瓦外送工程 (国家特高压外送示范基地)",
      "es": "China - 吉西基地鲁固直流 140 万千瓦外送工程 (国家特高压外送示范基地)",
      "ja": "中国 - 吉西基地鲁固直流 140 万千瓦外送工程 (国家特高压外送示范基地)"
    },
    "equipmentSummary": "35kV 风光汇集预制舱与升压变台",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/precast_cabin_ehouse.webp",
    "highlight": true
  },
  {
    "id": "project-118",
    "seq": 118,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "库布齐沙漠 100 万千瓦光伏治沙基地 (沙漠生态治理新能源工程)",
      "en": "China - 库布齐沙漠 100 万千瓦光伏治沙基地 (沙漠生态治理新能源工程)",
      "ru": "Китай - 库布齐沙漠 100 万千瓦光伏治沙基地 (沙漠生态治理新能源工程)",
      "es": "China - 库布齐沙漠 100 万千瓦光伏治沙基地 (沙漠生态治理新能源工程)",
      "ja": "中国 - 库布齐沙漠 100 万千瓦光伏治沙基地 (沙漠生态治理新能源工程)"
    },
    "equipmentSummary": "35kV 箱式变电站与集电线路成套",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/box_substation_solar.webp",
    "highlight": true
  },
  {
    "id": "project-119",
    "seq": 119,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "中电肥城 300MW 压缩空气储能 (CAES) 项目 (国家级盐穴长时储能示范)",
      "en": "China - 中电肥城 300MW 压缩空气储能 (CAES) 项目 (国家级盐穴长时储能示范)",
      "ru": "Китай - 中电肥城 300MW 压缩空气储能 (CAES) 项目 (国家级盐穴长时储能示范)",
      "es": "China - 中电肥城 300MW 压缩空气储能 (CAES) 项目 (国家级盐穴长时储能示范)",
      "ja": "中国 - 中电肥城 300MW 压缩空气储能 (CAES) 项目 (国家级盐穴长时储能示范)"
    },
    "equipmentSummary": "高压配电装置、大功率电动机启动柜",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/unisafe_switchgear.webp",
    "highlight": true
  },
  {
    "id": "project-120",
    "seq": 120,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "新疆天山北麓 610 万千瓦新能源基地 (特大型多能互补绿色能源枢纽)",
      "en": "China - 新疆天山北麓 610 万千瓦新能源基地 (特大型多能互补绿色能源枢纽)",
      "ru": "Китай - 新疆天山北麓 610 万千瓦新能源基地 (特大型多能互补绿色能源枢纽)",
      "es": "China - 新疆天山北麓 610 万千瓦新能源基地 (特大型多能互补绿色能源枢纽)",
      "ja": "中国 - 新疆天山北麓 610 万千瓦新能源基地 (特大型多能互补绿色能源枢纽)"
    },
    "equipmentSummary": "变流升压一体机及智能箱变预制舱群",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/precast_cabin_ehouse.webp",
    "highlight": true
  },
  {
    "id": "project-121",
    "seq": 121,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "灵寿县风光储氢一体化基地项目 (绿电制氢与多能协同示范)",
      "en": "China - 灵寿县风光储氢一体化基地项目 (绿电制氢与多能协同示范)",
      "ru": "Китай - 灵寿县风光储氢一体化基地项目 (绿电制氢与多能协同示范)",
      "es": "China - 灵寿县风光储氢一体化基地项目 (绿电制氢与多能协同示范)",
      "ja": "中国 - 灵寿县风光储氢一体化基地项目 (绿电制氢与多能协同示范)"
    },
    "equipmentSummary": "制氢整流变压器与一体化变配电舱",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/unisafe_switchgear.webp",
    "highlight": true
  },
  {
    "id": "project-122",
    "seq": 122,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "天津静海王口镇 100MW 风电项目 (平原分散式风电标杆)",
      "en": "China - 天津静海王口镇 100MW 风电项目 (平原分散式风电标杆)",
      "ru": "Китай - 天津静海王口镇 100MW 风电项目 (平原分散式风电标杆)",
      "es": "China - 天津静海王口镇 100MW 风电项目 (平原分散式风电标杆)",
      "ja": "中国 - 天津静海王口镇 100MW 风电项目 (平原分散式风电标杆)"
    },
    "equipmentSummary": "ZGS 系列 35kV 升压组合式变电站",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/project_wind_power.webp",
    "highlight": true
  },
  {
    "id": "project-123",
    "seq": 123,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "内蒙古白音华 300MW 光伏项目 (大型露天排土场新能源)",
      "en": "China - 内蒙古白音华 300MW 光伏项目 (大型露天排土场新能源)",
      "ru": "Китай - 内蒙古白音华 300MW 光伏项目 (大型露天排土场新能源)",
      "es": "China - 内蒙古白音华 300MW 光伏项目 (大型露天排土场新能源)",
      "ja": "中国 - 内蒙古白音华 300MW 光伏项目 (大型露天排土场新能源)"
    },
    "equipmentSummary": "耐严寒光伏预制舱与干式变压器",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/box_substation_solar.webp",
    "highlight": true
  },
  {
    "id": "project-124",
    "seq": 124,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "奥迪一汽新能源汽车 (PPE平台) 分布式光伏 (现代化豪华电动车制造基地)",
      "en": "China - 奥迪一汽新能源汽车 (PPE平台) 分布式光伏 (现代化豪华电动车制造基地)",
      "ru": "Китай - 奥迪一汽新能源汽车 (PPE平台) 分布式光伏 (现代化豪华电动车制造基地)",
      "es": "China - 奥迪一汽新能源汽车 (PPE平台) 分布式光伏 (现代化豪华电动车制造基地)",
      "ja": "中国 - 奥迪一汽新能源汽车 (PPE平台) 分布式光伏 (现代化豪华电动车制造基地)"
    },
    "equipmentSummary": "1500V 集中升压并网一体机",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/project_audifaw_solar.webp",
    "highlight": true
  },
  {
    "id": "project-125",
    "seq": 125,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "中国联通呼和浩特云数据基地 (国家东数西算绿色算力枢纽)",
      "en": "China - 中国联通呼和浩特云数据基地 (国家东数西算绿色算力枢纽)",
      "ru": "Китай - 中国联通呼和浩特云数据基地 (国家东数西算绿色算力枢纽)",
      "es": "China - 中国联通呼和浩特云数据基地 (国家东数西算绿色算力枢纽)",
      "ja": "中国 - 中国联通呼和浩特云数据基地 (国家东数西算绿色算力枢纽)"
    },
    "equipmentSummary": "高可靠低压配电屏与母线槽系统",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": true
  },
  {
    "id": "project-126",
    "seq": 126,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "辽宁电信云计算数据中心 (省级核心数据处理枢纽)",
      "en": "China - 辽宁电信云计算数据中心 (省级核心数据处理枢纽)",
      "ru": "Китай - 辽宁电信云计算数据中心 (省级核心数据处理枢纽)",
      "es": "China - 辽宁电信云计算数据中心 (省级核心数据处理枢纽)",
      "ja": "中国 - 辽宁电信云计算数据中心 (省级核心数据处理枢纽)"
    },
    "equipmentSummary": "精密列头柜与高低压成套配电",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": true
  },
  {
    "id": "project-127",
    "seq": 127,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "芯源微 (Kingsemi) 临港半导体研发基地 (集成电路高端装备研发制造)",
      "en": "China - 芯源微 (Kingsemi) 临港半导体研发基地 (集成电路高端装备研发制造)",
      "ru": "Китай - 芯源微 (Kingsemi) 临港半导体研发基地 (集成电路高端装备研发制造)",
      "es": "China - 芯源微 (Kingsemi) 临港半导体研发基地 (集成电路高端装备研发制造)",
      "ja": "中国 - 芯源微 (Kingsemi) 临港半导体研发基地 (集成电路高端装备研发制造)"
    },
    "equipmentSummary": "高洁净度低谐波供配电成套设备",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/unisafe_switchgear.webp",
    "highlight": true
  },
  {
    "id": "project-128",
    "seq": 128,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "中国航天科工集团第三研究院 (国家重大航天科研试验区)",
      "en": "China - 中国航天科工集团第三研究院 (国家重大航天科研试验区)",
      "ru": "Китай - 中国航天科工集团第三研究院 (国家重大航天科研试验区)",
      "es": "China - 中国航天科工集团第三研究院 (国家重大航天科研试验区)",
      "ja": "中国 - 中国航天科工集团第三研究院 (国家重大航天科研试验区)"
    },
    "equipmentSummary": "高稳定性干式变压器与双电源自动切换配电柜",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/unisafe_switchgear.webp",
    "highlight": true
  },
  {
    "id": "project-129",
    "seq": 129,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "北京大学 / 北京师范大学 / 清华大学一附院 (顶尖高校与高标准医疗中心)",
      "en": "China - 北京大学 / 北京师范大学 / 清华大学一附院 (顶尖高校与高标准医疗中心)",
      "ru": "Китай - 北京大学 / 北京师范大学 / 清华大学一附院 (顶尖高校与高标准医疗中心)",
      "es": "China - 北京大学 / 北京师范大学 / 清华大学一附院 (顶尖高校与高标准医疗中心)",
      "ja": "中国 - 北京大学 / 北京师范大学 / 清华大学一附院 (顶尖高校与高标准医疗中心)"
    },
    "equipmentSummary": "SCB 系列低噪音环氧干变与医疗安全配电箱",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": true
  },
  {
    "id": "project-130",
    "seq": 130,
    "country": {
      "zh": "中国",
      "en": "China",
      "ru": "Китай",
      "es": "China",
      "ja": "中国"
    },
    "countryCode": "CN",
    "flag": "🇨🇳",
    "region": "other",
    "sector": "infra",
    "title": {
      "zh": "盛京医院 / 辽宁省肿瘤医院变配电改造 (大型三甲医疗机构)",
      "en": "China - 盛京医院 / 辽宁省肿瘤医院变配电改造 (大型三甲医疗机构)",
      "ru": "Китай - 盛京医院 / 辽宁省肿瘤医院变配电改造 (大型三甲医疗机构)",
      "es": "China - 盛京医院 / 辽宁省肿瘤医院变配电改造 (大型三甲医疗机构)",
      "ja": "中国 - 盛京医院 / 辽宁省肿瘤医院变配电改造 (大型三甲医疗机构)"
    },
    "equipmentSummary": "医用不间断双回路配电成套与直流屏",
    "quantity": 1,
    "client": "国家重点工业与基建工程",
    "image": "/images/curated/unisafe_switchgear.webp",
    "highlight": true
  }
];
