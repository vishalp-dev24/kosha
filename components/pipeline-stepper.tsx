"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pipelineSteps } from "@/data/kosha";

export function PipelineStepper() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="scrollbar-thin overflow-x-auto rounded-[1.75rem] border border-line bg-white/56 p-4">
      <div className="grid min-w-[880px] grid-cols-5 gap-4">
        {pipelineSteps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={reducedMotion ? false : { opacity: 0.32, y: 18 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ delay: index * 0.16, duration: 0.45, ease: "easeOut" }}
            className="relative rounded-2xl border border-ink/10 bg-paper/82 p-4"
          >
            {index < pipelineSteps.length - 1 ? (
              <motion.div
                aria-hidden="true"
                className="absolute left-[calc(100%+0.5rem)] top-8 h-px w-3 bg-blue/50"
                initial={reducedMotion ? false : { scaleX: 0 }}
                whileInView={reducedMotion ? undefined : { scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.22 + index * 0.16, duration: 0.35 }}
              />
            ) : null}
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-ink font-mono text-sm font-bold text-paper">{index + 1}</div>
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-ink">{step.title}</h3>
            </div>
            <p className="mt-4 text-sm font-semibold leading-5 text-ink/78">{step.label}</p>
            <p className="mt-3 text-sm leading-6 text-ink/58">{step.detail}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
