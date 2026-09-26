---
name: finish-sprint
description: >-
  Prepares completed EBS company-site sprint work for safe delivery with a
  completion report and suggested commit message. Use only when the user
  explicitly invokes /finish-sprint. Does not commit, push, or open a pull
  request unless the user explicitly asks.
disable-model-invocation: true
icon: rocket
color: orange
---

# Finish sprint

Prepare completed company-site sprint work for safe delivery after implementation and QA.

Respect the active project rules. This skill orchestrates the completion report. Do not duplicate those rules.

## Inspect

Inspect:

- Current branch
- `git status`
- Current diff, including untracked files
- Recent commits as needed

Confirm meaningful product work is not being completed directly on `main`, unless it is explicitly approved as trivial or documentation-only work. If it is meaningful work on `main`, stop.

## Verification gate

Run `npm run verify`, or confirm a successful run from this session that still matches the current tree.

If the tree changed after the last success, run it again. If it fails, stop. Report the exact stage: lint, TypeScript, tests (only if verify ran them), or production build. Do not commit.

If meaningful product or UI work exists and manual QA has not been performed, stop and recommend `/qa`. Do not treat automated verification as a substitute for that manual QA.

## Diff hygiene

Inspect the final diff for unrelated files.

Explicitly exclude from any later commit:

- `.env.local`
- Secrets
- Temporary screenshots
- QA artifacts
- Unrelated changes
- Local-only files

Name every file that should stay out of the commit.

## Completion report

Produce:

A. Objective
B. Customer problem
C. Why it matters
D. Scope delivered
E. Explicitly out of scope
F. Files changed
G. Behavior preserved
H. Verification results
I. Manual QA results
J. Known limitations
K. Suggested commit message
L. Recommended next step

Recommend one conventional prefix:

- `feat:` product change
- `fix:` bug or correction
- `refactor:` non-behavior structural change
- `test:` test-only change
- `docs:` documentation-only change
- `chore:` maintenance

Write the suggested message in the repository style: a prefix and a short summary of why.

## Do not deliver automatically

Do not commit, push, create a pull request, merge, or delete the branch unless the user explicitly asks for that action in the invocation or a follow-up.

If the branch is ready, state:

**READY FOR COMMIT**

and provide the suggested commit message.
