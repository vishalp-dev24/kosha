import Link from "next/link";
import { Menu } from "lucide-react";
import { navItems } from "@/data/kosha";
import { KoshaLogo } from "@/components/kosha-logo";
import { ButtonLink } from "@/components/ui";

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Kosha home">
            <KoshaLogo />
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition hover:bg-white hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login" className="hidden rounded-full px-4 py-2 text-sm font-semibold text-ink/70 transition hover:bg-white md:inline-flex">
              Log in
            </Link>
            <ButtonLink href="/signup" className="hidden min-h-10 px-4 py-2 sm:inline-flex">
              Start a pilot
            </ButtonLink>
            <details className="group relative md:hidden">
              <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-xl border border-line bg-white text-ink transition hover:border-blue/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue [&::-webkit-details-marker]:hidden">
                <Menu className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Open menu</span>
              </summary>
              <div className="absolute right-0 top-12 w-64 rounded-xl border border-line bg-white p-2 shadow-dropdown">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-lg px-4 py-3 text-sm font-semibold text-ink/75 transition hover:bg-paper hover:text-ink">
                    {item.label}
                  </Link>
                ))}
                <div className="my-2 h-px bg-line" />
                <Link href="/login" className="block rounded-lg px-4 py-3 text-sm font-semibold text-ink/75 transition hover:bg-paper hover:text-ink">
                  Log in
                </Link>
                <Link href="/signup" className="mt-1 block rounded-lg bg-blue px-4 py-3 text-sm font-semibold text-white">
                  Start a pilot
                </Link>
              </div>
            </details>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6">
        {children}
      </main>
      <footer className="mt-auto border-t border-ink/10 bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-6">
          <div>
            <KoshaLogo invert />
            <p className="mt-4 max-w-md text-sm leading-6 text-paper/60">
              Production-safe RAG infrastructure for document-heavy teams that need cited answers, permission checks, evals, and audit trails.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/60">Product</div>
            <div className="mt-4 grid gap-3 text-sm text-paper/75">
              <Link href="/product">Platform</Link>
              <Link href="/docs">API preview</Link>
              <Link href="/pricing">Pilot pricing</Link>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/60">Control room</div>
            <div className="mt-4 grid gap-3 text-sm text-paper/75">
              <Link href="/app">Dashboard</Link>
              <Link href="/app/playground">Playground</Link>
              <Link href="/app/audit-logs">Audit logs</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
