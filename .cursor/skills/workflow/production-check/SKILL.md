---
name: production-check
description: >-
  Verifies the EBS company-site release after a pull request has been merged
  into main. Confirms the merged commit on origin/main, checks Vercel
  Production evidence, runs npm run verify when local main allows, and smoke
  tests the affected production surfaces. Separates passing live behavior from
  incomplete deployment traceability. Use only when the user explicitly
  invokes /production-check, after merge and deployment. Does not revert,
  redeploy, or change production configuration.
disable-model-invocation: true
icon: badge-check
color: red
---

# Production check

Verify the EBS company-site release after a pull request has been merged into `main`. This is a post-merge production smoke test.

Run it only after merge and deployment, and only when the user explicitly invokes `/production-check`. Do not use it as a substitute for `/qa` or `/prepare-pr`.

Respect the active project rules. Do not restate them. Do not modify application code, component URLs, or production configuration.

Keep Git state, Vercel deployment evidence, and live-site behavior as separate checks. Do not infer one from another.

## Production URL

Determine the current company-site Production URL before any smoke test. Read it from available Vercel project and deployment evidence: the Production deployment for `main`, its assigned domains, and its aliases.

If more than one production domain exists, use the canonical customer-facing production domain. Do not prefer an internal `.vercel.app` alias when a customer-facing domain is assigned.

If that URL cannot be confirmed automatically:

- Report that clearly
- Use only the hostname currently documented for this project, in `docs/development-workflow.md`, as a fallback
- Do not invent a domain

Do not treat a `.vercel.app` hostname, including the hostname written in that doc, as a permanent source of truth. Read the documented hostname at check time. It can change.

Using the documented fallback because Vercel domain evidence is unavailable is an evidence limitation. It is not, by itself, a production failure.

## Inspect

Fetch `origin` so `origin/main` is current. Then inspect:

1. Current branch
2. `origin/main`
3. Local `main`
4. The release to verify, resolved with the rules in Sprint / release identification
5. Vercel Production deployment evidence for that commit, including the Production URL from the section above

## Sprint / release identification

Do not require the literal sprint name to exist as a Git commit, tag, issue, or pull request.

When the user says something like "verify Sprint 5.4", resolve the release from available evidence such as:

- the known pull request
- merge commit
- feature commit
- conversation context
- branch
- recent history

If the exact mapping cannot be proven, report that as a traceability limitation.

Do not treat absence of a literal sprint label, such as "Sprint 5.4", as a production defect.

If the intended commit is not on `origin/main`, stop. Do not use a verified status. Do not use **PRODUCTION ISSUE FOUND** unless a production failure was also observed.

## Confirm the release

Confirm:

- The intended pull request or commit exists on `origin/main`
- Local `main` can safely match `origin/main`
- The production deployment corresponds to that `main` commit, when evidence is available

Do not claim deployment correspondence if it cannot be verified. Say what evidence was missing.

Unproven alias-to-commit correspondence, an unavailable Vercel API, or a release name that is not a Git label is a traceability limitation. Record it. Do not treat that missing evidence as a production failure.

Do not discard, stash, reset, rebase, or merge to force a match. A clean fast-forward of local `main` to `origin/main` is allowed only when the working tree is clean, the current branch is `main` or can be checked out safely, and local `main` is a strict ancestor of `origin/main`. If that update is unsafe, stop and say why.

## Verification

When the local repository is on the merged `main` commit, run:

```bash
npm run verify
```

Use whatever that script currently runs. Today that is lint, TypeScript, and the production build. If it later includes tests, those run as part of the same command.

If local state does not allow verify on that commit, say so and do not claim the command passed. If verify fails, report the exact stage and include it in the release report. Do not change application code from this skill to make it pass.

A failed `npm run verify` blocks **PRODUCTION VERIFIED**. It is not, by itself, **PRODUCTION ISSUE FOUND**. Use that status only when the same problem is also observed on the production site.

## Production surfaces

Check the production surfaces that the merged change actually affects, on the Production URL determined above. For general company-site work, check the applicable items:

- Production homepage loads
- Header and navigation work
- Mobile navigation works
- Affected product pages load
- Footer links work
- Affected CTAs work
- No obvious layout breakage
- No debug copy, and no stale product behavior introduced by this release
- No unexpected horizontal overflow

Pre-existing placeholder copy on pages this release did not change is an existing follow-up. Privacy and Terms interim legal copy is in that category. Report it, and do not fail this release for it unless the release specifically changed those legal pages.

Use the browser. A single screenshot is not verification. If browser tools are unavailable, use the closest substitute and say what could not be verified.

For a UI-affecting release, check at least desktop and 375px mobile.

## Insight CTAs

When the release touches Insight calls to action, confirm they still route through the company-site configuration (`getInsightUrl("/analyze")`) and ultimately reach the currently configured canonical Insight production analyzer.

Prefer configuration and project evidence over a fixed hostname. Read `getInsightUrl()` in `config/site.ts`, including `NEXT_PUBLIC_EBS_INSIGHT_URL` when it is set, and any Insight production-domain evidence that is available. The canonical destination today is `https://ebs-insight.vercel.app/analyze`. Tolerate a later domain migration: if configuration or project evidence names a different customer-facing analyzer origin, use that origin. Do not assume the current hostname is permanent, and do not invent one.

Do not rewrite component URLs during this skill.

When the change affects Insight integration, perform this handoff smoke test:

company site → Run EBS Insight → canonical Insight `/analyze`

A full analyzer run is required only when the release changed the Insight integration, or when the user explicitly requests it. If that full run is not required and was not done, say so. Do not treat the omitted full run as a production failure when the handoff to the configured analyzer succeeded.

## Final status

End with exactly one of these three lines. Missing evidence alone must never produce **PRODUCTION ISSUE FOUND** unless there is also an observed production failure.

### PRODUCTION VERIFIED

Use when:

- required live behavior passes
- verification passes
- deployment/release evidence is sufficient for the requested release

### PRODUCTION VERIFIED WITH LIMITATIONS

Use when:

- all tested production behavior passes
- no customer-facing regression is observed
- but one or more deployment, alias, commit-correspondence, metadata, or access limitations prevent complete release traceability

Examples:

- Vercel API unavailable
- deployment alias cannot be proven to map to an exact commit
- release name is not represented as a Git tag
- a requested non-critical check could not be completed

This must not be described as a production failure.

Clearly list the limitations and what would remove them.

This is the correct status when live behavior passed, `npm run verify` passed, and `main` matched `origin/main`, while traceability was incomplete. That includes a case where the homepage, Presence, Growth, desktop layout, 375px layout, navigation, footer links, and the Insight CTA to the configured analyzer all passed, no sprint debug residue was visible, Vercel could not supply complete project-domain evidence, the public alias could not be proven to the exact current `main` commit, and the sprint name was not a literal Git label. Privacy and Terms placeholder copy that the release did not change stays an existing follow-up in that case.

### PRODUCTION ISSUE FOUND

Use only when an actual production problem is observed, such as:

- page fails to load
- CTA routes incorrectly
- navigation is broken
- current production shows incorrect/stale product behavior
- major responsive overflow
- production error
- deployment serving the wrong application
- required integration fails
- other customer-facing regression

When production fails, report:

- Exact failing surface
- Expected behavior
- Observed behavior
- Likely source
- Severity
- Safest rollback or fix path

Do not automatically roll back.

## Release report

Produce:

A. Merged commit / PR
B. Production deployment status
C. `npm run verify` result
D. Production surfaces tested
E. CTA and navigation results
F. Mobile result
G. Known limitations
H. Rollback path
I. Final release status

In B, name the Production URL used and whether it came from Vercel evidence or the documented fallback. In E, name the Insight analyzer origin that was checked when Insight CTAs were in scope.

In G, list each evidence limitation and what would remove it. Also list unrelated existing follow-ups, such as pre-existing Privacy and Terms placeholder copy, separately from release defects.

In I, distinguish:

- Observed production behavior
- Deployment/commit evidence
- Evidence limitations
- Final status

The final status line is exactly one of **PRODUCTION VERIFIED**, **PRODUCTION VERIFIED WITH LIMITATIONS**, or **PRODUCTION ISSUE FOUND**.

## Never

Do not automatically revert, redeploy, delete branches, delete Vercel projects, or modify production configuration unless the user explicitly requests that action.
