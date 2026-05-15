type MetricCardProps = {
  label: string;
  value: string;
  note: string;
  accent: string;
};

export function MetricCard({ label, value, note, accent }: MetricCardProps) {
  return (
    <div className="border-2 border-neutral-950 bg-[#fbfaf7] p-5 shadow-[8px_8px_0_rgba(0,0,0,0.10)]">
      <p className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">{label}</p>
      <p className="mt-4 font-serif text-4xl italic tracking-[-0.05em]" style={{ color: accent }}>
        {value}
      </p>
      <p className="mt-3 text-xs leading-6 text-neutral-600">{note}</p>
    </div>
  );
}
