import { ScenicPhoto } from "@/components/brand/ScenicPhoto";
import { brand } from "@/config/brand";

const categories = [
  {
    name: "HVAC",
    icon: "hvac",
  },
  {
    name: "Plumbing",
    icon: "plumbing",
  },
  {
    name: "Electrical",
    icon: "electrical",
  },
  {
    name: "Roofing",
    icon: "roofing",
  },
  {
    name: "Other home services",
    icon: "other",
  },
  {
    name: "Landscaping",
    icon: "landscaping",
  },
] as const;

export function LocalBusinessBreak() {
  return (
    <section
      aria-labelledby="local-business-heading"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 motion-safe:origin-center motion-safe:animate-photo-settle">
        <ScenicPhoto
          src={brand.assets.localNeighborhood}
          alt={brand.photography.localNeighborhoodAlt}
          variant="band"
          objectPosition="object-[center_40%]"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-deep/78 via-navy-deep/55 to-navy-deep/20 sm:via-navy-deep/48 sm:to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <div className="max-w-2xl motion-safe:animate-fade-up">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              Built for local service businesses
            </p>
            <h2
              id="local-business-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-on-dark sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
            >
              Better systems help good businesses grow.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-on-dark/85 sm:text-lg sm:leading-8">
              EBS is being built for the businesses that keep homes and
              communities running — businesses where every missed call, slow
              response, or unclear website can mean lost revenue.
            </p>
          </div>

          <div className="motion-safe:animate-fade-up [animation-delay:100ms]">
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {categories.map((category) => (
                <li
                  key={category.name}
                  className="flex items-center gap-3 rounded-2xl border border-on-dark/15 bg-on-dark/10 px-3.5 py-3 text-sm font-medium text-on-dark shadow-[0_10px_28px_-22px_rgba(0,0,0,0.55)] backdrop-blur-md"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-on-dark/15 bg-on-dark/10 text-teal">
                    <CategoryIcon type={category.icon} />
                  </span>
                  {category.name}
                </li>
              ))}
            </ul>

            <aside className="mt-4 rounded-2xl border border-on-dark/15 bg-on-dark/12 px-4 py-4 backdrop-blur-md sm:px-5">
              <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-teal uppercase">
                Local business reality
              </p>
              <p className="mt-2 text-sm leading-6 text-on-dark/88">
                Every missed call, slow reply, or unclear website can mean lost
                work.
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryIcon({
  type,
}: {
  type: (typeof categories)[number]["icon"];
}) {
  const className = "size-4";

  if (type === "hvac") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <circle
          cx="8"
          cy="8"
          r="5.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M8 4.2v7.6M4.2 8h7.6M5.4 5.4l5.2 5.2M10.6 5.4 5.4 10.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "plumbing") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M4 3.5h4.5a2.5 2.5 0 0 1 0 5H7v4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 4.5h1.8M10.5 7.5h1.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "electrical") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M9 2.5 5.5 9h3l-1.5 4.5L12 7H9l1.5-4.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "roofing") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M2.5 8 8 3.5 13.5 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.2 7.2V12.5h7.6V7.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "landscaping") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M8 13.2V7.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M8 8.2c-2.4-.2-4.2-1.6-4.8-3.8 2.4.1 4.4 1.4 4.8 3.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M8 6.8c2.2-.8 3.8-2.4 4.2-4.5-2.5.5-4 2.2-4.2 4.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M3 12.5V6.8L8 3.5l5 3.3v5.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M6.2 12.5V9.2h3.6v3.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
