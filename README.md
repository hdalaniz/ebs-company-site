# Elevate Business Systems

Parent brand and product hub for Elevate Business Systems (EBS).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Insight CTAs use `getInsightUrl("/analyze")`, which defaults to the production analyzer at `https://ebs-insight.vercel.app/analyze`. Optionally set `NEXT_PUBLIC_EBS_INSIGHT_URL` to another origin (no `/analyze` path) to override that default.

`https://ebs-insight.vercel.app` is the customer-facing hostname. `https://ebs-insight-v2.vercel.app` remains an internal fallback alias for the same Insight application.
