export function CodeFragment() {
  return (
    <pre className="mt-5 overflow-x-auto text-sm leading-7 text-white/80">
      <code>{`runner = BenchmarkRunner(
    backend="vllm",
    model="mistral-7b",
    quantization="awq",
    batch_sizes=[1, 4, 8, 16],
)
report = runner.evaluate(metrics=["latency", "throughput", "vram", "quality_drift"])`}</code>
    </pre>
  );
}
