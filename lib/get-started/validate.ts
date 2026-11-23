import {
  QUALIFICATION_LIMITS,
  type ProductInterest,
  type QualificationDraft,
  type QualificationValue,
  type StepId,
  type Trade,
  type WebsiteSituation,
} from "@/lib/get-started/model";

export type QualificationField =
  | "businessName"
  | "trade"
  | "websiteSituation"
  | "websiteUrl"
  | "productInterest"
  | "biggestProblem"
  | "contactName"
  | "email"
  | "phone";

export type QualificationFieldErrors = Partial<Record<QualificationField, string>>;

export type QualificationValidation =
  | { ok: true; value: QualificationValue }
  | { ok: false; fields: QualificationFieldErrors };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+]?[\d().\-\s]+$/;
const HAS_PROTOCOL = /^[a-zA-Z][a-zA-Z\d+\-.]*:/;

const STEP_FIELDS: Record<StepId, readonly QualificationField[]> = {
  business: ["businessName", "trade", "websiteSituation", "websiteUrl"],
  offer: ["productInterest", "biggestProblem"],
  contact: ["contactName", "email", "phone"],
};

function tooLong(max: number): string {
  return `Use ${max} characters or fewer.`;
}

function isTrade(value: string): value is Trade {
  return value === "hvac" || value === "plumbing" || value === "other";
}

function isWebsiteSituation(value: string): value is WebsiteSituation {
  return (
    value === "no-website" ||
    value === "needs-major-improvement" ||
    value === "needs-better-conversion" ||
    value === "not-sure"
  );
}

function isProductInterest(value: string): value is ProductInterest {
  return value === "launch" || value === "presence" || value === "not-sure";
}

function isValidEmail(value: string): boolean {
  if (value.length > QUALIFICATION_LIMITS.email) return false;
  const at = value.lastIndexOf("@");
  if (at < 1) return false;
  const local = value.slice(0, at);
  const domain = value.slice(at + 1);
  if (!local || local.length > 64 || !domain || domain.length > 255) return false;
  if (value.includes(" ")) return false;
  if (!EMAIL_PATTERN.test(value)) return false;
  if (domain.startsWith(".") || domain.endsWith(".")) return false;
  return true;
}

export function isValidWebsiteUrl(value: string): boolean {
  if (!value || value.length > QUALIFICATION_LIMITS.websiteUrl) return false;
  const normalized = HAS_PROTOCOL.test(value) ? value : `https://${value}`;
  try {
    const url = new URL(normalized);
    if (url.protocol !== "http:" && url.protocol !== "https:") return false;
    if (url.username || url.password) return false;
    return Boolean(url.hostname && url.hostname.includes("."));
  } catch {
    return false;
  }
}

function phoneDigitCount(value: string): number {
  return (value.match(/\d/g) ?? []).length;
}

export function validateQualification(
  draft: QualificationDraft,
): QualificationValidation {
  const fields: QualificationFieldErrors = {};
  const businessName = draft.businessName.trim();
  const contactName = draft.contactName.trim();
  const email = draft.email.trim();
  const phone = draft.phone.trim();
  const biggestProblem = draft.biggestProblem.trim();
  const websiteSituation = draft.websiteSituation;
  const websiteUrl =
    websiteSituation === "no-website" ? "" : draft.websiteUrl.trim();

  if (!businessName) {
    fields.businessName = "Enter the business name.";
  } else if (businessName.length < 2) {
    fields.businessName = "Enter the business name.";
  } else if (businessName.length > QUALIFICATION_LIMITS.businessName) {
    fields.businessName = tooLong(QUALIFICATION_LIMITS.businessName);
  }

  if (!draft.trade) {
    fields.trade = "Choose HVAC, plumbing, or other.";
  } else if (!isTrade(draft.trade)) {
    fields.trade = "Choose HVAC, plumbing, or other.";
  }

  if (!websiteSituation) {
    fields.websiteSituation = "Choose the website situation.";
  } else if (!isWebsiteSituation(websiteSituation)) {
    fields.websiteSituation = "Choose the website situation.";
  }

  if (websiteUrl) {
    if (websiteUrl.length > QUALIFICATION_LIMITS.websiteUrl) {
      fields.websiteUrl = tooLong(QUALIFICATION_LIMITS.websiteUrl);
    } else if (!isValidWebsiteUrl(websiteUrl)) {
      fields.websiteUrl = "Enter a valid website address, or leave it blank.";
    }
  }

  if (!isProductInterest(draft.productInterest)) {
    fields.productInterest = "Choose Launch, Presence, or not sure.";
  }

  if (biggestProblem.length > QUALIFICATION_LIMITS.biggestProblem) {
    fields.biggestProblem = tooLong(QUALIFICATION_LIMITS.biggestProblem);
  }

  if (!contactName) {
    fields.contactName = "Enter a contact name.";
  } else if (contactName.length < 2) {
    fields.contactName = "Enter a contact name.";
  } else if (contactName.length > QUALIFICATION_LIMITS.contactName) {
    fields.contactName = tooLong(QUALIFICATION_LIMITS.contactName);
  }

  if (!email) {
    fields.email = "Enter an email address.";
  } else if (!isValidEmail(email)) {
    fields.email = "Enter a valid email address.";
  }

  if (phone) {
    if (
      phone.length > QUALIFICATION_LIMITS.phone ||
      !PHONE_PATTERN.test(phone) ||
      phoneDigitCount(phone) < 7 ||
      phoneDigitCount(phone) > 15
    ) {
      fields.phone = "Enter a phone number with 7 to 15 digits, or leave it blank.";
    }
  }

  if (Object.keys(fields).length > 0) {
    return { ok: false, fields };
  }

  const value: QualificationValue = {
    businessName,
    trade: draft.trade as Trade,
    websiteSituation: websiteSituation as WebsiteSituation,
    productInterest: draft.productInterest,
    contactName,
    email,
  };

  if (phone) value.phone = phone;
  if (websiteUrl) value.websiteUrl = websiteUrl;
  if (biggestProblem) value.biggestProblem = biggestProblem;

  return { ok: true, value };
}

export function validateStep(
  step: StepId,
  draft: QualificationDraft,
): QualificationFieldErrors {
  const result = validateQualification(draft);
  if (result.ok) return {};
  const relevant = new Set(STEP_FIELDS[step]);
  const fields: QualificationFieldErrors = {};
  for (const [key, message] of Object.entries(result.fields) as Array<
    [QualificationField, string]
  >) {
    if (relevant.has(key) && message) {
      fields[key] = message;
    }
  }
  return fields;
}

export function firstStepForErrors(
  fields: QualificationFieldErrors,
): StepId {
  if (
    fields.businessName ||
    fields.trade ||
    fields.websiteSituation ||
    fields.websiteUrl
  ) {
    return "business";
  }
  if (fields.productInterest || fields.biggestProblem) return "offer";
  return "contact";
}
