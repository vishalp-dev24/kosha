import { MarketingShell } from "@/components/marketing-shell";
import { MotionSection } from "@/components/motion-section";
import { Badge, ButtonLink, CodeBlock, SectionHeader } from "@/components/ui";
import { apiResponse, apiSnippet } from "@/data/kosha";

export default function DocsPage() {
  const fields = [
    ["collection", "Target knowledge collection"],
    ["profile", "Operational control profile"],
    ["user", "Role, region, purpose, and policy context"],
    ["query", "User question or product-generated prompt"],
    ["require_citations", "Hard gate that blocks uncited answers"]
  ];

  return (
    <MarketingShell>
      <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <Badge tone="teal">Docs/API preview</Badge>
        <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[0.9] tracking-[-0.07em] md:text-8xl">One API for cited production answers.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/68">
          The API returns a policy decision, answer, confidence, citations, and audit id. Retrieval state is not hidden from the product.
        </p>
        <MotionSection className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.75rem] border border-line bg-white/62 p-5">
            <SectionHeader title="Request contract" copy="Keep the request explicit. Ambiguous runtime context is where permission bugs enter." />
            <div className="mt-8 grid gap-3">
              {fields.map(([name, detail]) => (
                <div key={name} className="rounded-2xl border border-line/70 bg-paper/72 p-4">
                  <div className="font-mono text-sm font-bold text-blue">{name}</div>
                  <div className="mt-1 text-sm leading-6 text-ink/62">{detail}</div>
                </div>
              ))}
            </div>
            <ButtonLink href="/signup" className="mt-8">Request API access</ButtonLink>
          </div>
          <div className="grid gap-4">
            <CodeBlock code={apiSnippet} />
            <CodeBlock code={apiResponse} dark={false} />
          </div>
        </MotionSection>
      </main>
    </MarketingShell>
  );
}
