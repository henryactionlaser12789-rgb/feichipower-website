import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# Register TrueType Chinese fonts available on Windows
font_name = 'Helvetica'
font_bold = 'Helvetica-Bold'
for f_path, f_id in [
    ('C:/Windows/Fonts/msyh.ttc', 'MSYaHei'),
    ('C:/Windows/Fonts/simsun.ttc', 'SimSun'),
    ('C:/Windows/Fonts/simhei.ttf', 'SimHei'),
    ('C:/Windows/Fonts/arial.ttf', 'Arial')
]:
    if os.path.exists(f_path):
        try:
            pdfmetrics.registerFont(TTFont('ChineseFont', f_path))
            pdfmetrics.registerFont(TTFont('ChineseFontBold', f_path))
            font_name = 'ChineseFont'
            font_bold = 'ChineseFontBold'
            print(f"Loaded Chinese Font from {f_path}")
            break
        except Exception as e:
            print(f"Font load error {f_path}: {e}")

def create_catalog_pdf(pdf_path):
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=A4,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    
    styles = getSampleStyleSheet()
    
    # Palette
    c_navy = colors.HexColor("#0c2340")      # Deep Industrial Navy
    c_blue = colors.HexColor("#0052cc")      # Global Tech Blue
    c_amber = colors.HexColor("#d97706")     # Safety Electrical Amber
    c_dark = colors.HexColor("#1e293b")      # Slate Dark
    c_muted = colors.HexColor("#64748b")     # Cool Slate
    c_light = colors.HexColor("#f8fafc")     # Light Crisp Gray
    c_border = colors.HexColor("#cbd5e1")    # Border line
    c_tag = colors.HexColor("#e0f2fe")       # Light Cyan Pill
    c_tag_text = colors.HexColor("#0369a1")

    # Typography
    style_cover_title = ParagraphStyle(
        'CoverTitle',
        parent=styles['Heading1'],
        fontName=font_bold,
        fontSize=22,
        leading=26,
        textColor=c_navy,
        alignment=TA_CENTER,
        spaceAfter=6
    )
    
    style_cover_sub = ParagraphStyle(
        'CoverSub',
        parent=styles['Normal'],
        fontName=font_bold,
        fontSize=11,
        leading=15,
        textColor=c_amber,
        alignment=TA_CENTER,
        spaceAfter=14
    )

    style_h1 = ParagraphStyle(
        'CatalogH1',
        parent=styles['Heading2'],
        fontName=font_bold,
        fontSize=13,
        leading=16,
        textColor=c_navy,
        spaceBefore=12,
        spaceAfter=6,
        keepWithNext=True
    )

    style_h2 = ParagraphStyle(
        'CatalogH2',
        parent=styles['Heading3'],
        fontName=font_bold,
        fontSize=10,
        leading=13,
        textColor=c_blue,
        spaceBefore=8,
        spaceAfter=4,
        keepWithNext=True
    )

    style_body = ParagraphStyle(
        'CatalogBody',
        parent=styles['Normal'],
        fontName=font_name,
        fontSize=8.5,
        leading=12,
        textColor=c_dark,
        spaceAfter=4
    )

    style_body_bold = ParagraphStyle(
        'CatalogBodyBold',
        parent=style_body,
        fontName=font_bold,
        textColor=c_navy
    )

    style_table_h = ParagraphStyle(
        'THeader',
        parent=styles['Normal'],
        fontName=font_bold,
        fontSize=8,
        leading=10,
        textColor=colors.white,
        alignment=TA_CENTER
    )

    style_table_c = ParagraphStyle(
        'TCell',
        parent=styles['Normal'],
        fontName=font_name,
        fontSize=7.5,
        leading=10,
        textColor=c_dark
    )

    style_table_c_bold = ParagraphStyle(
        'TCellB',
        parent=styles['Normal'],
        fontName=font_bold,
        fontSize=7.5,
        leading=10,
        textColor=c_navy
    )

    story = []

    # ================= COVER & HEADER =================
    header_data = [
        [Paragraph(f"<b>沈阳飞驰电气设备有限公司 | SHENYANG FEICHI ELECTRICAL EQUIPMENT CO., LTD.</b>", ParagraphStyle('HN', fontName=font_bold, fontSize=8.5, textColor=c_navy)),
         Paragraph(f"<b>国家级专精特新“小巨人” | 注册资金：1.01 亿元</b>", ParagraphStyle('HR', fontName=font_bold, fontSize=8, textColor=c_amber, alignment=TA_RIGHT))]
    ]
    t_top = Table(header_data, colWidths=[340, 180])
    t_top.setStyle(TableStyle([
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('LINEBELOW', (0,0), (-1,-1), 1.5, c_amber),
    ]))
    story.append(t_top)
    story.append(Spacer(1, 12))

    story.append(Paragraph("2026 飞驰电气官方综合产品画册与工程技术规范手册", style_cover_title))
    story.append(Paragraph("OFFICIAL COMPREHENSIVE EPC PRODUCT CATALOG & ENGINEERING DOSSIER", style_cover_sub))
    
    # Executive Summary Card
    summary_html = (
        "<b>【企业概况】</b> 飞驰电气（创立于 2004 年，占地面积 <b>62,780 ㎡ / 6.3 万平米</b>，注册资本 <b>10,100 万元人民币</b>）是东北领先、面向全球的智能电网成套与新能源集成变电站制造商。具备自主知识产权与 51+ 项发明/实用新型专利。<br/>"
        "<b>【国际战略授权】</b> 施耐德电气 (Schneider Electric) 官方成套授权（MVneX 中压柜、BlokSeT 预智低压柜、Prisma E）；ABB 官方技术授权（UniSafe 12kV 中压柜、MNS 2.0 / MDmax ST 低压柜、MDrail-E）；西门子 (Siemens) SIBOARD 配电箱授权伙伴。<br/>"
        "<b>【顶级电网准入与认证】</b> 国家电网 (SGCC) 协议库存联合预审合格供应商（一纸证明）、南方电网 (CSG) 资格预审合格、国家电投 (SPIC) 合格供应商；ISO 9001/14001/45001/50001 四体系认证、绿色工厂、国家高新技术企业、PCCC 一级能效节能认证、矿用防爆 Ex d I Mb (MA/KA) 安全标志认证。"
    )
    t_sum = Table([[Paragraph(summary_html, style_body)]], colWidths=[520])
    t_sum.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), c_light),
        ('BOX', (0,0), (-1,-1), 1, c_border),
        ('PADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(t_sum)
    story.append(Spacer(1, 10))

    # ================= SECTION 1: 预装式变电站与预制舱 (E-HOUSE / SUBSTATIONS) =================
    story.append(Paragraph("一、 预装式变电站、新能源光储充箱变与模块化预制舱 (Substations & E-House)", style_h1))
    story.append(Paragraph("涵盖欧式箱变、美式箱变、华式箱变、光伏/风电升压变流一体舱及 35kV~220kV 模块化 E-House 预制舱。具备抗风防风沙、耐高寒（-60°C УХЛ1）、耐盐雾 1560h 腐蚀及严苛工况运行能力。", style_body))

    sub_headers = ["产品系列 / 型号", "额定电压等级", "容量范围 / 规格", "关键技术特性与型式试验验证"]
    sub_rows = [
        ["ZGS22/ZGS 系列组合式变电站\n(风电/光伏美式箱变)", "12kV / 35kV / 40.5kV\n低压 0.4kV~1.14kV", "315kVA ~ 6300kVA\n(至 12000kVA)", "单通道导风散热，无降容满额输出；高过载能力；通过高海拔(8000m)及短路耐受试验。"],
        ["YB / YBW / YBH 系列预装式变电站\n(欧式箱变 / 华式功能型箱变)", "12kV / 40.5kV\n0.4kV / 0.8kV", "50kVA ~ 3150kVA\n(华式至 10000kVA)", "高低压室与变压器独立隔室；金属/非金属外壳可选；高耐候 C5-M 防腐，通过 1440h 盐雾试验。"],
        ["FC-E-House 模块化智能型预制舱式变电站", "12kV ~ 110kV / 220kV GIS", "按项目深度定制\n单/多模块拼接", "工厂预装配/调试，即插即用；全套暖通空调、火警消防、电能管理及专用抗风壁板(通过抗风/湿热报告)。"],
        ["光伏 / 储能 - 变流升压一体机\n(PCS + Step-Up Transformer)", "直流 1500V 进线\n交流 6kV ~ 35kV", "1.25MW ~ 10MW\n(20/40尺集装箱)", "深度整合光伏逆变升压与储能双向充放电；支持离网/微网/电网调峰调频；出厂全联调，省工期 70%。"]
    ]
    t_sub = Table([[Paragraph(f"<b>{h}</b>", style_table_h) for h in sub_headers]] + 
                  [[Paragraph(c, style_table_c_bold if idx==0 else style_table_c) for idx, c in enumerate(row)] for row in sub_rows],
                  colWidths=[130, 85, 95, 210])
    t_sub.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_navy),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, c_light]),
        ('PADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE')
    ]))
    story.append(t_sub)
    story.append(Spacer(1, 10))

    # ================= SECTION 2: 高低压开关成套与授权柜 (SWITCHGEAR & PANELS) =================
    story.append(Paragraph("二、 高中低压开关成套设备与国际顶级授权柜 (MV/LV Switchgear)", style_h1))
    story.append(Paragraph("拥有施耐德、ABB、西门子多项全套技术转让与官方原厂授权，配备自主研发的高性能真空断路器，满足电网、核电、数据中心、冶金轨道交通的高可靠供配电需求。", style_body))

    sw_headers = ["开关设备系列", "授权厂商 / 国际标准", "额定参数 (电压/电流/开断)", "结构优势与核心配置"]
    sw_rows = [
        ["BlokSeT 低压抽出式开关柜", "施耐德电气 (Schneider)\n官方全面授权", "0.4kV ~ 0.69kV\n额定电流至 6300A / 100kA", "Form 4b 深度内部隔离；抽屉模块化防电弧设计；IP20~IP54；配备数字化智能温升监测与母线监控。"],
        ["MNS 2.0 / MDmax ST 低压柜", "ABB 官方技术转让\n全程监制授权", "0.4kV ~ 0.69kV\n额定电流至 6300A / 100kA", "C型骨架 25mm 模数孔灵活组装；分隔为装置室、母线室、电缆室；集成 ABB Ability 云端状态诊断。"],
        ["KYN28A-12 / KYN92A-12\n铠装移开式中压开关柜", "国标 GB / 辽宁省制造业\n单项冠军产品", "12kV (3.6~12kV)\n至 4000A / 40kA (3s)", "中置式结构，完备机械“五防”联锁；KYN92A 柜宽仅 550mm（占地减半），配装自研 ZN145 固封极柱断路器。"],
        ["UniSafe / MVneX 12kV 中压柜", "ABB / 施耐德电气\n官方原厂授权", "12kV ~ 24kV\n至 4000A / 40kA", "高品质空气绝缘；配装原厂 HVX / VD4 真空断路器；通过全套型式试验与 IAC AFLR 防电弧认证。"],
        ["FC-AIR-12 环保气体绝缘环网柜\n(固体绝缘 / 气体绝缘 XGN)", "国家高压电器质检中心\n绿色环保型", "12kV / 24kV / 40.5kV\n630A~2500A / 25~31.5kA", "干燥空气或无氟环保气体绝缘，完全替代 SF6；IP67 全密封激光焊接气箱，不受潮湿高原恶劣环境影响。"],
        ["MDrail-E / Prisma E / SIBOARD\n配电箱 / 动力箱 / 直流屏", "ABB / 施耐德 / 西门子\n授权合作伙伴", "0.4kV / 220V 直流\n100A ~ 1600A", "XL-21、JXF、JP 智能综合配电箱、消防电气控制装置、智能一体化直流电源屏（FCGZDW-200Ah）。"]
    ]
    t_sw = Table([[Paragraph(f"<b>{h}</b>", style_table_h) for h in sw_headers]] + 
                 [[Paragraph(c, style_table_c_bold if idx==0 else style_table_c) for idx, c in enumerate(row)] for row in sw_rows],
                 colWidths=[120, 95, 105, 200])
    t_sw.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_navy),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, c_light]),
        ('PADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE')
    ]))
    story.append(t_sw)
    story.append(Spacer(1, 10))

    # ================= SECTION 3: 电力变压器 (TRANSFORMERS) =================
    story.append(Paragraph("三、 节能型电力变压器与立体卷铁芯技术 (Power Transformers)", style_h1))
    story.append(Paragraph("涵盖 10kV~35kV 干式与油浸式变压器，全系通过国家变压器质检中心型式试验与 PCCC 节能认证，处于国网与南网一级能效最高梯队。", style_body))

    tr_headers = ["变压器类型 / 系列", "技术路线与铁芯工艺", "容量规格", "能效等级与性能指标"]
    tr_rows = [
        ["SCB14 / SCB18 系列\n环氧浇注干式电力变压器", "薄绝缘真空石英砂环氧浇注\nNomex 芳纶绝缘系统 (H级)", "100kVA ~ 5250kVA\n(10kV / 35kV)", "局放极低 (<b>< 5pC</b>)；高阻燃自熄，F1/E2/C2 级认证；国家一级/二级能效认证 (NX1/NX2)。"],
        ["S20 / S22 / S13-M·RL\n立体卷铁芯油浸式变压器", "三相对称立体卷铁芯无气隙\n磁路完全对称平衡", "50kVA ~ 2500kVA\n(10kV / 35kV)", "空载损耗降低 30%~40%，噪音降低 8~10dB；全密封波纹油箱，抗短路与高过载能力极强，免维护 30 年。"],
        ["SBH21 / SBH25 系列\n非晶合金立体卷铁芯变压器", "非晶合金带材 + 闭口立体卷铁芯\n高磁导率与低电阻", "100kVA ~ 630kVA\n(10kV)", "空载损耗较传统硅钢片降低 <b>60%~70%</b>，为国家超高节能标杆；通过全套节能认证与型式试验。"],
        ["KKSG / KBSGZY 系列\n矿用一般型与防爆变压器", "矿用干式移动变压器 / 防爆外壳\nEx d I Mb (РВ 3В)", "100kVA ~ 1600kVA\n(6kV / 10kV / 1.14kV)", "国家矿用产品安全标志认证 (MA/KA)；抗潮湿粉尘防爆；集成真空断路器与高低压保护。"]
    ]
    t_tr = Table([[Paragraph(f"<b>{h}</b>", style_table_h) for h in tr_headers]] + 
                 [[Paragraph(c, style_table_c_bold if idx==0 else style_table_c) for idx, c in enumerate(row)] for row in tr_rows],
                 colWidths=[115, 125, 90, 190])
    t_tr.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_navy),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, c_light]),
        ('PADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE')
    ]))
    story.append(t_tr)
    story.append(Spacer(1, 10))

    # ================= SECTION 4: 优质工程业绩 (GLOBAL TRACK RECORDS) =================
    story.append(Paragraph("四、 重大标杆工程业绩与全球交付实绩 (Engineering Track Records)", style_h1))
    
    cases_headers = ["应用行业领域", "代表性重点工程项目名称", "供应主导设备"]
    cases_rows = [
        ["一带一路海外工程\n(Global EPC Projects)", "几内亚力拓西芒杜港口、越南 Vanphong EP 电厂、印尼 MVNEX 24kV、沙特循环电站与预制舱、哈萨克斯坦舒巴尔库半焦、伊拉克出口项目、菲律宾 Aboitiz EAUC 储能/PCPC 光伏、塞拉利昂金红石矿山光储柴一体化项目", "高低压开关柜、模块化预制舱 E-House、集装箱式升压站、箱式变电站"],
        ["国家级新能源基地\n(Renewable Solar & Wind)", "库布齐沙漠 100 万千瓦新能源基地、新疆天山北麓 610 万千瓦基地、吉西基地鲁固直流 140 万千瓦、内蒙古白音华 300MW 光伏、中电建玉门 100MW 风电、大唐利民 20MWp 光伏", "光伏组合式箱变 (ZGS)、华式逆变升压一体机、35kV 预制舱式升压变电站"],
        ["电网与市政轨道交通\n(Power Grid & Transit)", "沈阳地铁 3 号线 / 4 号线一期供电系统集成、国网四川自贡 110kV 变电站改造、国网蒙东 10kV 配网项目、国网吉林/辽宁/山西/山东省电力公司集中采购项目", "KYN28A / KYN92A 开关柜、SCB 干变、立体卷铁芯油变、JP 智能配电箱"],
        ["重工业与矿山能源\n(Heavy Industry & Mining)", "广西防城港钢铁基地、冀南钢铁集团、伊敏露天矿 3500 万吨/年项目、哈尔乌素露天煤矿、胜利能源露天矿、思山岭铁矿 1500 万吨/年选矿工程、中电建肥城空气储能", "矿用防爆变压器 (KBSGZY)、矿用高低压开关柜 (GKG/GKD)、固体蓄热装置"],
        ["知名高校、医院与数据中心\n(Institutional & High-Tech)", "清华大学第一附属医院、北京大学/北京师范大学配电工程、辽宁省肿瘤医院、盛京医院、中国移动/辽宁电信数据中心、中国联通数科呼和浩特云数据基地、芯源微研发基地", "施耐德 BlokSeT 低压柜、ABB MNS2.0、浇注母线槽 (4000A)、密集型耐火母线"]
    ]
    t_cases = Table([[Paragraph(f"<b>{h}</b>", style_table_h) for h in cases_headers]] + 
                    [[Paragraph(c, style_table_c_bold if idx==0 else style_table_c) for idx, c in enumerate(row)] for row in cases_rows],
                    colWidths=[110, 240, 170])
    t_cases.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_navy),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, c_light]),
        ('PADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE')
    ]))
    story.append(t_cases)
    story.append(Spacer(1, 10))

    # ================= SECTION 5: 权威资质、认证与型式试验清单 =================
    story.append(Paragraph("五、 权威认证、体系资质与国家级型式试验报告汇总 (Accreditations & Test Reports)", style_h1))
    
    cert_text = (
        "• <b>体系与荣誉：</b> ISO 9001:2015 质量管理、ISO 14001:2015 环境管理、ISO 45001:2018 职业健康、ISO 50001 能源管理、绿色供应链五星认证、国家级专精特新重点“小巨人”企业、国家高新技术企业（GR202221000842）、辽宁省智能工厂、绿色工厂。<br/>"
        "• <b>电网一纸证明：</b> 国家电网集中采购资格预审（配电变压器、箱变、环网柜/箱、JP柜、柱上变台）、南方电网资格预审合格、国家电投合格供应商（风电光伏箱变、高压柜）。<br/>"
        "• <b>型式试验报告（部分权威代表）：</b><br/>"
        "  - <i>预制舱/箱变：</i> FC·E-House 模块化预制舱式变电站检测合格证、抗风性能研究报告、专用壁板/舱门试验、高低温/湿热/盐雾 1560h 试验报告；YB/YBH 40.5kV/12kV 8000kVA~12000kVA 高海拔与短路报告。<br/>"
        "  - <i>高低压开关柜：</i> BlokSeT 强制性认证、MNS 2.0 4000A、KYN28A-12/4000-40 (40kA 4s)、KYN61-40.5/3150-40、MVneX-12/4000-40、UniSafe-12/1250-31.5、XGN 固体/环保气体绝缘柜试验报告。<br/>"
        "  - <i>节能变压器：</i> SCB14/SCB18 100~5250kVA 干式变压器型式试验及能效报告（一级能效）、S22/SBH25 立体卷铁芯与非晶合金油浸变压器检验报告。<br/>"
        "  - <i>母线槽与矿用：</i> 4000A 浇注母线槽 (FC-HP-F)、耐火母线槽 (NHFC-CCKX)；KBSGZY、KKSG 矿用干变及 GKG/GKD 矿用高低压开关柜安全标志 (MA/KA)。"
    )
    t_cert = Table([[Paragraph(cert_text, style_body)]], colWidths=[520])
    t_cert.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), c_light),
        ('BOX', (0,0), (-1,-1), 1, c_border),
        ('PADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(t_cert)
    story.append(Spacer(1, 12))

    # ================= FOOTER CONTACT =================
    contact_data = [
        [Paragraph("<b>沈阳飞驰电气设备有限公司 | 官方业务与工程技术支持通道</b>", ParagraphStyle('F1', fontName=font_bold, fontSize=8.5, textColor=c_navy)),
         Paragraph("<b>全球服务热线：400-88-96321</b>", ParagraphStyle('F2', fontName=font_bold, fontSize=8.5, textColor=c_amber, alignment=TA_RIGHT))],
        [Paragraph("• <b>工厂总部地址：</b> 辽宁省沈阳市浑南区沈营大街 988 号 (邮编: 110168)<br/>"
                   "• <b>官方网站：</b> https://feichipower.com &nbsp;|&nbsp; www.syfcdq.com<br/>"
                   "• <b>技术出口总监：</b> Henry &nbsp;|&nbsp; <b>业务邮箱：</b> henry@feichipower.com / syfcswb@163.com<br/>"
                   "• <b>电话 / WhatsApp / 微信 / Telegram：</b> +86 155 6620 6930 &nbsp;|&nbsp; 传真: 024-23665484", style_body), ""]
    ]
    t_ft = Table(contact_data, colWidths=[360, 160])
    t_ft.setStyle(TableStyle([
        ('SPAN', (0,1), (1,1)),
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#f1f5f9")),
        ('BOX', (0,0), (-1,-1), 1, c_navy),
        ('PADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(t_ft)

    doc.build(story)
    print(f"Generated Catalog PDF: {pdf_path} ({os.path.getsize(pdf_path)} bytes)")

# Output paths
p1 = "feichipower/downloads/feichi_full_38p_brochure_zh.pdf"
p2 = "feichipower/downloads/feichi_full_38p_brochure_en.pdf"
p3 = "downloads/feichi_full_38p_brochure_zh.pdf"
p4 = "downloads/feichi_full_38p_brochure_en.pdf"
p5 = "feichipower_2026_comprehensive_catalog.pdf"

create_catalog_pdf(p1)
create_catalog_pdf(p2)
create_catalog_pdf(p3)
create_catalog_pdf(p4)
create_catalog_pdf(p5)
