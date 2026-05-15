import { ExhibitShell } from "../components/layout/ExhibitShell";
import { PanelTitle } from "../components/ui/PanelTitle";

type AboutPanelProps = {
  accent: string;
  dark: string;
};

export function AboutPanel({ accent, dark }: AboutPanelProps) {
  return (
    <ExhibitShell>
      <div className="max-h-[calc(100vh-8rem)] overflow-y-auto pr-0 md:pr-4">
        <PanelTitle number="03" eyebrow="Profile Notes" title="A working statement on systems, trust, and engineering taste." accent={accent} />
        <div className="grid gap-8 pb-10 md:grid-cols-[0.85fr_1fr]">
          <div className="border-2 border-neutral-950 bg-[#fbfaf7] p-8 shadow-[14px_14px_0_rgba(0,0,0,0.10)] md:p-10">
            <p className="text-[11px] uppercase tracking-[0.36em] text-neutral-500">03.1 / About the archive</p>
            <h2 className="mt-8 font-serif text-5xl leading-tight tracking-[-0.055em] text-neutral-950 md:text-6xl">
              Machine learning systems, treated as artifacts of trust.
            </h2>
            <div className="mt-10 h-6 w-28" style={{ backgroundColor: accent }} />
          </div>
          <div className="p-8 text-[#fbfaf7] shadow-[14px_14px_0_rgba(108,43,217,0.45)] md:p-10" style={{ backgroundColor: dark }}>
            <p className="text-[11px] uppercase tracking-[0.36em] text-white/55">03.2 / Field notes</p>
            <div className="mt-8 space-y-6 text-base leading-8 text-white/80">
              <p>
                I am an AI/ML Research Engineer based in Amsterdam, working across machine learning systems, backend infrastructure, cloud tooling, and applied AI in cybersecurity and regulated digital services.
              </p>
              <p>
                My current focus is evaluation-driven AI: inference benchmarking, agent reliability, MLOps, data infrastructure, and the practical interface between models and production systems.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6 text-[11px] uppercase tracking-[0.24em] text-white/60">
                <span>03.A / Inference</span>
                <span>03.B / Evaluation</span>
                <span>03.C / MLOps</span>
                <span>03.D / Applied AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ExhibitShell>
  );
}
