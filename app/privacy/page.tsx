import type { Metadata } from "next";
import { SimplePage } from "@/components/marketing/SimplePage";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How RiseCurrent handles information on the company site and related RiseCurrent products used during early access.",
};

export default function PrivacyPage() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Privacy"
      description="This notice describes how RiseCurrent handles information for this public company website and for early-access use of related RiseCurrent products. It is written for invited pilot customers and website visitors. It is not a substitute for a formal legal review."
    >
      <section>
        <h2 className="text-lg font-semibold tracking-tight text-ink">
          This company website
        </h2>
        <p className="mt-3">
          The RiseCurrent company site is a marketing and product-information site. It
          does not currently offer customer accounts or sign-in. Browsing these
          pages alone does not create a RiseCurrent account.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight text-ink">
          Get Started requests
        </h2>
        <p className="mt-3">
          The Get Started page asks for a business name, trade, website
          situation, product interest, contact name, and email. You may also
          share a phone number, a website address, or a short note about the
          problem you want to solve. A business with no website can continue
          without one.
        </p>
        <p className="mt-3">
          RiseCurrent uses that information to follow up about Launch, Presence,
          or a free Insight diagnostic. Submitting the form does not create an
          account, reserve time, or start payment. The company site sends the
          request to RiseCurrent&apos;s commercial lead service. It does not keep a
          separate copy in a company-site database.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight text-ink">
          RiseCurrent Insight (separate product)
        </h2>
        <p className="mt-3">
          RiseCurrent Insight is a separate application linked from this site. When you
          run Insight, you may provide a public website address so RiseCurrent can
          review publicly available page content and return diagnostic findings.
          Insight is designed around public website experience — not private
          customer systems, CRMs, or field-service tools.
        </p>
        <p className="mt-3">
          If you request help from Insight, you may share contact details such as
          your name, email address, and optionally a phone number or message,
          along with context about the website you asked us to review. RiseCurrent uses
          that information to follow up with you about the request.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight text-ink">
          How we use information
        </h2>
        <p className="mt-3">
          Information shared with RiseCurrent during early access is used to operate the
          product experience you requested, respond to help requests and Get
          Started inquiries, improve product quality, and communicate about
          RiseCurrent services. We do not sell personal contact information.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight text-ink">
          Retention and access
        </h2>
        <p className="mt-3">
          Help-request and related operational records may be retained so RiseCurrent can
          respond and keep a basic record of the request. Access is limited to
          people operating RiseCurrent who need it for that purpose.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight text-ink">
          Launch, Presence, and future products
        </h2>
        <p className="mt-3">
          RiseCurrent Launch and Presence are available through the
          company site as managed services. This site does not create customer
          accounts for them. Qualification details submitted on Get Started are
          described above. Features labeled Coming Soon, Future, or Product
          Vision — including RiseCurrent Growth, Revenue Intelligence, and
          Assist — are not live customer products on this site today and do not
          collect account data here.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight text-ink">
          Questions
        </h2>
        <p className="mt-3">
          For privacy questions during early access, contact RiseCurrent
          using the same channel through which you were invited, or
          through any contact method listed on this site when available.
        </p>
        <p className="mt-3 text-sm leading-6 text-ink/65 sm:text-[0.95rem]">
          Last updated for early-access pilot use. A fuller privacy policy may
          replace this notice after legal review.
        </p>
      </section>
    </SimplePage>
  );
}
