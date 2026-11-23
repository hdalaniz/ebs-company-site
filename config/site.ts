import { GET_STARTED_LINKS } from "@/lib/attribution";

export const site = {
  companyName: "RiseCurrent",
  shortName: "RiseCurrent",
  description:
    "RiseCurrent helps home-service businesses turn missed demand into booked revenue.",
  url: "https://risecurrentsystems.com",
  getStartedHref: GET_STARTED_LINKS.companyHeader.href,
  signInHref: "/signin",
} as const;

export const pricing = {
  insight: "Free",
  launch: "Starting at $3,500",
  presence: "Starting at $399/month",
  custom: "Quoted separately",
} as const;

export const ctaCopy = {
  presence: "Explore Presence",
  insight: "Run Free Insight",
  launch: "Explore Launch",
  getStarted: "Get Started",
} as const;

/**
 * Canonical public origin of the live Insight application.
 *
 * `https://ebs-insight.vercel.app` is the customer-facing production hostname.
 * `https://ebs-insight-v2.vercel.app` is an internal fallback alias on the same
 * V2 project. Do not scatter either URL across components.
 *
 * `NEXT_PUBLIC_EBS_INSIGHT_URL` is an optional override (origin only, no `/analyze`).
 * Internal identifier names are preserved for P4 stability.
 */
const DEFAULT_EBS_INSIGHT_ORIGIN = "https://ebs-insight.vercel.app";

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
