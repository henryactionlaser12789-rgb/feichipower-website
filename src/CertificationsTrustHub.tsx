import { useState, useMemo } from 'react';
import { certificationsList, type CertificationItem } from './galleryData';
import { ShieldCheck, Award, FileText, CheckCircle2, Download, MessageCircle, ExternalLink, X, Search, Zap, Sparkles } from 'lucide-react';

type Locale = 'zh' | 'en' | 'ja' | 'es' | 'ru';
type CertCategory = 'all' | 'international' | 'national' | 'energy' | 'type_test' | 'patent';

export function CertificationsTrustHub({ locale }: { locale: Locale }) {
  const [activeTab, setActiveTab] = useState<CertCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewImage, setPreviewImage] = useState<CertificationItem | null>(null);

  const tabLabels: Record<CertCategory, Record<Locale, string>> = {
    all: {
      zh: '全部权威资质与型式试验 (22+)',
      en: 'All Authoritative Accreditations & Reports (22+)',
      ja: 'すべての認証・型式試験報告 (22+)',
      es: 'Todas las Certificaciones y Ensayos (22+)',
      ru: 'Все сертификаты и протоколы испытаний (22+)',
    },
    energy: {
      zh: '国家电网与南方电网资格预审准入 (SGCC / CSG)',
      en: 'State Grid & Southern Grid Prequalification (SGCC/CSG)',
      ja: '国家電網・南方電網 入札資格証明 (SGCC/CSG)',
      es: 'Homologación State Grid y CSG (SGCC/CSG)',
      ru: 'Квалификация ПАО «Россети» / SGCC и CSG',
    },
    type_test: {
      zh: '国家高压质检中心型式试验报告 (NHVS / CTQC / IEC)',
      en: 'National High-Voltage Lab Type-Test Reports (NHVS / IEC)',
      ja: '国家高圧検査センター 型式試験報告書 (NHVS/IEC)',
      es: 'Informes de Ensayos de Tipo de Laboratorio Nacional (IEC)',
      ru: 'Протоколы типовых испытаний КРУ/КТП/ТМГ (МЭК/ГОСТ)',
    },
    international: {
      zh: 'ISO 三大管理体系国际认证 (ISO 9001 / 14001 / 45001)',
      en: 'ISO Integrated Management Certifications (9001/14001/45001)',
      ja: 'ISO統合マネジメント国際認証 (9001/14001/45001)',
      es: 'Certificaciones Integradas ISO (9001/14001/45001)',
      ru: 'Международные сертификаты ISO 9001 / 14001 / 45001',
    },
    national: {
      zh: '营业执照(1.01亿) / 承装(修、试)电力许可证 / AAA资信',
      en: 'Business License (RMB 101M) / Power Permit / AAA Credit',
      ja: '営業許可証(1.01億元) / 電力工事許可 / AAA格付',
      es: 'Licencia Comercial (101M RMB) / Permiso Eléctrico / AAA',
      ru: 'Лицензия (101 млн юаней) / Энерголицензия / Рейтинг AAA',
    },
    patent: {
      zh: '国家发明与实用新型专利 (CNIPA)',
      en: 'National Invention & Utility Patents (CNIPA)',
      ja: '国家発明特許・実用新案 (CNIPA)',
      es: 'Patentes de Invención y Modelos (CNIPA)',
      ru: 'Патенты на изобретения и полезные модели (CNIPA)',
    },
  };

  const tagColorMap: Record<string, { bg: string; border: string; text: string; label: Record<Locale, string> }> = {
    international: {
      bg: 'rgba(56, 189, 248, 0.12)',
      border: 'rgba(56, 189, 248, 0.4)',
      text: '#38bdf8',
      label: { zh: '国际授权 / CE', en: 'GLOBAL LICENSE / CE', ja: '国際ライセンス / CE', es: 'LICENCIA GLOBAL', ru: 'ЛИЦЕНЗИЯ / CE' },
    },
    national: {
      bg: 'rgba(234, 179, 8, 0.12)',
      border: 'rgba(234, 179, 8, 0.4)',
      text: '#eab308',
      label: { zh: '国家级荣誉', en: 'NATIONAL HONOR', ja: '国家級栄誉', es: 'HONOR NACIONAL', ru: 'ГОС. НАГРАДА' },
    },
    energy: {
      bg: 'rgba(34, 197, 94, 0.12)',
      border: 'rgba(34, 197, 94, 0.4)',
      text: '#22c55e',
      label: { zh: '节能与高能效', en: 'ENERGY GRADE 1/2', ja: '省エネ高効率', es: 'ALTA EFICIENCIA', ru: 'ЭНЕРГОЭФФЕКТИВНОСТЬ' },
    },
    type_test: {
      bg: 'rgba(249, 115, 22, 0.12)',
      border: 'rgba(249, 115, 22, 0.4)',
      text: '#f97316',
      label: { zh: '型式试验 KEMA', en: 'TYPE-TEST REPORT', ja: '型式試験報告', es: 'ENSAYO DE TIPO', ru: 'ТИПОВЫЕ ИСПЫТАНИЯ' },
    },
    patent: {
      bg: 'rgba(168, 85, 247, 0.12)',
      border: 'rgba(168, 85, 247, 0.4)',
      text: '#c084fc',
      label: { zh: '国家专利', en: 'PATENT IP', ja: '国家特許', es: 'PATENTE ZL', ru: 'ГОС. ПАТЕНТ' },
    },
  };

  const countsByCategory = useMemo(() => {
    const counts: Record<CertCategory, number> = {
      all: certificationsList.length,
      international: 0,
      national: 0,
      energy: 0,
      type_test: 0,
      patent: 0,
    };
    certificationsList.forEach((c) => {
      if (counts[c.category] !== undefined) {
        counts[c.category]++;
      }
    });
    return counts;
  }, []);

  const filtered = useMemo(() => {
    return certificationsList.filter((c) => {
      const matchCat = activeTab === 'all' || c.category === activeTab;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        (c.title[locale] && c.title[locale].toLowerCase().includes(q)) ||
        (c.title.en && c.title.en.toLowerCase().includes(q)) ||
        (c.title.zh && c.title.zh.toLowerCase().includes(q)) ||
        c.issuer.toLowerCase().includes(q) ||
        c.standard.toLowerCase().includes(q) ||
        (c.code && c.code.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });
  }, [activeTab, searchQuery, locale]);

  const titleMap: Record<Locale, string> = {
    zh: '权威资质认证、战略授权与国家级型式试验背书中心',
    en: 'Authoritative Accreditations, Strategic Licenses & Type-Test Reports',
    ja: '権威ある公的認証・戦略的ライセンス・国家型式試験センター',
    es: 'Centro de Certificaciones Oficiales, Licencias y Ensayos de Tipo',
    ru: 'Официальные аккредитации, партнерские лицензии и протоколы испытаний',
  };

  const subtitleMap: Record<Locale, string> = {
    zh: '沈阳飞驰电气荣获国家级专精特新“小巨人”企业、国家高新技术企业、辽宁省制造业单项冠军；持有施耐德 BlokSeT/PrismaE、西门子 SIBOARD、ABB MNS2.0/MDmax/UniSafe 官方战略合作授权；全系出海设备具备欧盟 CE 认证、ISO 国际体系及国家高压质检中心权威型式试验报告。',
    en: 'Feichi Power is recognized as a National "Little Giant" and High-Tech Enterprise; holds authorized strategic partnership licenses from Schneider Electric, Siemens, and ABB; all export equipment carries EU CE directives, ISO management standards, and National High-Voltage Quality Inspection Type-Test Reports.',
    ja: '国家級「専精特新リトルジャイアント」企業・ハイテク企業認定。シュナイダー（BlokSeT/PrismaE）、シーメンス（SIBOARD）、ABB（MNS2.0/UniSafe）の公式パートナー認証を保有。全輸出製品が欧州CE指令・ISO・国家型式試験報告書を完備。',
    es: 'Feichi Power cuenta con el reconocimiento de "Pequeño Gigante" Nacional y Empresa de Alta Tecnología; posee licencias de socios estratégicos autorizados de Schneider Electric, Siemens y ABB; toda la gama de exportación cuenta con directivas CE UE, ISO y ensayos de tipo oficiales.',
    ru: 'Feichi Power имеет статус национального «Малого гиганта» и высокотехнологичного предприятия; обладает авторизационными лицензиями Schneider Electric, Siemens и ABB; все экспортные линейки сертифицированы по директивам CE (ЕС), ISO и протоколам типовых испытаний.',
  };

  return (
    <section id="certifications-hub" className="section cert-hub-section" style={{ background: '#030712', borderTop: '1px solid rgba(56, 189, 248, 0.2)', padding: '80px 0' }}>
      <div className="wrap" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.3)', color: '#eab308', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
            <Award size={14} /> GLOBAL STANDARDS, SCHNEIDER/SIEMENS/ABB LICENSES & NATIONAL PATENTS
          </div>
          <h2 style={{ font: '900 36px/1.2 var(--display, "Space Grotesk", sans-serif)', color: '#f8fafc', margin: '0 0 16px' }}>
            {titleMap[locale]}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '14.5px', maxWidth: '880px', margin: '0 auto', lineHeight: 1.65 }}>
            {subtitleMap[locale]}
          </p>
        </div>

        {/* Search & Filters */}
        <div style={{ maxWidth: '640px', margin: '0 auto 28px', position: 'relative' }}>
          <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={locale === 'zh' ? '搜索证书名称、发证机构、授权编号 (BlokSeT, ABB, CE, ISO, 专精特新)...' : 'Search certificate, authority, code (Schneider, ABB, CE, ISO, Patent)...'}
            style={{
              width: '100%',
              padding: '12px 16px 12px 44px',
              background: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: '10px',
              color: '#f8fafc',
              fontSize: '13.5px',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '36px' }}>
          {(['all', 'international', 'national', 'energy', 'type_test', 'patent'] as const).map((tab) => {
            const isActive = activeTab === tab;
            const count = countsByCategory[tab];
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: isActive ? 700 : 500,
                  background: isActive ? 'linear-gradient(135deg, #0284c7, #0369a1)' : 'rgba(15, 23, 42, 0.8)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  border: isActive ? '1px solid #38bdf8' : '1px solid #334155',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>{tabLabels[tab][locale]}</span>
                <span style={{ fontSize: '11px', padding: '2px 7px', borderRadius: '12px', background: isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(51, 65, 85, 0.8)', color: isActive ? '#ffffff' : '#cbd5e1' }}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certificates Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {filtered.map((cert) => {
            const tagStyle = tagColorMap[cert.category] || tagColorMap.international;
            return (
              <div
                key={cert.id}
                style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: cert.highlight ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid #1e293b',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
                  boxShadow: cert.highlight ? '0 4px 20px rgba(2, 132, 199, 0.15)' : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.6)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = cert.highlight ? 'rgba(56, 189, 248, 0.4)' : '#1e293b';
                  e.currentTarget.style.boxShadow = cert.highlight ? '0 4px 20px rgba(2, 132, 199, 0.15)' : 'none';
                }}
              >
                {/* Upper Box: Image + Tag */}
                <div
                  style={{
                    display: 'flex',
                    padding: '16px',
                    gap: '14px',
                    borderBottom: '1px solid rgba(30, 41, 59, 0.8)',
                    background: 'rgba(2, 6, 23, 0.4)',
                  }}
                >
                  <div
                    style={{
                      width: '84px',
                      height: '116px',
                      flexShrink: 0,
                      background: '#0f172a',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    }}
                    onClick={() => setPreviewImage(cert)}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title[locale] || cert.title.en}
                      loading="lazy"
                      decoding="async"
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />
                  </div>

                  <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                      <span
                        style={{
                          fontSize: '10.5px',
                          fontWeight: 700,
                          padding: '2px 8px',
                          borderRadius: '4px',
                          background: tagStyle.bg,
                          border: `1px solid ${tagStyle.border}`,
                          color: tagStyle.text,
                          letterSpacing: '0.04em',
                        }}
                      >
                        {tagStyle.label[locale] || tagStyle.label.en}
                      </span>
                      {cert.code && (
                        <span style={{ fontSize: '10.5px', color: '#94a3b8', fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          #{cert.code}
                        </span>
                      )}
                    </div>

                    <h3
                      style={{
                        font: '700 14.5px/1.35 var(--display, "Space Grotesk", sans-serif)',
                        color: '#f8fafc',
                        margin: '0 0 8px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {cert.title[locale] || cert.title.en}
                    </h3>

                    <div style={{ fontSize: '11.5px', color: '#94a3b8', lineHeight: 1.4, marginTop: 'auto' }}>
                      <span style={{ color: '#64748b' }}>机构 / 颁发：</span>
                      <strong style={{ color: '#cbd5e1', fontWeight: 500 }}>{cert.issuer}</strong>
                    </div>
                  </div>
                </div>

                {/* Lower Box: Standard + Action */}
                <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', gap: '10px' }}>
                  <div style={{ fontSize: '11.5px', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.08)', padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(56, 189, 248, 0.2)', lineHeight: 1.35 }}>
                    <ShieldCheck size={13} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '5px' }} />
                    <strong style={{ color: '#e2e8f0' }}>标准 / 规程：</strong> {cert.standard}
                  </div>

                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button
                      type="button"
                      onClick={() => setPreviewImage(cert)}
                      style={{
                        flex: 1,
                        padding: '7px 10px',
                        background: 'rgba(30, 41, 59, 0.8)',
                        border: '1px solid #334155',
                        borderRadius: '6px',
                        color: '#e2e8f0',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                      }}
                    >
                      <ExternalLink size={13} /> {locale === 'zh' ? '查看认证原件' : 'View Certificate'}
                    </button>
                    <a
                      href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, please send us the official stamped PDF / authorization agreement of: "${cert.title.en}" (Ref: ${cert.code || cert.standard}) for our project tender evaluation.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '7px 12px',
                        background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                        border: 'none',
                        borderRadius: '6px',
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Download size={13} /> {locale === 'zh' ? '索取盖章原件' : 'Request PDF'}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for previewing certificate */}
        {previewImage && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.88)',
              backdropFilter: 'blur(10px)',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={() => setPreviewImage(null)}
          >
            <div
              style={{
                background: '#0f172a',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '14px',
                maxWidth: '920px',
                width: '100%',
                maxHeight: '92vh',
                overflow: 'auto',
                padding: '24px',
                position: 'relative',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'center' }}>
                <div style={{ background: '#020617', padding: '12px', borderRadius: '8px', border: '1px solid #1e293b', textAlign: 'center' }}>
                  <img
                    src={previewImage.image}
                    alt={previewImage.title.en}
                    style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain', borderRadius: '4px' }}
                  />
                  <span style={{ fontSize: '11px', color: '#64748b', display: 'block', marginTop: '6px' }}>
                    {locale === 'zh' ? '官方权威资质存根影印件（已作安全装帧）' : 'Official Certificate Archive Record'}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <h3 style={{ color: '#f8fafc', font: '800 20px/1.3 var(--display, "Space Grotesk", sans-serif)', margin: 0 }}>
                    {previewImage.title[locale] || previewImage.title.en}
                  </h3>

                  <div style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px solid #334155', borderRadius: '8px', padding: '14px' }}>
                    <div style={{ fontSize: '12.5px', color: '#94a3b8', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                      <span>发证/认可机构：</span>
                      <strong style={{ color: '#e2e8f0', textAlign: 'right' }}>{previewImage.issuer}</strong>
                    </div>
                    {previewImage.code && (
                      <div style={{ fontSize: '12.5px', color: '#94a3b8', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                        <span>证书/专利编号：</span>
                        <strong style={{ color: '#38bdf8', fontFamily: 'monospace' }}>{previewImage.code}</strong>
                      </div>
                    )}
                    <div style={{ fontSize: '12.5px', color: '#94a3b8', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                      <span>适用技术标准：</span>
                      <strong style={{ color: '#f59e0b', textAlign: 'right' }}>{previewImage.standard}</strong>
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#94a3b8', display: 'flex', justifyContent: 'space-between' }}>
                      <span>适用招标工况：</span>
                      <strong style={{ color: '#cbd5e1', textAlign: 'right' }}>海外电网、变电站、工矿配电投标技术协议</strong>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/8615566206930?text=${encodeURIComponent(`Hello Henry, please send us the official stamped PDF copy of Feichi test certification: "${previewImage.title.en}" (${previewImage.standard}, Ref: ${previewImage.code || 'N/A'}) for our engineering audit & tender.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                      color: '#ffffff',
                      padding: '12px 18px',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      textDecoration: 'none',
                    }}
                  >
                    <MessageCircle size={16} /> {locale === 'zh' ? '向总工 Henry 索取该资质高清盖章 PDF 与技术协议' : 'Request Official Stamped PDF & Technical Agreement'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

