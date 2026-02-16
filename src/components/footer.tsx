import Link from "next/link";
import { VaultMark } from "@/components/vault-mark";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <VaultMark className="h-6 w-6" />
          <span className="font-semibold text-slate-900">Vault</span>
          <span className="text-slate-400">—</span>
          <span className="text-slate-500">Documents, extracted & organized.</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
          <Link href="/demo" className="hover:text-slate-900">
            Demo
          </Link>
          <a href="#faq" className="hover:text-slate-900">
            FAQ
          </a>
          <a
            href="https://statphone.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900"
          >
            StatPhone
          </a>
        </div>
      </div>
    </footer>
  );
}
