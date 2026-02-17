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
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section>
          <div className="mx-auto max-w-6xl px-6 pt-24 pb-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium tracking-wide text-[rgba(11,13,16,.62)]">
                No database. Your Drive + Sheets are the system of record.
              </p>

              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[#0B0D10] sm:text-6xl">
                Your important documents—extracted and organized.
              </h1>

              <p className="mt-6 text-pretty text-lg leading-8 text-[rgba(11,13,16,.62)] sm:text-xl">
                Upload passports, insurance cards, account statements, anything.
                Vault pulls out the details and saves everything directly into
                your Google Drive and Google Sheets so it’s searchable,
                portable, and yours.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/demo"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#0B0D10] px-6 text-sm font-semibold text-white transition hover:bg-black"
                >
                  See the demo
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-[#0B0D10] transition hover:bg-[rgba(11,13,16,.04)]"
                >
                  How it works
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[rgba(11,13,16,.62)]">
                <span>Google OAuth</span>
                <span>Drive folder + Sheets index</span>
                <span>Auto-categorization</span>
                <span>Auto-save</span>
              </div>
            </div>

            <div className="mt-16">
              <DemoCard />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0B0D10] sm:text-3xl">
              Feels like a Vault. Lives in Google.
            </h2>
            <p className="mt-4 text-[rgba(11,13,16,.62)]">
              Vault is the UI + extraction layer. Your data stays in tools you
              already trust and can export any time.
            </p>
          </div>

          <div className="mt-14">
            <FeatureGrid />
          </div>
        </section>

        {/* Visuals */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#0B0D10]">
                Automatic extraction + categorization
              </h3>
              <p className="mt-4 text-[rgba(11,13,16,.62)]">
                Upload a document and Vault does the rest: detects the type,
                extracts key fields, and saves the original to Drive + the
                structured index to Sheets.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[rgba(11,13,16,.62)]">
                {["Passports", "Insurance cards", "Statements", "Accounts", "IDs"].map(
                  (t) => (
                    <span key={t}>{t}</span>
                  ),
                )}
              </div>
            </div>

            <div className="rounded-3xl surface p-4">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-white">
                <IllustrationDriveSheets />
              </div>
            </div>
          </div>
        </section>

        {/* Proof of Life */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 rounded-3xl surface p-4">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-white">
                <IllustrationProofOfLife />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-semibold tracking-tight text-[#0B0D10]">
                Proof of life (access escalation)
              </h3>
              <p className="mt-4 text-[rgba(11,13,16,.62)]">
                Pick trusted people. If you don’t access Vault for X days—or if
                you don’t respond to a ping email within a window—Vault can
                automatically grant access to your Vault folder + index.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  {
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
                  },
                ].map((x) => (
                  <div key={x.t} className="space-y-2">
                    <div className="text-sm font-semibold text-[#0B0D10]">
                      {x.t}
                    </div>
                    <div className="text-sm text-[rgba(11,13,16,.62)]">{x.b}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/demo"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#0B0D10] px-5 text-sm font-semibold text-white transition hover:bg-black"
                >
                  See the flow
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#0B0D10]">
                3 steps. Zero busywork.
              </h3>
              <p className="mt-4 text-[rgba(11,13,16,.62)]">
                The flow is simple: upload → extract → review → save.
              </p>

              <ol className="mt-10 space-y-8">
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
                    <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#0B0D10] text-sm font-semibold text-white">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-[#0B0D10]">{s.title}</div>
                      <div className="mt-2 text-sm text-[rgba(11,13,16,.62)]">
                        {s.body}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-12 flex gap-3">
                <Link
                  href="/demo"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#0B0D10] px-5 text-sm font-semibold text-white transition hover:bg-black"
                >
                  Try the demo
                </Link>
                <a
                  href="#faq"
                  className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold text-[#0B0D10] transition hover:bg-[rgba(11,13,16,.04)]"
                >
                  Read the FAQ
                </a>
              </div>
            </div>

            <div className="rounded-3xl surface p-6">
              <div className="rounded-2xl bg-white p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-[#0B0D10]">
                    Example: Passport
                  </div>
                  <div className="text-xs text-[rgba(11,13,16,.62)]">
                    confidence: 0.92
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  {[
                    ["Name", "Amit Patel"],
                    ["Number", "••••••••"],
                    ["Country", "United States"],
                    ["Expires", "2034-10-11"],
                    ["Issued", "2024-10-12"],
                    ["DOB", "••••-••-••"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-xl surface px-3 py-2">
                      <div className="text-[11px] uppercase tracking-wide text-[rgba(11,13,16,.62)]">
                        {k}
                      </div>
                      <div className="mt-1 font-medium text-[#0B0D10]">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl surface px-3 py-2 text-sm">
                  <div className="text-[11px] uppercase tracking-wide text-[rgba(11,13,16,.62)]">
                    Where it gets saved
                  </div>
                  <div className="mt-1 text-[#0B0D10]">
                    Drive → <span className="text-[rgba(11,13,16,.62)]">Vault/Passports/</span>
                  </div>
                  <div className="mt-1 text-[#0B0D10]">
                    Sheets → <span className="text-[rgba(11,13,16,.62)]">Vault Index</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-2">
                  <button className="h-10 rounded-full px-4 text-xs font-semibold text-[#0B0D10] hover:bg-[rgba(11,13,16,.04)]">
                    Edit
                  </button>
                  <button className="h-10 rounded-full bg-[#0B0D10] px-4 text-xs font-semibold text-white hover:bg-black">
                    Confirm & Save
                  </button>
                </div>
              </div>

              <div className="mt-4 text-xs text-[rgba(11,13,16,.62)]">
                Vault never forces you into a proprietary format. If you stop
                using Vault, your docs and index still live in your Google
                account.
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-3xl surface p-10">
            <h3 className="text-2xl font-semibold tracking-tight text-[#0B0D10]">
              FAQ
            </h3>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
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
                <div key={item.q} className="space-y-2">
                  <div className="font-semibold text-[#0B0D10]">{item.q}</div>
                  <div className="text-sm text-[rgba(11,13,16,.62)]">{item.a}</div>
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
