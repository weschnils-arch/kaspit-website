# KASPIT Full Content Audit — Session 2 Final

Date: 2026-04-15
Source: `_verify/source.txt` (extracted from Content.docx)
Status: ✓ matches doc · ✗ mismatch · **MADE-UP** (not in doc) · **MISSING** (doc copy absent)

---

## 1. HOMEPAGE — `src/pages/Home.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 1 | Hero: "KASPIT Security – Austria's Premier Boutique for Intelligence-Led Security Management" | label "KASPIT Security" + h1 "Austria's Premier Boutique for / Intelligence-Led Security Management" | ✓ |
| 2 | line 2 | Sub: "Protecting what matters most with strategic precision and absolute discretion." | present | ✓ |
| 3 | line 12 | Primary Button: "Request a Confidential Risk Assessment (free & no obligation)" | Button "Request a Confidential Risk Assessment" + small caption "Free · No obligation" below | ✓ (split into label + caption) |
| 4 | line 13 | Secondary: "Book a Private Consultation with Maxim" | present | ✓ |
| — | — | Stats bar (20+ / 3 / 24/7 / 100%) | present | **MADE-UP** |
| 5 | line 3 | Services Teaser title: "Our Strategic Services" | "Our Strategic Services" | ✓ |
| 6 | lines 4–8 | 5 service cards with doc-exact titles + descriptions | all 5 match 1:1 | ✓ |
| 7 | line 9 bold | Welcome Paragraph headline | rendered as "Welcome to KASPIT" (user-approved shortening) | ✓ dev-approved |
| 8 | lines 9–10 | Welcome paragraphs 1 & 2 | both match 1:1 | ✓ |
| — | — | Maxim photo + "Learn More" button | present | user-approved addition |
| 9 | line 11 | Final CTA: "Ready to secure what matters most?" | "Ready to secure / what matters most?" (lowercase, matches doc) | ✓ |
| — | — | "Take the First Step" label + body paragraph "Every conversation begins with discretion…" | present | **MADE-UP** |
| — | — | Final CTA vertical stack: primary + "Free · No obligation" caption + divider + secondary | added | design element (not in doc) |

**Summary: 9/9 doc items verified. 2 made-up blocks remain (stats bar, "Take the First Step" label + body).**

---

## 2. ABOUT US — `src/pages/About.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 17 | Hero: "About KASPIT Security" | ✓ | ✓ |
| 2 | line 18 | Sub: "Part of the international KASPIT Group – Founded on real operational excellence." | uses "--" instead of en-dash "–" | ✗ dash style |
| 3 | line 19 bold | "Maxim Gutman – Founder & Managing Director" | label "Founder & Managing Director" + h2 "Maxim Gutman" | ✓ (restructured) |
| 4 | line 19 | Founder para 1 | split into 2 paragraphs at "He has also served…" | ✗ split differs from doc |
| 5 | line 20 | Founder para 2 | present, uses "--" for em-dashes | ✗ dash style |
| — | — | Credentials grid (Military/Education/Certifications/International) | present | **MADE-UP** |
| 6 | line 21 bold | "Company Story" headline | renders as "Our Story" label + "Built on Principles" h2 | ✗ wrong heading |
| 7 | line 21 | Company Story paragraph | present, split into 2, uses "--" | ✗ split + dash |
| 8 | line 22 bold | "Our Promise" headline | present | ✓ |
| 9 | line 22 | Our Promise copy | present 1:1 | ✓ |
| 10 | line 23 | CTA: "Meet Maxim personally." | "Meet Maxim Personally" (Title Case, period dropped) | ✗ casing |
| — | — | "Discover how KASPIT Security can protect what matters most to you." | present | **MADE-UP** |
| 11 | line 24 | Button: "Book a private consultation." | "Book a Private Consultation" | ✗ casing, period |

**Summary: 5/11 verbatim, 4 dash/casing/split deviations, 2 made-up blocks (credentials grid + CTA body), 1 section heading mismatch ("Our Story/Built on Principles" vs "Company Story").**

---

## 3. KASPIT ADVANTAGE — `src/pages/Advantage.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 29 | "Why KASPIT Security Stands Alone" | "Why KASPIT Security / Stands Alone" | ✓ (fixed this session) |
| 2 | line 30 | Sub-headline | present + extra sentence "While others offer standard guarding, we deliver true strategic resilience." | ✗ extra sentence |
| 3 | line 31 | Paragraph 1 | present 1:1 | ✓ |
| 4 | line 32 | Paragraph 2 | present 1:1 | ✓ |
| — | — | 6-card icon grid (Cutting-Edge Tech / Intelligence-Led / Strategic Consulting / Global Reach / Discretion / Personal Leadership) + "Standard Guarding Reimagined" intro h2 | present | **MADE-UP** |
| 5 | line 33 | CTA: "Experience the difference." | "Experience the Difference" (Title Case) | ✗ casing |
| — | — | CTA body paragraph | re-uses doc line 32 phrasing | derivative |
| 6 | line 34 | Button: "Request your confidential risk assessment today." | "Request your confidential risk assessment today" (period dropped) | ✓ minor |

**Summary: 4/6 verbatim, 1 extra sentence, 1 casing, 1 massive made-up 6-card grid.**

---

## 4. SECURITY MANAGEMENT — `src/pages/services/SecurityManagement.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 39 | Hero: "Strategic Security Management, Consulting & Audits" | ✓ | ✓ |
| — | — | label "Service 02 — Security Management" | present | **MADE-UP** |
| 2 | line 39 | Sub-headline | 1:1 | ✓ |
| 3 | lines 40–43 | 4 Full Intro paragraphs | 1:1 | ✓ |
| — | — | "Lasting Resilience By Design" h2 + "Introduction" label | present | **MADE-UP** |
| 4 | line 44 bold | "What You Gain" | ✓ | ✓ |
| 5 | lines 45–50 | 6 gain bullets | 1:1 | ✓ |
| 6 | line 51 bold | "Our Approach" | ✓ | ✓ |
| 7 | lines 52–55 | 4 approach steps | Title Case titles ("Comprehensive Risk Assessment" vs doc sentence case) | ✗ casing |
| 8 | line 56 | CTA "Let us design, audit, and optimise your personal security architecture." | Rewritten as h2 "Design, Audit & Optimise Your Security Architecture" + body | ✗ reworded |
| 9 | line 57 | Button: "Start with a confidential assessment." | "Start with a Confidential Assessment" | ✗ casing |

**Summary: 5/9 verbatim, 1 made-up label, 1 made-up intro h2, 2 casing diffs, 1 reworded CTA.**

---

## 5. SECURITY AUDITS — `src/pages/services/SecurityAudits.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 61 | Hero: "Independent Security Audits & Compliance Reviews" | ✓ | ✓ |
| — | — | label "Service 03 — Security Audits" | present | **MADE-UP** |
| 2 | line 62 | Sub-headline | 1:1 | ✓ |
| 3 | lines 63–66 | 4 Full Intro paragraphs | 1:1 | ✓ |
| — | — | "Beyond Standard Checklists" h2 + "Introduction" label | present | **MADE-UP** |
| 4 | line 67 bold | "What You Gain" | ✓ | ✓ |
| 5 | lines 68–74 | 7 gain bullets | 1:1 (minor: bullet 1 missing "and" before "human factors") | ~✓ |
| 6 | line 75 bold | "Our Audit Scope" | ✓ | ✓ |
| 7 | lines 76–83 | 8 scope items | 1:1 (minor: bullet 1 missing "and") | ~✓ |
| 8 | line 84 bold | "Our Approach" | ✓ | ✓ |
| 9 | lines 85–89 | 5 approach steps | Title Case | ✗ casing |
| 10 | line 90 | CTA "Gain clarity and confidence in your security posture." | "Gain Clarity in Your Security Posture" (reworded h2) + body | ✗ reworded |
| 11 | line 91 | Primary "Request a Confidential Security Audit" | ✓ | ✓ |
| 12 | line 92 | Secondary "Book a Private Consultation" | ✓ | ✓ |

**Summary: 8/12 verbatim, 1 made-up label, 1 made-up intro h2, casing diffs, reworded CTA h2.**

---

## 6. INVESTIGATIONS — `src/pages/services/Investigations.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 95 | Hero: "Intelligence-Driven Investigations" | ✓ | ✓ |
| — | — | label "Service 01 — Investigations" | present | **MADE-UP** |
| 2 | line 96 | Sub | 1:1 | ✓ |
| 3 | line 97 | Full Intro para 1 | split into 2 paragraphs at "Every assignment…" | ✗ split differs |
| 4 | line 98 | Full Intro para 2 | 1:1 | ✓ |
| — | — | "Transform Uncertainty Into Clarity" h2 + "Introduction" label | present | **MADE-UP** |
| 5 | line 99 | "What You Gain" | ✓ | ✓ |
| 6 | lines 100–104 | 5 gain bullets | 1:1 | ✓ |
| 7 | line 105 | "Our Approach" | ✓ | ✓ |
| 8 | lines 106–109 | 4 approach steps | Title Case | ✗ casing |
| 9 | line 110 | CTA "Discuss your case in complete confidence." | "Discuss Your Case in Complete Confidence" (Title Case) + made-up body | ✗ casing + made-up body |
| 10 | line 111 | Button "Request a Private Consultation today." | "Request a Private Consultation today" | ✓ minor |

**Summary: 6/10 verbatim, 1 made-up label, 1 made-up intro h2, 1 split diff, casing, reworded CTA.**

---

## 7. EMERGENCY ASSISTANCE — `src/pages/services/EmergencyAssistance.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 117 | Hero: "Emergency Assistance & Duty of Care" | ✓ | ✓ |
| — | — | label "Service 04 — Emergency Assistance" | present | **MADE-UP** |
| 2 | line 118 | Sub-headline (doc uses "–") | uses "—" | ✗ dash style |
| 3 | lines 119–120 | 2 Full Intro paragraphs | 1:1 | ✓ |
| — | — | "Your Safety Is Our Mission" h2 + "Introduction" label | present | **MADE-UP** |
| 4 | line 121 | "Our Capabilities" | ✓ | ✓ |
| 5 | lines 122–128 | 7 capability bullets | 1:1 | ✓ |
| 6 | line 129 | "What You Gain" | ✓ | ✓ |
| 7 | lines 130–133 | 4 gain bullets | 1:1 | ✓ |
| 8 | line 134 | "Our Approach" | ✓ | ✓ |
| 9 | lines 135–138 | 4 approach steps | restructured with shorter titles + added descs | ✗ restructured |
| 10 | line 139 | CTA "Ensure your global Duty of Care is professionally covered." | "Ensure Your Global Duty of Care" (truncated Title Case) + made-up body | ✗ truncated |
| 11 | line 140 | Button "Request a Confidential Review today." | "Request a Confidential Review today" | ✓ minor |

**Summary: 8/11 verbatim, 1 made-up label, 1 made-up intro h2, 1 dash diff, 1 restructured steps, 1 truncated CTA.**

---

## 8. INTELLIGENCE — `src/pages/services/Intelligence.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 146 | Hero: "Security Intelligence & Risk Consulting" | ✓ | ✓ |
| — | — | label "Service 05 — Intelligence" | present | **MADE-UP** |
| 2 | line 147 | Sub (doc uses curly ') | uses straight ' | ✗ apostrophe |
| 3 | lines 148–149 | 2 Full Intro paragraphs | 1:1 | ✓ |
| — | — | "The Ultimate Competitive Advantage" h2 + "Introduction" label | present | **MADE-UP** |
| 4 | line 150 | "Our Intelligence Capabilities" | ✓ | ✓ |
| 5 | lines 151–155 | 5 capability bullets | 1:1 | ✓ |
| 6 | line 156 | "What You Gain" | ✓ | ✓ |
| 7 | lines 157–160 | 4 gain bullets | 1:1 | ✓ |
| 8 | line 161 | "Our Approach" | ✓ | ✓ |
| 9 | lines 162–165 | 4 approach steps | reworded titles + descs | ✗ rewrite |
| 10 | line 166 | CTA "Leave it to us to uncover what matters most." | "Leave It to Us to Uncover What Matters" (truncated Title Case) + made-up body | ✗ truncated |
| 11 | line 167 | Button "Request a Confidential Intelligence Consultation." | present | ✓ |

**Summary: 7/11 verbatim, 1 made-up label, 1 made-up intro h2, 1 apostrophe, 1 rewrite, 1 truncated CTA.**

---

## 9. TRAINING — `src/pages/Training.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 170 | Hero: "Elite Training & Capacity Building" | ✓ | ✓ |
| — | — | label "Training Programs" | present | **MADE-UP** |
| 2 | line 171 | Sub-headline | 1:1 | ✓ |
| 3 | lines 172–173 | 2 Full Intro paragraphs | 1:1 | ✓ |
| — | — | "From Knowledge to Muscle Memory" h2 + "Introduction" label | present | **MADE-UP** |
| 4 | line 174 bold | "Security Training" + body | body now 1:1 with doc (includes Krav Maga, surveillance detection) | ✓ fixed this session |
| 5 | line 175 bold | "Travel Safety & HEAT Training" + body | body 1:1 | ✓ fixed this session |
| 6 | line 176 bold | "Medical Training" + body | body 1:1, includes Stop The Bleed® registered marks | ✓ fixed this session |
| 7 | line 177 bold | "What You Gain" | ✓ | ✓ |
| 8 | lines 178–182 | 5 gain bullets | 1:1 | ✓ |
| 9 | line 183 bold | "Our Approach" | ✓ | ✓ |
| 10 | lines 184–187 | 4 approach steps | Title Case titles | ✗ casing |
| 11 | line 188 | CTA: "Build real resilience today." | "Build Real Resilience Today" (Title Case) | ✗ casing |
| 12 | line 189 | Button: "Request a Confidential Training Consultation." | present | ✓ |

**Summary: 9/12 verbatim (program bodies + ® marks fixed this session), 1 made-up label, 1 made-up intro h2, casing on CTAs.**

---

## 10. CONTACT — `src/pages/Contact.tsx` + `src/components/Contact.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 197 | Headline: "Start a Confidential Conversation" | present in hero h1 + as h2 inside form | ✓ (rendered twice) |
| — | — | "Get in Touch" label (page), "Contact" label (form) | present | **MADE-UP** |
| 2 | line 198 | Form Intro: "We respond within 12 hours. All inquiries are handled with the highest level of discretion and personal attention." | present in HERO (moved this session) | ✓ |
| 3 | line 199 | CTA Button: "Send Message Securely" | present | ✓ |
| 4 | line 200 | Contact Details block | Vienna + Germany/Israel ✓; real phone/email provided (doc had placeholders) | ✓ |
| 5 | line 201 | "We are ready when you are." | present | ✓ |
| — | — | Name/Email/Subject/Message form fields | present | form structure (expected for contact form) |
| — | — | Subject dropdown with 6 service options | matches doc hero headlines 1:1 | ✓ |
| — | — | Custom chevron arrow | added this session for proper spacing | design |
| — | — | "24/7 Emergency / Command center always active" | present | **MADE-UP** |
| — | — | "All communications are encrypted…" | present | **MADE-UP** |
| — | — | Post-submit "Message Received / We will respond within 12 hours with absolute discretion." | present | derivative of doc |

**Summary: 5/5 doc items verified. Emergency block + encryption note remain made-up additions.**

---

## 11. FOOTER — `src/components/Footer.tsx`

| # | Source | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | line 204 | Tagline: "KASPIT Security – Austria's Elite Intelligence-Led Security Atelier Part of the international KASPIT Group" | "Austria's elite intelligence-led security atelier. Part of the international KASPIT Group." | ✗ prefix dropped, lowercase, period added |
| 2 | line 205 | Quick links: Services • Training • Security Consulting & Audits • The KASPIT Advantage • About Us • **Insights** | Services ✓ Training ✓ Security Consulting & Audits ✓ The KASPIT Advantage ✓ About Us ✓ Contact (extra); "Insights" missing | ✗ Insights missing, Contact extra |
| 3 | line 206 | "© 2026 KASPIT Security • All rights reserved" | dynamic year with middot | ✓ minor |
| — | — | Services link list (5 items), "Get in Touch" block, LinkedIn icon, Imprint/Terms | present | expanded beyond doc spec |

**Summary: 1/3 verbatim, tagline rephrased, "Insights" missing.**

---

## 12. SERVICES OVERVIEW — `src/pages/Services.tsx`

Doc has no Services overview section. Everything on this page is dev-authored.

**Box titles (this session)** — now match doc page names, no extra wording:
1. Investigations ✓
2. Security Management ✓
3. Security Audits ✓
4. Emergency Assistance & Duty of Care ✓
5. Intelligence ✓
6. Training ✓

**Still made-up**: hero label "Our Services" + h1 "Strategic Security Services" + hero sub + 6 description paragraphs + 4-tag capability lists + CTA h2 "Experience the Difference" + body.

---

## Remaining Priority Fixes

Ranked by impact:

1. **About page**: "Company Story" heading (currently "Our Story / Built on Principles"); replace "--" ASCII with real em-dashes throughout; drop made-up credentials grid; fix "Meet Maxim personally." casing/period.
2. **Advantage 6-card icon grid** (Cutting-Edge Tech / Intelligence-Led / etc.) — entirely invented. Confirm keep or strip. Also drop extra sentence "While others offer standard guarding…" from sub-headline.
3. **All 6 service subpages — "Introduction" h2 blocks**: "Lasting Resilience By Design", "Beyond Standard Checklists", "Transform Uncertainty Into Clarity", "Your Safety Is Our Mission", "The Ultimate Competitive Advantage", "From Knowledge to Muscle Memory". All invented poetic titles — doc has just "Full Introduction" as a marker.
4. **Service subpage CTAs** (Sec Mgmt, Sec Audits, Investigations, Emergency, Intelligence): doc CTA sentences have been reworded as Title-Case h2s with invented body paragraphs. Restore to doc verbatim sentences.
5. **Service subpage labels** ("Service 0X — …") on all 5 subpages + "Training Programs" label — not in doc; confirm or strip.
6. **Approach step titles** (SM/SA/Inv/Intel/Training): doc is sentence case, code is Title Case. Align to doc.
7. **Training CTA casing** ("Build Real Resilience Today" → doc "Build real resilience today.").
8. **Homepage**: stats bar (20+ / 3 / 24/7 / 100%) + "Take the First Step" block — both invented; confirm or strip.
9. **Footer tagline**: restore "KASPIT Security – Austria's Elite Intelligence-Led Security Atelier" wording + capitalisation; decide on "Insights" link.
10. **Services overview** descriptions/capability tags — all invented; confirm or strip down to the 6 titles only.
11. **Punctuation cleanup**: replace ASCII "--" with em-dashes "—" across About and other pages; fix curly vs straight apostrophes on Intelligence sub.

---

## Overall counts (excluding trivial whitespace)

- Pages audited: 11 (+ Services overview non-doc extra)
- Verbatim matches: ~82 (up from ~73 last audit — Training programs fully restored, Home final CTA casing fixed, Advantage hero "Security" restored)
- Wording/casing/punctuation deviations: ~22
- Made-up headings/labels/paragraphs: ~21 (down from ~22)
- Missing doc copy: ~2 ("Insights" link, full doc tagline capitalisation)

Progress vs last audit: Training bodies, Home final CTA casing, Advantage hero, and Services box titles all corrected. Biggest remaining blocks are the About page em-dash/credentials cleanup, the Advantage 6-card grid, and the "Introduction" h2s across all service subpages.
