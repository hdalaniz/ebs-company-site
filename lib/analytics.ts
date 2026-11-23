export type CtaEventName =
  | "cta_insight_click"
  | "cta_launch_click"
  | "cta_presence_click"
  | "cta_get_started_click";

/**
 * Minimal CTA tracking for P4.
 *
 * Event names:
 * - cta_insight_click
 * - cta_launch_click
 * - cta_presence_click
 * - cta_get_started_click
 *
 * Fires from ButtonLink / Header Get Started when `trackEvent` is set.
 * Uses Vercel Analytics `track()` when available. Failures never block navigation.
 *
 * Inspect in production via the Vercel Analytics dashboard (Custom Events),
 * or in the browser Network tab for `/_vercel/insights` requests after deploy.
 */
export function trackCta(event: CtaEventName) {
  try {
    if (typeof window === "undefined") {
      return;
    }

    void import("@vercel/analytics")
      .then(({ track }) => {
        track(event);
      })
      .catch(() => {
        // Tracking must never break CTA navigation.
      });
  } catch {
    // Tracking must never break CTA navigation.
  }
}

export function ctaEventForHref(href: string): CtaEventName | undefined {
  if (href.includes("/analyze") || href.includes("ebs-insight")) {
    return "cta_insight_click";
  }
  if (href.includes("/products/launch")) {
    return "cta_launch_click";
  }
  if (href.includes("/products/presence")) {
    return "cta_presence_click";
  }
  return undefined;
}
