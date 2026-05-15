import { FadedPostmark } from "../components/stamp/FadedPostmark";
import { StampFrame } from "../components/stamp/StampFrame";

type HomePanelProps = {
  accent: string;
  dark: string;
};

export function HomePanel({ accent, dark }: HomePanelProps) {
  const tags = ["Inference", "Evaluation", "MLOps", "Applied AI"];

  return (
    <div className="grid h-full w-full items-center px-6 pt-24 md:px-16 md:pt-20">
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[0.95fr_0.9fr] xl:max-w-7xl xl:gap-16">
        <div className="relative">
          <div className="mb-8 inline-flex border-2 border-neutral-950 bg-[#fbfaf7] px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-neutral-700 shadow-[8px_8px_0_rgba(0,0,0,0.13)]">
            Lin He / Research Engineer
          </div>
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.92] tracking-[-0.065em] text-neutral-950 md:text-8xl">
            A digital archive for reliable AI systems.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
            I build evaluation-driven machine learning systems across inference, agent reliability, MLOps, and applied AI infrastructure for high-stakes domains.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.24em]">
            {tags.map((tag) => (
              <span key={tag} className="border border-neutral-950 bg-[#fbfaf7] px-3 py-2 text-neutral-700">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <StampFrame accent={accent}>
          <FadedPostmark accent={accent} />
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">Exhibit 00 / Opening Question</p>
          <div className="my-8 h-0.5 bg-neutral-950 md:my-9" />
          <h2 className="font-serif text-5xl italic leading-none tracking-[-0.065em] text-neutral-950 md:text-7xl xl:text-8xl">
            What is reliable AI?
          </h2>
          <p className="mt-8 max-w-md text-sm leading-7 text-neutral-700 md:mt-9">
            Reliability begins where model behavior, system constraints, and evaluation standards meet.
          </p>
          <div className="mt-auto flex items-center justify-between border-t-2 border-neutral-950 pt-4 text-[10px] uppercase tracking-[0.24em] text-neutral-600">
            <span>Portfolio</span>
            <span>Inference / Evaluation</span>
          </div>
        </StampFrame>

        <div
          className="absolute -bottom-24 hidden h-32 w-32 p-4 text-[#fbfaf7] shadow-[18px_18px_0_rgba(0,87,255,0.70)] md:-left-[8vw] md:block xl:-left-[10vw] 2xl:-left-[12vw]"
          style={{ backgroundColor: dark }}
        >
          <div className="text-[10px] uppercase tracking-[0.35em] text-white/60">AMS</div>
          <div className="mt-8 text-3xl font-light leading-none">2026</div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.24em]">AI / ML Archive</div>
        </div>
      </div>
    </div>
  );
}
