## Design Direction

“电力基础设施指挥中心”：用深海军蓝作为稳定底盘，用电网橙作为行动标识，用设备实拍与工程参数建立可信度。面向电力工程、风光储能、轨道交通、石化、冶金和工矿企业的项目采购者，首屏必须回答三件事：飞驰做什么、能承接什么级别的项目、下一步如何联系工程团队。

The structure is informed by the public site of Shenyang Feichi Electrical Equipment Co., Ltd. and is an original redesign. It uses verified public copy and facts from the official website and the Liaoning Equity Exchange profile; it does not copy source code or invent customer/project claims.

## Reference Sources

- `https://www.syfcdq.cn/` — official homepage and company overview.
- `https://www.syfcdq.cn/zoujinfeichi/` — official company profile and engineering qualification text.
- `https://www.syfcdq.cn/zhuyingyewu/` — official business and application industries.
- `https://www.syfcdq.cn/chanpinzhongxin/` — official product taxonomy, contact details, sitemap references.
- `https://www.syfcdq.cn/xiangshibiandianzhan/28.html` — official photovoltaic box-type substation product detail.
- `https://www.syfcdq.cn/lianxiwomen/` — official contact information.
- `https://www.syfcdq.cn/sitemap.xml` — official crawlable URL inventory.
- `https://www.lneec.com/entdetail.aspx?id=57F15EE798F87D24` — public enterprise profile used only to cross-check business scope and certifications.
- `https://www.syfcdq.cn/robots.txt` — official crawl policy.
- `https://sc02.alicdn.com/kf/A3884b6a6b14746debc5ae9923e6b24ceR.png` — product image surfaced by image search with official syfcdq.cn source.
- `https://sc02.alicdn.com/kf/Af83464b06c92407db6d59f3a276ad09a8.png` — dry-type transformer image surfaced by image search with official source.
- `https://sc02.alicdn.com/kf/A6ad41456310a40ea9375d8d09828071b0.png` — oil-immersed transformer image surfaced by image search with official source.
- `https://sc02.alicdn.com/kf/A2dfd37ad2fc848a0bef60a29cbdaa1d9m.png` — box-type substation image surfaced by the official product taxonomy.
- `https://sc02.alicdn.com/kf/Ab77bddc4fed142808233a6208daa42d5s.png` — switchgear image surfaced from the official GCS/MV-LV product page.
- `https://sc02.alicdn.com/kf/Ae0b3dc0d8aa14a248ce27e6686cd9aad3.png` — factory equipment-line image surfaced from official business/case content.
- `https://sc02.alicdn.com/kf/A31d9741d5ef54c3e969fc39832fb1b2ec.png` — switchgear installation image from an official case page.
- `https://sc02.alicdn.com/kf/A4559fc510f474035892f2318d6916c996.png` — rail-transit electrical equipment image from an official case page.
- `https://sc02.alicdn.com/kf/Ad1432d40883d404db43539da38619d7aW.png` — electrical equipment room image from official case/business content.

## Design Tokens

- `--color-ink`: `#071522` — deep navy background.
- `--color-panel`: `#0e2434` — equipment panel.
- `--color-panel-light`: `#f1f4f6` — technical document surface.
- `--color-text`: `#f5f8fa` — primary light text.
- `--color-muted`: `#aab9c2` — secondary text.
- `--color-text-dark`: `#1d2d36` — light-surface text.
- `--color-action`: `#f97316` — action orange, used sparingly.
- `--color-network`: `#43c7c1` — technical cyan/teal signal.
- `--color-border`: `#284354` — panel dividers.
- `--font-display`: `DIN, "Arial Narrow", "Helvetica Neue", sans-serif`.
- `--font-body`: `Inter, "Noto Sans SC", ui-sans-serif, system-ui, sans-serif`.
- `--font-mono`: `"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, monospace`.
- Spacing follows a 4/8 baseline; controls have a 6px radius, cards 12px, and no decorative blob backgrounds.

## Page Structure

Single long-form homepage with anchor navigation and semantic sections. It contains at least eight visual content areas and no fabricated phone/email beyond the official contact page values.

1. `data-component="utility-nav"`: wordmark, section anchors, “工程咨询” CTA.
2. `data-component="hero-section"`: value proposition for integrated electrical equipment and project delivery; image uses an official-source product visual.
3. `data-component="company-facts"`: official company facts — established in 2004, registered capital RMB 101 million, factory area 63,000 m², building/office area 50,000 m², 460+ employees, 186+ engineering staff, 28 senior engineers.
4. `data-component="product-system"`: product families — box-type substations, high/low-voltage switchgear, prefabricated cabins, transformers, distribution boxes, solid thermal-storage boilers, and power engineering installation. Each card uses a real official-source or alicdn image and links to an official URL when available.
5. `data-component="application-section"`: power supply, wind/solar, petrochemical, coal, metallurgy, rail transit, ports, airports, urban complexes, and industrial/mining facilities, based on official business text.
6. `data-component="engineering-flow"`: design, manufacturing, testing, installation and service narrative; no unsupported delivery times.
7. `data-component="technical-evidence"`: patents, software copyright, certified product families and 220kV-and-below project capability as stated on the official site.
8. `data-component="featured-product"`: photovoltaic box-type substation detail, including 10kV/35kV and the official page's listed construction/features. The “over 3000 units” statement is labelled as an official product-page claim.
9. `data-component="source-led-case"`: source-led proof wall linking to the official business page and project/case areas; it does not invent case names or customer logos.
10. `data-component="contact-section"`: official contact details and action buttons to call/email/open the official site. No fake form fields.

## Animation Intent

Motion budget is low: hero image enters with opacity/translate, product cards lift on hover, and the engineering flow uses a static sequence. Technical buyers need scanability, not theatrical motion. Respect reduced-motion settings. Dynamic data is intentionally omitted because the current bound company ID belongs to a different merchant and must not be reused for Feichi.

## Component Plan

- `UtilityNav`: sticky compact navigation.
- `Hero`: main promise, product image, primary action.
- `FactRail`: company fact cards.
- `ProductSystem`: product family cards with official links.
- `ApplicationMatrix`: industry use cases.
- `EngineeringFlow`: delivery path.
- `TechnicalEvidence`: capability and credential statements.
- `ProductDetail`: photovoltaic box-type substation detail.
- `SourceLedCase`: links to official business/case areas.
- `ContactPanel`: official contact details and CTA links.

## Copy Tone

Technical, restrained and project-oriented. Use “方案、设备、成套、预装式、输变电、工程服务、运行条件、适用场景” vocabulary. Avoid “全国第一、绝对领先、零故障、最快交付”等 unsupported superlatives. Every numeric statement must trace to the official website or the cited public enterprise profile.

## Responsive Rules

- Desktop: two-column hero, four-column product matrix, dense fact rail.
- Tablet: two-column products and stacked evidence sections.
- Phone: single-column content, horizontally scrollable anchor navigation, 44px touch targets, fixed bottom contact action; no page-level horizontal overflow.
- All images have descriptive alt text; focus-visible outlines use orange; motion is disabled under `prefers-reduced-motion`.

## Implementation Notes

- React + Vite + TypeScript with static SEO-friendly content in the initial HTML/React render.
- Use only official-source or allowlisted alicdn images. No Unsplash, placeholder, or invented assets.
- Add `meta description`, canonical, Open Graph, JSON-LD Organization/LocalBusiness, `robots.txt`, and `sitemap.xml` for the new site.
- External links use `target="_top"`; local anchors remain normal.
- Do not include `<form>`, `<input>`, `<textarea>`, or `<select>`; the contact path uses official phone, mail, and website links.

## Risks / Open Questions

- Several old official desktop paths return 404 while the sitemap and mobile search index still expose product taxonomy. The build uses only fetched content and stable taxonomy names.
- Official pages contain varying historical company figures in third-party listings; this build prioritizes the current official website figures and labels the public profile as a cross-check only.
- The current Alibaba account binding is not Feichi’s company, so dynamic Alibaba modules are intentionally skipped.
