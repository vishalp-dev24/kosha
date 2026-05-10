import { AnimatedPipeline } from "@/components/animated-pipeline";
import { CitationTrail } from "@/components/citation-trail";
import { DocumentIngestionCard } from "@/components/document-ingestion-card";
import { MarketingShell } from "@/components/marketing-shell";
import { MotionSection } from "@/components/motion-section";
import { PipelineStepper } from "@/components/pipeline-stepper";
import { QueryPlayground } from "@/components/query-playground";
import { SecurityControlList } from "@/components/security-control-list";
import { Badge, ButtonLink, SectionHeader } from "@/components/ui";

export default function ProductPage() {
  return (
    <MarketingShell>
      <main>
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <Badge tone="blue">Product</Badge>
              <h1 className="mt-6 font-display text-6xl leading-[0.9] tracking-[-0.07em] md:text-8xl">A secure control room for document AI.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/68">
                Kosha handles ingestion, retrieval, citations, permissions, evals, audit logs, and the production API surface. The point is not to demo RAG. The point is to ship it safely.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/signup">Start a pilot</ButtonLink>
                <ButtonLink href="/app" variant="secondary">Open dashboard</ButtonLink>
              </div>
            </div>
            <div className="scrollbar-thin overflow-x-auto rounded-[2rem] pb-2">
              <AnimatedPipeline />
            </div>
          </div>
        </section>

        <MotionSection className="mx-auto max-w-7xl px-4 pb-20 md:px-6 md:pb-28">
          <PipelineStepper />
        </MotionSection>

        <MotionSection className="bg-ink py-20 text-paper md:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader invert eyebrow="Live operations" title="Ingestion is not a background afterthought." copy="Parsing state, OCR confidence, permission mapping, and review exceptions are visible before the collection goes live." />
            <DocumentIngestionCard />
          </div>
        </MotionSection>

        <MotionSection className="mx-auto grid max-w-7xl gap-8 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Proof layer" title="Citations are enforced, inspectable, and exportable." copy="Kosha makes source trails part of the API contract instead of a UI-only decoration." />
          <CitationTrail />
        </MotionSection>

        <MotionSection className="bg-sand/38 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHeader eyebrow="Runtime" title="Permissions, refusals, and eval gates are product primitives." copy="If source evidence is missing, the safe product behavior is refusal. Anything else will break in production." />
            <div className="mt-10">
              <SecurityControlList />
            </div>
          </div>
        </MotionSection>

        <MotionSection className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <QueryPlayground />
        </MotionSection>
      </main>
    </MarketingShell>
  );
}
