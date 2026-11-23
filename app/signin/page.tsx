import type { Metadata } from "next";
import { SimplePage } from "@/components/marketing/SimplePage";
import { ctaCopy } from "@/config/site";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Customer sign-in is not available. RiseCurrent Insight, Launch, and Presence do not require an account on this site.",
};

export default function SignInPage() {
  return (
    <SimplePage
      eyebrow="No account required"
      title="Customer accounts are not available yet."
      description="This company site does not offer sign-in or customer accounts. RiseCurrent Insight, Launch, and Presence do not require an account here. If you already have a website, you can run RiseCurrent Insight now. RiseCurrent Launch, for businesses that need a conversion-focused website foundation, is available now."
      ctaHref="/products/launch"
      ctaLabel={ctaCopy.launch}
    />
  );
}
