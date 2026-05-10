import { MarketingShell } from "@/components/marketing-shell";
import { MotionSection } from "@/components/motion-section";
import { PricingCard } from "@/components/pricing-card";
import { Badge, SectionHeader } from "@/components/ui";
import { pricingPlans } from "@/data/kosha";

export default function PricingPage() {
  return (
    <MarketingShell>
      <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <Badge tone="blue">Pricing</Badge>
        <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[0.9] tracking-[-0.07em] md:text-8xl">Pilot-first pricing for production infrastructure.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/68">
          Cheap SaaS pricing would be dishonest here. The pilot is designed to prove safe answers, source coverage, permissions, eval gates, and auditability in one real workflow.
        </p>
        <MotionSection className="mt-12 grid gap-4 lg:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} featured={index === 1} />
          ))}
        </MotionSection>
        <MotionSection className="mt-16 rounded-xl border border-line bg-white/60 p-6 md:p-10">
          <SectionHeader title="The first implementation should be narrow." copy="Pick one workflow, one collection, one user role, and one refusal policy. Expanding before proving safety is how RAG projects rot." />
        </MotionSection>
      </main>
    </MarketingShell>
  );
}
