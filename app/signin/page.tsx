import type { Metadata } from "next";
import { SimplePage } from "@/components/marketing/SimplePage";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Account sign-in is not available on this site yet.",
};

export default function SignInPage() {
  return (
    <SimplePage
      eyebrow="Account"
      title="Sign in is not available yet."
      description="This company site does not currently include account access. Get started with EBS Presence, the product path that is available now."
      ctaHref="/products/presence"
      ctaLabel="Explore EBS Presence"
    />
  );
}
