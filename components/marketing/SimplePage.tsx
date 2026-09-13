import { ButtonLink } from "@/components/marketing/ButtonLink";

type SimplePageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function SimplePage({
  eyebrow,
  title,
  description,
  ctaHref = "/",
  ctaLabel = "Back to home",
}: SimplePageProps) {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.22em] text-teal uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h1
        className={
          eyebrow
            ? "mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            : "text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        }
      >
        {title}
      </h1>
      <p className="mt-5 text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
        {description}
      </p>
      <div className="mt-8">
        <ButtonLink href={ctaHref} variant="secondary">
          {ctaLabel}
        </ButtonLink>
      </div>
    </div>
  );
}
