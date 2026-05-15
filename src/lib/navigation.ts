import { pages, type MainPage, type Page } from "../types/portfolio";

export function getPageOffset(page: Page): number {
  return pages.indexOf(page) * 100;
}

export function getMainPageOffset(page: MainPage): number {
  return getPageOffset(page);
}
