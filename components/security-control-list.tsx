import { securityControls } from "@/data/kosha";

export function SecurityControlList({ dark = false }: { dark?: boolean }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {securityControls.map((control) => {
        const Icon = control.icon;
        return (
          <article key={control.title} className={dark ? "rounded-2xl border border-paper/10 bg-paper/7 p-5" : "rounded-2xl border border-line bg-white/62 p-5"}>
            <div className={dark ? "grid h-11 w-11 place-items-center rounded-xl bg-teal/10 text-teal" : "grid h-11 w-11 place-items-center rounded-xl bg-ink text-paper"}>
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className={dark ? "mt-5 text-xl font-semibold text-paper" : "mt-5 text-xl font-semibold text-ink"}>{control.title}</h3>
            <p className={dark ? "mt-2 text-sm leading-6 text-paper/62" : "mt-2 text-sm leading-6 text-ink/62"}>{control.detail}</p>
          </article>
        );
      })}
    </div>
  );
}
