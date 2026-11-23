# CTA Analytics (P4)

Minimal click tracking for RiseCurrent public CTAs.

## Package

- `@vercel/analytics` (page views + custom events)
- Helper: `lib/analytics.ts`
- Script mount: `<Analytics />` in `app/layout.tsx`

## Event names

| Event | When it fires |
| --- | --- |
| `cta_insight_click` | Insight CTAs (including `getInsightUrl("/analyze")` handoffs) |
| `cta_launch_click` | Launch product CTAs (`/products/launch`) |
| `cta_presence_click` | Presence product CTAs (`/products/presence`) |
| `cta_get_started_click` | Header / primary Get Started CTAs (`/get-started`) |

Get Started click events stay limited to the event name. Do not add business name, contact name, email, phone, website, or message fields to analytics payloads. Qualification submissions are not analytics events.

## How to inspect

1. Deploy to Vercel (Analytics enabled on the project).
2. Open the Vercel project → Analytics → Custom Events.
3. Locally, events are no-ops if the Analytics script is absent; navigation still works.
4. After deploy, browser Network requests to `/_vercel/insights` confirm delivery.

Tracking failures are swallowed so CTA navigation is never blocked.
