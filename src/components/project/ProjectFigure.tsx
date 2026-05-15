type ProjectFigureProps = {
  label: string;
  title: string;
  caption: string;
  src?: string;
  objectPosition?: string;
};

export function ProjectFigure({
  label,
  title,
  caption,
  src,
  objectPosition = "center",
}: ProjectFigureProps) {
  return (
    <figure className="border-2 border-neutral-950 bg-[#f7f5ef] shadow-[12px_12px_0_rgba(0,87,255,0.20)]">
      <div className="relative min-h-[360px] overflow-hidden bg-[#111318]">
        {src ? (
          <img
            src={src}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition }}
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.24)_1px,transparent_1px)] [background-size:36px_36px]" />
            <div className="absolute left-8 top-8 h-24 w-24 border-2 border-white/40" />
            <div className="absolute right-10 top-10 h-40 w-40 rotate-45 border-2 border-[#0057ff]/70" />
            <div className="absolute bottom-10 left-10 h-28 w-[70%] border-2 border-[#ff2d55]/70 bg-white/[0.03]" />
            <div className="absolute bottom-16 left-16 right-20 h-[2px] bg-white/50" />
            <div className="absolute bottom-24 left-16 right-36 h-[2px] bg-[#0057ff]/70" />
            <div className="absolute bottom-32 left-16 right-52 h-[2px] bg-[#ff2d55]/70" />
          </>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.50),rgba(0,0,0,0.12)_45%,rgba(0,0,0,0.22))]" />
        <div className="absolute left-6 top-6 border border-white/30 bg-black/30 px-5 py-3 backdrop-blur-sm">
          <p className="text-[10px] uppercase tracking-[0.34em] text-white/55">{label}</p>
          <p className="mt-2 font-serif text-3xl italic tracking-[-0.04em] text-white">{title}</p>
        </div>
      </div>
      <figcaption className="grid gap-3 border-t-2 border-neutral-950 p-5 md:grid-cols-[160px_1fr]">
        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Figure</p>
        <p className="text-sm leading-7 text-neutral-700">{caption}</p>
      </figcaption>
    </figure>
  );
}
