import { ExhibitShell } from "../components/layout/ExhibitShell";
import { PanelTitle } from "../components/ui/PanelTitle";
import { notes } from "../data/content";

type NotesPanelProps = {
  accent: string;
  onOpenDemo: () => void;
};

export function NotesPanel({ accent, onOpenDemo }: NotesPanelProps) {
  return (
    <ExhibitShell>
      <div className="max-h-[calc(100vh-8rem)] overflow-y-auto pr-0 md:pr-4">
        <PanelTitle number="02" eyebrow="Research Notes" title="Essays arranged like an archive table." accent={accent} />
        <div className="border-2 border-neutral-950 bg-[#fbfaf7]/88 shadow-[14px_14px_0_rgba(0,0,0,0.10)]">
          {notes.map((note, index) => {
            const noteColor = index === 1 ? accent : "#525252";

            return (
              <button
                key={note.title}
                onClick={onOpenDemo}
                className="grid w-full gap-4 border-b-2 border-neutral-950 px-6 py-8 text-left transition last:border-b-0 hover:bg-white md:grid-cols-[150px_1fr_160px]"
              >
                <span className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">{note.date}</span>
                <span className="font-serif text-2xl tracking-[-0.035em] text-neutral-950 md:text-3xl">{note.title}</span>
                <span className="text-left text-[11px] uppercase tracking-[0.28em] md:text-right" style={{ color: noteColor }}>
                  {note.tag}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </ExhibitShell>
  );
}
