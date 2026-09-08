export const site = {
  companyName: "Elevate Business Systems",
  shortName: "EBS",
  description:
    "Elevate Business Systems helps service businesses turn missed demand into booked revenue.",
  getStartedHref: "/products/presence",
  signInHref: "/signin",
} as const;

/**
 * Origin of the existing EBS Insight application.
 *
 * Set `NEXT_PUBLIC_EBS_INSIGHT_URL` in `.env.local` (no trailing slash).
 * Do not invent a production URL here — leave unset until the real origin is known.
 *
 * Local example: http://localhost:3001
 */
export function isInsightConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_EBS_INSIGHT_URL?.trim());
}

export function getInsightUrl(path = "") {
  const base = process.env.NEXT_PUBLIC_EBS_INSIGHT_URL?.trim().replace(/\/$/, "");

  if (!base) {
    return "/products/presence#configure-ebs-insight-url";
  }

  const normalizedPath = path
    ? path.startsWith("/")
      ? path
      : `/${path}`
    : "";

  return `${base}${normalizedPath}`;
}
