import { useMemo } from "react";
import { exhibits } from "../../data/exhibits";
import type { Page } from "../../types/portfolio";

type DynamicBackdropProps = {
  activePage: Page;
};

export function DynamicBackdrop({ activePage }: DynamicBackdropProps) {
  const exhibit = exhibits[activePage];

  const geometry = useMemo(() => {
    switch (activePage) {
      case "Home":
        return (
          <>
            <div className="absolute left-[8%] top-[24%] h-[2px] w-[45%] bg-black/42" />
            <div className="absolute left-[12%] top-[30%] h-[2px] w-[34%] bg-black/32" />
            <div className="absolute bottom-[14%] left-[25%] h-[2px] w-[58%] -rotate-[38deg] bg-black/36" />
            <div className="absolute right-[10%] top-[34%] h-44 w-44 border-2 border-black/32" />
          </>
        );
      case "Projects":
      case "ProjectDemo":
        return (
          <>
            <div className="absolute left-[7%] top-[18%] h-[66%] w-[2px] bg-black/38" />
            <div className="absolute left-[18%] top-[14%] h-[76%] w-[2px] bg-black/30" />
            <div className="absolute left-[4%] top-[68%] h-[2px] w-[84%] bg-black/38" />
            <div className="absolute right-[12%] top-[22%] h-44 w-44 border-2 border-black/38" />
            <div className="absolute right-[23%] bottom-[13%] h-24 w-24 rotate-45 border-2 border-black/28" />
          </>
        );
      case "Notes":
      case "NoteDemo":
        return (
          <>
            <div className="absolute left-[6%] top-[18%] h-[2px] w-[48%] -rotate-[13deg] bg-black/38" />
            <div className="absolute left-[9%] top-[25%] h-[2px] w-[40%] -rotate-[13deg] bg-black/30" />
            <div className="absolute left-[7%] top-[32%] h-[2px] w-[45%] -rotate-[13deg] bg-black/30" />
            <div className="absolute bottom-[20%] right-[12%] h-56 w-[2px] rotate-[24deg] bg-black/42" />
            <div className="absolute left-[13%] bottom-[16%] h-28 w-52 border-2 border-black/28" />
          </>
        );
      case "About":
        return (
          <>
            <div className="absolute right-[18%] top-[16%] h-[68%] w-[2px] bg-black/38" />
            <div className="absolute right-[8%] top-[24%] h-[50%] w-[2px] bg-black/30" />
            <div className="absolute left-[16%] top-[18%] h-56 w-56 rotate-45 border-2 border-black/35" />
            <div className="absolute bottom-[15%] left-[8%] h-[2px] w-[44%] bg-black/38" />
            <div className="absolute right-[30%] bottom-[18%] h-20 w-40 border-2 border-black/26" />
          </>
        );
      case "Resume":
        return (
          <>
            <div className="absolute left-[13%] top-[18%] h-[65%] w-[38%] border-2 border-black/35" />
            <div className="absolute left-[18%] top-[25%] h-[2px] w-[62%] bg-black/38" />
            <div className="absolute left-[18%] top-[38%] h-[2px] w-[56%] bg-black/30" />
            <div className="absolute left-[18%] top-[51%] h-[2px] w-[64%] bg-black/30" />
            <div className="absolute right-[10%] top-[58%] h-32 w-32 border-2 border-black/30" />
          </>
        );
      default:
        return null;
    }
  }, [activePage]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden bg-[#f7f5ef] transition-colors duration-700">
      <div className="absolute inset-0 opacity-80 [background-image:radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.96),transparent_26%),radial-gradient(circle_at_72%_70%,rgba(220,220,210,0.52),transparent_34%),linear-gradient(135deg,rgba(255,255,255,.45)_0%,transparent_45%)]" />
      <div
        className="absolute right-[8%] top-[18%] h-[34rem] w-[34rem] rounded-full blur-3xl transition-all duration-700"
        style={{ backgroundColor: exhibit.accent, opacity: 0.16 }}
      />
      <div
        className="absolute bottom-[8%] left-[5%] h-[22rem] w-[22rem] blur-2xl transition-all duration-700"
        style={{ backgroundColor: exhibit.accent2, opacity: 0.18 }}
      />
      <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(20,20,20,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,.55)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div key={activePage} className="absolute inset-0 animate-[fadeIn_700ms_ease-out]">
        {geometry}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.42),transparent_22%,transparent_78%,rgba(255,255,255,.34))]" />
    </div>
  );
}
