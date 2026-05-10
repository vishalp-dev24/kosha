import Link from "next/link";
import { MarketingShell } from "@/components/marketing-shell";
import { Badge, ButtonLink } from "@/components/ui";

export default function SignupPage() {
  return (
    <MarketingShell>
      <main className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-10 px-4 py-16 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Badge tone="teal">Pilot request</Badge>
          <h1 className="mt-6 font-display text-6xl leading-[0.9] tracking-[-0.07em] md:text-8xl">Prove one safe workflow in seven days.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/68">Bring a document set, one product question, and one user role. Kosha will show whether the workflow is production-safe.</p>
        </div>
        <section className="paper-panel rounded-2xl p-5 md:p-8">
          <div className="rounded-xl bg-ink p-5 text-paper">
            <h2 className="font-display text-4xl tracking-[-0.07em]">Start a pilot</h2>
            <form className="mt-6 grid gap-4">
              {[
                ["Work email", "email", "founder@company.com"],
                ["Company", "text", "Acme Fintech"],
                ["Primary workflow", "text", "Claims policy answers"]
              ].map(([label, type, placeholder]) => (
                <label key={label} className="grid gap-2 text-sm font-semibold text-paper/78">
                  {label}
                  <input className="min-h-12 rounded-xl border border-paper/10 bg-paper/8 px-4 text-paper outline-none focus:border-blue" type={type} placeholder={placeholder} />
                </label>
              ))}
              <Link href="/app/onboarding" className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue px-5 text-sm font-semibold text-white transition hover:bg-[#2459d8]">
                Create pilot workspace
              </Link>
            </form>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-ink/58">
            <span>Already have a workspace?</span>
            <ButtonLink href="/login" variant="secondary" className="min-h-10 px-4 py-2">Log in</ButtonLink>
          </div>
        </section>
      </main>
    </MarketingShell>
  );
}
