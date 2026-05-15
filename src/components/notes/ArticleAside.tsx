type ArticleAsideProps = {
  accent: string;
  onBack?: () => void;
};

export function ArticleAside({ accent, onBack }: ArticleAsideProps) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
      {onBack ? (
        <button
          onClick={onBack}
          className="w-full border-2 border-neutral-950 bg-[#fbfaf7]/88 px-4 py-3 text-left text-[10px] uppercase tracking-[0.28em] shadow-[6px_6px_0_rgba(0,0,0,0.10)]"
        >
          Back to 02
        </button>
      ) : null}

      <div className="border-2 border-neutral-950 bg-[#fbfaf7]/88 p-5 shadow-[8px_8px_0_rgba(0,0,0,0.10)]">
        <p className="text-[10px] uppercase tracking-[0.32em] text-neutral-500">02.1 / Metadata</p>
        <div className="mt-6 space-y-4 text-sm leading-7 text-neutral-700">
          <p><b>Date</b><br />May 2026</p>
          <p><b>Topic</b><br />LLM Evaluation</p>
          <p><b>Mode</b><br />Academic field note</p>
        </div>
      </div>

      <div className="border-2 border-neutral-950 bg-[#101815] p-5 text-[#fbfaf7] shadow-[8px_8px_0_rgba(0,166,118,0.35)]">
        <p className="text-[10px] uppercase tracking-[0.32em] text-white/55">Table of Contents</p>
        <ol className="mt-6 space-y-4 text-sm leading-7 text-white/75">
          <li>1. Adoption bottleneck</li>
          <li>2. Multidimensional quality</li>
          <li>3. Production trust</li>
          <li>4. Closing notes</li>
        </ol>
      </div>

      <div className="border-2 border-neutral-950 bg-[#fbfaf7]/88 p-5 shadow-[8px_8px_0_rgba(0,0,0,0.10)]">
        <p className="text-[10px] uppercase tracking-[0.32em] text-neutral-500">Margin Note</p>
        <p className="mt-5 text-sm leading-7 text-neutral-700">
          Notes pages should be quieter than project pages: more rhythm, fewer blocks, stronger typography, and a narrower reading measure.
        </p>
        <div className="mt-6 h-3 w-20" style={{ backgroundColor: accent }} />
      </div>
    </aside>
  );
}
