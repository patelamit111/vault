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
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2">
            <VaultMark className="h-7 w-7" />
            <span className="text-sm font-semibold">Vault</span>
          </Link>
          <Link href="/" className="text-sm text-[rgba(11,13,16,.62)] hover:text-[#0B0D10]">
            Back
          </Link>
        </div>
        <div className="hairline mx-auto max-w-6xl border-b" />
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-[#0B0D10]">
              Demo
            </h1>
            <p className="mt-4 text-[rgba(11,13,16,.62)]">
              Prototype flow: upload → automatic extraction + categorization →
              auto-save to Drive + Sheets.
            </p>

            <div className="mt-10 rounded-3xl surface p-7">
              <div className="text-sm font-semibold text-[#0B0D10]">Upload</div>
              <div className="mt-5 grid gap-4">
                <input
                  type="file"
                  className="block w-full text-sm text-[rgba(11,13,16,.62)] file:mr-4 file:rounded-full file:border-0 file:bg-[#0B0D10] file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-black"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    setFileName(f ? f.name : null);
                  }}
                />

                <div className="grid grid-cols-2 gap-3">
                  <label className="text-xs text-[rgba(11,13,16,.62)]">
                    Document type
                    <select
                      value={docType}
                      onChange={(e) => {
                        setDocType(e.target.value as DocType);
                        setSaved(false);
                      }}
                      className="mt-2 block w-full rounded-xl surface px-3 py-2 text-sm text-[#0B0D10] outline-none focus:ring-2 focus:ring-black/10"
                    >
                      <option value="passport">Passport</option>
                      <option value="insurance">Insurance card</option>
                      <option value="bank">Bank account</option>
                      <option value="generic">Generic</option>
                    </select>
                  </label>

                  <label className="text-xs text-[rgba(11,13,16,.62)]">
                    Destination
                    <div className="mt-2 rounded-xl surface px-3 py-2 text-sm text-[#0B0D10]">
                      Drive + Sheets
                    </div>
                  </label>
                </div>

                <button
                  className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-[#0B0D10] px-5 text-sm font-semibold text-white transition hover:bg-black disabled:opacity-60"
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

                <div className="text-xs text-[rgba(11,13,16,.62)]">
                  Selected: {fileName ?? "(no file chosen)"}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-3xl surface p-7">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-[#0B0D10]">
                    Automatic result
                  </div>
                  <div className="mt-2 text-xs text-[rgba(11,13,16,.62)]">
                    confidence {extracted.confidence.toFixed(2)}
                  </div>
                </div>
                <div className="text-xs text-[rgba(11,13,16,.62)]">prototype</div>
              </div>

              <div className="mt-6 rounded-2xl bg-white p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-[#0B0D10]">
                    {extracted.title}
                  </div>
                  {saved ? (
                    <span className="text-xs font-semibold text-[#0B0D10]">
                      Saved
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-[rgba(11,13,16,.62)]">
                      Pending
                    </span>
                  )}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {Object.entries(extracted.fields).map(([k, v]) => (
                    <div key={k} className="rounded-xl surface px-3 py-2">
                      <div className="text-[11px] uppercase tracking-wide text-[rgba(11,13,16,.62)]">
                        {k}
                      </div>
                      <div className="mt-1 text-sm font-medium text-[#0B0D10]">
                        {v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl surface px-3 py-2 text-sm">
                  <div className="text-[11px] uppercase tracking-wide text-[rgba(11,13,16,.62)]">
                    Saved locations
                  </div>
                  <div className="mt-1 text-[#0B0D10]">
                    Drive → <span className="text-[rgba(11,13,16,.62)]">{extracted.drivePath}</span>
                  </div>
                  <div className="mt-1 text-[#0B0D10]">
                    Sheets → <span className="text-[rgba(11,13,16,.62)]">Vault Index</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 text-xs text-[rgba(11,13,16,.62)]">
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
