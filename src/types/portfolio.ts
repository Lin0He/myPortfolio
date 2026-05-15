export const pages = ["Home", "Projects", "ProjectDemo", "Notes", "NoteDemo", "About", "Resume"] as const;

export const mainPages = ["Home", "Projects", "Notes", "About", "Resume"] as const;

export type Page = (typeof pages)[number];
export type MainPage = (typeof mainPages)[number];

export type Exhibit = {
  accent: string;
  accent2: string;
  dark: string;
  mark: string;
};

export type Project = {
  index: string;
  type: string;
  title: string;
  description: string;
  stack: string;
};

export type Note = {
  date: string;
  title: string;
  tag: string;
};
