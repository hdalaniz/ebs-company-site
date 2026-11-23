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

export type PublicGetStartedSuccess = {
  leadId?: string;
  recommendedRoute: RecommendedRoute | null;
  nextStep: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function safeMessage(value: unknown, fallback: string): string {
  if (typeof value !== "string") return fallback;
  const message = value.replace(/\s+/g, " ").trim().slice(0, 300);
  if (!message) return fallback;
  if (/bearer\s+\S+|RISECURRENT_COMMERCIAL_LEAD_SECRET/i.test(message)) {
    return fallback;
  }
  return message;
}

export function parsePublicSuccess(body: unknown): PublicGetStartedSuccess | null {
  if (!isRecord(body) || body.ok !== true) return null;
  const nextStep = safeMessage(body.nextStep, "");
  if (!nextStep) return null;

  const recommendedRoute =
    body.recommendedRoute === null
      ? null
      : typeof body.recommendedRoute === "string" &&
          isRecommendedRoute(body.recommendedRoute)
        ? body.recommendedRoute
        : undefined;
  if (recommendedRoute === undefined) return null;

  const leadId =
    typeof body.leadId === "string" && /^[A-Za-z0-9_-]{1,80}$/.test(body.leadId)
      ? body.leadId
      : undefined;

  return {
    ...(leadId ? { leadId } : {}),
    recommendedRoute,
    nextStep,
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
