import React from 'react';

interface TechDiagramProps {
  type: 'substation' | 'switchgear' | 'transformer' | 'cabin' | 'distribution' | 'nitrogen' | 'svg' | 'factory' | 'sf6free';
  title?: string;
  subtitle?: string;
  className?: string;
}

export const TechnicalDrawingPlaceholder: React.FC<TechDiagramProps> = ({
  type,
  title,
  subtitle,
  className = '',
}) => {
  const getScheme = () => {
    switch (type) {
      case 'sf6free':
        return {
          tag: 'SF6-FREE CLEAN AIR C-GIS / КРУЭ',
          code: 'IEC 62271-200 / EU F-GAS / ГОСТ 14693',
          p1: 'HERMETIC LASER-WELDED AISI 304 TANK (IP67)',
          p2: 'VACUUM INTERRUPTER & DRY AIR (GWP=0)',
          p3: 'INTERNAL ARC RELIEF & SCADA (IAC AFLR 31.5kA)',
          accent: '#10b981',
        };
      case 'substation':
        return {
          tag: 'PREFAB SUBSTATION / КТПН',
          code: 'IEC 62271-202 / ГОСТ 14695',
          p1: 'HV SWITCHGEAR COMPARTMENT (10-35kV)',
          p2: 'HERMETIC TRANSFORMER BAY (ТМГ/ТСЗЛ)',
          p3: 'LV DISTRIBUTION & SCADA PANEL (0.4kV)',
          accent: '#00e5ff',
        };
      case 'switchgear':
        return {
          tag: 'METAL-CLAD SWITCHGEAR / КРУ',
          code: 'IEC 62271-200 / ГОСТ 14693',
          p1: 'BUSBAR & CABLE COMPARTMENT',
          p2: 'VACUUM CIRCUIT BREAKER TROLLEY',
          p3: 'MICROPROCESSOR RELAY PROTECTION',
          accent: '#f59e0b',
        };
      case 'transformer':
        return {
          tag: 'POWER TRANSFORMER / ТМГ/ТСЛ',
          code: 'IEC 60076 / ГОСТ 52719',
          p1: 'HIGH-VOLTAGE COIL (COPPER/ALU)',
          p2: 'AMORPHOUS / SILICON CORE',
          p3: 'TEMPERATURE & PRESSURE RELIEF',
          accent: '#10b981',
        };
      case 'cabin':
        return {
          tag: 'MODULAR E-HOUSE / БМЗ',
          code: 'ГОСТ 15150 УХЛ1 / -60°C ARCTIC',
          p1: 'FIRE-PROOF SANDWICH SHELL (100mm)',
          p2: 'INTEGRATED HVAC & CLIMATE CONTROL',
          p3: 'PLUG-AND-PLAY TERMINAL BAY',
          accent: '#38bdf8',
        };
      case 'svg':
        return {
          tag: 'DYNAMIC STATCOM / SVG (УКРМ)',
          code: 'IEEE 519 / ГОСТ Р 58087',
          p1: 'IGBT H-BRIDGE INVERTER CHAIN',
          p2: 'DSP HIGH-SPEED CONTROLLER (<5ms)',
          p3: 'ACTIVE HARMONIC FILTER (2-25th)',
          accent: '#a855f7',
        };
      case 'nitrogen':
        return {
          tag: 'PSA NITROGEN SYSTEM / АЗОТ',
          code: '99.999% PURITY / EX D I MB',
          p1: 'CARBON MOLECULAR SIEVE TOWER A',
          p2: 'PRESSURE SWING ADSORPTION TOWER B',
          p3: 'GAS BUFFER & PURITY ANALYZER',
          accent: '#06b6d4',
        };
      default:
        return {
          tag: 'FEICHI POWER ENGINEERING',
          code: 'GLOBAL EPC INFRASTRUCTURE',
          p1: 'PRECISION CNC SHEET METAL LINE',
          p2: '100,000-GRADE CLEANROOM WINDING',
          p3: 'FULL-LOAD DIELECTRIC TEST BAY',
          accent: '#00e5ff',
        };
    }
  };

  const s = getScheme();

  return (
    <div
      className={`tech-drawing-card ${className}`}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '220px',
        background: 'linear-gradient(135deg, #050d1a 0%, #02060d 100%)',
        border: '1px solid rgba(0, 229, 255, 0.25)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Background CAD Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(to right, rgba(0, 229, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 229, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
        }}
      />

      {/* Blueprint Schematic Lines SVG */}
      <svg
        style={{
          position: 'absolute',
          right: '10px',
          bottom: '10px',
          width: '65%',
          height: '75%',
          opacity: 0.18,
          pointerEvents: 'none',
        }}
        viewBox="0 0 200 120"
        fill="none"
        stroke={s.accent}
        strokeWidth="1.2"
      >
        <rect x="10" y="10" width="180" height="100" rx="4" strokeDasharray="4 2" />
        <line x1="10" y1="40" x2="190" y2="40" />
        <line x1="70" y1="40" x2="70" y2="110" />
        <line x1="130" y1="40" x2="130" y2="110" />
        <circle cx="40" cy="75" r="18" strokeDasharray="2 2" />
        <circle cx="100" cy="75" r="18" />
        <circle cx="160" cy="75" r="18" strokeDasharray="3 3" />
        <path d="M 40 25 L 100 25 L 160 25" strokeWidth="2" />
      </svg>

      {/* Top Header Label */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span
          style={{
            font: '800 11px/1 var(--mono, monospace)',
            letterSpacing: '0.12em',
            color: s.accent,
            padding: '4px 8px',
            background: 'rgba(0, 229, 255, 0.1)',
            border: `1px solid ${s.accent}40`,
            borderRadius: '3px',
          }}
        >
          {s.tag}
        </span>
        <span style={{ font: '600 10.5px/1 var(--mono, monospace)', color: '#64748b' }}>{s.code}</span>
      </div>

      {/* Center Title & Specs */}
      <div style={{ position: 'relative', zIndex: 2, margin: '14px 0' }}>
        <h4 style={{ margin: 0, font: '800 17px/1.2 var(--display, sans-serif)', color: '#ffffff', letterSpacing: '-0.02em' }}>
          {title || s.tag}
        </h4>
        {subtitle && (
          <p style={{ margin: '6px 0 0', font: '500 12.5px/1.4 var(--body, sans-serif)', color: '#94a3b8' }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom Technical Indicators */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          paddingTop: '10px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ font: '600 9.5px/1.3 var(--mono, monospace)', color: '#cbd5e1' }}>
          <span style={{ color: s.accent }}>▸ </span>{s.p1}
        </div>
        <div style={{ font: '600 9.5px/1.3 var(--mono, monospace)', color: '#cbd5e1' }}>
          <span style={{ color: s.accent }}>▸ </span>{s.p2}
        </div>
        <div style={{ font: '600 9.5px/1.3 var(--mono, monospace)', color: '#cbd5e1' }}>
          <span style={{ color: s.accent }}>▸ </span>{s.p3}
        </div>
      </div>
    </div>
  );
};
