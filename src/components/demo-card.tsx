import Link from "next/link";

export function DemoCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_60px_160px_-120px_rgba(168,85,247,0.65)]">
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/10 via-indigo-400/10 to-fuchsia-400/10" />
      <div className="relative grid gap-4 p-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">Vault Index (Google Sheets)</div>
            <div className="text-xs text-white/50">live view</div>
          </div>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#070A0F]">
            <div className="grid grid-cols-12 gap-0 border-b border-white/10 bg-white/5 px-4 py-3 text-[11px] uppercase tracking-wide text-white/50">
              <div className="col-span-4">Title</div>
              <div className="col-span-3">Type</div>
              <div className="col-span-3">Updated</div>
              <div className="col-span-2 text-right">Status</div>
            </div>
            {[
              ["Passport — Amit", "passport", "2 min ago", "verified"],
              ["BlueCross Card", "insurance", "yesterday", "needs review"],
              ["Chase Checking", "bank account", "3 days ago", "verified"],
              ["Homeowners Policy", "insurance", "last week", "extracted"],
            ].map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-12 items-center gap-0 px-4 py-3 text-sm text-white/85 hover:bg-white/5"
              >
                <div className="col-span-4 truncate font-medium">{row[0]}</div>
                <div className="col-span-3 text-white/70">{row[1]}</div>
                <div className="col-span-3 text-white/70">{row[2]}</div>
                <div className="col-span-2 text-right">
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/75">
                    {row[3]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-white/10 bg-[#070A0F] p-5">
            <div className="text-sm font-semibold">Try the interactive demo</div>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Upload a sample document and see what Vault would extract and
              where it would save it in Drive + Sheets.
            </p>
            <Link
              href="/demo"
              className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Open demo
            </Link>
            <p className="mt-3 text-xs text-white/50">
              This site is a prototype UI. Connectors + extraction pipeline can
              be wired next.
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-xs font-semibold text-white/80">Design inspo</div>
            <div className="mt-2 text-xs text-white/55">
              Stripe-level polish, Airbnb clarity, and StatPhone’s punchy
              simplicity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
