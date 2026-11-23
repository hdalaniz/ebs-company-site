# P6 commercial attribution

Shared contract for Get Started source, product interest, and measurement.

Agent A owns `/get-started` UX. Agent B owns inquiry persistence and routing via `POST /api/commercial-inquiries`.

Browser referrer is not an attribution source. Insight links keep `rel="noreferrer"`. Use the query params below.

## Query params

| Param | Values | Fallback |
| --- | --- | --- |
| `product` | `launch`, `presence`, `not-sure` | `not-sure` |
| `source` | `company_header`, `launch_page`, `presence_page`, `insight_results`, `direct_get_started` | `direct_get_started` |
| `recommendation` | `weak-foundation`, `conversion-optimization`, `healthy-foundation`, `ambiguous` | omitted |
| `ref` | opaque `opp_…` id or UUID | omitted |

`source=insight` becomes `insight_results`. `not_sure` becomes `not-sure`.

## Links wired

| Surface | Href |
| --- | --- |
| Header Get Started | `/get-started?product=not-sure&source=company_header` |
| Homepage Get Started | `/get-started?product=not-sure&source=direct_get_started` |
| Launch page | `/get-started?product=launch&source=launch_page` |
| Presence page | `/get-started?product=presence&source=presence_page` |
| Insight Launch/Presence results | absolute `/get-started` with `source=insight_results` |

## Inquiry field mapping

| Company-site / URL concept | Insight field |
| --- | --- |
| final form product interest | `productInterest` (`not_sure` when UI is `not-sure`) |
| attribution `source` | `source` |
| recommendation category | `sourceDetail.recommendation` |
| opaque `ref` | `insightOpportunityId` |
| Insight arrival product (launch/presence) | `insightRecommendation` |
| Agent B route response | `recommendedRoute` (`launch` \| `presence` \| `consultation`) |

Do not keep parallel `recommendationCategory` / `opportunityRef` / `commercialRoute` fields on the Insight payload.

## Analytics

Existing Vercel Analytics CTAs remain. P6 adds (no PII):

- `qualification_started`
- `qualification_submitted`
- `qualification_failed`
- `commercial_route_returned`
- `insight_handoff_arrived`
- `launch_interest_submitted` / `presence_interest_submitted` / `not_sure_interest_submitted`

`cta_get_started_click` includes normalized `product` and `source`.
