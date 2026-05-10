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
    <article
      className={cn(
        "flex h-full min-h-[480px] flex-col justify-between rounded-2xl border p-5",
        featured
          ? "border-blue bg-ink text-paper shadow-glow"
          : "border-line bg-white/64 text-ink"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-3xl tracking-[-0.06em] truncate">{plan.name}</h3>
          <p className={cn("mt-2 text-sm leading-6", featured ? "text-paper/60" : "text-ink/60")}>{plan.description}</p>
        </div>
        {featured ? (
          <span className="shrink-0 rounded-full bg-blue px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
            Best
          </span>
        ) : null}
      </div>
      <div className="mt-8">
        <div className="text-4xl md:text-5xl font-semibold tracking-[-0.06em]">{plan.price}</div>
        <div className={cn("mt-1 text-sm", featured ? "text-paper/60" : "text-ink/60")}>{plan.cadence}</div>
      </div>
      <div className="mt-6 flex flex-1 flex-col gap-2.5">
        {plan.features.map((feature) => (
          <div key={feature} className={cn("flex items-start gap-3 text-sm", featured ? "text-paper/70" : "text-ink/70")}>
            <span className={cn("grid h-5 w-5 shrink-0 place-items-center rounded-full", featured ? "bg-teal/15 text-teal" : "bg-teal/10 text-teal")}>
              <Check className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="break-words leading-5">{feature}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <ButtonLink href="/signup" variant={featured ? "primary" : "secondary"} className="mt-4 w-full">
          Start a pilot
        </ButtonLink>
      </div>
    </article>
  );
}
