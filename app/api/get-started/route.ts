import { commercialLeadFallbackEndpoint, handleGetStartedPost } from "@/lib/commercial-leads/handle-get-started";
import { submitCommercialLead } from "@/lib/commercial-leads/submit-commercial-lead";

export const runtime = "nodejs";

function readEnv() {
  return {
    endpointUrl: process.env.RISECURRENT_COMMERCIAL_LEAD_URL,
    secret: process.env.RISECURRENT_COMMERCIAL_LEAD_SECRET,
    fallbackEndpoint: commercialLeadFallbackEndpoint(),
  };
}

export async function POST(request: Request) {
  const env = readEnv();
  return handleGetStartedPost(request, {
    submit: (payload) => submitCommercialLead(payload, env),
  });
}
