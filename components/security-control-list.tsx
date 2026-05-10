import { securityControls } from "@/data/kosha";

export function SecurityControlList({ dark = false }: { dark?: boolean }) {
  return (
    <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
      {securityControls.map((control) => {
        const Icon = control.icon;
        return (
          <article key={control.title} className={dark ? "rounded-2xl bg-white/10 p-4 md:p-5" : "rounded-2xl bg-white/70 p-4 md:p-5 shadow-sm"}>
            <div className={dark ? "grid h-10 w-10 md:h-11 md:w-11 place-items-center rounded-xl bg-teal/10 text-teal" : "grid h-10 w-10 md:h-11 md:w-11 place-items-center rounded-xl bg-ink text-paper"}>
              <Icon className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
            </div>
            <h3 className={dark ? "mt-4 md:mt-5 text-lg md:text-xl font-semibold text-paper leading-tight" : "mt-4 md:mt-5 text-lg md:text-xl font-semibold text-ink leading-tight"} style={ { display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' } }>{control.title}</h3>
            <p className={dark ? "mt-2 text-sm leading-5 md:leading-6 text-paper/65" : "mt-2 text-sm leading-5 md:leading-6 text-ink/65"} style={ { display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' } }>{control.detail}</p>
          </article>
        );
      })}
    </div>
  );
}
