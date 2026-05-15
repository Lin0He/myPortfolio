import { exhibits } from "../data/exhibits";
import type { Page } from "../types/portfolio";
import { AboutPanel } from "./AboutPanel";
import { ResumePanel } from "./ResumePanel";
import { HomePanel } from "./HomePanel";
import { NoteDetailDemo } from "./NoteDetailDemo";
import { NotesPanel } from "./NotesPanel";
import { ProjectDetailDemo } from "./ProjectDetailDemo";
import { ProjectsPanel } from "./ProjectsPanel";

type GalleryPanelProps = {
  page: Page;
  onPageChange: (page: Page) => void;
};

export function GalleryPanel({ page, onPageChange }: GalleryPanelProps) {
  const exhibit = exhibits[page];

  switch (page) {
    case "Home":
      return <HomePanel accent={exhibit.accent} dark={exhibit.dark} />;
    case "Projects":
      return <ProjectsPanel accent={exhibit.accent} onOpenDemo={() => onPageChange("ProjectDemo")} />;
    case "ProjectDemo":
      return <ProjectDetailDemo accent={exhibit.accent} onBack={() => onPageChange("Projects")} />;
    case "Notes":
      return <NotesPanel accent={exhibit.accent} onOpenDemo={() => onPageChange("NoteDemo")} />;
    case "NoteDemo":
      return <NoteDetailDemo accent={exhibit.accent} onBack={() => onPageChange("Notes")} />;
    case "About":
      return <AboutPanel accent={exhibit.accent} dark={exhibit.dark} />;
    case "Resume":
      return <ResumePanel accent={exhibit.accent} dark={exhibit.dark} />;
    default:
      return null;
  }
}
