import { MarketingShell } from "@/components/marketing-shell";
import { MotionSection } from "@/components/motion-section";
import { Badge, ButtonLink, SectionHeader } from "@/components/ui";
import { useCases } from "@/data/kosha";

export default function UseCasesPage() {
  return (
    <MarketingShell>
      <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="max-w-4xl">
          <Badge tone="copper">Use cases</Badge>
          <h1 className="mt-6 font-display text-6xl leading-[0.9] tracking-[-0.07em] md:text-8xl">For teams whose documents carry risk.</h1>
          <p className="mt-6 text-lg leading-8 text-ink/68">
            Kosha is built for founders and engineers who need document answers in workflows where wrong, uncited, or unauthorized output creates real operational damage.
          </p>
        </div>
        <MotionSection className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <article key={useCase.title} className="group rounded-xl border border-line bg-white/62 p-6 transition hover:-translate-y-1 hover:border-blue/35 hover:shadow-ledger">
                <Icon className="h-7 w-7 text-blue" aria-hidden="true" />
                <h2 className="mt-6 font-display text-4xl leading-none tracking-[-0.07em] text-ink">{useCase.title}</h2>
                <p className="mt-4 text-sm leading-6 text-ink/64">{useCase.copy}</p>
                <div className="mt-6 rounded-lg border border-line/70 bg-paper/72 p-4 text-sm font-semibold text-ink/72">
                  Production behavior: answer only when source, permission, and confidence checks pass.
                </div>
              </article>
            );
          })}
        </MotionSection>
        <MotionSection className="mt-16 rounded-2xl bg-ink p-6 text-paper md:p-10">
          <SectionHeader invert title="If the answer cannot cite source evidence, the product should refuse." copy="This is the difference between a useful AI feature and a liability disguised as a chatbot." />
          <ButtonLink href="/signup" className="mt-8">Start a pilot</ButtonLink>
        </MotionSection>
      </main>
    </MarketingShell>
  );
}
