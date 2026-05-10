import { AppPageHeader } from "@/components/app-page-header";
import { AuditEventRow } from "@/components/audit-event-row";
import { MetricCard } from "@/components/metric-card";
import { PipelineStatusBoard } from "@/components/pipeline-status-board";
import { auditEvents, dashboardMetrics } from "@/data/kosha";

export default function DashboardPage() {
  return (
    <>
      <AppPageHeader
        eyebrow="Dashboard"
        title="Knowledge health, production gates, and risk signals."
        copy="A real dashboard should show whether the system is safe to answer, not just how many files were uploaded."
        action={<div className="rounded-full border border-teal/25 bg-teal/10 px-4 py-2 text-sm font-semibold text-teal">live · claims-prod</div>}
      />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} invert />
        ))}
      </section>
      <section className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <PipelineStatusBoard />
        <div className="scrollbar-thin overflow-x-auto rounded-[1.75rem] border border-paper/10 bg-white/10">
          <div className="border-b border-paper/10 p-5">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-paper/45">Recent audit events</div>
            <h2 className="mt-2 font-display text-3xl tracking-[-0.06em] text-paper">Immutable event stream</h2>
          </div>
          {auditEvents.slice(0, 6).map((event, index) => (
            <AuditEventRow key={event.trace} event={event} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
