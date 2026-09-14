import type { Metadata } from "next";
import { SimplePage } from "@/components/marketing/SimplePage";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Elevate Business Systems handles privacy for this public company site.",
};

export default function PrivacyPage() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Privacy"
      description="A published privacy policy will live here. Until then, this page exists so visitors can find our intended legal home."
    />
  );
}
