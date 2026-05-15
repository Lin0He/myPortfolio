import type { MainPage, Page } from "../types/portfolio";

export const pageIndex: Record<MainPage, string> = {
  Home: "00",
  Projects: "01",
  Notes: "02",
  About: "03",
  Resume: "04",
};

export const pageDisplayLabel: Record<MainPage, string> = {
  Home: "Home",
  Projects: "Projects",
  Notes: "Notes",
  About: "About",
  Resume: "Resume",
};

export const mainPageForPage: Record<Page, MainPage> = {
  Home: "Home",
  Projects: "Projects",
  ProjectDemo: "Projects",
  Notes: "Notes",
  NoteDemo: "Notes",
  About: "About",
  Resume: "Resume",
};
