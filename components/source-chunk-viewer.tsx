import { retrievedChunks } from "@/data/kosha";

export function SourceChunkViewer() {
  return (
    <div className="rounded-[1.75rem] border border-paper/10 bg-paper/7 p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-paper/42">Retrieved chunks</div>
          <h3 className="mt-2 font-display text-3xl tracking-[-0.06em] text-paper">Source context</h3>
        </div>
        <div className="rounded-full border border-copper/30 bg-copper/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-copper">
          top 3
        </div>
      </div>
      <div className="mt-5 grid gap-3">
        {retrievedChunks.map((chunk) => (
          <article key={chunk.chunk} className="rounded-2xl border border-paper/10 bg-ink/72 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
              <span className="text-paper">{chunk.doc}</span>
              <span className="text-paper/45">p{chunk.page} · {chunk.chunk}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-paper/70">{chunk.text}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-teal/10 px-2 py-1 font-semibold text-teal">permission {chunk.permission}</span>
              <span className="rounded-full bg-blue/10 px-2 py-1 font-semibold text-blue">confidence {chunk.confidence.toFixed(2)}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
