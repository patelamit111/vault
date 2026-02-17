"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { VaultMark } from "@/components/vault-mark";

type DocType = "passport" | "insurance" | "bank" | "generic";

type Extracted = {
  title: string;
  fields: Record<string, string>;
  confidence: number;
  drivePath: string;
};

function fakeExtract(type: DocType): Extracted {
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
      summary: "Important document (auto-tagged)",
      reference: "AUTO-EXTRACT",
    },
    confidence: 0.75,
    drivePath: "Vault/Other/",
  };
}

export default function DemoPage() {
  const [docType, setDocType] = useState<DocType>("passport");
  const [fileName, setFileName] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [saved, setSaved] = useState(false);

  const extracted = useMemo(() => fakeExtract(docType), [docType]);

  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200/70 bg-[#F7F7FB]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <VaultMark className="h-7 w-7" />
            <span className="text-sm font-semibold">Vault</span>
          </Link>
          <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">
            Back
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h1 className="font-serif text-3xl font-semibold tracking-tight text-slate-900">
              Demo
            </h1>
            <p className="mt-3 text-slate-600">
              Prototype flow: upload → automatic extraction + categorization →
              auto-save to Drive + Sheets. No review step.
            </p>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Upload</div>
              <div className="mt-3 grid gap-3">
                <input
                  type="file"
                  className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-slate-800"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    setFileName(f ? f.name : null);
                  }}
                />

                <div className="grid grid-cols-2 gap-3">
                  <label className="text-xs text-slate-600">
                    Document type
                    <select
                      value={docType}
                      onChange={(e) => {
                        setDocType(e.target.value as DocType);
                        setSaved(false);
                      }}
                      className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-blue-500/30"
                    >
                      <option value="passport">Passport</option>
                      <option value="insurance">Insurance card</option>
                      <option value="bank">Bank account</option>
                      <option value="generic">Generic</option>
                    </select>
                  </label>

                  <label className="text-xs text-slate-600">
                    Destination
                    <div className="mt-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800">
                      Drive + Sheets
                    </div>
                  </label>
                </div>

                <button
                  className="mt-1 inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
                  disabled={isRunning}
                  onClick={async () => {
                    setIsRunning(true);
                    setSaved(false);
                    await new Promise((r) => setTimeout(r, 850));
                    setSaved(true);
                    setIsRunning(false);
                  }}
                >
                  {isRunning ? "Extracting + saving…" : "Upload & auto-save"}
                </button>

                <div className="text-xs text-slate-500">
                  Selected: {fileName ?? "(no file chosen)"}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    Automatic result
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    confidence {extracted.confidence.toFixed(2)}
                  </div>
                </div>
                <div className="text-xs text-slate-500">prototype</div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900">
                    {extracted.title}
                  </div>
                  {saved ? (
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                      Saved
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                      Pending
                    </span>
                  )}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {Object.entries(extracted.fields).map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2"
                    >
                      <div className="text-[11px] uppercase tracking-wide text-slate-500">
                        {k}
                      </div>
                      <div className="mt-1 text-sm font-medium text-slate-900">
                        {v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
                  <div className="text-[11px] uppercase tracking-wide text-slate-500">
                    Saved locations
                  </div>
                  <div className="mt-1 text-slate-800">
                    Drive → <span className="text-slate-600">{extracted.drivePath}</span>
                  </div>
                  <div className="mt-1 text-slate-800">
                    Sheets → <span className="text-slate-600">Vault Index</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-500">
                Next step: wire Google OAuth + Drive upload + Sheets writes +
                proof-of-life escalation.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
