"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Bell, Command, ShieldCheck } from "lucide-react";
import { appNavItems } from "@/data/kosha";
import { cn } from "@/lib/utils";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-ink text-paper">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-paper/10 bg-slate/88 p-4 backdrop-blur-xl lg:block">
        <Link href="/" className="flex items-center gap-3 rounded-2xl border border-paper/10 bg-paper/7 p-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-paper text-sm font-black text-ink">K</span>
          <div>
            <div className="font-display text-2xl tracking-[-0.06em]">Kosha</div>
            <div className="text-xs text-paper/45">Control room</div>
          </div>
        </Link>
        <nav className="mt-6 grid gap-1" aria-label="Application navigation">
          {appNavItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                  active ? "bg-paper text-ink shadow-copper" : "text-paper/62 hover:bg-paper/8 hover:text-paper"
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-teal/25 bg-teal/10 p-4">
          <ShieldCheck className="h-5 w-5 text-teal" aria-hidden="true" />
          <p className="mt-3 text-sm font-semibold">Production guardrails active</p>
          <p className="mt-1 text-xs leading-5 text-paper/55">Citations, permissions, eval gates, and audit traces are enforced for live keys.</p>
        </div>
      </aside>
      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-paper/10 bg-ink/84 backdrop-blur-xl">
          <div className="flex min-h-16 items-center justify-between gap-3 px-4 md:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <Link href="/" className="grid h-9 w-9 place-items-center rounded-xl bg-paper text-sm font-black text-ink lg:hidden" aria-label="Kosha home">
                K
              </Link>
              <div className="hidden items-center gap-2 rounded-full border border-paper/10 bg-paper/7 px-3 py-2 text-xs text-paper/55 md:flex">
                <Command className="h-3.5 w-3.5" aria-hidden="true" />
                <span>claims-prod / live</span>
              </div>
            </div>
            <div className="scrollbar-thin flex gap-2 overflow-x-auto lg:hidden" aria-label="Mobile application navigation">
              {appNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold",
                    pathname === item.href ? "border-paper bg-paper text-ink" : "border-paper/10 bg-paper/5 text-paper/60"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <button className="grid h-9 w-9 place-items-center rounded-full border border-paper/10 bg-paper/7 text-paper/70" aria-label="Notifications">
              <Bell className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </header>
        <motion.main
          key={pathname}
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="min-h-[calc(100vh-4rem)] px-4 py-6 md:px-6"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}
