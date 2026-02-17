import Link from "next/link";

export function DemoCard() {
  return (
    <div className="rounded-3xl surface">
      <div className="grid gap-8 p-7 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-[#0B0D10]">
              Vault Index (Google Sheets)
            </div>
            <div className="text-xs text-[rgba(11,13,16,.62)]">live view</div>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl bg-white">
            <div className="hairline grid grid-cols-12 gap-0 border-b px-4 py-3 text-[11px] uppercase tracking-wide text-[rgba(11,13,16,.62)]">
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
                className="grid grid-cols-12 items-center gap-0 px-4 py-3 text-sm text-[#0B0D10]"
              >
                <div className="col-span-4 truncate font-medium">{row[0]}</div>
                <div className="col-span-3 text-[rgba(11,13,16,.62)]">{row[1]}</div>
                <div className="col-span-3 text-[rgba(11,13,16,.62)]">{row[2]}</div>
                <div className="col-span-2 text-right text-xs text-[rgba(11,13,16,.62)]">
                  {row[3]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white p-6">
            <div className="text-sm font-semibold text-[#0B0D10]">
              Try the interactive demo
            </div>
            <p className="mt-2 text-sm leading-6 text-[rgba(11,13,16,.62)]">
              Upload a sample document and see what Vault would extract and where
              it would save it in Drive + Sheets.
            </p>
            <Link
              href="/demo"
              className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#0B0D10] px-5 text-sm font-semibold text-white transition hover:bg-black"
            >
              Open demo
            </Link>
            <p className="mt-3 text-xs text-[rgba(11,13,16,.62)]">
              This site is a prototype UI. Connectors + extraction pipeline can
              be wired next.
            </p>
          </div>

          <div className="mt-6 text-xs text-[rgba(11,13,16,.62)]">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-[rgba(11,13,16,.62)]">
              Design direction
            </div>
            <div className="mt-2">
              Minimal, typography-led, lots of whitespace. Keep the info; reduce
              the UI noise.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
