import Link from "next/link";
import { ScenicPhoto } from "@/components/brand/ScenicPhoto";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";
import { brand } from "@/config/brand";
import { getInsightUrl } from "@/config/site";
import { cn } from "@/lib/cn";

const paths = [
  {
    question: "Already have a website?",
    name: "EBS Insight",
    description: "Analyze and improve your online presence.",
    href: getInsightUrl("/analyze"),
  },
  {
    question: "Need a website?",
    name: "EBS Launch",
    description: "Build your digital foundation.",
    href: "/products/presence#ebs-launch",
    comingSoon: true,
  },
] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden lg:min-h-[42rem]">
      <ScenicPhoto
        src={brand.assets.heroLandscape}
        alt={brand.photography.heroLandscapeAlt}
        priority
        objectPosition="object-[center_35%]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-5 pt-24 pb-14 sm:px-8 sm:pt-28 sm:pb-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-12 lg:pt-16 lg:pb-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Elevate Business Systems
          </p>
          <h1 className="mt-4 text-[2.15rem] leading-[1.12] font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
            Turn more local demand into booked revenue.
          </h1>
          <p className="mt-5 max-w-lg text-[1.0625rem] leading-7 text-ink/80 sm:text-lg sm:leading-8">
            Elevate Business Systems helps home-service businesses strengthen
            their online presence, respond to more opportunities, and turn more
            of the demand they already generate into customers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
            <ButtonLink href="/#products" className="w-full sm:w-auto">
              Explore EBS Products
            </ButtonLink>
            <ButtonLink
              href={getInsightUrl("/analyze")}
              variant="ghost"
              className="w-full sm:w-auto"
            >
              Run EBS Insight
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm font-medium tracking-wide text-ink/70">
            Built for local businesses. Designed for growth.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {paths.map((path) => (
            <HeroPathCard key={path.name} {...path} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroPathCard({
  question,
  name,
  description,
  href,
  comingSoon,
}: {
  question: string;
  name: string;
  description: string;
  href: string;
  comingSoon?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "ebs-card block p-5 transition-shadow hover:shadow-[0_22px_44px_-28px_rgba(14,36,56,0.42)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal sm:p-6",
        comingSoon && "ebs-card-muted",
      )}
    >
      <p className="text-sm text-muted">{question}</p>
      <div className="mt-2 flex flex-wrap items-center gap-2.5">
        <p className="text-lg font-semibold tracking-tight text-ink">{name}</p>
        {comingSoon ? (
          <ProductStatusBadge status="coming-soon" label="Coming Soon" />
        ) : null}
      </div>
      <p className="mt-1.5 text-sm leading-6 text-ink/75">{description}</p>
    </Link>
  );
}
