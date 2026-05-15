type PanelTitleProps = {
  number: string;
  eyebrow: string;
  title: string;
  accent: string;
};

export function PanelTitle({ number, eyebrow, title, accent }: PanelTitleProps) {
  return (
    <div className="mb-10 grid gap-6 border-t-2 border-neutral-950 pt-6 md:grid-cols-[180px_1fr]">
      <div>
        <p className="font-serif text-6xl italic leading-none" style={{ color: accent }}>
          {number}
        </p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.35em] text-neutral-500">{eyebrow}</p>
      </div>
      <h2 className="font-serif text-4xl leading-tight tracking-[-0.05em] text-neutral-950 md:text-6xl">
        {title}
      </h2>
    </div>
  );
}
