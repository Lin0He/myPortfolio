import type { CSSProperties, ReactNode } from "react";
import { stampClipPath } from "../../lib/stampClipPath";

type StampFrameProps = {
  children: ReactNode;
  accent: string;
};

export function StampFrame({ children, accent }: StampFrameProps) {
  const frameStyle: CSSProperties = {
    clipPath: stampClipPath,
  };

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px] p-4 md:p-6 xl:max-w-[600px]">
      <div
        style={frameStyle}
        className="absolute inset-0 border-2 border-neutral-950 bg-[#fbfaf7] shadow-[0_44px_110px_rgba(12,12,12,0.20)]"
      />
      <div className="relative flex h-full flex-col border-2 border-neutral-950 bg-[#fbfaf7]/92 px-8 py-9 backdrop-blur-sm md:px-12 md:py-12">
        <div className="absolute right-5 top-5 h-6 w-6" style={{ backgroundColor: accent }} />
        {children}
      </div>
    </div>
  );
}
