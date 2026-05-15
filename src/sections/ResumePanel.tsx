import { ExhibitShell } from "../components/layout/ExhibitShell";
import { getResumeUrl } from "../lib/assets";

type ResumePanelProps = {
  accent: string;
  dark: string;
};

export function ResumePanel({ accent, dark }: ResumePanelProps) {
  const resumeUrl = getResumeUrl();

  return (
    <ExhibitShell>
      <div className="max-h-[calc(100vh-8rem)] overflow-y-auto pr-0 md:pr-4">
        <div className="grid gap-8 pb-10 pt-8 md:grid-cols-[1fr_0.7fr]">
          <div className="relative overflow-visible border-2 border-neutral-950 bg-[#fbfaf7] p-8 pt-20 shadow-[14px_14px_0_rgba(0,0,0,0.10)] md:p-12 md:pt-24">
            <div className="absolute left-6 top-0 z-50 -translate-y-1/2 md:left-10">
              <div className="relative shadow-[10px_10px_0_rgba(0,0,0,0.18)]">
                <div
                  className="px-5 py-4 text-[#fbfaf7] md:px-7 md:py-5"
                  style={{
                    backgroundColor: accent,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 58% 100%, 50% 82%, 42% 100%, 0 100%)",
                  }}
                >
                  <span className="block font-serif text-4xl italic leading-none tracking-[-0.05em] md:text-5xl">04</span>
                  <span className="mt-2 block text-[10px] uppercase tracking-[0.32em]">Resume Index</span>
                </div>
                <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-neutral-950" />
                <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[2px] bg-neutral-950" />
                <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[2px] bg-neutral-950" />
              </div>
            </div>

            <p className="text-[11px] uppercase tracking-[0.36em] text-neutral-500">04.1 / Professional title</p>
            <h2 className="mt-8 font-serif text-5xl leading-tight tracking-[-0.055em] text-neutral-950 md:text-7xl">
              Research Engineer, Machine Learning / AI
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-700">
              Focused on evaluation-driven ML systems, inference benchmarking, agent reliability, cloud infrastructure, and applied AI systems in regulated domains.
            </p>
            <div className="mt-8 grid gap-3 border-t-2 border-neutral-950 pt-6 text-[11px] uppercase tracking-[0.24em] text-neutral-600 md:grid-cols-2">
              <span>04.A / ML Systems</span>
              <span>04.B / Cloud Infrastructure</span>
              <span>04.C / Evaluation</span>
              <span>04.D / Applied AI</span>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block border-2 border-neutral-950 px-6 py-4 text-[11px] uppercase tracking-[0.28em] text-white shadow-[8px_8px_0_rgba(0,0,0,0.18)]"
                style={{ backgroundColor: accent }}
              >
                View Resume
              </a>
              <a
                href={resumeUrl}
                download="Lin-He-Resume.pdf"
                className="inline-block border-2 border-neutral-950 bg-[#fbfaf7] px-6 py-4 text-[11px] uppercase tracking-[0.28em] text-neutral-950 shadow-[8px_8px_0_rgba(0,0,0,0.12)]"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="p-8 text-[#fbfaf7] shadow-[14px_14px_0_rgba(224,49,49,0.45)]" style={{ backgroundColor: dark }}>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/55">04.2 / Contact index</p>
            <div className="mt-12 space-y-8 text-2xl font-serif tracking-[-0.04em]">
              <a className="block" href="#">GitHub</a>
              <a className="block" href="#">LinkedIn</a>
              <a className="block" href="#">Email</a>
            </div>
            <div className="mt-12 border-t border-white/20 pt-6 text-[11px] uppercase leading-7 tracking-[0.24em] text-white/55">
              <p>04.X / Amsterdam</p>
              <p>04.Y / Portfolio archive</p>
              <p>04.Z / Open to research engineering roles</p>
            </div>
          </div>
        </div>
      </div>
    </ExhibitShell>
  );
}
