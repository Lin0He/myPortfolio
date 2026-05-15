import type { Exhibit } from "../../types/portfolio";

type CurrentExhibitProps = {
  exhibit: Exhibit;
};

export function CurrentExhibit({ exhibit }: CurrentExhibitProps) {
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-30 hidden items-end gap-4 md:flex">
      <div className="text-right">
        <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">Current Exhibit</p>
        <p className="mt-1 font-serif text-2xl italic tracking-[-0.04em] text-neutral-950">{exhibit.mark}</p>
      </div>
      <div className="h-16 w-16 border-2 border-neutral-950" style={{ backgroundColor: exhibit.accent }} />
    </div>
  );
}
