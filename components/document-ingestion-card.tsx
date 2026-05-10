"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileScan, RotateCcw } from "lucide-react";
import { ingestionJobs } from "@/data/kosha";

export function DocumentIngestionCard() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="rounded-xl border border-paper/10 bg-paper/5 p-5 backdrop-blur-sm md:p-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-paper/40">Ingestion queue</div>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-paper md:text-3xl">
            Parsing in real time
          </h3>
        </div>
        <motion.div
          animate={reducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-teal/30 bg-teal/10 text-teal"
        >
          <RotateCcw className="h-5 w-5" aria-hidden="true" />
        </motion.div>
      </div>

      {/* Job cards */}
      <div className="mt-6 grid gap-3">
        {ingestionJobs.map((job, index) => (
          <motion.div
            key={job.file}
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
            className="rounded-lg border border-paper/10 bg-ink/40 p-3"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper/10 text-paper">
                <FileScan className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="truncate font-mono text-xs font-semibold text-paper">{job.file}</div>
                  <div className="text-xs text-paper/50">{job.pages} pages</div>
                </div>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full border border-teal/30 bg-teal/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal">
                    {job.stage}
                  </span>
                  <span className="text-xs text-paper/50">{job.issue}</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-paper/10">
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
