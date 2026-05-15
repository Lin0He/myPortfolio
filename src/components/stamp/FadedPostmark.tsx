type FadedPostmarkProps = {
  accent: string;
};

export function FadedPostmark({ accent }: FadedPostmarkProps) {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 z-20 -translate-x-[24%] translate-y-[22%] opacity-55 mix-blend-multiply">
      <div className="relative h-28 w-28 md:h-32 md:w-32">
        <div
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: accent,
            boxShadow: "4px 4px 18px rgba(0,87,255,0.10)",
          }}
        />
        <div className="absolute inset-[13%] rounded-full border" style={{ borderColor: accent, opacity: 0.68 }} />
        <div
          className="absolute left-1/2 top-1/2 h-[2px] w-40 -translate-x-[68%] -translate-y-1/2 rotate-[16deg] md:w-48"
          style={{ backgroundColor: accent, opacity: 0.56 }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[2px] w-40 -translate-x-[68%] translate-y-2 rotate-[16deg] md:w-48"
          style={{ backgroundColor: accent, opacity: 0.38 }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[2px] w-40 -translate-x-[68%] translate-y-4 rotate-[16deg] md:w-48"
          style={{ backgroundColor: accent, opacity: 0.28 }}
        />
        <div className="absolute inset-0 grid place-items-center">
          <span
            className="font-serif text-5xl italic leading-none tracking-[-0.08em] md:text-6xl"
            style={{
              color: accent,
              textShadow: "3px 3px 10px rgba(0,87,255,0.12), -1px -1px 0 rgba(255,255,255,0.42)",
            }}
          >
            00
          </span>
        </div>
        <span
          className="absolute left-1/2 top-3 -translate-x-1/2 whitespace-nowrap text-[7px] uppercase tracking-[0.22em]"
          style={{ color: accent, opacity: 0.78 }}
        >
          Exhibit
        </span>
        <span
          className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[7px] uppercase tracking-[0.18em]"
          style={{ color: accent, opacity: 0.78 }}
        >
          Opening Question
        </span>
      </div>
    </div>
  );
}
