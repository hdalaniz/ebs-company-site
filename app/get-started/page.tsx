import type { Metadata } from "next";
import { GetStartedExperience } from "@/components/get-started/GetStartedExperience";
import { parseGetStartedContext } from "@/lib/attribution";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Tell RiseCurrent about your home-service business. Launch and Presence are available now. Insight is free. This page does not take payment or book time.",
  alternates: {
    canonical: "/get-started",
  },
};

export default async function GetStartedPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const context = parseGetStartedContext(query);

  // Only treat product as an explicit URL selection when the param was present.
  // Missing product stays null so a direct visit is not recorded as a chosen query.
  const explicitProduct =
    query.product === undefined ? null : context.productInterest;

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <GetStartedExperience
        initialProduct={context.productInterest}
        productQuery={explicitProduct}
        attribution={context}
      />
    </div>
  );
}
