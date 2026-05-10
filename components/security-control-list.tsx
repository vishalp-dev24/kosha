import { securityControls } from "@/data/kosha";

export function SecurityControlList({ dark = false }: { dark?: boolean }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {securityControls.map((control) => {
        const Icon = control.icon;
        return (
          <article key={control.title} className={dark ? "rounded-2xl bg-white/10 p-5" : "rounded-2xl bg-white/70 p-5 shadow-sm"}>
            <div className={dark ? "grid h-11 w-11 place-items-center rounded-xl bg-teal/10 text-teal" : "grid h-11 w-11 place-items-center rounded-xl bg-ink text-paper"}>
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className={dark ? "mt-5 text-xl font-semibold text-paper" : "mt-5 text-xl font-semibold text-ink"}>{control.title}</h3>
            <p className={dark ? "mt-2 text-sm leading-6 text-paper/65" : "mt-2 text-sm leading-6 text-ink/65"}>{control.detail}</p>
          </article>
        );
      })}
    </div>
  );
}
