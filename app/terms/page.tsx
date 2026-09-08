import type { Metadata } from "next";
import { SimplePage } from "@/components/marketing/SimplePage";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use placeholder for Elevate Business Systems.",
};

export default function TermsPage() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Terms"
      description="This is a placeholder terms page. The published terms will live here."
    />
  );
}
