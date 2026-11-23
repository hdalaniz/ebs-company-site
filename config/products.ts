import { getInsightUrl } from "@/config/site";

export type ProductStatus = "available" | "coming-soon" | "future";

export type ProductKey =
  | "insight"
  | "launch"
  | "presence"
  | "growth"
  | "revenue-intelligence"
  | "assist";

export type Product = {
  key: ProductKey;
  name: string;
  href: string;
  navDescription: string;
  cardHeadline: string;
  cardDescription: string;
  cardSupporting?: string;
  status: ProductStatus;
  statusLabel: string;
  cta: string;
  pricing?: string;
  external?: boolean;
};

/** Current customer journey: Insight → Launch → Presence */
export const currentProducts: Product[] = [
  {
    key: "insight",
    name: "RiseCurrent Insight",
    href: getInsightUrl("/analyze"),
    external: true,
    navDescription: "Find where revenue is leaking.",
    cardHeadline: "Find the leak.",
    cardDescription:
      "Identify where leads are leaking and get a clear next action for your home-service business.",
    cardSupporting: "Free diagnostic assessment",
    status: "available",
    statusLabel: "Available",
    cta: "Run Free Insight",
    pricing: "Free",
  },
  {
    key: "launch",
    name: "RiseCurrent Launch",
    href: "/products/launch",
    navDescription: "Build the conversion foundation.",
    cardHeadline: "Build or improve the conversion foundation.",
    cardDescription:
      "A managed, conversion-focused website foundation designed to turn demand into booked work.",
    cardSupporting: "Starting at $3,500",
    status: "available",
    statusLabel: "Available",
    cta: "Explore Launch",
    pricing: "Starting at $3,500",
  },
  {
    key: "presence",
    name: "RiseCurrent Presence",
    href: "/products/presence",
    navDescription: "Monitor and improve performance over time.",
    cardHeadline: "Monitor and improve performance over time.",
    cardDescription:
      "Continuously monitor and improve the systems that help turn demand into customers.",
    cardSupporting: "Starting at $399/month",
    status: "available",
    statusLabel: "Available",
    cta: "Explore Presence",
    pricing: "Starting at $399/month",
  },
];

/** Longer-term capabilities — clearly labeled, secondary to the current offer */
export const futureProducts: Product[] = [
  {
    key: "growth",
    name: "RiseCurrent Growth",
    href: "/products/growth",
    navDescription: "Capture and convert demand.",
    cardHeadline: "Capture and convert more demand.",
    cardDescription:
      "Respond faster, follow up consistently, recover missed opportunities, and reactivate previous customers.",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    cta: "Preview Growth",
  },
  {
    key: "revenue-intelligence",
    name: "RiseCurrent Revenue Intelligence",
    href: "/products/revenue-intelligence",
    navDescription: "Measure and prove what becomes revenue.",
    cardHeadline: "Know what actually drives revenue.",
    cardDescription:
      "Connect leads, responses, bookings, jobs, and revenue so owners can understand what's working.",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    cta: "Preview Revenue Intelligence",
  },
  {
    key: "assist",
    name: "RiseCurrent Assist",
    href: "/products/assist",
    navDescription: "Recommend the next best action.",
    cardHeadline: "Know your next best move.",
    cardDescription:
      "Use business signals and measured outcomes to recommend the highest-value next actions.",
    status: "future",
    statusLabel: "Future Product",
    cta: "Preview Assist",
  },
];

export const products: Product[] = [...currentProducts, ...futureProducts];

export const customerJourney = [
  {
    key: "insight" as const,
    name: "Insight",
    href: getInsightUrl("/analyze"),
    external: true,
    action: "Find the leak",
    support: "Diagnose where revenue is leaking and what to do next.",
  },
  {
    key: "launch" as const,
    name: "Launch",
    href: "/products/launch",
    action: "Build the foundation",
    support: "Establish a conversion-focused website foundation.",
  },
  {
    key: "presence" as const,
    name: "Presence",
    href: "/products/presence",
    action: "Improve over time",
    support: "Monitor and strengthen conversion performance continuously.",
  },
] as const;

/** Long-term product philosophy (secondary to the customer journey) */
export const philosophyLoop = [
  { key: "diagnose", name: "Diagnose", action: "Find the revenue leak" },
  { key: "capture", name: "Capture", action: "Catch demand reliably" },
  { key: "convert", name: "Convert", action: "Turn opportunity into booked work" },
  { key: "prove", name: "Prove", action: "Measure what created revenue" },
  { key: "learn", name: "Learn", action: "Improve the next decision" },
] as const;

/** @deprecated Prefer customerJourney for public IA; kept for future-product pages */
export const platformJourney = [
  {
    key: "presence",
    name: "RiseCurrent Presence",
    href: "/products/presence",
    action: "Build + Improve",
  },
  {
    key: "growth",
    name: "RiseCurrent Growth",
    href: "/products/growth",
    action: "Capture + Convert",
  },
  {
    key: "revenue-intelligence",
    name: "RiseCurrent Revenue Intelligence",
    href: "/products/revenue-intelligence",
    action: "Measure + Prove",
  },
  {
    key: "assist",
    name: "RiseCurrent Assist",
    href: "/products/assist",
    action: "Recommend",
  },
] as const;
