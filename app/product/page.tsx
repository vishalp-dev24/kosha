import { AnimatedPipeline } from "@/components/animated-pipeline";
import { CitationTrail } from "@/components/citation-trail";
import { DocumentIngestionCard } from "@/components/document-ingestion-card";
import { MarketingShell } from "@/components/marketing-shell";
import { MotionSection } from "@/components/motion-section";
import { PipelineStepper } from "@/components/pipeline-stepper";
import { QueryPlayground } from "@/components/query-playground";
import { SecurityControlList } from "@/components/security-control-list";
import { Badge, ButtonLink } from "@/components/ui";

export default function ProductPage() {
  return (
    <MarketingShell>
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-32">
          <div className="grid items-center gap-12 overflow-hidden lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="max-w-xl">
              <Badge tone="blue">Product</Badge>
              <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-6xl">
                A secure control room for document AI.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink/60">
                Kosha handles ingestion, retrieval, citations, permissions, evals, audit logs, and the production API surface. The point is not to demo RAG. The point is to ship it safely.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/signup">Start a pilot</ButtonLink>
                <ButtonLink href="/app" variant="secondary">Open dashboard</ButtonLink>
              </div>
            </div>
            <AnimatedPipeline />
          </div>
        </section>

        {/* Pipeline Steps - Bento Grid */}
        <MotionSection className="border-t border-line/60 bg-sand/20 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-12 max-w-2xl">
              <Badge tone="slate">Pipeline</Badge>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                From upload to audit in five steps
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/60">
                Every document follows a controlled journey through parsing, retrieval, citation, and audit.
              </p>
            </div>
            <PipelineStepper />
          </div>
        </MotionSection>

        {/* Live Operations - Dark Section */}
        <MotionSection className="relative bg-ink py-24 text-paper md:py-32">
          {/* Subtle glow background */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.1] blur-[150px]"
              style={{background: "radial-gradient(circle, rgba(47,107,255,0.3) 0%, transparent 60%)"}} />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-14 max-w-2xl">
              <Badge tone="teal">Live operations</Badge>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl lg:text-5xl">
                Ingestion is not a background afterthought
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-paper/60">
                Parsing state, OCR confidence, permission mapping, and review exceptions are visible before the collection goes live.
              </p>
            </div>
            <DocumentIngestionCard />
          </div>
        </MotionSection>

        {/* Citation Trail - Bento Grid Layout */}
        <MotionSection className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
              <div className="lg:sticky lg:top-8">
                <Badge tone="slate">Proof layer</Badge>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  Citations are enforced, inspectable, and exportable
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink/60">
                  Kosha makes source trails part of the API contract instead of a UI-only decoration.
                </p>
                <div className="mt-8 hidden lg:block">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue/10 text-xs font-semibold text-blue">1</div>
                      <p className="text-sm text-ink/70">Document and page-level provenance</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue/10 text-xs font-semibold text-blue">2</div>
                      <p className="text-sm text-ink/70">Confidence scoring per citation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue/10 text-xs font-semibold text-blue">3</div>
                      <p className="text-sm text-ink/70">Permission checks before source access</p>
                    </div>
                  </div>
                </div>
              </div>
              <CitationTrail />
            </div>
          </div>
        </MotionSection>

        {/* Security Controls - Feature Grid */}
        <MotionSection className="border-t border-line/60 bg-sand/20 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <Badge tone="slate">Runtime</Badge>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl">
                Permissions, refusals, and eval gates are product primitives
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/60">
                If source evidence is missing, the safe product behavior is refusal. Anything else will break in production.
              </p>
            </div>
            <SecurityControlList />
          </div>
        </MotionSection>

        {/* Query Playground - Full Width */}
        <MotionSection className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-10 max-w-2xl">
              <Badge tone="slate">Try it out</Badge>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                Test queries against your documents
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/60">
                See how Kosha handles permission checks, citations, and refusal decisions in real-time.
              </p>
            </div>
            <QueryPlayground />
          </div>
        </MotionSection>

        {/* CTA Section */}
        <section className="border-t border-line/60 bg-sand/20 py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl">
              Ready to ship safe document AI?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink/60">
              Start with a pilot to validate citations, permissions, and audit trails against your workflow.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/signup">Start a pilot</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Talk to sales</ButtonLink>
            </div>
          </div>
        </section>
      </main>
    </MarketingShell>
  );
}
