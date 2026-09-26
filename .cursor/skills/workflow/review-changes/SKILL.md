---
name: review-changes
description: >-
  Performs a read-only pre-QA review of current EBS company-site changes
  against product, architecture, design, code quality, and git constraints.
  Use only when the user explicitly invokes /review-changes.
disable-model-invocation: true
icon: shield
color: blue
---

# Review changes

Perform a pre-QA review of the current company-site changes. Read-only by default.

Respect the active project rules. Use this skill to orchestrate the review. Do not duplicate those rules, and do not edit files unless the user explicitly asks.

## Inspect

1. Inspect `git status` and the diff, including staged, unstaged, and untracked files. On a feature branch, also inspect commits that are not on `main`.
2. Identify every changed, added, deleted, and untracked file.
3. Determine the intended objective from the conversation, branch name, or recent work where possible. If it is still unclear, say so and review against observable behavior.

## Review

Check the diff against the active project rules in these areas. Do not invent findings.

### Product

- Does the change support EBS helping home-service businesses turn missed demand into booked revenue?
- Does it support Diagnose → Capture → Convert → Prove → Learn?
- Is future functionality represented truthfully?
- Are Coming Soon, Future, and Product Vision features still labeled honestly?
- Has unnecessary product scope been introduced?
- Are fake customer metrics, fake outcomes, fake revenue claims, or unsupported capabilities introduced?

Preserve the product family. Do not blur these roles:

- EBS Presence
  - EBS Insight: businesses with an existing website
  - EBS Launch: businesses without a website
- EBS Growth
- EBS Revenue Intelligence
- EBS Assist

### Architecture

- Unnecessary dependencies
- Duplicated helpers or configuration
- Hardcoded Insight URLs, or CTAs that bypass `getInsightUrl()`
- Broken module boundaries
- Needless backend complexity or unnecessary infrastructure
- Accidental auth or data changes
- Secrets or environment values committed to source

### Design

The company site should stay local-first, friendly, modern, premium, home-service oriented, and light-first: warm off-white surfaces, white cards, navy typography, teal actions, restrained motion, and scenic or local imagery where appropriate.

Flag:

- Dark enterprise SaaS styling
- Neon or cyberpunk visuals
- Excessive animation
- Generic AI-office imagery
- Visual clutter
- Weak CTA hierarchy
- Accessibility problems
- Mobile issues

### Code quality

- Obvious bugs
- Dead code
- Duplicated components
- Debug output
- Placeholders
- Broken links
- Stale copy
- Hardcoded environment URLs
- Inconsistent patterns

### Git

- Unrelated changes
- Screenshots or QA artifacts
- Secrets
- Generated files
- Unexpectedly large changes

## Findings

Classify each real finding as:

- **Blocker** — must be resolved before QA or commit
- **Should fix** — important, but not a safety or correctness stop
- **Nice to improve** — optional polish

If there are no meaningful issues, state exactly:

**READY FOR QA**

Do not edit files unless the user explicitly asks.
