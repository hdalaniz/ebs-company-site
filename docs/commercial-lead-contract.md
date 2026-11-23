# Commercial inquiry contract (P6 integrated)

The company site does not store commercial inquiries. `/get-started` posts to a company-site route, which forwards to Insight:

`POST {Insight origin}/api/commercial-inquiries`

Agent B owns persistence, deterministic routing, and `/admin/leads`. This document is the company-site adapter contract.

## Browser → company site

`POST /api/get-started`

Same-origin only. `Content-Type: application/json`.

Customer-facing vocabulary stays friendly. The server maps to Insight values before forwarding.

```json
{
  "businessName": "Summit Air",
  "trade": "hvac",
  "websiteSituation": "no-website",
  "productInterest": "launch",
  "contactName": "Ada Owner",
  "email": "ada@example.com",
  "phone": "2085550100",
  "websiteUrl": "https://example.com",
  "biggestProblem": "Calls go to voicemail.",
  "productQuery": "launch",
  "source": "insight_results",
  "recommendation": "weak-foundation",
  "opportunityRef": "opp_ab12cd34",
  "submissionToken": "11111111-1111-4111-8111-111111111111"
}
```

Required:

- `businessName`, `trade`, `websiteSituation`, `productInterest`, `contactName`, `email`
- `submissionToken` (UUID per form attempt; reuse on retry)
- `source` (controlled attribution vocabulary)

Optional: `phone`, `websiteUrl`, `biggestProblem`, `productQuery`, `recommendation`, `opportunityRef`.

Website situation UI → Insight:

| UI value | Persisted |
| --- | --- |
| `no-website` | `none` |
| `needs-major-improvement` | `outdated` |
| `needs-better-conversion` | `usable` |
| `not-sure` | `usable` |

Product interest UI → Insight:

| UI value | Persisted |
| --- | --- |
| `launch` / `presence` | same |
| `not-sure` | `not_sure` |

The browser never receives `COMMERCIAL_INQUIRY_SECRET`.

## Company site → Insight

Headers:

- `Authorization: Bearer ${COMMERCIAL_INQUIRY_SECRET}`
- `Content-Type: application/json`
- `Accept: application/json`

Body uses Agent B field names (`website`, `source`, `sourceDetail`, `insightRecommendation`, `insightOpportunityId`, `submissionToken`).

`sourceDetail` may include `entryProduct` (URL product preselect) and `recommendation` (category). Avoid keys that contain blocked substrings such as `name`.

Success response (forwarded to the browser):

```json
{
  "ok": true,
  "inquiryId": "uuid",
  "recommendedRoute": "launch",
  "duplicate": false,
  "publishedStartingPrice": "Starting at $3,500"
}
```

`recommendedRoute`: `launch` | `presence` | `consultation`.

`publishedStartingPrice` is informational catalog copy only (or `null` for consultation).

## Environment

| Name | Where |
| --- | --- |
| `COMMERCIAL_INQUIRY_SECRET` | Server only. Required. Same name as Insight. |
| `RISECURRENT_COMMERCIAL_INQUIRY_URL` | Server only. Optional absolute URL override. |
| `NEXT_PUBLIC_EBS_INSIGHT_URL` | Optional Insight origin override used to build the default endpoint. |

Default endpoint: `getInsightUrl("/api/commercial-inquiries")`.

Do not use `NEXT_PUBLIC_` for the secret.
