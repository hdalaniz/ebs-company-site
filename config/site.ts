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
