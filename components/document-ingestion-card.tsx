"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileScan, RotateCcw } from "lucide-react";
import { ingestionJobs } from "@/data/kosha";

export function DocumentIngestionCard() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="paper-panel overflow-hidden rounded-[1.75rem] p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-ink/48">Ingestion queue</div>
          <h3 className="mt-2 font-display text-3xl tracking-[-0.06em] text-ink">Parsing in real time</h3>
        </div>
        <motion.div
          animate={reducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="grid h-11 w-11 place-items-center rounded-full border border-teal/20 bg-teal/10 text-teal"
        >
          <RotateCcw className="h-5 w-5" aria-hidden="true" />
        </motion.div>
      </div>
            <div className="mt-6 grid gap-3">
        {ingestionJobs.map((job, index) => (
          <motion.div
            key={job.file}
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
            className="rounded-2xl border border-ink/10 bg-white/68 p-2.5 md:p-3"
          >
            <div className="flex items-start gap-2.5 md:gap-3">
              <div className="grid h-9 w-9 md:h-10 md:w-10 shrink-0 place-items-center rounded-xl bg-ink text-paper">
                <FileScan className="h-3.5 w-3.5 md:h-4 md:w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="truncate font-mono text-xs font-bold text-ink max-w-[140px] sm:max-w-[200px]">{job.file}</div>
                  <div className="text-xs text-ink/52 shrink-0">{job.pages} pages</div>
                </div>
                <div className="mt-2 flex items-center justify-between gap-3 text-xs flex-wrap">
                  <span className="font-semibold text-teal">{job.stage}</span>
                  <span className="text-ink/50 overflow-hidden whitespace-nowrap text-ellipsis text-right max-w-[120px] sm:max-w-[180px]">{job.issue}</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink/8">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-teal to-blue"
                    initial={reducedMotion ? false : { width: "12%" }}
                    animate={reducedMotion ? undefined : { width: [`${Math.max(12, job.progress - 18)}%`, `${job.progress}%`, `${Math.min(99, job.progress + 4)}%`, `${job.progress}%`] }}
                    transition={{ duration: 3.2, delay: index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
