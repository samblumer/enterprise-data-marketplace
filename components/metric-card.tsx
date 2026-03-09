interface MetricCardProps {
  label: string;
  value: string;
  hint: string;
}

export function MetricCard({ label, value, hint }: MetricCardProps) {
  return (
    <div className="panel rise-in rounded-lg p-5">
      <p className="eyebrow">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-ink-900">{value}</p>
      <p className="mt-2 text-sm body-muted">{hint}</p>
    </div>
  );
}
