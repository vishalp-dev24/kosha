"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pipelineSteps } from "@/data/kosha";

export function PipelineStepper() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="scrollbar-thin overflow-x-auto rounded-[1.75rem] border border-line bg-white/56 p-3 md:p-4">
      <div className="grid min-w-[720px] grid-cols-5 gap-3 md:gap-4">
        {pipelineSteps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={reducedMotion ? false : { opacity: 0.32, y: 18 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ delay: index * 0.16, duration: 0.45, ease: "easeOut" }}
            className="relative flex flex-col rounded-2xl border border-ink/10 bg-paper/82 p-3 md:p-4 min-h-[180px]"
          >
            {index < pipelineSteps.length - 1 ? (
              <motion.div
                aria-hidden="true"
                className="absolute left-[calc(100%+0.375rem)] md:left-[calc(100%+0.5rem)] top-8 h-px w-2 md:w-3 bg-blue/50"
                initial={reducedMotion ? false : { scaleX: 0 }}
                whileInView={reducedMotion ? undefined : { scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.22 + index * 0.16, duration: 0.35 }}
              />
            ) : null}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="grid h-8 w-8 md:h-10 md:w-10 shrink-0 place-items-center rounded-full bg-ink font-mono text-xs md:text-sm font-bold text-paper">{index + 1}</div>
              <h3 className="text-base md:text-xl font-semibold tracking-[-0.04em] text-ink leading-tight overflow-hidden text-ellipsis line-clamp-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{step.title}</h3>
            </div>
            <p className="mt-3 md:mt-4 text-xs md:text-sm font-semibold leading-5 text-ink/78 overflow-hidden text-ellipsis line-clamp-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{step.label}</p>
            <p className="mt-2 md:mt-3 text-xs md:text-sm leading-5 md:leading-6 text-ink/58 overflow-hidden text-ellipsis flex-grow" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{step.detail}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
