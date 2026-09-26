---
name: start-sprint
description: >-
  Safely starts meaningful EBS company-site product work from a clean,
  verified main branch and creates a scoped feature branch. Use only when
  the user explicitly invokes /start-sprint.
disable-model-invocation: true
icon: git-branch
color: green
---

# Start sprint

Orchestrate the start of meaningful EBS company-site work. Respect the active project rules for product, architecture, design, QA, and git. Do not restate or replace those rules.

## Objective

1. Read the sprint or task objective from the invocation message.
2. If the objective is genuinely unclear, ask only for the minimum information needed to name the branch and judge scope. Do not start implementation while that answer is missing.

## Preconditions

Inspect, in this order:

1. Current branch
2. `git status`
3. `origin/main` (fetch `origin main` first so the remote-tracking ref is current)
4. Local `main`

Confirm all of the following before continuing:

- The work will start from `main`
- Local `main` matches `origin/main`
- The working tree is clean

Stop and report the failed check when any confirmation fails.

- Do not discard, stash, reset, or otherwise remove unrelated changes.
- Do not pull, rebase, merge, or reset to make `main` match `origin/main`.
- If the current branch is not `main` and the tree is clean, check out `main` only after the match check passes. If checkout is unsafe, stop.

## Verification

From clean, matching `main`, run:

```bash
npm run verify
```

Use whatever `npm run verify` currently runs. Today that is lint, TypeScript, and the production build. If the script later includes automated tests, those run as part of the same command. Do not add a test suite from this skill.

If it fails, stop. Report the exact stage that failed: lint, TypeScript, tests (only if verify ran them), or production build. Do not create a branch.

## Branch

Choose one prefix from the objective:

- `feature/<short-description>` for product behavior
- `fix/<short-description>` for a bug or correction
- `refactor/<short-description>` for a non-behavior structural change
- `chore/<short-description>` for maintenance that is not a product change

Use lowercase kebab-case. Keep the description short.

If the prefix or description has meaningful ambiguity, show the proposed branch name and wait for confirmation before creating it. If the name is clear, create it.

Create the branch from clean, verified `main`.

Do not modify application code in this skill.

## Report

Report:

- Objective
- Starting commit
- Branch created
- Verification result
- Important scope constraints from the active project rules
- Recommended first implementation step

## Never

- Start meaningful product work directly on `main`
- Discard unrelated changes
- Force push
- Merge automatically
- Delete branches automatically
