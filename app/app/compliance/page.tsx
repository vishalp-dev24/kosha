import { AppPageHeader } from "@/components/app-page-header";
import { ComplianceProfileCard } from "@/components/compliance-profile-card";
import { complianceProfiles } from "@/data/kosha";

export default function ComplianceProfilesPage() {
  return (
    <>
      <AppPageHeader eyebrow="Compliance profiles" title="Operational controls aligned to regulated workflows." copy="These profiles are not legal certification. They are structured control defaults for retention, logging, masking, access, evidence, and breach-response fields." />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {complianceProfiles.map((profile) => (
          <ComplianceProfileCard key={profile.title} profile={profile} />
        ))}
      </section>
    </>
  );
}
