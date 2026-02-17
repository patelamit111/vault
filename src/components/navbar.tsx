import Link from "next/link";
import { VaultMark } from "@/components/vault-mark";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2">
          <VaultMark className="h-7 w-7" />
          <span className="text-sm font-semibold tracking-tight text-[#0B0D10]">
            Vault
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[rgba(11,13,16,.62)] sm:flex">
          <a href="#how-it-works" className="hover:text-[#0B0D10]">
            How it works
          </a>
          <a href="#faq" className="hover:text-[#0B0D10]">
            FAQ
          </a>
          <Link href="/demo" className="hover:text-[#0B0D10]">
            Demo
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/demo"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#0B0D10] px-4 text-xs font-semibold text-white transition hover:bg-black"
          >
            Open demo
          </Link>
        </div>
      </div>
      <div className="hairline mx-auto max-w-6xl border-b" />
    </header>
  );
}
