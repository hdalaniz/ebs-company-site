# Development workflow

Meaningful product work is developed on a short-lived branch, checked on a Vercel Preview, and merged to `main` only after approval. Production stays on `main`.

Small documentation-only or trivial low-risk fixes may stay on `main` when explicitly approved.

Do not use `develop`, release, staging, or other long-lived integration branches.

## Steps

1. Start from updated `main`.

   ```bash
   git checkout main
   git pull origin main
   git status
   ```

   `main` should match `origin/main`, and the working tree should be clean. If unrelated local changes are present, stop and report them before starting.

2. Create a feature branch. Use lowercase kebab-case, and keep unrelated work off the branch.

   - `feature/<short-description>`
   - `fix/<short-description>`
   - `refactor/<short-description>`
   - `chore/<short-description>`

   Examples:

   - `feature/insight-domain-cutover`
   - `feature/presence-conversion-copy`
   - `fix/mobile-nav-overflow`
   - `refactor/shared-cta-config`

   ```bash
   git checkout -b feature/presence-conversion-copy
   ```

3. Make the changes with Cursor on that branch.

4. Run verification before the work is treated as ready.

   ```bash
   npm run verify
   ```

5. Push the branch only when asked.

   ```bash
   git push -u origin HEAD
   ```

6. Open the Vercel Preview for that branch and test the change there. The first branch push should show a Preview deployment. If none appears, stop and report that before QA.

7. Perform manual QA on the Preview. Check the flows the change touches, including desktop, tablet, and 375px mobile when the UI changed.

8. Merge to `main` only after approval. Do not merge automatically, and do not delete the branch unless asked.

9. After the merge, confirm the Production deployment for `main` at [https://ebs-company-site.vercel.app](https://ebs-company-site.vercel.app).
