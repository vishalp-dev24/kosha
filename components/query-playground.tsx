"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Braces, CheckCircle2, Copy, Play, ShieldAlert } from "lucide-react";
import { retrievedChunks } from "@/data/kosha";

const defaultQuery = "Can this claim be rejected if the policyholder submitted documents after 30 days?";

export function QueryPlayground() {
  const reducedMotion = useReducedMotion();
  const [query, setQuery] = useState(defaultQuery);
  const [environment, setEnvironment] = useState("Production");
  const [role, setRole] = useState("Claims reviewer");
  const [profile, setProfile] = useState("IRDAI policy-data workflow");
  const [runId, setRunId] = useState(1);
  const sourceMissing = query.toLowerCase().includes("source missing") || query.toLowerCase().includes("uncited");

  const request = useMemo(
    () => ({
      collection: "claims-prod",
      environment: environment.toLowerCase(),
      user_role: role.toLowerCase().replaceAll(" ", "_"),
      compliance_profile: profile.toLowerCase().replaceAll(" ", "_"),
      require_citations: true,
      query
    }),
    [environment, role, profile, query]
  );

  async function copyRequest() {
    await navigator.clipboard?.writeText(JSON.stringify(request, null, 2));
  }

  return (
    <div className="ink-panel overflow-hidden rounded-[2rem] p-4 md:p-6">
      <div className="grid gap-6 xl:grid-cols-2 [&>*]:min-w-0">
        <div className="rounded-[1.5rem] border border-paper/10 bg-paper/7 p-4">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-paper/45">Query playground</div>
          <h2 className="mt-2 font-display text-3xl leading-tight tracking-[-0.05em] text-paper xl:text-4xl">Test the refusal line before users find it.</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <Field label="Environment" value={environment} setValue={setEnvironment} options={["Production", "Staging", "Eval"]} />
            <Field label="User role" value={role} setValue={setRole} options={["Claims reviewer", "Compliance auditor", "Support agent"]} />
            <Field label="Profile" value={profile} setValue={setProfile} options={["IRDAI policy-data workflow", "DPDP-ready controls", "CERT-In logging posture"]} />
          </div>
          <label className="mt-5 block text-xs font-bold uppercase tracking-[0.16em] text-paper/45" htmlFor="query">
            Question
          </label>
          <textarea
            id="query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            rows={5}
            className="mt-2 w-full resize-none rounded-2xl border border-paper/10 bg-ink p-4 text-base leading-7 text-paper outline-none transition focus:border-blue"
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setRunId((current) => current + 1)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2459d8]"
            >
              <Play className="h-4 w-4 fill-current" aria-hidden="true" />
              Run query
            </button>
            <button
              type="button"
              onClick={copyRequest}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-paper/15 bg-paper/10 px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-paper/18"
            >
              <Copy className="h-4 w-4" aria-hidden="true" />
              Copy API request
            </button>
          </div>
          <div className="mt-5 rounded-2xl border border-paper/10 bg-ink p-4 font-mono text-xs leading-6 text-paper/65">
            <div className="mb-2 flex items-center gap-2 text-paper">
              <Braces className="h-4 w-4 text-blue" aria-hidden="true" />
              request preview
            </div>
            <pre className="scrollbar-thin overflow-x-auto">{JSON.stringify(request, null, 2)}</pre>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.5rem] border border-paper/10 bg-paper/7 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-paper/45">Policy decision</div>
                <div className={sourceMissing ? "mt-2 text-2xl font-semibold text-warning" : "mt-2 text-2xl font-semibold text-teal"}>
                  {sourceMissing ? "needs review / refused" : "answered"}
                </div>
              </div>
              <div className="rounded-full border border-copper/30 bg-copper/10 px-4 py-2 font-mono text-sm font-semibold text-copper">
                confidence {sourceMissing ? "0.42" : "0.91"}
              </div>
            </div>
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3">
              {retrievedChunks.map((chunk, index) => (
                <motion.div
                  key={`${runId}-${chunk.chunk}`}
                  initial={reducedMotion ? false : { opacity: 0.25, scale: 0.98 }}
                  animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.26, duration: 0.35 }}
                  className="rounded-2xl border border-copper/25 bg-copper/10 p-2.5 md:p-3"
                >
                  <div className="font-mono text-xs font-bold text-copper truncate">{chunk.doc}</div>
                  <div className="mt-2 text-xs text-paper/62">p{chunk.page} · {chunk.chunk}</div>
                  <div className="mt-3 h-1.5 rounded-full bg-paper/10 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-copper"
                      initial={reducedMotion ? false : { width: 0 }}
                      animate={reducedMotion ? undefined : { width: `${chunk.confidence * 100}%` }}
                      transition={{ delay: 0.18 + index * 0.26, duration: 0.45 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${runId}-${sourceMissing ? "refusal" : "answer"}`}
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ delay: 0.72, duration: 0.35 }}
                className="mt-5 rounded-2xl border border-paper/10 bg-ink p-5"
              >
                {sourceMissing ? (
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="mt-1 h-5 w-5 shrink-0 text-warning" aria-hidden="true" />
                    <p className="text-lg leading-8 text-paper">I do not have enough cited evidence in this collection to answer safely.</p>
                  </div>
                ) : (
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                    <p className="text-lg leading-8 text-paper">
                      The claim can be reviewed for late document submission, but rejection should not rely on delay alone. The cited policy allows review after the thirty-day window, while the exception addendum requires accepted cause to be checked before an adverse decision.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="scrollbar-thin overflow-x-auto rounded-[1.5rem] border border-paper/10 bg-paper/7">
            <div className="divide-y divide-paper/10">
              {retrievedChunks.map((chunk) => (
                <div key={chunk.chunk} className="grid grid-cols-1 sm:grid-cols-[1fr_0.6fr_0.8fr] gap-2 sm:gap-4 p-3 md:p-4 text-sm">
                  <div className="min-w-0">
                    <div className="font-mono text-xs font-semibold text-paper truncate">{chunk.doc}</div>
                    <p className="mt-1 text-xs leading-5 text-paper/55 line-clamp-2 md:text-sm">{chunk.reason}</p>
                  </div>
                  <div className="font-mono text-paper/62 text-xs md:text-sm">p{chunk.page} · {chunk.chunk}</div>
                  <div className="text-teal text-xs md:text-sm">permission {chunk.permission}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  setValue,
  options
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.14em] text-paper/45">{label}</span>
      <select
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="mt-2 w-full rounded-xl border border-paper/10 bg-ink px-3 py-3 text-sm font-semibold text-paper outline-none transition focus:border-blue"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
