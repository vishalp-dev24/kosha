"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Braces, FileText, LockKeyhole, ShieldCheck } from "lucide-react";
import { heroDocuments } from "@/data/kosha";

const pathVariants = {
  animate: {
    pathLength: [0, 1, 1],
    opacity: [0.15, 0.9, 0.28]
  }
};

export function AnimatedPipeline() {
  const reducedMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.clientWidth;
    const slide = Math.round(scrollLeft / (width + 16)); // 16px is gap-4
    if (slide !== activeSlide) {
      setActiveSlide(slide);
    }
  };

  const scrollToSlide = (index: number) => {
    setActiveSlide(index);
    if (scrollRef.current && scrollRef.current.children[index]) {
      scrollRef.current.children[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => {
      if (!scrollRef.current) return;
      // Calculate current slide from actual scroll position to ensure smooth handoff if user swiped
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const currentSlide = Math.round(scrollLeft / (width + 16));
      const nextSlide = (currentSlide + 1) % 3;
      scrollToSlide(nextSlide);
    }, 4500); // 4.5s auto-slide

    return () => clearInterval(timer);
  }, [reducedMotion]);

  return (
    <div className="paper-panel scrollbar-thin relative overflow-hidden rounded-[2rem] p-3 md:p-5" aria-label="Kosha document ingestion to cited API response visual">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(47,107,255,0.16),transparent_22rem)]" />
      <div className="relative overflow-hidden">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mb-4 [&::-webkit-scrollbar]:hidden"
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          <div className="w-full shrink-0 snap-center rounded-3xl border border-line/80 bg-white/62 p-4 cursor-pointer" onClick={() => scrollToSlide(0)}>
          <div className="mb-4 flex items-center justify-between">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">Document intake</div>
            <div className="rounded-full bg-teal/10 px-2 py-1 text-xs font-semibold text-teal">live sync</div>
          </div>
          <div className="space-y-3">
            {heroDocuments.map((doc, index) => (
              <motion.div
                key={doc.name}
                initial={reducedMotion ? false : { opacity: 0, x: -16 }}
                animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                transition={{ delay: index * 0.12, duration: 0.45 }}
                className="rounded-2xl border border-ink/10 bg-paper/72 p-3"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink text-paper">
                    <FileText className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-mono text-xs font-semibold text-ink">{doc.name}</div>
                    <div className="mt-1 text-xs text-ink/52">{doc.type}</div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/8">
                      <motion.div
                        className="h-full rounded-full bg-teal"
                        initial={reducedMotion ? false : { width: "18%" }}
                        animate={reducedMotion ? undefined : { width: `${doc.confidence}%` }}
                        transition={{ delay: 0.2 + index * 0.12, duration: 0.9, ease: "easeOut" }}
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

        <div className="relative w-full shrink-0 snap-center flex items-center justify-center overflow-hidden rounded-3xl border border-ink/10 bg-ink p-4 text-paper cursor-pointer" onClick={() => scrollToSlide(1)}>
          <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 260 430" fill="none" aria-hidden="true">
            {[92, 150, 208, 266].map((start, index) => (
              <motion.path
                key={start}
                d={`M 0 ${start} C 82 ${start - 8}, 88 215, 130 215 C 172 215, 178 ${start + 34}, 260 ${start + 40}`}
                stroke={index % 2 === 0 ? "#2F6BFF" : "#B87333"}
                strokeWidth="1.4"
                strokeLinecap="round"
                variants={pathVariants}
                initial={reducedMotion ? undefined : { pathLength: 0, opacity: 0.12 }}
                animate={reducedMotion ? undefined : "animate"}
                transition={{ duration: 2.3, repeat: Infinity, delay: index * 0.35, ease: "easeInOut" }}
              />
            ))}
          </svg>
          <div className="relative z-10 text-center">
            <motion.div
              animate={reducedMotion ? undefined : { boxShadow: ["0 0 0 rgba(30,158,143,0)", "0 0 38px rgba(30,158,143,.36)", "0 0 0 rgba(30,158,143,0)"] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="mx-auto grid h-20 w-20 place-items-center rounded-[1.5rem] border border-teal/30 bg-teal/12"
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

        <div className="w-full shrink-0 snap-center rounded-3xl border border-line/80 bg-white/68 p-4 cursor-pointer" onClick={() => scrollToSlide(2)}>
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
              transition={{ delay: 1.1, duration: 0.5 }}
              className="overflow-hidden rounded-xl border border-paper/10 bg-paper/6 p-3 font-sans text-sm leading-6 text-paper"
            >
              Late submission can trigger review, but rejection needs cited policy basis and documented exception checks.
            </motion.div>
            <div className="mt-3 text-paper/68">citations:</div>
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.4 }}
              className="mt-2 grid gap-2"
            >
              {["claims-policy.docx p18", "exceptions-addendum.pdf p3"].map((citation) => (
                <div key={citation} className="flex items-center justify-between gap-2 overflow-hidden rounded-lg border border-copper/20 bg-copper/10 px-3 py-2 text-copper">
                  <span className="truncate">{citation}</span>
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </div>
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
      <div className="mt-6 flex items-center justify-center gap-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeSlide === index ? "w-6 bg-blue" : "w-2.5 bg-ink/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
