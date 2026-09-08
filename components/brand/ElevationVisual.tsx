export function ElevationVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative isolate aspect-[16/11] w-full ${className}`.trim()}
      aria-hidden="true"
    >
      <div className="hero-mountain-glow pointer-events-none absolute inset-[-16%] rounded-full" />
      <svg
        viewBox="0 0 640 440"
        className="relative h-full w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="sky" x1="320" y1="0" x2="320" y2="440">
            <stop offset="0%" stopColor="#121B27" />
            <stop offset="100%" stopColor="#05080D" />
          </linearGradient>
          <linearGradient id="farPeak" x1="180" y1="90" x2="180" y2="360">
            <stop offset="0%" stopColor="#1A2838" />
            <stop offset="100%" stopColor="#0C131C" />
          </linearGradient>
          <linearGradient id="midPeak" x1="360" y1="40" x2="360" y2="380">
            <stop offset="0%" stopColor="#24364A" />
            <stop offset="100%" stopColor="#121B27" />
          </linearGradient>
          <linearGradient id="nearPeak" x1="470" y1="80" x2="470" y2="400">
            <stop offset="0%" stopColor="#1EC8A5" stopOpacity="0.28" />
            <stop offset="42%" stopColor="#163445" />
            <stop offset="100%" stopColor="#0C131C" />
          </linearGradient>
          <linearGradient id="ridge" x1="80" y1="300" x2="540" y2="90">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1EC8A5" />
          </linearGradient>
        </defs>

        <rect width="640" height="440" rx="28" fill="url(#sky)" />

        <path
          d="M0 318 96 236l58 48 92-118 74 86 86-64 154 132v140H0Z"
          fill="url(#farPeak)"
        />
        <path
          d="M40 360 188 176l72 78 108-146 86 94 146 78v160H40Z"
          fill="url(#midPeak)"
        />
        <path
          d="M120 400 292 214l68 62 96-128 64 86 120 76v90H120Z"
          fill="url(#nearPeak)"
        />

        <path
          d="M92 304 188 176l72 78 108-146 74 82"
          stroke="url(#ridge)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M368 108h78v62"
          stroke="#1EC8A5"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx="368" cy="108" r="5.5" fill="#1EC8A5" />
        <circle
          cx="368"
          cy="108"
          r="14"
          fill="none"
          stroke="#1EC8A5"
          strokeOpacity="0.28"
        />
      </svg>
    </div>
  );
}
