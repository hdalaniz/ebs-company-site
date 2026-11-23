# RiseCurrent P4 — Pre-Implementation Impact Audit

> **P4 brief supersedes this audit** on: (1) Launch is available with `/products/launch`, (2) minimal CTA analytics are required, (3) `https://risecurrentsystems.com` is the live canonical domain.

**Repository:** `ebs-company-site` only (`/agent/repos/ebs-company-site`)  
**Mode:** Read-only inventory. No repo files modified. `ebs-insight-v2` not inspected for implementation.  
**Baseline commit:** `80e973d` on `main` (P1B merge; matches `origin/main` at audit time)  
**Production pilot URL (current):** `https://ebs-company-site.vercel.app`  
**Target customer domain (future):** `https://risecurrentsystems.com` (www → apex)  
**Supporting file inventory:** [`/cursor/stores/bc-33688f6d-4ff0-4335-a6f8-e162b5228cca/internal/risecurrent-rebrand-impact-inventory-company-site.md`](/cursor/stores/bc-33688f6d-4ff0-4335-a6f8-e162b5228cca/internal/risecurrent-rebrand-impact-inventory-company-site.md) (from [Explore company-site structure](bc-58231238-6dca-5449-adc4-386466223953))

## Business context (authoritative for P4)

| Item | Direction |
| --- | --- |
| Rebrand | Elevate Business Systems / EBS → **RiseCurrent** |
| Future legal entity | RiseCurrent Systems LLC — **do not publish LLC yet** |
| Domain | `https://risecurrentsystems.com` (www → apex) |
| Customer | Home-service businesses |
| Promise | Turn missed demand into booked revenue |
| Journey | **Insight → Launch → Presence** |
| Insight | Diagnose leak / free–low-friction assessment |
| Launch | Starting **$3,500** — conversion foundation (Coming Soon today; scope as brief) |
| Presence | Starting **$399/month** — managed monitoring/optimization (**not** unlimited agency or basic maintenance) |
| Philosophy | Diagnose → Capture → Convert → Prove → Learn |
| Visual | Preserve PNW/mountain direction unless asset carries old brand identity |

**Classification key used below:** **Required for P4** · **Recommended for P4** · **Defer**

---

## 1. Executive Summary

`ebs-company-site` is a static Next.js 16 marketing hub. Customer-facing copy, metadata, nav labels, product names, CTA strings, legal notices, logo title text, and config brand fields still say **Elevate Business Systems / EBS**. The only live conversion path is **Run EBS Insight** → centralized `getInsightUrl("/analyze")` → default Insight origin `https://ebs-insight.vercel.app`. Launch remains **Coming Soon**; Growth / Revenue Intelligence / Assist remain Coming Soon / Future.

P4 impact is **wide but shallow**: mostly string/config/SEO/legal/CTA renames plus offer messaging (journey order, Launch/Presence pricing framing, Presence as managed monitoring). No DB, auth, Stripe, dashboards, or backend exist in this repo. PNW photography and the mountain graphic have **no readable old wordmark** and can be preserved; the logo SVG title currently says “EBS Insight.”

**P1B** is PRODUCTION VERIFIED WITH LIMITATIONS on the company site. **P2** ship blockers (Insight capture → Postgres → `/admin/leads`) are **Insight-side** and do **not** block company-site rebrand implementation planning. Company-site rebrand can proceed independently of capture proof.

**Verdict line:** see §20 end — **READY FOR P4 IMPLEMENTATION**.

---

## 2. Scope & Constraints

| In scope (company-site P4) | Explicitly out of scope |
| --- | --- |
| Customer-visible brand/product naming | Renaming the GitHub/Vercel repo (`ebs-company-site`) |
| Homepage / Presence / About / legal / sign-in copy | Any change in `ebs-insight-v2` |
| CTA labels; keep handoff via `getInsightUrl` | DB, backend, auth, Stripe, dashboards, infra |
| Offer truth: Journey Insight → Launch → Presence; Launch/Presence pricing language | Publishing “RiseCurrent Systems LLC” |
| Metadata / SEO strings | Formal legal counsel rewrite (pilot notices may stay pilot-grade) |
| Logo title / branded filename cleanup where needed | Apex DNS cutover as a hard code prerequisite (can plan separately) |

---

## 3. Brand References Inventory

Central config still owns the old brand:

| Location | Current | P4 note | Class |
| --- | --- | --- | --- |
| `/agent/repos/ebs-company-site/config/site.ts` | `companyName: "Elevate Business Systems"`, `shortName: "EBS"`, description uses Elevate | Primary brand source for layout metadata + CTAs | **Required** |
| `/agent/repos/ebs-company-site/config/brand.ts` | `productName: "EBS"`, `companyName: "Elevate Business Systems"`, asset paths `ebs-*` | Update display names; asset path rename optional | **Required** (names) / **Defer** (path rename) |
| `/agent/repos/ebs-company-site/config/products.ts` | `EBS Presence`, `EBS Growth`, etc. | Rename product display strings; keep route keys unless IA changes | **Required** |

Approximate customer-visible density (source, excluding `.cursor/` and lockfile): **~18** exact “Elevate Business Systems”; product-prefixed “EBS …” strings across Presence/Hero/About/legal/products pages; many more bare “EBS” in prose, nav, CSS token comments/classes.

High-touch UI files (non-exhaustive):

- `/agent/repos/ebs-company-site/components/layout/Header.tsx` — “EBS” / “Elevate Business Systems”; anchors `#how-ebs-works`, `#why-ebs`
- `/agent/repos/ebs-company-site/components/layout/Footer.tsx` — brand + © Elevate…
- `/agent/repos/ebs-company-site/components/marketing/Hero.tsx`, `WhyEbs.tsx`, `GrowthLoop.tsx`, `FinalCta.tsx`, `AboutSections.tsx`, `LocalBusinessBreak.tsx`, `ProductPlatform.tsx`
- `/agent/repos/ebs-company-site/components/products/PresenceSections.tsx` (highest count), `GrowthSections.tsx`, `RevenueSections.tsx`, `AssistSections.tsx`, previews
- Pages: `/agent/repos/ebs-company-site/app/page.tsx`, `about`, `privacy`, `terms`, `signin`, all `app/products/*/page.tsx`
- Docs/README/package name: `/agent/repos/ebs-company-site/README.md`, `package.json` `"name": "ebs-company-site"` — package/repo name **Defer / do not rename**
- Agent rules under `.cursor/rules/*.mdc` still say Elevate/EBS — **Recommended** to update when implementing so agents don’t reintroduce old brand; not customer-facing

Internal identifiers safe to leave for P4 unless cheap: CSS `.ebs-card`, `--ebs-*` tokens, SVG filter ids, component name `WhyEbs`, env **name** `NEXT_PUBLIC_EBS_INSIGHT_URL`, helper `getInsightUrl` — **Defer** (behavior/config centralization matters more than rename).

---

## 4. Assets Inventory

| Asset | Path | Old brand identity? | Recommendation | Class |
| --- | --- | --- | --- | --- |
| Logo mark SVG | `/agent/repos/ebs-company-site/public/branding/logos/ebs-insight-mark.svg` | Title/aria: “EBS Insight”; graphic is teal chart glyph (no wordmark) | Update `<title>` / accessible name to RiseCurrent; optional file rename later | **Required** (title/alt) / **Defer** (filename) |
| Mountain graphic | `/agent/repos/ebs-company-site/public/branding/mountain/ebs-mountain.png` | No readable EBS/Elevate text; PNW mountain + growth line | **Preserve** visual; update `GrowthMountain` alt that embeds `brand.companyName` | **Required** (alt via brand config) / preserve art |
| Hero landscape | `.../photography/hero-landscape.jpg` | Scenic PNW; no brand wordmark | Preserve | — |
| Local neighborhood | `.../photography/local-neighborhood.jpg` | Home-service context; no brand wordmark | Preserve | — |
| CTA valley | `.../photography/cta-valley.jpg` | Scenic; no brand wordmark | Preserve | — |
| Favicon | `/agent/repos/ebs-company-site/app/favicon.ico` | Icon resource (multi-size); treat as brand chrome | Confirm matches RiseCurrent mark after logo update | **Recommended** |
| BrandMark usage | `/agent/repos/ebs-company-site/components/brand/BrandMark.tsx` | `alt={brand.companyName}` | Fixed when `config/brand.ts` updates | **Required** |

---

## 5. Navigation & Information Architecture

**Header** (`Header.tsx`): Logo + EBS / Elevate · Products dropdown (from `products`) · How EBS Works → `/#how-ebs-works` · Why EBS → `/#why-ebs` · About · Get Started → `/products/presence`. **No Sign In** in primary/mobile nav (P1B trust gate — preserve).

**Footer** (`Footer.tsx`): Products · About · Privacy · Terms · © Elevate Business Systems.

**IA gaps vs RiseCurrent journey (Insight → Launch → Presence):**

- Site still frames **Presence as umbrella** with Insight + Launch as paths inside `/products/presence`.
- Homepage “How EBS works” loop is **Presence → Growth → Revenue Intelligence → Assist → Continuous Improvement**, not Insight → Launch → Presence.
- Nav has no top-level Insight or Launch entries (acceptable if Presence remains hub, but copy must teach the new journey).

| Change | Class |
| --- | --- |
| Replace EBS/Elevate in header/footer wordmark | **Required** |
| Rename “How EBS Works” / “Why EBS” labels | **Required** |
| Reframe homepage journey section toward Insight → Launch → Presence (and philosophy) without inventing live Launch/Growth | **Required** |
| Add top-level Insight/Launch nav items | **Defer** (not required if Presence hub stays honest) |
| Rename hash anchors `#how-ebs-works`, `#why-ebs`, `#ebs-launch`, `#ebs-insight` | **Recommended** (update all in-repo links; external deep links may break) |

---

## 6. Routes

App Router pages (all static marketing):

| Route | Role | Brand/pricing impact |
| --- | --- | --- |
| `/` | Homepage hub | Heavy rebrand + journey |
| `/products/presence` | Live Presence + Insight/Launch paths | Heavy; pricing for Launch/Presence |
| `/products/growth` | Coming Soon | Rename only; keep status |
| `/products/revenue-intelligence` | Coming Soon | Rename only; keep status |
| `/products/assist` | Future | Rename only; keep status |
| `/about` | Brand story + Diagnose…Learn | Heavy |
| `/privacy`, `/terms` | Pilot legal | Brand rename; no LLC |
| `/signin` | Honest “no accounts” | Brand rename; keep no-auth truth |

**No route renames required for P4.** Preserve `/products/presence`, `/signin`, privacy/terms. Do not add dashboard/auth routes.

| Change | Class |
| --- | --- |
| Keep existing path structure | **Required** (stability) |
| New marketing routes for pricing-only pages | **Defer** |

---

## 7. Homepage

Composition (`app/page.tsx`): Hero → ProductPlatform → GrowthLoop → WhyEbs → LocalBusinessBreak → PlatformPreview → FinalCta.

Current hero promise is close (“Turn more local demand into booked revenue”) but still elevates **Elevate Business Systems** as eyebrow/body and dual CTAs **Explore EBS Presence** / **Run EBS Insight**, with Insight/Launch path cards (Launch Coming Soon).

| Gap | Class |
| --- | --- |
| Brand eyebrow/name → RiseCurrent as hero-level brand signal | **Required** |
| Promise alignment: “Turn missed demand into booked revenue” | **Required** |
| Teach Insight → Launch → Presence without selling Launch as live | **Required** |
| GrowthLoop / Why EBS sections rebrand + philosophy alignment | **Required** |
| Visual system (PNW photo, teal/navy/warm) preserve | Preserve (**Defer** redesign) |
| Replace Inter with more expressive fonts | **Defer** (existing design system) |

---

## 8. Pricing & Offer Messaging

**Finding:** There is **no** customer-facing Launch **$3,500** or Presence **$399/month** copy anywhere in the company site today. Dollar amounts in Growth/Revenue **previews** (`$7,800`, `$48,240`, etc.) are illustrative UI chrome only — not offer pricing.

| Needed messaging | Current state | Risk | Class |
| --- | --- | --- | --- |
| Launch starting $3,500 — conversion foundation | Launch = Coming Soon / vision preview only | Must not imply purchasable Launch checkout | **Required** (honest “starting at / planned” framing) |
| Presence starting $399/month — managed monitoring/optimization | Presence described as digital foundation / Insight+Launch paths; **not** as managed monthly monitoring | Messaging shift; must not claim unlimited agency or “basic maintenance” | **Required** |
| Insight free / low-friction assessment | Partially true (“Available now”, run analysis); not framed as free assessment price | Clarify low-friction / diagnostic | **Required** |
| Explicit “not unlimited agency / not basic maintenance” | About has “Not a website agency” | Strengthen on Presence offer | **Recommended** |

---

## 9. CTAs

Central labels in `ctaCopy` (`config/site.ts`):

- `presence`: “Explore EBS Presence”
- `insight`: “Run EBS Insight”
- `launch`: “Preview EBS Launch”

**`getInsightUrl("/analyze")` call sites (keep helper; update labels only):**

- `Hero.tsx` (2), `FinalCta.tsx`, `AboutSections.tsx`
- `PresenceSections.tsx` (3)
- `GrowthSections.tsx` (2), `RevenueSections.tsx` (2), `AssistSections.tsx` (2)

Other CTAs: Get Started → Presence; Choose your path; Preview Launch → `#ebs-launch`; product card CTAs from `products.ts`.

| Change | Class |
| --- | --- |
| Rename CTA labels to RiseCurrent product names | **Required** |
| Keep all Insight hrefs on `getInsightUrl("/analyze")` — no hardcoded hosts in components | **Required** |
| Preserve same-tab external handoff behavior (`ButtonLink` + `rel`) | **Required** |
| Add paid checkout / Stripe CTAs | **Defer** / out of scope |

---

## 10. Insight Handoff

| Item | Detail |
| --- | --- |
| Helper | `getInsightUrl(path)` in `/agent/repos/ebs-company-site/config/site.ts` |
| Default origin constant | `DEFAULT_EBS_INSIGHT_ORIGIN` → `https://ebs-insight.vercel.app` |
| Env override (**name only**) | `NEXT_PUBLIC_EBS_INSIGHT_URL` (origin only; no `/analyze`) |
| Documented fallback alias | `https://ebs-insight-v2.vercel.app` (comments in `site.ts` / `.env.example` / README) |
| Example file | `/agent/repos/ebs-company-site/.env.example` |

| Change | Class |
| --- | --- |
| Keep centralized helper; never scatter Insight hosts in components | **Required** |
| Keep env var **name** `NEXT_PUBLIC_EBS_INSIGHT_URL` for P4 (avoid silent prod break) | **Recommended** |
| Change default Insight hostname only when Insight’s public origin actually changes | **Defer** until Insight domain cutover (Insight-side) |
| Rename helper/`DEFAULT_*` identifiers | **Defer** |

---

## 11. Metadata & SEO

| Surface | Current | Class |
| --- | --- | --- |
| Root `app/layout.tsx` | Title template uses `site.companyName`; description from `site.description` | **Required** via config |
| `app/page.tsx` | Absolute title “Elevate Business Systems \| …” | **Required** |
| Product pages | Absolute titles “EBS Presence \| …”, etc. | **Required** |
| About / Privacy / Terms / Sign In | Elevate/EBS in titles/descriptions | **Required** |
| Open Graph / Twitter cards | **Not configured** | **Recommended** (basic OG once brand set) |
| `sitemap.xml` / `robots.txt` | **Absent** | **Defer** |
| Canonical / `metadataBase` for `risecurrentsystems.com` | **Absent** | **Recommended** when domain cutover planned |
| Structured data / JSON-LD | **Absent** | **Defer** |

---

## 12. Legal & Footer

Pilot Privacy (`/privacy`) and Terms (`/terms`) repeatedly name Elevate Business Systems / EBS; state no accounts; describe Insight separately; note Coming Soon products; explicitly **not** formal legal review.

Footer © “Elevate Business Systems. Built for local businesses.”

| Change | Class |
| --- | --- |
| Replace Elevate/EBS with RiseCurrent in Privacy/Terms/footer | **Required** |
| Do **not** publish RiseCurrent Systems LLC | **Required** (constraint) |
| Keep pilot/disclaimer language until counsel review | **Recommended** |
| Formal legal rewrite | **Defer** (also P2 SHOULD FIX) |
| Add contact email/mailto | **Defer** (optional; P2 LATER) |

---

## 13. Forms

**No lead, contact, newsletter, or waitlist forms** exist on the company site. Sign-in page is messaging only (no credentials UI). Help capture lives on Insight (out of scope).

| Change | Class |
| --- | --- |
| Do not add Stripe/checkout/auth forms in P4 | Out of scope |
| Optional concierge mailto | **Defer** |

---

## 14. Analytics

**No** Google Analytics, GTM, Plausible, PostHog, or Vercel Analytics packages/scripts found in dependencies or app code. P2 pilot metrics are spreadsheet-based.

| Change | Class |
| --- | --- |
| Leave analytics out of P4 | **Defer** |
| Do not invent tracking as a rebrand dependency | — |

---

## 15. Accessibility & Mobile Risk for P4

Existing strengths (from P1B production check + code): focus-visible styles, `min-h-11` tap targets, Escape closes menus, `prefers-reduced-motion` / `motion-safe` / `motion-reduce`, mobile menu, no Sign In trap.

P4-specific risks:

| Risk | Mitigation | Class |
| --- | --- | --- |
| Longer brand string “RiseCurrent” / “RiseCurrent Systems” overflows header truncate | Check desktop + 375px wordmark | **Required** (verify in QA) |
| Renamed hash anchors break in-page skip/nav | Update all internal links together | **Recommended** |
| Price/offer blocks clutter hero if bolted on | Keep hero brand + one promise + CTAs; put pricing in Presence/offer sections | **Required** (IA/design discipline) |
| External Insight CTA still needs visible focus / large hit area | Preserve `ButtonLink` patterns | **Required** |
| Cold `npm run verify` `LayoutProps` quirk (needs `.next/types`) | Known tooling limitation; warm verify / Vercel build OK | **Defer** (tooling; not brand) |

---

## 16. Tests

| Finding | Detail |
| --- | --- |
| Automated unit/e2e | **None** (`package.json` has `lint`, `typecheck`, `build`, `verify` only) |
| QA model | Manual per `.cursor/rules/04-qa.mdc` + workflow skills |
| P1B evidence | Manual + Playwright smoke artifacts in Project store media |

| Change | Class |
| --- | --- |
| Manual rebrand QA checklist (brand strings, CTAs, handoff, 375px, Privacy/Terms, no LLC) | **Required** |
| Automated CTA/`getInsightUrl` regression test | **Defer** / **Recommended** if cheap later |
| Expand verify script for typed-routes cold start | **Defer** |

---

## 17. Environment & Deploy Risk

| Item | Risk | Class |
| --- | --- | --- |
| Production host today | `ebs-company-site.vercel.app` (pilot) | Document until apex cutover — **Defer** DNS as code blocker |
| Target domain | `risecurrentsystems.com` (www → apex) | Infra/DNS — **Defer** from marketing PR if needed; plan separately |
| `NEXT_PUBLIC_EBS_INSIGHT_URL` | If renamed without Vercel update, handoff breaks | Keep name — **Recommended** |
| Default Insight origin still `ebs-insight.vercel.app` | Correct until Insight rebrands domain | **Defer** hostname change |
| `next.config.ts` | Empty; no redirects yet | Apex/www redirects — **Defer** / infra |
| Repo / package / Vercel project name `ebs-company-site` | Cosmetics only | **Defer** / do not rename in P4 |
| No secrets in company-site for marketing build | Low | — |

---

## 18. P1B / P2 Ship Gates vs P4 Planning

| Gate | Status | Blocks company-site P4 rebrand? |
| --- | --- | --- |
| P1B company-site trust & handoff | **PRODUCTION VERIFIED WITH LIMITATIONS** (`docs/presence-p1b-production-check.md`) | **No** — no customer-facing regression found that blocks planning |
| P1B limitations (Vercel domain API, cold verify LayoutProps, apex not customer host) | Documented | **No** for rebrand planning |
| P2 capture SHIP BLOCKER (Production help → Postgres → `/admin/leads`) | **UNPROVEN** — Insight-side | **No** for company-site rebrand; **Yes** for full help-inclusive customer #1 pilot |
| P2 product truth (don’t sell Launch/Growth/RI/Assist as live) | Still applies | Carry into P4 copy — **Required** discipline |
| Capture proof | Insight-side | Note separately: company-site rebrand **can proceed** |

**Confirmation:** No P1B/P2 **company-site** regression or ship gate blocks starting **P4 implementation planning**. Capture proof remains an Insight pilot gate, tracked separately from this rebrand.

---

## 19. Change Classification Summary

### Required for P4

1. Replace Elevate Business Systems / EBS customer-visible naming with **RiseCurrent** (config, header/footer, homepage, Presence, About, product pages, sign-in, Privacy/Terms, metadata).
2. Update CTA copy (`ctaCopy` + product CTAs); keep Insight URLs on `getInsightUrl("/analyze")`.
3. Align promise and journey messaging: home-service; missed demand → booked revenue; **Insight → Launch → Presence**; philosophy Diagnose → Capture → Convert → Prove → Learn.
4. Introduce honest Launch **starting $3,500** and Presence **starting $399/month** (managed monitoring/optimization) without implying Launch is purchasable or Presence is unlimited agency / basic maintenance.
5. Update logo accessible title/alt; preserve PNW photos and mountain art.
6. Do not publish LLC; do not add auth/Stripe/dashboards.
7. Manual QA: brand sweep, CTAs, handoff, mobile header, legal.

### Recommended for P4

1. Rename in-page anchors (`how-ebs-works`, `why-ebs`, `ebs-launch`, …) with full link update.
2. Add `metadataBase` / basic Open Graph once public domain known.
3. Refresh favicon to match RiseCurrent mark.
4. Update `.cursor/rules` / README brand mentions so agents don’t regress copy.
5. Keep env var name `NEXT_PUBLIC_EBS_INSIGHT_URL` stable.

### Defer

1. Repo / `package.json` / Vercel project rename.
2. CSS `--ebs-*` / `.ebs-card` renames; component file renames (`WhyEbs`).
3. Insight origin hostname change; Insight app rebrand (`ebs-insight-v2`).
4. Apex/www DNS and redirects; sitemap/robots; analytics.
5. Formal legal counsel rewrite; forms; checkout; Growth/RI/Assist builds; font system overhaul; automated test suite; cold-verify LayoutProps fix.

---

## 20. Files That Should Explicitly Not Change

Do **not** modify these for P4 company-site rebrand (unless a later task explicitly expands scope):

| Path / area | Why |
| --- | --- |
| Entire `/agent/repos/ebs-insight-v2` | Out of scope |
| GitHub repository name / remote `ebs-company-site` | Do not rename repo |
| Any DB migrations, API routes, auth, Stripe, admin dashboards | None belong in P4; do not introduce |
| Production Insight capture / admin lead systems | Insight-side; separate from rebrand |
| PNW photography binaries (unless corrupted) | Preserve visual direction |
| Mountain graphic art (pixels) | No old wordmark; preserve |
| Live Vercel/DNS/infra settings as a silent side effect of a copy PR | Plan domain cutover separately |
| Customer secrets / `.env.local` | Never commit |

**Safe primary edit surfaces when implementation starts:**  
`config/site.ts`, `config/brand.ts`, `config/products.ts`, layout/header/footer, marketing + Presence/About sections, `app/**/page.tsx` metadata/copy, `public/branding/logos/ebs-insight-mark.svg` (title), Privacy/Terms, README/`.env.example` comments as needed.

---

## READY FOR P4 IMPLEMENTATION

**Blockers:** None on `ebs-company-site` for starting RiseCurrent marketing rebrand implementation.

**Non-blocking notes:** (1) Insight-side P2 capture proof remains open for full help-inclusive pilots — does not block this rebrand. (2) Do not publish LLC. (3) Do not rename the repo. (4) Keep `getInsightUrl` / `NEXT_PUBLIC_EBS_INSIGHT_URL` behavior intact. (5) Domain cutover to `risecurrentsystems.com` is parallel infra, not a code inventory blocker.
