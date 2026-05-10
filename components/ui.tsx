import Link from "next/link";
import { ArrowRight, Circle, CheckCircle2, XCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "slate",
  showIcon = true
}: {
  children: React.ReactNode;
  tone?: "slate" | "blue" | "copper" | "teal" | "danger";
  showIcon?: boolean;
}) {
  const tones: Record<string, { class: string; icon: React.ReactNode }> = {
    slate: { class: "bg-sand text-ink", icon: <Circle className="h-3 w-3" /> },
    blue: { class: "bg-blue/10 text-blue", icon: <Info className="h-3 w-3" /> },
    copper: { class: "bg-copper/10 text-[#7a4317]", icon: <Info className="h-3 w-3" /> },
    teal: { class: "bg-teal/10 text-teal", icon: <CheckCircle2 className="h-3 w-3" /> },
    danger: { class: "bg-danger/10 text-danger", icon: <XCircle className="h-3 w-3" /> }
  };

  const style = tones[tone];

  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-[-0.01em]", style.class)}>
      {showIcon && style.icon}
      {children}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
}) {
  const variants = {
    primary: "bg-blue text-white shadow-glow hover:bg-[#1558b0] focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2",
    secondary: "bg-white text-blue hover:bg-blue/5 focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2",
    dark: "bg-white/10 text-paper hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
  };

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition",
        variants[variant],
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
  invert = false
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <Badge tone={invert ? "teal" : "slate"}>{eyebrow}</Badge> : null}
      <h2 className={cn("mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl", invert ? "text-paper" : "text-ink")}>
        {title}
      </h2>
      {copy ? <p className={cn("mt-4 max-w-xl text-lg leading-relaxed", invert ? "text-paper/60" : "text-ink/60")}>{copy}</p> : null}
    </div>
  );
}

export function CodeBlock({ code, dark = true }: { code: string; dark?: boolean }) {
  return (
    <pre
      className={cn(
        "scrollbar-thin overflow-x-auto rounded-xl border p-5 font-mono text-xs leading-6 md:text-sm",
        dark ? "border-paper/10 bg-ink text-paper/90" : "border-line bg-white/70 text-ink"
      )}
    >
      <code>{code}</code>
    </pre>
  );
}
