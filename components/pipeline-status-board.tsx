"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { pipelineStatus } from "@/data/kosha";

export function PipelineStatusBoard() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="rounded-[1.75rem] bg-white/10 p-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-paper/45">Pipeline status board</div>
          <h2 className="mt-2 font-display text-4xl tracking-[-0.07em] text-paper">Ready is earned, not assumed.</h2>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-4 py-2 text-sm font-semibold text-teal">
          <CheckCircle2 className="h-4 w-4" />
          production gate active
        </div>
      </div>
      <div className="scrollbar-thin mt-6 overflow-x-auto">
        <div className="grid min-w-[840px] grid-cols-6 gap-3">
          {pipelineStatus.map((item, index) => (
            <motion.div
              key={item.label}
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              className="rounded-2xl bg-ink p-4"
            >
              <div className="font-mono text-xs font-bold uppercase tracking-[0.13em] text-paper/45">{item.label}</div>
              <div className="mt-4 font-display text-3xl tracking-[-0.07em] text-paper">{item.count.toLocaleString()}</div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-teal to-blue"
                  initial={reducedMotion ? false : { width: 0 }}
                  animate={reducedMotion ? undefined : { width: `${item.completion}%` }}
                  transition={{ delay: 0.24 + index * 0.08, duration: 0.75, ease: "easeOut" }}
                />
              </div>
              <div className="mt-3 text-xs font-semibold text-teal">{item.status}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
