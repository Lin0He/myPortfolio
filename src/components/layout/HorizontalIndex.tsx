import { mainPageForPage, pageIndex } from "../../data/pages";
import { mainPages, type MainPage, type Page } from "../../types/portfolio";

type HorizontalIndexProps = {
  activePage: Page;
  onPageChange: (page: Page) => void;
};

export function HorizontalIndex({ activePage, onPageChange }: HorizontalIndexProps) {
  const activeMainPage = mainPageForPage[activePage];

  const handleMainPageClick = (page: MainPage) => {
    onPageChange(page);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-black/15 bg-[#f7f5ef]/80 px-5 py-4 backdrop-blur-xl md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <button className="group text-left" onClick={() => onPageChange("Home")}>
          <p className="text-[10px] uppercase tracking-[0.38em] text-neutral-500">Lin He</p>
          <p className="font-serif text-xl tracking-[-0.04em] text-neutral-950">AI / ML Archive</p>
        </button>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Portfolio sections">
          {mainPages.map((page) => {
            const isActive = page === activeMainPage;
            const buttonClass = isActive
              ? "border-neutral-950 bg-neutral-950 text-[#f7f5ef]"
              : "border-black/15 bg-[#f7f5ef]/60 text-neutral-600 hover:border-neutral-950 hover:text-neutral-950";

            return (
              <button
                key={page}
                onClick={() => handleMainPageClick(page)}
                className={`group relative flex items-center gap-3 border px-4 py-2 text-[10px] uppercase tracking-[0.28em] transition duration-300 ${buttonClass}`}
              >
                <span className="font-serif text-sm italic tracking-normal">{pageIndex[page]}</span>
                <span>{page}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:hidden" aria-label="Mobile section navigation">
          {mainPages.map((page) => {
            const dotClass = page === activeMainPage ? "bg-neutral-950" : "bg-neutral-300";
            return (
              <button
                key={page}
                aria-label={page}
                onClick={() => handleMainPageClick(page)}
                className={`h-2.5 w-2.5 rounded-full transition ${dotClass}`}
              />
            );
          })}
        </div>
      </div>
    </header>
  );
}
