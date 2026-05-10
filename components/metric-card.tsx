import { cn } from "@/lib/utils";
import { CheckCircle2, TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

export function MetricCard({
  label,
  value,
  delta,
  tone = "blue",
  invert = false
}: {
  label: string;
  value: string;
  delta: string;
  tone?: string;
  invert?: boolean;
}) {
  const toneMap: Record<string, { text: string; bg: string; border: string; icon: React.ReactNode }> = {
    blue: { text: "text-blue", bg: "bg-blue/10", border: "border-blue/20", icon: <TrendingUp className="h-3 w-3" /> },
    copper: { text: "text-copper", bg: "bg-copper/10", border: "border-copper/25", icon: <TrendingUp className="h-3 w-3" /> },
    teal: { text: "text-teal", bg: "bg-teal/10", border: "border-teal/25", icon: <CheckCircle2 className="h-3 w-3" /> },
    success: { text: "text-success", bg: "bg-success/10", border: "border-success/25", icon: <CheckCircle2 className="h-3 w-3" /> },
    warning: { text: "text-warning", bg: "bg-warning/10", border: "border-warning/25", icon: <AlertCircle className="h-3 w-3" /> },
    danger: { text: "text-danger", bg: "bg-danger/10", border: "border-danger/25", icon: <TrendingDown className="h-3 w-3" /> }
  };

  const toneStyle = toneMap[tone] ?? toneMap.blue;

  return (
    <article 
      className={cn(
        "rounded-2xl p-4",
        invert ? "bg-white/[0.07]" : "bg-white shadow-sm"
      )}
    >
      <div className={cn("text-xs font-bold uppercase tracking-[0.14em]", invert ? "text-text-secondary" : "text-text-secondary")}>{label}</div>
      <div className={cn("mt-3 font-display text-4xl tracking-[-0.07em]", invert ? "text-paper" : "text-ink")}>{value}</div>
      <div className={cn("mt-4 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold", toneStyle.text, toneStyle.bg, toneStyle.border)}>
        {toneStyle.icon}
        {delta}
      </div>
    </article>
  );
}
