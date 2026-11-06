import { useState, useMemo } from 'react';
import { showcaseProjectsList, type ShowcaseProject } from './galleryData';
import { MapPin, Zap, ArrowUpRight, MessageCircle, Layers, Globe2, Building2, ShieldCheck } from 'lucide-react';

type Locale = 'zh' | 'en' | 'ja' | 'es' | 'ru';

export function GlobalProjectsShowcase({ locale }: { locale: Locale }) {
  const [activeTab, setActiveTab] = useState<'all' | 'global' | 'ehouse' | 'switchgear' | 'renewable'>('all');

  const filtered = useMemo(() => {
    if (activeTab === 'all') return showcaseProjectsList;
    if (activeTab === 'global') {
      return showcaseProjectsList.filter(
        (p) =>
          p.id.includes('mexico') ||
          p.id.includes('philippines') ||
          p.id.includes('ehouse-1') ||
          p.id.includes('switch-3')
      );
    }
    return showcaseProjectsList.filter((p) => p.category === activeTab);
  }, [activeTab]);

  const categoryLabels: Record<'all' | 'global' | 'ehouse' | 'switchgear' | 'renewable', Record<Locale, string>> = {
    all: {
      zh: '全部标杆工程业绩 (12+)',
      en: 'All Reference Projects (12+)',
      ja: 'すべての重点プロジェクト (12+)',
      es: 'Todos los Proyectos Clave (12+)',
      ru: 'Все ключевые проекты (12+)',
    },
    global: {
      zh: '🌍 海外出海与全球 EPC 项目',
      en: '🌍 Global EPC & Export References',
      ja: '🌍 海外EPC・輸出プロジェクト',
      es: '🌍 Proyectos EPC Globales y Exportación',
      ru: '🌍 Экспортные проекты и международный EPC',
    },
    ehouse: {
      zh: '⚡ E-House 预制舱与箱式变电站',
      en: '⚡ E-House & Modular Substations',
      ja: '⚡ E-House・プレハブ変電所',
      es: '⚡ E-House y Subestaciones Modulares',
      ru: '⚡ БКРУ (E-House) и КТПН',
    },
    switchgear: {
      zh: '🏢 轨道交通与中高压成套 GIS',
      en: '🏢 Rail Transit & High-Voltage Switchgear',
      ja: '🏢 鉄道交通・高圧開閉装置 GIS',
      es: '🏢 Tracción Metro y Celdas AT/MT',
      ru: '🏢 Метрополитен и КРУ среднего/высокого напряжения',
    },
    renewable: {
      zh: '☀️ 大型风电光伏地面升压站',
      en: '☀️ Utility-Scale Solar & Wind Substation Skids',
      ja: '☀️ メガソーラー・風力昇圧変電所',
      es: '☀️ Subestaciones Elevadoras Solares y Eólicas',
      ru: '☀️ Повысительные подстанции ВЭС и СЭС',
    },
  };

  const titleMap: Record<Locale, string> = {
    zh: '全球标杆工程业绩与实景案例中心',
    en: 'Global Reference Projects & Field Commissioning Center',
    ja: 'グローバル代表実績・現地納入事例センター',
    es: 'Centro de Proyectos de Referencia Global y Puesta en Servicio',
    ru: 'Центр референс-листов мировых проектов и опыт внедрения',
  };

  const subtitleMap: Record<Locale, string> = {
    zh: '深度整合非洲几内亚力拓港口、墨西哥 120MW 光伏升压站、菲律宾海岛预制舱、库布齐沙漠 1GW 基地及沈阳地铁牵引供电，万台成套设备长周期稳定运行。',
    en: 'Integrated project showcase spanning Rio Tinto West Africa port, Mexico 120MW solar substation, Philippines marine E-House, Kubuqi 1GW desert base, and urban metro transit.',
    ja: 'ギニア・リオティント港湾、メキシコ120MW太陽光変電所、フィリピン海洋E-House、クブチ砂漠1GW基地、都市地下鉄など国内外の大型実績を一元展示。',
    es: 'Showcase integral que abarca el puerto de Rio Tinto en África, subestación solar de 120MW en México, E-House marino en Filipinas, base solar de 1GW en Kubuqi y metro urbano.',
    ru: 'Единая база проектов: порт Симанду (Rio Tinto), СЭС 120 МВт в Мексике, морские БКРУ на Филиппинах, СЭС 1 ГВт в Кубучи и тяговые подстанции метрополитена.',
  };

  return (
    <section id="project-references" className="section projects-showcase-section" style={{ background: '#0b111e', borderTop: '1px solid #1e293b', padding: '80px 0' }}>
      <div className="wrap" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '20px', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.25)', color: '#22c55e', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
            <Layers size={14} /> FIELD PERFORMANCE & EPC REFERENCE DOSSIER
          </div>
          <h2 style={{ font: '900 36px/1.2 var(--display, "Space Grotesk", sans-serif)', color: '#f8fafc', margin: '0 0 16px' }}>
            {titleMap[locale]}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '820px', margin: '0 auto', lineHeight: 1.6 }}>
            {subtitleMap[locale]}
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '36px' }}>
          {(['all', 'global', 'ehouse', 'switchgear', 'renewable'] as const).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '8px',
                  fontSize: '13.5px',
                  fontWeight: isActive ? 600 : 400,
                  background: isActive ? '#0284c7' : 'rgba(15, 23, 42, 0.8)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  border: isActive ? '1px solid #38bdf8' : '1px solid #334155',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {categoryLabels[tab][locale]}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          {filtered.map((proj) => (
            <div
              key={proj.id}
              style={{
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid #1e293b',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.5)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#1e293b';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '220px', background: '#020617', overflow: 'hidden' }}>
                <img
                  src={proj.image}
                  alt={proj.title[locale] || proj.title.en}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38bdf8', fontSize: '11.5px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <MapPin size={12} /> {proj.location[locale] || proj.location.en}
                </div>
              </div>

              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ font: '800 17px/1.4 var(--display)', color: '#f8fafc', margin: '0 0 10px' }}>
                  {proj.title[locale] || proj.title.en}
                </h3>

                <div style={{ fontSize: '12.5px', color: '#94a3b8', marginBottom: '8px' }}>
                  <strong style={{ color: '#cbd5e1' }}>Client / Sector:</strong> {proj.clientOrSector}
                </div>

                <div style={{ fontSize: '12.5px', color: '#38bdf8', marginBottom: '16px', background: 'rgba(56, 189, 248, 0.08)', padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                  <Zap size={13} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '4px' }} />
                  <strong>Technical Specs:</strong> {proj.specs}
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <a
                    href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, I am reviewing Feichi project reference: "${proj.title.en}". Please provide the technical proposal, single-line diagram (SLD), and equipment bill of quantities (BOQ) for similar engineering requirements.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#38bdf8',
                      fontSize: '13px',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    <MessageCircle size={14} /> {locale === 'zh' ? '索取类似工程方案与单线图' : 'Inquire Similar Specs & SLD'}
                  </a>
                  <ArrowUpRight size={16} style={{ color: '#64748b' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
