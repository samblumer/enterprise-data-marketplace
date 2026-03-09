import clsx from "clsx";

export function QualityBar({ score }: { score: number }) {
  const tone = score >= 90 ? "bg-mint-500" : score >= 80 ? "bg-amber-500" : "bg-slateblue-600";

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs text-ink-600">
        <span>Quality score</span>
        <span className="font-semibold text-ink-900">{score}/100</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-200">
        <div className={clsx("h-full rounded-full", tone)} style={{ width: `${score}%` }} />
      </div>
    </div>
  );
}
