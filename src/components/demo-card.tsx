import Link from "next/link";

export function DemoCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-[0_40px_120px_-90px_rgba(99,102,241,0.45)]">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-indigo-500/5 to-rose-500/5" />
      <div className="relative grid gap-4 p-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-slate-900">
              Vault Index (Google Sheets)
            </div>
            <div className="text-xs text-slate-500">live view</div>
          </div>
          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-12 gap-0 border-b border-slate-200 bg-slate-50 px-4 py-3 text-[11px] uppercase tracking-wide text-slate-500">
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
                className="grid grid-cols-12 items-center gap-0 px-4 py-3 text-sm text-slate-800 hover:bg-slate-50"
              >
                <div className="col-span-4 truncate font-medium text-slate-900">
                  {row[0]}
                </div>
                <div className="col-span-3 text-slate-600">{row[1]}</div>
                <div className="col-span-3 text-slate-600">{row[2]}</div>
                <div className="col-span-2 text-right">
                  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-700">
                    {row[3]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">
              Try the interactive demo
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Upload a sample document and see what Vault would extract and
              where it would save it in Drive + Sheets.
            </p>
            <Link
              href="/demo"
              className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Open demo
            </Link>
            <p className="mt-3 text-xs text-slate-500">
              This site is a prototype UI. Connectors + extraction pipeline can
              be wired next.
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-white/70 p-5">
            <div className="text-xs font-semibold text-slate-700">Design inspo</div>
            <div className="mt-2 text-xs text-slate-600">
              Stripe-level polish, Airbnb clarity, and StatPhone’s punchy
              simplicity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
