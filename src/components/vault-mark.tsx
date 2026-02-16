export function VaultMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="v" x1="8" y1="8" x2="56" y2="56">
          <stop stopColor="#7DD3FC" />
          <stop offset="0.5" stopColor="#A5B4FC" />
          <stop offset="1" stopColor="#F0ABFC" />
        </linearGradient>
      </defs>
      <path
        d="M18 10h28a8 8 0 0 1 8 8v28a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8Z"
        stroke="url(#v)"
        strokeWidth="3"
      />
      <path
        d="M24 30a8 8 0 0 1 16 0v10a8 8 0 0 1-16 0V30Z"
        stroke="url(#v)"
        strokeWidth="3"
      />
      <path
        d="M29 30v-3a3 3 0 1 1 6 0v3"
        stroke="url(#v)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="32" cy="37" r="2" fill="url(#v)" />
    </svg>
  );
}
