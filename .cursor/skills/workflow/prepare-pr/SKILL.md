---
name: prepare-pr
description: >-
  Prepares a completed EBS company-site feature branch for a safe pull
  request. Inspects git state, verification and QA evidence, the diff
  against origin/main, and Vercel Preview status, then drafts a PR title
  and description. Use only when the user explicitly invokes /prepare-pr.
  Does not commit, push, merge, or create a pull request unless the user
  explicitly asks. `/prepare-pr create` opens a draft PR against main.
disable-model-invocation: true
icon: git-pull-request
color: purple
---

# Prepare PR

Prepare a completed EBS company-site feature branch for a safe pull request. This skill does not merge.

It runs after `/finish-sprint`, and only when the user explicitly invokes `/prepare-pr`. Rely on evidence from `/review-changes`, `/qa`, and `/finish-sprint` when it exists. Do not repeat those skills.

Respect the active project rules. Do not restate them, and do not modify application code.

## Inspect

Fetch `origin` so `origin/main` and the branch upstream are current. Then inspect:

1. Current branch
2. `git status`
3. Origin tracking for the current branch
4. Commits ahead of `main` (`origin/main...HEAD`)
5. Current diff against `origin/main`
6. Recent `/review-changes`, `/qa`, and `npm run verify` evidence from this session or the branch, when it exists

## Stop

Stop and report the failed check when any of these are true:

- The current branch is `main` for meaningful product work. A pull request is prepared from the feature branch, not from `main`.
- The working tree contains unexpected uncommitted changes.
- The branch is behind `origin/main` in a way that creates merge risk. Do not merge, rebase, or reset to repair that.
- The diff or working tree includes secrets, `.env.local`, QA artifacts, temporary screenshots, or unrelated files.
- `npm run verify` has not passed for the current tree.
- Meaningful UI or product work has no completed manual QA.

## Verification

Confirm a successful `npm run verify` from this session that still matches the current tree. If there is no matching success, run:

```bash
npm run verify
```

Use whatever that script currently runs. Today that is lint, TypeScript, and the production build. If it later includes tests, those run as part of the same command. Do not add a test suite from this skill.

If it fails, stop. Report the exact stage: lint, TypeScript, tests (only if verify ran them), or production build. Do not create a pull request.

## Prior workflow evidence

Confirm that `/review-changes` and `/qa` were completed recently when the change is product or UI work.

Use only evidence you can actually see: this conversation, a recorded review or QA report, or command output tied to the current tree. If there is no reliable evidence, say so. Do not claim those skills ran.

If meaningful UI or product work has no manual QA evidence, stop and recommend `/qa`.

## Diff review

Review the branch diff against `origin/main`. Use prior `/review-changes` findings when they exist, and still check this diff for:

- Scope creep
- Unexpected files
- Hardcoded URLs
- Insight CTA routing that bypasses `getInsightUrl("/analyze")`
- Fake customer metrics or claims
- Stale Coming Soon or Product Vision status
- Debug or placeholder copy
- Accessibility or responsive regressions
- Secrets or environment leakage

Do not invent findings. Do not edit files unless the user explicitly asks.

## Remote branch

Confirm the branch is pushed to its matching remote and that the remote tip matches the local commits being prepared.

If it is not pushed, report that it needs to be pushed. Do not push unless the user explicitly requested push as part of the invocation.

## Vercel Preview

Inspect Vercel Preview evidence when it is available, such as a GitHub deployment status or an existing preview URL for this branch.

If a Preview exists, report its status and use it for the smoke checks that the available browser tools can actually run.

If a Preview cannot be confirmed, say so. Do not invent a Preview URL.

## Pull request text

Generate a title in conventional product language:

- `feat:` product change
- `fix:` bug or correction
- `refactor:` non-behavior structural change
- `docs:` documentation-only change
- `chore:` maintenance

Examples:

- `feat: improve Presence conversion journey`
- `fix: correct Insight CTA routing`
- `refactor: consolidate shared product CTA config`
- `docs: improve EBS development workflow`

Generate a concise description with these sections, in this order:

```markdown
## Objective

## Customer problem

## What changed

## What was intentionally not changed

## Verification

## Manual QA

## Preview

## Risks / limitations

## Rollback
```

For company-site product work, mention only the affected surfaces that were actually checked. Possible surfaces include homepage, Presence, Growth, Revenue Intelligence, Assist, About, navigation, footer, Insight CTAs, and desktop, tablet, or 375px mobile. Omit any surface that was not checked.

## Create only when asked

Do not commit, push, create a pull request, merge, or delete the branch unless the user explicitly requests that action.

If the user invokes `/prepare-pr create`, or otherwise clearly asks to create the pull request:

1. Confirm the branch is already pushed to its matching remote. If it is not, stop and report that it needs to be pushed. Do not push unless the user also explicitly requested push.
2. Create a **draft** pull request against `main` with the generated title and description.
3. Use `gh pr create --draft --base main`.
4. Do not mark it ready for review.
5. Do not merge it.

If any stop condition is still open, do not create the pull request.

## Readiness

If every gate above passes, state:

**READY FOR PR**

If any gate fails, do not use that phrase. List the blockers.

## Report

Report:

A. Branch
B. Commits ahead of `main`
C. Verification status
D. Manual QA evidence
E. Preview status
F. Diff scope
G. PR title
H. PR description
I. Readiness
J. Blockers, if any
