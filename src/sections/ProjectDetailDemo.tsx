import { CodeFragment } from "../components/project/CodeFragment";
import { ProjectFigure } from "../components/project/ProjectFigure";
import { TechnicalSection } from "../components/project/TechnicalSection";

type ProjectDetailDemoProps = {
  accent: string;
  onBack: () => void;
};

const metrics = [
  ["Latency", "142ms", "p50 single-request inference"],
  ["Throughput", "38.4/s", "tokens per second under batch load"],
  ["VRAM", "11.8GB", "single GPU deployment envelope"],
  ["Quality Drift", "-1.7%", "post-quantization benchmark delta"],
] as const;

export function ProjectDetailDemo({ accent, onBack }: ProjectDetailDemoProps) {
  return (
    <section className="relative z-10 h-full overflow-y-auto px-6 pb-16 pt-28 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 border-t-2 border-neutral-950 pt-6 md:grid-cols-[180px_1fr_auto]">
          <div>
            <p className="font-serif text-6xl italic leading-none" style={{ color: accent }}>01.A</p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.35em] text-neutral-500">Technical Artifact</p>
          </div>
          <h1 className="font-serif text-4xl leading-tight tracking-[-0.05em] text-neutral-950 md:text-6xl">
            Deep Learning Inference & Evaluation Lab
          </h1>
          <button onClick={onBack} className="h-fit border-2 border-neutral-950 bg-[#fbfaf7] px-4 py-3 text-[10px] uppercase tracking-[0.28em] shadow-[6px_6px_0_rgba(0,0,0,0.12)]">
            Back to 01
          </button>
        </div>

        <article className="border-2 border-neutral-950 bg-[#fbfaf7]/94 shadow-[18px_18px_0_rgba(0,0,0,0.10)]">
          <section className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="border-b-2 border-neutral-950 p-8 md:p-10 lg:border-b-0 lg:border-r-2">
              <p className="text-[11px] uppercase tracking-[0.34em] text-neutral-500">01.A.1 / Project Thesis</p>
              <h2 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.055em] text-neutral-950 md:text-6xl">
                Inference is a deployment decision, not just a speed test.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-9 text-neutral-700">
                This project studies how model choice, backend configuration, quantization, context length, and batching strategy reshape the practical deployment frontier.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.24em] text-neutral-600">
                <span className="border border-neutral-950 px-3 py-2">Inference</span>
                <span className="border border-neutral-950 px-3 py-2">Benchmarking</span>
                <span className="border border-neutral-950 px-3 py-2">Quality Drift</span>
                <span className="border border-neutral-950 px-3 py-2">Deployment</span>
              </div>
            </div>

            <div className="bg-[#111318] p-8 text-[#fbfaf7] md:p-10">
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/55">01.A.2 / System Composition</p>
              <div className="mt-8 grid gap-4">
                {['Model Loader', 'Benchmark Runner', 'Metric Store', 'Pareto Report'].map((item, index) => (
                  <div key={item} className="grid grid-cols-[60px_1fr] items-center border border-white/25 bg-white/[0.03] p-4">
                    <span className="font-serif text-3xl italic text-white">0{index + 1}</span>
                    <span className="text-sm uppercase tracking-[0.22em] text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t-2 border-neutral-950 p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
              <ProjectFigure
                label="01.A / Editorial Image"
                title="Context Image"
                src="/demo/context-image.jpg"
                objectPosition="center"
                caption="This shows how a large editorial image can sit inside the project page without breaking the archive style. For a real project, this could become a system screenshot, hardware setup photo, dashboard capture, or visual metaphor."
              />
              <ProjectFigure
                label="01.A / Technical Figure"
                title="Complexity Reference"
                src="/demo/time-complexity.jpeg"
                objectPosition="center"
                caption="This slot is better for technical diagrams, result charts, benchmark curves, architecture figures, or any visual evidence that supports the engineering narrative."
              />
            </div>
          </section>

          <section className="grid border-t-2 border-neutral-950 md:grid-cols-4">
            {metrics.map(([label, value, note], index) => (
              <div key={label} className={`p-6 ${index < metrics.length - 1 ? "border-b-2 border-neutral-950 md:border-b-0 md:border-r-2" : ""}`}>
                <p className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">{label}</p>
                <p className="mt-4 font-serif text-4xl italic tracking-[-0.05em]" style={{ color: accent }}>{value}</p>
                <p className="mt-3 text-xs leading-6 text-neutral-600">{note}</p>
              </div>
            ))}
          </section>

          <TechnicalSection number="01.A.3" title="Experimental design should explain the deployment question before showing numbers." accent={accent}>
            <p>
              A technical project page should read like a structured engineering post, not just a gallery of screenshots. Start with the deployment question, describe the workload assumptions, then show how each experiment answers a specific operational decision.
            </p>
            <p>
              For this inference lab, the core question is not simply which backend is fastest. The useful question is which model/backend/quantization configuration fits a given latency, memory, and quality envelope.
            </p>
          </TechnicalSection>

          <section className="grid border-t-2 border-neutral-950 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b-2 border-neutral-950 p-8 md:p-10 lg:border-b-0 lg:border-r-2">
              <p className="text-[10px] uppercase tracking-[0.32em] text-neutral-500">01.A.4 / Evidence Table</p>
              <table className="mt-6 w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-neutral-950 text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                    <th className="py-3">Backend</th>
                    <th>Batch</th>
                    <th>VRAM</th>
                    <th>Decision</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  {[
                    ["Transformers", "1", "14.2GB", "Baseline"],
                    ["vLLM", "8", "11.8GB", "Preferred"],
                    ["vLLM 4-bit", "8", "7.1GB", "Edge fit"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-neutral-950/20 last:border-b-0">
                      {row.map((cell) => <td key={cell} className="py-4 pr-4">{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.32em] text-neutral-500">01.A.5 / Interpretation</p>
              <h3 className="mt-6 font-serif text-4xl tracking-[-0.05em] text-neutral-950">The useful result is a deployment boundary.</h3>
              <p className="mt-6 text-base leading-8 text-neutral-700">
                The benchmark does not choose a single winner. It defines where each configuration becomes appropriate: baseline correctness, throughput-oriented serving, memory-constrained deployment, or quality-sensitive production use.
              </p>
              <div className="mt-8 grid gap-4 border-t-2 border-neutral-950 pt-6 text-sm leading-7 text-neutral-700">
                <p><b>Trade-off note 01.</b> Quantization improves fit but must be evaluated against task quality.</p>
                <p><b>Trade-off note 02.</b> Throughput improvements can hide p95 latency regressions.</p>
                <p><b>Trade-off note 03.</b> Best deployment choice depends on workload shape, not a single metric.</p>
              </div>
            </div>
          </section>

          <TechnicalSection number="01.A.6" title="Where the technical blog lives inside a project page." accent={accent}>
            <p>
              The project page can include blog-like prose between evidence blocks. This is where you explain assumptions, failure modes, design choices, and what the reader should infer from the charts and tables.
            </p>
            <p>
              Think of it as a Confluence page with stronger typography: narrative section, image, metrics, table, interpretation, code, and final decision. The writing connects the evidence so the page feels continuous rather than fragmented.
            </p>
          </TechnicalSection>

          <section className="border-t-2 border-neutral-950 bg-[#0f1117] p-8 text-[#fbfaf7] md:p-10">
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/55">01.A.7 / Code Fragment</p>
            <CodeFragment />
          </section>
        </article>
      </div>
    </section>
  );
}
