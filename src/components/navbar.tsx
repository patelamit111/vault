import Link from "next/link";
import { VaultMark } from "@/components/vault-mark";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A0F]/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <VaultMark className="h-7 w-7" />
          <span className="text-sm font-semibold tracking-tight">Vault</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
          <a href="#how-it-works" className="hover:text-white">
            How it works
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
          <Link href="/demo" className="hover:text-white">
            Demo
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/demo"
            className="inline-flex h-10 items-center justify-center rounded-full bg-white px-4 text-xs font-semibold text-black transition hover:bg-white/90"
          >
            Open demo
          </Link>
        </div>
      </div>
    </header>
  );
}
