import type { Metadata } from "next";
import { GetStartedExperience } from "@/components/get-started/GetStartedExperience";
import { readProductQuery } from "@/lib/get-started/model";

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
  searchParams: Promise<{ product?: string | string[] }>;
}) {
  const query = await searchParams;
  const { initial, explicit } = readProductQuery(query.product);

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <GetStartedExperience initialProduct={initial} productQuery={explicit} />
    </div>
  );
}
