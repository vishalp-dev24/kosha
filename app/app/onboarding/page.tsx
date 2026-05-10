import { CheckCircle2, Circle, Upload } from "lucide-react";
import { AppPageHeader } from "@/components/app-page-header";
import { onboardingSteps } from "@/data/kosha";

export default function OnboardingPage() {
  return (
    <>
      <AppPageHeader eyebrow="Project onboarding" title="Configure the first production-safe workflow." copy="Keep the initial scope narrow. One collection, one role, one refusal policy, one eval set." />
      <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <section className="rounded-xl border border-paper/10 bg-paper/7 p-5">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-paper/42">Wizard</div>
          <div className="mt-5 grid gap-3">
            {onboardingSteps.map((step, index) => (
              <article key={step.title} className="flex gap-4 rounded-xl border border-paper/10 bg-ink p-4">
                <div className={step.done ? "text-teal" : "text-paper/34"}>{step.done ? <CheckCircle2 className="h-6 w-6" /> : <Circle className="h-6 w-6" />}</div>
                <div>
                  <div className="font-semibold text-paper">{index + 1}. {step.title}</div>
                  <p className="mt-1 text-sm leading-6 text-paper/58">{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-paper/10 bg-paper/7 p-5">
          <div className="grid h-full place-items-center rounded-xl border border-dashed border-paper/16 bg-ink p-8 text-center">
            <Upload className="mx-auto h-10 w-10 text-blue" aria-hidden="true" />
            <h2 className="mt-5 font-display text-4xl tracking-[-0.07em] text-paper">Drop the first document set.</h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-paper/58">Use regulator circulars, KYC SOPs, policy documents, scanned summaries, or a small sample bucket. The pilot should test ugly files, not only clean docs.</p>
            <button className="mt-6 min-h-11 rounded-full bg-blue px-5 text-sm font-semibold text-white">Select files</button>
          </div>
        </section>
      </div>
    </>
  );
}
