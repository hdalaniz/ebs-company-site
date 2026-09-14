import type { Metadata } from "next";
import { SimplePage } from "@/components/marketing/SimplePage";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of use for the Elevate Business Systems public company site.",
};

export default function TermsPage() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Terms"
      description="Published terms of use will live here. Until then, this page exists so visitors can find our intended legal home."
    />
  );
}
