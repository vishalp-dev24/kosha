import { AppPageHeader } from "@/components/app-page-header";
import { ApiKeyPanel } from "@/components/api-key-panel";

export default function SettingsPage() {
  return (
    <>
      <AppPageHeader eyebrow="API keys and settings" title="Scoped keys, enforced citations, and production defaults." copy="Your API key should not become your data leak. Keep keys scoped to collection, profile, and environment." />
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <ApiKeyPanel />
        <section className="rounded-[1.75rem] border border-paper/10 bg-paper/7 p-5">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-paper/42">Runtime defaults</div>
          <div className="mt-5 grid gap-3">
            {["Require citations", "Refuse low-confidence answers", "Log all API calls", "Mask sensitive identifiers", "Block stale indexes"].map((setting) => (
              <label key={setting} className="flex items-center justify-between rounded-2xl border border-paper/10 bg-ink p-4 text-sm font-semibold text-paper">
                {setting}
                <input type="checkbox" defaultChecked className="h-5 w-5 accent-blue" />
              </label>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
