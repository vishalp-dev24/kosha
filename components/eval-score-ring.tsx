export function EvalScoreRing({
  label,
  value,
  detail
}: {
  label: string;
  value: string;
  detail: string;
}) {
  const numeric = Number(value.replace(/[^\d.]/g, ""));
  const percent = Number.isFinite(numeric) ? Math.min(100, numeric > 100 ? 76 : numeric) : 74;
  const circumference = 2 * Math.PI * 38;
  const dash = (percent / 100) * circumference;

  return (
    <article className="rounded-2xl border border-paper/10 bg-paper/7 p-4">
      <div className="flex items-center gap-4">
        <svg className="h-24 w-24 shrink-0 -rotate-90" viewBox="0 0 96 96" aria-hidden="true">
          <circle cx="48" cy="48" r="38" fill="none" stroke="rgba(245,240,231,.12)" strokeWidth="8" />
          <circle cx="48" cy="48" r="38" fill="none" stroke="#1E9E8F" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${dash} ${circumference - dash}`} />
        </svg>
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-paper/45">{label}</div>
          <div className="mt-2 font-display text-4xl tracking-[-0.07em] text-paper">{value}</div>
          <div className="mt-2 text-sm leading-5 text-paper/58">{detail}</div>
        </div>
      </div>
    </article>
  );
}
