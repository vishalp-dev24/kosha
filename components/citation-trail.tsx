"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, FileText, GitBranch, LockKeyhole, ScanLine } from "lucide-react";
import { retrievedChunks } from "@/data/kosha";

export function CitationTrail({ large = false }: { large?: boolean }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-white p-5 shadow-sm md:p-6">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(7,17,31,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(7,17,31,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="relative">
        {/* Header with icon */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <GitBranch className="h-4 w-4 text-copper" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-ink/40">Citation inspector</span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Proof paths, not footnotes
            </h3>
          </div>
        </div>
        
        {/* Citation cards grid */}
        <div className={large ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-3"}>
          {retrievedChunks.map((chunk, index) => (
            <motion.div
              key={chunk.chunk}
              initial={reducedMotion ? false : { opacity: 0 }}
              whileInView={reducedMotion ? undefined : { opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              className="relative flex flex-col overflow-hidden rounded-lg border border-line bg-paper/70 p-4"
            >
              {/* Document header */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-paper">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-mono text-xs font-semibold text-ink">{chunk.doc}</div>
                  <div className="text-xs text-ink/50">page {chunk.page} · chunk {chunk.chunk}</div>
                </div>
              </div>
              
              {/* Text preview */}
              <div className="mt-3 line-clamp-3 rounded-md border border-line/70 bg-white p-3 text-sm leading-relaxed text-ink/70">
                {chunk.text}
              </div>
              
              {/* Metadata */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-teal/25 bg-teal/10 px-2 py-1 text-[10px] font-semibold text-teal">
                  <LockKeyhole className="h-3 w-3" aria-hidden="true" />
                  {chunk.permission}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-copper/25 bg-copper/10 px-2 py-1 text-[10px] font-semibold text-copper">
                  <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                  cited
                </span>
              </div>
              
              {/* Confidence bar */}
              <div className="mt-3 flex items-center gap-2">
                <ScanLine className="h-3.5 w-3.5 text-ink/40" aria-hidden="true" />
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/10">
                  <div 
                    className="h-full rounded-full bg-blue"
                    style={{ width: `${chunk.confidence * 100}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-ink/70">{(chunk.confidence * 100).toFixed(0)}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
