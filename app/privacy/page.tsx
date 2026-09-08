import type { Metadata } from "next";
import { SimplePage } from "@/components/marketing/SimplePage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy placeholder for Elevate Business Systems.",
};

export default function PrivacyPage() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Privacy"
      description="This is a placeholder privacy page. The published policy will live here."
    />
  );
}
