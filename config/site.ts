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
 * Origin of the EBS Insight application.
 *
 * Set `NEXT_PUBLIC_EBS_INSIGHT_URL` to the origin only — do not include `/analyze`.
 * Trailing slashes are normalized. Production origin: `https://ebs-insight.vercel.app`
 *
 * Local example: http://localhost:3001
 * If unset, Insight CTAs fall back to `/products/presence#ebs-insight`.
 */
export function isInsightConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_EBS_INSIGHT_URL?.trim());
}

export function getInsightUrl(path = "") {
  const base = process.env.NEXT_PUBLIC_EBS_INSIGHT_URL?.trim().replace(
    /\/+$/,
    "",
  );

  if (!base) {
    return "/products/presence#ebs-insight";
  }

  const trimmedPath = path.trim();
  const normalizedPath = trimmedPath
    ? trimmedPath.startsWith("/")
      ? trimmedPath
      : `/${trimmedPath}`
    : "";

  return `${base}${normalizedPath}`;
}
