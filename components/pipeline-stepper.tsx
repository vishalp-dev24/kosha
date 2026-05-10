"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pipelineSteps } from "@/data/kosha";

export function PipelineStepper() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="rounded-[1.75rem] border border-line bg-white/56 p-3 md:p-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 xl:grid-cols-5">
        {pipelineSteps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={reducedMotion ? false : { opacity: 0.32, y: 18 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ delay: index * 0.16, duration: 0.45, ease: "easeOut" }}
            className="relative flex flex-col rounded-2xl border border-ink/10 bg-paper/82 p-3 md:p-4"
          >
            {index < pipelineSteps.length - 1 ? (
              <motion.div
                aria-hidden="true"
                className="absolute left-[calc(100%+0.375rem)] top-8 hidden h-px w-2 bg-blue/50 md:left-[calc(100%+0.5rem)] md:w-3 xl:block"
                initial={reducedMotion ? false : { scaleX: 0 }}
                whileInView={reducedMotion ? undefined : { scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.22 + index * 0.16, duration: 0.35 }}
              />
            ) : null}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink font-mono text-xs font-bold text-paper md:h-10 md:w-10 md:text-sm">{index + 1}</div>
              <h3 className="line-clamp-2 text-base font-semibold leading-tight tracking-[-0.04em] text-ink md:text-xl">{step.title}</h3>
            </div>
            <p className="mt-3 line-clamp-2 text-xs font-semibold leading-5 text-ink/78 md:mt-4 md:text-sm">{step.label}</p>
            <p className="mt-2 line-clamp-3 flex-grow text-xs leading-5 text-ink/58 md:mt-3 md:text-sm md:leading-6">{step.detail}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
