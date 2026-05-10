"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, FileText, GitBranch, LockKeyhole, ScanLine } from "lucide-react";
import { retrievedChunks } from "@/data/kosha";

export function CitationTrail({ large = false }: { large?: boolean }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-paper/72 p-5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(7,17,31,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(7,17,31,.04)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-ink/48">Citation inspector</div>
            <h3 className="mt-2 font-display text-3xl tracking-[-0.06em] text-ink">Proof paths, not footnotes</h3>
          </div>
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-copper/12 text-copper">
            <GitBranch className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
        <div className={large ? "mt-7 grid gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-3" : "mt-7 grid gap-3 md:gap-4"}>
          {retrievedChunks.map((chunk, index) => (
            <motion.div
              key={chunk.chunk}
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.42 }}
              className="relative flex flex-col rounded-2xl border border-ink/10 bg-white/70 p-3 md:p-4 shadow-sm"
            >
              {index < retrievedChunks.length - 1 ? (
                <motion.div
                  aria-hidden="true"
                  className="absolute -bottom-4 md:-bottom-5 left-8 h-4 md:h-5 w-px bg-copper/50 lg:-right-3 lg:bottom-auto lg:left-auto lg:top-1/2 lg:h-px lg:w-3"
                  initial={reducedMotion ? false : { scaleY: 0, scaleX: 0 }}
                  whileInView={reducedMotion ? undefined : { scaleY: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + index * 0.12, duration: 0.35 }}
                />
              ) : null}
              <div className="flex items-start gap-2 md:gap-3">
                <div className="grid h-9 w-9 md:h-10 md:w-10 shrink-0 place-items-center rounded-xl bg-ink text-paper">
                  <FileText className="h-3.5 w-3.5 md:h-4 md:w-4" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-mono text-xs font-bold text-ink">{chunk.doc}</div>
                  <div className="mt-1 text-xs text-ink/50">page {chunk.page} · chunk {chunk.chunk}</div>
                </div>
              </div>
              <div className="mt-3 md:mt-4 rounded-xl border border-line/70 bg-paper/70 p-2.5 md:p-3 text-xs md:text-sm leading-5 md:leading-6 text-ink/72 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>{chunk.text}</div>
              <div className="mt-3 md:mt-4 grid gap-2 text-xs flex-grow">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 md:gap-2 text-ink/55">
                    <ScanLine className="h-3 md:h-3.5 w-3 md:w-3.5" aria-hidden="true" /> Retrieval reason
                  </span>
                  <span className="font-semibold text-ink shrink-0">{chunk.confidence.toFixed(2)}</span>
                </div>
                <div className="text-ink/68 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{chunk.reason}</div>
                <div className="flex flex-wrap gap-1.5 md:gap-2 pt-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-teal/25 bg-teal/10 px-1.5 md:px-2 py-0.5 md:py-1 font-semibold text-teal text-[10px] md:text-xs">
                    <LockKeyhole className="h-2.5 w-2.5 md:h-3 md:w-3" aria-hidden="true" /> permission {chunk.permission}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-copper/30 bg-copper/10 px-1.5 md:px-2 py-0.5 md:py-1 font-semibold text-copper text-[10px] md:text-xs">
                    <CheckCircle2 className="h-2.5 w-2.5 md:h-3 md:w-3" aria-hidden="true" /> cited
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
