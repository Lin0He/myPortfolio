import type { Exhibit, Page } from "../types/portfolio";

export const exhibits: Record<Page, Exhibit> = {
  Home: {
    accent: "#0057ff",
    accent2: "#ff4d00",
    dark: "#111318",
    mark: "Opening Gallery",
  },
  Projects: {
    accent: "#ff2d55",
    accent2: "#003cff",
    dark: "#15111b",
    mark: "Selected Work",
  },
  ProjectDemo: {
    accent: "#ff2d55",
    accent2: "#003cff",
    dark: "#15111b",
    mark: "Evidence Room",
  },
  Notes: {
    accent: "#00a676",
    accent2: "#ffb000",
    dark: "#101815",
    mark: "Research Notes",
  },
  NoteDemo: {
    accent: "#00a676",
    accent2: "#ffb000",
    dark: "#101815",
    mark: "Reading Room",
  },
  About: {
    accent: "#6c2bd9",
    accent2: "#ff6b35",
    dark: "#17131f",
    mark: "Profile",
  },
  Resume: {
    accent: "#0b7285",
    accent2: "#e03131",
    dark: "#101417",
    mark: "Resume",
  },
};
