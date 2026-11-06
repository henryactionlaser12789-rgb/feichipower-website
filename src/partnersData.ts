export interface PartnerItem {
  code: string;
  title: string;
  category: 'grid' | 'giants' | 'industry' | 'infra' | 'tech';
  filename: string;
  width: number;
  height: number;
  aspectRatio: number;
  highlight?: boolean;
}

export const partnerCategoryLabels: Record<'grid' | 'giants' | 'industry' | 'infra' | 'tech' | 'all', Record<string, string>> = {
  all: {
    zh: '全部战略协同伙伴 (81+)',
    en: 'All Strategic Ecosystem (81+)',
    ja: 'すべての戦略パートナー (81+)',
    es: 'Todo el Ecosistema Estratégico (81+)',
    ru: 'Все стратегические партнеры (81+)',
  },
  grid: {
    zh: '国家电网与五大六小能源央企',
    en: 'Power Grids & Generation Utilities',
    ja: '送配電網・大手電力グループ',
    es: 'Redes Eléctricas y Generación',
    ru: 'Электросети и энергетические холдинги',
  },
  giants: {
    zh: '全球电气巨头与高压成套生态',
    en: 'Global Electrical Giants & Switchgear Ecosystem',
    ja: 'グローバル電気大手・高圧機器',
    es: 'Gigantes Eléctricos Globales',
    ru: 'Мировые электротехнические корпорации',
  },
  industry: {
    zh: '重工矿山、冶金钢铁与装备制造',
    en: 'Mining, Heavy Metallurgy & Manufacturing',
    ja: '鉱山・重工業・鉄鋼・素材',
    es: 'Minería, Metalurgia y Fabricación Pesada',
    ru: 'Горнодобыча, металлургия и машиностроение',
  },
  infra: {
    zh: '大型基建、轨道交通与水利工程',
    en: 'Infrastructure, Rail Transit & Hydro EPC',
    ja: '交通インフラ・鉄道・水力EPC',
    es: 'Infraestructura, Metro e Hidráulica',
    ru: 'Инфраструктура, метрополитен и гидроэнергетика',
  },
  tech: {
    zh: '顶尖高校科研院所与高新科技',
    en: 'Top Universities, Research & High-Tech',
    ja: '大学研究機関・ハイテク技術',
    es: 'Universidades e I+D de Alta Tecnología',
    ru: 'Университеты, НИИ и высокие технологии',
  },
};

export const partnersList: PartnerItem[] = [
  // Grid & Utilities
  { code: '01_state_grid', title: '国家电网 STATE GRID', category: 'grid', filename: '01_state_grid.webp', width: 159, height: 67, aspectRatio: 2.37, highlight: true },
  { code: '37_csg', title: '中国南方电网 CSG', category: 'grid', filename: '37_csg.webp', width: 135, height: 63, aspectRatio: 2.14, highlight: true },
  { code: '02_inner_mongolia_power', title: '内蒙古电力', category: 'grid', filename: '02_inner_mongolia_power.webp', width: 94, height: 92, aspectRatio: 1.02 },
  { code: '47_spic', title: '国家电投 SPIC', category: 'grid', filename: '47_spic.webp', width: 85, height: 96, aspectRatio: 0.89, highlight: true },
  { code: '48_huadian', title: '中国华电 CHINA HUADIAN', category: 'grid', filename: '48_huadian.webp', width: 169, height: 53, aspectRatio: 3.19, highlight: true },
  { code: '49_huaneng', title: '中国华能 CHINA HUANENG', category: 'grid', filename: '49_huaneng.webp', width: 166, height: 49, aspectRatio: 3.39, highlight: true },
  { code: '35_chn_energy', title: '国家能源集团 CHN ENERGY', category: 'grid', filename: '35_chn_energy.webp', width: 127, height: 69, aspectRatio: 1.84, highlight: true },
  { code: '73_datang', title: '中国大唐 CHINA DATANG', category: 'grid', filename: '73_datang.webp', width: 165, height: 75, aspectRatio: 2.2 },
  { code: '69_cgn', title: '中广核 CGN', category: 'grid', filename: '69_cgn.webp', width: 175, height: 49, aspectRatio: 3.57, highlight: true },
  { code: '77_cr_power', title: '华润电力 CR POWER', category: 'grid', filename: '77_cr_power.webp', width: 158, height: 58, aspectRatio: 2.72 },
  { code: '78_cnnc', title: '中核集团 CNNC', category: 'grid', filename: '78_cnnc.webp', width: 97, height: 97, aspectRatio: 1.0, highlight: true },

  // Global Electrical Giants & Switchgear Ecosystem
  { code: '27_abb', title: 'ABB', category: 'giants', filename: '27_abb.webp', width: 157, height: 55, aspectRatio: 2.85, highlight: true },
  { code: '71_siemens', title: '西门子 SIEMENS', category: 'giants', filename: '71_siemens.webp', width: 168, height: 50, aspectRatio: 3.36, highlight: true },
  { code: '75_schneider_electric', title: '施耐德电气 Schneider Electric', category: 'giants', filename: '75_schneider_electric.webp', width: 163, height: 60, aspectRatio: 2.72, highlight: true },
  { code: '54_tbea', title: '特变电工 TBEA', category: 'giants', filename: '54_tbea.webp', width: 171, height: 52, aspectRatio: 3.29, highlight: true },
  { code: '74_xd_group', title: '中国西电 XD', category: 'giants', filename: '74_xd_group.webp', width: 147, height: 60, aspectRatio: 2.45, highlight: true },
  { code: '76_sieyuan', title: '思源电气 Sieyuan', category: 'giants', filename: '76_sieyuan.webp', width: 151, height: 62, aspectRatio: 2.44, highlight: true },
  { code: '31_rxpe', title: '荣信汇科 RXPE', category: 'giants', filename: '31_rxpe.webp', width: 162, height: 66, aspectRatio: 2.45 },
  { code: '32_yawei_electric', title: '亚威电气 YAWEI', category: 'giants', filename: '32_yawei_electric.webp', width: 111, height: 86, aspectRatio: 1.29 },
  { code: '67_guange_electric', title: '广野电气 Guang e', category: 'giants', filename: '67_guange_electric.webp', width: 144, height: 80, aspectRatio: 1.8 },
  { code: '68_sdee', title: '山东电工 SDEE', category: 'giants', filename: '68_sdee.webp', width: 137, height: 65, aspectRatio: 2.11 },
  { code: '45_ccteg_electric', title: '中煤电气 CCTEG', category: 'giants', filename: '45_ccteg_electric.webp', width: 104, height: 95, aspectRatio: 1.09, highlight: true },
  { code: '72_vycon', title: '微控 VYCON 磁悬浮飞轮', category: 'giants', filename: '72_vycon.webp', width: 173, height: 53, aspectRatio: 3.26 },
  { code: '81_eve_energy', title: '亿纬锂能 EVE', category: 'giants', filename: '81_eve_energy.webp', width: 170, height: 40, aspectRatio: 4.25, highlight: true },

  // Mining, Heavy Metallurgy & Manufacturing
  { code: '11_chalco', title: '中国铝业 CHALCO', category: 'industry', filename: '11_chalco.webp', width: 147, height: 65, aspectRatio: 2.26, highlight: true },
  { code: '12_cnmc', title: '中国有色集团 CNMC', category: 'industry', filename: '12_cnmc.webp', width: 158, height: 58, aspectRatio: 2.72 },
  { code: '13_china_gold', title: '中国黄金 CHINA GOLD', category: 'industry', filename: '13_china_gold.webp', width: 151, height: 52, aspectRatio: 2.9 },
  { code: '29_ansteel', title: '鞍钢集团 ANSTEEL', category: 'industry', filename: '29_ansteel.webp', width: 119, height: 89, aspectRatio: 1.34, highlight: true },
  { code: '50_jianlong_group', title: '建龙集团 JIANLONG GROUP', category: 'industry', filename: '50_jianlong_group.webp', width: 149, height: 65, aspectRatio: 2.29 },
  { code: '51_shougang_group', title: '首钢集团 SHOUGANG GROUP', category: 'industry', filename: '51_shougang_group.webp', width: 158, height: 53, aspectRatio: 2.98, highlight: true },
  { code: '53_liugang', title: '柳州钢铁 LIUGANG', category: 'industry', filename: '53_liugang.webp', width: 88, height: 95, aspectRatio: 0.93 },
  { code: '65_benxi_steel', title: '本溪钢铁 BENXI STEEL', category: 'industry', filename: '65_benxi_steel.webp', width: 161, height: 79, aspectRatio: 2.04 },
  { code: '64_daheishan_moly', title: '大黑山钼业', category: 'industry', filename: '64_daheishan_moly.webp', width: 169, height: 52, aspectRatio: 3.25 },
  { code: '70_xinhua_moly', title: '新华钼业 XINHUA MOLY', category: 'industry', filename: '70_xinhua_moly.webp', width: 163, height: 61, aspectRatio: 2.67 },
  { code: '66_liaoning_dongmei', title: '辽宁东煤', category: 'industry', filename: '66_liaoning_dongmei.webp', width: 166, height: 60, aspectRatio: 2.77 },
  { code: '24_nhi', title: '北方重工 NHI', category: 'industry', filename: '24_nhi.webp', width: 140, height: 63, aspectRatio: 2.22, highlight: true },
  { code: '63_shengu_group', title: '沈阳鼓风机集团 SHENGU', category: 'industry', filename: '63_shengu_group.webp', width: 172, height: 67, aspectRatio: 2.57, highlight: true },
  { code: '07_bmw', title: '宝马 BMW', category: 'industry', filename: '07_bmw.webp', width: 85, height: 86, aspectRatio: 0.99, highlight: true },
  { code: '55_gree', title: '格力电器 GREE', category: 'industry', filename: '55_gree.webp', width: 156, height: 49, aspectRatio: 3.18, highlight: true },
  { code: '56_yutong', title: '宇通集团 YUTONG', category: 'industry', filename: '56_yutong.webp', width: 99, height: 81, aspectRatio: 1.22, highlight: true },
  { code: '57_michelin', title: '米其林 MICHELIN', category: 'industry', filename: '57_michelin.webp', width: 163, height: 60, aspectRatio: 2.72, highlight: true },
  { code: '41_longmarch_tyre', title: '浪马轮胎 LONGMARCH', category: 'industry', filename: '41_longmarch_tyre.webp', width: 111, height: 75, aspectRatio: 1.48 },
  { code: '28_gold_phoenix', title: '金麒麟 GOLD PHOENIX', category: 'industry', filename: '28_gold_phoenix.webp', width: 89, height: 95, aspectRatio: 0.94 },
  { code: '09_cnpc', title: '中国石油 CNPC', category: 'industry', filename: '09_cnpc.webp', width: 104, height: 90, aspectRatio: 1.16, highlight: true },
  { code: '10_sinopec', title: '中国石化 SINOPEC', category: 'industry', filename: '10_sinopec.webp', width: 78, height: 95, aspectRatio: 0.82, highlight: true },
  { code: '30_meihua_group', title: '梅花集团 MEIHUA GROUP', category: 'industry', filename: '30_meihua_group.webp', width: 94, height: 94, aspectRatio: 1.0 },
  { code: '52_conch_profile', title: '海螺型材 CONCH', category: 'industry', filename: '52_conch_profile.webp', width: 104, height: 60, aspectRatio: 1.73 },
  { code: '25_fangda_group', title: '方大集团 FANGDA GROUP', category: 'industry', filename: '25_fangda_group.webp', width: 112, height: 86, aspectRatio: 1.3 },
  { code: '23_changan_auto', title: '长安工业装备', category: 'industry', filename: '23_changan_auto.webp', width: 88, height: 69, aspectRatio: 1.28 },

  // Infrastructure, Rail Transit & Hydro EPC
  { code: '04_crec', title: '中国中铁 CREC', category: 'infra', filename: '04_crec.webp', width: 95, height: 97, aspectRatio: 0.98, highlight: true },
  { code: '46_powerchina', title: '中国电建 POWERCHINA', category: 'infra', filename: '46_powerchina.webp', width: 115, height: 94, aspectRatio: 1.22, highlight: true },
  { code: '42_ceec', title: '中国能建 ENERGY CHINA', category: 'infra', filename: '42_ceec.webp', width: 126, height: 85, aspectRatio: 1.48, highlight: true },
  { code: '26_cggc', title: '中国葛洲坝集团 CGGC', category: 'infra', filename: '26_cggc.webp', width: 128, height: 86, aspectRatio: 1.49, highlight: true },
  { code: '80_chec', title: '中国港湾 CHEC', category: 'infra', filename: '80_chec.webp', width: 167, height: 60, aspectRatio: 2.78, highlight: true },
  { code: '03_shenyang_metro', title: '沈阳地铁 SHENYANG METRO', category: 'infra', filename: '03_shenyang_metro.webp', width: 108, height: 92, aspectRatio: 1.17 },
  { code: '05_beijing_subway', title: '北京地铁 BEIJING SUBWAY', category: 'infra', filename: '05_beijing_subway.webp', width: 164, height: 61, aspectRatio: 2.69 },
  { code: '33_wwhg', title: '万家寨水控 WWHG', category: 'infra', filename: '33_wwhg.webp', width: 112, height: 88, aspectRatio: 1.27 },
  { code: '22_dpcc', title: '大连港 DPCC', category: 'infra', filename: '22_dpcc.webp', width: 88, height: 90, aspectRatio: 0.98 },
  { code: '18_poly_developments', title: '保利地产 POLY', category: 'infra', filename: '18_poly_developments.webp', width: 167, height: 57, aspectRatio: 2.93 },
  { code: '19_china_overseas', title: '中海地产 COLI', category: 'infra', filename: '19_china_overseas.webp', width: 160, height: 49, aspectRatio: 3.27 },
  { code: '20_longfor', title: '龙湖集团 LONGFOR', category: 'infra', filename: '20_longfor.webp', width: 123, height: 57, aspectRatio: 2.16 },
  { code: '59_vanke', title: '万科 vanke', category: 'infra', filename: '59_vanke.webp', width: 147, height: 45, aspectRatio: 3.27 },
  { code: '58_huaqiang_group', title: '华强集团 HUAQIANG GROUP', category: 'infra', filename: '58_huaqiang_group.webp', width: 142, height: 55, aspectRatio: 2.58 },

  // Top Universities, Research & High-Tech
  { code: '60_tsinghua_univ', title: '清华大学 Tsinghua Univ', category: 'tech', filename: '60_tsinghua_univ.webp', width: 160, height: 60, aspectRatio: 2.67, highlight: true },
  { code: '21_peking_university', title: '北京大学 Peking Univ', category: 'tech', filename: '21_peking_university.webp', width: 95, height: 93, aspectRatio: 1.02, highlight: true },
  { code: '40_northeastern_univ', title: '东北大学 Northeastern Univ', category: 'tech', filename: '40_northeastern_univ.webp', width: 93, height: 91, aspectRatio: 1.02, highlight: true },
  { code: '34_shenyang_ligong_univ', title: '沈阳理工大学', category: 'tech', filename: '34_shenyang_ligong_univ.webp', width: 93, height: 92, aspectRatio: 1.01 },
  { code: '79_cmu', title: '中国医科大学 CMU', category: 'tech', filename: '79_cmu.webp', width: 139, height: 92, aspectRatio: 1.51 },
  { code: '61_dalian_medical_univ', title: '大连医科大学', category: 'tech', filename: '61_dalian_medical_univ.webp', width: 163, height: 47, aspectRatio: 3.47 },
  { code: '06_huawei', title: '华为 HUAWEI', category: 'tech', filename: '06_huawei.webp', width: 104, height: 86, aspectRatio: 1.21, highlight: true },
  { code: '44_casic', title: '中国航天科工 CASIC', category: 'tech', filename: '44_casic.webp', width: 147, height: 62, aspectRatio: 2.37, highlight: true },
  { code: '43_grinm', title: '中国有研 GRINM', category: 'tech', filename: '43_grinm.webp', width: 131, height: 84, aspectRatio: 1.56 },
  { code: '62_kingsemi', title: '芯源微 KINGSEMI 半导体', category: 'tech', filename: '62_kingsemi.webp', width: 169, height: 35, aspectRatio: 4.83, highlight: true },
  { code: '14_china_mobile', title: '中国移动 China Mobile', category: 'tech', filename: '14_china_mobile.webp', width: 148, height: 50, aspectRatio: 2.96, highlight: true },
  { code: '15_china_unicom', title: '中国联通 China Unicom', category: 'tech', filename: '15_china_unicom.webp', width: 122, height: 68, aspectRatio: 1.79 },
  { code: '16_china_telecom', title: '中国电信 CHINA TELECOM', category: 'tech', filename: '16_china_telecom.webp', width: 157, height: 56, aspectRatio: 2.8 },
  { code: '38_standard_group', title: '斯坦德集团 STD', category: 'tech', filename: '38_standard_group.webp', width: 101, height: 84, aspectRatio: 1.2 },
  { code: '17_kuihua_pharma', title: '葵花药业', category: 'tech', filename: '17_kuihua_pharma.webp', width: 145, height: 55, aspectRatio: 2.64 },
  { code: '36_joycome', title: '家佳康 JOYCOME', category: 'tech', filename: '36_joycome.webp', width: 112, height: 64, aspectRatio: 1.75 },
  { code: '39_taikang_life', title: '泰康人寿 TAIKANG LIFE', category: 'tech', filename: '39_taikang_life.webp', width: 147, height: 68, aspectRatio: 2.16 },
];
