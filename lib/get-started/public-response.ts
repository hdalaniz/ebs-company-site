import {
  isRecommendedRoute,
  type RecommendedRoute,
} from "@/lib/commercial-leads/types";
import { CUSTOMER_MESSAGES } from "@/lib/commercial-leads/types";
import type { QualificationFieldErrors } from "@/lib/get-started/validate";

const FIELD_KEYS = [
  "businessName",
  "trade",
  "websiteSituation",
  "websiteUrl",
  "productInterest",
  "biggestProblem",
  "contactName",
  "email",
  "phone",
] as const;

const INQUIRY_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const PRICE_PATTERN = /^Starting at \$[\d,]+(?:\/month)?$/;

export type PublicGetStartedSuccess = {
  inquiryId: string;
  recommendedRoute: RecommendedRoute;
  duplicate: boolean;
  publishedStartingPrice: string | null;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function safeMessage(value: unknown, fallback: string): string {
  if (typeof value !== "string") return fallback;
  const message = value.replace(/\s+/g, " ").trim().slice(0, 300);
  if (!message) return fallback;
  if (
    /bearer\s+\S+|COMMERCIAL_INQUIRY_SECRET|RISECURRENT_COMMERCIAL/i.test(
      message,
    )
  ) {
    return fallback;
  }
  return message;
}

export function parsePublicSuccess(
  body: unknown,
): PublicGetStartedSuccess | null {
  if (!isRecord(body) || body.ok !== true) return null;

  if (
    typeof body.recommendedRoute !== "string" ||
    !isRecommendedRoute(body.recommendedRoute)
  ) {
    return null;
  }

  if (
    typeof body.inquiryId !== "string" ||
    !INQUIRY_ID_PATTERN.test(body.inquiryId)
  ) {
    return null;
  }

  if (typeof body.duplicate !== "boolean") return null;

  let publishedStartingPrice: string | null = null;
  if (body.publishedStartingPrice === null) {
    publishedStartingPrice = null;
  } else if (
    typeof body.publishedStartingPrice === "string" &&
    PRICE_PATTERN.test(body.publishedStartingPrice)
  ) {
    publishedStartingPrice = body.publishedStartingPrice;
  } else {
    return null;
  }

  return {
    inquiryId: body.inquiryId.toLowerCase(),
    recommendedRoute: body.recommendedRoute,
    duplicate: body.duplicate,
    publishedStartingPrice,
  };
}

export function parsePublicError(body: unknown): {
  message: string;
  fields: QualificationFieldErrors;
} {
  if (!isRecord(body)) {
    return { message: CUSTOMER_MESSAGES.upstream, fields: {} };
  }

  const fields: QualificationFieldErrors = {};
  if (isRecord(body.fields)) {
    for (const key of FIELD_KEYS) {
      const message = body.fields[key];
      if (typeof message === "string" && message.trim()) {
        fields[key] = message.replace(/\s+/g, " ").trim().slice(0, 160);
      }
    }
  }

  return {
    message: safeMessage(body.message, CUSTOMER_MESSAGES.upstream),
    fields,
  };
}
