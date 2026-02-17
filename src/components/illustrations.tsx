export function IllustrationDriveSheets() {
  return (
    <svg
      viewBox="0 0 640 420"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="g" x1="80" y1="60" x2="560" y2="360">
          <stop stopColor="#1D4ED8" stopOpacity="0.12" />
          <stop offset="0.5" stopColor="#4F46E5" stopOpacity="0.12" />
          <stop offset="1" stopColor="#E11D48" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      <rect x="36" y="40" width="568" height="340" rx="28" fill="url(#g)" />
      <rect
        x="56"
        y="60"
        width="528"
        height="300"
        rx="22"
        fill="#FFFFFF"
        stroke="#E2E8F0"
      />

      {/* Left: Drive folder */}
      <rect x="86" y="106" width="220" height="210" rx="18" fill="#F8FAFC" stroke="#E2E8F0" />
      <path
        d="M120 154c0-8 6-14 14-14h48l12 14h70c8 0 14 6 14 14v96c0 8-6 14-14 14H134c-8 0-14-6-14-14v-96Z"
        fill="#0B1220"
        opacity="0.06"
      />
      <path
        d="M120 150c0-8 6-14 14-14h48l12 14h70c8 0 14 6 14 14v96c0 8-6 14-14 14H134c-8 0-14-6-14-14v-96Z"
        fill="#FFFFFF"
        stroke="#CBD5E1"
      />
      <rect x="136" y="188" width="124" height="10" rx="5" fill="#94A3B8" opacity="0.55" />
      <rect x="136" y="214" width="156" height="10" rx="5" fill="#94A3B8" opacity="0.40" />
      <rect x="136" y="240" width="140" height="10" rx="5" fill="#94A3B8" opacity="0.35" />

      {/* Right: Sheets table */}
      <rect x="334" y="106" width="220" height="210" rx="18" fill="#F8FAFC" stroke="#E2E8F0" />
      <rect x="352" y="128" width="184" height="18" rx="9" fill="#0B1220" opacity="0.06" />
      <rect x="352" y="160" width="184" height="14" rx="7" fill="#94A3B8" opacity="0.25" />
      <rect x="352" y="184" width="184" height="14" rx="7" fill="#94A3B8" opacity="0.20" />
      <rect x="352" y="208" width="184" height="14" rx="7" fill="#94A3B8" opacity="0.20" />
      <rect x="352" y="232" width="184" height="14" rx="7" fill="#94A3B8" opacity="0.20" />
      <rect x="352" y="256" width="184" height="14" rx="7" fill="#94A3B8" opacity="0.20" />

      {/* Connector arrow */}
      <path
        d="M306 206h22"
        stroke="#1D4ED8"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M330 206l-10-8v16l10-8Z"
        fill="#1D4ED8"
      />

      {/* Title */}
      <text
        x="86"
        y="92"
        fill="#0B1220"
        fontSize="14"
        fontFamily="ui-sans-serif, system-ui"
        opacity="0.7"
      >
        Drive + Sheets (your system of record)
      </text>
    </svg>
  );
}

export function IllustrationProofOfLife() {
  return (
    <svg
      viewBox="0 0 640 420"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="p" x1="100" y1="40" x2="540" y2="380">
          <stop stopColor="#1D4ED8" stopOpacity="0.10" />
          <stop offset="1" stopColor="#10B981" stopOpacity="0.10" />
        </linearGradient>
      </defs>

      <rect x="36" y="40" width="568" height="340" rx="28" fill="url(#p)" />
      <rect
        x="56"
        y="60"
        width="528"
        height="300"
        rx="22"
        fill="#FFFFFF"
        stroke="#E2E8F0"
      />

      {/* Timeline */}
      <path d="M120 260h400" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" />
      <circle cx="180" cy="260" r="12" fill="#1D4ED8" />
      <circle cx="320" cy="260" r="12" fill="#1D4ED8" opacity="0.45" />
      <circle cx="460" cy="260" r="12" fill="#CBD5E1" />

      {/* Card: ping */}
      <rect x="104" y="112" width="236" height="118" rx="18" fill="#F8FAFC" stroke="#E2E8F0" />
      <rect x="126" y="138" width="190" height="10" rx="5" fill="#0B1220" opacity="0.10" />
      <rect x="126" y="160" width="156" height="10" rx="5" fill="#94A3B8" opacity="0.45" />
      <rect x="126" y="182" width="170" height="10" rx="5" fill="#94A3B8" opacity="0.35" />
      <rect x="126" y="202" width="92" height="12" rx="6" fill="#1D4ED8" opacity="0.16" />

      {/* Card: access */}
      <rect x="354" y="112" width="250" height="118" rx="18" fill="#F8FAFC" stroke="#E2E8F0" />
      <rect x="376" y="138" width="200" height="10" rx="5" fill="#0B1220" opacity="0.10" />
      <rect x="376" y="160" width="164" height="10" rx="5" fill="#94A3B8" opacity="0.45" />
      <rect x="376" y="182" width="182" height="10" rx="5" fill="#94A3B8" opacity="0.35" />
      <rect x="376" y="202" width="130" height="12" rx="6" fill="#10B981" opacity="0.16" />

      {/* Arrow from ping to access */}
      <path d="M340 170h14" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round" />
      <path d="M356 170l-10-8v16l10-8Z" fill="#1D4ED8" />

      <text
        x="86"
        y="92"
        fill="#0B1220"
        fontSize="14"
        fontFamily="ui-sans-serif, system-ui"
        opacity="0.7"
      >
        Proof of life → automated access escalation
      </text>
    </svg>
  );
}
