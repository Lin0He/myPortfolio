import { useState } from "react";
import { CurrentExhibit } from "../components/layout/CurrentExhibit";
import { DynamicBackdrop } from "../components/layout/DynamicBackdrop";
import { HorizontalIndex } from "../components/layout/HorizontalIndex";
import { exhibits } from "../data/exhibits";
import { getPageOffset } from "../lib/navigation";
import { GalleryPanel } from "../sections/GalleryPanel";
import { pages, type Page } from "../types/portfolio";

export default function App() {
  const [activePage, setActivePage] = useState<Page>("Home");
  const exhibit = exhibits[activePage];
  const pageOffset = getPageOffset(activePage);

  return (
    <main className="relative h-screen overflow-hidden bg-[#f7f5ef] font-sans text-neutral-950">
      <DynamicBackdrop activePage={activePage} />
      <HorizontalIndex activePage={activePage} onPageChange={setActivePage} />

      <div className="relative z-10 h-full w-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)]"
          style={{ transform: `translateX(-${pageOffset}%)` }}
        >
          {pages.map((page) => (
            <section key={page} className="h-full w-full shrink-0">
              <GalleryPanel page={page} onPageChange={setActivePage} />
            </section>
          ))}
        </div>
      </div>

      <CurrentExhibit exhibit={exhibit} />
    </main>
  );
}
