import { ScenicPhoto } from "@/components/brand/ScenicPhoto";
import { brand } from "@/config/brand";

const categories = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Other home services",
] as const;

export function LocalBusinessBreak() {
  return (
    <section
      aria-labelledby="local-business-heading"
      className="relative isolate overflow-hidden"
    >
      <ScenicPhoto
        src={brand.assets.localNeighborhood}
        alt={brand.photography.localNeighborhoodAlt}
        variant="band"
        objectPosition="object-[center_40%]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
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
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {categories.map((category) => (
              <li
                key={category}
                className="rounded-full border border-on-dark/20 bg-on-dark/10 px-3.5 py-1.5 text-sm font-medium text-on-dark"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
