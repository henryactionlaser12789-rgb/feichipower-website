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
      "en": "Philippines 菲律宾TVI二期（3#机组）扩建工程全厂小三箱设备采购",
      "ru": "Филиппины - 菲律宾TVI二期（3#机组）扩建工程全厂小三箱设备采购"
    },
    "equipmentSummary": "配电箱FCMCCBF：FCMCCBF",
    "quantity": 258,
    "client": "中国能源建设集团东北电力第一工程有限公司",
    "image": "/images/syfcdq/project_shenyang_hunnan_tech_city.webp",
    "highlight": false
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
    "countryCode": "MO",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "renewable",
    "title": {
      "zh": "哈尔霍鲁姆太阳能”11035千伏2×31.5兆伏安的发电站",
      "en": "Mongolia 哈尔霍鲁姆太阳能”11035千伏2×31.5兆伏安的发电站",
      "ru": "Монголия - 哈尔霍鲁姆太阳能”11035千伏2×31.5兆伏安的发电站"
    },
    "equipmentSummary": "铠装移开式交流金属开关设备：KYN61-40.5",
    "quantity": 16,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/syfcdq/project_liaoyang_fishery_solar.webp",
    "highlight": false
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
    "countryCode": "GU",
    "flag": "🇬🇳",
    "region": "mea",
    "sector": "mining",
    "title": {
      "zh": "几内亚铝业开发项目（二期）氧化铝项目",
      "en": "Guinea 几内亚铝业开发项目（二期）氧化铝项目",
      "ru": "Гвинея - 几内亚铝业开发项目（二期）氧化铝项目"
    },
    "equipmentSummary": "配电箱FCMCCBF：FCMCCBF; 预制舱YC：YCⅠ",
    "quantity": 3,
    "client": "北京合锐赛尔电力科技股份有限公司山东分公司",
    "image": "/images/library/03_工程项目案例/02_预制舱EHouse工程业绩/P25_01_几内亚力拓西芒杜港口EHouse项目_预制舱现场_1_618x300.webp",
    "highlight": false
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
      "en": "Philippines 中国能建东北第一公司菲律宾屋顶光伏项目",
      "ru": "Филиппины - 中国能建东北第一公司菲律宾屋顶光伏项目"
    },
    "equipmentSummary": "欧式变电站：YBM20 -2700/11/0.48; SF油浸式变压器：SF11-2700/11/0.48; 环网柜：FC-SRM-12 两进一出、XGN口-40.5/1250-31.5、FC-SRM-12 一进三出+PT; 预制舱YC：YCⅠ; SFZ油浸式变压器：SFZ-1250034.5/11; SCB11干式变压器：SCB11-100-11/0.4、SCB11-100-11-0.23; S11油浸式变压器：S11-2700-11/0.48",
    "quantity": 25,
    "client": "中国能源建设集团东北电力第一工程有限公司",
    "image": "/images/syfcdq/project_liaoyang_fishery_solar.webp",
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
      "en": "Nicaragua 尼加拉瓜马萨亚及埃尔哈托光伏发电站项目增补",
      "ru": "Никарагуа - 尼加拉瓜马萨亚及埃尔哈托光伏发电站项目增补"
    },
    "equipmentSummary": "交流低压配电柜：GGD",
    "quantity": 4,
    "client": "山东金人电气有限公司、山东电工电气集团智能电气有限公司",
    "image": "/images/syfcdq/project_liaoyang_fishery_solar.webp",
    "highlight": false
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
      "en": "Peru 秘鲁 150 吨/天 LNG 项目",
      "ru": "Перу - 秘鲁 150 吨/天 LNG 项目"
    },
    "equipmentSummary": "预制舱YC：YCⅠ",
    "quantity": 5,
    "client": "北京安珂罗工程技术有限公司",
    "image": "/images/library/03_工程项目案例/02_预制舱EHouse工程业绩/P25_02_库布齐沙漠100万千瓦光伏基地_预制舱现场_2_602x451.webp",
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
    "countryCode": "NI",
    "flag": "🇳🇬",
    "region": "mea",
    "sector": "energy",
    "title": {
      "zh": "尼日利亚格林维尔液化天然气变频器二拖三启动项目",
      "en": "Nigeria 尼日利亚格林维尔液化天然气变频器二拖三启动项目",
      "ru": "Нигерия - 尼日利亚格林维尔液化天然气变频器二拖三启动项目"
    },
    "equipmentSummary": "铠装移开式交流金属封闭开关设备：UniSafe-12",
    "quantity": 11,
    "client": "大连中巨控制系统有限公司",
    "image": "/images/library/03_工程项目案例/01_开关柜工程业绩/P21_04_防城港钢铁基地项目_现场实景_4_400x300.webp",
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
      "en": "Philippines 菲律宾Marveles临时用电",
      "ru": "Филиппины - 菲律宾Marveles临时用电"
    },
    "equipmentSummary": "动力箱：XL21; SCB10干式变压器：SCB10-500-0.46/0.38、SCB10-1250-13.2/0.46、SCB10-1000-0.46/0.38; 开闭站：XGW□; 铠装移开式交流金属开关设备KYN28：KYN28A-12; 低压抽出式开关柜：MNS; 预制舱YC：YCⅠ; 低压母线桥：FC-CCKX-2000A-密集型-IP42",
    "quantity": 60,
    "client": "辽宁金通金属材料发展有限公司、深圳市群佳威科技有限公司",
    "image": "/images/library/03_工程项目案例/02_预制舱EHouse工程业绩/P25_02_库布齐沙漠100万千瓦光伏基地_预制舱现场_2_602x451.webp",
    "highlight": false
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
      "en": "Nicaragua 尼加拉瓜埃尔哈托光伏发电站项目:24.9kV箱式变压器",
      "ru": "Никарагуа - 尼加拉瓜埃尔哈托光伏发电站项目:24.9kV箱式变压器"
    },
    "equipmentSummary": "风电光伏箱变ZGS18：ZGS18-3300/24.9/0.8; S18油浸式变压器：S18-3300KVA/24.9/0.8",
    "quantity": 123,
    "client": "山东金人电气有限公司、山东电工电气集团智能电气有限公司",
    "image": "/images/syfcdq/project_liaoyang_fishery_solar.webp",
    "highlight": true
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
    "countryCode": "IR",
    "flag": "🇮🇶",
    "region": "mea",
    "sector": "utility",
    "title": {
      "zh": "伊拉克预制舱项目",
      "en": "Iraq 伊拉克预制舱项目",
      "ru": "Ирак - 伊拉克预制舱项目"
    },
    "equipmentSummary": "S-M油浸式变压器：S-M-2000-11/0.42; 预制舱YC：YCⅠ; 铠装移开式交流金属开关设备KYN28：KYN28A-12; 交流低压配电柜：GGD; 直流屏GZDW：GZDW-DC110V/38AH; 低压母线桥：FC-CCKX-4000A-空气型-IP42",
    "quantity": 18,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/library/03_工程项目案例/02_预制舱EHouse工程业绩/P25_02_库布齐沙漠100万千瓦光伏基地_预制舱现场_2_602x451.webp",
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
    "countryCode": "IN",
    "flag": "🇮🇩",
    "region": "sea",
    "sector": "utility",
    "title": {
      "zh": "印尼MVNEX-24KV项目",
      "en": "Indonesia 印尼MVNEX-24KV项目",
      "ru": "Индонезия - 印尼MVNEX-24KV项目"
    },
    "equipmentSummary": "高压开关柜：Mvnex",
    "quantity": 6,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/library/03_工程项目案例/01_开关柜工程业绩/P21_04_防城港钢铁基地项目_现场实景_4_400x300.webp",
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
    "countryCode": "KY",
    "flag": "🇰🇬",
    "region": "cis",
    "sector": "mining",
    "title": {
      "zh": "中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "en": "Kyrgyzstan 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "ru": "Кыргызстан - 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目"
    },
    "equipmentSummary": "配电箱FCMCCBF：FCMCCBF; 动力箱：XL21; 低压抽出式开关柜：MNS; 预制舱YC：YCⅠ; 铠装移开式交流金属开关设备KYN28：KYN28A-12; 交流低压配电柜：GGD",
    "quantity": 24,
    "client": "新疆联达国际贸易有限责任公司",
    "image": "/images/library/03_工程项目案例/03_变压器工程业绩/P27_05_宽城华盛矿业电力项目_变压器实景_5_350x262.webp",
    "highlight": true
  },
  {
    "id": "overseas-13",
    "seq": 13,
    "country": {
      "zh": "朝鲜",
      "en": "DPRK",
      "ru": "КНДР",
      "es": "Corea del Norte",
      "ja": "北朝鮮"
    },
    "countryCode": "DP",
    "flag": "🇰🇵",
    "region": "sea",
    "sector": "infra",
    "title": {
      "zh": "朝鲜充电桩配电箱项目",
      "en": "DPRK 朝鲜充电桩配电箱项目",
      "ru": "КНДР - 朝鲜充电桩配电箱项目"
    },
    "equipmentSummary": "动力箱：XL21",
    "quantity": 2,
    "client": "沈阳品川信息技术有限公司",
    "image": "/images/syfcdq/project_shenyang_hunnan_tech_city.webp",
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
    "countryCode": "MO",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "蒙古开闭站项目",
      "en": "Mongolia 蒙古开闭站项目",
      "ru": "Монголия - 蒙古开闭站项目"
    },
    "equipmentSummary": "欧式变电站：YBP20 -2*630KVA; 充气柜：FC-SRM-12",
    "quantity": 2,
    "client": "辽宁思远电气有限公司",
    "image": "/images/syfcdq/project_shenyang_hunnan_tech_city.webp",
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
    "countryCode": "MO",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "mining",
    "title": {
      "zh": "肯特省石英石项目",
      "en": "Mongolia 肯特省石英石项目",
      "ru": "Монголия - 肯特省石英石项目"
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
    "sector": "energy",
    "title": {
      "zh": "菲律宾MASINLOC电厂输煤系统项目",
      "en": "Philippines 菲律宾MASINLOC电厂输煤系统项目",
      "ru": "Филиппины - 菲律宾MASINLOC电厂输煤系统项目"
    },
    "equipmentSummary": "低压母线桥：FC-CCKX-630A-密集型-IP42、FC-CCKX-2500A-密集型-IP40; 铠装移开式交流金属开关设备KYN28：KYN28A-12; 低压抽出式开关柜：MNS; SCB18干式变压器：SCB18-1000-7.2/0.48-0.27、SCB18-400-7.2/0.48-0.27、SCB18-125-0.48/0.38-0.22",
    "quantity": 69,
    "client": "徐州中煤汉泰建筑工业化有限公司",
    "image": "/images/library/03_工程项目案例/01_开关柜工程业绩/P21_04_防城港钢铁基地项目_现场实景_4_400x300.webp",
    "highlight": true
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
    "countryCode": "ME",
    "flag": "🇲🇽",
    "region": "americas",
    "sector": "renewable",
    "title": {
      "zh": "墨西哥佩尼亚斯科光伏箱变",
      "en": "Mexico 墨西哥佩尼亚斯科光伏箱变",
      "ru": "Мексика - 墨西哥佩尼亚斯科光伏箱变"
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
    "countryCode": "MO",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "外蒙端子箱",
      "en": "Mongolia 外蒙端子箱",
      "ru": "Монголия - 外蒙端子箱"
    },
    "equipmentSummary": "配电箱FCMCCBF：FCMCCBF",
    "quantity": 4,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/syfcdq/project_shenyang_hunnan_tech_city.webp",
    "highlight": false
  },
  {
    "id": "overseas-19",
    "seq": 19,
    "country": {
      "zh": "塞拉利昂",
      "en": "Sierra Leone",
      "ru": "Сьерра-Леоне",
      "es": "Sierra Leona",
      "ja": "シエラレオネ"
    },
    "countryCode": "SI",
    "flag": "🇸🇱",
    "region": "mea",
    "sector": "mining",
    "title": {
      "zh": "塞拉利昂金红石矿山区光储柴一体化项目",
      "en": "Sierra Leone 塞拉利昂金红石矿山区光储柴一体化项目",
      "ru": "Сьерра-Леоне - 塞拉利昂金红石矿山区光储柴一体化项目"
    },
    "equipmentSummary": "铠装移开式交流金属开关设备KYN28：KYN28A-12; 接地变及消弧线圈成套装置：DKSC-800/10.5-315/0.4KV; 高压母线桥：FC-CCKX-2000A-空气型-IP42",
    "quantity": 18,
    "client": "中成进出口股份有限公司",
    "image": "/images/library/03_工程项目案例/03_变压器工程业绩/P27_05_宽城华盛矿业电力项目_变压器实景_5_350x262.webp",
    "highlight": true
  },
  {
    "id": "overseas-20",
    "seq": 20,
    "country": {
      "zh": "埃塞俄比亚",
      "en": "Ethiopia",
      "ru": "Эфиопия",
      "es": "Etiopía",
      "ja": "エチオピア"
    },
    "countryCode": "ET",
    "flag": "🇪🇹",
    "region": "mea",
    "sector": "infra",
    "title": {
      "zh": "埃塞俄比亚巴哈达尔机场项目",
      "en": "Ethiopia 埃塞俄比亚巴哈达尔机场项目",
      "ru": "Эфиопия - 埃塞俄比亚巴哈达尔机场项目"
    },
    "equipmentSummary": "配电箱FCMCCBF：FCMCCBF; 动力箱：XL21; Blokset：Blokset",
    "quantity": 117,
    "client": "北京信达共创机械设备有限公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": true
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
    "sector": "renewable",
    "title": {
      "zh": "菲律宾Aboitiz EAUC 30MW30MWh储能项目",
      "en": "Philippines 菲律宾Aboitiz EAUC 30MW30MWh储能项目",
      "ru": "Филиппины - 菲律宾Aboitiz EAUC 30MW30MWh储能项目"
    },
    "equipmentSummary": "预制舱YC：YCⅠ; 低压抽出式开关柜：MNS; 接地变小电阻装置：AL-BNR-13.8KV;",
    "quantity": 15,
    "client": "河北电力装备有限公司",
    "image": "/images/library/03_工程项目案例/02_预制舱EHouse工程业绩/P25_02_库布齐沙漠100万千瓦光伏基地_预制舱现场_2_602x451.webp",
    "highlight": true
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
    "countryCode": "MO",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "(蒙古)开关柜报价",
      "en": "Mongolia (蒙古)开关柜报价",
      "ru": "Монголия - (蒙古)开关柜报价"
    },
    "equipmentSummary": "铠装移开式交流金属开关设备KYN28：KYN28A-12; 交流低压配电柜：GGD; 油浸式变压器：S11-1600-10/0.4",
    "quantity": 15,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/library/03_工程项目案例/01_开关柜工程业绩/P21_04_防城港钢铁基地项目_现场实景_4_400x300.webp",
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
    "countryCode": "MO",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "(蒙古)18台高压柜",
      "en": "Mongolia (蒙古)18台高压柜",
      "ru": "Монголия - (蒙古)18台高压柜"
    },
    "equipmentSummary": "铠装移开式交流金属开关设备KYN28：KYN28A-12; 高压母线桥：FC-CCKX-1600A-空气型-IP40",
    "quantity": 19,
    "client": "辽宁思远电气有限公司",
    "image": "/images/library/03_工程项目案例/01_开关柜工程业绩/P21_04_防城港钢铁基地项目_现场实景_4_400x300.webp",
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
    "countryCode": "MO",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "（蒙古）一台户外箱",
      "en": "Mongolia （蒙古）一台户外箱",
      "ru": "Монголия - （蒙古）一台户外箱"
    },
    "equipmentSummary": "电缆分支箱：DF-0.4KV",
    "quantity": 1,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/syfcdq/project_shenyang_hunnan_tech_city.webp",
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
    "countryCode": "MO",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "（蒙古）6台低压柜报价",
      "en": "Mongolia （蒙古）6台低压柜报价",
      "ru": "Монголия - （蒙古）6台低压柜报价"
    },
    "equipmentSummary": "低压抽出式开关柜：GCS",
    "quantity": 6,
    "client": "辽宁思远电气有限公司",
    "image": "/images/library/03_工程项目案例/01_开关柜工程业绩/P21_04_防城港钢铁基地项目_现场实景_4_400x300.webp",
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
      "ja": "サウジアラビア"
    },
    "countryCode": "SA",
    "flag": "🇸🇦",
    "region": "mea",
    "sector": "energy",
    "title": {
      "zh": "沙特PP12联合循环电站扩建项目",
      "en": "Saudi Arabia 沙特PP12联合循环电站扩建项目",
      "ru": "Саудовская Аравия - 沙特PP12联合循环电站扩建项目"
    },
    "equipmentSummary": "低压抽出式开关柜：MNS; 交流低压配电柜：GGD",
    "quantity": 307,
    "client": "河北电力装备有限公司",
    "image": "/images/library/03_工程项目案例/01_开关柜工程业绩/P21_04_防城港钢铁基地项目_现场实景_4_400x300.webp",
    "highlight": true
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
    "countryCode": "MO",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "（蒙古国）端子箱报价",
      "en": "Mongolia （蒙古国）端子箱报价",
      "ru": "Монголия - （蒙古国）端子箱报价"
    },
    "equipmentSummary": "电缆分支箱：DF-0.4KV",
    "quantity": 213,
    "client": "沈阳普沃电力电缆有限公司",
    "image": "/images/syfcdq/project_shenyang_hunnan_tech_city.webp",
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
    "countryCode": "ME",
    "flag": "🇲🇽",
    "region": "americas",
    "sector": "renewable",
    "title": {
      "zh": "（电池）中能建墨西哥光伏箱变项目",
      "en": "Mexico （电池）中能建墨西哥光伏箱变项目",
      "ru": "Мексика - （电池）中能建墨西哥光伏箱变项目"
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
    "countryCode": "GU",
    "flag": "🇬🇳",
    "region": "mea",
    "sector": "infra",
    "title": {
      "zh": "SUB4801-1 几内亚力拓西芒杜港口项目",
      "en": "Guinea SUB4801-1 几内亚力拓西芒杜港口项目",
      "ru": "Гвинея - SUB4801-1 几内亚力拓西芒杜港口项目"
    },
    "equipmentSummary": "箱变：YBM-1000、YBM-1600; 高低压：OKKEN、PIX; SCB14干式变压器：SCB14-1000-10/0.4、SCB14-1600-10/0.4、SCB14-1250-10/0.4、SCB14-2500-10/0.4; 电力监控屏：电力监控屏; 低压母线桥：FC-CCKX-2000A-密集型-IP42、FC-CCKX-3150A-密集型-IP42、FC-CCKX-5000A-密集型-IP42; 预制舱YC：YCⅠ; 配电箱FCMCCBF：FCMCCBF; 直流屏GZDW：GZDW-DC110V/65AH; 交流屏：JLP; 高压母线桥：FC-CCKX-1250A-空气型-IP42",
    "quantity": 308,
    "client": "中国港湾工程有限责任公司、施耐德电气（中国）有限公司",
    "image": "/images/library/03_工程项目案例/02_预制舱EHouse工程业绩/P25_01_几内亚力拓西芒杜港口EHouse项目_预制舱现场_1_618x300.webp",
    "highlight": true
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
    "countryCode": "MO",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "（蒙古）2台100KVA站用变",
      "en": "Mongolia （蒙古）2台100KVA站用变",
      "ru": "Монголия - （蒙古）2台100KVA站用变"
    },
    "equipmentSummary": "SC10：SC10-100-6.3/0.4",
    "quantity": 2,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/syfcdq/project_shenyang_hunnan_tech_city.webp",
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
    "countryCode": "MO",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "（蒙古）端子箱",
      "en": "Mongolia （蒙古）端子箱",
      "ru": "Монголия - （蒙古）端子箱"
    },
    "equipmentSummary": "配电箱FCMCCBF：FCMCCBF",
    "quantity": 13,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/syfcdq/project_shenyang_hunnan_tech_city.webp",
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
    "countryCode": "MO",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "（蒙古）OT项目-MNS2.0",
      "en": "Mongolia （蒙古）OT项目-MNS2.0",
      "ru": "Монголия - （蒙古）OT项目-MNS2.0"
    },
    "equipmentSummary": "低压抽出式开关柜：MNS2.0",
    "quantity": 3,
    "client": "沈阳普沃电力电缆有限公司",
    "image": "/images/library/03_工程项目案例/01_开关柜工程业绩/P21_04_防城港钢铁基地项目_现场实景_4_400x300.webp",
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
    "countryCode": "MO",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "蒙古-OT项目（2台400KVA箱变+1台2x800KVA箱变）",
      "en": "Mongolia 蒙古-OT项目（2台400KVA箱变+1台2x800KVA箱变）",
      "ru": "Монголия - 蒙古-OT项目（2台400KVA箱变+1台2x800KVA箱变）"
    },
    "equipmentSummary": "低压抽出式开关柜：MNS2.0; 充气柜：充气柜safe; 欧式变电站：YBM20 -12/400KVA、YBM20 -12/2*800KVA",
    "quantity": 18,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/library/03_工程项目案例/01_开关柜工程业绩/P21_04_防城港钢铁基地项目_现场实景_4_400x300.webp",
    "highlight": true
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
      "en": "Philippines 菲律宾美萨美斯扩建项目",
      "ru": "Филиппины - 菲律宾美萨美斯扩建项目"
    },
    "equipmentSummary": "欧式变电站：YBM20 -12/1600KVA",
    "quantity": 2,
    "client": "辽宁亚威电气有限公司",
    "image": "/images/syfcdq/project_shenyang_hunnan_tech_city.webp",
    "highlight": false
  },
  {
    "id": "overseas-35",
    "seq": 35,
    "country": {
      "zh": "肯尼亚",
      "en": "Kenya",
      "ru": "Кения",
      "es": "Kenia",
      "ja": "ケニア"
    },
    "countryCode": "KE",
    "flag": "🇰🇪",
    "region": "mea",
    "sector": "utility",
    "title": {
      "zh": "肯尼亚低压柜配电箱",
      "en": "Kenya 肯尼亚低压柜配电箱",
      "ru": "Кения - 肯尼亚低压柜配电箱"
    },
    "equipmentSummary": "配电箱：JXF",
    "quantity": 26,
    "client": "河北电力装备有限公司",
    "image": "/images/syfcdq/project_shenyang_hunnan_tech_city.webp",
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
    "countryCode": "KY",
    "flag": "🇰🇬",
    "region": "cis",
    "sector": "mining",
    "title": {
      "zh": "中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "en": "Kyrgyzstan 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "ru": "Кыргызстан - 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目"
    },
    "equipmentSummary": "动力箱：XL21; 配电箱FCMCCBF：FCMCCBF; SCB14干式变压器：SCB14-500-10/0.4; 欧式变电站：YBM20 -12/500KVA",
    "quantity": 21,
    "client": "山东骏驰电气有限公司",
    "image": "/images/library/03_工程项目案例/03_变压器工程业绩/P27_05_宽城华盛矿业电力项目_变压器实景_5_350x262.webp",
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
    "countryCode": "MO",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "energy",
    "title": {
      "zh": "苏荷巴托110kv变电站项目",
      "en": "Mongolia 苏荷巴托110kv变电站项目",
      "ru": "Монголия - 苏荷巴托110kv变电站项目"
    },
    "equipmentSummary": "高压母线桥：FC-CCKX-1250A-空气型-IP40; 铠装移开式交流金属开关设备KYN28：KYN28A-12",
    "quantity": 11,
    "client": "沈阳飞驰斯玛特电气有限公司",
    "image": "/images/library/03_工程项目案例/01_开关柜工程业绩/P21_04_防城港钢铁基地项目_现场实景_4_400x300.webp",
    "highlight": false
  },
  {
    "id": "overseas-38",
    "seq": 38,
    "country": {
      "zh": "吉布提",
      "en": "Djibouti",
      "ru": "Джибути",
      "es": "Yibuti",
      "ja": "ジブチ"
    },
    "countryCode": "DJ",
    "flag": "🇩🇯",
    "region": "mea",
    "sector": "infra",
    "title": {
      "zh": "吉布提医院项目",
      "en": "Djibouti 吉布提医院项目",
      "ru": "Джибути - 吉布提医院项目"
    },
    "equipmentSummary": "低压抽出式开关柜：MNS2.0",
    "quantity": 6,
    "client": "大连金弘机电设备有限公司",
    "image": "/images/library/03_工程项目案例/01_开关柜工程业绩/P21_04_防城港钢铁基地项目_现场实景_4_400x300.webp",
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
    "countryCode": "IR",
    "flag": "🇮🇶",
    "region": "mea",
    "sector": "utility",
    "title": {
      "zh": "伊拉克出口项目增补",
      "en": "Iraq 伊拉克出口项目增补",
      "ru": "Ирак - 伊拉克出口项目增补"
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
    "countryCode": "IN",
    "flag": "🇮🇩",
    "region": "sea",
    "sector": "mining",
    "title": {
      "zh": "中铝国际印尼曼帕瓦1000kt/a氧化铝项目",
      "en": "Indonesia 中铝国际印尼曼帕瓦1000kt/a氧化铝项目",
      "ru": "Индонезия - 中铝国际印尼曼帕瓦1000kt/a氧化铝项目"
    },
    "equipmentSummary": "动力箱：XL21; 防爆箱：FBX; 配电箱：JXF",
    "quantity": 134,
    "client": "中铝国际工程股份有限公司",
    "image": "/images/syfcdq/project_shenyang_hunnan_tech_city.webp",
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
    "countryCode": "IN",
    "flag": "🇮🇩",
    "region": "sea",
    "sector": "renewable",
    "title": {
      "zh": "印尼恒生新能源材料有限公司红土镍矿冶炼年高冰镍含镍金属1万吨(印尼)项目",
      "en": "Indonesia 印尼恒生新能源材料有限公司红土镍矿冶炼年高冰镍含镍金属1万吨(印尼)项目",
      "ru": "Индонезия - 印尼恒生新能源材料有限公司红土镍矿冶炼年高冰镍含镍金属1万吨(印尼)项目"
    },
    "equipmentSummary": "欧式变电站：YBM20 -12/2500KVA",
    "quantity": 1,
    "client": "辽宁亚威电气有限公司",
    "image": "/images/library/03_工程项目案例/03_变压器工程业绩/P27_05_宽城华盛矿业电力项目_变压器实景_5_350x262.webp",
    "highlight": true
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
      "en": "Philippines 东电一公司菲律宾PCPC分布式光伏 EPC 项目",
      "ru": "Филиппины - 东电一公司菲律宾PCPC分布式光伏 EPC 项目"
    },
    "equipmentSummary": "欧式变电站：YB口 -12/2000KVA、YB口 -12/1000KVA、YB口 -12/1250KVA",
    "quantity": 6,
    "client": "辽宁亚威电气有限公司",
    "image": "/images/syfcdq/project_philippines_pcpc_solar_ehouse.webp",
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
      "en": "Philippines 菲律宾PCPC分布式光伏EPC项目一次设备开关柜、预制舱采购",
      "ru": "Филиппины - 菲律宾PCPC分布式光伏EPC项目一次设备开关柜、预制舱采购"
    },
    "equipmentSummary": "动力箱：XL21; 预制舱YC：YCⅡ、YCⅠ; 铠装移开式交流金属开关设备KYN28：KYN28A-12",
    "quantity": 26,
    "client": "中国能源建设集团东北电力第一工程有限公司",
    "image": "/images/syfcdq/project_philippines_pcpc_solar_ehouse.webp",
    "highlight": false
  },
  {
    "id": "overseas-44",
    "seq": 44,
    "country": {
      "zh": "坦桑尼亚",
      "en": "Tanzania",
      "ru": "Танзания",
      "es": "Tanzania",
      "ja": "タンザニア"
    },
    "countryCode": "TA",
    "flag": "🇹🇿",
    "region": "mea",
    "sector": "utility",
    "title": {
      "zh": "坦桑尼亚配电箱",
      "en": "Tanzania 坦桑尼亚配电箱",
      "ru": "Танзания - 坦桑尼亚配电箱"
    },
    "equipmentSummary": "配电箱：JXF; 动力箱：XL21",
    "quantity": 4,
    "client": "葫芦岛电力设备有限公司",
    "image": "/images/syfcdq/project_shenyang_hunnan_tech_city.webp",
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
    "countryCode": "MO",
    "flag": "🇲🇳",
    "region": "cis",
    "sector": "utility",
    "title": {
      "zh": "蒙古国高压柜",
      "en": "Mongolia 蒙古国高压柜",
      "ru": "Монголия - 蒙古国高压柜"
    },
    "equipmentSummary": "高压母线桥：FC-CCKX-1250A-空气型-IP40; 铠装移开式交流金属开关设备KYN28：KYN28A-12; 铠装移开式交流金属开关设备：KYN61-40.5",
    "quantity": 79,
    "client": "辽宁思远电气有限公司",
    "image": "/images/library/03_工程项目案例/01_开关柜工程业绩/P21_04_防城港钢铁基地项目_现场实景_4_400x300.webp",
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
    "countryCode": "ME",
    "flag": "🇲🇽",
    "region": "americas",
    "sector": "renewable",
    "title": {
      "zh": "中能建墨西哥光伏箱变项目",
      "en": "Mexico 中能建墨西哥光伏箱变项目",
      "ru": "Мексика - 中能建墨西哥光伏箱变项目"
    },
    "equipmentSummary": "S11油浸式变压器：S11-8800/40.5; 充气柜：FC-SRM-12; 逆变一体机：YB-4400/40.5",
    "quantity": 51,
    "client": "山东电工电气集团智能电气有限公司",
    "image": "/images/syfcdq/project_mexico_penasco_solar.webp",
    "highlight": true
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
    "countryCode": "KY",
    "flag": "🇰🇬",
    "region": "cis",
    "sector": "mining",
    "title": {
      "zh": "中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "en": "Kyrgyzstan 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目",
      "ru": "Кыргызстан - 中国黄金集团吉尔吉斯斯坦布丘克金矿采选工程项目"
    },
    "equipmentSummary": "配电箱：JXF; 动力箱：XL21; SCB14干式变压器：SCB14-1250-10/0.4、SCB14-1000-10/0.4、SCB14-500-10/0.4; 低压母线桥：FC-CCKX-2000A-空气型-IP42; 铠装移开式交流金属开关设备KYN28：KYN28A-12; 低压抽出式开关柜：MNS; 欧式变电站：YBM20 -12/500KVA; SCB13干式变压器：SCB13-500-10/0.4; 油浸式变压器：S11-500-10/0.4",
    "quantity": 294,
    "client": "中国黄金集团有限公司",
    "image": "/images/library/03_工程项目案例/03_变压器工程业绩/P27_05_宽城华盛矿业电力项目_变压器实景_5_350x262.webp",
    "highlight": true
  },
  {
    "id": "overseas-48",
    "seq": 48,
    "country": {
      "zh": "孟加拉国",
      "en": "Bangladesh",
      "ru": "Бангладеш",
      "es": "Bangladés",
      "ja": "バングラデシュ"
    },
    "countryCode": "BA",
    "flag": "🇧🇩",
    "region": "sea",
    "sector": "energy",
    "title": {
      "zh": "孟加拉巴瑞萨350MW燃煤电站",
      "en": "Bangladesh 孟加拉巴瑞萨350MW燃煤电站",
      "ru": "Бангладеш - 孟加拉巴瑞萨350MW燃煤电站"
    },
    "equipmentSummary": "SCB10干式变压器：SCB10-400-6.6/0.4",
    "quantity": 1,
    "client": "长春龙源电力设备有限公司",
    "image": "/images/syfcdq/project_yingkou_220kv_substation.webp",
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
    "countryCode": "IR",
    "flag": "🇮🇶",
    "region": "mea",
    "sector": "utility",
    "title": {
      "zh": "伊拉克出口项目",
      "en": "Iraq 伊拉克出口项目",
      "ru": "Ирак - 伊拉克出口项目"
    },
    "equipmentSummary": "交流低压配电柜：GGD",
    "quantity": 4,
    "client": "辽宁康威机电工程有限责任公司",
    "image": "/images/syfcdq/project_sukandaya_lv_switchgear.webp",
    "highlight": false
  }
];
