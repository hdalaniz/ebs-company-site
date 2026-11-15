import type { Metadata } from "next";
import { SimplePage } from "@/components/marketing/SimplePage";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of use for the Elevate Business Systems public company site and early-access product links.",
};

export default function TermsPage() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Terms of use"
      description="These terms cover use of the Elevate Business Systems (EBS) public company website and early-access links to related EBS products. They are written for invited pilot customers and website visitors. They are not a substitute for a formal legal review."
    >
      <section>
        <h2 className="text-lg font-semibold tracking-tight text-ink">
          The company website
        </h2>
        <p className="mt-3">
          This site provides information about EBS products and how to get
          started. Content is for general information. It does not create a
          customer account, a paid subscription, or a professional services
          engagement by itself.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight text-ink">
          Product availability
        </h2>
        <p className="mt-3">
          Product status labels on this site are intentional. EBS Insight is
          available now as a diagnostic experience for businesses that already
          have a website. EBS Launch, Growth, Revenue Intelligence, and Assist
          are Coming Soon or Future products and are not usable customer
          products on this site today.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight text-ink">
          EBS Insight
        </h2>
        <p className="mt-3">
          When you follow a link to EBS Insight, you use a separate application.
          Insight reviews publicly available website experience and returns
          findings and suggested next actions. Results are diagnostic and
          informational. They are not a guarantee of revenue, rankings, lead
          volume, or business outcomes.
        </p>
        <p className="mt-3">
          You are responsible for the website address and contact information
          you submit, and for confirming you have the right to request review of
          that site.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight text-ink">
          Acceptable use
        </h2>
        <p className="mt-3">
          Do not misuse EBS sites or products, attempt unauthorized access, submit
          unlawful content, or use early-access tools in ways that disrupt
          service for others. EBS may limit or discontinue early-access use.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight text-ink">
          No warranties; limitation
        </h2>
        <p className="mt-3">
          Early-access and marketing materials are provided as-is for pilot use.
          To the fullest extent permitted by law, EBS disclaims warranties not
          expressly stated in a separate signed agreement, and is not liable for
          indirect or consequential damages arising from use of this site or
          linked early-access tools.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight text-ink">
          Changes
        </h2>
        <p className="mt-3">
          EBS may update these terms as products and policies mature. Continued
          use of this site after updates means you accept the revised terms for
          that use.
        </p>
        <p className="mt-3 text-sm leading-6 text-ink/65 sm:text-[0.95rem]">
          Last updated for early-access pilot use. Counsel review is recommended
          before broader public distribution.
        </p>
      </section>
    </SimplePage>
  );
}
