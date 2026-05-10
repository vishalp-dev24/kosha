import { AppPageHeader } from "@/components/app-page-header";
import { EvalScoreRing } from "@/components/eval-score-ring";
import { evalMetrics, failedExamples } from "@/data/kosha";

export default function EvaluationsPage() {
  return (
    <>
      <AppPageHeader eyebrow="Evaluations" title="Catch bad answers before users do." copy="Golden sets should measure hallucination, citation coverage, refusal correctness, retrieval precision, latency, and cost." />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {evalMetrics.map((metric) => (
          <EvalScoreRing key={metric.label} {...metric} />
        ))}
      </section>
      <section className="scrollbar-thin mt-6 overflow-x-auto rounded-xl border border-paper/10 bg-paper/7">
        <div className="grid min-w-[820px] grid-cols-[1.3fr_0.9fr_0.8fr_0.5fr] border-b border-paper/10 p-4 text-xs font-bold uppercase tracking-[0.15em] text-paper/42">
          <span>Failed example</span><span>Failure</span><span>Owner</span><span>Severity</span>
        </div>
        {failedExamples.map((example) => (
          <div key={example.query} className="grid min-w-[820px] grid-cols-[1.3fr_0.9fr_0.8fr_0.5fr] border-b border-paper/10 p-4 text-sm last:border-b-0">
            <span className="text-paper">{example.query}</span>
            <span className="text-warning">{example.failure}</span>
            <span className="text-paper/58">{example.owner}</span>
            <span className="text-paper/58">{example.severity}</span>
          </div>
        ))}
      </section>
    </>
  );
}
