"use client";

import { motion, useReducedMotion } from "framer-motion";
import { securityControls } from "@/data/kosha";

export function SecurityControlList({ dark = false }: { dark?: boolean }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {securityControls.map((control, index) => {
        const Icon = control.icon;
        return (
          <motion.article
            key={control.title}
            initial={reducedMotion ? false : { opacity: 0 }}
            whileInView={reducedMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.06, duration: 0.35 }}
            className={dark 
              ? "flex flex-col min-h-[180px] overflow-hidden rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm" 
              : "flex flex-col min-h-[180px] overflow-hidden rounded-xl border border-line bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            }
          >
            <div className={dark 
              ? "flex h-10 w-10 items-center justify-center rounded-lg bg-teal/20 text-teal" 
              : "flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-paper"
            }>
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className={dark 
              ? "mt-4 font-display text-lg font-semibold leading-snug text-paper" 
              : "mt-4 font-display text-lg font-semibold leading-snug text-ink"
            }>
              {control.title}
            </h3>
            <p className={dark 
              ? "mt-2 text-sm leading-relaxed text-paper/60" 
              : "mt-2 text-sm leading-relaxed text-ink/60"
            }>
              {control.detail}
            </p>
          </motion.article>
        );
      })}
    </div>
  );
}
