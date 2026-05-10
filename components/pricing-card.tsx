import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import { cn } from "@/lib/utils";

type PricingPlan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
};

export function PricingCard({ plan, featured = false }: { plan: PricingPlan; featured?: boolean }) {
  return (
    <article className={cn("flex h-full flex-col rounded-[1.75rem] border p-5", featured ? "border-blue bg-ink text-paper shadow-glow" : "border-line bg-white/64 text-ink")}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-4xl tracking-[-0.07em]">{plan.name}</h3>
          <p className={cn("mt-2 text-sm leading-6", featured ? "text-paper/62" : "text-ink/62")}>{plan.description}</p>
        </div>
        {featured ? <span className="rounded-full bg-blue px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">recommended</span> : null}
      </div>
      <div className="mt-8">
        <div className="text-4xl font-semibold tracking-[-0.06em]">{plan.price}</div>
        <div className={cn("mt-1 text-sm", featured ? "text-paper/55" : "text-ink/50")}>{plan.cadence}</div>
      </div>
      <div className="mt-6 grid gap-3">
        {plan.features.map((feature) => (
          <div key={feature} className={cn("flex items-center gap-3 text-sm", featured ? "text-paper/74" : "text-ink/70")}>
            <span className={cn("grid h-5 w-5 place-items-center rounded-full", featured ? "bg-teal/15 text-teal" : "bg-teal/10 text-teal")}>
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            {feature}
          </div>
        ))}
      </div>
      <ButtonLink href="/signup" variant={featured ? "primary" : "secondary"} className="mt-auto w-full translate-y-4">
        Start a pilot
      </ButtonLink>
    </article>
  );
}
