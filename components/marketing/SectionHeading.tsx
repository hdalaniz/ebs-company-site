type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  supporting?: string;
  headingId?: string;
};

export function SectionHeading({
  eyebrow,
  heading,
  supporting,
  headingId,
}: SectionHeadingProps) {
  return (
    <div>
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.22em] text-teal uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={headingId}
        className={
          eyebrow
            ? "mt-4 max-w-xl text-2xl font-bold tracking-tight text-light sm:text-3xl lg:text-[2.15rem]"
            : "max-w-xl text-2xl font-bold tracking-tight text-light sm:text-3xl lg:text-[2.15rem]"
        }
      >
        {heading}
      </h2>
      {supporting ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-light/80 sm:text-[1.05rem] sm:leading-8">
          {supporting}
        </p>
      ) : null}
    </div>
  );
}
