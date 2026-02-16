import Link from "next/link";
import { VaultMark } from "@/components/vault-mark";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-white/70">
          <VaultMark className="h-6 w-6" />
          <span className="font-semibold text-white">Vault</span>
          <span className="text-white/40">—</span>
          <span className="text-white/55">Documents, extracted & organized.</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
          <Link href="/demo" className="hover:text-white">
            Demo
          </Link>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
          <a
            href="https://statphone.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            StatPhone
          </a>
        </div>
      </div>
    </footer>
  );
}
