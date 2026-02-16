import Link from "next/link";
import { VaultMark } from "@/components/vault-mark";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#F7F7FB]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <VaultMark className="h-7 w-7" />
          <span className="text-sm font-semibold tracking-tight">Vault</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
          <a href="#how-it-works" className="hover:text-slate-900">
            How it works
          </a>
          <a href="#faq" className="hover:text-slate-900">
            FAQ
          </a>
          <Link href="/demo" className="hover:text-slate-900">
            Demo
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/demo"
            className="inline-flex h-10 items-center justify-center rounded-full bg-slate-900 px-4 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Open demo
          </Link>
        </div>
      </div>
    </header>
  );
}
