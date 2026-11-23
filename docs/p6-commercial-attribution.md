# P6 commercial attribution

Shared contract for Get Started source, product interest, and measurement.

Agent A owns `/get-started` UX. Agent B owns inquiry persistence and routing. This branch does not add a form or a second inquiry endpoint.

Browser referrer is not an attribution source. Insight links keep `rel="noreferrer"`. Use the query params below.

## Query params

| Param | Values | Fallback |
| --- | --- | --- |
| `product` | `launch`, `presence`, `not-sure` | `not-sure` |
| `source` | `company_header`, `launch_page`, `presence_page`, `insight_results`, `direct_get_started` | `direct_get_started` |
| `recommendation` | `weak-foundation`, `conversion-optimization`, `healthy-foundation`, `ambiguous` | omitted |
| `ref` | opaque `opp_…` id or UUID | omitted |

`source=insight` is the only alias. It becomes `insight_results`.

`not_sure` is accepted as `not-sure`. Other product strings, including names and emails, become `not-sure` and are not copied into the URL.

## Links already wired

| Surface | Href |
| --- | --- |
| Header Get Started | `/get-started?product=not-sure&source=company_header` |
| Generic page Get Started | `/get-started?product=not-sure&source=direct_get_started` |
| Launch page Get Started | `/get-started?product=launch&source=launch_page` |
| Presence page Get Started | `/get-started?product=presence&source=presence_page` |

Insight results use the absolute company origin with `source=insight_results`.

Helpers: `parseGetStartedContext`, `buildGetStartedPath`, and `GET_STARTED_LINKS` in `lib/attribution.ts`.

## Agent A

1. Read `parseGetStartedContext(searchParams)` on the server. Preselect `productInterest`. Do not read `document.referrer`.
2. Keep name, email, phone, and message in the form body only.
3. On first qualification interaction call `trackQualificationStarted(context)`.
4. On success call `trackQualificationSubmitted(context)`. That emits `qualification_submitted` and one of `launch_interest_submitted`, `presence_interest_submitted`, or `not_sure_interest_submitted`.
5. On failure call `trackQualificationFailed({ ...context, reason })` with `validation`, `network`, or `unavailable`.
6. When Agent B returns `commercialRoute`, call `trackCommercialRouteReturned({ ...context, route })`.
7. When `fromInsightResults` is true, call `trackInsightHandoffArrived(context)` once on load.
8. Submit attribution with the inquiry payload using the field names below. Do not put those values only in analytics.

## Agent B

Persist these fields on the existing commercial inquiry. Do not add a competing endpoint from this work.

| Field | Type |
| --- | --- |
| `productInterest` | `launch` \| `presence` \| `not-sure` |
| `source` | attribution source union |
| `recommendationCategory` | recommendation union or null |
| `opportunityRef` | opaque ref or null |
| `commercialRoute` | `launch` \| `presence` \| `not-sure` or null until routing finishes |

`attributionForInquiry(context, route)` builds that object. `commercialRoute` is chosen after qualification. It is not a URL param.

Return `commercialRoute` on the inquiry response so Agent A can record `commercial_route_returned`.

`opportunityRef` must be an id this server can resolve. Finding slugs are rejected and are not a resolver key.

## Analytics

Existing P4 events stay on Vercel Analytics (`cta_insight_click`, `cta_launch_click`, `cta_presence_click`, `cta_get_started_click`).

P6 adds props on `cta_get_started_click` (`product`, `source`) and these event names:

- `qualification_started`
- `qualification_submitted`
- `qualification_failed`
- `commercial_route_returned`
- `insight_handoff_arrived`
- `launch_interest_submitted`
- `presence_interest_submitted`
- `not_sure_interest_submitted`

Insight click measurement stays in Insight as `insight_get_started_handoff`. `insight_handoff_arrived` is the company-site arrival, so the two properties are not the same event fired twice.

No customer PII goes into these props.
