import type { ReactNode } from "react";

type TechnicalSectionProps = {
  number: string;
  title: string;
  accent: string;
  children: ReactNode;
};

export function TechnicalSection({ number, title, accent, children }: TechnicalSectionProps) {
  return (
    <section className="border-t-2 border-neutral-950 p-8 md:p-10">
      <div className="grid gap-6 lg:grid-cols-[170px_1fr]">
        <div>
          <p className="font-serif text-5xl italic leading-none tracking-[-0.06em]" style={{ color: accent }}>
            {number}
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-neutral-500">Technical note</p>
        </div>
        <div className="max-w-3xl">
          <h3 className="font-serif text-4xl tracking-[-0.05em] text-neutral-950">{title}</h3>
          <div className="mt-6 space-y-5 text-base leading-8 text-neutral-700">{children}</div>
        </div>
      </div>
    </section>
  );
}
