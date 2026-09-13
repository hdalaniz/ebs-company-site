import type { Metadata } from "next";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: site.description,
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="inline-flex rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.22em] text-teal uppercase">
        About
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        The platform behind EBS products.
      </h1>
      <p className="mt-5 text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
        Elevate Business Systems helps service businesses turn missed demand
        into booked revenue. This site is the parent brand and product hub for
        Presence, Growth, Revenue Intelligence, and Assist.
      </p>
      <p className="mt-5 text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
        EBS is not a generic website agency, an all-purpose AI operating system,
        or a CRM replacement. It is a focused growth system: strengthen the
        digital foundation, capture more of the demand you already have, measure
        what creates revenue, and take the next best action.
      </p>
      <div className="mt-8">
        <ButtonLink href="/products/presence">Explore EBS Presence</ButtonLink>
      </div>
    </div>
  );
}
