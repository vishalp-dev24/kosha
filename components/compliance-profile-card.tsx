import type { LucideIcon } from "lucide-react";

type ComplianceProfile = {
  title: string;
  icon: LucideIcon;
  description: string;
  retention: string;
  logging: string;
  masking: string;
  access: string;
  evidence: string;
  breach: string;
};

export function ComplianceProfileCard({ profile }: { profile: ComplianceProfile }) {
  const Icon = profile.icon;
  const controls = [
    ["Retention", profile.retention],
    ["Logging", profile.logging],
    ["Encryption/masking", profile.masking],
    ["Access control", profile.access],
    ["Exportable evidence", profile.evidence],
    ["Breach response", profile.breach]
  ];

  return (
    <article className="group relative overflow-hidden rounded-xl border border-ink/10 bg-paper/78 p-5 shadow-sm transition hover:-translate-y-1.5 hover:border-copper/35 hover:bg-white/72">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(184,115,51,0.16),transparent_16rem)] opacity-0 transition group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl border border-ink/10 bg-ink text-paper">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="rounded-full border border-teal/25 bg-teal/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-teal">
            controls
          </span>
        </div>
        <h3 className="mt-5 font-display text-3xl leading-none tracking-[-0.06em] text-ink">{profile.title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/64">{profile.description}</p>
        <div className="mt-5 grid gap-2 opacity-90 transition group-hover:opacity-100">
          {controls.map(([label, value]) => (
            <div key={label} className="rounded-xl border border-line/70 bg-white/58 p-3">
              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/38">{label}</div>
              <div className="mt-1 text-sm font-medium leading-5 text-ink/78">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
