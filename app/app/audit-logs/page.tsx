import { AppPageHeader } from "@/components/app-page-header";
import { AuditEventRow } from "@/components/audit-event-row";
import { auditEvents } from "@/data/kosha";

export default function AuditLogsPage() {
  return (
    <>
      <AppPageHeader eyebrow="Audit logs" title="Immutable-looking traces for every production action." copy="This is where trust is built. Every answer, citation, key rotation, eval failure, and data deletion needs a trace." />
      <section className="scrollbar-thin overflow-x-auto rounded-[1.75rem] border border-paper/10 bg-paper/7">
        <div className="grid min-w-[780px] grid-cols-[1.1fr_1fr_0.7fr_0.8fr_0.8fr] gap-4 border-b border-paper/10 px-4 py-3 text-xs font-bold uppercase tracking-[0.15em] text-paper/42">
          <span>Event</span><span>Actor</span><span>Time</span><span>Result</span><span>Trace</span>
        </div>
        {[...auditEvents, ...auditEvents].map((event, index) => (
          <AuditEventRow key={`${event.trace}-${index}`} event={event} index={index % auditEvents.length} />
        ))}
      </section>
    </>
  );
}
