import { ExhibitShell } from "../components/layout/ExhibitShell";
import { PanelTitle } from "../components/ui/PanelTitle";
import { projects } from "../data/content";

type ProjectsPanelProps = {
  accent: string;
  onOpenDemo: () => void;
};

export function ProjectsPanel({ accent, onOpenDemo }: ProjectsPanelProps) {
  return (
    <ExhibitShell>
      <div className="max-h-[calc(100vh-8rem)] overflow-y-auto pr-0 md:pr-4">
        <PanelTitle number="01" eyebrow="Selected Work" title="Technical projects presented as research artifacts." accent={accent} />

        <div className="mb-5 grid gap-5 border-2 border-neutral-950 bg-[#fbfaf7]/88 p-6 shadow-[10px_10px_0_rgba(0,0,0,0.10)] md:grid-cols-[1fr_220px] md:p-7">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-500">01.A / Detail Demo</p>
            <h3 className="mt-3 font-serif text-3xl tracking-[-0.04em] text-neutral-950 md:text-4xl">Open the evidence-room project page</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-700">
              A project detail layout for benchmarks, figures, architecture notes, tables, code fragments, and engineering trade-offs.
            </p>
          </div>
          <button
            onClick={onOpenDemo}
            className="self-end border-2 border-neutral-950 px-5 py-4 text-[11px] uppercase tracking-[0.28em] text-white shadow-[8px_8px_0_rgba(0,0,0,0.18)]"
            style={{ backgroundColor: accent }}
          >
            Enter 01.A
          </button>
        </div>

        <div className="grid gap-5 pb-10">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group grid gap-6 border-2 border-neutral-950 bg-[#fbfaf7]/88 p-6 shadow-[10px_10px_0_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-1 md:grid-cols-[120px_1fr_260px] md:p-8"
            >
              <div className="flex items-start justify-between md:block">
                <span className="font-serif text-6xl italic" style={{ color: accent }}>
                  {project.index}
                </span>
                <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-neutral-500">{project.type}</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl tracking-[-0.04em] text-neutral-950 md:text-4xl">{project.title}</h3>
                <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-700">{project.description}</p>
              </div>
              <div className="flex flex-col justify-between border-t-2 border-neutral-950 pt-4 md:border-l-2 md:border-t-0 md:pl-6 md:pt-0">
                <p className="text-xs leading-6 text-neutral-600">{project.stack}</p>
                <button onClick={onOpenDemo} className="mt-6 text-left text-[11px] uppercase tracking-[0.28em] text-neutral-950 underline decoration-neutral-950/40 underline-offset-4">
                  View artifact
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ExhibitShell>
  );
}
