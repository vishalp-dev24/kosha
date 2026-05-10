"use client";

import { useState } from "react";
import { Copy, KeyRound, RotateCcw, ShieldCheck } from "lucide-react";

export function ApiKeyPanel() {
  const [copied, setCopied] = useState(false);
  const key = "kosha_live_••••••••••••••••7f3a";

  async function copyKey() {
    await navigator.clipboard?.writeText("kosha_live_redacted_demo_key");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="rounded-[1.75rem] border border-paper/10 bg-paper/7 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-paper/42">Production API key</div>
          <h3 className="mt-2 font-display text-4xl tracking-[-0.07em] text-paper">One scoped key. No broad data leak.</h3>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue/10 text-blue">
          <KeyRound className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-paper/10 bg-ink p-4">
        <div className="font-mono text-sm text-paper">{key}</div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={copyKey}
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2459d8]"
          >
            <Copy className="h-4 w-4" aria-hidden="true" />
            {copied ? "Copied request" : "Copy API request"}
          </button>
          <button
            type="button"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-paper/10 bg-paper/7 px-4 py-2 text-sm font-semibold text-paper/76 transition hover:bg-paper/12"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Rotate key
          </button>
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {["claims-prod only", "citations required", "audit logging active"].map((item) => (
          <div key={item} className="flex items-center gap-2 rounded-xl border border-teal/20 bg-teal/10 p-3 text-sm font-semibold text-teal">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
