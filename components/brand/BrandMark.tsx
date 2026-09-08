type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "size-8" }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`brand-mark-shadow shrink-0 rounded-lg ${className}`.trim()}
      role="img"
      aria-labelledby="ebsBrandMarkTitle"
    >
      <title id="ebsBrandMarkTitle">Elevate Business Systems</title>
      <rect width="32" height="32" rx="8" fill="#1EC8A5" />
      <path
        d="M5.5 23.5 12.2 13.8l3.4 4.2L21.8 9.5 26.5 23.5Z"
        fill="#04241C"
      />
      <path
        d="M12.2 13.8 16.4 8.2 21.8 9.5"
        fill="none"
        stroke="#0C131C"
        strokeWidth="1.15"
        strokeLinejoin="round"
        opacity="0.35"
      />
    </svg>
  );
}
