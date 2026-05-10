import { AppPageHeader } from "@/components/app-page-header";
import { DocumentIngestionCard } from "@/components/document-ingestion-card";
import { ingestionJobs } from "@/data/kosha";

export default function IngestionPage() {
  return (
    <>
      <AppPageHeader eyebrow="Document ingestion" title="Parse state, OCR quality, and review exceptions." copy="Do not hide ingestion failures. Bad parsing becomes bad retrieval, and bad retrieval becomes bad product behavior." />
      <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <DocumentIngestionCard />
        <section className="rounded-[1.75rem] border border-paper/10 bg-paper/7 p-5">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-paper/42">Exception queue</div>
          <div className="mt-5 grid gap-3">
            {ingestionJobs.map((job) => (
              <article key={job.file} className="rounded-2xl border border-paper/10 bg-ink p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="font-mono text-sm font-semibold text-paper">{job.file}</div>
                  <span className="rounded-full bg-warning/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-warning">{job.issue}</span>
                </div>
                <div className="mt-3 text-sm text-paper/58">{job.stage} · {job.pages} pages · {job.progress}% complete</div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
