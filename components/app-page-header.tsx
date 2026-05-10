export function AppPageHeader({
  eyebrow,
  title,
  copy,
  action
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <div className="text-xs font-bold uppercase tracking-[0.16em] text-paper/42">{eyebrow}</div>
        <h1 className="mt-3 max-w-4xl font-display text-5xl leading-none tracking-[-0.07em] text-paper md:text-6xl">{title}</h1>
        {copy ? <p className="mt-4 max-w-3xl text-base leading-7 text-paper/62">{copy}</p> : null}
      </div>
      {action}
    </div>
  );
}
