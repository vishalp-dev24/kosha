import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "slate"
}: {
  children: React.ReactNode;
  tone?: "slate" | "blue" | "copper" | "teal" | "danger";
}) {
  const tones = {
    slate: "border-ink/10 bg-sand text-ink",
    blue: "border-blue/20 bg-blue/10 text-blue",
    copper: "border-copper/30 bg-copper/10 text-[#7a4317]",
    teal: "border-teal/25 bg-teal/10 text-teal",
    danger: "border-danger/30 bg-danger/10 text-danger"
  };

  return (
    <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[-0.01em]", tones[tone])}>
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
    primary: "bg-blue text-white shadow-glow hover:bg-[#1558b0]",
    secondary: "border border-line bg-white text-blue hover:border-blue/35 hover:bg-blue/5",
    dark: "border border-paper/20 bg-paper/10 text-paper hover:bg-paper/20"
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
    <div className="max-w-3xl">
      {eyebrow ? <Badge tone={invert ? "teal" : "slate"}>{eyebrow}</Badge> : null}
      <h2 className={cn("mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] md:text-6xl", invert ? "text-paper" : "text-ink")}>
        {title}
      </h2>
      {copy ? <p className={cn("mt-5 max-w-2xl text-base leading-7 md:text-lg", invert ? "text-paper/75" : "text-ink/70")}>{copy}</p> : null}
    </div>
  );
}

export function CodeBlock({ code, dark = true }: { code: string; dark?: boolean }) {
  return (
    <pre
      className={cn(
        "scrollbar-thin overflow-x-auto rounded-2xl border p-5 font-mono text-xs leading-6 md:text-sm",
        dark ? "border-paper/10 bg-ink text-paper/90" : "border-line bg-white/70 text-ink"
      )}
    >
      <code>{code}</code>
    </pre>
  );
}
