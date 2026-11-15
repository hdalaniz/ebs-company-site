import type { Metadata } from "next";
import { SimplePage } from "@/components/marketing/SimplePage";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Customer sign-in is not available. EBS Presence and Insight do not require an account on this site.",
};

export default function SignInPage() {
  return (
    <SimplePage
      eyebrow="No account required"
      title="Customer accounts are not available yet."
      description="This company site does not offer sign-in or customer accounts. EBS Presence and EBS Insight do not require an account here. If you already have a website, you can run EBS Insight now. EBS Launch, for businesses that need a website, is Coming Soon."
      ctaHref="/products/presence"
      ctaLabel="Explore EBS Presence"
    />
  );
}
