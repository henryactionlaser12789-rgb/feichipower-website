import { useState, useMemo } from 'react';
import { overseasProjectsList, type OverseasProjectItem } from './overseasProjectsData';
import { Globe2, Search, MapPin, Zap, MessageCircle, Layers, Building2, LayoutGrid, Table, CheckCircle2, ChevronRight } from 'lucide-react';

type Locale = 'zh' | 'en' | 'ja' | 'es' | 'ru';

export function OverseasProjectsTrackRecord({ locale }: { locale: Locale }) {
  const [activeRegion, setActiveRegion] = useState<'all' | 'americas' | 'sea' | 'cis' | 'mea'>('all');
  const [activeSector, setActiveSector] = useState<'all' | 'renewable' | 'mining' | 'energy' | 'infra' | 'utility'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const regionLabels: Record<string, Record<Locale, string>> = {
    all: { zh: '全部海外项目 (49+)', en: 'All Global Projects (49+)', ru: 'Все зарубежные проекты (49+)', es: 'Todos los Proyectos (49+)', ja: 'すべての海外プロジェクト (49+)' },
    americas: { zh: '美洲大区 (墨西哥/尼加拉瓜/秘鲁)', en: 'Americas (Mexico, Nicaragua, Peru)', ru: 'Америка (Мексика, Никарагуа, Перу)', es: 'América (México, Nicaragua, Perú)', ja: 'アメリカ州 (メキシコ/ニカラグア/ペルー)' },
    sea: { zh: '东南亚与大洋洲 (菲律宾/印尼/孟加拉)', en: 'Southeast Asia & Pacific (Philippines, Indonesia)', ru: 'ЮВА и Пацифика (Филиппины, Индонезия)', es: 'Sudeste Asiático (Filipinas, Indonesia)', ja: '東南アジア (フィリピン/インドネシア)' },
    cis: { zh: '中亚与独联体 (蒙古/吉尔吉斯斯坦)', en: 'Central Asia & CIS (Mongolia, Kyrgyzstan)', ru: 'Центральная Азия и СНГ (Монголия, Кыргызстан)', es: 'Asia Central y CEI (Mongolia, Kirguistán)', ja: '中央アジア・CIS (モンゴル/キルギス)' },
    mea: { zh: '中东与非洲 (几内亚/沙特/伊拉克/尼日利亚)', en: 'Middle East & Africa (Guinea, Saudi, Iraq)', ru: 'Ближний Восток и Африка (Гвинея, Саудовская Аравия)', es: 'Oriente Medio y África (Guinea, Arabia Saudita)', ja: '中東・アフリカ (ギニア/サウジ/イラク)' },
  };

  const sectorLabels: Record<string, Record<Locale, string>> = {
    all: { zh: '全部行业', en: 'All Sectors', ru: 'Все отрасли', es: 'Todos los Sectores', ja: '全セクター' },
    renewable: { zh: '新能源风光储', en: 'Solar, Wind & BESS', ru: 'ВИЭ (Солнце, Ветер, BESS)', es: 'Energía Solar y Eólica', ja: '再エネ・太陽光・風力' },
    mining: { zh: '矿山冶金与重工', en: 'Mining & Metallurgy', ru: 'Горнодобыча и Металлургия', es: 'Minería y Metalurgia', ja: '鉱山・冶金重工' },
    energy: { zh: '油气与大型电厂', en: 'Oil, Gas & Power Plants', ru: 'Нефтегаз и ТЭС', es: 'Petróleo, Gas y Centrales', ja: '石油・ガス・発電所' },
    infra: { zh: '交通基础设施', en: 'Infrastructure & Rail', ru: 'Инфраструктура и Транспорт', es: 'Infraestructura y Transporte', ja: '交通・インフラ' },
    utility: { zh: '电网输配电', en: 'Power Grid & Utilities', ru: 'Электросети и Подстанции', es: 'Redes Eléctricas', ja: '送配電グリッド' },
  };

  const filtered = useMemo(() => {
    return overseasProjectsList.filter((item) => {
      const matchRegion = activeRegion === 'all' || item.region === activeRegion;
      const matchSector = activeSector === 'all' || item.sector === activeSector;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.country.zh.toLowerCase().includes(q) ||
        item.country.en.toLowerCase().includes(q) ||
        item.title.zh.toLowerCase().includes(q) ||
        item.title.en.toLowerCase().includes(q) ||
        item.equipmentSummary.toLowerCase().includes(q) ||
        item.client.toLowerCase().includes(q);
      return matchRegion && matchSector && matchSearch;
    });
  }, [activeRegion, activeSector, searchQuery]);

  return (
    <section id="overseas-projects" className="section" style={{ background: '#020617', borderTop: '1px solid rgba(56, 189, 248, 0.2)', padding: '70px 0' }}>
      <div className="wrap">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="eyebrow" style={{ color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.4)' }}>
            <Globe2 size={13} style={{ marginRight: '5px', display: 'inline', verticalAlign: '-1px' }} />
            GLOBAL TRACK RECORD & EPC REFERENCES
          </span>
          <h2 style={{ font: '900 32px/1.2 var(--display)', color: '#ffffff', letterSpacing: '-0.02em', marginTop: '10px' }}>
            {locale === 'zh'
              ? '全球 49+ 重大出海项目业绩全览与履约矩阵'
              : locale === 'ru'
              ? 'Глобальный реестр 49+ реализованных международных EPC проектов'
              : 'Global Track Record: 49+ Overseas Projects & EPC Delivery Matrix'}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '820px', margin: '14px auto 0' }}>
            {locale === 'zh'
              ? '覆盖美洲、中亚独联体、东南亚、中东及非洲等 18 个国家和地区，累计交付逾 1,600 台套中高压开关柜、箱变与预制舱设备。'
              : locale === 'ru'
              ? 'Опыт поставок в 18 стран мира: Латинская Америка, Центральная Азия и СНГ, ЮВА, Ближний Восток и Африка. Более 1600 комплектов высоковольтного оборудования.'
              : 'Delivered to 18 countries across the Americas, Central Asia, CIS, SE Asia, and Africa. Over 1,600 sets of HV/LV switchgear, modular substations, and transformers.'}
          </p>

          {/* Quick Metrics */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '24px' }}>
            <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '8px', padding: '10px 20px', textAlign: 'center' }}>
              <span style={{ font: '900 24px/1 var(--display)', color: '#38bdf8' }}>49+</span>
              <span style={{ display: 'block', fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginTop: '4px' }}>Major Overseas Projects</span>
            </div>
            <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(34, 197, 94, 0.25)', borderRadius: '8px', padding: '10px 20px', textAlign: 'center' }}>
              <span style={{ font: '900 24px/1 var(--display)', color: '#22c55e' }}>18</span>
              <span style={{ display: 'block', fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginTop: '4px' }}>Export Jurisdictions</span>
            </div>
            <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '8px', padding: '10px 20px', textAlign: 'center' }}>
              <span style={{ font: '900 24px/1 var(--display)', color: '#f59e0b' }}>1,600+</span>
              <span style={{ display: 'block', fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginTop: '4px' }}>Equipment Sets Supplied</span>
            </div>
            <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(168, 85, 247, 0.25)', borderRadius: '8px', padding: '10px 20px', textAlign: 'center' }}>
              <span style={{ font: '900 24px/1 var(--display)', color: '#a855f7' }}>100%</span>
              <span style={{ display: 'block', fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginTop: '4px' }}>IEC / GOST / AS Compliance</span>
            </div>
          </div>
        </div>

        {/* Region & Sector Filter Bar */}
        <div style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '12px', padding: '16px 20px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '14px' }}>
            {/* Region Tabs */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {(['all', 'americas', 'sea', 'cis', 'mea'] as const).map((reg) => (
                <button
                  key={reg}
                  type="button"
                  onClick={() => setActiveRegion(reg)}
                  style={{
                    background: activeRegion === reg ? 'linear-gradient(135deg, #0284c7, #0369a1)' : 'rgba(30, 41, 59, 0.7)',
                    color: activeRegion === reg ? '#ffffff' : '#94a3b8',
                    border: activeRegion === reg ? '1px solid #38bdf8' : '1px solid rgba(51, 65, 85, 0.7)',
                    borderRadius: '6px',
                    padding: '7px 14px',
                    fontSize: '12.5px',
                    fontWeight: activeRegion === reg ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {regionLabels[reg][locale]}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div style={{ display: 'flex', gap: '6px', background: 'rgba(30, 41, 59, 0.8)', padding: '3px', borderRadius: '6px', border: '1px solid rgba(71, 85, 105, 0.6)' }}>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                style={{
                  background: viewMode === 'grid' ? '#0284c7' : 'transparent',
                  color: viewMode === 'grid' ? '#ffffff' : '#94a3b8',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '5px 10px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer',
                }}
              >
                <LayoutGrid size={13} /> {locale === 'zh' ? '卡片视图' : 'Cards'}
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                style={{
                  background: viewMode === 'table' ? '#0284c7' : 'transparent',
                  color: viewMode === 'table' ? '#ffffff' : '#94a3b8',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '5px 10px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer',
                }}
              >
                <Table size={13} /> {locale === 'zh' ? '明细表' : 'Table'}
              </button>
            </div>
          </div>

          {/* Search & Sector Filters */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px', flexWrap: 'wrap', borderTop: '1px solid rgba(51, 65, 85, 0.5)', paddingTop: '12px' }}>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '11.5px', color: '#64748b', textTransform: 'uppercase', marginRight: '4px' }}>SECTORS:</span>
              {(['all', 'renewable', 'mining', 'energy', 'infra', 'utility'] as const).map((sec) => (
                <button
                  key={sec}
                  type="button"
                  onClick={() => setActiveSector(sec)}
                  style={{
                    background: activeSector === sec ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                    color: activeSector === sec ? '#38bdf8' : '#64748b',
                    border: activeSector === sec ? '1px solid rgba(56, 189, 248, 0.5)' : '1px solid transparent',
                    borderRadius: '4px',
                    padding: '4px 10px',
                    fontSize: '11.5px',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  {sectorLabels[sec][locale]}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', minWidth: '240px' }}>
              <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={locale === 'zh' ? '搜索国家、项目或设备型号...' : 'Search country, project, equipment...'}
                style={{
                  width: '100%',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(71, 85, 105, 0.7)',
                  borderRadius: '6px',
                  padding: '6px 12px 6px 32px',
                  fontSize: '12.5px',
                  color: '#f8fafc',
                  outline: 'none',
                }}
              />
            </div>
          </div>
        </div>

        {/* Content Display: Grid or Table */}
        {viewMode === 'grid' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '22px' }}>
            {filtered.map((item) => (
              <div
                key={item.id}
                style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: item.highlight ? '1px solid rgba(56, 189, 248, 0.45)' : '1px solid rgba(51, 65, 85, 0.6)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: item.highlight ? '0 8px 24px rgba(56, 189, 248, 0.1)' : 'none',
                }}
              >
                {/* Image & Header */}
                <div style={{ position: 'relative', width: '100%', height: '175px', background: '#020617', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title.zh}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '6px' }}>
                    <span style={{ background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(4px)', color: '#f8fafc', padding: '3px 9px', borderRadius: '4px', fontSize: '11.5px', fontWeight: 700, border: '1px solid rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span>{item.flag}</span> {item.country[locale] || item.country.en}
                    </span>
                    {item.highlight && (
                      <span style={{ background: 'rgba(234, 88, 12, 0.9)', color: '#ffffff', padding: '3px 8px', borderRadius: '4px', fontSize: '10.5px', fontWeight: 800, textTransform: 'uppercase' }}>
                        FLAGSHIP
                      </span>
                    )}
                  </div>
                  <div style={{ position: 'absolute', bottom: '8px', right: '10px' }}>
                    <span style={{ background: 'rgba(2, 132, 199, 0.9)', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 700 }}>
                      QTY: {item.quantity} SETS
                    </span>
                  </div>
                </div>

                {/* Details Body */}
                <div style={{ padding: '16px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ font: '700 15px/1.4 var(--display)', color: '#f8fafc', marginBottom: '8px' }}>
                    {item.title.zh}
                  </h3>

                  <div style={{ background: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(51, 65, 85, 0.5)', borderRadius: '6px', padding: '8px 12px', marginBottom: '12px', fontSize: '12px', color: '#cbd5e1', lineHeight: '1.45', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                      <Zap size={13} style={{ color: '#38bdf8', marginTop: '3px', flexShrink: 0 }} />
                      <span>{item.equipmentSummary}</span>
                    </div>
                  </div>

                  {item.client && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: '#64748b', marginBottom: '14px' }}>
                      <Building2 size={12} style={{ flexShrink: 0 }} />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {locale === 'zh' ? '订货/总包单位: ' : 'Contractor: '} {item.client}
                      </span>
                    </div>
                  )}

                  <a
                    className="button"
                    style={{
                      width: '100%',
                      background: 'rgba(2, 132, 199, 0.15)',
                      border: '1px solid rgba(56, 189, 248, 0.4)',
                      color: '#38bdf8',
                      padding: '8px 0',
                      borderRadius: '6px',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      textDecoration: 'none',
                    }}
                    href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I am inquiring about Feichi project reference: ${item.title.zh} (${item.country.en}). Please provide single-line diagrams (SLD), equipment specifications, and quotation for similar project.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={14} /> {locale === 'zh' ? '索取类似项目单线图与技术方案' : 'Request SLD & Tech Proposal'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Structured Table View */
          <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(51, 65, 85, 0.7)', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12.5px' }}>
                <thead>
                  <tr style={{ background: 'rgba(30, 41, 59, 0.9)', borderBottom: '1px solid rgba(51, 65, 85, 0.8)', color: '#94a3b8' }}>
                    <th style={{ padding: '12px 14px', width: '50px' }}>#</th>
                    <th style={{ padding: '12px 14px', width: '120px' }}>{locale === 'zh' ? '国家/地区' : 'Country'}</th>
                    <th style={{ padding: '12px 14px', width: '280px' }}>{locale === 'zh' ? '海外项目名称' : 'Project Title'}</th>
                    <th style={{ padding: '12px 14px' }}>{locale === 'zh' ? '核心交付产品与规格' : 'Delivered Products & Specs'}</th>
                    <th style={{ padding: '12px 14px', width: '80px', textAlign: 'center' }}>{locale === 'zh' ? '数量' : 'Qty'}</th>
                    <th style={{ padding: '12px 14px', width: '220px' }}>{locale === 'zh' ? '订货/总包单位' : 'Client / Contractor'}</th>
                    <th style={{ padding: '12px 14px', width: '100px', textAlign: 'center' }}>{locale === 'zh' ? '技术对接' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((item, idx) => (
                    <tr
                      key={item.id}
                      style={{
                        borderBottom: '1px solid rgba(51, 65, 85, 0.35)',
                        background: idx % 2 === 0 ? 'rgba(15, 23, 42, 0.4)' : 'rgba(30, 41, 59, 0.3)',
                      }}
                    >
                      <td style={{ padding: '10px 14px', color: '#64748b' }}>{item.seq}</td>
                      <td style={{ padding: '10px 14px', color: '#f8fafc', fontWeight: 600 }}>
                        <span style={{ marginRight: '5px' }}>{item.flag}</span>
                        {item.country[locale] || item.country.en}
                      </td>
                      <td style={{ padding: '10px 14px', color: '#38bdf8', fontWeight: 600 }}>
                        {item.title.zh}
                      </td>
                      <td style={{ padding: '10px 14px', color: '#cbd5e1' }}>
                        {item.equipmentSummary}
                      </td>
                      <td style={{ padding: '10px 14px', textAlign: 'center', color: '#22c55e', fontWeight: 700 }}>
                        {item.quantity}
                      </td>
                      <td style={{ padding: '10px 14px', color: '#94a3b8', fontSize: '11.5px' }}>
                        {item.client || '-'}
                      </td>
                      <td style={{ padding: '10px 14px', textAlign: 'center' }}>
                        <a
                          href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, inquiring about Feichi project #${item.seq}: ${item.title.zh}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            background: 'rgba(2, 132, 199, 0.2)',
                            color: '#38bdf8',
                            border: '1px solid rgba(56, 189, 248, 0.4)',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            fontSize: '11px',
                            fontWeight: 700,
                            textDecoration: 'none',
                            display: 'inline-block',
                          }}
                        >
                          SLD/报价
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
