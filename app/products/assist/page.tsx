import type { Metadata } from "next";
import {
  AssistCapabilities,
  AssistFinalCta,
  AssistHero,
  AssistMaturity,
  AssistPlatformLoop,
  AssistPriorities,
  AssistSignals,
} from "@/components/products/AssistSections";

export const metadata: Metadata = {
  title: {
    absolute: "RiseCurrent Assist | Know Your Next Best Move",
  },
  description:
    "A future RiseCurrent intelligence layer designed to recommend, prioritize, and draft the next best business actions. Not currently available and does not take autonomous actions today.",
};

export default function AssistPage() {
  return (
    <>
      <AssistHero />
      <AssistPriorities />
      <AssistMaturity />
      <AssistSignals />
      <AssistCapabilities />
      <AssistPlatformLoop />
      <AssistFinalCta />
    </>
  );
}
