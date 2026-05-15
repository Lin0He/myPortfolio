import { ArticleAside } from "../components/notes/ArticleAside";
import { PullQuote } from "../components/notes/PullQuote";

type NoteDetailDemoProps = {
  accent: string;
  onBack: () => void;
};

export function NoteDetailDemo({ accent, onBack }: NoteDetailDemoProps) {
  return (
    <section className="relative z-10 h-full overflow-y-auto px-6 pb-16 pt-28 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 border-t-2 border-neutral-950 pt-6 md:grid-cols-[180px_1fr]">
          <div>
            <p className="font-serif text-6xl italic leading-none" style={{ color: accent }}>02.1</p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.35em] text-neutral-500">Research Note</p>
          </div>
          <h1 className="font-serif text-4xl leading-tight tracking-[-0.05em] text-neutral-950 md:text-6xl">
            Why Evaluation Matters More Than Fine-Tuning in Applied LLM Systems
          </h1>
        </div>

        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <ArticleAside accent={accent} onBack={onBack} />

          <article className="border-2 border-neutral-950 bg-[#fbfaf7]/94 p-8 shadow-[14px_14px_0_rgba(0,0,0,0.10)] md:p-12">
            <div className="mx-auto max-w-[760px]">
              <p className="text-[11px] uppercase tracking-[0.36em] text-neutral-500">Abstract</p>
              <p className="mt-6 font-serif text-2xl leading-10 tracking-[-0.03em] text-neutral-950">
                In applied AI systems, fine-tuning can improve behavior, but evaluation determines whether the improvement is trustworthy, repeatable, and useful in production.
              </p>

              <div className="my-10 h-0.5 bg-neutral-950" />

              <h2 className="font-serif text-4xl tracking-[-0.05em] text-neutral-950">1. The adoption bottleneck is not fluency.</h2>
              <p className="mt-6 text-lg leading-9 text-neutral-700">
                Modern language models are already fluent enough to create the appearance of competence. The more difficult question is whether their outputs are technically correct, complete, actionable, safe, and aligned with the intended engineering context.
              </p>
              <p className="mt-6 text-lg leading-9 text-neutral-700">
                This is why evaluation becomes the central layer between model capability and organizational adoption. It turns subjective impressions into comparable evidence.
              </p>

              <PullQuote accent={accent}>
                Evaluation is the instrument panel of an AI system: it does not make the engine stronger, but it tells us whether the machine can be trusted.
              </PullQuote>

              <h2 className="mt-12 font-serif text-4xl tracking-[-0.05em] text-neutral-950">2. A useful framework is multidimensional.</h2>
              <p className="mt-6 text-lg leading-9 text-neutral-700">
                For engineering use cases, quality cannot be reduced to a single score. A practical framework should separate correctness, completeness, actionability, maintainability, safety, and explanation-code alignment.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {[
                  ["02.A", "Correctness", "Does the answer preserve technical truth?"],
                  ["02.B", "Completeness", "Does it cover the operational edge cases?"],
                  ["02.C", "Actionability", "Can an engineer use it immediately?"],
                  ["02.D", "Maintainability", "Will the guidance age safely?"],
                ].map(([num, title, text]) => (
                  <div key={num} className="border border-neutral-950/40 p-5">
                    <p className="text-[10px] uppercase tracking-[0.28em]" style={{ color: accent }}>{num}</p>
                    <h3 className="mt-4 font-serif text-2xl tracking-[-0.04em]">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
