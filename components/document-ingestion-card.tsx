"use client";

import { FileText, Clock, AlertCircle } from "lucide-react";
import { ingestionJobs } from "@/data/kosha";

// Status colors for different stages
const stageColors: Record<string, string> = {
  "OCR": "bg-amber-500",
  "language detect": "bg-purple-500",
  "chunking": "bg-emerald-500",
  "permission map": "bg-blue-500",
};

// Status text colors
const stageTextColors: Record<string, string> = {
  "OCR": "text-amber-400",
  "language detect": "text-purple-400",
  "chunking": "text-emerald-400",
  "permission map": "text-blue-400",
};

// Progress bar colors
const progressColors: Record<string, string> = {
  "OCR": "bg-amber-500",
  "language detect": "bg-purple-500",
  "chunking": "bg-emerald-500",
  "permission map": "bg-blue-500",
};

export function DocumentIngestionCard() {
  const activeJobs = ingestionJobs.length;

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-5 md:p-6">
      {/* Header with title and status */}
      <div className="flex items-center justify-between gap-4 pb-5 border-b border-zinc-800">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Ingestion Queue
          </div>
          <h3 className="mt-1 text-xl font-semibold text-zinc-100">
            Document Processing
          </h3>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-zinc-400">
            {activeJobs} active
          </span>
        </div>
      </div>

      {/* Step indicator - static */}
      <div className="mt-5 mb-6">
        <div className="flex items-center justify-between">
          {["Upload", "OCR", "Detect", "Chunk", "Index"].map((step, index) => {
            const isActive = index === 1; // OCR is current
            const isCompleted = index < 1;
            
            return (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div 
                    className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-medium
                      ${isCompleted ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : 
                        isActive ? "bg-zinc-700 text-zinc-200 border border-zinc-600" : 
                        "bg-zinc-800 text-zinc-500 border border-zinc-700"}`}
                  >
                    {isCompleted ? "✓" : index + 1}
                  </div>
                  <span className={`mt-1.5 text-[10px] font-medium uppercase tracking-wide
                    ${isActive ? "text-zinc-300" : "text-zinc-600"}`}>
                    {step}
                  </span>
                </div>
                {index < 4 && (
                  <div className={`w-8 md:w-12 h-px mx-1 md:mx-2
                    ${index < 1 ? "bg-emerald-500/40" : "bg-zinc-800"}`} 
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* File list - clean rows */}
      <div className="space-y-2">
        {ingestionJobs.map((job) => (
          <div
            key={job.file}
            className="group rounded-lg border border-zinc-800 bg-zinc-950/50 p-3 hover:border-zinc-700 transition-colors"
          >
            {/* Row 1: filename and page count */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-zinc-800 text-zinc-400">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                </div>
                <code className="truncate text-sm font-medium text-zinc-300">
                  {job.file}
                </code>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 shrink-0">
                <span className="hidden sm:inline">{job.pages} pages</span>
              </div>
            </div>

            {/* Row 2: status badge and issue */}
            <div className="mt-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {/* Status dot + label */}
                <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-zinc-800/50`}>
                  <div className={`h-1.5 w-1.5 rounded-full ${stageColors[job.stage] || "bg-zinc-500"}`} />
                  <span className={`text-[10px] font-semibold uppercase tracking-wider ${stageTextColors[job.stage] || "text-zinc-400"}`}>
                    {job.stage}
                  </span>
                </div>
                
                {/* Issue indicator (if not "none") */}
                {job.issue !== "none" && (
                  <div className="flex items-center gap-1 text-[10px] text-zinc-500">
                    <AlertCircle className="h-3 w-3" />
                    <span className="hidden sm:inline">{job.issue}</span>
                  </div>
                )}
              </div>

              {/* Progress percentage */}
              <span className="text-xs font-medium text-zinc-400">
                {job.progress}%
              </span>
            </div>

            {/* Static progress bar */}
            <div className="mt-2.5 h-1 rounded-full bg-zinc-800 overflow-hidden">
              <div
                className={`h-full rounded-full ${progressColors[job.stage] || "bg-zinc-500"}`}
                style={{ width: `${job.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer summary */}
      <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          <span>Last updated: just now</span>
        </div>
        <span>{ingestionJobs.reduce((acc, j) => acc + j.pages, 0)} total pages</span>
      </div>
    </div>
  );
}
