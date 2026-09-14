export type ProductStatus = "available" | "coming-soon" | "future";

export type Product = {
  key: "presence" | "growth" | "revenue-intelligence" | "assist";
  name: string;
  href: string;
  navDescription: string;
  cardHeadline: string;
  cardDescription: string;
  cardSupporting?: string;
  status: ProductStatus;
  statusLabel: string;
  cta: string;
};

export const products: Product[] = [
  {
    key: "presence",
    name: "EBS Presence",
    href: "/products/presence",
    navDescription: "Build and improve the digital foundation.",
    cardHeadline: "Build an online presence that wins business.",
    cardDescription:
      "Create a professional digital foundation or discover what's holding your existing website back.",
    cardSupporting: "Includes EBS Insight + EBS Launch",
    status: "available",
    statusLabel: "Building Now",
    cta: "Explore EBS Presence",
  },
  {
    key: "growth",
    name: "EBS Growth",
    href: "/products/growth",
    navDescription: "Capture and convert demand.",
    cardHeadline: "Capture and convert more demand.",
    cardDescription:
      "Respond faster, follow up consistently, recover missed opportunities, and reactivate previous customers.",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    cta: "Preview EBS Growth",
  },
  {
    key: "revenue-intelligence",
    name: "EBS Revenue Intelligence",
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
    name: "EBS Assist",
    href: "/products/assist",
    navDescription: "Recommend the next best action.",
    cardHeadline: "Know your next best move.",
    cardDescription:
      "Use business signals and measured outcomes to recommend the highest-value next actions.",
    status: "future",
    statusLabel: "Future Product",
    cta: "Preview EBS Assist",
  },
];

export const platformJourney = [
  {
    key: "presence",
    name: "EBS Presence",
    href: "/products/presence",
    action: "Build + Improve",
  },
  {
    key: "growth",
    name: "EBS Growth",
    href: "/products/growth",
    action: "Capture + Convert",
  },
  {
    key: "revenue-intelligence",
    name: "EBS Revenue Intelligence",
    href: "/products/revenue-intelligence",
    action: "Measure + Prove",
  },
  {
    key: "assist",
    name: "EBS Assist",
    href: "/products/assist",
    action: "Recommend",
  },
] as const;
