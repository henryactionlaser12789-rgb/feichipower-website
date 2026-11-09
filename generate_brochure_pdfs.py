import os
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY

def build_pdf(filename, lang_code, title_text, subtitle_text, sections):
    doc = SimpleDocTemplate(
        filename,
        pagesize=A4,
        leftMargin=36,
        rightMargin=36,
        topMargin=40,
        bottomMargin=40
    )
    
    styles = getSampleStyleSheet()
    
    c_primary = colors.HexColor("#0c2340")
    c_accent = colors.HexColor("#d97706")
    c_dark = colors.HexColor("#1e293b")
    c_muted = colors.HexColor("#64748b")
    c_light = colors.HexColor("#f8fafc")
    c_border = colors.HexColor("#cbd5e1")

    title_style = ParagraphStyle(
        'CoverTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=c_primary,
        alignment=TA_CENTER
    )
    
    subtitle_style = ParagraphStyle(
        'CoverSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=c_accent,
        alignment=TA_CENTER
    )
    
    h1_style = ParagraphStyle(
        'SecHeading',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=15,
        leading=18,
        textColor=c_primary,
        spaceBefore=14,
        spaceAfter=6
    )

    h2_style = ParagraphStyle(
        'SubSecHeading',
        parent=styles['Heading3'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=c_accent,
        spaceBefore=8,
        spaceAfter=4
    )

    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=c_dark,
        spaceAfter=6
    )

    table_header_style = ParagraphStyle(
        'THeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=colors.white,
        alignment=TA_CENTER
    )

    table_cell_style = ParagraphStyle(
        'TCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=c_dark
    )

    table_cell_bold = ParagraphStyle(
        'TCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11.5,
        textColor=c_primary
    )

    story = []
    
    # Header Banner
    header_data = [
        [Paragraph(f"<b>FEICHI ELECTRICAL EQUIPMENT CO., LTD.</b>", ParagraphStyle('H1', fontName='Helvetica-Bold', fontSize=10, textColor=c_primary)),
         Paragraph(f"<b>EST. 2004 | CAPITAL: RMB 101M</b>", ParagraphStyle('H2', fontName='Helvetica-Bold', fontSize=9, textColor=c_accent, alignment=TA_RIGHT))]
    ]
    t_head = Table(header_data, colWidths=[320, 200])
    t_head.setStyle(TableStyle([
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LINEBELOW', (0,0), (-1,-1), 1, c_border),
    ]))
    story.append(t_head)
    story.append(Spacer(1, 25))
    
    # Title
    story.append(Paragraph(title_text, title_style))
    story.append(Spacer(1, 8))
    story.append(Paragraph(subtitle_text, subtitle_style))
    story.append(Spacer(1, 20))
    
    # Overview Box
    overview_text = (
        "<b>Company:</b> Shenyang Feichi Electrical Equipment Co., Ltd.<br/>"
        "<b>Headquarters & Manufacturing Plant:</b> 63,000 m² Modernized Industrial Base, Shenyang High-Tech Zone, Liaoning, China.<br/>"
        "<b>Certifications & Licenses:</b> ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, IEC 62271-202, ГОСТ 14695-80, Schneider Electric Blokset Official License, ABB UniSafe / MDmax Official Strategic License, Ex d I Mb Mining Explosion-Proof.<br/>"
        "<b>Global Track Record:</b> 80+ Major Power Grid & Heavy Industrial Projects Across 40+ Countries."
    )
    t_overview = Table([[Paragraph(overview_text, body_style)]], colWidths=[520])
    t_overview.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), c_light),
        ('BOX', (0,0), (-1,-1), 1, c_border),
        ('PADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(t_overview)
    story.append(Spacer(1, 15))
    
    # Sections
    for sec in sections:
        story.append(Paragraph(sec['title'], h1_style))
        if 'desc' in sec and sec['desc']:
            story.append(Paragraph(sec['desc'], body_style))
            
        if 'table' in sec:
            t_rows = []
            # Header row
            header_cols = [Paragraph(f"<b>{h}</b>", table_header_style) for h in sec['table']['headers']]
            t_rows.append(header_cols)
            # Data rows
            for row in sec['table']['rows']:
                r_cols = []
                for idx, c in enumerate(row):
                    style = table_cell_bold if idx == 0 else table_cell_style
                    r_cols.append(Paragraph(str(c), style))
                t_rows.append(r_cols)
            
            widths = sec['table'].get('widths', [140, 100, 140, 140])
            tab = Table(t_rows, colWidths=widths)
            tab.setStyle(TableStyle([
                ('BACKGROUND', (0,0), (-1,0), c_primary),
                ('ALIGN', (0,0), (-1,-1), 'LEFT'),
                ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
                ('GRID', (0,0), (-1,-1), 0.5, c_border),
                ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, c_light]),
                ('PADDING', (0,0), (-1,-1), 5),
            ]))
            story.append(tab)
            story.append(Spacer(1, 10))
            
    # Contact Footer
    story.append(Spacer(1, 15))
    contact_box = [
        [Paragraph("<b>GLOBAL ENGINEERING CONTACT & INQUIRIES</b>", ParagraphStyle('C1', fontName='Helvetica-Bold', fontSize=10, textColor=c_primary)),
         Paragraph("<b>24H SLD REVIEW & TENDER DOSSIER</b>", ParagraphStyle('C2', fontName='Helvetica-Bold', fontSize=9, textColor=c_accent, alignment=TA_RIGHT))],
        [Paragraph("<b>Technical Director:</b> Henry | <b>Email:</b> henry@feichipower.com<br/><b>Tel / WhatsApp / Telegram:</b> +86 155 6620 6930 | <b>Official Portal:</b> https://feichipower.com", body_style), ""]
    ]
    t_contact = Table(contact_box, colWidths=[360, 160])
    t_contact.setStyle(TableStyle([
        ('SPAN', (0,1), (1,1)),
        ('BACKGROUND', (0,0), (-1,-1), c_light),
        ('BOX', (0,0), (-1,-1), 1, c_accent),
        ('PADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(t_contact)

    doc.build(story)
    print(f"Generated {filename} successfully ({os.path.getsize(filename)} bytes)")

# 1. English Data
en_sections = [
    {
        'title': "1. 10kV–35kV Prefabricated Compact Box-Type Substations (2КТПН / БМЗ)",
        'desc': "Engineered to IEC 62271-202 and ГОСТ 14695-80. Packaged outdoor substation integrating medium-voltage switchgear, hermetic/cast resin transformer (50kVA-3150kVA), and low-voltage distribution boards. Options for -60°C Siberian Arctic permafrost operation (100mm PU insulation + automated PTC heating).",
        'table': {
            'headers': ["Model / Type", "Rated Voltage", "Capacity Range", "Enclosure & Climate Protection"],
            'widths': [130, 90, 110, 190],
            'rows': [
                ["YB-10/0.4 European", "10 kV / 0.4 kV", "50 - 2500 kVA", "IP54 / Composite / Landscape Style"],
                ["ZGS-35/0.4 Pad-Mount", "35 kV / 0.4 kV", "200 - 3150 kVA", "Dead-front, compact oil-submerged switch"],
                ["2КТПН-35/10 Arctic", "35 kV / 10 kV / 0.4 kV", "630 - 2500 kVA", "09Г2С Cor-Ten steel, -60°C УХЛ1, 100mm PU"],
                ["Solar PV Skid 35kV", "35 kV / 0.8 kV", "1000 - 3150 kVA", "1500V Inverter Integration, C5-M Anti-Corrosion"]
            ]
        }
    },
    {
        'title': "2. MV/LV Switchgear & Official Schneider / ABB Authorized Panels",
        'desc': "Four-compartment segregated metal-clad switchgear assemblies with 5-prevention mechanical interlocking, IAC AFLR 31.5kA internal arc classification, and ultrafast optical arc protection (<7ms).",
        'table': {
            'headers': ["Equipment Type", "Standard / License", "Rated Ratings", "Key Features & Protection"],
            'widths': [140, 110, 110, 160],
            'rows': [
                ["KYN28A-12 Switchgear", "IEC 62271-200 / GB", "12 kV / 4000A / 31.5kA", "LSC2B-PM, withdrawable VS1/VD4 cassette"],
                ["Schneider Blokset LV", "Schneider Official Lic.", "0.4-0.69 kV / Up to 6300A", "Form 4b segregation, MCC draw-out, Smart SCADA"],
                ["ABB UniSafe MV Panel", "ABB Authorized Lic.", "12-24 kV / 4000A / 31.5kA", "Air-insulated, VD4 circuit breaker, AFLR arc safe"],
                ["ABB MDmax Digital LV", "ABB Strategic Partner", "0.4 kV / Up to 6300A", "Wireless busbar temp monitoring, cloud diagnostics"]
            ]
        }
    },
    {
        'title': "3. Power Transformers (Cast Resin Dry-Type & Hermetic Oil)",
        'desc': "Vacuum quartz-sand thin-insulation epoxy casting plant guaranteeing partial discharge < 5pC (Nomex Class H 180°C), and corrugated hermetically sealed oil transformers (S13-S22).",
        'table': {
            'headers': ["Series / Standard", "Type", "Rated Capacity", "Performance & Guarantee"],
            'widths': [130, 110, 110, 170],
            'rows': [
                ["SCB14 / SCB18 Dry", "Epoxy Cast Resin", "50 - 3150 kVA", "Partial discharge < 5pC, Grade-1/2 Efficiency"],
                ["ТМГ / S13-S22 Oil", "Hermetic Corrugated", "30 - 2500 kVA", "Zero moisture ingress, 30+ yr maintenance-free"],
                ["Mining KBSGZY", "Flameproof Dry", "100 - 1600 kVA", "Ex d I Mb certified, underground mobile skid"]
            ]
        }
    },
    {
        'title': "4. FC-N2 Smart Mining & Industrial PSA Nitrogen Systems",
        'desc': "Proprietary Pressure Swing Adsorption (PSA) nitrogen generators for underground coal mine inerting (MT/T 750 / Ex d I Mb) and petrochemical pipeline purging.",
        'table': {
            'headers': ["Model Series", "Flow Capacity", "N2 Purity", "Safety & Application"],
            'widths': [120, 110, 110, 180],
            'rows': [
                ["FC-N2 Mining Mobile", "100 - 2500 Nm³/h", "95% - 99.0%", "Ex d I Mb explosion-proof, goaf fire suppression"],
                ["FC-N2 Industrial Skid", "50 - 1500 Nm³/h", "99.0% - 99.999%", "Petrochemical purging, metallurgical laser cutting"]
            ]
        }
    }
]

# 2. Spanish Data
es_sections = [
    {
        'title': "1. Subestaciones Transformadoras Prefabricadas Compactas 10kV–35kV (КТПН / БМЗ)",
        'desc': "Diseñadas y certificadas según normas IEC 62271-202 y ГОСТ 14695-80. Integran celdas de media tensión, transformador de potencia hermético o seco (50kVA-3150kVA) y cuadros de distribución de baja tensión. Opciones árticas para operación a -60°C.",
        'table': {
            'headers': ["Modelo / Tipo", "Tensión Nominal", "Rango Capacidad", "Envolvente y Protección"],
            'widths': [130, 90, 110, 190],
            'rows': [
                ["YB-10/0.4 Modular", "10 kV / 0.4 kV", "50 - 2500 kVA", "IP54 / Acero Cor-Ten / Modular"],
                ["ZGS-35/0.4 Pad-Mount", "35 kV / 0.4 kV", "200 - 3150 kVA", "Frente muerto, interruptor sumergido"],
                ["2КТПН-35/10 Ártico", "35 kV / 10 kV / 0.4 kV", "630 - 2500 kVA", "Acero 09Г2С, -60°C УХЛ1, panel PU 100mm"],
                ["Skid Solar PV 35kV", "35 kV / 0.8 kV", "1000 - 3150 kVA", "Integración 1500V, anticorrosión C5-M"]
            ]
        }
    },
    {
        'title': "2. Celdas MT/BT y Cuadros Autorizados Schneider Electric / ABB",
        'desc': "Celdas blindadas con 4 compartimentos metálicos segregados (LSC2B-PM), enclavamientos mecánicos de seguridad, arco interno IAC AFLR 31.5kA y protección óptica ultrarrápida (<7ms).",
        'table': {
            'headers': ["Tipo de Cuadro", "Licencia / Norma", "Valores Nominales", "Características Clave"],
            'widths': [140, 110, 110, 160],
            'rows': [
                ["KYN28A-12 Celdas MT", "IEC 62271-200", "12 kV / 4000A / 31.5kA", "LSC2B-PM, interruptor extraíble VS1/VD4"],
                ["Schneider Blokset BT", "Licencia Oficial", "0.4-0.69 kV / Hasta 6300A", "Segregación Form 4b, CCM extraíble"],
                ["ABB UniSafe Celdas MT", "Licencia ABB", "12-24 kV / 4000A / 31.5kA", "Aislamiento en aire, interruptor VD4"],
                ["ABB MDmax Digital BT", "Socio Estratégico", "0.4 kV / Hasta 6300A", "Monitoreo térmico digital inalámbrico"]
            ]
        }
    },
    {
        'title': "3. Transformadores de Potencia (Resina Epoxi y Aceite Hermético)",
        'desc': "Colada al vacío con cuarzo que garantiza descargas parciales estrictamente inferiores a 5pC (Nomex Clase H 180°C) y transformadores de aceite hermético sin conservador (S13-S22).",
        'table': {
            'headers': ["Serie / Norma", "Tipo Aislamiento", "Capacidad", "Garantía de Rendimiento"],
            'widths': [130, 110, 110, 170],
            'rows': [
                ["SCB14 / SCB18 Seco", "Resina Epoxi", "50 - 3150 kVA", "Descargas parciales < 5pC, Clase H"],
                ["ТМГ / S13-S22 Aceite", "Hermético Ondulado", "30 - 2500 kVA", "Sin mantenimiento 30+ años, sellado total"],
                ["Minero KBSGZY", "Antideflagrante Seco", "100 - 1600 kVA", "Certificado Ex d I Mb, skid móvil minero"]
            ]
        }
    },
    {
        'title': "4. Sistemas de Generación de Nitrógeno PSA FC-N2",
        'desc': "Paquetes PSA de nitrógeno para minería subterránea de carbón (antideflagrante Ex d I Mb) y purga de tuberías petroquímicas e industriales.",
        'table': {
            'headers': ["Serie de Modelo", "Caudal Nm³/h", "Pureza N2", "Seguridad y Aplicación"],
            'widths': [120, 110, 110, 180],
            'rows': [
                ["FC-N2 Minero Móvil", "100 - 2500 Nm³/h", "95% - 99.0%", "Ex d I Mb antideflagrante, prevención de fuego"],
                ["FC-N2 Skid Industrial", "50 - 1500 Nm³/h", "99.0% - 99.999%", "Purga petroquímica, corte láser metalúrgico"]
            ]
        }
    }
]

# 3. Russian Data
ru_sections = [
    {
        'title': "1. Комплектные трансформаторные подстанции 10-35 кВ (КТПН, 2КТПН, БМЗ)",
        'desc': "Соответствие ГОСТ 14695-80, ГОСТ 15150-69 УХЛ1 и МЭК 62271-202. Подстанции наружной установки в утепленных блочно-модульных зданиях (БМЗ) из стали 09Г2С с сэндвич-панелями 100 мм и автоматическим микроклиматом для работы при температуре до -60°C.",
        'table': {
            'headers': ["Тип / Модель", "Ном. напряжение", "Мощность", "Климатическое исполнение и корпус"],
            'widths': [130, 90, 110, 190],
            'rows': [
                ["2КТПН-35/10/0.4 БМЗ", "35 / 10 / 0.4 кВ", "630 - 2500 кВА", "Сталь 09Г2С, УХЛ1 (-60°C), сэндвич 100 мм"],
                ["КТПН-10/0.4 Киосковая", "10 / 0.4 кВ", "100 - 1600 кВА", "IP54, тупиковая/проходная, воздушный/кабельный"],
                ["Солнечный скид 35 кВ", "35 / 0.8 кВ", "1000 - 3150 кВА", "Инверторный скид 1500В, защита C5-M"],
                ["E-House / БМЗ 110кВ", "35 - 110 кВ", "Индивидуально", "Встроенные КРУ, ТСН, ЩСУ, ОПС, СОПТ, АСУ ТП"]
            ]
        }
    },
    {
        'title': "2. КРУ 6-35 кВ и лицензионные шкафы Schneider Electric / ABB",
        'desc': "Комплектные распределительные устройства серии КРУ-2-10 / KYN28A с 4-секционным металлическим разделением (LSC2B-PM), локализацией дуги IAC AFLR 31.5 кА и оптической дуговой защитой (<7 мс).",
        'table': {
            'headers': ["Тип ячейки", "Стандарт / Лицензия", "Параметры", "Особенности и защита"],
            'widths': [140, 110, 110, 160],
            'rows': [
                ["КРУ KYN28A-12", "МЭК 62271-200 / ГОСТ", "10 кВ / 4000А / 31.5кА", "LSC2B-PM, выкатной элемент VS1/VD4/ISM"],
                ["Schneider Blokset 0.4", "Официальная лицензия", "0.4 кВ / до 6300А", "Секционирование Form 4b, выкатные блоки"],
                ["ABB UniSafe 10-24кВ", "Лицензия ABB", "10-24 кВ / 4000А", "Воздушная изоляция, вакуумный выключатель VD4"],
                ["ABB MDmax Интеллект.", "Партнерство ABB", "0.4 кВ / до 6300А", "Беспроводной термоконтроль шин, SCADA"]
            ]
        }
    },
    {
        'title': "3. Силовые трансформаторы (Сухие ТСЛ/ТСЗЛ и масляные ТМГ)",
        'desc': "Кварцнаполненная вакуумная заливка эпоксидной смолой с уровнем частичных разрядов < 5 пКл (Класс нагревостойкости H 180°C) и герметичные масляные трансформаторы ТМГ по ГОСТ 11677-85.",
        'table': {
            'headers': ["Серия / Стандарт", "Тип трансформатора", "Мощность", "Гарантия и надежность"],
            'widths': [130, 110, 110, 170],
            'rows': [
                ["ТСЗЛ / SCB14-18 Сухой", "Литая эпоксидная смола", "100 - 3150 кВА", "Частичные разряды < 5 пКл, 1-й класс энергоэфф."],
                ["ТМГ 10-35кВ Масляный", "Герметичный гофрированный", "50 - 2500 кВА", "Без расширителя, без обслуживания 30+ лет"],
                ["Шахтный КБСГЗЫ", "Взрывозащищенный сухой", "100 - 1600 кВА", "РВ 3В (Ex d I Mb), рудничное передвижное исполнение"]
            ]
        }
    },
    {
        'title': "4. Азотные станции PSA серии FC-N2 для шахт и промышленности",
        'desc': "Генераторы азота короткоцикловой безнагревной адсорбции (PSA) во взрывозащищенном исполнении (Ex d I Mb) для инертизации выработанного пространства угольных шахт и продувки трубопроводов.",
        'table': {
            'headers': ["Модель / Серия", "Производительность", "Чистота N2", "Назначение и взрывозащита"],
            'widths': [120, 110, 110, 180],
            'rows': [
                ["FC-N2 Рудничная", "100 - 2500 нм³/ч", "95% - 99.0%", "Ex d I Mb (РВ), тушение эндогенных пожаров в шахтах"],
                ["FC-N2 Промышленная", "50 - 1500 нм³/ч", "99.0% - 99.999%", "Нефтехимия, металлургия, лазерная резка металлов"]
            ]
        }
    }
]

# Generate all 5 files in both directories
files_to_generate = [
    ("feichipower/downloads/feichi_full_38p_brochure_en.pdf", "en", "2026 OFFICIAL EPC & TECHNICAL SPECIFICATION DOSSIER", "Prefabricated Substations (2КТПН/БМЗ), MV/LV Switchgear, Power Transformers & PSA Nitrogen Systems", en_sections),
    ("downloads/feichi_full_38p_brochure_en.pdf", "en", "2026 OFFICIAL EPC & TECHNICAL SPECIFICATION DOSSIER", "Prefabricated Substations (2КТПН/БМЗ), MV/LV Switchgear, Power Transformers & PSA Nitrogen Systems", en_sections),
    
    ("feichipower/downloads/feichi_full_38p_brochure_es.pdf", "es", "CATÁLOGO TÉCNICO OFICIAL CORPORATIVO FEICHI 2026", "Subestaciones Compactas (E-House/БМЗ), Celdas MT/BT, Transformadores y Generadores de Nitrógeno", es_sections),
    ("downloads/feichi_full_38p_brochure_es.pdf", "es", "CATÁLOGO TÉCNICO OFICIAL CORPORATIVO FEICHI 2026", "Subestaciones Compactas (E-House/БМЗ), Celdas MT/BT, Transformadores y Generadores de Nitrógeno", es_sections),

    ("feichipower/downloads/feichi_full_38p_brochure_ru.pdf", "ru", "ОФИЦИАЛЬНЫЙ ТЕХНИЧЕСКИЙ КАТАЛОГ ОБОРУДОВАНИЯ FEICHI 2026", "КТПН/БМЗ 10-35кВ, КРУ 6-35кВ, Трансформаторы ТМГ/ТСЗЛ, Лицензии Schneider/ABB, Азотные станции", ru_sections),
    ("downloads/feichi_full_38p_brochure_ru.pdf", "ru", "ОФИЦИАЛЬНЫЙ ТЕХНИЧЕСКИЙ КАТАЛОГ ОБОРУДОВАНИЯ FEICHI 2026", "КТПН/БМЗ 10-35кВ, КРУ 6-35кВ, Трансформаторы ТМГ/ТСЗЛ, Лицензии Schneider/ABB, Азотные станции", ru_sections),

    ("feichipower/downloads/feichi_full_38p_brochure_zh.pdf", "zh", "2026 飞驰电气官方产品画册与工程技术规范", "10kV-35kV预装式智能变电站(箱变/预制舱)、施耐德/ABB授权高低压开关柜、节能变压器与矿用制氮系统", en_sections),
    ("downloads/feichi_full_38p_brochure_zh.pdf", "zh", "2026 飞驰电气官方产品画册与工程技术规范", "10kV-35kV预装式智能变电站(箱变/预制舱)、施耐德/ABB授权高低压开关柜、节能变压器与矿用制氮系统", en_sections),

    ("feichipower/downloads/feichi_full_38p_brochure_ja.pdf", "ja", "2026年 飛馳電気 公式製品総合カタログ＆エンジニアリング仕様書", "10kV-35kVキュービクル式受変電設備、開閉装置、変圧器、シュナイダー/ABBライセンス製品、窒素発生装置", en_sections),
    ("downloads/feichi_full_38p_brochure_ja.pdf", "ja", "2026年 飛馳電気 公式製品総合カタログ＆エンジニアリング仕様書", "10kV-35kVキュービクル式受变電設備、開閉装置、変圧器、シュナイダー/ABBライセンス製品、窒素発生装置", en_sections)
]

for item in files_to_generate:
    build_pdf(item[0], item[1], item[2], item[3], item[4])
