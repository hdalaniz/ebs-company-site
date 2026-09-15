export const site = {
  companyName: "Elevate Business Systems",
  shortName: "EBS",
  description:
    "Elevate Business Systems helps service businesses turn missed demand into booked revenue.",
  getStartedHref: "/products/presence",
  signInHref: "/signin",
} as const;

export const ctaCopy = {
  presence: "Explore EBS Presence",
  insight: "Run EBS Insight",
  launch: "Preview EBS Launch",
} as const;

/**
 * Canonical public origin of the live EBS Insight application.
 *
 * Keep this on the V2 hostname until `ebs-insight.vercel.app` is confirmed
 * to serve the V2 app. Do not scatter this URL across components.
 *
 * Domain handoff order (do not skip steps):
 * 1. Move `ebs-insight.vercel.app` onto the V2 Vercel project
 * 2. Verify https://ebs-insight.vercel.app/analyze serves the new analyzer
 * 3. Change this default back to https://ebs-insight.vercel.app
 * 4. Redeploy the company site
 * 5. Verify every Insight CTA still uses `getInsightUrl("/analyze")`
 *
 * `NEXT_PUBLIC_EBS_INSIGHT_URL` is an optional override (origin only, no `/analyze`).
 */
const DEFAULT_EBS_INSIGHT_ORIGIN = "https://ebs-insight-v2.vercel.app";

const configuredOrigin = process.env.NEXT_PUBLIC_EBS_INSIGHT_URL?.trim();

const insightOrigin = configuredOrigin || DEFAULT_EBS_INSIGHT_ORIGIN;

export function isInsightConfigured() {
  return Boolean(insightOrigin);
}

export function getInsightUrl(path = "") {
  const base = insightOrigin.replace(/\/+$/, "");

  const trimmedPath = path.trim();
  const normalizedPath = trimmedPath
    ? trimmedPath.startsWith("/")
      ? trimmedPath
      : `/${trimmedPath}`
    : "";

  return `${base}${normalizedPath}`;
}
