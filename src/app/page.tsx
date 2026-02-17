import Link from "next/link";
import { DemoCard } from "@/components/demo-card";
import { FeatureGrid } from "@/components/feature-grid";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  IllustrationDriveSheets,
  IllustrationProofOfLife,
} from "@/components/illustrations";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-44 left-1/2 h-[680px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-rose-500/10 blur-3xl" />
            <div className="absolute bottom-[-220px] right-[-220px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-emerald-400/10 to-cyan-400/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-14">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                No database. Your Drive + Sheets are the system of record.
              </p>

              <h1 className="font-serif mt-6 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                Your important documents—
                <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-rose-700 bg-clip-text text-transparent">
                  extracted and organized
                </span>
                .
              </h1>

              <p className="mt-5 text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
                Upload passports, insurance cards, account statements, anything.
                Vault pulls out the details and saves everything directly into
                your Google Drive and Google Sheets so it’s searchable, portable,
                and yours.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/demo"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  See the demo
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white/70 px-6 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-white"
                >
                  How it works
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-500">
                <span>Google OAuth</span>
                <span>Drive folder + Sheets index</span>
                <span>Auto-categorization</span>
                <span>Auto-save</span>
              </div>
            </div>

            <div className="mt-14">
              <DemoCard />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="font-serif text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Feels like a Vault. Lives in Google.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Vault is the UI + extraction layer. Your data stays in tools you
            already trust and can export any time.
          </p>
          <div className="mt-10">
            <FeatureGrid />
          </div>
        </section>

        {/* Visuals */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="font-serif text-2xl font-semibold tracking-tight text-slate-900">
                Automatic extraction + categorization
              </h3>
              <p className="mt-3 text-slate-600">
                Upload a document and Vault does the rest: detects the type,
                extracts key fields, and saves the original to Drive + the
                structured index to Sheets.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                {[
                  "Passports",
                  "Insurance cards",
                  "Statements",
                  "Accounts",
                  "IDs",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-[0_30px_90px_-60px_rgba(79,70,229,0.25)]">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-white">
                <IllustrationDriveSheets />
              </div>
            </div>
          </div>
        </section>

        {/* Proof of Life */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-[0_30px_90px_-60px_rgba(16,185,129,0.22)]">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-white">
                <IllustrationProofOfLife />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="font-serif text-2xl font-semibold tracking-tight text-slate-900">
                Proof of life (access escalation)
              </h3>
              <p className="mt-3 text-slate-600">
                Pick trusted people. If you don’t access Vault for X days—or if
                you don’t respond to a ping email within a window—Vault can
                automatically grant access to your Vault folder + index.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[{
                  t: "Inactivity timer",
                  b: "Grant access after X days without a login.",
                },
                {
                  t: "Email ping",
                  b: "Send a “prove you’re there” email before escalating.",
                },
                {
                  t: "Multiple designees",
                  b: "One person or a small group—configurable.",
                },
                {
                  t: "Audit trail",
                  b: "Every step logged in the Sheet for visibility.",
                }].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-2xl border border-slate-200 bg-white/70 p-4"
                  >
                    <div className="text-sm font-semibold text-slate-900">
                      {x.t}
                    </div>
                    <div className="mt-1 text-sm text-slate-600">{x.b}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <Link
                  href="/demo"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  See the flow
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl font-semibold tracking-tight text-slate-900">
                3 steps. Zero busywork.
              </h3>
              <p className="mt-3 text-slate-600">
                The flow is simple: upload → extract → review → save.
              </p>

              <ol className="mt-8 space-y-6">
                {[
                  {
                    title: "Upload a document",
                    body: "PDFs, photos, scans—drop it in. Vault auto-detects the type.",
                  },
                  {
                    title: "We extract key fields",
                    body: "LLM + OCR pulls structured fields with confidence and citations.",
                  },
                  {
                    title: "Saved to your Drive + Sheets",
                    body: "The original goes to Drive. The extracted index lands in your Sheet.",
                  },
                ].map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        {s.title}
                      </div>
                      <div className="mt-1 text-sm text-slate-600">{s.body}</div>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 flex gap-3">
                <Link
                  href="/demo"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Try the demo
                </Link>
                <a
                  href="#faq"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 text-sm font-semibold text-slate-800 transition hover:bg-white"
                >
                  Read the FAQ
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-[0_30px_90px_-60px_rgba(37,99,235,0.25)]">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900">
                    Example: Passport
                  </div>
                  <div className="text-xs text-slate-500">confidence: 0.92</div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  {[
                    ["Name", "Amit Patel"],
                    ["Number", "••••••••"],
                    ["Country", "United States"],
                    ["Expires", "2034-10-11"],
                    ["Issued", "2024-10-12"],
                    ["DOB", "••••-••-••"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2"
                    >
                      <div className="text-[11px] uppercase tracking-wide text-slate-500">
                        {k}
                      </div>
                      <div className="mt-1 font-medium text-slate-900">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
                  <div className="text-[11px] uppercase tracking-wide text-slate-500">
                    Where it gets saved
                  </div>
                  <div className="mt-1 text-slate-800">
                    Drive → <span className="text-slate-600">Vault/Passports/</span>
                  </div>
                  <div className="mt-1 text-slate-800">
                    Sheets → <span className="text-slate-600">Vault Index</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-end gap-2">
                  <button className="h-10 rounded-full border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-800">
                    Edit
                  </button>
                  <button className="h-10 rounded-full bg-emerald-500 px-4 text-xs font-semibold text-white">
                    Confirm & Save
                  </button>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-500">
                Vault never forces you into a proprietary format. If you stop
                using Vault, your docs and index still live in your Google
                account.
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-200 bg-white/70 p-8">
            <h3 className="font-serif text-2xl font-semibold tracking-tight text-slate-900">
              FAQ
            </h3>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {[
                {
                  q: "Do you store my data?",
                  a: "Your originals go to your Google Drive. Your extracted fields go to your Google Sheet. Vault is the interface and automation layer.",
                },
                {
                  q: "Is this secure?",
                  a: "Access is gated by Google OAuth and scoped to an app-owned Drive folder + one Sheet. Proof-of-life escalation is opt-in and fully configurable.",
                },
                {
                  q: "Can I use it across devices?",
                  a: "Yes. Sign in with the same Google account anywhere and your Vault appears instantly.",
                },
                {
                  q: "What if the extraction is wrong?",
                  a: "Vault is designed for automatic capture. In practice, you can still correct fields later in your Sheet (and Vault can learn your preferences).",
                },
              ].map((item) => (
                <div key={item.q}>
                  <div className="font-semibold text-slate-900">{item.q}</div>
                  <div className="mt-2 text-sm text-slate-600">{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
