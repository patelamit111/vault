import Link from "next/link";
import { VaultMark } from "@/components/vault-mark";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-6">
        <div className="hairline border-t" />
        <div className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm">
            <VaultMark className="h-6 w-6" />
            <span className="font-semibold text-[#0B0D10]">Vault</span>
            <span className="text-[rgba(11,13,16,.35)]">—</span>
            <span className="text-[rgba(11,13,16,.62)]">
              Documents, extracted & organized.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[rgba(11,13,16,.62)]">
            <Link href="/demo" className="hover:text-[#0B0D10]">
              Demo
            </Link>
            <a href="#faq" className="hover:text-[#0B0D10]">
              FAQ
            </a>
            <a
              href="https://statphone.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0B0D10]"
            >
              StatPhone
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
