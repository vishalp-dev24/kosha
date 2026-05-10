import { cn } from "@/lib/utils";

export function KoshaMark({ className }: { className?: string }) {
  return (
    <svg className={cn("h-9 w-9", className)} viewBox="0 0 40 40" role="img" aria-label="Kosha">
      <rect width="40" height="40" rx="12" fill="#15171A" />
      <path d="M13 11.5V28.5" stroke="#F7F4EF" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M25.8 11.8L16.8 20L25.8 28.2" stroke="#F7F4EF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.2 20H29" stroke="#2F6F5E" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="29" cy="20" r="3.2" fill="#B86B3D" stroke="#F7F4EF" strokeWidth="1.4" />
    </svg>
  );
}

export function KoshaLogo({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <KoshaMark />
      <span className={cn("text-xl font-semibold tracking-[-0.035em]", invert ? "text-paper" : "text-ink")}>Kosha</span>
    </span>
  );
}
