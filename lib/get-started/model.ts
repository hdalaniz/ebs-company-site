import { pricing } from "@/config/site";
import type { ProductQueryValue } from "@/lib/get-started/links";

export const TRADES = [
  { value: "hvac", label: "HVAC" },
  { value: "plumbing", label: "Plumbing" },
  { value: "other", label: "Other" },
] as const;

export const WEBSITE_SITUATIONS = [
  {
    value: "no-website",
    label: "No website",
    detail: "You can continue without one.",
  },
  {
    value: "needs-major-improvement",
    label: "Website needs major improvement",
    detail: "The current site is hard for customers to use or trust.",
  },
  {
    value: "needs-better-conversion",
    label: "Website works, but it needs better conversion",
    detail: "The site exists. More of the right visitors should become booked jobs.",
  },
  {
    value: "not-sure",
    label: "Not sure",
    detail: "We'll help sort out what the site needs.",
  },
] as const;

export const PRODUCT_INTERESTS = [
  {
    value: "launch",
    label: "RiseCurrent Launch",
    detail: `${pricing.launch}. Available now.`,
  },
  {
    value: "presence",
    label: "RiseCurrent Presence",
    detail: `${pricing.presence}. Available now.`,
  },
  {
    value: "not-sure",
    label: "Not sure",
    detail: "We'll recommend a starting point. Insight stays free.",
  },
] as const;

export type Trade = (typeof TRADES)[number]["value"];
export type WebsiteSituation = (typeof WEBSITE_SITUATIONS)[number]["value"];
export type ProductInterest = (typeof PRODUCT_INTERESTS)[number]["value"];

export const QUALIFICATION_LIMITS = {
  businessName: 120,
  contactName: 80,
  email: 120,
  phone: 40,
  websiteUrl: 200,
  biggestProblem: 400,
} as const;

export type QualificationDraft = {
  businessName: string;
  trade: Trade | "";
  websiteSituation: WebsiteSituation | "";
  websiteUrl: string;
  productInterest: ProductInterest;
  biggestProblem: string;
  contactName: string;
  email: string;
  phone: string;
};

export type QualificationValue = {
  businessName: string;
  trade: Trade;
  websiteSituation: WebsiteSituation;
  productInterest: ProductInterest;
  contactName: string;
  email: string;
  phone?: string;
  websiteUrl?: string;
  biggestProblem?: string;
};

export const STEPS = [
  { id: "business", label: "Business" },
  { id: "offer", label: "Offer" },
  { id: "contact", label: "Contact" },
] as const;

export type StepId = (typeof STEPS)[number]["id"];

export function createDraft(productInterest: ProductInterest): QualificationDraft {
  return {
    businessName: "",
    trade: "",
    websiteSituation: "",
    websiteUrl: "",
    productInterest,
    biggestProblem: "",
    contactName: "",
    email: "",
    phone: "",
  };
}

export function withProductInterest(
  draft: QualificationDraft,
  productInterest: ProductInterest,
): QualificationDraft {
  return { ...draft, productInterest };
}

export function isProductInterest(value: string): value is ProductInterest {
  return value === "launch" || value === "presence" || value === "not-sure";
}

/**
 * URL `product` preselects the offer step.
 * Missing or unknown values still start on Not sure, and `explicit` stays null
 * so a direct visit is not recorded as a chosen query.
 */
export function readProductQuery(value: string | string[] | undefined | null): {
  initial: ProductInterest;
  explicit: ProductQueryValue | null;
} {
  const raw = Array.isArray(value) ? value[0] : value;
  if (raw && isProductInterest(raw)) {
    return { initial: raw, explicit: raw };
  }
  return { initial: "not-sure", explicit: null };
}

export function productInterestLabel(value: ProductInterest): string {
  return PRODUCT_INTERESTS.find((option) => option.value === value)?.label ?? "Not sure";
}
