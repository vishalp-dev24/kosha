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
      <main className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <Badge tone="teal" className="mb-4">Docs/API preview</Badge>
        <h1 className="mt-4 max-w-5xl font-display text-6xl leading-[0.9] tracking-[-0.04em] md:text-8xl">One API for cited production answers.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/68">
          The API returns a policy decision, answer, confidence, citations, and audit id. Retrieval state is not hidden from the product.
        </p>
        <MotionSection className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl border border-line/60 bg-white p-6">
            <SectionHeader title="Request contract" copy="Keep the request explicit. Ambiguous runtime context is where permission bugs enter." />
            <div className="mt-8 grid gap-3">
              {fields.map(([name, detail]) => (
                <div key={name} className="rounded-lg border border-line/70 bg-paper/72 p-4">
                  <div className="font-mono text-sm text-blue">{name}</div>
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
