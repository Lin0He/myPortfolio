type AboutPanelProps = {
  accent: string;
  dark: string;
};

const personalFacts = [
  ["Based in", "Amsterdam, NL"],
  ["Role", "AI/ML Research Engineer"],
];

const interests = [
  "Quiet builder",
  "Gym",
  "Tennis",
  "Green living",
  "Museums",
  "Technical writing",
];

const careerAreas = [
  {
    index: "03.A",
    title: "Inference & Optimization",
    text: "Benchmarking latency, throughput, memory usage, quantization drift, and deployment trade-offs to make AI systems faster and more efficient.",
  },
  {
    index: "03.B",
    title: "Evaluation",
    text: "Designing practical evaluation frameworks for LLMs, agents, vision models, and applied ML systems.",
  },
  {
    index: "03.C",
    title: "Problem Framing",
    text: "Reframing messy technical problems into learnable, efficient, and measurable ML formulations through representation design and careful abstraction.",
  },
  {
    index: "03.D",
    title: "Applied AI Systems",
    text: "Adapting SOTA models into reliable, evaluable, and user-facing systems for regulated domains, high-stakes workflows, and real production environments.",
  },
];

export function AboutPanel({ accent, dark }: AboutPanelProps) {
  return (
    <div className="h-full w-full overflow-y-auto px-6 pb-16 pt-28 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 border-t-2 border-neutral-950 pt-6 md:grid-cols-[180px_1fr]">
          <div>
            <p
              className="font-serif text-6xl italic leading-none"
              style={{ color: accent }}
            >
              03
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
              Profile Notes
            </p>
          </div>

          <h1 className="font-serif text-4xl leading-tight tracking-[-0.05em] text-neutral-950 md:text-6xl">
            A working statement on systems, trust, and engineering taste.
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1fr]">
          {/* LEFT: keep original white card style */}
          <section className="border-2 border-neutral-950 bg-[#fbfaf7] p-8 shadow-[14px_14px_0_rgba(0,0,0,0.10)] md:p-10">
            <p className="text-[11px] uppercase tracking-[0.36em] text-neutral-500">
              03.1 / About the archive
            </p>

            <h2 className="mt-8 font-serif text-5xl leading-tight tracking-[-0.055em] text-neutral-950 md:text-6xl">
              Machine learning systems, treated as artifacts of trust.
            </h2>

            <div className="mt-10 h-6 w-28" style={{ backgroundColor: accent }} />
          </section>

         {/* RIGHT: black profile card */}
          <section
            className="p-8 text-[#fbfaf7] shadow-[14px_14px_0_rgba(108,43,217,0.45)] md:p-10"
            style={{ backgroundColor: dark }}
          >
            <p className="text-[11px] uppercase tracking-[0.36em] text-white/55">
              03.2 / Portrait Index
            </p>

            <div className="mt-6 grid items-end gap-5 border-b border-white/20 pb-7 md:grid-cols-[92px_1fr]">
              <div className="grid h-24 w-24 place-items-center border-2 border-white/25 bg-white/[0.04] text-5xl shadow-[8px_8px_0_rgba(108,43,217,0.38)]">
                <span aria-hidden="true">🤗</span>
              </div>

              <div className="text-right">
                <h2 className="font-serif text-5xl leading-none tracking-[-0.055em] text-[#fbfaf7]">
                  Lin He
                </h2>

                <div className="mt-4 grid gap-2 text-sm leading-6 text-white/72">
                  {personalFacts.map(([label, value]) => (
                    <div key={label}>
                      <p className="text-[9px] uppercase tracking-[0.24em] text-white/42">
                        {label}
                      </p>
                      <p>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7">
              <p className="text-[11px] uppercase tracking-[0.36em] text-white/55">
                03.2.B / Field notes
              </p>

              <div className="mt-5 space-y-4 text-base leading-8 text-white/78">
                <p>
                  I am quiet, focused, and more drawn to building things carefully
                  than chasing noise. I like systems that can be inspected,
                  evaluated, and trusted.
                </p>

                <p>
                  Outside work, I like staying active, going to the gym, playing
                  tennis, visiting calm spaces, and keeping a green, low-waste
                  lifestyle.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="border border-white/25 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/66"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* BOTTOM: career-focused full-width strip */}
        <section className="mt-8 border-2 border-neutral-950 bg-[#fbfaf7]/92 shadow-[14px_14px_0_rgba(0,0,0,0.10)]">
          <div className="grid border-b-2 border-neutral-950 p-6 md:grid-cols-[180px_1fr] md:p-8">
            <div>
              <p
                className="font-serif text-5xl italic leading-none"
                style={{ color: accent }}
              >
                03.3
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                Career Focus
              </p>
            </div>

            <h2 className="mt-6 font-serif text-4xl tracking-[-0.05em] text-neutral-950 md:mt-0">
              The technical direction I am building toward.
            </h2>
          </div>

          <div className="grid md:grid-cols-4">
            {careerAreas.map((area, index) => (
              <div
                key={area.index}
                className={`p-6 ${
                  index < careerAreas.length - 1
                    ? "border-b-2 border-neutral-950 md:border-b-0 md:border-r-2"
                    : ""
                }`}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.28em]"
                  style={{ color: accent }}
                >
                  {area.index}
                </p>

                <h3 className="mt-4 font-serif text-3xl tracking-[-0.04em] text-neutral-950">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {area.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}