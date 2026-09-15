# Elevate Business Systems

Parent brand and product hub for Elevate Business Systems (EBS).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To connect Insight CTAs to the live analyzer, set `NEXT_PUBLIC_EBS_INSIGHT_URL` to the Insight origin only (for example `https://ebs-insight.vercel.app`). Do not include `/analyze` — `getInsightUrl("/analyze")` appends the path. On Vercel, set this for Production and Preview. Leave it empty to fall back to `/products/presence#ebs-insight`.
