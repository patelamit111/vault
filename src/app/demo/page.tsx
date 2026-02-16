"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { VaultMark } from "@/components/vault-mark";

type DocType = "passport" | "insurance" | "bank" | "generic";

function fakeExtract(type: DocType) {
  if (type === "passport")
    return {
      title: "Passport — Amit Patel",
      fields: {
        name: "Amit Patel",
        nationality: "United States",
        passportNumber: "•••••••••",
        expiration: "2034-10-11",
      },
      confidence: 0.92,
      drivePath: "Vault/Passports/",
    };

  if (type === "insurance")
    return {
      title: "Insurance Card — BlueCross",
      fields: {
        memberName: "Amit Patel",
        memberId: "••••••••",
        plan: "PPO",
        rxBin: "••••••",
      },
      confidence: 0.86,
      drivePath: "Vault/Insurance/",
    };

  if (type === "bank")
    return {
      title: "Bank Account — Checking",
      fields: {
        bank: "Chase",
        accountType: "Checking",
        routing: "•••••••••",
        account: "•••••••••",
      },
      confidence: 0.9,
      drivePath: "Vault/Banking/",
    };

  return {
    title: "Document — Uploaded",
    fields: {
      category: "Generic",
      summary: "Important document (review fields)",
      reference: "AUTO-EXTRACT",
    },
    confidence: 0.75,
    drivePath: "Vault/Other/",
  };
}

export default function DemoPage() {
  const [docType, setDocType] = useState<DocType>("passport");
  const [fileName, setFileName] = useState<string | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);

  const extracted = useMemo(() => fakeExtract(docType), [docType]);

  return (
    <div className="min-h-screen">
      <header className="border-b border-white/15 bg-[#060813]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <VaultMark className="h-7 w-7" />
            <span className="text-sm font-semibold">Vault</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-white/70 hover:text-white"
          >
            Back
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Demo</h1>
            <p className="mt-3 text-white/65">
              This is a UI prototype showing the intended flow. In production,
              the extraction pipeline would OCR + run an LLM, then write the
              original to Drive and the structured index to Sheets.
            </p>

            <div className="mt-8 rounded-3xl border border-white/15 bg-white/7 p-6">
              <div className="text-sm font-semibold">1) Upload</div>
              <div className="mt-3 grid gap-3">
                <input
                  type="file"
                  className="block w-full text-sm text-white/70 file:mr-4 file:rounded-full file:border-0 file:bg-white file:px-4 file:py-2 file:text-xs file:font-semibold file:text-black hover:file:bg-white/90"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    setFileName(f ? f.name : null);
                  }}
                />

                <div className="grid grid-cols-2 gap-3">
                  <label className="text-xs text-white/60">
                    Document type
                    <select
                      value={docType}
                      onChange={(e) => setDocType(e.target.value as DocType)}
                      className="mt-1 block w-full rounded-xl border border-white/10 bg-[#0B1020] px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-sky-400/40"
                    >
                      <option value="passport">Passport</option>
                      <option value="insurance">Insurance card</option>
                      <option value="bank">Bank account</option>
                      <option value="generic">Generic</option>
                    </select>
                  </label>

                  <label className="text-xs text-white/60">
                    Google destination
                    <div className="mt-1 rounded-xl border border-white/10 bg-[#0B1020] px-3 py-2 text-sm text-white/80">
                      Drive + Sheets
                    </div>
                  </label>
                </div>

                <button
                  className="mt-1 inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black transition hover:bg-white/90 disabled:opacity-60"
                  disabled={isExtracting}
                  onClick={async () => {
                    setIsExtracting(true);
                    await new Promise((r) => setTimeout(r, 900));
                    setIsExtracting(false);
                  }}
                >
                  {isExtracting ? "Extracting…" : "Extract fields"}
                </button>

                <div className="text-xs text-white/50">
                  Selected: {fileName ?? "(no file chosen)"}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-white/15 bg-white/7 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">2) Review</div>
                  <div className="mt-1 text-xs text-white/50">
                    confidence {extracted.confidence.toFixed(2)}
                  </div>
                </div>
                <div className="text-xs text-white/50">prototype</div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-[#0B1020] p-5">
                <div className="text-sm font-semibold">{extracted.title}</div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {Object.entries(extracted.fields).map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                    >
                      <div className="text-[11px] uppercase tracking-wide text-white/45">
                        {k}
                      </div>
                      <div className="mt-1 text-sm font-medium text-white/90">
                        {v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
                  <div className="text-[11px] uppercase tracking-wide text-white/45">
                    Save locations
                  </div>
                  <div className="mt-1 text-white/85">
                    Drive → <span className="text-white/60">{extracted.drivePath}</span>
                  </div>
                  <div className="mt-1 text-white/85">
                    Sheets → <span className="text-white/60">Vault Index</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-end gap-2">
                  <button className="h-10 rounded-full border border-white/15 bg-white/5 px-4 text-xs font-semibold text-white/90">
                    Edit
                  </button>
                  <button className="h-10 rounded-full bg-emerald-400 px-4 text-xs font-semibold text-emerald-950">
                    Confirm & Save
                  </button>
                </div>
              </div>

              <div className="mt-4 text-xs text-white/50">
                Next steps after this UI: wire Google OAuth, Drive upload, and
                Sheets writes.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
