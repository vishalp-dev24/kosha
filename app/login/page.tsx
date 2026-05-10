import Link from "next/link";
import { MarketingShell } from "@/components/marketing-shell";
import { Badge, ButtonLink } from "@/components/ui";

export default function LoginPage() {
  return (
    <MarketingShell>
      <main className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-10 px-4 py-16 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Badge tone="blue">Login</Badge>
          <h1 className="mt-6 font-display text-6xl leading-[0.9] tracking-[-0.07em] md:text-8xl">Return to the control room.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/68">Review live collections, eval gates, audit logs, and production API keys.</p>
        </div>
        <AuthCard mode="login" />
      </main>
    </MarketingShell>
  );
}

function AuthCard({ mode }: { mode: "login" | "signup" }) {
  return (
    <section className="paper-panel rounded-[2rem] p-5 md:p-8">
      <div className="rounded-[1.5rem] bg-ink p-5 text-paper">
        <h2 className="font-display text-4xl tracking-[-0.07em]">{mode === "login" ? "Log in" : "Start a pilot"}</h2>
        <p className="mt-2 text-sm leading-6 text-paper/58">Use your work email. SSO can be enabled during implementation.</p>
        <form className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm font-semibold text-paper/78">
            Work email
            <input className="min-h-12 rounded-xl border border-paper/10 bg-paper/8 px-4 text-paper outline-none focus:border-blue" type="email" placeholder="founder@company.com" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-paper/78">
            Password
            <input className="min-h-12 rounded-xl border border-paper/10 bg-paper/8 px-4 text-paper outline-none focus:border-blue" type="password" placeholder="••••••••••••" />
          </label>
          <Link href="/app" className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue px-5 text-sm font-semibold text-white transition hover:bg-[#2459d8]">
            Continue
          </Link>
        </form>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-ink/58">
        <span>{mode === "login" ? "No pilot workspace yet?" : "Already have a workspace?"}</span>
        <ButtonLink href={mode === "login" ? "/signup" : "/login"} variant="secondary" className="min-h-10 px-4 py-2">
          {mode === "login" ? "Start a pilot" : "Log in"}
        </ButtonLink>
      </div>
    </section>
  );
}
