"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Clock3, Dot, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export type AuditEvent = {
  event: string;
  actor: string;
  at: string;
  result: string;
  trace: string;
};

export function AuditEventRow({ event, index = 0 }: { event: AuditEvent; index?: number }) {
  const reducedMotion = useReducedMotion();
  const serious = event.event.includes("failed") || event.result.includes("expired");

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, x: -10 }}
      animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.32 }}
      className="grid grid-cols-[140px_120px_90px_80px_100px] items-center gap-3 border-b border-paper/10 px-3 py-3 font-mono text-xs last:border-b-0"
    >
      <div className="flex items-center gap-2 text-paper">
        <span className={cn("grid h-7 w-7 shrink-0 place-items-center rounded-full", serious ? "bg-warning/12 text-warning" : "bg-teal/12 text-teal")}>
          {serious ? <ShieldAlert className="h-3.5 w-3.5" aria-hidden="true" /> : <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />}
        </span>
        <span className="truncate max-w-[130px]">{event.event}</span>
      </div>
      <div className="truncate text-paper/65">{event.actor}</div>
      <div className="flex items-center gap-2 text-paper/65">
        <Clock3 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <motion.span
          animate={reducedMotion ? undefined : { opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.1 }}
        >
          {event.at}
        </motion.span>
      </div>
      <div className={cn("flex items-center gap-1 font-semibold", serious ? "text-warning" : "text-teal")}>
        <Dot className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="truncate">{event.result}</span>
      </div>
      <div className="truncate text-blue">{event.trace}</div>
    </motion.div>
  );
}
