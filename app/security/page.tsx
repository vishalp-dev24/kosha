import { AuditEventRow } from "@/components/audit-event-row";
import { ComplianceProfileCard } from "@/components/compliance-profile-card";
import { MarketingShell } from "@/components/marketing-shell";
import { MotionSection } from "@/components/motion-section";
import { SecurityControlList } from "@/components/security-control-list";
import { Badge, SectionHeader } from "@/components/ui";
import { auditEvents, complianceProfiles } from "@/data/kosha";

export default function SecurityPage() {
  return (
    <MarketingShell>
      <main>
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <Badge tone="teal">Security and compliance</Badge>
          <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[0.9] tracking-[-0.07em] md:text-8xl">Controls that make document AI defensible.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/68">
            Kosha does not claim legal certification. It gives regulated teams operational controls aligned to logging, retention, masking, access, evidence export, and incident response.
          </p>
        </section>
        <MotionSection className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
          <SecurityControlList />
        </MotionSection>
        <MotionSection className="bg-ink py-20 text-paper md:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader invert eyebrow="Audit posture" title="Every production answer leaves a trace." copy="Query, retrieval, permission, answer, citation, eval, key, and retention events belong in the same reviewable stream." />
            <div className="scrollbar-thin overflow-x-auto rounded-xl border border-paper/10 bg-paper/5">
              {auditEvents.map((event, index) => (
                <AuditEventRow key={event.trace} event={event} index={index} />
              ))}
            </div>
          </div>
        </MotionSection>
        <MotionSection className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <SectionHeader eyebrow="Profiles" title="Compliance profiles." copy="Start from operational control packs, then tune them to your actual product workflow." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {complianceProfiles.map((profile) => (
              <ComplianceProfileCard key={profile.title} profile={profile} />
            ))}
          </div>
        </MotionSection>
      </main>
    </MarketingShell>
  );
}
