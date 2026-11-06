export interface PartnerItem {
  code: string;
  title: string;
  titleEn?: string;
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
  { code: '01_state_grid', title: '国家电网 STATE GRID', titleEn: 'State Grid (SGCC)', category: 'grid', filename: '01_state_grid.webp', width: 159, height: 67, aspectRatio: 2.37, highlight: true },
  { code: '37_csg', title: '中国南方电网 CSG', titleEn: 'China Southern Power Grid (CSG)', category: 'grid', filename: '37_csg.webp', width: 135, height: 63, aspectRatio: 2.14, highlight: true },
  { code: '02_inner_mongolia_power', title: '内蒙古电力', titleEn: 'Inner Mongolia Power Group', category: 'grid', filename: '02_inner_mongolia_power.webp', width: 94, height: 92, aspectRatio: 1.02 },
  { code: '47_spic', title: '国家电投 SPIC', titleEn: 'SPIC Energy Group', category: 'grid', filename: '47_spic.webp', width: 85, height: 96, aspectRatio: 0.89, highlight: true },
  { code: '48_huadian', title: '中国华电 CHINA HUADIAN', titleEn: 'China Huadian (CHD)', category: 'grid', filename: '48_huadian.webp', width: 169, height: 53, aspectRatio: 3.19, highlight: true },
  { code: '49_huaneng', title: '中国华能 CHINA HUANENG', titleEn: 'China Huaneng (CHNG)', category: 'grid', filename: '49_huaneng.webp', width: 166, height: 49, aspectRatio: 3.39, highlight: true },
  { code: '35_chn_energy', title: '国家能源集团 CHN ENERGY', titleEn: 'China Energy (CHN ENERGY)', category: 'grid', filename: '35_chn_energy.webp', width: 127, height: 69, aspectRatio: 1.84, highlight: true },
  { code: '73_datang', title: '中国大唐 CHINA DATANG', titleEn: 'China Datang (CDT)', category: 'grid', filename: '73_datang.webp', width: 165, height: 75, aspectRatio: 2.2 },
  { code: '69_cgn', title: '中广核 CGN', titleEn: 'China General Nuclear (CGN)', category: 'grid', filename: '69_cgn.webp', width: 175, height: 49, aspectRatio: 3.57, highlight: true },
  { code: '77_cr_power', title: '华润电力 CR POWER', titleEn: 'China Resources Power', category: 'grid', filename: '77_cr_power.webp', width: 158, height: 58, aspectRatio: 2.72 },
  { code: '78_cnnc', title: '中核集团 CNNC', titleEn: 'China National Nuclear (CNNC)', category: 'grid', filename: '78_cnnc.webp', width: 97, height: 97, aspectRatio: 1.0, highlight: true },

  // Global Electrical Giants & Switchgear Ecosystem
  { code: '27_abb', title: 'ABB', titleEn: 'ABB Group', category: 'giants', filename: '27_abb.webp', width: 157, height: 55, aspectRatio: 2.85, highlight: true },
  { code: '71_siemens', title: '西门子 SIEMENS', titleEn: 'Siemens Energy & Automation', category: 'giants', filename: '71_siemens.webp', width: 168, height: 50, aspectRatio: 3.36, highlight: true },
  { code: '75_schneider_electric', title: '施耐德电气 Schneider Electric', titleEn: 'Schneider Electric', category: 'giants', filename: '75_schneider_electric.webp', width: 163, height: 60, aspectRatio: 2.72, highlight: true },
  { code: '54_tbea', title: '特变电工 TBEA', titleEn: 'TBEA Transformers & Grid', category: 'giants', filename: '54_tbea.webp', width: 171, height: 52, aspectRatio: 3.29, highlight: true },
  { code: '74_xd_group', title: '中国西电 XD', titleEn: 'China XD Group', category: 'giants', filename: '74_xd_group.webp', width: 147, height: 60, aspectRatio: 2.45, highlight: true },
  { code: '76_sieyuan', title: '思源电气 Sieyuan', titleEn: 'Sieyuan Electric', category: 'giants', filename: '76_sieyuan.webp', width: 151, height: 62, aspectRatio: 2.44, highlight: true },
  { code: '31_rxpe', title: '荣信汇科 RXPE', titleEn: 'RXPE Power Quality & SVC', category: 'giants', filename: '31_rxpe.webp', width: 162, height: 66, aspectRatio: 2.45 },
  { code: '32_yawei_electric', title: '亚威电气 YAWEI', titleEn: 'Yawei Electric', category: 'giants', filename: '32_yawei_electric.webp', width: 111, height: 86, aspectRatio: 1.29 },
  { code: '67_guange_electric', title: '广野电气 Guang e', titleEn: 'Guang-e Electric', category: 'giants', filename: '67_guange_electric.webp', width: 144, height: 80, aspectRatio: 1.8 },
  { code: '68_sdee', title: '山东电工 SDEE', titleEn: 'Shandong Electrical (SDEE)', category: 'giants', filename: '68_sdee.webp', width: 137, height: 65, aspectRatio: 2.11 },
  { code: '45_ccteg_electric', title: '中煤电气 CCTEG', titleEn: 'CCTEG Mining Electrical', category: 'giants', filename: '45_ccteg_electric.webp', width: 104, height: 95, aspectRatio: 1.09, highlight: true },
  { code: '72_vycon', title: '微控 VYCON 磁悬浮飞轮', titleEn: 'VYCON Flywheel Energy Storage', category: 'giants', filename: '72_vycon.webp', width: 173, height: 53, aspectRatio: 3.26 },
  { code: '81_eve_energy', title: '亿纬锂能 EVE', titleEn: 'EVE Energy Storage', category: 'giants', filename: '81_eve_energy.webp', width: 170, height: 40, aspectRatio: 4.25, highlight: true },

  // Mining, Heavy Metallurgy & Manufacturing
  { code: '11_chalco', title: '中国铝业 CHALCO', titleEn: 'Aluminum Corp of China (CHALCO)', category: 'industry', filename: '11_chalco.webp', width: 147, height: 65, aspectRatio: 2.26, highlight: true },
  { code: '12_cnmc', title: '中国有色集团 CNMC', titleEn: 'China Nonferrous Mining (CNMC)', category: 'industry', filename: '12_cnmc.webp', width: 158, height: 58, aspectRatio: 2.72 },
  { code: '13_china_gold', title: '中国黄金 CHINA GOLD', titleEn: 'China National Gold Group', category: 'industry', filename: '13_china_gold.webp', width: 151, height: 52, aspectRatio: 2.9 },
  { code: '29_ansteel', title: '鞍钢集团 ANSTEEL', titleEn: 'Ansteel Group Corporation', category: 'industry', filename: '29_ansteel.webp', width: 119, height: 89, aspectRatio: 1.34, highlight: true },
  { code: '50_jianlong_group', title: '建龙集团 JIANLONG GROUP', titleEn: 'Jianlong Heavy Industry', category: 'industry', filename: '50_jianlong_group.webp', width: 149, height: 65, aspectRatio: 2.29 },
  { code: '51_shougang_group', title: '首钢集团 SHOUGANG GROUP', titleEn: 'Shougang Steel Group', category: 'industry', filename: '51_shougang_group.webp', width: 158, height: 53, aspectRatio: 2.98, highlight: true },
  { code: '53_liugang', title: '柳州钢铁 LIUGANG', titleEn: 'Liugang Steel Group', category: 'industry', filename: '53_liugang.webp', width: 88, height: 95, aspectRatio: 0.93 },
  { code: '65_benxi_steel', title: '本溪钢铁 BENXI STEEL', titleEn: 'Benxi Steel Group (Bengang)', category: 'industry', filename: '65_benxi_steel.webp', width: 161, height: 79, aspectRatio: 2.04 },
  { code: '64_daheishan_moly', title: '大黑山钼业', titleEn: 'Daheishan Molybdenum Mining', category: 'industry', filename: '64_daheishan_moly.webp', width: 169, height: 52, aspectRatio: 3.25 },
  { code: '70_xinhua_moly', title: '新华钼业 XINHUA MOLY', titleEn: 'Xinhua Molybdenum Industry', category: 'industry', filename: '70_xinhua_moly.webp', width: 163, height: 61, aspectRatio: 2.67 },
  { code: '66_liaoning_dongmei', title: '辽宁东煤', titleEn: 'Liaoning Dongmei Mining', category: 'industry', filename: '66_liaoning_dongmei.webp', width: 166, height: 60, aspectRatio: 2.77 },
  { code: '24_nhi', title: '北方重工 NHI', titleEn: 'Northern Heavy Industries (NHI)', category: 'industry', filename: '24_nhi.webp', width: 140, height: 63, aspectRatio: 2.22, highlight: true },
  { code: '63_shengu_group', title: '沈阳鼓风机集团 SHENGU', titleEn: 'Shenyang Blower Works (SHENGU)', category: 'industry', filename: '63_shengu_group.webp', width: 172, height: 67, aspectRatio: 2.57, highlight: true },
  { code: '07_bmw', title: '宝马 BMW', titleEn: 'BMW Group Automotive', category: 'industry', filename: '07_bmw.webp', width: 85, height: 86, aspectRatio: 0.99, highlight: true },
  { code: '55_gree', title: '格力电器 GREE', titleEn: 'Gree Electric Appliances', category: 'industry', filename: '55_gree.webp', width: 156, height: 49, aspectRatio: 3.18, highlight: true },
  { code: '56_yutong', title: '宇通集团 YUTONG', titleEn: 'Yutong Group Buses & Vehicles', category: 'industry', filename: '56_yutong.webp', width: 99, height: 81, aspectRatio: 1.22, highlight: true },
  { code: '57_michelin', title: '米其林 MICHELIN', titleEn: 'Michelin Tyre Manufacturing', category: 'industry', filename: '57_michelin.webp', width: 163, height: 60, aspectRatio: 2.72, highlight: true },
  { code: '41_longmarch_tyre', title: '浪马轮胎 LONGMARCH', titleEn: 'Longmarch Radial Tyre', category: 'industry', filename: '41_longmarch_tyre.webp', width: 111, height: 75, aspectRatio: 1.48 },
  { code: '28_gold_phoenix', title: '金麒麟 GOLD PHOENIX', titleEn: 'Gold Phoenix Group', category: 'industry', filename: '28_gold_phoenix.webp', width: 89, height: 95, aspectRatio: 0.94 },
  { code: '09_cnpc', title: '中国石油 CNPC', titleEn: 'PetroChina (CNPC)', category: 'industry', filename: '09_cnpc.webp', width: 104, height: 90, aspectRatio: 1.16, highlight: true },
  { code: '10_sinopec', title: '中国石化 SINOPEC', titleEn: 'Sinopec Petrochemical', category: 'industry', filename: '10_sinopec.webp', width: 78, height: 95, aspectRatio: 0.82, highlight: true },
  { code: '30_meihua_group', title: '梅花集团 MEIHUA GROUP', titleEn: 'Meihua Bio-Tech Group', category: 'industry', filename: '30_meihua_group.webp', width: 94, height: 94, aspectRatio: 1.0 },
  { code: '52_conch_profile', title: '海螺型材 CONCH', titleEn: 'Conch Profiles Building Materials', category: 'industry', filename: '52_conch_profile.webp', width: 104, height: 60, aspectRatio: 1.73 },
  { code: '25_fangda_group', title: '方大集团 FANGDA GROUP', titleEn: 'Fangda Special Steel & Carbon', category: 'industry', filename: '25_fangda_group.webp', width: 112, height: 86, aspectRatio: 1.3 },
  { code: '23_changan_auto', title: '长安工业装备', titleEn: "Chang'an Industrial Equipment", category: 'industry', filename: '23_changan_auto.webp', width: 88, height: 69, aspectRatio: 1.28 },

  // Infrastructure, Rail Transit & Hydro EPC
  { code: '04_crec', title: '中国中铁 CREC', titleEn: 'China Railway Group (CREC)', category: 'infra', filename: '04_crec.webp', width: 95, height: 97, aspectRatio: 0.98, highlight: true },
  { code: '46_powerchina', title: '中国电建 POWERCHINA', titleEn: 'PowerChina Global EPC', category: 'infra', filename: '46_powerchina.webp', width: 115, height: 94, aspectRatio: 1.22, highlight: true },
  { code: '42_ceec', title: '中国能建 ENERGY CHINA', titleEn: 'Energy China (CEEC)', category: 'infra', filename: '42_ceec.webp', width: 126, height: 85, aspectRatio: 1.48, highlight: true },
  { code: '26_cggc', title: '中国葛洲坝集团 CGGC', titleEn: 'China Gezhouba Group (CGGC)', category: 'infra', filename: '26_cggc.webp', width: 128, height: 86, aspectRatio: 1.49, highlight: true },
  { code: '80_chec', title: '中国港湾 CHEC', titleEn: 'China Harbour Engineering (CHEC)', category: 'infra', filename: '80_chec.webp', width: 167, height: 60, aspectRatio: 2.78, highlight: true },
  { code: '03_shenyang_metro', title: '沈阳地铁 SHENYANG METRO', titleEn: 'Shenyang Metro Transit Power', category: 'infra', filename: '03_shenyang_metro.webp', width: 108, height: 92, aspectRatio: 1.17 },
  { code: '05_beijing_subway', title: '北京地铁 BEIJING SUBWAY', titleEn: 'Beijing Subway Traction Power', category: 'infra', filename: '05_beijing_subway.webp', width: 164, height: 61, aspectRatio: 2.69 },
  { code: '33_wwhg', title: '万家寨水控 WWHG', titleEn: 'Wanjiazhai Water Holding (WWHG)', category: 'infra', filename: '33_wwhg.webp', width: 112, height: 88, aspectRatio: 1.27 },
  { code: '22_dpcc', title: '大连港 DPCC', titleEn: 'Dalian Port Terminals (DPCC)', category: 'infra', filename: '22_dpcc.webp', width: 88, height: 90, aspectRatio: 0.98 },
  { code: '18_poly_developments', title: '保利地产 POLY', titleEn: 'Poly Developments & Holdings', category: 'infra', filename: '18_poly_developments.webp', width: 167, height: 57, aspectRatio: 2.93 },
  { code: '19_china_overseas', title: '中海地产 COLI', titleEn: 'China Overseas Land (COLI)', category: 'infra', filename: '19_china_overseas.webp', width: 160, height: 49, aspectRatio: 3.27 },
  { code: '20_longfor', title: '龙湖集团 LONGFOR', titleEn: 'Longfor Group Commercial', category: 'infra', filename: '20_longfor.webp', width: 123, height: 57, aspectRatio: 2.16 },
  { code: '59_vanke', title: '万科 vanke', titleEn: 'Vanke Real Estate Infrastructure', category: 'infra', filename: '59_vanke.webp', width: 147, height: 45, aspectRatio: 3.27 },
  { code: '58_huaqiang_group', title: '华强集团 HUAQIANG GROUP', titleEn: 'Huaqiang High-Tech Parks', category: 'infra', filename: '58_huaqiang_group.webp', width: 142, height: 55, aspectRatio: 2.58 },

  // Top Universities, Research & High-Tech
  { code: '60_tsinghua_univ', title: '清华大学 Tsinghua Univ', titleEn: 'Tsinghua University (THU)', category: 'tech', filename: '60_tsinghua_univ.webp', width: 160, height: 60, aspectRatio: 2.67, highlight: true },
  { code: '21_peking_university', title: '北京大学 Peking Univ', titleEn: 'Peking University (PKU)', category: 'tech', filename: '21_peking_university.webp', width: 95, height: 93, aspectRatio: 1.02, highlight: true },
  { code: '40_northeastern_univ', title: '东北大学 Northeastern Univ', titleEn: 'Northeastern University (NEU)', category: 'tech', filename: '40_northeastern_univ.webp', width: 93, height: 91, aspectRatio: 1.02, highlight: true },
  { code: '34_shenyang_ligong_univ', title: '沈阳理工大学', titleEn: 'Shenyang Ligong University', category: 'tech', filename: '34_shenyang_ligong_univ.webp', width: 93, height: 92, aspectRatio: 1.01 },
  { code: '79_cmu', title: '中国医科大学 CMU', titleEn: 'China Medical University (CMU)', category: 'tech', filename: '79_cmu.webp', width: 139, height: 92, aspectRatio: 1.51 },
  { code: '61_dalian_medical_univ', title: '大连医科大学', titleEn: 'Dalian Medical University', category: 'tech', filename: '61_dalian_medical_univ.webp', width: 163, height: 47, aspectRatio: 3.47 },
  { code: '06_huawei', title: '华为 HUAWEI', titleEn: 'Huawei Digital Power', category: 'tech', filename: '06_huawei.webp', width: 104, height: 86, aspectRatio: 1.21, highlight: true },
  { code: '44_casic', title: '中国航天科工 CASIC', titleEn: 'China Aerospace Science & Industry (CASIC)', category: 'tech', filename: '44_casic.webp', width: 147, height: 62, aspectRatio: 2.37, highlight: true },
  { code: '43_grinm', title: '中国有研 GRINM', titleEn: 'GRINM Advanced Materials', category: 'tech', filename: '43_grinm.webp', width: 131, height: 84, aspectRatio: 1.56 },
  { code: '62_kingsemi', title: '芯源微 KINGSEMI 半导体', titleEn: 'Kingsemi Semiconductor', category: 'tech', filename: '62_kingsemi.webp', width: 169, height: 35, aspectRatio: 4.83, highlight: true },
  { code: '14_china_mobile', title: '中国移动 China Mobile', titleEn: 'China Mobile Telecom & IDC', category: 'tech', filename: '14_china_mobile.webp', width: 148, height: 50, aspectRatio: 2.96, highlight: true },
  { code: '15_china_unicom', title: '中国联通 China Unicom', titleEn: 'China Unicom Cloud & Power', category: 'tech', filename: '15_china_unicom.webp', width: 122, height: 68, aspectRatio: 1.79 },
  { code: '16_china_telecom', title: '中国电信 CHINA TELECOM', titleEn: 'China Telecom Hyperscale IDC', category: 'tech', filename: '16_china_telecom.webp', width: 157, height: 56, aspectRatio: 2.8 },
  { code: '38_standard_group', title: '斯坦德集团 STD', titleEn: 'Standard Testing Group (STD)', category: 'tech', filename: '38_standard_group.webp', width: 101, height: 84, aspectRatio: 1.2 },
  { code: '17_kuihua_pharma', title: '葵花药业', titleEn: 'Kuihua Pharmaceutical', category: 'tech', filename: '17_kuihua_pharma.webp', width: 145, height: 55, aspectRatio: 2.64 },
  { code: '36_joycome', title: '家佳康 JOYCOME', titleEn: 'COFCO Joycome Food Group', category: 'tech', filename: '36_joycome.webp', width: 112, height: 64, aspectRatio: 1.75 },
  { code: '39_taikang_life', title: '泰康人寿 TAIKANG LIFE', titleEn: 'Taikang Life Insurance HQ', category: 'tech', filename: '39_taikang_life.webp', width: 147, height: 68, aspectRatio: 2.16 },
];
