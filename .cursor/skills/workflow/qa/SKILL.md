---
name: qa
description: >-
  Runs npm run verify and the relevant EBS company-site manual UI QA before
  commit or pull request. Use only when the user explicitly invokes /qa.
disable-model-invocation: true
icon: beaker
color: cyan
---

# QA

Run the standard EBS company-site verification and the manual UI QA that matches the current change, before commit or pull request.

Respect the active project rules, especially the QA rules. This skill orchestrates verification. Do not duplicate those rules. Do not change implementation or tests merely to make QA pass, and do not add a test suite unless that is explicitly the task.

## Scope

Inspect the current changes and determine the affected pages and components. Run the manual checks those areas require, and say which checks were skipped because they do not apply.

## Automated verification

Always run:

```bash
npm run verify
```

Use whatever that script currently runs. Today it covers lint, TypeScript, and the production build. If the repository later adds automated tests to this command, they run automatically. Do not invent a separate test command.

If it fails, report the exact stage: lint, TypeScript, tests (only if verify ran them), or production build, plus the root cause. Then follow the failure report below. Do not commit.

## Manual QA

Use the browser and exercise the affected flow the way a customer would. A single screenshot is not verification. If browser tools are unavailable, use the closest substitute and say what could not be verified.

As relevant to the change, check:

- Homepage
- Products navigation
- EBS Presence
- EBS Growth
- EBS Revenue Intelligence
- EBS Assist
- About
- Header and navigation
- Mobile navigation
- Footer
- Insight CTAs

Insight CTAs must keep resolving through `getInsightUrl("/analyze")` and open the canonical Insight production destination. Do not hardcode a hostname into individual CTA components.

### Responsive

Check relevant pages at desktop, tablet, and 375px mobile:

- No horizontal overflow
- Readable text
- Correct card stacking
- Navigation works
- CTA buttons remain usable
- Imagery does not break layout
- Footer remains readable

### Accessibility and interaction

As relevant:

- Keyboard navigation
- Visible focus
- Meaningful headings
- Accessible buttons and links
- `prefers-reduced-motion`
- Hover is not required to understand content

### Product truthfulness

- Future products remain clearly Coming Soon, Future, or Product Vision where appropriate
- Conceptual metrics are not presented as real customer performance
- No fake testimonials or customer claims
- No stale product status
- No debug copy
- No placeholder content

### Visual system

- The local-first light visual system remains intact
- Aceternity-style effects stay restrained
- No heavy blur, neon, or cyberpunk effects
- Motion stays subtle
- Customer clarity stays ahead of decoration

## Outcomes

Do not commit or push.

If QA fails:

- Identify the exact failure
- Identify the likely source
- Recommend the smallest fix
- Do not commit

If QA passes, report:

- `npm run verify` result
- Pages manually checked
- Responsive widths checked
- CTA and navigation checks
- Accessibility and motion checks
- Remaining limitations
- Ready or not ready to commit
