import {
  commercialInquiryFallbackEndpoint,
  handleGetStartedPost,
} from "@/lib/commercial-leads/handle-get-started";
import { submitCommercialInquiry } from "@/lib/commercial-leads/submit-commercial-lead";

export const runtime = "nodejs";

function readEnv() {
  return {
    endpointUrl: process.env.RISECURRENT_COMMERCIAL_INQUIRY_URL,
    // Prefer the shared secret name used by Insight. Accept the older name during cutover.
    secret:
      process.env.COMMERCIAL_INQUIRY_SECRET ||
      process.env.RISECURRENT_COMMERCIAL_LEAD_SECRET,
    fallbackEndpoint: commercialInquiryFallbackEndpoint(),
  };
}

export async function POST(request: Request) {
  const env = readEnv();
  return handleGetStartedPost(request, {
    submit: (payload) => submitCommercialInquiry(payload, env),
  });
}
