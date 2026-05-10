import { Braces, CheckCircle2, FileSearch, ShieldCheck } from "lucide-react";
import {
  EvidencePacketHero,
  PilotScopeCard,
  ProductProofGrid,
  ProductionGapCards,
  RegulatedWorkflowCards,
  SecurityPostureStrip,
  TrustArchitecture
} from "@/components/landing-product-preview";
import { MarketingShell } from "@/components/marketing-shell";
import { MotionSection } from "@/components/motion-section";
import { Badge, ButtonLink, SectionHeader } from "@/components/ui";

export default function LandingPage() {
  return (
    <MarketingShell>
      <main className="relative overflow-hidden">
        {/* Subtle mesh gradient background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -left-[10%] -top-[10%] h-[40rem] w-[40rem] rounded-full opacity-[0.06] blur-[120px]"
            style={{background: "radial-gradient(circle, rgba(47,107,255,0.4) 0%, transparent 70%)"}} />
          <div className="absolute right-[5%] top-[20%] h-[30rem] w-[30rem] rounded-full opacity-[0.04] blur-[100px]"
            style={{background: "radial-gradient(circle, rgba(30,158,143,0.5) 0%, transparent 70%)"}} />
        </div>
        <section className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-14 pt-16 md:gap-16 md:px-6 md:pb-20 md:pt-24 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Badge tone="copper">Production-safe document AI</Badge>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-ink md:text-6xl">
              Production-safe RAG for regulated document AI.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70 md:text-xl">
              Kosha gives fintech, insurtech, and healthtech teams cited answers, permission-aware retrieval, eval gates, and audit trails behind one API.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/signup">Book a technical walkthrough</ButtonLink>
              <ButtonLink href="#architecture" variant="secondary">
                Review architecture
              </ButtonLink>
            </div>
            <div className="mt-10 flex max-w-2xl flex-wrap gap-x-6 gap-y-3 border-t border-line/60 pt-5">
              {[
                ["Cited by default", "source, page, chunk"],
                ["Permission first", "role and purpose gate"],
                ["Audit-ready", "reviewable answer packet"]
              ].map(([title, copy]) => (
                <div key={title} className="min-w-[10.5rem]">
                  <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <CheckCircle2 className="h-4 w-4 text-teal" aria-hidden="true" />
                    {title}
                  </div>
                  <div className="mt-1 text-sm text-ink/70">{copy}</div>
                </div>
              ))}
            </div>
          </div>
          <EvidencePacketHero />
        </section>

        <MotionSection className="border-y border-line bg-sand/50 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
              <SectionHeader
                eyebrow="The production RAG gap"
                title="Vector search is not production readiness."
                copy="The prototype works until customers ask where an answer came from, why a user saw it, whether it was tested, and how to reconstruct the decision later."
              />
              <ProductionGapCards />
            </div>
          </div>
        </MotionSection>

        <MotionSection id="architecture" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-16 md:scroll-mt-28 md:px-6 md:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Trust architecture"
              title="The control layer between documents and AI answers."
              copy="Kosha turns messy files into a governed answer path: parse, restrict, retrieve, cite, evaluate, and audit before a response reaches your product."
            />
            <ButtonLink href="/product" variant="secondary">
              See product
            </ButtonLink>
          </div>
          <div className="mt-12">
            <TrustArchitecture />
          </div>
        </MotionSection>

        <MotionSection className="mx-auto max-w-7xl px-4 pb-20 md:px-6 md:pb-28">
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <Badge tone="teal">Product proof</Badge>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] md:text-6xl">
                Show the evidence, not a prettier chatbot.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-ink/70">
                The buyer needs to see the exact safety layer: permission decision, citation policy, eval gate, and audit packet. Generic dashboards do not answer those questions.
              </p>
            </div>
            <ProductProofGrid />
          </div>
        </MotionSection>

        <MotionSection className="bg-ink py-16 text-paper md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <Badge tone="copper">Regulated workflows</Badge>
                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] md:text-6xl">
                  Built for documents that block real launches.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-paper/80">
                  Scanned PDFs, regulator circulars, KYC SOPs, policy wording, regional-language files, and health summaries need source-aware controls before they touch users.
                </p>
              </div>
              <div className="rounded-2xl border border-paper/15 bg-paper/10 p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-copper" aria-hidden="true" />
                  <p className="text-sm font-semibold text-paper/90">Operational controls aligned to review workflows. No fake compliance certification claims.</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <RegulatedWorkflowCards />
            </div>
          </div>
        </MotionSection>

        <MotionSection className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <Badge tone="slate">Implementation model</Badge>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] md:text-6xl">
                Start narrow. Prove safety. Then scale.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
                The right pilot is not a giant platform rollout. It is one document workflow with a strict role model, refusal policy, golden eval set, and production API path.
              </p>
            </div>
            <PilotScopeCard />
          </div>
        </MotionSection>

        <MotionSection className="bg-slate py-16 text-paper md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <Badge tone="teal">Security posture</Badge>
                <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] md:text-6xl">
                  Your API key should not become your data leak.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-paper/80">
                  Kosha keeps retrieval governed by scoped access, retention controls, masking, and answer-level audit exports.
                </p>
              </div>
              <SecurityPostureStrip />
            </div>
          </div>
        </MotionSection>

        <MotionSection className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="rounded-2xl border border-line bg-white p-8 shadow-card md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-sm font-semibold text-ink/70">
                  <FileSearch className="h-4 w-4 text-copper" aria-hidden="true" />
                  Production-readiness pilot
                </div>
                <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] md:text-6xl">
                  See how Kosha handles your document, permission, and audit model.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
                  Bring one real workflow. We will map the sources, access rules, refusal behavior, eval set, and audit packet before you ship it to users.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <ButtonLink href="/signup">Run a pilot</ButtonLink>
                <ButtonLink href="/docs" variant="secondary">
                  <span className="inline-flex items-center gap-2">
                    <Braces className="h-4 w-4" aria-hidden="true" />
                    View docs
                  </span>
                </ButtonLink>
              </div>
            </div>
          </div>
        </MotionSection>
      </main>
    </MarketingShell>
  );
}
