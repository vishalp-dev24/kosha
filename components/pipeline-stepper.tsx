"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pipelineSteps } from "@/data/kosha";

export function PipelineStepper() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative">
      {/* Connection line - desktop only */}
      <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent xl:block" />
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {pipelineSteps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={reducedMotion ? false : { opacity: 0 }}
            whileInView={reducedMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Step number badge */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink font-mono text-sm font-semibold text-paper">
                {index + 1}
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
            </div>

            {/* Content */}
            <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-ink/70">
              {step.label}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/50">
              {step.detail}
            </p>

            {/* Connector dot - desktop */}
            <div className="absolute -right-2 top-12 hidden h-2 w-2 rounded-full bg-line group-last:hidden xl:block" />
          </motion.article>
        ))}
      </div>
    </div>
  );
}
