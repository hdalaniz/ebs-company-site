# Commercial lead contract (P6)

The company site does not store commercial leads. `/get-started` posts to a company-site route, which forwards the request to the Insight commercial-lead service owned by Agent B.

No company-site database, Stripe checkout, calendar booking, or customer account is part of this flow.

## Browser → company site

`POST /api/get-started`

Same-origin only. `Content-Type: application/json`.

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
  "productQuery": "launch"
}
```

Required:

- `businessName` (2–120)
- `trade`: `hvac` | `plumbing` | `other`
- `websiteSituation`: `no-website` | `needs-major-improvement` | `needs-better-conversion` | `not-sure`
- `productInterest`: `launch` | `presence` | `not-sure`
- `contactName` (2–80)
- `email`

Optional:

- `phone` (7–15 digits)
- `websiteUrl` (http/https). Omitted when `websiteSituation` is `no-website`, even if a URL was typed earlier. A blank URL is valid for every situation.
- `biggestProblem` (max 400)
- `productQuery`: the URL `product` value, or `null` on a direct visit. This is entry context. `productInterest` is the customer's final choice and may differ.

Not collected in this version: service area, company size, payment, or booking slots.

Public query string is only `product=launch|presence|not-sure`. Agent C owns broader attribution. Do not add UTM or click-id parameters here.

The browser must not receive `RISECURRENT_COMMERCIAL_LEAD_SECRET`. Click analytics must not include form fields.

## Company site → Insight

`POST {RISECURRENT_COMMERCIAL_LEAD_URL}`

When the URL is unset, the company site uses `{Insight origin}/api/commercial-leads` from `getInsightUrl("/api/commercial-leads")`.

Headers:

- `Content-Type: application/json`
- `Accept: application/json`
- `Authorization: Bearer ${RISECURRENT_COMMERCIAL_LEAD_SECRET}`

If the secret or a usable endpoint is missing, the company site returns **503** and does not call Insight. Nothing is written locally.

Body:

```json
{
  "businessName": "Summit Air",
  "trade": "hvac",
  "websiteSituation": "no-website",
  "productInterest": "launch",
  "contactName": "Ada Owner",
  "email": "ada@example.com",
  "source": {
    "surface": "company-site",
    "path": "/get-started",
    "productQuery": "launch"
  }
}
```

`source` is the extension point for Agent C. This version sets only `surface`, `path`, and `productQuery`.

Optional `phone`, `websiteUrl`, and `biggestProblem` are included only when present.

### Expected success — 200

```json
{
  "ok": true,
  "leadId": "lead_123",
  "recommendedRoute": "launch",
  "nextStep": "We'll review the Launch request and follow up with scope questions."
}
```

`recommendedRoute`: `launch` | `presence` | `insight` | `follow-up`.

The company site displays that route. It does not choose a second recommendation. An unknown or missing route is shown as a neutral follow-up, not as Launch or Presence.

`nextStep` is customer-facing copy. The company site replaces it when it promises a response window, a guarantee, a booked call, checkout, or payment. Do not send those promises unless operations already support them. This form does not.

`leadId` is optional. Allowed characters: letters, numbers, `_`, `-`, up to 80 characters. It is shown as a reference, not as an account id.

### Expected failure

```json
{
  "ok": false,
  "code": "INVALID_REQUEST",
  "message": "Request could not be accepted."
}
```

Any non-200 from Insight is treated as an upstream failure. The company site tells the visitor nothing was saved. It does not keep a local retry queue.

## Customer-facing outcomes

| Situation | What the visitor sees |
| --- | --- |
| Success | Request received, recommended route, what happens next, and a clear statement that time is not reserved and payment does not start |
| Validation error | Field messages, no request forwarded |
| Secret or endpoint missing | "We couldn't send this request yet. Nothing was saved." |
| Insight unreachable or non-200 | "We couldn't send this request. Nothing was saved." |
| 200 with an unusable body | Ask them to retry before submitting again. Do not claim the request was discarded if Insight may have stored it |

## Environment

| Name | Where |
| --- | --- |
| `RISECURRENT_COMMERCIAL_LEAD_URL` | Server only. Optional absolute URL. |
| `RISECURRENT_COMMERCIAL_LEAD_SECRET` | Server only. Required before forwarding. |

Set both on the company-site host. Agent B validates the bearer token. Do not use `NEXT_PUBLIC_` for either value.

## Shared files touched for integration

Other P6 work should expect these company-site edits:

- `config/site.ts` — generic Get Started href is `/get-started?product=not-sure`
- `components/layout/Header.tsx` — unchanged; it reads `site.getStartedHref`
- `components/marketing/FinalCta.tsx` — homepage Get Started
- `components/products/LaunchSections.tsx` — Launch Get Started
- `components/products/PresenceSections.tsx` — Presence Get Started
- `lib/analytics.ts` — `/get-started` maps to `cta_get_started_click` with no properties
- `app/privacy/page.tsx` and `app/terms/page.tsx` — qualification disclosure
- `package.json` — `server-only`, `tsx`, and `npm test` inside `verify`
- `.env.example` — server env names only

Insight route, persistence, and admin inbox stay in `ebs-insight-v2`.
