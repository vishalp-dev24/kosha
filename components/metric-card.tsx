import { cn } from "@/lib/utils";

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
  const toneMap: Record<string, string> = {
    blue: "text-blue bg-blue/10 border-blue/20",
    copper: "text-copper bg-copper/10 border-copper/25",
    teal: "text-teal bg-teal/10 border-teal/25",
    success: "text-success bg-success/10 border-success/25",
    warning: "text-warning bg-warning/10 border-warning/25",
    danger: "text-danger bg-danger/10 border-danger/25"
  };

  return (
    <article className={cn("rounded-2xl border p-4", invert ? "border-paper/10 bg-paper/7" : "border-line bg-white/62")}>
      <div className={cn("text-xs font-bold uppercase tracking-[0.14em]", invert ? "text-paper/45" : "text-ink/45")}>{label}</div>
      <div className={cn("mt-3 font-display text-4xl tracking-[-0.07em]", invert ? "text-paper" : "text-ink")}>{value}</div>
      <div className={cn("mt-4 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold", toneMap[tone] ?? toneMap.blue)}>{delta}</div>
    </article>
  );
}
