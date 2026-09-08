import type { Metadata } from "next";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import {
  LaunchComingSoon,
  PresenceDecision,
  PresencePaths,
} from "@/components/products/PresenceSections";

export const metadata: Metadata = {
  title: "EBS Presence",
  description:
    "Whether you're starting from scratch or already have a website, EBS Presence helps you build, understand, and improve the digital foundation customers see first.",
};

export default function PresencePage() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-5 pt-12 pb-6 sm:px-8 sm:pt-16 lg:pt-20">
        <p className="inline-flex rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.22em] text-teal uppercase">
          EBS Presence
        </p>
        <h1 className="mt-4 max-w-3xl text-[2.05rem] leading-[1.08] font-bold tracking-tight text-light sm:text-5xl lg:text-[3.1rem]">
          Make your online presence work harder for your business.
        </h1>
        <p className="mt-6 max-w-2xl text-[1.0625rem] leading-7 text-light/80 sm:text-lg sm:leading-8">
          Whether you&apos;re starting from scratch or already have a website,
          EBS Presence helps you build, understand, and improve the digital
          foundation customers see first.
        </p>
        <div className="mt-8">
          <ButtonLink href="#presence-decision-heading">
            Choose your path
          </ButtonLink>
        </div>
      </section>
      <PresenceDecision />
      <PresencePaths />
      <LaunchComingSoon />
    </>
  );
}
