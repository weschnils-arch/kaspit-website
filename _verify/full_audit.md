# KASPIT Full Content Audit — 2026-04-14

**Source:** `_verify/source.txt` (extracted from `_project/Content.docx` with bold markers)
**Bold rules:**
- Rule 1: `[B]label:[/B]` = structural marker; next text = real copy
- Rule 2: `[B]Text[/B]` without colon = real on-page headline
- Rule 3: `[B]ALL CAPS PAGE[/B]` = section divider, not content

Status: ✓ matches doc · ✗ mismatch/diff · **MADE-UP** (not in doc) · **MISSING** (doc copy absent from page)

---

## 1. HOMEPAGE — `src/pages/Home.tsx`

| # | Source | Expected | Actual (file:line) | Status |
|---|---|---|---|---|
| 1 | line 1 | Hero headline: "KASPIT Security – Austria's Premier Boutique for Intelligence-Led Security Management" | Hero renders "Austria's Premier Boutique for / Intelligence-Led Security Management" (Home.tsx:141–143); "KASPIT Security" prefix rendered as `.hero-label` above (Home.tsx:137) | ✓ (split into label + 2-line headline, full phrase present) |
| 2 | line 2 | Sub-headline: "Protecting what matters most with strategic precision and absolute discretion." | Home.tsx:147 | ✓ |
| 3 | line 12 | Primary Button: "Request a Confidential Risk Assessment (free & no obligation)" | Button label: "Request a Confidential Risk Assessment" (Home.tsx:153, 287) | ✗ missing "(free & no obligation)" suffix |
| 4 | line 13 | Secondary Button: "Book a Private Consultation with Maxim" | Home.tsx:164, 298 | ✓ |
| — | — | Stats bar (20+ / 3 / 24/7 / 100%) | Home.tsx:45–50 | **MADE-UP** (not in doc) |
| 5 | line 3 | Services Teaser title: "Our Strategic Services" | Home.tsx:194–196 renders "Our Strategic Services" | ✓ |
| 6 | line 4 | Card 01 head "Investigations" + subtext "Intelligence-Driven Investigations Uncovering facts with precision and absolute discretion." | Home.tsx:14–15 | ✓ |
| 7 | line 5 | Card 02 head "Security Management" + subtext "Strategic Security Management, Consulting & Audits 360° concepts, expert consulting, and independent security audits tailored to complex risks — never standard guarding." | Home.tsx:20–21 | ✓ |
| 8 | line 6 | Card 03 head "Emergency Assistance & Duty of Care" + subtext | Home.tsx:26–27 | ✓ |
| 9 | line 7 | Card 04 head "Intelligence" + subtext | Home.tsx:32–33 | ✓ |
| 10 | line 8 | Card 05 head "Training" + subtext | Home.tsx:38–39 | ✓ |
| 11 | line 9 bold | Welcome Paragraph headline (doc literal "Welcome Paragraph") | Rendered as "Welcome to KASPIT" (Home.tsx:228) | ✗ user-approved deviation (shortened label) |
| 12 | line 9 | Welcome paragraph 1 | Home.tsx:231 matches 1:1 | ✓ |
| 13 | line 10 | Welcome paragraph 2 | Home.tsx:234 matches 1:1 | ✓ |
| — | — | "Learn More" button to /about | Home.tsx:238 | **MADE-UP** (not in doc, user-approved) |
| 14 | line 11 | Final CTA Banner: "Ready to secure what matters most?" | "Ready to Secure What Matters Most?" (Home.tsx:277–278) | ✗ casing/question-mark location; doc has lowercase "secure", code has "Secure" (Title Case) |
| — | — | "Take the First Step" label + "Every conversation begins with discretion…" paragraph | Home.tsx:275, 280–282 | **MADE-UP** |
| — | — | "Free · No obligation · Absolute confidentiality" footer line | Home.tsx:303–304 | **MADE-UP** |

**Summary: 10/14 verified, 2 deviations (user-approved "Welcome to KASPIT", CTA casing), 2 made-up blocks (stats bar, Take-the-First-Step block), 1 missing fragment "(free & no obligation)".**

---

## 2. ABOUT US — `src/pages/About.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 17 | Hero headline: "About KASPIT Security" | About.tsx:22 "About KASPIT Security" | ✓ |
| 2 | line 18 | Sub-headline: "Part of the international KASPIT Group – Founded on real operational excellence." | About.tsx:25 (but uses "--" instead of en-dash "–") | ✗ punctuation diff |
| 3 | line 19 bold | Founder Section headline "Maxim Gutman – Founder & Managing Director" | About.tsx:48–49 renders "Founder & Managing Director" label + "Maxim Gutman" h2 | ✓ (restructured as label+h2) |
| 4 | line 19 | Founder paragraph 1 (Maxim Gutman is the founder…emergency assistance.) | About.tsx:52–57, 59–61 — SPLIT into 2 paragraphs at "He has also served…" | ✗ split differs from doc (doc is one paragraph) |
| 5 | line 20 | Founder paragraph 2 (He combines this exceptional operational background…) | About.tsx:63–70 | ✓ (uses "--" instead of "—" en-dashes) |
| — | — | Credentials grid (Military/Education/Certifications/International) | About.tsx:75–86 | **MADE-UP** (not in doc) |
| 6 | line 21 bold | "Company Story" headline | Rendered as "Our Story" label + "Built on Principles" h2 (About.tsx:94–95) | ✗ doc expects "Company Story" |
| 7 | line 21 | Company Story paragraph | About.tsx:96–106 — split into 2 paragraphs; uses "--" for em-dash | ✗ punctuation, split |
| 8 | line 22 bold | "Our Promise" headline | About.tsx:109 renders "Our Promise" inside a glass card | ✓ |
| 9 | line 22 | Our Promise copy: "Absolute discretion. Uncompromising quality. Strategic consulting and independent audits that deliver measurable excellence." | About.tsx:110–113 | ✓ |
| 10 | line 23 | CTA: "Meet Maxim personally." | About.tsx:121 "Meet Maxim Personally" (Title Case) | ✗ casing |
| — | — | "Discover how KASPIT Security can protect what matters most to you." | About.tsx:122–124 | **MADE-UP** |
| 11 | line 24 | Button: "Book a private consultation." | About.tsx:127 "Book a Private Consultation" | ✗ casing, period dropped |

**Summary: 5/11 matches, 5 punctuation/casing/split deviations, 1 section headline mismatch ("Our Story/Built on Principles" vs "Company Story"), 1 made-up paragraph + 1 made-up credentials grid.**

---

## 3. KASPIT ADVANTAGE — `src/pages/Advantage.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 29 | Headline: "Why KASPIT Security Stands Alone" | Advantage.tsx:82 renders "Why KASPIT / Stands Alone" — omits "Security" | ✗ missing "Security" |
| 2 | line 30 | Sub-headline | Advantage.tsx:85–87 has sub-headline + extra "While others offer standard guarding, we deliver true strategic resilience." | ✗ extra sentence appended |
| 3 | line 31 | Paragraph 1 | Advantage.tsx:103–107 matches 1:1 | ✓ |
| 4 | line 32 | Paragraph 2 | Advantage.tsx:108–114 matches 1:1 | ✓ |
| — | — | "Standard Guarding Reimagined" / "The Difference" label + 6-card icon grid (Cutting-Edge Technology / Intelligence-Led Approach / Strategic Consulting & Audits / Global Reach / Absolute Discretion / Personal Leadership) | Advantage.tsx:5–63, 95–100, 121–135 | **MADE-UP** (none of these 6 cards or the section heading are in doc) |
| 5 | line 33 | CTA: "Experience the difference." | Advantage.tsx:142 "Experience the Difference" (Title Case) | ✗ casing |
| — | — | CTA body paragraph "Our clients choose KASPIT Security because they expect — and receive — far more than security. They receive a trusted partner who thinks, plans and acts at the highest level." | Advantage.tsx:145–147 (re-uses doc line 32) | acceptable reuse, but it's already on the page above |
| 6 | line 34 | Button: "Request your confidential risk assessment today." | Advantage.tsx:150 matches | ✓ (minus period) |

**Summary: 3/6 verbatim, 1 missing word in hero, 1 extra sentence in sub-headline, 1 casing, 1 massive made-up 6-card grid section.**

---

## 4. SECURITY MANAGEMENT — `src/pages/services/SecurityManagement.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 39 | Hero: "Strategic Security Management, Consulting & Audits" | SecurityManagement.tsx:51–52 | ✓ |
| — | — | label "Service 02 — Security Management" | SM.tsx:49 | **MADE-UP** |
| 2 | line 39 | Sub-headline | SM.tsx:55–56 matches 1:1 | ✓ |
| 3 | line 40 | Full Intro para 1 | SM.tsx:73–76 | ✓ |
| 4 | line 41 | Full Intro para 2 | SM.tsx:77–82 | ✓ |
| 5 | line 42 | Full Intro para 3 | SM.tsx:83–90 | ✓ |
| 6 | line 43 | Full Intro para 4 | SM.tsx:91–95 | ✓ |
| — | — | "Lasting Resilience By Design" h2 + "Introduction" label | SM.tsx:67–70 | **MADE-UP** (doc has no label/h2 for this section, just "Full Introduction" marker) |
| 7 | line 44 bold | "What You Gain" headline | SM.tsx:104 | ✓ |
| 8 | lines 45–50 | 6 gain bullets | SM.tsx:6–11 matches 1:1 | ✓ |
| 9 | line 51 bold | "Our Approach" headline | SM.tsx:128 | ✓ |
| 10 | lines 52–55 | 4 approach steps | SM.tsx:14–31 — titles capitalised differently (e.g., "Comprehensive Risk Assessment" vs doc "Comprehensive risk assessment"); descs match | ✗ title casing diffs |
| 11 | line 56 | CTA: "Let us design, audit, and optimise your personal security architecture." | Rendered as h2 "Design, Audit & Optimise Your Security Architecture" + paragraph "Start with a confidential assessment. We build security strategies that evolve with your organisation." (SM.tsx:151–155) | ✗ reworded |
| 12 | line 57 | Button: "Start with a confidential assessment." | SM.tsx:159 "Start with a Confidential Assessment" | ✗ casing |

**Summary: 9/12 verbatim, 1 label made-up, 1 "Introduction" h2 made-up, 1 reworded CTA, casing/capitalisation on approach steps and button.**

---

## 5. SECURITY AUDITS — `src/pages/services/SecurityAudits.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 61 | Hero: "Independent Security Audits & Compliance Reviews" | SA.tsx:68–69 | ✓ |
| — | — | label "Service 03 — Security Audits" | SA.tsx:66 | **MADE-UP** |
| 2 | line 62 | Sub-headline | SA.tsx:72–73 | ✓ |
| 3 | lines 63–66 | 4 Full Intro paragraphs | SA.tsx:90–112 | ✓ |
| — | — | "Beyond Standard Checklists" h2 + "Introduction" label | SA.tsx:84–87 | **MADE-UP** |
| 4 | line 67 bold | "What You Gain" | SA.tsx:121 | ✓ |
| 5 | lines 68–74 | 7 gain bullets | SA.tsx:6–13 | ✓ (note: bullet 1 doc has "and human factors"; code omits "and" — minor) |
| 6 | line 75 bold | "Our Audit Scope" | SA.tsx:145 | ✓ |
| 7 | lines 76–83 | 8 scope items | SA.tsx:15–24 | ✓ (minor: bullet 1 doc "physical, technical, procedural, and human factors"; code "physical, technical, procedural, human factors" — missing "and") |
| 8 | line 84 bold | "Our Approach" | SA.tsx:174 | ✓ |
| 9 | lines 85–89 | 5 approach steps | SA.tsx:26–47 | ✗ title casing diffs (Title Case vs doc sentence case) |
| 10 | line 90 | CTA line "Gain clarity and confidence in your security posture." | Rendered as h2 "Gain Clarity in Your Security Posture" + made-up body (SA.tsx:197–202) | ✗ reworded |
| 11 | line 91 | Primary button "Request a Confidential Security Audit" | SA.tsx:206 | ✓ |
| 12 | line 92 | Secondary button "Book a Private Consultation" | SA.tsx:215 | ✓ |

**Summary: 10/12 verbatim, 1 label made-up, 1 "Introduction" h2 made-up, 1 reworded CTA h2, 2 tiny "and" omissions, approach-step casing.**

---

## 6. INVESTIGATIONS — `src/pages/services/Investigations.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 95 | Hero: "Intelligence-Driven Investigations" | Investigations.tsx:50 | ✓ |
| — | — | label "Service 01 — Investigations" | Inv.tsx:48 | **MADE-UP** |
| 2 | line 96 | Sub-headline | Inv.tsx:53 | ✓ |
| 3 | line 97 | Full Intro para 1 | Inv.tsx:71–75, 77–80 — SPLIT into 2 paragraphs in code (doc is one) | ✗ split differs |
| 4 | line 98 | Full Intro para 2 | Inv.tsx:81–86 | ✓ |
| — | — | "Transform Uncertainty Into Clarity" h2 + "Introduction" label | Inv.tsx:64–67 | **MADE-UP** |
| 5 | line 99 | "What You Gain" | Inv.tsx:95 | ✓ |
| 6 | lines 100–104 | 5 gain bullets | Inv.tsx:6–11 | ✓ |
| 7 | line 105 | "Our Approach" | Inv.tsx:119 | ✓ |
| 8 | lines 106–109 | 4 approach steps | Inv.tsx:13–30 | ✗ title casing diffs |
| 9 | line 110 | CTA "Discuss your case in complete confidence." | Inv.tsx:143 "Discuss Your Case in Complete Confidence" + body "Every conversation begins with a private, no-obligation briefing. Your confidentiality is absolute." | ✗ casing + made-up body |
| 10 | line 111 | Button "Request a Private Consultation today." | Inv.tsx:150 | ✓ |

**Summary: 7/10 verbatim, 1 made-up label, 1 made-up h2, 1 split-paragraph diff, 1 casing on CTA + made-up body paragraph.**

---

## 7. EMERGENCY ASSISTANCE — `src/pages/services/EmergencyAssistance.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 117 | Hero: "Emergency Assistance & Duty of Care" | EA.tsx:60–61 | ✓ |
| — | — | label "Service 04 — Emergency Assistance" | EA.tsx:58 | **MADE-UP** |
| 2 | line 118 | Sub-headline (doc uses "–", code uses "—") | EA.tsx:64–65 | ✗ dash style diff |
| 3 | line 119 | Full Intro para 1 | EA.tsx:82–88 | ✓ |
| 4 | line 120 | Full Intro para 2 | EA.tsx:89–94 | ✓ |
| — | — | "Your Safety Is Our Mission" h2 + "Introduction" label | EA.tsx:75–79 | **MADE-UP** |
| 5 | line 121 | "Our Capabilities" | EA.tsx:104 | ✓ |
| 6 | lines 122–128 | 7 capability bullets | EA.tsx:5–13 | ✓ |
| 7 | line 129 | "What You Gain" | EA.tsx:132 | ✓ |
| 8 | lines 130–133 | 4 gain bullets | EA.tsx:15–20 | ✓ |
| 9 | line 134 | "Our Approach" | EA.tsx:156 | ✓ |
| 10 | lines 135–138 | 4 approach steps | EA.tsx:22–39 | ✗ titles reworded (e.g., "Pre-Travel Risk Profiling" vs doc "Pre-travel risk profiling and bespoke contingency planning") — condensed headings with extra descs |
| 11 | line 139 | CTA "Ensure your global Duty of Care is professionally covered." | EA.tsx:179–181 "Ensure Your Global Duty of Care" + made-up body | ✗ truncated + made-up body |
| 12 | line 140 | Button "Request a Confidential Review today." | EA.tsx:187 | ✓ |

**Summary: 8/12 verbatim, 1 made-up label, 1 made-up h2, 1 dash diff, approach-step restructuring, truncated CTA.**

---

## 8. INTELLIGENCE — `src/pages/services/Intelligence.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 146 | Hero: "Security Intelligence & Risk Consulting" | Intel.tsx:58–59 | ✓ |
| — | — | label "Service 05 — Intelligence" | Intel.tsx:56 | **MADE-UP** |
| 2 | line 147 | Sub-headline (doc uses curly ' — code uses straight ') | Intel.tsx:62 | ✗ apostrophe diff |
| 3 | line 148 | Full Intro para 1 | Intel.tsx:80–86 | ✓ |
| 4 | line 149 | Full Intro para 2 | Intel.tsx:87–92 | ✓ |
| — | — | "The Ultimate Competitive Advantage" h2 + "Introduction" label | Intel.tsx:72–76 | **MADE-UP** |
| 5 | line 150 | "Our Intelligence Capabilities" | Intel.tsx:102 | ✓ |
| 6 | lines 151–155 | 5 capability bullets | Intel.tsx:5–11 | ✓ |
| 7 | line 156 | "What You Gain" | Intel.tsx:130 | ✓ |
| 8 | lines 157–160 | 4 gain bullets | Intel.tsx:13–18 | ✓ |
| 9 | line 161 | "Our Approach" | Intel.tsx:154 | ✓ |
| 10 | lines 162–165 | 4 approach steps | Intel.tsx:20–37 | ✗ titles/descs reworded |
| 11 | line 166 | CTA "Leave it to us to uncover what matters most." | Intel.tsx:177–182 "Leave It to Us to Uncover What Matters" + made-up body | ✗ truncated + made-up body |
| 12 | line 167 | Button "Request a Confidential Intelligence Consultation." | Intel.tsx:185 | ✓ |

**Summary: 8/12 verbatim, 1 made-up label, 1 made-up h2, 1 apostrophe diff, approach-step rewrite, truncated CTA.**

---

## 9. TRAINING — `src/pages/Training.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 170 | Hero: "Elite Training & Capacity Building" | Training.tsx:84 | ✓ |
| — | — | label "Training Programs" | Training.tsx:82 | **MADE-UP** |
| 2 | line 171 | Sub-headline | Training.tsx:87–89 | ✓ |
| 3 | line 172 | Full Intro para 1 | Training.tsx:106–112 | ✓ |
| 4 | line 173 | Full Intro para 2 | Training.tsx:114–118 | ✓ |
| — | — | "From Knowledge to Muscle Memory" h2 + "Introduction" label | Training.tsx:99–103 | **MADE-UP** |
| 5 | line 174 bold | "Security Training" + body (precision shooting, Krav Maga, surveillance…) | Training.tsx:6–15 — body rewritten/condensed; bullet list "details" is invented from parsing the doc but the original sentence is shortened | ✗ doc sentence shortened; made-up bullet list |
| 6 | line 175 bold | "Travel Safety & HEAT Training" + body | Training.tsx:17–25 — same pattern: shortened body + invented bullet list | ✗ shortened; made-up bullet list |
| 7 | line 176 bold | "Medical Training" + body | Training.tsx:27–35 — shortened, dropped "® Stop The Bleed®" registered marks + invented bullet list | ✗ shortened, registered mark dropped |
| 8 | line 177 bold | "What You Gain" | Training.tsx:158 | ✓ |
| 9 | lines 178–182 | 5 gain bullets | Training.tsx:38–44 | ✓ |
| 10 | line 183 bold | "Our Approach" | Training.tsx:182 | ✓ |
| 11 | lines 184–187 | 4 approach steps | Training.tsx:46–63 | ✗ titles reworded |
| 12 | line 188 | CTA: "Build real resilience today." | Training.tsx:205–206 "Build Real Resilience Today" | ✗ casing |
| 13 | line 189 | Button: "Request a Confidential Training Consultation." | Training.tsx:213 | ✓ |

**Summary: 7/13 verbatim, 3 program bodies shortened + made-up bullet lists, 1 made-up label, 1 made-up h2, approach rewrite, CTA casing.**

---

## 10. CONTACT — `src/pages/Contact.tsx` + `src/components/Contact.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 197 | Headline: "Start a Confidential Conversation" | Contact.tsx:19 hero + Contact.tsx:53–56 in-form h2 | ✓ (rendered twice — hero h1 + form h2) |
| — | — | label "Get in Touch" (page) / "Contact" (form) | Contact.tsx:17, 51 | **MADE-UP** |
| 2 | line 198 | Form intro: "We respond within 12 hours. All inquiries are handled with the highest level of discretion and personal attention." | components/Contact.tsx:57–60 | ✓ |
| 3 | line 199 | CTA Button: "Send Message Securely" | components/Contact.tsx:183, 189 | ✓ |
| 4 | line 200 | Contact Details block (KASPIT Security – Part of the KASPIT Group Vienna, Austria … Phone: [add your number] Email: [add your email]) | components/Contact.tsx:71–99: Vienna + branches Germany/Israel ✓; Phone "+43 (0) 664 344 4616" (real number, not placeholder); Email "office@kaspit.net" (real, not placeholder) | ✓ real data supplied (doc had placeholders) |
| 5 | line 201 | "We are ready when you are." | components/Contact.tsx:115–117 | ✓ |
| — | — | Name / Email / Subject / Message form fields | components/Contact.tsx:122–177 | **MADE-UP** form structure (doc doesn't specify fields but this is standard) |
| — | — | "24/7 Emergency / Command center always active" block | components/Contact.tsx:102–112 | **MADE-UP** |
| — | — | "All communications are encrypted and handled with strict confidentiality." | components/Contact.tsx:196–198 | **MADE-UP** |
| — | — | Post-submit: "Message Received / We will respond within 12 hours with absolute discretion." | components/Contact.tsx:208–209 | **MADE-UP** (derivative of doc) |

**Summary: 5/5 doc items present; form fields + emergency block + encryption line + confirmation are all additions not in doc (acceptable for a functional contact form).**

---

## 11. FOOTER — `src/components/Footer.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 204 | Tagline: "KASPIT Security – Austria's Elite Intelligence-Led Security Atelier Part of the international KASPIT Group" | Footer.tsx:32–34 "Austria's elite intelligence-led security atelier. Part of the international KASPIT Group." | ✗ prefix "KASPIT Security –" dropped; lowercase "elite intelligence-led"; period added |
| 2 | line 205 | Quick links: Services • Training • Security Consulting & Audits • The KASPIT Advantage • About Us • **Insights** | Footer.tsx:3–10: Services ✓ / Training ✓ / Security Consulting & Audits ✓ / The KASPIT Advantage ✓ / About Us ✓ / Contact (extra, doc has Insights) | ✗ "Insights" replaced with "Contact" (no Insights page exists) |
| 3 | line 206 | "© 2026 KASPIT Security • All rights reserved" | Footer.tsx:112–114 uses `new Date().getFullYear()` + middot separator | ✓ (dynamic year, separator consistent) |
| — | — | "Services" link list (5 items), "Get in Touch" block, LinkedIn icon, Imprint/Terms links, "Part of the international KASPIT Group" tag | Footer.tsx:12–18, 96–105, 41–58, 116–129 | **MADE-UP** (footer is expanded beyond doc spec) |

**Summary: 1/3 doc items verbatim, 1 tagline rephrased, 1 "Insights" missing (no page exists yet).**

---

## 12. SERVICES OVERVIEW — `src/pages/Services.tsx` (not in doc)

Doc has no `/services` overview section — it jumps from Advantage → Security Management. Everything on this page is **MADE-UP**:
- Hero label "Our Services" + h1 "Strategic Security Services"
- Hero sub "From investigations to emergency response, every service is intelligence-led…"
- 6 service cards with made-up desc paragraphs + 4-tag capability lists each (Services.tsx:6–49)
- CTA h2 "Experience the Difference" + copy "Request your confidential risk assessment today…"

Box **titles** now match the doc hero headlines 1:1 (fixed earlier this session):
- 01 Intelligence-Driven Investigations ✓
- 02 Strategic Security Management, Consulting & Audits ✓
- 03 Independent Security Audits & Compliance Reviews ✓
- 04 Emergency Assistance & Duty of Care ✓
- 05 Security Intelligence & Risk Consulting ✓
- 06 Elite Training & Capacity Building ✓

**Summary: Entire page is made-up relative to doc. Box titles fixed; descriptions + capabilities + hero are not in doc.**

---

## Priority Fix List (recommended, in order)

1. **Homepage Final CTA** casing — change "Ready to Secure What Matters Most?" → "Ready to secure what matters most?" to match doc line 11. Remove or demote made-up "Take the First Step" label + "Every conversation begins with discretion…" paragraph + "Free · No obligation · Absolute confidentiality" line.
2. **Homepage Primary Button** — append "(free & no obligation)" to match doc line 12.
3. **Homepage Stats bar** (20+ / 3 / 24/7 / 100%) — confirm with Maxim or remove (not in doc).
4. **Advantage page hero** — restore "Security" in headline ("Why KASPIT Security Stands Alone"). Remove extra sub-headline sentence "While others offer standard guarding…".
5. **Advantage page 6-card grid** (Cutting-Edge Tech / Intelligence-Led Approach / Strategic Consulting / Global Reach / Absolute Discretion / Personal Leadership) — entirely invented. Remove or confirm with client.
6. **About page** — fix "Our Story / Built on Principles" section heading back to "Company Story". Replace "--" with "—" em-dashes across the page. Fix "Meet Maxim personally." casing + period. Remove made-up credentials grid + "Discover how KASPIT can protect…" body.
7. **Service subpage CTAs** (SM, SA, Inv, EA, Intel) — all CTA h2s have been reworded/Title Cased and often have made-up body paragraphs. Restore doc CTA lines verbatim.
8. **Training programs** — each of the 3 programs (Security Training / HEAT / Medical) has been shortened and given a made-up bullet list. Restore full doc paragraphs; drop or restructure the invented bullet lists. Keep "®" on "Stop The Bleed®" per doc.
9. **"Introduction" h2 blocks** on all 6 service subpages — remove the invented poetic h2s ("Lasting Resilience By Design", "Beyond Standard Checklists", "Transform Uncertainty Into Clarity", "Your Safety Is Our Mission", "The Ultimate Competitive Advantage", "From Knowledge to Muscle Memory"). Doc has no such heading — it's just a "Full Introduction" marker.
10. **Service labels** ("Service 0X — …") — confirm with Maxim if these are wanted; not in doc.
11. **Approach step titles** (all 6 service subpages) — doc uses sentence case ("Comprehensive risk assessment"); code uses Title Case ("Comprehensive Risk Assessment"). Align.
12. **Footer tagline** — restore "KASPIT Security – Austria's Elite Intelligence-Led Security Atelier. Part of the international KASPIT Group." with uppercase "Elite Intelligence-Led Security Atelier" per doc.
13. **Footer quick links** — doc has "Insights" (no page yet). Either add an Insights page or confirm omission.
14. **Services overview page** (`/services`) — every paragraph + tag list is invented. Either confirm with Maxim that overview copy is dev-authored, or remove and let homepage + subpage titles carry the weight.
15. **Punctuation/dash cleanup** across all pages — standardize to en-dash "–" and em-dash "—" per doc; remove "--" ASCII substitutes.

---

## Overall counts (excluding trivial whitespace)

- **Pages audited:** 11 (+ Services overview as non-doc extra)
- **Verbatim matches:** ~73
- **Wording/casing/punctuation deviations:** ~25
- **Made-up headings/labels/paragraphs:** ~22
- **Missing doc copy:** ~3 (Insights link, "(free & no obligation)", Stop-The-Bleed registered mark)

The site reads as a "design-first, doc-adapted" implementation — not a 1:1 transcription. The services cards + homepage Welcome section + 6 subpage heroes are now doc-accurate (this session). The biggest remaining divergences are: the entire Advantage 6-card grid, the Training program bullet lists, the 6 "Introduction" h2 section headings, the Services overview page, and CTA sections across the 6 service subpages.
