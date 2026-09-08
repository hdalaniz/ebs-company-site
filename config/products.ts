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
    navDescription: "Build or improve your online presence.",
    cardHeadline: "Build an online presence that wins business.",
    cardDescription:
      "Create a professional digital foundation or discover what's holding your existing website back.",
    cardSupporting: "Includes EBS Insight + EBS Launch",
    status: "available",
    statusLabel: "Available / Building Now",
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
    navDescription: "Connect activity to booked revenue.",
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
    navDescription: "Know the next best action.",
    cardHeadline: "Know your next best move.",
    cardDescription:
      "Use business signals and measured outcomes to recommend and eventually automate the highest-value next actions.",
    status: "future",
    statusLabel: "Future",
    cta: "Preview EBS Assist",
  },
];

export const growthLoop = [
  {
    key: "presence",
    name: "Presence",
    href: "/products/presence",
    description: "Build and improve the digital foundation.",
  },
  {
    key: "growth",
    name: "Growth",
    href: "/products/growth",
    description: "Capture and convert demand.",
  },
  {
    key: "revenue-intelligence",
    name: "Revenue Intelligence",
    href: "/products/revenue-intelligence",
    description: "Measure and prove what creates revenue.",
  },
  {
    key: "assist",
    name: "Assist",
    href: "/products/assist",
    description: "Recommend the next best action.",
  },
] as const;
