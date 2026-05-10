"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Braces, FileText, LockKeyhole, ShieldCheck } from "lucide-react";
import { heroDocuments } from "@/data/kosha";

export function AnimatedPipeline() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="paper-panel scrollbar-thin relative overflow-hidden rounded-xl p-4 md:p-6" aria-label="Kosha document ingestion to cited API response visual">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(47,107,255,0.16),transparent_22rem)]" />
      <div className="relative overflow-hidden">
        <div 
          className="flex gap-4 overflow-x-auto pb-4 -mb-4 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-ink/20"
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(0,0,0,0.2) transparent" }}
        >
          {/* Slide 1: Document Intake */}
          <div className="w-full shrink-0 rounded-xl border border-line/80 bg-white/62 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">Document intake</div>
              <div className="rounded-full bg-teal/10 px-2 py-1 text-xs font-semibold text-teal">live sync</div>
            </div>
            <div className="space-y-3">
              {heroDocuments.map((doc, index) => (
                <motion.div
                  key={doc.name}
                  initial={reducedMotion ? false : { opacity: 0 }}
                  animate={reducedMotion ? undefined : { opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  style={{ willChange: "opacity" }}
                  className="rounded-xl border border-ink/10 bg-paper/72 p-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink text-paper">
                      <FileText className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-mono text-xs font-semibold text-ink">{doc.name}</div>
                      <div className="mt-1 text-xs text-ink/52">{doc.type}</div>
                      {/* Static progress bar - no animation */}
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/8">
                        <div
                          className="h-full rounded-full bg-teal"
                          style={{ width: `${doc.confidence}%` }}
                        />
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full border border-line bg-white/80 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/54">
                      {doc.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Slide 2: Secure Knowledge Core */}
          <div className="relative w-full shrink-0 flex items-center justify-center overflow-hidden rounded-xl border border-ink/10 bg-ink p-4 text-paper">
            <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 260 430" fill="none" aria-hidden="true">
              {[92, 150, 208, 266].map((start, index) => (
                <motion.path
                  key={start}
                  d={`M 0 ${start} C 82 ${start - 8}, 88 215, 130 215 C 172 215, 178 ${start + 34}, 260 ${start + 40}`}
                  stroke={index % 2 === 0 ? "#2F6BFF" : "#B87333"}
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  initial={reducedMotion ? undefined : { opacity: 0.2 }}
                  animate={reducedMotion ? undefined : { opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3, ease: "easeInOut" }}
                  style={{ willChange: "opacity" }}
                />
              ))}
            </svg>
            <div className="relative z-10 text-center">
              <motion.div
                initial={reducedMotion ? undefined : { opacity: 0.8 }}
                animate={reducedMotion ? undefined : { opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "opacity" }}
                className="mx-auto grid h-20 w-20 place-items-center rounded-xl border border-teal/30 bg-teal/12"
              >
                <LockKeyhole className="h-7 w-7 text-teal" aria-hidden="true" />
              </motion.div>
              <div className="mt-4 font-display text-2xl tracking-[-0.06em]">Secure knowledge core</div>
              <div className="mx-auto mt-2 max-w-52 text-xs leading-5 text-paper/58">Permission filters, eval gates, citation enforcement, and audit traces run before production response.</div>
              <div className="mt-4 flex flex-wrap justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-paper/54">
                <span className="rounded-full border border-paper/10 bg-paper/6 px-2 py-1">role</span>
                <span className="rounded-full border border-paper/10 bg-paper/6 px-2 py-1">source</span>
                <span className="rounded-full border border-paper/10 bg-paper/6 px-2 py-1">eval</span>
              </div>
            </div>
          </div>

          {/* Slide 3: API Response */}
          <div className="w-full shrink-0 rounded-xl border border-line/80 bg-white/68 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">API response</div>
              <Braces className="h-4 w-4 text-blue" aria-hidden="true" />
            </div>
            <div className="overflow-hidden rounded-2xl bg-ink p-4 font-mono text-xs leading-6 text-paper/84 shadow-ledger break-words">
              <div className="text-teal">policy_decision: &quot;answered&quot;</div>
              <div>confidence: <span className="text-copper">0.91</span></div>
              <div className="mt-3 text-paper/68">answer:</div>
              <motion.div
                initial={reducedMotion ? false : { opacity: 0 }}
                animate={reducedMotion ? undefined : { opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                style={{ willChange: "opacity" }}
                className="overflow-hidden rounded-xl border border-paper/10 bg-paper/6 p-3 font-sans text-sm leading-6 text-paper"
              >
                Late submission can trigger review, but rejection needs cited policy basis and documented exception checks.
              </motion.div>
              <div className="mt-3 text-paper/68">citations:</div>
              <motion.div
                initial={reducedMotion ? false : { opacity: 0 }}
                animate={reducedMotion ? undefined : { opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.4 }}
                style={{ willChange: "opacity" }}
                className="mt-2 grid gap-2"
              >
                {["claims-policy.docx p18", "exceptions-addendum.pdf p3"].map((citation, index) => (
                  <motion.div
                    key={citation}
                    initial={reducedMotion ? false : { opacity: 0 }}
                    animate={reducedMotion ? undefined : { opacity: 1 }}
                    transition={{ delay: 1.0 + index * 0.1, duration: 0.3 }}
                    style={{ willChange: "opacity" }}
                    className="flex items-center justify-between gap-2 overflow-hidden rounded-lg border border-copper/20 bg-copper/10 px-3 py-2 text-copper"
                  >
                    <span className="truncate">{citation}</span>
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </motion.div>
                ))}
              </motion.div>
              <div className="mt-4 flex items-center gap-2 text-blue">
                <span className="truncate">audit_id: &quot;aud_01hxy9p7&quot;</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
