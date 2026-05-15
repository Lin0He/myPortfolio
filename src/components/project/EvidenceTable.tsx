const rows = [
  ["Transformers FP16", "1.00x", "baseline", "16.2GB", "0.0"],
  ["vLLM FP16", "2.34x", "+78%", "15.7GB", "0.0"],
  ["vLLM 4-bit", "3.11x", "+126%", "8.9GB", "minor"],
];

export function EvidenceTable() {
  return (
    <div className="overflow-hidden border-2 border-neutral-950 bg-[#fbfaf7] shadow-[10px_10px_0_rgba(0,0,0,0.10)]">
      <div className="grid grid-cols-5 border-b-2 border-neutral-950 bg-neutral-950 px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-[#fbfaf7]">
        <span>Backend</span>
        <span>Latency</span>
        <span>Throughput</span>
        <span>VRAM</span>
        <span>Drift</span>
      </div>
      {rows.map((row) => (
        <div key={row[0]} className="grid grid-cols-5 border-b border-neutral-950/25 px-4 py-4 text-xs text-neutral-700 last:border-b-0">
          {row.map((cell) => (
            <span key={cell}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
