import type { Metadata } from "next";
import { ComingSoonProduct } from "@/components/marketing/ComingSoonProduct";
import { RevenuePreview } from "@/components/products/RevenuePreview";

export const metadata: Metadata = {
  title: "EBS Revenue Intelligence",
  description:
    "A future EBS product to measure which leads, actions, and sources turn into bookings and revenue. Not currently available.",
};

export default function RevenueIntelligencePage() {
  return (
    <ComingSoonProduct
      name="EBS Revenue Intelligence"
      status="coming-soon"
      headline="Know what actually drives revenue."
      description="EBS Revenue Intelligence is intended to connect leads, responses, bookings, jobs, and revenue so owners can understand which activity is working."
      capabilities={[
        "Connect lead sources to bookings and revenue.",
        "See booking rate alongside volume, not instead of it.",
        "Understand which follow-through actually influences closed work.",
        "Identify recovered revenue from previously missed demand.",
      ]}
      preview={<RevenuePreview />}
    />
  );
}
