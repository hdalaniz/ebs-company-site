import { SectionHeading } from "@/components/marketing/SectionHeading";

const reasons = [
  {
    title: "Stop guessing what to improve",
    description:
      "See where demand is leaking instead of relying on opinions, random tweaks, or disconnected reports.",
  },
  {
    title: "Know what to do next",
    description:
      "Each product is designed to surface a practical next step—not another dashboard to interpret.",
  },
  {
    title: "Connect improvements to business outcomes",
    description:
      "The goal is booked revenue. EBS is built to connect activity, follow-through, and results.",
  },
] as const;

export function WhyEbs() {
  return (
    <section
      id="why-ebs"
      aria-labelledby="why-ebs-heading"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-10 sm:px-8 sm:py-14 lg:py-16"
    >
      <SectionHeading
        headingId="why-ebs-heading"
        eyebrow="Why EBS"
        heading="Built for owners who need a clearer system for growth."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {reasons.map((reason) => (
          <article key={reason.title} className="ebs-card p-6 sm:p-7">
            <h3 className="text-lg font-semibold tracking-tight text-light">
              {reason.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-light/80 sm:leading-7">
              {reason.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
