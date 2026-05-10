"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  Archive,
  BadgeCheck,
  CheckCircle2,
  FileCheck2,
  Fingerprint,
  LockKeyhole,
  SearchCheck,
  ShieldCheck,
  SlidersHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

const sources = [
  {
    name: "Claims policy",
    detail: "p.18 · clause 4.2",
    proves: "Late submission can trigger review, not automatic rejection.",
    excerpt: "Late submission triggers review; rejection needs documented cause."
  },
  {
    name: "Exceptions addendum",
    detail: "p.3 · exception note",
    proves: "Accepted-cause exceptions must be checked before rejection.",
    excerpt: "Accepted operational delay must be checked before adverse decision."
  }
];

const architecture = [
  ["Documents", "PDFs, circulars, SOPs"],
  ["Parse/OCR", "Tables, scans, language"],
  ["Permissions", "Role and purpose gate"],
  ["Retrieve", "Source-aware search"],
  ["Cite", "Page and chunk proof"],
  ["Eval gate", "Regression checks"],
  ["Audit", "Reviewable packet"]
];

const proofPanels = [
  {
    title: "Permission decision",
    icon: LockKeyhole,
    status: "Allowed",
    copy: "Claims reviewer can access policy wording, but not restricted health records.",
    rows: ["Role: claims reviewer", "Purpose: claim review", "Collection: claims-prod"]
  },
  {
    title: "Citation policy",
    icon: BadgeCheck,
    status: "Satisfied",
    copy: "Answer requires at least two approved sources with page-level evidence.",
    rows: ["2 approved sources", "0 blocked documents", "confidence 91%"]
  },
  {
    title: "Eval gate",
    icon: SlidersHorizontal,
    status: "Passed",
    copy: "Golden set checks refusal behavior, citation coverage, and retrieval precision.",
    rows: ["94% refusal correctness", "98% citation coverage", "684 ms p95"]
  },
  {
    title: "Audit packet",
    icon: Archive,
    status: "Recorded",
    copy: "Reviewer can reconstruct the user, query, source, answer, policy, and timestamp.",
    rows: ["answer event captured", "sources attached", "policy trace exported"]
  }
];

const policyChecks = [
  { label: "Permission", state: "passed", icon: LockKeyhole },
  { label: "Citation rule", state: "satisfied", icon: BadgeCheck },
  { label: "Audit trail", state: "recorded", icon: Archive }
];

const failureModes = [
  ["Uncited answer", "Looks useful, cannot be defended."],
  ["Wrong access", "The right answer reaches the wrong user."],
  ["Outdated source", "Old policy silently wins retrieval."],
  ["No trace", "Nobody can explain what happened later."]
];

const workflows = [
  {
    title: "Fintech risk ops",
    copy: "KYC SOPs, regulator circulars, exception handling, and reviewer-ready answer traces.",
    docs: ["kyc-sop.pdf", "rbi-circular.pdf", "risk-exceptions.docx"]
  },
  {
    title: "Insurance claims",
    copy: "Policy wording, claims rules, delay exceptions, source excerpts, and refusal gates.",
    docs: ["claims-policy.docx", "irdai-workflow.pdf", "exception-addendum.pdf"]
  },
  {
    title: "Health data workflows",
    copy: "Scanned summaries, consent windows, restricted records, and review-only evidence packets.",
    docs: ["discharge-summary.pdf", "consent-policy.pdf", "clinical-notes.pdf"]
  }
];

const securityPosture = [
  { title: "Scoped API keys", copy: "Keys bind to collection, profile, and environment.", icon: Fingerprint },
  { title: "Retention lanes", copy: "Data expiry, deletion traces, and evidence exports.", icon: Archive },
  { title: "PII masking", copy: "Sensitive identifiers masked before indexing.", icon: ShieldCheck }
];

export function EvidencePacketHero() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="surface-primary relative overflow-hidden p-4 md:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(184,107,61,0.12),transparent_24rem),radial-gradient(circle_at_100%_20%,rgba(47,111,94,0.12),transparent_20rem)]" />
      <div className="relative grid gap-4">
        <section className="rounded-[1.75rem] border border-line bg-paper/80 p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-md">
              <p className="text-sm font-semibold text-graphite">Evidence packet</p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.035em]">Can this claim be rejected after documents arrive late?</h3>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">answered with proof</span>
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-line bg-white p-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-ink text-paper">
                <SearchCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="text-base leading-7 text-ink/80">
                Late submission can trigger review.
                <span className="font-semibold text-blue">[1]</span> Rejection cannot rely on delay alone; accepted-cause exceptions must be checked first.
                <span className="font-semibold text-blue">[2]</span>
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 xl:grid-cols-[minmax(0,1.28fr)_minmax(14.5rem,0.72fr)] xl:items-stretch">
          <div className="rounded-[1.5rem] border border-line bg-white p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-graphite">Why this answer is supported</p>
                <h3 className="mt-1 text-base font-semibold tracking-[-0.02em] text-ink/75">Each claim maps to a source.</h3>
              </div>
              <div className="shrink-0 rounded-full border border-copper/25 bg-copper/10 px-3 py-1 text-xs font-semibold text-copper">2 approved</div>
            </div>

            <ul className="relative mt-4 grid gap-3 pl-4 before:absolute before:left-[0.35rem] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-copper/35" aria-label="Approved source evidence">
              {sources.map((source, index) => (
                <motion.li
                  key={source.name}
                  initial={reducedMotion ? false : { opacity: 0, x: -10 }}
                  animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                  transition={reducedMotion ? undefined : { delay: 0.18 + index * 0.12, duration: 0.34 }}
                  className="relative list-none"
                >
                  <article className="rounded-[1.15rem] border border-line bg-paper/60 p-3" aria-labelledby={`hero-source-${index}`}>
                    <span className="absolute -left-[1.15rem] top-5 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-copper text-[0.65rem] font-bold text-white shadow-[0_0_0_3px_rgba(184,107,61,0.18)]">
                      {index + 1}
                    </span>
                    <div>
                      <h4 id={`hero-source-${index}`} className="text-sm font-semibold leading-5">
                        {source.name} <span className="font-medium text-ink/60">· {source.detail}</span>
                      </h4>
                      <p className="mt-2 text-sm font-semibold leading-5 text-ink">{source.proves}</p>
                      <blockquote className="mt-1 text-xs leading-5 text-ink/72">“{source.excerpt}”</blockquote>
                      <span className="sr-only">Source status: approved source with page-level proof.</span>
                    </div>
                  </article>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="grid h-full gap-3 xl:grid-rows-[auto_1fr]">
            <div className="rounded-[1.5rem] border border-line bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-graphite">Answer controls</p>
                  <h3 className="mt-1 text-xl font-semibold tracking-[-0.035em]">Why this response was allowed.</h3>
                </div>
                <ShieldCheck className="h-5 w-5 text-teal" aria-hidden="true" />
              </div>
              <div className="mt-4 grid gap-2">
                {policyChecks.map(({ label, state, icon: Icon }) => (
                  <div key={label} className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-paper/70 px-3 py-2.5">
                    <span className="flex items-center gap-2 text-sm font-medium text-ink/70">
                      <Icon className="h-4 w-4 text-teal" aria-hidden="true" />
                      {label}
                    </span>
                    <span className="text-sm font-semibold text-ink">{state}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-line bg-ink p-4 text-paper">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-paper/70">If evidence is missing</p>
                  <h3 className="mt-1 text-xl font-semibold tracking-[-0.035em]">Refusal is deliberate.</h3>
                </div>
                <AlertTriangle className="h-5 w-5 text-copper" aria-hidden="true" />
              </div>
              <p className="mt-3 rounded-[1.1rem] border border-paper/10 bg-paper/10 p-3 text-sm leading-6 text-paper/75">
                I do not have enough cited evidence in this collection to answer safely.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export function TrustArchitecture() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="surface-primary overflow-hidden p-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {architecture.map(([title, detail], index) => (
          <motion.article
            key={title}
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.34 }}
            className={cn(
              "relative rounded-[1.25rem] border border-line bg-paper/70 p-4",
              index === 2 || index === 4 || index === 6 ? "bg-white" : ""
            )}
          >
            {index < architecture.length - 1 ? <div className="absolute -right-3 top-1/2 hidden h-px w-3 bg-line xl:block" /> : null}
            <div className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-semibold text-paper">{index + 1}</div>
            <h3 className="mt-4 text-sm font-semibold">{title}</h3>
            <p className="mt-2 text-xs leading-5 text-ink/70">{detail}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export function ProductionGapCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {failureModes.map(([title, copy]) => (
        <article key={title} className="surface-primary flex min-h-36 gap-4 p-5">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-danger/10 text-danger">
            <AlertTriangle className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-[-0.03em]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">{copy}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ProductProofGrid() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {proofPanels.map((panel) => {
        const Icon = panel.icon;
        return (
          <article key={panel.title} className="surface-primary p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-paper">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">{panel.status}</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{panel.title}</h3>
            <p className="mt-3 text-sm leading-6 text-ink/70">{panel.copy}</p>
            <div className="mt-5 grid gap-2">
              {panel.rows.map((row) => (
                <div key={row} className="flex items-center gap-3 rounded-2xl border border-line bg-paper/60 px-3 py-2.5 text-sm font-medium text-ink/70">
                  <CheckCircle2 className="h-4 w-4 text-teal" aria-hidden="true" />
                  {row}
                </div>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function RegulatedWorkflowCards() {
  return (
    <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
      {workflows.map((workflow) => (
        <article key={workflow.title} className="rounded-[1.75rem] border border-paper/10 bg-paper p-5 text-ink shadow-[0_18px_48px_rgba(0,0,0,0.18)]">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-2xl font-semibold tracking-[-0.04em]">{workflow.title}</h3>
            <FileCheck2 className="h-5 w-5 text-copper" aria-hidden="true" />
          </div>
          <p className="mt-3 min-h-20 text-sm leading-6 text-ink/70">{workflow.copy}</p>
          <div className="mt-5 grid gap-2">
            {workflow.docs.map((doc) => (
              <div key={doc} className="rounded-2xl border border-line bg-white px-3 py-2.5 text-sm font-medium text-ink/75">
                {doc}
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function PilotScopeCard() {
  return (
    <div className="surface-primary p-5 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {[
          ["Collection", "one document set"],
          ["Access model", "one role map"],
          ["Safety rule", "one refusal policy"],
          ["Quality bar", "one golden eval set"],
          ["Integration", "one product API"]
        ].map(([label, value], index) => (
          <div key={label} className={cn("rounded-[1.35rem] border border-line bg-paper/70 p-4 xl:col-span-2", index > 2 ? "xl:col-span-3" : "")}>
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/70">{label}</div>
            <div className="mt-3 text-lg font-semibold tracking-[-0.03em]">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SecurityPostureStrip() {
  return (
    <div className="grid gap-3">
      {securityPosture.map(({ title, copy, icon: Icon }) => (
        <article key={title} className="surface-ink flex gap-4 p-5">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-copper/15 text-copper">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.035em] text-paper">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-paper/80">{copy}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
