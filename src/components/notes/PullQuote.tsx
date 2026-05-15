import type { ReactNode } from "react";

type PullQuoteProps = {
  children: ReactNode;
  accent: string;
};

export function PullQuote({ children, accent }: PullQuoteProps) {
  return (
    <blockquote
      className="my-10 border-l-4 bg-[#fbfaf7]/80 px-6 py-5 font-serif text-2xl italic leading-10 tracking-[-0.03em] text-neutral-950 shadow-[8px_8px_0_rgba(0,166,118,0.18)]"
      style={{ borderColor: accent }}
    >
      {children}
    </blockquote>
  );
}
