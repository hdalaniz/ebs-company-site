# Elevate Business Systems

Parent brand and product hub for Elevate Business Systems (EBS).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Insight CTAs use `getInsightUrl("/analyze")`, which defaults to the live analyzer at `https://ebs-insight-v2.vercel.app/analyze`. Optionally set `NEXT_PUBLIC_EBS_INSIGHT_URL` to another origin (no `/analyze` path) to override that default.

After `ebs-insight.vercel.app` is moved onto the V2 Vercel project and `/analyze` is confirmed to serve the new app, change the canonical default in `config/site.ts` back to `https://ebs-insight.vercel.app`, redeploy this site, and re-check every Insight CTA.
