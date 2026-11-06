import { useState, useMemo } from 'react';
import { partnersList, partnerCategoryLabels, type PartnerItem } from './partnersData';
import { Building2, Search, ShieldCheck, MessageCircle, Sparkles, Factory, Award, LayoutGrid, SlidersHorizontal } from 'lucide-react';

type Locale = 'zh' | 'en' | 'ja' | 'es' | 'ru';

export function StrategicPartnersSection({ locale }: { locale: Locale }) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'grid' | 'giants' | 'industry' | 'infra' | 'tech'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'marquee' | 'grid'>('marquee');
  const [isPaused, setIsPaused] = useState(false);

  const filteredPartners = useMemo(() => {
    return partnersList.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.titleEn && item.titleEn.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  // Split into 3 balanced rows for 3-tier unidirectional slow marquee
  const row1Partners = useMemo(() => {
    return filteredPartners.filter((_, idx) => idx % 3 === 0);
  }, [filteredPartners]);

  const row2Partners = useMemo(() => {
    return filteredPartners.filter((_, idx) => idx % 3 === 1);
  }, [filteredPartners]);

  const row3Partners = useMemo(() => {
    return filteredPartners.filter((_, idx) => idx % 3 === 2);
  }, [filteredPartners]);

  const categoryKeys: Array<'all' | 'grid' | 'giants' | 'industry' | 'infra' | 'tech'> = [
    'all',
    'grid',
    'giants',
    'industry',
    'infra',
    'tech',
  ];

  const titleMap: Record<Locale, string> = {
    zh: '战略合作伙伴与协同生态圈',
    en: 'Strategic Partners & Collaborative Ecosystem',
    ja: '戦略的パートナー・協調エコシステム',
    es: 'Socios Estratégicos y Ecosistema de Colaboración',
    ru: 'Стратегические партнеры и совместная экосистема',
  };

  const subtitleMap: Record<Locale, string> = {
    zh: '深度协同国家电网、五大六小能源央企、全球电气巨头（ABB/西门子/施耐德）与顶尖科研院所，构筑 20 年高压电气装备与变电成套可靠基石。',
    en: 'Synergizing with State Grid, major energy groups, global electrical giants (ABB / Siemens / Schneider), and top research institutions to deliver rock-solid high-voltage substation reliability for 20+ years.',
    ja: '国家電網、大手電力グループ、グローバル電気大手（ABB/シーメンス/シュナイダー）、一流研究機関と深く連携し、20年以上にわたり高圧電気機器の信頼性を確立。',
    es: 'Colaboración profunda con State Grid, gigantes eléctricos globales (ABB/Siemens/Schneider) e institutos de investigación, respaldando 20+ años de fiabilidad en subestaciones.',
    ru: 'Тесное сотрудничество с ПАО «Россети», мировыми электротехническими лидерами (ABB/Siemens/Schneider) и ведущими НИИ, обеспечивающее 20+ лет безупречной надежности подстанций.',
  };

  // Helper renderer for a single logo card (Pure Logo Icon with clean centered presentation)
  const renderCard = (item: PartnerItem, keyPrefix = '') => {
    const displayTitle = locale === 'zh' ? item.title : (item.titleEn || item.title);
    return (
      <div
        key={`${keyPrefix}-${item.code}`}
        title={displayTitle}
        style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '10px',
          padding: '8px 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '155px',
          maxWidth: '175px',
          height: '76px',
          flexShrink: 0,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
          cursor: 'pointer',
          userSelect: 'none',
          overflow: 'hidden',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px) scale(1.04)';
          e.currentTarget.style.boxShadow = '0 10px 24px rgba(56, 189, 248, 0.35)';
          e.currentTarget.style.borderColor = '#38bdf8';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.25)';
          e.currentTarget.style.borderColor = '#e2e8f0';
        }}
      >
        <img
          src={`/images/partners/${item.filename}`}
          alt={displayTitle}
          loading="lazy"
          decoding="async"
          width={150}
          height={60}
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '145px',
            maxHeight: '58px',
            objectFit: 'contain',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </div>
    );
  };

  return (
    <section id="strategic-partners" className="section partners-ecosystem-section" style={{ background: '#070b12', borderTop: '1px solid #1e293b', padding: '80px 0', overflow: 'hidden' }}>
      <div className="wrap" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '20px', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', color: '#38bdf8', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
            <Sparkles size={14} /> TRUSTED ECOSYSTEM & CLIENT REFERENCES (81+ ENTERPRISES)
          </div>
          <h2 style={{ font: '900 36px/1.2 var(--display, "Space Grotesk", sans-serif)', color: '#f8fafc', margin: '0 0 16px' }}>
            {titleMap[locale]}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '780px', margin: '0 auto', lineHeight: 1.6 }}>
            {subtitleMap[locale]}
          </p>
        </div>

        {/* Stats Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '36px' }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid #1e293b', borderRadius: '10px', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Building2 size={32} style={{ color: '#38bdf8' }} />
            <div>
              <div style={{ font: '900 24px var(--display)', color: '#f8fafc' }}>80+</div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>{locale === 'zh' ? '战略协同央国企与跨国巨头' : 'Strategic State & Global Clients'}</div>
            </div>
          </div>
          <div style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid #1e293b', borderRadius: '10px', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Factory size={32} style={{ color: '#22c55e' }} />
            <div>
              <div style={{ font: '900 24px var(--display)', color: '#f8fafc' }}>63,000 m²</div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>{locale === 'zh' ? '沈阳现代化智能制造基地' : 'Modernized Manufacturing Plant'}</div>
            </div>
          </div>
          <div style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid #1e293b', borderRadius: '10px', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <ShieldCheck size={32} style={{ color: '#f59e0b' }} />
            <div>
              <div style={{ font: '900 24px var(--display)', color: '#f8fafc' }}>20+ Years</div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>{locale === 'zh' ? '高压变电成套研发与工程积淀' : 'High-Voltage Switchgear Heritage'}</div>
            </div>
          </div>
          <div style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid #1e293b', borderRadius: '10px', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Award size={32} style={{ color: '#ec4899' }} />
            <div>
              <div style={{ font: '900 24px var(--display)', color: '#f8fafc' }}>40+ Countries</div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>{locale === 'zh' ? '产品直达全球矿山与海外电网' : 'Global Export Destinations'}</div>
            </div>
          </div>
        </div>

        {/* Filters & Control Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {categoryKeys.map((catKey) => {
              const isActive = activeCategory === catKey;
              return (
                <button
                  key={catKey}
                  type="button"
                  onClick={() => setActiveCategory(catKey)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: isActive ? 600 : 400,
                    background: isActive ? '#0284c7' : 'rgba(15, 23, 42, 0.8)',
                    color: isActive ? '#ffffff' : '#94a3b8',
                    border: isActive ? '1px solid #38bdf8' : '1px solid #334155',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {partnerCategoryLabels[catKey][locale] || partnerCategoryLabels[catKey].en}
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {/* View Mode Switcher */}
            <div style={{ display: 'flex', background: 'rgba(15, 23, 42, 0.9)', border: '1px solid #334155', borderRadius: '8px', padding: '2px' }}>
              <button
                type="button"
                onClick={() => setViewMode('marquee')}
                title={locale === 'zh' ? '跑马灯平滑滚动模式' : 'Marquee Scroll Mode'}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: 'none',
                  background: viewMode === 'marquee' ? '#0284c7' : 'transparent',
                  color: viewMode === 'marquee' ? '#ffffff' : '#94a3b8',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer',
                }}
              >
                <SlidersHorizontal size={14} /> {locale === 'zh' ? '三排滚动' : '3-Row Marquee'}
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                title={locale === 'zh' ? '平铺网格视图' : 'Grid View'}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: 'none',
                  background: viewMode === 'grid' ? '#0284c7' : 'transparent',
                  color: viewMode === 'grid' ? '#ffffff' : '#94a3b8',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer',
                }}
              >
                <LayoutGrid size={14} /> {locale === 'zh' ? '全部网格' : 'Grid'}
              </button>
            </div>

            <div style={{ position: 'relative', minWidth: '220px' }}>
              <Search size={15} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
              <input
                type="text"
                placeholder={locale === 'zh' ? '搜索合作伙伴名称 / ABB / 华为...' : 'Search partner...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '7px 12px 7px 32px',
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '12.5px',
                  outline: 'none',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Mode (3 Rows, Unidirectional Slow Scrolling) */}
      {viewMode === 'marquee' && filteredPartners.length > 0 && (
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            padding: '12px 0',
            maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Row 1: Slow Leftward Scrolling (80s) */}
          <div
            style={{
              display: 'flex',
              gap: '14px',
              width: 'max-content',
              animation: 'marqueeSlowLeft 80s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
              marginBottom: '14px',
              willChange: 'transform',
            }}
          >
            {row1Partners.map((item) => renderCard(item, 'r1-s1'))}
            {row1Partners.map((item) => renderCard(item, 'r1-s2'))}
            {row1Partners.map((item) => renderCard(item, 'r1-s3'))}
          </div>

          {/* Row 2: Slow Leftward Scrolling in SAME direction (86s) */}
          <div
            style={{
              display: 'flex',
              gap: '14px',
              width: 'max-content',
              animation: 'marqueeSlowLeft 86s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
              marginBottom: '14px',
              willChange: 'transform',
            }}
          >
            {row2Partners.map((item) => renderCard(item, 'r2-s1'))}
            {row2Partners.map((item) => renderCard(item, 'r2-s2'))}
            {row2Partners.map((item) => renderCard(item, 'r2-s3'))}
          </div>

          {/* Row 3: Slow Leftward Scrolling in SAME direction (92s) */}
          <div
            style={{
              display: 'flex',
              gap: '14px',
              width: 'max-content',
              animation: 'marqueeSlowLeft 92s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
              willChange: 'transform',
            }}
          >
            {row3Partners.map((item) => renderCard(item, 'r3-s1'))}
            {row3Partners.map((item) => renderCard(item, 'r3-s2'))}
            {row3Partners.map((item) => renderCard(item, 'r3-s3'))}
          </div>
        </div>
      )}

      {/* Full Grid Mode */}
      {viewMode === 'grid' && (
        <div className="wrap" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '14px', marginBottom: '40px' }}>
            {filteredPartners.map((item) => renderCard(item, 'grid'))}
          </div>
        </div>
      )}

      {filteredPartners.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px 0', color: '#94a3b8' }}>
          {locale === 'zh' ? '未找到符合条件的战略合作伙伴，请尝试其他关键词。' : 'No matching strategic partners found. Try another search term.'}
        </div>
      )}

      {/* Embedded CSS for smooth slow unidirectional marquee animation */}
      <style>{`
        @keyframes marqueeSlowLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-33.333333%), 0, 0);
          }
        }
      `}</style>

      {/* Bottom CTA */}
      <div className="wrap" style={{ maxWidth: '1240px', margin: '40px auto 0', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.15), rgba(30, 41, 59, 0.7))', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '12px', padding: '24px 30px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          <div>
            <h3 style={{ font: '800 19px var(--display)', color: '#f8fafc', margin: '0 0 6px' }}>
              {locale === 'zh' ? '携手飞驰电气，加入全球电力装备战略协同生态' : 'Collaborate with Feichi: Join Our Global Substation Ecosystem'}
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0, maxWidth: '680px' }}>
              {locale === 'zh'
                ? '我们为全球 EPC 承包商、矿山业主与电网公司提供完整的资质文件、成套业绩清单及国际第三方型式试验报告。'
                : 'We provide full vendor qualification dossiers, engineering project reference lists, and certified type-test reports for global EPC contractors, mining operators, and grid utilities.'}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/8615566206930?text=${encodeURIComponent('Hello Henry, we are interested in exploring OEM/EPC strategic partnership and reviewing Feichi vendor qualification files.')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '13.5px',
                textDecoration: 'none',
              }}
            >
              <MessageCircle size={16} /> {locale === 'zh' ? 'WhatsApp 咨询合作 (Henry)' : 'Inquire via WhatsApp'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
